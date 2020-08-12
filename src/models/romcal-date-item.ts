import { Dayjs } from 'dayjs';
import { isNil, ISO8601DateString } from '@romcal/utils/type-guards';
import { RanksEnum } from '@romcal/enums/ranks.enum';
import { LiturgicalPeriod, LiturgicalSeason } from '@romcal/types/seasons-and-periods.type';
import { RomcalCycles } from '@romcal/types/liturgical-cycles.type';
import { DateItemSources } from '@romcal/types/date-item-sources.type';
import { RomcalDateItemCalendar } from '@romcal/types/date-item-calendar.type';
import { RomcalDateItemMetadata } from '@romcal/types/date-item-metadata.type';
import { RomcalLiturgicalColor } from '@romcal/types/liturgical-colors.type';
import { Country } from '@romcal/types/country.type';

type RomcalBaseDateItem = {
  key: string;
  name: string;
  date: ISO8601DateString;
  rank: RanksEnum;
  prioritized: boolean;
  liturgicalColors: RomcalLiturgicalColor[];
  liturgicalColorNames: string[];
  seasons: LiturgicalSeason[];
  seasonNames: string[];
  periods: LiturgicalPeriod[];
  cycles: RomcalCycles;
  calendar: RomcalDateItemCalendar;
  fromCalendar: Country;
  metadata: RomcalDateItemMetadata;
  base?: RomcalDateItem;
};

type RomcalDateItemArgs = Readonly<Omit<RomcalBaseDateItem, 'date'> & Partial<RomcalDateItemMetadata>> & {
  readonly date: Dayjs;
  readonly baseItem?: RomcalDateItem;
  readonly _stack: number;
};

/**
 * This type is used internally by romcal
 * during the construction of the liturgical calendar.
 * All properties except `key` and `date` are marked optional as
 * the the object is constructed in stages. This interface
 * should not be used in consumer applications.
 */
export type RomcalDateItemInput = Pick<RomcalBaseDateItem, 'key'> &
  Partial<Omit<RomcalBaseDateItem, 'key' | 'date' | 'liturgicalColors' | 'cycles'>> & {
    date: Dayjs;
    liturgicalColors?: RomcalLiturgicalColor | RomcalLiturgicalColor[];
    cycles?: Partial<RomcalCycles>;
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
  };

export class RomcalDateItem implements RomcalBaseDateItem {
  /**
   * The unique key of the celebration.
   */
  public readonly key: string;
  /**
   * The localized name of the celebration.
   */
  public readonly name: string;
  /**
   * The ISO8601 formatted date and time string of the celebration.
   */
  public readonly date: ISO8601DateString;
  /**
   * The rank of the celebration.
   */
  public rank: RanksEnum;
  /**
   * If this celebration should have always precedence, without rank consideration.
   */
  public readonly prioritized: boolean;
  /**
   * The liturgical color of a celebration
   */
  public readonly liturgicalColors: RomcalLiturgicalColor[];
  /**
   * The liturgical localized color of a celebration
   */
  public readonly liturgicalColorNames: string[];
  /**
   * Season keys to which the celebration is a part.
   */
  public readonly seasons: LiturgicalSeason[];
  /**
   * Season localized name to which the celebration is a part.
   */
  public readonly seasonNames: string[];
  /**
   * Period keys to which the celebration is a part.
   */
  public readonly periods: LiturgicalPeriod[];
  /**
   * Cycle metadata of a celebration.
   */
  public readonly cycles: RomcalCycles;
  /**
   * Calendar metadata for the celebration.
   */
  public readonly calendar: RomcalDateItemCalendar;
  /**
   * Name of the calendar from which the celebration is defined
   */
  public readonly fromCalendar: Country;
  /**
   * The specific metadata of a celebration
   */
  public readonly metadata: RomcalDateItemMetadata;
  /**
   * A previous celebration on the same day that was overridden by the current one.
   */
  public readonly base: RomcalDateItem | undefined;
  /**
   * Internal index used by romcal for calendar generation.
   */
  public readonly _id: number;
  /**
   * Internal index used by romcal for calendar generation.
   */
  public readonly _stack: number;

  static latestId: number;

  constructor({
    key,
    name,
    date,
    rank,
    prioritized,
    liturgicalColors,
    liturgicalColorNames,
    seasons,
    seasonNames,
    periods,
    cycles,
    calendar,
    fromCalendar,
    metadata,
    baseItem,
    _stack,
  }: RomcalDateItemArgs) {
    this.key = key;
    this.name = name;
    this.date = date.toISOString();
    this.rank = rank;
    this.prioritized = prioritized;
    this.liturgicalColors = liturgicalColors;
    this.liturgicalColorNames = liturgicalColorNames;
    this.seasons = seasons;
    this.seasonNames = seasonNames;
    this.periods = periods;
    this.cycles = cycles;
    this.calendar = calendar;
    this.fromCalendar = fromCalendar;
    this.metadata = typeof metadata === 'object' ? metadata : { titles: [] };

    this._id = RomcalDateItem._incrementId();
    this._stack = _stack;

    // The original default item is added to the current item as the `base` property
    if (!isNil(baseItem) && this._id !== baseItem?._id && baseItem.name !== this.name) {
      this.base = baseItem;
    }

    this.adjustTypeInSeason();
  }

  /**
   * Runs type management on celebrations given their specific types.
   *
   * **Special type management in the season of LENT.**
   *
   * Memorials or Optional Memorials that fall on a weekday
   * in the season of Lent are reduced to Commemorations.
   *
   * Feasts occurring in the season of Lent are also reduced to
   * Commemorations.
   */
  private adjustTypeInSeason(): void {
    if (this.base?.seasons?.some((key) => key === 'LENT')) {
      if (
        (this.rank === RanksEnum.MEMORIAL || this.rank === RanksEnum.OPT_MEMORIAL) &&
        this.base.rank === RanksEnum.WEEKDAY
      ) {
        this.rank = RanksEnum.COMMEMORATION;
      }
      if (this.rank === RanksEnum.FEAST) {
        this.rank = RanksEnum.COMMEMORATION;
      }
    }
  }

  /**
   * Increment the ID based of the [[RomcalDateItem]] instance
   */
  private static _incrementId(): number {
    return isNil(this.latestId) ? (this.latestId = 0) : this.latestId++;
  }
}

/**
 * Checks if a value is a [[RomcalDateItem]]
 * @param value The value that could be an instance of [[IDateItem]]
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isRomcalDateItem = (value: Record<string, any>): value is RomcalBaseDateItem => {
  const { key, name, date, rank } = value;
  return !isNil(key) && !isNil(name) && !isNil(date) && !isNil(rank);
};
