import { version } from '../package.json';
import { CalendarScopes } from './constants/calendar-scopes';
import { Colors } from './constants/colors';
import {
  ProperCycles,
  PsalterWeeksCycles,
  SundaysCycles,
  WeekdaysCycles,
} from './constants/cycles';
import { PROPER_OF_TIME_NAME } from './constants/general-calendar-names';
import { CanonizationLevels, PatronTitles, Sexes, Titles } from './constants/martyrology-metadata';
import { Periods } from './constants/periods';
import { Precedences } from './constants/precedences';
import { Ranks } from './constants/ranks';
import { Seasons } from './constants/seasons';
import { Calendar } from './models/calendar';
import { RomcalConfig } from './models/config';
import LiturgicalDay from './models/liturgical-day';
import { LiturgicalDayConfig } from './models/liturgical-day-config';
import { LiturgicalCalendar } from './types/calendar';
import { LiturgicalDayDefinitions } from './types/calendar-def';
import { Key } from './types/common';
import { RomcalConfigInput, RomcalConfigOutput } from './types/config';
import { Dates } from './utils/dates';

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

  /**
   * Get Romcal version
   */
  getVersion(): string {
    return Romcal.getVersion();
  }

  /**
   * Get Romcal version
   */
  static getVersion(): string {
    return version;
  }

  static CalendarScopes = CalendarScopes;
  static Colors = Colors;
  static ProperCycles = ProperCycles;
  static SundaysCycles = SundaysCycles;
  static WeekdaysCycles = WeekdaysCycles;
  static PsalterWeeksCycles = PsalterWeeksCycles;
  static CanonizationLevels = CanonizationLevels;
  static Sexes = Sexes;
  static Titles = Titles;
  static PatronTitles = PatronTitles;
  static Precedences = Precedences;
  static Ranks = Ranks;
  static Seasons = Seasons;
  static Periods = Periods;
}
