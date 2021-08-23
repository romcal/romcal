import * as fs from 'fs';
import * as glob from 'glob';
import * as path from 'path';
import * as rimraf from 'rimraf';

// Move all bundled files from /dist/tmp/bundles/* to /dist/bundles/
const bundleDir = path.resolve('dist/bundles');
if (!fs.existsSync(bundleDir)) fs.mkdirSync(bundleDir, { recursive: true });
glob.sync('./bundles/*', { cwd: './dist/tmp' }).forEach((p) => {
  const currentPath = path.resolve('dist/tmp', p);
  const destinationPath = path.resolve('dist', p);
  fs.renameSync(currentPath, destinationPath);
});

// Delete the dist/tmp directory
rimraf.sync(path.resolve('dist/tmp'));
