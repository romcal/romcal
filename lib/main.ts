import { CalendarScope } from '@romcal/constants/calendar-scope';
import { GeneralRoman } from '@romcal/general-calendar/proper-of-saints';
import { ProperOfTime } from '@romcal/general-calendar/proper-of-time';
import { Calendar } from '@romcal/models/calendar';
import { RomcalConfig } from '@romcal/models/config';
import { RomcalYear } from '@romcal/models/year';
import { LiturgicalCalendar } from '@romcal/types/calendar';
import { BaseCalendarDef, LiturgicalDayDefinitions } from '@romcal/types/calendar-def';
import { BaseRomcalConfig, RomcalConfigInput } from '@romcal/types/config';
import { Dates } from '@romcal/utils/dates';

export default class Romcal {
  readonly #config: RomcalConfig;
  readonly #calendarsDef: InstanceType<BaseCalendarDef>[];
  #computedCalendars: Record<number, LiturgicalCalendar> = {};

  /**
   * Utility helpers to compute the date(s) of specific liturgical days or seasons.
   */
  dates: typeof Dates;

  constructor(config?: RomcalConfigInput) {
    this.#config = new RomcalConfig(config);
    this.dates = this.#config.dates;
    this.#calendarsDef = [new GeneralRoman(this.#config)];

    if (this.#config.particularCalendar) {
      this.#calendarsDef.push(new this.#config.particularCalendar(this.#config));
    }

    this.#calendarsDef.map((cal) => cal.updateConfig(config));
  }

  /**
   * Get the complete configuration, used to create and generate a calendar.
   */
  public get config(): BaseRomcalConfig {
    return this.#config.toObject();
  }

  /**
   * Generate a liturgical calendar, within a Liturgical or Gregorian scope.
   */
  generate(year?: number): Promise<LiturgicalCalendar> {
    const yc = new RomcalYear(this.#config, year);

    // Wrap the calendar computing process in a Promise.
    // Even if this method is called with async/await, this makes this method running in a microtask queue:
    // it does not run on the main thread, meaning other things can occur (click events, rendering, etc.).
    return new Promise((resolve, reject) => {
      // Return cached data, if the calendar has been already computed
      if (this.#computedCalendars[yc.year]) {
        return resolve(this.#computedCalendars[yc.year]);
      }

      try {
        this.getAllDefinitions().then(() => {
          this.#computedCalendars[yc.year] = new Calendar(this.#config, yc.year).generateCalendar();
          resolve(this.#computedCalendars[yc.year]);
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
        new ProperOfTime(this.#config).buildAllDefinitions();
        resolve(this.#config.liturgicalDayDef);
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
        this.getProperOfTimeDefinitions().then(() => {
          this.#calendarsDef.forEach((cal) => cal.buildAllDefinitions());
          resolve(this.#config.liturgicalDayDef);
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * @deprecated
   * @param config
   */
  // static async calendarFor(config?: RomcalConfigInput | number): Promise<LiturgicalDay[]> {
  //   if (typeof config === 'number') {
  //     config = { year: config };
  //   }
  //
  //   const calendar = new Romcal(config);
  //   const data = await calendar.generate();
  //
  //   return Object.values(data).flat();
  // }
}

export { Romcal, CalendarScope, LiturgicalCalendar, BaseRomcalConfig };
