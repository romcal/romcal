import { isNil, ISO8601DateString } from '@romcal/utils/type-guards/type-guards';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import {
  RomcalLiturgicalPeriod,
  RomcalLiturgicalSeason,
} from '@romcal/constants/seasons-and-periods/seasons-and-periods.type';
import {
  RomcalCalendarMetadata,
  RomcalLiturgicalDayMetadata,
  BaseRomcalLiturgicalDay,
  RomcalLiturgicalDayArgs,
} from '@romcal/models/liturgical-day/liturgical-day.types';
import { RomcalCyclesMetadata } from '@romcal/constants/cycles/cycles.type';
import { RomcalLiturgicalColor } from '@romcal/constants/liturgical-colors/liturgical-colors.type';
import { RomcalCountry } from '@romcal/constants/countries/country.type';

export class RomcalLiturgicalDay implements BaseRomcalLiturgicalDay {
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
  public readonly rank: Ranks;
  /**
   * The localized rank of the celebration
   */
  public readonly rankName: string;
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
  public readonly seasons: RomcalLiturgicalSeason[];
  /**
   * Season localized name to which the celebration is a part.
   */
  public readonly seasonNames: string[];
  /**
   * Period keys to which the celebration is a part.
   */
  public readonly periods: RomcalLiturgicalPeriod[];
  /**
   * Cycle metadata of a celebration.
   */
  public readonly cycles: RomcalCyclesMetadata;
  /**
   * Calendar metadata for the celebration.
   */
  public readonly calendar: RomcalCalendarMetadata;
  /**
   * Name of the calendar from which the celebration is defined
   */
  public readonly fromCalendar: RomcalCountry;
  /**
   * The specific metadata of a celebration
   */
  public readonly metadata: RomcalLiturgicalDayMetadata;
  /**
   * A previous celebration on the same day that was overridden by the current one.
   */
  public readonly base: RomcalLiturgicalDay | undefined;
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
    rankName,
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
  }: RomcalLiturgicalDayArgs) {
    this.key = key;
    this.name = name;
    this.date = date.toISOString();
    this.rank = rank;
    this.rankName = rankName;
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

    this._id = RomcalLiturgicalDay.incrementId();
    this._stack = _stack;

    // The original default item is added to the current item as the `base` property
    if (!isNil(baseItem) && this._id !== baseItem?._id && baseItem.name !== this.name) {
      this.base = baseItem;
    }
  }

  /**
   * Increment the ID based of the [[RomcalDateItem]] instance
   */
  private static incrementId(): number {
    return isNil(this.latestId) ? (this.latestId = 0) : this.latestId++;
  }
}

/**
 * Checks if a value is a [[RomcalLiturgicalDay]]
 * @param value The value that could be an instance of [[BaseRomcalLiturgicalDay]]
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isRomcalLiturgicalDay = (value: Record<string, any>): value is BaseRomcalLiturgicalDay => {
  const { key, name, date, rank } = value;
  return !isNil(key) && !isNil(name) && !isNil(date) && !isNil(rank);
};
