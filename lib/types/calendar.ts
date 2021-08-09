import LiturgicalDay from '@romcal/models/liturgical-day';
import { RomcalConfigOutput } from '@romcal/types/config';
import { BaseLiturgicalDay, Key } from '@romcal/types/liturgical-day';
import { BaseRomcalYear } from '@romcal/types/year';
import { Dates } from '@romcal/utils/dates';

/**
 * Liturgical Calendar, containing LiturgicalDay objects, within the context of a year
 */
export type LiturgicalCalendar = Record<string, BaseLiturgicalDay[]>;

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

export type LiturgicalDayConfig = RomcalConfigOutput & BaseRomcalYear;
