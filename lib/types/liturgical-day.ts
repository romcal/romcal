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
import LiturgicalDayDef from '@romcal/models/liturgical-day-def';
import { MartyrologyItem, SaintCount } from '@romcal/types/martyrology';
import { Dates } from '@romcal/utils/dates';
import { Dayjs } from 'dayjs';
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
    DateDefMonthDowNthDowInMonth,
    DateDefMonthLastDowInMonth,
  ]
>;

export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type DateDefMonthDate = { month: Month; date: number };
export type DateDefDateFnAddDay = { dateFn: keyof Dates; dateArg?: number[]; addDay?: number };
export type DateDefDateFnSubtractDay = {
  dateFn: keyof Dates;
  dateArg?: number[];
  subtractDay?: number;
};
export type DateDefMonthDowNthDowInMonth = {
  month: Month;
  dayOfWeek: DayOfWeek;
  nthDayOfWeekInMonth: number;
};
export type DateDefMonthLastDowInMonth = { month: Month; lastDayOfWeekInMonth: DayOfWeek };

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
  | (
      | { ifIsBetween: { from: DateDef; to: DateDef; inclusive: boolean } }
      | { ifIsSameAsDate: DateDef }
      | { ifIsDayOfWeek: number }
    ) & { setDate: DateDefExtended };

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
 * The associated titles of a liturgical day
 */
export type TitlesDef =
  | (Titles | PatronTitles)[]
  | { append?: (Titles | PatronTitles)[]; prepend?: (Titles | PatronTitles)[] };

/**
 * The associated martyrology item
 */
export type MartyrologyItemPointer = string | MartyrologyItemRedefined;

/**
 * The associated martyrology item, with its overridden properties
 */
export type MartyrologyItemRedefined = {
  key: string;
  titles?: TitlesDef;
  hideTitles?: boolean;
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
   * Computed date within a context of a year
   * @param year
   */
  date: Dayjs | null;

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
   * Date definition exception
   */
  dateExceptions?: DateDefException | DateDefException[];

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
   * Specify is this LiturgicalDay (generally a Memorial) is optional.
   *
   * UNLY #14:
   * Memorials are either obligatory or optional; their observance is integrated into
   * the celebration of the occurring weekday in accordance with the norms set forth in the
   * General Instruction of the Roman Missal and of the Liturgy of the Hours
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
   * The proper cycle in which the liturgical day is part.
   */
  properCycle?: ProperCycles;

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
};

/**
 * Generated object containing all metadata in a context of a proper calendar,
 * that can be used then to compute its date in a context of a year
 */
export type BaseLiturgicalDayDef = Omit<LiturgicalDayRoot, 'date' | 'drop'> & {
  /**
   * The unique key of the liturgical day.
   */
  key: Key;
};

/**
 * Input object used in calendar definition files
 */
export type LiturgicalDayInput = Partial<
  Pick<
    LiturgicalDayRoot,
    | 'dateDef'
    | 'dateExceptions'
    | 'precedence'
    | 'isHolyDayOfObligation'
    | 'isOptional'
    | 'properCycle'
    | 'customLocaleKey'
    | 'drop'
  >
> & {
  /**
   * The liturgical color(s) of the liturgical day.
   */
  liturgicalColors?: LiturgicalColors | LiturgicalColors[];

  /**
   * Link one or multiple Saints, Blessed, or any other celebrations from the Martyrology catalog.
   */
  martyrology?: MartyrologyItemPointer[];

  /**
   * Redefine the titles of each Saints linked to this date definition.
   */
  titles?: TitlesDef;
};

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
  | 'fromCalendar'
  | 'fromExtendedCalendars'
> &
  Partial<Pick<LiturgicalDayRoot, 'isHolyDayOfObligation' | 'isOptional'>> & {
    /**
     * Function that compute calendar metadata
     * @param date
     */
    calendar?: (date: Dayjs) => RomcalCalendarMetadata;

    /**
     * Define year offset during the proper of time generation
     */
    yearOffset: number;
  };

/**
 * Generated object with computed date within a specific year
 */
export type BaseLiturgicalDay = Omit<LiturgicalDayRoot, 'properCycle' | 'drop'> & {
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
      | 'precedence'
      | 'rank'
      | 'isHolyDayOfObligation'
      | 'i18nDef'
      | 'titles'
      | 'liturgicalColors'
    > & { cycles: Partial<Pick<RomcalCyclesMetadata, 'properCycle'>> }
  >;

/**
 * Check if the provided object is a [LiturgicalDayProperOfTimeInput] object
 * @param maybeObj
 */
export const isLiturgicalDayProperOfTimeInput = (maybeObj: unknown): boolean => {
  return typeof maybeObj === 'object' && Object.prototype.hasOwnProperty.call(maybeObj, 'periods');
};
