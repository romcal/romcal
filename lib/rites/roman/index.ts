import { GeneralRoman } from '@roman-rite/general-calendar/proper-of-saints';
import { ProperOfTime } from '@roman-rite/general-calendar/proper-of-time';
import { CalendarDef } from '@roman-rite/models/calendar-def';
import { RomcalConfig } from '@roman-rite/models/config';
import LiturgicalDay from '@roman-rite/models/liturgical-day';
import { BaseCalendarDef, LiturgicalCalendar } from '@roman-rite/types/calendar-def';
import { BaseRomcalConfig, RomcalConfigInput } from '@roman-rite/types/config';
import { Dates } from '@roman-rite/utils/dates';
import { CalendarScope } from '@romcal/constants/calendar-scope';

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
  generate(): Promise<LiturgicalCalendar> {
    // Wrap the calendar computing process in a Promise.
    // Even if this method is called with async/await, this makes this method running in a microtask queue:
    // it does not run on the main thread, meaning other things can occur (click events, rendering, etc.).
    return new Promise((resolve, reject) => {
      // Check if calendar data is already computed and saved in a cache variable.
      // If this is the case, no need to compute it again.
      if (this.#computedCalendar) {
        resolve(this.#computedCalendar);
        return;
      }

      try {
        const data = new ProperOfTime(this.#config).buildDates();

        this.#calendarsDef.forEach((cal) => cal.buildAllDates(data));
        this.#computedCalendar = CalendarDef.generateCalendar(data);

        resolve(this.#computedCalendar);
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * @deprecated
   * @param config
   */
  static async calendarFor(config?: RomcalConfigInput | number): Promise<LiturgicalDay[]> {
    if (typeof config === 'number') {
      config = { year: config };
    }

    const calendar = new Romcal(config);
    const data = await calendar.generate();

    return Object.values(data).flat();
  }
}

export { CalendarScope, BaseRomcalConfig, LiturgicalCalendar };
