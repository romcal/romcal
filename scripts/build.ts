import fs from 'fs';
import { dirname, resolve } from 'node:path';

import chalk from 'chalk';
import { generateDtsBundle } from 'dts-bundle-generator';
import { Format, Platform, build } from 'esbuild';
import { glob } from 'glob';
import { rimraf } from 'rimraf';
import { PackageJson } from 'type-fest';
import ts from 'typescript';

import { GENERAL_ROMAN_NAME } from '../lib/constants/general-calendar-names';
import { particularCalendars } from '../lib/particular-calendars';
import { toPackageName, toPascalCase } from '../lib/utils/string';
import pkg from '../package.json';

import { RomcalBundler } from './bundle';
import { getDuration } from './time';

const tsConfigPath = './tsconfig.release.json';

const { log } = console;

const reportDiagnostics = (diagnostics: ts.Diagnostic[]): void => {
  diagnostics.forEach((diagnostic) => {
    let message = 'Error';
    if (diagnostic.file && diagnostic.start) {
      const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
      message += ` ${diagnostic.file.fileName} (${line + 1},${character + 1})`;
    }
    message += `: ${ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')}`;
    log(chalk.yellow(message));
  });
};
const readConfigFile = (configFileName: string): ts.ParsedCommandLine => {
  // Read config file
  const configFileText = fs.readFileSync(configFileName).toString();

  // Parse JSON, after removing comments. Just fancier JSON.parse
  const result = ts.parseConfigFileTextToJson(configFileName, configFileText);
  const configObject = result.config;
  if (!configObject) {
    if (result.error) reportDiagnostics([result.error]);
    log(`${chalk.red('Error:')}: Could not parse ${configFileName}`);
    process.exit(1);
  }

  // Extract config information
  const configParseResult = ts.parseJsonConfigFileContent(configObject, ts.sys, dirname(configFileName));
  if (configParseResult.errors.length > 0) {
    reportDiagnostics(configParseResult.errors);
    log(`${chalk.red('Error:')}: Errors found`);
    process.exit(1);
  }
  return configParseResult;
};
const compile = (configFileName: string): void => {
  // Extract configuration from config file
  const config = readConfigFile(configFileName);

  // Compile
  const program = ts.createProgram(config.fileNames, config.options);
  const emitResult = program.emit();

  // Report errors
  reportDiagnostics(ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics));

  // Return code
  const exitCode = emitResult.emitSkipped ? 1 : 0;
  if (exitCode !== 1) {
    log(chalk.cyan('Emit not skipped, exiting'));
    process.exit(exitCode);
  }
};
const buildPipeline = async (): Promise<void> => {
  const time = new Date();

  /**
   * Compiling sources and checking types of the romcal library
   */
  log(chalk.bold('\n✓ Compiling sources and checking types of the romcal library'));
  rimraf.sync(resolve('tmp/dts'));
  compile(tsConfigPath);
  // TODO: seems to stop printing before this log
  log(chalk.dim('  .d.ts files created in ./tmp/dts/'));

  /**
   * Create calendar bundle files
   */
  RomcalBundler();

  /**
   * Delete and recreate empty dist directory
   */
  log(chalk.bold(`\n✓ Cleaning up the ${chalk.cyan.bold('./dist/')} directory`));
  rimraf.sync(resolve('dist'));
  fs.mkdirSync('dist', { recursive: true });

  /**
   * Bundle all .d.ts files of the core romcal library
   */
  log(chalk.bold(`\n✓ Bundle all ${chalk.cyan('.d.ts')} files into ${chalk.cyan('./dist/index.d.ts')}`));
  const dts = generateDtsBundle(
    [
      {
        filePath: './tmp/dts/lib/index.d.ts',
        failOnClass: false,
        libraries: { importedLibraries: ['i18next', 'typescript'] },
        output: {
          sortNodes: true,
          umdModuleName: 'Romcal',
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
  log(chalk.dim('  ./tmp/dts/lib/index.d.ts → dist/index.d.ts'));

  /**
   * Retrieve all calendar bundles
   */
  const bundles = glob
    .sync('../tmp/bundles/**/*.ts', { cwd: __dirname })
    .map((p) => resolve(__dirname, p))
    .filter((p) => !/\.d\.ts$/.exec(p));

  const toGlobalName = (calendar: string, locale: string): string => {
    const varName = calendar
      .split('.')
      .map((s) => toPascalCase(s))
      .join('_');
    return `${varName}_${toPascalCase(locale)}`;
  };

  /**
   * Retrieve the license, and wrap it in code comments
   */
  const LICENSE = `/**\n${fs
    .readFileSync('./LICENSE', 'utf8')
    .trim()
    .split(/\n/g)
    .map((l) => ` * ${l}`)
    .join('\n')}\n */\n`;

  /**
   * Build the core library and all calendar bundles
   */
  await Promise.all(
    (['cjs', 'esm', 'iife'] as Format[]).map(async (format) => {
      log(chalk.bold(`\n✓ Building the codebase using the ${chalk.green.bold(format)} format`));
      const fromFormats: Record<Format, Platform> = { cjs: 'node', esm: 'neutral', iife: 'browser' };
      const platform: Platform = fromFormats[format];
      const subPackageJson = JSON.stringify({ type: format === 'esm' ? 'module' : 'commonjs' }, null, 2);

      log(chalk.dim(`  ./lib/index.ts → dist/${format}/romcal.js`));
      await build({
        bundle: true,
        minify: true,
        sourcemap: 'external',
        ...(format === 'iife' ? { globalName: 'Romcal' } : {}),
        ...(format === 'iife' ? {} : { external: ['i18next'] }),
        entryPoints: ['lib/index.ts'],
        banner: { js: LICENSE },
        format,
        outfile: `dist/${format}/romcal.js`,
        target: format === 'esm' ? 'ESNext' : 'ES2022',
      }).catch(() => {
        log(`${chalk.red('Error:')} Failed to build the core library using the ${format} format.`);
        process.exit(1);
      });
      fs.writeFileSync(resolve(`dist/${format}/package.json`), subPackageJson, 'utf-8');

      log(chalk.dim(`  ./tmp/bundles/**/*.ts → dist/bundles/[calendar]/${format}/[locale].js`));
      await Promise.all(
        bundles.map(async (p) => {
          // Do not output index.ts on iife format
          // and only output locale.iife.js on iife format
          if (
            (format !== 'iife' || !/[\\/]index\.ts$/.exec(p)) &&
            ((/.iife\.ts$/.exec(p) && format === 'iife') || (!/.iife\.ts$/.exec(p) && format !== 'iife'))
          ) {
            const calendar = /([^\\/]+)[\\/]+[^\\/]+$/.exec(p)?.[1];
            const locale = /([^\\/]+)\.\w+$/.exec(p)?.[1].replace('.iife', '');
            await build({
              minify: true,
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              ...(format === 'iife' ? { globalName: toGlobalName(calendar!, locale!) } : {}),
              bundle: format === 'iife',
              platform,
              entryPoints: [p],
              banner: { js: LICENSE },
              format,
              keepNames: true,
              outfile: `dist/bundles/${calendar}/${format}/${locale}.js`,
              sourcemap: false,
              target: format === 'esm' ? 'ESNext' : 'ES2022',
            }).catch(() => {
              log(`${chalk.red('Error:')} Failed to build the ${calendar} calendar using the ${format} format.`);
              process.exit(1);
            });
            fs.writeFileSync(resolve(`dist/bundles/${calendar}/${format}/package.json`), subPackageJson, 'utf-8');
          }
        })
      ).catch(() => {
        log(`${chalk.red('Error:')} Failed to build the calendar bundles using the ${format} format.`);
        process.exit(1);
      });
    })
  ).catch(() => {
    log(`${chalk.red('Error:')} Failed to build the codebase.`);
    process.exit(1);
  });

  /**
   * Add package.json and index.d.ts files to all calendar bundles
   */
  log(chalk.bold('\n✓ Package calendar bundles as npm modules'));
  const allCalendars = [GENERAL_ROMAN_NAME, ...Object.keys(particularCalendars)];

  allCalendars.forEach((calendar) => {
    // mixed snake and underscore case to kebab case
    const pkgName = toPackageName(calendar);

    const dir = resolve(__dirname, `../dist/bundles/${pkgName}`);

    const modulePkg: PackageJson = {
      name: `@romcal/calendar.${pkgName}`,
      version: pkg.version,
      description: `Localized romcal calendar for ${calendar}`,
      module: './esm/index.js',
      main: './cjs/index.js',
      exports: {
        '.': {
          import: './esm/index.js',
          require: './cjs/index.js',
        },
      },
      typings: './index.d.ts',
      engines: pkg.engines,
      repository: pkg.repository,
      keywords: pkg.keywords,
      author: 'The Romcal Team (https://github.com/romcal/romcal)',
      bugs: pkg.bugs,
      homepage: pkg.homepage,
      peerDependencies: { [pkg.name]: pkg.version },
      license: pkg.license,
    };

    fs.writeFileSync(resolve(dir, 'package.json'), JSON.stringify(modulePkg, null, 2), 'utf-8');

    const currentPath = resolve(__dirname, `../tmp/bundles/${pkgName}/index.d.ts`);
    const destinationPath = resolve(__dirname, `../dist/bundles/${pkgName}/index.d.ts`);
    fs.copyFileSync(currentPath, destinationPath);
  });
  log(chalk.dim(`  created ${allCalendars.length} modules in ./dist/bundles/`));
  log(chalk.dim('  created ./package.json to each modules'));
  log(chalk.dim('  /tmp/bundles/[calendar]/index.d.ts → dist/bundles/[calendar]/index.d.ts'));

  /**
   * Init and display duration helpers
   */
  const duration = getDuration(time);
  log(chalk.green(`\n✨ Done in ${chalk.bold(duration)}`));
};

(async (): Promise<void> => {
  log(chalk.bold(`\n  –– ${chalk.red('Romcal')} builder ––`));
  await buildPipeline();
})();
