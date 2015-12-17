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
            "titles": [ 
              Titles.PATRON_OF_EUROPE 
            ]
          }
        }
      },
      {
        "key": "saintCyrilOfJerusalemBishopAndDoctor",
        "name": "Saint Cyril of Jerusalem, Bishop and Doctor",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 18 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [
              Titles.DOCTOR_OF_THE_CHURCH
            ]
          }
        }
      },
      {
        "key": "saintAdalbertBishopAndMartyr",
        "name": "Saint Adalbert, Bishop and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 22 }),
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
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 23 }),
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
        "key": "saintIrene",
        "name": "Saint Irene",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 5 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedVirginMaryMotherOfTheChurch",
        "name": "Blessed Virgin Mary, Mother of The Church",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 13 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "ourLadyOfFatima",
        "name": "Our Lady of Fatima",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 15 }),
        "data": {}
      },
      {
        "key": "saintCyrilOfAlexandriaBishopAndDoctor",
        "name": "Saint Cyril of Alexandria, Bishop and Doctor",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 27 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [
              Titles.DOCTOR_OF_THE_CHURCH
            ]
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
        "key": "saintMarina",
        "name": "Saint Marina",
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
        "key": "saintPantaleon",
        "name": "Saint Pantaleon",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 27 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintLydiaOfPhilippi",
        "name": "Saint Lydia of Philippi",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 3 }),
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
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintsCosmasAndDamian",
        "name": "Saints Cosmas and Damian",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 26 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintDionysiusTheAreopagite",
        "name": "Saint Dionysius The Areopagite",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 3 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintDemetrius",
        "name": "Saint Demetrius",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 26 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "presentationOfTheBlessedVirginMary",
        "name": "Presentation of The Blessed Virgin Mary",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 21 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintJohnDamasceneOrSaintBarbara",
        "name": "Saint John Damascene Or Saint Barbara",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 4 }),
        "data": {}
      },
      {
        "key": "saintNicholas",
        "name": "Saint Nicholas",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 6 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintSpyridon",
        "name": "Saint Spyridon",
        "type": Types[5],
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
