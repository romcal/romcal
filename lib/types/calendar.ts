/**
 * Liturgical Calendar, containing LiturgicalDay objects, within the context of a year
 */
import LiturgicalDay from '../models/liturgical-day';
import { Dates } from '../utils/dates';
import { Key } from './common';

export type LiturgicalCalendar = Record<string, LiturgicalDay[]>;

/**
 * General date definition collection
 */

export type ByKeys = Record<Key, LiturgicalDay>;
export type DatesIndex = Record<string, Key[]>;

export type LiturgicalBuiltData = {
  byKeys: ByKeys;
  datesIndex: DatesIndex;
};

/**
 * Base [CalendarDef] interface
 */
export interface BaseCalendar {
  dates: Dates;
  generateCalendar: (builtData: LiturgicalBuiltData) => LiturgicalCalendar;
}
