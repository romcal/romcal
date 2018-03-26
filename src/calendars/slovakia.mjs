import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

// Allow an option to passed when generating this calendar for the Feast of Saints Cyril and Methodius to land on Feb 14
let dates = (year, saintsCyrilMonkAndMethodiusBishopOnFeb14 = false ) => {

  let _dates = [
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
      "key": "saintGeorgeMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 3, day: 24 }),
      "data": {
        "meta": {
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
      "key": "blessedSaraSalkahaziVirginAndMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 11 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "saintJohnNepomucenePriestAndMartyr",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 4, day: 16 }),
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
      "key": "saintLadislaus",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 5, day: 27 }),
      "data": {}
    },
    {
      "key": "visitationOfTheBlessedVirginMary",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 6, day: 2 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    // In Slovakia and Czech Republic, the two brothers were originally
    // commemorated on 9 March, but Pope Pius IX changed this date to 5 July
    // https://en.wikipedia.org/wiki/Saints_Cyril_and_Methodius
    {
      "key": "saintsCyrilMonkAndMethodiusBishop",
      "type": Types[4],
      "moment": ((y, flag) => {
        return flag ? moment.utc({ year: year, month: 1, day: 14 }): moment.utc({ year: year, month: 6, day: 5 });
      })(year, saintsCyrilMonkAndMethodiusBishopOnFeb14),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [ Titles.PATRON_OF_EUROPE ]
        }
      }
    },
    {
      "key": "saintAnthonyZaccariaPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 7 }),
      "data": {}
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
      "key": "saintsAndrewZoerardusAndBenedictHermits",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 6, day: 17 }),
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
      "key": "saintGorazdAndCompanions",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 6, day: 27 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedZdenkaSchelingovaVirginAndMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 30 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
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
      "key": "saintTeresaOfCalcuttaReligious",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 8, day: 5 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintsMarkoKrizinMelicharGrodeckiAndStephenPongracPriestsAndMartyrs",
      "type": Types[5],
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
      "key": "ourLadyOfSorrows",
      "type": Types[0],
      "moment": moment.utc({ year: year, month: 8, day: 15 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintEmeric",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 10, day: 5 }),
      "data": {}
    },
    {
      "key": "ourLordJesusChristTheEternalHighPriest",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 5, day: 16 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    // Dropped celebrations
    {
      "key": "shroveMonday",
      "drop": true
    },
    {
      "key": "shroveTuesday",
      "drop": true
    }
  ];

  // Get localized celebration names
  return Utils.localizeDates(_dates);
};

export {
  dates
};
