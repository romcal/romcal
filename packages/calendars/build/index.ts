import { buildJsonSchema, log, onWriteFile } from '@romcal/build';
import chalk from 'chalk';
import rimraf from 'rimraf';

import { buildCalendars } from './calendar.helpers';
import { buildMartyrology } from './martyrology.helpers';

const distDir = 'dist';

(async (): Promise<void> => {
  log({ message: `${chalk.bold.red('Romcal')} package/data builder` });

  log({ message: 'Cleaning output packages/locales/dist folder' });
  rimraf.nativeSync(distDir);

  await Promise.all([
    buildJsonSchema({
      entryPoint: '../../shared/src/{constants,types}/**/*.ts',
      outDir: `${distDir}/schemas`,
      outFileNameWithoutExt: 'CalendarDefInput.schema',
      schemaFor: 'CalendarDefInput',
      onWriteFile,
    }),

    buildJsonSchema({
      entryPoint: '../../shared/src/{constants,types}/**/*.ts',
      outDir: `${distDir}/schemas`,
      outFileNameWithoutExt: 'MartyrologyMap.schema',
      schemaFor: 'MartyrologyMap',
      onWriteFile,
    }),

    buildMartyrology({
      entryPoint: 'src/martyrology.yaml',
      outPath: `${distDir}/martyrology/martyrology.json`,
      onWriteFile,
    }).then(async (martyrologyCatalog) => {
      await buildCalendars({
        entryPoints: 'src/{continents,countries,general-roman,regions}/**/*.yaml',
        martyrology: martyrologyCatalog,
        outDir: distDir,
        onWriteFile,
      });
    }),
  ]);
})();
