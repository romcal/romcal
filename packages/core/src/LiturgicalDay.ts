import { ProperOfTimeDates } from '@romcal/proper-of-time';
import {
  Color,
  DateDef,
  DateDefException,
  i18nDef,
  LiturgicalDayDef,
  LiturgicalDayDiff,
  LiturgicalDayId,
  MartyrologyItem,
  PeriodDef,
  Precedence,
  ProperCycle,
  Rank,
  RomcalConfig,
  RomcalTitle,
  SeasonDef,
  SundayCycle,
  utcDateToDateString,
  WeekdayCycle,
} from '@romcal/shared';

import { enrichColors, enrichPeriods, enrichPrecedence, enrichRank } from './helpers';

export type LiturgicalDayParams = {
  dayDefinition: LiturgicalDayDef;
  computedDate: Date;
  baseData: LiturgicalDay | null;
  weekday: LiturgicalDay | null;
  config: RomcalConfig;
  properOfTimeDates: ProperOfTimeDates;
};

class LiturgicalDay implements LiturgicalDayDef {
  readonly #__config: RomcalConfig;
  readonly #__liturgicalDayDef: LiturgicalDayDef;

  readonly liturgicalDayId: LiturgicalDayId;
  readonly name: string;
  readonly date: string;
  readonly dateDef: DateDef;
  readonly dateExceptions?: DateDefException[];
  readonly precedence: Precedence;
  readonly rank: Rank;
  readonly rankName: string;
  readonly allowSimilarRankItems: boolean;
  readonly isHolyDayOfObligation: boolean;
  isOptional?: boolean | undefined;
  readonly seasons: SeasonDef[];
  readonly periods: PeriodDef[];
  readonly colors: Color[];
  readonly colorNames: string[];
  readonly martyrology: MartyrologyItem[];
  readonly titles: RomcalTitle[];
  readonly dayOfWeek: number;
  readonly nthDayOfWeekInMonth: number;
  readonly startOfLiturgicalYear: string;
  readonly endOfLiturgicalYear: string;
  readonly properCycle: ProperCycle;
  readonly properCycleName: string;
  readonly sundayCycle: SundayCycle;
  readonly sundayCycleName: string;
  readonly weekdayCycle: WeekdayCycle;
  readonly weekdayCycleName: string;
  readonly i18nDef: i18nDef;
  readonly fromCalendarId: string;
  readonly diff?: LiturgicalDayDiff[];
  weekday?: LiturgicalDay;

  /**
   * Get the calendar configuration within this liturgical day is computed.
   */
  public get config(): RomcalConfig {
    return this.#__config;
  }

  /**
   * Get the liturgical day definition.
   */
  public get definition(): LiturgicalDayDef {
    return this.#__liturgicalDayDef;
  }

  constructor(params: LiturgicalDayParams) {
    const { dayDefinition, computedDate, config, baseData, weekday } = params;

    this.#__config = config;
    this.#__liturgicalDayDef = dayDefinition;

    this.liturgicalDayId = dayDefinition.liturgicalDayId;
    this.name = ''; // TODO: Add the name

    this.date = utcDateToDateString(computedDate);
    if (!dayDefinition.dateDef || !baseData?.dateDef) {
      throw new Error(
        `The DateDef of the liturgical day ${dayDefinition.liturgicalDayId} is missing.`,
      );
    }
    this.dateDef = dayDefinition.dateDef ?? baseData?.dateDef;
    this.dateExceptions = dayDefinition.dateExceptions ?? baseData?.dateExceptions;

    this.precedence = enrichPrecedence(params);
    this.rank = enrichRank(params);
    this.rankName = ''; // TODO: Add the rank name

    this.allowSimilarRankItems = !!dayDefinition.allowSimilarRankItems;
    this.isHolyDayOfObligation =
      (dayDefinition.dayOfWeek ?? computedDate.getUTCDay()) === 0
        ? true
        : !!(dayDefinition.isHolyDayOfObligation ?? baseData?.isHolyDayOfObligation);
    this.isOptional = dayDefinition.isOptional ?? baseData?.isOptional;

    this.seasons = dayDefinition.seasons ?? baseData?.seasons;
    this.periods = enrichPeriods(params);
    this.colors = enrichColors(params);
    this.colorNames = []; // TODO: Add the color names
    this.martyrology = dayDefinition.martyrology ?? baseData?.martyrology;
    this.titles = dayDefinition.titles ?? baseData?.titles;

    this.dayOfWeek = dayDefinition.dayOfWeek ?? computedDate.getUTCDay();
    this.nthDayOfWeekInMonth = 0; // TODO: Add the nth day of week in month
    this.startOfLiturgicalYear = ''; // TODO: Add the start of liturgical year
    this.endOfLiturgicalYear = ''; // TODO: Add the end of liturgical year

    this.properCycle =
      dayDefinition.properCycle ?? baseData?.properCycle ?? ProperCycle.ProperOfSaints;
    this.properCycleName = ''; // TODO: Add the proper cycle name
    this.sundayCycle = SundayCycle.YearA; // TODO: Add the sunday cycle
    this.sundayCycleName = ''; // TODO: Add the sunday cycle name
    this.weekdayCycle = WeekdayCycle.Year1; // TODO: Add the weekday cycle
    this.weekdayCycleName = ''; // TODO: Add the weekday cycle name

    this.i18nDef = dayDefinition.i18nDef ?? baseData?.i18nDef;

    this.fromCalendarId = dayDefinition.fromCalendarId;
    this.diff = dayDefinition.diff;

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

export default LiturgicalDay;
