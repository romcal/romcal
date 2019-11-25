import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {

  let _dates = [
    {
      "key": "santoNinoInfantJesus",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 0, day: 9 }),
      "data": {}
    },
    {
      "key": "saintPaulMikiAndCompanionsMartyrs",
      "type": Types[5],
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
      "key": "saintPedroCalungsodMartyr",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 3, day: 2 }),
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
      "key": "saintIsidoreTheFarmer",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 4, day: 15 }),
      "data": {}
    },
    {
      "key": "saintRoch",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 7, day: 16 }),
      "data": {}
    },
    {
      "key": "saintEzekielMorenoBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 7, day: 19 }),
      "data": {}
    },
    {
      "key": "saintLorenzoRuizAndCompanionsMartyrs",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 8, day: 28 }),
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
      "key": "immaculateConceptionOfTheBlessedVirginMaryPrincipalPatronessOfThePhilippines",
      "type": Types[0],
      "moment": moment.utc({ year: year, month: 11, day: 8 }),
      "data": {}
    }
  ];

  // Get localized celebration names
  return Utils.localizeDates(_dates);
};

export {
  dates
};
