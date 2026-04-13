# 14 — M7: Public API & release packaging (1962)

M7 wraps the build pipeline that M2–M6 grew into a single
class-shaped public API so that downstream code does not have to
chain `buildLiturgicalYear1962` → `attachPropers` themselves, or
remember which options live on which function.

## Scope

**In scope**

- A `Romcal1962` class that mirrors the surface area of the 1969
  `Romcal` class where it makes sense, but is honest about the
  places where the 1962 model differs.
- A single config object (`Romcal1962Config`) covering:
  - `includePropers?: boolean` (default `false`) — when true,
    `generateCalendar` runs `attachPropers` so each celebration
    carries `propers` + `extraSections`.
  - `propersLocales?: string[]` (default `['la']`) — locale filter
    forwarded to `attachPropers`. Currently only `la` ships
    content; other locales return empty strings.
  - `attachToCommemorations?: boolean` (default `false`) — also
    attach propers to commemoration entries (off by default to
    keep the payload small).
- `generateCalendar(year): Promise<ResolvedYear1962>` — wraps the
  computation in a microtask-friendly Promise (matches the 1969
  shape) and caches per year per instance.
- `getOneLiturgicalDay(date): Promise<ResolvedDay1962 | undefined>`
  — date-keyed lookup. Computes the year that contains the date if
  it has not already been computed.
- `config: Romcal1962ConfigOutput` getter for introspection.
- A package README (`rites/roman1962/README.md`) with a quick-start
  example and a capability/limitation table.

**Explicitly deferred** (intentionally out of M7):

- ID-keyed `getOneLiturgicalDay`. The 1962 model is fundamentally
  per-day (a single celebration can be transferred from one date to
  another by the rubrics engine), so an ID lookup is ambiguous.
  Consumers who need the canonical home of a feast can read
  `buildSanctoral1962(year)` directly.
- Cross-year continuity for `getOneLiturgicalDay`. Christmas-side
  calls supply the gregorian date; the helper picks the gregorian
  year. Lookups that should resolve to a celebration whose Advent
  start lives in the previous gregorian year still work because
  `buildLiturgicalYear1962(year)` already covers
  Dec-29-of-(year-1) through end-of-`year`.
- Multi-Mass feast surfacing (Christmas `12-25` → `m1`/`m2`/`m3`)
  and the special-liturgy days (Good Friday, Holy Saturday,
  Pentecost Vigil, All Souls). These are M6 data gaps tracked for
  M8.
- Concurrence (First Vespers conflict) and Class II feast-of-the-
  Lord transfer. Tracked for the next rubrics-engine iteration.
- Vernacular propers data pack.
- Changeset / version bump. Done at the actual release cut, not
  per-milestone.

## API shape

```ts
import { Romcal1962 } from 'romcal/1962';

const r = new Romcal1962({
  includePropers: true,
  propersLocales: ['la'],
});

// Map<isoDate, ResolvedDay1962>
const year = await r.generateCalendar(1962);

// ResolvedDay1962 | undefined
const day = await r.getOneLiturgicalDay('1962-04-22');
console.log(day?.primary.propers?.introit?.la);
// → 'Resurréxi, et adhuc tecum sum, ...'
```

## Why a class, not just functions

The functional surface (`buildLiturgicalYear1962`, `attachPropers`,
`resolvePropers`) stays exported and is the right tool for
one-shot scripts and tests. The class adds:

1. A single config shape so consumers don't have to thread the same
   options through two functions.
2. Per-instance caching of computed years (matches the 1969 class).
3. Promise-wrapped methods so heavy computation can be scheduled in
   a microtask without blocking the event loop.

## File layout

```
rites/roman1962/src/
  romcal-1962.ts           # the class
  romcal-1962-config.ts    # config object + defaults
  romcal-1962-types.ts     # Romcal1962Config{,Input,Output}
rites/roman1962/__tests__/
  romcal-1962.test.ts      # ctor / generateCalendar / getOne / cache
rites/roman1962/README.md  # package quick start
```

The class lives in its own file (not in `src/index.ts`) so that
`index.ts` stays a pure barrel.

## Tests

1. Default ctor produces propers-less calendar (no `propers`
   field on celebrations).
2. `includePropers: true` populates `propers.introit` for known
   dates (1962-04-22 Easter, 1962-11-01 All Saints).
3. `propersLocales: ['en']` returns empty `en` strings (matches
   M6 test 4).
4. `getOneLiturgicalDay('1962-04-22')` returns the same primary as
   `generateCalendar(1962).get('1962-04-22')`.
5. `generateCalendar(1962)` called twice returns the same cached
   reference (identity check).
6. `attachToCommemorations: true` populates propers on
   commemoration entries when present.

## Acceptance

- All M1–M6 tests still pass.
- New `romcal-1962.test.ts` green.
- ESLint clean.
- Package README documents the public surface and the deferred
  items so consumers know what's missing.
