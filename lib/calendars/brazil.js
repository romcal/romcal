var _ = require('lodash'),
    moment = require('moment'),
    Utils = require('../utils'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {

    var dates = [
      {
        "key": "saintJoseDeAnchietaPriest",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 9 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedAlbertinaBerkenbrockVirginAndMartyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 15 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintPaulinaOfTheAgonizingHeartOfJesusVirgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 9 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
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
        "key": "blessedInacioDeAzevedoPriestAndMartyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 17 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintRoseOfLimaVirgin",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 23 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedsAndreDeSoveralAndAmbrosioFranciscoFerroPriestsAndMartyrs",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 3 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "ourLadyOfAparecidaNossaSenhoraAparecidaPatronessOfBrazil",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 12 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintAnthonyOfSaintAnneGalvaoFreiGalvaoPriest",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 25 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintsRoqueGonzalezAlfonsoRodriguezOlmedoAndJuanDelCastilloPriestsAndMartyrs",
        "type": Types[5],
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
