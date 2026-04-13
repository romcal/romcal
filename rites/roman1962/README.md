# @internal/rite-roman1962

1962 Tridentine Mass rite (Missale Romanum 1962 / Rubricae 1960) for romcal.

Mass-only scope: this package computes the **Mass calendar** — occurrence,
commemoration, transfer, and proper texts. The Divine Office (Breviary) is
out of scope.

## Quick start

```ts
import { Romcal1962 } from '@internal/rite-roman1962';

const r = new Romcal1962({
  includePropers: true,    // attach Mass proper texts (default: false)
  propersLocales: ['la'],  // currently only Latin ships content
});

// Map<isoDate, ResolvedDay1962>
const year = await r.generateCalendar(1962);

// Single-day lookup
const easter = await r.getOneLiturgicalDay('1962-04-22');
console.log(easter?.primary.name);
// → 'Dominica Resurrectionis'
console.log(easter?.primary.propers?.introit?.la);
// → 'Resurréxi, et adhuc tecum sum, ...'
```

## What you get back

Each `ResolvedDay1962` has:

- `primary: Celebration1962` — the day's principal celebration after
  occurrence and transfer rules are applied.
- `commemorations: Celebration1962[]` — surviving commemorations (Class I+II
  losers, ferial Sundays under feasts, etc.).
- `transferred?: { from: string; original: Celebration1962 }` — set when the
  primary was forward-transferred from an earlier date that lost it to a
  higher-ranked feast.

When `includePropers: true`, every `Celebration1962` also carries:

- `propers?: MassPropers` — the canonical Mass sections (`introit`, `collect`,
  `epistle`, `gradual`, `alleluia`, `tract`, `sequence`, `gospel`, `offertory`,
  `secret`, `communion`, `postcommunion`).
- `extraSections?: Record<string, PropersBlock>` — non-canonical sections
  (e.g. `LectioL1`..`LectioL5` on Ember Saturdays).

## Functional API

If you'd rather call the underlying functions directly:

```ts
import {
  buildLiturgicalYear1962,
  attachPropers,
  resolvePropers,
} from '@internal/rite-roman1962';

const year = buildLiturgicalYear1962(1962);
const withPropers = attachPropers(year, { locales: ['la'] });
```

## Capabilities & known gaps

| Area                        | Status      |
| --------------------------- | ----------- |
| Tempora cycle (Advent–Pent) | ✅ M3       |
| Sanctoral 1960 calendar     | ✅ M4       |
| Occurrence + commemoration  | ✅ M5       |
| Forward transfer            | ✅ M5       |
| Mass propers (Latin)        | ✅ M6       |
| Public class API            | ✅ M7       |
| Concurrence (1st Vespers)   | ⏳ M8+      |
| Class II Lord transfer      | ⏳ M8+      |
| Christmas multi-Mass        | ⏳ M8+      |
| Good Fri / Holy Sat / Vigil | ⏳ M8+      |
| Vernacular propers          | ⏳ external |
| Divine Office               | ❌ scope    |

Design and milestone docs live at
[`docs/1962/`](../../docs/1962/README.md) at the repo root.
