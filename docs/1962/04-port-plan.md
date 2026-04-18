# 04 — Port plan: divinum-officium → romcal1962

How we turn the Perl project's text files into data romcal can consume.

## Strategy

One-shot TypeScript importer at `rites/roman1962/build/import-divinum-officium.ts`.

- Input: `divinum-officium/web/www/missa/**` and `…/Tabulae/**`.
- Output: JSON fixtures under `rites/roman1962/data/` + generated `inputs` for the `GeneralRoman1962` calendar definition.
- Committed to git (not runtime-generated) so tests are deterministic and the divinum-officium clone isn't a runtime dependency.

We do **not** port Perl logic. We port **data** and re-implement rubrics from the Rubricae 1960 spec in clean TypeScript.

## Pipeline

1. **Parse** each `.txt` file into a typed AST: `{ officium, ranks: Rank[], rules: Rule, sections: Record<SectionName, string[]> }`.
2. **Resolve cross-references** (`@Tempora/Nat30`, `@Commune/C2a:Oratio`) — either inline or record as pointers. Start with pointers; inline only for leaf propers.
3. **Pick the 1960 rank** when multiple `[Rank]` blocks are tagged for different rubric editions.
4. **Normalise** into `MassEntry`:
   ```ts
   interface MassEntry {
     id: string; // 'sancti_12_25_3' / 'tempora_adv_1_0'
     source: 'tempora' | 'sancti' | 'commune';
     name: string; // Latin, from [Officium] or [Rank]
     rank1962: Rank1962;
     class1962?: 1 | 2 | 3 | 4;
     // NB: no TridentineRank — see docs/1962/07-pre-port-decisions.md §12.
     rubrics: { gloria; credo; preface?; lastGospel?; ite? };
     octave?: { id; day };
     vigil?: { of };
     properRef: { source; commune? };
     propers: Partial<Record<SectionName, LocalizedText>>;
   }
   ```
5. **Merge calendar** — apply `Tabulae/Kalendaria/1960.txt` deltas over the 1955 base to produce the authoritative 1960 calendar map `MM-DD → MassEntry[]`.
6. **Emit** `data/calendar-1960.json` + `data/propers/<source>/<id>.json` split per feast per language.

## Parser notes

- Sections start at `^\[([^\]]+)\]` and run until the next header.
- Lines beginning with `;` are comments (skip).
- Lines beginning with `!` are scripture refs (e.g. `!Ps 24:1-3`) — retain as structured field `{ ref: 'Ps 24:1-3' }`.
- Lines beginning with `v.`, `&`, `$` are liturgical directives — retain verbatim inside the text stream.
- Rubric-edition tagging on section headers: `[Rank] (rubrica 1960)`. Parser keyed on the bracketed-suffix.

## Language handling

Loop over `missa/<lang>/` for `lang ∈ {Latin, English, Francais, Deutsch, Italiano, Espanol, Magyar, Polski}`. Each language's section body goes into `LocalizedText[lang]`. Latin is required; others are optional.

Mapping to our locale ids:

- Latin → `la`
- English → `en`
- Francais → `fr`
- Deutsch → `de`
- Italiano → `it`
- Espanol → `es`
- Magyar → `hu` (new locale needed)
- Polski → `pl`

## Rubrics engine (re-implemented, not ported)

Source of truth: Rubricae Generales Missalis Romani (1960), cc. 91–114.

Implement in `src/rubrics/`:

- `occurrence.ts` — which of two coinciding days wins.
- `concurrence.ts` — Vespers of a 1st-class feast vs. following 1st-class feast.
- `commemoration.ts` — which loser-feasts are commemorated at the winner's Mass.
- `transfer.ts` — forward-transfer of impeded Class I/II feasts.
- `comparator.ts` — total order over `Rank1962 × date-origin` used to rank concurrent entries.

Each gets a focused unit test using a handful of canonical years (1962, 1963, 1970) cross-checked against `divinumofficium.com` output.

## Proper-of-time

`rites/roman1962/src/proper-of-time/proper-of-time.ts` generates Sundays and weekdays from computed anchor dates:

- Advent (I–IV)
- Christmas & Octave
- Sundays after Epiphany (up to VI)
- Septuagesima, Sexagesima, Quinquagesima
- Ash Wednesday → Lent I–IV, Passion, Palm, Holy Week
- Easter Octave → Paschaltide → Ascension → Pentecost Octave
- Trinity → Sundays after Pentecost (XXIV max) → Christ the King (last Sunday of Oct)
- Ember Days, Rogation Days, Vigils

Reuse `packages/easter/` for the movable anchor.

## What ships in git vs what is generated

- **Committed:** the generated JSON under `rites/roman1962/data/`, the importer script, snapshot fixtures.
- **Not committed:** the `divinum-officium/` clone (already in `.gitignore`-able state). Contributors re-clone only when regenerating.

## Validation

- Byte-compare a sampling of 20 feast propers against the divinumofficium.com HTML render.
- Run `npm run data:checks` (extend the 1969 checker to cover 1962 fields).
- Jest snapshot of the full 1962 calendar for years 1962, 1969, 2000, 2025 to lock behavior.
