var moment = require('moment'),
    Dates = require('../dates'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {

    return [
      {
        "key": "saintsFelipeDeJesusPaulMikiAndCompanionsMartyrs",
        "name": "Saints Felipe de Jesus, Paul Miki and Companions, Martyrs",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 6 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintTuribiusOfMogrovejoBishop",
        "name": "Saint Turibius of Mogrovejo, Bishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 23 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintMarianaDeJesusDeParedesVirgin",
        "name": "Saint Mariana de Jesus de Paredes, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 25 }),
        "data": {}
      },
      {
        "key": "blessedNazariaIgnaciaMarchReligious",
        "name": "Blessed Nazaria Ignacia March, Religious",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 23 }),
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
        "moment": moment.utc({ year: arguments[0], month: 6, day: 12 }),
        "data": {}
      },
      {
        "key": "saintFrancisSolanusPriest",
        "name": "Saint Francis Solanus, Priest",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 14 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "ourLadyOfMountCarmel",
        "name": "Our Lady of Mount Carmel",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 16 }),
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
        "key": "saintPeterClaverPriest",
        "name": "Saint Peter Claver, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 9 }),
        "data": {}
      },
      {
        "key": "saintJohnMaciasReligious",
        "name": "Saint John Macias, Religious",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 18 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintLouisBertrandPriest",
        "name": "Saint Louis Bertrand, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 9 }),
        "data": {}
      },
      {
        "key": "saintMiguelFebresCorderoReligious",
        "name": "Saint Miguel Febres Cordero, Religious",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 21 }),
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
        "key": "saintAnthonyMaryClaretBishop",
        "name": "Saint Anthony Mary Claret, Bishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 24 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintMartinDePorresReligious",
        "name": "Saint Martin de Porres, Religious",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 3 }),
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
      },
      // Thursday after Pentecost
      {
        "key": "ourLordJesusChristTheEternalHighPriest",
        "name": "Our Lord Jesus Christ, The Eternal High Priest",
        "type": Types[4],
        "moment": (function( y ) {
          return Dates.pentecostSunday( y ).add( 4, 'days' );
        }()),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      }
    ];
  }
};  
