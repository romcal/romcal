import { isLiturgicalColor, LiturgicalColor, LiturgicalColors } from '@roman-rite/constants/colors';
import { LiturgicalPeriods } from '@roman-rite/constants/periods';
import { Precedences } from '@roman-rite/constants/precedences';
import { Ranks, RanksFromPrecedence } from '@roman-rite/constants/ranks';
import { LiturgicalSeason, LiturgicalSeasons } from '@roman-rite/constants/seasons';
import { RomcalConfig } from '@roman-rite/models/config';
import {
  BaseLiturgicalDay,
  LiturgicalDayInput,
  LiturgyDayDiff,
  RomcalCalendarMetadata,
  RomcalCyclesMetadata,
} from '@roman-rite/types/liturgical-day';
import { Titles } from '@romcal/constants/martyrology-metadata';
import { MartyrologyItem } from '@romcal/types/martyrology';
import dayjs, { Dayjs } from 'dayjs';

export default class LiturgicalDay implements BaseLiturgicalDay {
  readonly key: string;
  readonly date: string;
  readonly precedence: Precedences;
  readonly rank: Ranks;
  readonly rankName: string;
  readonly isHolyDayOfObligation: boolean;
  isOptional: boolean;
  readonly name: string;
  readonly seasons: LiturgicalSeasons[];
  readonly seasonNames: string[];
  readonly periods: LiturgicalPeriods[];
  readonly liturgicalColors: LiturgicalColor[];
  readonly liturgicalColorNames: string[];
  readonly martyrology: MartyrologyItem[];
  readonly cycles: RomcalCyclesMetadata;
  readonly calendar: Partial<RomcalCalendarMetadata>;
  weekday?: LiturgicalDay;
  readonly fromCalendar: string;
  readonly fromExtendedCalendars: LiturgyDayDiff[];

  readonly #config: RomcalConfig;

  constructor(day: LiturgicalDayInput, config: RomcalConfig) {
    this.#config = config;
    this.key = day.key;
    this.date = dayjs.isDayjs(day.date) ? day.date.toISOString() : day.date;
    this.precedence = day.precedence;
    this.rank = LiturgicalDay.#precedenceToRank(day.precedence, day.date);
    this.rankName = config.toRankName(this.rank);
    this.isHolyDayOfObligation = !!day.isHolyDayOfObligation;
    this.isOptional = day.isOptional ?? false;
    this.name = day.name ?? day.key;
    this.seasons = day.seasons ?? [];
    this.seasonNames = this.seasons.map((key) => config.toSeasonName(key));
    this.periods = day.periods ?? [];
    this.cycles = day.cycles;
    this.calendar = day.calendar;

    this.liturgicalColors = LiturgicalDay.#checkOrDetermineLiturgicalColors(
      dayjs.isDayjs(day.date) ? day.date : dayjs(day.date),
      this.rank,
      this.seasons,
      day.liturgicalColors,
      day.martyrology ?? [],
    );

    this.liturgicalColorNames = this.liturgicalColors.map((key) => config.toColorName(key));

    this.martyrology = day.martyrology ?? [];

    if (day.weekday) {
      this.weekday = day.weekday;
    } else {
      delete this.weekday;
    }

    this.fromCalendar = day.fromCalendar;
    this.fromExtendedCalendars = day.fromExtendedCalendars ?? [];
  }

  /**
   * Return the corresponding Rank that correspond to a Precedence.
   * @private
   * @param precedence The Precedence type of the liturgical day.
   * @param date The date of the liturgical day.
   * @private
   */
  static #precedenceToRank(precedence: Precedences, date: string | Dayjs): Ranks {
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
  static #checkOrDetermineLiturgicalColors(
    date: Dayjs,
    rank: Ranks,
    seasons: LiturgicalSeason[],
    liturgicalColors: LiturgicalColor[] | undefined,
    martyrology: MartyrologyItem[],
  ): LiturgicalColor[] {
    // A liturgical color(s) has already been defined, nothing more to do:
    // returns the color(s) as it, if the color type(s) is/are valid.
    if (Array.isArray(liturgicalColors)) {
      const validated = liturgicalColors.filter((color) => isLiturgicalColor(color));
      if (validated.length > 0) return validated;
    }

    // No liturgical color has been defined
    // Now try to find the right default color...

    // Solemnity, Fest or Memorial:
    if (rank === Ranks.SOLEMNITY || rank === Ranks.FEAST || rank === Ranks.MEMORIAL) {
      // The mass of a Memorial during Lent and in Advent from 17 December is not celebrated.
      // In this case the color remain the default one of the season.
      if (
        rank === Ranks.MEMORIAL &&
        // During Lent:
        (seasons?.includes(LiturgicalSeasons.LENT) ||
          // Or during Advent from 17 December:
          (seasons?.includes(LiturgicalSeasons.ADVENT) && date.month() === 11 && date.date() >= 17))
      ) {
        // UNLY #16b: The weekdays of Advent from 17 December up to and including 24 December
        // and all the weekdays of Lent have precedence over Obligatory Memorials.
        //
        // In this situation, we do not output liturgical colors,
        // since the mass for this memorial can't be celebrated
        // (which do not prevent to commemorate this memorial within this liturgical weekday).
        return [];
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
