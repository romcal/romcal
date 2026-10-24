#!/usr/bin/env node
import { spawn } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * The CLI is TypeScript and the rite manifests it loads are too, so the entry point
 * is a thin shim that hands both to tsx.
 */
const here = dirname(fileURLToPath(import.meta.url));
const cli = resolve(here, '../src/cli.ts');
const tsx = resolve(here, '../../../node_modules/.bin/tsx');

const child = spawn(tsx, [cli, ...process.argv.slice(2)], { stdio: 'inherit' });
child.on('exit', (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  else process.exit(code ?? 0);
});
