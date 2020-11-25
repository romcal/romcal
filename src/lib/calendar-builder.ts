import { isNil } from '@romcal/utils/type-guards/type-guards';
import { RomcalConfig } from '@romcal/models/config/config.model';
import dayjs, { Dayjs } from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { localize } from '@romcal/lib/locales';
import { RomcalCalendar } from '@romcal/models/calendar/calendar.model';
import { concatAll, find, removeWhere } from '@romcal/utils/array/array';
import {
  RomcalLiturgicalPeriod,
  RomcalLiturgicalSeason,
} from '@romcal/constants/seasons-and-periods/seasons-and-periods.type';
import {
  RomcalCalendarMetadata,
  LiturgicalDayInput,
  LiturgicalDayMetadata,
  LiturgyDayExtendedMetadata,
} from '@romcal/models/liturgical-day/liturgical-day.types';
import { LiturgicalDay } from '@romcal/models/liturgical-day/liturgical-day.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { LiturgicalSeasons } from '@romcal/constants/seasons-and-periods/seasons-and-periods.enum';
import { isLiturgicalColor, RomcalLiturgicalColor } from '@romcal/constants/liturgical-colors/liturgical-colors.type';
import { Titles } from '@romcal/constants/titles/titles.enum';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { RANKS } from '@romcal/constants/ranks/ranks.constant';
import _ from 'lodash';
import { RomcalCalendarName } from '@romcal/constants/countries/country.type';
import {
  isLiturgicalDayCycle,
  RomcalCyclesMetadata,
  RomcalSundayCycle,
  RomcalWeekdayCycle,
} from '@romcal/constants/cycles/cycles.type';
import { LiturgicalDayCycle } from '@romcal/constants/cycles/cycles.enum';
import { Dates } from '@romcal/lib/dates';
import { PSALTER_WEEKS, SUNDAYS_CYCLE, WEEKDAYS_CYCLE } from '@romcal/constants/cycles/cycles.constant';
import { Seasons } from '@romcal/lib/seasons';
import * as Celebrations from '@romcal/lib/celebrations';
import { logger } from '@romcal/utils/logger/logger';
import { difference } from '@romcal/utils/object/object';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

type LiturgicalDayComputing = LiturgicalDayInput & {
  fromCalendar: RomcalCalendarName;
  fromExtendedCalendars: LiturgyDayExtendedMetadata[];
  _stack: number;
};

/**
 * Compute calendar dates, and combine together all the different collections of
 * liturgical day objects, according to the liturgical calendar for the specific year.
 */
export class CalendarBuilder {
  private readonly _config: RomcalConfig;
  private readonly _startDate: Dayjs;
  private readonly _endDate: Dayjs;
  private readonly _liturgicalDays: RomcalCalendar;
  private readonly _baseLiturgicalDays: RomcalCalendar;

  /**
   * Create a new Calendar
   */
  constructor(config: RomcalConfig) {
    this._liturgicalDays = new RomcalCalendar();
    this._baseLiturgicalDays = new RomcalCalendar();
    this._config = config;

    const { scope, year } = config;
    if (scope === 'liturgical') {
      this._startDate = Dates.firstSundayOfAdvent(year - 1);
      this._endDate = Dates.firstSundayOfAdvent(year).subtract(1, 'day');
    } else {
      this._startDate = dayjs.utc(`${year}-1-1`);
      this._endDate = dayjs.utc(`${year}-12-31`);
    }
  }

  /**
   * Compute all the liturgical days that occur during a specific year (gregorian or liturgical).
   */
  public async compute(): Promise<RomcalCalendar> {
    const { country, epiphanyOnSunday, scope, year } = this._config;

    // Set the year range depending on the calendar type
    const years = scope === 'liturgical' ? [year - 1, year] : [year];

    // Get a collection of liturgical days from all liturgical seasons of the given year
    const seasonDatesPromise = years.map(async (year) => {
      return [
        ...(await Seasons.christmastide(year - 1, epiphanyOnSunday)),
        ...(await Seasons.earlyOrdinaryTime(year, epiphanyOnSunday)),
        ...(await Seasons.lent(year)),
        ...(await Seasons.eastertide(year)),
        ...(await Seasons.lateOrdinaryTime(year)),
        ...(await Seasons.advent(year)),
        ...(await Seasons.christmastide(year, epiphanyOnSunday)),
      ];
    });
    const seasonDates: LiturgicalDayComputing[] = concatAll(await Promise.all(seasonDatesPromise)).map((item) => ({
      ...item,
      _stack: 0,
      fromCalendar: 'general',
      fromExtendedCalendars: [],
    }));

    // Get the liturgical dates based on the given year and options
    const liturgicalDatesPromise = years.map(async (year) => {
      return [...(await Celebrations.dates(year, this._config))];
    });
    const liturgicalDates: LiturgicalDayComputing[] = concatAll(await Promise.all(liturgicalDatesPromise)).map(
      (item) => ({
        ...item,
        _stack: 1,
        fromCalendar: 'general',
        fromExtendedCalendars: [],
      }),
    );

    // Get the general calendar based on the given year
    const generalDatesPromise = years.map(async (thisYear) => {
      const yearSpecificConfig = new RomcalConfig({
        ...this._config.toObject(),
        year: thisYear,
      });
      return [...(await CalendarBuilder.fetchCalendar('general', yearSpecificConfig))];
    });
    const generalDates: LiturgicalDayComputing[] = concatAll(await Promise.all(generalDatesPromise)).map((item) => ({
      ...item,
      _stack: 2,
      fromCalendar: 'general',
      fromExtendedCalendars: [],
    }));

    // Get the relevant national calendar object based on the given year and country
    const nationalDatesPromise = years.map(async (thisYear) => {
      const yearSpecificConfig = new RomcalConfig({
        ...this._config.toObject(),
        year: thisYear,
      });
      return [...(await CalendarBuilder.fetchCalendar(country, yearSpecificConfig))];
    });
    const nationalDates: LiturgicalDayComputing[] = concatAll(await Promise.all(nationalDatesPromise)).map((item) => ({
      ...item,
      _stack: 3,
      fromCalendar: country,
      fromExtendedCalendars: [],
    }));

    let calendarSources: LiturgicalDayComputing[] = [
      ...seasonDates,
      ...liturgicalDates,
      ...generalDates,
      ...nationalDates,
    ];

    // Extend items that must be extended with previous defined one
    calendarSources = this.extendLiturgicalDays(calendarSources);

    // Remove all liturgical days not in the given date range
    calendarSources = this.filterItemRange(calendarSources);

    // Remove all liturgical days marked as 'drop' from any other liturgical days
    calendarSources = CalendarBuilder.dropItems(calendarSources);

    // Push new item object as a new DateItem
    await this.pushSources(calendarSources);

    // Finally, sort the DateItems by date and rank and keep only the relevant
    this.sortAndKeepRelevant();

    return this._liturgicalDays;
  }

  /**
   * Push new DateItem objects in the Calendar object
   * @param calendar An array of calendar sources to process.
   */
  private async pushSources(calendar: LiturgicalDayComputing[]): Promise<void> {
    for (const item of calendar) {
      // Remove non-prioritized liturgical days which share the same key as the current item
      this.keepPrioritizedOnly(item);

      // Find the season date that has the same date as the incoming item and make it the base item.
      const baseItem = find(this._baseLiturgicalDays, { date: item.date && item.date.toISOString() });

      const {
        key,
        name,
        isHolyDayOfObligation,
        rank,
        prioritized,
        seasons,
        seasonNames,
        periods,
        cycles,
        calendar,
        fromCalendar,
        fromExtendedCalendars,
        liturgicalColors,
        metadata,
        date,
        _stack,
      } = item;

      if (!isNil(key) && !isNil(name) && !isNil(rank) && !isNil(date)) {
        const validatedRank = this.adjustTypeInSeason(rank, baseItem);
        const validatedSeasons: Required<RomcalLiturgicalSeason[]> = seasons || baseItem?.seasons || [];
        const validatedSeasonNames: Required<string[]> = seasonNames || baseItem?.seasonNames || [];
        const validatedPeriods: Required<RomcalLiturgicalPeriod[]> = periods || baseItem?.periods || [];
        const validatedLiturgicalColors = this.checkOrDetermineLiturgicalColors(
          rank,
          validatedSeasons,
          liturgicalColors,
          metadata?.titles || [],
        );
        const validatedCalendar = (calendar || baseItem?.calendar) as Required<RomcalCalendarMetadata>;

        // Create a new DateItem and add it to the collection
        const newLiturgicalDay = await new LiturgicalDay({
          key,
          name,
          date,
          rank: validatedRank,
          rankName: await localize({ key: `ranks.${validatedRank}` }),
          isHolyDayOfObligation: isHolyDayOfObligation ?? baseItem?.isHolyDayOfObligation ?? false,
          prioritized: !!prioritized,
          seasons: validatedSeasons,
          seasonNames: validatedSeasonNames,
          periods: validatedPeriods,
          cycles: CalendarBuilder.addLiturgicalCycleMetadata(date, validatedCalendar, cycles),
          calendar: validatedCalendar,
          fromCalendar,
          fromExtendedCalendars,
          liturgicalColors: validatedLiturgicalColors,
          liturgicalColorNames: await this.localizeLiturgicalColors(validatedLiturgicalColors),
          metadata: (typeof metadata === 'object' ? metadata : { titles: [] }) as LiturgicalDayMetadata,
          _stack, // The stack number refers to the index in the calendars array in which this liturgical day's array is placed at
          baseItem, // Attach the base item if any
        });

        // Add the new liturgical day to the main RomcalCalendar object
        this._liturgicalDays.push(newLiturgicalDay);

        // If the computed liturgical day is a base weekday/sunday item (generated in season.ts):
        // add it also to a separate RomcalCalendar object.
        // This will be useful to not compute again the base metadata on a new defined liturgical day
        // coming from the general or any particular calendar (e.g. calendar metadata,
        // cycle metadata, liturgical color if no new one is defined, ...)
        if (_stack === 0) this._baseLiturgicalDays.push(newLiturgicalDay);
      }
    }
  }

  /**
   * Runs type management on liturgical days given their specific types.
   *
   * **Special type management in the season of LENT.**
   *
   * Memorials or Optional Memorials that fall on a weekday
   * in the season of Lent are reduced to Commemorations.
   *
   * Feasts occurring in the season of Lent are also reduced to
   * Commemorations.
   */
  private adjustTypeInSeason(rank: Ranks, base: LiturgicalDay | undefined): Ranks {
    if (base?.seasons?.some((key: string) => key === LiturgicalSeasons.LENT)) {
      if ((rank === Ranks.MEMORIAL || rank === Ranks.OPT_MEMORIAL) && base.rank === Ranks.WEEKDAY) {
        return Ranks.COMMEMORATION;
      }
      if (rank === Ranks.FEAST) {
        return Ranks.COMMEMORATION;
      }
    }
    return rank;
  }

  /**
   * Check the provided liturgical color and return it in the good type,
   * or if not provided, try to determine the right color for the liturgical day.
   * @private
   * @param rank The rank of the liturgical day
   * @param seasons The season(s) of the liturgical day
   * @param liturgicalColors The liturgical color(s) of the liturgical day, if defined
   * @param titles The title(s) of the blessed/saint for the liturgical day, if defined
   */
  private checkOrDetermineLiturgicalColors(
    rank: Ranks,
    seasons: RomcalLiturgicalSeason[],
    liturgicalColors: RomcalLiturgicalColor | RomcalLiturgicalColor[] | undefined,
    titles: string[],
  ): RomcalLiturgicalColor[] {
    // A liturgical color(s) has already been defined, nothing more to do:
    // returns the color(s) as it, if the color type(s) is/are valid.
    if (Array.isArray(liturgicalColors)) {
      const validated = liturgicalColors.filter((color) => isLiturgicalColor(color));
      if (validated.length > 0) {
        return validated;
      }
    }

    // A liturgical color has already been defined, but not wrapped in an array:
    // returns the color(s) as it in an array, if the color type is valid.
    if (typeof liturgicalColors === 'string' && isLiturgicalColor(liturgicalColors)) {
      return [liturgicalColors];
    }

    // No liturgical color has been defined
    // Now try to find the right default color...

    // If the liturgical day isn't a COMMEMORATION and is for a MARTYR, return RED
    // Otherwise, if the liturgical day isn't a COMMEMORATION or a WEEKDAY, return WHITE
    if (rank && ![Ranks.COMMEMORATION, Ranks.WEEKDAY].includes(rank)) {
      if (titles.includes(Titles.MARTYR)) return [LiturgicalColors.RED];
      return [LiturgicalColors.WHITE];
    }

    // The WEEKDAY or COMMEMORATION is celebrated during LENT, return PURPLE
    if ([LiturgicalSeasons.LENT, LiturgicalSeasons.ADVENT].some((season) => seasons?.includes(season))) {
      return [LiturgicalColors.PURPLE];
    }

    // The WEEKDAY or COMMEMORATION is celebrated during ORDINARY_TIME, return PURPLE
    if (seasons?.includes(LiturgicalSeasons.ORDINARY_TIME)) {
      return [LiturgicalColors.GREEN];
    }

    // Otherwise, return WHITE that match all other seasons, or as a default color
    return [LiturgicalColors.WHITE];
  }

  /**
   * Returns the localized liturgical color(s) from the color key(s)
   * @param colors The liturgical color keys
   * @private
   */
  private localizeLiturgicalColors(colors: RomcalLiturgicalColor[]): Promise<string[]> {
    return Promise.all(colors.map(async (key) => await localize({ key: `liturgical_colors.${key}` })));
  }

  /**
   * Compute properties of a liturgical day that need to be extended from an already defined item (that have the same key).
   * @param sources The 2 dimensional array containing various calendar sources
   * @private
   */
  private extendLiturgicalDays(sources: LiturgicalDayComputing[]): LiturgicalDayComputing[] {
    // Reverse a copy of the array of sources, so the first item found will be the last defined in the calendar stacks
    const reversedSources = sources.slice().reverse();

    const inputDiff = (object: any, base: any) => {
      const propsToCheck = (item: Partial<LiturgicalDayInput>) => ({
        name: item.name,
        date: dayjs.isDayjs(item.date) ? item.date.toISOString() : item.date,
        rank: item.rank,
        prioritized: !!item.prioritized,
        liturgicalColors: Array.isArray(item.liturgicalColors) ? item.liturgicalColors : [item.liturgicalColors],
        metadata: item.metadata || { titles: [] },
      });
      return difference(propsToCheck(object), propsToCheck(base));
    };

    return sources.map((currentItem: LiturgicalDayComputing) => {
      if (currentItem.extend) {
        // Find the corresponding item to extend
        const itemToExtend = reversedSources.find(
          ({ key, _stack }) => key === currentItem.key && _stack < currentItem._stack,
        );

        // Extends properties from the one found
        if (itemToExtend) {
          currentItem = {
            ...itemToExtend,
            ...currentItem,
            metadata: {
              titles: [],
              ...(itemToExtend.metadata || {}),
              ...(currentItem.metadata || {}),
            },
          };

          // Add diff informations
          currentItem.fromExtendedCalendars = [
            { fromCalendar: itemToExtend.fromCalendar, diff: inputDiff(itemToExtend, currentItem) },
            ...(currentItem.fromExtendedCalendars || []),
          ];
        } else {
          logger.warn(
            `Liturgical day for '${currentItem.key}' is defined to be extended, but no corresponding item to extend was found.`,
          );
        }
      }

      return currentItem;
    });
  }

  /**
   * If a previous liturgical day already exists (has the same key name as the new one),
   * the previous liturgical day will be removed in favour of the new given one,
   * except if the previous item is prioritized but not the new one
   */
  private keepPrioritizedOnly({ key: currentKey, prioritized: currentPrioritized }: LiturgicalDayInput): void {
    this._liturgicalDays
      .filter(({ key }) => key === currentKey)
      .forEach(({ prioritized: previousPrioritized, _id: previousId }) => {
        if (!previousPrioritized || (previousPrioritized && currentPrioritized)) {
          // Remove previous item if it isn't prioritized
          // Remove previous item if both items are prioritized.
          removeWhere(this._liturgicalDays, { _id: previousId });
        }
      });
  }

  /**
   * Sort all RomcalDateItems by relevance (the most relevant first)
   * in this order: by date, by priority, by rank, by stack.
   * and drop the non-relevant DateItems.
   */
  private sortAndKeepRelevant(): void {
    // Reorder the DateItems of a particular day, so that
    // when there are optional memorials or commemoration only (in addition to the weekday),
    // the weekday item is moved to the top before the optional items,
    // since it's the default item if none of the optional items are celebrated.
    const ranks = RANKS.slice(0, RANKS.length - 1);
    ranks.splice(ranks.indexOf(Ranks.MEMORIAL) + 1, 0, RANKS[RANKS.length - 1]);

    // Remove optional memorials and commemorations by default, to keep only
    // relevant celebrations that exactly match for every days.
    // This can be disabled by specifying the `outputOptionalMemorials` flag
    // to `true` in the romcal config.
    if (!this._config.outputOptionalMemorials) {
      // Note: the array is being re-indexed on every .splice()
      // Solution: iterate in reverse, since the indexing affects only the items
      // from the current point to the end of the Array,
      // and the next item in the iteration is lower than the current point.
      let i = this._liturgicalDays.length;
      while (i--) {
        if ([Ranks.OPT_MEMORIAL, Ranks.COMMEMORATION].includes(this._liturgicalDays[i].rank)) {
          this._liturgicalDays.splice(i, 1);
        }
      }
    }

    this._liturgicalDays.sort(
      (
        { date: firstDate, prioritized: firstPrioritized, rank: firstRank, _stack: firstStack },
        { date: nextDate, prioritized: nextPrioritized, rank: nextRank, _stack: nextStack },
      ): number => {
        // 1. Sort by date
        if (dayjs.utc(firstDate).isBefore(dayjs.utc(nextDate))) {
          return -1;
        } else if (dayjs.utc(firstDate).isAfter(dayjs.utc(nextDate))) {
          return 1;
        } else {
          // If the date is the same...
          // 2. Sort by priority (prioritized first)
          if (firstPrioritized && !nextPrioritized) {
            return -1;
          } else if (!firstPrioritized && nextPrioritized) {
            return 1;
          } else {
            // If neither date is prioritized
            // 3. Sort by type (higher type first)
            const type1 = ranks.indexOf(firstRank);
            const type2 = ranks.indexOf(nextRank);
            if (type1 < type2) {
              return -1;
            } else if (type1 > type2) {
              return 1;
            } else {
              // If the ranks are the same
              // 4. Sort by stack (higher stack first)
              if (firstStack > nextStack) {
                return -1;
              } else if (firstStack < nextStack) {
                return 1;
              } else {
                return 0;
              }
            }
          }
        }
      },
    );

    // Now that the items are sorted, let's drop other non-relevant liturgical days
    // if at least one of the liturgical days isn't optional...
    // Create a dictionary where celebrations on the same date are grouped under
    // it's ISO string date string as the key and loop through each group to see
    // if there's more than one celebration in each group.
    Object.entries(_.groupBy(this._liturgicalDays, 'date')).forEach(([, dateItems]) => {
      if (dateItems.length > 1) {
        // Validate the first liturgical day
        const [dateItem, ...otherDateItems] = dateItems;
        // If the first liturgical day has a rank equal or higher than a MEMORIAL, or is prioritized:
        // keep only the first item and discard all others celebration in the array
        if (dateItem.prioritized || ranks.indexOf(dateItem.rank) <= ranks.indexOf(Ranks.MEMORIAL)) {
          otherDateItems.forEach(({ _id }) => {
            removeWhere(this._liturgicalDays, { _id });
          });
        }
      }
    });
  }

  /**
   * Only retain items within a given date range
   * @param sources The 2 dimensional array containing various calendar sources to be filtered
   */
  private filterItemRange(sources: LiturgicalDayComputing[]): LiturgicalDayComputing[] {
    const start = this._startDate;
    const end = this._endDate;
    return sources.filter((item: LiturgicalDayInput) => {
      return item.date && item.date.isSameOrAfter(start) && item.date.isSameOrBefore(end);
    });
  }

  /**
   * Check if 'drop' has been defined for any celebrations in the national calendar
   * and remove them from both national and general calendar sources.
   *
   * @param source A list of [[RomcalDateItem]] arrays for the operation
   */
  private static dropItems(source: LiturgicalDayComputing[]): LiturgicalDayComputing[] {
    const dropKeys: string[] = [];

    source.forEach((dateItem: LiturgicalDayComputing) => {
      if (dateItem.drop && dateItem.key) dropKeys.push(dateItem.key);
    });

    return source.filter((dateItem: LiturgicalDayComputing) =>
      dateItem.key ? !dropKeys.includes(dateItem.key) : true,
    );
  }

  /**
   * Get the appropriate calendar definition object, based on the given region name and year.
   *
   * @param country The country to get
   * @param config The configuration instance to be send down to the calendar (includes the year to use for date resolutions)
   */
  private static async fetchCalendar(
    country: RomcalCalendarName,
    config: RomcalConfig,
  ): Promise<Array<LiturgicalDayInput>> {
    const { dates } = await import(
      /* webpackExclude: /index\.ts/ */
      /* webpackChunkName: "calendars/[request]" */
      /* webpackMode: "lazy" */
      /* webpackPrefetch: true */
      `@romcal/calendars/${country}`
    );
    const contextualizedDates: Array<LiturgicalDayInput> = await dates(config);
    return await Promise.all(contextualizedDates);
  }

  /**
   * Include liturgical cycle metadata corresponding to the liturgical year.
   */
  private static addLiturgicalCycleMetadata(
    date: Dayjs,
    calendar: RomcalCalendarMetadata,
    cycle: Partial<RomcalCyclesMetadata> = {},
  ): RomcalCyclesMetadata {
    // Check existing celebration cycle,
    // otherwise set the celebrationCycle to SANCTORALE as a default value
    const celebrationCycle =
      !isNil(cycle.liturgicalDayCycle) && isLiturgicalDayCycle(cycle.liturgicalDayCycle)
        ? cycle.liturgicalDayCycle
        : LiturgicalDayCycle.SANCTORALE;

    const year = dayjs(calendar.startOfLiturgicalYear).year();
    const firstSundayOfAdvent = Dates.firstSundayOfAdvent(year);

    let sundayCycle: RomcalSundayCycle;
    let weekdayCycle: RomcalWeekdayCycle;

    // Formula to calculate Sunday cycle (Year A, B, C)
    const thisSundayCycleIndex: number = (year - 1963) % 3;
    const nextSundayCycleIndex: number = thisSundayCycleIndex === 2 ? 0 : thisSundayCycleIndex + 1;

    // If the date is on or after the First Sunday of Advent,
    // it is the next liturgical cycle
    if (date.isSameOrAfter(firstSundayOfAdvent)) {
      sundayCycle = SUNDAYS_CYCLE[nextSundayCycleIndex];
      weekdayCycle = WEEKDAYS_CYCLE[year % 2];
    } else {
      sundayCycle = SUNDAYS_CYCLE[thisSundayCycleIndex];
      weekdayCycle = WEEKDAYS_CYCLE[(year + 1) % 2];
    }

    // Psalter week cycle restart to 1 at the beginning of each season.
    // Except during the four first days of lent (ash wednesday to the next saturday),
    // which are in week 4, to start on week 1 after the first sunday of lent.
    const weekIndex = (calendar.weekOfSeason % 4) - 1;
    const psalterWeek = PSALTER_WEEKS[weekIndex > -1 ? weekIndex : 3];

    return { liturgicalDayCycle: celebrationCycle, sundayCycle, weekdayCycle: weekdayCycle, psalterWeek };
  }
}
