import { LiturgicalColors } from '@romcal/constants/colors';
import { PatronTitles, Titles } from '@romcal/constants/martyrology-metadata';
import { LiturgicalPeriods } from '@romcal/constants/periods';
import { Precedences } from '@romcal/constants/precedences';
import { Ranks } from '@romcal/constants/ranks';
import { LiturgicalSeasons } from '@romcal/constants/seasons';
import { PROPER_OF_TIME_NAME } from '@romcal/general-calendar/proper-of-time';
import { LiturgicalDayConfig } from '@romcal/models/liturgical-day-config';
import LiturgicalDayDef from '@romcal/models/liturgical-day-def';
import {
  BaseLiturgicalDay,
  DateDef,
  Key,
  LiturgyDayDiff,
  RomcalCalendarMetadata,
  RomcalCyclesMetadata,
} from '@romcal/types/liturgical-day';
import { LiturgicalDayConfigOutput } from '@romcal/types/liturgical-day-config';
import { MartyrologyItem } from '@romcal/types/martyrology';
import { Dayjs } from 'dayjs';
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

  #liturgicalColorNames?: string[];
  public get liturgicalColorNames(): string[] {
    if (this.#liturgicalColorNames !== undefined) return this.#liturgicalColorNames;
    return (this.#liturgicalColorNames = this.#liturgicalDayConfig.config.getLiturgicalColorNames(
      this.liturgicalColors,
    ));
  }

  public get seasonNames(): string[] {
    return this.#liturgicalDayDef.seasonNames;
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
    date: Dayjs,
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
    this.isHolyDayOfObligation = calendar.dayOfWeek === 0 ?? def.isHolyDayOfObligation;
    this.isOptional = def.isOptional;
    this.i18nDef = def.i18nDef;
    this.seasons = baseData?.seasons ?? def.seasons;

    this.periods = baseData?.periods ?? def.periods;

    // The second Sunday after the Christmas octave can before or after the Epiphany,
    // and this can be determined from the definition of the Proper of the Time.
    // without having a liturgical year context.
    if (def.fromCalendar === PROPER_OF_TIME_NAME && this.key === 'second_sunday_after_christmas') {
      if (date.isSameOrAfter(liturgicalDayConfig.dates.epiphany(), 'date')) {
        this.periods.unshift(LiturgicalPeriods.DAYS_FROM_EPIPHANY);
      } else if (date.isAfter(liturgicalDayConfig.dates.maryMotherOfGod(), 'date')) {
        this.periods.unshift(LiturgicalPeriods.DAYS_BEFORE_EPIPHANY);
      }
    }

    // Specify the early/late period of an ordinary time liturgical day item
    if (
      def.fromCalendar === PROPER_OF_TIME_NAME &&
      this.seasons[0] === LiturgicalSeasons.ORDINARY_TIME
    ) {
      if (
        date.toDate().getTime() < liturgicalDayConfig.dates.pentecostSunday().toDate().getTime()
      ) {
        this.periods.unshift(LiturgicalPeriods.EARLY_ORDINARY_TIME);
      } else {
        this.periods.unshift(LiturgicalPeriods.LATE_ORDINARY_TIME);
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
    this.liturgicalColors =
      weekday?.precedence === Precedences.PrivilegedWeekday_9 && this.rank === Ranks.MEMORIAL
        ? []
        : def.liturgicalColors;

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
