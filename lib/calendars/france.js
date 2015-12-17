var _ = require('lodash'),
    moment = require('moment'), 
    range = require('moment-range'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Seasons = require('../seasons'),
    Titles = require('../../data/titles'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {

    return [
      {
        "key": "saintGenevieveVirgin",
        "name": "Saint Genevieve, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 3 }),
        "data": {}
      },
      {
        "key": "saintRemigiusBishop",
        "name": "Saint Remigius, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 15 }),
        "data": {}
      },
      {
        "key": "saintsCyrilMonkAndMethodiusBishop",
        "name": "Saints Cyril, Monk and Methodius, Bishop, Patrons of Europe",
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
        "name": "Saint Bernadette Soubirous, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 19 }),
        "data": {}
      },
      {
        "key": "saintCatherineOfSienaVirginAndDoctorOfTheChurch",
        "name": "Saint Catherine of Siena, Virgin and Doctor of The Church, Patron of Europe",
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
        "name": "Saint Ivo, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 20 }),
        "data": {}
      },
      {
        "key": "saintJoanOfArcVirginSecondaryPatronessOfFrance",
        "name": "Saint Joan of Arc, Virgin, Secondary Patroness of France",
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
        "name": "Saint Pothinus, Bishop, Saint BlAndina, Virgin, and Their Companions, Martyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 2 }),
        "data": {}
      },
      {
        "key": "saintClotilde",
        "name": "Saint Clotilde",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 5 }),
        "data": {}
      },
      {
        "key": "saintBenedictAbbot",
        "name": "Saint Benedict of Nursia, Abbot, Patron of Europe",
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
        "name": "Saint Brigitta, Religious",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 23 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintTeresaBenedictaOfTheCrossVirginAndMartyr",
        "name": "Saint Teresa Benedicta of The Cross (Edith Stein), Virgin & Martyr, Patron of Europe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 9 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ Titles.PATRON_OF_EUROPE ]
          }
        }
      },
      {
        "key": "assumptionOfTheBlessedVirginMaryPrincipalPatronessOfFrance",
        "name": "Assumption of The Blessed Virgin Mary, Principal Patroness of France",
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
        "name": "Saint Caesarius of Arles, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 26 }),
        "data": {}
      },
      {
        "key": "saintThereseOfTheChildJesusVirginSecondaryPatronessOfFrance",
        "name": "Saint Therese of The Child Jesus, Virgin, Secondary Patroness of France",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 1 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintJohnXxiiiPope",
        "name": "Saint John XXIII, Pope",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 11 }),
        "data": {}
      },
      {
        "key": "saintJohnPaulIiPope",
        "name": "Saint John Paul II, Pope",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 22 }),
        "data": {}
      }
    ];
  }
};


