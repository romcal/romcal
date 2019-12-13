import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {

  let _dates = [
    {
      "key": "findingOfTheHolyCross",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 4, day: 3 }),
      "data": {}
    },
    {
      "key": "ourLadyHelpOfChristians",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 24 }),
      "data": {}
    },
    {
      "key": "saintMarianaDeJesusDeParedesVirgin",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 4, day: 26 }),
      "data": {}
    },
    {
      "key": "saintFrancisSolanusPriest",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 6, day: 14 }),
      "data": {}
    },
    {
      "key": "ourLadyOfPeace",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 6, day: 28 }),
      "data": {}
    },
    {
      "key": "saintRoseOfLima",
      "type": Types.SOLEMNITY,
      "moment": moment.utc({ year: year, month: 7, day: 23 }),
      "data": {}
    },
    {
      "key": "saintJohnMaciasReligious",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 8, day: 18 }),
      "data": {}
    },
    {
      "key": "ourLadyOfMercy",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 24 }),
      "data": {}
    },
    {
      "key": "ourLordOfMiracles",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 9, day: 28 }),
      "data": {}
    },
    {
      "key": "saintMartinDePorresReligious",
      "type": Types.SOLEMNITY,
      "moment": moment.utc({ year: year, month: 10, day: 3 }),
      "data": {}
    },
    {
      "key": "ourLadyOfGuadalupe",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 11, day: 12 }),
      "data": {}
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
