import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

import chalk from 'chalk';

const REGISTRY = 'https://registry.npmjs.org';

const tag = 'dev';
const dryRun = process.argv.includes('--dry-run');
/** Publish only packages that don't exist on the registry yet (first publish of new calendar bundles). */
const onlyNew = process.argv.includes('--only-new');

const { log } = console;

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
 * Publish with OIDC (trusted publishing) when the workflow provides an ID token,
 * otherwise fall back to the credentials in the environment (NPM_TOKEN).
 */
const publish = (target: Target): boolean => {
  const args = ['publish', '--access', 'public', '--tag', tag];
  if (process.env.ACTIONS_ID_TOKEN_REQUEST_URL) args.push('--provenance');
  if (dryRun) args.push('--dry-run');

  const result = spawnSync('npm', args, { cwd: target.dir, encoding: 'utf-8', stdio: 'inherit' });
  return (result.status ?? 1) === 0;
};

(async (): Promise<void> => {
  const rootDir = path.join(__dirname, '../../..');
  const bundlesBasePath = path.join(__dirname, '../dist/bundles');

  const bundleDirs = fs
    .readdirSync(bundlesBasePath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => path.join(bundlesBasePath, dirent.name));

  const targets: Target[] = [rootDir, ...bundleDirs].map((dir) => {
    const { name, version } = JSON.parse(fs.readFileSync(path.join(dir, 'package.json'), 'utf-8'));
    return { dir, name, version };
  });

  let failures = 0;

  for (const target of targets) {
    const versions = await publishedVersions(target.name);
    const isNew = versions === null;

    if (onlyNew && !isNew) continue;
    if (!isNew && versions.includes(target.version)) {
      log(` ✓ Package "${target.name}" is already published: ${target.version} (${tag})\n`);
      continue;
    }

    log(` - Publishing ${target.name}@${target.version}${dryRun ? chalk.gray(' (dry-run)') : ''}${isNew ? chalk.gray(' (new package)') : ''}`);
    if (publish(target)) {
      log(` ✓ Package "${target.name}" published: ${target.version} (${tag})\n`);
    } else {
      failures += 1;
      log(`${chalk.red(' ✗')} Package "${target.name}" failed to publish\n`);
    }
  }

  if (onlyNew && !targets.length) log(chalk.dim('No packages found to publish.'));

  if (failures > 0) {
    log(chalk.red(`${failures} package(s) failed to publish.`));
    process.exit(1);
  }
})();
