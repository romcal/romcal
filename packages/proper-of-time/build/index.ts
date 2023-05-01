import { buildJsonSchema, log, onWriteFile } from '@romcal/build';
import rimraf from 'rimraf';

import { buildLocales } from './locale.helpers';

const distDir = 'dist';

(async (): Promise<void> => {
  log({ message: 'Cleaning output packages/locales/dist folder' });
  rimraf.nativeSync(distDir);

  await Promise.all([
    buildJsonSchema({
      entryPoint: '../../shared/src/{constants,types}/**/*.ts',
      outDir: `${distDir}/schemas`,
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
