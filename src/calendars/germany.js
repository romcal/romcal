import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {

  let _dates = [
    {
      "key": "saintJohnNeumannBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 0, day: 5 }),
      "data": {}
    },
    {
      "key": "saintValentineOfRaetiaBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 0, day: 7 }),
      "data": {}
    },
    {
      "key": "saintSeverinusOfNoricumMonk",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 0, day: 8 }),
      "data": {}
    },
    {
      "key": "saintMeinradMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 0, day: 21 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "blessedHenrySusoPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 0, day: 23 }),
      "data": {}
    },
    {
      "key": "saintRabanusMaurusBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 1, day: 4 }),
      "data": {}
    },
    {
      "key": "saintsCyrilMonkAndMethodiusBishop",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 1, day: 14 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [ Titles.PATRON_OF_EUROPE ]
        }
      }
    },
    {
      "key": "saintMatthiasTheApostle",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 1, day: 24 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintWalburgaAbbess",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 1, day: 25 }),
      "data": {}
    },
    {
      "key": "saintFridolinOfSackingenMonk",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 2, day: 6 }),
      "data": {}
    },
    {
      "key": "saintBrunoBonifaceOfQuerfurtBishopAndMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 2, day: 9 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "saintMatilda",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 2, day: 14 }),
      "data": {}
    },
    {
      "key": "saintClementMaryHofbauerPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 2, day: 15 }),
      "data": {}
    },
    {
      "key": "saintGertrudeOfNivellesAbbess",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 2, day: 17 }),
      "data": {}
    },
    {
      "key": "saintLudgerBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 2, day: 26 }),
      "data": {}
    },
    {
      "key": "saintLeoIxPopeOrBlessedMarcelCalloMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 3, day: 19 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "saintConradOfParzhamReligious",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 3, day: 21 }),
      "data": {}
    },
    {
      "key": "saintPeterCanisiusPriestAndDoctor",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 3, day: 27 }),
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
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 3, day: 29 }),
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
      "key": "saintFlorianAndHisCompanionsMartyrs",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 4 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "saintGotthardBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 5 }),
      "data": {}
    },
    {
      "key": "saintJohnNepomucenePriestAndMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 16 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "saintHermannJosephPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 21 }),
      "data": {}
    },
    {
      "key": "saintVitusMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 5, day: 15 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "saintBennoOfMeissenBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 5, day: 16 }),
      "data": {}
    },
    {
      "key": "saintHemmaOfGurk",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 5, day: 27 }),
      "data": {}
    },
    {
      "key": "saintOttoOfBambergBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 5, day: 30 }),
      "data": {}
    },
    {
      "key": "visitationOfTheBlessedVirginMary",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 6, day: 2 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintUlrichOfAugsburg",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 4 }),
      "data": {}
    },
    {
      "key": "saintWillibaldBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 7 }),
      "data": {}
    },
    {
      "key": "saintKilianBishopAndCompanionsMartyrs",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 8 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "saintsCanuteEricAndOlafMartyrs",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 10 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "saintBenedictOfNursiaAbbot",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 6, day: 11 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [ Titles.PATRON_OF_EUROPE ]
        }
      }
    },
    {
      "key": "saintsHenryAndCunigunde",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 13 }),
      "data": {}
    },
    {
      "key": "saintMargaretOfAntiochVirginAndMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 20 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "saintBridgetOfSwedenReligious",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 6, day: 23 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintChristopherMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 24 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 7, day: 9 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.RED,
          "titles": [
            Titles.MARTYR,
            Titles.PATRON_OF_EUROPE
          ]
        }
      }
    },
    {
      "key": "saintPaulinusOfTrierBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 7, day: 31 }),
      "data": {}
    },
    {
      "key": "saintHildegardOfBingenAbbessAndDoctor",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 8, day: 17 }),
      "data": {
        "meta": {
          "titles": [
            Titles.DOCTOR_OF_THE_CHURCH
          ]
        }
      }
    },
    {
      "key": "saintLambertBishopAndMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 8, day: 18 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "saintMauriceAndCompanionsMartyrs",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 8, day: 22 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "saintsRupertAndVirgiliusOfSalzburgBishops",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 8, day: 24 }),
      "data": {}
    },
    {
      "key": "saintNicholasOfFlueHermit",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 8, day: 25 }),
      "data": {}
    },
    {
      "key": "saintLeobaAbbess",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 8, day: 28 }),
      "data": {}
    },
    {
      "key": "saintGallAbbotAndMissionary",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 16 }),
      "data": {}
    },
    {
      "key": "saintWendelinAbbot",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 20 }),
      "data": {}
    },
    {
      "key": "saintUrsulaAndCompanionsVirginsAndMartyrs",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 21 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "saintWolfgangOfRegensburgBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 31 }),
      "data": {}
    },
    {
      "key": "saintHubertOfLiegeBishopOrSaintPirminAbbotAndBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 10, day: 3 }),
      "data": {}
    },
    {
      "key": "saintLeonardOfNoblacHermit",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 10, day: 6 }),
      "data": {}
    },
    {
      "key": "saintWillibrordBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 10, day: 7 }),
      "data": {}
    },
    {
      "key": "saintLeopoldIII",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 10, day: 15 }),
      "data": {}
    },
    {
      "key": "saintGertrudeTheGreatVirgin",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 10, day: 17 }),
      "data": {}
    },
    {
      "key": "saintElizabethOfHungary",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 10, day: 19 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintCorbinianBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 10, day: 20 }),
      "data": {}
    },
    {
      "key": "saintsConradAndGebhardOfConstanceBishops",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 10, day: 26 }),
      "data": {}
    },
    {
      "key": "saintLuciusOfChurBishopAndMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 11, day: 2 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "saintBarbaraVirginAndMartyrOrBlessedAdolphKolpingPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 11, day: 4 }),
      "data": {}
    },
    {
      "key": "saintAnnoIiBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 11, day: 5 }),
      "data": {}
    },
    {
      "key": "saintOdileOfAlsaceAbbess",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 11, day: 13 }),
      "data": {}
    }
  ];

  // Get localized celebration names
  return Utils.localizeDates(_dates);
};

export {
  dates
};
