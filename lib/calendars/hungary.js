var _ = require('lodash'),
    moment = require('moment'),
    range = require('moment-range'),
    Utils = require('../utils'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Dates = require('../dates'),
    Titles = require('../../data/titles'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {
    return [
      {
        "key": "saintMargaretOfHungary",
        "name": "Saint Margaret of Hungary",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 18 }),
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
        "key": "saintMatthiasApostle",
        "name": "Saint Matthias, Apostle",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 24 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintAdalbertBishopAndMartyr",
        "name": "Saint Adalbert, Bishop and Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 23 }),
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
        "key": "saintFlorianMartyr",
        "name": "Saint Florian, Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 4 }),
        "data": {}
      },
      {
        "key": "blessedGisela",
        "name": "Blessed Gisela",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 7 }),
        "data": {}
      },
      {
        "key": "blessedSaraSalkahaziVirginAndMartyr",
        "name": "Blessed Sara Salkahazi, Virgin and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 11 }),
        "data": {}
      },
      {
        "key": "saintJohnNepomucenePriestAndMartyr",
        "name": "Saint John Nepomucene, Priest and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 16 }),
        "data": {}
      },
      {
        "key": "blessedVilmosAporBishopAndMartyr",
        "name": "Blessed Vilmos Apor, Bishop and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 23 }),
        "data": {}
      },
      {
        "key": "ourLadyHelpOfChristians",
        "name": "Our Lady, Help of Christians",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 24 }),
        "data": {}
      },
      {
        "key": "transferOfTheRelicsOfSaintStephen",
        "name": "Transfer of The Relics of Saint Stephen",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 30 }),
        "data": {}
      },
      {
        "key": "blessedIstvanSandorMartyr",
        "name": "Blessed Istvan Sandor, Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 8 }),
        "data": {}
      },
      {
        "key": "saintLadislaus",
        "name": "Saint Ladislaus",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 27 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "visitationOfTheBlessedVirginMary",
        "name": "Visitation of The Blessed Virgin Mary",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 2 }),
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
        "key": "saintsAndrewZoerardusAndBenedictHermits",
        "name": "Saints Andrew Zoerardus and Benedict, Hermits",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 17 }),
        "data": {}
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
        "key": "saintKingaVirgin",
        "name": "Saint Kinga, Virgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 24 }),
        "data": {}
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
        "key": "blessedInnocentXiPope",
        "name": "Blessed Innocent XI, Pope",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 13 }),
        "data": {}
      },
      {
        "key": "saintStephenOfHungary",
        "name": "Saint Stephen of Hungary",
        "type": "SOLEMNITY",
        "moment": moment.utc({ year: arguments[0], month: 7, day: 20 }),
        "data": {}
      },
      {
        "key": "blessedTeresaOfCalcuttaReligious",
        "name": "Blessed Teresa of Calcutta, Religious",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 5 }),
        "data": {}
      },
      {
        "key": "saintsMarkoKrizinMelicharGrodeckiAndStephenPongracPriestsAndMartyrs",
        "name": "Saints Marko Krizin, Melichar Grodecki and Stephen Pongrac, Priests and Martyrs",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 7 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintGerardBishop",
        "name": "Saint Gerard, Bishop",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 24 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "ourLadyOfHungary",
        "name": "Our Lady of Hungary",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 8 }),
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
      },
      {
        "key": "saintMaurusBishop",
        "name": "Saint Maurus, Bishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 25 }),
        "data": {}
      },
      {
        "key": "blessedTheodoreRomzhaBishopAndMartyr",
        "name": "Blessed Theodore Romzha, Bishop and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 31 }),
        "data": {}
      },
      {
        "key": "saintEmeric",
        "name": "Saint Emeric",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 4 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "hungarianSaintsAndBlesseds",
        "name": "Hungarian Saints and Blesseds",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 13 }),
        "data": {}
      }
    ];
  }
};
