import { DateFn, DayOfWeek, MonthIndex } from '../constants';

/**
 * The liturgical day date definition.
 */
export type DateDef =
  | DateDefMonthDate
  | DateDefDateFnAddDay
  | DateDefDateFnSubtractDay
  | DateDefMonthDowNthWeekInMonth
  | DateDefMonthLastDowInMonth;

/**
 * The liturgical day date definition, used in calendar definitions.
 */
export type DateDefInput = MonthDateString | DateDef;

/**
 * Date string, in the format of M-D.
 * @pattern ^([1-9]|1[012])-[0-9]{1,2}$
 */
export type MonthDateString = string;

export type DateDefMonthDate = {
  /**
   * The month of this liturgical day.
   */
  month: MonthIndex;

  /**
   * The date of this liturgical day.
   */
  date: number;

  /**
   * Offset the current year to compute dates in the scope of different years.
   */
  yearOffset?: number;
};

export type DateDefDateFnAddDay = {
  /**
   * A date function name from the [Date] class.
   */
  dateFn: DateFn;

  /**
   * Possible date function arguments that may be required.
   */
  dateArgs?: number[];

  /**
   * Add additional day(s) to the date computed from the 'dateFn' option.
   */
  addDay?: number;

  /**
   * Offset the current year to compute dates in the scope of different years.
   */
  yearOffset?: number;
};

export type DateDefDateFnSubtractDay = {
  /**
   * A date function name from the [Date] class.
   */
  dateFn: DateFn;

  /**
   * Possible date function arguments that may be required.
   */
  dateArgs?: number[];

  /**
   * Subtract some day(s) to the date computed from the 'dateFn' option.
   */
  subtractDay?: number;

  /**
   * Offset the current year to compute dates in the scope of different years.
   */
  yearOffset?: number;
};

export type DateDefMonthDowNthWeekInMonth = {
  /**
   * The month of this liturgical day.
   */
  month: MonthIndex;

  /**
   * The day of week this liturgical year must occur.
   */
  dayOfWeek: DayOfWeek;

  /**
   * The nth week in the month this liturgical year must occur.
   */
  nthWeekInMonth: number;

  /**
   * Offset the current year to compute dates in the scope of different years.
   */
  yearOffset?: number;
};

export type DateDefMonthLastDowInMonth = {
  /**
   * The month of this liturgical day.
   */
  month: MonthIndex;

  /**
   * The last day of week in the month this liturgical year must occur.
   */
  lastDayOfWeekInMonth: DayOfWeek;

  /**
   * Offset the current year to compute dates in the scope of different years.
   */
  yearOffset?: number;
};

/**
 * The liturgical day date definition, can extend a previously defined date
 */
export type DateDefExtended = DateDef | DateDefAddDay | DateDefSubtractDay;

export type DateDefAddDay = { addDay: number };

export type DateDefSubtractDay = { subtractDay: number };

/**
 * The liturgical day date exception
 */
export type DateDefException = (
  | {
      /**
       * Add an exception if the computed date occur between two dates.
       */
      ifIsBetween: { from: DateDef; to: DateDef; inclusive: boolean };
    }
  | {
      /**
       * Add an exception if the computed date occur the same day as another date.
       */
      ifIsSameAsDate: DateDef;
    }
  | {
      /**
       * Add an exception if the computed date occur on a specific day of week.
       */
      ifIsDayOfWeek: DayOfWeek;
    }
) & {
  /**
   * Set an updated date from the exception rules
   */
  setDate: DateDefExtended;
};
