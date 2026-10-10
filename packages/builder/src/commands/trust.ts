import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline/promises';

import { toPackageName } from '@internal/generator';
import { colors } from 'consola/utils';

import { ResolvedOptions } from '../types';

/**
 * Trusted publisher configuration that every published romcal package must have.
 * The workflow file name is part of the OIDC claim: only that workflow can publish.
 */
const TRUSTED_PUBLISHER = {
  provider: 'github',
  repository: 'romcal/romcal',
  file: 'dev-publishing.yml',
  environment: 'npm-publish',
  /** `--allow-publish` is stored by the registry as the `createPackage` permission. */
  permission: 'createPackage',
};

const REGISTRY = 'https://registry.npmjs.org';
/** `npm trust` was introduced in npm 11.15.0. */
const MIN_NPM_VERSION = [11, 15, 0];
/**
 * Everything the scan needs from the rite: which packages exist, and where the
 * previous scan may be cached. Set once by `runTrust`, because the functions below
 * are called from several places and threading it through each would say nothing.
 */
type TrustContext = { cacheFile: string; names: string[] };

let context: TrustContext;

/** How long a previous scan is considered usable, in minutes. */
const CACHE_TTL_MINUTES = 60;
const EXISTENCE_CONCURRENCY = 8;
const LIST_CONCURRENCY = 4;

type Status = 'ok' | 'mismatch' | 'missing' | 'unpublished' | 'error';

type TrustConfig = {
  id?: string;
  type?: string;
  file?: string;
  repository?: string;
  environment?: string;
  permissions?: string[];
};

type Entry = {
  name: string;
  status: Status;
  config?: TrustConfig;
  reason?: string;
};

const { log } = console;

const args = process.argv.slice(2);
const hasFlag = (flag: string): boolean => args.includes(flag);
const flagValue = (flag: string, fallback: number): number => {
  const index = args.indexOf(flag);
  if (index === -1) return fallback;
  const value = Number(args[index + 1]);
  return Number.isFinite(value) ? value : fallback;
};

const options = {
  sync: hasFlag('--sync'),
  force: hasFlag('--force'),
  json: hasFlag('--json'),
  verbose: hasFlag('--verbose'),
  noPrompt: hasFlag('--no-prompt'),
  fresh: hasFlag('--fresh'),
  dryRun: hasFlag('--dry-run'),
  yes: hasFlag('--yes') || hasFlag('-y') || process.env.CI === 'true',
  batchSize: flagValue('--batch-size', 75),
  sleep: flagValue('--sleep', 2000),
};

const wait = (ms: number): Promise<void> => new Promise((r) => setTimeout(r, ms));

/**
 * All package names published from this repository: the main library, plus one
 * bundle per calendar definition (same derivation as build.ts).
 */
const packageNames = (resolved: ResolvedOptions, libraryName: string): string[] => [
  libraryName,
  ...Object.keys(resolved.manifest.calendars).map((calendar) => toPackageName(calendar, true)),
];

/**
 * Run tasks with a bounded concurrency, preserving input order in the output.
 */
const mapWithConcurrency = async <I, O>(items: I[], limit: number, fn: (item: I) => Promise<O>): Promise<O[]> => {
  const results: O[] = new Array(items.length);
  let cursor = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    for (;;) {
      const index = cursor;
      cursor += 1;
      if (index >= items.length) return;
      results[index] = await fn(items[index]);
    }
  });
  await Promise.all(workers);
  return results;
};

const runNpm = (npmArgs: string[]): { code: number; stdout: string; stderr: string } => {
  const result = spawnSync('npm', npmArgs, { encoding: 'utf-8', maxBuffer: 32 * 1024 * 1024 });
  return {
    code: result.status ?? 1,
    stdout: result.stdout ?? '',
    stderr: `${result.stderr ?? ''}${result.error ? result.error.message : ''}`,
  };
};

/**
 * Trust config errors that mean the credentials cannot manage trust at all
 * (missing login, or a token that cannot satisfy the 2FA requirement).
 */
const isAuthError = (output: string): boolean =>
  /E401|E403|ENEEDAUTH|EOTP|Unauthorized|Forbidden|two-factor|one-time password/i.test(output);

/**
 * `npm trust list --json` prints one JSON object per trust configuration, and
 * nothing at all when a package has none. Parse both shapes tolerantly.
 */
const parseTrustConfigs = (stdout: string): TrustConfig[] => {
  const text = stdout.trim();
  if (!text) return [];

  try {
    const parsed = JSON.parse(text);
    return Array.isArray(parsed) ? parsed : [parsed];
  } catch {
    // fall through to brace matching for concatenated objects
  }

  const configs: TrustConfig[] = [];
  let depth = 0;
  let start = -1;
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === '{') {
      if (depth === 0) start = i;
      depth += 1;
    } else if (text[i] === '}') {
      depth -= 1;
      if (depth === 0 && start !== -1) {
        try {
          configs.push(JSON.parse(text.slice(start, i + 1)));
        } catch {
          // ignore unparsable chunk
        }
        start = -1;
      }
    }
  }
  return configs;
};

const matchesRequirements = (config: TrustConfig): boolean =>
  (config.type ?? TRUSTED_PUBLISHER.provider) === TRUSTED_PUBLISHER.provider &&
  config.repository === TRUSTED_PUBLISHER.repository &&
  config.file === TRUSTED_PUBLISHER.file &&
  config.environment === TRUSTED_PUBLISHER.environment &&
  (config.permissions ?? []).includes(TRUSTED_PUBLISHER.permission);

/**
 * A package must already exist on the registry before trust can be configured.
 */
const isPublished = async (name: string): Promise<boolean> => {
  const url = `${REGISTRY}/${name.replace('/', '%2f')}`;
  try {
    const response = await fetch(url, { headers: { accept: 'application/vnd.npm.install-v1+json' } });
    if (response.status === 404) return false;
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return true;
  } catch (err) {
    log(`${colors.yellow('Warning:')} could not check ${name} on the registry (${(err as Error).message})`);
    return true;
  }
};

/**
 * `npm run` puts its own npm first on the PATH, so the npm running this script
 * is not necessarily the newest one installed. Check it before doing 100+ calls.
 */
const checkNpmVersion = (): void => {
  const { stdout } = runNpm(['--version']);
  const version = stdout.trim().split('.').map(Number);

  const [major, minor, patch] = version;
  const [minMajor, minMinor, minPatch] = MIN_NPM_VERSION;
  const tooOld =
    major < minMajor ||
    (major === minMajor && minor < minMinor) ||
    (major === minMajor && minor === minMinor && patch < minPatch);

  if (!Number.isFinite(major) || tooOld) {
    log(`${colors.red('Error:')} npm ${stdout.trim() || '(unknown)'} does not support \`npm trust\`.`);
    log(colors.dim(`  npm >= ${MIN_NPM_VERSION.join('.')} is required: npm i -g npm@^${MIN_NPM_VERSION.join('.')}`));
    log(colors.dim('  Beware of a nvm-managed npm shadowing a newer global install.'));
    process.exit(1);
  }
};

const AUTH_REASON = 'authentication or 2FA required';
const OTP_REASON = 'two-factor prompt required';
const AUTH_HINT =
  'npm asked for two-factor authentication. Re-run and complete the prompt, enabling the 5 minute 2FA skip on npmjs.com (it may have expired).';
let authRejected = false;
/** Raw npm output of the first rejected call, to explain what npm actually complained about. */
let authRejectionDetail = '';

/**
 * With `--json`, npm writes its error payload to stdout as
 * `{ "error": { "code": "E404", "summary": "…" } }`, and the human readable
 * `npm error …` lines to stderr. Read both so the real cause is reported.
 */
const npmError = (stdout: string, stderr: string): { code: string; summary: string } => {
  try {
    const parsed = JSON.parse(stdout.trim()) as { error?: { code?: string; summary?: string; detail?: string } };
    if (parsed.error) {
      return {
        code: parsed.error.code ?? '',
        summary: [parsed.error.summary, parsed.error.detail].filter(Boolean).join(' ').trim(),
      };
    }
  } catch {
    // not a JSON error payload
  }

  const code = /npm error code (\S+)/.exec(stderr)?.[1] ?? '';
  const summary = /npm error (?:code \S+\s+)?npm error (.*)/.exec(stderr)?.[1] ?? /npm error (.*)/.exec(stderr)?.[1] ?? '';
  return { code, summary: summary.trim() };
};

/**
 * Every trust request is 2FA protected, and the calls below capture stdout to
 * parse it, which leaves npm no terminal to prompt on. So make one call with the
 * terminal attached: npm prompts once, and the website then offers to skip 2FA
 * for 5 minutes, which is what lets the rest of the run proceed unattended.
 */
const warmUpAuth = (name: string): void => {
  log(colors.bold('\nAuthenticating with npm'));
  log(colors.dim('  Complete the 2FA prompt below, and choose to skip two-factor'));
  log(colors.dim('  authentication for the next 5 minutes when npmjs.com offers it.'));
  log('');

  const result = spawnSync('npm', ['trust', 'list', name], { stdio: 'inherit' });
  if ((result.status ?? 1) !== 0) {
    log(`${colors.yellow('Warning:')} that call did not succeed, continuing anyway.`);
  }
  log('');
};

const inspect = (name: string): Entry => {
  // Once npm rejects our credentials, every other lookup would fail the same way
  if (authRejected) return { name, status: 'error', reason: AUTH_REASON };

  const { code, stdout, stderr } = runNpm(['trust', 'list', name, '--json']);
  const combined = `${stdout}\n${stderr}`;

  if (code !== 0) {
    const error = npmError(stdout, stderr);

    if (error.code === 'EUNKNOWNCOMMAND') {
      log(`${colors.red('Error:')} this npm does not have the \`trust\` command (npm ${runNpm(['--version']).stdout.trim()}).`);
      process.exit(1);
    }

    // The trust endpoint answers 404 for a package without any configuration
    if (error.code === 'E404' || /\b404\b/.test(error.summary)) {
      return { name, status: 'missing' };
    }

    if (isAuthError(combined)) {
      authRejected = true;
      authRejectionDetail = combined.trim();

      // These calls capture stdout to parse it, so npm cannot prompt for an OTP here
      if (error.code === 'EOTP' || /one-time password|EOTP/i.test(combined)) {
        return { name, status: 'error', reason: OTP_REASON };
      }

      const detail = [error.code, error.summary].filter(Boolean).join(': ');
      return { name, status: 'error', reason: detail ? `${AUTH_REASON} (${detail})` : AUTH_REASON };
    }

    const reason = [error.code, error.summary].filter(Boolean).join(': ') || `npm trust list exited with ${code}`;
    if (options.verbose) log(colors.dim(`\n[${name}] npm trust list output:\n${combined.trim()}\n`));
    return { name, status: 'error', reason };
  }

  const configs = parseTrustConfigs(stdout);
  if (configs.length === 0) return { name, status: 'missing' };

  const match = configs.find(matchesRequirements);
  if (match) return { name, status: 'ok', config: match };
  return { name, status: 'mismatch', config: configs[0] };
};

const describeConfig = (config?: TrustConfig): string => {
  if (!config) return 'none';
  const permissions = (config.permissions ?? []).join(', ') || 'no permissions';
  return `${config.type ?? '?'} ${config.repository ?? '?'} / ${config.file ?? '?'} / ${config.environment ?? 'no environment'} (${permissions})`;
};

const createTrust = (name: string): { ok: boolean; output: string } => {
  const npmArgs = [
    'trust',
    TRUSTED_PUBLISHER.provider,
    name,
    '--file',
    TRUSTED_PUBLISHER.file,
    '--repo',
    TRUSTED_PUBLISHER.repository,
    '--env',
    TRUSTED_PUBLISHER.environment,
    '--allow-publish',
    '--yes',
  ];
  if (options.dryRun) npmArgs.push('--dry-run');
  const { code, stdout, stderr } = runNpm(npmArgs);
  return { ok: code === 0, output: `${stdout}\n${stderr}`.trim() };
};

const revokeTrust = (name: string, id: string): { ok: boolean; output: string } => {
  const npmArgs = ['trust', 'revoke', name, `--id=${id}`];
  if (options.dryRun) npmArgs.push('--dry-run');
  const { code, stdout, stderr } = runNpm(npmArgs);
  return { ok: code === 0, output: `${stdout}\n${stderr}`.trim() };
};

const report = (entries: Entry[]): void => {
  const group = (status: Status): Entry[] => entries.filter((e) => e.status === status);

  if (options.json) {
    log(JSON.stringify({ required: TRUSTED_PUBLISHER, packages: entries }, null, 2));
    return;
  }

  log(colors.bold('\nTrusted publishing status'));
  log(
    colors.dim(
      `  required: ${TRUSTED_PUBLISHER.repository} / ${TRUSTED_PUBLISHER.file} / ${TRUSTED_PUBLISHER.environment} / --allow-publish`
    )
  );
  log(colors.dim(`  packages: ${entries.length}`));

  const ok = group('ok');
  if (ok.length) log(`\n${colors.green('✓ configured')} (${ok.length})`);

  const sections: [Status, string, (entry: Entry) => string][] = [
    ['missing', colors.yellow('needs trust config'), (e): string => e.name],
    ['mismatch', colors.yellow('config differs'), (e): string => `${e.name} → ${describeConfig(e.config)}`],
    ['unpublished', colors.cyan('not published yet'), (e): string => e.name],
    ['error', colors.red('could not be checked'), (e): string => `${e.name} (${e.reason})`],
  ];

  sections.forEach(([status, title, format]) => {
    const items = group(status);
    if (!items.length) return;
    log(`\n${title} (${items.length})`);
    items.forEach((entry) => log(`  ${format(entry)}`));
  });

  if (group('mismatch').length && !options.force) {
    log(colors.dim('\n  Re-run with --sync --force to revoke and recreate mismatched configurations.'));
  }
  if (group('unpublished').length) {
    log(colors.dim('\n  Publish these once (npm run publish:new) before configuring trust.'));
  }
  log('');
};

/**
 * The scan costs one npm call per package and a 2FA prompt, so `--sync` reuses
 * the result of a recent scan instead of spending the 2FA window on re-checking.
 */
const saveCache = (entries: Entry[]): void => {
  try {
    fs.mkdirSync(path.dirname(context.cacheFile), { recursive: true });
    fs.writeFileSync(
      context.cacheFile,
      JSON.stringify({ checkedAt: new Date().toISOString(), required: TRUSTED_PUBLISHER, packages: entries }, null, 2),
      'utf-8'
    );
  } catch (err) {
    log(`${colors.yellow('Warning:')} could not save the scan results (${(err as Error).message})`);
  }
};

const readCache = (): { entries: Entry[]; ageMinutes: number } | null => {
  try {
    const cache = JSON.parse(fs.readFileSync(context.cacheFile, 'utf-8')) as {
      checkedAt: string;
      required: typeof TRUSTED_PUBLISHER;
      packages: Entry[];
    };

    // A scan made against different requirements says nothing about the current ones
    if (JSON.stringify(cache.required) !== JSON.stringify(TRUSTED_PUBLISHER)) return null;

    const ageMinutes = (Date.now() - new Date(cache.checkedAt).getTime()) / 60_000;
    if (!Number.isFinite(ageMinutes) || ageMinutes > CACHE_TTL_MINUTES) return null;

    return { entries: cache.packages, ageMinutes };
  } catch {
    return null;
  }
};

/**
 * Append a short markdown summary when running inside GitHub Actions.
 */
const writeStepSummary = (entries: Entry[]): void => {
  const summaryPath = process.env.GITHUB_STEP_SUMMARY;
  if (!summaryPath) return;

  const count = (status: Status): number => entries.filter((e) => e.status === status).length;
  const listOf = (status: Status): string =>
    entries
      .filter((e) => e.status === status)
      .map((e) => `- \`${e.name}\`${e.reason ? ` — ${e.reason}` : ''}`)
      .join('\n');

  const lines = [
    '## npm trusted publishing',
    '',
    `Required: \`${TRUSTED_PUBLISHER.repository}\` / \`${TRUSTED_PUBLISHER.file}\` / \`${TRUSTED_PUBLISHER.environment}\` / \`--allow-publish\``,
    '',
    `configured: ${count('ok')} · missing: ${count('missing')} · mismatched: ${count('mismatch')} · unpublished: ${count('unpublished')} · errors: ${count('error')}`,
  ];

  (['missing', 'mismatch', 'unpublished', 'error'] as Status[]).forEach((status) => {
    const list = listOf(status);
    if (list) lines.push('', `### ${status}`, '', list);
  });

  fs.appendFileSync(summaryPath, `${lines.join('\n')}\n`, 'utf-8');
};

/**
 * Configure the missing packages, batched to fit inside the 5 minute window
 * during which npm allows skipping 2FA after the first prompt.
 */
const sync = async (entries: Entry[]): Promise<boolean> => {
  const todo = entries.filter((e) => e.status === 'missing' || (e.status === 'mismatch' && options.force));
  if (!todo.length) {
    log(colors.green('Nothing to configure.'));
    return true;
  }

  const rl =
    !options.yes && process.stdin.isTTY
      ? readline.createInterface({ input: process.stdin, output: process.stdout })
      : null;
  let allDone = true;

  for (let i = 0; i < todo.length; i += 1) {
    const entry = todo[i];

    if (i > 0 && i % options.batchSize === 0) {
      log(colors.dim(`\n  ${i}/${todo.length} done.`));
      if (rl) {
        const answer = await rl.question('  Refresh the 2FA skip window on npmjs.com, then press enter to continue (or type "stop"): ');
        if (answer.trim().toLowerCase() === 'stop') {
          allDone = false;
          break;
        }
      }
    }

    if (entry.status === 'mismatch') {
      const id = entry.config?.id;
      if (!id) {
        log(`${colors.red('✗')} ${entry.name}: existing config has no id, revoke it manually`);
        allDone = false;
        continue;
      }
      const revoked = revokeTrust(entry.name, id);
      if (!revoked.ok) {
        log(`${colors.red('✗')} ${entry.name}: revoke failed`);
        log(colors.dim(`  ${revoked.output.split('\n').slice(-1)[0]}`));
        if (isAuthError(revoked.output)) {
          log(colors.red(`\nStopping: ${AUTH_HINT}`));
          return false;
        }
        allDone = false;
        continue;
      }
    }

    const created = createTrust(entry.name);
    if (created.ok) {
      log(`${colors.green('✓')} ${entry.name}${options.dryRun ? colors.dim(' (dry-run)') : ''}`);
      // `--dry-run` exits 0 without creating anything; do not cache that as configured
      if (!options.dryRun) entry.status = 'ok';
    } else if (/already exists|EEXIST|E409|conflict/i.test(created.output)) {
      // The reused check was stale: something configured this package meanwhile
      log(`${colors.yellow('•')} ${entry.name}: a trust configuration already exists, re-run the check`);
      allDone = false;
    } else {
      log(`${colors.red('✗')} ${entry.name}`);
      log(colors.dim(`  ${created.output.split('\n').slice(-1)[0]}`));
      if (isAuthError(created.output)) {
        log(colors.red(`\nStopping: ${AUTH_HINT}`));
        rl?.close();
        return false;
      }
      allDone = false;
    }

    if (i < todo.length - 1) await wait(options.sleep);
  }

  rl?.close();
  return allDone;
};

/**
 * Check every package: which ones exist on the registry, and how each one is configured.
 * A previous scan is reused for the packages it could answer, so an interrupted
 * run (an expired 2FA window, for instance) only re-checks what stayed unknown.
 */
const scan = async (interactive: boolean, prior?: Entry[]): Promise<Entry[]> => {
  const names = context.names;
  const known = new Map(
    (prior ?? []).filter((e) => e.status === 'ok' || e.status === 'missing' || e.status === 'mismatch').map((e) => [e.name, e])
  );

  const published = await mapWithConcurrency(names, EXISTENCE_CONCURRENCY, isPublished);
  const existing = names.filter((_, i) => published[i]);
  const toInspect = existing.filter((name) => !known.has(name));

  if (!options.json) {
    log(colors.bold(`Checking trusted publishing for ${names.length} packages`));
    if (known.size) log(colors.dim(`  reusing ${known.size} known results, checking ${toInspect.length}`));
  }

  if (interactive && toInspect.length) warmUpAuth(toInspect[0]);

  const inspected = await mapWithConcurrency(toInspect, LIST_CONCURRENCY, async (name) => inspect(name));
  const byName = new Map([...known, ...inspected.map((entry): [string, Entry] => [entry.name, entry])]);

  return names.map((name, i) => (published[i] ? byName.get(name) : undefined) ?? { name, status: 'unpublished' });
};

/**
 * `--sync` configures; without it the command only reports. Either way the exit code
 * is what CI reads: non-zero when a package still needs a trust configuration.
 */
export const runTrust = async (resolved: ResolvedOptions): Promise<void> => {
  // The library is published from the repository root, the same package the calendar
  // bundles take a peer dependency on.
  const { name } = JSON.parse(fs.readFileSync(path.join(resolved.repoRoot, 'package.json'), 'utf-8')) as {
    name: string;
  };

  context = {
    cacheFile: path.join(resolved.riteRoot, resolved.manifest.tmpDir, 'trusted-publishing.json'),
    names: packageNames(resolved, name),
  };

  checkNpmVersion();

  const interactive = Boolean(process.stdin.isTTY) && !options.yes && !options.noPrompt;
  const cached = options.fresh ? null : readCache();
  const unknowns = cached?.entries.filter((e) => e.status === 'error' || e.status === 'unpublished').length ?? 0;

  if (cached && !options.json) {
    const actionable = cached.entries.filter((e) => e.status === 'missing' || e.status === 'mismatch').length;
    log(colors.bold(`Found a check from ${Math.round(cached.ageMinutes)} min ago`));
    log(colors.dim(`  ${cached.entries.length} packages, ${actionable} needing a trust configuration`));
    if (unknowns) log(colors.dim(`  ${unknowns} could not be checked and will be checked again`));
    log(colors.dim('  Pass --fresh to check them all again.'));
  }

  // With every package accounted for, `--sync` can go straight to configuring them
  const reuseAll = Boolean(cached) && options.sync && unknowns === 0;
  const entries = reuseAll ? (cached as { entries: Entry[] }).entries : await scan(interactive, cached?.entries);

  // Writes are 2FA protected too, so let npm prompt once before the batch
  if (reuseAll && interactive && entries.some((e) => e.status === 'missing' || e.status === 'mismatch')) {
    warmUpAuth(entries.find((e) => e.status === 'ok')?.name ?? entries[0].name);
  }

  const otpNeeded = entries.some((e) => e.reason === OTP_REASON);
  const authFailed = otpNeeded || entries.some((e) => e.status === 'error' && e.reason?.startsWith(AUTH_REASON));

  if (authFailed && !options.json) {
    if (otpNeeded) {
      log(colors.red(`\n${AUTH_HINT}`));
    } else {
      log(colors.red('\nnpm rejected the trust API.'));
      log(colors.dim(`  whoami: ${runNpm(['whoami']).stdout.trim() || 'not logged in'}`));
      log(colors.dim(`  registry: ${runNpm(['config', 'get', 'registry']).stdout.trim()}`));
      log(colors.dim('  npm trust needs account-level 2FA; tokens that bypass 2FA are rejected.'));
    }
    if (authRejectionDetail && options.verbose) log(colors.dim(`\n${authRejectionDetail}\n`));
  }

  if (options.sync && !authFailed) {
    const done = await sync(entries);
    if (!done && !options.json) log(colors.yellow('\nSome packages still need a trust configuration.'));
  }

  report(entries);
  writeStepSummary(entries);
  saveCache(entries);

  // `unpublished` is expected until the first token-based publish; it is not a failed check
  const actionable = entries.filter(
    (e) => e.status === 'missing' || e.status === 'mismatch' || e.status === 'error'
  ).length;
  process.exit(actionable > 0 ? 1 : 0);
};
