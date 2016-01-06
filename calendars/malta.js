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
        "key": "saintPubliusBishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 22 }),
        "data": {}
      },
      {
        "key": "shipwreckOfSaintPaulApostle",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 10 }),
        "data": {}
      },
      {
        "key": "saintsCyrilMonkAndMethodiusBishop",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 14 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ 
              Titles.PATRON_OF_EUROPE 
            ]
          }
        }
      },
      {
        "key": "blessedMariaAdeodataPisaniVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 25 }),
        "data": {}
      },
      {
        "key": "ourLadyOfSorrows",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 15 }),
        "data": {}
      },
      {
        "key": "saintCatherineOfSienaVirginAndDoctorOfTheChurch",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 29 }),
        "data": {
          "meta": {
            "titles": [
              Titles.DOCTOR_OF_THE_CHURCH,
              Titles.PATRON_OF_EUROPE
            ]
          }
        }
      },
      {
        "key": "saintPiusVPope",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 30 }),
        "data": {}
      },
      {
        "key": "saintGeorgePrecaPriest",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 9 }),
        "data": {}
      },
      {
        "key": "blessedNazjuFalzon",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 1 }),
        "data": {}
      },
      {
        "key": "saintBenedictOfNursiaAbbot",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 11 }),
        "data": {}
      },
      {
        "key": "ourLadyOfMountCarmel",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 16 }),
        "data": {}
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
        "key": "birthOfTheBlessedVirginMary",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 8 }),
        "data": {}
      },
      {
        "key": "saintCatherineOfAlexandriaVirginAndMartyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 25 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.RED,
            "titles": [
              Titles.MARTYR
            ]
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
