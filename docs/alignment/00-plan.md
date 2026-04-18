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

## Target `LiturgicalDay` shape — revised 2026-04-18

**Revised:** 1962-specific fields stay on a `LiturgicalDay1962`
subclass; 1969's `BaseLiturgicalDay` / `LiturgicalDay` do NOT gain
1962-specific optional fields. Pushback: polluting the 1969 base type
with 1962 concepts would leak rite-specific leaves into a neutral
abstraction. This supersedes the 2026-04-16 decision to put optional
1962 fields on `BaseLiturgicalDay`.

New shape:

```ts
// rites/roman1969/src/models/liturgical-day.ts (1969 — unchanged)
class LiturgicalDay {
  readonly rite = 'roman1969' as const;
  // …existing fields…
}

// rites/roman1962/src/models/liturgical-day.ts (1962 — subclass)
class LiturgicalDay1962 extends LiturgicalDay {
  override readonly rite = 'roman1962' as const;
  readonly commemorations: readonly LiturgicalDayCommemoration[];
  readonly octaveOf?: OctaveOf;
  readonly vigilOf?: Id;
  readonly massReferences?: Record<string, string>;
}
```

The `rite` literal narrows via `day.rite === 'roman1962'` for
consumers who hold a union. No shared `Rite` type alias in 1969 — each
class owns its own literal; 1962 unions them locally if needed.

## Engine extension points — revised 2026-04-18

**Revised:** landing as virtual methods on `Calendar` (the engine
model) + a factory on `Romcal`, NOT as enum flags on `ParticularConfig`
and NOT on `CalendarDef`. `Calendar` owns `#buildDatesData` + the
reducer, so it's the natural hook host; `CalendarDef` is per-overlay
(multiple stacked) so dispatch would be ambiguous there. The hooks are
framed as **generic OOP extension points** any rite variant
(Ambrosian, Mozarabic, Dominican, …) could use. 1969's default
implementations match today's behavior; 1962 subclasses
`Calendar → Calendar1962`. This keeps 1969 clean — the engine defaults
are not expressed in terms of 1962's existence.

| Virtual method on `Calendar`             | Default in 1969 (base class) | 1962 override (on `Calendar1962`)                |
| ---------------------------------------- | ---------------------------- | ------------------------------------------------ |
| `createLiturgicalDay(def, …): T`         | `new LiturgicalDay(…) as T`  | `new LiturgicalDay1962(…)`                       |
| `postReduceDay(day, candidates): T`      | identity                     | applies Rubricae 1960 §111–113 commemoration cap |
| `resolveOccurrence(candidates, date): T` | current reducer (extracted)  | forward-transfer + vigil suppression             |

| Virtual method on `Romcal<T>`                   | Default              | 1962 override (on `Romcal1962`) |
| ----------------------------------------------- | -------------------- | ------------------------------- |
| `createCalendar(config, ldConfig): Calendar<T>` | `new Calendar<T>(…)` | `new Calendar1962(…)`           |

Proper-of-time extension continues to use the existing seam:
`ProperOfTime` is already a `CalendarDef` subclass, so 1962 ships
`ProperOfTime1962 extends CalendarDef` with 1962-specific seasons
(Septuagesima, Passiontide, within-octave weeks) via the standard
`buildAllDefinitions` override. No new `buildProperOfTime` virtual
needed.

Plus one declarative addition on `Inputs`:

| Input field                             | Engine effect                             | 1962 use                                          |
| --------------------------------------- | ----------------------------------------- | ------------------------------------------------- |
| `octave?: { rank, days }` (on `Inputs`) | `buildAllDefinitions` expands octave days | ClassI/II/III octave days per feast (declarative) |

`Romcal` goes generic over its day type:

```ts
class Romcal<T extends LiturgicalDay = LiturgicalDay> {
  generateCalendar(year?): Promise<LiturgicalCalendar<T>> { … }
}
class Romcal1962 extends Romcal<LiturgicalDay1962> { … }
```

Default generic = current 1969 behavior; zero external API change.

## 1962 package shape after Phase B

Actual post-B2e-3 layout (shipped). The planned nested
`calendars/{regions,countries}/…` tree was flattened to a single
`calendars/` dir — the CalendarDef inheritance chain expresses the
region/country semantics without needing directory structure:

```
rites/roman1962/src/
├── calendar.ts                         # Calendar1962 extends Calendar<LiturgicalDay1962>
├── liturgical-day.ts                   # LiturgicalDay1962 extends LiturgicalDay
├── romcal-1962.ts                      # Romcal1962 extends Romcal<LiturgicalDay1962>
├── config-1962.ts                      # RomcalConfig1962 + inputs type
├── meta-1962.ts                        # metadata side-channel (Class1962, kind1962, …)
├── precedence.ts                       # §15/§96 score function
├── transfer.ts                         # §50 forward-transfer + §10 vigil suppression
├── tempora-class.ts                    # Class1962 classifier for tempora days
├── vigil.ts                            # vigil detection helper
├── proper-of-time-def.ts               # ProperOfTime1962 extends CalendarDef (class form)
├── proper-of-time/                     # functional year-builder (buildProperOfTime1962, computeAnchors)
├── calendars/
│   ├── general-roman.ts                # GeneralRoman1962 extends CalendarDef (root overlay)
│   ├── europe.ts                       # Europe extends GeneralRoman1962
│   ├── switzerland.ts                  # Switzerland extends Europe
│   ├── switzerland-basel.ts            # Switzerland_Basel (no _1962 suffix)
│   ├── switzerland-chur.ts             # …
│   ├── overlay-names.ts, overlay-support.ts
│   └── index.ts
├── constants/                          # Rank1962, Commons1962, Prefaces, Colors1962, …
├── i18n/                               # createI18n1962, NameTranslator
├── locales/                            # la/en/de/fr/…
├── types/                              # Locale1962, RomcalBundle1962
└── index.ts                            # curated public API (no wildcard)
```

Naming: 1962 calendar classes drop the `_1962` suffix
(`Switzerland_Basel`, `Switzerland_Chur`, …). They live in a separate
package, so collision with 1969's identically-named classes is avoided
by import path. `rites/roman1962/src/index.ts` uses an explicit
re-export list — no `export * from '@internal/rite-roman1969'`.

`proper-of-time-def.ts` is the OOP `CalendarDef` form (one
`LiturgicalDayDef` per day of the civil year, consumed by the engine);
`proper-of-time/` is the functional year-builder kept as a reusable
building block (`buildProperOfTime1962`, `computeAnchors`,
`ProperOfTimeYear<Entry>`). Different concerns, different files.

## Commit plan (4 commits across both phases)

Original 17-commit breakdown is in the team notes; compressed here to
4 focused commits. Each commit leaves `npm run test` + `npm run build`
green across all workspaces.

### Phase A — revert the reshape (1 commit)

- [x] **A1 — `refactor(package): revert shared-package reshape`.**
      Done 2026-04-18 (commit `991be71`).
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

Each commit refactor-style: additive, default behavior unchanged until
the final cutover in B2.

- [x] **B1 — `feat(1969): generic OOP extension points on engine`.**
      Done 2026-04-18 (commit `8a7dfd5`). Engine refactor in
      `rites/roman1969/src/`, zero behavior change. Touches only
      1969; no 1962 code yet.
  - Make `Romcal` generic: `Romcal<T extends LiturgicalDay = LiturgicalDay>`.
    `generateCalendar` / `getOneLiturgicalDay` return types parameterized
    by `T`. Default `T = LiturgicalDay` preserves 1969's public API.
  - Make `Calendar` generic: `Calendar<T extends LiturgicalDay = LiturgicalDay>`.
  - Add `readonly rite = 'roman1969' as const` to `LiturgicalDay`.
  - Add virtual methods to `Calendar` with default impls matching
    today's behavior:
    - `protected createLiturgicalDay(def, date, ldConfig, calendar, baseData, weekday): T`
      — replace internal `new LiturgicalDay(…)` call sites with
      `this.createLiturgicalDay(…)`.
    - `protected postReduceDay(day: T, candidates: T[]): T` — hook called
      after the reducer settles a date; default = identity.
    - `protected resolveOccurrence(candidates: T[], date: Date): T` — hook
      for occurrence / transfer resolution; default = current reducer
      logic extracted into the method.
  - Add factory to `Romcal<T>`:
    - `protected createCalendar(config, ldConfig): Calendar<T>` —
      default returns `new Calendar<T>(…)`; subclass overrides (e.g.
      `Romcal1962` returns `new Calendar1962(…)`).
  - Add declarative `octave?: { rank, days }` on `Inputs`;
    `buildAllDefinitions` expands octave days when present, tagging
    them for octave metadata (default: unused by 1969 inputs; no
    behavior change).
  - Fixture-based tests on a subclass `Calendar` / `Romcal` verify each
    virtual can be overridden and the engine dispatches to the override.
  - 1969 and 1962 test suites unchanged and passing.

- [x] \*\*B2 — `feat(1962): Romcal1962 as Romcal<LiturgicalDay1962>
  - new CalendarDef tree`.\*\* Done 2026-04-18. The cutover. Planned
    as a single commit; shipped as 7 sub-phases driven by reviewability
    and parity-debugging feedback loops. Each sub-phase left the 1962
  - 1969 test suites green. Sub-phases (oldest first):
  * **B2a — OOP skeleton** (commit `c281a97`). `Romcal1962OOP extends
Romcal<LiturgicalDay1962OOP>` shadow-classes alongside the legacy
    engine. Scaffolding only — no rubrics, no real overrides.
  * **B2b — Proper of Time + engine seam** (commit `4715601`).
    `ProperOfTime1962 extends CalendarDef` producing one
    `LiturgicalDayDef` per day of the civil year; `Calendar1962OOP`
    overrides `createLiturgicalDay` to emit `LiturgicalDay1962OOP`.
  * **B2c — Sanctoral port** (commit `b49c662`). `GeneralRoman1962
extends CalendarDef` carrying 1962's sanctoral + commemorations
    as declarative `Inputs`.
  * **B2d — Rubrics + overlays port** (commit `0d1e5f7`).
    `resolveOccurrence` (§15 Lord-feast elevation, §96 tempora>sancti
    tie-break, §50 forward transfer, §10 vigil suppression) +
    `postReduceDay` (§111–113 commemoration cap). 9 overlay classes
    (Europe / Switzerland / 6 Swiss diocese / 1 abbey) as
    `CalendarDef` subclasses. Parity pin added: 43 tests comparing
    per-date coverage + transfer fingerprints + marker Class I
    primaries against legacy `buildLiturgicalYear1962` for years
    2024–2026 × 3 overlay configurations.
  * **B2e-1 — Cutover** (commit `89addfa`). Deleted the 4,657-line
    parallel engine (`sanctoral/`, `rubrics/`, `calendar-year/`,
    `propers/`, `calendars/` legacy, `models/`, `definitions.ts`,
    legacy `romcal-1962.ts`, and 11 legacy `__tests__/` files).
    Relocated Bundle type to `types/bundle.ts`; inlined `Color` +
    `LocaleId`; moved `PropersBlock`/`PropersBlockItem` to the
    divinum-officium importer where they're the only consumers.
    `src/index.ts` switched from wildcard to a curated public API.
  * **B2e-2 — Rename OOP shadow symbols to canonical** (commit
    `7ad3667`). `Calendar1962OOP` → `Calendar1962`, `LiturgicalDay1962OOP`
    → `LiturgicalDay1962`, `Romcal1962OOP` → `Romcal1962`,
    `Romcal1962OOPConfigInput` → `Romcal1962ConfigInput`. Replaced
    the last `#`-prefix private fields in `proper-of-time.ts` with
    `private` modifiers to clear the remaining tsc error.
  * **B2e-3 — Flatten `src/oop/` into canonical layout** (commit
    `efbaab5`). Promoted `src/oop/*` to `src/*` + `src/calendars/*`
    (canonical structure matching the 1969 package).
    `src/proper-of-time-def.ts` avoids collision with the existing
    `src/proper-of-time/` functional-builder directory.
  * Add `LiturgicalDay1962 extends LiturgicalDay` in
    `rites/roman1962/src/models/liturgical-day.ts` with
    `override readonly rite = 'roman1962' as const` +
    `commemorations`, `octaveOf`, `vigilOf`, `massReferences`.
  * Build `GeneralRoman1962 extends CalendarDef` with 1962 sanctoral +
    proper data as `inputs`; ClassI/II/III octaves as declarative
    `octave` input.
  * Build `ProperOfTime1962 extends CalendarDef` with 1962 seasons
    (Septuagesima, Passiontide, within-octave weeks) via
    `buildAllDefinitions` override.
  * Build `Calendar1962 extends Calendar<LiturgicalDay1962>`, overriding
    the three engine virtuals: `createLiturgicalDay → new LiturgicalDay1962(…)`,
    `postReduceDay → commemoration cap (§111–113)`,
    `resolveOccurrence → forward-transfer + vigil suppression`.
  * Port Europe / Switzerland / 6 Swiss diocese / 1 Swiss abbey
    overlays as `CalendarDef` subclasses under `calendars/`. Drop
    `_1962` suffix.
  * Rewrite `Romcal1962` as:
    ```ts
    class Romcal1962 extends Romcal<LiturgicalDay1962> {
      constructor(input: Romcal1962ConfigInput = {}) {
        super({ ...input, localizedCalendar: input.calendar ?? GeneralRoman1962 });
      }
    }
    ```
  * Parity test: for representative year range, old-engine output
    (`Calendar1962`) matches new-engine output (via new
    `Romcal1962`). Ship parity proof in the same commit as the
    deletion.
  * Delete parallel engine: `Calendar1962`,
    `LiturgicalDayConfig1962`, `LiturgicalDayDef1962`,
    `Romcal1962Config`, `calendar-year/`, `rubrics/`, `sanctoral/`,
    `propers/`, `definitions.ts`, `romcal-1962-types.ts`,
    `calendars/apply.ts` + `types.ts`.
  * Replace `index.ts` wildcard re-export with a curated list
    (`Romcal`, `LiturgicalDay`, `CalendarDef`, engine types) +
    1962-local exports (`Romcal1962`, `LiturgicalDay1962`,
    `GeneralRoman1962`, `Switzerland_Basel`, …).

- [x] **B3 — `docs(alignment): record pivot completion + upstream PR
prep`.** Done 2026-04-18. Plan doc updated with actual sub-phase
      history; `02-b1-changes-for-upstream.md` cleaned of authoring
      cruft and ready to post against `github.com/romcal/romcal`. The
      B1 narrative frames the three `Calendar` virtuals +
      `Romcal.createCalendar` factory as **generic OOP extension
      points** any rite variant (Ambrosian, Mozarabic, Dominican, …)
      could use, not "1962 flags." 1962 is a consumer, not the
      motivation — it ships as a separate package on our fork that
      subclasses the seams without adding new hooks.

## Decisions log (pivot)

| Date       | Decision                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2026-04-18 | **Revised B1 design.** 1962-specific fields live on `LiturgicalDay1962 extends LiturgicalDay`, NOT on optional fields on `BaseLiturgicalDay`. Reason: keep 1969 types clean of 1962 concepts. Supersedes 2026-04-16 Q4 decision to discriminate via optional fields on the base type.                                                                                                                                                                  |
| 2026-04-18 | **Revised B1 design.** Engine extensions land as virtual methods on `Calendar` (`createLiturgicalDay`, `postReduceDay`, `resolveOccurrence`) + a factory `Romcal.createCalendar()`, not on `CalendarDef`. Rationale: `Calendar` owns the full pipeline; `CalendarDef` is per-overlay so dispatch would be ambiguous. Proper-of-time extension continues via existing `ProperOfTime extends CalendarDef` seam — no new `buildProperOfTime` virtual.     |
| 2026-04-18 | **Revised B1 design.** `Romcal` becomes generic: `Romcal<T extends LiturgicalDay = LiturgicalDay>`. `Romcal1962 extends Romcal<LiturgicalDay1962>`. Default generic preserves 1969's public API.                                                                                                                                                                                                                                                       |
| 2026-04-18 | Phase A complete (commit `5f2d442`). `packages/` back to upstream's 3; cross-rite sharing via `@internal/rite-roman1969`.                                                                                                                                                                                                                                                                                                                              |
| 2026-04-18 | Upstream feedback: revert 5-package reshape; integrate `Romcal1962` as a `Romcal` subclass via a `GeneralRoman1962` CalendarDef. Pivot plan adopted; supersedes Phases C–E above.                                                                                                                                                                                                                                                                      |
| 2026-04-18 | 1962 calendar classes drop the `_1962` suffix. Collision with 1969 names avoided by separate package / import path. Explicit re-export list in `rites/roman1962/src/index.ts`, no wildcard.                                                                                                                                                                                                                                                            |
| 2026-04-18 | Commit plan compressed from 17 micro-commits to 4 focused commits (A1 + B1 + B2 + B3).                                                                                                                                                                                                                                                                                                                                                                 |
| 2026-04-18 | B2 sub-phased (B2a–B2e-3) instead of one commit. Reason: parity work against the legacy engine surfaced scoring divergences (Class IV sancti centi-tiebreak, Nativity duplicate leapfrog) that needed isolated debug cycles, and B2e's 4,657-line deletion was safer to land after the OOP engine had stabilized under a coverage-level parity pin for 3 years × 3 overlays.                                                                           |
| 2026-04-18 | Parity bar set at coverage-level, not per-date-primary equality. Legacy `buildLiturgicalYear1962` and the OOP engine diverge on ~34% of dates in 2024 by slug convention and by an intentional scoring trade-off (OOP's `resolveOccurrence` runs class+fine before kind tie-break to fix the Nativity case). Pinned invariants: date coverage equality, transferred-feast fingerprints, marker Class I primaries per overlay. Legacy deleted in B2e-1. |
| 2026-04-18 | `ProperOfTime1962` file keeps `#`-prefix privates converted to `private` modifier (B2e-2) to avoid tslib helper emission under this workspace's tslib-free toolchain. Convention: `private readonly` fields, not `#`-prefix, for any new class in the 1962 package.                                                                                                                                                                                    |
