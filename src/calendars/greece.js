import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {

  let _dates = [
    {
      "key": "saintsCyrilMonkAndMethodiusBishop",
      "type": Types.FEAST,
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
      "key": "saintCyrilOfJerusalemBishopAndDoctor",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 2, day: 18 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [
            Titles.DOCTOR_OF_THE_CHURCH
          ]
        }
      }
    },
    {
      "key": "saintAdalbertBishopAndMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 3, day: 22 }),
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
      "key": "saintIrene",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 5 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "ourLadyOfFatima",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 15 }),
      "data": {}
    },
    {
      "key": "saintCyrilOfAlexandriaBishopAndDoctor",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 27 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [
            Titles.DOCTOR_OF_THE_CHURCH
          ]
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
      "key": "saintMarina",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 17 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintBridgetOfSwedenReligious",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 6, day: 23 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [ Titles.PATRON_OF_EUROPE ]
        }
      }
    },
    {
      "key": "saintPantaleon",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 27 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintLydiaOfPhilippi",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 7, day: 3 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
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
      "key": "saintsCosmasAndDamian",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 26 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintDionysiusTheAreopagite",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 3 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintDemetrius",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 26 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "presentationOfTheBlessedVirginMary",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 10, day: 21 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintBarbaraVirginAndMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 11, day: 4 }),
      "data": {}
    },
    {
      "key": "saintNicholasBishop",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 11, day: 6 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintSpyridon",
      "type": Types.MEMORIAL,
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
