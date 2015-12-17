var moment = require('moment'),
    Dates = require('../dates'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Titles = require('../../data/titles'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {

    return [
      {
        "key": "saintScholasticaVirgin",
        "name": "Saint Scholastica, Virgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 9 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
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
        "key": "blessedOsannaOfCattaroVirgin",
        "name": "Blessed Osanna of Cattaro, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 27 }),
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
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 13 }),
        "data": {}
      },
      {
        "key": "saintElijahProphet",
        "name": "Saint Elijah, prophet",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 20 }),
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
        "key": "saintClementOfOhridAndGorazdBishopsAndCompanions",
        "name": "Saint Clement of Ohrid and Gorazd, Bishops and Companions",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 27 }),
        "data": {}
      },
      {
        "key": "blessedAugustinKazoticMartyrBishop",
        "name": "Blessed Augustin Kazotic, Martyr, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 3 }),
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
        "key": "saintMarkoKrizinPriestAndMartyr",
        "name": "Saint Marko Krizin, Priest and Martyr",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 7 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedGraziaOfCattaro",
        "name": "Blessed Grazia of Cattaro",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 27 }),
        "data": {}
      },
      {
        "key": "saintNikolaTavelicPriestAndMartyr",
        "name": "Saint Nikola Tavelic, Priest and Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 14 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      // Monday after Pentecost
      {
        "key": "maryMotherOfTheChurch",
        "name": "Mary, Mother of The Church",
        "type": Types[6],
        "moment": ( function( y ) {
          return Dates.pentecostSunday( y ).add( 1, 'days');
        }( arguments[0] )),
        "data": {}
      }
    ];
  }
};  


