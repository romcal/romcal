
import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {

  let _dates = [
    {
      "key": "saintTeiloBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 1, day: 9 }),
      "data": {}
    },
    {
      "key": "saintsCyrilMonkAndMethodiusBishop",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 1, day: 14 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [ Titles.PATRON_OF_EUROPE ]
        }
      }
    },
    {
      "key": "saintDavidBishop",
      "type": Types.SOLEMNITY,
      "moment": moment.utc({ year: year, month: 2, day: 1 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintBeunoAbbot",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 3, day: 20 }),
      "data": {}
    },
    {
      "key": "saintCatherineOfSienaVirginAndDoctorOfTheChurch",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 3, day: 29 }),
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
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 5 }),
      "data": {}
    },
    {
      "key": "saintsAlbanJuliusAndAaronMartyrs",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 20 }),
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
      "key": "saintBenedictOfNursiaAbbot",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 6, day: 11 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [ Titles.PATRON_OF_EUROPE ]
        }
      }
    },
    {
      "key": "saintJohnJonesPriestAndMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 12 }),
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
      "key": "saintBridgetOfSwedenReligious",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 6, day: 23 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [ Titles.PATRON_OF_EUROPE ]
        }
      }
    },
    {
      "key": "saintsPhilipEvansAndJohnLloydPriestsAndMartyrs",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 25 }),
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
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 7, day: 3 }),
      "data": {}
    },
    {
      "key": "saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 7, day: 9 }),
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
      "key": "saintDavidLewisPriestAndMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 7, day: 26 }),
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
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 11 }),
      "data": {}
    },
    {
      "key": "saintRichardGwynMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 16 }),
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
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 9, day: 25 }),
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
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 10, day: 3 }),
      "data": {}
    },
    {
      "key": "saintIlltudAbbot",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 10, day: 6 }),
      "data": {}
    },
    // In England and Wales when All Saints (1 November) falls on a Saturday
    // and is transferred to Sunday, All Souls is transferred to Monday 3 November.
    // Like Ash Wednesday, All Souls is, technically, without rank.
    // However, in countries (not England & Wales) where it falls
    // on a Sunday it replaces the Sunday.
    {
      "key": "allSaints",
      "type": Types.SOLEMNITY,
      "moment": ( y => {
        let date = moment.utc({ year: y, month: 10, day: 1 });
        if ( _.eq(date.day(), 6 )) {
          return moment.utc({ year: y, month: 10, day: 2 });
        }
        else {
          return date;
        }
      })( year ),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "allSouls",
      "type": Types.FEAST,
      "moment": ( y => {
        let date = moment.utc({ year: y, month: 10, day: 1 });
        if ( _.eq( date.day(), 6 ) ) { // If All Saints is on Saturday
          // Then All Souls will be on Monday because All Saints will be moved to Sunday on the rule above
          return moment.utc({ year: y, month: 10, day: 3 });
        }
        else { // Else, All Souls is the day after All Saints
          return moment.utc({ year: y, month: 10, day: 2 });
        }
      })( year ),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "allSaintsOfWales",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 10, day: 6 }),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintDubriciusBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 10, day: 14 }),
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
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 11, day: 10 }),
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
      "type": Types.SOLEMNITY,
      "moment": ( y => {
        let date = moment.utc({ year: y, month: 5, day: 29 });
        if ( _.eq(date.day(), 1 )) {
          return date.subtract( 1, 'days');
        }
        else if ( _.eq(date.day(), 6 )) {
          return date.add( 1, 'days' ).startOf('day');
        }
        else {
          return date;
        }
      })( year ),
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
      "type": Types.SOLEMNITY,
      "moment": ( y => {
        let date = moment.utc({ year: y, month: 7, day: 15 });
        if ( _.eq(date.day(), 1 )) {
          return date.subtract( 1, 'days');
        }
        else if ( _.eq(date.day(), 6 )) {
          return date.add( 1, 'weeks' ).startOf('week');
        }
        else {
          return date;
        }
      })( year ),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    }
  ];

  // Get localized celebration names
  return Utils.localizeDates(_dates);
};

export {
  dates
};
