# 05 — Milestones & open questions

## Milestones

### M1 — Scaffolding

- Populate `rites/roman1962/src/` mirroring `roman1969` layout.
- Wire package into root build/test.
- Re-export `Romcal` as a subpath `romcal/1962`.
- Acceptance: `npm run build` produces a `rites/roman1962/dist/`, `npm test` green.

### M2 — Data import

- Write `build/import-divinum-officium.ts`.
- Emit `data/calendar-1960.json` and per-feast proper JSON.
- Commit generated output.
- Acceptance: importer re-runs idempotently; byte-equal diff between consecutive runs.

### M3 — Proper of Time (1962)

- Advent through Pentecost cycle; Septuagesima; Ember Days; Vigils; Octaves.
- Acceptance: snapshot test for liturgical year 1962 matches divinumofficium.com day-for-day.

### M4 — Proper of Saints & Commons

- Load calendar-1960.json into `GeneralRoman1962` `CalendarDef`.
- Commons referenced via `commonsDef`.
- Acceptance: every `MM-DD` with a feast resolves to a `LiturgicalDay` carrying `rank1962`, `rubrics`, `properRef`.

### M5 — Rubrics engine

- Occurrence, concurrence, commemoration, transfer.
- Acceptance: 20 hand-picked tricky dates (e.g. 1962-04-22 Easter Monday displacing St Soter, 1962-12-08 Immaculate Conception vs 2nd Sunday of Advent) match reference output.

### M6 — Propers surfaced on the day

- Config flag `includePropers`, locale filter.
- Acceptance: `generateCalendar({ includePropers: true, propersLocales: ['la', 'en'] })` returns texts on each day.

### M7 — Public API & release packaging

- `Romcal1962` class with `includePropers` / `propersLocales` /
  `attachToCommemorations` config, Promise-returning
  `generateCalendar(year)` and `getOneLiturgicalDay(date)`,
  per-instance year cache.
- Package quick-start `rites/roman1962/README.md`.
- See [14 — M7 Public API & release packaging plan](./14-m7-public-api.md).
- **Deferred to M8+**: integration into the root `docs/general-usage.md`,
  `docs/calendar-definitions.md`, changeset / version bump (release-cut work).

## Decisions (resolved)

1. **Core extraction — deferred.** 1962 imports from `@internal/rite-roman1969` for now. Revisit once 1962 is feature-complete.
2. **Rubric editions — 1962 only.** Phase 1 targets the 1962 Missal (Rubricae 1960). Pre-1955 / Tridentine may be a separate project later. `rubricEdition` config option dropped for now.
3. **Licensing — not a blocker.** Import everything divinum-officium ships. Revisit before a public release if needed.
4. **Dominican / Monastic — out of scope.**
5. **Calendar — flattened 1960.** Ship only the resolved 1960 calendar. No overlay chain in the public data.
6. **Precedence — both.** Dedicated `rank1962` enum for semantics; map to existing `precedence` values for API parity and sort compatibility.
7. **API entry point — sub-path `romcal/1962`.**
8. **Octaves — see [`06-octaves.md`](./06-octaves.md).** Dedicated `octave` field on `LiturgicalDay`, not a `Period`.

## Non-goals (phase 1)

- Divine Office / Breviary (divinum-officium has this, but our scope is Mass).
- Live rubric selection at runtime (all 1962 calendars freeze at the 1960 rubrics).
- Chant (neumes / Gregorian notation).
- Non-Roman Rites (Dominican, Ambrosian, Mozarabic).
