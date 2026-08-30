/**
 * Build, bundle, check, document and publish tooling for the romcal rites.
 *
 * This logic used to live in `rites/roman1969/build/` and only knew how to build one
 * rite, through hardcoded relative paths. It is here, before a second rite exists, so
 * that `rites/roman1962` neither copies it nor reaches into a sibling's build
 * directory: a rite describes itself in a `romcal.build.ts` manifest and the commands
 * read everything they need from it.
 *
 * None of this reaches a published artifact. The commands run in Node under tsx; the
 * cjs, esm and iife bundles are esbuild's output from a rite's `src`, which is barred
 * from importing this package by an ESLint rule.
 */

export { runBuild } from './commands/build';
export { RomcalBuilder, RomcalBundler } from './commands/bundle';
export { runCheck } from './commands/check';
export { runDoc } from './commands/doc';
export { runPublish } from './commands/publish';
export { runTrust } from './commands/trust';
export { parseArgs, resolveOptions } from './options';
export { defineRite } from './types';
export type { BuildArtifact, BuildFormat, ResolvedOptions, RiteBuildManifest } from './types';
export type { Logger, LoggerOptions, LogLevel } from './utils/logger';
export { createLogger, logger } from './utils/logger';
export { findRepoRoot, findRites, loadManifest, resolveRiteRoot } from './utils/workspace';
