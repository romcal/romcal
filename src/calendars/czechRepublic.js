import moment from 'moment';
import range from 'moment-range';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {

  let _dates = [
    {
      "key": "ourLadyMotherOfChristianUnity",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 0, day: 18 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "ourLadyMediatrixOfAllGrace",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 8 }),
      "data": {}
    },
    {
      "key": "saintAdalbertBishopAndMartyr",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 3, day: 23 }),
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
      "key": "saintSigismundMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 3, day: 30 }),
      "data": {}
    },
    {
      "key": "saintJohnNepomucenePriestAndMartyr",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 4, day: 16 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintClementMaryHofbauerPriest",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 4, day: 20 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintZdislava",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 4, day: 30 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintVitusMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 5, day: 15 }),
      "data": {}
    },
    {
      "key": "saintJohnNeumannBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 5, day: 19 }),
      "data": {}
    },
    {
      "key": "saintProcopiusAbbot",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 4 }),
      "data": {}
    },
    {
      "key": "saintsCyrilMonkAndMethodiusBishop",
      "type": Types[0],
      "moment": moment.utc({ year: year, month: 6, day: 5 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [ Titles.PATRON_OF_EUROPE ]
        }
      }
    },
    {
      "key": "saintBenedictOfNursiaAbbot",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 6, day: 11 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [ Titles.PATRON_OF_EUROPE ]
        }
      }
    },
    {
      "key": "blessedHrzonataMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 14 }),
      "data": {}
    },
    {
      "key": "blessedCeslausAndSaintHyacinthPriests",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 17 }),
      "data": {}
    },
    {
      "key": "saintBridgetOfSweedenReligious",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 6, day: 23 }),
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
      "key": "saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 7, day: 9 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.RED,
          "titles": [
            Titles.MARTYR,
            Titles.PATRON_OF_EUROPE
          ]
        }
      }
    },
    {
      "key": "saintsBenedyktJanMateuszIsaakAndKrystynMartyrs",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 7, day: 25 }),
      "data": {}
    },
    {
      "key": "blessedTeresaOfCalcuttaReligious",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 8, day: 5 }),
      "data": {}
    },
    {
      "key": "saintMelchiorGrodzieckiPriestAndMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 8, day: 7 }),
      "data": {}
    },
    {
      "key": "blessedCharlesSpinolaPriestAndMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 8, day: 10 }),
      "data": {}
    },
    {
      "key": "saintLudmilaMartyr",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 8, day: 16 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintRadimBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 12 }),
      "data": {}
    },
    {
      "key": "blessedKarlOfAustria",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 21 }),
      "data": {}
    },
    {
      "key": "saintJohnPaulIiPope",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 22 }),
      "data": {}
    },
    {
      "key": "saintWolfgangBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 31 }),
      "data": {}
    },
    {
      "key": "saintAgnesOfBohemiaVirgin",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 10, day: 13 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintEdmundCampionPriestAndMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 11, day: 1 }),
      "data": {}
    }
  ];

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
