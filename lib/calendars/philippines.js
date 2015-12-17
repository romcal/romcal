var _ = require('lodash'),
    moment = require('moment'),
    range = require('moment-range'),
    Utils = require('../utils'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Titles = require('../../data/titles'),
    Seasons = require('../seasons'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {
    return [
      {
        "key": "santoNinoInfantJesus",
        "name": "Santo Nino (Infant Jesus)",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 9 }),
        "data": {}
      },
      {
        "key": "saintsPedroBautistaPaulMikiAndCompanionsMartyrs",
        "name": "Saints Pedro Bautista, Paul Miki and Companions, Martyrs",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 6 }),
        "data": {}
      },
      {
        "key": "saintPedroCalungsodMartyr",
        "name": "Saint Pedro Calungsod, Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 2 }),
        "data": {}
      },
      {
        "key": "saintIsidoreTheFarmer",
        "name": "Saint Isidore The Farmer",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 15 }),
        "data": {}
      },
      {
        "key": "saintRoch",
        "name": "Saint Roch",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 16 }),
        "data": {}
      },
      {
        "key": "saintEzekielMorenoBishop",
        "name": "Saint Ezekiel Moreno, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 19 }),
        "data": {}
      },
      {
        "key": "saintLorenzoRuizAndCompanionsMartyrs",
        "name": "Saint Lorenzo Ruiz and Companions, Martyrs",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 28 }),
        "data": {}
      },
      {
        "key": "immaculateConceptionOfTheBlessedVirginMaryPrincipalPatronessOfThePhilippines",
        "name": "Immaculate Conception of The Blessed Virgin Mary, Principal Patroness Of The Philippines",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 8 }),
        "data": {}
      }
    ];
  }
};
