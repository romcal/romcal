import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {

  let _dates = [
    {
      "key": "blessedKuriakoseEliasChavaraPriest",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 3 }),
      "data": {}
    },
    {
      "key": "blessedJosephVazPriest",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 16 }),
      "data": {}
    },
    {
      "key": "saintJohnDeBritoPriestAndMartyr",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 1, day: 4 }),
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
      "key": "saintGonsaloGarciaMartyr",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 1, day: 6 }),
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
      "key": "blessedMariaTheresaChiramelVirgin",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 8 }),
      "data": {}
    },
    {
      "key": "saintThomasTheApostle",
      "type": Types.SOLEMNITY,
      "moment": moment.utc({ year: year, month: 6, day: 3 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintAlphonsaOfTheImmaculateConceptionVirgin",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 28 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintTeresaOfCalcuttaReligious",
      "type": Types.SOLEMNITY,
      "moment": moment.utc({ year: year, month: 8, day: 5 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintFrancisXavierPriest",
      "type": Types.SOLEMNITY,
      "moment": moment.utc({ year: year, month: 11, day: 3 }),
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
