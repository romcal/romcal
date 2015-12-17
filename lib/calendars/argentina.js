var moment = require('moment'),
    Dates = require('../dates'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {

    return [
      {
        "key": "blessedLauraVicuna",
        "name": "Blessed Laura Vicuna",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 22 }),
        "data": {}
      },
      {
        "key": "ourLadyQueenOfPeace",
        "name": "Our Lady, Queen of Peace",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 24 }),
        "data": {}
      },
      {
        "key": "saintTuribiusOfMogrovejoBishop",
        "name": "Saint Turibius of Mogrovejo, Bishop",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 27 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "ourLadyOfLujanPatronessOfArgentina",
        "name": "Our Lady of Luján, Patroness of Argentina",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 8 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintIsidoreTheLaborer",
        "name": "Saint Isidore The Laborer",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 15 }),
        "data": {}
      },
      {
        "key": "saintLuigiOrionePriest",
        "name": "Saint Luigi Orione, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 16 }),
        "data": {}
      },
      {
        "key": "ourLadyOfItati",
        "name": "Our Lady of Itati",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 9 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintsAugustineZhaoRongPriestAndCompanionsMartyrs",
        "name": "Saints Augustine Zhao Rong, Priest, and Companions, Martyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 10 }),
        "data": {}
      },
      {
        "key": "ourLadyOfMountCarmel",
        "name": "Our Lady of Mount Carmel",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 16 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintSharbelMakhlufPriest",
        "name": "Saint Sharbel Makhlūf, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 23 }),
        "data": {}
      },
      {
        "key": "saintFrancisSolanusPriest",
        "name": "Saint Francis Solanus, Priest",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 24 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintRocco",
        "name": "Saint Rocco",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 16 }),
        "data": {}
      },
      {
        "key": "blessedCeferinoNamuncura",
        "name": "Blessed Ceferino Namuncura",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 26 }),
        "data": {}
      },
      {
        "key": "saintRoseOfLima",
        "name": "Saint Rose of Lima",
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
        "name": "Our Lady of Mercy",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 24 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintHectorValdivielsoSaezMartyr",
        "name": "Saint Héctor Valdivielso Sáez, Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 9 }),
        "data": {}
      },
      {
        "key": "ourLadyOfThePillar",
        "name": "Our Lady of The Pillar",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 12 }),
        "data": {}
      },
      {
        "key": "saintsRoqueGonzalezAlfonsoRodriguezAndJuanDelCastilloPriestsMartyrs",
        "name": "Saints Roque Gonzalez, Alfonso Rodriguez, and Juan del Castillo, Priests & Martyrs",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 17 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintElizabethOfHungary",
        "name": "Saint Elizabeth of Hungary",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 18 }),
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
      // Saturday of the 2nd Week of Easter
      {
        "key": "ourLadyOfTheValley",
        "name": "Our Lady of The Valley",
        "type": Types[5],
        "moment": (function( y ) {
          return Dates.divineMercySunday( y ).add( 6, 'days');
        }( arguments[0] )),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      // Monday after Pentecost
      {
        "key": "maryMotherOfTheChurch",
        "name": "Mary, Mother of The Church",
        "type": Types[5],
        "moment": (function( y ) {
          return Dates.pentecostSunday( y ).add( 1, 'days');
        }( arguments[0] )),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      }
    ];
  }
};
