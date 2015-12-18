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

    var dates = [
      {
        "key": "blessedGeorgeMatulewiczBishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 27 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedBoleslawaMariaLamentVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 29 }),
        "data": {}
      },
      {
        "key": "saintsCyrilMonkAndMethodiusBishop",
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
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 27 }),
        "data": {}
      },
      {
        "key": "saintBenedictAbbot",
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
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 24 }),
        "data": {}
      },
      {
        "key": "saintOlga",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 24 }),
        "data": {}
      },
      {
        "key": "saintVladimirTheGreat",
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
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 5 }),
        "data": {}
      },
      {
        "key": "saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr",
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
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 26 }),
        "data": {}
      },
      {
        "key": "ourLadyOfVladimir",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 7 }),
        "data": {}
      },
      {
        "key": "saintFaustinaKowalskaVirgin",
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
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 16 }),
        "data": {}
      },
      {
        "key": "saintRafalKalinowskiPriest",
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
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 4 }),
        "data": {}
      },
      {
        "key": "saintNicholasBishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 6 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      }
    ];

    // Get localized celebration names
    return _.map( dates, function( date ) {
      date.name = Utils.localize({
        key: 'national.' + date.key 
      });
      return date;
    });
  }
};
