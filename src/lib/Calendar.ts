import * as Dates from '@romcal/lib/Dates';
import * as Seasons from '@romcal/lib/Seasons';
import * as Celebrations from '@romcal/lib/Celebrations';
import { localizeLiturgicalColor } from '@romcal/lib/Locales';
import { isNil } from '@romcal/utils/type-guards';
import Config from '@romcal/models/romcal-config';
import { DateItem, RomcalDateItem, RomcalDateItemData } from '@romcal/models/romcal-date-item';
import { find, removeWhere, groupByKey, concatAll } from '@romcal/utils/array';
import { TYPES } from '@romcal/constants/types.constant';
import { TypesEnum } from '@romcal/enums/types.enum';

import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { Countries } from '@romcal/types/countries.type';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

// const d2: DateItem[] = [];
// const tt1 = calendarFor();
// const tt2 = calendarFor(2020);
// const tt3 = calendarFor({ year: 2020 });
// const tt3 = calendarFor({ query: { day: 1 } });

/**
 * Calendar Class:
 * Combine together all the different collections of date item objects,
 * according to the liturgical calendar for the specific year.
 */
export class Calendar {
  private dateItems: Array<DateItem> = [];
  private config: Config;
  private startDate: dayjs.Dayjs;
  private endDate: dayjs.Dayjs;

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
      christmastideEnds,
      christmastideIncludesTheSeasonOfEpiphany,
      corpusChristiOnSunday,
      country,
      epiphanyOnSunday,
      type,
      year: theYear,
      locale,
      query,
    } = this.config;

    // Set the year range depending on the calendar type
    const years = type === 'liturgical' ? [theYear - 1, theYear] : [theYear];

    // Get a collection of date items from all liturgical seasons of the given year
    const seasonDatesPromise = years.map(async year => {
      return [
        ...(await Seasons.christmastide(
          year - 1,
          christmastideEnds,
          epiphanyOnSunday,
          christmastideIncludesTheSeasonOfEpiphany,
        )),
        ...(await Seasons.earlyOrdinaryTime(year, christmastideEnds, epiphanyOnSunday)),
        ...(await Seasons.lent(year)),
        ...(await Seasons.eastertide(year)),
        ...(await Seasons.laterOrdinaryTime(year)),
        ...(await Seasons.advent(year)),
        ...(await Seasons.christmastide(
          year,
          christmastideEnds,
          epiphanyOnSunday,
          christmastideIncludesTheSeasonOfEpiphany,
        )),
      ];
    });
    const seasonDates = concatAll(await Promise.all(seasonDatesPromise));

    // Get the celebration dates based on the given year and options
    const celebrationsDatesPromise = years.map(async year => {
      return [...(await Celebrations.dates(year, this.config))];
    });
    const celebrationsDates = concatAll(await Promise.all(celebrationsDatesPromise));

    // Get the general calendar based on the given year
    const generalDatesPromise = years.map(async thisYear => {
      const yearSpecificConfig = new Config({
        year: thisYear,
        country,
        locale,
        christmastideEnds,
        epiphanyOnSunday,
        christmastideIncludesTheSeasonOfEpiphany,
        corpusChristiOnSunday,
        ascensionOnSunday,
        type,
        query,
      });
      return [...(await Calendar._fetchCalendar('general', yearSpecificConfig))];
    });
    const generalDates: Array<RomcalDateItem> = concatAll(await Promise.all(generalDatesPromise));

    // Get the relevant national calendar object based on the given year and country
    const nationalDatesPromise = years.map(async thisYear => {
      const yearSpecificConfig = new Config({
        year: thisYear,
        country,
        locale,
        christmastideEnds,
        epiphanyOnSunday,
        christmastideIncludesTheSeasonOfEpiphany,
        corpusChristiOnSunday,
        ascensionOnSunday,
        type,
        query,
      });
      return [...(await Calendar._fetchCalendar(country, yearSpecificConfig))];
    });
    const nationalDates: Array<RomcalDateItem> = concatAll(await Promise.all(nationalDatesPromise));

    let calendarSources: Array<Array<RomcalDateItem>> = [seasonDates, celebrationsDates, generalDates, nationalDates];

    // Remove all date items not in the given date range
    calendarSources = Calendar._filterItemRange(this.startDate, this.endDate, ...calendarSources);

    // Remove all date items marked as 'drop' from any other date items
    calendarSources = Calendar._dropItems(calendarSources);

    // Push new item object as a new DateItem
    this._push(calendarSources);

    // Finally, sort the DateItems by date and rank and keep only the relevant
    this._sortAndKeepRelevant();

    return this;
  }

  /**
   * Get all DateItems for a specific calendar
   */
  values(): DateItem[] {
    return this.dateItems;
  }

  /**
   * Push new DateItem objects in the Calendar object
   * @param calendars An array of calendar sources to process.
   */
  _push(calendars: Array<Array<RomcalDateItem>>): void {
    // Loop through each date source group
    calendars.forEach((calendar: Array<RomcalDateItem>, index: number) =>
      // Loop through the dates in each source group
      calendar.forEach((item: RomcalDateItem) => {
        // Remove non-prioritized celebrations in the date items array which share the same key as the current item
        this._keepPrioritizedOnly(item);

        // Find the season date that has the same date as the incoming item and make it the base item.
        const baseItem = find(this.dateItems, { date: item.date.toISOString(), _stack: 0 });

        const { key, name, type, data, date } = item;
        if (!isNil(key) && !isNil(name) && !isNil(type) && !isNil(date)) {
          // Create a new DateItem and add it to the collection
          this.dateItems.push(
            new DateItem({
              key,
              name,
              type,
              date,
              data: (data as Required<RomcalDateItemData>) ?? {},
              _stack: index, // The stack number refers to the index in the calendars array in which this celebration's array is placed at
              baseItem, // Attach the base item if any
            }),
          );
        }
      }),
    );
  }

  /**
   * If a previous date item already exists (has the same key name as the new one),
   * the previous date item will be removed in favour of the new given one,
   * except if the previous item is prioritized but not the new one
   */
  _keepPrioritizedOnly({ key: currentKey, data: currentData }: RomcalDateItem): void {
    this.dateItems
      .filter(({ key }) => key === currentKey)
      .forEach(({ data: previousData, _id: previousId }) => {
        if (!previousData.prioritized || (previousData.prioritized && currentData?.prioritized)) {
          // Remove previous item if it isn't priortized
          // Remove previous item if both items are prioritized.
          removeWhere(this.dateItems, { _id: previousId });
        }
      });
  }

  /**
   * Sort all DateItems by relevance (the most relevant first)
   * and drop the non-relevant DateItems.
   *
   * Reorder the DateItems of a particular day, so that
   * when there are optional memorials or commemoration only (in addition to the feria),
   * the feria item is moved to the top before the optional items,
   * since it's the default item if none of the optional items are celebrated.
   * Sort all date items by relevance (the most relevant first),
   * in this order: by date, by priority, by type, by stack.
   */
  _sortAndKeepRelevant(): void {
    const types = TYPES.slice(0, TYPES.length - 1);
    types.splice(types.indexOf('MEMORIAL') + 1, 0, TYPES[TYPES.length - 1]);
    this.dateItems.sort(
      (
        { date: firstDate, data: firstData, type: firstType, _stack: firstStack }: DateItem,
        { date: nextDate, data: nextData, type: nextType, _stack: nextStack }: DateItem,
      ): number => {
        // 1. Sort by date
        if (dayjs.utc(firstDate).isBefore(dayjs.utc(nextDate))) {
          return -1;
        } else if (dayjs.utc(firstDate).isAfter(dayjs.utc(nextDate))) {
          return 1;
        } else {
          // If the date is the same...
          // 2. Sort by priority (prioritized first)
          const { prioritized: firstPrioritized } = firstData;
          const { prioritized: nextPrioritized } = nextData;
          if (firstPrioritized && !nextPrioritized) {
            return -1;
          } else if (!firstPrioritized && nextPrioritized) {
            return 1;
          } else {
            // If neither date is prioritized
            // 3. Sort by type (higher type first)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const type1 = types.indexOf(TYPES[firstType] as any);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const type2 = types.indexOf(TYPES[nextType] as any);
            if (type1 < type2) {
              return -1;
            } else if (type1 > type2) {
              return 1;
            } else {
              // If the types are the same
              // 4. Sort by stack (higher stack first)
              if (firstStack > nextStack) {
                return -1;
              } else if (firstStack < nextStack) {
                return 1;
              } else {
                return 0; // No idea how to sort this...
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
    Object.entries(groupByKey(this.dateItems, 'date')).forEach(([, dateItems]) => {
      if (dateItems.length > 1) {
        // Validate the first date item
        const [dateItem, ...otherDateItems] = dateItems;
        // If the first date item has a type equal or higher than a MEMORIAL, or is prioritized:
        // keep only the first item and discard all others celebration in the array
        if (
          dateItem.data.prioritized ||
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          types.indexOf(TYPES[dateItem.type] as any) <= types.indexOf(TYPES[TypesEnum.MEMORIAL] as any)
        ) {
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
  static _dropItems(sources: Array<Array<RomcalDateItem>>): Array<Array<RomcalDateItem>> {
    const dropKeys: string[] = [];
    sources.forEach((source: RomcalDateItem[]) => {
      source.forEach((dateItem: RomcalDateItem) => {
        if (dateItem.drop && dateItem.key) {
          dropKeys.push(dateItem.key);
        }
      });
    });
    return sources.map((source: RomcalDateItem[]) => {
      return source.filter((dateItem: RomcalDateItem) => {
        return dateItem.key ? !dropKeys.includes(dateItem.key) : true;
      });
    });
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
    ...calendarSources: Array<Array<RomcalDateItem>>
  ): Array<Array<RomcalDateItem>> {
    const start = startDate;
    const end = endDate;
    return calendarSources.map((calendarSource: Array<RomcalDateItem>) => {
      return calendarSource.filter((item: RomcalDateItem) => {
        return item.date.isSameOrAfter(start) && item.date.isSameOrBefore(end);
      });
    });
  }

  /**
   * Get the appropriate calendar definition object, based on the given region name and year.
   *
   * @param country The country to get
   * @param config The configuration instance to be send down to the calendar (includes the year to use for date resolutions)
   */
  static async _fetchCalendar(country: Countries, config: Config): Promise<Array<RomcalDateItem>> {
    const { dates } = await import(
      /* webpackExclude: /index\.ts/ */
      /* webpackChunkName: "calendars/[request]" */
      /* webpackMode: "lazy" */
      /* webpackPrefetch: true */
      `../calendars/${country}`
    );
    const contextualizedDates: Array<RomcalDateItem> = await dates(config);
    const promises = contextualizedDates.map(async date => {
      return {
        ...date,
        data: {
          ...date.data,
          meta: {
            ...date.data?.meta,
            ...(!isNil(date.data?.meta?.liturgicalColor) && {
              liturgicalColor: await localizeLiturgicalColor(date.data?.meta?.liturgicalColor),
            }),
          },
        },
      } as RomcalDateItem;
    });
    return await Promise.all(promises);
  }
}
