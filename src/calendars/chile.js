import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {

  let _dates = [
    {
      "key": "blessedLauraVicunaVirgin",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 22 }),
      "data": {}
    },
    {
      "key": "blessedPiusIxPope",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 1, day: 7 }),
      "data": {}
    },
    {
      "key": "ourLadyOfLourdes",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 1, day: 11 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintsPhilipAndJamesApostles",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 4, day: 4 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintTeresaOfLosAndesVirgin",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 6, day: 13 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintCamillusDeLellisPriestOrSaintHenryBishopAndMartyr ",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 14 }),
      "data": {}
    },
    {
      "key": "ourLadyOfMountCarmel",
      "type": Types.SOLEMNITY,
      "moment": moment.utc({ year: year, month: 6, day: 16 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintAlbertoHurtadoPriest",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 7, day: 18 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintRoseOfLima",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 7, day: 30 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "ourLadyOfMercy",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 24 }),
      "data": {}
    },
    {
      "key": "ourLadyOfGuadalupe",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 11, day: 12 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "ourLordJesusChristTheEternalHighPriest",
      "type": Types.FEAST,
      "moment": ( y => Dates.pentecostSunday( y ).add( 4, 'days' ))(year),
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
