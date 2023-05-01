import { mkdirSync } from 'node:fs';

import esbuild from 'esbuild';
import { rollup } from 'rollup';
import dts from 'rollup-plugin-dts';

import { BuiltFile, log } from '../utils';

type BuildJsOptions = {
  entryPoint: string;
  outDir: string;
  outFileNameWithoutExt: string;
  globalName?: string;
  external?: string[];
  outputDts: boolean;
  outputSourcemap: boolean;
  onWriteFile?: (opt: BuiltFile) => void;
};

export const buildTypeScriptFiles = async ({
  entryPoint,
  outDir,
  outFileNameWithoutExt,
  globalName,
  external,
  outputDts,
  outputSourcemap,
  onWriteFile,
}: BuildJsOptions): Promise<void> => {
  const esbuildOption: Required<Pick<esbuild.BuildOptions, 'format' | 'outfile'>>[] = [
    { format: 'cjs', outfile: `${outDir}/${outFileNameWithoutExt}.mjs` },
    { format: 'esm', outfile: `${outDir}/${outFileNameWithoutExt}.js` },
    { format: 'iife', outfile: `${outDir}/${outFileNameWithoutExt}.global.js` },
  ];

  mkdirSync(outDir, { recursive: true });

  await Promise.all([
    // cjs, esm, iife
    ...esbuildOption.map(async (option) => {
      log({ message: `Building entry: ${entryPoint}`, namespace: option.format });

      await esbuild.build({
        ...option,
        bundle: true,
        minify: option.format === 'iife',
        entryPoints: [entryPoint],
        sourcemap: outputSourcemap,
        ...(external ? { external } : {}),
        ...(globalName ? { globalName } : {}),
      });

      if (onWriteFile) {
        onWriteFile({ outPath: option.outfile, namespace: option.format });
        if (outputSourcemap)
          onWriteFile({ outPath: `${option.outfile}.map`, namespace: option.format });
      }
    }),

    // d.ts
    (async (): Promise<void> => {
      if (!outputDts) return;

      const namespace = 'dts';
      const outPath = `${outDir}/${outFileNameWithoutExt}.d.ts`;
      log({ message: `Building entry: ${entryPoint}`, namespace });

      await (
        await rollup({
          input: entryPoint,
          plugins: [dts()],
        })
      ).write({
        file: outPath,
        format: 'es',
      });

      if (onWriteFile) onWriteFile({ outPath, namespace });
    })(),
  ]);
};
