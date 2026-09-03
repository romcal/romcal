/**
 * Liturgical Calendar, containing LiturgicalDay objects, within the context of a year
 */
import { LiturgicalDay } from '../models/liturgical-day';

import { Id } from './common';
import { DatesProvider } from './dates';
import { Vocabulary } from './vocabulary';

export type LiturgicalCalendar<V extends Vocabulary = Vocabulary> = Record<string, LiturgicalDay<V>[]>;

/**
 * General date definition collection
 */

export type ByIds<V extends Vocabulary = Vocabulary> = Record<Id, LiturgicalDay<V>[]>;
export type DatesIndex = Record<string, Id[]>;

export type LiturgicalBuiltData<V extends Vocabulary = Vocabulary> = {
  byIds: ByIds<V>;
  datesIndex: DatesIndex;
};

/**
 * Base [CalendarDef] interface
 */
export interface BaseCalendar<V extends Vocabulary = Vocabulary> {
  dates: DatesProvider;
  generateCalendar: (builtData: LiturgicalBuiltData<V>) => LiturgicalCalendar<V>;
}
