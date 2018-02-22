import Path from 'path';
import moment from 'moment';
import recur from 'moment-recur';
import range from 'moment-range';
import _ from 'lodash';

import Dates from './Dates';
import Utils from './Utils';
import { Seasons, PsalterWeeks, LiturgicalColors, Types } from '../constants';

//================================================================================================
// METHODS TO GENERATE THE SEASONS
// PRIVATE: Not exposed via module exports
//================================================================================================

let days;
let d;
let o;
let s;
let psalterWeek;
let sundays;

// arguments[0]: array of dates
const _metadata = () => {
  return _.map( arguments[0], date => {
    date.source = 'l';
    date.data.calendar = {
      weeks: date.moment.weeksInYear(),
      week: date.moment.week(),
      day: date.moment.dayOfYear()
    };
    return date;
  });
};

// arguments[0]: Takes the year (integer)
// arguments[1]: true|false [If true, Epiphany will be fixed to Jan 6]
const _epiphany = () => {

  let before = Dates.daysBeforeEpiphany.apply( this, arguments );
  let after = Dates.daysAfterEpiphany.apply( this, arguments );

  days = [];

  _.each( before, day => {
    days.push({
      moment: day,
      type: _.last( Types ),
      name: Utils.localize({
        key: 'epiphany.before',
        day: day.format('dddd')
      }),
      data: {
        season: {
          key: Seasons.CHRISTMASTIDE,
          value: Utils.localize({
            key: 'christmastide.season'
          })
        }
      }
    });
  });

  _.each( after, day => {
    days.push({
      moment: day,
      type: _.last( Types ),
      name: Utils.localize({
        key: 'epiphany.after',
        day: day.format('dddd')
      }),
      data: {
        season: {
          key: Seasons.CHRISTMASTIDE,
          value: Utils.localize({
            key: 'christmastide.season'
          })
        }
      }
    });
  });

  return days;
};

// arguments[0]: Takes the year (integer)
const _holyWeek = () => {

  d = Dates.holyWeek.apply( this, arguments );
  days = [];

  _.each( d, function( value, i ) {
    days.push({
      moment: value,
      type: Types[3],
      name: Utils.localize({
        key: 'holyWeek.weekday',
        day: value.format('dddd')
      }),
      data: {
        season: {
          key: Seasons.HOLY_WEEK,
          value: Utils.localize({
            key: 'holyWeek.season'
          })
        },
        meta: {
          liturgicalColor: LiturgicalColors.PURPLE
        }
      }
    });
  });

  return days;
};

//================================================================================================

// arguments[0]: Takes the year (integer)
const advent = () => {

  days = [];

  _.each( Dates.daysOfAdvent.apply( this, arguments ), ( value, i  ) => {
    days.push({
      moment: value,
      type: Utils.getTypeByDayOfWeek( value.day() ),
      name: Utils.localize({
        key: ( _.eq( value.day(), 0 ) ? 'advent.sunday' : 'advent.weekday' ),
        day: value.format('dddd'),
        week: Math.floor( i / 7 ) + 1
      }),
      data: {
        season: {
          key: Seasons.ADVENT,
          value: Utils.localize({
            key: 'advent.season'
          })
        },
        meta: {
          // The proper color of the Third Sunday of Advent is rose. Purple may also be used on these Sundays.
          liturgicalColor: ( ( _.eq( Math.floor( i / 7 ), 2 ) && _.eq( value.day(), 0 ) ? LiturgicalColors.ROSE : LiturgicalColors.PURPLE ) )
        }
      }
    });
  });

  // Sort dates according to moment
  days = _.sortBy( days, item => item.moment.valueOf() );

  //=====================================================================
  // PSALTER WEEKS & LITURGICAL COLORS - ADVENT
  //---------------------------------------------------------------------
  // The First Sunday of Advent always begins Week 1 of the Psalter,
  // regardless of which week was previously observed (because the First
  // Sunday of Advent is the first day of the liturgical year, the 4-Week
  // cycle of the Psalter is “reset” to Week 1 on it).
  // For example, as it works out on the liturgical calendar, the last
  // week of Ordinary Time (i.e., the Solemnity of Christ the King, which
  // is the last Sunday of Ordinary Time, and the following Monday through
  // Saturday afternoon) uses Week 2 of the Psalter. Nevertheless, when
  // the First Sunday of Advent arrives, one does not start using Week 3,
  // but rather Week 1 of the Psalter.
  //
  // The proper color of the Advent is purple.
  //=====================================================================

  // Initialize the psalter week counter
  psalterWeek = 0;

  _.map( days, ( v, k ) => {

    v.key = _.camelCase( v.name );
    v.data.meta = v.data.meta || {};

    if ( _.eq( k % 7, 0 ) ) {
      psalterWeek++;
      if ( _.gt( psalterWeek, 4 ) ) {
        psalterWeek = 1;
      }
    }

    // Psalter week
    v.data.meta.psalterWeek = {
      key: psalterWeek,
      value: PsalterWeeks[ psalterWeek ]
    };

    // Set default season color if there is no color already set
    v.data.meta.liturgicalColor = v.data.meta.liturgicalColor || LiturgicalColors.PURPLE;

    return v;
  });

  days = _metadata( days );

  // _.each( days, function( v ) {
  //   console.log(
  //     v.moment.format('ddd, DD MMM YY'),
  //     '|', _.padRight( v.data.meta.liturgicalColor.key, 6 ),
  //     '|', _.padRight( v.data.season.value, 9 ),
  //     '|', _.padRight( v.data.meta.psalterWeek.value, 8 ),
  //     '|', _.padRight( v.type, 13 ),
  //     '|', v.name
  //   );
  // });

  return days;
};

// arguments[0]: Takes the year (integer)
// arguments[1]: t|o|e [The mode to calculate the end of Christmastide]
// arguments[2]: true|false [If true, Epiphany will be fixed to Jan 6]
const christmastide = () => {

  days = Dates.christmastide.apply( this, arguments );

  let octave = Dates.octaveOfChristmas( arguments[0] );
  let epiphany = _epiphany( ( arguments[0] + 1 ), arguments[2] );

  d = [];
  let count = 0;

  _.each( days, day => {
    let dayOfWeek = day.day();
    if ( _.eq( dayOfWeek, 0 ) ) {
      count++;
    }
    d.push({
      moment: day,
      type: Utils.getTypeByDayOfWeek( dayOfWeek ),
      name: Utils.localize({
        key: ( _.eq( dayOfWeek, 0 ) ? 'christmastide.sunday' : 'christmastide.day' ),
        day: day.format('dddd'),
        count: count
      }),
      data: {
        season: {
          key: Seasons.CHRISTMASTIDE,
          value: Utils.localize({
            key: 'christmastide.season'
          })
        }
      }
    });
  });

  o = [];

  _.each( octave, ( day, idx ) => {
    o.push({
      moment: day,
      type: Utils.getTypeByDayOfWeek( day.day() ),
      name: Utils.localize({
        key: 'christmastide.octave',
        count: idx + 1
      }),
      data: {
        season: {
          key: Seasons.CHRISTMASTIDE,
          value: Utils.localize({
            key: 'christmastide.season'
          })
        }
      }
    });
  });

  // Override in order: solemnities, feasts, epiphany and octave of christmas
  // to days of christmas
  d = _.uniqBy( _.union( epiphany, o, d ), item => item.moment.valueOf());

  // Sort dates according to moment
  d = _.sortBy( d, item => item.moment.valueOf());

  //=====================================================================
  // PSALTER WEEKS & LITURGICAL COLORS - CHRISTMAS SEASON
  //---------------------------------------------------------------------
  // If Christmas is on a weekday (Monday - Saturday), then the first
  // week of Christmastide will follow the Psalter week of the 4th week
  // of Advent (which is always Psalter Week 4)
  // If Christmas is on a Sunday, the Psalter week will be Week 1
  //
  // The proper color of Christmas is white
  //=====================================================================

  psalterWeek = 4;
  if ( _.eq( _.head( days ).day(), 0 ) ) {
    psalterWeek = 0;
  }

  _.map( d, v => {

    v.key = _.camelCase( v.name );
    v.data.meta = v.data.meta || {};

    if ( _.eq( v.moment.day() % 7, 0 ) ) {
      psalterWeek++;
      if ( _.gt( psalterWeek, 4 ) ) {
        psalterWeek = 1;
      }
    }

    v.data.meta.psalterWeek = {
      key: psalterWeek,
      value: PsalterWeeks[ psalterWeek ]
    };

    // Set default season color if there is no color already set
    v.data.meta.liturgicalColor = v.data.meta.liturgicalColor || LiturgicalColors.WHITE;

    return v;
  });

  d = _metadata( d );

  // _.each( days, function( v ) {
  //   console.log(
  //     v.moment.format('ddd, DD MMM YY'),
  //     '|', _.padRight( v.data.meta.liturgicalColor.key, 6 ),
  //     '|', _.padRight( v.data.season.value, 9 ),
  //     '|', _.padRight( v.data.meta.psalterWeek.value, 8 ),
  //     '|', _.padRight( v.type, 13 ),
  //     '|', v.name
  //   );
  // });

  return d;
};

// arguments[0]: Takes the year (integer)
// arguments[1]: t|o|e [The mode to calculate the end of Christmastide]
// arguments[2]: true|false [If true, Epiphany will be fixed to Jan 6]
const earlyOrdinaryTime = () => {

  days = [];

  _.each( Dates.daysOfEarlyOrdinaryTime.apply( this, arguments ), ( value, i ) => {
    days.push({
      moment: value,
      type: ( _.eq( value.day(), 0 ) ? Types[1] : _.last( Types ) ),
      name: Utils.localize({
        key: ( _.eq( value.day(), 0 ) ? 'ordinaryTime.sunday' : 'ordinaryTime.weekday' ),
        day: value.format('dddd'),
        week: ( _.eq( value.day(), 0 ) ?  Math.floor( i / 7 ) + 2 :  Math.floor( i / 7 ) + 1 )
      }),
      data: {
        season: {
          key: Seasons.EARLY_ORDINARY_TIME,
          value: Utils.localize({
            key: 'ordinaryTime.season'
          })
        }
      }
    });
  });

  // Sort dates according to moment
  days = _.sortBy( days, v => v.moment.valueOf() );

  //=====================================================================
  // PSALTER WEEKS & LITURGICAL COLORS - EARLY ORDINARY TIME
  //---------------------------------------------------------------------
  // The first week of Ordinary Time begins with the Monday following
  // the Feast of the Baptism of the Lord (which is the last Sunday of
  // the Christmas Season). Consequently, one starts using Week-1 of the
  // Psalter for that week. The Sunday that follows the first week of
  // Ordinary Time is the Second Sunday of Ordinary Time, so, technically
  // speaking, there is no Sunday that is called the First Sunday of
  // Ordinary Time. This makes sense if you consider the fact that
  // Ordinary Time begins on a Monday, and by the time Sunday rolls
  // around the first week of Ordinary Time has already been completed.
  // In light of all this, although the Feast of the Baptism of the Lord
  // is the last Sunday of the Christmas Season, simply for the purposes
  // of counting Sundays it is counted as the first Sunday of Ordinary Time.
  //
  // The proper color of ordinary time is green
  //=====================================================================
  psalterWeek = 1;

  _.map( days, v => {

    v.key = _.camelCase( v.name );
    v.data.meta = v.data.meta || {};

    if ( _.eq( v.moment.day() % 7, 0 ) ) {
      psalterWeek++;
      if ( _.gt( psalterWeek, 4 ) ) {
        psalterWeek = 1;
      }
    }

    v.data.meta.psalterWeek = {
      key: psalterWeek,
      value: PsalterWeeks[ psalterWeek ]
    };

    // Set default season color if there is no color alreayd set
    v.data.meta.liturgicalColor = v.data.meta.liturgicalColor || LiturgicalColors.GREEN;

    return v;
  });

  days = _metadata( days );

  // _.each( days, function( v ) {
  //   console.log(
  //     v.moment.format('ddd, DD MMM YY'),
  //     '|', _.padRight( v.data.meta.liturgicalColor.key, 6 ),
  //     '|', _.padRight( v.data.season.value, 9 ),
  //     '|', _.padRight( v.data.meta.psalterWeek.value, 8 ),
  //     '|', _.padRight( v.type, 13 ),
  //     '|', v.name
  //   );
  // });

  return days;
};

// arguments[0]: year
const laterOrdinaryTime = () => {

  // Keep track of the first week in later ordinary time
  // for later use
  let firstWeekOfLaterOrdinaryTime = 0;

  days = [];

  _.each( Dates.daysOfLaterOrdinaryTime.apply( this, arguments ).reverse(), ( value, i ) => {

    // Calculate the week of ordinary time
    // from the last sunday of the year (34th)
    let week = 34 - Math.floor( i / 7 );
    firstWeekOfLaterOrdinaryTime = week;

    days.push({
      moment: value,
      type: ( _.eq( value.day(), 0 ) ? Types[1] : _.last( Types ) ),
      name: Utils.localize({
        key: ( _.eq( value.day(), 0 ) ? 'ordinaryTime.sunday' : 'ordinaryTime.weekday' ),
        day: value.format('dddd'),
        week: week
      }),
      data: {
        season: {
          key: Seasons.LATER_ORDINARY_TIME,
          value: Utils.localize({
            key: 'ordinaryTime.season'
          })
        }
      }
    });
  });

  // Sort dates according to moment
  days = _.sortBy( days, v => v.moment.valueOf());

  //=====================================================================
  // PSALTER WEEKS & LITURGICAL- LATER ORDINARY TIME
  //---------------------------------------------------------------------
  // The second phase of Ordinary Time begins on the Monday that immediately
  // follows Pentecost Sunday (i.e., the last Sunday of the Season of Easter).
  // Note that, because the date of Easter changes from year to year, the
  // specific range of dates for the two phases in Ordinary Time likewise
  // change from year to year. In any event, the Monday of Ordinary Time
  // which immediately follows Pentecost Sunday does not “reset” to Week
  // 1 of the Psalter. Rather, it will simply be the week of the Psalter
  // corresponding to the Sunday to which the Monday belongs.
  //
  // The proper color of Ordinary Time is green.
  //=====================================================================

  psalterWeek = firstWeekOfLaterOrdinaryTime % 4;
  if ( _.eq( psalterWeek, 0 ) ) {
    psalterWeek = 4;
  }

  _.map( days, function( v ) {

    v.key = _.camelCase( v.name );
    v.data.meta = v.data.meta || {};

    if ( _.eq( v.moment.day() % 7, 0 ) ) {
      psalterWeek++;
      if ( _.gt( psalterWeek, 4 ) ) {
        psalterWeek = 1;
      }
    }

    v.data.meta.psalterWeek = {
      key: psalterWeek,
      value: PsalterWeeks[ psalterWeek ]
    };

    // Set default season color if there is no color already set
    if ( _.isUndefined( v.data.meta.liturgicalColor ) ) {
      v.data.meta.liturgicalColor = LiturgicalColors.GREEN;
    }

    return v;
  });

  days = _metadata( days );

  // _.each( days, function( v ) {
  //   console.log(
  //     v.moment.format('ddd, DD MMM YY'),
  //     '|', _.padRight( v.data.meta.liturgicalColor.key, 6 ),
  //     '|', _.padRight( v.data.season.value, 9 ),
  //     '|', _.padRight( v.data.meta.psalterWeek.value, 8 ),
  //     '|', _.padRight( v.type, 13 ),
  //     '|', v.name
  //   );
  // });

  return days;
};

// arguments[0]: Takes the year (integer)
const lent = () => {

  d = Dates.daysOfLent.apply( this, arguments ),
  s = Dates.sundaysOfLent.apply( this, arguments );

  days = [];

  _.each( d, (value, i) => {
    days.push({
      moment: value,
      type: _.last( Types ),
      name: Utils.localize({
        key: ( _.gt( i, 0 ) && _.lt( i, 4 ) ) ?  'lent.day_after_ash_wed' : 'lent.weekday',
        day: value.format('dddd'),
        week: Math.floor( (i - 4) / 7 ) + 1
      }),
      data: {
        season: {
          key: Seasons.LENT,
          value: Utils.localize({
            key: 'lent.season'
          })
        }
      }
    });
  });

  sundays = [];

  _.each( s, ( value, i ) => {
    sundays.push({
      moment: value,
      type: Types[1],
      name: Utils.localize({
        key: 'lent.sunday',
        day: value.format('dddd'),
        week: ( i + 1 )
      }),
      data: {
        season: {
          key: Seasons.LENT,
          value: Utils.localize({
            key: 'lent.season'
          })
        },
        meta: {
          // The proper color of the the Fourth Sunday of Lent is rose. Purple may also be used on these Sundays.
          liturgicalColor: ( _.eq( i, 3 ) ? LiturgicalColors.ROSE : LiturgicalColors.PURPLE )
        }
      }
    });
  });

  let holyWeek = _holyWeek.apply( this, arguments );

  // Override in order: Solemnities, Holy Week and Sundays of Lent to days of Lent
  days = _.uniqBy( _.union( holyWeek, sundays, days ), v => v.moment.valueOf());

  // Sort dates according to moment
  days = _.sortBy( days, v => v.moment.valueOf() );

  //=====================================================================
  // PSALTER WEEKS & LITURGICAL COLORS - LENT & HOLY WEEK
  //---------------------------------------------------------------------
  // Lent begins on Ash Wednesday and therefore in the middle of a week
  // rather than on a Sunday. Regardless of which week of the Psalter is
  // being observed on the Sunday through Tuesday immediately preceding
  // Ash Wednesday, Ash Wednesday (and the Thursday through Saturday
  // afternoon following it) are designated as Week 4 of the Psalter.
  //
  // The proper color of the Lent is purple.
  //=====================================================================
  psalterWeek = 4;

  _.map( days, v => {

    v.key = _.camelCase( v.name );
    v.data.meta = v.data.meta || {};

    if ( _.eq( v.moment.day() % 7, 0 ) ) {
      psalterWeek++;
      if ( _.gt( psalterWeek, 4 ) ) {
        psalterWeek = 1;
      }
    }

    v.data.meta.psalterWeek = {
      key: psalterWeek,
      value: PsalterWeeks[ psalterWeek ]
    };

    // Set default season color if there is no color already set
    v.data.meta.liturgicalColor = v.data.meta.liturgicalColor || LiturgicalColors.PURPLE;

    return v;
  });

  days = _metadata( days );

  // _.each( days, function( v ) {
  //   console.log(
  //     v.moment.format('ddd, DD MMM YY'),
  //     '|', _.padRight( v.data.meta.liturgicalColor.key, 6 ),
  //     '|', _.padRight( v.data.season.value, 9 ),
  //     '|', _.padRight( v.data.meta.psalterWeek.value, 8 ),
  //     '|', _.padRight( v.type, 13 ),
  //     '|', _.padRight( v.data.calendar.week, 2 ),
  //     '|', _.padRight( v.data.calendar.day, 3 ),
  //     '|', v.name
  //   );
  // });

  return days;
};

// arguments[0]: Takes the year (integer)
const easterTriduum = () => {

  d = _holyWeek.apply( this, arguments );
  days = _.takeRight( d, 3 );

  // _.each( days, function( item ) {
  //   console.log(  item.moment.format('ddd, DD/MM/YYYY'), item.data.season.key, item.type, item.name );
  // });

  return days;
};

// arguments[0]: Takes the year (integer)
const easterOctave = () => {

  d = eastertide.apply( this, arguments );
  days = _.take( d, 8 );

  // _.each( days, function( item ) {
  //   console.log(  item.moment.format('ddd, DD/MM/YYYY'), item.data.season.key, item.type, item.name );
  // });

  return days;
};

// arguments[0]: Takes the year (integer)
const eastertide = () => {

  d = Dates.daysOfEaster( arguments[0] );
  s = Dates.sundaysOfEaster( arguments[0] );

  days = [];

  _.each( d, (value, i) => {
    days.push({
      moment: value,
      type: ( _.gt( i, 0 ) && _.lt( i, 7 ) ) ? _.head( Types ): _.last( Types ),
      name: Utils.localize({
        key: ( _.gt( i, 0 ) && _.lt( i, 7 ) ) ?  'eastertide.octave' : 'eastertide.weekday',
        day: value.format('dddd'),
        week: Math.floor( i / 7 ) + 1
      }),
      data: {
        prioritized: true,
        season: {
          key: Seasons.EASTER,
          value: Utils.localize({
            key: 'eastertide.season'
          })
        }
      }
    });
  });

  sundays = [];

  _.each( s, ( value, i ) => {
    sundays.push({
      moment: value,
      type: Types[1],
      name: Utils.localize({
        key: 'eastertide.sunday',
        day: value.format('dddd'),
        week: ( i + 1 )
      }),
      data: {
        season: {
          key: Seasons.EASTER,
          value: Utils.localize({
            key: 'eastertide.season'
          })
        }
      }
    });
  });

  // Insert Solemnities and Sundays of Lent to days of Easter
  days = _.uniqBy( _.union( sundays, days ), function( v ) {
    return v.moment.valueOf();
  });

  // Sort dates according to moment
  days = _.sortBy( days, function( v ) {
    return v.moment.valueOf();
  });

  //=====================================================================
  // PSALTER WEEKS & LITURGICAL COLOR - EASTER
  //---------------------------------------------------------------------
  // The first eight days of the Easter Season make up the octave of Easter
  // and are celebrated as Solemnities of the Lord.
  // During this time, Easter Octave readings are used in favour of the
  // standard psalter readings.
  // The psalter is resumed at week 2 on the Monday following Divine
  // Mercy Sunday
  //
  // The proper color of Easter is white
  //=====================================================================

  psalterWeek = 2;

  _.map( days, ( v, k ) => {

    v.key = _.camelCase( v.name );
    v.data.meta = {};

    if ( _.lt( k, 8 ) ) {
      v.data.meta.psalterWeek = {
        key: 5,
        value: PsalterWeeks[ 5 ]
      };
    }
    else {
      if ( _.eq( v.moment.day() % 7, 0 ) ) {
        psalterWeek++;
        if ( _.gt( psalterWeek, 4 ) ) {
          psalterWeek = 1;
        }
      }
      v.data.meta.psalterWeek = {
        key: psalterWeek,
        value: PsalterWeeks[ psalterWeek ]
      };
    }

    // Set default season color if there is no color already set
    v.data.meta.liturgicalColor = v.data.meta.liturgicalColor || LiturgicalColors.WHITE;

    return v;
  });


  days = _metadata( days );

  // _.each( days, function( v ) {
  //   console.log(
  //     v.moment.format('ddd, DD MMM YY'),
  //     '|', _.padRight( v.data.meta.liturgicalColor.key, 6 ),
  //     '|', _.padRight( v.data.season.value, 9 ),
  //     '|', _.padRight( v.data.meta.psalterWeek.value, 8 ),
  //     '|', _.padRight( v.type, 13 ),
  //     '|', v.name
  //   );
  // });

  return days;
};

export {
  advent,
  christmastide,
  earlyOrdinaryTime,
  lent,
  easterTriduum,
  easterOctave,
  eastertide,
  laterOrdinaryTime
};
