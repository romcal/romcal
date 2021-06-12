import dayjs from 'dayjs';
import { Dates } from '../utils/dates';
import { CalendarScope } from '../../../constants/calendar-scope';
import { CalendarDef } from './calendar-def';

/**
 * The configuration object that is passed either to the [[Calendar.calendarFor]]
 * methods to retrieve an array of [[DateItems]].
 */
export interface BaseRomcalConfig {
  /**
   * The calendar year to obtain.
   */
  readonly year?: number;

  /**
   * The calendar
   */
  readonly particularCalendar?: typeof CalendarDef;

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
   * The calendar scope to query for.
   *
   * The scope can be specified either as:
   * 1. `gregorian`: Which is the civil year for the majority of countries (January 1 to December 31); or
   * 2. `liturgical`: Religious calendar year (1st Sunday of Advent of the current year to the Saturday before the 1st Sunday of Advent in the next year).
   */
  readonly scope?: CalendarScope;

  /**
   * Enable logging output.
   * Logs are newline delimited JSON (NDJSON),
   * a convenient format for production usage and long-term storage.
   */
  readonly verbose?: boolean;

  /**
   * Prettify logs printed in the console, for a better experience in development environnements
   * (instead of output them in NDJSON format).
   */
  readonly prettyPrint?: boolean;
}
/**
 * A modified variant of [[RomcalConfig]] specifically for the [[Config]] class constructor
 * where all properties are **required**.
 */
export type RomcalConfigInput = Partial<BaseRomcalConfig>;

/**
 * The [[Config]] class encapsulates all options that can be sent to this library to adjust date output.
 */
export class RomcalConfig implements BaseRomcalConfig {
  readonly year: number;
  readonly particularCalendar?: typeof CalendarDef;
  readonly epiphanyOnSunday: boolean;
  readonly corpusChristiOnSunday: boolean;
  readonly ascensionOnSunday: boolean;
  readonly scope: CalendarScope;
  readonly verbose: boolean;
  readonly prettyPrint: boolean;

  /**
   * Constructs a new [[Config]] object
   * @param config [[RomcalConfig]] object representing all settings
   */
  constructor(config?: RomcalConfigInput) {
    this.scope = config?.scope ?? CalendarScope.Gregorian;

    this.year =
      config?.year ??
      // When year is undefined, determine the current year
      this.scope === CalendarScope.Gregorian
        ? // Current Gregorian year
          dayjs().year()
        : // Current Liturgical year
        dayjs().isBefore(Dates.firstSundayOfAdvent(dayjs().year()))
        ? // We are before the first Sunday of Advent, taking the current year
          dayjs().year()
        : // We are after the first Sunday of Advent, setting the next Gregorian year
          // hat represent the main part of this Liturgical year
          dayjs().year() + 1;

    if (config?.particularCalendar)
      this.particularCalendar = config?.particularCalendar;
    this.epiphanyOnSunday = config?.epiphanyOnSunday ?? false;
    this.corpusChristiOnSunday = config?.corpusChristiOnSunday ?? true;
    this.ascensionOnSunday = config?.ascensionOnSunday ?? false;
    this.verbose = config?.verbose ?? false;
    this.prettyPrint = config?.prettyPrint ?? false;
  }

  /**
   * Return the config settings as an Object
   */
  toObject(): BaseRomcalConfig {
    return {
      year: this.year,
      particularCalendar: this.particularCalendar,
      epiphanyOnSunday: this.epiphanyOnSunday,
      corpusChristiOnSunday: this.corpusChristiOnSunday,
      ascensionOnSunday: this.ascensionOnSunday,
      scope: this.scope,
      verbose: this.verbose,
      prettyPrint: this.prettyPrint,
    };
  }
}
