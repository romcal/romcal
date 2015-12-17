var moment = require('moment'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {

    return [
      {
        "key": "saintJoseDeAnchietaPriest",
        "name": "Saint Jose de Anchieta, Priest",
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
        "name": "Blessed Albertina Berkenbrock, Virgin and Martyr",
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
        "name": "Saint Paulina of The Agonizing Heart of Jesus, Virgin",
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
        "key": "blessedInacioDeAzevedoPriestAndMartyr",
        "name": "Blessed Inacio de Azevedo, Priest and Martyr",
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
        "name": "Saint Rose of Lima, Virgin",
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
        "name": "Blesseds Andre de Soveral and Ambrosio Francisco Ferro, Priests and Martyrs",
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
        "name": "Our Lady of Aparecida (Nossa Senhora Aparecida), Patroness of Brazil",
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
        "name": "Saint Anthony of Saint Anne Galvao (Frei Galvao), Priest",
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
        "name": "Saints Roque Gonzalez, Alfonso Rodriguez Olmedo, and Juan del Castillo, Priests and Martyrs",
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
