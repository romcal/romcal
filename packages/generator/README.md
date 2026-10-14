# @internal/generator

The calendar engine shared by every Roman Rite: the contracts a calendar is written
against, the pipeline that turns definitions into a year, and the Proper of Time.

Internal to the romcal monorepo; not published on its own. It reaches users inside a
rite's bundles.

## Scope

A rite supplies data and rules. This package supplies everything else, and names no
rite in particular.

| In scope | Stays with the rite |
| --- | --- |
| `CalendarDef` and the date-definition types a calendar is written against | The calendars themselves (`calendars/`) |
| `RomcalConfig`, `LiturgicalDayConfig`, `Calendar`, `LiturgicalDayDef`, `LiturgicalDay` | The locales (`locales/`) and the martyrology catalogue (`catalog/`) |
| `Precedences`, `Ranks`, `Commons`, `Colors`, `Seasons`, `Periods`, `Months`, `Weekdays` | `CALENDAR_IDS` and `LOCALE_IDS`, which enumerate what the rite happens to ship |
| The cycle framework: proper, Sunday, weekday and psalter cycles | The `Romcal` entry class, which wires this engine to the rite's data |
| `ProperOfTime` class + `registerRite` / `registerBaseCalendar` | `Roman1969Rite`, `Unly1969Rubrics`, base calendar, and what they register |

The rite-neutral date arithmetic sits one layer down, in
[`@internal/calendar-dates`](../calendar-dates).

## The base calendar

The engine has to put some calendar underneath a particular one when no localized
bundle is supplied. Which calendar that is belongs to the rite, so the rite registers
it as it loads:

```ts
import { registerBaseCalendar } from '@internal/generator';
import { GeneralRoman } from './calendars/general-roman';

registerBaseCalendar(GeneralRoman);
```

`RomcalConfig` then asks for it by role. Constructing a config before any rite has
registered one throws, rather than silently producing a calendar with nothing in it.

## The rubrics

The engine knows that some days outrank others; which ones, and what happens to the
days that lose, is the rite's `Rubrics` object:

- `precedences` lists the precedence values most important first; the engine compares
  two days by their position in it;
- `precedenceFirst` says how that list is read. When true (1969), two days of different
  ranks are compared by precedence, and a day allowing similar rank items comes first
  only against a day of the same rank. When false (1962), a day allowing similar rank
  items comes first whatever its precedence, as the engine did before the option existed;
- `resolveOccurrences` receives the days of one date, already sorted, and returns the
  days kept on it (`onDate`, winner first) and the days it moves to other dates
  (`transfers`).

To find a date to transfer a day to, `resolveOccurrences` also receives `dayOn`, which
gives the day that holds any other date of the year at that point: the first kept day of
a date already resolved, the first day in the order of precedence of a later one, or
`undefined` outside the generated range.

The engine then:

- adds a transferred day to the days of its destination, before or after the date being
  resolved, and resolves that date again when it was resolved already, so the same policy
  decides whether the day wins there, stays as an optional, or moves on again;
- builds the day again on its destination, so it carries that date and its calendar
  metadata;
- drops a day transferred outside the generated range;
- throws when a transfer targets the date it comes from, or when a day keeps being sent
  back and forth.

## Build

The repository sets `importHelpers`, which the rite gets away with because its release
build only emits declarations and esbuild supplies its own helpers. This package emits
JavaScript that ends up inside the published bundles, so it turns `importHelpers` off
and inlines them instead of adding a `tslib` dependency to every consumer.

`main` points at TypeScript source while `types` points into `dist`, here and in the
other internal packages. Every tool in this repository already reaches the sources
directly, through the tsconfig paths or Jest's `moduleNameMapper`, so the entry point
only matters to plain Node — which is how the commitlint config loads the rite's
calendar ids, before anything has been built. TypeScript is the one consumer that must
not see the sources: it would pull them into whichever program imported them and fail
that program's `rootDir`, so it gets the declarations instead.
