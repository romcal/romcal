import { statSync } from 'node:fs';

import chalk from 'chalk';
import prettyBytes from 'pretty-bytes';

export type BuiltFile = {
  outPath: string;
  namespace?: string;
};

function getFileSizeInBytes(filename: string): string {
  const stats = statSync(filename);
  const fileSizeInBytes = stats.size;
  return prettyBytes(fileSizeInBytes);
}

export type LogOptions = {
  message: string;
  namespace?: string;
  type?: 'info' | 'success' | 'warn' | 'error';
};
export function log({ message, namespace = 'CLI', type = 'info' }: LogOptions): void {
  const typeToColor = {
    info: chalk.blue,
    success: chalk.green,
    warn: chalk.bgYellow,
    error: chalk.bgRed.bold,
  }[type];
  const pad = chalk.dim(' '.repeat(Math.max(6 - namespace.length, 0)));
  const ns = typeToColor(namespace.toUpperCase()) + pad;
  return console.log(`${ns} ${message}`);
}

export function onWriteFile({ outPath, namespace: format }: BuiltFile): void {
  const pad = chalk.dim('.'.repeat(Math.max(45 - outPath.length, 0)));
  const size = chalk.cyan(getFileSizeInBytes(outPath));
  return log({
    message: `${chalk.bold(outPath)} ${pad} ${size}`,
    namespace: format,
    type: 'success',
  });
}

export function logError(message: string): void {
  return log({ message, type: 'error', namespace: 'ERROR' });
}

export function logWarn(message: string): void {
  return log({ message, type: 'warn', namespace: 'WARN' });
}
