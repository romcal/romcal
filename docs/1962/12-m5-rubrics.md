# 12 — M5: Rubrics engine & per-day resolution (1962)

M5 is the engine that turns the two independent streams produced by M3
(Proper of Time) and M4 (Proper of Saints) into a single **per-day
resolution**: which Mass is celebrated, which losers are commemorated
at it, and which impeded Class I feasts transfer to a later free day.

Source of truth: _Codex Rubricarum_ promulgated by John XXIII, 25 July
1960, esp. §§91–114 (occurrence, concurrence, commemoration, transfer).
We re-implement the rubrics in TypeScript; we do not port Perl.

## Scope and non-goals

**In scope**

- Tempora–Sancti merge per civil date.
- Class-based occurrence resolution (who wins the primary Mass).
- Commemoration selection (which losers are said at the winner's Mass).
- Forward-transfer of impeded Class I feasts to the next free day.
- Infer a class rank for every Tempora entry (M3 only tags `season`
  and `kind`; we need Class I/II/III/IV here).

**Explicitly deferred**

- **Concurrence**. Concurrence is a Divine-Office rule about First
  Vespers of the following day colliding with Second Vespers of the
  current day. Our scope is Mass (see 05-milestones.md non-goals), so
  concurrence is not implemented.
- **Class II feast-of-the-Lord transfer** (distinct from Class I).
  Rubricae 1960 §15 transfers Class II feasts of the Lord that fall on
  Sundays. The surface area is small (Transfiguration 08-06, Exaltation
  of the Cross 09-14, Holy Trinity — already movable). Skipped for M5
  baseline; documented as a known gap.
- **Pre-1960 exceptions** (Tridentine, Divino Afflatu). Not in this
  project's scope.
- **Commemoration-count caps** (max 3 at solemn Mass, 1 at private).
  We emit all qualifying commemorations; the caller can trim.
- **Resolving commemoration-by-name** (Kalendarium rows store
  commemorations by Latin name only). We surface the raw Latin; a
  downstream slug-resolver is M6's job.

## Data flow

```
M3 ProperOfTimeYear: Map<isoDate, ProperOfTimeEntry>
                      +
M4 Sanctoral1962Year: Map<isoDate, SanctoralEntry1962[]>
                      ↓
M5 buildLiturgicalYear1962(year) -> Map<isoDate, ResolvedDay1962>
```

For each civil date of the given year we collect the Tempora entry (if
any) and the Sancti entries (if any), score each, pick the highest, and
route the losers.

## Tempora class inference

M3 only tags `season` and `kind` (sunday/feria/feast/vigil/octaveDay/
withinOctave). For occurrence, M5 needs a 1960 **class** for each
Tempora entry. Rule table:

| Tempora signature                                                       | 1960 class       |
| ----------------------------------------------------------------------- | ---------------- |
| `Quad6-4` Holy Thursday, `Quad6-5` Good Friday, `Quad6-6` Holy Saturday | I (Triduum)      |
| `Pasc0-0` Easter Sunday                                                 | I                |
| `Pasc0-1..6` Easter Week ferias                                         | I                |
| `Pasc1-0` Low Sunday                                                    | I                |
| `Pasc7-0` Pentecost Sunday                                              | I                |
| `Pasc6-6` Vigil of Pentecost                                            | I                |
| `Adv<w>-0` Sundays of Advent                                            | I                |
| `Quad<1..5>-0` Sundays of Lent / Passion                                | I                |
| `Quad6-0` Palm Sunday                                                   | I                |
| `Quad6-<1..3>` Holy Week Mon–Wed                                        | I                |
| `Quadp3-3` Ash Wednesday                                                | I                |
| `Pent07-0` Trinity Sunday (same as `Pent01-0`)                          | I                |
| `Quadp<1..3>-0` Septua/Sexa/Quinqua Sunday                              | II               |
| `Epi<w>-0`, `Pent<NN>-0`, `PentEpi<N>-0` Sundays                        | II               |
| Advent ferias Dec 17–23                                                 | II               |
| Christmas-octave ferias `Nat29..Nat31`, `Nat02..Nat05`                  | II               |
| Lent ferias (`Quad<1..5>-<1..6>`)                                       | III (privileged) |
| Passiontide ferias (`Quad5-<1..6>`)                                     | III (privileged) |
| Paschaltide weekdays (`Pasc<1..6>-<1..6>`)                              | IV               |
| Pentecost octave weekdays (`Pasc7-<1..6>`)                              | II               |
| Pre-Lent ferias (`Quadp<1..3>-<1..6>` except Ash Wed)                   | IV               |
| Advent ferias before Dec 17 (`Adv<w>-<1..6>`)                           | IV               |
| Time-after-Pentecost / after-Epiphany weekdays                          | IV               |

`Nat1-0` (Sunday within Christmas Octave) and `Nat2-0` (Most Holy Name)
are both Class II sundays.

The "privileged Lent feria" rule means: a Class III sanctoral feast
falling on a Lent feria does **not** win — the feria is the primary
Mass and the feast is commemorated. We encode this by giving Lent
ferias an **equal** precedence to Class III feasts and breaking ties
in favour of the Tempora (per Rubricae 1960 §§16.1, 96).

## Precedence score

We map each candidate to a single integer score (higher = wins):

```ts
function precedence(c: Candidate): number {
  const classBase = { 1: 4000, 2: 3000, 3: 2000, 4: 1000 }[c.classOf1962];
  let fine = 0;
  if (isTriduum(c)) fine += 400;
  else if (isEasterPentecost(c)) fine += 380;
  else if (isSolemnSundayClassI(c))
    fine += 360; // Advent/Lent/Passion/Palm/Low
  else if (isAshWednesday(c)) fine += 340;
  else if (isHolyWeekFeria(c)) fine += 320;
  else if (isEasterWeekFeria(c)) fine += 300;
  else if (isPentecostVigil(c)) fine += 280;
  else if (isFeastOfLord(c)) fine += 200;
  else if (c.classOf1962 === 2 && c.kind === 'sunday') fine += 150;
  else if (isLentFeria(c)) fine += 100;
  fine += (c.numericRank ?? 0) * 0.01; // DO's numeric rank breaks remaining ties
  return classBase + fine;
}
```

The DO numeric rank (6.5, 5.09, 3, …) is carried purely as a final
tiebreak — it does not cross class boundaries because `classBase`
dominates by ≥1000.

`isFeastOfLord` is approximated via a handful of known slugs:
`saint_trinity`, `corpus_christi`, `sacred_heart`, `christ_the_king`,
`holy_family`, `most_holy_name_of_jesus`, `transfiguration`,
`exaltation_of_the_cross`, `precious_blood`, and Christmas/Epiphany
themselves. For now we match on the Latin `name` substring
(`/Domini|Christi|Jesu|Trinitatis|Corporis Christi|Ss\. Cordis/`).

## Occurrence (primary selection)

1. Gather the candidate pool: Tempora entry + all Sancti entries for
   the date.
2. Score each.
3. The highest score is the **primary**.
4. Equal-score ties are broken by: Tempora beats Sancti (Rubricae §96
   for Lent), then alphabetical `name` (deterministic).

## Commemoration selection

Given the primary `P` and the remaining losers `L` (sorted by
precedence desc):

- A loser is eligible for commemoration iff
  - its class ≤ 3, AND
  - it is not itself a ferial (Tempora `kind: 'feria'` with class IV
    is never commemorated as a Mass entity, though its Gloria/Credo
    flags may still matter in the office).
- Additionally, any commemorations carried directly on the Sancti
  entry (from the Kalendarium delta line, e.g. "Comm. Ss. Vitalis et
  Agricolae") are forwarded as-is.
- We emit all eligible entries; the caller decides how many to render
  (1960 permits 3 at solemn Mass, 1 at private).

No cap is applied at M5 — the `commemorations` array contains every
loser the rubrics permit to be mentioned.

## Forward-transfer of Class I losers

When a Class I sanctoral feast is beaten by a higher-priority Class I
Tempora (e.g. St Joseph 03-19 falls on Palm Sunday), the feast
**transfers** to the next day on which every future candidate is
Class III or IV.

Algorithm:

1. After the first occurrence pass, collect all Class I sanctoral
   losers into a `pending[]` queue keyed by original date.
2. Walk the year day by day. When a day's primary is Class ≤ IV
   (i.e. class-IV ferial, or Class III sancti that would be beaten
   by a transferred Class I), pop the earliest pending feast and make
   it the primary for that day (setting `transferredFrom`).
3. Re-run commemoration selection on that day with the transferred
   feast as primary.
4. If the queue never empties (very rare: would require years of
   contiguous Class I+II days), the remaining feasts are omitted — we
   log a warning.

**Tempora losers are never transferred.** Tempora is date-bound by
construction.

We do **not** transfer Class II feasts in this baseline. The one 1960
rule we know we are skipping: feasts of the Lord of Class II yield to
a Sunday and transfer (§15b). Documented as a known gap above.

## Output shape

```ts
export interface Celebration1962 {
  kind: 'tempora' | 'sancti';
  key: string; // temporaKey or sancti fileKey
  name: string; // Latin
  classOf1962: 1 | 2 | 3 | 4;
  rank1962: Rank1962;
  precedence: number; // derived score
  properRef?: SanctoralPropersRef | { source: string };
  rubrics?: RubricFlags1962;
  octave?: OctaveInfo;
  vigil?: { of: string };
  colors?: Color[];
  commemorationName?: string; // only on inline Kalendarium commems
}

export interface ResolvedDay1962 {
  date: string; // 'YYYY-MM-DD'
  primary: Celebration1962;
  commemorations: Celebration1962[];
  transferredFrom?: string; // ISO date the primary was displaced from
  season?: ProperOfTimeSeason;
  dayOfWeek: DayOfWeek;
}

export function buildLiturgicalYear1962(year: number): Map<string, ResolvedDay1962>;
```

A date with no candidates at all (none from M3, none from M4 — only
possible on Feb 29 of a leap year outside of Paschaltide because
otherwise the year-long M3 covers every day) has no map entry.

## Files

```
rites/roman1962/src/rubrics/
├── tempora-class.ts   # classify a ProperOfTimeEntry → Class I/II/III/IV
├── precedence.ts      # score a Celebration1962 candidate
├── occurrence.ts      # pick primary + losers for one date
├── transfer.ts        # forward-transfer queue across the year
├── commemoration.ts   # final filter on losers
└── index.ts

rites/roman1962/src/calendar-year/
├── types.ts
├── build.ts           # buildLiturgicalYear1962(year)
└── index.ts
```

Public re-exports from `src/index.ts`: `buildLiturgicalYear1962`,
`ResolvedDay1962`, `Celebration1962`.

## Tests

`__tests__/rubrics.test.ts` — a targeted set of the 20 hand-picked
tricky dates from 05-milestones.md:

1. **1962-04-22 Easter Sunday** — Pasc0-0 wins over any Class III
   sancti; no transfer, no commemoration.
2. **1962-04-15 Palm Sunday** — Quad6-0 wins over any occurring
   sancti.
3. **1962-03-19 St Joseph (Class I)** — March 19 1962 is a Monday in
   Lent week III (`Quad3-1`, privileged Class III feria). The feast
   **wins** because Class I > Class III; feria is commemorated.
4. **1962-03-25 Annunciation on Lent IV Sunday** — Annunciation is
   Class I, Lent IV is Class I Sunday. Annunciation **transfers** to
   a later free day per Rubricae §91 hierarchy.
5. **1968-12-08 Immaculate Conception on Sunday of Advent II** —
   Dec 8 1968 was a Sunday. IC Class I > Class I Sunday of Advent per
   §91 priority; Sunday is commemorated.
6. **1962-06-29 Ss. Peter & Paul** — Friday of Pent 4 week. Class I
   sancti wins over Pent\*-5 feria.
7. **1962-11-01 All Saints** — Thursday Pent 24 week. Class I wins.
8. **1962-01-01 Circumcision (Class II)** — walks out of M4 correctly;
   wins over any occurring sancti.
9. **1962-06-28 Vigil of Ss. Peter & Paul** — sancti Class II vigil
   beats Pent 4 Thursday Class IV feria; vigil is primary.
10. **1962-12-25 Christmas** — sancti Class I beats any Advent feria.
11. **1962-02-02 Purification** — Friday, Class II sancti beats
    Septuagesima Class IV feria.
12. **1962-03-17 St Patrick** — Saturday in Lent I (Quad1-6,
    privileged Class III feria). St Patrick is Class IV (1960
    universal downgrade, per M4 plan note). **Feria wins**;
    St Patrick is commemorated.
13. **Transfer round-trip**: re-running
    `buildLiturgicalYear1962(1962)` twice produces equal maps.
14. **Coverage**: every civil date of 1962 resolves (except
    non-existent Feb 29).
15. **Leap year 1964-02-29**: resolves to a Tempora feria.
16. **1962-11-02 All Souls** — sancti Class I.
17. **1962-09-29 Michaelmas** — Class I sancti beats Pent 18 Saturday.
18. **1962-12-24 Vigil of Nativity** — sancti, Class I vigil, beats
    Advent IV feria.
19. **1962-01-06 Epiphany** — Class I sancti, wins; no weekday
    conflict because M3 skips 01-06.
20. **1962-02-11 Septuagesima Sunday** — Tempora `Quadp1-0`, Class II
    sunday. Any Class III sancti that day is commemorated.

## Acceptance

- 20/20 spot-checks pass.
- `buildLiturgicalYear1962(1962).size === 365` (or 366 on leap
  years).
- `npm test --workspace=@internal/rite-roman1962` green.
- ESLint clean.
- Re-exports verified from `src/index.ts`.
