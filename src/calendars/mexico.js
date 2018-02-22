import moment from 'moment';
import range from 'moment-range';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let _dates = [
  {
    "key": "saintFelipeDeJesusPriestAndMartyr",
    "type": Types[4],
    "moment": moment.utc({ year: arguments[0], month: 0, day: 22 }),
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
    "key": "blessedSebastianDeAparicioReligious",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 1, day: 25 }),
    "data": {}
  },
  {
    "key": "saintCristobalMagallanesAndCompanionsMartyrs",
    "type": Types[5],
    "moment": moment.utc({ year: arguments[0], month: 4, day: 21 }),
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
    "key": "saintMariaDeJesusSacramentadoVenegasVirgin",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 6, day: 30 }),
    "data": {}
  },
  {
    "key": "blessedBartolomeLaurelReligiousAndMartyr",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 7, day: 16 }),
    "data": {
      "meta": {
        "titles": [
          Titles.MARTYR
        ]
      }
    }
  },
  {
    "key": "blessedsPedroZunigaAndLuisFloresPriestsAndMartyrs",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 7, day: 16 }),
    "data": {
      "meta": {
        "titles": [
          Titles.MARTYR
        ]
      }
    }
  },
  {
    "key": "blessedJuniperoSerraPriest",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 7, day: 26 }),
    "data": {}
  },
  {
    "key": "saintJoseMariaDeYermoPriest",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 8, day: 19 }),
    "data": {}
  },
  {
    "key": "saintRafaelGuizarYValenciaBishop",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 9, day: 24 }),
    "data": {}
  },
  {
    "key": "blessedMiguelAgustinProPriestAndMartyr",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 10, day: 23 }),
    "data": {
      "meta": {
        "titles": [
          Titles.MARTYR
        ]
      }
    }
  },
  {
    "key": "saintJuanDiego",
    "type": Types[5],
    "moment": moment.utc({ year: arguments[0], month: 11, day: 9 }),
    "data": {}
  },
  {
    "key": "ourLadyOfGuadalupe",
    "type": Types[0],
    "moment": moment.utc({ year: arguments[0], month: 11, day: 12 }),
    "data": {}
  },
  {
    "key": "ourLordJesusChristTheEternalHighPriest",
    "type": Types[4],
    "moment": moment.utc({ year: arguments[0], month: 5, day: 16 }),
    "data": {}
  }
];

let dates = () => {
  // Get localized celebration names
  return _.map( _dates, date => {
    date.name = Utils.localize({
      key: 'national.' + date.key
    });
    return date;
  });
};

export {
  dates 
};

