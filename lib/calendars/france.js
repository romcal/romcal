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
        "key": "saintGenevieveVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 3 }),
        "data": {}
      },
      {
        "key": "saintRemigiusBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 15 }),
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
        "key": "saintBernadetteSoubirousVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 19 }),
        "data": {}
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
        "key": "saintIvoPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 20 }),
        "data": {}
      },
      {
        "key": "saintJoanOfArcVirginSecondaryPatronessOfFrance",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 30 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintPothinusBishopSaintBlAndinaVirginAndTheirCompanionsMartyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 2 }),
        "data": {}
      },
      {
        "key": "saintClotilde",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 5 }),
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
        "key": "saintBrigittaReligious",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 23 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr",
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
        "key": "assumptionOfTheBlessedVirginMaryPrincipalPatronessOfFrance",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 15 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintCaesariusOfArlesBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 26 }),
        "data": {}
      },
      {
        "key": "saintThereseOfTheChildJesusVirginSecondaryPatronessOfFrance",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 1 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintJohnXxiiiPope",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 11 }),
        "data": {}
      },
      {
        "key": "saintJohnPaulIiPope",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 22 }),
        "data": {}
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


