import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {

  let _dates = [
    {
      "key": "saintAndreBessetteReligious",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 7 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintRaymondOfPenyafortPriest",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 8 }),
      "data": {}
    },
    {
      "key": "saintMargueriteBourgeoysVirgin",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 12 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintJosephSpouseOfTheBlessedVirginMaryPrincipalPatronOfCanada",
      "type": Types.SOLEMNITY,
      "moment": moment.utc({ year: year, month: 2, day: 19 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintKateriTekakwithaVirgin",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 3, day: 17 }),
      "data": {}
    },
    {
      "key": "blessedMarieAnneBlondinVirgin",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 3, day: 18 }),
      "data": {}
    },
    {
      "key": "ourLadyOfGoodCounsel",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 3, day: 26 }),
      "data": {}
    },
    {
      "key": "saintMarieOfTheIncarnationReligious",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 3, day: 30 }),
      "data": {}
    },
    {
      "key": "blessedMarieLeonieParadisVirgin",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 4 }),
      "data": {}
    },
    {
      "key": "saintFrancoisDeLavalBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 6 }),
      "data": {}
    },
    {
      "key": "blessedCatherineOfSaintAugustineVirgin",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 8 }),
      "data": {}
    },
    {
      "key": "saintEugeneDeMazenodBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 21 }),
      "data": {}
    },
    {
      "key": "blessedLouisZephirinMoreauBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 24 }),
      "data": {}
    },
    {
      "key": "blessedsNykytaBudkaAndVasylVelychkowskyBishopsAndMartyrs",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 27 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "saintAnnePatronOfQuebecAndSaintJoachimParentsOfTheBlessedVirginMary",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 6, day: 26 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedFredericJanssoonePriest",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 7, day: 5 }),
      "data": {}
    },
    {
      "key": "blessedAndreGrassetPriestAndMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 2 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "blessedDinaBelangerVirgin",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 4 }),
      "data": {}
    },
    {
      "key": "blessedEmilieTavernierGamelinReligious",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 24 }),
      "data": {}
    },
    {
      "key": "saintsJeanDeBrebeufAndIsaacJoguesPriestsAndCompanionsMartyrsSaintPaulOfTheCrossPriest",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 8, day: 26 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.RED
        }
      }
    },
    {
      "key": "blessedMarieRoseDurocherVirgin",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 6 }),
      "data": {}
    },
    {
      "key": "saintMargueriteDYouvilleReligious",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 16 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintHedwigReligiousOrSaintMargaretMaryAlacoqueVirgin",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 20 }),
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
    }
  ];

  // Get localized celebration names
  return Utils.localizeDates(_dates);
};

export {
  dates
};
