var _ = require('lodash'),
    moment = require('moment'), 
    range = require('moment-range'),
    Path = require('path'),
    Utils = require( Path.join( __dirname, '../lib/utils' )),
    Dates = require( Path.join( __dirname, '../lib/dates' )),
    LiturgicalColors = require( Path.join( __dirname, '../data/liturgicalColors' )),
    Titles = require( Path.join( __dirname, '../data/titles' )),
    Types = require( Path.join( __dirname, '../data/types' )).types;

module.exports = {
  dates: function() {
    
    var dates = [
      {
        "key": "blessedMarcelinaDarowskaReligious",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 5 }),
        "data": {}
      },
      {
        "key": "blessedBronislawMarkiewiczPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 30 }),
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
        "key": "maryMotherOfTheChurch",
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
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 17 }),
        "data": {}
      },
      {
        "key": "saintZygmuntGorazdowskiPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 26 }),
        "data": {}
      },
      {
        "key": "saintJohnOfDuklaPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 8 }),
        "data": {}
      },
      {
        "key": "saintHedwigOfPoland",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 18 }),
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
        "key": "saintBenedictOfNursiaAbbot",
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
        "key": "blessedWtadystawBtDzinskiPriestAndCompanionsMartyrs",
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
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 23 }),
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
