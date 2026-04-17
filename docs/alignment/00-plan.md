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
  green across 6 workspaces; full build clean. - [x] **C2 — Re-parent 1969's `CalendarDef` onto the shared
  base.** Done 2026-04-16. 1969's `CalendarDef` now extends
  `SharedCalendarDef<CalendarDefEntry1969>`, satisfying the
  `id` contract via a getter over `calendarName` and the
  `entries` contract via a flattening getter over `inputs`.
  Existing `ParentCalendars` / `parentCalendarInstances`
  machinery untouched — 1969 inherits the shared base's
  default empty `parents` and keeps its own parent-traversal
  lifecycle unchanged. Zero public API change: the 57
  country classes compile and run without edits. 485 tests
  green; full build clean. - [x] **C3 — Align 1962 overlay naming to 1969's convention.**
  Done 2026-04-17. Direction flipped (align 1962 → 1969, not
  the reverse) so 1969's external API stays untouched. Shared
  `CalendarDef` base now provides the default `id` getter
  (class-name → snake_case, exactly the algorithm 1969's
  `calendarName` has always used); 1969's override deleted
  (inherits default). 1962 diocesan/abbey overlays renamed to
  the `Country_Diocese` convention (`SwitzerlandBasel` →
  `Switzerland_Basel`, …, `SwitzerlandSaintMauriceAbbey` →
  `Switzerland_Saint_Maurice_Abbey`) and per-class `get id()`
  overrides dropped. `calendarOverlays` registry now keyed by
  PascalCase class name (matches 1969's `calendarDefinitions`
  exactly). `Romcal1962Config.toObject().calendarId` now
  reports the derived snake_case id (e.g. `switzerland__chur`).
  Only 1962-side breaking change; 1969 untouched. All 485
  tests green; full build clean.
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

| Date       | Decision                                                                                                                                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2026-04-17 | Phase C3 complete. Direction flipped: 1962 aligns to 1969, not vice-versa. Shared base owns `id` default; 1962 overlays renamed to `Country_Diocese`, registry keys PascalCase. 1969 external API unchanged. |
| 2026-04-16 | Phase C2 complete. 1969's `CalendarDef` re-parented onto `@internal/calendars` via `SharedCalendarDef<CalendarDefEntry1969>`. Zero public-API change; existing parent-traversal machinery preserved.         |
| 2026-04-16 | Phase C1 complete. `@internal/calendars` shipped; 1962 overlays migrated to class form; 1969 C2/C3 split off as follow-ups.                                                                                  |
| 2026-04-16 | Phase B complete. `@internal/proper-of-time` shipped; 1962 consumes it; 1969 deferred to Phase D.                                                                                                            |
| 2026-04-16 | Q4 resolved: `BaseLiturgicalDay` + rite-specific extension interfaces, discriminated by `rite: 'roman1969' \| 'roman1962'`.                                                                                  |
| 2026-04-16 | Q3 resolved: rank stays rite-local; unify via generic `CalendarDef<Rank, Entry>`. No shared rank enum.                                                                                                       |
| 2026-04-16 | Q2 resolved: registry keys use dotted slugs (`switzerland.basel`). 1969 migrates from PascalCase to slug during Phase C.                                                                                     |
| 2026-04-16 | Q1 resolved: **Option A** — per-file class for every 1962 overlay. 9 files rewritten during Phase C to extend generic `CalendarDef<Rank1962, CalendarOverlayEntry>`. No data+adapter split.                  |
| 2026-04-16 | Phase A complete — see `01-phase-a-audit.md`.                                                                                                                                                                |
| 2026-04-16 | Initial plan adopted. Start with Phase A.                                                                                                                                                                    |

## Notes

- Every phase must leave `npm run test` and `npm run build` green for
  both rites.
- Prefer new `@internal/*` packages under `packages/` (matches the
  existing `easter`, `config`, `lunar-new-year` convention).
- When a symbol lifts to shared, delete its per-rite definition — no
  stub re-exports, no backwards-compat shims.
