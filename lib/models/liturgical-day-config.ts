import { DayOfWeek } from '../constants/weekdays';
import { DateDef, DateDefExtended } from '../types/liturgical-day';
import { BaseLiturgicalDayConfig, LiturgicalDayConfigOutput } from '../types/liturgical-day-config';
import { addDays, Dates, daysInMonth, getUtcDate, isSameDate, isValidDate, subtractsDays } from '../utils/dates';
import { isInteger } from '../utils/numbers';

import { RomcalConfig } from './config';
import { LiturgicalDayDef } from './liturgical-day-def';

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

    const currentYear = new Date().getUTCFullYear();
    const currentLiturgicalYear =
      new Date().getTime() < Dates.firstSundayOfAdvent(currentYear + 1).getTime()
        ? // We are before the first Sunday of Advent, taking the current year
          currentYear
        : // We are after the first Sunday of Advent, setting the next Gregorian year
          // hat represent the main part of this Liturgical year
          currentYear + 1;
    this.year =
      year ??
      // When year is undefined, determine the current year
      (config.scope === 'gregorian'
        ? // Current Gregorian year
          currentYear
        : // Current Liturgical year
          currentLiturgicalYear);

    // Initialise the Dates class
    this.dates = new Dates(config, this.year);
  }

  /**
   * Get the next day of week from the provided date until the next 6 days
   * @param date
   * @param dayOfWeek
   * @private
   */
  static #getNextDayOfWeek(date: Date, dayOfWeek: DayOfWeek): Date {
    return addDays(date, (7 + dayOfWeek - date.getUTCDay()) % 7);
  }

  /**
   * Lookup the date of a LiturgicalDayDef object, from a defined year scope
   * @param dateDef
   * @param yearOffset
   */
  #dateLookup(dateDef: DateDef | DateDefExtended, yearOffset = 0): Date | null {
    let date: Date | null = null;
    const year = this.year + (dateDef.yearOffset ?? 0) + yearOffset;

    // DateDefMonthDate
    if (isInteger(dateDef.month) && isInteger(dateDef.date) && dateDef.month > 0 && dateDef.date > 0) {
      date = getUtcDate(year, dateDef.month, dateDef.date);
    }

    // DateDefDateFnAddDay or DateDefDateFnSubtractDay
    else if (typeof dateDef.dateFn === 'string' && Object.prototype.hasOwnProperty.call(this.dates, dateDef.dateFn)) {
      const args = [...(dateDef.dateArgs ?? []), year];
      // TODO: improve TS typing here
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const dates = this.dates[dateDef.dateFn].apply<ThisType<Dates>, any, any>(this, args);
      const validDate = isValidDate(dates) ? dates : null;
      date = (Array.isArray(dates) ? dates.find((e) => e) : validDate) || null;

      if (date && isInteger(dateDef.addDay)) date = addDays(date, dateDef.addDay);
      if (date && isInteger(dateDef.subtractDay)) date = subtractsDays(date, dateDef.subtractDay);
    }

    // DateDefMonthDowNthWeekInMonth
    else if (isInteger(dateDef.month) && isInteger(dateDef.dayOfWeek) && isInteger(dateDef.nthWeekInMonth)) {
      const firstDayOf7Days = getUtcDate(year, dateDef.month, 7 * dateDef.nthWeekInMonth - 6);

      date = LiturgicalDayConfig.#getNextDayOfWeek(firstDayOf7Days, dateDef.dayOfWeek);
    }

    // DateDefMonthLastDowInMonth
    else if (isInteger(dateDef.month) && isInteger(dateDef.lastDayOfWeekInMonth)) {
      const firstDayOfMonth = getUtcDate(year, dateDef.month, 1);
      const firstDayOfLast7DaysOfMonth = subtractsDays(
        getUtcDate(year, dateDef.month, daysInMonth(firstDayOfMonth)),
        6
      );

      date = LiturgicalDayConfig.#getNextDayOfWeek(firstDayOfLast7DaysOfMonth, dateDef.lastDayOfWeekInMonth);
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
  buildDate(def: LiturgicalDayDef, yearOffset = 0): Date | null {
    const date = this.#dateLookup(def.dateDef, yearOffset);
    if (!date) return null;
    let updatedDate: Date | null = date;

    const setDate = (dateDefExtended: DateDefExtended): void => {
      if (isInteger(dateDefExtended.addDay)) {
        updatedDate = addDays(date, dateDefExtended.addDay);
      } else if (isInteger(dateDefExtended.subtractDay)) {
        updatedDate = subtractsDays(date, dateDefExtended.subtractDay);
      } else {
        updatedDate = this.#dateLookup(dateDefExtended, yearOffset);
      }
    };

    def.dateExceptions.forEach((exception) => {
      // ifIsBetween
      if (typeof exception.ifIsBetween === 'object') {
        const from = this.#dateLookup(exception.ifIsBetween.from, yearOffset);
        const to = this.#dateLookup(exception.ifIsBetween.to, yearOffset);
        if (from && to) {
          // From-To inclusive
          if (exception.ifIsBetween.inclusive) {
            if (date.getTime() >= from.getTime() && date.getTime() <= to.getTime()) {
              setDate(exception.setDate);
            }
          }
          // From-To exclusive
          else if (date.getTime() > from.getTime() && date.getTime() < to.getTime()) {
            setDate(exception.setDate);
          }
        }
      }

      // ifIsSameAsDate
      else if (typeof exception.ifIsSameAsDate === 'object') {
        const dateComparison = this.#dateLookup(exception.ifIsSameAsDate, yearOffset);
        if (dateComparison && isSameDate(dateComparison, date)) {
          setDate(exception.setDate);
        }
      }

      // ifIsDayOfWeek
      else if (Number.isInteger(exception.ifIsDayOfWeek)) {
        if (date.getUTCDay() === exception.ifIsDayOfWeek) {
          setDate(exception.setDate);
        }
      }
    });

    return updatedDate;
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
