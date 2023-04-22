import { log, onWriteFile } from '@romcal/build';
import chalk from 'chalk';
import rimraf from 'rimraf';

import { buildCalendars } from './calendar.helpers';
import { buildMartyrology } from './martyrology.helpers';

const distDir = 'dist';

(async (): Promise<void> => {
  log({ message: `${chalk.bold.red('Romcal')} package/data builder` });

  log({ message: 'Cleaning output packages/locales/dist folder' });
  rimraf.nativeSync(distDir);

  await buildMartyrology({
    // entryPoint: 'src/martyrology/martyrology.yaml',
    outPath: `${distDir}/martyrology/martyrology.json`,
    onWriteFile,
  }).then(async (martyrologyCatalog) => {
    await buildCalendars({
      // entryPoints: 'src/calendars/**/*.yaml',
      martyrology: martyrologyCatalog,
      outDir: distDir,
      onWriteFile,
    });
  });

  // await Promise.all([
  //   buildJsonSchema({
  //     entryPoint: '../../shared/src/{constants,types}/**/*.ts',
  //     outDir: distDir,
  //     outFileNameWithoutExt: 'Locale.schema',
  //     schemaFor: 'Locale',
  //     onWriteFile,
  //   }),

  //   buildLocales({
  //     entryPoints: 'src/*.yaml',
  //     outDir: distDir,
  //     onWriteFile,
  //   }),
  // ]);
})();
