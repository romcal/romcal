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
        "key": "blessedLauraVicunaVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 22 }),
        "data": {}
      },
      {
        "key": "blessedPiusIxPope",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 7 }),
        "data": {}
      },
      {
        "key": "ourLadyOfLourdes",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 11 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "exaltationOfTheHolyCross",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 3 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintsPhilipAndJamesApostles",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 4 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintTeresaOfLosAndesVirgin",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 13 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintCamillusDeLellisPriestOrSaintHenry",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 14 }),
        "data": {}
      },
      {
        "key": "ourLadyOfMountCarmelMotherAndQueenOfChile",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 16 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintAlbertoHurtadoPriest",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 18 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintRoseOfLimaVirgin",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 30 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "ourLadyOfMercy",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 24 }),
        "data": {}
      },
      {
        "key": "saintJohnXxiiiPope",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 11 }),
        "data": {}
      },
      {
        "key": "ourLadyOfGuadalupe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 12 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "jesusChristTheEternalHighPriest",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 16 }),
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
