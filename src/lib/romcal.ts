import { BaseRomcalConfig, RomcalConfig } from '@romcal/models/config/config.model';
import { RomcalCalendar } from '@romcal/models/calendar/calendar.model';
import { isInteger, isNil } from '@romcal/utils/type-guards/type-guards';
import { setLocale } from '@romcal/lib/locales';
import { CalendarBuilder } from '@romcal/lib/calendar-builder';

export default class Romcal {
  /**
   * Returns an array of liturgical dates based on the supplied options.
   *
   * The array may return dates according to the given calendar year or liturgical
   * year depending on the options supplied.
   *
   * @param options A configuration object or a year (integer)
   */
  public static async calendarFor(options?: BaseRomcalConfig | number): Promise<RomcalCalendar> {
    let userConfig: BaseRomcalConfig = {};

    // If options is passed as an integer,
    // assume we want the calendar for the current year
    // with default options
    if (!isNil(options)) {
      if (isInteger(options)) {
        userConfig = { year: options };
      } else {
        userConfig = options;
      }
    }

    // Sanitize incoming config into a complete configuration set
    const resolvedConfig = await RomcalConfig.resolveConfig(userConfig);
    const config = new RomcalConfig(resolvedConfig);

    // Set the locale information
    await setLocale(config.locale);

    // Get a new collection of dates
    const calendar = new CalendarBuilder(config);
    return calendar.compute();
  }
}
