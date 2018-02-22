import moment from 'moment';
import range from 'moment-range';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let _dates = [
  {
    "key": "mostHolyNameOfJesusOrOurLadyOfBethlehem",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 0, day: 3 }),
    "data": {}
  },
  {
    "key": "blessedMariaDoloresRodriguezSopenaVirgin",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 0, day: 10 }),
    "data": {}
  },
  {
    "key": "blessedCarlosManuelRodriguez",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 4, day: 4 }),
    "data": {}
  },
  {
    "key": "ourLadyOfMountCarmel",
    "type": Types[4],
    "moment": moment.utc({ year: arguments[0], month: 6, day: 16 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
  },
  {
    "key": "saintTeresaOfJesusJornetEIbarsVirgin",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 7, day: 26 }),
    "data": {}
  },
  {
    "key": "saintRoseOfLimaVirgin",
    "type": Types[4],
    "moment": moment.utc({ year: arguments[0], month: 7, day: 30 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
  },
  {
    "key": "blessedsCarlosSpinolaAndJeronimoDeAngelisPriestsAndMartyrs",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 8, day: 10 }),
    "data": {
      "meta": {
        "titles": [
          Titles.MARTYR
        ]
      }
    }
  },
  {
    "key": "saintSoledadTorresAcostaVirgin",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 9, day: 11 }),
    "data": {}
  },
  {
    "key": "ourLadyMotherOfDivineProvidencePatronessOfPuertoRico",
    "type": Types[0],
    "moment": moment.utc({ year: arguments[0], month: 10, day: 19 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
  },
  {
    "key": "ourLadyOfGuadalupe",
    "type": Types[4],
    "moment": moment.utc({ year: arguments[0], month: 11, day: 12 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
  },
  {
    "key": "maryMotherOfTheChurch",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 5, day: 13 }),
    "data": {}
  },
  {
    "key": "ourLordJesusChristTheEternalHighPriest",
    "type": Types[4],
    "moment": moment.utc({ year: arguments[0], month: 5, day: 16 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
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
