import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {

  let _dates = [
    {
      "key": "saintPubliusBishop",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 22 }),
      "data": {}
    },
    {
      "key": "shipwreckOfSaintPaulApostle",
      "type": Types.SOLEMNITY,
      "moment": moment.utc({ year: year, month: 1, day: 10 }),
      "data": {}
    },
    {
      "key": "saintsCyrilMonkAndMethodiusBishop",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 1, day: 14 }),
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
      "key": "blessedMariaAdeodataPisaniVirgin",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 1, day: 25 }),
      "data": {}
    },
    {
      "key": "ourLadyOfSorrows",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 3, day: 15 }),
      "data": {}
    },
    {
      "key": "saintCatherineOfSienaVirginAndDoctorOfTheChurch",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 3, day: 29 }),
      "data": {
        "meta": {
          "titles": [
            Titles.DOCTOR_OF_THE_CHURCH,
            Titles.PATRON_OF_EUROPE
          ]
        }
      }
    },
    {
      "key": "saintPiusVPope",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 3, day: 30 }),
      "data": {}
    },
    {
      "key": "saintGeorgePrecaPriest",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 4, day: 9 }),
      "data": {}
    },
    {
      "key": "blessedNazjuFalzon",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 1 }),
      "data": {}
    },
    {
      "key": "saintBenedictOfNursiaAbbot",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 6, day: 11 }),
      "data": {}
    },
    {
      "key": "ourLadyOfMountCarmel",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 16 }),
      "data": {}
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
      "key": "saintCatherineOfAlexandriaVirginAndMartyr",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 10, day: 25 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.RED,
          "titles": [
            Titles.MARTYR
          ]
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
