var _ = require('lodash'),
    moment = require('moment'), 
    range = require('moment-range'),
    Utils = require('../utils'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Titles = require('../../data/titles'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {

    var dates = [
      {
        "key": "saintHenryBishopAndMartyr",
        "type": Types[0],
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
        "key": "saintCatherineOfSienaVirginAndDoctor",
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
        "key": "saintEricIxMartyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 18 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedHemmingBishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 22 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintUrsulaLedochowskaVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 29 }),
        "data": {}
      },
      {
        "key": "blessedElisabethHesselbaldVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 4 }),
        "data": {}
      },
      {
        "key": "saintJosemariaEscrivaDeBalaguerPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 26 }),
        "data": {}
      },
      {
        "key": "saintCanuteMartyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 10 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintBenedictAbbot",
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
        "key": "saintThorlacBishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 20 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintBrigittaReligious",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 23 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintOlafIiMartyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 29 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 9 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ Titles.PATRON_OF_EUROPE ]
          }
        }
      },
      {
        "key": "blessedNicolasStenoBishop",
        "type": Types[6],
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


