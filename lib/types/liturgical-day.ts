import { LiturgicalColors } from '@romcal/constants/colors';
import {
  ProperCycles,
  PsalterWeeksCycles,
  SundaysCycles,
  WeekdaysCycles,
} from '@romcal/constants/cycles';
import { PatronTitles, Titles } from '@romcal/constants/martyrology-metadata';
import { LiturgicalPeriods } from '@romcal/constants/periods';
import { Precedences } from '@romcal/constants/precedences';
import { Ranks } from '@romcal/constants/ranks';
import { LiturgicalSeasons } from '@romcal/constants/seasons';
import LiturgicalDay from '@romcal/models/liturgical-day';
import LiturgicalDayDef from '@romcal/models/liturgical-day-def';
import { MartyrologyItem, SaintCount } from '@romcal/types/martyrology';
import { Dates } from '@romcal/utils/dates';
import { StringMap } from 'i18next';

/**
 * Utility types
 */
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
// eslint-disable-next-line @typescript-eslint/ban-types
type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AllXOR<T extends any[]> = T extends [infer Only]
  ? Only
  : T extends [infer A, infer B, ...infer Rest]
  ? AllXOR<[XOR<A, B>, ...Rest]>
  : never;

/**
 * A key, in lower_underscore_case
 */
export type Key = Lowercase<string>;

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

export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type DateDefMonthDate = {
  /**
   * The month of this liturgical day.
   */
  month: Month;

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
  month: Month;

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
  month: Month;

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
export type DateDefException =
  | AllXOR<
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
export type CalendarDef = {
  dayOfSeason?: number;
  weekOfSeason?: number;
  dayOfWeek?: number;
};

/**
 * Cycles Metadata
 */
export type RomcalCyclesMetadata = {
  /**
   * The proper cycle in which the liturgical day is part.
   */
  properCycle: ProperCycles;

  /**
   * The Sunday yearly cycle in which the liturgical day is part.
   */
  sundayCycle: SundaysCycles;

  /**
   * The weekday yearly cycle in which the liturgical day is part.
   */
  weekdayCycle: WeekdaysCycles;

  /**
   * The psalter week cycle in which the liturgical day is part.
   */
  psalterWeek: PsalterWeeksCycles;
};

/**
 * Partial Cycle Metadata definition
 */
export type PartialCyclesDef = Pick<RomcalCyclesMetadata, 'properCycle'>;

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
   * Returns numbers from 0 (Sunday) to 6 (Saturday).
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
 * The associated titles of a liturgical day.
 */
export type TitlesDef =
  | (Titles | PatronTitles)[]
  | {
      /**
       * Add title(s) to the end of the existing list of title(s).
       */
      append?: (Titles | PatronTitles)[];
      /**
       * Add title(s) to the  beginning of the existing list of title(s).
       */
      prepend?: (Titles | PatronTitles)[];
    };

/**
 * The associated martyrology item.
 */
export type MartyrologyItemPointer = string | MartyrologyItemRedefined;

/**
 * The associated martyrology item, with its overridden properties.
 */
export type MartyrologyItemRedefined = {
  /**
   * The key of the martyrology item.
   */
  key: string;

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
 * Base object extended by other derived Liturgical Day objects
 */
type LiturgicalDayRoot = {
  /**
   * Date definition
   */
  dateDef: DateDef;

  /**
   * Date definition exception
   */
  dateExceptions?: DateDefException[];

  /**
   * Computed date, in ISO 8601 format: YYYY-MM-DD
   * @param year
   */
  date: Lowercase<string>;

  /**
   * The precedence type of the liturgical day.
   */
  precedence: Precedences;

  /**
   * The rank of the liturgical day.
   */
  rank: Ranks;

  /**
   * The localized rank of the liturgical day.
   */
  rankName: string;

  /**
   * The liturgical colors of the liturgical day.
   */
  liturgicalColors: LiturgicalColors[];

  /**
   * The liturgical localized colors of a liturgical day.
   */
  liturgicalColorNames: string[];

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
  i18nDef: [string] | [string, StringMap | string];

  /**
   * Specify a custom locale key for this date definition, in this calendar.
   */
  customLocaleKey?: string;

  /**
   * Season keys to which the liturgical day is a part.
   */
  seasons: LiturgicalSeasons[];

  /**
   * Season localized name to which the liturgical day is a part.
   */
  seasonNames: string[];

  /**
   * Period keys to which the liturgical day is a part.
   */
  periods: LiturgicalPeriods[];

  /**
   * The specific martyrology metadata of a liturgical day, if applies.
   */
  martyrology: MartyrologyItem[];

  /**
   * Combined titles of each Saints linked to this date definition.
   */
  titles: (Titles | PatronTitles)[];

  /**
   * Cycle metadata of a liturgical day.
   */
  cycles: RomcalCyclesMetadata;

  /**
   * The proper cycle in which the liturgical day is part.
   */
  properCycle?: ProperCycles;

  /**
   * Function that compute calendar metadata
   * @param date
   */
  calendar: RomcalCalendarMetadata;

  /**
   * Calendar definition, to compute then the calendar metadata
   */
  calendarDef: CalendarDef;

  /**
   * The name of the calendar from which the liturgical day is defined.
   */
  fromCalendar: Lowercase<string>;

  /**
   * The names and the object diff of the calendars from which this liturgical day is extended.
   * From the first extended definitions to the latest extended definition.
   */
  fromExtendedCalendars: LiturgyDayDiff[];

  /**
   * If this liturgical day must be removed from this calendar and from all those it inherits,
   * on the final calendar generated by romcal.
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
export type BaseLiturgicalDayDef = Omit<
  LiturgicalDayRoot,
  'date' | 'customLocaleKey' | 'cycles' | 'calendar' | 'properCycle' | 'drop' | 'weekday'
> & {
  /**
   * The unique key of the liturgical day.
   */
  key: Key;

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
    | 'precedence'
    | 'isHolyDayOfObligation'
    | 'isOptional'
    | 'properCycle'
    | 'customLocaleKey'
    | 'drop'
  >
> & {
  /**
   * Date definition exception
   */
  dateExceptions?: DateDefException | DateDefException[];

  /**
   * The liturgical color(s) of the liturgical day.
   */
  liturgicalColors?: LiturgicalColors | LiturgicalColors[];

  /**
   * Link one or multiple Saints, Blessed, or any other celebrations from the Martyrology catalog.
   */
  martyrology?: MartyrologyItemPointer[];

  /**
   * Redefine the titles of each Saints linked to this date definition, from the martyrology catalog.
   */
  titles?: TitlesDef;
};

export type LiturgicalDayBundleInput = LiturgicalDayInput &
  Partial<Pick<LiturgicalDayRoot, 'fromCalendar'>>;

/**
 * Input object with its base properties from the proper of time
 */
export type LiturgicalDayProperOfTimeInput = Omit<
  LiturgicalDayRoot,
  | 'date'
  | 'rank'
  | 'rankName'
  | 'name'
  | 'isHolyDayOfObligation'
  | 'isOptional'
  | 'seasonNames'
  | 'martyrology'
  | 'titles'
  | 'liturgicalColorNames'
  | 'cycles'
  | 'calendar'
  | 'fromCalendar'
  | 'fromExtendedCalendars'
  | 'weekday'
> &
  Partial<Pick<LiturgicalDayRoot, 'isHolyDayOfObligation' | 'isOptional'>>;
/**
 * Generated object with computed date within a specific year
 */
export type BaseLiturgicalDay = Omit<LiturgicalDayRoot, 'properCycle' | 'calendarDef' | 'drop'> & {
  /**
   * The unique key of the liturgical day.
   */
  key: Key;
};

/**
 * LiturgyDayDiff object used to compare definition iterations
 */
export type LiturgyDayDiff = Pick<LiturgicalDayDef, 'fromCalendar'> &
  Partial<
    Pick<
      LiturgicalDayRoot,
      | 'fromCalendar'
      // | 'date'
      | 'dateDef'
      | 'dateExceptions'
      | 'precedence'
      | 'rank'
      | 'isHolyDayOfObligation'
      | 'i18nDef'
      | 'titles'
      | 'liturgicalColors'
    > & { cycles: Partial<Pick<RomcalCyclesMetadata, 'properCycle'>>; martyrology: Key[] }
  >;

/**
 * Check if the provided object is a [LiturgicalDayProperOfTimeInput] object
 * @param maybeObj
 */
export const isLiturgicalDayProperOfTimeInput = (maybeObj: unknown): boolean => {
  return typeof maybeObj === 'object' && Object.prototype.hasOwnProperty.call(maybeObj, 'periods');
};
