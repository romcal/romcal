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
        "key": "saintBarbaraVirginAndMartyr",
        "name": "Saint Barbara, Virgin and Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 4 }),
        "data": {}
      },
      {
        "key": "saintNicholasBishop",
        "name": "Saint Nicholas, Bishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 6 }),
        "data": {}
      },
      {
        "key": "saintCharbelPriest",
        "name": "Saint Charbel, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 24 }),
        "data": {}
      },
      {
        "key": "saintMaroun",
        "name": "Saint Maroun",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 9 }),
        "data": {}
      },
      {
        "key": "saintRafqaRebeccaVirgin",
        "name": "Saint Rafqa (Rebecca), Virgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 23 }),
        "data": {}
      },
      {
        "key": "saintGeorgeMartyr",
        "name": "Saint George, Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 23 }),
        "data": {}
      },
      {
        "key": "ourLadyOfLebanon",
        "name": "Our Lady of Lebanon",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 1 }),
        "data": {}
      }
    ];
  }
};
