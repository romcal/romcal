import _ from "lodash";
import moment from "moment";
import { Types } from "../constants";
import * as Locales from "../locales";
import { RawDateItem, LocalizedRawDateItem } from "../models/romcal-date-item";
import { findDescendantValueByKeys } from "../utils/object";

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
const _fallbackLocaleKey: string = "en";

let _combinedLocale;
let _locales;

let setLocale = (key: string) => {
    // When setLocale() is called, it redefines this vars to defaults
    _combinedLocale = undefined;
    _locales = [_.get(Locales, _fallbackLocaleKey)];

    // Sanitize incoming key
    const sanitizedKey = _.toLower(key); // make key it lowercase

    // Extract lang and region from string
    const keyValues: RegExpExecArray | null = /^([a-z]+)-?([a-z]*)/.exec(key);

    // Set the Moment locale (if unrecognized, will default to 'en')
    let localeName;
    if (keyValues !== null) {
        const [lang, region] = keyValues;
        // Use kebab-case in localName to follow IETF Language Codes standards
        localeName = `${lang}${region ? `-${_.toUpper(region)}` : ``}`;
        // Set the locale
        moment.locale(localeName);
        /**
         * If a region is specified: append the base language as fallback.
         * Also check if the base language isn't already the default 'en',
         * and if this base language exists in 'src/locales'
         */
        if (!!region && lang !== _fallbackLocaleKey && _.has(Locales, lang)) {
            // Retrieve the relevant base locale object
            // and set it as a fallback (before 'en')
            _locales.unshift(_.get(Locales, lang));
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

    // Set the given locale into romcal.
    // Also check if it's not the same as the fallback 'en'
    // (to avoid its duplicate definition)
    // and if exists in 'src/locales'
    if (key !== _fallbackLocaleKey && _.has(Locales, key)) {
        // Retrieve the relevant locale object
        // and set it as the first & default locale
        _locales.unshift(_.get(Locales, key));
    }
};

// Get the current locale object.
// Return an object that combines the main locale with its fallback.
// And use cache in case this function is called multiple times
// without the locale being modified.
const getLocale = () => {
    if (_.isUndefined(_combinedLocale)) {
        _combinedLocale = _.mergeWith.apply(null, [{}].concat(_.reverse(_locales)));
    }
    return _combinedLocale;
};

// Using the set Moment locale, get the relevant localized
// text for standard dates. Also make numbers ordinal by
// leveraging Moment's ordinal number function.
const localize = ({ key, count, week }: { key: string; week?: number; count?: number }) => {
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
    });
};

// declare function hasLocalizedName<"name" extends Local(x:  ): "name" extends LocalizedRawDateItem ? LocalizedRawDateItem : RawDateItem;

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
