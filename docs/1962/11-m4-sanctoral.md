# 11 — M4: Proper of Saints & Commons (1962)

M4 builds a **date → sanctoral entry** table for fixed-date feasts in the
1962 Missale Romanum, with cross-resolution into the Common propers
(`commune/*`). M4 is still **pre-merge**: its output sits alongside the
M3 Proper of Time, and M5 is the rubrical engine that decides which of
the two wins on a given day.

## Output shape

```ts
export interface SanctoralEntry1962 {
  date: string; // 'YYYY-MM-DD'
  mmdd: string; // 'MM-DD'
  fileKey: string; // slug from calendar-1960.json ('11-01', '06-28r')
  source: 'sancti' | 'tempora';
  name: string; // Latin
  rank1962: Rank1962; // AUTHORITATIVE 1960 class — from Mass-file
  class1962: 1 | 2 | 3 | 4 | undefined;
  numericRank: number; // Mass-file decimal rank (6.5, 5.09, 3, …)
  colors: Color[]; // derived at import time
  rubrics: RubricFlags1962; // gloria, credo, preface, … (from M2)
  properRef: {
    source: string; // 'sancti/11-01' or 'tempora/Nat30'
    commune?: string; // 'commune/C3' — only when the feast inherits
  };
  commemorations: SanctoralCommemoration[];
  octave?: OctaveInfo; // derived from the classText string
  vigil?: { of: string }; // the feast whose vigil this is
}

export interface SanctoralCommemoration {
  name: string; // Latin, from the kalendarium row
  numericRank: number; // kalendarium integer rank
  fileKey?: string; // resolved slug if lookup succeeds
}

export type Sanctoral1962Year = Map<string, SanctoralEntry1962[]>;

export function buildSanctoral1962(year: number): Sanctoral1962Year;
```

Keys are ISO dates `YYYY-MM-DD`. The map is **sparse in the same sense
as M3**: only dates with at least one fixed-date celebration appear. A
date that is pure ferial appears in M3 and is absent here. A date that
carries both (e.g. Jan 2 = Nat02 feria + optional commemoration) gets a
sanctoral entry iff the kalendarium lists one for that `MM-DD`.

## The rank-source problem

Divinum-officium stores **two independent rank signals**:

1. **Kalendarium integer rank** in `Tabulae/Kalendaria/*.txt` — used by
   the DO Perl engine for occurrence sorting. Integers 1–6 on a
   legacy-Tridentine scale. 11-01 (All Saints) is rank `3` here because
   the row was written in 1570 and never updated.
2. **Mass-file `[Rank]` decimal rank** in
   `missa/Latin/Sancti/MM-DD.txt` — the dignity rank (6.5, 6.4, 5.09,
   3, 2, …) used to choose the proper's formulary. When the file has a
   `[Rank] (rubrica 196)` block, that is the 1960-specific signal and
   M2's importer already selects it preferentially.

The M2 importer populated `calendar-1960.json[*].rank1962` from the
**kalendarium** integer rank — which is incorrect for 1960 semantics.
Example: 11-01 → `ClassIII` in calendar, `ClassI` in sancti.

**Rule for M4**: the Mass-file rank from `sancti.json` is authoritative
for the emitted `SanctoralEntry1962.rank1962`. The kalendarium rank is
retained only on commemorations (where we have nothing better). We also
surface the raw Kalendarium rank on a debug-only field so M5 /
validation scripts can diff. This fixes All Saints, Christmas, Epiphany
(implicitly) and every other feast where the two disagree.

> This is a known importer data-quality issue. Re-running the importer
> later to store both signals explicitly is out of scope for M4 — we
> simply trust `sancti.json.rank` and move on.

## Leap-year rule (Feb 29)

1960 Rubricae §75: in annus bissextilis the feast of Matthias is kept
on Feb 24 and the Vigil of Matthias on Feb 23 as in a normal year; the
extra bissextile day (civil Feb 29) becomes a repetition of the Feb 28
liturgical day. BUT for the modern 1960-compliant implementation, the
simplest civil-first rule is adopted: every sanctoral entry is keyed on
its civil `MM-DD`, and `Feb 29` simply has **no sanctoral entry** — it
falls through to M3 (a Septuagesima / Lent / Pent-whatever feria
depending on the year). Years that exercise this: 1964, 2000, 2008,
2016, 2020, 2024.

## Commune resolution

`sancti.json[fileKey]` carries:

- `references: { Introitus: 'Tempora/...', Postcommunio: 'Commune/C10b', … }`
  — per-section pointers the Perl engine dereferences at render time.
- `rubrics.gloria/credo/preface` — already booleans / `PrefaceId`.

M4 exposes a **single commune reference** per feast:
`properRef.commune = 'commune/Cxx'` when the feast's `references` all
point into the same `Commune/C…` file (i.e. the feast is "from the
Common of …"). When sections disagree (some inline, some from
Tempora, some from a Commune) we emit no `properRef.commune` and leave
the sections-map intact for M6 to surface per-section.

Algorithm:

1. For each feast's `references` map, filter to values matching
   `/^Commune\/C/`.
2. If all such values share a single prefix (`Commune/C3:X`,
   `Commune/C3:Y` all → `commune/C3`), emit `properRef.commune = 'commune/C3'`.
3. Otherwise, emit no commune pointer and rely on per-section refs.

`commune.json[C3]` is the authoritative commune data — we do **not**
inline it into each feast.

## Octave detection

1960 retained three octaves: Christmas (Nat), Easter (Pasch), Pentecost
(Pent). All other octaves were abolished by Rubricae 1960 §81. The
`sancti.json[fileKey].rank.classText` field retains legacy strings like
`"Duplex I classis cum octava communi"` — which the DO data ships for
1570/1955 historical reasons even in files tagged `(rubrica 196)`.

M4 rule:

- Only emit `octave` for the three allowed octaves, and only on the
  octave-day MM-DDs we recognise explicitly:
  - 01-01 (Octave of Christmas) → Circumcision, `octave.day = 8`
  - 05-03 suppressed? No — Easter octave is movable (M3 already
    emits Pasc0-0…Pasc0-6 entries).
  - 06-10/11 movable Pentecost octave — handled by M3.
- For all other `classText` octave mentions: **ignore** — they're
  pre-1960 leftovers not observed in 1962.

Net: M4 surfaces `octave` only on **01-01** (Circumcision = day 8 of
the Christmas Octave) in this milestone. Easter and Pentecost octaves
are M3's responsibility and will be joined in M5 when M3 + M4 merge.

## Vigil detection

A fileKey whose Mass-file name starts with `"Vigilia "` is a vigil
entry. We extract `vigil.of` from the rest of the name, e.g.
`"Vigilia S. Laurentii Martyris" → vigil.of = 'saint_lawrence_martyr'`.
For this milestone we keep the raw Latin stem (no id-slugifier yet):
`vigil.of = "S. Laurentii Martyris"`. M6 or the locale layer can
resolve this to a slug later.

Known 1962 vigils with sanctoral slugs in calendar-1960.json:

| MM-DD | fileKey | name                                          |
| ----- | ------- | --------------------------------------------- |
| 06-28 | 06-28r  | Vigilia Ss. Petri et Pauli Apostolorum        |
| 08-09 | 08-09t  | Vigilia S. Laurentii Martyris                 |
| 08-14 | 08-14   | Vigilia Assumptionis BMV                      |
| 11-30 | 11-30v  | Vigilia S. Andreae Apostoli                   |
| 12-23 | 12-23   | Vigilia Nativitatis — **Sancti-owned per M3** |

(exact list depends on the full `calendar-1960.json`; M4 walks by
name-prefix, it does not hardcode dates.)

## Public API

```ts
// rites/roman1962/src/sanctoral/index.ts
export { buildSanctoral1962 } from './resolver';
export type { SanctoralEntry1962, SanctoralCommemoration, Sanctoral1962Year } from './types';
```

Re-exported from `src/index.ts` alongside M3's proper-of-time exports.

## Files

```
rites/roman1962/src/sanctoral/
├── types.ts         # SanctoralEntry1962, SanctoralCommemoration
├── data.ts          # lazy loaders for calendar-1960.json / sancti.json / tempora.json / commune.json
├── resolver.ts      # buildSanctoral1962(year)
├── commune-ref.ts   # derive properRef.commune from sancti references
├── vigil.ts         # detect vigil entries
├── octave.ts        # derive the 3 surviving-in-1962 octaves
└── index.ts         # barrel
```

## Tests

`__tests__/sanctoral.test.ts`:

1. **Rank parity with authoritative 1962 lists** — spot-check:
   - `1962-12-25` Nativity → ClassI
   - `1962-01-01` Circumcision → ClassI, octave.day = 8
   - `1962-01-06` Epiphany → ClassI
   - `1962-11-01` All Saints → **ClassI** (not ClassIII — this is the
     rank-source fix)
   - `1962-12-08` Immaculate Conception → ClassI
   - `1962-06-24` St John Baptist → ClassI
   - `1962-08-15` Assumption → ClassI
   - `1962-09-14` Exaltation of the Cross → ClassII
   - `1962-06-29` Ss. Peter & Paul → ClassI
   - `1962-02-02` Purification → ClassII
   - `1962-03-17` St Patrick → ClassIV (1960 universal downgrade per
     `(rubrica 196)`)
   - `1962-01-25` Conversion of St Paul → ClassIII
2. **Vigils** — `1962-06-28` carries `vigil.of = 'Ss. Petri et Pauli Apostolorum'`.
3. **Commune ref** — `1962-01-17` (Anthony abbot) → `properRef.commune = 'commune/C7'`
   (adjust to whichever commune actually matches per data).
4. **Leap year** — `2000-02-29` has no sanctoral entry.
5. **Coverage** — every `fileKey` referenced in `calendar-1960.json`
   resolves to a present key in `sancti.json` OR `tempora.json`. No
   dangling refs.
6. **Idempotence** — two calls equal.
7. **Cross-check against M3** — every `SANCTORAL_OWNED` date from the
   M3 resolver (12-24, 12-25, 12-26, 12-27, 12-28, 01-01, 01-06) has a
   sanctoral entry in M4.

## Scope **not** covered by M4

- Merging M3 + M4 into a single per-day resolution (→ M5).
- Occurrence / concurrence / commemoration rubrics (→ M5).
- Transfer of impeded Class I/II feasts (→ M5).
- Surfacing `MassPropers` on the `LiturgicalDay` (→ M6).
- Slug-normalising commemoration names into romcal ids (→ M6 / locale
  layer).

## Acceptance

- All 12 spot-checks in test 1 pass (esp. the All-Saints Class-I fix).
- Every `calendar-1960.json` fileKey resolves via data.ts.
- `npm test --workspace=@internal/rite-roman1962` green.
- ESLint clean.
