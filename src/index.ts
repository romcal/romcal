import { DateItem } from './models/romcal-date-item';
import { TRomcalQuery, Dictionary, isNil, isInteger, isObject } from './utils/type-guards';
import { hasKey } from './utils/object';
import groupBy from 'lodash-es/groupBy';
// eslint-disable-next-line you-dont-need-lodash-underscore/map
import map from 'lodash-es/map';
import dayjs from 'dayjs';
import Config, { IRomcalConfig } from './models/romcal-config';
import { Locales } from './lib';
import { Calendar } from './lib/Calendar';

export default class Romcal {
  /**
   * Filters an array of dates generated from the calendarFor function based on a given query.
   *
   * @param dates An array of dates generated from the `calendarFor` function
   * @param query A query object containing criteria to filter the dates by
   */
  static queryFor<U extends undefined | null>(dates: Array<DateItem>, query: U): DateItem[];
  static queryFor<U extends TRomcalQuery>(
    dates: DateItem[],
    query: U,
  ): 'group' extends keyof U // is a group key defined in the query?
    ? U['group'] extends 'daysByMonth' | 'weeksByMonth' // does the group key have one of these values?
      ? Dictionary<DateItem[]>[]
      : Dictionary<DateItem[]>
    : 'month' extends keyof U // is a month key defined in the query?
    ? DateItem[]
    : 'day' extends keyof U // else is a day key defined in the query?
    ? DateItem[]
    : 'title' extends keyof U // else, is a title key defined in the query?
    ? DateItem[]
    : DateItem[]; // If none of the above, then return the original array;
  static queryFor(
    dates: DateItem[],
    query: TRomcalQuery,
  ): DateItem[] | Dictionary<DateItem[]> | Dictionary<DateItem[]>[] {
    if (isNil(query)) {
      return dates;
    }
    if (hasKey(query, 'group')) {
      switch (query.group) {
        case 'months':
          return groupBy(dates, d => dayjs.utc(d.date).month());
        case 'daysByMonth':
          // eslint-disable-next-line you-dont-need-lodash-underscore/map
          return map(
            groupBy(dates, d => dayjs.utc(d.date).month()),
            monthGroup => groupBy(monthGroup, d => dayjs.utc(d.date).day()),
          );
        case 'weeksByMonth':
          // eslint-disable-next-line you-dont-need-lodash-underscore/map
          return map(
            groupBy(dates, d => dayjs.utc(d.date).month()),
            v => groupBy(v, d => d.data.calendar?.week),
          );
        case 'cycles':
          return groupBy(dates, d => d.data.meta.cycle?.value);
        case 'types':
          return groupBy(dates, d => d.type);
        /**
         * Groups by the first liturgical season in the array
         */
        case 'liturgicalSeasons':
          return groupBy(dates, d => d.data.season[0].key);
        case 'liturgicalColors':
          return groupBy(dates, d => d.data.meta.liturgicalColor?.key);
        case 'psalterWeeks':
          return groupBy(dates, d => d.data.meta.psalterWeek?.key);
        case 'days':
        default:
          return groupBy(dates, d => dayjs.utc(d.date).day());
      }
    } else if (!isNil(query.month)) {
      // Months are zero indexed, so January is month 0.
      return dates.filter(dateItem => dayjs.utc(dateItem.date).month() === query.month);
    } else if (!isNil(query.day)) {
      // Days are zero index, so Sunday is 0.
      return dates.filter(dateItem => dayjs.utc(dateItem.date).day() === query.day);
    } else if (!isNil(query.title)) {
      const { title } = query;
      return dates.filter(date => date.data.meta.titles?.includes(title));
    } else {
      return dates;
    }
  }

  // const d1: DateItem[] = [];
  // const t0 = queryFor(d1);
  // const t1 = queryFor(d1, { day: 1 });
  // const t2 = queryFor(d1, { month: 1 });
  // const t3 = queryFor(d1, { title: "" });
  // const t4 = queryFor(d1, { group: "daysByMonth" });
  // const t5 = queryFor(d1, { group: "weeksByMonth" });
  // const t6 = queryFor(d1, { group: "months" });
  // const t7 = queryFor(d1, { group: "cycles" });
  // const t8 = queryFor(d1, { group: "types" });
  // const t9 = queryFor(d1, { group: "liturgicalSeasons" });
  // const t10 = queryFor(d1, { group: "liturgicalColors" });
  // const t11 = queryFor(d1, { group: "psalterWeeks" });
  // const t12 = queryFor(d1, { group: "days" });

  static calendarFor<T extends undefined | null>(options?: T): Promise<DateItem[]>;
  static calendarFor<T extends IRomcalConfig | number>(
    options?: T,
  ): T extends number
    ? Promise<DateItem[]>
    : 'query' extends keyof T
    ? Promise<DateItem[] | Dictionary<DateItem[]> | Dictionary<DateItem[]>[]>
    : Promise<DateItem[]>;
  /**
   * Returns an array of liturgical dates based on the supplied options.
   *
   * The array may return dates according to the given calendar year or liturgical
   * year depending on the options supplied.
   *
   * If a query object is passed, a filtered array of liturgical calendar dates is returned
   * according to the given calendar options and filtering options passed in by the user.
   *
   * If the config object has a query, it will be used to filter the
   * date results returned by an internal call to the `queryFor` method.
   *
   * @param options A configuration object or a year (integer)
   */
  static async calendarFor(
    options?: IRomcalConfig | number,
  ): Promise<DateItem[] | Dictionary<DateItem[]> | Dictionary<DateItem[]>[]> {
    let userConfig: IRomcalConfig = {};

    // If options is passed as an integer,
    // assume we want the calendar for the current year
    // with default options
    if (!isNil(options)) {
      if (isInteger(options)) {
        userConfig = { year: options };
      } else {
        userConfig = options;
      }
    }

    // Sanitize incoming config into a complete configuration set
    const resolvedConfig = await Config.resolveConfig(userConfig);
    const config = new Config(resolvedConfig);

    // Set the locale information
    await Locales.setLocale(config.locale);

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const calendar = new Calendar(config);
    // Get a new collection of dates
    const dates = (await calendar.fetch()).values();

    // Determine if there's a query to execute. If none,
    // just return the array if DateItems to the caller
    if (isNil(config.query) || !isObject(config.query) || isNil(options)) {
      return dates;
    } else {
      // Run queries and return the results
      return Romcal.queryFor(dates, config.query);
    }
  }
}
