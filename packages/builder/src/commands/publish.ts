import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

import { ResolvedOptions } from '../types';
import { Logger } from '../utils/logger';

const REGISTRY = 'https://registry.npmjs.org';

const tag = 'dev';

type Target = {
  /** Directory containing the package.json to publish. */
  dir: string;
  name: string;
  version: string;
};

/**
 * Versions already published on the registry, or `null` when the package doesn't exist yet.
 */
const publishedVersions = async (name: string): Promise<string[] | null> => {
  const response = await fetch(`${REGISTRY}/${name.replace('/', '%2f')}`, {
    headers: { accept: 'application/vnd.npm.install-v1+json' },
  });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error(`Registry returned HTTP ${response.status} for ${name}`);
  const packument = (await response.json()) as { versions?: Record<string, unknown> };
  return Object.keys(packument.versions ?? {});
};

/**
 * Publish with OIDC (trusted publishing) when the workflow provides an ID token.
 * Token-based publishes rely on setup-node writing `.npmrc` from `NODE_AUTH_TOKEN`
 * via `registry-url`; the npm CLI does not read `NPM_TOKEN`.
 */
const publish = (target: Target, dryRun: boolean): boolean => {
  const args = ['publish', '--access', 'public', '--tag', tag, '--ignore-scripts'];
  if (process.env.ACTIONS_ID_TOKEN_REQUEST_URL) args.push('--provenance');
  if (dryRun) args.push('--dry-run');

  const result = spawnSync('npm', args, { cwd: target.dir, encoding: 'utf-8', stdio: 'inherit' });
  return (result.status ?? 1) === 0;
};

export interface PublishOptions {
  /** Publish only packages that don't exist on the registry yet (first publish of new calendar bundles). */
  readonly onlyNew: boolean;
}

export const runPublish = async (
  options: ResolvedOptions,
  { onlyNew }: PublishOptions,
  log: Logger
): Promise<void> => {
  const { dryRun, manifest, repoRoot, riteRoot } = options;
  const bundlesBasePath = path.join(riteRoot, manifest.outDir, 'bundles');

  const bundleDirs = fs
    .readdirSync(bundlesBasePath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => path.join(bundlesBasePath, dirent.name));

  const targets: Target[] = [repoRoot, ...bundleDirs].map((dir) => {
    const { name, version } = JSON.parse(fs.readFileSync(path.join(dir, 'package.json'), 'utf-8'));
    return { dir, name, version };
  });

  let failures = 0;
  let selected = 0;
  const skippedNew: string[] = [];

  for (const target of targets) {
    let versions: string[] | null;
    try {
      versions = await publishedVersions(target.name);
    } catch (err) {
      failures += 1;
      log.error(`Package "${target.name}": ${(err as Error).message}`);
      continue;
    }

    const isNew = versions === null;

    if (onlyNew && !isNew) continue;
    if (isNew && !onlyNew) {
      skippedNew.push(target.name);
      log.warn(`Package "${target.name}" is not on the registry yet; skip (run npm run publish:new)`);
      continue;
    }

    if (!isNew && versions.includes(target.version)) {
      log.success(`Package "${target.name}" is already published: ${target.version} (${tag})`);
      continue;
    }

    selected += 1;
    log.info(`Publishing ${target.name}@${target.version}${isNew ? ' (new package)' : ''}`);
    if (publish(target, dryRun)) {
      log.success(`Package "${target.name}" published: ${target.version} (${tag})`);
    } else {
      failures += 1;
      log.error(`Package "${target.name}" failed to publish`);
    }
  }

  if (skippedNew.length) {
    log.warn(`${skippedNew.length} new package(s) skipped (not yet on the registry):`);
    skippedNew.forEach((name) => log.detail(name));
    log.detail('First-publish them with npm run publish:new, then npm run trust:sync.');
  }

  if (onlyNew && selected === 0) log.detail('No packages found to publish.');

  if (failures > 0) {
    log.error(`${failures} package(s) failed to publish.`);
    process.exit(1);
  }
};
