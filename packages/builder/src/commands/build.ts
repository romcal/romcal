import fs from 'node:fs';
import { dirname, join, resolve } from 'node:path';

import { toPackageName, toPascalCase } from '@internal/generator';
import { generateDtsBundle } from 'dts-bundle-generator';
import { Format, Platform, build } from 'esbuild';
import { glob } from 'glob';
import { rimraf } from 'rimraf';
import { PackageJson } from 'type-fest';
import ts from 'typescript';

import { BuildFormat, ResolvedOptions } from '../types';
import { Logger } from '../utils/logger';
import { getDuration } from '../utils/time';

import { RomcalBundler } from './bundle';
import { runDoc } from './doc';

/**
 * The fields a generated calendar package copies from the root manifest. Declared as
 * required, because `PackageJson`'s optionals would make every one of them nullable
 * in the object being written.
 */
type RootManifest = {
  bugs: { url: string };
  engines: Record<string, string>;
  homepage: string;
  keywords: string[];
  license: string;
  name: string;
  repository: { type: string; url: string };
  version: string;
};

/**
 * `main` / `module` / `exports` for a calendar package, limited to the formats that
 * were actually requested. `--formats esm` must not advertise `./cjs/index.js`.
 */
const packageEntryPoints = (
  formats: readonly BuildFormat[]
): Pick<PackageJson, 'exports' | 'main' | 'module' | 'type'> => {
  const hasCjs = formats.includes('cjs');
  const hasEsm = formats.includes('esm');
  if (!hasCjs && !hasEsm) {
    throw new Error(
      'Calendar packaging needs at least one of cjs or esm in --formats (iife alone has no package entry).'
    );
  }

  const cjs = './cjs/index.js';
  const esm = './esm/index.js';
  const exportsDot: Record<string, string> = { types: './index.d.ts' };
  if (hasEsm) exportsDot.import = esm;
  if (hasCjs) exportsDot.require = cjs;
  else exportsDot.require = esm;

  return {
    ...(hasEsm && !hasCjs ? { type: 'module' } : {}),
    main: hasCjs ? cjs : esm,
    ...(hasEsm ? { module: esm } : {}),
    exports: { '.': exportsDot },
  };
};

const reportDiagnostics = (diagnostics: ts.Diagnostic[], log: Logger): void => {
  diagnostics.forEach((diagnostic) => {
    let message = 'Error';
    if (diagnostic.file && diagnostic.start) {
      const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
      message += ` ${diagnostic.file.fileName} (${line + 1},${character + 1})`;
    }
    message += `: ${ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')}`;
    log.warn(message);
  });
};

const readConfigFile = (configFileName: string, log: Logger): ts.ParsedCommandLine => {
  const configFileText = fs.readFileSync(configFileName).toString();

  // Parse JSON, after removing comments. Just fancier JSON.parse
  const result = ts.parseConfigFileTextToJson(configFileName, configFileText);
  const configObject = result.config;
  if (!configObject) {
    if (result.error) reportDiagnostics([result.error], log);
    log.error(`Could not parse ${configFileName}`);
    process.exit(1);
  }

  const configParseResult = ts.parseJsonConfigFileContent(configObject, ts.sys, dirname(configFileName));
  if (configParseResult.errors.length > 0) {
    reportDiagnostics(configParseResult.errors, log);
    log.error('Errors found');
    process.exit(1);
  }
  return configParseResult;
};

const compile = (configFileName: string, log: Logger): void => {
  const config = readConfigFile(configFileName, log);

  const program = ts.createProgram(config.fileNames, config.options);
  const emitResult = program.emit();

  reportDiagnostics(ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics), log);

  log.detail(`emitSkipped: ${emitResult.emitSkipped}`);
  log.detail(`diagnostics: ${emitResult.diagnostics.length}`);
};

/**
 * The full pipeline: declarations, calendar bundle sources, esbuild output, and the
 * npm module wrapper around each bundle.
 *
 * `--emit` selects the stages. They are not independent — packaging copies the
 * declarations that the bundle stage wrote — so a partial run assumes an earlier full
 * one, which is what makes an iteration on a single calendar quick. Partial runs only
 * replace the files they regenerate; they never wipe `dist` wholesale.
 */
export const runBuild = async (options: ResolvedOptions, log: Logger): Promise<void> => {
  const { dryRun, emit, manifest, repoRoot, riteRoot } = options;
  const time = new Date();

  const fromRite = (...segments: string[]): string => resolve(riteRoot, ...segments);
  const tsConfigPath = fromRite(manifest.tsconfig);
  const distDir = fromRite(manifest.outDir);
  const tmpDir = fromRite(manifest.tmpDir);
  const bundlesDir = join(tmpDir, 'bundles');

  if (dryRun) {
    log.warn('Nothing is written in a dry run; the stages below are what would happen.');
  }

  if (emit.includes('types')) {
    log.step('Compiling sources and checking types of the romcal library');
    if (!dryRun) {
      rimraf.sync(join(tmpDir, 'dts'));
      compile(tsConfigPath, log);
    }
    log.detail(`src/**/*.ts → ${manifest.tmpDir}/dts/`);
  }

  if (emit.includes('bundles')) {
    if (dryRun) {
      log.detail(`would generate ${options.calendars.length} calendars in ${options.locales.length} locales`);
    } else {
      RomcalBundler(options, log);
    }
  }

  if (dryRun) {
    if (emit.includes('types')) {
      log.detail(`would write ${manifest.outDir}/index.d.ts`);
    }
    if (emit.includes('bundles')) {
      log.detail(`would build ${options.formats.join(', ')} under ${manifest.outDir}/`);
    }
    if (emit.includes('packages')) {
      log.detail(`would package ${options.calendars.length} calendar modules under ${manifest.outDir}/bundles/`);
    }
    if (emit.includes('docs')) {
      await runDoc(options, log);
    } else {
      log.success(`Done in ${getDuration(time)}`);
    }
    return;
  }

  fs.mkdirSync(distDir, { recursive: true });

  if (emit.includes('types')) {
    log.step(`Bundle all .d.ts files into ${manifest.outDir}/index.d.ts`);
    const dts = generateDtsBundle(
      [
        {
          filePath: join(tmpDir, 'dts/src/index.d.ts'),
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
    fs.writeFileSync(resolve(distDir, 'index.d.ts'), dts.join('\n'), 'utf-8');
    log.detail(`${manifest.tmpDir}/dts/src/index.d.ts → ${manifest.outDir}/index.d.ts`);
  }

  /**
   * Retrieve all calendar bundles
   */
  const bundles = glob
    .sync('**/*.ts', { cwd: bundlesDir })
    .map((p) => resolve(bundlesDir, p))
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
    .readFileSync(join(repoRoot, 'LICENSE'), 'utf8')
    .trim()
    .split(/\n/g)
    .map((l) => ` * ${l}`)
    .join('\n')}\n */\n`;

  /**
   * Build the core library and all calendar bundles for the selected formats.
   */
  if (emit.includes('bundles')) {
    const selectedPkgs = new Set(options.calendars.map((name) => toPackageName(name)));
    log.step('Cleaning format outputs this stage will regenerate');
    for (const format of options.formats) {
      rimraf.sync(join(distDir, format));
      for (const pkgName of selectedPkgs) {
        rimraf.sync(join(distDir, 'bundles', pkgName, format));
      }
    }

    await Promise.all(
      (options.formats as readonly Format[]).map(async (format) => {
        log.step(`Building the codebase using the ${format} format`);
        const fromFormats: Record<Format, Platform> = { cjs: 'node', esm: 'neutral', iife: 'browser' };
        const platform: Platform = fromFormats[format];
        const subPackageJson = JSON.stringify({ type: format === 'esm' ? 'module' : 'commonjs' }, null, 2);

        log.detail(`src/${manifest.entryPoint.replace(/^src\//, '')} → ${manifest.outDir}/${format}/romcal.js`);
        await build({
          bundle: true,
          minify: true,
          sourcemap: 'external',
          ...(format === 'iife' ? { globalName: 'Romcal' } : {}),
          ...(format === 'iife' ? {} : { external: ['i18next'] }),
          absWorkingDir: riteRoot,
          entryPoints: [manifest.entryPoint],
          banner: { js: LICENSE },
          format,
          outfile: join(distDir, format, 'romcal.js'),
          target: format === 'esm' ? 'ESNext' : 'ES2022',
        }).catch(() => {
          log.error(`Failed to build the core library using the ${format} format.`);
          process.exit(1);
        });
        fs.writeFileSync(join(distDir, format, 'package.json'), subPackageJson, 'utf-8');

        log.detail(`${manifest.tmpDir}/bundles/**/*.ts → ${manifest.outDir}/bundles/[calendar]/${format}/[locale].js`);
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
              if (!calendar || !selectedPkgs.has(calendar)) return;

              await build({
                minify: true,
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                ...(format === 'iife' ? { globalName: toGlobalName(calendar, locale!) } : {}),
                bundle: format === 'iife',
                platform,
                absWorkingDir: riteRoot,
                entryPoints: [p],
                banner: { js: LICENSE },
                format,
                keepNames: true,
                outfile: join(distDir, 'bundles', `${calendar}`, format, `${locale}.js`),
                sourcemap: false,
                target: format === 'esm' ? 'ESNext' : 'ES2022',
              }).catch(() => {
                log.error(`Failed to build the ${calendar} calendar using the ${format} format.`);
                process.exit(1);
              });
              fs.writeFileSync(join(distDir, 'bundles', `${calendar}`, format, 'package.json'), subPackageJson, 'utf-8');
            }
          })
        ).catch(() => {
          log.error(`Failed to build the calendar bundles using the ${format} format.`);
          process.exit(1);
        });
      })
    ).catch(() => {
      log.error('Failed to build the codebase.');
      process.exit(1);
    });
  }

  /**
   * Add package.json and index.d.ts files to all calendar bundles
   */
  if (emit.includes('packages')) {
    log.step('Package calendar bundles as npm modules');
    // The published calendars carry the version of `romcal` itself and take a peer
    // dependency on it, so this is the root manifest rather than the rite's.
    const pkg = JSON.parse(fs.readFileSync(join(repoRoot, 'package.json'), 'utf-8')) as RootManifest;
    const entryPoints = packageEntryPoints(options.formats);
    const allCalendars = [...options.calendars];

    allCalendars.forEach((calendar) => {
      // mixed snake and underscore case to kebab case
      const pkgName = toPackageName(calendar);

      const dir = join(distDir, 'bundles', pkgName);
      fs.mkdirSync(dir, { recursive: true });

      const modulePkg: PackageJson = {
        name: manifest.packageNameTemplate.replace('[calendar]', pkgName),
        version: pkg.version,
        description: `Localized romcal calendar for ${calendar}`,
        ...entryPoints,
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

      fs.copyFileSync(join(bundlesDir, pkgName, 'index.d.ts'), join(dir, 'index.d.ts'));
    });
    log.detail(`created ${allCalendars.length} modules in ${manifest.outDir}/bundles/`);
    log.detail('created ./package.json to each modules');
    log.detail(
      `${manifest.tmpDir}/bundles/[calendar]/index.d.ts → ${manifest.outDir}/bundles/[calendar]/index.d.ts`
    );
  }

  if (emit.includes('docs')) {
    await runDoc(options, log);
  } else {
    log.success(`Done in ${getDuration(time)}`);
  }
};
