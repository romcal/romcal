import { buildTypeScriptFiles, log, onWriteFile } from '@romcal/build';
import rimraf from 'rimraf';

const distDir = 'dist';

(async (): Promise<void> => {
  log({ message: 'Cleaning output packages/proper-of-time/dist folder' });
  rimraf.nativeSync(distDir);

  await Promise.all([
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
