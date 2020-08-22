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
  public readonly key: string;
  public readonly name: string;
  public readonly date: ISO8601DateString;
  public readonly isHolyDayOfObligation: boolean;
  public readonly rank: Ranks;
  public readonly rankName: string;
  public readonly prioritized: boolean;
  public readonly liturgicalColors: RomcalLiturgicalColor[];
  public readonly liturgicalColorNames: string[];
  public readonly seasons: RomcalLiturgicalSeason[];
  public readonly seasonNames: string[];
  public readonly periods: RomcalLiturgicalPeriod[];
  public readonly cycles: RomcalCyclesMetadata;
  public readonly calendar: RomcalCalendarMetadata;
  public readonly fromCalendar: RomcalCalendarName;
  public readonly fromExtendedCalendars: LiturgyDayExtendedMetadata[];
  public readonly metadata: LiturgicalDayMetadata;
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
    isHolyDayOfObligation,
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
    this.isHolyDayOfObligation = isHolyDayOfObligation;
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
