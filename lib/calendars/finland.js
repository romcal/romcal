var _ = require('lodash'),
    moment = require('moment'), 
    range = require('moment-range'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Titles = require('../../data/titles'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {

    return [
      {
        "key": "saintHenryBishopAndMartyr",
        "name": "Saint Henry, Bishop and Martyr",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 19 }),
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
        "key": "saintsCyrilMonkAndMethodiusBishop",
        "name": "Saints Cyril, Monk and Methodius, Bishop, Patrons of Europe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 14 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ Titles.PATRON_OF_EUROPE ]
          }
        }
      },
      {
        "key": "saintCatherineOfSienaVirginAndDoctor",
        "name": "Saint Catherine of Siena, Virgin and Doctor",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 29 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ 
              Titles.PATRON_OF_EUROPE,
              Titles.DOCTOR_OF_THE_CHURCH
            ]
          }
        }
      },
      {
        "key": "saintEricIxMartyr",
        "name": "Saint Eric IX, Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 18 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedHemmingBishop",
        "name": "Blessed Hemming, Bishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 22 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintUrsulaLedochowskaVirgin",
        "name": "Saint Ursula Ledochowska, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 29 }),
        "data": {}
      },
      {
        "key": "blessedElisabethHesselbaldVirgin",
        "name": "Blessed Elisabeth Hesselbald, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 4 }),
        "data": {}
      },
      {
        "key": "saintJosemariaEscrivaDeBalaguerPriest",
        "name": "Saint Josemaria Escriva de Balaguer, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 26 }),
        "data": {}
      },
      {
        "key": "saintCanuteMartyr",
        "name": "Saint Canute, Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 10 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintBenedictAbbot",
        "name": "Saint Benedict of Nursia, Abbot, Patron of Europe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 11 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ Titles.PATRON_OF_EUROPE ]
          }
        }
      },
      {
        "key": "saintThorlacBishop",
        "name": "Saint Thorlac, Bishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 20 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintBrigittaReligious",
        "name": "Saint Brigitta, Religious",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 23 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintOlafIiMartyr",
        "name": "Saint Olaf II, Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 29 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr",
        "name": "Saint Teresa Benedicta of The Cross (Edith Stein), Virgin and Martyr, Patron of Europe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 9 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ Titles.PATRON_OF_EUROPE ]
          }
        }
      },
      {
        "key": "blessedNicolasStenoBishop",
        "name": "Blessed Nicolas Steno, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 25 }),
        "data": {}
      }
    ];
  }
};


