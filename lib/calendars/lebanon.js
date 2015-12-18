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
        "key": "saintBarbaraVirginAndMartyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 4 }),
        "data": {}
      },
      {
        "key": "saintNicholasBishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 6 }),
        "data": {}
      },
      {
        "key": "saintCharbelPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 24 }),
        "data": {}
      },
      {
        "key": "saintMaroun",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 9 }),
        "data": {}
      },
      {
        "key": "saintRafqaRebeccaVirgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 23 }),
        "data": {}
      },
      {
        "key": "saintGeorgeMartyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 23 }),
        "data": {}
      },
      {
        "key": "ourLadyOfLebanon",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 1 }),
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
