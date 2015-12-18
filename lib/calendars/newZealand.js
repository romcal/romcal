var _ = require('lodash'),
    moment = require('moment'),
    range = require('moment-range'),
    Utils = require('../utils'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Seasons = require('../seasons'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {

    var dates = [
      {
        "key": "waitangiDay",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 6 }),
        "data": {}
      },
      {
        "key": "saintPaulMikiAndCompanionsMartyrs",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 7 }),
        "data": {}
      },
      {
        "key": "saintPatrickBishop",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 17 }),
        "data": {}
      },
      {
        "key": "saintMarkApostle",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 26 }),
        "data": {}
      },
      {
        "key": "saintLouisGrignonDeMontfortPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 27 }),
        "data": {}
      },
      {
        "key": "saintPeterChanelPriestAndMartyr",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 28 }),
        "data": {}
      },
      {
        "key": "ourLadyHelpOfChristians",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 24 }),
        "data": {}
      },
      {
        "key": "saintMarcellinChampagnatPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 6 }),
        "data": {}
      },
      {
        "key": "saintDominicPriest/SaintSixtusIiPopeAndCompanionsMartyrsSaintCajetanPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 7 }),
        "data": {}
      },
      {
        "key": "saintMaryMacKillopVirgin",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 8 }),
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
