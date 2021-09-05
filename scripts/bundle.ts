import chalk from 'chalk';
import cliProgress from 'cli-progress';
import * as fs from 'fs';
import path from 'path';
import rimraf from 'rimraf';
import * as util from 'util';
import {
  Locale,
  LocaleLiturgicalDayNames,
  MartyrologyCatalog,
  RomcalConfigInput,
  RomcalConfigOutput,
} from '../lib';
import { Martyrology } from '../lib/catalog/martyrology';
import { PROPER_OF_TIME_NAME } from '../lib/constants/general-calendar-names';
import { GeneralRoman } from '../lib/general-calendar/proper-of-saints';
import { locales } from '../lib/locales';
import { RomcalBundle } from '../lib/models/bundle';
import { CalendarDef } from '../lib/models/calendar-def';
import { RomcalConfig } from '../lib/models/config';
import LiturgicalDayDef from '../lib/models/liturgical-day-def';
import { particularCalendars } from '../lib/particular-calendars';
import { BundleInputs, LiturgicalDayDefinitions } from '../lib/types/calendar-def';
import { mergeDeep } from '../lib/utils/objects';
import { toCamelCase, uncapitalize } from '../lib/utils/string';

const log = console.log;

/**
 * Class helper, used to build the localized calendar bundles.
 */
class RomcalBuilder {
  readonly #config: RomcalConfig;
  #martyrologyKeys: string[] = [];

  constructor(locale: Locale, particularCalendar?: typeof CalendarDef) {
    const scope: RomcalConfigInput = { scope: 'liturgical' };
    this.#config = new RomcalConfig(scope, Martyrology.catalog, locale, particularCalendar);
  }

  get martyrologyKeys(): string[] {
    return this.#martyrologyKeys;
  }

  get config(): RomcalConfigOutput {
    return this.#config.toObject();
  }

  calendarConstructorName(): string {
    const calendarDefs = this.#config.calendarsDef;
    return calendarDefs[calendarDefs.length - 1].constructor.name;
  }

  getCalendarName(): string {
    const calendarDefs = this.#config.calendarsDef;
    return calendarDefs[calendarDefs.length - 1].calendarName;
  }

  getOutputFilename(): string {
    const calendarDefs = this.#config.calendarsDef;
    const currentCalendarName: string = calendarDefs[calendarDefs.length - 1].calendarName
      .replace('__', '.')
      .replace('_', '-');
    return `${currentCalendarName}.${this.#config.localeKey}.ts`;
  }

  getAllInputs(): LiturgicalDayDefinitions {
    this.#config.calendarsDef.forEach((cal) => cal.buildAllDefinitions());
    return this.#config.liturgicalDayDef;
  }

  getAllDefinitions(): BundleInputs {
    return Object.values(this.#config.liturgicalDayDef).reduce(
      (obj: BundleInputs, def: LiturgicalDayDef) => {
        if (def.fromCalendar === PROPER_OF_TIME_NAME) return obj;

        obj[def.key] = def.input;

        // Retrieve martyrology keys
        const martyrologyKeys: string[] = this.#martyrologyKeys.concat(
          def.input.flatMap(
            (i) =>
              i.martyrology?.flatMap((m) => (typeof m === 'string' ? m : m.key)) ??
              (Martyrology.catalog[def.key] ? [def.key] : []) ??
              [],
          ),
        );

        // Remove duplicates and save the martyrology keys
        this.#martyrologyKeys = [...new Set(martyrologyKeys)];

        return obj;
      },
      {},
    );
  }
}

export const RomcalBundler = (): void => {
  rimraf.sync(path.resolve('tmp/bundles'));

  const gauge = new cliProgress.SingleBar(
    {
      format: '[{bar}] {percentage}% | ETA: {eta}s | {value}/{total} | {filename}',
      hideCursor: true,
      clearOnComplete: true,
    },
    cliProgress.Presets.shades_classic,
  );
  const allCalendars: typeof CalendarDef[] = [GeneralRoman, ...Object.values(particularCalendars)];
  const allLocaleKeys = Object.keys(locales);

  log(chalk.bold(`\n✓ Generate calendar bundle files into ${chalk.cyan('./tmp/bundles/')}`));
  gauge.start(allCalendars.length * allLocaleKeys.length - 1, 0);
  let gaugeCount = 0;

  for (let i = 0; i < allCalendars.length; i++) {
    const calendar = allCalendars[i];
    const calVarObj: Record<string, string> = {};
    for (let j = 0; j < allLocaleKeys.length; j++) {
      const locale = locales[allLocaleKeys[j]];

      // Init config
      const isGRC = calendar.name === GeneralRoman.name;
      const builder = isGRC ? new RomcalBuilder(locale) : new RomcalBuilder(locale, calendar);

      // Init calendars
      const outputFilenameArr = builder.getOutputFilename().split('.');
      const enclosingDir = outputFilenameArr.slice(0, -2).join('.');
      const filename = outputFilenameArr.slice(outputFilenameArr.length - 2).join('.');
      const calendarConstructorName = builder.calendarConstructorName();
      const calendarName = builder.getCalendarName();

      // Provide CLI feedback
      gauge.update(gaugeCount++, { filename: `${enclosingDir}/${filename}` });
      if (process.env['CI'] && j === 0) log(chalk.dim('  - ' + calendarName));

      // Build and get definitions & martyrology items
      const inputs = builder.getAllInputs();
      const definitions = builder.getAllDefinitions();
      const martyrologyKeys = builder.martyrologyKeys;

      // Merge the current locale with the default English locale
      const mergedLocale = mergeDeep(locales.en, locale);

      // Extract required liturgical names
      const names = Object.values(inputs)
        .filter((def) => def.i18nDef[0].startsWith('names:'))
        .map((def) => def.i18nDef[0].substr(6))
        .reduce((obj: LocaleLiturgicalDayNames, key: string) => {
          if (locale.names && Object.prototype.hasOwnProperty.call(locale.names, key)) {
            obj[key] = locale.names[key];
          } else if (
            locales.en.names &&
            Object.prototype.hasOwnProperty.call(locales.en.names, key)
          ) {
            obj[key] = locales.en.names[key];
          } else {
            throw new Error(
              `Locale key 'names:${key}' is missing in the calendar '${calendar.name}'.`,
            );
          }
          return obj;
        }, {});

      // Extract martyrology items
      const martyrology: MartyrologyCatalog = Object.fromEntries(
        Object.entries(Martyrology.catalog)
          .filter(([key]) => martyrologyKeys.includes(key))
          .map(([key, data]) => [
            key,
            (() => {
              // Extract the 'name' property since it's deprecated in the item definition.
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { name, ...martyrologyData } = data;
              return martyrologyData;
            })(),
          ]),
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
          key: locale.key,
          colors: mergedLocale.colors,
          months: mergedLocale.months,
          ordinals: mergedLocale.ordinals,
          periods: mergedLocale.periods,
          ranks: mergedLocale.ranks,
          seasons: mergedLocale.seasons,
          weekdays: mergedLocale.weekdays,
          names,
        },
      });

      // Prepare the bundled calendars file content.
      const dir = path.resolve(__dirname, '../tmp/bundles/', enclosingDir);
      const calVarName = `${uncapitalize(calendarConstructorName)}_${toCamelCase(locale.key)}`;
      calVarObj[locale.key] = calVarName;
      const data = util
        .inspect(bundle, false, 99)
        .replace(/^RomcalBundle\s/, '') // Remove object type name
        .replace(/(\n\s*\S+:\sundefined,)/gi, '') // Remove undefined properties
        .replace(/\n\s*(!:seasons|periods)\s:\[],/gi, ''); // Remove empty arrays
      const jsOutput =
        `/* eslint-disable */\n` +
        `import { RomcalBundleObject } from '../../../lib';\n\n` +
        `export const ${calVarName}: RomcalBundleObject = ${data}`;

      // Write the calendar bundle file.
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.resolve(dir, filename), jsOutput, 'utf-8');

      // Add another calendar bundle file for the IIFE format, that will output the calendar
      // bundle in a global variable, for iife usage.
      // Note: will not be required if this issue is addressed: https://github.com/evanw/esbuild/issues/1182
      const jsIifeOutput =
        `import { ${calVarName} } from './${locale.key}';\n` + `module.exports = ${calVarName};\n`;
      const iifeFilename = filename.replace(/\.ts$/, '.iife.ts');
      fs.writeFileSync(path.resolve(dir, iifeFilename), jsIifeOutput, 'utf-8');
    }

    // Define package name, variable name and package dist.
    const pkgName = calendar.name
      .replace(/([^_]+)([A-Z])/g, '$1-$2')
      .replace(/_/g, '.')
      .toLowerCase();
    const dir = path.resolve(__dirname, '../tmp/bundles/', pkgName);

    /**
     * Write index.ts file within all calendar directories
     */
    const indexImports = Object.entries(calVarObj).reduce((acc, [locale, varName]) => {
      const importFileName = locale.replace(/([A-Z])/g, '-$1').toLowerCase();
      return acc + `import { ${varName} } from './${importFileName}';\n`;
    }, '');
    const indexExports = Object.entries(calVarObj).reduce(
      (acc, [, varName]) => acc + `    ${varName},\n`,
      '',
    );
    const indexOutput =
      `import { RomcalBundleObject } from '../../../lib';\n` +
      indexImports +
      `\nexport {\n` +
      indexExports +
      `};`;
    fs.writeFileSync(path.resolve(dir, `index.ts`), indexOutput, 'utf-8');

    /**
     * Write index.d.ts files
     */
    const dtsExports = Object.entries(calVarObj).reduce(
      (acc, [, varName]) => acc + `export declare const ${varName}: RomcalBundleObject;\n`,
      '',
    );
    const dtsOutput = `import { RomcalBundleObject } from 'romcal-next';\n\n` + dtsExports;
    fs.writeFileSync(path.resolve(dir, `index.d.ts`), dtsOutput, 'utf-8');
  }

  gauge.stop();
  log(
    chalk.dim(
      `  generated ${allCalendars.length} calendars in ${allLocaleKeys.length} locales in ./tmp/bundles/`,
    ),
  );
};
