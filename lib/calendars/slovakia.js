var _ = require('lodash'),
    moment = require('moment'),
    range = require('moment-range'),
    Utils = require('../utils'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Dates = require('../dates'),
    Titles = require('../../data/titles'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {
    return [
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
        "key": "saintAdalbertBishopAndMartyr",
        "name": "Saint Adalbert, Bishop and Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: y, month: 3, day: 23 }),
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
        "key": "saintGeorgeMartyr",
        "name": "Saint George, Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 24 }),
        "data": {}
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
        "key": "blessedSaraSalkahaziVirginAndMartyr",
        "name": "Blessed Sara Salkahazi, Virgin and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 11 }),
        "data": {}
      },
      {
        "key": "saintJohnNepomucenePriestAndMartyr",
        "name": "Saint John Nepomucene, Priest and Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 16 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintLadislaus",
        "name": "Saint Ladislaus",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 27 }),
        "data": {}
      },
      {
        "key": "visitationOfTheBlessedVirginMary",
        "name": "Visitation of The Blessed Virgin Mary",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 2 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintsCyrilAndMethodiusSlavicMissionaries",
        "name": "Saints Cyril and Methodius, Slavic Missionaries",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 5 }),
        "data": {}
      },
      {
        "key": "saintAnthonyZaccariaPriest",
        "name": "Saint Anthony Zaccaria, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 7 }),
        "data": {}
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
        "key": "saintsAndrewZoerardusAndBenedictEremites",
        "name": "Saints Andrew Zoerardus and Benedict, eremites",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 17 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
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
        "key": "saintGorazdAndCompanions",
        "name": "Saint Gorazd and Companions",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 27 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedZdenkaSchelingovaVirginAndMartyr",
        "name": "Blessed Zdenka Schelingova, Virgin and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 30 }),
        "data": {}
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
        "key": "saintsMarkoKrizinMelicharGrodeckiAndStephenPongracPriestsAndMartyrs",
        "name": "Saints Marko Krizin, Melichar Grodecki and Stephen Pongrac, Priests and Martyrs",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 7 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "ourLadyOfSOrrowsPatronessOfSlovakia",
        "name": "Our Lady of SOrrows, Patroness of Slovakia",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 15 }),
        "data": {}
      },
      {
        "key": "saintEmeric",
        "name": "Saint Emeric",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 5 }),
        "data": {}
      },
      {
        "key": "ourLordJesusChristTheEternalHighPriest",
        "name": "Our Lord Jesus Christ, The Eternal High Priest",
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
