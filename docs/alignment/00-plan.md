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

---

# Upstream-feedback pivot (2026-04-18)

Upstream maintainers reviewed the reshape and pushed back:

> we already have a 1962 folder ready to use. the current shape
> already leverages packages and rites, if you want to separate out
> utilities from the 1969 package, that would be acceptable, but i
> don't think the whole reshape is welcome.
>
> given that Romcal1962 needs to conform to the general type of
> Romcal anyway, Romcal1962 should be treated as a base new calendar,
> not an entirely calendar system.

Two things to do:

1. **Revert the reshape.** Roll back the 5 shared packages
   (`@internal/calendars`, `@internal/proper-of-time`,
   `@internal/romcal-core`, `@internal/i18n`, `@internal/constants`)
   so `packages/` matches upstream's 3 (`config`, `easter`,
   `lunar-new-year`). Cross-rite sharing continues through
   `@internal/rite-roman1969` as a sibling workspace dep.
2. **Integrate `Romcal1962` into `Romcal`.** Keep the class, but make
   it a thin `Romcal` subclass driven by a new `GeneralRoman1962`
   `CalendarDef` tree. Dissolve 1962's parallel engine (`Calendar1962`,
   `LiturgicalDayConfig1962`, `LiturgicalDayDef1962`, `Romcal1962Config`,
   `calendar-year/`, `rubrics/`, `sanctoral/`, `propers/`). Rite-specific
   semantics land in the 1969 engine as opt-in, rite-neutral extension
   points.

This pivot supersedes Phases C–E of the plan above. Phase A (audit)
and Phase B (proper-of-time extraction) were already merged; they get
rolled back by the revert phase below.

## Target `LiturgicalDay` shape

Previous plan decision (2026-04-16): `BaseLiturgicalDay` + discriminated
extension via `rite: 'roman1969' | 'roman1962'`. Still correct. Once
Phase B lands:

- `BaseLiturgicalDay.rite: 'roman1969' | 'roman1962'`
- Optional 1962-only fields: `commemorations`, `octaveOf`, `vigilOf`,
  `massReferences`. 1969 leaves them undefined.
- `LiturgicalDay1962` class deleted.

## Engine extension points landing in `rites/roman1969/src/`

Four opt-in `ParticularConfig` flags, all defaulting to today's 1969
behavior. Rite-neutral; 1962 flips them on via its root CalendarDef.

| Flag                                       | Hook                                      | 1962 setting                                            |
| ------------------------------------------ | ----------------------------------------- | ------------------------------------------------------- |
| `calendarEdition: '1969'\|'1962'`          | proper-of-time builder branch             | Builds Septuagesima + Passiontide + within-octave weeks |
| `octave?: { rank, days }` (on `Inputs`)    | `buildAllDefinitions` expands octave days | ClassI/II/III octave days per feast                     |
| `commemorationCap: 'rubricae1960'\|'none'` | post-reduction pass in reducer            | Rubricae 1960 §111–113 caps on commemoration count      |
| `transferPolicy: 'forward-classI'\|'none'` | reducer transfers impeded feasts          | Forward-transfer + vigil suppression for ClassI         |

## 1962 package shape after Phase B

```
rites/roman1962/src/
├── calendars/
│   ├── general-roman-1962/index.ts    # root CalendarDef, all 1962 sanctoral as inputs
│   ├── regions/europe/index.ts
│   └── countries/switzerland/
│       ├── index.ts                    # Switzerland national overlay
│       ├── diocese-of-basel.ts         # Switzerland_Basel (no _1962 suffix)
│       └── …
├── constants/                          # Rank1962, Commons1962, Prefaces (data only)
├── locales/
├── proper-of-time/                     # 1962-variant data feeding engine's '1962' branch
├── romcal-1962.ts                      # thin Romcal subclass
└── index.ts                            # explicit re-export list (no wildcard)
```

Naming: 1962 calendar classes drop the `_1962` suffix
(`Switzerland_Basel`, `Switzerland_Chur`, …). They live in a separate
package, so collision with 1969's identically-named classes is avoided
by import path. `rites/roman1962/src/index.ts` uses an explicit
re-export list — no `export * from '@internal/rite-roman1969'`.

## Commit plan (4 commits across both phases)

Original 17-commit breakdown is in the team notes; compressed here to
4 focused commits. Each commit leaves `npm run test` + `npm run build`
green across all workspaces.

### Phase A — revert the reshape (1 commit)

- [ ] **A1 — `refactor(package): revert shared-package reshape`.**
      Dissolve all five shared packages back into
      `rites/roman1969/src/`:
  - `@internal/romcal-core` — interfaces inlined locally to 1962
    (deleted entirely in Phase B).
  - `@internal/constants` — `MONTHS`/`WEEKDAYS` back into
    `rites/roman1969/src/constants/`.
  - `@internal/i18n` — `createI18nInstance` + `addBundles` into
    `rites/roman1969/src/utils/i18n.ts` (or `models/i18n.ts`).
  - `@internal/calendars` — abstract `CalendarDef<E>` +
    `flattenCalendarChain` folded into the existing concrete
    `rites/roman1969/src/models/calendar-def.ts`. Unfold the
    re-parenting done in Phase C2.
  - `@internal/proper-of-time` — `computeAnchors`, `YearAnchors`,
    date utils back into `rites/roman1969/src/proper-of-time/` and
    `utils/dates.ts`.
    1962 imports all of the above from `@internal/rite-roman1969`.
    Remove the 5 packages from `packages/` and workspace config.
    Update `packages/` to upstream's 3 (`config`, `easter`,
    `lunar-new-year`). Append this plan-doc update in the same
    commit.

### Phase B — integrate `Romcal1962` into `Romcal` (3 commits)

- [ ] **B1 — `feat(1969): rite-neutral engine extension points for
    1962`.** Bundles original B1–B5:
  - Add `rite: 'roman1969'|'roman1962'` discriminator + optional
    `commemorations`/`octaveOf`/`vigilOf`/`massReferences` to
    `BaseLiturgicalDay`. 1969 sets `rite: 'roman1969'`.
  - `calendarEdition` branch in proper-of-time builder.
  - `octave: { rank, days }` input on `CalendarDef.inputs`; engine
    expands.
  - `commemorationCap` post-reduction pass.
  - `transferPolicy` forward-transfer + vigil-suppression pass.
    All default to current 1969 behavior. Unit tests on fixture
    CalendarDefs; existing 1969 + 1962 suites unchanged.

- [ ] **B2 — `feat(1962): Romcal1962 as Romcal subclass + new
    CalendarDef tree`.** Bundles original B6–B10:
  - Build `GeneralRoman1962` root CalendarDef, all sanctoral +
    proper data as `inputs` + engine-extension `particularConfig`.
  - Port Europe / Switzerland / 6 Swiss diocese / 1 Swiss abbey
    overlays as `CalendarDef` subclasses under `calendars/` tree.
    Drop `_1962` suffix.
  - Rewrite `Romcal1962` as `extends Romcal { constructor… }`.
    Parity test suite comparing old-engine output to new-engine
    output before the cutover.
  - Delete parallel engine: `Calendar1962`,
    `LiturgicalDayConfig1962`, `LiturgicalDayDef1962`,
    `Romcal1962Config`, `calendar-year/`, `rubrics/`, `sanctoral/`,
    `propers/`, `definitions.ts`, `romcal-1962-types.ts`,
    `calendars/apply.ts` + `types.ts`.
  - Replace `index.ts` wildcard re-export with a curated list.

- [ ] **B3 — `docs(alignment): record pivot completion + upstream PR
    prep`.** Final plan doc update + start the upstream PR draft
      (leading with the 1969 engine extensions as rite-neutral).

## Decisions log (pivot)

| Date       | Decision                                                                                                                                                                                       |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026-04-18 | Upstream feedback: revert 5-package reshape; integrate `Romcal1962` as a `Romcal` subclass via a `GeneralRoman1962` CalendarDef. Pivot plan adopted; supersedes Phases C–E above.              |
| 2026-04-18 | 1962 calendar classes drop the `_1962` suffix. Collision with 1969 names avoided by separate package / import path. Explicit re-export list in `rites/roman1962/src/index.ts`, no wildcard.    |
| 2026-04-18 | Four engine extensions (`calendarEdition`, `octave`, `commemorationCap`, `transferPolicy`) land in `rites/roman1969/src/` as opt-in `ParticularConfig` flags. Default 1969 behavior unchanged. |
| 2026-04-18 | Commit plan compressed from 17 micro-commits to 4 focused commits (A1 + B1 + B2 + B3).                                                                                                         |
