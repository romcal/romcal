import moment from 'moment';
import range from 'moment-range';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let _dates = [
  {
    "key": "blessedAloysiusStepinacBishopAndMartyr",
    "type": Types[5],
    "moment": moment.utc({ year: arguments[0], month: 1, day: 10 }),
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
    "moment": moment.utc({ year: arguments[0], month: 1, day: 14 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE,
        "titles": [ Titles.PATRON_OF_EUROPE ]
      }
    }
  },
  {
    "key": "saintCatherineOfSienaVirginAndDoctorOfTheChurch",
    "type": Types[4],
    "moment": moment.utc({ year: arguments[0], month: 3, day: 29 }),
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
    "moment": moment.utc({ year: arguments[0], month: 4, day: 10 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
  },
  {
    "key": "saintLeopoldMandicPriest",
    "type": Types[5],
    "moment": moment.utc({ year: arguments[0], month: 4, day: 12 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
  },
  {
    "key": "saintQuirinusOfSescia",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 5, day: 4 }),
    "data": {}
  },
  {
    "key": "blessedMaryOfJesusCrucifiedPetkovicVirgin",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 6, day: 9 }),
    "data": {}
  },
  {
    "key": "saintBenedictOfNursiaAbbot",
    "type": Types[4],
    "moment": moment.utc({ year: arguments[0], month: 6, day: 11 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE,
        "titles": [ Titles.PATRON_OF_EUROPE ]
      }
    }
  },
  {
    "key": "ourLadyOfBistrica",
    "type": Types[4],
    "moment": moment.utc({ year: arguments[0], month: 6, day: 13 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
  },
  {
    "key": "saintBirgittaReligious",
    "type": Types[4],
    "moment": moment.utc({ year: arguments[0], month: 6, day: 23 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
  },
  {
    "key": "blessedAugustinKazoticBishopAndMartyr",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 7, day: 3 }),
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
    "moment": moment.utc({ year: arguments[0], month: 7, day: 9 }),
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
    "key": "saintMarkoKrizinPriestAndMartyr",
    "type": Types[5],
    "moment": moment.utc({ year: arguments[0], month: 8, day: 7 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
  },
  {
    "key": "saintNikolaTavelicPriestAndMartyr",
    "type": Types[4],
    "moment": moment.utc({ year: arguments[0], month: 10, day: 14 }),
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
