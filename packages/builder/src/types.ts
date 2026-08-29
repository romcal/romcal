/**
 * The contract between the builder and a rite.
 *
 * Everything rite-specific lives in a `romcal.build.ts` manifest at the rite root,
 * so the builder itself contains no `roman1969` or `roman1962` string. CLI flags
 * override whatever the manifest declares.
 */

export type BuildFormat = 'cjs' | 'esm' | 'iife';

export type BuildArtifact = 'bundles' | 'docs' | 'packages' | 'types';

export interface RiteBuildManifest {
  /** Workspace name, used to resolve the rite root: `@internal/rite-roman1969`. */
  readonly name: string;
  /** Entry point of the rite, relative to the rite root. */
  readonly entryPoint: string;
  /** Build output directory, relative to the rite root. */
  readonly outDir: string;
  /** Scratch directory for intermediate bundles, relative to the rite root. */
  readonly tmpDir: string;
  /** Glob matching the calendar definitions, relative to the rite root. */
  readonly calendars: string;
  /** Glob matching the locale files, relative to the rite root. */
  readonly locales: string;
  /** Formats emitted when `--formats` is not given. */
  readonly formats: readonly BuildFormat[];
  /** npm name for a generated calendar bundle; `[calendar]` is substituted. */
  readonly packageNameTemplate: string;
  /** Destination of the generated plugin table, relative to the repository root. */
  readonly docOutput: string;
}

/**
 * Resolved options for one command: the manifest with CLI overrides applied.
 *
 * `calendars` and `locales` default to everything the manifest globs discover.
 * Narrowing them is the point of the CLI: a single-calendar rebuild during
 * development instead of all 104 across 13 locales.
 */
export interface ResolvedOptions {
  readonly manifest: RiteBuildManifest;
  /** Absolute path to the repository root. */
  readonly repoRoot: string;
  /** Absolute path to the rite root. */
  readonly riteRoot: string;
  readonly calendars: readonly string[];
  readonly locales: readonly string[];
  readonly formats: readonly BuildFormat[];
  readonly emit: readonly BuildArtifact[];
  readonly concurrency: number;
  readonly dryRun: boolean;
  readonly verbose: boolean;
}
