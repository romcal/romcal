# 08 — M1: scaffolding plan

Goal: `rites/roman1962/` is a real workspace package that builds, tests, and exposes a placeholder `Romcal` via the `romcal/1962` sub-path. No calendar logic yet — just an empty-but-alive rite that M2+ can fill in.

Acceptance:

- `npm run build` at the repo root builds both 1969 and 1962.
- `npm test` runs a smoke test for 1962 (constructs `Romcal`, gets a version string).
- `import { Romcal } from 'romcal/1962'` resolves (exports wired in root `package.json`).
- Placeholder 1962-specific types live in `src/constants/` and `src/types/` per decisions in docs 03, 06, 07.
- No divinum-officium import yet (that's M2).

## Steps

### 1. Flesh out `rites/roman1962/package.json`

- Match 1969's exports/main/module/typings shape, pointing to `dist/`.
- Depend on `@internal/rite-roman1969` (we re-export from it for now — decision §1 in milestones: defer core extraction).
- Depend on `i18next`.
- DevDependencies needed to build and test: `@internal/config`, `esbuild`, `esbuild-jest`, `@types/jest`, `rimraf`, `tsx`, `typescript`, `chalk`, `jest-extended`, `type-fest`.
- Scripts: `build`, `clean`, `test`, `test:without-coverage`, `test:watch`.

### 2. Add `rites/roman1962/tsconfig.release.json`

- Mirror 1969's — emit `.d.ts` only to `tmp/dts/`.

### 3. Minimal `rites/roman1962/build/build.ts`

- Compile types via `tsc` (`tsconfig.release.json`).
- Bundle `src/index.ts` via esbuild in `cjs` + `esm` formats → `dist/<fmt>/romcal.js`.
- Emit a single `dist/index.d.ts` bundled from `tmp/dts/src/index.d.ts`.
- Skip the calendar-bundle / iife pipeline — not needed for M1.
- Keep this file **small**; it grows when M2–M4 add data.

### 4. `rites/roman1962/src/index.ts` — placeholder

- Re-export `Romcal` and the main types/constants from `@internal/rite-roman1969`.
- Add a marker export `RITE_ID = 'roman1962'` and `VERSION` so a smoke test can assert the module is reachable.
- Comment it clearly as scaffolding — to be replaced in M3+.

### 5. 1962-specific constants (stubs, values only)

Write small constant modules so downstream code has stable names to import:

- `src/constants/rank-1962.ts` — `Rank1962` (`ClassI`, `ClassII`, `ClassIII`, `ClassIV`, `Ferial`) and `TridentineRank` (optional, per docs 03).
- `src/constants/prefaces.ts` — `PrefaceId` closed enum (Nat, Pasch, Apost, Trinitate, Communis, BMV, Quadragesimalis, Crucis, Ascensionis, Pentecostes, Defunctorum, Communis, etc. — seed set; importer will fail loudly on unknowns).
- `src/constants/octaves.ts` — `OctaveId = 'christmas' | 'easter' | 'pentecost'`.
- `src/constants/common-1962.ts` — `Common1962` enum for Commons files (seed with the ~15 Commune/\*.txt filenames).

These are plain `as const` arrays + string-literal unions — no runtime logic.

### 6. 1962-specific types (extension interface)

- `src/types/liturgical-day-1962.ts` — the `LiturgicalDay1962Extensions` interface from docs 03 (optional `rank1962`, `rubrics`, `octave`, `vigil`, `commemorations`, `properRef`, `propers`) and `MassPropers` / `PropersBlock` types from docs 07.
- Not yet attached to the 1969 `LiturgicalDay`; purely a types file that M4+ will consume.

### 7. Root `package.json` wiring

- Add `./1962` sub-path export pointing to `rites/roman1962/dist/…`.
- Extend `build` script to include `-w=@internal/rite-roman1962`.
- Extend `clean` script similarly.

### 8. Smoke test

- `rites/roman1962/__tests__/smoke.test.ts`:
  - `import { Romcal, RITE_ID } from '@internal/rite-roman1962';`
  - assert `RITE_ID === 'roman1962'`.
  - assert `new Romcal()` constructs (inherited from 1969 for now).

### 9. `npm install` + verify

- Run `npm install` so the new workspace is linked.
- Run `npm run build`.
- Run `npm test`.

## Deferred (explicitly out of M1)

- Per-calendar bundle pipeline (M2/M3).
- Actual 1962 Proper of Time (M3).
- Data files under `rites/roman1962/data/` (M2).
- Subclassing `LiturgicalDay` with the 1962 extensions (M4 — once we have real data to carry).
- Locale overrides (M6/M7).

## Risks

- `@internal/rite-roman1969` currently exports its public API via `dist/` after build, not `src/`. For same-repo consumption we rely on the tsconfig `paths` alias which points to the folder (resolving to the package's `exports`). Verify the alias works for type-checking and jest `moduleNameMapper` before writing more.
- Sub-path export needs both `exports["."]` (existing) and `exports["./1962"]` (new). The existing root `main`/`module`/`typings` fields are redundant when `exports` is set; leave them alone to avoid breaking downstream tooling.
