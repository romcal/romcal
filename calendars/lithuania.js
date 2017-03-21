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
        "key": "blessedJerzyMatulewiczBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 27 }),
        "data": {}
      },
      {
        "key": "saintsCyrilMonkAndMethodiusBishop",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 14 }),
        "data": {
          "meta": {
            "titles": [
              Titles.PATRON_OF_EUROPE
            ]
          }
        }
      },
      {
        "key": "saintCasimir",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 4 }),
        "data": {}
      },
      {
        "key": "saintBrunoBonifaceOfQuerfurtBishopAndMartyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 9 }),
        "data": {
          "meta": {
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "saintAdalbertBishopAndMartyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 23 }),
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
        "key": "saintCatherineOfSienaVirginAndDoctorOfTheChurch",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 29 }),
        "data": {
          "meta": {
            "titles": [
              Titles.PATRON_OF_EUROPE,
              Titles.DOCTOR_OF_THE_CHURCH
            ]
          }
        }
      },
      {
        "key": "saintAndrewBobolaPriestAndMartyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 16 }),
        "data": {
          "meta": {
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "ourLadyMotherOfMercy",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 16 }),
        "data": {}
      },
      {
        "key": "saintBenedictOfNursiaAbbot",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 11 }),
        "data": {
          "meta": {
            "titles": [
              Titles.PATRON_OF_EUROPE
            ]
          }
        }
      },
      {
        "key": "saintBirgittaReligious",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 23 }),
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
        "key": "saintRocco",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 16 }),
        "data": {}
      },
      {
        "key": "saintHyacinthPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 17 }),
        "data": {}
      },
      {
        "key": "birthOfTheBlessedVirginMary",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 8 }),
        "data": {}
      },
      {
        "key": "saintFaustinaKowalskaVirginAndReligious",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 5 }),
        "data": {}
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
