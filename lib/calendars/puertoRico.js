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
        "key": "mostHolyNameOfJesusOrOurLadyOfBethlehem",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 3 }),
        "data": {}
      },
      {
        "key": "blessedMariaDolOresRodriguezSopenaVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 10 }),
        "data": {}
      },
      {
        "key": "blessedCarlosManuelRodriguez",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 4 }),
        "data": {}
      },
      {
        "key": "ourLadyOfMountCarmel",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 16 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintTeresaOfJesusJornetEIbarsVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 26 }),
        "data": {}
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
        "key": "blessedsCarlosSpinolaAndJeronimoDeAngelisPriestsAndMartyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 10 }),
        "data": {}
      },
      {
        "key": "saintSoledadTorresAcostaVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 11 }),
        "data": {}
      },
      {
        "key": "ourLadyMotherOfDivineProvidencePatronessOfPuertoRico",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 19 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
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
        "key": "maryMotherOfTheChurch",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 13 }),
        "data": {}
      },
      {
        "key": "ourLordJesusChristTheEternalHighPriest",
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
