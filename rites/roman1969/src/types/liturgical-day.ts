import { StringMap } from 'i18next';

import { Color } from '../constants/colors';
import { CommonDefinition } from '../constants/commons';
import { ProperCycle } from '../constants/cycles';
import { PatronTitle, Title } from '../constants/martyrology-metadata';
import { MonthIndex } from '../constants/months';
import { Period } from '../constants/periods';
import { Precedence } from '../constants/precedences';
import { Rank } from '../constants/ranks';
import { Season } from '../constants/seasons';
import { DayOfWeek } from '../constants/weekdays';
import { LiturgicalDay } from '../models/liturgical-day';
import { LiturgicalDayDef } from '../models/liturgical-day-def';
import { Dates } from '../utils/dates';

import { AllXOR, Id, XOR } from './common';
import { BaseCyclesMetadata, PartialCyclesDef } from './cycles-metadata';
import { MartyrologyItem, SaintCount } from './martyrology';

/**
 * The liturgical day date definition
 */
export type DateDef = AllXOR<
  [
    DateDefMonthDate,
    DateDefDateFnAddDay,
    DateDefDateFnSubtractDay,
    DateDefMonthDowNthWeekInMonth,
    DateDefMonthLastDowInMonth,
  ]
>;

export type DateDefMonthDate = {
  /**
   * The month of this liturgical day.
   */
  month: MonthIndex;

  /**
   * The date of this liturgical day.
   */
  date: number;

  /**
   * Offset the current year to compute dates in the scope of different years.
   */
  yearOffset?: number;
};
export type DateDefDateFnAddDay = {
  /**
   * A date function name from the [Date] class.
   */
  dateFn: keyof Dates;

  /**
   * Possible date function arguments that may be required.
   */
  dateArgs?: number[];

  /**
   * Add additional day(s) to the date computed from the 'dateFn' option.
   */
  addDay?: number;

  /**
   * Offset the current year to compute dates in the scope of different years.
   */
  yearOffset?: number;
};
export type DateDefDateFnSubtractDay = {
  /**
   * A date function name from the [Date] class.
   */
  dateFn: keyof Dates;

  /**
   * Possible date function arguments that may be required.
   */
  dateArgs?: number[];

  /**
   * Subtract some day(s) to the date computed from the 'dateFn' option.
   */
  subtractDay?: number;

  /**
   * Offset the current year to compute dates in the scope of different years.
   */
  yearOffset?: number;
};
export type DateDefMonthDowNthWeekInMonth = {
  /**
   * The month of this liturgical day.
   */
  month: MonthIndex;

  /**
   * The day of week this liturgical year must occur.
   */
  dayOfWeek: DayOfWeek;

  /**
   * The nth week in the month this liturgical year must occur.
   */
  nthWeekInMonth: number;

  /**
   * Offset the current year to compute dates in the scope of different years.
   */
  yearOffset?: number;
};
export type DateDefMonthLastDowInMonth = {
  /**
   * The month of this liturgical day.
   */
  month: MonthIndex;

  /**
   * The last day of week in the month this liturgical year must occur.
   */
  lastDayOfWeekInMonth: DayOfWeek;

  /**
   * Offset the current year to compute dates in the scope of different years.
   */
  yearOffset?: number;
};

/**
 * The liturgical day date definition, can extend a previously defined date
 */
export type DateDefExtended = AllXOR<[DateDef, DateDefAddDay, DateDefSubtractDay]>;

export type DateDefAddDay = { addDay: number };
export type DateDefSubtractDay = { subtractDay: number };

/**
 * The liturgical day date exception
 */
export type DateDefException = AllXOR<
  [
    {
      /**
       * Add an exception if the computed date occur between two dates.
       */
      ifIsBetween: { from: DateDef; to: DateDef; inclusive: boolean };
    },
    {
      /**
       * Add an exception if the computed date occur the same day as another date.
       */
      ifIsSameAsDate: DateDef;
    },
    {
      /**
       * Add an exception if the computed date occur on a specific day of week.
       */
      ifIsDayOfWeek: DayOfWeek;
    },
  ]
> & {
  /**
   * Set an updated date from the exception rules
   */
  setDate: DateDefExtended;
};

/**
 * Calendar definition, to compute then the calendar metadata
 */
export type CalendarMetadata = {
  dayOfSeason?: number;
  weekOfSeason?: number;
  dayOfWeek?: number;
};

/**
 * Calendar Metadata
 */
export type RomcalCalendarMetadata = {
  /**
   * The week number of the liturgical season.
   * Starts from `1`, except in the seasons of lent,
   * the week of Ash Wednesday to the next Saturday is count as `0`.
   */
  weekOfSeason: number;

  /**
   * The day number within the whole season.
   */
  dayOfSeason: number;

  /**
   * The day of the week.
   * Returns a number from 0 (Sunday) to 6 (Saturday).
   */
  dayOfWeek: number; // 0 | 1 | 2 | 3 | 4 | 5 | 6;

  /**
   * The nth day of week in month.
   */
  nthDayOfWeekInMonth: number;

  /**
   * The first day of the liturgical day, i.e. the first Sunday of Advent.
   */
  startOfLiturgicalYear: string;

  /**
   * The last day of the liturgical day, i.e. the last Saturday of Ordinary Time, in the 34th week.
   */
  endOfLiturgicalYear: string;

  /**
   * The first day of the current liturgical season.
   */
  startOfSeason: string;

  /**
   * The last day of the current liturgical season.
   */
  endOfSeason: string;
};

/**
 * i18n definitions
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export type i18nDef = [string] | [string, StringMap | string];

/**
 * Definition for a title needing prefix(es) and suffix(es)
 */
export type RomcalTitles = (Title | PatronTitle)[];
export type CompoundTitle = {
  /**
   * Add title(s) to the end of the existing list of title(s).
   */
  append?: RomcalTitles;
  /**
   * Add title(s) to the  beginning of the existing list of title(s).
   */
  prepend?: RomcalTitles;
};
export type TitlesDef = RomcalTitles | CompoundTitle;

/**
 * The associated martyrology item.
 */
export type MartyrologyItemPointer = Id | MartyrologyItemRedefined;

/**
 * From calendar ID
 */
export type FromCalendarId = Id;

/**
 * The associated martyrology item, with its overridden properties.
 */
export type MartyrologyItemRedefined = {
  /**
   * The ID of the martyrology item.
   */
  id: string;

  /**
   * The redefined titles of the martyrology item.
   */
  titles?: TitlesDef;

  /**
   * Specify if titles should not be displayed. This can occur when a title is already included in
   * the name of the martyrology item.
   */
  hideTitles?: boolean;

  /**
   * Specify the number of persons this martyrology item is representing.
   */
  count?: SaintCount;
};

/**
 * Date definition of a liturgical day
 */
export type FullDateDefinition = {
  /**
   * Date definition
   */
  dateDef: DateDef;

  /**
   * Date definition exception
   */
  dateExceptions?: DateDefException[];
};

/**
 * Base object extended by other derived Liturgical Day objects
 */
type LiturgicalDayRoot = FullDateDefinition & {
  /**
   * Optional alternative transfer dates for this liturgical day.
   *
   * e.g. `dedication_of_consecrated_churches` on 25th October, or on the last Sunday of October.
   */
  alternativeTransferDateDefs?: FullDateDefinition[];

  /**
   * Computed date, in ISO 8601 format: YYYY-MM-DD
   * @param year
   */
  date: string;

  /**
   * The precedence type of the liturgical day.
   */
  precedence: Precedence;

  /**
   * The rank of the liturgical day.
   */
  rank: Rank;

  /**
   * The localized rank of the liturgical day.
   */
  rankName: string;

  /**
   * In addition to this liturgical day, allow similar items that have the same rank,
   * and the same or lower precedence,
   * so the current liturgical day will not overwrite another defined item.
   */
  allowSimilarRankItems: boolean;

  /**
   * The liturgical colors of the liturgical day.
   */
  colors: Color[];

  /**
   * The liturgical localized colors of a liturgical day.
   */
  colorNames: string[];

  /**
   * Holy days of obligation are days on which the faithful are expected to attend Mass,
   * and engage in rest from work and recreation.
   */
  isHolyDayOfObligation: boolean;

  /**
   * Specify is this LiturgicalDay is optional within a specific liturgical calendar.
   *
   * UNLY #14:
   * Memorials are either obligatory or optional; their observance is integrated into
   * the celebration of the occurring weekday in accordance with the norms set forth in the
   * General Instruction of the Roman Missal and of the Liturgy of the Hours
   *
   * Note: also used for the dedication of consecrated churches, which is an optional solemnity
   * that should not overwrite the default weekday.
   */
  isOptional: boolean;

  /**
   * The localized name of the liturgical day.
   */
  name: string;

  /**
   * The i18n definition
   */
  i18nDef: i18nDef;

  /**
   * Specify a custom locale ID for this date definition, in this calendar.
   */
  customLocaleId?: string;

  /**
   * Season IDs to which the liturgical day is a part.
   */
  seasons: Season[];

  /**
   * Season localized name to which the liturgical day is a part.
   */
  seasonNames: string[];

  /**
   * Period IDs to which the liturgical day is a part.
   */
  periods: Period[];

  /**
   * The specific martyrology metadata of a liturgical day, if applies.
   */
  martyrology: MartyrologyItem[];

  /**
   * Combined titles of each Saints linked to this date definition.
   */
  titles: RomcalTitles;

  /**
   * The **Common** refers to a set of prayers, readings, and chants used for celebrating saints or
   * feasts that belong to a specific category, such as martyrs, virgins, pastors, or the Blessed
   * Virgin Mary.
   * These prayers are used when no specific texts (Proper) are assigned for a particular feast day.
   */
  commonsDef?: CommonDefinition[];

  /**
   * Cycle metadata of a liturgical day.
   */
  cycles: BaseCyclesMetadata;

  /**
   * The proper cycle in which the liturgical day is part.
   */
  properCycle?: ProperCycle;

  /**
   * Function that compute calendar metadata
   * @param date
   */
  calendar: RomcalCalendarMetadata;

  /**
   * Calendar definition, to compute then the calendar metadata
   */
  calendarMetadata: CalendarMetadata;

  /**
   * The ID of the calendar from which the liturgical day is defined.
   */
  fromCalendarId: FromCalendarId;

  /**
   * The names and the object diff of the calendars from which this liturgical day is extended.
   * From the first extended definitions to the latest extended definition.
   */
  fromExtendedCalendars: LiturgyDayDiff[];

  /**
   * If this liturgical day must be removed from this calendar and from all those it inherits
   * (the parent calendars), on the final calendar generated by romcal.
   */
  drop?: boolean;

  /**
   * Property used by Memorial and Feast celebrations only:
   * - Memorials: their observance is integrated into the celebration of the occurring weekday
   *   in accordance with the norms set forth in the General Instruction of the Roman
   *   Missal and of the Liturgy of the Hours. (UNLY #14)
   * - Liturgy of the hours: // todo: cite precise sources from the General Instructions of the Liturgy of the hours
   *    - Memorials: the liturgy of the hour remain the one of the weekday.
   *    - Feasts: small hours are taken from the weekday.
   */
  weekday?: LiturgicalDay;
};

/**
 * Generated object containing all metadata in a context of a proper calendar,
 * that can be used then to compute its date in a context of a year
 */
export type BaseLiturgicalDayDef = Pick<
  LiturgicalDayRoot,
  | 'colors'
  | 'fromCalendarId'
  | 'periods'
  | 'i18nDef'
  | 'calendarMetadata'
  | 'fromExtendedCalendars'
  | 'seasons'
  | 'isHolyDayOfObligation'
  | 'isOptional'
  | 'precedence'
  | 'dateDef'
  | 'dateExceptions'
  | 'titles'
  | 'colorNames'
  | 'martyrology'
  | 'name'
  | 'rank'
  | 'rankName'
  | 'seasonNames'
> & {
  /**
   * An ID of the liturgical day.
   */
  id: Id;

  /**
   * Cycle metadata of a liturgical day.
   */
  cycles: PartialCyclesDef;

  /**
   * Merged input definition, from all calendars this definition input is defined.
   */
  input: LiturgicalDayBundleInput[];
};

/**
 * Input object used in calendar definition files
 */
export type LiturgicalDayInput = Partial<
  Pick<
    LiturgicalDayRoot,
    | 'dateDef'
    | 'alternativeTransferDateDefs'
    | 'precedence'
    | 'allowSimilarRankItems'
    | 'isHolyDayOfObligation'
    | 'isOptional'
    | 'properCycle'
    | 'customLocaleId'
    | 'drop'
  >
> & {
  /**
   * Date definition exception
   */
  dateExceptions?: DateDefException | DateDefException[];

  /**
   * The **Common** refers to a set of prayers, readings, and chants used for celebrating saints or
   * feasts that belong to a specific category, such as martyrs, virgins, pastors, or the Blessed
   * Virgin Mary.
   * These prayers are used when no specific texts (Proper) are assigned for a particular feast day.
   */
  commonsDef?: CommonDefinition | CommonDefinition[];

  /**
   * The liturgical color(s) of the liturgical day.
   */
  colors?: Color | Color[];

  /**
   * Link one or multiple Saints, Blessed, or any other celebrations from the Martyrology catalog.
   */
  martyrology?: MartyrologyItemPointer[];

  /**
   * Redefine the titles of each Saints linked to this date definition, from the martyrology catalog.
   */
  titles?: TitlesDef;
};

export type LiturgicalDayBundleInput = XOR<LiturgicalDayInput, LiturgicalDayProperOfTimeInput> &
  Partial<Pick<LiturgicalDayRoot, 'fromCalendarId'>>;

/**
 * Input object with its base properties from the proper of time
 */

export type LiturgicalDayProperOfTimeInput = Pick<
  LiturgicalDayRoot,
  | 'colors'
  | 'properCycle'
  | 'drop'
  | 'periods'
  | 'i18nDef'
  | 'calendarMetadata'
  | 'seasons'
  | 'customLocaleId'
  | 'precedence'
  | 'dateDef'
  | 'dateExceptions'
> &
  Partial<Pick<LiturgicalDayRoot, 'allowSimilarRankItems' | 'isHolyDayOfObligation' | 'isOptional'>>;

/**
 * Generated object with computed date within a specific year
 */
export type BaseLiturgicalDay = Omit<LiturgicalDayRoot, 'properCycle' | 'calendarMetadata' | 'drop'> & {
  /**
   * An ID of the liturgical day.
   */
  id: Id;
};

/**
 * LiturgyDayDiff object used to compare definition iterations
 */
export type LiturgyDayDiff = Pick<LiturgicalDayDef, 'fromCalendarId'> &
  Partial<
    Pick<
      LiturgicalDayRoot,
      | 'fromCalendarId'
      // | 'date'
      | 'dateDef'
      | 'dateExceptions'
      | 'precedence'
      | 'rank'
      | 'isHolyDayOfObligation'
      | 'i18nDef'
      | 'titles'
      | 'colors'
    > & { cycles: Partial<Pick<BaseCyclesMetadata, 'properCycle'>>; martyrology: Id[] }
  >;

/**
 * Check if the provided object is a [LiturgicalDayProperOfTimeInput] object
 * @param maybeObj
 */
export const isLiturgicalDayProperOfTimeInput = (maybeObj: unknown): maybeObj is LiturgicalDayProperOfTimeInput =>
  typeof maybeObj === 'object' && Object.prototype.hasOwnProperty.call(maybeObj, 'periods');
