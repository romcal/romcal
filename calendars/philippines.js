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
        "key": "santoNinoInfantJesus",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 9 }),
        "data": {}
      },
      {
        "key": "saintsPedroBautistaPaulMikiAndCompanionsMartyrs",
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
        "key": "saintPedroCalungsodMartyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 2 }),
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
        "key": "saintIsidoreTheFarmer",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 15 }),
        "data": {}
      },
      {
        "key": "saintRoch",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 16 }),
        "data": {}
      },
      {
        "key": "saintEzekielMorenoBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 19 }),
        "data": {}
      },
      {
        "key": "saintLorenzoRuizAndCompanionsMartyrs",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 28 }),
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
        "key": "immaculateConceptionOfTheBlessedVirginMaryPrincipalPatronessOfThePhilippines",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 8 }),
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
