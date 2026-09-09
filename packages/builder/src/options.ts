import { BuildArtifact, ResolvedOptions } from './types';
import { findRepoRoot, loadManifest, resolveRiteRoot } from './utils/workspace';

/**
 * Turning `process.argv` into a resolved set of options.
 *
 * Flags override the manifest, and anything not given falls back to everything the
 * rite declares, so `romcal-build build` on its own behaves exactly like the old
 * `npm run build`.
 */

const ARTIFACTS: readonly BuildArtifact[] = ['bundles', 'docs', 'packages', 'types'];

/**
 * Switches that must never swallow the next argv token as a value.
 * `romcal-build --dry-run publish` would otherwise set dry-run to `"publish"` and
 * silently run a real publish.
 */
const BOOLEAN_FLAGS = new Set([
  'dry-run',
  'verbose',
  'help',
  'only-new',
  'sync',
  'force',
  'fresh',
  'json',
  'yes',
  'no-prompt',
]);

export interface ParsedArgs {
  readonly command?: string;
  readonly flags: Readonly<Record<string, string | boolean>>;
}

const parseBoolean = (flag: string, value: string): boolean => {
  if (value === 'true' || value === '1') return true;
  if (value === 'false' || value === '0') return false;
  throw new Error(`Invalid value for --${flag}: ${value}. Use true or false.`);
};

export const parseArgs = (argv: readonly string[]): ParsedArgs => {
  const [command, ...rest] = argv.filter((arg) => !arg.startsWith('-'));
  const flags: Record<string, string | boolean> = {};

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (!arg.startsWith('--')) continue;

    const [name, inline] = arg.slice(2).split('=');
    if (BOOLEAN_FLAGS.has(name)) {
      flags[name] = inline === undefined ? true : parseBoolean(name, inline);
      continue;
    }

    if (inline !== undefined) {
      flags[name] = inline;
      continue;
    }

    const next = argv[i + 1];
    flags[name] = next && !next.startsWith('-') ? next : true;
    if (typeof flags[name] === 'string') i += 1;
  }

  void rest;
  return { command, flags };
};

/** Split `a,b,c`, tolerating spaces and empty entries. */
const list = (value: string | boolean | undefined): string[] | undefined => {
  if (typeof value !== 'string') return undefined;
  const items = value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
  return items.length ? items : undefined;
};

const validate = <T extends string>(values: string[], allowed: readonly T[], flag: string): T[] => {
  const invalid = values.filter((value) => !allowed.includes(value as T));
  if (invalid.length) {
    throw new Error(`Unknown value for --${flag}: ${invalid.join(', ')}. Allowed: ${allowed.join(', ')}.`);
  }
  return values as T[];
};

export const resolveOptions = async (parsed: ParsedArgs): Promise<ResolvedOptions> => {
  const { flags } = parsed;

  const repoRoot = findRepoRoot();
  const riteRoot = resolveRiteRoot(repoRoot, typeof flags.rite === 'string' ? flags.rite : undefined);
  const manifest = await loadManifest(riteRoot);

  const requestedCalendars = list(flags.calendars);
  const knownCalendars = Object.keys(manifest.calendars);
  if (requestedCalendars) {
    const unknown = requestedCalendars.filter((name) => !knownCalendars.includes(name));
    if (unknown.length) throw new Error(`Unknown calendar(s): ${unknown.join(', ')}.`);
  }

  const requestedLocales = list(flags.locales);
  const knownLocales = Object.keys(manifest.locales);
  if (requestedLocales) {
    const unknown = requestedLocales.filter((id) => !knownLocales.includes(id));
    if (unknown.length) throw new Error(`Unknown locale(s): ${unknown.join(', ')}.`);
  }

  const requestedEmit = list(flags.emit);

  return {
    calendars: requestedCalendars ?? knownCalendars,
    dryRun: flags['dry-run'] === true,
    emit: requestedEmit ? validate(requestedEmit, ARTIFACTS, 'emit') : [...ARTIFACTS],
    locales: requestedLocales ?? knownLocales,
    manifest,
    repoRoot,
    riteRoot,
    verbose: flags.verbose === true,
  };
};
