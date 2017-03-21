var _ = require('lodash'),
    moment = require('moment'),
    range = require('moment-range'),
    Path = require('path'),
    Utils = require( Path.join( __dirname, '../lib/utils' )),
    Dates = require( Path.join( __dirname, '../lib/dates' )),
    LiturgicalColors = require( Path.join( __dirname, '../data/liturgicalColors' )),
    Titles = require( Path.join( __dirname, '../data/titles' )),
    Types = require( Path.join( __dirname, '../data/types' )).types;

module.exports = {
  dates: function() {

    var dates = [
      {
        "key": "saintBarbaraVirginAndMartyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 4 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.RED,
            "titles": [
              Titles.MARTYR
            ]
          }
        }
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
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.RED,
            "titles": [
              Titles.MARTYR
            ]
          }
        }
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
