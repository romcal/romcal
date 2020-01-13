import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {

  let _dates = [
    {
      "key": "saintMunchinBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 3 }),
      "data": {}
    },
    {
      "key": "saintItaVirgin",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 15 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintFursaAbbotAndMissionary",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 16 }),
      "data": {}
    },
    {
      "key": "saintAidanBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 30 }),
      "data": {}
    },
    {
      "key": "saintBridgetOfSwedenReligious",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 1, day: 1 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [ Titles.PATRON_OF_EUROPE ]
        }
      }
    },
    {
      "key": "saintMelBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 1, day: 7 }),
      "data": {}
    },
    {
      "key": "saintGobnaitVirgin",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 1, day: 11 }),
      "data": {}
    },
    {
      "key": "saintsCyrilMonkAndMethodiusBishop",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 1, day: 14 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [ Titles.PATRON_OF_EUROPE ]
        }
      }
    },
    {
      "key": "saintFintan",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 1, day: 17 }),
      "data": {}
    },
    {
      "key": "saintDavidBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 2, day: 1 }),
      "data": {}
    },
    {
      "key": "saintKieranBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 2, day: 5 }),
      "data": {}
    },
    {
      "key": "saintSenanBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 2, day: 8 }),
      "data": {}
    },
    {
      "key": "saintAengusOengusBishopAndAbbot",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 2, day: 11 }),
      "data": {}
    },
    {
      "key": "saintPatrickBishop",
      "type": Types.SOLEMNITY,
      "moment": moment.utc({ year: year, month: 2, day: 17 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintEndaAbbot",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 2, day: 21 }),
      "data": {}
    },
    {
      "key": "saintMacartanBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 2, day: 24 }),
      "data": {}
    },
    {
      "key": "saintCeallachCelsusBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 3, day: 1 }),
      "data": {}
    },
    {
      "key": "saintMolaiseLaisrenLaserianBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 3, day: 18 }),
      "data": {}
    },
    {
      "key": "saintAsicusBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 3, day: 27 }),
      "data": {}
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
      "key": "saintConlethBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 4 }),
      "data": {}
    },
    {
      "key": "blessedEdmundIgnatiusRiceReligious",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 5 }),
      "data": {}
    },
    {
      "key": "saintComgallAbbot",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 10 }),
      "data": {}
    },
    {
      "key": "saintCarthageBishopMochuta",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 15 }),
      "data": {}
    },
    {
      "key": "saintBrendanAbbot",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 16 }),
      "data": {}
    },
    {
      "key": "saintKevinAbbot",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 3 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintJarlathBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 6 }),
      "data": {}
    },
    {
      "key": "saintColmanOfDromoreBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 7 }),
      "data": {}
    },
    {
      "key": "saintColumbaAbbotAndMissionary",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 5, day: 9 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintDavnetVirgin",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 14 }),
      "data": {}
    },
    {
      "key": "blessedIrishMartyrs",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 20 }),
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
      "key": "saintOliverPlunkettBishopAndMartyr",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 1 }),
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
      "key": "saintMoninneVirgin",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 6 }),
      "data": {}
    },
    {
      "key": "saintMaelruainMaolruainVirgin",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 7 }),
      "data": {}
    },
    {
      "key": "saintKillianBishopAndMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 8 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
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
      "key": "saintDeclanBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 24 }),
      "data": {}
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
      "key": "saintMuiredachBishopSaintAttractaVirginOrSaintLeliaVirgin",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 7, day: 12 }),
      "data": {}
    },
    {
      "key": "saintFachtnaBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 7, day: 13 }),
      "data": {}
    },
    {
      "key": "ourLadyOfKnock",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 7, day: 17 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintEugeneEoghanBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 7, day: 23 }),
      "data": {}
    },
    {
      "key": "saintFiacreMonk",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 7, day: 30 }),
      "data": {}
    },
    {
      "key": "saintAidanOfLindisfarneBishopAndMissionary",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 7, day: 31 }),
      "data": {}
    },
    {
      "key": "saintMacNissiBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 4 }),
      "data": {}
    },
    {
      "key": "saintCiaranAbbot",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 9 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintAilbeBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 12 }),
      "data": {}
    },
    {
      "key": "saintPioOfPietralcina",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 23 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintFinbarrBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 25 }),
      "data": {}
    },
    {
      "key": "blessedColumbaMarmionPriest",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 3 }),
      "data": {}
    },
    {
      "key": "blessedJohnHenryNewmanPriest",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 9 }),
      "data": {}
    },
    {
      "key": "saintCaniceAbbot",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 11 }),
      "data": {}
    },
    {
      "key": "saintGallAbbotAndMissionary",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 16 }),
      "data": {}
    },
    {
      "key": "saintOtteranMonk",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 27 }),
      "data": {}
    },
    {
      "key": "saintColmanOfKilmacduaghBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 29 }),
      "data": {}
    },
    {
      "key": "saintMalachyBishop",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 10, day: 3 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "allSaintsOfIreland",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 10, day: 6 }),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintWillibrordBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 10, day: 7 }),
      "data": {}
    },
    {
      "key": "saintLaurenceOTooleBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 10, day: 14 }),
      "data": {}
    },
    {
      "key": "saintColumbanAbbotAndMissionary",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 10, day: 23 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintColmanOfCloyneBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 10, day: 25 }),
      "data": {}
    },
    {
      "key": "saintFergalBishopAndMissionary",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 10, day: 27 }),
      "data": {}
    },
    {
      "key": "saintFinnianOfClonardBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 11, day: 12 }),
      "data": {}
    },
    {
      "key": "saintFlannanBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 11, day: 18 }),
      "data": {}
    },
    {
      "key": "saintFachananOfKilfenoraBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 11, day: 20 }),
      "data": {}
    }
  ];

  // Get localized celebration names
  return Utils.localizeDates(_dates);
};

export {
  dates
};
