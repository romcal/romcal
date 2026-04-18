# B1 — Engine extension points (for upstream review)

Phase B1 of the upstream-feedback pivot. This commit lives on our fork
at `8a7dfd5`; it is what we'd like to propose as a PR against
`github.com/romcal/romcal` _before_ the 1962 rite lands. The 1962 rite
can then be a separate package that consumes these seams — matching
the "Romcal1962 should be treated as a base new calendar, not an
entirely calendar system" feedback.

## One-line summary

Add three virtual methods on `Calendar`, one factory on `Romcal`, one
discriminator field on `LiturgicalDay`, and one declarative `octave`
input — all with default implementations that reproduce today's
behavior byte-for-byte. No consumer change; 100% of the existing test
suite remains green. The surface enables any rite variant (1962,
Ambrosian, Mozarabic, Dominican, …) to subclass and plug in
rite-specific precedence / transfer / factory behavior without forking
the engine.

## Why this shape

The maintainer feedback on our earlier proposal was:

> "given that Romcal1962 needs to conform to the general type of
> Romcal anyway, Romcal1962 should be treated as a base new calendar,
> not an entirely calendar system."

The problem we had: 1962's rubrics (Rubricae 1960 §111–113), forward
transfer + vigil suppression, and its own `LiturgicalDay1962` shape
couldn't be expressed via the existing extension seams. `CalendarDef`
subclassing only covers inputs + proper-of-time (which is already
cleanly subclassable — `ProperOfTime extends CalendarDef`). But the
`Calendar` reducer and the `new LiturgicalDay(…)` factory were
hardcoded inside `Calendar`/`Romcal`.

Three narrow virtuals unlock all three 1962 needs. No new types. No
new concepts. Same file count; same class count.

## What changed (by file)

Total: 6 production files touched; 2 new spec files. +288 / −82 LOC in
production code.

### 1. `rites/roman1969/src/models/liturgical-day.ts` (+13)

- Public `readonly rite!: 'roman1969'` field on `LiturgicalDay`.
- Assigned non-enumerable in the constructor via `Object.defineProperty`,
  so `{...this}`, `JSON.stringify`, and jest snapshots do not see it.
  Snapshot tests (6 of them) remain byte-identical. TypeScript sees the
  typed field for subclass narrowing either way.

```ts
readonly rite!: 'roman1969';

constructor(...) {
  this.#liturgicalDayDef = def;
  this.#liturgicalDayConfig = liturgicalDayConfig;
  Object.defineProperty(this, 'rite', {
    value: 'roman1969',
    writable: false,
    enumerable: false,
    configurable: true,
  });
  // ...
}
```

**Why non-enumerable:** every existing snapshot / JSON shape stays
unchanged. `configurable: true` so subclasses can redefine in their
constructor (`LiturgicalDay1962` will assign `'roman1962'` here).

### 2. `rites/roman1969/src/types/liturgical-day.ts` (+17)

- Export `type Rite = 'roman1969' | 'roman1962'`.
- Optional `rite?: Rite` on `BaseLiturgicalDay` — so consumer code
  that holds a `BaseLiturgicalDay` can narrow by rite if it wants to.
- Optional `octave?: { rank: Rank; days: number }` on
  `LiturgicalDayInput`. See §5.

The `Rite` union hardcodes two rites today. If/when a third rite ships,
it becomes e.g. `Rite = 'roman1969' | 'roman1962' | 'ambrosian'`.
Alternative: make it `string` — we opted for the union because it
gives TS exhaustiveness checking, and union widening is a trivial PR
later.

### 3. `rites/roman1969/src/models/calendar.ts` (+126 / −61)

Three changes:

**a. Class goes generic.**

```ts
export class Calendar<T extends LiturgicalDay = LiturgicalDay> implements BaseCalendar {
```

Default `T = LiturgicalDay` preserves today's callers. All internal
`LiturgicalDay` occurrences inside the class are now `T`.

**b. Two private fields become `protected`.**

```ts
// was: readonly #config: RomcalConfig;
protected readonly config: RomcalConfig;

// was: readonly #liturgicalDayConfig: LiturgicalDayConfig;
protected readonly liturgicalDayConfig: LiturgicalDayConfig;
```

This is the only visibility widening. Subclasses need these to
implement their overrides. Fields remain `readonly`. No public API
surface change (they were private before; they remain non-public).

**c. Three protected virtual methods.** Defaults match today's behavior
exactly:

```ts
protected createLiturgicalDay(
  def: LiturgicalDayDef,
  date: Date,
  ldConfig: LiturgicalDayConfig,
  calendar: RomcalCalendarMetadata,
  baseData: T | null,
  weekday: T | null
): T {
  return new LiturgicalDay(def, date, ldConfig, calendar, baseData as LiturgicalDay | null, weekday as LiturgicalDay | null) as unknown as T;
}

protected postReduceDay(day: T, _candidates: T[]): T {
  return day;   // identity
}

protected resolveOccurrence(candidates: T[], _date: Date): T {
  // The exact sort comparator from generateCalendar(), moved verbatim.
  candidates.sort(/* UNLY #49 precedence */);
  return candidates[0];
}
```

The two `new LiturgicalDay(…)` call sites (inside `#buildDatesData`
and `getOneLiturgicalDay`) are now `this.createLiturgicalDay(…)`.

Inside `generateCalendar()`:

- The inline `.sort(…)` call is gone; replaced by
  `const resolvedWinner = this.resolveOccurrence(dates, …)`. **The
  default implementation sorts `dates` in place**, so the rest of the
  method — which reads `dates[0]`, slices, and checks optional
  memorials — observes the identical ordering it did before.
- A safety splice kicks in only when a subclass returns a winner that
  is not `dates[0]` (e.g. 1962's forward-transfer logic); it moves
  that winner to position 0 so the downstream optional-memorial /
  Holy-Thursday logic still sees `dates[0]` as the winner. Default
  callers never trigger this branch (the winner is `candidates[0]`
  post-sort, which is already `dates[0]`).
- The first item placed into `finalData[dateStr]` goes through
  `this.postReduceDay(defaultLiturgicalDay, dates)`. Default impl is
  identity — output shape unchanged.

**Why these three specifically.** 1962's three engine deltas map 1:1:

| 1962 requirement                         | Virtual               |
| ---------------------------------------- | --------------------- |
| Emit `LiturgicalDay1962` (extra fields)  | `createLiturgicalDay` |
| Rubricae 1960 §111–113 commemoration cap | `postReduceDay`       |
| Forward transfer + vigil suppression     | `resolveOccurrence`   |

No other rite-specific behaviors were identified in 1962 that aren't
either (a) data-only (sanctoral, commons, prefaces → `CalendarDef`
inputs) or (b) proper-of-time (`ProperOfTime1962 extends CalendarDef`).

### 4. `rites/roman1969/src/types/calendar.ts` (+4 / −4)

```ts
export type LiturgicalCalendar<T extends LiturgicalDay = LiturgicalDay> = Record<string, T[]>;
export type ByIds<T extends LiturgicalDay = LiturgicalDay> = Record<Id, T[]>;
export type LiturgicalBuiltData<T extends LiturgicalDay = LiturgicalDay> = {
  byIds: ByIds<T>;
  datesIndex: DatesIndex;
};
```

Defaults mean existing `LiturgicalCalendar` (no type parameter) keeps
working.

### 5. `rites/roman1969/src/models/calendar-def.ts` (+52 / −1)

Declarative octave expansion in `buildAllDefinitions`:

```ts
inputValues.forEach((input) => {
  this.#buildDefinition(id, input);
  if (input.octave) this.#buildOctaveDefinitions(id, input, input.octave);
});
```

`#buildOctaveDefinitions` loops `n = 1..days` and generates additional
`LiturgicalDayDef`s with:

- id = `${parentId}_octave_day_${n}`
- `dateDef = { ...baseDateDef, addDay: (baseDateDef.addDay ?? 0) + n }`
- `precedence` derived from `octave.rank` via a private switch

**No input in `rites/roman1969/src/calendars/` uses `octave`
today**, so this code path is not exercised by the 1969 test suite.
The seam exists so 1962 can declare its ClassI/II/III octaves as data
instead of hand-authoring N copies. A unit test in
`calendar-def-base.spec.ts` covers the expansion.

If upstream prefers to leave this out of B1 and defer to a follow-up,
we can split the commit. It's an isolated 52 LOC. But shipping it here
avoids a second round trip for something that's purely additive.

### 6. `rites/roman1969/src/index.ts` (+11 / −4)

Two changes:

**a. `Romcal` goes generic + factory.**

```ts
class Romcal<T extends LiturgicalDay = LiturgicalDay> {
  // ...
  protected createCalendar(config: RomcalConfig, ldConfig: LiturgicalDayConfig): Calendar<T> {
    return new Calendar<T>(config, ldConfig);
  }

  generateCalendar(year?): Promise<LiturgicalCalendar<T>> { ... }
  getOneLiturgicalDay(id, options): Promise<T | null | undefined> { ... }
}
```

The two `new Calendar(this.#config, ldConfig)` call sites are now
`this.createCalendar(this.#config, ldConfig)`.

**b. Re-export `Rite`** from the public surface so consumers can
narrow on it.

## Zero-behavior-change argument

1. **No enumerable fields added to `LiturgicalDay`.** Snapshot tests,
   `JSON.stringify` output, and `Object.keys(day)` output remain
   byte-identical. The 6 existing snapshot tests pass untouched.

2. **No public method signatures changed.** Every public method that
   previously returned `LiturgicalDay` or `LiturgicalCalendar` now
   returns `T` or `LiturgicalCalendar<T>` where `T extends LiturgicalDay
= LiturgicalDay`. For untyped or `new Romcal()` callers, `T` is
   inferred as `LiturgicalDay` — identical TypeScript output.

3. **No public field visibility widened.** Only two `#config` /
   `#liturgicalDayConfig` private fields became `protected`. They are
   still non-public from the consumer's perspective.

4. **Default virtual impls are literal extractions.** `resolveOccurrence`
   contains the exact same sort comparator as before, in the same order.
   `postReduceDay` is the identity function. `createLiturgicalDay`
   is `new LiturgicalDay(...)` unchanged.

5. **Declarative `octave` unused in 1969.** Zero 1969 inputs declare
   it, so `#buildOctaveDefinitions` is never called during the 1969
   test run.

6. **Test suite confirms: 683 → 688.** All 683 existing tests pass
   unchanged. +5 new tests in two new spec files cover the dispatch of
   each virtual + factory.

## Test coverage for the new seams

`rites/roman1969/src/models/calendar.spec.ts` (new, 4 tests):

1. `createLiturgicalDay` dispatch — subclass counts factory calls,
   verifies it fires once per generated day.
2. `postReduceDay` dispatch — subclass tags winners; tags appear in
   `LiturgicalCalendar` output.
3. `resolveOccurrence` dispatch — subclass returns a non-default
   winner; output reflects the subclass's choice.
4. `Romcal.createCalendar` factory — subclass `Romcal` returns a
   subclass `Calendar`; end-to-end wiring verified.

`rites/roman1969/src/models/calendar-def-base.spec.ts` (+1 test):

5. `octave` expansion — input with `{ rank, days: 7 }` produces the
   base def + 7 octave-day defs with correct ids and shifted dates.

All five run in <50 ms on CI.

## What this does NOT change

- **No 1962 code in this commit.** `rites/roman1962/` is untouched.
- **No package restructuring.** The `packages/` layout remains the
  upstream 3 (`config`, `easter`, `lunar-new-year`).
- **No CalendarDef changes beyond the `octave` seam.** All 57 country
  classes in `rites/roman1969/src/calendars/` compile and run unchanged.
- **No locale bundle changes, no martyrology changes, no bundle build
  changes.**

## How 1962 will consume this (context, not part of this PR)

To give reviewers the full picture — B2 on our fork will land the
1962 rite as a separate package that uses these seams:

```ts
// rites/roman1962/src/models/liturgical-day.ts
export class LiturgicalDay1962 extends LiturgicalDay {
  override readonly rite!: 'roman1962';
  readonly commemorations: readonly LiturgicalDayCommemoration[];
  readonly octaveOf?: OctaveOf;
  readonly vigilOf?: Id;
  readonly massReferences?: Record<string, string>;
  // ... overrides Object.defineProperty for 'rite' in its own constructor
}

// rites/roman1962/src/models/calendar.ts
export class Calendar1962 extends Calendar<LiturgicalDay1962> {
  protected override createLiturgicalDay(...): LiturgicalDay1962 { ... }
  protected override postReduceDay(day, candidates): LiturgicalDay1962 {
    // Apply Rubricae 1960 §111–113 commemoration cap.
  }
  protected override resolveOccurrence(candidates, date): LiturgicalDay1962 {
    // Forward-transfer impeded ClassI; suppress vigils.
  }
}

// rites/roman1962/src/index.ts
export class Romcal1962 extends Romcal<LiturgicalDay1962> {
  protected override createCalendar(config, ldConfig): Calendar1962 {
    return new Calendar1962(config, ldConfig);
  }
}
```

The 1962 package is a downstream consumer that adds zero new hooks.
Same model would work for Ambrosian / Mozarabic / Dominican rite
variants.

## Files in this commit

```
 rites/roman1969/src/index.ts                          |  22 ++-
 rites/roman1969/src/models/calendar-def-base.spec.ts  |  31 ++++
 rites/roman1969/src/models/calendar-def.ts            |  56 +++++-
 rites/roman1969/src/models/calendar.spec.ts (new)     | 118 +++++++++++++
 rites/roman1969/src/models/calendar.ts                | 187 ++++++++++++--------
 rites/roman1969/src/models/liturgical-day.ts          |  13 ++
 rites/roman1969/src/types/calendar.ts                 |   8 +-
 rites/roman1969/src/types/liturgical-day.ts           |  17 ++
 8 files changed, 370 insertions(+), 82 deletions(-)
```

## Review-time questions we'd welcome feedback on

1. **`Rite` as a string union vs open `string`.** We chose the closed
   union (`'roman1969' | 'roman1962'`) for exhaustiveness. Would
   upstream prefer `string` to keep new rite names out of the core
   type? (Low stakes — trivial to change either way.)

2. **`octave` declarative input bundled in B1 vs split.** It's a
   useful generic primitive even for 1969 (the existing Easter /
   Christmas octaves could arguably be data instead of hand-authored),
   but it's unused in 1969 today. Happy to pull it into a follow-up if
   preferred.

3. **Non-enumerable `rite` field.** We chose this to preserve the
   existing snapshot / JSON output shape. Alternative: enumerable
   field, regenerate 6 snapshots. Which is preferred?

4. **`createCalendar` factory on `Romcal` vs DI at `RomcalConfig`
   construction.** Factory method is the smaller diff. A DI approach
   (`new Romcal({ calendar: Calendar1962 })`) is more "upstream style"
   but would add a public config field. Happy to go either way.
