import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {

  let _dates = [
    {
      "key": "blessedLauraVicunaVirgin",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 0, day: 22 }),
      "data": {}
    },
    {
      "key": "ourLadyQueenOfPeace",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 0, day: 24 }),
      "data": {}
    },
    {
      "key": "saintTuribiusOfMogrovejoBishop",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 3, day: 27 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "ourLadyOfLujanPatronessOfArgentina",
      "type": Types[0],
      "moment": moment.utc({ year: year, month: 4, day: 8 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintIsidoreTheFarmer",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 15 }),
      "data": {}
    },
    {
      "key": "saintLuigiOrionePriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 16 }),
      "data": {}
    },
    {
      "key": "ourLadyOfItati",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 6, day: 9 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintsAugustineZhaoRongPriestAndCompanionsMartyrs",
      "type": Types[6],
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
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 6, day: 16 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintCharbelMakhloufPriestAndHermit",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 23 }),
      "data": {}
    },
    {
      "key": "saintFrancisSolanusPriest",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 6, day: 24 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintRocco",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 7, day: 16 }),
      "data": {}
    },
    {
      "key": "blessedCeferinoNamuncura",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 7, day: 26 }),
      "data": {}
    },
    {
      "key": "saintRoseOfLima",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 7, day: 30 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "ourLadyOfMercy",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 8, day: 24 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintHectorValdivielsoSaezMartyr",
      "type": Types[6],
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 12 }),
      "data": {}
    },
    {
      "key": "saintsRoqueGonzalezAlfonsoRodriguezOlmedoAndJuanDelCastilloPriestsAndMartyrs",
      "type": Types[5],
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
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 10, day: 18 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "ourLadyOfGuadalupe",
      "type": Types[4],
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
      "type": Types[5],
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
