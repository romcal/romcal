import dayjs from 'dayjs';
import * as Dates from '@romcal/lib/Dates';
import { ISO8601DateString, isNil } from '@romcal/utils/type-guards';
import {
  LITURGICAL_FERIAL_CYCLES,
  LITURGICAL_SUNDAY_CYCLES,
  PSALTER_WEEKS,
} from '@romcal/constants/liturgical-cycles.constant';
import { RanksEnum } from '@romcal/enums/ranks.enum';
import { LiturgicalSeason } from '@romcal/types/liturgical-seasons.type';
import { LiturgicalColor } from '@romcal/types/liturgical-colors.type';
import { RomcalCycles, RomcalFerialCycle, RomcalSundayCycle } from '@romcal/types/liturgical-cycles.type';
import { DateItemSources } from '@romcal/types/date-item-sources.type';

export interface RomcalSeason {
  key: LiturgicalSeason;
  value: string;
}

export interface RomcalDateItemMetadata {
  liturgicalColor?: LiturgicalColor;
  titles?: Array<string>;
}

export interface RomcalDateItemData {
  season?: Array<RomcalSeason>;
  meta?: RomcalDateItemMetadata;
}

export interface RomcalDateItemCalendar {
  totalWeeksInGregorianYear: number;
  totalWeeksInLiturgicalYear: number;
  weekOfGregorianYear: number;
  weekOfLiturgicalYear: number;
  weekOfSeason: number;
  dayOfGregorianYear: number;
  dayOfLiturgicalYear: number;
  dayOfSeason: number;
  dayOfWeek: number; // 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 is Sunday, 6 is Saturday
  dayOfWeekCountInMonth: number;
  startOfLiturgicalYear: Date | string;
  endOfLiturgicalYear: Date | string;
  easter: Date | string;
}

/**
 * This interface is used internally by romcal
 * during the construction of the liturgical calendar.
 * All properties except `date` is marked optional as
 * the the object is constructed in stages. This interface
 * should not be used in consumer applications.
 */
export interface RomcalDateItemInput {
  /**
   * The human readable and localized name of this celebration
   */
  name?: string;
  /**
   * The unique key that identifies this celebration
   */
  key?: string;
  /**
   * The rank of celebration
   */
  rank?: RanksEnum;
  /**
   * If a celebration should have always precedence, without rank consideration.
   */
  prioritized?: boolean;
  /**
   * Cycle metadata of a celebration.
   */
  cycles?: RomcalCycles;
  /**
   * The calendar metadata of a celebration.
   */
  calendar?: RomcalDateItemCalendar;
  /**
   * The ISO8601 formatted date and time string of the celebration.
   */
  date: dayjs.Dayjs;
  data?: RomcalDateItemData;
  /**
   * The source of the date item.
   *
   * This value is used when localizing dates so that the [[Locales.localizeDates]] function knows
   * which subtree in the locale file to look for.
   *
   * A special key, "temporal", may be used when you do not wish to specify any subtree but rather
   * provide the entire path (as a period delimited string) to the [[Locales.localizeDates]] function
   * to lookup.
   */
  source?: DateItemSources;
  drop?: boolean;
}

export interface DateItemMetadata {
  liturgicalColor?: LiturgicalColor;
  titles?: Array<string>;
}

export interface DateItemData {
  season: Array<RomcalSeason>;
  meta: DateItemMetadata;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IRomcalDateItem {
  readonly key: string;
  readonly name: string;
  readonly date: ISO8601DateString;
  readonly rank: RanksEnum;
  readonly data: DateItemData;
  readonly prioritized: boolean;
  readonly cycles: RomcalCycles;
  readonly calendar: RomcalDateItemCalendar;
  readonly base?: RomcalDateItem;
  readonly _id: number;
  readonly _stack: number;
}

export type TDateItemInput = Omit<IRomcalDateItem, '_id' | 'base' | 'date'> &
  Readonly<{
    baseItem?: RomcalDateItem;
    date: dayjs.Dayjs;
  }>;

export class RomcalDateItem implements IRomcalDateItem {
  /**
   * The unique key of the celebration.
   */
  public key: string;
  /**
   * The localized name of the celebration.
   */
  public name: string;
  /**
   * The ISO8601 formatted date and time string of the celebration.
   */
  public date: ISO8601DateString;
  /**
   * The rank of the celebration.
   */
  public rank: RanksEnum;
  /**
   * The data associated to this celebration.
   */
  public data: DateItemData;
  /**
   * If this celebration should have always precedence, without rank consideration.
   */
  public prioritized: boolean;
  /**
   * Cycle metadata of a celebration.
   */
  public cycles: RomcalCycles;
  /**
   * Calendar metadata for the celebration.
   */
  public calendar: RomcalDateItemCalendar;
  /**
   * A previous celebration on the same day that was overridden by the current one.
   */
  public base: RomcalDateItem | undefined;
  /**
   * Internal index used by romcal for calendar generation.
   */
  public _id: number;
  /**
   * Internal index used by romcal for calendar generation.
   */
  public _stack: number;

  static latestId: number;

  constructor({ key, name, rank, date, data, prioritized, calendar, _stack, baseItem }: TDateItemInput) {
    this.key = key;
    this.name = name;
    this.date = date.toISOString();
    this.rank = rank;
    this.data = data;
    this.prioritized = prioritized;
    this.cycles = this.addLiturgicalCycleMetadata(calendar || baseItem?.calendar);
    this.calendar = calendar || baseItem?.calendar;

    this._id = RomcalDateItem._incrementId();
    this._stack = _stack;

    // The original default item is added to the current item as the `base` property
    if (!isNil(baseItem) && this._id !== baseItem?._id && baseItem.name !== this.name) {
      this.base = baseItem;
      this.data = {
        ...this.data,
        ...(baseItem?.data.season && { season: baseItem?.data.season }),
      };
    }

    this.adjustTypeInSeason();
  }

  /**
   * Runs type management on celebrations given their specific types.
   *
   * **Special type management in the season of LENT.**
   *
   * Memorials or Optional Memorials that fall on a feria
   * in the season of Lent are reduced to Commemorations.
   *
   * Feasts occurring in the season of Lent are also reduced to
   * Commemorations.
   */
  private adjustTypeInSeason(): void {
    if (this.base?.data.season?.some(season => season.key === 'LENT')) {
      if (
        (this.rank === RanksEnum.MEMORIAL || this.rank === RanksEnum.OPT_MEMORIAL) &&
        this.base.rank === RanksEnum.FERIA
      ) {
        this.rank = RanksEnum.COMMEMORATION;
      }
      if (this.rank === RanksEnum.FEAST) {
        this.rank = RanksEnum.COMMEMORATION;
      }
    }
  }

  /**
   * Include liturgical cycle metadata corresponding to the liturgical year.
   */
  private addLiturgicalCycleMetadata(calendar: RomcalDateItemCalendar): RomcalCycles {
    const year = this.getLiturgicalStartYear();
    const firstSundayOfAdvent = Dates.firstSundayOfAdvent(year);

    let sundayCycle: RomcalSundayCycle;
    let ferialCycle: RomcalFerialCycle;

    // Formula to calculate Sunday cycle (Year A, B, C)
    const thisSundayCycleIndex: number = (year - 1963) % 3;
    const nextSundayCycleIndex: number = thisSundayCycleIndex === 2 ? 0 : thisSundayCycleIndex + 1;

    // If the date is on or after the First Sunday of Advent,
    // it is the next liturgical cycle
    if (dayjs.utc(this.date).isSameOrAfter(firstSundayOfAdvent)) {
      sundayCycle = LITURGICAL_SUNDAY_CYCLES[nextSundayCycleIndex];
      ferialCycle = LITURGICAL_FERIAL_CYCLES[year % 2];
    } else {
      sundayCycle = LITURGICAL_SUNDAY_CYCLES[thisSundayCycleIndex];
      ferialCycle = LITURGICAL_FERIAL_CYCLES[(year + 1) % 2];
    }

    // Psalter week cycle restart to 1 at the beginning of each season.
    // Except during the four first days of lent (ash wednesday to the next saturday),
    // which are in week 4, to start on week 1 after the first sunday of lent.
    const weekIndex = (calendar.weekOfSeason % 4) - 1;
    const psalterWeek = PSALTER_WEEKS[weekIndex > -1 ? weekIndex : 3];

    return { sundayCycle, ferialCycle, psalterWeek };
  }

  /**
   * Get the liturgical starting year from a DateItem
   */
  private getLiturgicalStartYear(): number {
    const currentYear = dayjs.utc(this.date).year();
    const firstSundayOfAdvent = Dates.firstSundayOfAdvent(currentYear);
    return dayjs.utc(this.date).isBefore(firstSundayOfAdvent) ? currentYear - 1 : currentYear;
  }

  /**
   * Increment the ID based of the [[DateItem]] instance
   */
  static _incrementId(): number {
    return isNil(this.latestId) ? (this.latestId = 0) : this.latestId++;
  }
}

/**
 * Checks if a value is a [[RomcalDateItem]]
 * @param value The value that could be an instance of [[IDateItem]]
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isRomcalDateItem = (value: Record<string, any>): value is IRomcalDateItem => {
  const { key, name, date, rank } = value;
  return !isNil(key) && !isNil(name) && !isNil(date) && !isNil(rank);
};
