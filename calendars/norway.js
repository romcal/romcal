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
        "key": "saintThorfinnBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 8 }),
        "data": {}
      },
      {
        "key": "saintHenryBishopAndMartyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 19 }),
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
        "key": "saintEysteinnBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 26 }),
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
        "key": "saintMagnusMartyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 16 }),
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
        "key": "saintEricIxMartyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 18 }),
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
        "key": "saintSunnivaVirginAndMartyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 8 }),
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
        "key": "saintCanuteMartyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 10 }),
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
            "titles": [ 
              Titles.PATRON_OF_EUROPE
            ]
          }
        }
      },
      {
        "key": "saintSwithunBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 15 }),
        "data": {}
      },
      {
        "key": "saintThorlacBishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 20 }),
        "data": {}
      },
      {
        "key": "saintBrigittaReligious",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 23 }),
        "data": {}
      },
      {
        "key": "saintOlafIiMartyr",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 29 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [
              Titles.MARTYR
            ]
          }
        }
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
        "key": "blessedNicolasStenoBishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 25 }),
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
