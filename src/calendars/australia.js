import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {

  let _dates = [
    {
      "key": "saintPatrickBishop",
      "type": Types[0],
      "moment": moment.utc({ year: year, month: 2, day: 17 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintPeterChanelPriestAndMartyrSaintLouisGrignonDeMontfortPriest",
      "type": Types[5],
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
      "type": Types[0],
      "moment": moment.utc({ year: year, month: 4, day: 24 }),
      "data": {}
    },
    {
      "key": "blessedPeterToRotMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 7 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "saintMaryOfTheCrossVirgin",
      "type": Types[0],
      "moment": moment.utc({ year: year, month: 7, day: 8 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "ourLordJesusChristTheEternalHighPriest",
      "type": Types[4],
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
