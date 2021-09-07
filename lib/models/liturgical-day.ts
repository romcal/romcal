import { StringMap } from 'i18next';
import { Color } from '../constants/colors';
import { PROPER_OF_TIME_NAME } from '../constants/general-calendar-names';
import { PatronTitle, Title } from '../constants/martyrology-metadata';
import { Period, Periods } from '../constants/periods';
import { Precedence, Precedences } from '../constants/precedences';
import { Rank, Ranks } from '../constants/ranks';
import { Season, Seasons } from '../constants/seasons';
import { Key } from '../types/common';
import {
  BaseLiturgicalDay,
  DateDef,
  LiturgyDayDiff,
  RomcalCalendarMetadata,
  RomcalCyclesMetadata,
} from '../types/liturgical-day';
import { LiturgicalDayConfigOutput } from '../types/liturgical-day-config';
import { MartyrologyItem } from '../types/martyrology';
import { LiturgicalDayConfig } from './liturgical-day-config';
import LiturgicalDayDef from './liturgical-day-def';

export default class LiturgicalDay implements BaseLiturgicalDay {
  readonly #liturgicalDayDef: LiturgicalDayDef;
  readonly #liturgicalDayConfig: LiturgicalDayConfig;
  readonly key: Key;
  readonly date: string;
  readonly dateDef: DateDef;
  readonly precedence: Precedence;
  readonly rank: Rank;
  readonly isHolyDayOfObligation: boolean;
  isOptional: boolean;
  readonly i18nDef: [string] | [string, StringMap | string];
  readonly seasons: Season[];
  readonly periods: Period[];
  readonly colors: Color[];
  readonly martyrology: MartyrologyItem[];
  readonly titles: (Title | PatronTitle)[];
  readonly calendar: RomcalCalendarMetadata;
  readonly cycles: RomcalCyclesMetadata;
  readonly fromCalendar: Lowercase<string>;
  readonly fromExtendedCalendars: LiturgyDayDiff[];
  weekday?: LiturgicalDay;

  public get name(): string {
    return this.#liturgicalDayDef.name;
  }

  public get rankName(): string {
    return this.#liturgicalDayDef.rankName;
  }

  #colorNames?: string[];
  public get colorNames(): string[] {
    if (this.#colorNames !== undefined) return this.#colorNames;
    return (this.#colorNames = this.#liturgicalDayConfig.config.getLiturgicalColorNames(this.colors));
  }

  #seasonNames?: string[];
  public get seasonNames(): string[] {
    if (this.#seasonNames !== undefined) return this.#seasonNames;
    return (this.#seasonNames = this.#liturgicalDayConfig.config.getSeasonNames(this.seasons));
  }

  /**
   * Get the calendar configuration within this liturgical day is computed
   */
  public get config(): LiturgicalDayConfigOutput {
    return this.#liturgicalDayConfig.getConfigObject();
  }

  /**
   * Get the liturgical day definition
   */
  public get definition(): LiturgicalDayDef {
    return this.#liturgicalDayDef;
  }

  constructor(
    def: LiturgicalDayDef,
    date: Date,
    liturgicalDayConfig: LiturgicalDayConfig,
    calendar: RomcalCalendarMetadata,
    cycles: RomcalCyclesMetadata,
    baseData: LiturgicalDay | null,
    weekday: LiturgicalDay | null,
  ) {
    this.#liturgicalDayDef = def;
    this.#liturgicalDayConfig = liturgicalDayConfig;
    this.key = def.key;
    this.date = date.toISOString().substr(0, 10);
    this.dateDef = def.dateDef;
    this.precedence = def.precedence;
    this.rank = def.rank;
    this.isHolyDayOfObligation = calendar.dayOfWeek === 0 ? true : def.isHolyDayOfObligation;
    this.isOptional = def.isOptional;
    this.i18nDef = def.i18nDef;
    this.seasons = baseData?.seasons ?? def.seasons;

    this.periods = baseData?.periods ?? def.periods;

    // The second Sunday after the Christmas octave can before or after the Epiphany,
    // and this can be determined from the definition of the Proper of the Time.
    // without having a liturgical year context.
    if (def.fromCalendar === PROPER_OF_TIME_NAME && this.key === 'second_sunday_after_christmas') {
      if (date.getTime() >= liturgicalDayConfig.dates.epiphany().getTime()) {
        this.periods.unshift(Periods.DaysFromEpiphany);
      } else if (date.getTime() > liturgicalDayConfig.dates.maryMotherOfGod().getTime()) {
        this.periods.unshift(Periods.DaysBeforeEpiphany);
      }
    }

    // Specify the early/late period of an ordinary time liturgical day item
    if (def.fromCalendar === PROPER_OF_TIME_NAME && this.seasons[0] === Seasons.OrdinaryTime) {
      if (date.getTime() < liturgicalDayConfig.dates.pentecostSunday().getTime()) {
        this.periods.unshift(Periods.EarlyOrdinaryTime);
      } else {
        this.periods.unshift(Periods.LateOrdinaryTime);
      }
    }

    /**
     * UNLY #16. Privileged weekdays takes precedences over memorials.
     * In this situation, we still can refer to the memorial, but the celebrated
     * mass must be the mass of the weekday, not the memorial.
     * In romcal, the liturgical colors are thus not indicated.
     *
     * UNLY #16 a.
     * Ash Wednesday and the weekdays of Holy Week, from Monday up to and including
     * Thursday, take precedence over all other celebrations.
     *
     * UNLY #16 b.
     * The weekdays of Advent from 17 December up to and including 24 December
     * and all the weekdays of Lent have precedence over Obligatory Memorials.
     */
    this.colors =
      weekday?.precedence === Precedences.PrivilegedWeekday_9 && this.rank === Ranks.Memorial ? [] : def.colors;

    this.martyrology = def.martyrology;
    this.titles = def.titles;
    this.calendar = baseData?.calendar ?? calendar;
    this.cycles = cycles;
    this.fromCalendar = def.fromCalendar;
    this.fromExtendedCalendars = def.fromExtendedCalendars;

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
