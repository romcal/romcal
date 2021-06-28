import { LiturgicalColor } from '@roman-rite/constants/colors';
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

export interface BaseLiturgicalDay {
  /**
   * The unique key of the liturgical day.
   */
  key: string;

  /**
   * The localized name of the liturgical day.
   */
  name: string;

  /**
   * The ISO8601 formatted date and time string of the liturgical day.
   */
  date: string;

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
   * The liturgical localized colors of a liturgical day.
   */
  liturgicalColorNames: string[];

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
  liturgicalColors?: LiturgicalColor[];

  /**
   * The specific martyrology metadata of a liturgical day, if applies.
   */
  martyrology: MartyrologyItem[];

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

  /**
   * Cycle metadata of a liturgical day.
   */
  cycles: RomcalCyclesMetadata;

  /**
   * Calendar metadata for the liturgical day.
   */
  calendar: Partial<RomcalCalendarMetadata>;

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

export type LiturgicalDayInput = Pick<
  BaseLiturgicalDay,
  'key' | 'precedence' | 'cycles' | 'calendar' | 'fromCalendar'
> &
  Partial<
    Omit<BaseLiturgicalDay, 'key' | 'date' | 'precedence' | 'cycles' | 'calendar' | 'fromCalendar'>
  > & {
    date: string | Dayjs;
  };
