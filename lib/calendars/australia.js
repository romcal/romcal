var moment = require('moment'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {

    return [
      {
        "key": "saintPatrickBishop",
        "name": "Saint Patrick, Bishop",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 17 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintPeterChanelPriestAndMartyr",
        "name": "Saint Peter Chanel, Priest and Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 28 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "ourLadyHelpOfChristians",
        "name": "Our Lady, Help of Christians",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 24 }),
        "data": {}
      },
      {
        "key": "blessedPeterToRotMartyr",
        "name": "Blessed Peter To Rot, Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 7 }),
        "data": {}
      },
      {
        "key": "saintMaryOfTheCrossVirgin",
        "name": "Saint Mary of The Cross, Virgin",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 8 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      }
    ];
  }
};
