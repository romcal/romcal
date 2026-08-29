# @internal/builder

Build, bundle, check, document and publish tooling for the romcal rites.

Internal to the romcal monorepo; not published.

## Why

This logic lives in `rites/roman1969/build/` today, and only knows how to build one
rite: the paths back to the repository root are hardcoded, and the calendar and
locale globs assume that rite's layout. A second rite would leave two bad options,
copying the scripts into `rites/roman1962` or having one rite reach into a
sibling's build directory. Moving it here before `roman1962` exists avoids both.

## Contract

The builder contains no rite name. Everything rite-specific comes from a
`romcal.build.ts` manifest at the rite root, typed as `RiteBuildManifest`: the
entry point, output directories, calendar and locale globs, formats to emit, and
the npm name template for generated bundles. CLI flags override what the manifest
declares.

That override is the point of the CLI. Rebuilding one calendar in one locale
during development currently means rebuilding all 104 across 13 locales.

```sh
tsx packages/builder/src/cli.ts build --rite roman1969 --calendars france --locales fr
tsx packages/builder/src/cli.ts publish --dry-run
```

## Logging

`createLogger` is the one place the builder writes to a stream. The scripts being
moved here each grew their own conventions: two symbol vocabularies, three ways of
indenting a detail line, and a `hasWarnings` flag in `data-checks.ts` that gets set
as a side effect of formatting a label. A call site now picks a severity and the
presentation follows.

[consola](https://github.com/unjs/consola) does the presenting: symbols, colours,
level filtering, and picking a reporter to suit the output (`◐ building` on a
terminal, `[start] building` in CI). This module adds the three things a build
needs that consola has no opinion about: a dry-run tag, nesting, and collapsible
sections on GitHub Actions.

```ts
const log = createLogger({ verbose, dryRun });

log.group('bundles', (inner) => {
  inner.success('france');
});
```

Warnings and errors go to stderr, so redirecting stdout to a file keeps problems on
the terminal. `--dry-run` tags every line, so a rehearsal cannot be mistaken for the
real thing. Under GitHub Actions, `group` emits the workflow commands that make a
section collapsible, which matters when 104 bundles each log a line.

None of this reaches a published artifact. The builder runs in Node under `tsx`,
while the `cjs`, `esm` and `iife` bundles are esbuild's output from a rite's `src`.
An ESLint rule keeps it that way: `rites/*/src` cannot import `@internal/builder`,
because that would pull the toolchain into what consumers download.

## Status

Scaffolding only: the types and the argument surface. The commands move over in a
separate commit, one per source file, so the move can be reviewed as a move.

| Moves from                    | Becomes               |
| ----------------------------- | --------------------- |
| `build/build.ts`              | `commands/build.ts`   |
| `build/bundle.ts`             | `commands/bundle.ts`  |
| `build/bundle-doc.ts`         | `commands/doc.ts`     |
| `build/data-checks.ts`        | `commands/check.ts`   |
| `build/publish.ts`            | `commands/publish.ts` |
| `build/trusted-publishing.ts` | `commands/trust.ts`   |
| `build/time.ts`               | `utils/time.ts`       |
| `build/docs/*.mjs`            | `commands/docs/`      |

The acceptance test for that commit is byte parity: build `dist/` before and after
and diff the trees.
