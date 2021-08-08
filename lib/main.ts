import { CalendarScope } from '@romcal/constants/calendar-scope';
import { GeneralRoman } from '@romcal/general-calendar/proper-of-saints';
import { ProperOfTime } from '@romcal/general-calendar/proper-of-time';
import { RomcalConfig } from '@romcal/models/config';
import {
  BaseCalendarDef,
  LiturgicalCalendar,
  LiturgicalDayDefinitions,
} from '@romcal/types/calendar-def';
import { BaseRomcalConfig, RomcalConfigInput } from '@romcal/types/config';
import { Dates } from '@romcal/utils/dates';

export default class Romcal {
  readonly #config: RomcalConfig;
  readonly #calendarsDef: InstanceType<BaseCalendarDef>[];
  #computedCalendar?: LiturgicalCalendar;

  /**
   * Utility helpers to compute the date(s) of specific liturgical days or seasons.
   */
  dates: Dates;

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
  // generate(): Promise<LiturgicalCalendar> {
  //   // Wrap the calendar computing process in a Promise.
  //   // Even if this method is called with async/await, this makes this method running in a microtask queue:
  //   // it does not run on the main thread, meaning other things can occur (click events, rendering, etc.).
  //   return new Promise((resolve, reject) => {
  //     // Check if calendar data is already computed and saved in a cache variable.
  //     // If this is the case, no need to compute it again.
  //     if (this.#computedCalendar) {
  //       resolve(this.#computedCalendar);
  //       return;
  //     }
  //
  //     try {
  //       const data = new ProperOfTime(this.#config).buildDates();
  //
  //       this.#calendarsDef.forEach((cal) => cal.buildAllDates(data));
  //       this.#computedCalendar = CalendarDef.generateCalendar(data);
  //
  //       resolve(this.#computedCalendar);
  //     } catch (e) {
  //       reject(e);
  //     }
  //   });
  // }

  /**
   * Get all possible liturgical days from the Proper of the Time of the General
   * Roman Calendar, outside the context of a specific year.
   */
  properOfTimeDefinitions(): LiturgicalDayDefinitions {
    new ProperOfTime(this.#config).buildAllDefinitions();
    return this.#config.liturgicalDayDef;
  }

  /**
   * Get all possible liturgical days from the currently selected calendar,
   * (including all possible inherited calendars until the General Roman Calendar,
   * and the Proper of the Time), outside the context of a specific year.
   */
  allDefinitions(): LiturgicalDayDefinitions {
    this.properOfTimeDefinitions();
    this.#calendarsDef.forEach((cal) => cal.buildAllDefinitions());
    return this.#config.liturgicalDayDef;
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
