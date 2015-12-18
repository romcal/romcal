var _ = require('lodash'),
    moment = require('moment'),
    range = require('moment-range'),
    Utils = require('../utils'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Titles = require('../../data/titles'),
    Seasons = require('../seasons'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {

    var dates = [
      {
        "key": "findingOfTheHolyCross",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 3 }),
        "data": {}
      },
      {
        "key": "ourLadyHelpOfChristians",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 24 }),
        "data": {}
      },
      {
        "key": "saintMarianaDeJesusDeParedesVirgin",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 26 }),
        "data": {}
      },
      {
        "key": "saintFrancisSolanusPriest",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 14 }),
        "data": {}
      },
      {
        "key": "ourLadyOfPeace",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 28 }),
        "data": {}
      },
      {
        "key": "saintRoseOfLimaVirgin",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 23 }),
        "data": {}
      },
      {
        "key": "saintJohnMaciasReligious",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 18 }),
        "data": {}
      },
      {
        "key": "ourLadyOfMercy",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 24 }),
        "data": {}
      },
      {
        "key": "ourLordOfMiracles",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 28 }),
        "data": {}
      },
      {
        "key": "saintMartinDePorresReligious",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 3 }),
        "data": {}
      },
      {
        "key": "ourLadyOfGuadalupe",
        "type": Types[4],
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
