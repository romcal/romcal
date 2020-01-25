// @flow

import moment, {Moment} from 'moment';
import _ from 'lodash';

import * as Calendars from '../calendars';
import * as Dates from './Dates';
import * as Utils from './Utils';
import * as Seasons from './Seasons';
import * as Celebrations from './Celebrations';

import {
  Types,
  Cycles,
  LiturgicalSeasons
} from '../constants';

// Get an array of country names
const countries = _.keys(Calendars);

class Config {
  year: number;
  country: string = '';
  locale: string;
  christmastideEnds: 't' | 'o' | 'e';
  epiphanyOnJan6: boolean;
  christmastideIncludesTheSeasonOfEpiphany: boolean;
  corpusChristiOnThursday: boolean;
  ascensionOnSunday: boolean;
  type: 'calendar' | 'liturgical';
  query: {
    day: number,
    month: number,
    group: string,
    title: string
  };

  static getConfig(country: ?string):Calendars<Array<{}>> {
    if (!country) return {};
    return Calendars[country].defaultConfig || {};
  }

  static sanitize(value, acceptable):any {
    if (acceptable === 'string' || acceptable === 'number') {
      return typeof value === acceptable ? {default: () => value} : {default: (d) => d};
    }
    if (acceptable === 'boolean') acceptable = [true, false];
    if (acceptable.indexOf(value) > -1) return {default: () => value};
    return {default: (d) => d};
  }

  constructor(customConfig) {
    customConfig = _.isPlainObject(customConfig) ? customConfig : {};

    // If a country is specified, check if exists in the romcal codebase
    customConfig.country = typeof customConfig.country === 'string' ? customConfig.country : '';
    if (customConfig.country.toLowerCase() !== 'general' && Object.prototype.hasOwnProperty.call(Calendars, _.camelCase(customConfig.country))) {
      this.country = _.camelCase(customConfig.country);
    }

    // Load default config for general and selected country,
    // and combine them with the specified custom config
    let generalConfig = Config.getConfig('general');
    let countryConfig = Config.getConfig(this.country);
    let c = {
      ...generalConfig,
      ...countryConfig,
      ...customConfig
    };

    // Map configuration
    this.christmastideEnds = Config
      .sanitize(c.christmastideEnds, ['t', 'o', 'e'])
      .default(generalConfig.christmastideEnds);
    this.epiphanyOnJan6 = Config
      .sanitize(c.epiphanyOnJan6, 'boolean')
      .default(generalConfig.epiphanyOnJan6);
    this.christmastideIncludesTheSeasonOfEpiphany = Config
      .sanitize(c.christmastideIncludesTheSeasonOfEpiphany, 'boolean')
      .default(generalConfig.christmastideIncludesTheSeasonOfEpiphany);
    this.corpusChristiOnThursday = Config
      .sanitize(c.corpusChristiOnThursday, 'boolean')
      .default(generalConfig.corpusChristiOnThursday);
    this.ascensionOnSunday = Config
      .sanitize(c.ascensionOnSunday, 'boolean')
      .default(generalConfig.ascensionOnSunday);
    this.locale = Config
      .sanitize(c.locale, 'string')
      .default(generalConfig.locale);
    this.year = Config
      .sanitize(parseInt(c.year), 'number')
      .default(moment.utc().year());
    this.type = Config
      .sanitize(c.type, ['calendar', 'liturgical'])
      .default('calendar');

    // Sanitize optional query section
    let query = _.isPlainObject( c.query ) ? c.query : {};
    this.query = {};
    if (query.day !== undefined) this.query.day = query.day;
    if (query.month !== undefined) this.query.month = query.month;
    if (query.group !== undefined) this.query.group = query.group;
    if (query.title !== undefined) this.query.title = query.title;

    return this;
  }
}

class DateItem {
  static latestId: number;
  id: number;
  key: string;
  date: string;
  stack: number;
  type: string;
  name: string;
  data: Object;
  moment: Moment;
  base: DateItem;

  static incrementId(): number {
    if (isNaN(this.latestId)) this.latestId = 0;
    else this.latestId++;
    return this.latestId;
  }

  constructor(item: Object, baseItem: DateItem) {
    this.id = DateItem.incrementId();
    this.key = item.key;
    this.date = item.moment.toISOString();
    this.stack = item.stack;
    this.type = item.type;
    this.name = item.name;
    this.data = item.data || {};
    this.data.meta = this.data.meta || {};
    this.moment = item.moment;

    // The original default item is added to the current item as a `base ` property
    if (baseItem && this.id !== baseItem.id) {
      this.base = baseItem;
      this.data = {...{
          season: baseItem.data.season,
          calendar: baseItem.data.calendar
        }, ...this.data};
      this.data.meta.psalterWeek = this.data.meta.psalterWeek || baseItem.data.meta.psalterWeek;
    }
  }
}

class Calendar {
  itemValues = [];
  year;

  constructor(year: number, baseCalendar, ...calendars) {
    this.year = year;

    Calendar.dropItems(baseCalendar, ...calendars)
      .forEach((cal, i) => cal
        .forEach((item) => {

          // If a previous date item already exists (have a same key name), it will be removed in favour of
          // the new one, except if the previous item is prioritized but not the new one.
          let previousItems = this.filter({key: item.key});
          if (previousItems.length) {
            previousItems.forEach((previousItem) => {
              if ((!previousItem.data.prioritized) ||
                (previousItem.data.prioritized && item.data.prioritized)) {
                this.removeWhere({id: previousItem.id});
              }
            });
          }

          item.stack = i;
          let baseItem = this.find({date: item.moment.toISOString(), stack: 0});
          this.push(item, baseItem);
        }));

    return this.values();
  }

  filter(predicate: Object) {
    return _.filter(this.itemValues, predicate);
  }

  find(predicate: Object) {
    return _.find(this.itemValues, predicate);
  }

  valuesByDates() {
    return this.itemValues.reduce((result: Object, value: DateItem) => {
      (result[value.date] = result[value.date] || []).push(value);
      return result;
    }, {});
  }

  push(itemObj: Object, baseItem: DateItem) {
    let item = new DateItem(itemObj, baseItem);
    this.itemValues.push(item);
  }

  removeWhere(predicate: Object) {
    _.remove(this.itemValues, predicate);
  }

  // Check if 'drop' has been defined for any celebrations in the national calendar
  // and remove them from both national and general calendar sources
  static dropItems(...calendars) {
    calendars.forEach((calendar, i) => {
      let dropKeys = _.map(_.filter(calendar, n => (_.has(n, 'drop') && n.drop)), 'key');
      dropKeys.forEach(dropKey => {
        for (let j = 0; j <= i; j++) {
          _.remove(calendars[j], ({key}) => key === dropKey);
        }
      });
    });
    return calendars;
  }

  adjustTypesInSeasons() {
    // Special type management in the season of LENT
    this.itemValues.forEach(item => {
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

  sortAndKeepRelevant() {

    // Reorder the type ranking, so when there is only optional items (in addition to the FERIA),
    // the FERIA item is moved first before the optional items,
    // since it's the default item if none of the optional items are used.
    const lowerNonOptionalType = Types.MEMORIAL;
    const types = Types.slice(0, Types.length - 1);
    types.splice(types.indexOf(lowerNonOptionalType) + 1, 0, Types[Types.length - 1]);
    // const types = Types;

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
              .forEach(item => this.removeWhere({id: item.id}));
          }
        }
      }
    }

    return this;
  }

  values() {
    this
      .adjustTypesInSeasons()
      .sortAndKeepRelevant();

    let finalCalendar = this.itemValues;
    finalCalendar = _.filter( finalCalendar, d => d.moment.year() === this.year );
    finalCalendar = _liturgicalCycleMetadata(this.year, finalCalendar);
    return finalCalendar;
  }
}

// Return the appropriate national calendar based on the country given
// Returns object with function returning empty array if nothing specified
// country: the camel cased country name to get the calendar for (country name will be camel cased in this method)
const getCalendar: Calendars<Array<{}>> = (country: ?string) => {
  if (!country) return { dates: () => [] };
  const key = Object.prototype.hasOwnProperty.call(Calendars, _.camelCase(country)) ? _.camelCase(country) : 'general';
  return Calendars[key];
};


//================================================================================================
// Include liturgical cycle metadata for the dates in the liturgical year
//================================================================================================
// year
// dates
const _liturgicalCycleMetadata = (year, dates) => {

  // Formula to calculate lectionary cycle (Year A, B, C)
  let firstSundayOfAdvent = Dates.firstSundayOfAdvent(year);
  let thisCycle = ( year - 1963 ) % 3;
  let nextCycle = thisCycle ===  2 ? 0 : thisCycle + 1;

  dates.map(v => {

    //=====================================================================
    // LITURGICAL CYCLES
    //---------------------------------------------------------------------
    // If the date is on or after the first sunday of advent
    // it is the next liturgical cycle
    //=====================================================================
    v.data = v.data || {};
    v.data.meta = v.data.meta || {};
    if ( v.moment.isSame( firstSundayOfAdvent ) || v.moment.isAfter( firstSundayOfAdvent ) ) {
      v.data.meta.cycle = {
        key: nextCycle,
        value: Cycles[ nextCycle ]
      };
    }
    else {
      v.data.meta.cycle = {
        key: thisCycle,
        value: Cycles[ thisCycle ]
      };
    }

    return v;
  });

  return dates;
};

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
  let generalDates = getCalendar('general').dates(c.year);

  // Get the relevant national calendar object based on the given country
  let nationalDates = getCalendar(c.country).dates(c.year);

  return new Calendar(c.year, weekdayDates, celebrationsDates, generalDates, nationalDates);
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
const queryFor = (dates: Array<DateItem> = [], query: Object = {}) => {

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
  queryFor,
  countries,
  getCalendar
};
