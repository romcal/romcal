import { CalendarScope } from '@romcal/constants/calendar-scope';
import { RomcalConfig } from '@romcal/models/config';
import { BaseRomcalYear } from '@romcal/types/year';
import { Dates } from '@romcal/utils/dates';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(updateLocale);

/**
 * The [[Config]] class encapsulates all options that can be sent to this library to adjust date output.
 */
export class RomcalYear implements BaseRomcalYear {
  readonly #config: RomcalConfig;
  readonly year: number;

  /**
   * Clone the RomcalConfig object
   * @param year
   */
  clone(year: number): RomcalYear {
    return new RomcalYear(this.#config, year ?? this.year);
  }

  /**
   * Constructs a new [[Config]] object.
   * @param config
   * @param year
   */
  constructor(config: RomcalConfig, year?: number) {
    this.#config = config;

    this.year =
      year ??
      // When year is undefined, determine the current year
      (config.scope === CalendarScope.Gregorian
        ? // Current Gregorian year
          dayjs().year()
        : // Current Liturgical year
        dayjs().isBefore(Dates.firstSundayOfAdvent(dayjs().year() + 1))
        ? // We are before the first Sunday of Advent, taking the current year
          dayjs().year()
        : // We are after the first Sunday of Advent, setting the next Gregorian year
          // hat represent the main part of this Liturgical year
          dayjs().year() + 1);
  }
}
