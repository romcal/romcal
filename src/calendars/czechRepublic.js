import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {

  let _dates = [
    {
      "key": "ourLadyMotherOfChristianUnity",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 18 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "ourLadyMediatrixOfAllGrace",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 8 }),
      "data": {}
    },
    {
      "key": "saintAdalbertBishopAndMartyr",
      "type": Types.MEMORIAL,
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
      "type": Types.FEAST,
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
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 3, day: 30 }),
      "data": {}
    },
    {
      "key": "saintJohnNepomucenePriestAndMartyr",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 4, day: 16 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintClementMaryHofbauerPriest",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 20 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintZdislava",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 30 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintVitusMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 15 }),
      "data": {}
    },
    {
      "key": "saintJohnNeumannBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 19 }),
      "data": {}
    },
    {
      "key": "saintProcopiusAbbot",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 4 }),
      "data": {}
    },
    // In Slovakia and Czech Republic, the two brothers were originally
    // commemorated on 9 March, but Pope Pius IX changed this date to 5 July
    // https://en.wikipedia.org/wiki/Saints_Cyril_and_Methodius
    {
      "key": "saintsCyrilMonkAndMethodiusBishop",
      "type": Types.SOLEMNITY,
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
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 6, day: 11 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [ Titles.PATRON_OF_EUROPE ]
        }
      }
    },
    {
      "key": "blessedHroznataMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 14 }),
      "data": {}
    },
    {
      "key": "blessedCeslausAndSaintHyacinthPriests",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 17 }),
      "data": {}
    },
    {
      "key": "saintBridgetOfSwedenReligious",
      "type": Types.FEAST,
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
      "type": Types.FEAST,
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
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 7, day: 25 }),
      "data": {}
    },
    {
      "key": "saintTeresaOfCalcuttaReligious",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 5 }),
      "data": {}
    },
    {
      "key": "saintMelchiorGrodzieckiPriestAndMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 7 }),
      "data": {}
    },
    {
      "key": "blessedCharlesSpinolaPriestAndMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 10 }),
      "data": {}
    },
    {
      "key": "saintLudmilaMartyr",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 16 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintRadimBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 12 }),
      "data": {}
    },
    {
      "key": "blessedKarlOfAustria",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 21 }),
      "data": {}
    },
    {
      "key": "saintWolfgangBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 31 }),
      "data": {}
    },
    {
      "key": "saintAgnesOfBohemiaVirgin",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 10, day: 13 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintEdmundCampionPriestAndMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 11, day: 1 }),
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
