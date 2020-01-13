import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {

  let _dates = [
    {
      "key": "saintBrotherMutienMarieReligious",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 30 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintAmandMissionary",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 1, day: 6 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintGertrudeOfNivellesVirgin",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 2, day: 17 }),
      "data": {}
    },
    {
      "key": "saintJulieBilliartVirgin",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 3, day: 8 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintDamienDeVeusterPriest",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 10 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintJulianaOfLiegeVirgin",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 7, day: 7 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "ourLadyMediatrix",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 7, day: 31 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintLambertBishopAndMartyr",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 17 }),
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
      "key": "saintHubertBishop",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 10, day: 3 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintJohnBerchmansReligious",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 10, day: 26 }),
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
