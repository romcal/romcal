var moment = require('moment'),
    recur = require('moment-recur'),
    range = require('moment-range'),
    _ = require('lodash');


//==================================================================================
// Epiphany & Christmastide
//==================================================================================

// EPIPHANY RUBRIC
// Standard rule: 
// Epiphany is celebrated on the first Sunday after the first Saturday in January, 
// which means it could fall on any day from January 2 to January 8. 
// Traditional rule: 
// Epiphany is always celebrated on Jan 6 
// arguments[0]: year
// arguments[1]: true|false (activate traditional rule)
var _epiphany = function() {

  // Check if the traditional method should be used for calculating the
  // date of Epiphany
  var traditional = arguments[1] || false;
    
  // Get the first day of the year
  var firstDay = moment.utc({ year: arguments[0], month: 0, day: 1 });

  // Always return Jan 6 as the date of Epiphany according to Traditional rule
  if ( traditional ) {
    return moment.utc({ year: arguments[0], month: 0, day: 6 });
  }
  else {

    // If first day of the year is a Saturday, Mary Mother of God is on that day
    // and Epiphany is on the next day
    if ( _.eq( firstDay.day(), 6 ) ) {
      return firstDay.add( 1, 'days' );
    }
    // If first day of the year is a Sunday, Mary Mother of God is on that Sunday and
    // the Sunday proceeding will be Epiphany
    else if ( _.eq( firstDay.day(), 0 ) ) {
      return firstDay.add( 7, 'days' );
    }
    // If first day of the year is on a weekday (i.e. Monday - Friday),
    // Epiphany will be celebrated on the Sunday proceeding
    else {
      return firstDay.add( 1, 'weeks' ).startOf('week');
    }
  }
};

// Christmas falls on the 25th of December
// arguments[0]: year
var _christmas = function() {
  return moment.utc({ year: arguments[0], month: 11, day: 25 });
};

// The 8 days from Christmas to Mary Mother of God (inclusive)
// arguments[0]: year
var _octaveOfChristmas = function() {
  var start = _christmas.apply( this, arguments ),
      end = _maryMotherOfGod( arguments[0] + 1 ),
      recurrence = moment.utc().recur({ 
        start: start, 
        end: end
      }).every( 1 ).day(),
      dates = recurrence.all();
  return dates;
};

// The Solemnity of Mary, the Holy Mother of God is a 
// feast day of the Blessed Virgin Mary under the aspect 
// of her motherhood of Jesus Christ, whom Christians 
// see as the Lord, Son of God. It is celebrated by 
// the Latin Rite of the Catholic Church on 1 January, 
// the Octave (8th) day of Christmas, and in some 
// countries is a Holy day of obligation..
// arguments[0]: year
var _maryMotherOfGod = function() {
  return moment.utc({ year: arguments[0], month: 0, day: 1 });
};

// The Baptism of the Lord (or the Baptism of Christ) is the feast day 
// commemorating the baptism of Jesus in the Jordan River by John the 
// Baptist. Originally the baptism of Christ was celebrated on Epiphany, 
// which commemorates the coming of the Magi, the baptism of Christ, and 
// the wedding at Cana. Over time in the West, however, the celebration of
// the baptism of the Lord came to be commemorated as a distinct feast from 
// Epiphany. It is celebrated in Anglican and Lutheran Churches on the first 
// Sunday following The Epiphany of Our Lord (6 January).
// arguments[0]: year
// arguments[1]: true|false|undefined [When true, makes Epiphany land on Jan 6 always]
var _baptismOfTheLord = function() {

  var date = _epiphany.apply( this, arguments );

  // If Epiphany is celebrated on Jan. 6
  // the Baptism of the Lord occurs on the Sunday following Jan. 6.
  if ( _.eq( date.dayOfYear(), 6 ) ) {
    return date.add( 1, 'weeks').startOf('week');
  }
  // If Epiphany is not celebrated on Jan. 6 
  else {
    // If Epiphany occurs on Sunday Jan. 7 or Sunday Jan. 8, 
    //  then the Baptism of the Lord is the next day (Monday)
    if ( _.eq( date.day(), 0 ) && ( _.eq( date.dayOfYear(), 7 ) || _.eq( date.dayOfYear(), 8 ) ) ) {
      return date.add( 1, 'days' );
    }
    // If Epiphany occurs before Jan. 6, the Sunday 
    // following Epiphany is the Baptism of the Lord.
    else {
      return date.add( 1, 'weeks').startOf('week');
    }
  }
};

// In the Roman Catholic Church, the Feast of the Presentation of the Lord is 
// a Feast Day occurring between the Feast of the Conversion of St. Paul the 
// Apostle on 25 January and the Feast of the Chair of St. Peter the Apostle on 
// 22 February. In some Western liturgical churches, Vespers (or Compline) on the 
// Feast of the Presentation marks the end of the Epiphany season. 
// arguments[0]: year
var _presentationOfTheLord = function() {
  return moment.utc({ year: arguments[0], month: 1, day: 2 });
};

//==================================================================================
// Ordinary Time
//==================================================================================

// Ordinary Time in the early part of the year begins 
// the day after the Baptism of the Lord and concludes 
// the day before Ash Wednesday.
// arguments[0]: year
// arguments[1]: t|o|e [The mode to calculate the end of Christmastide]
// arguments[2]: true|false [If true, fixes Epiphany to Jan 6]
var _daysOfEarlyOrdinaryTime = function() {
  var start = null,
      end = _ashWednesday.apply( this, arguments );
  if ( _.eq( arguments[1], 't') ) {
    start = _epiphany( arguments[0], arguments[2] );
  }
  else if ( _.eq( arguments[1], 'e') ) {
    start = _presentationOfTheLord( arguments[0] );
  }
  else {
    start = _baptismOfTheLord( arguments[0], arguments[2] );
  }
  var recurrence = moment.utc().recur({ 
        start: start, 
        end: end,
        exceptions: [ start, end ]
      }).every(1).day(),
      dates = recurrence.all();
  return dates;
};

// Ordinary Time in the later part of the year begins the 
// day after Pentecost and concludes the day before the 
// First Sunday of Advent.
// arguments[0]: year
var _daysOfLaterOrdinaryTime = function() {
  var start = _pentecostSunday.apply( this, arguments ),
      end = _firstSundayOfAdvent.apply( this, arguments ),
      recurrence = moment.utc().recur({ 
        start: start, 
        end: end,
        exceptions: [ start, end ]
      }).every(1).day(),
      dates = recurrence.all();
  return dates;
};

// The Solemnity of Christ the King is always the 34th (and last) Sunday of Ordinary Time 
// and is the week before the First Sunday of Advent. The Sundays of Ordinary Time in the 
// latter part of the year are numbered backwards from Christ the King to Pentecost.
// arguments[0]: year
var _christTheKing = function() {
  var date = _firstSundayOfAdvent.apply( this, arguments );
  return date.subtract( 7, 'days').startOf('day');
};

//==================================================================================
// Lent & Holy Week
//==================================================================================

// Lent starts on Ash Wednesday and runs until the 
// day before Holy Thursday
// arguments[0]: year (integer)
var _daysOfLent = function() {
  var start = _ashWednesday.apply( this, arguments ),
      end = _holyThursday.apply( this, arguments ),
      recurrence = moment.utc().recur({ 
        start: start, 
        end: end,
        exceptions: [ end ]
      }).every( 1 ).day(),
      dates = recurrence.all();
  return dates;
};

// Lent begins on Ash Wednesday and concludes 
// the day before Holy Thursday
// arguments[0]: year (integer)
var _sundaysOfLent = function() { 
  var start = _ashWednesday.apply( this, arguments ),
      end = _holyThursday.apply( this, arguments ),
      recurrence = moment.utc().recur({ 
        start: start, 
        end: end,
        exceptions: [ end ]
      }).every( 0 ).daysOfWeek(),
      dates = recurrence.all();
  return dates;
};

// Ash Wednesday, a day of fasting, is the first day of Lent in Western 
// Christianity. It occurs 46 days (40 fasting days, if the 6 Sundays, 
// which are not days of fast, are excluded) before Easter and can fall 
// as early as 4 February or as late as 10 March.
// arguments[0]: year
var _ashWednesday = function() {
  return _easter.apply( this, arguments ).subtract( 46, 'days' ).startOf('day');
};

// Holy Week is the week just before Easter. 
// In the west, it is also the last week of Lent, and includes 
// Palm Sunday, Holy Wednesday, Maundy Thursday (Holy Thursday), 
// Good Friday (Holy Friday), and Holy Saturday. 
// It does not include Easter Sunday
// arguments[0]: year
var _holyWeek = function() {
  var start = _palmSunday.apply( this, arguments ),
      end = _holySaturday.apply( this, arguments ),
      recurrence = moment.utc().recur({ 
        start: start, 
        end: end
      }).every( 1 ).day(),
      dates = recurrence.all();
  return dates;
};

// Palm Sunday is a Christian moveable feast that 
// falls on the Sunday before Easter.
// arguments[0]: year
var _palmSunday = function() {
  return _easter.apply( this, arguments ).subtract( 7, 'days' ).startOf('day');
};

// Maundy Thursday (also known as Holy Thursday) is
// the Christian holy day falling on the Thursday before Easter.
// arguments[0]: year
var _holyThursday = function() {
  return _easter.apply( this, arguments ).subtract( 3, 'days' ).startOf('day');
};

// Good Friday is a Christian religious holiday commemorating the crucifixion of Jesus Christ
// and his death at Calvary. The holiday is observed during Holy Week as part of the 
// Paschal Triduum on the Friday preceding Easter Sunday
// arguments[0]: year
var _goodFriday = function() {
  return _easter.apply( this, arguments ).subtract( 2, 'days' ).startOf('day');
};

// Holy Saturday (Latin: Sabbatum Sanctum) i.e. the Saturday of Holy Week, also known as the 
// Great Sabbath, Black Saturday, or Easter Eve,[1] and called "Joyous Saturday" or "the 
// Saturday of Light" among Coptic Christians, is the day after Good Friday. It is the day 
// before Easter and the last day of Holy Week in which Christians prepare for Easter. 
// It commemorates the day that Jesus Christ's body lay in the tomb and the Harrowing of Hell.
// arguments[0]: year
var _holySaturday = function() {
  return _easter.apply( this, arguments ).subtract( 1, 'days' ).startOf('day');
};

//==================================================================================
// Eastertide
//==================================================================================

// The term Octave of Easter refers to the eight-day period (Octave) 
// from Easter Sunday until the Sunday following Easter, inclusive; 
// arguments[0]: year
var _octaveOfEaster = function() {
  var start = _easter.apply( this, arguments ),
      end = _divineMercySunday.apply( this, arguments ),
      recurrence = moment().recur({ 
        start: start, 
        end: end
      }).every( 1 ).day(),
      dates = recurrence.all();
  return dates;
};

// Eastertide is the period of fifty days from Easter Sunday to Pentecost Sunday.
// arguments[0]: year
var _sundaysOfEaster = function() {
  var start = _easter.apply( this, arguments ),
      end = _pentecostSunday.apply( this, arguments ),
      recurrence = moment.utc().recur({ 
        start: start, 
        end: end
      }).every( 0 ).daysOfWeek(),
      dates = recurrence.all();
  return dates;
};

// Eastertide is the period of fifty days from Easter Sunday to Pentecost Sunday.
// arguments[0]: year
var _daysOfEaster = function() {
  var start = _easter.apply( this, arguments ),
      end = _pentecostSunday.apply( this, arguments ),
      recurrence = moment.utc().recur({ 
        start: start, 
        end: end
      }).every( 1 ).day(),
      dates = recurrence.all();
  return dates;
};

// This algorithm is based on the algorithm of Oudin (1940) and quoted in
// "Explanatory Supplement to the Astronomical Almanac", P. Kenneth
// Seidelmann, editor.
// arguments[0]: year
var _easter = function() {

  var Y = arguments[0] || moment.utc().year(),
      C = Math.floor(Y/100),
      N = Y - 19*Math.floor(Y/19),
      K = Math.floor((C - 17)/25),
      I = C - Math.floor(C/4) - Math.floor((C - K)/3) + 19*N + 15;

  I = I - 30*Math.floor((I/30));
  I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11));

  var J = Y + Math.floor(Y/4) + I + 2 - C + Math.floor(C/4);
  J = J - 7*Math.floor(J/7);

  var L = I - J,
      M = 3 + Math.floor((L + 40)/44),
      D = L + 28 - 31*Math.floor(M/4);
      
  return moment.utc({ year: Y, month: ( M - 1 ), day: D });
};

// Divine Mercy Sunday is celebrated on the Sunday after Easter, the Octave of Easter, 
// observed by Roman Catholic as well as some Anglicans
// arguments[0]: year
var _divineMercySunday = function() {
  return _easter.apply( this, arguments ).add( 7, 'days' ).startOf('day');
};

// The Solemnity of Pentecost occurs 49 days after Easter.
// arguments[0]: year
var _pentecostSunday = function() {
  return _easter.apply( this, arguments ).add( 49, 'days' ).startOf('day');
};

//==================================================================================
// Advent
//==================================================================================

// The start of Advent depends upon the day of the
// week on which Christmas occurs
// arguments[0]: year
var _firstSundayOfAdvent = function() {
  var christmas = _christmas( arguments[0] );
  switch( christmas.day() ) {
    case 0: // Sunday
      return moment.utc({ year: arguments[0], month: 10, day: 27 });
      break;
    case 1: // Monday
      return moment.utc({ year: arguments[0], month: 11, day: 3 });
      break;
    case 2: // Tuesday
      return moment.utc({ year: arguments[0], month: 11, day: 2 });
      break;
    case 3: // Wednesday
      return moment.utc({ year: arguments[0], month: 11, day: 1 });
      break;
    case 4: // Thursday
      return moment.utc({ year: arguments[0], month: 10, day: 30 });
      break;
    case 5: // Friday
      return moment.utc({ year: arguments[0], month: 10, day: 29 });
      break;
    case 6: // Saturday
      return moment.utc({ year: arguments[0], month: 10, day: 28 });
      break;
    default:
      break;
  }
};

// The length of Advent depends upon the day
// of the week on which Christmas occurs
// arguments[0]: year
var _daysOfAdvent = function() {
  var start = _firstSundayOfAdvent.apply( this, arguments ),
      end = _christmas.apply( this, arguments ),
      recurrence = moment.utc().recur({ 
        start: start, 
        end: end,
        exceptions: [ end ]
      }).every( 1 ).day(),
      dates = recurrence.all();
  return dates;
};

// There are always 4 sundays in Advent
// arguments[0]: year
var _sundaysOfAdvent = function() {
  var start = _firstSundayOfAdvent.apply( this, arguments ),
      end = _christmas( arguments[0] ),
      recurrence = moment.utc().recur({ 
        start: start, 
        end: end,
        exceptions: [ end ]
      }).every( 0 ).daysOfWeek(),
      dates = recurrence.all();
  return dates;
};

module.exports = {

  //==================================================================================
  // The Season of Lent
  //==================================================================================

  ashWednesday: _ashWednesday,
  sundaysOfLent: _sundaysOfLent,
  daysOfLent: _daysOfLent,

  //==================================================================================
  // Holy Week
  //==================================================================================

  palmSunday: _palmSunday,
  holyThursday: _holyThursday,
  goodFriday: _goodFriday,
  holySaturday: _holySaturday,
  holyWeek: _holyWeek,

  //==================================================================================
  // Eastertide
  //==================================================================================

  easter: _easter,
  sundaysOfEaster: _sundaysOfEaster,
  daysOfEaster: _daysOfEaster,
  octaveOfEaster: _octaveOfEaster,
  divineMercySunday: _divineMercySunday,
  pentecostSunday: _pentecostSunday,

  //==================================================================================
  // Ordinary Time
  //==================================================================================

  daysOfEarlyOrdinaryTime: _daysOfEarlyOrdinaryTime,
  daysOfLaterOrdinaryTime: _daysOfLaterOrdinaryTime,
  christTheKing: _christTheKing,

  //==================================================================================
  // ADVENT SEASON
  //==================================================================================

  firstSundayOfAdvent: _firstSundayOfAdvent,
  sundaysOfAdvent: _sundaysOfAdvent,
  daysOfAdvent: _daysOfAdvent,

  //==================================================================================
  // Christmastide
  //==================================================================================

  christmas: _christmas,
  octaveOfChristmas: _octaveOfChristmas,

  // In different Churches, the Christmas Season might end on Jan. 6 
  // (the traditional date of the Feast of the Epiphany), or might last 
  // until the Feast of the Baptism of the Lord (usually the Sunday after
  // Epiphany), or might even last all the way to Feb. 2 (the Feast of the 
  // Presentation of the Lord, 40 days after Dec. 25) (Candlemass)
  // arguments[0]: year (integer)
  // arguments[1]: the rule determining when the season of Christmas ends
  //    t = Traditional [Jan 6th, Epiphany]
  //    o = Ordinary Liturgical Calendar of the Western Roman Rite [Baptism of the Lord]
  //    e = Extraordinary Liturgical Calendar of the Western Roman Rite [Presentation of the Lord (Candlemass)]
  //        defaults to 'o'
  // arguments[2]: true|false [If true, Epiphany will be fixed to Jan 6]
  christmastide: function() {

    var start = _christmas( arguments[0] ),
        end = null;

    switch ( arguments[1] ) {
      case 't':
        end = _epiphany( ( arguments[0] + 1 ), arguments[2] );
        break;
      case 'o':
        end = _baptismOfTheLord( ( arguments[0] + 1 ), arguments[2] );
        break;
      case 'e': // Candlemass (40 days)
        end = _presentationOfTheLord( arguments[0] + 1 );
        break;
      default: 
        end = _baptismOfTheLord( ( arguments[0] + 1 ), arguments[2] );
        break;
    }

    var recurrence = moment.recur({ 
          start: start, 
          end: end
        }).every(1).day();

    return recurrence.all();
  },

  //==================================================================================
  // Epiphany
  //==================================================================================
  
  epiphany: _epiphany,

  // arguments[0]: year (integer)
  // arguments[1]: true|false [If true, Epiphany will be fixed to Jan 6]
  daysBeforeEpiphany: function() {
    
    var start = _maryMotherOfGod.apply( this, arguments ),
        end = _epiphany.apply( this, arguments ),
        recurrence = moment.utc().recur({
          start: start,
          end: end,
          exceptions: [ start, end ]
        }).every(1).day(),
        dates = recurrence.all();

    return dates;
  },

  // arguments[0]: year (integer)
  // arguments[1]: true|false [If true, Epiphany will be fixed to Jan 6]
  daysAfterEpiphany: function() {

    var start = _epiphany.apply( this, arguments ),
        end = _baptismOfTheLord.apply( this, arguments ),
        recurrence = moment.utc().recur({
          start: start,
          end: end,
          exceptions: [ start, end ]
        }).every(1).day(),
        dates = recurrence.all();

    return dates;
  },

  //==================================================================================
  // Fixed and movable Solemnities
  //==================================================================================
  
  maryMotherOfGod: _maryMotherOfGod,

  // In the Roman Catholic church, the Feast of St. Joseph (19 March) 
  // is a Solemnity (first class if using the Tridentine calendar), and 
  // is transferred to another date if impeded (i.e., 19 March falling 
  // on Sunday or in Holy Week).
  // arguments[0]: year
  josephHusbandOfMary: function() {

    var date = moment.utc({ year: arguments[0], month: 2, day: 19 });

    // Check to see if this solemnity falls on a Sunday of Lent
    // If it occurs on a Sunday of Lent is transferred to the 
    // following Monday.  
    if ( _.eq( date.day(), 0 ) ) {
      var sundays = _sundaysOfLent.apply( this, arguments );
      _.each( sundays, function( sunday ) {
        if ( date.isSame( sunday ) ) {
          date = sunday.add( 1, 'days' );
        }
      });
    }

    // Check to see if this solemnity falls within Holy Week
    // If Joseph, Husband of Mary (Mar 19) falls on 
    // Palm Sunday or during Holy Week, it is moved to 
    // the Saturday preceding Palm Sunday. 
    var holyWeek = _holyWeek.apply( this, arguments ),
        holyWeekRange = moment.range( _.first( holyWeek ), _.last( holyWeek ) );
    if ( holyWeekRange.contains( date ) ) {
      date = _palmSunday.apply( this, arguments ).subtract( 1, 'days' ).startOf('day');
    }

    return date;
  },

  // arguments[0]: year
  annunciation: function() {

    var date = moment.utc({ year: arguments[0], month: 2, day: 25 });

    // If it occurs on a Sunday of Lent, it is trasferred to the next day (Monday)
    var sundays = _sundaysOfLent.apply( this, arguments ),
        match = _.find( sundays, function( sunday ) {
          return date.isSame( sunday );
        });

    // Since its a Sunday, add one day to make it a Monday
    if ( !_.isUndefined( match ) ) {
      date = date.add( 1, 'days' ); 
    }

    // If it occurs during Holy Week, it is transferred to the 
    // Monday of the Second Week of Easter.  
    var holyWeek = _holyWeek.apply( this, arguments ),
        holyWeekRange = moment.range( _.first( holyWeek ), _.last( holyWeek ) );
    if ( holyWeekRange.contains( date ) ) {
      date = _divineMercySunday( arguments[0] ).add( 1, 'days' );
    }

    // If it occurs during the Octave of Easter, it is transferred to the 
    // Monday of the Second Week of Easter.  
    var octave = _octaveOfEaster.apply( this, arguments ),
        octaveRange = moment.range( _.first( octave ), _.last( octave ) );
    if ( octaveRange.contains( date ) ) {
      date = _divineMercySunday( arguments[0] ).add( 1, 'days' );
    }
      
    return date;
  },

  // The Nativity of St John the Baptist on June 24 comes three months after 
  // the celebration on March 25 of the Annunciation, when the Archangel Gabriel 
  // told Our Lady that her cousin Elizabeth was in her sixth month of pregnancy,
  // and six months before the Christmas celebration of the birth of Jesus. 
  // The purpose of these festivals is not to celebrate the exact dates of these 
  // events, but simply to commemorate them in an interlinking way. 
  // The Nativity of St. John the Baptist anticipates the feast of Christmas.
  // arguments[0]: year
  birthOfJohnTheBaptist: function() {
    return moment.utc({ year: arguments[0], month: 5, day: 24 });
  },

  // The Feast of Saints Peter and Paul or Solemnity of Saints Peter and Paul is a 
  // liturgical feast in honour of the martyrdom in Rome of the apostles Saint Peter 
  // and Saint Paul, which is observed on 29 June. The celebration is of ancient origin, 
  // the date selected being the anniversary either of their death or of the translation 
  // of their relics.
  // arguments[0]: year
  peterAndPaulApostles: function() {
    return moment.utc({ year: arguments[0], month: 5, day: 29 });
  },

  // The Latin Catholic Feast of the Assumption is celebrated on August 15
  // was the bodily taking up of the Virgin Mary into Heaven at the end 
  // of her earthly life.
  // arguments[0]: year
  assumption: function() {
    return moment.utc({ year: arguments[0], month: 7, day: 15 });
  },

  // All Saints' Day is a solemnity celebrated on 1 November by the Roman 
  // Catholic Church of Latin rite in honour of all the saints, known 
  // and unknown. 
  // arguments[0]: year
  allSaints: function() {
    return moment.utc({ year: arguments[0], month: 10, day: 1 });
  },

  // The Catholic Church celebrates the Feast of the Immaculate Conception on December 8
  // The Immaculate Conception, according to the teaching of the Catholic Church, was the 
  // conception of the Blessed Virgin Mary in the womb of her mother, Saint Anne, free from 
  // original sin by virtue of the foreseen merits of her son Jesus Christ. The Catholic 
  // Church teaches that Mary was conceived by normal biological means, but God acted upon 
  // her soul (keeping her "immaculate") at the time of her conception.
  // arguments[0]: year
  immaculateConception: function() {

    var date = moment.utc({ year: arguments[0], month: 11, day: 8 });

    // Check to see if this solemnity falls on a Sunday of Advent
    // If it occurs on a Sunday of Advent is transferred to the 
    // following Monday.  
    if ( _.eq( date.day(), 0 ) ) {
      var sundays = _sundaysOfAdvent.apply( this, arguments );
      _.each( sundays, function( sunday ) {
        if ( date.isSame( sunday ) ) {
          date = sunday.add( 1, 'days' );
        }
      });
    }
      
    return date;
  },

  // In 1999, an Indult for the Transfer of the Solemnity of the Ascension was issued by the 
  // United States Conference of Catholic Bishops allowing each ecclesiastical province to 
  // determine if the Ascension should be celebrated on its proper Thursday (39 days after 
  // Easter) or on the Seventh Sunday of Easter (42 days after Easter). The following 
  // provinces of the United States have retained the celebration of Ascension on its proper 
  // Thursday. All other provinces of the United States have transferred the celebration of 
  // the Ascension to the Seventh Sunday of Easter. 
  // arguments[0]: Takes the year (integer)
  // arguments[1]: Optional boolean to set Ascension to the 7th Sunday of Easter when true
  ascension: function() {
    if ( !_.isUndefined( arguments[1] ) && arguments[1] ) {
      return _easter( arguments[0] ).add( 42, 'days' );
    }
    else {
      return _easter( arguments[0] ).add( 39, 'days' );
    }
  },


  // The Solemnity of Trinity Sunday occurs 56 days after Easter.
  // arguments[0]: Takes the year (integer)
  trinitySunday: function() {
    return _easter( arguments[0] ).add( 56, 'days' );
  },

  // The Solemnity of Corpus Christi occurs 60 days after Easter, if it is celebrated on Thursday 
  // of the Seventh Week of Easter. In those places where Corpus Christi is not a holiday, it is 
  // transferred to the following Sunday (63 days after Easter)
  // If second argument is true, move Corpus Christi to Thursday
  // By default it will be on Sunday
  // arguments[0]: year
  // arguments[1]: Optional boolean to set Corpus Christi to Thursday when true
  corpusChristi: function() {
    if ( !_.isUndefined( arguments[1] ) && arguments[1] ) {
      return _easter( arguments[0] ).add( 60, 'days' );
    }
    else { 
      return _easter( arguments[0] ).add( 63, 'days' );
    }
  },

  // The Solemnity of the Sacred Heart of Jesus occurs 68 days after Easter.
  // arguments[0]: year
  sacredHeartOfJesus: function() {
    return _easter( arguments[0] ).add( 68, 'days' );
  },

  // Immaculate Heart of Mary occurs 69 days after 
  // Easter and is a Memorial. This was formerly an Optional Memorial.
  // arguments[0]: year
  immaculateHeartOfMary: function() {
    return _easter( arguments[0] ).add( 69, 'days' );
  },

  //==================================================================================
  // FEASTS OF THE LORD
  // If a fixed date Feast of the Lord occurs on a Sunday in Ordinary Time, 
  // the feast is celebrated in place of the Sunday.  
  // (e.g., Presentation of the Lord, 1992).
  //==================================================================================

  // Feast of the Holy Family
  // If Christmas falls on a Sunday, then Holy Family is celebrated on Dec. 30.  
  // Otherwise, Holy Family is the Sunday after Christmas.
  // arguments[0]: year
  holyFamily: function() {
    var christmas = _christmas.apply( this, arguments );
    if ( _.eq( christmas.day(), 0 ) ) {
      return moment.utc({ year: arguments[0], month: 11, day: 30 });
    }
    else {
      return christmas.add( 1, 'weeks' ).startOf('week');
    }
  },

  baptismOfTheLord: _baptismOfTheLord,

  // In the Roman Catholic Church, the Feast of the Presentation of the Lord is 
  // a Feast Day occurring between the Feast of the Conversion of St. Paul the 
  // Apostle on 25 January and the Feast of the Chair of St. Peter the Apostle on 
  // 22 February. In some Western liturgical churches, Vespers (or Compline) on the 
  // Feast of the Presentation marks the end of the Epiphany season. 
  presentationOfTheLord: _presentationOfTheLord,

  // arguments[0]: year
  transfiguration: function() {
    return moment.utc({ year: arguments[0], month: 7, day: 6 });
  },

  // arguments[0]: year
  triumphOfTheCross: function() {
    return moment.utc({ year: arguments[0], month: 8, day: 14 });
  },

  //==================================================================================

};
