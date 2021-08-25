import * as fs from 'fs';
import * as glob from 'glob';
import * as path from 'path';
import * as rimraf from 'rimraf';

// Move all lib files from /dist/lib/* to /dist/
glob.sync('./*', { cwd: './dist/lib' }).forEach((p) => {
  const currentPath = path.resolve('dist/lib', p);
  const destinationPath = path.resolve('dist', p);
  fs.renameSync(currentPath, destinationPath);
});

// Delete the dist/lib directory
rimraf.sync(path.resolve('dist/lib'));

// Move all bundled files from /dist/tmp/bundles/* to /dist/bundles/
const bundleDir = path.resolve('dist/bundles');
if (!fs.existsSync(bundleDir)) fs.mkdirSync(bundleDir, { recursive: true });
glob.sync('./bundles/*', { cwd: './dist/tmp' }).forEach((p) => {
  const currentPath = path.resolve('dist/tmp', p);
  const destinationPath = path.resolve('dist', p);
  fs.renameSync(currentPath, destinationPath);
  // Update import path
  const content = fs.readFileSync(destinationPath, 'utf8').replace('../../lib/index', '../index');
  fs.writeFileSync(destinationPath, content, 'utf8');
});

// Delete the dist/tmp directory
rimraf.sync(path.resolve('dist/tmp'));
