import npmPublish from '@jsdevtools/npm-publish';
import { Results } from '@jsdevtools/npm-publish/lib/results';
import fs from 'fs';
import path from 'path';

const tag = 'dev';
const dryRun = false;
const token = process.env.NPM_TOKEN;

/**
 * Provide a feedback message after a package is published to NPM
 * @param data
 */
const afterPublish = (data: Results) => {
  if (data.oldVersion !== data.version) {
    console.log(` ✓ Package "${data.package}" published: ${data.oldVersion} → ${data.version} (${data.tag})\n`);
  } else if (data.oldVersion === data.version) {
    console.log(` ✓ Package "${data.package}" is already published: ${data.version} (${data.tag})\n`);
  } else {
    console.log(data, '\n');
  }
};

(async () => {
  // Start by publishing the main romcal library
  console.log(` - Publishing romcal`);
  const data = await npmPublish({
    package: path.join(__dirname, '../package.json'),
    access: 'public',
    token,
    tag,
    dryRun,
  });
  afterPublish(data);

  // Retrieve the list of all calendar bundles
  const bundlesBasePath = path.join(__dirname, '..', 'dist', 'bundles');
  const bundleNames = fs
    .readdirSync(bundlesBasePath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  // Then, publish every calendar bundles as standalone NPM packages
  for (let i = 0; i < bundleNames.length; i++) {
    console.log(` - Publishing bundle: ${bundleNames[i]}`);
    const data = await npmPublish({
      package: path.join(bundlesBasePath, bundleNames[i], 'package.json'),
      access: 'public',
      token,
      tag,
      dryRun,
    });
    afterPublish(data);
  }
})();
