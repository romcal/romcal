import moment from 'moment';
import _ from 'lodash';

import * as Calendars from '../calendars';
import * as Dates from './Dates';
import * as Utils from './Utils';
import * as Seasons from './Seasons';
import * as Celebrations from './Celebrations';

import {
  Types,
  Cycles
} from '../constants';

// Get an array of country names
const countries = _.keys(Calendars);

//================================================================================================
// Processing method for calendar config
//================================================================================================

const _sanitizeConfig = config => {
  config = _.isPlainObject(config) ? config : _.stubObject();
  config.year = config.year || moment.utc().year();
  config.christmastideEnds = config.christmastideEnds || 'o';
  // If the national calendar of Slovakia is requested and the flag to make Epiphany fall on Jan 6
  // is not specified, then default the flag to true because Slovakia always celebrates Epiphany of Jan 6.
  if (_.eq(config.country, 'slovakia') && _.isUndefined(config.epiphanyOnJan6)) {
    config.epiphanyOnJan6 = true;
  }
  config.epiphanyOnJan6 = config.epiphanyOnJan6 || false;
  config.christmastideIncludesTheSeasonOfEpiphany = config.christmastideIncludesTheSeasonOfEpiphany || true;
  config.corpusChristiOnThursday = config.corpusChristiOnThursday || false;
  config.ascensionOnSunday = config.ascensionOnSunday || false;
  config.country = config.country || ''; // Must be defaulted to empty string if not specified
  // CRUCIAL!! If country was passed as "general", reset it to an empty string
  if (_.eq(config.country, 'general')) {
    config.country = '';
  }
  config.locale = config.locale || 'en';
  config.type = config.type || 'calendar';
  config.query = _.isPlainObject( config.query ) ? config.query : null;
  return config;
};


// Return the appropriate national calendar based on the country given
// Returns object with function returning empty array if nothing specified
// country: the camel cased country name to get the calendar for (country name will be camel cased in this method)
const getCalendar = country => {
  if ( country ) {
    if ( _.has( Calendars, _.camelCase(country))) {
      return Calendars[_.camelCase(country)];
    }
    else {
      return Calendars['general'];
    }
  }
  return { dates: () => [] };
};


// Check if 'drop' has been defined for any celebrations in the national calendar
// and remove them from both national and general calendar sources
const dropItems = (calendars) => {
  calendars.forEach((calendar, i) => {
    let dropKeys = _.map(_.filter(calendar, n => (_.has(n, 'drop') && n.drop )), 'key');
    if (!_.isEmpty(dropKeys)) {
      _.each(dropKeys, dropKey => {
        for (let j = 0; j <= i; j++) {
          _.remove(calendars[j], ({key}) => _.eq(key, dropKey));
        }
      });
    }
  });
  return calendars;
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
  let nextCycle = ( _.eq( thisCycle,  2 ) ? 0 : thisCycle + 1 );

  _.map( dates, v => {

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
  weekdayDates = _.filter( weekdayDates, d => _.eq( d.moment.year(), c.year ));

  // Get the celebration dates based on the given year and options
  let celebrationsDates = Celebrations.dates( c.year, c.christmastideEnds, c.epiphanyOnJan6, c.corpusChristiOnThursday, c.ascensionOnSunday );

  // Get the general calendar based on the given year and format the result for better processing
  let generalDates = getCalendar('general').dates(c.year);

  // Get the relevant national calendar object based on the given country
  let nationalDates = getCalendar(c.country).dates(c.year);

  // Combine calendars together in a new rawCalendar object.
  // And map the keys to timestamps for better processing.
  let rawCalendar = {};
  dropItems([ weekdayDates, celebrationsDates, generalDates, nationalDates ])
    .forEach((calendar, i) => calendar
      .forEach((item) => {
        if (item.moment) { // TODO: manage errors when moment is undefined
          let timestamp = item.moment.valueOf();

          if (!rawCalendar[timestamp]) {
            rawCalendar[timestamp] = [];
          }

          // If a date item already exists (have the same key name), it will be removed in favour of
          // the new one, except if the previous item is prioritized but not the new one.
          let previousItems = _.filter(rawCalendar[timestamp], {key: item.key});
          if (previousItems.length) {
            previousItems.forEach((previousItem) => {
              if ((previousItem && previousItem.data && !previousItem.data.prioritized) ||
                (previousItem && previousItem.data && previousItem.data.prioritized && item.data && item.data.prioritized)) {
                _.remove(rawCalendar[timestamp], {key: item.key})
              }
            });
          }

          item.stack = i;
          rawCalendar[timestamp].push(item);
        }
  }));

  for (let key in rawCalendar) {
    if (Object.prototype.hasOwnProperty.call(rawCalendar, key)) {

      // Sort all date items by relevance:
      // first per priority, then by stack, and finally by type.
      rawCalendar[key].sort((a, b) => {

        // 1. Sort by priority
        let prioritized1 = a.data && a.data.prioritized;
        let prioritized2 = b.data && b.data.prioritized;
        if (prioritized1 && !prioritized2) return -1;
        if (!prioritized1 && prioritized2) return 1;
        if (prioritized1 === prioritized2) {

          // 2. Sort by stack
          let stack1 = a.stack;
          let stack2 = b.stack;
          if (stack1 > stack2) return -1;
          if (stack1 < stack2) return 1;
          if (stack1 === stack2) {

            // 3. Sort by type
            let type1 = Types.indexOf(a.type);
            let type2 = Types.indexOf(b.type);
            if (type1 < type2) return -1;
            if (type1 > type2) return 1;
            return 0;
          }
        }
      });

      // Now that items are sorted, let's drop other non relevant date items.
      // Note: when the date object contain only optional items (in addition to the feria),
      // like OPT_MEMORIAL or COMMEMORATIONS, they are all kept with the feria,
      // and the feria is moved first since it's the default item if of the
      // optional items are used.
      let firstItemType = rawCalendar[key][0];
      let itemsLength = rawCalendar[key].length;
      if (rawCalendar[key][0].data.prioritized ||
        (Types.indexOf(firstItemType) > Types.indexOf(Types.MEMORIAL))) {
        // Keep only the first date item
        rawCalendar[key] = [rawCalendar[key][0]];
      } else if (itemsLength > 1 || rawCalendar[key][itemsLength - 1].type === Types.FERIA) {
        // Move the feria in first position, if all other items are optionals
        rawCalendar[key].sort((a, b) => {
          return a.type === Types.FERIA ? -1 : b.type === Types.FERIA ? 1 : 0;
        });
      }
    }
  }

  let finalCalendar = _.flatten(Object.values(rawCalendar));
  finalCalendar = _.filter( finalCalendar, d => _.eq( d.moment.year(), c.year ));
  finalCalendar = _liturgicalCycleMetadata(c.year, finalCalendar);
  return finalCalendar;
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
// skipIsoConversion: undefined|true|false - skip converting moment objects to ISO8601 timestamp
//                    default action converts moment objects to ISO Strings
//
const calendarFor = (config = {}, skipIsoConversion = false ) => {

  config.country = 'france';
  config.locale = 'fr';
  config.type = 'liturgical';

  // If config is passed as a boolean
  // Then assume that we want the calendar for the current year
  // and either want to skip moment date ISO conversion or keep it
  // depending on the config value is true or false
  if (_.isBoolean(config)) {
    skipIsoConversion = config;
    config = {};
  }

  // If config is passed as an integer
  // Then assume we want the calendar for the current year
  if (_.isNumber(config)) {
    config = { year: config };
    skipIsoConversion = skipIsoConversion || false;
  }

  // Sanitize incoming config
  config = _sanitizeConfig(config);

  // Set the locale information
  Utils.setLocale(config.locale);

  // Get dates based on options
  let dates = _.eq( config.type, 'liturgical') ? _liturgicalYear(config) : _calendarYear(config);

  // Run queries, if any and return the results
  return queryFor(dates, config.query, skipIsoConversion);
};

// Filters an array of dates generated from the calendarFor function based on a given query.
// dates: An array of dates generated from the calendarFor function
// query: An object containing keys to filter the dates by
// skipIsoConversion: undefined|true|false - skip converting moment objects to ISO8601 timestamp
//                    default action converts moment objects to ISO Strings
const queryFor = (dates = [], query = {}, skipIsoConversion = false ) => {

  if (!_.every(dates, _.isObject)) {
    throw 'romcal.queryFor can only accept a single dimenional array of objects';
  }

  //==========================================================================
  // Check if there is a query defined, if none return the unfiltered
  // calendar array
  //==========================================================================
  if (!_.isNull(query) && !_.isEmpty(query) ) {

    // Reparse dates into moment objects if needed
    dates = Utils.convertIsoDateStringToMomentObject(dates);

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
          // console.log('dates', dates );
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

  // If undefined or false, continue with conversion
  if ( !skipIsoConversion ) {
    dates = Utils.convertMomentObjectToIsoDateString(dates);
  }

  return dates;
};

export {
  calendarFor,
  queryFor,
  countries,
  getCalendar
};
