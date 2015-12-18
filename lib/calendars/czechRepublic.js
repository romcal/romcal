var moment = require('moment'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Titles = require('../../data/titles'),
    Dates = require('../dates'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {

    return [
      {
        "key": "ourLadyMotherOfChristianUnity",
        "name": "Our Lady, Mother of Christian Unity",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 18 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "ourLadyMediatrixOfAllGrace",
        "name": "Our Lady, Mediatrix of All Grace",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 8 }),
        "data": {}
      },
      {
        "key": "saintAdalbertBishopAndMartyr",
        "name": "Saint Wojciech (Adalbert of Prague), Bishop and Martyr",
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
        "key": "saintSigismundMartyr",
        "name": "Saint Sigismund, Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 30 }),
        "data": {}
      },
      {
        "key": "saintJohnNepomucenePriestAndMartyr",
        "name": "Saint John Nepomucene, Priest and Martyr",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 16 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintClementMaryHofbauerPriest",
        "name": "Saint Clement Mary Hofbauer, Priest",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 20 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintZdislava",
        "name": "Saint Zdislava",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 30 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintVitusMartyr",
        "name": "Saint Vitus, Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 15 }),
        "data": {}
      },
      {
        "key": "saintJohnNeumannBishop",
        "name": "Saint John Neumann, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 19 }),
        "data": {}
      },
      {
        "key": "saintProcopiusAbbot",
        "name": "Saint Procopius, Abbot",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 4 }),
        "data": {}
      },
      {
        "key": "saintsCyrilMonkAndMethodiusBishop",
        "name": "Saints Cyril, Monk and Methodius, Bishop, Patrons of Europe",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 5 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ Titles.PATRON_OF_EUROPE ]
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
        "key": "blessedHrzonataMartyr",
        "name": "Blessed Hrzonata, Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 14 }),
        "data": {}
      },
      {
        "key": "blessedCeslausAndSaintHyacinthPriests",
        "name": "Blessed Ceslaus and Saint Hyacinth, Priests",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 17 }),
        "data": {}
      },
      {
        "key": "saintBridgetOfSweedenReligious",
        "name": "Saint Bridget of Sweeden, Religious, Patron of Europe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 23 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ 
              Titles.PATRON_OF_EUROPE 
            ]
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
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintsBenedyktJanMateuszIsaakAndKrystynMartyrs",
        "name": "Saints Benedykt, Jan, Mateusz, Isaak and Krystyn, Martyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 25 }),
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
        "key": "saintMelchiorGrodzieckiPriestAndMartyr",
        "name": "Saint Melchior Grodziecki, Priest and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 7 }),
        "data": {}
      },
      {
        "key": "blessedCharlesSpinolaPriestAndMartyr",
        "name": "Blessed Charles Spinola, Priest and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 10 }),
        "data": {}
      },
      {
        "key": "saintLudmilaMartyr",
        "name": "Saint Ludmila, Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 16 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintRadimBishop",
        "name": "Saint Radim, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 12 }),
        "data": {}
      },
      {
        "key": "blessedKarlOfAustria",
        "name": "Blessed Karl of Austria",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 21 }),
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
        "key": "saintWolfgangBishop",
        "name": "Saint Wolfgang, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 31 }),
        "data": {}
      },
      {
        "key": "saintAgnesOfBohemiaVirgin",
        "name": "Saint Agnes of Bohemia, Virgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 13 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintEdmundCampionPriestAndMartyr",
        "name": "Saint Edmund Campion, Priest and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 1 }),
        "data": {}
      }
    ];

  }
};


