import { buildTypeScriptFiles, log, onWriteFile } from '@romcal/build';
import rimraf from 'rimraf';

const distDir = 'dist';

(async (): Promise<void> => {
  log({ message: 'Cleaning output packages/core/dist folder' });
  rimraf.nativeSync(distDir);

  buildTypeScriptFiles({
    entryPoint: 'src/index.ts',
    external: ['@romcal/shared'],
    outDir: distDir,
    outFileNameWithoutExt: 'index',
    outputDts: true,
    outputSourcemap: true,
    onWriteFile,
  });
})();
