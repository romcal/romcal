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
    return [
      {
        "key": "findingOfTheHolyCross",
        "name": "Finding of The Holy Cross",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 3 }),
        "data": {}
      },
      {
        "key": "ourLadyHelpOfChristians",
        "name": "Our Lady, Help of Christians",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 24 }),
        "data": {}
      },
      {
        "key": "saintMarianaDeJesusDeParedesVirgin",
        "name": "Saint Mariana de Jesus de Paredes, Virgin",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 26 }),
        "data": {}
      },
      {
        "key": "saintFrancisSolanusPriest",
        "name": "Saint Francis Solanus, Priest",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 14 }),
        "data": {}
      },
      {
        "key": "ourLadyOfPeace",
        "name": "Our Lady of Peace",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 28 }),
        "data": {}
      },
      {
        "key": "saintRoseOfLimaVirgin",
        "name": "Saint Rose of Lima, Virgin",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 23 }),
        "data": {}
      },
      {
        "key": "saintJohnMaciasReligious",
        "name": "Saint John Macias, Religious",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 18 }),
        "data": {}
      },
      {
        "key": "ourLadyOfMercy",
        "name": "Our Lady of Mercy",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 24 }),
        "data": {}
      },
      {
        "key": "ourLordOfMiracles",
        "name": "Our Lord of Miracles",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 28 }),
        "data": {}
      },
      {
        "key": "saintMartinDePorresReligious",
        "name": "Saint Martin de Porres, Religious",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 3 }),
        "data": {}
      },
      {
        "key": "ourLadyOfGuadalupe",
        "name": "Our Lady of Guadalupe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 12 }),
        "data": {}
      },
      {
        "key": "ourLordJesusChristTheEternalHighPriest",
        "name": "Our Lord Jesus Christ, The Eternal High Priest",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 16 }),
        "data": {}
      }
    ];
  }
};
