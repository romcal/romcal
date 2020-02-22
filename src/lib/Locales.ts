import { templateSettings, template } from "lodash";
import moment from "moment";
import { Types } from "../constants";
import * as Locales from "../locales";
import { findDescendantValueByKeys, hasKey, getValueByKey, mergeObjectsUniquely } from "../utils/object";
import { TRomcalLocale } from "../models/romcal-locale";
import { isNil, TLocaleTypes } from "../utils/type-guards";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { isString } from "util";
import { parse, Schema } from "bcp-47";

// DayJS global configuration
// import dayjs from "dayjs";
// import updateLocale from "dayjs/plugin/updateLocale";
// dayjs.extend(updateLocale);

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

let _combinedLocale: TRomcalLocale | undefined;
let _locales: Array<TRomcalLocale>;

const setLocale = (key: TLocaleTypes): void => {
    const availableLocales: {
        [key in TLocaleTypes]: TRomcalLocale;
    } = Locales;

    // When setLocale() is called, it resets the combined locale cache
    _combinedLocale = undefined;

    // First of all, fetch the fallback locale object ("en") and store the en object in an array
    // This will serve as the default locale object if the given key cannot be resolved below
    _locales = [getValueByKey(availableLocales, _fallbackLocaleKey)];

    let localeName;
    try {
        const localeSchema: Schema = parse(key, {
            forgiving: true, // https://www.npmjs.com/package/bcp-47#optionsforgiving
        });

        const { region, language } = localeSchema; // For example: ["fr-ca", "fr", "ca"]
        // Use kebab-case in localName to follow IETF Language Codes standards
        localeName = `${language}${isString(region) && region.length > 0 ? `-${region.toUpperCase()}` : ""}`;
        // Set the locale
        moment.locale(localeName);
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
        localeName = _fallbackLocaleKey;
        moment.locale(_fallbackLocaleKey);
    }

    /**
     * Ensure that the first day is always a Sunday in romcal & Moment.js
     * Monday is the first day of the week according to the international standard ISO 8601,
     * In the US, Canada, and Japan, it's counted as the second day of the week (Sunday is the first day).
     * In Christian calendars, Sunday is always the first day of the week.
     * In other words, the romcal will use US, Canada definitions for the start of the week.
     * https://github.com/moment/momentjs.com/issues/279#issuecomment-375611003
     */
    moment.updateLocale(localeName, {
        week: {
            dow: 0, // US, Canada: 1st day of week is Sunday
            doy: 6, // US, Canada: 1st week of the year is the one that contains the 1st of January (7 + 0 - 1)
        },
    });
};

// Get the current locale object.
// Return an object that combines the main locale with its fallback.
// And use cache in case this function is called multiple times
// without the locale being modified.
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

// Using the set Moment locale, get the relevant localized
// text for standard dates. Also make numbers ordinal by
// leveraging Moment's ordinal number function.
const localize = ({ key, count, week, day }: { key: string; day?: string; week?: number; count?: number }): string => {
    // Get locale data
    const localeDate = moment.localeData();
    const value = findDescendantValueByKeys(getLocale(), key.split("."));

    // Run the template against the options provided
    return template(value)({
        key,
        // If defined, pluralize a week and add it to the given template
        ...(typeof week === "number" && { week: localeDate.ordinal(week) }),
        // If defined, count the nth day of the given series
        ...(typeof count === "number" && { count: localeDate.ordinal(count) }),
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
const localizeDates = (dates: Array<IRomcalDateItem>, source = "sanctoral"): Array<IRomcalDateItem> => {
    return dates.map((date: IRomcalDateItem) => {
        if (!hasKey(date, "drop")) {
            return {
                ...date,
                name: localize({
                    key: `${source}.${date.key}`,
                }),
            } as IRomcalDateItem;
        }
        return date;
    });
};

/**
 * Given a "day" integer from moment that represents the day of week, determine
 * the type of day from the [[Types]] enum
 * @param day A "day" integer that should come from the moment library
 */
const getTypeByDayOfWeek = (day: number): Types => (day === 0 ? Types.SUNDAY : Types.FERIA);

export { setLocale, getLocale, localize, localizeDates, getTypeByDayOfWeek };
