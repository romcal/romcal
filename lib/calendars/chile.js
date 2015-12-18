var moment = require('moment'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {

    return [
      {
        "key": "blessedLauraVicunaVirgin",
        "name": "Blessed Laura Vicuna, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 22 }),
        "data": {}
      },
      {
        "key": "blessedPiusIxPope",
        "name": "Blessed Pius IX, Pope",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 7 }),
        "data": {}
      },
      {
        "key": "ourLadyOfLourdes",
        "name": "Our Lady of Lourdes",
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
        "name": "Exaltation of The Holy Cross",
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
        "name": "Saints Philip and James, Apostles",
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
        "name": "Saint Teresa of Los Andes, Virgin",
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
        "name": "Saint Camillus de Lellis, Priest, Or Saint Henry",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 14 }),
        "data": {}
      },
      {
        "key": "ourLadyOfMountCarmelMotherAndQueenOfChile",
        "name": "Our Lady of Mount Carmel, Mother and Queen of Chile",
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
        "name": "Saint Alberto Hurtado, Priest",
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
        "key": "ourLadyOfMercy",
        "name": "Our Lady of Mercy",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 24 }),
        "data": {}
      },
      {
        "key": "saintJohnXxiiiPope",
        "name": "Saint John XXIII, Pope",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 11 }),
        "data": {}
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
        "key": "jesusChristTheEternalHighPriest",
        "name": "Jesus Christ, The Eternal High Priest",
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


