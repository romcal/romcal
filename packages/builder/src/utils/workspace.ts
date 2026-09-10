import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';

import { RiteBuildManifest } from '../types';

/**
 * Locating things without assuming where the command was run from.
 *
 * The scripts this replaces resolved everything against `process.cwd()` or a
 * `__dirname` that happened to sit two levels under the rite. Both worked only
 * because npm always invoked them from `rites/roman1969`. The CLI is invoked from
 * the repository root, from a rite, and from a workspace script, so it walks up to
 * find the root instead.
 */

/** The manifest a rite exposes to the builder. */
export const MANIFEST_FILENAME = 'romcal.build.ts';

export const findRepoRoot = (from: string = process.cwd()): string => {
  let dir = resolve(from);

  for (;;) {
    const manifest = join(dir, 'package.json');
    if (existsSync(manifest)) {
      const pkg = JSON.parse(readFileSync(manifest, 'utf-8')) as { workspaces?: unknown };
      if (pkg.workspaces) return dir;
    }

    const parent = dirname(dir);
    if (parent === dir) throw new Error(`No workspace root above ${from}: no package.json declaring "workspaces".`);
    dir = parent;
  }
};

/** Every rite directory that exposes a build manifest. */
export const findRites = (repoRoot: string): string[] => {
  const ritesDir = join(repoRoot, 'rites');
  if (!existsSync(ritesDir)) return [];

  return readdirSync(ritesDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && existsSync(join(ritesDir, entry.name, MANIFEST_FILENAME)))
    .map((entry) => entry.name);
};

/**
 * Resolve `--rite`. With no argument, a single rite is unambiguous; more than one is
 * not, and the error says which are available rather than picking one.
 */
export const resolveRiteRoot = (repoRoot: string, rite?: string): string => {
  const available = findRites(repoRoot);

  if (!available.length) {
    throw new Error(`No rite exposes a ${MANIFEST_FILENAME}. Looked in ${join(repoRoot, 'rites')}.`);
  }

  if (!rite) {
    if (available.length === 1) return join(repoRoot, 'rites', available[0]);
    throw new Error(`--rite is required when several rites are present: ${available.join(', ')}.`);
  }

  // Accept either the directory name or the workspace name.
  const name = rite.replace(/^@internal\/rite-/, '');
  if (!available.includes(name)) {
    throw new Error(`Unknown rite "${rite}". Available: ${available.join(', ')}.`);
  }

  return join(repoRoot, 'rites', name);
};

export const loadManifest = async (riteRoot: string): Promise<RiteBuildManifest> => {
  const path = join(riteRoot, MANIFEST_FILENAME);
  const loaded = (await import(path)) as { default?: RiteBuildManifest };
  const manifest = loaded.default;

  if (!manifest) throw new Error(`${path} has no default export.`);
  return manifest;
};
