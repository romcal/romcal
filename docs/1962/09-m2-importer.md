# 09 — M2: divinum-officium importer

Goal: one-shot TypeScript importer that turns `divinum-officium/web/www/{missa,horas,Tabulae}/**` into JSON fixtures under `rites/roman1962/data/`, committed to git. Subsequent milestones consume the JSON; no Perl or live file parsing at runtime.

Acceptance:

- `npm run import:do -w=@internal/rite-roman1962` runs end-to-end.
- Produces: `data/source.json`, `data/calendar-1960.json`, `data/tempora.json`, `data/sancti.json`, `data/commune.json`.
- Byte-equal diff between consecutive runs (idempotent; sorted keys).
- Importer **fails loudly** on unknown rank class, unknown preface, missing referenced file.
- Smoke test parses the emitted JSON and asserts a handful of known feasts (Advent 1, Conversion of St Paul, Easter Sunday, St Joseph the Worker).
- **Scope:** Latin only. Vernacular-text import is a follow-up.

## Input inventory (what we actually parse)

- **Propers texts**: `divinum-officium/web/www/missa/Latin/{Tempora,Sancti}/*.txt` (~480 Tempora + ~458 Sancti files).
- **Commons**: `divinum-officium/web/www/horas/Latin/Commune/*.txt` (not `missa/Latin/Commune/` — that folder only has Coronatio and Propaganda; Mass files reference `@Commune/Cxxx` which live under `horas/`).
- **Calendar inheritance**: `divinum-officium/web/www/Tabulae/data.txt` registers version chains; the 1960 calendar is the delta chain `1570 → 1888 → 1906 → 1939 → 1954 → 1955 → 1960` (per `Kalendaria/*.txt`).
- **Source SHA**: `git rev-parse HEAD` in the clone, written to `data/source.json` for traceability.

## Output shape

```
rites/roman1962/data/
├── source.json        # { sha, importerVersion, generatedAt (null for determinism) }
├── calendar-1960.json # { "MM-DD": FeastEntry[] }
├── tempora.json       # { "<file-key>": MassEntry }   e.g. "Adv1-0"
├── sancti.json        # { "<file-key>": MassEntry }   e.g. "01-25" / "01-25r"
└── commune.json       # { "<file-key>": MassEntry }   e.g. "C5-1"
```

### `FeastEntry` (calendar-1960.json)

```ts
interface FeastEntry {
  fileKey: string; // e.g. '01-25r' → sancti.json['01-25r']
  name: string; // from the delta line
  numericRank: number; // e.g. 4 (raw rank from the table)
  class1962: 1 | 2 | 3 | 4;
  rank1962: Rank1962; // ClassI..Ferial
  commemorations?: Array<{ fileKey?: string; name: string; numericRank: number }>;
}
```

### `MassEntry` (tempora / sancti / commune)

```ts
interface MassEntry {
  id: string; // 'sancti/01-25', 'tempora/Adv1-0', 'commune/C5-1'
  source: 'tempora' | 'sancti' | 'commune';
  file: string; // original filename, e.g. '01-25.txt'
  officium?: string; // [Officium] block
  rank: RankInfo; // resolved for the 1960 rubric edition
  rubrics: RubricInfo; // resolved for the 1960 rubric edition
  colors: Color[]; // derived — see §Color rules
  commune?: string; // 'C5-1' if the file's rank line says `ex Commune/...`
  sections: Record<string, PropersBlock>; // every [SectionName] in the file
  references: Record<string, string>; // sections that are just `@file:Section`
  warnings: string[]; // anything weird but non-fatal (sorted)
}

interface RankInfo {
  raw: string; // unmodified [Rank] line used
  classText: string; // raw; historical reference only (pre-1960 vocabulary — see 07 §12)
  numericRank: number; // authoritative 1960 signal
  class1962: 1 | 2 | 3 | 4;
  rank1962: Rank1962;
  sourceRefs: string[]; // e.g. ['ex Sancti/06-30']
}

interface RubricInfo {
  gloria?: boolean;
  credo?: boolean;
  preface?: PrefaceId;
  lastGospel?: 'ultimum' | 'proper' | 'none';
  ite?: 'ite' | 'benedicamus' | 'requiescant';
  raw: string[]; // original [Rule] lines
}

type PropersBlock = PropersBlockItem[]; // already defined in src/types
```

### `PropersBlock` token grammar (from div.off. prefixes)

Per-line classification inside a section body:

| Prefix            | Emitted token                                             |
| ----------------- | --------------------------------------------------------- |
| `!Ps 24:1-3`      | `{ type: 'scriptureRef', ref: 'Ps 24:1-3' }`              |
| `!Pro S. Petro`   | `{ type: 'directive', value: 'Pro S. Petro' }`            |
| `v. …`            | `{ type: 'text', lang: 'la', value: '…', role: 'verse' }` |
| `&Gloria`         | `{ type: 'directive', value: 'Gloria' }`                  |
| `$Per Dominum`    | `{ type: 'directive', value: 'Per Dominum' }`             |
| `@Commune/C5-1`   | `{ type: 'ref', target: 'commune/C5-1' }`                 |
| `@:Oratio Petri`  | `{ type: 'ref', target: '{self}:Oratio Petri' }`          |
| `_`               | `{ type: 'separator' }`                                   |
| `(rubrica 196 …)` | `{ type: 'rubric', note: '…' }`                           |
| plain prose       | `{ type: 'text', lang: 'la', value: '…' }`                |

We'll extend `PropersBlockItem` in `src/types/liturgical-day-1962.ts` to add `ref`, `separator`, `rubric` and an optional `role` field on `text`.

## Calendar resolution

1. Parse `Tabulae/data.txt` to build the version graph. Target = "Rubrics 1960 - 1960".
2. Walk the chain back to 1570 (full table).
3. For each chain file `Kalendaria/<name>.txt`, parse lines of form `MM-DD=newSlug[~variant…]=Name=Rank=[CommemName=CommemRank=…]`.
4. Apply in order: `1570 → 1888 → 1906 → 1939 → 1954 → 1955 → 1960`. `XXXXX` on the right-hand side removes a date.
5. Emit `calendar-1960.json` keyed by `MM-DD`, sorted ascending.

Detail: the `newSlug` maps to a filename in `Sancti/<slug>.txt`. Suffix letters (`r`, `t`, `o`, `cc`, `oct`, `m*`) are variant spellings — we record the slug verbatim as `fileKey` and expect `sancti.json[fileKey]` to exist.

## Rank / class / preface / color normalization

- **Class text → numeric**: Perl uses a float field. We keep it as a number; in `rank1962` we map `≥6 → ClassI, 4–5 → ClassII, 2–3 → ClassIII, ≤1 → ClassIV`. Ferias are detected when no sanctoral entry applies (derived later by Proper of Time in M3, not by the importer).
- **Rubric selection**: files contain multiple `[Rank]` / `[Rule]` blocks tagged with parenthetical markers like `(rubrica 1960)`, `(sed rubrica innovata)`, `(rubrica divino afflatu)`. Prefer the block marked `(rubrica 1960)` or `(rubrica 196...)`; else use the last unmarked block.
- **Preface**: `Prefatio=<name>`. Normalize by lookup into `PREFACE_IDS`. Accept common spellings (`Apostolis` / `Apostolorum`). Unknown ⇒ hard error.
- **Colors** (small rules table in `build/import-divinum-officium/colors.ts`):
  - `In Nativitate`, `Sanctissimi Nominis`, `Epiphania` → White
  - `…Martyris`, `…Martyrum`, `Sanguinis` → Red
  - `Ss. Petri et Pauli`, `Apostolorum` → Red
  - `Virginis`, `Virginum`, `Confessoris`, `Confessorum` (not-martyr) → White
  - Seasons: Advent, Septuagesima/Sexagesima/Quinquagesima, Lent → Purple
  - Laetare/Gaudete Sundays → Rose
  - Ordinary Sunday / weekday → Green
  - Easter Octave, Pentecost → White (Red on Pentecost Sunday)
  - Requiem / Defunctorum → Black
  - Fallback → Unknown + warning (NOT fatal for M2).

## Fail-loud matrix

| Condition                                    | Action |
| -------------------------------------------- | ------ |
| Unknown rank class text                      | ERROR  |
| Unknown preface                              | ERROR  |
| Missing file referenced in calendar table    | ERROR  |
| Missing file referenced via `@` in a section | ERROR  |
| Multiple rubric variants, none for 1960      | WARN   |
| Unknown color input                          | WARN   |
| Parse failure in a line of a section body    | WARN   |

## Pipeline

```
build/import-divinum-officium/
├── index.ts           # orchestrator: load → parse → emit
├── parser.ts          # tokenize .txt into { header, sections[], rankBlocks[], ruleBlocks[] }
├── rank.ts            # parse [Rank] lines, normalize class
├── rules.ts           # parse [Rule] lines, extract rubric flags
├── section.ts         # turn raw lines into PropersBlock tokens
├── calendar.ts        # resolve the 1960 calendar from the inheritance chain
├── refs.ts            # classify @ / ex / vide / $ / & / ! / v. prefixes
├── colors.ts          # name → Color rules table
├── prefaces.ts        # name → PrefaceId (allow-list)
├── rank-map.ts        # numericRank → Rank1962
├── types.ts           # shared importer-internal types
├── emit.ts            # serialize to JSON with sorted keys (idempotence)
└── errors.ts          # typed errors
```

Entry point script in package.json:

```json
"import:do": "tsx build/import-divinum-officium/index.ts"
```

## Idempotence

- All emitted JSON is built from sorted keys and arrays of deterministic order.
- No timestamps in output (`generatedAt: null`).
- Parser normalizes line endings to `\n` and strips trailing whitespace per line.
- SHA of the divinum-officium clone recorded in `source.json` — changes when the upstream changes, static otherwise.

## Smoke test

`__tests__/importer.test.ts`:

1. `import calendar from '../data/calendar-1960.json';`
2. Expect `calendar['01-25']` exists with name matching `/Conversione S. Pauli/`.
3. Expect `calendar['05-01']` exists with name matching `/Joseph Opificis/`.
4. Expect `tempora['Adv1-0'].rubrics.credo === true` and `tempora['Adv1-0'].rubrics.gloria === false`.
5. Expect `sancti['01-25'].rubrics.preface === 'Apostolorum'` (after normalization from `Apostolis`).

## Out of scope (deferred)

- Rendering cross-refs into self-contained inlined propers (decided in §7 of `07-pre-port-decisions.md`: flatten leaves, keep Commons refs). For M2 we emit Commons as files too, so consumers resolve via `commune.json[fileKey]`.
- Localized text from non-Latin `missa/<Lang>/` trees.
- Vigils, Ember-day propers from dynamic computation (those derive from Proper of Time in M3).
- Transfer / concurrence / occurrence logic (M5).

## Risk

- **Calendar delta semantics vary between files**. Some files have tilde-concatenated variants in the RHS (`01-25=01-25r=…`). Some have `XXXXX` to erase. Some commemoration slugs embed the commemoration name inline. Parser needs defensive handling and a `warnings[]` list per date.
- **Rubric tagging is inconsistent**. Many files have only one `[Rank]` block (good — use it). Some have multiple with comment-only markers between. A few have `(sed rubrica innovata)` which marks the _new_ (post-1955) variant; we must pick the post-1955 when present.
- **Commons chain internal refs**. A Commons file may reference another Commons file. We emit them all and let consumers resolve.
