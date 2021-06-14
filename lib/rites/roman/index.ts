import Temporale from './general-calendar/temporale';
import { GeneralRoman } from './general-calendar/general';
import {
  BaseRomcalConfig,
  RomcalConfig,
  RomcalConfigInput,
} from './models/config';
import { CalendarScope } from '../../constants/calendar-scope';
import { CalendarDef, LiturgicalCalendar } from './models/calendar-def';
import { Dates } from './utils/dates';

export default class Romcal {
  /**
   * Utility helpers to compute the date(s) of specific liturgical days or seasons.
   */
  static dates = Dates;

  private readonly _config: RomcalConfig;
  private _calendar?: LiturgicalCalendar;

  constructor(config?: RomcalConfigInput) {
    this._config = new RomcalConfig(config);
  }

  /**
   * Get the complete configuration, used to create and generate a calendar.
   */
  public get config(): BaseRomcalConfig {
    return this._config.toObject();
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
      if (this._calendar) {
        resolve(this._calendar);
        return;
      }

      try {
        const data =
          this._config.scope === CalendarScope.Liturgical
            ? Temporale.liturgicalYearBuilder(this._config.year)
            : Temporale.gregorianYearBuilder(this._config.year);

        new GeneralRoman(this._config).buildDates(data);

        if (this._config.particularCalendar) {
          new this._config.particularCalendar(this._config).buildDates(data);
        }

        this._calendar = CalendarDef.generateCalendar(data);
        resolve(this._calendar);
      } catch (e) {
        reject(e);
      }
    });
  }
}

export { CalendarScope, BaseRomcalConfig, LiturgicalCalendar };
