# 10 — M3: Proper of Time (1962)

M3 builds a **date → Tempora-file key** resolver for the 1962 Proprium
de Tempore. It is a pure date-math module with no knowledge of Propers
of Saints and no rubrical conflict-resolution (that is M4 / M5). Its
output is the movable-date backbone that M4 will merge with the fixed
sanctoral.

## Output shape

```ts
export interface ProperOfTimeEntry {
  date: string; // 'YYYY-MM-DD'
  temporaKey: string; // matches a key in rites/roman1962/data/tempora.json
  season: ProperOfTimeSeason; // Advent | ChristmasTide | EpiphanyTide | Septuagesima | Lent | Passiontide | HolyWeek | EasterWeek | Paschaltide | AscensionTide | TimeAfterPentecost
  weekIndex: number; // week within season (1-based, 0 for prefix days like Ash Wed → Sat)
  dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = Sunday (Roman convention)
  tempora: TemporaSlotKind; // 'sunday' | 'feria' | 'feast' | 'vigil' | 'octaveDay' | 'withinOctave'
}

export type ProperOfTimeYear = Map<string, ProperOfTimeEntry>;
export function buildProperOfTime1962(year: number): ProperOfTimeYear;
```

Keys are the ISO date `YYYY-MM-DD`. The resolver returns a **sparse**
map — only dates owned by the 1962 Proprium de Tempore appear. Fixed-
date feasts (Christmas, Circumcision, Epiphany, every Sancti entry) do
**not** appear here; they come from `calendar-1960.json` → `sancti.json`
and will be merged in M4. The resolver doesn't know about sanctoral and
doesn't resolve precedence (that's M5).

## Division of the year

The 1962 Proprium de Tempore is a chain of named slots. Each slot has
an **anchor** (usually Easter ± N days, or Advent 1 ± N days, or a fixed
civil date like Dec 25) and a **temporaKey** that points into the
imported `tempora.json` data.

### Anchors computed from Easter(year)

Easter is supplied by `@internal/easter`. All paschal-cycle anchors are
offset from Easter:

| Anchor                | Offset from Easter          | Tempora anchor               |
| --------------------- | --------------------------- | ---------------------------- |
| Septuagesima Sunday   | −63                         | Quadp1-0                     |
| Sexagesima Sunday     | −56                         | Quadp2-0                     |
| Quinquagesima Sunday  | −49                         | Quadp3-0                     |
| Ash Wednesday         | −46                         | Quadp3-3                     |
| Thu/Fri/Sat post-cin. | −45, −44, −43               | Quadp3-4, Quadp3-5, Quadp3-6 |
| Lent I Sunday         | −42                         | Quad1-0                      |
| Lent II–V Sundays     | −35 … −14                   | Quad2-0 … Quad5-0            |
| Passion Sunday        | −14                         | Quad5-0                      |
| Palm Sunday           | −7                          | Quad6-0                      |
| Holy Thursday         | −3                          | Quad6-4                      |
| Good Friday           | −2                          | Quad6-5                      |
| Holy Saturday         | −1                          | Quad6-6                      |
| Easter Sunday         | 0                           | Pasc0-0                      |
| Easter Monday–Sat     | +1 … +6                     | Pasc0-1 … Pasc0-6            |
| Low Sunday            | +7                          | Pasc1-0                      |
| Paschaltide Sun II–V  | +14 … +35                   | Pasc2-0 … Pasc5-0            |
| Rogation Mon/Tue/Wed  | +37, +38, +39               | Pasc5-1, Pasc5-2, Pasc5-3    |
| Ascension Thursday    | +39                         | Pasc5-4                      |
| Sun. in Octave Asc    | +42                         | Pasc6-0                      |
| Pentecost Vigil       | +48                         | Pasc6-6 (see note ↓)         |
| Pentecost Sunday      | +49                         | Pasc7-0                      |
| Trinity Sunday        | +56                         | Pent01-0                     |
| Corpus Christi        | +60 (Thu after Trin.)       | — (sanctoral, skip)          |
| Sacred Heart Friday   | +68 (Fri after C.C. octave) | — (sanctoral, skip)          |

> **Ash Wednesday note.** Divinum-officium places the Ash-Wed-through-Sat
> prefix in the Quinquagesima (Quadp3) week: Quadp3-3 = Feria IV
> Cinerum, Quadp3-4..Quadp3-6 = Thursday/Friday/Saturday after Ashes.
> Verified by reading `Quadp3-3.txt` header `Feria IV Cinerum`.

### Anchors computed from Advent I

Advent I Sunday = Sunday whose date is in the range Nov 27–Dec 3,
inclusive. Equivalently: the Sunday nearest to Nov 30 (St Andrew) but
never later than Dec 3.

| Anchor           | Offset from Advent I |
| ---------------- | -------------------- |
| Advent I Sunday  | 0                    |
| Advent I Mon–Sat | +1 … +6              |
| Advent II Sun    | +7                   |
| Advent III Sun   | +14 (Gaudete, Rose)  |
| Advent IV Sun    | +21                  |

Not every Advent IV week has 6 ferias — if Dec 24 lands on Mon–Sat of
Advent IV, the remaining weekdays roll into the Christmas cycle. The
resolver stops Advent at Dec 24 (exclusive: Dec 24 is Vigil of
Christmas, tempora key `Nat1-0v` or similar — TBD on probe).

### Anchors computed from civil dates

| Anchor                                | Civil date                             | Tempora key                                                                   |
| ------------------------------------- | -------------------------------------- | ----------------------------------------------------------------------------- |
| Vigil of Christmas                    | Dec 24                                 | — _(Sancti/12-24)_                                                            |
| Christmas Day                         | Dec 25                                 | — _(Sancti/12-25)_                                                            |
| Dec 26, 27, 28                        | —                                      | — _(Sancti: Stephen, John, Innocents)_                                        |
| Dec 29, 30, 31 intra-oct.             | Dec 29-31                              | `Nat29`, `Nat30`, `Nat31` _(displaced by Becket/Sylvester in 1962 sanctoral)_ |
| Sun. within Christmas Octave          | Sunday Dec 26-31, else Dec 30          | `Nat1-0`                                                                      |
| Circumcision / Octave                 | Jan 1                                  | — _(Sancti/01-01)_                                                            |
| Jan 2, 3, 4, 5 ferials                | —                                      | `Nat02`, `Nat03`, `Nat04`, `Nat05`                                            |
| Most Holy Name                        | Sunday Jan 2–5, else Jan 2             | `Nat2-0`                                                                      |
| Epiphany                              | Jan 6                                  | — _(Sancti/01-06)_                                                            |
| Days after Epiphany                   | Jan 7–12                               | `Epi1-1..Epi1-6`                                                              |
| Sun. Octave of Epiphany = Holy Family | 1st Sunday after Epiphany              | `Epi1-0a`                                                                     |
| Sundays after Epiphany II–VI          | consecutive Sundays until Septuagesima | `Epi2-0..Epi6-0`                                                              |

The Sundays-after-Epiphany count is whichever fits between Epiphany and
Septuagesima. If Easter is early, some Sundays after Epiphany are
**resumed** at the end of Time after Pentecost per the 1960 Rubricae
(see below).

### Time after Pentecost

- First Sunday = Trinity (Pent01-0). Subsequent Sundays Pent02-0,
  Pent03-0, …
- The last Sunday of October is **Feast of Christ the King** (sanctoral,
  but movable by Sunday — M4 will override).
- The last Sunday before Advent I is the **"XXIV Sunday after
  Pentecost"** whose texts are always Pent24-0 regardless of how many
  Sundays elapsed.
- If fewer than 24 full Sundays fit, the **"resumed Sundays after
  Epiphany"** fill the gap: the unused Epi II+ Sundays' formularies
  slot in immediately _before_ Pent24-0. Divinum-officium stores these
  as `PentEpi3-0..PentEpi6-0` — one block per possible resumed Sunday.
  The last of them is always Pent24-0.

  Algorithm (1960 rubric):
  1. Count Sundays between Trinity (exclusive) and Advent I (exclusive).
     Call that `N`.
  2. Fill Pent02-0, Pent03-0, … up to the Sunday _before_ the
     penultimate. That's `N − 1 − <resumed count>` slots, then
     `<resumed count>` resumed-Epi Sundays, then Pent24-0 as the last
     Sunday.
  3. "Resumed count" = number of Sundays-after-Epiphany that were
     skipped earlier in the year (i.e., `5 − (actualEpiSundaysUsed)`
     where actualEpiSundaysUsed includes the `Epi1-0` = Holy Family
     slot). Capped at 0.
  4. Ferial days for a resumed-Epi week use `PentEpiX-1..PentEpiX-6`.

  This is the 1962 "resumed Sundays after Epiphany" rule. Edge cases
  exercised by years 1962 (Easter late, normal), 1943 (Easter early,
  resumed Sundays present), 2008 (Easter very early).

## Feria resolution

For every date not claimed by a Sunday or major feast, pick
`<seasonPrefix><weekIndex>-<dayOfWeek>`:

- Advent: `Adv<w>-<d>`
- Christmas cycle weekdays: `Nat<mm>` (TBD — there are special files
  Nat02..Nat05 and Nat29..Nat31 that cover Dec 26-31; the resolver maps
  direct civil date → file)
- Epiphany week: `Epi1-<d>`
- Sundays after Epiphany: `Epi<w>-<d>`
- Septuagesima block: `Quadp<w>-<d>` for w∈1..3, plus `Quadp6-<d>` for
  Ash Wed – Sat before Lent I
- Lent: `Quad<w>-<d>` for w∈1..5
- Holy Week: `Quad6-<d>`
- Easter Octave: `Pasc0-<d>`
- Paschaltide weeks: `Pasc<w>-<d>` for w∈1..6
- Week before Pentecost: `Pasc7-<d>`
- After Pentecost: `Pent<WW>-<d>` zero-padded (01..24)
- Resumed Epi: `PentEpi<w>-<d>`

Where a weekday key is absent in the data (some `*-1..*-6` files do not
exist because the 1960 rubrics merged Commemoration-ferias), the
resolver falls back to the Sunday of that week with a warning.

## Vigils

Handled as separate slots that replace that specific date:

- Vigil of Christmas (Dec 24) — if not a Sunday
- Vigil of Epiphany (Jan 5) — if not a Sunday (1960 rubric: Vigil of
  Epiphany was suppressed in 1960, but we keep the slot for
  completeness and mark it `suppressed1960: true`)
- Vigil of Pentecost (day before Pentecost) — `Pasc6-6` has the Vigil
  texts

Vigils are surfaced via `tempora: 'vigil'` on the `ProperOfTimeEntry`.

## Build-time probe

Before emitting the table the resolver **probes** `tempora.json`: every
key referenced by `slots.ts` must exist. A missing key aborts the build
with a clear error (`proper-of-time missing tempora key: <k>`). This is
the fail-loud posture from `07-pre-port-decisions.md §11`.

Probing also catches typos in the slot table and regressions when
divinum-officium moves files.

## Scope **not** covered by M3

- Proper of Saints (M4).
- Conflict resolution between Tempora and Sancti (M5).
- Populating `LiturgicalDay.propers` (M6).
- Octaves as nested entries on a day (M5; the resolver only emits the
  primary-per-day entry).
- Commemorations (M5).
- Text of the Mass (already imported in M2; M3 doesn't inline it).

## Files

```
rites/roman1962/src/proper-of-time/
├── anchors.ts     # Easter → derived dates; Advent-I from year
├── slots.ts       # Static table: slot-name → temporaKey + anchor-rule + rank/flags
├── resolver.ts    # buildProperOfTime1962(year) → ProperOfTimeYear
├── types.ts       # ProperOfTimeEntry, Season, TemporaSlotKind
└── index.ts       # barrel export
```

Public re-exports from `src/index.ts`:

```ts
export { buildProperOfTime1962 } from './proper-of-time';
export type { ProperOfTimeEntry, ProperOfTimeYear } from './proper-of-time';
```

## Tests

`__tests__/proper-of-time.test.ts`:

1. **1962 year** — spot-check key dates:
   - 1962-01-06 = Epi1-0 (Epiphany)
   - 1962-03-07 = Ash Wed — Quadp6-3 (Wed of 6th pre-Lent week)
   - 1962-04-15 = Palm Sunday — Quad6-0
   - 1962-04-22 = Easter Sunday — Pasc0-0
   - 1962-05-31 = Ascension — Pasc5-4
   - 1962-06-10 = Pentecost — Pasc7-0
   - 1962-06-17 = Trinity — Pent01-0
   - 1962-12-02 = Advent I — Adv1-0
   - 1962-12-25 = Christmas — Nat1-0
2. **Easter-early 2008** — triggers resumed Epi Sundays.
   - Verify a PentEpiN-0 slot is used.
3. **Easter-late 2011** — no resumed-Epi Sundays.
4. **Coverage** — every date of 1962 has exactly one entry; keys all
   resolve in `tempora.json`.
5. **Idempotence** — `buildProperOfTime1962(1962)` equals itself on a
   second call (structural equality).

## Implementation order

1. `types.ts` — type skeleton.
2. `anchors.ts` — pure date math. Unit-testable in isolation.
3. `slots.ts` — the table. Heavy; correctness lives here.
4. `resolver.ts` — walk from Jan 1 → Dec 31 picking slots. Probe
   tempora.json at the end (optional via `{ probe: true }`).
5. `__tests__/proper-of-time.test.ts` — day-by-day assertions.
6. Wire through `src/index.ts`.

## Acceptance

- All 9 spot-checks in the test pass.
- Every date in 1962 resolves to a valid `temporaKey` that exists in
  `data/tempora.json`.
- Easter-early edge case (2008) and easter-late (2011) both coverage
  without throwing.
- `npm test --workspace=@internal/rite-roman1962` green.
- ESLint clean.
