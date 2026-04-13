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

## Status

Planning. No implementation yet. `rites/roman1962/src/` contains only a `.gitkeep`.
