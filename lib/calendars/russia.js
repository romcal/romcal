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
        "key": "blessedGeorgeMatulewiczBishop",
        "name": "Blessed George Matulewicz, Bishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 27 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedBolestawaMariaLamentVirgin",
        "name": "Blessed Bolestawa Maria Lament, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 29 }),
        "data": {}
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
        "key": "saintGeorgeMartyr",
        "name": "Saint George, Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 6 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintTheodosiusOfTheCavesAbbot",
        "name": "Saint Theodosius of The Caves, Abbot",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 16 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "ourLadyOfPerpetualHelpOrBlessedLeonidFeodorovPriestAndMartyr",
        "name": "Our Lady of Perpetual Help Or Blessed Leonid Feodorov, Priest and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 27 }),
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
        "key": "saintBirgittaReligious",
        "name": "Saint Birgitta, Religious",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 23 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintAnthonyOfTheCavesMonk",
        "name": "Saint Anthony of The Caves, Monk",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 24 }),
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
        "key": "saintsBorisAndGlebMartyrs",
        "name": "Saints Boris and Gleb, Martyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 5 }),
        "data": {}
      },
      {
        "key": "saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr",
        "name": "Saint Teresa Benedicta of The Cross (Edith Stein), Virgin and Martyr",
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
        "key": "ourLadyOfVladimir",
        "name": "Our Lady of Vladimir",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 7 }),
        "data": {}
      },
      {
        "key": "saintFaustinaKowalskaVirgin",
        "name": "Saint Faustina Kowalska, Virgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 5 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedOleksiyZarytskyiPriestAndMartyr",
        "name": "Blessed Oleksiy Zarytskyi, Priest and Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 30 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "ourLadyOfTheGateOfDawn",
        "name": "Our Lady of The Gate of Dawn",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 16 }),
        "data": {}
      },
      {
        "key": "saintRafatKalinowskiPriest",
        "name": "Saint Rafat Kalinowski, Priest",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 20 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintAndrewTheApostlePatronOfRussia",
        "name": "Saint Andrew The Apostle, Patron of Russia",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 30 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintBarbaraVirginAndMartyr",
        "name": "Saint Barbara, Virgin and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 4 }),
        "data": {}
      },
      {
        "key": "saintNicholasBishop",
        "name": "Saint Nicholas, Bishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 6 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      }
    ];
  }
};
