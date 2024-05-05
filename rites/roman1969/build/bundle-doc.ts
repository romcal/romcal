/* eslint-disable import/no-extraneous-dependencies */

import fs from 'fs';
import path from 'path';

import chalk from 'chalk';
import prettier from 'prettier';

import { GeneralRoman } from '../src/general-calendar/proper-of-saints';
import { CalendarDef } from '../src/models/calendar-def';
import { particularCalendars } from '../src/particular-calendars';
import { toPackageName } from '../src/utils/string';

import { getDuration } from './time';

const { log } = console;
const time = new Date();

log(chalk.bold(`\n✓ Update the documentation of all calendar plugins in ${chalk.cyan('./docs/calendar-plugins.md')}`));

const allCalendars: (typeof CalendarDef)[] = [GeneralRoman, ...Object.values(particularCalendars)];

let mdTemplate = `# Calendar plugins

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

| Name | NPM Package name |
| -----|------------------|\n`;

for (let i = 0; i < allCalendars.length; i += 1) {
  const calendar = allCalendars[i];
  const humanName = calendar.name.replace(/([A-Z])/g, ' $1').replace('_', ' /');
  mdTemplate += `|${humanName}|\`@romcal/calendar.${toPackageName(calendar.name)}@dev\`|\n`;
}

// Prettify the generated documentation
prettier.format(mdTemplate, { parser: 'markdown' }).then((mdFormatted) => {
  fs.writeFileSync(path.resolve(__dirname, '../../../docs/', 'calendar-plugins.md'), mdFormatted, 'utf-8');

  /**
   * Init and display duration helpers
   */
  const duration = getDuration(time);
  log(chalk.green(`\n✨ Done in ${chalk.bold(duration)}`));
  process.exit(0);
});
