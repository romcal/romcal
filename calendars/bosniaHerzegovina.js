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
        "key": "saintScholasticaVirgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 9 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedAloysiusStepinacBishopAndMartyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 10 }),
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
        "key": "saintsCyrilMonkAndMethodiusBishop",
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
        "key": "blessedOsannaOfCattaroVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 27 }),
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
        "key": "blessedIvanMerz",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 10 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintLeopoldMandicPriest",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 12 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedMaryOfJesusCrucifiedPetkovicVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 9 }),
        "data": {}
      },
      {
        "key": "saintBenedictOfNursiaAbbot",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 11 }),
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
        "key": "ourLadyOfBistrica",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 13 }),
        "data": {}
      },
      {
        "key": "saintElijahProphet",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 20 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
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
        "key": "saintClementOfOhridAndGorazdBishopsAndCompanions",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 27 }),
        "data": {}
      },
      {
        "key": "blessedAugustinKazoticBishopAndMartyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 3 }),
        "data": {
          "titles": [
            Titles.MARTYR
          ]
        }
      },
      {
        "key": "saintRoch",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 16 }),
        "data": {}
      },
      {
        "key": "saintMarkoKrizinPriestAndMartyr",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 7 }),
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
        "key": "blessedGraziaOfCattaro",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 27 }),
        "data": {}
      },
      {
        "key": "saintNikolaTavelicPriestAndMartyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 14 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.RED,
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      // Monday after Pentecost
      {
        "key": "maryMotherOfTheChurch",
        "type": Types[6],
        "moment": ( function( y ) {
          return Dates.pentecostSunday( y ).add( 1, 'days');
        }( arguments[0] )),
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


