import fs from 'node:fs';
import { dirname, join, resolve } from 'node:path';

import { toPackageName } from '@internal/generator';
import { generateDtsBundle } from 'dts-bundle-generator';
import { build } from 'esbuild';
import { glob } from 'glob';
import { rimraf } from 'rimraf';
import { PackageJson } from 'type-fest';
import ts from 'typescript';

import { ResolvedOptions } from '../types';
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
      log.detail(`would build esm output under ${manifest.outDir}/`);
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
   * Build the core library and all calendar bundles as ESM only.
   * Node 22.13+ can `require()` ESM without a flag when there is no top-level await;
   * browsers load it with `<script type="module">`.
   */
  if (emit.includes('bundles')) {
    log.step('Cleaning esm outputs this stage will regenerate');
    rimraf.sync(join(distDir, 'esm'));
    const selectedPkgs = new Set(options.calendars.map((name) => toPackageName(name)));
    for (const pkgName of selectedPkgs) {
      rimraf.sync(join(distDir, 'bundles', pkgName, 'esm'));
    }

    log.step('Building the codebase using the esm format');
    const subPackageJson = JSON.stringify({ type: 'module' }, null, 2);

    log.detail(`src/${manifest.entryPoint.replace(/^src\//, '')} → ${manifest.outDir}/esm/romcal.js`);
    await build({
      bundle: true,
      minify: true,
      sourcemap: 'external',
      external: ['i18next'],
      absWorkingDir: riteRoot,
      entryPoints: [manifest.entryPoint],
      banner: { js: LICENSE },
      format: 'esm',
      outfile: join(distDir, 'esm', 'romcal.js'),
      target: 'ESNext',
    }).catch(() => {
      log.error('Failed to build the core library using the esm format.');
      process.exit(1);
    });
    fs.writeFileSync(join(distDir, 'esm', 'package.json'), subPackageJson, 'utf-8');

    log.detail(`${manifest.tmpDir}/bundles/**/*.ts → ${manifest.outDir}/bundles/[calendar]/esm/[locale].js`);
    await Promise.all(
      bundles.map(async (p) => {
        const calendar = /([^\\/]+)[\\/]+[^\\/]+$/.exec(p)?.[1];
        const file = /([^\\/]+)\.\w+$/.exec(p)?.[1];
        if (!calendar || !file || !selectedPkgs.has(calendar)) return;

        await build({
          minify: true,
          bundle: false,
          platform: 'neutral',
          absWorkingDir: riteRoot,
          entryPoints: [p],
          banner: { js: LICENSE },
          format: 'esm',
          keepNames: true,
          outfile: join(distDir, 'bundles', calendar, 'esm', `${file}.js`),
          sourcemap: false,
          target: 'ESNext',
        }).catch(() => {
          log.error(`Failed to build the ${calendar} calendar using the esm format.`);
          process.exit(1);
        });
        fs.writeFileSync(join(distDir, 'bundles', calendar, 'esm', 'package.json'), subPackageJson, 'utf-8');
      })
    ).catch(() => {
      log.error('Failed to build the calendar bundles using the esm format.');
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
        type: 'module',
        module: './esm/index.js',
        main: './esm/index.js',
        exports: {
          '.': {
            types: './index.d.ts',
            import: './esm/index.js',
            require: './esm/index.js',
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
