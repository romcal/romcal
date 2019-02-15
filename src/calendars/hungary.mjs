import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {

  let _dates = [
    {
      "key": "saintMargaretOfHungary",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 0, day: 18 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
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
          "titles": [ Titles.PATRON_OF_EUROPE ]
        }
      }
    },
    {
      "key": "saintMatthiasTheApostle",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 1, day: 24 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
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
      "key": "saintFlorianMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 4 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "blessedGisela",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 7 }),
      "data": {}
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 16 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "blessedVilmosAporBishopAndMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 23 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "ourLadyHelpOfChristians",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 4, day: 24 }),
      "data": {}
    },
    {
      "key": "transferOfTheRelicsOfSaintStephen",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 30 }),
      "data": {}
    },
    {
      "key": "saintAgnesOfBohemiaVirgin",
      "type": Types[5], // Memorial
      "moment": moment.utc({ year: year, month: 5, day: 8 }), // 8th of June
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE // What is the Liturgical color for this?
        }
      }
    },
    // Moved to the congregational calendar (Society of Saint Francis de Sales (Salesian Congregation)
    // {
    //   "key": "blessedIstvanSandorMartyr",
    //   "type": Types[6],
    //   "moment": moment.utc({ year: year, month: 5, day: 8 }),
    //   "data": {
    //     "meta": {
    //       "titles": [
    //         Titles.MARTYR
    //       ]
    //     }
    //   }
    // },
    {
      "key": "saintLadislaus",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 5, day: 27 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
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
      "key": "saintsAndrewZorardAndBenedictHermits",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 6, day: 17 }),
      "data": {}
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
      "key": "saintKingaVirgin",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 6, day: 24 }),
      "data": {}
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
      "key": "blessedInnocentXiPope",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 7, day: 13 }),
      "data": {}
    },
    {
      "key": "saintStephenOfHungary",
      "type": Types[0],
      "moment": moment.utc({ year: year, month: 7, day: 20 }),
      "data": {}
    },
    {
      "key": "saintTeresaOfCalcuttaReligious",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 8, day: 5 }),
      "data": {}
    },
    {
      "key": "saintsMarkoKrizinMelicharGrodeckiAndStephenPongracPriestsAndMartyrs",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 8, day: 7 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintGerardBishop",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 8, day: 24 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "ourLadyOfHungary",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 9, day: 8 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintMaurusBishop",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 9, day: 25 }),
      "data": {}
    },
    {
      "key": "blessedTheodoreRomzhaBishopAndMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 31 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "saintEmeric",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 10, day: 4 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "hungarianSaintsAndBlesseds",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 10, day: 13 }),
      "data": {}
    }
  ];

  // Get localized celebration names
  return Utils.localizeDates(_dates);
};

export {
  dates
};
