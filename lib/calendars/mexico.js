var _ = require('lodash'),
    moment = require('moment'),
    range = require('moment-range'),
    Utils = require('../utils'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Seasons = require('../seasons'),
    Titles = require('../../data/titles'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {
    return [
      {
        "key": "saintFelipeDeJesusPriestAndMartyr",
        "name": "Saint Felipe de Jesus, Priest And Martyr",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 22 }),
        "data": {}
      },
      {
        "key": "blessedSebastianDeAparicioReligious",
        "name": "Blessed Sebastian de Aparicio, Religious",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 25 }),
        "data": {}
      },
      {
        "key": "saintCristobalMagallanesAndCompanionsMartyrs",
        "name": "Saint Cristobal Magallanes and Companions, Martyrs",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 21 }),
        "data": {}
      },
      {
        "key": "saintMariaDeJesusSacramentadoVenegasVirgin",
        "name": "Saint Maria de Jesus Sacramentado Venegas, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 30 }),
        "data": {}
      },
      {
        "key": "blessedBartolomeLaurelReligiousAndMartyr",
        "name": "Blessed Bartolome Laurel, Religious and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 16 }),
        "data": {}
      },
      {
        "key": "blessedsPedroZunigaAndLuisFloresPriestsAndMartyrs",
        "name": "Blesseds Pedro Zuniga And Luis Flores, Priests and Martyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 16 }),
        "data": {}
      },
      {
        "key": "blessedJuniperoSerraPriest",
        "name": "Blessed Junipero Serra, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 26 }),
        "data": {}
      },
      {
        "key": "saintJoseMariaDeYermoPriest",
        "name": "Saint Jose Maria de Yermo, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 19 }),
        "data": {}
      },
      {
        "key": "saintRafaelGuizarYValenciaBishop",
        "name": "Saint Rafael Guizar y Valencia, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 24 }),
        "data": {}
      },
      {
        "key": "blessedMiguelAgustinProPriestAndMartyr",
        "name": "Blessed Miguel Agustin Pro, Priest And Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 23 }),
        "data": {}
      },
      {
        "key": "saintJuanDiego",
        "name": "Saint Juan Diego",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 9 }),
        "data": {}
      },
      {
        "key": "ourLadyOfGuadalupe",
        "name": "Our Lady of Guadalupe",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 12 }),
        "data": {}
      },
      {
        "key": "ourLordJesusChristTheEternalHighPriest",
        "name": "Our Lord Jesus Christ, The Eternal High Priest",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 16 }),
        "data": {}
      }
    ];
  }
};
