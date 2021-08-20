import { CalendarScope } from '@romcal/constants/calendar-scope';
import { PROPER_OF_TIME_NAME } from '@romcal/constants/proper-of-time-name';
import { Calendar } from '@romcal/models/calendar';
import { CalendarDef } from '@romcal/models/calendar-def';
import { RomcalConfig } from '@romcal/models/config';
import LiturgicalDay from '@romcal/models/liturgical-day';
import { LiturgicalDayConfig } from '@romcal/models/liturgical-day-config';
import LiturgicalDayDef from '@romcal/models/liturgical-day-def';
import { LiturgicalCalendar } from '@romcal/types/calendar';
import { BundleDefinitions, LiturgicalDayDefinitions } from '@romcal/types/calendar-def';
import { BaseRomcalConfig, RomcalConfigInput, RomcalConfigOutput } from '@romcal/types/config';
import { Key } from '@romcal/types/liturgical-day';
import { Locale } from '@romcal/types/locale';
import { Dates } from '@romcal/utils/dates';

export default class Romcal {
  readonly #config: RomcalConfig;
  #computedCalendars: Record<number, LiturgicalCalendar> = {};
  #dates: Record<number, Dates> = {};

  /**
   * Utility helpers to compute the date(s) of specific liturgical days or seasons.
   */
  constructor(config?: RomcalConfigInput) {
    this.#config = new RomcalConfig(config);
  }

  /**
   * Get the complete configuration, used to create and generate a calendar.
   */
  public get config(): RomcalConfigOutput {
    return this.#config.toObject();
  }

  /**
   * Dates library
   * @param year
   */
  dates(year?: number): Dates {
    const ldConfig = new LiturgicalDayConfig(this.#config, year);
    if (this.#dates[ldConfig.year]) return this.#dates[ldConfig.year];
    return (this.#dates[ldConfig.year] = ldConfig.dates);
  }

  /**
   * Get one LiturgicalDay by its key.
   * Return undefined if not found, or null if the LiturgicalDay do not occur in the provided year.
   * Note: this function compute only one LiturgicalDay without the liturgical whole year background,
   * so some metadata may be missing, and the precedence rules between different LiturgicalDay
   * objects are ignored.
   *
   * Optionally, you can set the `computeInWholeYear` option to `true`,
   * so all the liturgical calendar will be computed before returning the desired liturgical day.
   * With this option enabled, all the metadata and precedence rules are correctly computed.
   *
   * @param key
   * @param options
   */
  getOneLiturgicalDay(
    key: Key,
    options: { year?: number; computeInWholeYear?: boolean } = { computeInWholeYear: false },
  ): Promise<LiturgicalDay | null | undefined> {
    const ldConfig = new LiturgicalDayConfig(this.#config, options.year);

    return new Promise((resolve, reject) => {
      try {
        this.getAllDefinitions().then(() => {
          const partialLd = new Calendar(this.#config, ldConfig).getOneLiturgicalDay(key);
          if (!options.computeInWholeYear) return resolve(partialLd);

          if (!partialLd) resolve(partialLd);
          return this.generateCalendar(ldConfig.year).then((value) => {
            resolve(
              Object.values(value)
                .flat()
                .find((d) => d.key === key),
            );
          });
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Generate a liturgical calendar, within a Liturgical or Gregorian scope.
   */
  generateCalendar(year?: number): Promise<LiturgicalCalendar> {
    const ldConfig = new LiturgicalDayConfig(this.#config, year);
    // Wrap the calendar computing process in a Promise.
    // Even if this method is called with async/await, this makes this method running in a microtask queue:
    // it does not run on the main thread, meaning other things can occur (click events, rendering, etc.).
    return new Promise((resolve, reject) => {
      // Return cached data, if the calendar has been already computed
      if (this.#computedCalendars[ldConfig.year]) {
        return resolve(this.#computedCalendars[ldConfig.year]);
      }

      try {
        this.getAllDefinitions().then(() => {
          this.#computedCalendars[ldConfig.year] = new Calendar(
            this.#config,
            ldConfig,
          ).generateCalendar();
          resolve(this.#computedCalendars[ldConfig.year]);
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Get all possible liturgical days from the Proper of the Time of the General
   * Roman Calendar, outside the context of a specific year.
   */
  getProperOfTimeDefinitions(): Promise<LiturgicalDayDefinitions> {
    return new Promise((resolve, reject) => {
      try {
        this.#config.calendarsDef.forEach((cal) => cal.buildAllDefinitions());
        resolve(
          Object.values(this.#config.liturgicalDayDef)
            .filter((def) => def.fromCalendar === PROPER_OF_TIME_NAME)
            .reduce((obj: LiturgicalDayDefinitions, def) => {
              obj[def.key] = def;
              return obj;
            }, {}),
        );
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Get all possible liturgical days from the currently selected calendar,
   * (including all possible inherited calendars until the General Roman Calendar,
   * and the Proper of the Time), outside the context of a specific year.
   */
  getAllDefinitions(): Promise<LiturgicalDayDefinitions> {
    return new Promise((resolve, reject) => {
      try {
        this.#config.calendarsDef.forEach((cal) => cal.buildAllDefinitions());
        resolve(this.#config.liturgicalDayDef);
      } catch (e) {
        reject(e);
      }
    });
  }
}

/**
 * Class helper, used to build the localized calendar bundles.
 */
export class RomcalBuilder {
  readonly #config: RomcalConfig;
  #martyrologyKeys: string[] = [];

  constructor(locale: Locale, particularCalendar?: typeof CalendarDef) {
    const scope = { scope: CalendarScope.Liturgical };
    this.#config = new RomcalConfig(scope, locale, particularCalendar);
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

  getAllDefinitions(): BundleDefinitions {
    return Object.values(this.#config.liturgicalDayDef).reduce(
      (obj: BundleDefinitions, def: LiturgicalDayDef) => {
        obj[def.key] = def.input;

        // Retrieve martyrology keys
        const martyrologyKeys: string[] = this.#martyrologyKeys.concat(
          def.input.flatMap(
            (i) => i.martyrology?.flatMap((m) => (typeof m === 'string' ? m : m.key)) ?? [],
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

export { Romcal, CalendarScope, LiturgicalCalendar, BaseRomcalConfig };
