import moment from 'moment';
import range from 'moment-range';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let _dates = [
  {
    "key": "saintGenevieveVirgin",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 0, day: 3 }),
    "data": {}
  },
  {
    "key": "saintRemigiusBishop",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 0, day: 15 }),
    "data": {}
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
    "key": "saintBernadetteSoubirousVirgin",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 1, day: 18 }),
    "data": {}
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
    "key": "saintIvoPriest",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 4, day: 19 }),
    "data": {}
  },
  {
    "key": "saintJoanOfArcVirginSecondaryPatronessOfFrance",
    "type": Types[5],
    "moment": moment.utc({ year: arguments[0], month: 4, day: 30 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
  },
  {
    "key": "saintPothinusBishopSaintBlAndinaVirginAndTheirCompanionsMartyrs",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 5, day: 2 }),
    "data": {}
  },
  {
    "key": "saintClotilde",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 5, day: 4 }),
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
    "key": "saintBrigittaReligious",
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
    "key": "assumptionOfTheBlessedVirginMaryPrincipalPatronessOfFrance",
    "type": Types[0],
    "moment": moment.utc({ year: arguments[0], month: 7, day: 15 }),
    "data": {
      "meta": {
        "liturgicalColor": LiturgicalColors.WHITE
      }
    }
  },
  {
    "key": "saintCaesariusOfArlesBishop",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 7, day: 26 }),
    "data": {}
  },
  {
    "key": "saintThereseOfTheChildJesusVirginSecondaryPatronessOfFrance",
    "type": Types[5],
    "moment": moment.utc({ year: arguments[0], month: 9, day: 1 }),
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
    "key": "saintJohnXxiiiPope",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 9, day: 11 }),
    "data": {}
  },
  {
    "key": "saintJohnPaulIiPope",
    "type": Types[6],
    "moment": moment.utc({ year: arguments[0], month: 9, day: 22 }),
    "data": {}
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
