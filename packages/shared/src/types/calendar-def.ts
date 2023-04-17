import { LiturgicalDayDefInputMap, LiturgicalDayDefMap } from './liturgical-day';

/**
 * Calendar identifier.
 * @pattern ^[a-z\d]+(?:[_\-.][a-z\d]+)*$
 */
export type CalendarId = string;

export type CalendarDef = {
  /**
   * Unique identifier of the calendar.
   */
  calendarId: CalendarId;

  /**
   * Calendar tree used to populate this calendar, from the most general to the more specific.
   * @uniqueItems true
   */
  calendarTree: CalendarId[];

  /**
   * Specific and proper configuration of a proper calendar.
   */
  config: CalendarDefConfig;

  /**
   * Collection of liturgical date definitions.
   */
  definitions: LiturgicalDayDefMap;
};

export type CalendarDefInput = Pick<CalendarDef, 'calendarId'> & {
  /**
   * Parent calendars to inherit from, in order of priority (from the most general to the more specific).
   * @uniqueItems true
   */
  basedOn: CalendarId[];

  /**
   * Specific and proper configuration of a proper calendar.
   */
  config?: CalendarDefConfigInput;

  /**
   * Collection of liturgical date definitions.
   */
  inputs: LiturgicalDayDefInputMap;
};

/**
 * Specific and proper configuration of a particular calendar
 */
export type CalendarDefConfig = {
  /**
   * If true, Epiphany is set to a Sunday between the 2nd - 8th Jan based on an internal calculation.
   * If false, fixes Epiphany on January 6th.
   */
  epiphanyOnSunday: boolean;

  /**
   * If true, Ascension is moved to the 7th Sunday of Easter.
   */
  ascensionOnSunday: boolean;

  /**
   * If true, Corpus Christi is placed on Sunday (63 days after Easter).
   * If false, Corpus Christi is placed on Thursday of the 7th week of Easter (60 days after Easter).
   */
  corpusChristiOnSunday: boolean;
};

export type CalendarDefConfigInput = Partial<CalendarDefConfig>;
