import fs from 'fs';
import path from 'path';

import { npmPublish } from '@jsdevtools/npm-publish';
import { Results } from '@jsdevtools/npm-publish/lib/results';

const tag = 'dev';
const dryRun = process.argv.includes('--dry-run');
const token = process.env.NPM_TOKEN ?? 'invalid_token';

const { log } = console;

/**
 * Provide a feedback message after a package is published to NPM
 * @param data
 */
const afterPublish = (data: Results): void => {
  if (data.oldVersion !== data.version) {
    log(` ✓ Package "${data.name}" published: ${data.oldVersion} → ${data.version} (${data.tag})\n`);
  } else if (data.oldVersion === data.version) {
    log(` ✓ Package "${data.name}" is already published: ${data.version} (${data.tag})\n`);
  } else {
    log(data, '\n');
  }
};

(async (): Promise<void> => {
  // Start by publishing the main romcal library
  log(' - Publishing romcal');
  const mainData = await npmPublish({
    package: path.join(__dirname, '../package.json'),
    access: 'public',
    token,
    tag,
    dryRun,
  });
  afterPublish(mainData);

  // Retrieve the list of all calendar bundles
  const bundlesBasePath = path.join(__dirname, '../dist/bundles');
  const bundleNames = fs
    .readdirSync(bundlesBasePath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  // Then, publish every calendar bundles as standalone NPM packages
  for (let i = 0; i < bundleNames.length; i += 1) {
    log(` - Publishing bundle: ${bundleNames[i]}`);
    const calendarData = await npmPublish({
      package: path.join(bundlesBasePath, bundleNames[i], 'package.json'),
      access: 'public',
      token,
      tag,
      dryRun,
    });
    afterPublish(calendarData);
  }
})();
