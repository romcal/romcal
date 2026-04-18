# 01 — Findings: romcal repo architecture

Snapshot of the repo state relevant to adding the 1962 rite. See source for authoritative paths.

## Monorepo layout

- `rites/roman1969/` — full 1969 Roman Rite implementation (reference).
- `rites/roman1962/` — scaffold only (`package.json`, `tsconfig.json`, empty `src/.gitkeep`).
- `packages/easter/`, `packages/lunar-new-year/`, `packages/config/` — shared utilities.
- Root `package.json` exports point to `rites/roman1969/dist/`. A second entry point will be needed for 1962 (or a sub-path export).

## Public API (1969)

Entry: `rites/roman1969/src/index.ts`.

- `new Romcal(config?: RomcalConfigInput)`
- `generateCalendar(year?): Promise<LiturgicalCalendar>`
- `getOneLiturgicalDay(id, options?): Promise<LiturgicalDay | null | undefined>`
- `getAllDefinitions(): Promise<LiturgicalDayDefinitions>`
- `dates(year?): Dates`
- Static re-exports of `Colors`, `Ranks`, `Precedences`, `Seasons`, `Periods`, etc.

## LiturgicalDay model

- Class: `rites/roman1969/src/models/liturgical-day.ts`.
- Type: `rites/roman1969/src/types/liturgical-day.ts`.
- Fields: `id`, `date`, `dateDef`, `dateExceptions`, `alternativeTransferDateDefs`, `precedence`, `rank`, `colors`, `colorNames`, `seasons`, `periods`, `isOptional`, `commonsDef`, `martyrology`, `titles`, `calendar`, `cycles`, `i18nDef`, `customLocaleId`, `name`, `rankName`, `seasonNames`, `fromCalendarId`, `fromExtendedCalendars`.

## Constants

- `constants/precedences.ts` — 18+ precedence levels (Triduum_1 … Weekday_13).
- `constants/ranks.ts` — Solemnity, Sunday, Feast, Memorial, OptionalMemorial, Weekday.
- `constants/colors.ts` — Red, Rose, Purple, Green, White, Gold, Black.
- `constants/seasons.ts`, `constants/periods.ts`.

## Calendar definition pattern

- Base class `CalendarDef` at `rites/roman1969/src/models/calendar-def.ts`.
- Definitions under `rites/roman1969/src/calendars/` (general-roman, countries, regions, communities).
- Pattern: a subclass declares `ParentCalendars`, optional `particularConfig`, and an `inputs: Inputs` object keyed by liturgical-day id:
  ```ts
  inputs: Inputs = {
    saint_id: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 12 },
      commonsDef: Common.Bishops,
      colors: Colors.Red,
      titles: { append: [PatronTitle.PatronOfEngland] },
    },
  };
  ```

## Proper of Time

- `rites/roman1969/src/proper-of-time/proper-of-time.ts` — core algorithm generating Sundays, weekdays, and moveable feasts. Primary divergence point for 1962.

## Localization

- `rites/roman1969/src/locales/` — 13 locales (`en`, `en-gb`, `en-ie`, `cs`, `de`, `es`, `fr`, `it`, `la`, `pl`, `pt-br`, `sk`, `ta`).
- Structure: `{id, colors, months, names, cycles, ordinals, weeks}`; consumed via i18next.

## Build / test

- `npm run build` — per-rite via `tsx build/build.ts`, emits CJS + ESM + `.d.ts` under `dist/`.
- `npm run test` — Jest, `TZ=UTC`.
- `npm run data:checks` — calendar-data integrity.

## Extension points for a new rite

1. Populate `rites/roman1962/src/` mirroring the 1969 package.
2. Reuse `models/` and `types/` where shapes match; extend or subtype only for 1962-specific fields.
3. Implement a 1962 `ProperOfTime` (different Sundays-after-Epiphany / Pentecost counting, octaves, vigils, Septuagesima).
4. Add 1962 precedence constants (Class I–IV) either as a new enum or as a parallel ordering mapped onto the existing `Precedences` positions.
5. Expose a second public entry point (e.g. `romcal/1962`) so consumers pick the rite explicitly.
