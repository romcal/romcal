import moment from 'moment';
import _ from 'lodash';

import * as Calendars from '../calendars';
import * as Dates from './Dates';
import * as Utils from './Utils';
import * as Seasons from './Seasons';
import * as Celebrations from './Celebrations';

import {
  LiturgicalSeasons,
  Titles,
  LiturgicalColors,
  PsalterWeeks,
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

// Returns the merged national & general calendar dates
// along with key celebrations in the Roman Catholic rite
// Merges the national calendar to the general calendar
// where national calendar dates with the same key as a date
// in the general calendar will take precedence
// options: (see _calendarYear)
const _getCalendar = options => {

  // Get the general calendar based on the given year and format the result for better processing
  let general = getCalendar('general').dates(options.year);

  // Get the relevant national calendar object based on the given country
  let national = getCalendar(options.country).dates(options.year);

  // Check if 'drop' has been defined for any celebrations in the national calendar
  // and remove them from both national and general calendar sources
  let dropKeys = _.map(_.filter(national, n => (_.has(n, 'drop') && n.drop )), 'key');
  if (!_.isEmpty(dropKeys)) {
    _.each(dropKeys, dropKey => { // _,remove() mutates the array
      _.remove(general, ({key}) => _.eq(key, dropKey));
      _.remove(national, ({key}) => _.eq(key, dropKey));
    });
  }

  // format the general calendar for better processing and add the calendar source "g"
  general = _.reduce(general, ( r, v, k ) => {
    v.source = 'g';
    r[ v.key ] = v;
    return r;
  }, {});

  // format the national calendar for better processing and add the calendar source "n"
  national = _.reduce(national, ( r, v, k ) => {
    v.source = 'n';
    r[ v.key ] = v;
    return r;
  }, {});

  // If the national calendar has the same celebration defined
  // as in the general calendar, it replaces the one
  // in the general calendar
  // If the national calendar date is not in the general
  // calendar, it is added
  _.each( national, ( v, k ) => _.set( general, k, v ));

  // Get the celebration dates based on the given year and options
  // and format the result for better processing
  let celebrations = _.reduce(
    Celebrations.dates( options.year, options.christmastideEnds, options.epiphanyOnJan6, options.corpusChristiOnThursday, options.ascensionOnSunday ),
    ( r, v, k ) => {
      v.source = 'c';
      r[ v.key ] = v;
      return r;
    }, {});

  // If the general calendar has the same celebration defined
  // check if it is prioritized, if not prioritized, it will
  // be overwritten by the incoming celebration date
  _.each( celebrations, ( v, k ) => {
    if ( _.has( general, k ) ) {
      let date = _.get( general, k );
      // if the general date is not prioritized, it will be overwritten
      // by the celebration date
      if ( !_.isUndefined( date.data ) && !date.data.prioritized ) {
        _.set( general, k, v );
      }
    }
    else {
      _.set( general, k, v );
    }
  });

  // Merge coinciding dates based on this logic:
  //
  // Rule 1:
  // celebration dates have the highest priority
  // but if the national calendar has the same date
  // and is prioritized, it can replace the celebration date
  // celebration dates will always override general dates
  // only a national date may override a celebration
  //
  // Rule 2:
  // A national date can override a general date if the general
  // date is not prioritized. However if the general date is
  // prioritized, it will NOT be replaced by a national date that is
  // not prioritized
  // If both are prioritzed, the national date is kept
  //

  // Group dates by their moment values
  let result = _.groupBy( general, v => v.moment.valueOf());

  // Apply replacement logic for coinciding dates
  result = _.map( result, coincidences => {

    // Only run when there's more than 1 date in the group
    if ( coincidences.length > 1 ) {

      // Group coincidences by their source
      let sources = _.groupBy( coincidences, v => v.source );

      // Flag of the date to be retained
      let keep;

      // If the group has
      // [1] a celebration
      // [2] no national date
      // [3] no general date
      // Keep the celebration and discard other coincidences
      if ( _.has( sources, 'c' ) && !_.has( sources, 'n') && !_.has( sources, 'g') ) {
        keep = 'c';
      }

      // If the group has
      // [1] a celebration
      // [2] a national date
      // [3] no general date
      // Keep national date IF its prioritized
      // else keep the celebration
      else if ( _.has( sources, 'c') && _.has( sources, 'n' ) ) {
        if ( _.head( sources['n'] ).data.prioritized ) {
          keep = 'n';
        }
        else {
          keep = 'c';
        }
      }

      // If the group has
      // [1] a national
      // [2] a general date
      // [3] no celebration
      // Keep the general date IF its prioritized
      // If not, keep the national date
      else if ( !_.has( sources, 'c') && _.has( sources, 'n' ) && _.has( sources, 'g') ) {
        if ( !_.head( sources['n'] ).data.prioritized && _.head( sources['g'] ).data.prioritized ) {
          keep = 'g';
        }
        else {
          keep = 'n';
        }
      }

      // If the group has multiple general dates ...
      // Step 1: Keep the one's that are prioritzed
      // Step 2: Keep the highest ranking general date
      else if ( !_.has( sources, 'c') && !_.has( sources, 'n' ) && _.has( sources, 'g') ) {
        // Get prioritized dates, if any
        let prioritizedDates = _.map( sources, source => _.filter( source, d => d.data.prioritized ));
        if (!_.isEmpty(prioritizedDates)) { // Pick highest ranking prioritized date
          coincidences = _.map(prioritizedDates, d => _.minBy(d, item => _.indexOf(Types, item.type)));
        } else { // If no prioritized dates found, simply pick the highest ranking date
          coincidences = _.map(sources, source => _.minBy(source, item => _.indexOf(Types, item.type)));
        }
        keep = 'g';
      }

      // If the group has a celebration and general date but no national date
      // and any other combination, keep the celebration date
      else {
        keep = 'c';
      }

      // Keep only the relevant date
      coincidences = _.filter( coincidences, { source: keep } );
    }

    return coincidences;
  });

  // Flatten the results
  result = _.flatten(result);

  // Remap the keys to be timestamps for better processing
  result = _.reduce(result, ( r, v, k ) => {
    // If the response already has this timestamp
    if ( _.has( r, v.moment.valueOf() ) ) {
      let date = _.get( r, v.moment.valueOf() );
      // If the incoming date has a higher rank than the current date
      if ( _.lt( _.indexOf( Types, v.type ), _.indexOf( Types, date.type ) ) ) {
        // Replace it with the incoming date
        r[ v.moment.valueOf() ] = v;
      }
    }
    else { // Response does not have this timestamp
      r[ v.moment.valueOf() ] = v;
    }
    return r;
  }, {});

  return result;
};

// options: (configuration options)
// dates: (liturgical dates array)
const _applyDates = ( options, dates ) => {

  // Get the merged General and National Calendar dates
  let calendarDates = _getCalendar( options );
  let liturgicalDates = _.reduce( dates, ( r, v, k ) => {
    r[ v.moment.valueOf() ] = v;
    return r;
  }, {});

  dates = _.map( liturgicalDates, (date, timestamp) => {

    if ( _.has( calendarDates, timestamp ) ) {

      let candidate = _.get( calendarDates, timestamp );
      let replace = false;
      let derank = false;

      //------------------------------------------------------------------
      // A celebration date will replace anything
      //------------------------------------------------------------------
      if ( _.eq( candidate.source, 'c' )) {
        replace = true;
      }
      //------------------------------------------------------------------
      // A general or national date needs further processing
      // before replacing something in the liturgical calendar
      //------------------------------------------------------------------
      else {

        //------------------------------------------------------------------
        // A SOLEMNITY will replace any date in the liturgical calendar
        // - solemnity must not override a solemnity in octave of EASTER
        //------------------------------------------------------------------
        if (_.eq( candidate.type, Types.SOLEMNITY ) && _.gt( _.indexOf( Types, date.type ), 0 )) {
          replace = true;
        }

        //------------------------------------------------------------------
        // MEMORIAL or OPT_MEMORIAL that fall on a FERIA
        // in the SEASON OF LENT are reduced to a COMMEMORATION
        //------------------------------------------------------------------
        else if (
          _.eq( date.type, Types.FERIA )
          && _.eq( date.data.season.key, LiturgicalSeasons.LENT )
          && ( _.eq( candidate.type, Types.MEMORIAL ) || _.eq( candidate.type, Types.OPT_MEMORIAL ) )
        ) {
          replace = true;
          derank = true;
        }

        //------------------------------------------------------------------
        // MEMORIAL or OPT_MEMORIAL that fall on a FERIA
        // outside LENT or the Easter Octave will replace the general FERIA
        //------------------------------------------------------------------
        else if (
          _.eq( date.type, Types.FERIA ) // If the current date is of type feria
          && !_.eq( date.data.season.key, LiturgicalSeasons.LENT ) // And this feria is not in Lent
          && ( _.eq( candidate.type, Types.MEMORIAL ) || _.eq( candidate.type, Types.OPT_MEMORIAL ) ) // And the candidate is either a memorial or optional memorial
        ) {
          replace = true; // Then the candidate is fit to replace the feria
        }

        //------------------------------------------------------------------
        // A non prioritized FEAST can only replace FERIA \
        // - feria must not be in the octave of EASTER
        //------------------------------------------------------------------
        else if (
          _.eq( candidate.type, Types.FEAST )
          && _.eq( date.type, Types.FERIA )
          && !_.eq( date.data.season.key, LiturgicalSeasons.LENT )
          && !candidate.data.prioritized
        ) {
          replace = true;
        }

        //------------------------------------------------------------------
        // A FEAST occuring in the season of LENT is deranked
        // to a COMMEMORATION
        //------------------------------------------------------------------
        else if (
          _.eq( candidate.type, Types.FEAST )
          && _.eq( date.type, Types.FERIA )
          && _.eq( date.data.season.key, LiturgicalSeasons.LENT )
        ) {
          replace = true;
          derank = true;
        }

        //------------------------------------------------------------------
        // A prioritized FEAST can replace a SUNDAY or FERIA
        // When a Feast of the Lord falls on a SUNDAY it replaces the SUNDAY in Ordinary Time.
        // - feria must not be in the octave of EASTER
        //------------------------------------------------------------------
        else if (
          _.eq( candidate.type, Types.FEAST )
          && ( _.eq( date.type, Types.FERIA ) || _.eq( date.type, Types.SUNDAY ) )
          && !_.eq( date.data.season.key, LiturgicalSeasons.LENT )
          && candidate.data.prioritized
        ) {
          replace = true;
        }

        //------------------------------------------------------------------
        // A Sunday can only replace a Sunday
        //------------------------------------------------------------------
        else if (
          _.eq( date.type, Types.SUNDAY )
          && _.eq( candidate.type, Types.SUNDAY )
        ) {
          replace = true;
        }

        //------------------------------------------------------------------
        // A feria can only replace a feria
        // Sundays in Ordinary Time and Chrismastide take precedence over all other celebrations
        // except for SOLEMNITIES and certain FEASTS
        //------------------------------------------------------------------
        else if (
          _.eq( date.type, Types.FERIA )
          && _.eq( candidate.type, Types.FERIA )
        ) {
          replace = true;
        }

        // Uncomment to see the dates that from the calendar that were not replaced
        // else {
        //   console.log('not replaced:', candidate.type, candidate.moment.format('L'), candidate.name );
        // }

      }

      if ( replace ) {
        date.key = candidate.key;
        date.name = candidate.name;
        date.source = candidate.source;
        date.type = ( derank ? Types.COMMEMORATION : candidate.type );
        date.data = _.merge({}, date.data, candidate.data );
      }
    }

    return date;

  });

  return dates;
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
  let dates = _.union(
    Seasons.christmastide( c.year - 1, c.christmastideEnds, c.epiphanyOnJan6, c.christmastideIncludesTheSeasonOfEpiphany ),
    Seasons.earlyOrdinaryTime( c.year, c.christmastideEnds, c.epiphanyOnJan6 ),
    Seasons.lent( c.year ),
    Seasons.eastertide( c.year ),
    Seasons.laterOrdinaryTime( c.year ),
    Seasons.advent( c.year ),
    Seasons.christmastide( c.year, c.christmastideEnds, c.epiphanyOnJan6, c.christmastideIncludesTheSeasonOfEpiphany )
  );

  // console.log(Seasons.lent(c.year));

  // Merge liturgical calendar dates with those from the general & national calendars
  dates = _applyDates( c, dates );
  // Filter dates within the given year only
  dates = _.filter( dates, d => _.eq( d.moment.year(), c.year ));
  dates = _liturgicalCycleMetadata( c.year, dates );

  return dates;
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

  let dates = _.union(
    _.filter( thisYear, v => v.moment.isSame( start ) || v.moment.isAfter( start )),
    _.filter( nextYear, v => v.moment.isBefore( end ))
  );

  return dates;
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
