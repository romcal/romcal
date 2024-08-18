import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { inspect } from 'node:util';

import chalk from 'chalk';
import cliProgress from 'cli-progress';
import { rimraf } from 'rimraf';
import { merge } from 'ts-deepmerge';

import {
  BundleInputs,
  CalendarDef,
  Id,
  LiturgicalDayDef,
  LiturgicalDayDefinitions,
  Locale,
  LocaleLiturgicalDayNames,
  MartyrologyCatalog,
  RomcalBundle,
  RomcalConfig,
  RomcalConfigInput,
  RomcalConfigOutput,
} from '../lib';
import { Martyrology } from '../lib/catalog/martyrology';
import { PROPER_OF_TIME_NAME } from '../lib/constants/general-calendar-names';
import { GeneralRoman } from '../lib/general-calendar/proper-of-saints';
import { locales } from '../lib/locales';
import { particularCalendars } from '../lib/particular-calendars';
import { sanitizeLocaleId, toPascalCase } from '../lib/utils/string';

const { log } = console;

/**
 * Class helper, used to build the localized calendar bundles.
 */
export class RomcalBuilder {
  readonly #config: RomcalConfig;

  #martyrologyIds: string[] = [];

  constructor(locale: Locale, particularCalendar?: typeof CalendarDef) {
    const scope: RomcalConfigInput = { scope: 'liturgical' };
    this.#config = new RomcalConfig(scope, Martyrology.catalog, locale, particularCalendar);
  }

  get martyrologyIds(): string[] {
    return this.#martyrologyIds;
  }

  get config(): RomcalConfigOutput {
    return this.#config.toObject();
  }

  calendarConstructorName(): string {
    const calendarDefs = this.#config.calendarsDef;
    return calendarDefs[calendarDefs.length - 1].constructor.name;
  }

  getCalendarName(): Id {
    const calendarDefs = this.#config.calendarsDef;
    return calendarDefs[calendarDefs.length - 1].calendarName;
  }

  getOutputFilename(): string {
    const calendarDefs = this.#config.calendarsDef;
    const currentCalendarName: string = calendarDefs[calendarDefs.length - 1].calendarName
      .replace('__', '.')
      .replace('_', '-');
    return `${currentCalendarName}.${this.#config.localeId}.ts`;
  }

  getAllInputs(): LiturgicalDayDefinitions {
    this.#config.calendarsDef.forEach((cal) => cal.buildAllDefinitions());
    return this.#config.liturgicalDayDef;
  }

  getAllDefinitions(): BundleInputs {
    return Object.values(this.#config.liturgicalDayDef).reduce((obj: BundleInputs, def: LiturgicalDayDef) => {
      if (def.fromCalendarId === PROPER_OF_TIME_NAME) return obj;

      const update: BundleInputs = { ...obj };
      update[def.id] = def.input;

      // Retrieve martyrology IDs
      const martyrologyIds: string[] = this.#martyrologyIds.concat(
        def.input.flatMap(
          (i) =>
            i.martyrology?.flatMap((m) => (typeof m === 'string' ? m : m.id)) ??
            (Martyrology.catalog[def.id] ? [def.id] : []) ??
            []
        )
      );

      // Remove duplicates and save the martyrology IDs
      this.#martyrologyIds = [...new Set(martyrologyIds)];

      return update;
    }, {});
  }
}

export const RomcalBundler = (): void => {
  rimraf.sync(resolve('tmp/bundles'));
  const isCI = process.env.CI === 'true';

  const gauge = new cliProgress.SingleBar(
    {
      format: '[{bar}] {percentage}% | ETA: {eta}s | {value}/{total} | {filename}',
      hideCursor: true,
      clearOnComplete: true,
    },
    cliProgress.Presets.shades_classic
  );
  const allCalendars: (typeof CalendarDef)[] = [GeneralRoman, ...Object.values(particularCalendars)];
  const allLocaleIds = Object.keys(locales);

  log(chalk.bold(`\n✓ Generate calendar bundle files into ${chalk.cyan('./tmp/bundles/')}`));
  if (!isCI) gauge.start(allCalendars.length * allLocaleIds.length - 1, 0);
  let gaugeCount = 0;

  for (let i = 0; i < allCalendars.length; i += 1) {
    const calendar = allCalendars[i];
    const calVarObj: Record<string, string> = {};
    for (let j = 0; j < allLocaleIds.length; j += 1) {
      const locale = locales[allLocaleIds[j]];

      // Init config
      const isGRC = calendar.name === GeneralRoman.name;
      const builder = isGRC ? new RomcalBuilder(locale) : new RomcalBuilder(locale, calendar);

      // Init calendars
      const outputFilenameArr = builder.getOutputFilename().split('.');
      const enclosingDir = outputFilenameArr.slice(0, -2).join('.');
      const filename = outputFilenameArr
        .slice(outputFilenameArr.length - 2)
        .join('.')
        .toLowerCase();
      const calendarConstructorName = builder.calendarConstructorName();
      const calendarName = builder.getCalendarName();

      // Provide CLI feedback
      if (!isCI) {
        gauge.update((gaugeCount += 1), { filename: `${enclosingDir}/${filename}` });
      } else if (j === 0) log(chalk.dim(`  - ${calendarName}`));

      // Build and get definitions & martyrology items
      const inputs = builder.getAllInputs();
      const definitions = builder.getAllDefinitions();
      const { martyrologyIds } = builder;

      // Merge the current locale with the default English locale
      const mergedLocale = merge(locales.En, locale);

      // Extract required liturgical names
      const names = Object.values<LiturgicalDayDef>(inputs)
        .filter((def) => def.i18nDef[0].startsWith('names:'))
        .map((def) => def.i18nDef[0].substr(6))
        .reduce((obj: LocaleLiturgicalDayNames, id: string) => {
          const update: LocaleLiturgicalDayNames = { ...obj };
          if (locale.names && Object.prototype.hasOwnProperty.call(locale.names, id)) {
            update[id] = locale.names[id];
          } else if (locales.En.names && Object.prototype.hasOwnProperty.call(locales.En.names, id)) {
            update[id] = locales.En.names[id];
          } else {
            throw new Error(`Locale ID 'names:${id}' is missing in the calendar '${calendar.name}'.`);
          }
          return update;
        }, {});

      // Extract martyrology items
      const martyrology: MartyrologyCatalog = Object.fromEntries(
        Object.entries(Martyrology.catalog)
          .filter(([id]) => martyrologyIds.includes(id))
          .map(([id, data]) => [
            id,
            ((): MartyrologyCatalog => {
              // Extract the 'name' property since it's deprecated in the item definition.
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { name, ...martyrologyData } = data;
              return martyrologyData as MartyrologyCatalog;
            })(),
          ])
      );

      // Create a romcal bundle object
      const bundle = new RomcalBundle({
        calendarName,
        particularConfig: {
          epiphanyOnSunday: builder.config.epiphanyOnSunday,
          ascensionOnSunday: builder.config.ascensionOnSunday,
          corpusChristiOnSunday: builder.config.corpusChristiOnSunday,
        },
        inputs: definitions,
        martyrology,
        i18n: {
          id: sanitizeLocaleId(locale.id),
          colors: mergedLocale.colors,
          months: mergedLocale.months,
          ordinals: mergedLocale.ordinals,
          periods: mergedLocale.periods,
          ranks: mergedLocale.ranks,
          cycles: mergedLocale.cycles,
          seasons: mergedLocale.seasons,
          weekdays: mergedLocale.weekdays,
          names,
        },
      });

      // Prepare the bundled calendars file content.
      const dir = resolve(__dirname, '../tmp/bundles/', enclosingDir);
      const calVarName = `${calendarConstructorName}_${toPascalCase(locale.id)}`;
      calVarObj[locale.id] = calVarName;
      const data = inspect(bundle, false, 99)
        .replace(/^RomcalBundle\s/, '') // Remove object type name
        .replace(/(\n\s*\S+:\sundefined,)/gi, '') // Remove undefined properties
        .replace(/\n\s*(!:seasons|periods)\s:\[],/gi, ''); // Remove empty arrays
      const jsOutput =
        '/* eslint-disable */\n' +
        "import { RomcalBundleObject } from '../../../lib';\n\n" +
        `export const ${calVarName}: RomcalBundleObject = ${data}`;

      // Write the calendar bundle file.
      if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
      writeFileSync(resolve(dir, filename), jsOutput, 'utf-8');

      // Add another calendar bundle file for the IIFE format, that will output the calendar
      // bundle in a global variable, for iife usage.
      // Note: will not be required if this issue is addressed: https://github.com/evanw/esbuild/issues/1182
      const jsIifeOutput = `import { ${calVarName} } from './${locale.id.toLowerCase()}';\nmodule.exports = ${calVarName};\n`;
      const iifeFilename = filename.replace(/\.ts$/, '.iife.ts');
      writeFileSync(resolve(dir, iifeFilename), jsIifeOutput, 'utf-8');
    }

    // Define package name, variable name and package dist.
    const pkgName = calendar.name
      .replace(/([^_]+)([A-Z])/g, '$1-$2')
      .replace(/_/g, '.')
      .toLowerCase();
    const dir = resolve(__dirname, '../tmp/bundles/', pkgName);

    /**
     * Write index.ts file within all calendar directories
     */
    const indexImports = Object.entries(calVarObj).reduce((acc, [locale, varName]) => {
      const importFileName = locale.replace(/([A-Z])/g, '-$1').toLowerCase();
      return `${acc}import { ${varName} } from './${importFileName}.js';\n`;
    }, '');
    const indexExports = Object.entries(calVarObj).reduce((acc, [, varName]) => `${acc}    ${varName},\n`, '');
    const indexOutput = `import { RomcalBundleObject } from '../../../lib';\n${indexImports}\nexport {\n${indexExports}};`;
    writeFileSync(resolve(dir, 'index.ts'), indexOutput, 'utf-8');

    /**
     * Write index.d.ts files
     */
    const dtsExports = Object.entries(calVarObj).reduce(
      (acc, [, varName]) => `${acc}export declare const ${varName}: RomcalBundleObject;\n`,
      ''
    );
    const dtsOutput = `import { RomcalBundleObject } from 'romcal';\n\n${dtsExports}`;
    writeFileSync(resolve(dir, 'index.d.ts'), dtsOutput, 'utf-8');
  }

  if (!isCI) gauge.stop();
  log(chalk.dim(`  generated ${allCalendars.length} calendars in ${allLocaleIds.length} locales in ./tmp/bundles/`));
};
