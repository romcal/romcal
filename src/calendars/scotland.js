import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {

  let _dates = [
    {
      "key": "saintKentigern",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 13 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
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
      "key": "saintJohnOgilvie",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 2, day: 10 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintPatrickBishop",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 2, day: 17 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
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
      "key": "saintColumba",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 9 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
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
      "key": "saintNinian",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 16 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintMargaretOfScotland",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 10, day: 16 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintAndrewTheApostle",
      "type": Types.SOLEMNITY,
      "moment": moment.utc({ year: year, month: 10, day: 30 }),
      "data": {
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
