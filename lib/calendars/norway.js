var _ = require('lodash'),
    moment = require('moment'),
    range = require('moment-range'),
    Utils = require('../utils'),
    Titles = require('../../data/titles'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Seasons = require('../seasons'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {
    return [
      {
        "key": "saintThorfinnBishop",
        "name": "Saint Thorfinn, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 8 }),
        "data": {}
      },
      {
        "key": "saintHenryBishopAndMartyr",
        "name": "Saint Henry, Bishop and Martyr",
        "type": Types[5],
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
        "key": "saintEysteinnBishop",
        "name": "Saint Eysteinn, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 26 }),
        "data": {}
      },
      {
        "key": "saintsCyrilMonkAndMethodiusBishop",
        "name": "Saints Cyril, Monk and Methodius, Bishop, Patrons of Europe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 14 }),
        "data": {
          "meta": {
            "titles": [ 
              Titles.PATRON_OF_EUROPE
            ]
          }
        }
      },
      {
        "key": "saintMagnusMartyr",
        "name": "Saint Magnus, Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 16 }),
        "data": {}
      },
      {
        "key": "saintCatherineOfSienaVirginAndDoctorOfTheChurch",
        "name": "Saint Catherine of Siena, Virgin and Doctor of The Church, Patron of Europe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 29 }),
        "data": {
          "meta": {
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
        "data": {}
      },
      {
        "key": "saintSunnivaVirginAndMartyr",
        "name": "Saint Sunniva, Virgin and Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 8 }),
        "data": {}
      },
      {
        "key": "saintCanuteMartyr",
        "name": "Saint Canute, Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 10 }),
        "data": {}
      },
      {
        "key": "saintBenedictAbbot",
        "name": "Saint Benedict of Nursia, Abbot, Patron of Europe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 11 }),
        "data": {
          "meta": {
            "titles": [ 
              Titles.PATRON_OF_EUROPE
            ]
          }
        }
      },
      {
        "key": "saintSwithunBishop",
        "name": "Saint Swithun, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 15 }),
        "data": {}
      },
      {
        "key": "saintThorlacBishop",
        "name": "Saint Thorlac, Bishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 20 }),
        "data": {}
      },
      {
        "key": "saintBrigittaReligious",
        "name": "Saint Brigitta, Religious",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 23 }),
        "data": {}
      },
      {
        "key": "saintOlafIiMartyr",
        "name": "Saint Olaf II, Martyr",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 29 }),
        "data": {}
      },
      {
        "key": "saintTeresaBenedictaOfTheCrossVirginAndMartyr",
        "name": "Saint Teresa Benedicta of The Cross (Edith Stein), Virgin & Martyr, Patron of Europe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 9 }),
        "data": {
          "meta": {
            "titles": [ 
              Titles.PATRON_OF_EUROPE
            ]
          }
        }
      },
      {
        "key": "blessedNicolasStenoBishop",
        "name": "Blessed Nicolas Steno, Bishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 25 }),
        "data": {}
      }
    ];
  }
};
