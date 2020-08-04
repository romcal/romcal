import dayjs from 'dayjs';
import * as Dates from '@romcal/lib/Dates';
import { ISO8601DateString, isNil } from '@romcal/utils/type-guards';
import { LITURGICAL_CYCLES } from '@romcal/constants/liturgical-cycles.constant';
import { TypesEnum } from '@romcal/enums/types.enum';
import { LiturgicalSeason } from '@romcal/types/liturgical-seasons.type';
import { PsalterWeek } from '@romcal/types/psalter-weeks.type';
import { LiturgicalColor } from '@romcal/types/liturgical-colors.type';
import { LiturgicalCycle } from '@romcal/types/liturgical-cycles.type';
import { DateItemSources } from '@romcal/types/date-item-sources.type';

export interface RomcalDateItemDataCalendar {
  weeks: number;
  week: number;
  day: number;
}

export interface RomcalSeason {
  key: LiturgicalSeason;
  value: string;
}

export interface RomcalDateItemMetadata {
  psalterWeek?: PsalterWeek;
  liturgicalColor?: LiturgicalColor;
  titles?: Array<string>;
  cycle?: LiturgicalCycle;
}

export interface RomcalDateItemData {
  season?: Array<RomcalSeason>;
  meta?: RomcalDateItemMetadata;
  calendar?: RomcalDateItemDataCalendar;
  prioritized?: boolean;
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
   * The type of celebration
   */
  type?: TypesEnum;
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
  psalterWeek?: PsalterWeek;
  liturgicalColor?: LiturgicalColor;
  titles?: Array<string>;
  cycle?: LiturgicalCycle;
}

export interface DateItemData {
  season: Array<RomcalSeason>;
  meta: DateItemMetadata;
  calendar: RomcalDateItemDataCalendar;
  prioritized?: boolean;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IRomcalDateItem {
  readonly key: string;
  readonly name: string;
  readonly date: ISO8601DateString;
  readonly type: TypesEnum;
  readonly data: DateItemData;
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
   * The type of the celebration.
   */
  public type: TypesEnum;
  /**
   * The data associated to this celebration.
   */
  public data: DateItemData;
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

  constructor({ key, name, type, date, data, _stack, baseItem }: TDateItemInput) {
    this.key = key;
    this.name = name;
    this.date = date.toISOString();
    this.type = type;
    this.data = data;

    this._id = RomcalDateItem._incrementId();
    this._stack = _stack;

    // The original default item is added to the current item as the `base` property
    if (!isNil(baseItem) && this._id !== baseItem?._id) {
      this.base = baseItem;
      this.data = {
        ...this.data,
        ...(baseItem?.data.season && { season: baseItem?.data.season }),
        ...(baseItem?.data.calendar && { calendar: baseItem?.data.calendar }),
        meta: {
          ...this.data.meta,
          psalterWeek: this.data.meta?.psalterWeek ?? baseItem?.data.meta.psalterWeek,
        },
      };
    }

    this.adjustTypeInSeason();
    this.addLiturgicalCycleMetadata();
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
        (this.type === TypesEnum.MEMORIAL || this.type === TypesEnum.OPT_MEMORIAL) &&
        this.base.type === TypesEnum.FERIA
      ) {
        this.type = TypesEnum.COMMEMORATION;
      }
      if (this.type === TypesEnum.FEAST) {
        this.type = TypesEnum.COMMEMORATION;
      }
    }
  }

  /**
   * Include liturgical cycle metadata corresponding to the liturgical year.
   */
  private addLiturgicalCycleMetadata(): void {
    const year = this.getLiturgicalStartYear();

    // Formula to calculate Sunday cycle (Year A, B, C)
    const firstSundayOfAdvent = Dates.firstSundayOfAdvent(year);
    const thisCycle: number = (year - 1963) % 3;
    const nextCycle: number = thisCycle === 2 ? 0 : thisCycle + 1;

    // If the date is on or after the First Sunday of Advent,
    // it is the next liturgical cycle
    this.data = {
      ...this.data,
      meta: {
        ...this.data.meta,
        cycle: {
          key: dayjs.utc(this.date).isSameOrAfter(firstSundayOfAdvent) ? nextCycle : thisCycle,
          value: dayjs.utc(this.date).isSameOrAfter(firstSundayOfAdvent)
            ? LITURGICAL_CYCLES[nextCycle]
            : LITURGICAL_CYCLES[thisCycle],
        },
      },
    };
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
 * Checks if a value is a [[DateItem]]
 * @param value The value that could be an instance of [[IDateItem]]
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isDateItem = (value: Record<string, any>): value is IRomcalDateItem => {
  const { key, name, date, type } = value;
  return !isNil(key) && !isNil(name) && !isNil(date) && !isNil(type);
};
