var moment = require('moment'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Titles = require('../../data/titles'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {

    return [
      {
        "key": "blessedAloysiusStepinacBishopAndMartyr",
        "name": "Blessed Aloysius Stepinac, Bishop and Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 10 }),
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
        "key": "saintCatherineOfSienaVirginAndDoctor",
        "name": "Saint Catherine of Siena, Virgin, Doctor of the Church and Patron of Europe",
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
        "key": "blessedIvanMerz",
        "name": "Blessed Ivan Merz",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 10 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintLeopoldMandicPriest",
        "name": "Saint Leopold Mandic, Priest",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 12 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintQuirinusOfSescia",
        "name": "Saint Quirinus of Sescia",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 4 }),
        "data": {}
      },
      {
        "key": "blessedMaryOfJesusCrucifiedPetkovicVirgin",
        "name": "Blessed Mary of Jesus Crucified Petkovic, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 9 }),
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
        "key": "ourLadyOfBistrica",
        "name": "Our Lady of Bistrica",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 13 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintBirgittaReligious",
        "name": "Saint Birgitta, Religious",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 23 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedAugustinKazoticMartyr",
        "name": "Blessed Augustin Kazotic, Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 3 }),
        "data": {}
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
        "key": "saintMarkoKrizinPriestAndMartyr",
        "name": "Saint Marko Krizin, Priest and Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 7 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintNikolaTavelicPriestAndMartyr",
        "name": "Saint Nikola Tavelic, Priest and Martyr",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 14 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      }
    ];
  }
};


