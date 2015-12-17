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
        "key": "saintTeiloBishop",
        "name": "Saint Teilo, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 9 }),
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
        "key": "saintDavidBishop",
        "name": "Saint David, Bishop",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 1 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintBeunoAbbot",
        "name": "Saint Beuno, Abbot",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 20 }),
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
        "key": "saintAsaphBishop",
        "name": "Saint Asaph, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 5 }),
        "data": {}
      },
      {
        "key": "saintsAlbanJuliusAndAaronMartyrs",
        "name": "Saints Alban, Julius and Aaron, Martyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 20 }),
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
        "key": "saintJohnJonesPriestAndMartyr",
        "name": "Saint John Jones, Priest and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 12 }),
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
        "key": "saintsPhilipEvansAndJohnLloydPriestsAndMartyrs",
        "name": "Saints Philip Evans and John Lloyd, Priests and Martyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 25 }),
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
        "key": "saintGermanusOfAuxerreBishop",
        "name": "Saint Germanus of Auxerre, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 3 }),
        "data": {}
      },
      {
        "key": "saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr",
        "name": "Saint Teresa Benedicta of The Cross (Edith Stein), Virgin and Martyr, Patron of Europe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 9 }),
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
        "key": "saintDavidLewisPriestAndMartyr",
        "name": "Saint David Lewis, Priest and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 26 }),
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
        "key": "saintDeiniolBishop",
        "name": "Saint Deiniol, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 11 }),
        "data": {}
      },
      {
        "key": "saintRichardGwynMartyr",
        "name": "Saint Richard Gwyn, Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 16 }),
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
        "key": "theSixWelshMartyrsAndCompanions",
        "name": "The Six Welsh Martyrs and Companions",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 25 }),
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
        "key": "saintWinefrideVirgin",
        "name": "Saint Winefride, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 3 }),
        "data": {}
      },
      {
        "key": "saintIlltudAbbot",
        "name": "Saint Illtud, Abbot",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 6 }),
        "data": {}
      },
      {
        "key": "allSaintsOfWales",
        "name": "All Saints of Wales",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 8 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintDubriciusBishop",
        "name": "Saint Dubricius, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 14 }),
        "data": {
          "meta": {
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "saintJohnRobertsPriestAndMartyr",
        "name": "Saint John Roberts, Priest and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 10 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.RED,
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      // In England and Wales when the celebration falls on either a 
      // Saturday or a Monday it is transferred to the Sunday.
      // Replaces 20th Sunday in Ordinary Time when it falls on a Sunday.
      {
        "key": "peterAndPaulApostles",
        "name": "Saints Peter and Paul, Apostles",
        "type": Types[0],
        "moment": (function( y ) {
          var date = moment.utc({ year: y, month: 5, day: 29 });
          if ( _.eq( date.day(), 1 ) ) {
            return date.subtract( 1, 'days');
          }
          else if ( _.eq( date.day(), 6 ) ) {
            return date.add( 1, 'days' ).startOf('day');
          }
          else {
            return date;
          }
        }( arguments[0] )),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.RED
          }
        }
      },
      // In England and Wales when the celebration falls on either a 
      // Saturday or a Monday it is transferred to the Sunday.
      // Replaces 20th Sunday in Ordinary Time when it falls on a Sunday.
      {
        "key": "assumption",
        "name": "The Assumption of the Blessed Virgin Mary",
        "type": Types[0],
        "moment": (function( y ) {
          var date = moment.utc({ year: y, month: 7, day: 15 });
          if ( _.eq( date.day(), 1 ) ) {
            return date.subtract( 1, 'days');
          }
          else if ( _.eq( date.day(), 6 ) ) {
            return date.add( 1, 'weeks' ).startOf('week');
          }
          else {
            return date;
          }
        }( arguments[0] )),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      }
    ];
  }
};
