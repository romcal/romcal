import moment from 'moment';
import range from 'moment-range';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let _dates = [
  {
    "key": "saintAndreBessetteReligious",
    "type": Types[5],
    "moment": moment.utc({ year: arguments[0], month: 0, day: 7 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
  },
  {
    "key": "saintRaymondOfPenyafortPriest",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 0, day: 8 }),
    "data": {}
  },
  {
    "key": "saintMargueriteBourgeoysVirgin",
    "type": Types[5],
    "moment": moment.utc({ year: arguments[0], month: 0, day: 12 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
  },
  {
    "key": "saintJosephSpouseOfTheBlessedVirginMaryPrincipalPatronOfCanada",
    "type": Types[0],
    "moment": moment.utc({ year: arguments[0], month: 2, day: 19 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
  },
  {
    "key": "saintKateriTekakwithaVirgin",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 3, day: 17 }),
    "data": {}
  },
  {
    "key": "blessedMarieAnneBlondinVirgin",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 3, day: 18 }),
    "data": {}
  },
  {
    "key": "ourLadyOfGoodCounsel",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 3, day: 26 }),
    "data": {}
  },
  {
    "key": "saintMarieOfTheIncarnationReligious",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 3, day: 30 }),
    "data": {}
  },
  {
    "key": "blessedMarieLeonieParadisVirgin",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 4, day: 4 }),
    "data": {}
  },
  {
    "key": "saintFrancoisDeLavalBishop",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 4, day: 6 }),
    "data": {}
  },
  {
    "key": "blessedCaTherineOfSaintAugustineVirgin",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 4, day: 8 }),
    "data": {}
  },
  {
    "key": "saintEugeneDeMazenodBishop",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 4, day: 21 }),
    "data": {}
  },
  {
    "key": "blessedLouisZephirinMoreauBishop",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 4, day: 24 }),
    "data": {}
  },
  {
    "key": "blessedsNykytaBudkaAndVasylVelychkowskyBishopsAndMartyrs",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 5, day: 27 }),
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
    "type": Types[4],
    "moment": moment.utc({ year: arguments[0], month: 6, day: 26 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
  },
  {
    "key": "blessedFredericJanssoonePriest",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 7, day: 5 }),
    "data": {}
  },
  {
    "key": "blessedAndreGrassetPriestAndMartyr",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 8, day: 2 }),
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
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 8, day: 4 }),
    "data": {}
  },
  {
    "key": "blessedEmilieTavernierGamelinReligious",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 8, day: 24 }),
    "data": {}
  },
  {
    "key": "saintsJeanDeBrebeufAndIsaacJoguesPriestsAndCompanionsMartyrsSaintPaulOfTheCrossPriest",
    "type": Types[4],
    "moment": moment.utc({ year: arguments[0], month: 8, day: 26 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.RED
      }
    }
  },
  {
    "key": "blessedMarieRoseDurocherVirgin",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 9, day: 6 }),
    "data": {}
  },
  {
    "key": "saintMargueriteDYouvilleReligious",
    "type": Types[5],
    "moment": moment.utc({ year: arguments[0], month: 9, day: 16 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
  },
  {
    "key": "saintHedwigReligiousOrSaintMargaretMaryAlacoqueVirgin",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 9, day: 20 }),
    "data": {}
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
