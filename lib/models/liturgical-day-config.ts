import dayjs, { Dayjs } from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import { CalendarScope } from '../constants/calendar-scope';
import { DateDef, DateDefExtended, DayOfWeek } from '../types/liturgical-day';
import { BaseLiturgicalDayConfig, LiturgicalDayConfigOutput } from '../types/liturgical-day-config';
import { Dates } from '../utils/dates';
import { RomcalConfig } from './config';
import LiturgicalDayDef from './liturgical-day-def';

dayjs.extend(updateLocale);

export class LiturgicalDayConfig implements BaseLiturgicalDayConfig {
  readonly config: RomcalConfig;
  readonly year: number;
  readonly dates: Dates;

  /**
   * Constructs a new [[Config]] object.
   * @param config
   * @param year
   */
  constructor(config: RomcalConfig, year?: number) {
    this.config = config;

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

    // Initialise the Dates class
    this.dates = new Dates(config, this.year);
  }

  /**
   * Get the next day of week from the provided date until the next 6 days
   * @param date
   * @param dayOfWeek
   * @private
   */
  static #getNextDayOfWeek(date: Dayjs, dayOfWeek: DayOfWeek): Dayjs {
    return date.add((7 + dayOfWeek - date.day()) % 7, 'days');
  }

  /**
   * Lookup the date of a LiturgicalDayDef object, from a defined year scope
   * @param dateDef
   * @param yearOffset
   */
  #dateLookup(dateDef: DateDef | DateDefExtended, yearOffset = 0): Dayjs | null {
    let date: Dayjs | null = null;
    const year = this.year + (dateDef.yearOffset ?? 0) + yearOffset;

    // DateDefMonthDate
    if (
      Number.isInteger(dateDef.month) &&
      Number.isInteger(dateDef.date) &&
      dateDef.month! > 0 &&
      dateDef.date! > 0
    ) {
      date = dayjs.utc(`${year}-${dateDef.month}-${dateDef.date}`);
    }

    // DateDefDateFnAddDay or DateDefDateFnSubtractDay
    else if (
      typeof dateDef.dateFn === 'string' &&
      Object.prototype.hasOwnProperty.call(this.dates, dateDef.dateFn)
    ) {
      const args = [...(dateDef.dateArgs ?? []), year];
      // todo: improve TS typing here
      const dates = this.dates[dateDef.dateFn].apply<ThisType<Dates>, any, any>(this, args);
      date =
        (Array.isArray(dates) ? dates.find((e) => e) : dayjs.isDayjs(dates) ? dates : null) || null;

      if (date && Number.isInteger(dateDef.addDay)) date = date.add(dateDef.addDay!, 'days');
      if (date && Number.isInteger(dateDef.subtractDay))
        date = date.subtract(dateDef.subtractDay!, 'days');
    }

    // DateDefMonthDowNthWeekInMonth
    else if (
      Number.isInteger(dateDef.month) &&
      Number.isInteger(dateDef.dayOfWeek) &&
      Number.isInteger(dateDef.nthWeekInMonth)
    ) {
      const firstDayOf7Days = dayjs.utc(
        `${year}-${dateDef.month}-${7 * dateDef.nthWeekInMonth! - 6}`,
      );

      date = LiturgicalDayConfig.#getNextDayOfWeek(firstDayOf7Days, dateDef.dayOfWeek!);
    }

    // DateDefMonthLastDowInMonth
    else if (Number.isInteger(dateDef.month) && Number.isInteger(dateDef.lastDayOfWeekInMonth)) {
      const firstDayOfMonth = dayjs.utc(`${year}-${dateDef.month}-01`);
      const firstDayOfLast7DaysOfMonth = dayjs
        .utc(`${year}-${dateDef.month}-${firstDayOfMonth.daysInMonth()}`)
        .subtract(6, 'days');

      date = LiturgicalDayConfig.#getNextDayOfWeek(
        firstDayOfLast7DaysOfMonth,
        dateDef.lastDayOfWeekInMonth!,
      );
    }

    return date;
  }

  /**
   * Lookup the date of a LiturgicalDayDef object (from a defined year scope)
   * and manage defined date exceptions
   * @param def
   * @param yearOffset
   * @private
   */
  buildDate(def: LiturgicalDayDef, yearOffset = 0): Dayjs | null {
    let date = this.#dateLookup(def.dateDef, yearOffset);

    const setDate = (dateDefExtended: DateDefExtended) => {
      if (Number.isInteger(dateDefExtended.addDay)) {
        date = date!.add(dateDefExtended.addDay!, 'days');
      } else if (Number.isInteger(dateDefExtended.subtractDay)) {
        date = date!.subtract(dateDefExtended.subtractDay!, 'days');
      } else {
        date = this.#dateLookup(dateDefExtended, yearOffset);
      }
    };

    if (date) {
      def.dateExceptions.forEach((exception) => {
        // ifIsBetween
        if (typeof exception.ifIsBetween === 'object') {
          const from = this.#dateLookup(exception.ifIsBetween.from, yearOffset);
          const to = this.#dateLookup(exception.ifIsBetween.to, yearOffset);
          if (from && to) {
            // From-To inclusive
            if (exception.ifIsBetween.inclusive) {
              if (date!.isSameOrAfter(from) && date!.isSameOrBefore(to)) {
                setDate(exception.setDate);
              }
            }
            // From-To exclusive
            else {
              if (date!.isAfter(from) && date!.isBefore(to)) {
                setDate(exception.setDate);
              }
            }
          }
        }

        // ifIsSameAsDate
        else if (typeof exception.ifIsSameAsDate === 'object') {
          const dateComparison = this.#dateLookup(exception.ifIsSameAsDate, yearOffset);
          if (dateComparison && dateComparison.isSame(date!)) {
            setDate(exception.setDate);
          }
        }

        // ifIsDayOfWeek
        else if (Number.isInteger(exception.ifIsDayOfWeek)) {
          if (date!.day() === exception.ifIsDayOfWeek) {
            setDate(exception.setDate);
          }
        }
      });
    }

    return date;
  }

  /**
   * Return the config settings as an Object.
   */
  getConfigObject(): LiturgicalDayConfigOutput {
    return {
      ...this.config.toObject(),
      year: this.year,
    };
  }
}
