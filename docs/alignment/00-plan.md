# Rite alignment plan

Goal: make the `rites/roman1969` and `rites/roman1962` packages
structurally uniform wherever possible — one calendar-definition
abstraction, one proper-of-time engine, one Romcal base class, one
i18n plumbing — while keeping the genuinely rite-specific parts
(rank system, rubrics, octaves, commemoration caps, Mass text
sourcing) in their own packages.

The invariant for every phase: **all tests green, both rites build
cleanly, every step is an independently mergeable PR.**

## Phases

Each phase below has a status flag. Flip the box as each phase
wraps up so we always know where we are.

- [x] **Phase A — Read-only audit.** Enumerate every public symbol of
      both rites, categorize as (a) structural twin that can be
      unified, (b) rite-specific that must stay divergent, (c)
      one-sided that should be lifted shared. Output a concrete target
      for every symbol. Deliverable: `01-phase-a-audit.md`.
- [x] **Phase B — Extract `@internal/proper-of-time`.** Done
      2026-04-16. Package lives under `packages/proper-of-time/`,
      exports `computeAnchors`, `YearAnchors`, date helpers, and the
      `ProperOfTimeYear<Entry>` generic. 1962 migrated (deleted local
      `anchors.ts`, also replaced duplicate helpers in
      `calendar-year/build.ts`). 1969 untouched this phase —
      `utils/dates.ts` delegates in Phase D. 656 tests across all
      workspaces remain green; full workspace build clean.
- [~] **Phase C — Extract `@internal/calendars`.** Define a generic
  `CalendarDef<Entry>` abstract class + `flattenCalendarChain`
  helper. Scoped into sub-phases so the 1969 touch (57 country
  classes) stays out of the 1962 migration: - [x] **C1 — Ship shared package + 1962 class migration.** Done
  2026-04-16. `packages/calendars/` exports abstract
  `CalendarDef<E>` (id getter, entries, parent chain) and
  `flattenCalendarChain` with parents-first, id-deduped
  walk. 9 1962 overlays converted to classes extending
  `CalendarDef<CalendarOverlayEntry>`. `applyOverlay` +
  `collectOverlayNames` now consume instances. Registry
  `calendarOverlays` holds `CalendarDefConstructor` values
  per dotted slug; `Romcal1962Config.calendar` accepts a
  constructor and instantiates once internally. 659 tests
  green across 6 workspaces; full build clean. - [ ] **C2 — Re-parent 1969's `CalendarDef` onto the shared
  base.** Keep the 1969-specific lifecycle methods
  (`updateConfig`, `buildAllDefinitions`, `calendarName`) as
  an intermediate subclass; swap its data-carrying shape
  for the shared `id`/`entries`/`parents` trio. No public
  API change to the 57 country classes — only the class
  they extend. - [ ] **C3 — 1969 slug migration.** Rename
  `calendarDefinitions` keys from PascalCase (`Argentina`,
  `UnitedStates`) to dotted slugs (`argentina`,
  `united-states`) to match the 1962 convention. This is a
  public-API-breaking change; batch it alone so downstream
  consumers have a clean migration point.
- [ ] **Phase D — Extract `@internal/romcal-core`.** Pull an abstract
      `RomcalBase<Config, Day, Year>` class with the shared shape
      (config + cache + `generateCalendar(year)` +
      `getOneLiturgicalDay(id|date, opts)`). `Romcal` and `Romcal1962`
      become thin subclasses parametrized by their day/year types.
- [ ] **Phase E — Extract `@internal/i18n` + shared config.** Move
      the i18next bootstrap + name-translator factory into a shared
      package. Align `RomcalConfigInput` / `Romcal1962ConfigInput` on a
      common base type so downstream consumers can type-narrow by rite.

## Hard divergence (will not be unified)

These are genuinely different between the two rites and must stay
rite-specific. No attempt to merge them — any "uniformness" must
happen _around_ them.

- **Rank system.** 1969 uses `Precedence` (1–17) and derived `Rank`;
  1962 uses `Rank1962` (ClassI–ClassIV) with a separate
  `numericRank`. Different ordinals, different semantics.
- **Commemoration caps.** 1962 honours Rubricae 1960 §111–113
  (`'solemn'` / `'private'` / `'all'`). 1969 has no cap.
- **Octaves.** 1962 has ClassI/II/III octaves with explicit octave
  days; 1969 only Easter + Christmas octaves and they fall out of
  precedence.
- **Commons & Prefaces.** 1962 ships `COMMONS_1962` + `PREFACE_IDS`
  with Divinum-Officium–style references. 1969 uses martyrology
  titles + canonization level instead.
- **Vigils + forward-transfer.** 1962's `buildLiturgicalYear1962`
  forward-transfers impeded ClassI feasts and suppresses their
  vigils; 1969 has no equivalent machinery.
- **Martyrology metadata.** `CanonizationLevel`, `PatronTitle`,
  `Sex`, `Title` — 1969-only concepts.
- **Cycles.** `ProperCycle`, `SundayCycle`, `WeekdayCycle`,
  `PsalterWeekCycle` — 1969-only.

## Decisions log

Record any scope changes or path pivots here, newest first.

| Date       | Decision                                                                                                                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026-04-16 | Phase C1 complete. `@internal/calendars` shipped; 1962 overlays migrated to class form; 1969 C2/C3 split off as follow-ups.                                                                 |
| 2026-04-16 | Phase B complete. `@internal/proper-of-time` shipped; 1962 consumes it; 1969 deferred to Phase D.                                                                                           |
| 2026-04-16 | Q4 resolved: `BaseLiturgicalDay` + rite-specific extension interfaces, discriminated by `rite: 'roman1969' \| 'roman1962'`.                                                                 |
| 2026-04-16 | Q3 resolved: rank stays rite-local; unify via generic `CalendarDef<Rank, Entry>`. No shared rank enum.                                                                                      |
| 2026-04-16 | Q2 resolved: registry keys use dotted slugs (`switzerland.basel`). 1969 migrates from PascalCase to slug during Phase C.                                                                    |
| 2026-04-16 | Q1 resolved: **Option A** — per-file class for every 1962 overlay. 9 files rewritten during Phase C to extend generic `CalendarDef<Rank1962, CalendarOverlayEntry>`. No data+adapter split. |
| 2026-04-16 | Phase A complete — see `01-phase-a-audit.md`.                                                                                                                                               |
| 2026-04-16 | Initial plan adopted. Start with Phase A.                                                                                                                                                   |

## Notes

- Every phase must leave `npm run test` and `npm run build` green for
  both rites.
- Prefer new `@internal/*` packages under `packages/` (matches the
  existing `easter`, `config`, `lunar-new-year` convention).
- When a symbol lifts to shared, delete its per-rite definition — no
  stub re-exports, no backwards-compat shims.
