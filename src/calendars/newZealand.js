import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {

  let _dates = [
    {
      "key": "waitangiDay",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 1, day: 6 }),
      "data": {}
    },
    {
      "key": "saintPaulMikiAndCompanionsMartyrs",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 1, day: 7 }),
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
      "key": "saintPatrickBishop",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 2, day: 17 }),
      "data": {}
    },
    {
      "key": "saintMarkApostle",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 3, day: 26 }),
      "data": {}
    },
    {
      "key": "saintLouisGrignonDeMontfortPriest",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 3, day: 27 }),
      "data": {}
    },
    {
      "key": "saintPeterChanelPriestAndMartyrSaintLouisGrignonDeMontfortPriest",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 3, day: 28 }),
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
      "key": "ourLadyHelpOfChristians",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 24 }),
      "data": {}
    },
    {
      "key": "saintMarcellinChampagnatPriest",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 6 }),
      "data": {}
    },
    {
      "key": "saintDominicPriest/SaintSixtusIiPopeAndCompanionsMartyrsSaintCajetanPriest",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 7, day: 7 }),
      "data": {}
    },
    {
      "key": "saintMaryMacKillopVirgin",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 7, day: 8 }),
      "data": {}
    }
  ];

  // Get localized celebration names
  return Utils.localizeDates(_dates);
};

export {
  dates
};
