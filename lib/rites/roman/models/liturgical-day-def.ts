import { LiturgicalColor, LiturgicalColors } from '@roman-rite/constants/colors';
import { LiturgicalPeriods } from '@roman-rite/constants/periods';
import { Precedences } from '@roman-rite/constants/precedences';
import { Ranks, RanksFromPrecedence } from '@roman-rite/constants/ranks';
import { LiturgicalSeason, LiturgicalSeasons } from '@roman-rite/constants/seasons';
import { RomcalConfig } from '@roman-rite/models/config';
import {
  BaseLiturgicalDayDef,
  LiturgicalDayDefInput,
  LiturgyDayDiff,
} from '@roman-rite/types/liturgical-day';
import { Titles } from '@romcal/constants/martyrology-metadata';
import { MartyrologyItem } from '@romcal/types/martyrology';
import dayjs, { Dayjs } from 'dayjs';

export default class LiturgicalDayDef implements BaseLiturgicalDayDef {
  readonly #config: RomcalConfig;
  key: Lowercase<string>;
  customLocaleKey?: Lowercase<string>;
  date: (year: number) => Dayjs | null;
  name: string;
  precedence: Precedences;
  rank: Ranks;
  rankName: string;
  isHolyDayOfObligation: boolean;
  isOptional: boolean;
  seasons: LiturgicalSeasons[];
  seasonNames: string[];
  periods: LiturgicalPeriods[];
  liturgicalColors: LiturgicalColor[];
  liturgicalColorNames: string[];
  martyrology: MartyrologyItem[];
  fromCalendar: string;
  fromExtendedCalendars: LiturgyDayDiff[];

  constructor(input: LiturgicalDayDefInput, config: RomcalConfig) {
    this.#config = config;
    this.key = input.key;
    this.customLocaleKey = input.customLocaleKey;
    this.date =
      typeof input.date === 'string' ? (year) => dayjs(`${year}-${input.date}`) : input.date;
    this.name = input.name;
    this.precedence = input.precedence;
    this.rank = LiturgicalDayDef.precedenceToRank(input.precedence, input.key);
    this.rankName = config.toRankName(this.rank);
    this.isHolyDayOfObligation = input.isHolyDayOfObligation;
    this.isOptional = input.isOptional;
    this.seasons = input.seasons;
    this.seasonNames = this.seasons.map((key) => config.toSeasonName(key));
    this.periods = input.periods;
    this.liturgicalColors = LiturgicalDayDef.checkOrDetermineLiturgicalColors(
      this.rank,
      this.seasons,
      input.liturgicalColors,
      input.martyrology ?? [],
    );
    this.liturgicalColorNames = this.liturgicalColors.map((key) => config.toColorName(key));
    this.martyrology = input.martyrology ?? [];
    this.fromCalendar = input.fromCalendar;
    this.fromExtendedCalendars = input.fromExtendedCalendars;
  }

  /**
   * Return the corresponding Rank that correspond to a Precedence.
   * @private
   * @param precedence The Precedence type of the liturgical day.
   * @param key The key of the liturgical day.
   * @private
   */
  static precedenceToRank(precedence: Precedences, key: string): Ranks {
    // Easter Sunday
    if (precedence === Precedences.Triduum_1 && key === 'easter_sunday') {
      return Ranks.SOLEMNITY;
    }

    return RanksFromPrecedence[precedence];
  }

  /**
   * Check the provided liturgical color and return it in the good type,
   * or if not provided, try to determine the right color for the liturgical day.
   * @private
   * @param rank The rank of the liturgical day
   * @param seasons The season(s) of the liturgical day
   * @param liturgicalColors The liturgical color(s) of the liturgical day, if defined
   * @param martyrology The martyrology items (if available) to retrieve their titles.
   */
  static checkOrDetermineLiturgicalColors(
    rank: Ranks,
    seasons: LiturgicalSeason[],
    liturgicalColors: LiturgicalColor[] | undefined,
    martyrology: MartyrologyItem[],
  ): LiturgicalColor[] {
    // A liturgical color(s) has already been defined, nothing more to do:
    // returns the color(s) as it, if the color type(s) is/are valid.
    // Note: it's also possible to define 0 colors (e.g., Holy Saturday,
    // or Memorials during Lent or Advent from December 17).
    if (Array.isArray(liturgicalColors)) return liturgicalColors;

    // No liturgical color has been defined
    // Now try to find the right default color...

    // Solemnity, Fest or Memorial:
    if (rank === Ranks.SOLEMNITY || rank === Ranks.FEAST || rank === Ranks.MEMORIAL) {
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
