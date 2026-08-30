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
| The Proper of Time | |

The rite-neutral date arithmetic sits one layer down, in
[`@internal/calendar-dates`](../proper-of-time).

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
