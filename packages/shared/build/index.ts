import { buildJsonSchema, buildTypeScriptFiles, log, onWriteFile } from '@romcal/build';
import rimraf from 'rimraf';

const distDir = 'dist';

(async (): Promise<void> => {
  log({ message: 'Cleaning output packages/shared folder' });
  rimraf.nativeSync(distDir);

  Promise.all([
    buildJsonSchema({
      entryPoint: 'src/{constants,types}/**/*.ts',
      outDir: distDir,
      outFileNameWithoutExt: 'schema',
      onWriteFile,
    }),

    buildTypeScriptFiles({
      entryPoint: 'src/index.ts',
      outDir: distDir,
      outFileNameWithoutExt: 'index',
      outputDts: true,
      outputSourcemap: true,
      onWriteFile,
    }),
  ]);
})();
