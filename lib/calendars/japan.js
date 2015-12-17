var _ = require('lodash'),
    moment = require('moment'),
    range = require('moment-range'),
    Utils = require('../utils'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Seasons = require('../seasons'),
    Titles = require('../../data/titles'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {
    return [
      {
        "key": "saintPaulMikiAndCompanionsMartyrs",
        "name": "Saint Paul Miki and Companions, Martyrs",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 6 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "discoveryOfTheHiddenChristians",
        "name": "Discovery of The Hidden Christians",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 17 }),
        "data": {}
      },
      {
        "key": "blessedPeterKibePriestAndCompanionsMartyrs",
        "name": "Blessed Peter Kibe, Priest and Companions, Martyrs",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 1 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "205BlessedMartyrsOfJapan",
        "name": "205 Blessed Martyrs of Japan",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 10 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintThomasRokuzayemonPriestAndCompanionsMartyrs",
        "name": "Saint Thomas Rokuzayemon, Priest and Companions, Martyrs",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 28 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintFrancisXavierPriest",
        "name": "Saint Francis Xavier, Priest",
        "type": Types[4],
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
