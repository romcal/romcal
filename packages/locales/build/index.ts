import { buildJsonSchema, log, onWriteFile } from '@romcal/build';
import chalk from 'chalk';
import rimraf from 'rimraf';

import { buildLocales } from './locale.helpers';

const distDir = 'dist';

(async (): Promise<void> => {
  log({ message: `${chalk.bold.red('Romcal')} package/data builder` });

  log({ message: 'Cleaning output packages/locales/dist folder' });
  rimraf.nativeSync(distDir);

  await Promise.all([
    buildJsonSchema({
      entryPoint: '../../shared/src/{constants,types}/**/*.ts',
      outDir: distDir,
      outFileNameWithoutExt: 'Locale.schema',
      schemaFor: 'Locale',
      onWriteFile,
    }),

    buildLocales({
      entryPoints: 'src/*.yaml',
      outDir: distDir,
      onWriteFile,
    }),
  ]);
})();
