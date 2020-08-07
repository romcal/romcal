import dayjs from 'dayjs';
import _ from 'lodash';

import {
  getLocale,
  getRankByDayOfWeek,
  localize,
  localizeDates,
  localizeLiturgicalColor,
  ordinal,
  sanitizePossibleLocaleValue,
  setLocale,
} from '@romcal/lib/Locales';

import { dates as temporalCelebrationDates } from '@romcal/lib/Celebrations';

import {
  allSaints,
  annunciation,
  ascension,
  ashWednesday,
  assumption,
  baptismOfTheLord,
  birthOfJohnTheBaptist,
  christTheKing,
  christmas,
  corpusChristi,
  datesAfterEpiphany,
  datesBeforeEpiphany,
  datesInOctaveOfEaster,
  datesOfAdvent,
  datesOfChristmas,
  datesOfEarlyOrdinaryTime,
  datesOfEaster,
  datesOfLaterOrdinaryTime,
  datesOfLent,
  divineMercySunday,
  easter,
  epiphany,
  firstSundayOfAdvent,
  goodFriday,
  holyFamily,
  holySaturday,
  holyThursday,
  holyWeek,
  immaculateConception,
  immaculateHeartOfMary,
  josephHusbandOfMary,
  maryMotherOfGod,
  octaveOfChristmas,
  palmSunday,
  pentecostSunday,
  peterAndPaulApostles,
  presentationOfTheLord,
  sacredHeartOfJesus,
  sundaysOfAdvent,
  sundaysOfEarlyOrdinaryTime,
  sundaysOfEaster,
  sundaysOfLaterOrdinaryTime,
  sundaysOfLent,
  theExaltationOfTheHolyCross,
  transfiguration,
  trinitySunday,
} from '@romcal/lib/Dates';

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

import { RomcalLocale, RomcalLocaleKeys } from '@romcal/models/romcal-locale';
import {
  RomcalDateItem,
  DateItemData,
  DateItemMetadata,
  IRomcalDateItem,
  RomcalDateItemInput,
  RomcalDateItemData,
  RomcalDateItemCalendar,
  RomcalDateItemMetadata,
  TDateItemInput,
} from '@romcal/models/romcal-date-item';
import Config, { RomcalConfig, IRomcalDefaultConfig, TConfigConstructorType } from '@romcal/models/romcal-config';

import { hasKey } from '@romcal/utils/object';

import { COUNTRIES } from '@romcal/constants/country-list.constant';
import { LITURGICAL_COLORS, LITURGICAL_COLOR_KEYS } from '@romcal/constants/liturgical-colors.constant';
import {
  LITURGICAL_SUNDAY_CYCLES,
  LITURGICAL_FERIAL_CYCLES,
  PSALTER_WEEKS,
} from '@romcal/constants/liturgical-cycles.constant';
import { LITURGICAL_SEASONS } from '@romcal/constants/seasons-and-periods.constant';
import { QUERY_TYPES } from '@romcal/constants/query-types.constant';
import { TITLES } from '@romcal/constants/titles.constant';
import { RANKS } from '@romcal/constants/ranks.constant';

import { Dictionary, isNil, isInteger, isObject } from '@romcal/utils/type-guards';
import { ChristmastideEndings } from '@romcal/types/christmastide-endings.type';
import { Countries } from '@romcal/types/countries.type';
import { DateItemSources } from '@romcal/types/date-item-sources.type';
import { LiturgicalColor, LiturgicalColorKeys, LiturgicalColors } from '@romcal/types/liturgical-colors.type';
import { RomcalCycles, RomcalSundayCycle, RomcalFerialCycle, PsalterWeek } from '@romcal/types/liturgical-cycles.type';
import {
  LiturgicalSeason,
  LiturgicalSeasons,
  LiturgicalPeriod,
  LiturgicalPeriods,
} from '@romcal/types/seasons-and-periods.type';
import { LocaleTypes } from '@romcal/types/locale-types.type';
import { LocalizeParams } from '@romcal/types/localize-params.type';
import { Query, QueryType } from '@romcal/types/query-type.type';
import { Title, Titles } from '@romcal/types/titles.type';
import { Types } from '@romcal/types/types.type';

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
  static queryFor<U extends undefined | null>(dates: Array<RomcalDateItem>, query: U): RomcalDateItem[];
  static queryFor<U extends Query>(
    dates: RomcalDateItem[],
    query: U,
  ): 'group' extends keyof U // is a group key defined in the query?
    ? U['group'] extends 'daysByMonth' | 'weeksByMonth' // does the group key have one of these values?
      ? Dictionary<RomcalDateItem[]>[]
      : Dictionary<RomcalDateItem[]>
    : 'month' extends keyof U // is a month key defined in the query?
    ? RomcalDateItem[]
    : 'day' extends keyof U // else is a day key defined in the query?
    ? RomcalDateItem[]
    : 'title' extends keyof U // else, is a title key defined in the query?
    ? RomcalDateItem[]
    : RomcalDateItem[]; // If none of the above, then return the original array;
  static queryFor(
    dates: RomcalDateItem[],
    query: Query,
  ): RomcalDateItem[] | Dictionary<RomcalDateItem[]> | Dictionary<RomcalDateItem[]>[] {
    if (isNil(query)) {
      return dates;
    }
    if (hasKey(query, 'group')) {
      switch (query.group) {
        case 'months':
          return _.groupBy(dates, d => dayjs.utc(d.date).month());
        case 'daysByMonth':
          return _.map(
            _.groupBy(dates, d => dayjs.utc(d.date).month()),
            monthGroup => _.groupBy(monthGroup, d => dayjs.utc(d.date).day()),
          );
        case 'weeksByMonth':
          return _.map(
            _.groupBy(dates, d => dayjs.utc(d.date).month()),
            v => _.groupBy(v, d => d.calendar.weekOfGregorianYear),
          );
        case 'sundayCycles':
          return _.groupBy(dates, d => d.cycles.sundayCycle);
        case 'ferialCycles':
          return _.groupBy(dates, d => d.cycles.ferialCycle);
        case 'ranks':
          return _.groupBy(dates, d => d.rank);
        /**
         * Groups by the first liturgical season in the array
         */
        case 'liturgicalSeasons':
          return _.groupBy(dates, d => d.seasons[0]);
        case 'liturgicalColors':
          return _.groupBy(dates, d => d.data.meta.liturgicalColor?.key);
        case 'psalterWeeks':
          return _.groupBy(dates, d => d.cycles.psalterWeek);
        case 'days':
        default:
          return _.groupBy(dates, d => dayjs.utc(d.date).day());
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

  static calendarFor<T extends undefined | null>(options?: T): Promise<RomcalDateItem[]>;
  static calendarFor<T extends RomcalConfig | number>(
    options?: T,
  ): T extends number
    ? Promise<RomcalDateItem[]>
    : 'query' extends keyof T
    ? Promise<RomcalDateItem[] | Dictionary<RomcalDateItem[]> | Dictionary<RomcalDateItem[]>[]>
    : Promise<RomcalDateItem[]>;
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
    options?: RomcalConfig | number,
  ): Promise<RomcalDateItem[] | Dictionary<RomcalDateItem[]> | Dictionary<RomcalDateItem[]>[]> {
    let userConfig: RomcalConfig = {};

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
  RomcalDateItem,
  DateItemData,
  DateItemMetadata,
  IRomcalDateItem,
  RomcalDateItemInput,
  RomcalDateItemData,
  RomcalDateItemCalendar,
  RomcalDateItemMetadata,
};

/**
 * Export for constants supporting romcal
 */
export {
  COUNTRIES,
  LITURGICAL_COLOR_KEYS,
  LITURGICAL_COLORS,
  LITURGICAL_SUNDAY_CYCLES,
  LITURGICAL_FERIAL_CYCLES,
  PSALTER_WEEKS,
  LITURGICAL_SEASONS,
  QUERY_TYPES,
  TITLES,
  RANKS,
};

/**
 * Export for types supporting romcal
 */
export {
  TDateItemInput,
  Dictionary,
  Config,
  IRomcalDefaultConfig,
  TConfigConstructorType,
  ChristmastideEndings,
  Countries,
  DateItemSources,
  LiturgicalColor,
  LiturgicalColorKeys,
  LiturgicalColors,
  RomcalCycles,
  RomcalSundayCycle,
  RomcalFerialCycle,
  PsalterWeek,
  LiturgicalSeason,
  LiturgicalSeasons,
  LiturgicalPeriod,
  LiturgicalPeriods,
  LocaleTypes,
  LocalizeParams,
  Query,
  QueryType,
  Title,
  Titles,
  Types,
};

/**
 * Export for helper functions in the [[Locales]]
 */
export {
  getLocale,
  getRankByDayOfWeek,
  localize,
  localizeDates,
  localizeLiturgicalColor,
  ordinal,
  sanitizePossibleLocaleValue,
  setLocale,
};

/**
 * Export for helper functions in [[Dates]]
 */
export {
  allSaints,
  annunciation,
  ascension,
  ashWednesday,
  assumption,
  baptismOfTheLord,
  birthOfJohnTheBaptist,
  christTheKing,
  christmas,
  corpusChristi,
  datesAfterEpiphany,
  datesBeforeEpiphany,
  datesInOctaveOfEaster,
  datesOfAdvent,
  datesOfChristmas,
  datesOfEarlyOrdinaryTime,
  datesOfEaster,
  datesOfLaterOrdinaryTime,
  datesOfLent,
  divineMercySunday,
  easter,
  epiphany,
  firstSundayOfAdvent,
  goodFriday,
  holyFamily,
  holySaturday,
  holyThursday,
  holyWeek,
  immaculateConception,
  immaculateHeartOfMary,
  josephHusbandOfMary,
  maryMotherOfGod,
  octaveOfChristmas,
  palmSunday,
  pentecostSunday,
  peterAndPaulApostles,
  presentationOfTheLord,
  sacredHeartOfJesus,
  sundaysOfAdvent,
  sundaysOfEarlyOrdinaryTime,
  sundaysOfEaster,
  sundaysOfLaterOrdinaryTime,
  sundaysOfLent,
  theExaltationOfTheHolyCross,
  transfiguration,
  trinitySunday,
};

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
