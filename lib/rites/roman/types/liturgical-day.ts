import { LiturgicalColor, LiturgicalColors } from '@roman-rite/constants/colors';
import {
  ProperCycles,
  PsalterWeeksCycles,
  SundaysCycles,
  WeekdaysCycles,
} from '@roman-rite/constants/cycles';
import { LiturgicalPeriods } from '@roman-rite/constants/periods';
import { Precedences } from '@roman-rite/constants/precedences';
import { Ranks } from '@roman-rite/constants/ranks';
import { LiturgicalSeasons } from '@roman-rite/constants/seasons';
import LiturgicalDay from '@roman-rite/models/liturgical-day';
import LiturgicalDayDef from '@roman-rite/models/liturgical-day-def';
import { MartyrologyItemPointer, TitlesDef } from '@roman-rite/types/calendar-def';
import { MartyrologyItem } from '@romcal/types/martyrology';
import { Dayjs } from 'dayjs';

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

export type LiturgyDayDiff = Pick<LiturgicalDay, 'fromCalendar'> &
  Partial<
    Pick<
      LiturgicalDay,
      | 'fromCalendar'
      | 'date'
      | 'precedence'
      | 'rank'
      | 'isHolyDayOfObligation'
      | 'name'
      | 'liturgicalColors'
    > & { cycles: Partial<Pick<RomcalCyclesMetadata, 'properCycle'>> }
  >;

export interface BaseLiturgicalDayDef {
  /**
   * The unique key of the liturgical day.
   */
  key: Lowercase<string>;

  /**
   * Specify a custom locale key for this date definition, in this calendar.
   */
  customLocaleKey?: string;

  /**
   * The localized name of the liturgical day.
   */
  name: string;

  /**
   * The date function to compute the date of the liturgical day.
   */
  date: (year: number) => Dayjs | null;

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
   * The liturgical colors of a liturgical day.
   */
  liturgicalColors: LiturgicalColor[];

  /**
   * The liturgical localized colors of a liturgical day.
   */
  liturgicalColorNames: string[];

  /**
   * The specific martyrology metadata of a liturgical day, if applies.
   */
  martyrology: MartyrologyItem[];

  /**
   * The proper cycle in which the liturgical day is part.
   */
  properCycle?: ProperCycles;

  /**
   * The name of the calendar from which the liturgical day is defined.
   */
  fromCalendar: string;

  /**
   * The names and the object diff of the calendars from which this liturgical day is extended.
   * From the first extended definitions to the latest extended definition.
   */
  fromExtendedCalendars: LiturgyDayDiff[];
}

export interface BaseLiturgicalDay extends Omit<BaseLiturgicalDayDef, 'date' | 'properCycle'> {
  /**
   * The ISO8601 formatted date and time string of the liturgical day.
   */
  date: string;

  /**
   * Calendar metadata for the liturgical day.
   */
  calendar: Partial<RomcalCalendarMetadata>;

  /**
   * Cycle metadata of a liturgical day.
   */
  cycles: RomcalCyclesMetadata;

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
}

export type LiturgicalDayInput = Pick<
  BaseLiturgicalDay,
  'key' | 'customLocaleKey' | 'precedence' | 'cycles' | 'calendar' | 'fromCalendar'
> &
  Partial<
    Omit<BaseLiturgicalDay, 'key' | 'date' | 'precedence' | 'cycles' | 'calendar' | 'fromCalendar'>
  > & {
    date: string | Dayjs;
  };

/**
 * Complete Date Definition.
 */
export type LiturgicalDayDefInput = Omit<
  LiturgicalDayDef,
  'date' | 'calendar' | 'cycles' | 'weekday' | 'liturgicalColorNames'
> &
  Pick<BaseLiturgicalDayDef, 'customLocaleKey'> &
  Pick<PartialInput, 'drop'> &
  Required<Omit<PartialInput, 'liturgicalColors' | 'drop' | 'titles'>>;

/**
 * Used for the General Roman Calendar, and any Particular Calendars.
 */
export type DateDefInput = Partial<
  Pick<LiturgicalDayDef, 'customLocaleKey' | 'precedence' | 'isHolyDayOfObligation'>
> &
  PartialInput;

// Partial type def, used bellow on ProperOfTimeDateDefInput and DateDefInput.
type PartialInput = {
  /**
   * Date as a String (in the 'M-D' format), or as a Dayjs object.
   */
  date?: string | ((year: number) => Dayjs | null);

  /**
   * Link one or multiple Saints, Blessed, or any other celebrations from the Martyrology catalog.
   */
  martyrology?: MartyrologyItemPointer;

  /**
   * Replace (using an Array) or extend (using a Function) the titles of each Saints linked to this date definition.
   */
  titles?: TitlesDef;

  /**
   * The liturgical colors of the liturgical day.
   */
  liturgicalColors?: LiturgicalColors | LiturgicalColors[];

  /**
   * The proper cycle in which the liturgical day is part.
   */
  properCycle?: ProperCycles;

  /**
   * If this liturgical day must be removed from this calendar and from all those it inherits,
   * on the final calendar generated by romcal.
   */
  drop?: boolean;
};
