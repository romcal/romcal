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
        "key": "blessedJosephVazPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 16 }),
        "data": {}
      },
      {
        "key": "ourLadyOfLanka",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 4 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "ourLadyOfMadhu",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 2 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
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
