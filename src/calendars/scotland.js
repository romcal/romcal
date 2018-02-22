import moment from 'moment';
import range from 'moment-range';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let _dates = [
  {
    "key": "saintKentigern",
    "type": Types[5],
    "moment": moment.utc({ year: arguments[0], month: 0, day: 13 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
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
    "key": "saintJohnOgilvie",
    "type": Types[4],
    "moment": moment.utc({ year: arguments[0], month: 2, day: 10 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
  },
  {
    "key": "saintPatrick",
    "type": Types[4],
    "moment": moment.utc({ year: arguments[0], month: 2, day: 17 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
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
    "key": "saintColumba",
    "type": Types[5],
    "moment": moment.utc({ year: arguments[0], month: 5, day: 9 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
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
    "key": "saintNinian",
    "type": Types[5],
    "moment": moment.utc({ year: arguments[0], month: 8, day: 16 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
  },
  {
    "key": "saintMargaretOfScotland",
    "type": Types[4],
    "moment": moment.utc({ year: arguments[0], month: 10, day: 16 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
  },
  {
    "key": "saintAndrewTheApostle",
    "type": Types[0],
    "moment": moment.utc({ year: arguments[0], month: 10, day: 30 }),
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
