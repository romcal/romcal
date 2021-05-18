import _ from 'lodash';

import { parse, Schema } from 'bcp-47';
import { toOrdinal } from 'number-to-words';
import { logger } from '@romcal/utils/logger/logger';

import { findDescendantValueByKeys, mergeObjectsUniquely } from '@romcal/utils/object/object';
import { isNil, isString } from '@romcal/utils/type-guards/type-guards';
import { RomcalLocale } from '@romcal/models/locale/romcal-locale.type';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { LiturgicalDayInput, RomcalLiturgicalDayNamespace } from '@romcal/models/liturgical-day/liturgical-day.types';
import { RomcalLocaleKey } from '@romcal/models/locale/locale-types.type';
import { RomcalLocalizeParams } from '@romcal/models/locale/localize-params.type';

/**
 * Load DayJS and relevant plugins
 */
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { default as Locales } from '@romcal/locales';

/**
 * Extend dayjs instance with plugins
 */
dayjs.extend(updateLocale);
dayjs.extend(advancedFormat);

/**
 *  Mustache style templating is easier on the eyes
 */
_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

/**
 * Set locale
 * Locale lookup for liturgical day names are based on [i18n conventions as used by DayJS](https://github.com/iamkun/dayjs/tree/dev/src/locale).
 * romcal defines at least the default 'en' language as a fallback.
 * If a region is specified in the locale ('xx-XX'), romcal will
 * automatically manage a graceful fallback to its base language ('xx'), if it exists in 'src/locales'.
 * We get then a cascade fallbacks: region ('xx-XX') -> base language ('xx') -> default 'en'
 * For example: if a string is missing in 'fr-CA', it will try to pick it in 'fr', and then in 'en'.
 */
const _fallbackLocaleKey: RomcalLocaleKey = 'en';

/**
 * Cache value for the array of locales to be used for calendar output.
 */
let _localeContents: RomcalLocale[];

/**
 * The cache key that holds the flattened _locales array.
 */
let _combinedLocaleContents: RomcalLocale | undefined;

/**
 * Cache value to hold the current locale's data.
 */
let _dayjsLocale: ILocale;

/**
 * Attempts to sanitize the incoming value into a valid BCP-47 IETF locale string.
 * @param locale The locale value to sanitize
 */
export const sanitizeLocale = (
  locale: string,
): {
  locale: string;
  language: string;
  region: string | undefined;
} => {
  let sanitizedLocale: 'en' | string;

  // Evaluate the specified locale config
  const locales = Object.keys(Locales);
  let localeSchema: Schema = parse(locale.toLowerCase(), {
    forgiving: true, // https://www.npmjs.com/package/bcp-47#optionsforgiving
  });
  let { language, region } = localeSchema;

  // Locale is not a valid format
  if (!language) {
    logger.warn(
      `The locale '${locale}' is not a valid IETF BCP-47 format. romcal will defaults to the '${_fallbackLocaleKey}' locale.`,
    );
    language = _fallbackLocaleKey;
    region = undefined;
  }

  // Language only, and Language-Region not supported by romcal,
  if (!(language && locales.includes(language)) && !(language && region && locales.includes(`${language}-${region}`))) {
    logger.warn(
      `The locale '${locale}' is currently not supported by romcal. romcal will defaults to the '${_fallbackLocaleKey}' locale.`,
    );
    language = _fallbackLocaleKey;
    region = undefined;
  }

  // Rewrite the local from parsed data
  sanitizedLocale = language;
  if (region) sanitizedLocale += `-${region}`;

  // Region not supported by romcal, but language is
  if (region && !locales.includes(sanitizedLocale)) {
    logger.warn(
      `The locale '${locale}' is currently not supported by romcal. romcal will defaults to its base '${language}' locale.`,
    );
    sanitizedLocale = language;
    region = undefined;
  }

  if (locale.toLowerCase() !== sanitizedLocale) {
    logger.warn(`Using '${sanitizedLocale}' as locale for romcal (instead of '${locale}').`);
  }

  return {
    locale: sanitizedLocale,
    language: language,
    region: region,
  };
};

/**
 * Sets the global locale for DayJS to be used for date operations throughout the library.
 * @param key The language key to use
 * @param customOrdinalFn An optional custom function to use for generating ordinal number values (defaults [[Locales.ordinal]] if not set)
 */
const setLocale = async (key: RomcalLocaleKey, customOrdinalFn: (v: number) => string = toOrdinal): Promise<void> => {
  // When setLocale() is called, all cache values are purged
  _localeContents = [];
  _combinedLocaleContents = undefined;

  const { locale, language, region } = sanitizeLocale(key);

  const locales = [
    // Include the current locale, if different of the default 'en' locale
    ...((): string[] => (locale !== _fallbackLocaleKey ? [locale] : []))(),
    // Include the base language locale, if available, and if the current locale is a region locale
    ...((): string[] =>
      region && locale === `${language}-${region}` && Object.keys(Locales).includes(language) ? [language] : [])(),
    // Finally, include the default 'en' locale
    _fallbackLocaleKey,
  ];

  // Attempt to load the corresponding locale file
  for (const localeKey of locales) {
    try {
      const { default: localeContent } = await import(
        /* webpackExclude: /index\.ts/ */
        /* webpackChunkName: "locales/[request]" */
        /* webpackMode: "lazy" */
        `@romcal/locales/${localeKey}`
      );
      _localeContents = [..._localeContents, localeContent as RomcalLocale];
    } catch (e) {
      logger.error(`Failed to load the '${localeKey}' language file for romcal.`);
    }
  }

  // Attempt to load the relevant DayJS locale configuration object
  let currentDayjsLocale = locale;
  for (const [index, localeKey] of locales.entries()) {
    try {
      const { default: dayjsLocale } = await import(
        /* webpackExclude: /(index|types)\.d\.ts/ */
        /* webpackMode: "eager" */
        `dayjs/locale/${localeKey}`
      );
      _dayjsLocale = dayjsLocale as ILocale;
      currentDayjsLocale = localeKey;

      // Set the locale
      dayjs.locale(currentDayjsLocale);

      // Logging when an alternative locale is used in DayJS
      if (index > 0) {
        logger.info(`Using the '${localeKey}' locale in Day.js, and '${locale}' in romcal.`);
      }

      break;
    } catch (e) {
      logger.warn(
        `Failed to load the '${localeKey}' locale file for the romcal’s date management library. Maybe '${localeKey}' doesn't exists in Day.js.`,
      );
    }
  }

  /**
   * Ensure that the first day is always a Sunday in romcal & DayJS
   * Monday is the first day of the week according to the international standard ISO 8601,
   * In the US, Canada, and Japan, it's counted as the second day of the week (Sunday is the first day).
   * In Christian calendars, Sunday is always the first day of the week.
   * In other words, the romcal will use US, Canada definitions for the start of the week.
   */
  dayjs.updateLocale(currentDayjsLocale, {
    weekStart: 0,
    week: {
      dow: 0, // US, Canada: 1st day of week is Sunday
      doy: 6, // US, Canada: 1st week of the year is the one that contains the 1st of January (7 + 0 - 1)
    },
    ...(isNil(_dayjsLocale.ordinal) && {
      // If the current locale's data doesn't have its own ordinal function, use this default ordinal function
      customOrdinalFn,
    }),
  });

  logger.debug(`romcal is now configured to use ${currentDayjsLocale}`);
};

/**
 * Get the current locale object.
 *
 * Return an object that combines the main locale with its fallback.
 * And use cache in case this function is called multiple times
 * without the locale being modified.
 */
const getLocale = (): RomcalLocale => {
  if (isNil(_combinedLocaleContents)) {
    if (_localeContents.length > 1) {
      const [regionLocale, fallbackLocale] = _localeContents;
      _combinedLocaleContents = mergeObjectsUniquely(regionLocale, fallbackLocale);
    } else {
      _combinedLocaleContents = _localeContents[0];
    }
  }
  return _combinedLocaleContents;
};

/**
 * Resolves the correct locale string based on the given key.
 * The function accepts several parameters:
 *
 * ```
 * Utils.localize({
 *   key: '',
 *   week: 0,
 *   count: 0,
 * });
 * ```
 *
 * - `key`: A dot delimited string representing the locale key (`celebrations.christmas`)
 * - `week`: A non-zero integer for weeks which will be converted to its ordinal representation (1st Sunday of Advent)
 * - `count`: A non-zero integer for days which will be converted to its ordinal representation (2nd Sunday of Christmas)
 *
 * @param localizeParams Options for retrieving the localized key
 */
const localize = async ({ key, count, week, day, useDefaultOrdinalFn }: RomcalLocalizeParams): Promise<string> => {
  // Get the IETF locale set in DayJS and obtain its corresponding locale data object
  const value = findDescendantValueByKeys(getLocale(), key.split('.'));

  // Run the template against the options provided
  return _.template(value)({
    key,
    // If defined, pluralize a week and add it to the given template
    ...(typeof week === 'number' && {
      week: useDefaultOrdinalFn === true ? toOrdinal(week) : _dayjsLocale.ordinal?.(week) ?? toOrdinal(week),
    }),
    ...(typeof count === 'number' && {
      count: useDefaultOrdinalFn === true ? toOrdinal(count) : _dayjsLocale.ordinal?.(count) ?? toOrdinal(count),
    }),
    // If defined, add the day to be included in the translation
    ...(isString(day) && { day }),
  });
};

/**
 * Utility function that takes an array of national calendar dates
 * and adds a localized name based on the key.
 *
 * Allows the specification of a namespace where when defined, points the localization logic
 * to a specific sub-tree within the locale file to obtain localized values from.
 *
 * If the namespace is `temporale`, the logic will only use the key for the lookup.
 *
 * @param dates A list of [[RomcalDateItem]]s to process
 * @param namespace The namespace of the date to localize. This value is used to lookup a specific sub tree in the locale file for the localized value.
 */
const localizeDates = async (
  dates: Array<LiturgicalDayInput>,
  namespace: RomcalLiturgicalDayNamespace = 'sanctorale',
): Promise<LiturgicalDayInput[]> => {
  const promiseDates: Promise<LiturgicalDayInput>[] = dates.map(async (date: LiturgicalDayInput) => {
    if (date.name !== undefined) return Promise.resolve(date);
    return {
      ...date,
      name: await localize({
        // If the namespace is `temporale`, do not append anything before the date key
        key: `${namespace === 'temporale' ? date.key : !isNil(date.namespace) ? date.namespace : namespace}.${
          date.key
        }`,
      }),
    } as LiturgicalDayInput;
  });
  return await Promise.all(promiseDates);
};

/**
 * Given a "day" integer from DayJS that represents the day of week, determine
 * the rank of day from the [[Rank]] enum
 * @param day A "day" integer that should come from the DayJS library
 */
const getRankByDayOfWeek = (day: number): Ranks => (day === 0 ? Ranks.SUNDAY : Ranks.WEEKDAY);

export { setLocale, getLocale, localize, localizeDates, getRankByDayOfWeek };
