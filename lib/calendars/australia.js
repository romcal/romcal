var _ = require('lodash'),
    moment = require('moment'),
    Utils = require('../utils'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {

    var dates = [
      {
        "key": "saintPatrickBishop",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 17 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintPeterChanelPriestAndMartyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 28 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "ourLadyHelpOfChristians",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 24 }),
        "data": {}
      },
      {
        "key": "blessedPeterToRotMartyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 7 }),
        "data": {}
      },
      {
        "key": "saintMaryOfTheCrossVirgin",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 8 }),
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
