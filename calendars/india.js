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
        "key": "blessedKuriakoseEliasChavaraPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 3 }),
        "data": {}
      },
      {
        "key": "blessedJosephVazPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 16 }),
        "data": {}
      },
      {
        "key": "saintJohnDeBritoPriestAndMartyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 4 }),
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
        "key": "saintGonsaloGarciaMartyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 6 }),
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
        "key": "blessedMariaTheresaChiramelVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 8 }),
        "data": {}
      },
      {
        "key": "saintThomasTheApostle",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 3 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintAlphonsaOfTheImmaculateConceptionVirgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 28 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedTeresaOfCalcuttaReligious",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 5 }),
        "data": {}
      },
      {
        "key": "saintFrancisXavierPriest",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 3 }),
        "data": {
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
