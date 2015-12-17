var _ = require('lodash'),
    moment = require('moment'),
    range = require('moment-range'),
    Utils = require('../utils'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Seasons = require('../seasons'),
    Titles = require('../../data/titles'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {
    return [
      {
        "key": "blessedMarcelinaDarowskaReligious",
        "name": "Blessed Marcelina Darowska, Religious",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 5 }),
        "data": {}
      },
      {
        "key": "blessedBronislawMarkiewiczPriest",
        "name": "Blessed Bronislaw Markiewicz, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 30 }),
        "data": {}
      },
      {
        "key": "saintsCyrilMonkAndMethodius",
        "name": "Saints Cyril, Monk and Methodius",
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
        "key": "maryMotherOfTheChurch",
        "name": "Mary, Mother of The Church",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 13 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintCatherineOfSienaVirginAndDoctorOfTheChurch",
        "name": "Saint Catherine of Siena, Virgin and Doctor of The Church, Patron of Europe",
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
        "key": "saintAndrewBobolaPriestAndMartyr",
        "name": "Saint Andrew Bobola, Priest and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 16 }),
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
        "key": "saintJohnNepomucenePriestAndMartyr",
        "name": "Saint John Nepomucene, Priest and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 21 }),
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
        "key": "saintAlbertChmielowskiReligious",
        "name": "Saint Albert Chmielowski, Religious",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 17 }),
        "data": {}
      },
      {
        "key": "saintZygmuntGorazdowskiPriest",
        "name": "Saint Zygmunt Gorazdowski, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 26 }),
        "data": {}
      },
      {
        "key": "saintJohnOfDuklaPriest",
        "name": "Saint John of Dukla, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 8 }),
        "data": {}
      },
      {
        "key": "saintHedwigOfPoland",
        "name": "Saint Hedwig of Poland",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 18 }),
        "data": {}
      },
      {
        "key": "saintOlga",
        "name": "Saint Olga",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 24 }),
        "data": {}
      },
      {
        "key": "saintVladimirTheGreat",
        "name": "Saint Vladimir The Great",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 28 }),
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
        "key": "saintBirgitta",
        "name": "Saint Birgitta",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 23 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintTeresaBenedictaOfTheCrossEdithStein",
        "name": "Saint Teresa Benedicta of The Cross (Edith Stein)",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 9 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "ourLadyOfCzestochowa",
        "name": "Our Lady of Czestochowa",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 26 }),
        "data": {}
      },
      {
        "key": "blessedWtadystawBtDzinskiPriestAndCompanionsMartyrs",
        "name": "Blessed Wtadystaw Btądzinski, Priest and Companions, Martyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 9 }),
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
        "key": "saintStanislausKostkaReligious",
        "name": "Saint Stanislaus Kostka, Religious",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 18 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintJozefBilczewskiBishop",
        "name": "Saint Jozef Bilczewski, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 23 }),
        "data": {}
      },
      {
        "key": "saintJohnPaulIiPope",
        "name": "Saint John Paul II, Pope",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 22 }),
        "data": {}
      }
    ];
  }
};
