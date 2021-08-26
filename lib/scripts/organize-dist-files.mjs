import fs from 'fs';
import glob from 'glob';
import path from 'path';
import rimraf from 'rimraf';

// Move all lib files from /tmp/dts/lib/* to /tmp/dts/
glob.sync('./*', { cwd: './tmp/dts/lib' }).forEach((p) => {
  const currentPath = path.resolve('tmp/dts/lib', p);
  const destinationPath = path.resolve('tmp/dts', p);
  fs.renameSync(currentPath, destinationPath);
});

// Delete the tmp/dts/lib directory
rimraf.sync(path.resolve('tmp/dts/lib'));

// Move all bundled files from /tmp/dts/tmp/bundles/* to /tmp/dts/bundles/
const bundleDir = path.resolve('tmp/dts/bundles');
if (!fs.existsSync(bundleDir)) fs.mkdirSync(bundleDir, { recursive: true });
glob.sync('./bundles/*', { cwd: './tmp/dts/tmp' }).forEach((p) => {
  const currentPath = path.resolve('tmp/dts/tmp', p);
  const destinationPath = path.resolve('tmp/dts', p);
  fs.renameSync(currentPath, destinationPath);
  // Update import path
  const content = fs.readFileSync(destinationPath, 'utf8').replace('../../lib/index', '../index');
  fs.writeFileSync(destinationPath, content, 'utf8');
});

// Delete the tmp/dts/tmp directory
rimraf.sync(path.resolve('tmp/dts/tmp'));
