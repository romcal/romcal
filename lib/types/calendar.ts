import LiturgicalDay from '@romcal/models/liturgical-day';
import { Key } from '@romcal/types/common';
import { Dates } from '@romcal/utils/dates';

/**
 * Liturgical Calendar, containing LiturgicalDay objects, within the context of a year
 */
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
