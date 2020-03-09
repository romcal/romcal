import template from 'lodash-es/template';
import templateSettings from 'lodash-es/templateSettings';

import { parse, Schema } from 'bcp-47';
import { toOrdinal, toWordsOrdinal } from 'number-to-words';

import { findDescendantValueByKeys, mergeObjectsUniquely } from '../utils/object';
import { isNil, TLocalizeParams, isString } from '../utils/type-guards';
import { IRomcalLocale } from '../models/romcal-locale';
import { IRomcalDateItem } from '@RomcalModels/romcal-date-item';
import { TypesEnum } from '@RomcalEnums/types.enum';
import { LiturgicalColor } from '@RomcalTypes/liturgical-colors.type';
import { DateItemSources } from '@RomcalTypes/date-item-sources.type';
import { LocaleTypes } from '@RomcalTypes/locale-types.type';

/**
 * Load DayJS and relevant plugins
 */
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import advancedFormat from 'dayjs/plugin/advancedFormat';

/**
 * Extend dayjs instance with plugins
 */
dayjs.extend(updateLocale);
dayjs.extend(advancedFormat);

/**
 *  Mustache style templating is easier on the eyes
 */
templateSettings.interpolate = /{{([\s\S]+?)}}/g;

/**
 * Set locale
 * Locale lookup for celebration names are based on [i18n conventions as used by DayJS](https://github.com/iamkun/dayjs/tree/dev/src/locale).
 * romcal defines at least the default 'en' language as a fallback.
 * If a region is specified in the locale ('xx-XX'), romcal will
 * automatically manage a graceful fallback to its base language ('xx'), if it exists in 'src/locales'.
 * We get then a cascade fallbacks: region ('xx-XX') -> base language ('xx') -> default 'en'
 * For example: if a string is missing in 'fr-CA', it will try to pick it in 'fr', and then in 'en'.
 */
export const _fallbackLocaleKey: LocaleTypes = 'en';

/**
 * Cache value for the array of locales to be used for calendar output.
 */
let _locales: IRomcalLocale[];

/**
 * The cache key that holds the flattened _locales array.
 */
let _combinedLocale: IRomcalLocale | undefined;

/**
 * Cache value to hold the current locale's data.
 */
let _currentLocaleData: ILocale;

/**
 * Returns an ordinal number representation of the integer provided.
 *
 * Ordinal numbers look like this: 1st, 2nd, 3rd, 4th, ..., 10th and so on.
 *
 * @param value The number to process
 * @param asWord Returns the ordinal representation of the number in words only (defaults to `false`)
 */
export const ordinal = (value: number, asWord = false): string => {
  return asWord ? toWordsOrdinal(value) : toOrdinal(value);
};

/**
 * Attempts to sanitize the incoming value into a valid BCP-47 IETF locale string.
 * @param value The locale value to sanitize
 * @returns a BCP-47 IETF locale string along the [[Schema]] object with additional locale properties or throws an Error if the value could not be parsed
 */
export const sanitizePossibleLocaleValue = (
  value: string,
): {
  localeSchema: Schema;
  resolvedBcp47Locale: string;
} => {
  try {
    let localeSchema: Schema = parse(value, {
      forgiving: true, // https://www.npmjs.com/package/bcp-47#optionsforgiving
    });
    // Get schema parts
    let { region, language } = localeSchema;
    // Will hold the parsed locale
    let resolvedBcp47Locale: string;
    // Handle locales where language and region are not separated by a hyphen
    if (!isNil(language) && language.length > 2 && isNil(region)) {
      const parsedLanguage = language?.substr(0, 2);
      const parsedRegion = language?.substr(2, 4);
      resolvedBcp47Locale = `${parsedLanguage}${
        isString(parsedRegion) && parsedRegion.length > 0 ? `-${parsedRegion}` : ''
      }`;
      console.debug(`sanitized the ${language} locale to ${resolvedBcp47Locale}`);
      localeSchema = parse(resolvedBcp47Locale, {
        forgiving: true,
      });
      region = localeSchema.region;
      language = localeSchema.language;
    } else {
      resolvedBcp47Locale = `${language}${isString(region) && region.length > 0 ? `-${region}` : ''}`;
    }
    return { localeSchema, resolvedBcp47Locale };
  } catch (e) {
    console.warn(`${value} is not a parse-able BCP-47 IETF locale string`);
    throw e;
  }
};

/**
 * Sets the global locale for DayJS to be used for date operations throughout the library.
 * @param key The language key to use
 * @param customOrdinalFn An optional custom function to use for generating ordinal number values (defaults [[Locales.ordinal]] if not set)
 */
const setLocale = async (key: LocaleTypes, customOrdinalFn: (v: number) => string = ordinal): Promise<void> => {
  // When setLocale() is called, all cache values are purged
  _combinedLocale = undefined;
  // When setLocale() is called, the cache language files are reset
  try {
    const { default: fallbackLocale } = await import(
      /* webpackExclude: /index\.ts/ */
      /* webpackChunkName: "locales/[request]" */
      /* webpackMode: "lazy" */
      `../locales/${_fallbackLocaleKey}`
    );
    _locales = [fallbackLocale as IRomcalLocale];
  } catch (e) {
    console.error(`Failed to load the ${_fallbackLocaleKey} language file`);
  }

  let currentLocale;
  try {
    const { localeSchema, resolvedBcp47Locale } = sanitizePossibleLocaleValue(key);
    const { region, language } = localeSchema;
    currentLocale = resolvedBcp47Locale;

    /**
     * If a region is specified: append the base language for that region as fallback if it exists.
     * Also check if the base language isn't already the default 'en',
     */
    if (!isNil(region) && region?.length > 0 && language !== _fallbackLocaleKey) {
      // Retrieve the relevant base locale object
      // and set it as a fallback (before 'en')
      try {
        const { default: baseLocale } = await import(
          /* webpackExclude: /index\.ts/ */
          /* webpackChunkName: "locales/[request]" */
          /* webpackMode: "lazy" */
          `../locales/${language}`
        );
        _locales = [baseLocale as IRomcalLocale, ..._locales]; // For example: append the 'fr' locale
      } catch (e) {
        console.warn(`A base language file for "${language}" to support the ${currentLocale} locale is not available`);
      }
    }

    /**
     * Finally, append the region specific locale if any to the list of locales
     */
    try {
      const { default: regionSpecificLocale } = await import(
        /* webpackExclude: /index\.ts/ */
        /* webpackChunkName: "locales/[request]" */
        /* webpackMode: "lazy" */
        `../locales/${currentLocale}`
      );
      _locales = [regionSpecificLocale as IRomcalLocale, ..._locales]; // For example: append the 'fr-CA' locale
    } catch (e) {
      console.warn(`A language file for the region locale "${currentLocale}" is not available`);
    }
  } catch (e) {
    console.warn(`The locale "${key} is not a valid IETF BCP-47 format. romcal will default to the "en" locale`);
    currentLocale = _fallbackLocaleKey;
  }

  // Attempt to load the relevant dayjs locale configuration object
  try {
    const { default: langLocale } = await import(
      /* webpackExclude: /(index|types)\.d\.ts/ */
      /* webpackMode: "eager" */
      `dayjs/locale/${currentLocale}`
    );
    _currentLocaleData = langLocale as ILocale;
  } catch (e) {
    try {
      const languageOnly = currentLocale.split('-')[0];
      console.warn(
        `${currentLocale} is not supported in romcal's date management library, trying to use ${languageOnly} instead`,
      );
      const { default: langLocale } = await import(
        /* webpackExclude: /(index|types)\.d\.ts/ */
        /* webpackMode: "eager" */
        `dayjs/locale/${languageOnly}`
      );
      _currentLocaleData = langLocale as ILocale;
      currentLocale = languageOnly;
    } catch (e) {
      console.warn(`Failed to load locale data for ${currentLocale}. romcal will default to "en" locale data`);
      currentLocale = 'en';
    }
  } finally {
    // Set the locale
    dayjs.locale(currentLocale);
  }

  /**
   * Ensure that the first day is always a Sunday in romcal & DayJS
   * Monday is the first day of the week according to the international standard ISO 8601,
   * In the US, Canada, and Japan, it's counted as the second day of the week (Sunday is the first day).
   * In Christian calendars, Sunday is always the first day of the week.
   * In other words, the romcal will use US, Canada definitions for the start of the week.
   */
  dayjs.updateLocale(currentLocale, {
    week: {
      dow: 0, // US, Canada: 1st day of week is Sunday
      doy: 6, // US, Canada: 1st week of the year is the one that contains the 1st of January (7 + 0 - 1)
    },
    ...(isNil(_currentLocaleData.ordinal) && {
      // If the current locale's data doesn't have its own ordinal function, use this default ordinal function
      customOrdinalFn,
    }),
  });

  console.debug(`romcal is now configured to use ${currentLocale}`);
};

/**
 * Get the current locale object.
 *
 * Return an object that combines the main locale with its fallback.
 * And use cache in case this function is called multiple times
 * without the locale being modified.
 */
const getLocale = (): IRomcalLocale => {
  if (isNil(_combinedLocale)) {
    if (_locales.length > 1) {
      const [regionLocale, fallbackLocale] = _locales;
      _combinedLocale = mergeObjectsUniquely(regionLocale, fallbackLocale);
    } else {
      _combinedLocale = _locales[0];
    }
  }
  return _combinedLocale;
};

/**
 * Resolves a localized value for the given key and supporting parameters.
 *
 * Also resolves locale specific ordinal numbers where required.
 *
 * @param localizeParams Options for retrieving the localized key
 */
const localize = async ({ key, count, week, day, useDefaultOrdinalFn }: TLocalizeParams): Promise<string> => {
  // Get the IETF locale set in dayjs and obtain its corresponding locale data object
  const value = findDescendantValueByKeys(getLocale(), key.split('.'));

  // Run the template against the options provided
  return template(value)({
    key,
    // If defined, pluralize a week and add it to the given template
    ...(typeof week === 'number' && {
      week: useDefaultOrdinalFn === true ? ordinal(week) : _currentLocaleData.ordinal?.(week) ?? ordinal(week),
    }),
    ...(typeof count === 'number' && {
      count: useDefaultOrdinalFn === true ? ordinal(count) : _currentLocaleData.ordinal?.(count) ?? ordinal(count),
    }),
    // If defined, add the day to be included in the translation
    ...(isString(day) && { day }),
  });
};

/**
 * Utility function that takes an array of national calendar dates
 * and adds a localized name based on the key.
 *
 * Allows the specification of a source where when defined, points the localization logic
 * to a specific sub-tree within the locale file to obtain localized values from.
 *
 * If the source is `temporal`, the logic will only use the key for the lookup.
 *
 * @param dates A list of [[IRomcalDateItem]]s to process
 * @param source The source of the date to localize. This value is used to lookup a specific sub tree in the locale file for the localized value.
 */
const localizeDates = async (
  dates: Array<IRomcalDateItem>,
  source: DateItemSources = 'sanctoral',
): Promise<IRomcalDateItem[]> => {
  const promiseDates: Promise<IRomcalDateItem>[] = dates.map(async (date: IRomcalDateItem) => {
    const dateWithLocalizedName = {
      ...date,
      name: await localize({
        // If the source is `temporal`, do not append anything before the date key
        key: `${source === 'temporal' ? date.key : !isNil(date.source) ? date.source : source}.${date.key}`,
      }),
    } as IRomcalDateItem;
    return dateWithLocalizedName;
  });
  return await Promise.all(promiseDates);
};

/**
 * Takes the key from an instance of the [[LiturgicalColor]] object and attempts to find its localized color name
 * from the active [[IRomcalLocale]] instance.
 *
 * If they source object is undefined, no localization is done and undefined is returned.
 *
 * @param liturgicalColor An instance of the [[LiturgicalColor]] object from which the key will be used to find the localized color name.
 */
const localizeLiturgicalColor = async (liturgicalColor?: LiturgicalColor): Promise<LiturgicalColor | undefined> => {
  if (!isNil(liturgicalColor)) {
    const value = await localize({
      key: `liturgicalColors.${liturgicalColor.key}`,
    });
    return {
      ...liturgicalColor,
      value,
    };
  } else {
    return liturgicalColor;
  }
};

/**
 * Given a "day" integer from DayJS that represents the day of week, determine
 * the type of day from the [[Types]] enum
 * @param day A "day" integer that should come from the DayJS library
 */
const getTypeByDayOfWeek = (day: number): TypesEnum => (day === 0 ? TypesEnum.SUNDAY : TypesEnum.FERIA);

export { setLocale, getLocale, localize, localizeDates, localizeLiturgicalColor, getTypeByDayOfWeek };
