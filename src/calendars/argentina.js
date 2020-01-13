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
      "key": "ourLadyQueenOfPeace",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 24 }),
      "data": {}
    },
    {
      "key": "saintTuribiusOfMogrovejoBishop",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 3, day: 27 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "ourLadyOfLujanPatronessOfArgentina",
      "type": Types.SOLEMNITY,
      "moment": moment.utc({ year: year, month: 4, day: 8 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintIsidoreTheFarmer",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 15 }),
      "data": {}
    },
    {
      "key": "saintLuigiOrionePriest",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 16 }),
      "data": {}
    },
    {
      "key": "ourLadyOfItati",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 9 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintsAugustineZhaoRongPriestAndCompanionsMartyrs",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 10 }),
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
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 16 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintCharbelMakhloufPriestAndHermit",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 23 }),
      "data": {}
    },
    {
      "key": "saintFrancisSolanusPriest",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 24 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintRocco",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 7, day: 16 }),
      "data": {}
    },
    {
      "key": "blessedCeferinoNamuncura",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 7, day: 26 }),
      "data": {}
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
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 24 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintHectorValdivielsoSaezMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 9 }),
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
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 12 }),
      "data": {}
    },
    {
      "key": "saintsRoqueGonzalezAlfonsoRodriguezOlmedoAndJuanDelCastilloPriestsAndMartyrs",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 10, day: 17 }),
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
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 10, day: 18 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
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
    // Saturday of the 2nd Week of Easter
    {
      "key": "ourLadyOfTheValley",
      "type": Types.MEMORIAL,
      "moment": ( y => Dates.divineMercySunday( y ).add( 6, 'days'))( year ),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
  ];

  // Get localized celebration names
  return Utils.localizeDates(_dates);
};

export {
  dates
};
