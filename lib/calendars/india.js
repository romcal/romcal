var _ = require('lodash'),
    moment = require('moment'),
    range = require('moment-range'),
    Utils = require('../utils'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Seasons = require('../seasons'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {
    return [
      {
        "key": "blessedKuriakoseEliasChavaraPriest",
        "name": "Blessed Kuriakose Elias Chavara, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 3 }),
        "data": {}
      },
      {
        "key": "blessedJosephVazPriest",
        "name": "Blessed Joseph Vaz, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 16 }),
        "data": {}
      },
      {
        "key": "saintJohnDeBritoPriestAndMartyr",
        "name": "Saint John de Brito, Priest and Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 4 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintGonsaloGarciaMartyr",
        "name": "Saint Gonsalo Garcia, Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 6 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedMariaTheresaChiramelVirgin",
        "name": "Blessed Maria Theresa Chiramel, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 8 }),
        "data": {}
      },
      {
        "key": "saintThomasTheApostle",
        "name": "Saint Thomas The Apostle",
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
        "name": "Saint Alphonsa of The Immaculate Conception, Virgin",
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
        "name": "Blessed Teresa of Calcutta, Religious",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 5 }),
        "data": {}
      },
      {
        "key": "saintFrancisXavierPriest",
        "name": "Saint Francis Xavier, Priest",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 3 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      }
    ];
  }
};
