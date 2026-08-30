# @internal/builder

Build, bundle, check, document and publish tooling for the romcal rites.

Internal to the romcal monorepo; not published.

## Why

This logic lived in `rites/roman1969/build/`, and only knew how to build one rite:
the paths back to the repository root were hardcoded, and the calendars, locales and
martyrology were reached by relative import into that rite's `src`. A second rite
would have left two bad options, copying the scripts into `rites/roman1962` or having
one rite reach into a sibling's build directory. Moving it here before `roman1962`
exists avoids both.

## Contract

The builder contains no rite name. Everything rite-specific comes from a
`romcal.build.ts` manifest at the rite root, typed as `RiteBuildManifest`: the entry
point, output directories, formats to emit, the npm name template for generated
bundles, and the data itself — calendars, base calendar, locales and martyrology.
The engine contracts come from `@internal/generator`; only the data comes from the
rite. CLI flags override what the manifest declares.

`--rite` resolves against `rites/*` and can be omitted while only one rite exposes a
manifest.

```sh
romcal-build build                                            # everything, as before
romcal-build build --calendars France --locales Fr --emit bundles
romcal-build check --rite roman1969
romcal-build publish --dry-run
```

That override is the point of the CLI: rebuilding one calendar in one locale used to
mean rebuilding all 107 across 13 locales.

## Commands

| Command   | Was                           | Now                   |
| --------- | ----------------------------- | --------------------- |
| `build`   | `build/build.ts`              | `commands/build.ts`   |
| `bundle`  | `build/bundle.ts`             | `commands/bundle.ts`  |
| `doc`     | `build/bundle-doc.ts`         | `commands/doc.ts`     |
| `check`   | `build/data-checks.ts`        | `commands/check.ts`   |
| `publish` | `build/publish.ts`            | `commands/publish.ts` |
| `trust`   | `build/trusted-publishing.ts` | `commands/trust.ts`   |

`build/time.ts` became `utils/time.ts`, and the two documentation scripts moved
unchanged to `commands/docs/`; they are still invoked directly with `node`, since
they operate on `docs/` rather than on a rite.

`--emit` selects stages of `build`: `types`, `bundles`, `packages`, `docs`. They are
not independent — packaging copies declarations the bundle stage wrote — so a partial
run assumes an earlier full one. That is what makes iterating on one calendar quick.

## Logging

`createLogger` is the one place the builder writes to a stream. The scripts moved here
had each grown their own conventions: two symbol vocabularies, three ways of indenting
a detail line, and a `hasWarnings` flag in `data-checks.ts` that got set as a side
effect of formatting a label. A call site now picks a severity and the presentation
follows.

[consola](https://github.com/unjs/consola) does the presenting: symbols, colours,
level filtering, and picking a reporter to suit the output (`◐ building` on a
terminal, `[start] building` in CI). This module adds the three things a build needs
that consola has no opinion about: a dry-run tag, nesting, and collapsible sections on
GitHub Actions.

```ts
const log = createLogger({ verbose, dryRun });

log.group('bundles', (inner) => {
  inner.success('france');
});
```

Warnings and errors go to stderr, so redirecting stdout to a file keeps problems on
the terminal. `--dry-run` tags every line, so a rehearsal cannot be mistaken for the
real thing. Under GitHub Actions, `group` emits the workflow commands that make a
section collapsible, which matters when 107 bundles each log a line.

None of this reaches a published artifact. The builder runs in Node under `tsx`,
while the `cjs`, `esm` and `iife` bundles are esbuild's output from a rite's `src`.
An ESLint rule keeps it that way: `rites/*/src` cannot import `@internal/builder`,
because that would pull the toolchain into what consumers download.

## Verification

The move was checked by byte parity: `dist/` built before and after the change is
identical across all 4,929 emitted files, including every one of the 107 calendar
bundles. The three `romcal.js.map` files differ only in `sourcesContent`, from an
unrelated import reordering in the rite's `index.ts`; regenerating them with the old
invocation reproduces the new output exactly.
