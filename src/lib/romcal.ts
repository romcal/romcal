import { Dictionary, isInteger, isNil, isObject } from '@romcal/utils/type-guards/type-guards';
import { RomcalConfig, BaseRomcalConfig } from '@romcal/models/config/config.model';
import { RomcalLiturgicalDay } from '@romcal/models/liturgical-day/liturgical-day.model';
import _ from 'lodash';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { setLocale } from '@romcal/lib/locales';
import { RomcalQuery } from '@romcal/constants/query-options/query-types.type';
import { hasKey } from '@romcal/utils/object/object';
import { RomcalTitle } from '@romcal/constants/titles/titles.type';
import { RomcalCalendar } from '@romcal/models/calendar/calendar.model';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

/**
 * Calendar Class:
 * Combine together all the different collections of liturgical day objects,
 * according to the liturgical calendar for the specific year.
 */
export default class Romcal {
  static calendarFor<T extends undefined | null>(options?: T): Promise<RomcalLiturgicalDay[]>;
  static calendarFor<T extends BaseRomcalConfig | number>(
    options?: T,
  ): T extends number
    ? Promise<RomcalLiturgicalDay[]>
    : 'query' extends keyof T
    ? Promise<RomcalLiturgicalDay[] | Dictionary<RomcalLiturgicalDay[]> | Dictionary<RomcalLiturgicalDay[]>[]>
    : Promise<RomcalLiturgicalDay[]>;
  /**
   * Returns an array of liturgical dates based on the supplied options.
   *
   * The array may return dates according to the given calendar year or liturgical
   * year depending on the options supplied.
   *
   * @param options A configuration object or a year (integer)
   */
  static async calendarFor(
    options?: BaseRomcalConfig | number,
  ): Promise<RomcalLiturgicalDay[] | Dictionary<RomcalLiturgicalDay[]> | Dictionary<RomcalLiturgicalDay[]>[]> {
    // return Romcal.calendarFor(options);
    let userConfig: BaseRomcalConfig = {};

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
    const resolvedConfig = await RomcalConfig.resolveConfig(userConfig);
    const config = new RomcalConfig(resolvedConfig);

    // Set the locale information
    await setLocale(config.locale);

    // Get a new collection of dates
    const calendar = new RomcalCalendar(config);
    const dates = calendar.compute();

    // Determine if there's a query to execute. If none,
    // just return the array if DateItems to the caller
    if (isNil(config.query) || !isObject(config.query) || isNil(options)) {
      return dates;
    } else {
      // Run queries and return the results
      return Romcal.queryFor(await dates, config.query);
    }
  }

  /**
   * Filters an array of dates generated from the calendarFor function based on a given query.
   *
   * @param dates An array of dates generated from the `calendarFor` function
   * @param query A query object containing criteria to filter the dates by
   */
  static queryFor<U extends undefined | null>(dates: RomcalLiturgicalDay[], query: U): RomcalLiturgicalDay[];
  static queryFor<U extends RomcalQuery>(
    dates: RomcalLiturgicalDay[],
    query: U,
  ): 'group' extends keyof U // is a group key defined in the query?
    ? U['group'] extends 'daysByMonth' | 'weeksByMonth' // does the group key have one of these values?
      ? Dictionary<RomcalLiturgicalDay[]>[]
      : Dictionary<RomcalLiturgicalDay[]>
    : 'month' extends keyof U // is a month key defined in the query?
    ? RomcalLiturgicalDay[]
    : 'day' extends keyof U // else is a day key defined in the query?
    ? RomcalLiturgicalDay[]
    : 'title' extends keyof U // else, is a title key defined in the query?
    ? RomcalLiturgicalDay[]
    : RomcalLiturgicalDay[]; // If none of the above, then return the original array;
  static queryFor(
    dates: RomcalLiturgicalDay[],
    query: RomcalQuery,
  ): RomcalLiturgicalDay[] | Dictionary<RomcalLiturgicalDay[]> | Dictionary<RomcalLiturgicalDay[]>[] {
    if (isNil(query)) {
      return dates;
    }
    if (hasKey(query, 'group')) {
      switch (query.group) {
        case 'months':
          return _.groupBy(dates, (d) => dayjs.utc(d.date).month());
        case 'daysByMonth':
          return _.map(
            _.groupBy(dates, (d) => dayjs.utc(d.date).month()),
            (monthGroup) => _.groupBy(monthGroup, (d) => dayjs.utc(d.date).day()),
          );
        case 'weeksByMonth':
          return _.map(
            _.groupBy(dates, (d) => dayjs.utc(d.date).month()),
            (v) => _.groupBy(v, (d) => d.calendar.weekOfGregorianYear),
          );
        case 'sundayCycles':
          return _.groupBy(dates, (d) => d.cycles.sundayCycle);
        case 'weekdayCycles':
          return _.groupBy(dates, (d) => d.cycles.weekdayCycle);
        case 'ranks':
          return _.groupBy(dates, (d) => d.rank);
        /**
         * Groups by the first liturgical season in the array
         */
        case 'liturgicalSeasons':
          return _.groupBy(dates, (d) => d.seasons[0]);
        case 'liturgicalColors':
          return _.groupBy(dates, (d) => d.liturgicalColors[0]);
        case 'psalterWeeks':
          return _.groupBy(dates, (d) => d.cycles.psalterWeek);
        case 'days':
        default:
          return _.groupBy(dates, (d) => dayjs.utc(d.date).day());
      }
    } else if (!isNil(query.month)) {
      // Months are zero indexed, so January is month 0.
      return dates.filter((dateItem) => dayjs.utc(dateItem.date).month() === query.month);
    } else if (!isNil(query.day)) {
      // Days are zero index, so Sunday is 0.
      return dates.filter((dateItem) => dayjs.utc(dateItem.date).day() === query.day);
    } else if (!isNil(query.title)) {
      const { title } = query;
      return dates.filter((date) => date.metadata.titles?.includes(title as RomcalTitle));
    } else {
      return dates;
    }
  }
}
