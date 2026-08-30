import fs from 'fs';
import path from 'path';

import { toPackageName } from '@internal/generator';
import chalk from 'chalk';
import { ESLint } from 'eslint';

import { CalendarDef } from '../src/calendar-def';
import { calendarDefinitions } from '../src/calendars';

import { getDuration } from './time';

const { log } = console;
const time = new Date();

log(chalk.bold(`\n✓ Update the documentation of all calendar plugins in ${chalk.cyan('./docs/calendar-plugins.md')}`));

const allCalendars: (typeof CalendarDef)[] = Object.values(calendarDefinitions);

const repoRoot = path.resolve(__dirname, '../../../');

const outputPath = path.resolve(repoRoot, 'docs/', 'calendar-plugins.md');

/**
 * Render a GitHub-flavoured markdown table with columns padded to their widest cell.
 * ESLint applies rule-based fixes rather than reprinting markdown, so the alignment
 * that a formatter used to add has to be produced here.
 */
const renderTable = (headers: string[], rows: string[][]): string => {
  const widths = headers.map((header, column) =>
    Math.max(header.length, ...rows.map((row) => row[column].length), 3)
  );
  const renderRow = (cells: string[]): string =>
    `| ${cells.map((cell, column) => cell.padEnd(widths[column])).join(' | ')} |`;

  return [renderRow(headers), `| ${widths.map((width) => '-'.repeat(width)).join(' | ')} |`, ...rows.map(renderRow)].join(
    '\n'
  );
};

const rows = allCalendars.map((calendar) => [
  calendar.name.replace(/([A-Z])/g, ' $1').replace('_', ' /').trim(),
  `\`@romcal/calendar.${toPackageName(calendar.name)}@dev\``,
]);

const mdTemplate = `# Calendar plugins

The complete **General Roman Calendar**, and any other **particular calendar** (for a country, a region or a diocese) are available as **separated plugins**, that contain a bundle of the calendar data, localizations, and a martyrology catalog (containing extra metadata).

For example, to install the _General Roman Calendar_ and the calendar of _France_:

\`\`\`bash
# npm
npm install @romcal/calendar.general-roman@dev
npm install @romcal/calendar.france@dev

# yarn
yarn add @romcal/calendar.general-roman@dev
yarn add @romcal/calendar.france@dev
\`\`\`

Below the list of all available calendar plugins:

${renderTable(['Name', 'NPM Package name'], rows)}
`;

/**
 * Normalize the generated documentation with the repository ESLint configuration,
 * so this file matches what `npm run lint` expects.
 */
const formatAndWrite = async (): Promise<void> => {
  // This script runs with the workspace as cwd, and ESLint does not look inside `.config/`,
  // so both the working directory and the config file have to be pointed at the repository root.
  const eslint = new ESLint({
    cwd: repoRoot,
    fix: true,
    overrideConfigFile: path.resolve(repoRoot, '.config/eslint.config.mjs'),
  });
  const [result] = await eslint.lintText(mdTemplate, { filePath: outputPath });

  // `output` is only set when at least one fixable problem was found.
  fs.writeFileSync(outputPath, result?.output ?? mdTemplate, 'utf-8');

  const duration = getDuration(time);
  log(chalk.green(`\n✨ Done in ${chalk.bold(duration)}`));
};

formatAndWrite().then(
  () => process.exit(0),
  (e) => {
    log(chalk.red(e));
    process.exit(1);
  }
);
