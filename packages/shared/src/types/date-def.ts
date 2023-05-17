import { DayOfWeek, MonthIndex } from '../constants';
import { OneOfDatesFn } from './proper-of-time-dates';

/**
 * The liturgical day date definition.
 */
export type DateDef =
  | DateDefMonthDate
  | DateDefFn
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

/*
 * Partial types for DateDef types.
 */
export type DayOffsetForDateDef = {
  /**
   * Offset the computed date, to target the desired date.
   * @pattern ^[\-+][1-9]\d*$
   */
  dayOffset?: number;
};
export type YearOffsetForDateDef = {
  /**
   * Offset the current year to compute dates in the scope of different years.
   * @pattern ^[\-+][1-9]\d*$
   */
  yearOffset?: number;
};
export type MonthIndexForDateDef = {
  /**
   * The month of this liturgical day.
   * @pattern ^[1-9]|1[012]$
   */
  month: MonthIndex;
};
export type DayOfMonthForDateDef = {
  /**
   * The day of month of this liturgical day.
   */
  date: number;
};
export type DayOfWeekForDateDef = {
  /**
   * The day of week this liturgical year must occur.
   */
  dayOfWeek: DayOfWeek;
};
export type NthWeekInMonthForDateDef = {
  /**
   * The nth week in the month this liturgical year must occur.
   */
  nthWeekInMonth: number;
};

export type LastDayOfWeekInMonthForDateDef = {
  /**
   * The last day of week in the month this liturgical year must occur.
   */
  lastDayOfWeekInMonth: DayOfWeek;
};

/*
 * DateDef types.
 */
export type DateDefMonthDate = MonthIndexForDateDef & DayOfMonthForDateDef & YearOffsetForDateDef;
export type DateDefFn = OneOfDatesFn & DayOffsetForDateDef & YearOffsetForDateDef;
export type DateDefMonthDowNthWeekInMonth = MonthIndexForDateDef &
  DayOfWeekForDateDef &
  NthWeekInMonthForDateDef &
  YearOffsetForDateDef;
export type DateDefMonthLastDowInMonth = MonthIndexForDateDef &
  LastDayOfWeekInMonthForDateDef &
  YearOffsetForDateDef;

/**
 * The liturgical day date definition, can extend a previously defined date
 */
export type DateDefExtended = DateDef | DayOffsetForDateDef;

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
