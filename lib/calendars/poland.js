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
        "key": "saintVincentPallottiPriest",
        "name": "Saint Vincent Pallotti, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 22 }),
        "data": {}
      },
      {
        "key": "blessedVincentLewoniukAndCompanionsMartyrsOfPratulin",
        "name": "Blessed Vincent Lewoniuk and Companions, Martyrs Of Pratulin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 23 }),
        "data": {}
      },
      {
        "key": "blessedJerzyMatulewiczBishop",
        "name": "Blessed Jerzy Matulewicz, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 27 }),
        "data": {}
      },
      {
        "key": "blessedBolestawaMariaLamentVirgin",
        "name": "Blessed Bolestawa Maria Lament, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 29 }),
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
            "titles": [
              Titles.PATRON_OF_EUROPE
            ]
          }
        }
      },
      {
        "key": "saintCasimir",
        "name": "Saint Casimir",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 4 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintAdalbertBishopAndMartyr",
        "name": "Saint Adalbert, Bishop and Martyr",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 23 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.RED
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
        "key": "ourLadyHelpOfChristians",
        "name": "Our Lady, Help of Christians",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 24 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintFlorianMartyr",
        "name": "Saint Florian, Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 4 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintStanislausKazimierczykPriest",
        "name": "Saint Stanislaus Kazimierczyk, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 5 }),
        "data": {}
      },
      {
        "key": "saintsPhilipAndJamesApostles",
        "name": "Saints Philip and James, Apostles",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 6 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintStanislausBishopAndMartyr",
        "name": "Saint Stanislaus, Bishop and Martyr",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 8 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintAndrewBobolaPriestAndMartyr",
        "name": "Saint Andrew Bobola, Priest and Martyr",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 16 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintUrsulaLedochowskaVirgin",
        "name": "Saint Ursula Ledochowska, Virgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 29 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintJohnSarkanderPriestAndMartyrOrSaintZdzistawa",
        "name": "Saint John Sarkander, Priest and Martyr or Saint Zdzistawa",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 30 }),
        "data": {}
      },
      {
        "key": "blessedBogumitBishop",
        "name": "Blessed Bogumit, Bishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 10 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedAntoniNowowiejskiBishopAndCompanionsMartyrs",
        "name": "Blessed Antoni Nowowiejski, Bishop and Companions, Martyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 12 }),
        "data": {}
      },
      {
        "key": "blessedMichaelKozalBishopAndMartyr",
        "name": "Blessed Michael Kozal, Bishop and Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 14 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedJolantaReligious",
        "name": "Blessed Jolanta, Religious",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 15 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintAlbertChmielowskiReligious",
        "name": "Saint Albert Chmielowski, Religious",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 17 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintZygmuntGorazdowskPriest",
        "name": "Saint Zygmunt Gorazdowsk, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 26 }),
        "data": {}
      },
      {
        "key": "saintOttoBishop",
        "name": "Saint Otto, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 1 }),
        "data": {}
      },
      {
        "key": "blessedMariaTeresiaLedochowskaVirgin",
        "name": "Blessed Maria Teresia Ledochowska, Virgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 6 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintJohnOfDuklaPriest",
        "name": "Saint John Of Dukla, Priest",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 8 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintBenedictAbbot",
        "name": "Saint Benedict, Abbot",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 11 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintBrunoBonifaceOfQuerfurtBishopAndMartyr",
        "name": "Saint Bruno Boniface Of Querfurt, Bishop And Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 12 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintsAndrzejSwieradAndBenedictHermits",
        "name": "Saints Andrzej Swierad And Benedict, Hermits",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 13 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintSimonOfLipnicaPriest",
        "name": "Saint Simon of Lipnica, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 18 }),
        "data": {}
      },
      {
        "key": "blessedCzestawPriest",
        "name": "Blessed Czestaw, Priest",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 20 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintBridgetReligiousPatronOfEurope",
        "name": "Saint Bridget, Religious, Patron Of Europe",
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
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedEdmundBojanowski",
        "name": "Blessed Edmund Bojanowski",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 7 }),
        "data": {}
      },
      {
        "key": "saintTeresaBenedictaOfTheCrossVirginAndMartyr",
        "name": "Saint Teresa Benedicta of The Cross (Edith Stein), Virgin & Martyr, Patron of Europe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 9 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.RED,
            "titles": [
              Titles.PATRON_OF_EUROPE
            ]
          }
        }
      },
      {
        "key": "saintHyacinthPriest",
        "name": "Saint Hyacinth, Priest",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 17 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "ourLadyOfCzestochowa",
        "name": "Our Lady of Czestochowa",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 26 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedBronistawaVirgin",
        "name": "Blessed Bronistawa, Virgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 1 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedMariaStellaAndCompanionsVirginsAndMartyrs",
        "name": "Blessed Maria Stella and Companions, Virgins and Martyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 4 }),
        "data": {}
      },
      {
        "key": "saintMelchiorGrodzieckiPriestAndMartyr",
        "name": "Saint Melchior Grodziecki, Priest and Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 7 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedAnielaSalawaVirgin",
        "name": "Blessed Aniela Salawa, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 9 }),
        "data": {}
      },
      {
        "key": "saintZygmuntSzczesnyFelinskiBishop",
        "name": "Saint Zygmunt Szczesny Felinski, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 17 }),
        "data": {}
      },
      {
        "key": "saintStanislausKostkaReligious",
        "name": "Saint Stanislaus Kostka, Religious",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 18 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedWtadystawOfGielniowPriest",
        "name": "Blessed Wtadystaw Of Gielniow, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 25 }),
        "data": {}
      },
      {
        "key": "saintFaustinaKowalskaReligious",
        "name": "Saint Faustina Kowalska, Religious",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 5 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedVincentKadtubekBishop",
        "name": "Blessed Vincent Kadtubek, Bishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 9 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedMaryAngelaTruszkowskaVirgin",
        "name": "Blessed Mary Angela Truszkowska, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 10 }),
        "data": {}
      },
      {
        "key": "blessedJohnBeyzymPriest",
        "name": "Blessed John Beyzym, Priest",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 12 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedHonoratKozminskiPriest",
        "name": "Blessed Honorat Kozminski, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 13 }),
        "data": {}
      },
      {
        "key": "saintJohnOfKetyPriest",
        "name": "Saint John of Kety, Priest",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 20 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedJakubStrzemieBishop",
        "name": "Blessed Jakub Strzemie, Bishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 21 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintJohnPaulIiPope",
        "name": "Saint John Paul II, Pope",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 22 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintJosefBilczewskiBishop",
        "name": "Saint Josef Bilczewski, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 23 }),
        "data": {}
      },
      {
        "key": "saintsBenedyktJanMateuszIsaakAndKrystynTheFirstMartyrsOfPolAnd",
        "name": "Saints Benedykt, Jan, Mateusz, Isaak and Krystyn, The first Martyrs of PolAnd",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 13 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.RED
          }
        }
      },
      {
        "key": "blessedKarolinaKozkownaVirginAndMartyr",
        "name": "Blessed Karolina Kozkowna, Virgin and Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 18 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedSalomeVirgin",
        "name": "Blessed Salome, Virgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 19 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintRafatKalinowskiPriest",
        "name": "Saint Rafat Kalinowski, Priest",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 20 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedMaryOfJesusTheGoodShepherdVirgin",
        "name": "Blessed Mary of Jesus The Good Shepherd, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 25 }),
        "data": {}
      },
      {
        "key": "blessedRafatChylinskiPriest",
        "name": "Blessed Rafat Chylinski, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 1 }),
        "data": {}
      },
      {
        "key": "saintBarbaraVirginAndMartyr",
        "name": "Saint Barbara, Virgin And Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 4 }),
        "data": {}
      },
      {
        "key": "maryMotherOfTheChurch",
        "name": "Mary, Mother of The Church",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 13 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "ourLordJesusChristTheEternalHighPriest",
        "name": "Our Lord Jesus Christ, The Eternal High Priest",
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
