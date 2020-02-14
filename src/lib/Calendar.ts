import _ from "lodash";
import { utc, Moment } from "moment";
import * as CountryCalendars from "../calendars";
import { Types } from "../constants";
import Config from "../models/romcal-config";
import * as Dates from "./Dates";
import * as Utils from "./Utils";
import * as Seasons from "./Seasons";
import * as Celebrations from "./Celebrations";
import { DateItem, IRomcalDateItem } from "../models/romcal-date-item";
import { TCountryTypes, isNil } from "../utils/type-guards";
import { hasKey } from "../utils/object";

/**
 * Calendar Class:
 * Combine together all the different collections of date item objects,
 * according to the liturgical calendar for the specific year.
 */
class Calendar {
    private dateItems: Array<DateItem> = [];
    private config: Config;
    private startDate: Moment;
    private endDate: Moment;

    /**
     * Create a new Calendar
     */
    constructor(config: Config) {
        this.config = config;
        const { type, year } = config;
        // The year can be specified either as:
        // - civil year (January 1 to December 31); or
        // - liturgical year (1st Sunday of Advent to the Saturday after the Christ the King Sunday).
        if (type === "liturgical") {
            this.startDate = Dates.firstSundayOfAdvent(year);
            this.endDate = Dates.firstSundayOfAdvent(year + 1).subtract(1, "days");
        } else {
            this.startDate = utc({ year, month: 0, day: 1 });
            this.endDate = utc({ year, month: 11, day: 31 });
        }
    }

    /**
     * Fetch calendars and date items that occur during a specific year (civil or liturgical).
     */
    fetch(): Calendar {
        const {
            ascensionOnSunday,
            christmastideEnds,
            christmastideIncludesTheSeasonOfEpiphany,
            corpusChristiOnThursday,
            country,
            epiphanyOnJan6,
            type,
            year,
        } = this.config;
        const years = type === "liturgical" ? [year, year + 1] : [year];

        // Define all calendars
        let weekdayDates: Array<IRomcalDateItem> = [];
        let celebrationsDates: Array<IRomcalDateItem> = [];
        let generalDates: Array<IRomcalDateItem> = [];
        let nationalDates: Array<IRomcalDateItem> = [];

        // Get a collection of date items from all liturgical seasons of the given year
        years.forEach(year => {
            weekdayDates = [
                ...weekdayDates,
                ...Seasons.christmastide(year - 1, christmastideEnds, epiphanyOnJan6, christmastideIncludesTheSeasonOfEpiphany),
                ...Seasons.earlyOrdinaryTime(year, christmastideEnds, epiphanyOnJan6),
                ...Seasons.lent(year),
                ...Seasons.eastertide(year),
                ...Seasons.laterOrdinaryTime(year),
                ...Seasons.advent(year),
                ...Seasons.christmastide(year, christmastideEnds, epiphanyOnJan6, christmastideIncludesTheSeasonOfEpiphany),
            ];

            // Get the celebration dates based on the given year and options
            celebrationsDates = [
                ...celebrationsDates,
                ...Celebrations.dates(year, christmastideEnds, epiphanyOnJan6, corpusChristiOnThursday, ascensionOnSunday),
            ];

            // Get the general calendar based on the given year
            generalDates = [...generalDates, ...Calendar._fetchCalendar("general", year)];

            // Get the relevant national calendar object based on the given year and country
            nationalDates = [...nationalDates, ...Calendar._fetchCalendar(country, year)];
        });

        let sources: Array<Array<IRomcalDateItem>> = [weekdayDates, celebrationsDates, generalDates, nationalDates];

        // Remove all date items not in the given date range
        sources = Calendar._filterItemRange(this.startDate, this.endDate, sources);

        // Remove all date items marked as 'drop' from any other date items
        sources = Calendar._dropItems(...sources);

        // Push new item object as a new DateItem
        this._push(sources);

        // Finally, sort the DateItems by date and rank and keep only the relevant
        this._sortAndKeepRelevant();

        return this;
    }

    /**
     * Get all DateItems for a specific calendar
     */
    values(): DateItem[] {
        return this.dateItems;
    }

    /**
     * Get an array of DateItems that returns truthy for the predicate object
     */
    _filter(predicate: Record<string, any>): DateItem[] {
        return _.filter(this.dateItems, predicate);
    }

    /**
     * Get the first DateItem that returns truthy for the predicate object
     */
    _find(predicate: Record<string, any>): DateItem {
        return _.find(this.dateItems, predicate);
    }

    /**
     * Group DateItems by date
     */
    _valuesByDates(): { [string]: DateItem[] } {
        return this.dateItems.reduce((result: Record<string, any>, value: DateItem) => {
            (result[value.date] = result[value.date] || []).push(value);
            return result;
        }, {});
    }

    /**
     * Remove DateItems that return truthy for the predicate object
     */
    _removeWhere(predicate: Record<string, any>) {
        _.remove(this.dateItems, predicate);
    }

    /**
     * Push new DateItem objects in the Calendar object
     */
    _push(sources: Record<string, any>[][]) {
        sources.forEach((cal, i) =>
            cal.forEach(itemObj => {
                this._checkAndRemoveExistingItem(itemObj);

                // Specify the stack index of the source calendar
                itemObj._stack = i;

                // Get the base DateItem to attach on the new DateItem
                const baseItem = this._find({ date: itemObj.moment.toISOString(), _stack: 0 });

                // Create a new DateItem and add it to the collection
                const item = new DateItem(itemObj, baseItem);
                this.dateItems.push(item);
            }),
        );
    }

    /**
     * If a previous date item already exists (have the same key name as the new one),
     * the previous date item will be removed in favour of the new given one,
     * except if the previous item is prioritized but not the new one
     */
    _checkAndRemoveExistingItem(item) {
        const previousItems = this._filter({ key: item.key });
        if (previousItems.length) {
            previousItems.forEach(previousItem => {
                if (!previousItem.data.prioritized || (previousItem.data.prioritized && item.data && item.data.prioritized)) {
                    this._removeWhere({ _id: previousItem._id });
                }
            });
        }
    }

    /**
     * Sort all DateItems by relevance (the most relevant first)
     * and drop the non-relevant DateItems
     */
    _sortAndKeepRelevant() {
        // Reorder the DateItems of a particular day, so that
        // when there are optional memorials or commemoration only (in addition to the feria),
        // the feria item is moved to the top before the optional items,
        // since it's the default item if none of the optional items
        // are celebrated.
        const lowerNonOptionalType = Types.MEMORIAL;
        const types = Types.slice(0, Types.length - 1);
        types.splice(types.indexOf(lowerNonOptionalType) + 1, 0, Types[Types.length - 1]);

        // Sort all date items by relevance (the most relevant first),
        // in this order: by date, by priority, by type, by stack.
        this.dateItems.sort((a: DateItem, b: DateItem): any => {
            // 1. Sort by date
            const moment1 = a.moment;
            const moment2 = b.moment;
            if (moment1.isBefore(moment2)) return -1;
            if (moment1.isAfter(moment2)) return 1;
            if (moment1.isSame(moment2)) {
                // 2. Sort by priority (prioritized first)
                const prioritized1 = a.data && a.data.prioritized;
                const prioritized2 = b.data && b.data.prioritized;
                if (prioritized1 && !prioritized2) return -1;
                if (!prioritized1 && prioritized2) return 1;
                if (prioritized1 === prioritized2) {
                    // 3. Sort by type (higher type first)
                    const type1 = types.indexOf(a.type);
                    const type2 = types.indexOf(b.type);
                    if (type1 < type2) return -1;
                    if (type1 > type2) return 1;
                    if (type1 === type2) {
                        // 4. Sort by stack (higher stack first)
                        const stack1 = a._stack;
                        const stack2 = b._stack;
                        if (stack1 > stack2) return -1;
                        if (stack1 < stack2) return 1;
                        return 0;
                    }
                }
            }
        });

        // Now that the items are sorted, let's drop other non-relevant date items
        // if at least one of the date items isn't optional
        const calendarByDates = this._valuesByDates();
        for (const key in calendarByDates) {
            if (Object.prototype.hasOwnProperty.call(calendarByDates, key)) {
                const dateItems = calendarByDates[key];
                if (dateItems.length > 1) {
                    // If the first date item has a type equal or higher than a MEMORIAL, or is prioritized:
                    // keep only the first item and remove the others
                    if (dateItems[0].data.prioritized || types.indexOf(dateItems[0].type) <= types.indexOf(lowerNonOptionalType)) {
                        dateItems.slice(1, dateItems.length).forEach(item => this._removeWhere({ _id: item._id }));
                    }
                }
            }
        }
    }

    /**
     * Check if 'drop' has been defined for any celebrations in the national calendar
     * and remove them from both national and general calendar sources
     *
     * @param sources
     */
    static _dropItems(sources: Array<Array<IRomcalDateItem>>): Array<Array<IRomcalDateItem>> {
        sources.forEach((calendar, i) => {
            const dropKeys: Array<string> = calendar
              .filter(({ drop }: IRomcalDateItem) => !isNil(drop) && drop === true)
              .map(({ key }: IRomcalDateItem) => { 
                if (!isNil(key)) { 
                  return key;
                }
              }),
            dropKeys.forEach(dropKey => {
                for (let j = 0; j <= i; j++) {
                    _.remove(sources[j], ({ key }) => key === dropKey);
                }
            });
        });
        return sources;
    }

    /**
     * Only retain items within a given date range
     * @param startDate The lower range date to abide by
     * @param endDate The upper range date to abide by
     * @param sources The 2 dimensional array containing various date sources to be filtered
     */
    static _filterItemRange(startDate: Moment, endDate: Moment, sources: Array<Array<IRomcalDateItem>>): Array<Array<IRomcalDateItem>> {
        return sources.map((source: Array<IRomcalDateItem>) =>
            source.filter((item: IRomcalDateItem) => {
                return item.moment.isSameOrAfter(startDate) && item.moment.isSameOrBefore(endDate);
            }),
        );
    }

    /**
     * Get the appropriate calendar definition object, based on the given region name and year.
     *
     * @param country The country to get
     * @param year the year to resolve
     */
    static _fetchCalendar(country: TCountryTypes, year: number): Array<IRomcalDateItem> {
        return CountryCalendars[country].dates(year);
    }
}

// Returns an array of liturgical dates based on the supplied calendar options
// The array may return dates according to the given calendar year or liturgical
// year depending on the options supplied
//
// If query object is passed:
// Return filtered liturgical calendar dates according to the given calendar options
// and filtering options passed in by the user
//
// config: calendar settings
//         if the config object has a query, it will be used to filter the
//         date results returned
//
const calendarFor = (customConfig: any = {}) => {
    // If config is passed as an integer,
    // assume we want the calendar for the current year
    if (Number.isInteger(customConfig)) {
        customConfig = { year: customConfig };
    }

    // Sanitize incoming config into a complete configuration set
    const config = new Config(customConfig);

    // Set the locale information
    Utils.setLocale(config.locale);

    // Get a new collection of dates
    const dates = new Calendar(config).fetch().values();

    // Run queries, if any and return the results
    return queryFor(dates, config.query);
};

// Filters an array of dates generated from the calendarFor function based on a given query.
// dates: An array of dates generated from the calendarFor function
// query: An object containing keys to filter the dates by
const queryFor = (dates: DateItem[] = [], query: Record<string, any> = {}) => {
    if (!_.every(dates, _.isObject)) {
        throw "romcal.queryFor can only accept a single dimensional array of objects";
    }

    //==========================================================================
    // Check if there is a query defined, if none return the unfiltered
    // calendar array
    //==========================================================================
    if (!_.isNull(query) && !_.isEmpty(query)) {
        // Months are zero indexed, so January is month 0.
        if (_.has(query, "month")) {
            dates = _.filter(dates, d => _.eq(d.moment.month(), _.get(query, "month")));
        }

        if (_.has(query, "day")) {
            dates = _.filter(dates, d => _.eq(d.moment.day(), _.get(query, "day")));
        }

        if (_.has(query, "title")) {
            dates = _.filter(dates, d => _.includes(d.data.meta.titles, _.get(query, "title")));
        }

        if (_.has(query, "group")) {
            switch (_.get(query, "group")) {
                case "days":
                    dates = _.groupBy(dates, d => d.moment.day());
                    break;
                case "months":
                    dates = _.groupBy(dates, d => d.moment.month());
                    break;
                case "daysByMonth":
                    dates = _.groupBy(dates, d => d.moment.month());
                    dates = _.map(dates, v => _.groupBy(v, d => d.moment.day()));
                    break;
                case "weeksByMonth":
                    dates = _.groupBy(dates, d => d.moment.month());
                    dates = _.map(dates, v => _.groupBy(v, d => d.data.calendar.week));
                    break;
                case "cycles":
                    dates = _.groupBy(dates, d => d.data.meta.cycle.value);
                    break;
                case "types":
                    dates = _.groupBy(dates, d => d.type);
                    break;
                case "liturgicalSeasons":
                    dates = _.groupBy(dates, d => d.data.season.key);
                    break;
                case "liturgicalColors":
                    dates = _.groupBy(dates, d => d.data.meta.liturgicalColor.key);
                    break;
                case "psalterWeek":
                    dates = _.groupBy(dates, d => d.data.meta.psalterWeek.key);
                    break;
                default:
                    break;
            }
        }
    }

    return dates;
};

export { calendarFor, queryFor };
