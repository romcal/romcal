import { LiturgicalColors } from '@romcal/constants/colors';
import { ProperCycles } from '@romcal/constants/cycles';
import { PatronTitles, Titles } from '@romcal/constants/martyrology-metadata';
import { LiturgicalPeriods } from '@romcal/constants/periods';
import { Precedences } from '@romcal/constants/precedences';
import { Ranks } from '@romcal/constants/ranks';
import { LiturgicalSeasons } from '@romcal/constants/seasons';
import LiturgicalDayDef from '@romcal/models/liturgical-day-def';
import { LiturgicalDayConfig } from '@romcal/types/calendar';
import { BaseLiturgicalDay, DateDef, Key, LiturgyDayDiff } from '@romcal/types/liturgical-day';
import { MartyrologyItem } from '@romcal/types/martyrology';
import { StringMap } from 'i18next';

export default class LiturgicalDay implements BaseLiturgicalDay {
  readonly #liturgicalDayDef: LiturgicalDayDef;
  readonly #liturgicalDayConfig: LiturgicalDayConfig;
  readonly key: Key;
  readonly date: string;
  readonly dateDef: DateDef;
  readonly precedence: Precedences;
  readonly rank: Ranks;
  readonly isHolyDayOfObligation: boolean;
  isOptional: boolean;
  readonly i18nDef: [string] | [string, StringMap | string];
  readonly seasons: LiturgicalSeasons[];
  readonly periods: LiturgicalPeriods[];
  readonly liturgicalColors: LiturgicalColors[];
  readonly martyrology: MartyrologyItem[];
  readonly titles: (Titles | PatronTitles)[];
  readonly properCycle: ProperCycles;
  readonly fromCalendar: Lowercase<string>;
  readonly fromExtendedCalendars: LiturgyDayDiff[];
  weekday?: LiturgicalDay;

  public get name(): string {
    return this.#liturgicalDayDef.name;
  }

  public get rankName(): string {
    return this.#liturgicalDayDef.rankName;
  }

  public get liturgicalColorNames(): string[] {
    return this.#liturgicalDayDef.liturgicalColorNames;
  }

  public get seasonNames(): string[] {
    return this.#liturgicalDayDef.seasonNames;
  }

  constructor(
    liturgicalDayDef: LiturgicalDayDef,
    baseData: LiturgicalDay | null,
    date: string,
    liturgicalDayConfig: LiturgicalDayConfig,
    weekday: LiturgicalDay | null,
  ) {
    this.#liturgicalDayDef = liturgicalDayDef;
    this.#liturgicalDayConfig = liturgicalDayConfig;
    this.key = liturgicalDayDef.key;
    this.date = date.substr(0, 10);
    this.dateDef = liturgicalDayDef.dateDef;
    this.precedence = liturgicalDayDef.precedence;
    this.rank = liturgicalDayDef.rank;
    this.isHolyDayOfObligation = liturgicalDayDef.isHolyDayOfObligation;
    this.isOptional = liturgicalDayDef.isOptional;
    this.i18nDef = liturgicalDayDef.i18nDef;
    this.seasons = baseData?.seasons ?? liturgicalDayDef.seasons;
    this.periods = baseData?.periods ?? liturgicalDayDef.periods;
    this.liturgicalColors = liturgicalDayDef.liturgicalColors;
    this.martyrology = liturgicalDayDef.martyrology;
    this.titles = liturgicalDayDef.titles;
    this.properCycle = liturgicalDayDef.properCycle;
    this.fromCalendar = liturgicalDayDef.fromCalendar;
    this.fromExtendedCalendars = liturgicalDayDef.fromExtendedCalendars;

    // For Memorial and Feast celebrations only, the weekday property is added
    // containing the LiturgicalDay object of the base weekday.
    // Otherwise, this object is removed.
    if (weekday) {
      this.weekday = weekday;
    } else {
      delete this.weekday;
    }
  }
}
