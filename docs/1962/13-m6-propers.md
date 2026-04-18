# 13 — M6: Mass propers surfaced on the day (1962)

M6 is the opt-in layer that attaches the actual **Mass proper texts**
(Introit, Collect, Epistle, Gospel, …) to each `ResolvedDay1962`
produced by M5. The data is already on disk (`data/sancti.json`,
`data/tempora.json`, `data/commune.json` — all imported in M2); M6's
job is the **traversal**: for the primary celebration on a given day,
resolve every Mass section to its final text blocks, dereferencing
any `Commune/*` or `Sancti/*` / `Tempora/*` pointers.

Source of truth: the already-parsed JSON bundles under
`rites/roman1962/data/`. We do not re-parse Perl files.

## Scope and non-goals

**In scope**

- A `resolvePropers(celebration)` function that returns a
  `MassPropers` object populated with the 13 Mass sections the
  `LiturgicalDay1962Extensions.propers` field declares.
- Reference resolution for per-section pointers of the form
  `Commune/Cxx[:Section]`, `Sancti/MM-DD[:Section]`,
  `Tempora/KEY[:Section]`. A section that is the inline block
  `[{ type: 'ref', target: '…' }]` is resolved the same way.
- A convenience `attachPropers(resolvedYear)` that augments every
  day's primary + commemorations with their `propers` field,
  returning a new map (input map left untouched).
- Locale filter: since divinum-officium only ships Latin, every
  returned `LocalizedText` is `{ la: '…' }`. The filter is a
  no-op plumbing hook that future vernacular data packs can
  extend.
- A lightweight in-memory cache keyed by `${source}::${section}`
  so repeated resolutions (e.g. every day of a Pent-week feria
  that inherits from the same Sunday) pay the traversal once.

**Explicitly deferred**

- **Vernacular propers**. We don't have non-Latin text in the
  DO bundles. The `propersLocales` config option is wired but
  currently silently drops everything that isn't `la`.
- **Commemoration propers**. We surface them on the primary;
  commemoration-specific Collect/Secret/Postcommunion resolution
  (which is a distinct rubric in 1960) is documented as a known
  gap here and picked up in M7 if needed.
- **Preface text**. The preface _id_ is already on
  `rubrics.preface` from M5. Rendering the actual Latin preface
  text is a downstream concern — for now `MassPropers.preface`
  stays `undefined`.
- **Section picking by rubric variant**. Some tempora entries
  have `GradualeL1..L5` (lesson-specific graduals for Ember
  Saturdays); we surface all of them verbatim under their raw
  keys via `extraSections`. The caller decides which one to
  render.
- **HTML / plain-text rendering**. `MassPropers` stays a
  structured shape (`LocalizedText = Record<locale, string>`)
  — each section value is the **concatenated text** of the
  block's `text` items, newline-joined. Rubric directives,
  scripture refs, and separator markers are dropped at the
  locale boundary (but retained on the richer `block` field
  for consumers that need them).

## Data flow

```
M5 ResolvedYear1962: Map<isoDate, ResolvedDay1962>
                      +
M6 attachPropers()
                      ↓
ResolvedYear1962 where primary.propers / commemorations[i].propers
are populated.
```

`resolvePropers` is a pure function of the celebration's
`properRef` plus the three data bundles. It does not look at the
date or the resolved day — everything flows from `properRef.source`
(e.g. `'sancti/11-01'` or `'tempora/Pasc0-0'`) and the optional
`properRef.communeSlug` (e.g. `'C3a-1'`).

## Section model

The JSON already normalises each section to a **block**:

```ts
type PropersBlockItem =
  | { type: 'text'; lang: LocaleId; value: string; role?: TextRole }
  | { type: 'scriptureRef'; ref: string }
  | { type: 'directive'; value: string }
  | { type: 'ref'; target: string }
  | { type: 'rubric'; note: string }
  | { type: 'separator' };

type PropersBlock = PropersBlockItem[];
```

A section either carries inline block items or is a single
`{ type: 'ref', target: '…' }` pointing elsewhere. Top-level
`references: Record<SectionName, string>` is the **fallback**
pointer used when the section key is missing from `sections`
entirely. Both must be honoured.

Resolution algorithm for section `S` on celebration `C` with
source `source` and commune `communeSlug`:

1. Look up `C.sections[S]`. If it exists and is not a lone
   `{ type: 'ref' }`, return the inline block (after resolving
   any nested `type: 'ref'` sub-items).
2. If the inline block is a lone ref, or the section is absent,
   look for `C.references[S]`. Dereference the target.
3. If the reference is `Commune/<slug>[:Section]` use
   `commune.json`. If `Sancti/MM-DD[:Section]` use `sancti.json`
   keyed on `MM-DD` (or `MM-DDx` variants present in the
   calendar). If `Tempora/KEY[:Section]` use `tempora.json`.
4. If the reference omits the `:Section` suffix, use `S` as
   the section name in the target file.
5. If after all of this the section is still unresolved (some
   feasts legitimately lack e.g. a Tract), omit it. We do not
   throw.

Cycle-detection: a `visited` set of `${source}::${section}`
tuples protects against circular references in the data.

## Mass section set

`MassPropers` declares the 13 canonical fields (already in
`src/types/liturgical-day-1962.ts`):

```
introit, collect, epistle, gradual, alleluia, tract, sequence,
gospel, offertory, secret, preface, communion, postcommunion
```

Mapping from DO JSON section name → `MassPropers` field:

| DO section                       | MassPropers field                                     |
| -------------------------------- | ----------------------------------------------------- |
| `Introitus`                      | `introit`                                             |
| `Oratio`                         | `collect`                                             |
| `Lectio`                         | `epistle`                                             |
| `Graduale`                       | `gradual`                                             |
| `Alleluia`                       | `alleluia` _(rare — usually inlined into `Graduale`)_ |
| `Tractus`                        | `tract`                                               |
| `Sequentia`                      | `sequence`                                            |
| `Evangelium`                     | `gospel`                                              |
| `Offertorium`                    | `offertory`                                           |
| `Secreta`                        | `secret`                                              |
| `Præfatio ins` / preface markers | `preface` (defer)                                     |
| `Communio`                       | `communion`                                           |
| `Postcommunio`                   | `postcommunion`                                       |

Everything else (`GradualeL1..L5`, `LectioL1..`, `Maundi`,
`Benedictio Fontis`, `Super populum`, `Commemoratio *`,
`Ultima Evangelium`, `Name`, …) is passed through on
`extraSections: Record<string, PropersBlock>` for callers that
need the full proper.

## Public API

```ts
// rites/roman1962/src/propers/index.ts
export { resolvePropers } from './resolve';
export { attachPropers } from './attach';
export type { MassPropers, ResolvePropersOptions } from './types';
```

```ts
interface ResolvePropersOptions {
  locales?: string[]; // default ['la']; non-'la' silently dropped today
  attachToCommemorations?: boolean; // default false
}

function resolvePropers(
  celebration: Celebration1962,
  options?: ResolvePropersOptions
): {
  propers: MassPropers;
  extraSections: Record<string, PropersBlock>;
};

function attachPropers(year: ResolvedYear1962, options?: ResolvePropersOptions): ResolvedYear1962;
```

Re-exports from `src/index.ts`: `resolvePropers`, `attachPropers`,
plus the `MassPropers` / `PropersBlock` types (already exported).

## Files

```
rites/roman1962/src/propers/
├── types.ts         # ResolvePropersOptions, ResolvedPropers
├── lookup.ts        # parse 'Commune/C3a-1:Introitus' → { bundle, key, section }
├── resolve.ts       # resolvePropers(celebration, options)
├── attach.ts        # attachPropers(year, options)
├── locale.ts        # filter a PropersBlock → LocalizedText per requested locale
└── index.ts         # barrel
```

The existing `Celebration1962.inlineCommemorations` carries the
Kalendarium delta-style commemorations already; these are
pass-through and get no propers lookup (they're commem names
only — M4 surfaces the reference but resolving them properly is
M7 territory).

## Tests

`__tests__/propers.test.ts`:

1. **Inline tempora** — 1962-04-22 Easter Sunday. `propers.introit`
   starts with `Resurréxi` (inline in `Pasc0-0.Introitus`).
2. **Inline sancti Class I** — 1962-11-01 All Saints.
   `propers.introit` starts with `Gaudeámus`. Collect,
   Offertory (via `Commune/C3a-1`) and Secret (via `Commune/C3a`)
   resolve through the commune pointer.
3. **Full commune inheritance** — 1962-01-17 St Anthony abbot.
   Everything except `Evangelium` resolves from Commune (because
   the feast-level `references` map points Evangelium at
   `Commune/C5:Evangelium` and the feast has no other inline
   sections); `propers.gospel` comes back non-empty.
4. **Locale filter** — Latin is present; passing
   `{ locales: ['en'] }` returns empty strings for every section
   (deferred-data gap).
5. **extraSections** — 1962-04-21 (Easter Eve, Ember-saturday
   style) surfaces multiple `LectioL*` under `extraSections`.
6. **Cache** — `resolvePropers` called twice for the same
   celebration returns `propers` that deep-equals on second call;
   internal timing check optional.
7. **attachPropers idempotence** — applied twice, the result is
   deep-equal to applied once.
8. **No-throw on missing** — a celebration with a broken
   reference (seed via mock) returns a partial `MassPropers`
   with the bad section omitted; no error thrown.

## Acceptance

- 8/8 propers tests pass.
- `npm test --workspace=@internal/rite-roman1962` green.
- ESLint clean.
- `resolvePropers(primary)` returns at least 1 populated Mass
  section for every primary celebration in `buildLiturgicalYear1962(1962)`.
