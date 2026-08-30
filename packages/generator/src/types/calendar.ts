/**
 * Liturgical Calendar, containing LiturgicalDay objects, within the context of a year
 */
import { LiturgicalDay } from '../models/liturgical-day';

import { Id } from './common';
import { DatesProvider } from './dates';

export type LiturgicalCalendar = Record<string, LiturgicalDay[]>;

/**
 * General date definition collection
 */

export type ByIds = Record<Id, LiturgicalDay[]>;
export type DatesIndex = Record<string, Id[]>;

export type LiturgicalBuiltData = {
  byIds: ByIds;
  datesIndex: DatesIndex;
};

/**
 * Base [CalendarDef] interface
 */
export interface BaseCalendar {
  dates: DatesProvider;
  generateCalendar: (builtData: LiturgicalBuiltData) => LiturgicalCalendar;
}
