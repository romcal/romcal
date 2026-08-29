/**
 * Build, bundle, check, document and publish tooling for the romcal rites.
 *
 * Today this logic lives in `rites/roman1969/build/` and only knows how to build
 * one rite, through hardcoded relative paths. Moving it here, before a second rite
 * exists, avoids either copying it into `rites/roman1962` or having one rite reach
 * into a sibling's build directory.
 *
 * Only the types and the CLI argument surface are here so far. The commands move
 * over in a follow-up commit, one per source file; see the README for the mapping.
 */

export type { BuildArtifact, BuildFormat, ResolvedOptions, RiteBuildManifest } from './types';
export type { Logger, LoggerOptions, LogLevel } from './utils/logger';
export { createLogger, logger } from './utils/logger';
