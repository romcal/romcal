var _ = require('lodash'),
    moment = require('moment'),
    range = require('moment-range'),
    Utils = require('../utils'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Seasons = require('../seasons'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {
    return [
      {
        "key": "mostHolyNameOfJesusOrOurLadyOfBethlehem",
        "name": "Most Holy Name of Jesus Or Our Lady of Bethlehem",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 3 }),
        "data": {}
      },
      {
        "key": "blessedMariaDolOresRodriguezSopenaVirgin",
        "name": "Blessed Maria DolOres Rodriguez Sopena, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 10 }),
        "data": {}
      },
      {
        "key": "blessedCarlosManuelRodriguez",
        "name": "Blessed Carlos Manuel Rodriguez",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 4 }),
        "data": {}
      },
      {
        "key": "ourLadyOfMountCarmel",
        "name": "Our Lady of Mount Carmel",
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
        "name": "Saint Teresa of Jesus Jornet e Ibars, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 26 }),
        "data": {}
      },
      {
        "key": "saintRoseOfLimaVirgin",
        "name": "Saint Rose of Lima, Virgin",
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
        "name": "Blesseds Carlos Spinola and Jeronimo de Angelis, Priests and Martyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 10 }),
        "data": {}
      },
      {
        "key": "saintSoledadTorresAcostaVirgin",
        "name": "Saint Soledad Torres Acosta, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 11 }),
        "data": {}
      },
      {
        "key": "ourLadyMotherOfDivineProvidencePatronessOfPuertoRico",
        "name": "Our Lady, Mother of Divine Providence, Patroness of Puerto Rico",
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
        "name": "Our Lady of Guadalupe",
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
        "name": "Mary, Mother of The Church",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 13 }),
        "data": {}
      },
      {
        "key": "ourLordJesusChristTheEternalHighPriest",
        "name": "Our Lord Jesus Christ, The Eternal High Priest",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 16 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      }
    ];
  }
};
