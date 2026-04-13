# 07 — Pre-port decisions

Small, load-bearing choices the importer will make hard to reverse. Lock these before M2.

## 1. Disposition of the `divinum-officium/` clone — DECIDED

**A — add to `.gitignore`.** Contributors re-clone when regenerating data. Importer records the source commit SHA in generated JSON for traceability.

## 2. Liturgical-day ID convention — REVISED

Fair point: "tridentine" in modern usage carries sociological baggage (traditionalist-movement connotations, with SSPX overtones) even though it's historically just "pertaining to Trent". We want neutral technical language that both FSSP and SSPX communities — and ordinary pastoral users — can read without reading a position into.

Options reconsidered:

- **A.** No prefix at all. The rite package already namespaces ids (`romcal/1962` vs `romcal`). For a 1962-only feast, a bare `finding_of_the_holy_cross` is unambiguous *within* the 1962 rite.
- **B.** Neutral numeric suffix: `finding_of_the_holy_cross_1962`. Pure date reference, no ideological charge.
- **C.** Source-Missal prefix: `mr1962_…` (Missale Romanum 1962). Technical, accurate, unused elsewhere.
- ~~D. `tridentine_…`~~ — rejected (loaded).
- ~~E. `vetus_ordo_…` / `ef_…`~~ — rejected (also movement-coded).

Recommendation: **A — no prefix.** Share ids with 1969 where the feast is identical (`saint_thomas_aquinas`), use a bare id where the feast is 1962-only (`finding_of_the_holy_cross`). The rite sub-path is the namespace. Cross-rite tooling that joins 1969 and 1962 can use `{ rite: '1962', id: 'finding_of_the_holy_cross' }` without ambiguity.

If a disambiguation affix is ever needed (e.g. a reporting context that flattens both rites into one table), add `_1962` as a suffix — it names the Missal, not a movement.

## 3. Preface taxonomy

The `[Rule]` line carries `Prefatio=<id>` with ~15 values across 1962 Masses (Nat, Pasch, Apost, Trinitate, Communis, BMV, Quadragesimalis, Crucis, etc.). Ship a closed enum `PrefaceId` in `constants/` rather than letting arbitrary strings leak into `LiturgicalDay.rubrics.preface`. Importer fails loudly on unknown values.

## 4. Colors

Divinum-officium data **doesn't store colors explicitly**. Color is derived from rank + season + class of feast (red for martyrs, white for confessors, violet for Advent/Lent, etc.). Options:

- **A.** Derive at import time with a rules table (martyr → red, virgin-not-martyr → white, season-ferial → seasonal). Ship concrete `colors` arrays.
- **B.** Derive at runtime in the rubrics engine.

**Decision: A** — derive at import time with a hand-checkable rules table in `build/import-rules/colors.ts`.

## 5. Scripture references

Lines like `!Ps 24:1-3` appear inside text sections. Keep them as **inline structured tokens** in the porter's output, not merged into the prose:

```ts
type PropersBlock = Array<
  | { type: 'text'; lang: string; value: string }
  | { type: 'scriptureRef'; ref: string }
  | { type: 'directive'; value: 'v.' | '&Gloria' | '$Qui vivis' | … }
>;
```

**Decision: structured tokens.** Consumers render refs as links / footnotes without re-parsing.

## 6. Commons mapping

1969's `Common.*` set (`Common.Bishops`, `Common.Martyrs`, …) is close but not identical to the 1962 `Commune/*` files (which include e.g. `C1` = Apostles, `C2` = Evangelists, `C3` = One Martyr in Paschaltide, etc.). Decide: reuse `Common.*` with 1962-specific additions, or ship a parallel `Common1962.*` enum. **Decision: parallel enum `Common1962`** — keeps semantics faithful since the mapping isn't 1-to-1.

## 7. Cross-reference resolution

Files use `@Tempora/Nat30`, `@Commune/C2a:Oratio`, `ex Sancti/12-25m3`. Options:

- **A.** Flatten at import time so each `MassEntry.propers` is self-contained.
- **B.** Preserve as `{ $ref: 'tempora/nat30' }` pointers; resolve when a consumer fetches propers.

**Decision: hybrid — A for leaf propers, B for Commons references.** Commons are genuinely shared; duplicating them bloats data ~5×. A feast that says "use Common of One Martyr + own Collect" emits its own Collect inline and a pointer to the Commons file.

## 8. Year-of-validity on the calendar

The 1960 calendar has a small number of changes over its lifetime (e.g. canonisations add feasts). Do we freeze to a specific promulgation date, or track subsequent additions?

**Decision: freeze to the 1962 Missale Romanum as promulgated.** Later canonisations are a separate data layer consumers can add; out of scope for the base.

## 9. Test fixtures

Pick reference years up front:
- **1962** — first full year under Rubricae 1960.
- **1969** — last year before Novus Ordo (natural benchmark).
- **2000, 2025** — modern years, Easter late + early.
- **1954** as a non-goal check that 1962 code doesn't claim to handle it.

Snapshot Jest tests against divinumofficium.com HTML for these years, stored under `__tests__/fixtures/`.

## 10. `rites/roman1962/package.json` name & dependencies

- Keep package private: `"name": "@internal/rite-roman1962"`, `"private": true`.
- Add `"@internal/rite-roman1969": "*"` as a dependency (for models/types reuse per decision §1 in milestones).
- Expose as root sub-path export `"./1962"` → `rites/roman1962/dist/index.js` in root `package.json`.

## 11. Stop conditions for the importer

The importer should **fail loudly** on:

- Unknown `[Rank]` class string.
- Unknown `Prefatio=` value.
- Unresolved `@` reference.
- Duplicate `MM-DD` in a calendar table without a rubric-version tag.

No silent fallbacks; a surprising input means the data has a case we haven't modelled.
