import '@romcal/utils/string-extentions/string-extentions';
import dayjs from 'dayjs';
import _ from 'lodash';

import {
  getLocale,
  getRankByDayOfWeek,
  localize,
  localizeDates,
  ordinal,
  sanitizePossibleLocaleValue,
  setLocale,
} from '@romcal/lib/Locales';

import { dates as temporalCelebrationDates } from '@romcal/lib/Celebrations';

import {
  advent,
  christmastide,
  earlyOrdinaryTime,
  easterOctave,
  paschalTriduum,
  eastertide,
  laterOrdinaryTime,
  lent,
} from '@romcal/lib/Seasons';

import { Calendar } from '@romcal/lib/Calendar';
import { Dates } from './lib/Dates';

import { RomcalLocale, RomcalLocaleKeys } from '@romcal/models/romcal-locale/romcal-locale';
import { RomcalDateItemModel, RomcalDateItemInput } from '@romcal/models/romcal-date-item/romcal-date-item.model';
import RomcalConfig, {
  RomcalConfigModel,
  RomcalConfigInCalendarDef,
} from '@romcal/models/romcal-config/romcal-config.model';

import { hasKey } from '@romcal/utils/object/object';

import { COUNTRIES } from '@romcal/constants/countries/countries.constant';
import { LITURGICAL_COLORS } from '@romcal/constants/liturgical-colors/liturgical-colors.constant';
import {
  CELEBRATIONS_CYCLE,
  SUNDAYS_CYCLE,
  WEEKDAYS_CYCLE,
  PSALTER_WEEKS,
} from '@romcal/constants/cycles/cycles.constant';
import {
  LITURGICAL_PERIODS,
  LITURGICAL_SEASONS,
} from '@romcal/constants/seasons-and-periods/seasons-and-periods.constant';
import { QUERY_TYPES } from '@romcal/constants/query-options/query-types.constant';
import { TITLES } from '@romcal/constants/titles/titles.constant';
import { RANKS } from '@romcal/constants/ranks/ranks.constant';

import {
  RomcalLiturgicalColor,
  RomcalLiturgicalColors,
} from '@romcal/constants/liturgical-colors/liturgical-colors.type';
import { Dictionary, isNil, isInteger, isObject } from '@romcal/utils/type-guards/type-guards';
import { RomcalCountry } from '@romcal/constants/countries/country.type';
import { RomcalDateItemSources } from '@romcal/models/romcal-date-item/date-item-sources.type';
import {
  RomcalCycles,
  RomcalCelebrationCycle,
  RomcalSundayCycle,
  RomcalWeekdayCycle,
  RomcalPsalterWeek,
} from '@romcal/constants/cycles/cycles.type';
import {
  RomcalLiturgicalSeason,
  RomcalLiturgicalSeasons,
  RomcalLiturgicalPeriod,
  RomcalLiturgicalPeriods,
} from '@romcal/constants/seasons-and-periods/seasons-and-periods.type';
import { RomcalLocaleKey } from '@romcal/models/romcal-locale/locale-types.type';
import { RomcalLocalizeParams } from '@romcal/models/romcal-locale/localize-params.type';
import { RomcalQuery, RomcalQueryType } from '@romcal/constants/query-options/query-types.type';
import { RomcalTitle, RomcalTitles } from '@romcal/constants/titles/titles.type';
import { RomcalRank, RomcalRanks } from '@romcal/constants/ranks/ranks.type';
import { RomcalDateItemCalendar } from './models/romcal-date-item/date-item-calendar.type';
import { RomcalDateItemMetadata } from './models/romcal-date-item/date-item-metadata.type';

/**
 * The export of the `romcal` module.
 */
export default class Romcal {
  /**
   * Filters an array of dates generated from the calendarFor function based on a given query.
   *
   * @param dates An array of dates generated from the `calendarFor` function
   * @param query A query object containing criteria to filter the dates by
   */
  static queryFor<U extends undefined | null>(dates: Array<RomcalDateItemModel>, query: U): RomcalDateItemModel[];
  static queryFor<U extends RomcalQuery>(
    dates: RomcalDateItemModel[],
    query: U,
  ): 'group' extends keyof U // is a group key defined in the query?
    ? U['group'] extends 'daysByMonth' | 'weeksByMonth' // does the group key have one of these values?
      ? Dictionary<RomcalDateItemModel[]>[]
      : Dictionary<RomcalDateItemModel[]>
    : 'month' extends keyof U // is a month key defined in the query?
    ? RomcalDateItemModel[]
    : 'day' extends keyof U // else is a day key defined in the query?
    ? RomcalDateItemModel[]
    : 'title' extends keyof U // else, is a title key defined in the query?
    ? RomcalDateItemModel[]
    : RomcalDateItemModel[]; // If none of the above, then return the original array;
  static queryFor(
    dates: RomcalDateItemModel[],
    query: RomcalQuery,
  ): RomcalDateItemModel[] | Dictionary<RomcalDateItemModel[]> | Dictionary<RomcalDateItemModel[]>[] {
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

  static calendarFor<T extends undefined | null>(options?: T): Promise<RomcalDateItemModel[]>;
  static calendarFor<T extends RomcalConfigModel | number>(
    options?: T,
  ): T extends number
    ? Promise<RomcalDateItemModel[]>
    : 'query' extends keyof T
    ? Promise<RomcalDateItemModel[] | Dictionary<RomcalDateItemModel[]> | Dictionary<RomcalDateItemModel[]>[]>
    : Promise<RomcalDateItemModel[]>;
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
    options?: RomcalConfigModel | number,
  ): Promise<RomcalDateItemModel[] | Dictionary<RomcalDateItemModel[]> | Dictionary<RomcalDateItemModel[]>[]> {
    let userConfig: RomcalConfigModel = {};

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

/**
 * Export for models supporting romcal
 */
export {
  RomcalLocale,
  RomcalLocaleKeys,
  RomcalDateItemModel,
  RomcalDateItemInput,
  RomcalDateItemCalendar,
  RomcalDateItemMetadata,
};

/**
 * Export for constants supporting romcal
 */
export {
  COUNTRIES,
  CELEBRATIONS_CYCLE,
  SUNDAYS_CYCLE,
  WEEKDAYS_CYCLE,
  PSALTER_WEEKS,
  LITURGICAL_COLORS,
  QUERY_TYPES,
  RANKS,
  LITURGICAL_SEASONS,
  LITURGICAL_PERIODS,
  TITLES,
};

/**
 * Export for types supporting romcal
 */

export {
  RomcalCountry,
  RomcalCelebrationCycle,
  RomcalCycles,
  RomcalSundayCycle,
  RomcalWeekdayCycle,
  RomcalPsalterWeek,
  RomcalLiturgicalColor,
  RomcalLiturgicalColors,
  RomcalQuery,
  RomcalQueryType,
  RomcalRank,
  RomcalRanks,
  RomcalLiturgicalSeason,
  RomcalLiturgicalSeasons,
  RomcalLiturgicalPeriod,
  RomcalLiturgicalPeriods,
  RomcalTitle,
  RomcalTitles,
  RomcalConfig,
  RomcalConfigModel,
  RomcalConfigInCalendarDef,
  RomcalDateItemSources,
  RomcalLocaleKey,
  RomcalLocalizeParams,
};

/**
 * Export for helper functions in the [[Locales]]
 */
export { getLocale, getRankByDayOfWeek, localize, localizeDates, ordinal, sanitizePossibleLocaleValue, setLocale };

/**
 * Export for helper functions in [[Dates]]
 */
export { Dates };

/**
 * Export for helper function(s) in [[Celebrations]]
 */
export { temporalCelebrationDates };

/**
 * Export for helper functions in [[Seasons]]
 */
export { advent, christmastide, earlyOrdinaryTime, easterOctave, paschalTriduum, eastertide, laterOrdinaryTime, lent };

// Other exports to provide convenience functions to the user
export { Calendar };
