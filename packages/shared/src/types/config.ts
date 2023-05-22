import { ProperOfTimeDates } from '@romcal/proper-of-time';

import { CalendarScope } from '../constants';
import { CalendarDef, CalendarDefConfig } from './calendar-def';
import { Locale } from './locale';

/**
 * The year to query for (between 0 and 9999).
 * @min 0
 * @max 9999
 */
export type Year = number;

/**
 * The configuration object that is passed either to the [[Calendar.calendarFor]]
 * methods to retrieve an array of [[DateItems]].
 */
export type RomcalConfig = CalendarDefConfig & {
  /**
   * The year to query for (between 0 and 9999).
   */
  readonly year: Year;

  readonly calendar?: CalendarDef;

  /**
   * By default when not defined, use the Roman Proper of Time computed in this romcal package.
   * However, by setting a custom one, this allows to redefine a proper of time for
   * another rite than the Roman rite.
   */
  readonly properOfTime?: CalendarDef;

  readonly locale?: Locale | Locale[];

  /**
   * The calendar scope to query for.
   *
   * The scope can be specified either as:
   * 1. **gregorian**: Which is the civil year for the majority of countries (January 1 to December 31); or
   * 2. **liturgical**: Religious calendar year (1st Sunday of Advent of the current year to the Saturday before the 1st Sunday of Advent in the next year).
   */
  readonly scope: CalendarScope;
};

export type RomcalConfigInput = Partial<RomcalConfig> & {
  properOfTimeCalendarDef?: CalendarDef;
  properOfTimeDates?: ProperOfTimeDates;
};

// export interface IRomcalConfig extends BaseRomcalConfig {
//   readonly i18next: i18n;
// }

// /**
//  * A modified variant of [[RomcalConfig]] specifically for the [[Config]] class constructor
//  * where all properties are **required**.
//  */
// export type RomcalConfigInput = Omit<Partial<BaseRomcalConfig>, 'localeId' | 'calendarName'>;

// /**
//  * Output object of the romcal config.
//  */
// export type RomcalConfigOutput = Required<Omit<BaseRomcalConfig, 'localizedCalendar' | 'calendarsDef'>>;

// export type CalendarScope = 'gregorian' | 'liturgical';
