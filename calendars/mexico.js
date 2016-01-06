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
        "key": "saintFelipeDeJesusPriestAndMartyr",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 22 }),
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
        "key": "blessedSebastianDeAparicioReligious",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 25 }),
        "data": {}
      },
      {
        "key": "saintCristobalMagallanesAndCompanionsMartyrs",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 21 }),
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
        "key": "saintMariaDeJesusSacramentadoVenegasVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 30 }),
        "data": {}
      },
      {
        "key": "blessedBartolomeLaurelReligiousAndMartyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 16 }),
        "data": {
          "meta": {
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "blessedsPedroZunigaAndLuisFloresPriestsAndMartyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 16 }),
        "data": {
          "meta": {
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "blessedJuniperoSerraPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 26 }),
        "data": {}
      },
      {
        "key": "saintJoseMariaDeYermoPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 19 }),
        "data": {}
      },
      {
        "key": "saintRafaelGuizarYValenciaBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 24 }),
        "data": {}
      },
      {
        "key": "blessedMiguelAgustinProPriestAndMartyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 23 }),
        "data": {
          "meta": {
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "saintJuanDiego",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 9 }),
        "data": {}
      },
      {
        "key": "ourLadyOfGuadalupe",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 12 }),
        "data": {}
      },
      {
        "key": "ourLordJesusChristTheEternalHighPriest",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 16 }),
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
