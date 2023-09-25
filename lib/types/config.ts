import { i18n } from 'i18next';

import { RomcalBundleObject } from './bundle';
import { CalendarDefInstance } from './calendar-def';
import { Id } from './common';

/**
 * The configuration object that is passed either to the [[Calendar.calendarFor]]
 * methods to retrieve an array of [[DateItems]].
 */
export interface BaseRomcalConfig {
  /**
   * The localized calendar bundle object.
   */
  readonly localizedCalendar?: RomcalBundleObject;

  /**
   * If `false`, fixes Epiphany on January 6th. Usually, Epiphany will be set to a
   * Sunday between the 2nd - 8th Jan based on an internal calculation.
   *
   * Defaults to `true`.
   */
  readonly epiphanyOnSunday?: boolean;

  /**
   * Determines if Corpus Christi should be celebrated on Sunday (63 days after Easter)
   * or on Thursday of the 7th week of Easter (60 days after Easter).
   * (Corpus Christi is celebrated on Sunday by default).
   *
   * Defaults to `true`
   */
  readonly corpusChristiOnSunday?: boolean;

  /**
   * If true, Ascension is moved to the 7th Sunday of Easter)
   *
   * (defaults to false)
   */
  readonly ascensionOnSunday?: boolean;

  /**
   * Determines if the date of Easter is calculated using the Gregorian calendar or the Julian calendar.
   */
  readonly easterCalculationType: EasterCalculationType;

  /**
   * The calendar scope to query for.
   *
   * The scope can be specified either as:
   * 1. **gregorian**: Which is the civil year for the majority of countries (January 1 to December 31); or
   * 2. **liturgical**: Religious calendar year (1st Sunday of Advent of the current year to the Saturday before the 1st Sunday of Advent in the next year).
   */
  readonly scope?: CalendarScope;

  /**
   * All calendar definitions
   */
  readonly calendarsDef: InstanceType<CalendarDefInstance>[];

  /**
   * The locale ID
   */
  readonly localeId: Id;

  /**
   * The calendar name
   */
  readonly calendarName: string;
}

export interface IRomcalConfig extends BaseRomcalConfig {
  readonly i18next: i18n;
}

/**
 * A modified variant of [[RomcalConfig]] specifically for the [[Config]] class constructor
 * where all properties are **required**.
 */
export type RomcalConfigInput = Omit<Partial<BaseRomcalConfig>, 'localeId' | 'calendarName'>;

/**
 * Output object of the romcal config.
 */
export type RomcalConfigOutput = Required<Omit<BaseRomcalConfig, 'localizedCalendar' | 'calendarsDef'>>;

export type CalendarScope = 'gregorian' | 'liturgical';

export type EasterCalculationType = 'gregorian' | 'julian';
