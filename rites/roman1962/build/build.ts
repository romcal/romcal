/**
 * Minimal M1 build pipeline for rites/roman1962.
 *
 * 1. Type-check and emit .d.ts under tmp/dts via tsc.
 * 2. Bundle dist/index.d.ts via dts-bundle-generator.
 * 3. Bundle src/index.ts to dist/{cjs,esm}/romcal.js via esbuild.
 *
 * The per-calendar bundle / iife pipeline from roman1969 is deferred — this
 * rite has no calendar definitions yet. See docs/1962/08-m1-scaffolding.md.
 */

import fs from 'node:fs';
import { dirname, resolve } from 'node:path';

import chalk from 'chalk';
import { generateDtsBundle } from 'dts-bundle-generator';
import { build } from 'esbuild';
import { rimraf } from 'rimraf';
import ts from 'typescript';

const tsConfigPath = './tsconfig.release.json';
const { log } = console;

const reportDiagnostics = (diagnostics: readonly ts.Diagnostic[]): void => {
  diagnostics.forEach((d) => {
    let message = 'Error';
    if (d.file && d.start !== undefined) {
      const { line, character } = d.file.getLineAndCharacterOfPosition(d.start);
      message += ` ${d.file.fileName} (${line + 1},${character + 1})`;
    }
    message += `: ${ts.flattenDiagnosticMessageText(d.messageText, '\n')}`;
    log(chalk.yellow(message));
  });
};

const readConfigFile = (configFileName: string): ts.ParsedCommandLine => {
  const configText = fs.readFileSync(configFileName).toString();
  const parsed = ts.parseConfigFileTextToJson(configFileName, configText);
  if (!parsed.config) {
    if (parsed.error) reportDiagnostics([parsed.error]);
    log(chalk.red(`Error: could not parse ${configFileName}`));
    process.exit(1);
  }
  const result = ts.parseJsonConfigFileContent(parsed.config, ts.sys, dirname(configFileName));
  if (result.errors.length > 0) {
    reportDiagnostics(result.errors);
    process.exit(1);
  }
  return result;
};

const compile = (configFileName: string): void => {
  const config = readConfigFile(configFileName);
  const program = ts.createProgram(config.fileNames, config.options);
  const emit = program.emit();
  reportDiagnostics(ts.getPreEmitDiagnostics(program).concat(emit.diagnostics));
  if (emit.emitSkipped) {
    log(chalk.red('Error: type emit skipped'));
    process.exit(1);
  }
};

const run = async (): Promise<void> => {
  log(chalk.bold(`\n  –– ${chalk.red('Romcal 1962')} builder ––`));

  log(chalk.bold('\n✓ Compiling types'));
  rimraf.sync(resolve('tmp/dts'));
  compile(tsConfigPath);
  log(chalk.dim('  src/**/*.ts → tmp/dts/'));

  log(chalk.bold(`\n✓ Cleaning ${chalk.cyan('./dist/')}`));
  rimraf.sync(resolve('dist'));
  fs.mkdirSync('dist', { recursive: true });

  log(chalk.bold(`\n✓ Bundling ${chalk.cyan('.d.ts')} → ${chalk.cyan('./dist/index.d.ts')}`));
  const dts = generateDtsBundle(
    [
      {
        filePath: './tmp/dts/src/index.d.ts',
        failOnClass: false,
        libraries: { importedLibraries: ['i18next', 'typescript'] },
        output: {
          sortNodes: true,
          umdModuleName: 'Romcal1962',
          inlineDeclareExternals: false,
          noBanner: true,
          respectPreserveConstEnum: false,
          exportReferencedTypes: true,
        },
      },
    ],
    { preferredConfigPath: tsConfigPath }
  );
  fs.writeFileSync(resolve('dist', 'index.d.ts'), dts.join('\n'), 'utf-8');

  for (const format of ['cjs', 'esm'] as const) {
    log(chalk.bold(`\n✓ Bundling ${chalk.green(format)}`));
    const subPkg = JSON.stringify({ type: format === 'esm' ? 'module' : 'commonjs' }, null, 2);
    await build({
      bundle: true,
      minify: true,
      sourcemap: 'external',
      external: ['i18next'],
      entryPoints: ['src/index.ts'],
      format,
      outfile: `dist/${format}/romcal.js`,
      target: format === 'esm' ? 'ESNext' : 'ES2022',
      platform: 'node',
      ...(format === 'esm'
        ? {
            banner: {
              js: [
                "import{createRequire as __cr}from'node:module';",
                "import{fileURLToPath as __fp}from'node:url';",
                "import{dirname as __dn}from'node:path';",
                'const require=__cr(import.meta.url);',
                'const __filename=__fp(import.meta.url);',
                'const __dirname=__dn(__filename);',
              ].join(''),
            },
          }
        : {}),
    });
    fs.writeFileSync(resolve(`dist/${format}/package.json`), subPkg, 'utf-8');
    log(chalk.dim(`  src/index.ts → dist/${format}/romcal.js`));
  }

  log(chalk.green('\n✨ Done'));
};

run().catch((err) => {
  log(chalk.red(String(err)));
  process.exit(1);
});
