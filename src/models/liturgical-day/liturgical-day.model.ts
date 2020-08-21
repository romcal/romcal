import { isNil, ISO8601DateString } from '@romcal/utils/type-guards/type-guards';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import {
  RomcalLiturgicalPeriod,
  RomcalLiturgicalSeason,
} from '@romcal/constants/seasons-and-periods/seasons-and-periods.type';
import {
  RomcalCalendarMetadata,
  LiturgicalDayMetadata,
  BaseLiturgicalDay,
  LiturgicalDayArgs,
  LiturgyDayExtendedMetadata,
} from '@romcal/models/liturgical-day/liturgical-day.types';
import { RomcalCyclesMetadata } from '@romcal/constants/cycles/cycles.type';
import { RomcalLiturgicalColor } from '@romcal/constants/liturgical-colors/liturgical-colors.type';
import { RomcalCalendarName } from '@romcal/constants/countries/country.type';

export class LiturgicalDay implements BaseLiturgicalDay {
  /**
   * The unique key of the liturgical day.
   */
  public readonly key: string;
  /**
   * The localized name of the liturgical day.
   */
  public readonly name: string;
  /**
   * The ISO8601 formatted date and time string of the liturgical day.
   */
  public readonly date: ISO8601DateString;
  /**
   * The rank of the liturgical day.
   */
  public readonly rank: Ranks;
  /**
   * The localized rank of the liturgical day
   */
  public readonly rankName: string;
  /**
   * If this liturgical day should have always precedence, without rank consideration.
   */
  public readonly prioritized: boolean;
  /**
   * The liturgical color of a liturgical day
   */
  public readonly liturgicalColors: RomcalLiturgicalColor[];
  /**
   * The liturgical localized color of a liturgical day
   */
  public readonly liturgicalColorNames: string[];
  /**
   * Season keys to which the liturgical day is a part.
   */
  public readonly seasons: RomcalLiturgicalSeason[];
  /**
   * Season localized name to which the liturgical day is a part.
   */
  public readonly seasonNames: string[];
  /**
   * Period keys to which the liturgical day is a part.
   */
  public readonly periods: RomcalLiturgicalPeriod[];
  /**
   * Cycle metadata of a liturgical day.
   */
  public readonly cycles: RomcalCyclesMetadata;
  /**
   * Calendar metadata for the liturgical day.
   */
  public readonly calendar: RomcalCalendarMetadata;
  /**
   * The name of the calendar from which the liturgical day is defined
   */
  public readonly fromCalendar: RomcalCalendarName;
  /**
   * The names and the object diff of the calendars from which this liturgical day is extended.
   * From the first extended definitions to the latest extended definition.
   */
  public readonly fromExtendedCalendars: LiturgyDayExtendedMetadata[];
  /**
   * The specific metadata of a liturgical day
   */
  public readonly metadata: LiturgicalDayMetadata;
  /**
   * A previous liturgical day on the same day that was overridden by the current one.
   */
  public readonly base: LiturgicalDay | undefined;
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
    fromExtendedCalendars,
    metadata,
    baseItem,
    _stack,
  }: LiturgicalDayArgs) {
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
    this.fromExtendedCalendars = fromExtendedCalendars;
    this.metadata = typeof metadata === 'object' ? metadata : { titles: [] };

    this._id = LiturgicalDay.incrementId();
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
    isNil(this.latestId) ? (this.latestId = 0) : this.latestId++;
    return this.latestId;
  }
}

/**
 * Checks if a value is a [[RomcalLiturgicalDay]]
 * @param value The value that could be an instance of [[BaseRomcalLiturgicalDay]]
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isRomcalLiturgicalDay = (value: Record<string, any>): value is BaseLiturgicalDay => {
  const { key, name, date, rank } = value;
  return !isNil(key) && !isNil(name) && !isNil(date) && !isNil(rank);
};
