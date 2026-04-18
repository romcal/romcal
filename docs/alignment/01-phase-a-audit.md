# Phase A — Symbol-level audit

Read-only inventory of every public symbol exposed by each rite's
`src/index.ts`, paired against its counterpart (or lack thereof) in
the other rite, with a concrete alignment verdict.

**Baseline files:**

- `rites/roman1969/src/index.ts` (492 lines, single `Romcal` class + 58 re-exports)
- `rites/roman1962/src/index.ts` (96 lines, functional exports + `Romcal1962`)

**Calendar counts:**

- 1969: 57 `CalendarDef` subclasses under `src/calendars/{countries,regions,communities,general-roman}/`
- 1962: 9 `CalendarOverlay1962` values under `src/calendars/{countries/switzerland,regions/europe}/`

Both rites import from:

- `@internal/easter` (shared Easter math)
- `@internal/config` (shared package.json read + workspace helpers)
- `@internal/package.json` (shared version string, 1969 only)

## 1. Top-level subtree map

| 1969 path                        | 1962 path                                                                         | Same role?                                    |
| -------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------- |
| `models/`                        | — (split into files at `src/` root: `romcal-1962.ts`, `romcal-1962-config.ts`, …) | ~                                             |
| `models/calendar-def.ts`         | `calendars/types.ts` + `calendars/apply.ts`                                       | yes (class vs data)                           |
| `models/calendar.ts` (441 lines) | `calendar-year/build.ts`                                                          | yes (class vs function)                       |
| `models/config.ts`               | `romcal-1962-config.ts`                                                           | yes                                           |
| `models/liturgical-day.ts`       | `rubrics/types.ts` + `types/liturgical-day-1962.ts`                               | yes (class vs interface)                      |
| `models/liturgical-day-def.ts`   | `sanctoral/types.ts`, `proper-of-time/types.ts`                                   | yes (class vs interfaces)                     |
| `models/bundle.ts`               | `bundles/types.ts`                                                                | yes                                           |
| `proper-of-time.ts` (monolith)   | `proper-of-time/{anchors,resolver,types,index}.ts`                                | yes (mono vs modular)                         |
| `calendars/`                     | `calendars/`                                                                      | yes (class tree vs data tree)                 |
| `constants/`                     | `constants/`                                                                      | partial overlap (see §3)                      |
| `locales/`                       | `locales/`                                                                        | yes                                           |
| `types/`                         | `types/`                                                                          | yes                                           |
| `utils/`                         | — (utilities live inline, e.g. `yearOf` in `romcal-1962.ts`)                      | —                                             |
| —                                | `sanctoral/`                                                                      | **1962-only**: static JSON + merge resolver   |
| —                                | `propers/`                                                                        | **1962-only**: Mass-text block attachment     |
| —                                | `rubrics/`                                                                        | **1962-only**: commemoration cap + occurrence |
| —                                | `i18n/`                                                                           | **1962-only**: i18next bootstrap              |
| `catalog/`                       | —                                                                                 | **1969-only**: martyrology catalog            |

## 2. Public-API symbol table

Each row is one exported symbol. `Verdict` is one of:

- `ALIGN` — structural twin, unify in shared package.
- `SHARE` — one-sided, lift into `@internal/*`.
- `RITE` — keep per-rite, rite-specific semantics.
- `DROP` — accidentally exported, can be made internal.

### 2.1 Core classes

| 1969 symbol           | 1962 symbol                                | Verdict | Target                                                         |
| --------------------- | ------------------------------------------ | ------- | -------------------------------------------------------------- |
| `Romcal`              | `Romcal1962`                               | ALIGN   | `@internal/romcal-core::RomcalBase`                            |
| `RomcalConfig`        | `Romcal1962Config`                         | ALIGN   | `@internal/romcal-core::BaseConfig`                            |
| `Calendar`            | `buildLiturgicalYear1962`                  | ALIGN   | each rite keeps its builder; signature `(year, opts) => Year`  |
| `CalendarDef`         | `CalendarOverlay1962` (+ `applyOverlay`)   | ALIGN   | `@internal/calendars::CalendarDef<Rank, Entry>`                |
| `LiturgicalDay`       | `Celebration1962` + `ResolvedDay1962`      | ALIGN   | shared `BaseLiturgicalDay` interface; rite-specific extensions |
| `LiturgicalDayConfig` | — (inline in `romcal-1962-config.ts`)      | SHARE   | `@internal/romcal-core::LiturgicalDayConfig`                   |
| `LiturgicalDayDef`    | `SanctoralEntry1962` + `ProperOfTimeEntry` | ALIGN   | shared `LiturgicalDayDef<Rank>` base                           |
| `RomcalBundle`        | `RomcalBundle1962`                         | ALIGN   | `@internal/bundle::BaseBundle<Day>`                            |
| `CyclesMetadata`      | —                                          | RITE    | 1969-only                                                      |

### 2.2 Config types

| 1969 symbol                 | 1962 symbol                  | Verdict | Target                    |
| --------------------------- | ---------------------------- | ------- | ------------------------- |
| `RomcalConfigInput`         | `Romcal1962ConfigInput`      | ALIGN   | extend `BaseConfigInput`  |
| `RomcalConfigOutput`        | `Romcal1962ConfigOutput`     | ALIGN   | extend `BaseConfigOutput` |
| `LiturgicalDayConfigOutput` | —                            | SHARE   | lift to core              |
| `ParticularConfig`          | — (overlay-level, informal)  | RITE    | 1969-only                 |
| `CalendarScope`             | — (1962 is always gregorian) | RITE    | 1969-only                 |

### 2.3 Calendar-definition surface

| 1969                                       | 1962                        | Verdict | Target                                                                                                                      |
| ------------------------------------------ | --------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------- |
| `CalendarDefInputs` / `Inputs`             | `CalendarOverlayEntry[]`    | ALIGN   | generic `Entry` parameter                                                                                                   |
| `BundleInputs`                             | — (overlay `entries`)       | ALIGN   | rename to shared `Entries<E>`                                                                                               |
| `CALENDAR_VAR_NAMES`, `CALENDAR_PKG_NAMES` | `calendarOverlays` (record) | ALIGN   | shared `registerCalendar()`                                                                                                 |
| `DateDef*` (10 variants)                   | `mmdd` string               | RITE    | 1969 supports moveable dates; 1962 entries are all fixed-date (moveable sancti handled via `vigil`/`octave` in `sanctoral`) |

### 2.4 Rank / precedence

| 1969                                            | 1962                                       | Verdict                    |
| ----------------------------------------------- | ------------------------------------------ | -------------------------- |
| `Precedence`, `Precedences`, `PRECEDENCES`      | —                                          | RITE                       |
| `Rank`, `Ranks`, `RANKS`, `RanksFromPrecedence` | `Rank1962`, `Rank1962Values`, `RANKS_1962` | RITE (different semantics) |

### 2.5 Constants & enums

| 1969                                                             | 1962                                                                       | Verdict | Notes                                                                                              |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------- | --- | --- | -------------------------------------------------------- |
| `Color`, `Colors`, `COLORS`, `isColor`                           | `Color` (alias from `sanctoral/types`)                                     | ALIGN   | both enumerate {White, Red, Green, Violet, Black, Rose} — lift to `@internal/liturgical-constants` |
| `Season`, `SEASONS`                                              | `ProperOfTimeSeason`                                                       | ALIGN   | same six seasons; lift to shared                                                                   |
| `Month`, `MONTHS`                                                | — (locale-only)                                                            | SHARE   | lift to shared                                                                                     |
| `Weekday`, `WEEKDAYS`, `DayOfWeek`                               | `DayOfWeek`                                                                | ALIGN   | 1962 re-defines as `0                                                                              | 1   | …   | 6` literal, 1969 uses enum; converge on the literal form |
| `Period`, `PERIODS`                                              | —                                                                          | RITE    | 1969-only seasonal micro-periods                                                                   |
| `ProperCycle`, `SundayCycle`, `WeekdayCycle`, `PsalterWeekCycle` | —                                                                          | RITE    | 1969-only                                                                                          |
| `CanonizationLevel`, `Title`, `PatronTitle`, `Sex`               | —                                                                          | RITE    | 1969 martyrology metadata                                                                          |
| `PROPER_OF_TIME_NAME`, `GENERAL_ROMAN_NAME`                      | `RITE_ID`                                                                  | ALIGN   | both are identity constants; keep but document convention                                          |
| `LOCALE_IDS`, `LOCALE_VAR_NAMES`, `LOCALES`                      | `localeIds1962`, `locales1962`                                             | ALIGN   | lift locale-registry plumbing to core                                                              |
| —                                                                | `COMMONS_1962`, `Common1962`                                               | RITE    | 1962-only Mass commons                                                                             |
| —                                                                | `OCTAVE_IDS`, `OctaveId`, `OctaveRank`, `OctaveDayKind`, `OctaveDayNumber` | RITE    | 1962-only                                                                                          |
| —                                                                | `PREFACE_IDS`, `PrefaceId`                                                 | RITE    | 1962-only                                                                                          |
| —                                                                | `RITE_ID = 'roman1962'`                                                    | SHARE   | every rite should export `RITE_ID`; define the constant shape in core                              |

### 2.6 Utility functions

All 1969 static methods (`getUtcDate`, `addDays`, `subtractsDays`,
`isSameDate`, `dateDifference`, `startOfWeek`, `isValidDate`,
`daysInMonth`, `getWeekNumber`, `rangeContainsDate`, `rangeOfDays`,
`toRomanNumber`) are generic date/number utilities with **no 1962
counterparts** — 1962 inlines ad-hoc helpers (`listDatesInYear`,
`dayOfWeekUTC`, `yearOf`). Verdict: **SHARE** — lift to
`@internal/date-utils` (or reuse `@internal/easter`'s internals).

`computeGregorianEasterDate` / `computeJulianEasterDate` /
`computeLunarNewYear`: already in `@internal/easter` / `@internal/lunar-new-year`; just expose the same helpers on `Romcal1962`.

### 2.7 Proper-of-time

| 1969                                     | 1962                                               | Verdict                                                                            |
| ---------------------------------------- | -------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 1 file (`proper-of-time.ts`, monolithic) | `proper-of-time/{anchors,resolver,types,index}.ts` | ALIGN — 1962's layout is the target shape                                          |
| (inline Easter, Advent1, etc.)           | `anchors.ts`                                       | SHARE → `@internal/proper-of-time::anchors`                                        |
| `buildProperOfTime` internal             | `buildProperOfTime1962` public                     | ALIGN — normalize both to `buildProperOfTime(year, opts): ProperOfTimeYear<Entry>` |
| `ProperOfTimeSeason`                     | same                                               | ALIGN                                                                              |
| `TemporaSlotKind`                        | 1962-specific slots                                | RITE                                                                               |

### 2.8 i18n

| 1969                                                                                                  | 1962                                                                                                          | Verdict                                                      |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `Locale`, `LocaleColors`, `LocaleMonths`, `LocaleOrdinals`, `LocaleWeeks`, `LocaleLiturgicalDayNames` | `Locale1962`, `LocaleColors`, `LocaleMonths`, `LocaleNames`, `LocaleRanks`, `LocaleSeasons`, `LocaleWeekdays` | ALIGN — common `BaseLocale` + rite-specific mix-in           |
| — (i18n inline in models)                                                                             | `createI18n1962`, `createNameTranslator`, `NameTranslator`                                                    | SHARE — lift the whole i18next bootstrap to `@internal/i18n` |

### 2.9 Sanctoral / data

| 1969                                                                                                                                     | 1962                                                                                                                                      | Verdict |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `MartyrologyCatalog`, `MartyrologyItem`, `MartyrologyItemPointer`, `MartyrologyItemRedefined`, `SaintCount`, `SaintDate`, `SaintDateDef` | —                                                                                                                                         | RITE    |
| —                                                                                                                                        | `buildSanctoral1962`, `SanctoralEntry1962`, `SanctoralCommemoration`, `SanctoralPropersRef`, `Sanctoral1962Year`, `BuildSanctoralOptions` | RITE    |
| —                                                                                                                                        | `attachPropers`, `parseRef`, `parseSource`, `resolvePropers`, `resolvePropersBlocks` + types                                              | RITE    |
| —                                                                                                                                        | `applyCommemorationCap`, `CommemorationCapMode`, `CommemorationCapOptions`                                                                | RITE    |

## 3. Alignment map (by phase)

### Phase B — `@internal/proper-of-time`

Lift:

- `calculateAdventStart(year)`, `calculateEasterDate(year)` (1969's
  inline Easter call is already `@internal/easter`; pull the
  surrounding anchor math out of the 1969 monolith)
- Generic `ProperOfTimeYear<Entry> = Map<YYYY-MM-DD, Entry>` type
- `ProperOfTimeSeason` enum
- Shared date range helpers (`listDatesInYear`, `dayOfWeekUTC`)

Keep rite-local:

- Slot-type enums (`TemporaSlotKind` for 1962)
- Rite-specific ember-day / rogation rules

### Phase C — `@internal/calendars`

Lift:

```ts
export abstract class CalendarDef<Rank, Entry> {
  readonly id: string;
  readonly parents: CalendarDef<Rank, Entry>[];
  readonly entries: Entry[];
  apply(base: CalendarMaps<Entry>): CalendarMaps<Entry>;
}
export const calendarRegistry = new Map<string, CalendarDef<any, any>>();
```

1969 migration: `class France extends CalendarDef<Precedence, Inputs>`
(57 classes touched).

1962 migration: wrap each `CalendarOverlay1962` value in a
`class SwitzerlandBasel extends CalendarDef<Rank1962, CalendarOverlayEntry>`
OR keep as data + a single `DataCalendarDef` adapter class.

**Decision point for Phase C:** data-wrap vs per-overlay class. Data
wrap is less code but diverges structurally from 1969; per-overlay
class is more uniform. Recommend **per-overlay class** for full
uniformness, given that's the stated goal.

### Phase D — `@internal/romcal-core`

Lift:

```ts
export abstract class RomcalBase<Config, Day, Year> {
  protected readonly config: Config;
  protected readonly cache = new Map<number, Year>();
  abstract buildYear(year: number): Year;
  async generateCalendar(year: number | string): Promise<Year>;
  async getOneLiturgicalDay(key: string, opts?): Promise<Day | undefined>;
  static sanitizeYear(year: number | string): number;
}
```

Both rites subclass, providing their own `buildYear` + day-lookup.

Also lift: the date utilities currently duplicated as `Romcal` static
methods. Expose them as a single `DateUtils` namespace in core.

### Phase E — `@internal/i18n` + shared locale plumbing

Lift:

- `createI18n(localeId, fallbacks, bundles)` — wraps i18next init
- `createNameTranslator(i18n, namespace)` — generic name lookup
- `BaseLocale` interface with `{ colors, months, weekdays, seasons }`;
  rites extend with `ranks`, `names`, `liturgicalDayNames`

## 4. Resolved questions

All four resolved on 2026-04-16. Decisions carried into the plan
(`00-plan.md` decisions log).

1. **Overlay shape → per-file class (Option A).** Every 1962 overlay
   becomes `class SwitzerlandBasel extends CalendarDef<Rank1962, CalendarOverlayEntry>` in its own file. 9 files
   rewritten during Phase C.
2. **Registry keys → dotted slugs.** 1969 migrates from PascalCase
   (`France`, `France_Paris`) to slug (`france`, `france.paris`)
   during Phase C. Matches the bundle-name convention already in use.
3. **Rank → generic parameter.** `CalendarDef<Rank, Entry>` carries
   the rank type; comparators stay rite-local. No unified enum.
4. **Output type → base + extensions.** Shared `BaseLiturgicalDay`
   interface; each rite ships its own extension interface. Discriminate
   via `rite: 'roman1969' | 'roman1962'` field.

## 5. Phase A status

**Complete.** Deliverables above. No code changes made.

Next action: confirm direction, then start Phase B
(`@internal/proper-of-time` extraction).
