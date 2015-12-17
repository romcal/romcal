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
        "key": "saintEulogiusOfCordobaBishop",
        "name": "Saint Eulogius of Cordoba, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 9 }),
        "data": {}
      },
      {
        "key": "saintsFructuosusBishopAndAuguriusAndEulogiusDeaconsMartyrs",
        "name": "Saints Fructuosus, Bishop, and Augurius and Eulogius, Deacons, Martyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 20 }),
        "data": {}
      },
      {
        "key": "saintVincentDeaconAndMartyr",
        "name": "Saint Vincent, Deacon and Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 22 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintIldephonsusOfToledoBishop",
        "name": "Saint Ildephonsus of Toledo, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 23 }),
        "data": {}
      },
      {
        "key": "saintsCyrilMonkAndMethodiusBishop",
        "name": "Saints Cyril, Monk, and Methodius, Bishop, Patrons of Europe",
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
        "key": "saintHermenegildMartyr",
        "name": "Saint Hermenegild, Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 13 }),
        "data": {}
      },
      {
        "key": "saintIsidoreOfSevilleBishopAndDoctorOfTheChurch",
        "name": "Saint Isidore of Seville, Bishop and Doctor of The Church",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 26 }),
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
        "key": "saintJohnOfAvilaPriest",
        "name": "Saint John of Avila, Priest",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 10 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintIsidoreTheFarmer",
        "name": "Saint Isidore The Farmer",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 15 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintPaschalBaylon",
        "name": "Saint Paschal Baylon",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 17 }),
        "data": {}
      },
      {
        "key": "saintJoaquinaVedruna",
        "name": "Saint Joaquina Vedruna",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 22 }),
        "data": {}
      },
      {
        "key": "saintFerdinand",
        "name": "Saint Ferdinand",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 30 }),
        "data": {}
      },
      {
        "key": "saintMariaMicaelaOfTheBlessedSacramentVirgin",
        "name": "Saint Maria Micaela of The Blessed Sacrament, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 15 }),
        "data": {}
      },
      {
        "key": "saintPelagiusMartyr",
        "name": "Saint Pelagius, Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 26 }),
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
        "key": "ourLadyOfMountCarmel",
        "name": "Our Lady of Mount Carmel",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 16 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintBridgetOfSweedenReligious",
        "name": "Saint Bridget of Sweeden, Religious, Patron of Europe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 23 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ Titles.PATRON_OF_EUROPE ]
          }
        }
      },
      {
        "key": "saintJamesApostlePatronOfSpain",
        "name": "Saint James, Apostle, Patron of Spain",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 25 }),
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
        "key": "saintEzequielMorenoBishop",
        "name": "Saint Ezequiel Moreno, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 19 }),
        "data": {}
      },
      {
        "key": "saintTeresaOfJesusJornetEIbarsVirgin",
        "name": "Saint Teresa of Jesus Jornet e Ibars, Virgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 26 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintFrancisBorgiaPriest",
        "name": "Saint Francis Borgia, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 3 }),
        "data": {}
      },
      {
        "key": "saintThomasOfVillanovaBishop",
        "name": "Saint Thomas of Villanova, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 10 }),
        "data": {}
      },
      {
        "key": "saintSoledadTorresAcostaVirgin",
        "name": "Saint Soledad Torres Acosta, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 11 }),
        "data": {}
      },
      {
        "key": "ourLadyOfThePillar",
        "name": "Our Lady of The Pillar",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 12 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintTeresaOfJesusVirginAndDoctorOfTheChurch",
        "name": "Saint Teresa of Jesus, Virgin and Doctor of The Church",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 15 }),
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
        "name": "Saint Peter of Alcantara, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 19 }),
        "data": {}
      },
      {
        "key": "saintLeanderBishop",
        "name": "Saint Leander, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 13 }),
        "data": {}
      },
      {
        "key": "saintEulaliaOfMeridaVirginAndMartyr",
        "name": "Saint Eulalia of Merida, Virgin and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 10 }),
        "data": {}
      },
      {
        "key": "saintJohnOfTheCrossDoctorOfTheChurch",
        "name": "Saint John of The Cross, Doctor of The Church",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 14 }),
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
        "name": "Jesus Christ, The Eternal High Priest",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 16 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      }
    ];
  }
};
