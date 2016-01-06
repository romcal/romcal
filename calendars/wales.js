var _ = require('lodash'),
    moment = require('moment'), 
    range = require('moment-range'),
    Path = require('path'),
    Utils = require( Path.join( __dirname, '../lib/utils' )),
    Dates = require( Path.join( __dirname, '../lib/dates' )),
    LiturgicalColors = require( Path.join( __dirname, '../data/liturgicalColors' )),
    Titles = require( Path.join( __dirname, '../data/titles' )),
    Types = require( Path.join( __dirname, '../data/types' )).types;

module.exports = {
  dates: function() {
    
    var dates = [
      {
        "key": "saintTeiloBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 9 }),
        "data": {}
      },
      {
        "key": "saintsCyrilMonkAndMethodiusBishop",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 14 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ Titles.PATRON_OF_EUROPE ]
          }
        }
      },
      {
        "key": "saintDavidBishop",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 1 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintBeunoAbbot",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 20 }),
        "data": {}
      },
      {
        "key": "saintCatherineOfSienaVirginAndDoctorOfTheChurch",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 29 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ 
              Titles.PATRON_OF_EUROPE,
              Titles.DOCTOR_OF_THE_CHURCH
            ]
          }
        }
      },
      {
        "key": "saintAsaphBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 5 }),
        "data": {}
      },
      {
        "key": "saintsAlbanJuliusAndAaronMartyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 20 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.RED,
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "saintBenedictOfNursiaAbbot",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 11 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ Titles.PATRON_OF_EUROPE ]
          }
        }
      },
      {
        "key": "saintJohnJonesPriestAndMartyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 12 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.RED,
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "saintBirgittaReligious",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 23 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintsPhilipEvansAndJohnLloydPriestsAndMartyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 25 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.RED,
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "saintGermanusOfAuxerreBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 3 }),
        "data": {}
      },
      {
        "key": "saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 9 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.RED,
            "titles": [
              Titles.MARTYR,
              Titles.PATRON_OF_EUROPE
            ]
          }
        }
      },
      {
        "key": "saintDavidLewisPriestAndMartyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 26 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.RED,
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "saintDeiniolBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 11 }),
        "data": {}
      },
      {
        "key": "saintRichardGwynMartyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 16 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.RED,
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "theSixWelshMartyrsAndCompanions",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 25 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.RED,
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "saintWinefrideVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 3 }),
        "data": {}
      },
      {
        "key": "saintIlltudAbbot",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 6 }),
        "data": {}
      },
      {
        "key": "allSaintsOfWales",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 8 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintDubriciusBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 14 }),
        "data": {
          "meta": {
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "saintJohnRobertsPriestAndMartyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 10 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.RED,
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      // In England and Wales when the celebration falls on either a 
      // Saturday or a Monday it is transferred to the Sunday.
      // Replaces 20th Sunday in Ordinary Time when it falls on a Sunday.
      {
        "key": "peterAndPaulApostles",
        "type": Types[0],
        "moment": (function( y ) {
          var date = moment.utc({ year: y, month: 5, day: 29 });
          if ( _.eq( date.day(), 1 ) ) {
            return date.subtract( 1, 'days');
          }
          else if ( _.eq( date.day(), 6 ) ) {
            return date.add( 1, 'days' ).startOf('day');
          }
          else {
            return date;
          }
        }( arguments[0] )),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.RED
          }
        }
      },
      // In England and Wales when the celebration falls on either a 
      // Saturday or a Monday it is transferred to the Sunday.
      // Replaces 20th Sunday in Ordinary Time when it falls on a Sunday.
      {
        "key": "assumption",
        "type": Types[0],
        "moment": (function( y ) {
          var date = moment.utc({ year: y, month: 7, day: 15 });
          if ( _.eq( date.day(), 1 ) ) {
            return date.subtract( 1, 'days');
          }
          else if ( _.eq( date.day(), 6 ) ) {
            return date.add( 1, 'weeks' ).startOf('week');
          }
          else {
            return date;
          }
        }( arguments[0] )),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      }
    ];

    // Get localized celebration names
    return _.map( dates, function( date ) {
      date.name = Utils.localize({
        key: 'national.' + date.key 
      });
      return date;
    });
  }
};
