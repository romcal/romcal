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
        "key": "saintBrotherMutienMarieReligious",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 30 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintAmandMissionary",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 6 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintGertrudeOfNivellesVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 17 }),
        "data": {}
      },
      {
        "key": "saintJulieBilliartVirgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 8 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintFatherDamienMissionary",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 10 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintJulianaOfLiegeVirgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 7 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "ourLadyMediatrix",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 31 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintLambertBishopAndMartyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 17 }),
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
        "key": "saintHubertBishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 3 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintJohnBerchmansReligious",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 26 }),
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
