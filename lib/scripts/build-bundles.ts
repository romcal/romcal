import { locales } from '@romcal/locales';
import { particularCalendars } from '@romcal/particular-calendars';
import { GeneralRoman } from '@romcal/general-calendar/proper-of-saints';
import { CalendarDef } from '@romcal/models/calendar-def';
import { RomcalBundle } from '@romcal/models/bundle';
import { ProperOfTime } from '@romcal/general-calendar/proper-of-time';
import { RomcalConfig } from '@romcal/models/config';
import { BaseCalendarDef, BundleDefinitions } from '@romcal/types/calendar-def';
import { LocaleLiturgicalDayNames } from '@romcal/types/locale';
import * as fs from 'fs';
import path from 'path';
import LiturgicalDayDef from '@romcal/models/liturgical-day-def';
import { mergeDeep } from '@romcal/utils/objects';
import cliProgress from 'cli-progress';
import { Martyrology } from '@romcal/catalog/martyrology';
import { MartyrologyCatalog } from '@romcal/types/martyrology';
import { CalendarScope } from '@romcal/constants/calendar-scope';

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
      const scope = CalendarScope.Liturgical;
      const config = isGRC
        ? new RomcalConfig({ locale, scope })
        : new RomcalConfig({ locale, scope, particularCalendar: calendar });

      // Init calendars
      const cal: InstanceType<BaseCalendarDef> = new GeneralRoman(config);
      const calendarDefs: InstanceType<BaseCalendarDef>[] = [cal];
      if (!isGRC) calendarDefs.push(new calendar(config));
      calendarDefs.map((cal) => cal.updateConfig(config));
      const currentCalendarName: string = calendarDefs[calendarDefs.length - 1].calendarName
        .replace('__', '.')
        .replace('_', '-');
      const filename = `${currentCalendarName}.${locale.key}.json`;
      let martyrologyKeys: string[] = [];

      // Provide CLI feedback
      gauge.update(gaugeCount++, { filename });

      // Build definitions
      new ProperOfTime(config).buildAllDefinitions();
      calendarDefs.forEach((cal) => cal.buildAllDefinitions());
      const definitions = Object.values(config.liturgicalDayDef).reduce(
        (obj: BundleDefinitions, def: LiturgicalDayDef) => {
          //if (def.fromCalendar !== PROPER_OF_TIME_NAME)
          obj[def.key] = def.input;

          // Retrieve martyrology keys
          martyrologyKeys = [
            ...new Set(
              martyrologyKeys.concat(
                def.input.flatMap(
                  (i) => i.martyrology?.flatMap((m) => (typeof m === 'string' ? m : m.key)) ?? [],
                ),
              ),
            ),
          ];

          return obj;
        },
        {},
      );

      // Merge the current locale with the default English locale
      const mergedLocale = mergeDeep(locales.en, locale);

      // Extract required liturgical names
      const names = Object.values(config.liturgicalDayDef)
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
        calendarName: calendar.name,
        locale: locale.key,
        particularConfig: {
          epiphanyOnSunday: config.epiphanyOnSunday,
          ascensionOnSunday: config.ascensionOnSunday,
          corpusChristiOnSunday: config.corpusChristiOnSunday,
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

      // Write bundled calendars
      const dir = path.resolve(__dirname, '../bundles');
      if (!fs.existsSync(dir)) fs.mkdirSync(dir);
      fs.writeFileSync(path.resolve(dir, filename), JSON.stringify(bundle, null, 0));
    }
  }

  gauge.stop();
  console.log(
    `${allCalendars.length} calendars in ${allLocaleKeys.length} locales built in the ./lib/bundles/ directory.`,
  );
};

RomcalBundler();
