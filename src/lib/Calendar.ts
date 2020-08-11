import * as Dates from '@romcal/lib/Dates';
import * as Seasons from '@romcal/lib/Seasons';
import * as Celebrations from '@romcal/lib/Celebrations';
import { isNil } from '@romcal/utils/type-guards';
import Config from '@romcal/models/romcal-config';
import { RomcalDateItem, RomcalDateItemInput } from '@romcal/models/romcal-date-item';
import { concatAll, find, removeWhere } from '@romcal/utils/array';
import { RANKS } from '@romcal/constants/ranks.constant';
import { RanksEnum } from '@romcal/enums/ranks.enum';
import _ from 'lodash';
import { Country } from '@romcal/types/country.type';
import { RomcalCycles } from '@romcal/types/liturgical-cycles.type';
import { LiturgicalPeriod, LiturgicalSeason } from '@romcal/types/seasons-and-periods.type';

import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { RomcalDateItemCalendar } from '@romcal/types/date-item-calendar.type';
import { RomcalDateItemMetadata } from '@romcal/types/date-item-metadata.type';
import { isLiturgicalColor, RomcalLiturgicalColor } from '@romcal/types/liturgical-colors.type';
import { localize } from '@romcal/lib/Locales';
import { TITLES } from '@romcal/constants/titles.constant';
import { LiturgicalColorsEnum } from '@romcal/enums/liturgical-colors.enum';
import { SeasonsEnum } from '@romcal/enums/seasons-and-periods.enum';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

// const d2: DateItem[] = [];
// const tt1 = calendarFor();
// const tt2 = calendarFor(2020);
// const tt3 = calendarFor({ year: 2020 });
// const tt3 = calendarFor({ query: { day: 1 } });

type FromCalendarDateItems = { fromCalendar: Country; calendarItems: RomcalDateItemInput[] };

/**
 * Calendar Class:
 * Combine together all the different collections of date item objects,
 * according to the liturgical calendar for the specific year.
 */
export class Calendar {
  private dateItems: Array<RomcalDateItem> = [];
  private readonly config: Config;
  private readonly startDate: dayjs.Dayjs;
  private readonly endDate: dayjs.Dayjs;

  /**
   * Create a new Calendar
   */
  constructor(config: Config) {
    this.config = config;
    const { type, year } = config;
    if (type === 'liturgical') {
      this.startDate = Dates.firstSundayOfAdvent(year - 1);
      this.endDate = Dates.firstSundayOfAdvent(year).subtract(1, 'day');
    } else {
      this.startDate = dayjs.utc(`${year}-1-1`);
      this.endDate = dayjs.utc(`${year}-12-31`);
    }
  }

  /**
   * Fetch calendars and date items that occur during a specific year (civil or liturgical).
   */
  async fetch(): Promise<Calendar> {
    const {
      ascensionOnSunday,
      corpusChristiOnSunday,
      country,
      epiphanyOnSunday,
      outputOptionalMemorials,
      type,
      year: theYear,
      locale,
      query,
    } = this.config;

    // Set the year range depending on the calendar type
    const years = type === 'liturgical' ? [theYear - 1, theYear] : [theYear];

    // Get a collection of date items from all liturgical seasons of the given year
    const seasonDatesPromise = years.map(async (year) => {
      return [
        ...(await Seasons.christmastide(year - 1, epiphanyOnSunday)),
        ...(await Seasons.earlyOrdinaryTime(year, epiphanyOnSunday)),
        ...(await Seasons.lent(year)),
        ...(await Seasons.eastertide(year)),
        ...(await Seasons.laterOrdinaryTime(year)),
        ...(await Seasons.advent(year)),
        ...(await Seasons.christmastide(year, epiphanyOnSunday)),
      ];
    });
    const seasonDates: FromCalendarDateItems = {
      fromCalendar: 'general',
      calendarItems: concatAll(await Promise.all(seasonDatesPromise)),
    };

    // Get the celebration dates based on the given year and options
    const celebrationsDatesPromise = years.map(async (year) => {
      return [...(await Celebrations.dates(year, this.config))];
    });
    const celebrationsDates: FromCalendarDateItems = {
      fromCalendar: 'general',
      calendarItems: concatAll(await Promise.all(celebrationsDatesPromise)),
    };

    // Get the general calendar based on the given year
    const generalDatesPromise = years.map(async (thisYear) => {
      const yearSpecificConfig = new Config({
        year: thisYear,
        country,
        locale,
        epiphanyOnSunday,
        corpusChristiOnSunday,
        ascensionOnSunday,
        outputOptionalMemorials,
        type,
        query,
      });
      return [...(await Calendar._fetchCalendar('general', yearSpecificConfig))];
    });
    const generalDates: FromCalendarDateItems = {
      fromCalendar: 'general',
      calendarItems: concatAll(await Promise.all(generalDatesPromise)),
    };

    // Get the relevant national calendar object based on the given year and country
    const nationalDatesPromise = years.map(async (thisYear) => {
      const yearSpecificConfig = new Config({
        year: thisYear,
        country,
        locale,
        epiphanyOnSunday,
        corpusChristiOnSunday,
        ascensionOnSunday,
        outputOptionalMemorials,
        type,
        query,
      });
      return [...(await Calendar._fetchCalendar(country, yearSpecificConfig))];
    });
    const nationalDates: FromCalendarDateItems = {
      fromCalendar: country,
      calendarItems: concatAll(await Promise.all(nationalDatesPromise)),
    };

    let calendarSources: FromCalendarDateItems[] = [seasonDates, celebrationsDates, generalDates, nationalDates];

    // Remove all date items not in the given date range
    calendarSources = Calendar._filterItemRange(this.startDate, this.endDate, ...calendarSources);

    // Remove all date items marked as 'drop' from any other date items
    calendarSources = Calendar._dropItems(calendarSources);

    // Push new item object as a new DateItem
    await this._push(calendarSources);

    // Finally, sort the DateItems by date and rank and keep only the relevant
    this._sortAndKeepRelevant();

    return this;
  }

  /**
   * Get all DateItems for a specific calendar
   */
  values(): RomcalDateItem[] {
    return this.dateItems;
  }

  /**
   * Push new DateItem objects in the Calendar object
   * @param calendars An array of calendar sources to process.
   */
  async _push(calendars: FromCalendarDateItems[]): Promise<void> {
    // Loop through each date source group
    for (const [index, calendar] of calendars.entries()) {
      const { fromCalendar, calendarItems } = calendar;

      // Loop through the dates in each source group
      for (const item of calendarItems) {
        // Remove non-prioritized celebrations in the date items array which share the same key as the current item
        this._keepPrioritizedOnly(item);

        // Find the season date that has the same date as the incoming item and make it the base item.
        const baseItem = find(this.dateItems, { date: item.date.toISOString(), _stack: 0 });

        const {
          key,
          name,
          rank,
          prioritized,
          seasons,
          seasonNames,
          periods,
          cycles,
          calendar,
          liturgicalColors,
          metadata,
          date,
        } = item;
        if (!isNil(key) && !isNil(name) && !isNil(rank) && !isNil(date)) {
          const validatedSeasons: Required<LiturgicalSeason[]> = seasons || baseItem?.seasons || [];
          const validatedSeasonNames: Required<string[]> = seasonNames || baseItem?.seasonNames || [];
          const validatedPeriods: Required<LiturgicalPeriod[]> = periods || baseItem?.periods || [];
          const validatedLiturgicalColors = this.checkOrDetermineLiturgicalColors(
            rank,
            validatedSeasons,
            liturgicalColors,
            metadata?.titles || [],
          );

          // Create a new DateItem and add it to the collection
          this.dateItems.push(
            new RomcalDateItem({
              key,
              name,
              rank,
              date,
              prioritized: !!prioritized,
              seasons: validatedSeasons,
              seasonNames: validatedSeasonNames,
              periods: validatedPeriods,
              cycles: cycles as Required<RomcalCycles>,
              calendar: calendar as Required<RomcalDateItemCalendar>,
              fromCalendar,
              liturgicalColors: validatedLiturgicalColors,
              liturgicalColorNames: await this.localizeLiturgicalColors(validatedLiturgicalColors),
              metadata: (typeof metadata === 'object' ? metadata : { titles: [] }) as RomcalDateItemMetadata,
              _stack: index, // The stack number refers to the index in the calendars array in which this celebration's array is placed at
              baseItem: baseItem, // Attach the base item if any
            }),
          );
        }
      }
    }
  }

  /**
   * Check the provided liturgical color and return it in the good type,
   * or if not provided, try to determine the right color for the celebration.
   * @private
   * @param rank The rank of the celebration
   * @param seasons The season(s) of the celebration
   * @param liturgicalColors The liturgical color(s) of the celebration, if defined
   * @param titles The title(s) of the celebration, if defined
   */
  private checkOrDetermineLiturgicalColors(
    rank: RanksEnum,
    seasons: LiturgicalSeason[],
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

    // If the celebration isn't a COMMEMORATION and is for a MARTYR, return RED
    // Otherwise, if the celebration isn't a COMMEMORATION or a WEEKDAY, return WHITE
    if (rank && ![RanksEnum.COMMEMORATION, RanksEnum.WEEKDAY].includes(rank)) {
      if (titles.includes(TITLES.MARTYR)) return [LiturgicalColorsEnum.RED];
      return [LiturgicalColorsEnum.WHITE];
    }

    // The WEEKDAY or COMMEMORATION is celebrated during LENT, return PURPLE
    if ([SeasonsEnum.LENT, SeasonsEnum.ADVENT].some((season) => seasons?.includes(season))) {
      return [LiturgicalColorsEnum.PURPLE];
    }

    // The WEEKDAY or COMMEMORATION is celebrated during ORDINARY_TIME, return PURPLE
    if (seasons?.includes(SeasonsEnum.ORDINARY_TIME)) {
      return [LiturgicalColorsEnum.GREEN];
    }

    // Otherwise, return WHITE that match all other seasons, or as a default color
    return [LiturgicalColorsEnum.WHITE];
  }

  /**
   * Returns the localized liturgical color(s) from the color key(s)
   * @param colors The liturgical color keys
   * @private
   */
  private localizeLiturgicalColors(colors: RomcalLiturgicalColor[]): Promise<string[]> {
    return Promise.all(colors.map(async (key) => await localize({ key: `liturgicalColors.${key}` })));
  }

  /**
   * If a previous date item already exists (has the same key name as the new one),
   * the previous date item will be removed in favour of the new given one,
   * except if the previous item is prioritized but not the new one
   */
  _keepPrioritizedOnly({ key: currentKey, prioritized: currentPrioritized }: RomcalDateItemInput): void {
    this.dateItems
      .filter(({ key }) => key === currentKey)
      .forEach(({ prioritized: previousPrioritized, _id: previousId }) => {
        if (!previousPrioritized || (previousPrioritized && currentPrioritized)) {
          // Remove previous item if it isn't prioritized
          // Remove previous item if both items are prioritized.
          removeWhere(this.dateItems, { _id: previousId });
        }
      });
  }

  /**
   * Sort all RomcalDateItems by relevance (the most relevant first)
   * in this order: by date, by priority, by rank, by stack.
   * and drop the non-relevant DateItems.
   */
  _sortAndKeepRelevant(): void {
    // Reorder the DateItems of a particular day, so that
    // when there are optional memorials or commemoration only (in addition to the weekday),
    // the weekday item is moved to the top before the optional items,
    // since it's the default item if none of the optional items are celebrated.
    const ranks = RANKS.slice(0, RANKS.length - 1);
    ranks.splice(ranks.indexOf('MEMORIAL') + 1, 0, RANKS[RANKS.length - 1]);

    // Remove optional memorials and commemorations by default, to keep only
    // relevant celebrations that exactly match for every days.
    // This can be disabled by specifying the `outputOptionalMemorials` flag
    // to `true` in the romcal config.
    if (!this.config.outputOptionalMemorials) {
      this.dateItems = this.dateItems.filter(
        (item) => ![RanksEnum.OPT_MEMORIAL, RanksEnum.COMMEMORATION].includes(item.rank),
      );
    }

    this.dateItems.sort(
      (
        { date: firstDate, prioritized: firstPrioritized, rank: firstRank, _stack: firstStack }: RomcalDateItem,
        { date: nextDate, prioritized: nextPrioritized, rank: nextRank, _stack: nextStack }: RomcalDateItem,
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

    // Now that the items are sorted, let's drop other non-relevant date items
    // if at least one of the date items isn't optional...
    // Create a dictionary where celebrations on the same date are grouped under
    // it's ISO string date string as the key and loop through each group to see
    // if there's more than one celebration in each group.
    Object.entries(_.groupBy(this.dateItems, 'date')).forEach(([, dateItems]) => {
      if (dateItems.length > 1) {
        // Validate the first date item
        const [dateItem, ...otherDateItems] = dateItems;
        // If the first date item has a type equal or higher than a MEMORIAL, or is prioritized:
        // keep only the first item and discard all others celebration in the array
        if (dateItem.prioritized || ranks.indexOf(dateItem.rank) <= ranks.indexOf(RanksEnum.MEMORIAL)) {
          otherDateItems.forEach(({ _id }) => {
            removeWhere(this.dateItems, { _id });
          });
        }
      }
    });
  }

  /**
   * Check if 'drop' has been defined for any celebrations in the national calendar
   * and remove them from both national and general calendar sources.
   *
   * @param sources A list of [[RomcalDateItem]] arrays for the operation
   */
  static _dropItems(sources: FromCalendarDateItems[]): FromCalendarDateItems[] {
    const dropKeys: string[] = [];
    sources.forEach((source: FromCalendarDateItems) => {
      source.calendarItems.forEach((dateItem: RomcalDateItemInput) => {
        if (dateItem.drop && dateItem.key) {
          dropKeys.push(dateItem.key);
        }
      });
    });
    return sources.map((source: FromCalendarDateItems) => ({
      fromCalendar: source.fromCalendar,
      calendarItems: source.calendarItems.filter((dateItem: RomcalDateItemInput) =>
        dateItem.key ? !dropKeys.includes(dateItem.key) : true,
      ),
    }));
  }

  /**
   * Only retain items within a given date range
   * @param startDate The lower range date to abide by
   * @param endDate The upper range date to abide by
   * @param calendarSources The 2 dimensional array containing various calendar sources to be filtered
   */
  static _filterItemRange(
    startDate: dayjs.Dayjs,
    endDate: dayjs.Dayjs,
    ...calendarSources: FromCalendarDateItems[]
  ): FromCalendarDateItems[] {
    const start = startDate;
    const end = endDate;
    return calendarSources.map((calendarSource: FromCalendarDateItems) => {
      return {
        fromCalendar: calendarSource.fromCalendar,
        calendarItems: calendarSource.calendarItems.filter((item: RomcalDateItemInput) => {
          return item.date.isSameOrAfter(start) && item.date.isSameOrBefore(end);
        }),
      };
    });
  }

  /**
   * Get the appropriate calendar definition object, based on the given region name and year.
   *
   * @param country The country to get
   * @param config The configuration instance to be send down to the calendar (includes the year to use for date resolutions)
   */
  static async _fetchCalendar(country: Country, config: Config): Promise<Array<RomcalDateItemInput>> {
    const { dates } = await import(
      /* webpackExclude: /index\.ts/ */
      /* webpackChunkName: "calendars/[request]" */
      /* webpackMode: "lazy" */
      /* webpackPrefetch: true */
      `../calendars/${country}`
    );
    const contextualizedDates: Array<RomcalDateItemInput> = await dates(config);
    return await Promise.all(contextualizedDates);
  }
}
