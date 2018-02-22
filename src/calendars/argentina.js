import moment from 'moment';
import range from 'moment-range';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let _dates = [
  {
    "key": "blessedLauraVicuna",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 0, day: 22 }),
    "data": {}
  },
  {
    "key": "ourLadyQueenOfPeace",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 0, day: 24 }),
    "data": {}
  },
  {
    "key": "saintTuribiusOfMogrovejoBishop",
    "type": Types[4],
    "moment": moment.utc({ year: arguments[0], month: 3, day: 27 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
  },
  {
    "key": "ourLadyOfLujanPatronessOfArgentina",
    "type": Types[0],
    "moment": moment.utc({ year: arguments[0], month: 4, day: 8 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
  },
  {
    "key": "saintIsidoreTheFarmer",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 4, day: 15 }),
    "data": {}
  },
  {
    "key": "saintLuigiOrionePriest",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 4, day: 16 }),
    "data": {}
  },
  {
    "key": "ourLadyOfItati",
    "type": Types[5],
    "moment": moment.utc({ year: arguments[0], month: 6, day: 9 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
  },
  {
    "key": "saintsAugustineZhaoRongPriestAndCompanionsMartyrs",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 6, day: 10 }),
    "data": {
      "meta": {
        "titles": [
          Titles.MARTYR
        ]
      }
    }
  },
  {
    "key": "ourLadyOfMountCarmel",
    "type": Types[5],
    "moment": moment.utc({ year: arguments[0], month: 6, day: 16 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
  },
  {
    "key": "saintSharbelMakhlufPriestAndHermit",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 6, day: 23 }),
    "data": {}
  },
  {
    "key": "saintFrancisSolanusPriest",
    "type": Types[5],
    "moment": moment.utc({ year: arguments[0], month: 6, day: 24 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
  },
  {
    "key": "saintRocco",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 7, day: 16 }),
    "data": {}
  },
  {
    "key": "blessedCeferinoNamuncura",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 7, day: 26 }),
    "data": {}
  },
  {
    "key": "saintRoseOfLima",
    "type": Types[4],
    "moment": moment.utc({ year: arguments[0], month: 7, day: 30 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
  },
  {
    "key": "ourLadyOfMercy",
    "type": Types[5],
    "moment": moment.utc({ year: arguments[0], month: 8, day: 24 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
  },
  {
    "key": "saintHectorValdivielsoSaezMartyr",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 9, day: 9 }),
    "data": {
      "meta": {
        "titles": [
          Titles.MARTYR
        ]
      }
    }
  },
  {
    "key": "ourLadyOfThePillar",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 9, day: 12 }),
    "data": {}
  },
  {
    "key": "saintsRoqueGonzalezAlfonsoRodriguezAndJuanDelCastilloPriestsAndMartyrs",
    "type": Types[5],
    "moment": moment.utc({ year: arguments[0], month: 10, day: 17 }),
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
    "key": "saintElizabethOfHungary",
    "type": Types[5],
    "moment": moment.utc({ year: arguments[0], month: 10, day: 18 }),
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
  // Saturday of the 2nd Week of Easter
  {
    "key": "ourLadyOfTheValley",
    "type": Types[5],
    "moment": (function( y ) {
      return Dates.divineMercySunday( y ).add( 6, 'days');
    }( arguments[0] )),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
  },
  // Monday after Pentecost
  {
    "key": "maryMotherOfTheChurch",
    "type": Types[5],
    "moment": (function( y ) {
      return Dates.pentecostSunday( y ).add( 1, 'days');
    }( arguments[0] )),
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