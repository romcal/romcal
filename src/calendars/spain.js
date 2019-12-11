import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {

  let _dates = [
    {
      "key": "saintEulogiusOfCordobaBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 0, day: 9 }),
      "data": {}
    },
    {
      "key": "saintsFructuosusBishopAndAuguriusAndEulogiusDeaconsMartyrs",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 0, day: 20 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "saintVincentDeaconAndMartyr",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 0, day: 22 }),
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
      "key": "saintIldephonsusOfToledoBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 0, day: 23 }),
      "data": {}
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
      "key": "saintHermenegildMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 3, day: 13 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.RED
        }
      }
    },
    {
      "key": "saintIsidoreOfSevilleBishopAndDoctorOfTheChurch",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 3, day: 26 }),
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
      "key": "saintJohnOfAvilaPriest",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 4, day: 10 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintIsidoreTheFarmer",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 4, day: 15 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintPaschalBaylon",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 17 }),
      "data": {}
    },
    {
      "key": "saintJoaquinaVedruna",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 22 }),
      "data": {}
    },
    {
      "key": "saintFerdinand",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 30 }),
      "data": {}
    },
    {
      "key": "saintMariaMicaelaOfTheBlessedSacramentVirgin",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 5, day: 15 }),
      "data": {}
    },
    {
      "key": "saintPelagiusMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 5, day: 26 }),
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
      "key": "saintJamesApostlePatronOfSpain",
      "type": Types[0],
      "moment": moment.utc({ year: year, month: 6, day: 25 }),
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
      "key": "saintEzequielMorenoBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 7, day: 19 }),
      "data": {}
    },
    {
      "key": "saintTeresaOfJesusJornetEIbarsVirgin",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 7, day: 26 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintFrancisBorgiaPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 3 }),
      "data": {}
    },
    {
      "key": "saintThomasOfVillanovaBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 10 }),
      "data": {}
    },
    {
      "key": "saintSoledadTorresAcostaVirgin",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 11 }),
      "data": {}
    },
    {
      "key": "ourLadyOfThePillar",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 9, day: 12 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintTeresaOfJesusVirginAndDoctorOfTheChurch",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 9, day: 15 }),
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
      "key": "saintPeterOfAlcantaraPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 19 }),
      "data": {}
    },
    {
      "key": "saintLeanderBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 10, day: 13 }),
      "data": {}
    },
    {
      "key": "saintEulaliaOfMeridaVirginAndMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 11, day: 10 }),
      "data": {}
    },
    {
      "key": "saintJohnOfTheCrossDoctorOfTheChurch",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 11, day: 14 }),
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
      "key": "jesusChristTheEternalHighPriest",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 5, day: 16 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "ourLordJesusChristTheEternalHighPriest",
      "type": Types[4],
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
