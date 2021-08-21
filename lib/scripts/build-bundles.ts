import { Martyrology } from '@romcal/catalog/martyrology';
import { LiturgicalColors } from '@romcal/constants/colors';
import { ProperCycles } from '@romcal/constants/cycles';
import { CanonizationLevel, PatronTitles, Titles } from '@romcal/constants/martyrology-metadata';
import { LiturgicalPeriods } from '@romcal/constants/periods';
import { Precedences } from '@romcal/constants/precedences';
import { LiturgicalSeasons } from '@romcal/constants/seasons';
import { GeneralRoman } from '@romcal/general-calendar/proper-of-saints';
import { locales } from '@romcal/locales';
import { RomcalBuilder } from '@romcal/main';
import { RomcalBundle } from '@romcal/models/bundle';
import { CalendarDef } from '@romcal/models/calendar-def';
import { particularCalendars } from '@romcal/particular-calendars';
import { LocaleLiturgicalDayNames } from '@romcal/types/locale';
import { MartyrologyCatalog } from '@romcal/types/martyrology';
import { mergeDeep } from '@romcal/utils/objects';
import cliProgress from 'cli-progress';
import * as fs from 'fs';
import path from 'path';
import * as util from 'util';

const RomcalBundler = () => {
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

  console.log('Building romcal calendar bundles…');
  gauge.start(allCalendars.length * allLocaleKeys.length - 1, 0);
  let gaugeCount = 0;

  for (let i = 0; i < allCalendars.length; i++) {
    const calendar = allCalendars[i];
    for (let j = 0; j < allLocaleKeys.length; j++) {
      const locale = locales[allLocaleKeys[j]];

      // Init config
      const isGRC = calendar.name === GeneralRoman.name;
      const builder = isGRC ? new RomcalBuilder(locale) : new RomcalBuilder(locale, calendar);

      // Init calendars
      const filename = builder.getOutputFilename();
      const calendarConstructorName = builder.calendarConstructorName();
      const calendarName = builder.getCalendarName();

      // Provide CLI feedback
      gauge.update(gaugeCount++, { filename });

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
        Object.entries(Martyrology.catalog).filter(([key]) => martyrologyKeys.includes(key)),
      );

      // Create a romcal bundle object
      const bundle = new RomcalBundle({
        calendarName,
        particularConfig: {
          epiphanyOnSunday: builder.config.epiphanyOnSunday,
          ascensionOnSunday: builder.config.ascensionOnSunday,
          corpusChristiOnSunday: builder.config.corpusChristiOnSunday,
        },
        definitions,
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
      const dir = path.resolve(__dirname, '../bundles');
      const calVarName = `${calendarConstructorName}_${locale.key
        // Locale key to UpperCamelCase
        .replace(/(^.)/, (k) => k.toUpperCase())
        .replace(/(-\w)/g, (k) => k[1].toUpperCase())}`;
      let jsOutput = util
        .inspect(bundle, false, 99)
        .replace(/^RomcalBundle\s/, '')
        .replace(/(\n\s*\S+:\sundefined,)/gi, '')
        .replace(/\n\s*(!:seasons|periods)\s:\[],/gi, '');

      // Replace string values by the corresponding constant objects.
      const stringToObj = {
        CanonizationLevel: CanonizationLevel,
        LiturgicalColors: LiturgicalColors,
        LiturgicalPeriods: LiturgicalPeriods,
        LiturgicalSeasons: LiturgicalSeasons,
        Titles: Titles,
        Precedences: Precedences,
        PatronTitles: PatronTitles,
        ProperCycles: ProperCycles,
      };
      Object.entries(stringToObj).forEach(([objName, obj]) => {
        Object.entries(obj).forEach(([key, value]) => {
          jsOutput = jsOutput.replace(new RegExp(`'${value}'`, 'g'), `${objName}.${key}`);
        });
      });

      // Append imports inside the bundle file.
      jsOutput =
        `/* eslint-disable */\n` +
        `import { LiturgicalColors } from '@romcal/constants/colors';\n` +
        `import { ProperCycles } from '@romcal/constants/cycles';\n` +
        `import { CanonizationLevel, PatronTitles, Titles } from '@romcal/constants/martyrology-metadata';\n` +
        `import { LiturgicalPeriods } from '@romcal/constants/periods';\n` +
        `import { Precedences } from '@romcal/constants/precedences';\n` +
        `import { LiturgicalSeasons } from '@romcal/constants/seasons';\n` +
        `import { RomcalBundleObject } from '@romcal/types/bundle';\n\n` +
        `export const ${calVarName}: RomcalBundleObject = ${jsOutput}`;

      // Write the calendar bundle file.
      if (!fs.existsSync(dir)) fs.mkdirSync(dir);
      fs.writeFileSync(path.resolve(dir, filename), jsOutput, 'utf-8');
    }
  }

  gauge.stop();
  console.log(
    `${allCalendars.length} calendars in ${allLocaleKeys.length} locales built in the ./lib/bundles/ directory.`,
  );
};

RomcalBundler();
