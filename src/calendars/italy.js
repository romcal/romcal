import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {

let _dates = [
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
      "key": "saintNorbertBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 6 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintBarnabasTheApostle",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 11 }),
      "data": {}
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
      "key": "saintMaryMagdalene",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 6, day: 22 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintBridgetOfSwedenReligious",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 6, day: 23 }),
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
      "key": "saintFrancisOfAssisi",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 9, day: 4 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "popeSaintJohnXXIII",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 11 }),
      "data": {}
    },
    {
      "key": "popeSaintJohnPaulII",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 22 }),
      "data": {}
    },
    {
      "key": "maryMotherOfTheChurch",
      "type": Types.MEMORIAL,
      "moment": Dates.pentecostSunday( year ).add( 1, 'days'),
      "data": {}
    }
  ];

  // Get localized celebration names
  return Utils.localizeDates(_dates);
};

export {
  dates
};
