var _ = require('lodash'),
    Path = require('path'),
    moment = require('moment'),
    range = require('moment-range'),
    Loader = require('require-all');

var Utils = require( Path.join( __dirname, 'utils' )),
    Dates = require( Path.join( __dirname, 'dates' )),
    Seasons = require( Path.join( __dirname, 'seasons' )),
    Celebrations = require( Path.join( __dirname, 'celebrations' )),
    Season = require( Path.join( __dirname, '../data/seasons' )),
    Titles = require( Path.join( __dirname, '../data/titles' )),
    PsalterWeeks = require( Path.join( __dirname, '../data/psalterWeeks' )),
    Types = require( Path.join( __dirname, '../data/types' )).types,
    Cycles = require( Path.join( __dirname, '../data/cycles' ));

//================================================================================================
// Processing method for arguments
//================================================================================================

var _getConfig = function() {
  var o = _.isPlainObject( arguments[0] ) ? arguments[0] : {};
  o.year = o.year || moment.utc().year();
  o.christmastideEnds = o.christmastideEnds || 'o';
  o.epiphanyOnJan6 = o.epiphanyOnJan6 || false;
  o.corpusChristiOnThursday = o.corpusChristiOnThursday || false;
  o.ascensionOnSunday = o.ascensionOnSunday || false;
  o.country = o.country || false;
  o.locale = o.locale || 'en';
  o.type = o.type || 'calendar';
  o.query = _.isPlainObject( o.query ) ? o.query : null;
  return o;
};

//================================================================================================
// METHODS TO HANDLE GENERAL AND NATIONAL CALENDAR DATES
//================================================================================================

var Calendars = Loader({
  dirname: Path.join( __dirname, '../calendars'),
  filter:  /^(.*\.(?:(js)$))?[^.]*$/i,
  map : function ( name, path ) {
    return name.replace(/\.[^/.]+$/, "").toLowerCase();
  }
});

// _.each( Calendars, function( Calendar ) {
//   Calendar.dates( 2015 );
// })

// Return the appropriate national calendar based on the country given
// Returns object with function returning empty array if nothing specified
// arguments[0]: country
var _getNationalCalendar = function() {
  if ( arguments[0] ) {
    if ( _.has( Calendars, arguments[0] ) ) {
      return Calendars[ arguments[0].toLowerCase() ];
    }
  }
  return { dates: function() { return []; } };
};

// Returns the merged national & general calendar dates
// along with key celebrations in the Roman Catholic rite
// Merges the national calendar to the general calendar
// where national calendar dates with the same key as a date
// in the general calendar will take precedence
// arguments[0]: options (see _calendarYear)
var _getCalendar = function( o ) {

  // Get the relevant national calendar object based on the given country
  var national = _.reduce( _getNationalCalendar( o.country ).dates( o.year ), 
    function( r, v, k ) {
      v.source = 'n';
      r[ v.key ] = v;
      return r;
    }, {});

  // Get the general calendar based on the given year and format the result for better processing
  var general = _.reduce( Calendars['general'].dates( o.year ), function( r, v, k ) {
    v.source = 'g';
    r[ v.key ] = v;
    return r;
  }, {});

  // If the national calendar has the same celebration defined
  // as in the general calendar, it replaces the one
  // in the general calendar
  // If the national calendar date is not in the general
  // calendar, it is added
  _.each( national, function( v, k ) {
    _.set( general, k, v );
  });

  // Get the celebration dates based on the given year and options and format the result for better processing
  var celebrations = _.reduce( 
    Celebrations.dates( o.year, o.christmastideEnds, o.epiphanyOnJan6, o.corpusChristiOnThursday, o.ascensionOnSunday ), 
    function( r, v, k ) {
      v.source = 'c'; 
      r[ v.key ] = v;
      return r;
    }, {});

  // If the general calendar has the same celebration defined
  // check if it is prioritized, if not prioritized, it will 
  // be overwritten by the incoming celebration date
  _.each( celebrations, function( v, k ) {
    if ( _.has( general, k ) ) { 
      var date = _.get( general, k );
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
  var result = _.chain( general )
    // Group dates by their dates
    .groupBy( function( v ) { return v.moment.valueOf() } )
    .map( function( coincidences ) {

      // Only run when there's more than 1 date in the group
      if ( coincidences.length > 1 ) {

        // Group coincidences by their source
        var sources = _.groupBy( coincidences, function( v ) {
          return v.source;
        });

        // If the group has a celebration and no national date and no general date
        var keep = 'c';
        if ( _.has( sources, 'c' ) && !_.has( sources, 'n') && !_.has( sources, 'g') ) {
          // Keep the celebration and discard other coincidences
          keep = 'c';
        }
        // If the group has a celebration and national date and no general date
        else if ( _.has( sources, 'c') && _.has( sources, 'n' ) ) {
          // Keep national date if its prioritized
          if ( _.head( sources['n'] ).data.prioritized ) {
            keep = 'n';
          }
          // else keep the celebration
          else {
            keep = 'c';
          }
        }
        // If the group has a national and general date but no celebration
        else if ( !_.has( sources, 'c') && _.has( sources, 'n' ) && _.has( sources, 'g') ) {
          // Keep the general date if its prioritized
          if ( !_.head( sources['n'] ).data.prioritized && _.head( sources['g'] ).data.prioritized ) {
            keep = 'g';
          }
          else {
            keep = 'n';
          }
        }
        // If the group has multiple general dates only
        else if ( !_.has( sources, 'c') && !_.has( sources, 'n' ) && _.has( sources, 'g') ) {
          // Keep the highest ranking general date
          sources['g'] = _.map( sources, function( source ) {
            return _.minBy( source, function( item ) {
              return _.indexOf( Types, item.type );
            });
          });
          keep = 'g';
        }
        // If the group has a celebration and general date but no national date
        // and any other combination
        else {
          keep = 'c';
        }

        // Keep only the relevant date
        coincidences = _.filter( coincidences, { source: keep } );
      }

      return coincidences;
    })
    .flatten()
    // Remap the keys to be timestamps for better processing
    .reduce( function( r, v, k ) {
      // If the response already has this timestamp        
      if ( _.has( r, v.moment.valueOf() ) ) {
        var date = _.get( r, v.moment.valueOf() );
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
    }, {}).value();

  return result;
};

// arguments[0]: options (configuration options)
// arguments[1]: dates (liturgical dates array)
var _applyDates = function( options, dates ) {

  // Get the merged General and National Calendar dates
  var calendarDates = _getCalendar( arguments[0] ),
      liturgicalDates = _.reduce( arguments[1], function( r, v, k ) {
        r[ v.moment.valueOf() ] = v;
        return r;
      }, {});

  _.map( liturgicalDates, function( date, timestamp ) {

    if ( _.has( calendarDates, timestamp ) ) {

      var candidate = _.get( calendarDates, timestamp ),
          replace = false,
          derank = false;

      //------------------------------------------------------------------
      // A celebration date will replace anything
      //------------------------------------------------------------------
      if (
        _.eq( candidate.source, 'c' )
      ) {
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
        if ( 
          _.eq( candidate.type, _.head( Types ) ) 
          && _.gt( _.indexOf( Types, date.type ), 0 )
        ) {
          replace = true;
        }

        //------------------------------------------------------------------
        // MEMORIAL or OPT_MEMORIAL that fall on a WEEKDAY 
        // in the SEASON OF LENT are reduced to a COMMEMORATION
        //------------------------------------------------------------------
        else if ( 
          _.eq( date.type, _.last( Types ) ) 
          && _.eq( date.data.season.key, Season.LENT )
          && ( _.eq( candidate.type, Types[5] ) || _.eq( candidate.type, Types[6] ) )
        ) { 
          replace = true;
          derank = true;
        }

        //------------------------------------------------------------------
        // MEMORIAL or OPT_MEMORIAL that fall on a WEEKDAY
        // outside LENT or the Easter Octave will replace the general WEEKDAY
        //------------------------------------------------------------------
        else if ( 
          _.eq( date.type, _.last( Types ) )
          && !_.eq( date.data.season.key, Season.LENT ) 
          && ( _.eq( candidate.type, Types[5] ) || _.eq( candidate.type, Types[6] ) )
        ) { 
          replace = true;
        }

        //------------------------------------------------------------------
        // A non prioritized FEAST can only replace WEEKDAY \
        // - weekday must not be in the octave of EASTER
        //------------------------------------------------------------------
        else if (
          _.eq( candidate.type, Types[4] ) 
          && _.eq( date.type, _.last( Types ) )
          && !_.eq( date.data.season.key, Season.LENT )
          && !candidate.data.prioritized
        ) {
          replace = true;
        }

        //------------------------------------------------------------------
        // A FEAST occuring in the season of LENT is deranked
        // to a COMMEMORATION
        //------------------------------------------------------------------
        else if (
          _.eq( candidate.type, Types[4] ) 
          && _.eq( date.type, _.last( Types ) )
          && _.eq( date.data.season.key, Season.LENT )
        ) {
          replace = true;
          derank = true;
        }

        //------------------------------------------------------------------
        // A prioritized FEAST can replace a SUNDAY or WEEKDAY
        // When a Feast of the Lord falls on a SUNDAY it replaces the SUNDAY in Ordinary Time.
        // - weekday must not be in the octave of EASTER
        //------------------------------------------------------------------
        else if (
          _.eq( candidate.type, Types[4] ) 
          && ( _.eq( date.type, _.last( Types ) ) || _.eq( date.type, Types[1] ) )
          && !_.eq( date.data.season.key, Season.LENT )
          && candidate.data.prioritized
        ) {
          replace = true;
        }

        //------------------------------------------------------------------
        // A Sunday can only replace a Sunday
        //------------------------------------------------------------------
        else if ( 
          _.eq( date.type, Types[1] ) 
          && _.eq( candidate.type, Types[1] ) 
        ) {
          replace = true;
        }

        //------------------------------------------------------------------
        // A weekday can only replace a weekday
        // Sundays in Ordinary Time and Chrismastide take precedence over all other celebrations
        // except for SOLEMNITIES and certain FEASTS
        //------------------------------------------------------------------
        else if ( 
          _.eq( date.type, _.last( Types ) ) 
          && _.eq( candidate.type, _.last( Types ) ) 
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
        date.type = ( derank ? Types[7] : candidate.type );
        date.data = _.merge({}, date.data, candidate.data );
      }
    }

    return date;

  });
  
  return dates;
};

//================================================================================================
// Include metadata about the dates in a season of the liturgical year
//================================================================================================
// arguments[0]: year
// arguments[1]: dates
var _metadata = function() {

  // Formula to calculate lectionary cycle (Year A, B, C)
  var firstSundayOfAdvent = Dates.firstSundayOfAdvent( arguments[0] ),
      thisCycle = ( arguments[0] - 1963 ) % 3,
      nextCycle = ( _.eq( thisCycle,  2 ) ? 0 : thisCycle + 1 );
  
  _.map( arguments[1], function( v ) { 

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

  return arguments[1];
};

//================================================================================================
// METHODS GENERATE THE ROMAN CALENDAR ACCORDING TO CALENDAR
// YEAR OR LITURGICAL YEAR
//================================================================================================

// Returns an object containing dates for the 
// days that occur during the calendar year
// arguments[0]: config (an object literal with the following options)
// [0] year: The year to calculate the liturgical date ranges
// [1] christmastideEnds: t|o|e (The mode to calculate the end of Christmastide. Defaukts to 'o')
// [2] epiphanyOnJan6: true|false|undefined (If true, Epiphany will be fixed to Jan 6)
// [3] corpusChristiOnThursday: true|false|undefined (If true, Corpus Christi is set to Thursday)
// [4] ascensionOnSunday: true|false|undefined (If true, Ascension is moved to the 7th Sunday of Easter)
// [6] country: Get national calendar dates for the given country (defaults to unitedStates)
// [7] type: calendar|liturgical (return dates in either standard calendar or liturgical calendar format)
var _calendarYear = function() {

  var c = arguments[0];

  // Get the liturgical seasons that run through the year
  var dates = _.union(
    Seasons.christmastide( c.year - 1, c.christmastideEnds, c.epiphanyOnJan6 ),
    Seasons.earlyOrdinaryTime( c.year, c.christmastideEnds, c.epiphanyOnJan6 ),
    Seasons.lent( c.year ),
    Seasons.eastertide( c.year ),
    Seasons.laterOrdinaryTime( c.year ),
    Seasons.advent( c.year ),
    Seasons.christmastide( c.year, c.christmastideEnds, c.epiphanyOnJan6 )
  );

  // Merge liturgical calendar dates with those from the general & national calendars
  dates = _applyDates( c, dates );

  // Filter dates within the given year only
  dates = _.filter( dates, function( d ) {
    return _.eq( d.moment.year(), c.year );
  });

  dates = _metadata( c.year, dates );

  return dates;
};

// Returns an object containing dates for the 
// days that occur during the liturgical year
// arguments[0]: config (an object literal with the following options)
// [0] year: The year to calculate the liturgical date ranges
// [1] christmastideEnds: t|o|e (The mode to calculate the end of Christmastide. Defaukts to 'o')
// [2] epiphanyOnJan6: true|false|undefined (If true, Epiphany will be fixed to Jan 6)
// [3] corpusChristiOnThursday: true|false|undefined (If true, Corpus Christi is set to Thursday)
// [4] ascensionOnSunday: true|false|undefined (If true, Ascension is moved to the 7th Sunday of Easter)
// [6] country: Get national calendar dates for the given country (defaults to unitedStates)
// [7] type: calendar|liturgical (return dates in either standard calendar or liturgical calendar format)
var _liturgicalYear = function() {

  var c = arguments[0];

  // Get dates for current year
  var thisYear = _calendarYear( c ),
      start = Dates.firstSundayOfAdvent( c.year );

  // Get dates for the following year
  c.year = c.year + 1;
  var nextYear = _calendarYear( c ),
      end = Dates.firstSundayOfAdvent( c.year ); // Last day of liturgical year must be before this date

  var dates = _.union(
    _.filter( thisYear, function( v ) {
      return v.moment.isSame( start ) || v.moment.isAfter( start );
    }),
    _.filter( nextYear, function( v ) {
      return v.moment.isBefore( end )
    })
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
// arguments[0]: config - calendar settings
//               if the config object has a query, it will be used to filter the
//               date results returned
// 
// arguments[1]: undefined|true|false - skip converting moment objects to ISO8601 timestamp 
//               default action converts moment objects to ISO Strings
// 
var _calendarFor = function() {

  if ( !arguments.length ) {
    arguments = [];
    arguments[0] = false;
  }
  // If arguments length is 1 and arguments[0] is boolean
  else if ( arguments.length === 1  && _.isBoolean( arguments[0] ) ) {
    arguments[1] = arguments[0];
    arguments[0] = {};
  }
  else {}

  // Sanitize incoming config
  var config = _getConfig.apply( this, arguments );

  // Set the locale information
  Utils.setLocale( config.locale );

  // Get dates based on options
  var dates = _.eq( config.type, 'liturgical') ? _liturgicalYear( config ) : _calendarYear( config );

  //==========================================================================
  // Check if there is a query defined, if none return the unfiltered 
  // liturgical calendar dates array
  //==========================================================================
  var query = config.query;
  if ( !_.isNull( query ) && !_.isEmpty( query ) ) {
    // Months are zero indexed, so January is month 0.
    if ( _.has( query, 'month' ) ) {
      var month = _.get( query, 'month' );
      dates = _.filter( dates, function( d ) {
        return _.eq( d.moment.month(), month );
      });
    }

    if ( _.has( query, 'day' ) ) {
      var day = _.get( query, 'day' );
      dates = _.filter( dates, function( d ) {
        return _.eq( d.moment.day(), day );
      });
    }

    if ( _.has( query, 'group' ) ) {
      switch( _.get( query, 'group' ) ) {
        case 'days':
          dates = _.groupBy( dates, function( d ) {
            return d.moment.day();
          });
          break;
        case 'months':
          dates = _.groupBy( dates, function( d ) {
            return d.moment.month();
          });
          break;
        case 'daysByMonth':
          dates = _.chain( dates )
            .groupBy( function( d ) {
              return d.moment.month();
            })
            .mapValues( function( v ) {
              v = _.groupBy( v, function( d ) {
                return d.moment.day();
              });
              return v;
            }).value();
          break;
        case 'weeksByMonth':
          dates = _.chain( dates )
            .groupBy( function( d ) {
              return d.moment.month();
            })
            .map( function( v ) {
              v = _.groupBy( v, function( d ) {
                return d.data.calendar.week;
              });
              return v;
            }).value();
          break;
        case 'cycles':
          dates = _.groupBy( dates, function( d ) {
            return d.data.meta.cycle.value;
          });
          break;
        case 'types':
          dates = _.groupBy( dates, function( d ) {
            return d.type;
          });
          break;
        case 'liturgicalSeasons':
          dates = _.groupBy( dates, function( d ) {
            return d.data.season.key;
          });
          break;
        case 'liturgicalColors':
          dates = _.groupBy( dates, function( d ) {
            return d.data.meta.liturgicalColor.key;
          });
          break;
        case 'psalterWeek':
          dates = _.groupBy( dates, function( d ) {
            return d.data.meta.psalterWeek.key;
          });
          break;
        default:
          break;
      }
    }

    if ( _.has( query, 'title' ) ) {
      dates = _.filter( dates, function( d ) {
        return _.includes( d.data.meta.titles, Titles[ _.get( query, 'title' ) ] );
      });
    }
  }

  // If undefined and not true, continue with conversion
  if ( _.isUndefined( arguments[1] ) && !arguments[1] ) {

    if ( _.has( query, 'group') ) {
      if ( _.eq( _.get( query, 'group' ), 'daysByMonth' ) || _.eq( _.get( query, 'group' ), 'weeksByMonth' ) ) {
        _.each( dates, function( months ) {
          _.each( months, function( days ) {
            _.map( days, function( date ) {
              date.moment = date.moment.toISOString(); // 2013-02-04T22:44:30.652Z
              return date;
            });
          });
        });
      }
      else {
        _.each( dates, function( group ) {
          _.map( group, function( date ) {
            date.moment = date.moment.toISOString(); // 2013-02-04T22:44:30.652Z
            return date;
          });
        });
      }
    }
    else {
      _.map( dates, function( date ) {
        date.moment = date.moment.toISOString(); // 2013-02-04T22:44:30.652Z
        return date;
      });
    }
  }

  return dates;
};

module.exports = {

  calendarFor: _calendarFor,

  countries: function() {
    return _.keys( Calendars );
  },

  titles: function() {
    return Titles;
  },

  seasons: function() {
    return Seasons;  
  },

  getNationalCalendar: _getNationalCalendar

};
