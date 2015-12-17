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
        "key": "blessedGoncaloDeAmarantePriest",
        "name": "Blessed Goncalo de Amarante, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 11 }),
        "data": {}
      },
      {
        "key": "saintJohnDeBritoPriestAndMartyr",
        "name": "Saint John de Brito, Priest and Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 4 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "theFiveWoundsOfTheLord",
        "name": "The Five Wounds of The Lord",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 7 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
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
        "key": "saintTheotoniusPriest",
        "name": "Saint Theotonius, Priest",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 18 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedJacintaAndFranciscoMarto",
        "name": "Blessed Jacinta and Francisco Marto",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 20 }),
        "data": {}
      },
      {
        "key": "saintJohnOfGodPriest",
        "name": "Saint John of God, Priest",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 8 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
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
        "key": "blessedJoanOfPortugalVirgin",
        "name": "Blessed Joan of Portugal, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 12 }),
        "data": {}
      },
      {
        "key": "ourLadyOfFatima",
        "name": "Our Lady of Fatima",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 13 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "guardianAngelOfPortugal",
        "name": "Guardian Angel of Portugal",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 10 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintAnthonyOfLisbonPriestAndDoctorOfTheChurch",
        "name": "Saint Anthony of Lisbon, Priest and Doctor of The Church",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 13 }),
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
        "key": "blessedSanchaAndMafaldaVirginsOrBlessedTheresaOfPOrtugalReligious",
        "name": "Blessed Sancha and Mafalda, Virgins, Or Blessed Theresa of POrtugal, Religious",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 20 }),
        "data": {}
      },
      {
        "key": "saintElizabethOfPortugal",
        "name": "Saint Elizabeth of Portugal",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 4 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
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
        "key": "blessedInacioDeAzevedoPriestAndCompanionsMartyrs",
        "name": "Blessed Inacio de Azevedo, Priest, and Companions, Martyrs",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 17 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedBartholomewOfTheMartyrsBishop",
        "name": "Blessed Bartholomew of The Martyrs, Bishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 18 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
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
        "key": "saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr",
        "name": "Saint Teresa Benedicta of The Cross (Edith Stein), Virgin and Martyr, Patron of Europe",
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
        "key": "saintBeatriceOfSilvaVirgin",
        "name": "Saint Beatrice of Silva, Virgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 1 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintDenisAndCompanionsMartyrsSaintJohnLeonardiPriestBlessedJohnNewmanBishop",
        "name": "Saint Denis and Companions, Martyrs/Saint John Leonardi, Priest/Blessed John Newman, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 9 }),
        "data": {}
      },
      {
        "key": "blessedGoncaloDeLagosPriest",
        "name": "Blessed Goncalo de Lagos, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 27 }),
        "data": {}
      },
      {
        "key": "saintNunoDeSantaMaria",
        "name": "Saint Nuno de Santa Maria",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 6 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintFructuosusSaintMartinOfDumeAndSaintGeraldBishops",
        "name": "Saint Fructuosus, Saint Martin of Dume and Saint Gerald, Bishops",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 5 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      }
    ];
  }
};
