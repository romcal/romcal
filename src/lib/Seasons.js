import moment from 'moment';
import _ from 'lodash';

import * as Dates from './Dates';
import * as Utils from './Utils';

import {
  LiturgicalSeasons,
  PsalterWeeks,
  LiturgicalColors,
  Types
} from '../constants';

//================================================================================================
// METHODS TO GENERATE THE SEASONS
// PRIVATE: Not exposed via module exports
//================================================================================================

// dates: array of moment object dates
const _metadata = dates => {
  return _.map( dates, date => {
    date.source = 'l';
    date.data.calendar = {
      weeks: date.moment.weeksInYear(),
      week: date.moment.week(),
      day: date.moment.dayOfYear()
    };
    return date;
  });
};

// y: The year (integer)
// epiphanyOnJan6: true|false [If true, Epiphany will be fixed to Jan 6] (defaults to false)
const _epiphany = (y, epiphanyOnJan6 = false) => {

  let before = Dates.daysBeforeEpiphany(y, epiphanyOnJan6);
  let after = Dates.daysAfterEpiphany(y, epiphanyOnJan6);
  let days = [];

  _.each( before, day => {
    days.push({
      moment: day,
      type: Types.FERIA,
      name: Utils.localize({
        key: 'epiphany.before',
        day: day.format('dddd')
      }),
      data: {
        season: {
          key: LiturgicalSeasons.CHRISTMASTIDE,
          value: Utils.localize({
            key: 'christmastide.season'
          })
        },
        meta: {
          liturgicalColor: '',
          titles: []
        }
      }
    });
  });

  _.each( after, day => {
    days.push({
      moment: day,
      type: Types.FERIA,
      name: Utils.localize({
        key: 'epiphany.after',
        day: day.format('dddd')
      }),
      data: {
        season: {
          key: LiturgicalSeasons.CHRISTMASTIDE,
          value: Utils.localize({
            key: 'christmastide.season'
          })
        },
        meta: {
          liturgicalColor: '',
          titles: []
        }
      }
    });
  });

  return days;
};

// y: The year (integer)
const _holyWeek = y => {

  let dates = Dates.holyWeek(y);
  let days = [];

  _.each( dates, (date, i) => {
    days.push({
      moment: date,
      type: Types.HOLY_WEEK,
      name: Utils.localize({
        key: 'holyWeek.feria',
        day: date.format('dddd')
      }),
      data: {
        season: {
          key: LiturgicalSeasons.HOLY_WEEK,
          value: Utils.localize({
            key: 'holyWeek.season'
          })
        },
        meta: {
          liturgicalColor: LiturgicalColors.PURPLE,
          titles: []
        }
      }
    });
  });

  return days;
};

//================================================================================================

// y: The year (integer)
const advent = y => {

  let days = [];

  _.each( Dates.daysOfAdvent(y), (value, i) => {
    days.push({
      moment: value,
      type: Utils.getTypeByDayOfWeek( value.day() ),
      name: Utils.localize({
        key: ( _.eq( value.day(), 0 ) ? 'advent.sunday' : 'advent.feria' ),
        day: value.format('dddd'),
        week: Math.floor( i / 7 ) + 1
      }),
      data: {
        season: {
          key: LiturgicalSeasons.ADVENT,
          value: Utils.localize({
            key: 'advent.season'
          })
        },
        meta: {
          // The proper color of the Third Sunday of Advent is rose. Purple may also be used on these Sundays.
          liturgicalColor: ( ( _.eq( Math.floor( i / 7 ), 2 ) && _.eq( value.day(), 0 ) ? LiturgicalColors.ROSE : LiturgicalColors.PURPLE ) ),
          titles: []
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
  let psalterWeek = 0;

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

  return _metadata( days );
};

// y: Takes the year (integer)
// christmastideEnds: t|o|e [The mode to calculate the end of Christmastide]
// epiphanyOnJan6: true|false [If true, Epiphany will be fixed to Jan 6] (defaults to false)
// christmastideIncludesTheSeasonOfEpiphany: true|false [If false, excludes the season of epiphany from being included in the season of Christmas]
const christmastide = (y, christmastideEnds, epiphanyOnJan6 = false, christmastideIncludesTheSeasonOfEpiphany = true) => {

  let days = Dates.christmastide(y, christmastideEnds, epiphanyOnJan6);
  let octave = Dates.octaveOfChristmas(y);
  let epiphany = _epiphany( ( y + 1 ), epiphanyOnJan6 );
  let d = [];
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
          key: LiturgicalSeasons.CHRISTMASTIDE,
          value: Utils.localize({
            key: 'christmastide.season'
          })
        }
      }
    });
  });

  let o = [];

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
          key: LiturgicalSeasons.CHRISTMASTIDE,
          value: Utils.localize({
            key: 'christmastide.season'
          })
        }
      }
    });
  });

  //==============================================================================
  // Override in order: solemnities, feasts, epiphany and octave of christmas
  // to days of christmas
  //==============================================================================

  // only merge the season of epiphany if the flag is true
  if ( christmastideIncludesTheSeasonOfEpiphany === true ) {
    d = _.uniqBy(_.union(epiphany, o, d), item => item.moment.valueOf());
  }
  else {
    d = _.uniqBy(_.union(o, d), item => item.moment.valueOf());
  }

  // Sort dates according to moment
  d = _.sortBy( d, item => item.moment.valueOf());

  //=====================================================================
  // PSALTER WEEKS & LITURGICAL COLORS - CHRISTMAS SEASON
  //---------------------------------------------------------------------
  // If Christmas is on a feria (Monday - Saturday), then the first
  // week of Christmastide will follow the Psalter week of the 4th week
  // of Advent (which is always Psalter Week 4)
  // If Christmas is on a Sunday, the Psalter week will be Week 1
  //
  // The proper color of Christmas is white
  //=====================================================================

  let psalterWeek = 4;
  if ( _.eq( _.head( days ).day(), 0 ) ) {
    psalterWeek = 0;
  }

  _.map( d, v => {

    v.key = _.camelCase( v.name );
    v.data.meta = v.data.meta || {
      titles: []
    };

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

  return _metadata( d );
};

// y: Takes the year (integer)
// christmastideEnds: t|o|e [The mode to calculate the end of Christmastide]
// epiphanyOnJan6: true|false [If true, Epiphany will be fixed to Jan 6] (defaults to false)
const earlyOrdinaryTime = (y, christmastideEnds, epiphanyOnJan6 = false) => {

  let days = [];

  _.each( Dates.daysOfEarlyOrdinaryTime(y, christmastideEnds, epiphanyOnJan6), ( value, i ) => {
    days.push({
      moment: value,
      type: ( _.eq( value.day(), 0 ) ? Types.SUNDAY : Types.FERIA ),
      name: Utils.localize({
        key: ( _.eq( value.day(), 0 ) ? 'ordinaryTime.sunday' : 'ordinaryTime.feria' ),
        day: value.format('dddd'),
        week: ( _.eq( value.day(), 0 ) ?  Math.floor( i / 7 ) + 2 :  Math.floor( i / 7 ) + 1 )
      }),
      data: {
        season: {
          key: LiturgicalSeasons.EARLY_ORDINARY_TIME,
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
  let psalterWeek = 1;

  _.map( days, v => {

    v.key = _.camelCase( v.name );
    v.data.meta = v.data.meta || {
      titles: []
    };

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

  return _metadata( days );
};

// y: year
const laterOrdinaryTime = y => {

  // Keep track of the first week in later ordinary time
  // for later use
  let firstWeekOfLaterOrdinaryTime = 0;
  let days = [];

  _.each( Dates.daysOfLaterOrdinaryTime(y).reverse(), ( value, i ) => {

    // Calculate the week of ordinary time
    // from the last sunday of the year (34th)
    let week = 34 - Math.floor( i / 7 );
    firstWeekOfLaterOrdinaryTime = week;

    days.push({
      moment: value,
      type: ( _.eq( value.day(), 0 ) ? Types.SUNDAY : Types.FERIA ),
      name: Utils.localize({
        key: ( _.eq( value.day(), 0 ) ? 'ordinaryTime.sunday' : 'ordinaryTime.feria' ),
        day: value.format('dddd'),
        week: week
      }),
      data: {
        season: {
          key: LiturgicalSeasons.LATER_ORDINARY_TIME,
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

  let psalterWeek = firstWeekOfLaterOrdinaryTime % 4;
  if ( _.eq( psalterWeek, 0 ) ) {
    psalterWeek = 4;
  }

  _.map( days, v => {

    v.key = _.camelCase( v.name );
    v.data.meta = v.data.meta || {
      titles: []
    };

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

  return _metadata( days );
};

// y: Takes the year (integer)
const lent = y => {

  let daysOfLent = Dates.daysOfLent(y);
  let sundaysOfLent = Dates.sundaysOfLent(y);

  let days = [];
  let sundays = [];

  _.each( daysOfLent, (value, i) => {
    days.push({
      moment: value,
      type: Types.FERIA,
      name: Utils.localize({
        key: ( _.gt( i, 0 ) && _.lt( i, 4 ) ) ?  'lent.day_after_ash_wed' : 'lent.feria',
        day: value.format('dddd'),
        week: Math.floor( (i - 4) / 7 ) + 1
      }),
      data: {
        season: {
          key: LiturgicalSeasons.LENT,
          value: Utils.localize({
            key: 'lent.season'
          })
        }
      }
    });
  });

  _.each( sundaysOfLent, ( value, i ) => {
    sundays.push({
      moment: value,
      type: Types.SUNDAY,
      name: Utils.localize({
        key: 'lent.sunday',
        day: value.format('dddd'),
        week: ( i + 1 )
      }),
      data: {
        season: {
          key: LiturgicalSeasons.LENT,
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

  let holyWeek = _holyWeek(y);

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
  let psalterWeek = 4;

  _.map( days, v => {

    v.key = _.camelCase( v.name );
    v.data.meta = v.data.meta || {
      titles: []
    };

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

// Takes the last 3 days of holy week which form the 3 days of Easter Triduum
// y: Takes the year (integer)
const easterTriduum = y => _.takeRight(_holyWeek(y), 3 );

// Takes the days between Easter Sunday and Divine mercy sunday (inclusive) to form the easter octave
// y: Takes the year (integer)
const easterOctave = y => _.take(eastertide(y), 8 );

// y: Takes the year (integer)
const eastertide = y => {

  let d = Dates.daysOfEaster(y);
  let s = Dates.sundaysOfEaster(y);
  let days = [];

  _.each( d, (value, i) => {
    days.push({
      moment: value,
      type: ( _.gt( i, 0 ) && _.lt( i, 7 ) ) ? Types.SOLEMNITY : Types.FERIA,
      name: Utils.localize({
        key: ( _.gt( i, 0 ) && _.lt( i, 7 ) ) ?  'eastertide.octave' : 'eastertide.feria',
        day: value.format('dddd'),
        week: Math.floor( i / 7 ) + 1
      }),
      data: {
        prioritized: true,
        season: {
          key: LiturgicalSeasons.EASTER,
          value: Utils.localize({
            key: 'eastertide.season'
          })
        }
      }
    });
  });

  let sundays = [];

  _.each( s, ( value, i ) => {
    sundays.push({
      moment: value,
      type: Types.SUNDAY,
      name: Utils.localize({
        key: 'eastertide.sunday',
        day: value.format('dddd'),
        week: ( i + 1 )
      }),
      data: {
        season: {
          key: LiturgicalSeasons.EASTER,
          value: Utils.localize({
            key: 'eastertide.season'
          })
        }
      }
    });
  });

  // Insert Solemnities and Sundays of Lent to days of Easter
  days = _.uniqBy( _.union( sundays, days ), v => v.moment.valueOf());

  // Sort dates according to moment
  days = _.sortBy( days, v => v.moment.valueOf());

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

  let psalterWeek = 2;

  _.map( days, ( v, k ) => {

    v.key = _.camelCase( v.name );
    v.data.meta = {
      titles: []
    };

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
