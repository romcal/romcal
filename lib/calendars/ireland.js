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
        "key": "saintMunchinBishop",
        "name": "Saint Munchin, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 3 }),
        "data": {}
      },
      {
        "key": "saintItaVirgin",
        "name": "Saint Ita, Virgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 15 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintFursaAbbotAndMissionary",
        "name": "Saint Fursa, Abbot and Missionary",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 16 }),
        "data": {}
      },
      {
        "key": "saintAidanBishop",
        "name": "Saint Aidan, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 30 }),
        "data": {}
      },
      {
        "key": "saintBrigidVirgin",
        "name": "Saint Brigid, Virgin",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 1 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintMelBishop",
        "name": "Saint Mel, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 7 }),
        "data": {}
      },
      {
        "key": "saintGobnaitVirgin",
        "name": "Saint Gobnait, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 11 }),
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
        "key": "saintFintan",
        "name": "Saint Fintan",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 17 }),
        "data": {}
      },
      {
        "key": "saintDavidBishop",
        "name": "Saint David, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 1 }),
        "data": {}
      },
      {
        "key": "saintKieranBishop",
        "name": "Saint Kieran, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 5 }),
        "data": {}
      },
      {
        "key": "saintSenanBishop",
        "name": "Saint Senan, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 8 }),
        "data": {}
      },
      {
        "key": "saintAengusOengusBishopAndAbbot",
        "name": "Saint Aengus (Oengus), Bishop and Abbot",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 11 }),
        "data": {}
      },
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
        "key": "saintEndaAbbot",
        "name": "Saint Enda, Abbot",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 21 }),
        "data": {}
      },
      {
        "key": "saintMacartanBishop",
        "name": "Saint Macartan, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 24 }),
        "data": {}
      },
      {
        "key": "saintCeallachCelsusBishop",
        "name": "Saint Ceallach (Celsus), Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 1 }),
        "data": {}
      },
      {
        "key": "saintMolaiseLaisrenLaserianBishop",
        "name": "Saint Molaise (Laisren, Laserian), Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 18 }),
        "data": {}
      },
      {
        "key": "saintAsicusBishop",
        "name": "Saint Asicus, Bishop",
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
        "key": "saintConlethBishop",
        "name": "Saint Conleth, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 4 }),
        "data": {}
      },
      {
        "key": "blessedEdmundIgnatiusRiceReligious",
        "name": "Blessed Edmund Ignatius Rice, Religious",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 5 }),
        "data": {}
      },
      {
        "key": "saintComgallAbbot",
        "name": "Saint Comgall, Abbot",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 10 }),
        "data": {}
      },
      {
        "key": "saintCarthageBishopMochuta",
        "name": "Saint Carthage, Bishop (Mochuta)",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 15 }),
        "data": {}
      },
      {
        "key": "saintBrendanAbbot",
        "name": "Saint Brendan, Abbot",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 16 }),
        "data": {}
      },
      {
        "key": "saintKevinAbbot",
        "name": "Saint Kevin, Abbot",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 3 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintJarlathBishop",
        "name": "Saint Jarlath, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 6 }),
        "data": {}
      },
      {
        "key": "saintColmanOfDromoreBishop",
        "name": "Saint Colman of Dromore, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 7 }),
        "data": {}
      },
      {
        "key": "saintColumbaAbbotAndMissionary",
        "name": "Saint Columba, Abbot and Missionary",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 9 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintDavnetVirgin",
        "name": "Saint Davnet, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 14 }),
        "data": {}
      },
      {
        "key": "blessedIrishMartyrs",
        "name": "Blessed Irish Martyrs",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 20 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintOliverPlunkettBishopAndMartyr",
        "name": "Saint Oliver Plunkett, Bishop and Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 1 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintMoninneVirgin",
        "name": "Saint Moninne, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 6 }),
        "data": {}
      },
      {
        "key": "saintMaelruainMaolruainVirgin",
        "name": "Saint Maelruain (Maolruain), Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 7 }),
        "data": {}
      },
      {
        "key": "saintKillianBishopAndMartyr",
        "name": "Saint Killian, Bishop and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 8 }),
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
        "key": "saintDeclanBishop",
        "name": "Saint Declan, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 24 }),
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
        "key": "saintMuiredachBishopSaintAttractaVirginOrSaintLeliaVirgin",
        "name": "Saint Muiredach, Bishop, Saint Attracta, Virgin, Or Saint Lelia, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 12 }),
        "data": {}
      },
      {
        "key": "saintFachtnaBishop",
        "name": "Saint Fachtna, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 13 }),
        "data": {}
      },
      {
        "key": "ourLadyOfKnock",
        "name": "Our Lady of Knock",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 17 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintEugeneEoghanBishop",
        "name": "Saint Eugene (Eoghan), Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 23 }),
        "data": {}
      },
      {
        "key": "saintFiacreMonk",
        "name": "Saint Fiacre, Monk",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 30 }),
        "data": {}
      },
      {
        "key": "saintAidanOfLindisfarneBishopAndMissionary",
        "name": "Saint Aidan of Lindisfarne, Bishop and Missionary",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 31 }),
        "data": {}
      },
      {
        "key": "saintMacNissiBishop",
        "name": "Saint Mac Nissi, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 4 }),
        "data": {}
      },
      {
        "key": "saintCiaranAbbot",
        "name": "Saint Ciaran, Abbot",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 9 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintAilbeBishop",
        "name": "Saint Ailbe, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 12 }),
        "data": {}
      },
      {
        "key": "saintPioOfPietralcina",
        "name": "Saint Pio of Pietralcina",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 23 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintFinbarrBishop",
        "name": "Saint Finbarr, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 25 }),
        "data": {}
      },
      {
        "key": "blessedColumbaMarmionPriest",
        "name": "Blessed Columba Marmion, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 3 }),
        "data": {}
      },
      {
        "key": "blessedJohnHenryNewmanPriest",
        "name": "Blessed John Henry Newman, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 9 }),
        "data": {}
      },
      {
        "key": "saintCaniceAbbot",
        "name": "Saint Canice, Abbot",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 11 }),
        "data": {}
      },
      {
        "key": "saintGallAbbotAndMissionary",
        "name": "Saint Gall, Abbot and Missionary",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 16 }),
        "data": {}
      },
      {
        "key": "saintOtteranMonk",
        "name": "Saint Otteran, Monk",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 27 }),
        "data": {}
      },
      {
        "key": "saintColmanOfKilmacduaghBishop",
        "name": "Saint Colman of Kilmacduagh, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 29 }),
        "data": {}
      },
      {
        "key": "saintMalachyBishop",
        "name": "Saint Malachy, Bishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 3 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "allSaintsOfIreland",
        "name": "All Saints of Ireland",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 6 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintWillibrordBishop",
        "name": "Saint Willibrord, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 7 }),
        "data": {}
      },
      {
        "key": "saintLaurenceOTooleBishop",
        "name": "Saint Laurence O'Toole, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 14 }),
        "data": {}
      },
      {
        "key": "saintColumbanAbbotAndMissionary",
        "name": "Saint Columban, Abbot and Missionary",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 23 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintColmanOfCloyneBishop",
        "name": "Saint Colman of Cloyne, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 25 }),
        "data": {}
      },
      {
        "key": "saintFergalBishopAndMissionary",
        "name": "Saint Fergal, Bishop and Missionary",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 27 }),
        "data": {}
      },
      {
        "key": "saintFinnianOfClonardBishop",
        "name": "Saint Finnian of Clonard, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 12 }),
        "data": {}
      },
      {
        "key": "saintFlannanBishop",
        "name": "Saint Flannan, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 18 }),
        "data": {}
      },
      {
        "key": "saintFachananOfKilfenoraBishop",
        "name": "Saint Fachanan of Kilfenora, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 20 }),
        "data": {}
      }
    ];
  }
};
