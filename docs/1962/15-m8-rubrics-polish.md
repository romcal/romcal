# 15 — M8: Rubrics polish & commemoration cap (1962)

M8 closes a few rubrics gaps documented in M5, plus adds the
commemoration-count cap that M5 explicitly punted on. The work is
small in surface area but covers latent correctness bugs (a Class II
feast of the Lord on a Sunday, e.g. Transfiguration 1961-08-06) that
the existing M5 test year (1962) does not exercise.

## Findings re. M5 deferred items

Two M5 items needed re-classification before scoping:

1. **Concurrence**. Per Codex Rubricarum 1960 §107, concurrence
   governs **First Vespers** of the following day colliding with
   Second Vespers of the current day — entirely an Office rule with
   **zero impact on Mass**. Since this project's scope is the Mass
   calendar (see [05-milestones.md](./05-milestones.md) non-goals),
   concurrence is not a gap; it is out-of-scope by rubric. M8
   updates the M5 doc to make this distinction explicit.
2. **Class II feast-of-the-Lord "transfer"**. The M5 doc described
   §15 as "transferring" Class II feasts of the Lord that fall on
   Sundays. The actual rubric (§15) reads:
   _"Festa Domini I classis vel II classis quae cum dominicis I aut
   II classis occurrunt, locum dominicae assumunt cum eius
   commemoratione."_ — Class I/II feasts of the Lord that occur with
   Class I/II Sundays **win** with the Sunday commemorated. They do
   **not** transfer. The current `precedence.ts` already implements
   this (Class II Lord +200 beats Class II Sunday +150) — but the
   path is untested in 1962 because no qualifying feast falls on a
   Sunday that year. M8 adds explicit synthetic-year tests and
   replaces the underlying name regex with an explicit key set so
   the rule is auditable.

## Scope (in)

1. **Replace `LORD_FEAST_NAME` regex with explicit key set**. Current
   code matches against the Latin `name` substring. Brittle. Replace
   with `LORD_FEAST_KEYS: Set<string>` keyed on sancti `key`
   (`08-06`, `09-14`, `02-02`, `08-15`, `01-01`, …). Existing tempora
   keys still get the +200 fine via the tempora branch.
2. **Vigil suppression on parent transfer**. When a Class I sancti
   feast is forward-transferred (M5 §"Forward-transfer of Class I
   losers"), its vigil (if present, identified via the M4
   `vigil.of` field) is also impeded per Rubricae §11. The vigil's
   tempora date is rewritten so the vigil disappears (and the
   replaced primary, normally a feria of the same date, takes over).
3. **Commemoration count cap**. Add a pure function
   `applyCommemorationCap(year, { mode })` where
   `mode = 'solemn' | 'private' | 'all'`. Trims `commemorations[]`
   per §111–113: ≤3 at solemn Mass, ≤1 at private Mass. The order
   of `commemorations[]` is already precedence-desc from M5, so the
   cap is a simple slice.
4. **`Romcal1962` config wiring**. Add
   `commemorationLimit?: 'solemn' | 'private' | 'all'` (default
   `'all'`). When set, `generateCalendar` runs
   `applyCommemorationCap` after `attachPropers`.
5. **Synthetic-year tests for Class II Lord precedence**.
   - `1961-08-06` Transfiguration on Pent11-0 → Transfiguration
     wins; Pent11-0 commemorated.
   - `1958-09-14` Exaltation on Pent16-0 → Exaltation wins;
     Pent16-0 commemorated.
6. **Tempora-class verification tests**.
   - Greater Ferials Dec 17–23 are Class II and beat Class III
     sancti.
   - Ember days have the documented class.

## Scope (out)

- External solemnities (§356–361, parish-level Sunday transfer of
  Class I feasts).
- Octave-week conflicts beyond what M5 already passes.
- Surfacing impeded-feast-of-the-octave commemorations beyond the
  same-date losers.
- Anything Office-related (concurrence, Vespers).

## API additions

```ts
import { applyCommemorationCap, type CommemorationCapMode } from '@internal/rite-roman1962';

const capped = applyCommemorationCap(year, { mode: 'private' });
// capped.get('1962-04-22').commemorations.length <= 1
```

```ts
new Romcal1962({
  includePropers: true,
  commemorationLimit: 'private',
});
```

## Files

```
rites/roman1962/src/rubrics/
  precedence.ts            # regex → key set
  commemoration-cap.ts     # NEW
  transfer.ts              # add vigil suppression
  index.ts                 # re-exports applyCommemorationCap
rites/roman1962/src/romcal-1962-types.ts
rites/roman1962/src/romcal-1962-config.ts
rites/roman1962/src/romcal-1962.ts
rites/roman1962/__tests__/rubrics-polish.test.ts   # NEW
docs/1962/
  15-m8-rubrics-polish.md  # this doc
  12-m5-rubrics.md         # clarify deferred items
  05-milestones.md         # M8 entry
  README.md                # M8 status
rites/roman1962/README.md  # capability table
```

## Acceptance

- New `rubrics-polish.test.ts` green (Class II Lord on Sunday,
  vigil suppression, commemoration cap).
- All M1–M7 tests still pass (91/91 → 100/100+).
- ESLint clean.
