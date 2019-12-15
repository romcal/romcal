import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {

  let _dates = [
    {
      "key": "saintThorfinnBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 8 }),
      "data": {}
    },
    {
      "key": "saintHenryBishopAndMartyr",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 19 }),
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
      "key": "saintEysteinnBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 26 }),
      "data": {}
    },
    {
      "key": "saintsCyrilMonkAndMethodiusBishop",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 1, day: 14 }),
      "data": {
        "meta": {
          "titles": [
            Titles.PATRON_OF_EUROPE
          ]
        }
      }
    },
    {
      "key": "saintMagnusMartyr",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 3, day: 16 }),
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
      "key": "saintCatherineOfSienaVirginAndDoctorOfTheChurch",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 3, day: 29 }),
      "data": {
        "meta": {
          "titles": [
            Titles.PATRON_OF_EUROPE,
            Titles.DOCTOR_OF_THE_CHURCH
          ]
        }
      }
    },
    {
      "key": "saintEricIxMartyr",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 18 }),
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
      "key": "saintSunnivaVirginAndMartyr",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 8 }),
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
      "key": "saintCanuteMartyr",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 10 }),
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
          "titles": [
            Titles.PATRON_OF_EUROPE
          ]
        }
      }
    },
    {
      "key": "saintSwithunBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 15 }),
      "data": {}
    },
    {
      "key": "saintThorlacBishop",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 20 }),
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
      "key": "saintOlafIiMartyr",
      "type": Types.SOLEMNITY,
      "moment": moment.utc({ year: year, month: 4, day: 29 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [
            Titles.MARTYR
          ]
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
      "key": "blessedNicolasStenoBishop",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 10, day: 25 }),
      "data": {}
    }
  ];

  // Get localized celebration names
  return Utils.localizeDates(_dates);
};

export {
  dates
};
