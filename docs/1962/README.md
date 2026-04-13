# 1962 Tridentine Mass Support — Design Docs

Tracking design & implementation of 1962 Roman Rite (Missale Romanum 1962 / Rubricae 1960) support in romcal.

## Scope

- New rite package at `rites/roman1962/` implementing the 1962 Mass calendar.
- Keep the 1969 public API shape (`Romcal`, `generateCalendar`, `getOneLiturgicalDay`, `LiturgicalDay`) so downstream consumers can swap rites with minimal church-specific branching.
- Extend types only where the 1962 rite requires information the 1969 model cannot express (class I–IV ranks, octaves, vigils, commemorations, Gloria/Credo/Preface flags, proper-text references).
- Port mass proper data & rubrical metadata from the [divinum-officium](https://github.com/divinumofficium/divinum-officium) project.

## Documents

- [01 — Findings: repo architecture](./01-findings-romcal.md)
- [02 — Findings: divinum-officium data format](./02-findings-divinum-officium.md)
- [03 — API & data-model design](./03-api-design.md)
- [04 — Port plan: divinum-officium → romcal1962](./04-port-plan.md)
- [05 — Milestones & decisions](./05-milestones.md)
- [06 — Octave handling](./06-octaves.md)
- [07 — Pre-port decisions](./07-pre-port-decisions.md)
- [08 — M1 scaffolding plan](./08-m1-scaffolding.md)
- [09 — M2 importer plan](./09-m2-importer.md)
- [10 — M3 Proper of Time plan](./10-m3-proper-of-time.md)
- [11 — M4 Proper of Saints plan](./11-m4-sanctoral.md)
- [12 — M5 Rubrics engine & per-day resolution plan](./12-m5-rubrics.md)
- [13 — M6 Mass-propers resolver plan](./13-m6-propers.md)
- [14 — M7 Public API & release packaging plan](./14-m7-public-api.md)

## Status

- M1 — scaffolding: done (commit `8d1a4f3`).
- M2 — divinum-officium importer: done. Emits `rites/roman1962/data/{calendar-1960,tempora,sancti,commune,source}.json`. See [09](./09-m2-importer.md) and [07 §12](./07-pre-port-decisions.md) for the rank-vocabulary decision.
- M3 — Proper of Time: done. `buildProperOfTime1962(year)` emits a sparse `Map<isoDate, ProperOfTimeEntry>` covering the Tempora backbone (Dec 29 – Saturday before Advent I), skipping Sancti-owned dates.
- M4 — Proper of Saints: done. `buildSanctoral1962(year)` emits `Map<isoDate, SanctoralEntry1962[]>` with authoritative 1960 ranks, commune pointers, vigils, and the surviving Christmas-octave day. See [11](./11-m4-sanctoral.md) for the rank-source fix (kalendarium vs Mass-file).
- M5 — Rubrics engine: done. `buildLiturgicalYear1962(year)` merges M3 + M4 into a `Map<isoDate, ResolvedDay1962>` by applying 1960 occurrence, commemoration, and forward-transfer rules. Concurrence (First Vespers conflict) and Class II feast-of-the-Lord transfer are documented gaps. See [12](./12-m5-rubrics.md).
- M6 — Mass-propers resolver: done. `resolvePropers(celebration)` and `attachPropers(year)` materialise each celebration's Mass sections (`introit, collect, epistle, …`) and any non-canonical extras (e.g. ember-day `LectioL*`) by walking inline blocks, per-section `ref` pointers, entry-level `references`, and a Sunday-Mass fallback for ferial weekday tempora. Known data gaps (multi-Mass days like Christmas, special liturgies like Good Friday/Holy Saturday/Pentecost Vigil, commemoration-only sancti) flow through as empty `propers` and are tracked for M8+. See [13](./13-m6-propers.md).
- M7 — Public API: done. `Romcal1962` class wraps the build pipeline with a single config (`includePropers`, `propersLocales`, `attachToCommemorations`), Promise-returning `generateCalendar(year)` and `getOneLiturgicalDay(date)`, and per-instance year cache. Package quick-start at [`rites/roman1962/README.md`](../../rites/roman1962/README.md). See [14](./14-m7-public-api.md).
