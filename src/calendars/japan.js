import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {

  let _dates = [
    {
      "key": "saintPaulMikiAndCompanionsMartyrs",
      "type": Types.FEAST,
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
      "key": "discoveryOfTheHiddenChristians",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 2, day: 17 }),
      "data": {}
    },
    {
      "key": "blessedPeterKibePriestAndCompanionsMartyrs",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 1 }),
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
      "key": "205BlessedMartyrsOfJapan",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 10 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintThomasRokuzayemonPriestAndCompanionsMartyrs",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 28 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintFrancisXavierPriest",
      "type": Types.FEAST,
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
