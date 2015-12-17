var moment = require('moment'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {

    return [
      {
        "key": "saintBrotherMutienMarieReligious",
        "name": "Saint Brother Mutien Marie, Religious",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 30 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintAmandMissionary",
        "name": "Saint Amand, Missionary",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 6 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintGertrudeOfNivellesVirgin",
        "name": "Saint Gertrude of Nivelles, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 17 }),
        "data": {}
      },
      {
        "key": "saintJulieBilliartVirgin",
        "name": "Saint Julie Billiart, Virgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 8 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintFatherDamienMissionary",
        "name": "Saint Father Damien, Missionary",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 10 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintJulianaOfLiegeVirgin",
        "name": "Saint Juliana of Liege, Virgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 7 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "ourLadyMediatrix",
        "name": "Our Lady, Mediatrix",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 31 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintLambertBishopAndMartyr",
        "name": "Saint Lambert, Bishop and Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 17 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintHubertBishop",
        "name": "Saint Hubert, Bishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 3 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintJohnBerchmansReligious",
        "name": "Saint John Berchmans, Religious",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 26 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      }
    ];
  }
};  
