import { Ranks, RanksFromPrecedence } from '../constants/ranks';
import { LiturgicalSeason, LiturgicalSeasons } from '../constants/seasons';
import { LiturgicalPeriods } from '../constants/periods';
import dayjs, { Dayjs } from 'dayjs';
import {
  isLiturgicalColor,
  LiturgicalColors,
  LiturgicalColor,
} from '../constants/colors';
import { Precedences } from '../constants/precedences';
import { MartyrologyItem } from '../../../catalog/martyrology';
import { Titles } from '../../../constants/martyrology-metadata';
import {
  ProperCycles,
  PsalterWeeksCycles,
  SundaysCycles,
  WeekdaysCycles,
} from '../constants/cycles';

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
  startOfLiturgicalYear: Date;

  /**
   * The last day of the liturgical day, i.e. the last Saturday of Ordinary Time, in the 34th week.
   */
  endOfLiturgicalYear: Date;

  /**
   * The first day of the current liturgical season.
   */
  startOfSeason: Date;

  /**
   * The last day of the current liturgical season.
   */
  endOfSeason: Date;
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
  // rankName: string;

  /**
   * Holy days of obligation are days on which the faithful are expected to attend Mass,
   * and engage in rest from work and recreation.
   */
  isHolyDayOfObligation: boolean;

  /**
   * The liturgical localized colors of a liturgical day.
   */
  // liturgicalColorNames: string[];

  /**
   * Season keys to which the liturgical day is a part.
   */
  seasons: LiturgicalSeasons[];

  /**
   * Season localized name to which the liturgical day is a part.
   */
  // seasonNames: string[];

  /**
   * Period keys to which the liturgical day is a part.
   */
  periods: LiturgicalPeriods[];

  /**
   * The liturgical colors of a liturgical day.
   */
  liturgicalColors: LiturgicalColor[];

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
    Omit<
      BaseLiturgicalDay,
      'key' | 'date' | 'precedence' | 'cycles' | 'calendar' | 'fromCalendar'
    >
  > & {
    date: string | Dayjs;
  };

export default class LiturgicalDay implements BaseLiturgicalDay {
  key: string;
  date: string;
  precedence: Precedences;
  rank: Ranks;
  isHolyDayOfObligation: boolean;
  name: string;
  seasons: LiturgicalSeasons[];
  periods: LiturgicalPeriods[];
  liturgicalColors: LiturgicalColor[];
  martyrology: MartyrologyItem[];
  cycles: RomcalCyclesMetadata;
  calendar: Partial<RomcalCalendarMetadata>;
  weekday?: LiturgicalDay;
  fromCalendar: string;
  fromExtendedCalendars: LiturgyDayDiff[];

  constructor(day: LiturgicalDayInput) {
    this.key = day.key;
    this.date = dayjs.isDayjs(day.date) ? day.date.toISOString() : day.date;
    this.precedence = day.precedence;
    this.rank = LiturgicalDay.precedenceToRank(day.precedence, day.date);
    this.isHolyDayOfObligation = !!day.isHolyDayOfObligation;
    this.name = day.name ?? day.key;
    this.seasons = day.seasons ?? [];
    this.periods = day.periods ?? [];
    this.cycles = day.cycles;
    this.calendar = day.calendar;

    this.liturgicalColors = LiturgicalDay.checkOrDetermineLiturgicalColors(
      dayjs.isDayjs(day.date) ? day.date : dayjs(day.date),
      this.rank,
      this.seasons,
      day.liturgicalColors,
      day.martyrology ?? [],
    );

    this.martyrology = day.martyrology ?? [];

    if (day.weekday) {
      this.weekday = day.weekday;
    } else {
      delete this.weekday;
    }

    this.fromCalendar = day.fromCalendar;
    this.fromExtendedCalendars = day.fromExtendedCalendars ?? [];
  }

  private static precedenceToRank(
    precedence: Precedences,
    date: string | Dayjs,
  ): Ranks {
    // Easter Sunday
    if (precedence === Precedences.Triduum_1 && dayjs(date).day() === 0) {
      return Ranks.SOLEMNITY;
    }

    return RanksFromPrecedence[precedence];
  }

  /**
   * Check the provided liturgical color and return it in the good type,
   * or if not provided, try to determine the right color for the liturgical day.
   * @private
   * @param date The date of the liturgical day
   * @param rank The rank of the liturgical day
   * @param seasons The season(s) of the liturgical day
   * @param liturgicalColors The liturgical color(s) of the liturgical day, if defined
   * @param martyrology The martyrology items (if available) to retrieve their titles.
   */
  private static checkOrDetermineLiturgicalColors(
    date: Dayjs,
    rank: Ranks,
    seasons: LiturgicalSeason[],
    liturgicalColors: LiturgicalColor[] | undefined,
    martyrology: MartyrologyItem[],
  ): LiturgicalColor[] {
    // A liturgical color(s) has already been defined, nothing more to do:
    // returns the color(s) as it, if the color type(s) is/are valid.
    if (Array.isArray(liturgicalColors)) {
      const validated = liturgicalColors.filter((color) =>
        isLiturgicalColor(color),
      );
      if (validated.length > 0) return validated;
    }

    // No liturgical color has been defined
    // Now try to find the right default color...

    // Solemnity, Fest or Memorial:
    if (
      rank === Ranks.SOLEMNITY ||
      rank === Ranks.FEAST ||
      rank === Ranks.MEMORIAL
    ) {
      // The mass of a Memorial during Lent and in Advent from 17 December is not celebrated.
      // In this case the color remain the default one of the season.
      if (
        rank === Ranks.MEMORIAL &&
        // During Lent:
        (seasons?.includes(LiturgicalSeasons.LENT) ||
          // During Advent from 17 December:
          (seasons?.includes(LiturgicalSeasons.ADVENT) &&
            date.month() === 11 &&
            date.date() >= 17))
      ) {
        return [LiturgicalColors.PURPLE];
      }

      // - Martyrs are red.
      if (martyrology.some((m) => (m.titles ?? []).includes(Titles.Martyr))) {
        return [LiturgicalColors.RED];
      }

      // - Otherwise it's white.
      return [LiturgicalColors.WHITE];
    }

    // Weekdays and Sundays:
    if (rank === Ranks.WEEKDAY || rank === Ranks.SUNDAY) {
      // - during Lent and Advent.
      if (
        [LiturgicalSeasons.LENT, LiturgicalSeasons.ADVENT].some((season) =>
          seasons?.includes(season),
        )
      ) {
        return [LiturgicalColors.PURPLE];
      }

      // - during the Ordinary Time.
      if (seasons?.includes(LiturgicalSeasons.ORDINARY_TIME)) {
        return [LiturgicalColors.GREEN];
      }
    }

    // During Easter Time, Christmas Time, and for any other use cases.
    return [LiturgicalColors.WHITE];
  }
}
