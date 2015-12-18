var _ = require('lodash'),
    moment = require('moment'),
    Utils = require('../utils'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Titles = require('../../data/titles.json'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {
    
    var dates = [
      {
        "key": "saintElizabethAnnSetonReligious",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 4 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintJohnNeumannBishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 5 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintAndreBessetteReligious",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 6 }),
        "data": {}
      },
      {
        "key": "saintVincentDeaconAndMartyrOrSaintMarianneCopeVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 22 }),
        "data": {
          "meta": {
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "saintKatharineDrexelVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 3 }),
        "data": {}
      },
      {
        "key": "saintDamienDeVeusterPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 10 }),
        "data": {}
      },
      {
        "key": "saintIsidoreTheFarmer",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 15 }),
        "data": {}
      },
      {
        "key": "blessedJuniperoSerraPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 1 }),
        "data": {}
      },
      {
        "key": "saintElizabethOfPortugal",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 4 }),
        "data": {}
      },
      {
        "key": "saintKateriTekakwithaVirgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 14 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintCamillusDeLellisPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 18 }),
        "data": {}
      },
      {
        "key": "saintPeterClaverPriest",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 9 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedMarieRoseDurocherVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 6 }),
        "data": {}
      },
      {
        "key": "saintsJohnDeBrebeufAndIsaacJoguesPriestsAndCompanionsMartyrs",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 19 }),
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
        "key": "saintPaulOfTheCrossPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 20 }),
        "data": {}
      },
      {
        "key": "saintJohnPaulIiPope",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 22 }),
        "data": {}
      },
      {
        "key": "saintFrancesXavierCabriniVirgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 13 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintRosePhilippineDuchesneVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 18 }),
        "data": {}
      },
      {
        "key": "blessedMiguelAgustinProPriestAndMartyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 23 }),
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
        "key": "ourLadyOfGuadalupe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 12 }),
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
