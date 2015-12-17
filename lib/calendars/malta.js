var _ = require('lodash'),
    moment = require('moment'),
    range = require('moment-range'),
    Utils = require('../utils'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Titles = require('../../data/titles'),
    Seasons = require('../seasons'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {
    return [
      {
        "key": "saintPubliusBishop",
        "name": "Saint Publius, Bishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 22 }),
        "data": {}
      },
      {
        "key": "shipwreckOfSaintPaulApostle",
        "name": "Shipwreck of Saint Paul, Apostle",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 10 }),
        "data": {}
      },
      {
        "key": "saintsCyrilMonkAndMethodiusBishop",
        "name": "Saints Cyril, Monk And Methodius, Bishop, Patrons of Europe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 14 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ 
              Titles.PATRON_OF_EUROPE 
            ]
          }
        }
      },
      {
        "key": "blessedMariaAdeodataPisaniVirgin",
        "name": "Blessed Maria Adeodata Pisani, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 25 }),
        "data": {}
      },
      {
        "key": "ourLadyOfSorrows",
        "name": "Our Lady of Sorrows",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 15 }),
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
              Titles.DOCTOR_OF_THE_CHURCH,
              Titles.PATRON_OF_EUROPE
            ]
          }
        }
      },
      {
        "key": "saintPiusVPope",
        "name": "Saint Pius V, Pope",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 30 }),
        "data": {}
      },
      {
        "key": "saintGeorgePrecaPriest",
        "name": "Saint George Preca, Priest",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 9 }),
        "data": {}
      },
      {
        "key": "blessedNazjuFalzon",
        "name": "Blessed Nazju Falzon",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 1 }),
        "data": {}
      },
      {
        "key": "saintBenedictAbbot",
        "name": "Saint Benedict of Nursia, Abbot, Patron of Europe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 11 }),
        "data": {}
      },
      {
        "key": "ourLadyOfMountCarmel",
        "name": "Our Lady Of Mount Carmel",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 16 }),
        "data": {}
      },
      {
        "key": "saintBirgittaReligious",
        "name": "Saint Birgitta, Religious",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 23 }),
        "data": {}
      },
      {
        "key": "saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr",
        "name": "Saint Teresa Benedicta of The Cross (Edith Stein), Virgin and Martyr, Patron of Europe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 9 }),
        "data": {}
      },
      {
        "key": "birthOfTheBlessedVirginMary",
        "name": "Birth of the Blessed Virgin Mary",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 8 }),
        "data": {}
      },
      {
        "key": "saintCatherineOfAlexandriaVirginAndMartyr",
        "name": "Saint Catherine of Alexandria, Virgin and Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 25 }),
        "data": {}
      }
    ];
  }
};
