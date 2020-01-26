// @flow

import _ from 'lodash';
import Moment from "moment";

import * as CalendarsDef from '../calendars';
import Config from './Config';
import DateItem from './DateItem';
import * as Dates from './Dates';
import * as Utils from './Utils';
import * as Seasons from './Seasons';
import * as Celebrations from './Celebrations';

import {
  Types,
  Cycles,
  LiturgicalSeasons
} from '../constants';

/**
 * Calendar Class:
 * Combine all together different collection of date item objects,
 * according to the liturgical calendar for a specific year.
 */
class Calendar {
  itemValues: DateItem[] = [];
  year: number;

  /**
   * Create a new Calendar
   */
  constructor(year: number, baseCalendar: Object[], ...calendars: (Object[])[]) {
    this.year = year;

    Calendar.dropItems(baseCalendar, ...calendars)
      .forEach((cal, i) => cal
        .forEach((item) => {
          if (item.moment.year() === this.year) {

            // If a previous date item already exists (have a same key name), it will be removed in favour of
            // the new one, except if the previous item is prioritized but not the new one.
            let previousItems = this.filter({key: item.key});
            if (previousItems.length) {
              previousItems.forEach((previousItem) => {
                if ((!previousItem.data.prioritized) ||
                  (previousItem.data.prioritized && item.data.prioritized)) {
                  this.removeWhere({id: previousItem._id});
                }
              });
            }

            item.stack = i;
            let baseItem = this.find({date: item.moment.toISOString(), stack: 0});
            this.push(item, baseItem);
          }
        }));
  }

  /**
   * Return an array of DateItems that returns truthy for the predicate object.
   */
  filter(predicate: Object): DateItem[] {
    return _.filter(this.itemValues, predicate);
  }

  /**
   * Return the first DateItems that returns truthy for the predicate object.
   */
  find(predicate: Object): DateItem {
    return _.find(this.itemValues, predicate);
  }

  /**
   * Group DateItems by date
   */
  valuesByDates(): {[string]: DateItem[]} {
    return this.itemValues.reduce((result: Object, value: DateItem) => {
      (result[value.date] = result[value.date] || []).push(value);
      return result;
    }, {});
  }

  /**
   * Push a new DateItem object in the Calendar object
   */
  push(itemObj: Object, baseItem: DateItem) {
    let item = new DateItem(itemObj, baseItem);
    this.itemValues.push(item);
  }

  /**
   * Remove existing DateItems that returns truthy for the predicate object.
   */
  removeWhere(predicate: Object) {
    _.remove(this.itemValues, predicate);
  }

  /**
   * Check if 'drop' has been defined for any celebrations in the national calendar
   * and remove them from both national and general calendar sources
   */
  static dropItems(...calendars: (Object[])[]): (Object[])[] {
    calendars.forEach((calendar, i) => {
      const dropKeys: string[] = _.map(_.filter(calendar, n => (_.has(n, 'drop') && n.drop)), 'key');
      dropKeys.forEach(dropKey => {
        for (let j = 0; j <= i; j++) {
          _.remove(calendars[j], ({key}) => key === dropKey);
        }
      });
    });
    return calendars;
  }

  /**
   * Get the appropriate calendar definition object, based on the given country
   */
  static getCalendar(countryName: string): ({dates: (number) => {}[]}) {
    const key: string = Object.prototype.hasOwnProperty.call(CalendarsDef, _.camelCase(countryName)) ? _.camelCase(countryName) : '';
    if (!key) return { dates: () => [] };
    return CalendarsDef[key];
  }

  /**
   * Special type management in particular seasons
   */
  adjustTypesInSeasons(): Calendar {
    this.itemValues.forEach(item => {
      // Special type management in the season of LENT
      if (item.stack > 0 && item.base.data.season.key === LiturgicalSeasons.LENT) {

        // MEMORIAL or OPT_MEMORIAL that fall on a FERIA
        // in the SEASON OF LENT are reduced to a COMMEMORATION
        if (
          (item.type === Types.MEMORIAL || item.type === Types.OPT_MEMORIAL) &&
          item.base.type === Types.FERIA
        ) {
          item.type = Types.COMMEMORATION
        }

        // A FEAST occurring in the season of LENT is reduced
        // to a COMMEMORATION
        if (
          item.type === Types.FEAST
        ) {
          item.type = Types.COMMEMORATION
        }
      }
    });

    return this;
  }

  /**
   * Sort all DateItems by relevance (more relevant first)
   * and drop non relevant DateItems
   */
  sortAndKeepRelevant(): Calendar {

    // Reorder the type ranking, so when there is only optional items (in addition to the FERIA),
    // the FERIA item is moved first before the optional items,
    // since it's the default item if none of the optional items are used.
    const lowerNonOptionalType = Types.MEMORIAL;
    const types = Types.slice(0, Types.length - 1);
    types.splice(types.indexOf(lowerNonOptionalType) + 1, 0, Types[Types.length - 1]);

    // Sort all date items by relevance (more relevant first):
    // first by date, then per priority, then by type, and finally by stack.
    this.itemValues.sort((a: DateItem, b: DateItem):any => {

      // 1. Sort by date
      let moment1 = a.moment;
      let moment2 = b.moment;
      if (moment1.isBefore(moment2)) return -1;
      if (moment1.isAfter(moment2)) return 1;
      if (moment1.isSame(moment2)) {

        // 2. Sort by priority (prioritized first)
        let prioritized1 = a.data && a.data.prioritized;
        let prioritized2 = b.data && b.data.prioritized;
        if (prioritized1 && !prioritized2) return -1;
        if (!prioritized1 && prioritized2) return 1;
        if (prioritized1 === prioritized2) {

          // 3. Sort by type (higher type first)
          let type1 = types.indexOf(a.type);
          let type2 = types.indexOf(b.type);
          if (type1 < type2) return -1;
          if (type1 > type2) return 1;
          if (type1 === type2) {

            // 4. Sort by stack (higher stack first)
            let stack1 = a.stack;
            let stack2 = b.stack;
            if (stack1 > stack2) return -1;
            if (stack1 < stack2) return 1;
            return 0;
          }
        }
      }
    });

    // Now that items are sorted, let's drop other non relevant date items.
    // if at least one of the date items isn't optional
    let calendarByDates = this.valuesByDates();
    for (let key in calendarByDates) {
      if (Object.prototype.hasOwnProperty.call(calendarByDates, key)) {
        let dateItems = calendarByDates[key];
        if (dateItems.length > 1) {

          // The first date item have a type equal or higher than a MEMORIAL, or is prioritized:
          // keep only the first item and remove the others
          if (dateItems[0].data.prioritized ||
            (types.indexOf(dateItems[0].type) <= types.indexOf(lowerNonOptionalType))) {
            dateItems
              .slice(1, dateItems.length)
              .forEach(item => this.removeWhere({id: item._id}));
          }
        }
      }
    }

    return this;
  }

  /**
   * Include liturgical cycle metadata for the DateItems in the liturgical year
   */
  addLiturgicalCycleMetadata(): Calendar {

    // Formula to calculate lectionary cycle (Year A, B, C)
    const firstSundayOfAdvent: Moment = Dates.firstSundayOfAdvent(this.year);
    const thisCycle: number = (this.year - 1963) % 3;
    const nextCycle: number = thisCycle === 2 ? 0 : thisCycle + 1;

    this.itemValues.map(item => {

      // If the date is on or after the first sunday of advent
      // it is the next liturgical cycle
      if (item.moment.isSame(firstSundayOfAdvent) || item.moment.isAfter(firstSundayOfAdvent)) {
        item.data.meta.cycle = {
          key: nextCycle,
          value: Cycles[nextCycle]
        };
      } else {
        item.data.meta.cycle = {
          key: thisCycle,
          value: Cycles[thisCycle]
        };
      }

      return item;
    });

    return this;
  }

  /**
   * Get all DateItems for a specific calendar
   */
  values(): DateItem[] {
    this
      .adjustTypesInSeasons()
      .sortAndKeepRelevant()
      .addLiturgicalCycleMetadata();

    return this.itemValues;
  }
}

//================================================================================================
// METHODS GENERATE THE ROMAN CALENDAR ACCORDING TO CALENDAR
// YEAR OR LITURGICAL YEAR
//================================================================================================

// Returns an object containing dates for the
// days that occur during the calendar year
// c: (an object literal with the following options)
// [-] year: The year to calculate the liturgical date ranges
// [-] country: Get national calendar dates for the given country (defaults to 'general')
// [-] locale: The language for the calendar names (defaults to 'en')
// [-] christmastideEnds: t|o|e (The mode to calculate the end of Christmastide. Defaukts to 'o')
// [-] epiphanyOnJan6: true|false|undefined (If true, Epiphany will be fixed to Jan 6) (defaults to false)
// [-] christmastideIncludesTheSeasonOfEpiphany: true|false|undefined (If false, the season of Epiphany will not be merged into Christmastide )
// [-] corpusChristiOnThursday: true|false|undefined (If true, Corpus Christi is set to Thursday) (defaults to false)
// [-] ascensionOnSunday: true|false|undefined (If true, Ascension is moved to the 7th Sunday of Easter) (defaults to false)
// [-] type: calendar|liturgical (return dates in either standard calendar or liturgical calendar format)
// [-] query: Additional filters to be applied against calendar dates array (default: none)
const _calendarYear = c => {

  // Get the liturgical seasons that run through the year
  let weekdayDates = _.union(
    Seasons.christmastide( c.year - 1, c.christmastideEnds, c.epiphanyOnJan6, c.christmastideIncludesTheSeasonOfEpiphany ),
    Seasons.earlyOrdinaryTime( c.year, c.christmastideEnds, c.epiphanyOnJan6 ),
    Seasons.lent( c.year ),
    Seasons.eastertide( c.year ),
    Seasons.laterOrdinaryTime( c.year ),
    Seasons.advent( c.year ),
    Seasons.christmastide( c.year, c.christmastideEnds, c.epiphanyOnJan6, c.christmastideIncludesTheSeasonOfEpiphany )
  );
  weekdayDates = _.filter( weekdayDates, d => d.moment.year() === c.year );

  // Get the celebration dates based on the given year and options
  let celebrationsDates = Celebrations.dates( c.year, c.christmastideEnds, c.epiphanyOnJan6, c.corpusChristiOnThursday, c.ascensionOnSunday );

  // Get the general calendar based on the given year and format the result for better processing
  let generalDates = Calendar.getCalendar('general').dates(c.year);

  // Get the relevant national calendar object based on the given country
  let nationalDates = Calendar.getCalendar(c.country).dates(c.year);

  return new Calendar(c.year, weekdayDates, celebrationsDates, generalDates, nationalDates).values();
};

// Returns an object containing dates for the
// days that occur during the liturgical year
// c: (an object literal with the following options)
// [-] year: The year to calculate the liturgical date ranges
// [-] country: Get national calendar dates for the given country (defaults to 'general')
// [-] locale: The language for the calendar names (defaults to 'en')
// [-] christmastideEnds: t|o|e (The mode to calculate the end of Christmastide. Defaukts to 'o')
// [-] epiphanyOnJan6: true|false|undefined (If true, Epiphany will be fixed to Jan 6) (defaults to false)
// [-] christmastideIncludesTheSeasonOfEpiphany: true|false|undefined (If false, the season of Epiphany will not be merged into Christmastide )
// [-] corpusChristiOnThursday: true|false|undefined (If true, Corpus Christi is set to Thursday) (defaults to false)
// [-] ascensionOnSunday: true|false|undefined (If true, Ascension is moved to the 7th Sunday of Easter) (defaults to false)
// [-] type: calendar|liturgical (return dates in either standard calendar or liturgical calendar format)
// [-] query: Additional filters to be applied against calendar dates array (default: none)
const _liturgicalYear = c => {

  // Get dates for current year
  let thisYear = _calendarYear( c );
  let start = Dates.firstSundayOfAdvent( c.year );

  // Get dates for the following year
  c.year = c.year + 1;
  let nextYear = _calendarYear( c );
  let end = Dates.firstSundayOfAdvent( c.year ); // Last day of liturgical year must be before this date

  return _.union(
    _.filter( thisYear, v => v.moment.isSame( start ) || v.moment.isAfter( start )),
    _.filter( nextYear, v => v.moment.isBefore( end ))
  );
};

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
const calendarFor = (customConfig:any = {}) => {

  // If config is passed as an integer
  // Then assume we want the calendar for the current year
  if (Number.isInteger(customConfig)) {
    customConfig = { year: customConfig };
  }

  // Sanitize incoming config into a complete configuration set
  const config = new Config(customConfig);

  // Set the locale information
  Utils.setLocale(config.locale);

  // Get dates based on options
  let dates = config.type === 'liturgical' ? _liturgicalYear(config) : _calendarYear(config);

  // Run queries, if any and return the results
  return queryFor(dates, config.query);
};

// Filters an array of dates generated from the calendarFor function based on a given query.
// dates: An array of dates generated from the calendarFor function
// query: An object containing keys to filter the dates by
const queryFor = (dates: DateItem[] = [], query: Object = {}) => {

  if (!_.every(dates, _.isObject)) {
    throw 'romcal.queryFor can only accept a single dimenional array of objects';
  }

  //==========================================================================
  // Check if there is a query defined, if none return the unfiltered
  // calendar array
  //==========================================================================
  if (!_.isNull(query) && !_.isEmpty(query) ) {

    // Months are zero indexed, so January is month 0.
    if ( _.has( query, 'month' ) ) {
      dates = _.filter( dates, d => _.eq( d.moment.month(), _.get( query, 'month' )));
    }

    if ( _.has( query, 'day' ) ) {
      dates = _.filter( dates, d => _.eq( d.moment.day(), _.get( query, 'day' )));
    }

    if (_.has( query, 'title' )) {
      dates = _.filter( dates, d => _.includes( d.data.meta.titles, _.get( query, 'title' ) ));
    }

    if ( _.has( query, 'group' ) ) {
      switch( _.get( query, 'group' ) ) {
        case 'days':
          dates = _.groupBy(dates, d => d.moment.day());
          break;
        case 'months':
          dates = _.groupBy(dates, d => d.moment.month());
          break;
        case 'daysByMonth':
          dates = _.groupBy(dates, d => d.moment.month());
          dates = _.map(dates, v => _.groupBy( v, d => d.moment.day()));
          break;
        case 'weeksByMonth':
          dates = _.groupBy(dates, d => d.moment.month());
          dates = _.map(dates, v => _.groupBy( v, d => d.data.calendar.week ));
          break;
        case 'cycles':
          dates = _.groupBy(dates, d => d.data.meta.cycle.value );
          break;
        case 'types':
          dates = _.groupBy(dates, d => d.type );
          break;
        case 'liturgicalSeasons':
          dates = _.groupBy(dates, d => d.data.season.key );
          break;
        case 'liturgicalColors':
          dates = _.groupBy(dates, d => d.data.meta.liturgicalColor.key );
          break;
        case 'psalterWeek':
          dates = _.groupBy(dates, d => d.data.meta.psalterWeek.key );
          break;
        default:
          break;
      }
    }
  }

  return dates;
};

export {
  calendarFor,
  queryFor
};
