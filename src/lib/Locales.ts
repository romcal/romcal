import { templateSettings, template } from "lodash";
import { Types } from "../constants";
import * as Locales from "../locales";
import { findDescendantValueByKeys, hasKey, getValueByKey, mergeObjectsUniquely } from "../utils/object";
import { TRomcalLocale } from "../models/romcal-locale";
import { isNil, TLocaleTypes, TLocalizeParams } from "../utils/type-guards";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { isString } from "util";
import { parse, Schema } from "bcp-47";

/**
 * Load DayJS and relevant plugins
 */
import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";
import advancedFormat from "dayjs/plugin/advancedFormat";
import en from "dayjs/locale/en";

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
 * Locale lookup for date name strings are based on Moment.
 * romcal defines at least the default 'en' language as a fallback.
 * If a region is specified in the locale ('xx-XX'), romcal will
 * automatically manage a graceful fallback to its base language ('xx'), if it exists in 'src/locales'.
 * We get then a cascade fallbacks: region ('xx-XX') -> base language ('xx') -> default 'en'
 * For example: if a string is missing in 'fr-CA', it will try to pick it in 'fr', and then in 'en'.
 */
export const _fallbackLocaleKey: TLocaleTypes = "en";

const availableLocales: {
    [key in TLocaleTypes]: TRomcalLocale;
} = Locales;

let _combinedLocale: TRomcalLocale | undefined;

/**
 * Fetch the fallback locale object ("en") and store the en object in an array.
 * This will serve as the default locale object if the given key cannot be resolved in [[Locales.setLocale]].
 */
let _locales: Array<TRomcalLocale> = [getValueByKey(availableLocales, _fallbackLocaleKey)];

/**
 * Set the default current locale data to "en".
 * It can be changed later when the calendar is invoked via other methods.
 */
let _currentLocaleData: ILocale = en;

/**
 * Returns an ordinal number representation of the integer provided.
 * @param value The number to process
 */
const ordinal = (value: number): string => {
    const s = ["th", "st", "nd", "rd"];
    const v = value % 100;
    return `[${value}${s[(v - 20) % 10] || s[v] || s[0]}]`;
};

const setLocale = async (key: TLocaleTypes): Promise<void> => {
    // When setLocale() is called, it resets the combined locale cache
    _combinedLocale = undefined;

    let currentLocale;
    try {
        const localeSchema: Schema = parse(key, {
            forgiving: true, // https://www.npmjs.com/package/bcp-47#optionsforgiving
        });

        const { region, language } = localeSchema;

        // Handle locales where language and region are not separated by a hyphen
        if (!isNil(language) && language.length > 2 && isNil(region)) {
            const parsedLanguage = language?.substr(0, 2);
            const parsedRegion = language?.substr(2, 4);
            currentLocale = `${parsedLanguage}${
                isString(parsedRegion) && parsedRegion.length > 0 ? `-${parsedRegion}` : ""
            }`;
            console.debug(`normalized the locale ${currentLocale} from ${language}`);
        } else {
            currentLocale = `${language}${isString(region) && region.length > 0 ? `-${region}` : ""}`;
        }

        // Set the locale
        dayjs.locale(currentLocale);
        // Romcal locale
        const romcalLocale = `${language}${
            isString(region) && region.length > 0 ? `${region.toUpperCase()}` : ""
        }` as TLocaleTypes;

        /**
         * If a region is specified: append the base language as fallback.
         * Also check if the base language isn't already the default 'en',
         * and if this base language exists in 'src/locales'
         */
        if (
            !isNil(region) &&
            region?.length > 0 &&
            language !== _fallbackLocaleKey &&
            hasKey(availableLocales, language)
        ) {
            // Retrieve the relevant base locale object
            // and set it as a fallback (before 'en')
            _locales = [getValueByKey(availableLocales, language), ..._locales]; // For example: append the 'fr' locale
        }
        // Finally, append the region specific locale if any to the list of locales
        if (hasKey(availableLocales, romcalLocale)) {
            _locales = [getValueByKey(availableLocales, romcalLocale), ..._locales]; // For example: append the 'fr-CA' locale
        }
    } catch (e) {
        console.warn(`The locale "${key} is not a valid IETF BCP-47 format. romcal will default to the "en" locale`);
        currentLocale = _fallbackLocaleKey;
        dayjs.locale(currentLocale);
    }

    // Attempt to load the relevant dayjs locale configuration object
    try {
        _currentLocaleData = (await import(`dayjs/locale/${currentLocale}`)) as ILocale;
    } catch (e) {
        try {
            const languageOnly = currentLocale.split("-")[0];
            console.warn(`${currentLocale} is not a valid locale, trying to use ${languageOnly} instead`);
            _currentLocaleData = (await import(`dayjs/locale/${languageOnly}`)) as ILocale;
        } catch (e) {
            console.warn(`Failed to load locale data for ${currentLocale}. romcal will default to "en" locale data`);
        }
    }

    /**
     * Ensure that the first day is always a Sunday in romcal & Moment.js
     * Monday is the first day of the week according to the international standard ISO 8601,
     * In the US, Canada, and Japan, it's counted as the second day of the week (Sunday is the first day).
     * In Christian calendars, Sunday is always the first day of the week.
     * In other words, the romcal will use US, Canada definitions for the start of the week.
     */
    dayjs.updateLocale(currentLocale, {
        ..._currentLocaleData,
        week: {
            dow: 0, // US, Canada: 1st day of week is Sunday
            doy: 6, // US, Canada: 1st week of the year is the one that contains the 1st of January (7 + 0 - 1)
        },
        ...(isNil(_currentLocaleData.ordinal) && {
            // If the current locale's data doesn't have its own ordinal function, use this default ordinal function
            ordinal,
        }),
    });

    console.debug(`romcal is now configured to use ${_currentLocaleData.name}`);
};

/**
 * Get the current locale object.
 *
 * Return an object that combines the main locale with its fallback.
 * And use cache in case this function is called multiple times
 * without the locale being modified.
 */
const getLocale = (): TRomcalLocale => {
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
const localize = async ({ key, count, week, day, useEnglishOrdinal }: TLocalizeParams): Promise<string> => {
    // Get the IETF locale set in dayjs and obtain its corresponding locale data object
    const value = findDescendantValueByKeys(getLocale(), key.split("."));

    // Run the template against the options provided
    return template(value)({
        key,
        // If defined, pluralize a week and add it to the given template
        ...(typeof week === "number" && {
            week: useEnglishOrdinal ? ordinal(week) : _currentLocaleData.ordinal?.(week),
        }),
        ...(typeof count === "number" && {
            count: useEnglishOrdinal ? ordinal(count) : _currentLocaleData.ordinal?.(count),
        }),
        // If defined, add the day to be included in the translation
        ...(isString(day) && { day }),
    });
};

/**
 * Utility function that takes an array of national calendar dates
 * and adds a localized name based on the key
 * @param dates A list of [[IRomcalDateItem]]s to process
 * @param source
 */
const localizeDates = (dates: Array<IRomcalDateItem>, source = "sanctoral"): Promise<IRomcalDateItem[]> => {
    return Promise.all(
        dates.map(async (date: IRomcalDateItem) => {
            if (!hasKey(date, "drop")) {
                const name = await localize({
                    key: `${source}.${date.key}`,
                });
                return {
                    ...date,
                    name,
                } as IRomcalDateItem;
            }
            return date;
        }),
    );
};

/**
 * Given a "day" integer from moment that represents the day of week, determine
 * the type of day from the [[Types]] enum
 * @param day A "day" integer that should come from the moment library
 */
const getTypeByDayOfWeek = (day: number): Types => (day === 0 ? Types.SUNDAY : Types.FERIA);

export { setLocale, getLocale, localize, localizeDates, getTypeByDayOfWeek };
