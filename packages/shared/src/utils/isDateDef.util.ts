import {
  DateDef,
  DateDefExtended,
  DateDefFn,
  DateDefMonthDate,
  DateDefMonthDowNthWeekInMonth,
  DateDefMonthLastDowInMonth,
  FirstSundayOfAdventDateFn,
} from '../types';
import { isInteger } from './isInteger.util';

export const isDateDef = (maybeDateDef: unknown): maybeDateDef is DateDef =>
  typeof maybeDateDef === 'object' &&
  maybeDateDef !== null &&
  ((maybeDateDef as DateDefFn).yearOffset === undefined ||
    ('yearOffset' in maybeDateDef && isInteger(maybeDateDef.yearOffset)));

export function assertIsDateDef(
  maybeDateDef: unknown,
  liturgicalDayId?: string,
): asserts maybeDateDef is DateDef {
  if (!isDateDef(maybeDateDef)) {
    throw new Error(
      liturgicalDayId
        ? `The provided date definition for liturgical day ${liturgicalDayId} is incorrect or missing.`
        : `The provided date definition is incorrect or missing.`,
    );
  }
}

export const isDateDefMonthDate = (dateDef: DateDefExtended): dateDef is DateDefMonthDate =>
  isInteger((dateDef as DateDefMonthDate).month) &&
  isInteger((dateDef as DateDefMonthDate).date) &&
  (dateDef as DateDefMonthDate).month > 0 &&
  (dateDef as DateDefMonthDate).date > 0;

export const isDateDefFn = (
  dateDef: DateDefExtended,
  properOfTimeDates: { [key: string]: unknown },
): dateDef is DateDefFn =>
  Object.keys(dateDef).some((key) => key in properOfTimeDates) &&
  ((dateDef as DateDefFn).yearOffset === undefined ||
    ('yearOffset' in dateDef && isInteger(dateDef.yearOffset))) &&
  ((dateDef as DateDefFn).dayOffset === undefined ||
    ('dayOffset' in dateDef && isInteger(dateDef.dayOffset)));

export const isDateDefMonthDowNthWeekInMonth = (
  dateDef: DateDefExtended,
): dateDef is DateDefMonthDowNthWeekInMonth =>
  'month' in dateDef &&
  isInteger(dateDef.month) &&
  dateDef.month > 0 &&
  'dayOfWeek' in dateDef &&
  dateDef.dayOfWeek !== undefined &&
  'nthWeekInMonth' in dateDef &&
  isInteger(dateDef.nthWeekInMonth) &&
  dateDef.nthWeekInMonth > 0 &&
  ((dateDef as DateDefMonthDowNthWeekInMonth).yearOffset === undefined ||
    ('yearOffset' in dateDef && isInteger(dateDef.yearOffset)));

export const isDateDefMonthLastDowInMonth = (
  dateDef: DateDefExtended,
): dateDef is DateDefMonthLastDowInMonth =>
  'month' in dateDef &&
  isInteger(dateDef.month) &&
  dateDef.month > 0 &&
  'lastDayOfWeekInMonth' in dateDef &&
  dateDef.lastDayOfWeekInMonth !== undefined &&
  ((dateDef as DateDefMonthLastDowInMonth).yearOffset === undefined ||
    ('yearOffset' in dateDef && isInteger(dateDef.yearOffset)));

export const isFirstSundayOfAdventDateFn = (
  dateDef: DateDefFn,
): dateDef is FirstSundayOfAdventDateFn => 'firstSundayOfAdvent' in dateDef;
