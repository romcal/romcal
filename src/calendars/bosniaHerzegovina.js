import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {

  let _dates = [
    {
      "key": "saintScholasticaVirgin",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 1, day: 9 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedAloysiusStepinacBishopAndMartyr",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 1, day: 10 }),
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
      "key": "saintsCyrilMonkAndMethodiusBishop",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 1, day: 14 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [
            Titles.PATRON_OF_EUROPE
          ]
        }
      }
    },
    {
      "key": "blessedOsannaOfCattaroVirgin",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 3, day: 27 }),
      "data": {}
    },
    {
      "key": "saintCatherineOfSienaVirginAndDoctorOfTheChurch",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 3, day: 29 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [
            Titles.PATRON_OF_EUROPE,
            Titles.DOCTOR_OF_THE_CHURCH
          ]
        }
      }
    },
    {
      "key": "blessedIvanMerz",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 4, day: 10 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintLeopoldMandicPriest",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 4, day: 12 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedMaryOfJesusCrucifiedPetkovicVirgin",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 9 }),
      "data": {}
    },
    {
      "key": "saintBenedictOfNursiaAbbot",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 6, day: 11 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [
            Titles.PATRON_OF_EUROPE
          ]
        }
      }
    },
    {
      "key": "ourLadyOfBistrica",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 13 }),
      "data": {}
    },
    {
      "key": "saintElijahProphet",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 6, day: 20 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintBridgetOfSwedenReligious",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 6, day: 23 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [ Titles.PATRON_OF_EUROPE ]
        }
      }
    },
    {
      "key": "saintClementOfOhridAndGorazdBishopsAndCompanions",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 27 }),
      "data": {}
    },
    {
      "key": "blessedAugustinKazoticBishopAndMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 7, day: 3 }),
      "data": {
        "titles": [
          Titles.MARTYR
        ]
      }
    },
    {
      "key": "saintRoch",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 7, day: 16 }),
      "data": {}
    },
    {
      "key": "saintMarkoKrizinPriestAndMartyr",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 8, day: 7 }),
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
      "key": "blessedGraziaOfCattaro",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 10, day: 27 }),
      "data": {}
    },
    {
      "key": "saintNikolaTavelicPriestAndMartyr",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 10, day: 14 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.RED,
          "titles": [
            Titles.MARTYR
          ]
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
