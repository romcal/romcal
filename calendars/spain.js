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
        "key": "saintEulogiusOfCordobaBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 9 }),
        "data": {}
      },
      {
        "key": "saintsFructuosusBishopAndAuguriusAndEulogiusDeaconsMartyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 20 }),
        "data": {
          "meta": {
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "saintVincentDeaconAndMartyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 22 }),
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
        "key": "saintIldephonsusOfToledoBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 23 }),
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
        "key": "saintHermenegildMartyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 13 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.RED
          }
        }
      },
      {
        "key": "saintIsidoreOfSevilleBishopAndDoctorOfTheChurch",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 26 }),
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
        "key": "saintJohnOfAvilaPriest",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 10 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintIsidoreTheFarmer",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 15 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintPaschalBaylon",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 17 }),
        "data": {}
      },
      {
        "key": "saintJoaquinaVedruna",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 22 }),
        "data": {}
      },
      {
        "key": "saintFerdinand",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 30 }),
        "data": {}
      },
      {
        "key": "saintMariaMicaelaOfTheBlessedSacramentVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 15 }),
        "data": {}
      },
      {
        "key": "saintPelagiusMartyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 26 }),
        "data": {
          "meta": {
            "titles": [
              Titles.MARTYR
            ]
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
        "key": "ourLadyOfMountCarmel",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 16 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintBridgetOfSweedenReligious",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 23 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ Titles.PATRON_OF_EUROPE ]
          }
        }
      },
      {
        "key": "saintJamesApostlePatronOfSpain",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 25 }),
        "data": {}
      },
      {
        "key": "saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 9 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.RED,
            "titles": [
              Titles.MARTYR,
              Titles.PATRON_OF_EUROPE
            ]
          }
        }
      },
      {
        "key": "saintEzequielMorenoBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 19 }),
        "data": {}
      },
      {
        "key": "saintTeresaOfJesusJornetEIbarsVirgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 26 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintFrancisBorgiaPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 3 }),
        "data": {}
      },
      {
        "key": "saintThomasOfVillanovaBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 10 }),
        "data": {}
      },
      {
        "key": "saintSoledadTorresAcostaVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 11 }),
        "data": {}
      },
      {
        "key": "ourLadyOfThePillar",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 12 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintTeresaOfJesusVirginAndDoctorOfTheChurch",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 15 }),
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
        "key": "saintPeterOfAlcantaraPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 19 }),
        "data": {}
      },
      {
        "key": "saintLeanderBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 13 }),
        "data": {}
      },
      {
        "key": "saintEulaliaOfMeridaVirginAndMartyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 10 }),
        "data": {}
      },
      {
        "key": "saintJohnOfTheCrossDoctorOfTheChurch",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 14 }),
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
        "key": "jesusChristTheEternalHighPriest",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 16 }),
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
