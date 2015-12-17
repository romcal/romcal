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
        "key": "saintJohnNeumannBishop",
        "name": "Saint John Neumann, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 5 }),
        "data": {}
      },
      {
        "key": "saintValentineOfRaetiaBishop",
        "name": "Saint Valentine of Raetia, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 7 }),
        "data": {}
      },
      {
        "key": "saintSeverinusOfNOricumMonk",
        "name": "Saint Severinus of NOricum, Monk",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 8 }),
        "data": {}
      },
      {
        "key": "saintMeinradMartyr",
        "name": "Saint Meinrad, Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 21 }),
        "data": {}
      },
      {
        "key": "blessedHenrySusoPriest",
        "name": "Blessed Henry Suso, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 23 }),
        "data": {}
      },
      {
        "key": "saintRabanusMaurusBishop",
        "name": "Saint Rabanus Maurus, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 4 }),
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
        "key": "saintMatthiasApostle",
        "name": "Saint Matthias, Apostle",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 24 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintWalburgaAbbess",
        "name": "Saint Walburga, Abbess",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 25 }),
        "data": {}
      },
      {
        "key": "saintFridolinOfSackingenMonk",
        "name": "Saint Fridolin of Säckingen, Monk",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 6 }),
        "data": {}
      },
      {
        "key": "saintBrunoOfQuerfurtBishop",
        "name": "Saint Bruno of Querfurt, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 9 }),
        "data": {}
      },
      {
        "key": "saintMatilda",
        "name": "Saint Matilda",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 14 }),
        "data": {}
      },
      {
        "key": "saintClementMaryHofbauerPriest",
        "name": "Saint Clement Mary Hofbauer, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 15 }),
        "data": {}
      },
      {
        "key": "saintGertrudeOfNivellesAbbess",
        "name": "Saint Gertrude of Nivelles, Abbess",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 17 }),
        "data": {}
      },
      {
        "key": "saintLudgerBishop",
        "name": "Saint Ludger, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 26 }),
        "data": {}
      },
      {
        "key": "saintLeoIxPopeOrBlessedMarcelCalloMartyr",
        "name": "Saint Leo IX, Pope Or Blessed Marcel Callo, Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 19 }),
        "data": {}
      },
      {
        "key": "saintConradOfParzhamReligious",
        "name": "Saint Conrad of Parzham, Religious",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 21 }),
        "data": {}
      },
      {
        "key": "saintPeterCanisiusPriestAndDoctor",
        "name": "Saint Peter Canisius, Priest and Doctor",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 27 }),
        "data": {
          "meta": {
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
        "key": "saintFlOrianAndHisCompanionsMartyrs",
        "name": "Saint FlOrian and his Companions, Martyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 4 }),
        "data": {}
      },
      {
        "key": "saintGotthardBishop",
        "name": "Saint Gotthard, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 5 }),
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
        "key": "saintHermannJosephPriest",
        "name": "Saint Hermann Joseph, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 21 }),
        "data": {}
      },
      {
        "key": "saintVitusMartyr",
        "name": "Saint Vitus, Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 15 }),
        "data": {}
      },
      {
        "key": "saintBennoOfMeissenBishop",
        "name": "Saint Benno of Meissen, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 16 }),
        "data": {}
      },
      {
        "key": "saintHemmaOfGurk",
        "name": "Saint Hemma of Gurk",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 27 }),
        "data": {}
      },
      {
        "key": "saintOttoOfBambergBishop",
        "name": "Saint Otto of Bamberg, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 30 }),
        "data": {}
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
        "key": "saintUlrichOfAugsburg",
        "name": "Saint Ulrich of Augsburg",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 4 }),
        "data": {}
      },
      {
        "key": "saintWillibaldBishop",
        "name": "Saint Willibald, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 7 }),
        "data": {}
      },
      {
        "key": "saintKilianBishopAndCompanionsMartyrs",
        "name": "Saint Kilian, Bishop and Companions, Martyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 8 }),
        "data": {}
      },
      {
        "key": "saintsCanuteEricAndOlafMartyrs",
        "name": "Saints Canute, Eric and Olaf, Martyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 10 }),
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
        "key": "saintsHenryAndCunigunde",
        "name": "Saints Henry and Cunigunde",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 13 }),
        "data": {}
      },
      {
        "key": "saintMargaretOfAntiochVirginAndMartyr",
        "name": "Saint Margaret of Antioch, Virgin and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 20 }),
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
        "key": "saintChristopherMartyr",
        "name": "Saint Christopher, Martyr",
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
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ Titles.PATRON_OF_EUROPE ]
          }
        }
      },
      {
        "key": "saintPaulinusOfTrierBishop",
        "name": "Saint Paulinus of Trier, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 31 }),
        "data": {}
      },
      {
        "key": "saintHildegardOfBingenAbbessAndDoctor",
        "name": "Saint Hildegard of Bingen, Abbess and Doctor",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 17 }),
        "data": {
          "meta": {
            "titles": [
              Titles.DOCTOR_OF_THE_CHURCH
            ]
          }
        }
      },
      {
        "key": "saintLambertOfMaastrichtBishopAndMartyr",
        "name": "Saint Lambert of Maastricht, Bishop and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 18 }),
        "data": {}
      },
      {
        "key": "saintMauriceAndCompanionsMartyrs",
        "name": "Saint Maurice and Companions, Martyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 22 }),
        "data": {}
      },
      {
        "key": "saintsRupertAndVirgiliusOfSalzburgBishops",
        "name": "Saints Rupert and Virgilius of Salzburg, Bishops",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 24 }),
        "data": {}
      },
      {
        "key": "saintNicholasOfFlueHermit",
        "name": "Saint Nicholas of Flüe, Hermit",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 25 }),
        "data": {}
      },
      {
        "key": "saintLeobaAbbess",
        "name": "Saint Leoba, Abbess",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 28 }),
        "data": {}
      },
      {
        "key": "saintGallAbbot",
        "name": "Saint Gall, Abbot",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 16 }),
        "data": {}
      },
      {
        "key": "saintWendelinAbbot",
        "name": "Saint Wendelin, Abbot",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 20 }),
        "data": {}
      },
      {
        "key": "saintUrsulaAndCompanionsVirginsAndMartyrs",
        "name": "Saint Ursula and Companions, Virgins and Martyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 21 }),
        "data": {}
      },
      {
        "key": "saintWolfgangOfRegensburgBishop",
        "name": "Saint Wolfgang of Regensburg, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 31 }),
        "data": {}
      },
      {
        "key": "saintHubertOfLiegeBishopOrSaintPirminAbbotAndBishop",
        "name": "Saint Hubert of Liege, Bishop Or Saint Pirmin, Abbot and Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 3 }),
        "data": {}
      },
      {
        "key": "saintLeonardOfNoblacHermit",
        "name": "Saint Leonard of Noblac, Hermit",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 6 }),
        "data": {}
      },
      {
        "key": "saintWillibrordBishop",
        "name": "Saint Willibrord, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 7 }),
        "data": {}
      },
      {
        "key": "saintLeopoldIii",
        "name": "Saint Leopold III",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 15 }),
        "data": {}
      },
      {
        "key": "saintGertrudeTheGreatVirgin",
        "name": "Saint Gertrude The Great, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 17 }),
        "data": {}
      },
      {
        "key": "saintElizabethOfHungaryReligious",
        "name": "Saint Elizabeth of Hungary, Religious",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 19 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintCOrbinianBishop",
        "name": "Saint COrbinian, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 20 }),
        "data": {}
      },
      {
        "key": "saintsConradAndGebhardOfConstanceBishops",
        "name": "Saints Conrad and Gebhard of Constance, Bishops",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 26 }),
        "data": {}
      },
      {
        "key": "saintLuciusOfChurBishopAndMartyr",
        "name": "Saint Lucius of Chur, Bishop and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 2 }),
        "data": {}
      },
      {
        "key": "saintBarbaraVirginAndMartyrOrBlessedAdolphKolpingPriest",
        "name": "Saint Barbara, Virgin and Martyr Or Blessed Adolph Kolping, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 4 }),
        "data": {}
      },
      {
        "key": "saintAnnoIiBishop",
        "name": "Saint Anno II, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 5 }),
        "data": {}
      },
      {
        "key": "saintOdileOfAlsaceAbbess",
        "name": "Saint Odile of Alsace, Abbess",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 13 }),
        "data": {}
      }
    ];
  }
};
