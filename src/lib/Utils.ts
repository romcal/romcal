import _ from "lodash";
import moment from "moment";
import { Types } from "../constants";
import * as Locales from "../locales";
import { RawDateItem, LocalizedRawDateItem } from "../models/romcal-date-item";
import { findDescendantValueByKeys, hasKey, getValueByKey, mergeObjectsUniquely } from "../utils/object";
import { RomcalLocale } from "../models/romcal-locale";
import { isNil } from "../utils/type-guards";

/**
 *  Mustache style templating is easier on the eyes
 */
_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

/**
 * Set locale
 * Locale lookup for date name strings are based on Moment.
 * romcal defines at least the default 'en' language as a fallback.
 * If a region is specified in the locale ('xx-XX'), romcal will
 * automatically manage a graceful fallback to its base language ('xx'), if it exists in 'src/locales'.
 * We get then a cascade fallbacks: region ('xx-XX') -> base language ('xx') -> default 'en'
 * For example: if a string is missing in 'fr-CA', it will try to pick it in 'fr', and then in 'en'.
 */
export const _fallbackLocaleKey: string = "en";

let _combinedLocale: RomcalLocale | undefined;
let _locales: Array<RomcalLocale>;

let setLocale = (key: string) => {
    const availableLocales: {
        [key: string]: RomcalLocale;
    } = Locales;

    // When setLocale() is called, it resets the combined locale cache
    _combinedLocale = undefined;

    // First of all, fetch the fallback locale object ("en") and store the en object in an array
    // This will serve as the default locale object if the given key cannot be resolved below
    _locales = [getValueByKey(availableLocales, _fallbackLocaleKey)];

    // =================================================================================
    // Make key lowercase
    // Extract lang and region from key
    // =================================================================================
    const lowerCasedKey = key.toLowerCase(); // make key it lowercase
    const keyValues: RegExpExecArray | null = /^([a-z]+)-?([a-z]*)/.exec(lowerCasedKey);

    // =================================================================================
    // Set the Moment locale (if unrecognized, will default to 'en')
    // =================================================================================
    let localeName;
    if (keyValues !== null) {
        const [lang, region] = keyValues;
        // Use kebab-case in localName to follow IETF Language Codes standards
        localeName = `${lang}${region ? `-${region.toUpperCase()}` : ``}`;
        // Set the locale
        moment.locale(localeName);
        /**
         * If a region is specified: append the base language as fallback.
         * Also check if the base language isn't already the default 'en',
         * and if this base language exists in 'src/locales'
         */
        if (!!region && lang !== _fallbackLocaleKey && hasKey(availableLocales, lang)) {
            // Retrieve the relevant base locale object
            // and set it as a fallback (before 'en')
            _locales = [getValueByKey(availableLocales, lang), ..._locales];
        }
    } else {
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
const getLocale = () => {
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
    let value = findDescendantValueByKeys(getLocale(), key.split("."));

    // Run the template against the options provided
    return _.template(value)({
        key,
        // If defined, pluralize a week and add it to the given template
        ...(week && { week: localeDate.ordinal(week) }),
        // If defined, count the nth day of the given series
        ...(count && { count: localeDate.ordinal(count) }),
        // If defined, add the day to be included in the translation
        ...(day && { day }),
    });
};

/**
 * Utility function that takes an array of national calendar dates
 * and adds a localized name based on the key
 * @param dates A list of [[RawDateItem]]s to process
 * @param source
 */
const localizeDates = (dates: Array<RawDateItem>, source = "sanctoral"): Array<RawDateItem | LocalizedRawDateItem> => {
    return dates.map((date: RawDateItem) => {
        if (!_.has(date, "drop")) {
            return {
                ...date,
                name: localize({
                    key: `${source}.${date.key}`,
                }),
            } as LocalizedRawDateItem;
        }
        return date;
    });
};

const getTypeByDayOfWeek = (day: number) => (_.eq(day, 0) ? Types.SUNDAY : Types.FERIA);

export { setLocale, getLocale, localize, localizeDates, getTypeByDayOfWeek };
