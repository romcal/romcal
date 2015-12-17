var moment = require('moment'),
    Utils = require('../utils'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Titles = require('../../data/titles.json'),
    Types = require('../../data/types').types;

module.exports = {
  
  dates: function() {
    return [
      {
        "key": "saintElizabethAnnSetonReligious",
        "name": "Saint Elizabeth Ann Seton, Religious",
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
        "name": "Saint John Neumann, Bishop",
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
        "name": "Saint Andre Bessette, Religious",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 6 }),
        "data": {}
      },
      {
        "key": "saintVincentDeaconAndMartyrOrSaintMarianneCopeVirgin",
        "name": "Saint Vincent, Deacon and Martyr Or Saint Marianne Cope, Virgin",
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
        "name": "Saint Katharine Drexel, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 3 }),
        "data": {}
      },
      {
        "key": "saintDamienDeVeusterPriest",
        "name": "Saint Damien de Veuster, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 10 }),
        "data": {}
      },
      {
        "key": "saintIsidoreTheFarmer",
        "name": "Saint Isidore the Farmer",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 15 }),
        "data": {}
      },
      {
        "key": "blessedJuniperoSerraPriest",
        "name": "Blessed Junipero Serra, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 1 }),
        "data": {}
      },
      {
        "key": "saintElizabethOfPortugal",
        "name": "Saint Elizabeth of Portugal",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 4 }),
        "data": {}
      },
      {
        "key": "saintKateriTekakwithaVirgin",
        "name": "Saint Kateri Tekakwitha, Virgin",
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
        "name": "Saint Camillus de Lellis, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 18 }),
        "data": {}
      },
      {
        "key": "saintPeterClaverPriest",
        "name": "Saint Peter Claver, Priest",
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
        "name": "Blessed Marie Rose Durocher, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 6 }),
        "data": {}
      },
      {
        "key": "saintsJohnDeBrebeufAndIsaacJoguesPriestsAndCompanionsMartyrs",
        "name": "Saints John de Brebeuf and Isaac Jogues, Priests, and Companions, Martyrs",
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
        "name": "Saint Paul of The Cross, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 20 }),
        "data": {}
      },
      {
        "key": "saintJohnPaulIiPope",
        "name": "Saint John Paul II, Pope",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 22 }),
        "data": {}
      },
      {
        "key": "saintFrancesXavierCabriniVirgin",
        "name": "Saint Frances Xavier Cabrini, Virgin",
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
        "name": "Saint Rose Philippine Duchesne, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 18 }),
        "data": {}
      },
      {
        "key": "blessedMiguelAgustinProPriestAndMartyr",
        "name": "Blessed Miguel Agustin Pro, Priest and Martyr",
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
        "name": "Our Lady of Guadalupe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 12 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      }
    ];
  }
};
