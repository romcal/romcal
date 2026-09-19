import { CalendarDef, Locale, MartyrologyCatalog } from '@internal/generator';

/**
 * The contract between the builder and a rite.
 *
 * Everything rite-specific lives in a `romcal.build.ts` manifest at the rite root,
 * so the builder itself contains no `roman1969` or `roman1962` string. CLI flags
 * override whatever the manifest declares.
 *
 * The manifest carries data as well as paths. The engine contracts come from
 * `@internal/generator`, but the calendars, locales and martyrology a build works on
 * are the rite's, and there is no way to discover them without asking.
 */

export type BuildFormat = 'cjs' | 'esm' | 'iife';

export type BuildArtifact = 'bundles' | 'docs' | 'packages' | 'types';

export type CalendarDefConstructor = typeof CalendarDef;

export interface RiteBuildManifest {
  /** Workspace name, used to resolve the rite root: `@internal/rite-roman1969`. */
  readonly name: string;
  /** Entry point of the rite, relative to the rite root. */
  readonly entryPoint: string;
  /** Build output directory, relative to the rite root. */
  readonly outDir: string;
  /** Scratch directory for intermediate bundles, relative to the rite root. */
  readonly tmpDir: string;
  /** tsconfig used to emit the rite's declarations, relative to the rite root. */
  readonly tsconfig: string;
  /** Formats emitted when `--formats` is not given. */
  readonly formats: readonly BuildFormat[];
  /** npm name for a generated calendar bundle; `[calendar]` is substituted. */
  readonly packageNameTemplate: string;
  /** Destination of the generated plugin table, relative to the repository root. */
  readonly docOutput: string;
  /**
   * Import specifier the generated bundle files use to reach the rite's types.
   * Emitted into `tmp/bundles/[calendar]/[locale].ts`, so it is relative to that file.
   */
  readonly bundleTypeImport: string;

  /** Every calendar the rite ships, keyed by class name. */
  readonly calendars: Record<string, CalendarDefConstructor>;
  /** The calendar every particular calendar inherits from. */
  readonly baseCalendar: CalendarDefConstructor;
  /** Every locale the rite ships, keyed by locale id. */
  readonly locales: Record<string, Locale>;
  /** The rite's martyrology catalogue. */
  readonly martyrology: MartyrologyCatalog;
}

/**
 * Resolved options for one command: the manifest with CLI overrides applied.
 *
 * `calendars` and `locales` default to everything the manifest declares. Narrowing
 * them is the point of the CLI: a single-calendar rebuild during development instead
 * of all 107 across 13 locales.
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
  readonly dryRun: boolean;
  readonly verbose: boolean;
}

/** Identity helper, so a manifest is type-checked where it is written. */
export const defineRite = (manifest: RiteBuildManifest): RiteBuildManifest => manifest;
