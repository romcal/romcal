/**
 * Liturgical Calendar, containing LiturgicalDay objects, within the context of a year
 */
import { LiturgicalDay } from '../models/liturgical-day';
import { Dates } from '../utils/dates';

import { Id } from './common';

export type LiturgicalCalendar<T extends LiturgicalDay = LiturgicalDay> = Record<string, T[]>;

/**
 * General date definition collection
 */

export type ByIds<T extends LiturgicalDay = LiturgicalDay> = Record<Id, T[]>;
export type DatesIndex = Record<string, Id[]>;

export type LiturgicalBuiltData<T extends LiturgicalDay = LiturgicalDay> = {
  byIds: ByIds<T>;
  datesIndex: DatesIndex;
};

/**
 * Base [CalendarDef] interface
 */
export interface BaseCalendar {
  dates: Dates;
  generateCalendar: (builtData: LiturgicalBuiltData) => LiturgicalCalendar;
}
