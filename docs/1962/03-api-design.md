# 03 — API & data-model design

Goal: expose 1962 through the same shape as 1969 so consumers can do

```ts
import { Romcal } from 'romcal';          // 1969 (default, unchanged)
import { Romcal } from 'romcal/1962';     // 1962 rite
```

with identical method signatures and a superset `LiturgicalDay`.

## Principles

1. **Additive types, not forks.** Extend `LiturgicalDay` with optional 1962 fields; never break 1969 consumers.
2. **Reuse enums where meanings align.** `Color`, `Season`, `Period` carry over (the 1962 uses Septuagesima — add values, don't fork the enum).
3. **Introduce parallel hierarchies only where semantics differ.** `Rank` and `Precedence` get 1962 siblings: `Rank1962` (ClassI…ClassIV, plus Ferial) and `Precedence1962`. Keep the 1969 enums untouched.
4. **Rubrical flags live on the day.** Gloria / Credo / Preface / Ite-missa-est belong on `LiturgicalDay` because they're per-day, not derivable.
5. **Proper texts are opt-in.** Ship them on the day object when the consumer asks for them (config flag), so the default payload stays small.

## Proposed `LiturgicalDay` additions (1962-only, all optional)

```ts
interface LiturgicalDay1962Extensions {
  // Ranking
  rank1962?: Rank1962;                       // ClassI | ClassII | ClassIII | ClassIV | Ferial
  class1962?: 1 | 2 | 3 | 4;                 // numeric shorthand
  tridentineRank?: TridentineRank;           // DuplexIClassis | DuplexIIClassis | DuplexMajus | Duplex | Semiduplex | Simplex (optional, for pre-1960 compatibility)

  // Rubrical flags
  rubrics?: {
    gloria: boolean;
    credo: boolean;
    preface?: PrefaceId;                     // Nat | Pasch | Apost | Trinitate | Communis | …
    lastGospel?: 'ultimum' | 'proper' | 'none';
    ite?: 'ite' | 'benedicamus' | 'requiescant';
  };

  // Octaves & vigils — see 06-octaves.md for the rationale
  octave?: {
    id: 'christmas' | 'easter' | 'pentecost';
    parentFeastId: string;
    day: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    kind: 'feast' | 'within' | 'octaveDay';
    rank: 'classI' | 'classII';
  };
  vigil?: { of: string };                    // feast whose vigil this is

  // Commemorations that are said at this Mass
  commemorations?: Array<{
    id: string;
    source: 'tempora' | 'sancti' | 'commune';
  }>;

  // Proper text references — loaded on demand
  properRef?: {
    source: string;                          // e.g. 'Tempora/Adv1-0'
    commune?: string;                        // e.g. 'Commune/C4'
  };
  propers?: MassPropers;                     // populated when config.includePropers = true
}

interface MassPropers {
  introit?: LocalizedText;
  collect?: LocalizedText;
  epistle?: LocalizedText;
  gradual?: LocalizedText;
  alleluia?: LocalizedText;
  tract?: LocalizedText;
  sequence?: LocalizedText;
  gospel?: LocalizedText;
  offertory?: LocalizedText;
  secret?: LocalizedText;
  preface?: LocalizedText;
  communion?: LocalizedText;
  postcommunion?: LocalizedText;
}

type LocalizedText = { [locale: string]: string };
```

## Precedence mapping (1962 → existing `Precedence`)

Rather than invent a second enum, map `Rank1962` onto the existing precedence positions so downstream sort logic keeps working:

| 1962                        | Maps near (1969 Precedence) |
|-----------------------------|-----------------------------|
| Class I (Easter Triduum)    | Triduum_1                   |
| Class I (Sundays, solemn)   | GeneralSolemnity            |
| Class II                    | ProperSolemnity / Feast_6   |
| Class III                   | Memorial_10                 |
| Class IV (ferias)           | Weekday_13                  |

The real ordering happens via an internal 1962 comparator that respects the Rubricae 1960 occurrence table; the mapped `precedence` is mainly for API parity.

## Config additions

```ts
interface Romcal1962Config extends RomcalConfig {
  includePropers?: boolean;          // default false
  propersLocales?: string[];         // default ['la']
  commemorations?: boolean;          // default true
  rubricEdition?: '1960' | '1955' | 'tridentine';  // default '1960'
}
```

## Locales

- Reuse existing locale files; add a `rite1962` namespace under each for 1962-specific strings (class names, rubric keywords, preface titles).
- Ship `la` Latin texts with the package (they are the authoritative liturgical language). Vernacular texts are optional data packs.

## Package layout (target)

```
rites/roman1962/
├── src/
│   ├── index.ts
│   ├── models/             # thin subclasses; reuse roman1969/models where possible
│   ├── types/              # 1962 extensions to LiturgicalDay + enums
│   ├── constants/          # Rank1962, TridentineRank, PrefaceId, …
│   ├── calendars/
│   │   └── general-roman-1962/
│   ├── proper-of-time/     # Septuagesima, Sundays-after-Epiphany/Pentecost, Octaves, Vigils
│   ├── rubrics/            # concurrence / occurrence / commemoration engine (1960)
│   ├── propers/            # data loader for JSON fixtures
│   └── locales/
├── data/                   # JSON built from divinum-officium (committed or generated)
│   ├── calendar-1960.json
│   ├── tempora/
│   ├── sancti/
│   └── commune/
├── build/
│   ├── build.ts
│   └── import-divinum-officium.ts   # one-shot porter
└── __tests__/
```

## Sharing code with roman1969

Two realistic options:

- **A. Extract a `packages/core/`** with `CalendarDef`, `LiturgicalDay`, types, locale machinery. Both rites depend on it. Cleaner, bigger refactor.
- **B. Import directly** from `@internal/rite-roman1969` for now and extract later when duplication appears. Faster to first working release.

Recommendation: start with B, revisit once 1962 is feature-complete.

## Backwards-compatibility guarantees

- `romcal` (default import) behavior is unchanged.
- `LiturgicalDay` gains optional fields only — existing property access and JSON payloads remain valid.
- No new required config options; all additions default to off/unset.
