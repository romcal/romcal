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
        "key": "waitangiDay",
        "name": "Waitangi Day",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 6 }),
        "data": {}
      },
      {
        "key": "saintPaulMikiAndCompanionsMartyrs",
        "name": "Saint Paul Miki and Companions, Martyrs",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 7 }),
        "data": {}
      },
      {
        "key": "saintPatrickBishop",
        "name": "Saint Patrick, Bishop",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 17 }),
        "data": {}
      },
      {
        "key": "saintMarkApostle",
        "name": "Saint Mark, Apostle",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 26 }),
        "data": {}
      },
      {
        "key": "saintLouisGrignonDeMontfortPriest",
        "name": "Saint Louis Grignon de Montfort, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 27 }),
        "data": {}
      },
      {
        "key": "saintPeterChanelPriestAndMartyr",
        "name": "Saint Peter Chanel, Priest and Martyr",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 28 }),
        "data": {}
      },
      {
        "key": "ourLadyHelpOfChristians",
        "name": "Our Lady, Help of Christians",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 24 }),
        "data": {}
      },
      {
        "key": "saintMarcellinChampagnatPriest",
        "name": "Saint Marcellin Champagnat, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 6 }),
        "data": {}
      },
      {
        "key": "saintDominicPriest/SaintSixtusIiPopeAndCompanionsMartyrsSaintCajetanPriest",
        "name": "Saint Dominic, Priest/Saint Sixtus II, Pope, and Companions, Martyrs/Saint Cajetan, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 7 }),
        "data": {}
      },
      {
        "key": "saintMaryMacKillopVirgin",
        "name": "Saint Mary MacKillop, Virgin",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 8 }),
        "data": {}
      }
    ];
  }
};
