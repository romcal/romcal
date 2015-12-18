var _ = require('lodash'),  
    moment = require('moment'),
    Utils = require('../utils'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Titles = require('../../data/titles'),
    Types = require('../../data/types').types;

module.exports = {
  
  dates: function() {

    return [
      {
        "key": "saintsBasilTheGreatAndGregoryNazianzenBishopsAndDoctors",
        "name": Utils.localize({
          key: 'general.saintsBasilTheGreatAndGregoryNazianzenBishopsAndDoctors'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 2 }),
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
        "key": "theMostHolyNameOfJesus",
        "name": Utils.localize({
          key: 'general.theMostHolyNameOfJesus'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 3 }),
        "data": {}
      },
      {
        "key": "saintRaymondOfPenyafortPriest",
        "name": Utils.localize({
          key: 'general.saintRaymondOfPenyafortPriest'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 7 }),
        "data": {}
      },
      {
        "key": "saintHilaryOfPoitiersBishopAndDoctor",
        "name": Utils.localize({
          key: 'general.saintHilaryOfPoitiersBishopAndDoctor'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 13 }),
        "data": {
          "meta": {
            "titles": [
              Titles.DOCTOR_OF_THE_CHURCH
            ]
          }
        }
      },
      {
        "key": "saintAnthonyOfEgyptAbbot",
        "name": Utils.localize({
          key: 'general.saintAnthonyOfEgyptAbbot'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 17 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintsFabianAndSebastianPopeAndMartyrs",
        "name": Utils.localize({
          key: 'general.saintsFabianAndSebastianPopeAndMartyrs'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 20 }),
        "data": {
          "meta": {
            "titles": [
              Titles.MARTYR
            ]
          }          
        }
      },
      {
        "key": "saintAgnesVirginAndMartyr",
        "name": Utils.localize({
          key: 'general.saintAgnesVirginAndMartyr'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 21 }),
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
        "key": "saintVincentDeaconAndMartyr",
        "name": Utils.localize({
          key: 'general.saintVincentDeaconAndMartyr'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 22 }),
        "data": {
          "meta": {
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "saintFrancisDeSalesBishopAndDoctor",
        "name": Utils.localize({
          key: 'general.saintFrancisDeSalesBishopAndDoctor'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 24 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [
              Titles.DOCTOR_OF_THE_CHURCH
            ]
          }
        }
      },
      // The proper color for the Chair of Peter (Feast, Feb 22) and the Conversion of 
      //cSt. Paul (Feast, Jan 25) is white, although both St. Peter and St. Paul 
      // were martyrs.
      {
        "key": "conversionOfSaintPaulApostle",
        "name": Utils.localize({
          key: 'general.conversionOfSaintPaulApostle'
        }),
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 25 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintsTimothyAndTitusBishops",
        "name": Utils.localize({
          key: 'general.saintsTimothyAndTitusBishops'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 26 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintAngelaMericiVirgin",
        "name": Utils.localize({
          key: 'general.saintAngelaMericiVirgin'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 27 }),
        "data": {}
      },
      {
        "key": "saintThomasAquinasPriestAndDoctor",
        "name": Utils.localize({
          key: 'general.saintThomasAquinasPriestAndDoctor'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 28 }),
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
        "key": "saintJohnBoscoPriest",
        "name": Utils.localize({
          key: 'general.saintJohnBoscoPriest'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 31 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintBlaseBishopAndMartyrSaintAnsgarBishop",
        "name": Utils.localize({
          key: 'general.saintBlaseBishopAndMartyrSaintAnsgarBishop'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 3 }),
        "data": {}
      },
      {
        "key": "saintAgathaVirginMartyr",
        "name": Utils.localize({
          key: 'general.saintAgathaVirginMartyr'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 5 }),
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
        "key": "saintPaulMikiAndCompanionsMartyrs",
        "name": Utils.localize({
          key: 'general.saintPaulMikiAndCompanionsMartyrs'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 6 }),
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
        "key": "saintJeromeEmilianiSaintJosephineBakhitaVirgin",
        "name": Utils.localize({
          key: 'general.saintJeromeEmilianiSaintJosephineBakhitaVirgin'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 8 }),
        "data": {}
      },
      {
        "key": "saintScholasticaVirgin",
        "name": Utils.localize({
          key: 'general.saintScholasticaVirgin'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 10 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "ourLadyOfLourdes",
        "name": Utils.localize({
          key: 'general.ourLadyOfLourdes'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 11 }),
        "data": {}
      },
      {
        "key": "saintsCyrilMonkAndMethodiusBishop",
        "name": Utils.localize({
          key: 'general.saintsCyrilMonkAndMethodiusBishop'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 14 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ Titles.PATRON_OF_EUROPE ]
          }
        }
      },
      {
        "key": "sevenHolyFoundersOfTheServiteOrder",
        "name": Utils.localize({
          key: 'general.sevenHolyFoundersOfTheServiteOrder'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 17 }),
        "data": {}
      },
      {
        "key": "saintPeterDamianBishopAndDoctorOfTheChurch",
        "name": Utils.localize({
          key: 'general.saintPeterDamianBishopAndDoctorOfTheChurch'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 21 }),
        "data": {
          "meta": {
            "titles": [
              Titles.DOCTOR_OF_THE_CHURCH
            ]
          }
        }
      },
      {
        "key": "chairOfSaintPeterApostle",
        "name": Utils.localize({
          key: 'general.chairOfSaintPeterApostle'
        }),
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 22 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintPolycarpBishopAndMartyr",
        "name": Utils.localize({
          key: 'general.saintPolycarpBishopAndMartyr'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 23 }),
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
        "key": "saintCasimir",
        "name": Utils.localize({
          key: 'general.saintCasimir'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 4 }),
        "data": {}
      },
      {
        "key": "saintsPerpetuaAndFelicityMartyrs",
        "name": Utils.localize({
          key: 'general.saintsPerpetuaAndFelicityMartyrs'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 7 }),
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
        "key": "saintJohnOfGodReligious",
        "name": Utils.localize({
          key: 'general.saintJohnOfGodReligious'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 8 }),
        "data": {}
      },
      {
        "key": "saintFrancesOfRomeReligious",
        "name": Utils.localize({
          key: 'general.saintFrancesOfRomeReligious'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 9 }),
        "data": {}
      },
      {
        "key": "saintPatrickBishop",
        "name": Utils.localize({
          key: 'general.saintPatrickBishop'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 17 }),
        "data": {}
      },
      {
        "key": "saintCyrilOfJerusalemBishopAndDoctor",
        "name": Utils.localize({
          key: 'general.saintCyrilOfJerusalemBishopAndDoctor'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 18 }),
        "data": {
          "meta": {
            "titles": [
              Titles.DOCTOR_OF_THE_CHURCH
            ]
          }
        }
      },
      {
        "key": "saintTuribiusOfMogrovejoBishop",
        "name": Utils.localize({
          key: 'general.saintTuribiusOfMogrovejoBishop'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 23 }),
        "data": {}
      },
      {
        "key": "saintFrancisOfPaolaHermit",
        "name": Utils.localize({
          key: 'general.saintFrancisOfPaolaHermit'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 2 }),
        "data": {}
      },
      {
        "key": "saintIsidoreOfSevilleBishopAndDoctorOfTheChurch",
        "name": Utils.localize({
          key: 'general.saintIsidoreOfSevilleBishopAndDoctorOfTheChurch'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 4 }),
        "data": {
          "meta": {
            "titles": [
              Titles.DOCTOR_OF_THE_CHURCH
            ]
          }
        }
      },
      {
        "key": "saintVincentFerrerPriest",
        "name": Utils.localize({
          key: 'general.saintVincentFerrerPriest'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 5 }),
        "data": {}
      },
      {
        "key": "saintJohnBaptistDeLaSallePriest",
        "name": Utils.localize({
          key: 'general.saintJohnBaptistDeLaSallePriest'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 7 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintStanislausBishopAndMartyr",
        "name": Utils.localize({
          key: 'general.saintStanislausBishopAndMartyr'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 11 }),
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
        "key": "saintMartinIPopeAndMartyr",
        "name": Utils.localize({
          key: 'general.saintMartinIPopeAndMartyr'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 13 }),
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
        "key": "saintAnselmOfCanterburyBishopAndDoctorOfTheChurch",
        "name": Utils.localize({
          key: 'general.saintAnselmOfCanterburyBishopAndDoctorOfTheChurch'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 21 }),
        "data": {
          "meta": {
            "titles": [
              Titles.DOCTOR_OF_THE_CHURCH
            ]
          }
        }
      },
      {
        "key": "saintGeorgeMartyrSaintAdalbertBishopMartyr",
        "name": Utils.localize({
          key: 'general.saintGeorgeMartyrSaintAdalbertBishopMartyr'
        }),
        "type": Types[6],
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
        "key": "saintFidelisOfSigmaringenPriestAndMartyr",
        "name": Utils.localize({
          key: 'general.saintFidelisOfSigmaringenPriestAndMartyr'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 24 }),
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
        "key": "saintMarkTheEvangelist",
        "name": Utils.localize({
          key: 'general.saintMarkTheEvangelist'
        }),
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 25 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintPeterChanelPriestAndMartyrSaintLouisGrignonDeMontfortPriest",
        "name": Utils.localize({
          key: 'general.saintPeterChanelPriestAndMartyrSaintLouisGrignonDeMontfortPriest'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 28 }),
        "data": {}
      },
      {
        "key": "saintCatherineOfSienaVirginAndDoctorOfTheChurch",
        "name": Utils.localize({
          key: 'general.saintCatherineOfSienaVirginAndDoctorOfTheChurch'
        }),
        "type": Types[5],
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
        "key": "saintPiusVPope",
        "name": Utils.localize({
          key: 'general.saintPiusVPope'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 30 }),
        "data": {}
      },
      {
        "key": "saintJosephTheWorker",
        "name": Utils.localize({
          key: 'general.saintJosephTheWorker'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 1 }),
        "data": {}
      },
      {
        "key": "saintAthanasiusBishopAndDoctor",
        "name": Utils.localize({
          key: 'general.saintAthanasiusBishopAndDoctor'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 2 }),
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
        "key": "saintsPhilipAndJamesApostles",
        "name": Utils.localize({
          key: 'general.saintsPhilipAndJamesApostles'
        }),
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 3 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintsNereusAndAchilleusMartyrsSaintPancrasMartyr",
        "name": Utils.localize({
          key: 'general.saintsNereusAndAchilleusMartyrsSaintPancrasMartyr'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 12 }),
        "data": {
          "meta": {
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "ourLadyOfFatima",
        "name": Utils.localize({
          key: 'general.ourLadyOfFatima'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 13 }),
        "data": {}
      },
      {
        "key": "saintMatthiasTheApostle",
        "name": Utils.localize({
          key: 'general.saintMatthiasTheApostle'
        }),
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 14 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintJohnIPopeAndMartyr",
        "name": Utils.localize({
          key: 'general.saintJohnIPopeAndMartyr'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 18 }),
        "data": {
          "meta": {
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "saintBernardineOfSienaPriest",
        "name": Utils.localize({
          key: 'general.saintBernardineOfSienaPriest'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 20 }),
        "data": {}
      },
      {
        "key": "saintChristopherMagallanesAndCompanionsMartyrs",
        "name": Utils.localize({
          key: 'general.saintChristopherMagallanesAndCompanionsMartyrs'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 21 }),
        "data": {
          "meta": {
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "saintRitaOfCascia",
        "name": Utils.localize({
          key: 'general.saintRitaOfCascia'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 22 }),
        "data": {}
      },
      {
        "key": "saintBedeTheVenerablePriestAndDoctorSaintGregoryViiPopeSaintMaryMagdaleneDePazziVirgin",
        "name": Utils.localize({
          key: 'general.saintBedeTheVenerablePriestAndDoctorSaintGregoryViiPopeSaintMaryMagdaleneDePazziVirgin'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 25 }),
        "data": {}
      },
      {
        "key": "saintPhilipNeriPriest",
        "name": Utils.localize({
          key: 'general.saintPhilipNeriPriest'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 26 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintAugustineOfCanterburyBishop",
        "name": Utils.localize({
          key: 'general.saintAugustineOfCanterburyBishop'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 27 }),
        "data": {}
      },
      {
        "key": "visitationOfTheBlessedVirginMary",
        "name": Utils.localize({
          key: 'general.visitationOfTheBlessedVirginMary'
        }),
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 31 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintJustinMartyr",
        "name": Utils.localize({
          key: 'general.saintJustinMartyr'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 1 }),
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
        "key": "saintsMarcellinusAndPeterMartyrs",
        "name": Utils.localize({
          key: 'general.saintsMarcellinusAndPeterMartyrs'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 2 }),
        "data": {
          "meta": {
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "saintsCharlesLwangaAndCompanionsMartyrs",
        "name": Utils.localize({
          key: 'general.saintsCharlesLwangaAndCompanionsMartyrs'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 3 }),
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
        "key": "saintBonifaceBishopMartyr",
        "name": Utils.localize({
          key: 'general.saintBonifaceBishopMartyr'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 5 }),
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
        "key": "saintNorbertBishop",
        "name": Utils.localize({
          key: 'general.saintNorbertBishop'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 6 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintEphremDeaconAndDoctor",
        "name": Utils.localize({
          key: 'general.saintEphremDeaconAndDoctor'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 9 }),
        "data": {
          "meta": {
            "titles": [
              Titles.DOCTOR_OF_THE_CHURCH
            ]
          }
        }
      },
      {
        "key": "saintBarnabasTheApostle",
        "name": Utils.localize({
          key: 'general.saintBarnabasTheApostle'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 11 }),
        "data": {}
      },
      {
        "key": "saintAnthonyOfPaduaPriestAndDoctor",
        "name": Utils.localize({
          key: 'general.saintAnthonyOfPaduaPriestAndDoctor'
        }),
        "type": Types[5],
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
        "key": "saintRomualdAbbot",
        "name": Utils.localize({
          key: 'general.saintRomualdAbbot'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 19 }),
        "data": {}
      },
      {
        "key": "saintAloysiusGonzagaReligious",
        "name": Utils.localize({
          key: 'general.saintAloysiusGonzagaReligious'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 21 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintPaulinusOfNolaBishopSaintsJohnFisherBishopAndThomasMoreMartyrs",
        "name": Utils.localize({
          key: 'general.saintPaulinusOfNolaBishopSaintsJohnFisherBishopAndThomasMoreMartyrs'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 22 }),
        "data": {}
      },
      {
        "key": "saintCyrilOfAlexandriaBishopAndDoctor",
        "name": Utils.localize({
          key: 'general.saintCyrilOfAlexandriaBishopAndDoctor'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 27 }),
        "data": {
          "meta": {
            "titles": [
              Titles.DOCTOR_OF_THE_CHURCH
            ]
          }
        }
      },
      {
        "key": "saintIrenaeusBishopAndMartyr",
        "name": Utils.localize({
          key: 'general.saintIrenaeusBishopAndMartyr'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 28 }),
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
        "key": "firstMartyrsOfTheChurchOfRome",
        "name": Utils.localize({
          key: 'general.firstMartyrsOfTheChurchOfRome'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 30 }),
        "data": {}
      },
      {
        "key": "saintThomasTheApostle",
        "name": Utils.localize({
          key: 'general.saintThomasTheApostle'
        }),
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 3 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintElizabethOfPortugal",
        "name": Utils.localize({
          key: 'general.saintElizabethOfPortugal'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 4 }),
        "data": {}
      },
      {
        "key": "saintAnthonyZaccariaPriest",
        "name": Utils.localize({
          key: 'general.saintAnthonyZaccariaPriest'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 5 }),
        "data": {}
      },
      {
        "key": "saintMariaGorettiVirginAndMartyr",
        "name": Utils.localize({
          key: 'general.saintMariaGorettiVirginAndMartyr'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 6 }),
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
        "key": "saintsAugustineZhaoRongPriestAndCompanionsMartyrs",
        "name": Utils.localize({
          key: 'general.saintsAugustineZhaoRongPriestAndCompanionsMartyrs'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 9 }),
        "data": {
          "meta": {
            "titles": [ 
              Titles.MARTYR 
            ]
          }
        }
      },
      {
        "key": "saintBenedictAbbot",
        "name": Utils.localize({
          key: 'general.saintBenedictAbbot'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 11 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ Titles.PATRON_OF_EUROPE ]
          }
        }
      },
      {
        "key": "saintHenryBishopAndMartyr",
        "name": Utils.localize({
          key: 'general.saintHenryBishopAndMartyr'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 13 }),
        "data": {
          "meta": {
            "titles": [ 
              Titles.MARTYR 
            ]
          }
        }
      },
      {
        "key": "saintCamillusDeLellisPriest",
        "name": Utils.localize({
          key: 'general.saintCamillusDeLellisPriest'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 14 }),
        "data": {}
      },
      {
        "key": "saintBonaventureBishopAndDoctor",
        "name": Utils.localize({
          key: 'general.saintBonaventureBishopAndDoctor'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 15 }),
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
        "key": "ourLadyOfMountCarmel",
        "name": Utils.localize({
          key: 'general.ourLadyOfMountCarmel'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 16 }),
        "data": {}
      },
      {
        "key": "saintApollinaris",
        "name": Utils.localize({
          key: 'general.saintApollinaris'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 20 }),
        "data": {}
      },
      {
        "key": "saintLawrenceOfBrindisiPriestAndDoctor",
        "name": Utils.localize({
          key: 'general.saintLawrenceOfBrindisiPriestAndDoctor'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 21 }),
        "data": {
          "meta": {
            "titles": [
              Titles.DOCTOR_OF_THE_CHURCH
            ]
          }
        }
      },
      {
        "key": "saintMaryMagdalene",
        "name": Utils.localize({
          key: 'general.saintMaryMagdalene'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 22 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintBirgittaReligious",
        "name": Utils.localize({
          key: 'general.saintBirgittaReligious'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 23 }),
        "data": {}
      },
      {
        "key": "saintSharbelMakhlufPriestAndHermit",
        "name": Utils.localize({
          key: 'general.saintSharbelMakhlufPriestAndHermit'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 24 }),
        "data": {}
      },
      {
        "key": "saintJamesApostle",
        "name": Utils.localize({
          key: 'general.saintJamesApostle'
        }),
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 25 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintsJoachimAndAnne",
        "name": Utils.localize({
          key: 'general.saintsJoachimAndAnne'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 26 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintMartha",
        "name": Utils.localize({
          key: 'general.saintMartha'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 29 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintPeterChrysologusBishopAndDoctor",
        "name": Utils.localize({
          key: 'general.saintPeterChrysologusBishopAndDoctor'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 30 }),
        "data": {
          "meta": {
            "titles": [
              Titles.DOCTOR_OF_THE_CHURCH
            ]
          }
        }
      },
      {
        "key": "saintIgnatiusOfLoyolaPriest",
        "name": Utils.localize({
          key: 'general.saintIgnatiusOfLoyolaPriest'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 31 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintAlphonsusMariaDeLiguoriBishopAndDoctorOfTheChurch",
        "name": Utils.localize({
          key: 'general.saintAlphonsusMariaDeLiguoriBishopAndDoctorOfTheChurch'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 1 }),
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
        "key": "saintEusebiusOfVercelliBishopSaintPeterJulianEymardPriest",
        "name": Utils.localize({
          key: 'general.saintEusebiusOfVercelliBishopSaintPeterJulianEymardPriest'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 2 }),
        "data": {}
      },
      {
        "key": "saintJeanVianneyTheCureOfArsPriest",
        "name": Utils.localize({
          key: 'general.saintJeanVianneyTheCureOfArsPriest'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 4 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "dedicationOfTheBasilicaOfSaintMaryMajor",
        "name": Utils.localize({
          key: 'general.dedicationOfTheBasilicaOfSaintMaryMajor'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 5 }),
        "data": {}
      },
      {
        "key": "saintSixtusIiPopeAndCompanionsMartyrsSaintCajetanPriest",
        "name": Utils.localize({
          key: 'general.saintSixtusIiPopeAndCompanionsMartyrsSaintCajetanPriest'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 7 }),
        "data": {}
      },
      {
        "key": "saintDominicPriest",
        "name": Utils.localize({
          key: 'general.saintDominicPriest'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 8 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr",
        "name": Utils.localize({
          key: 'general.saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 9 }),
        "data": {
          "meta": {
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "saintLawrenceDeaconMartyr",
        "name": Utils.localize({
          key: 'general.saintLawrenceDeaconMartyr'
        }),
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 10 }),
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
        "key": "saintClareVirgin",
        "name": Utils.localize({
          key: 'general.saintClareVirgin'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 11 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintJaneFrancesDeChantalReligious",
        "name": Utils.localize({
          key: 'general.saintJaneFrancesDeChantalReligious'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 12 }),
        "data": {}
      },
      {
        "key": "saintsPontianPopeHippolytusPriestMartyrs",
        "name": Utils.localize({
          key: 'general.saintsPontianPopeHippolytusPriestMartyrs'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 13 }),
        "data": {
          "meta": {
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "saintMaximilianMaryKolbePriestMartyr",
        "name": Utils.localize({
          key: 'general.saintMaximilianMaryKolbePriestMartyr'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 14 }),
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
        "key": "saintStephenOfHungary",
        "name": Utils.localize({
          key: 'general.saintStephenOfHungary'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 16 }),
        "data": {}
      },
      {
        "key": "saintJohnEudesPriest",
        "name": Utils.localize({
          key: 'general.saintJohnEudesPriest'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 19 }),
        "data": {}
      },
      {
        "key": "saintBernardOfClairvauxAbbotDoctorOfTheChurch",
        "name": Utils.localize({
          key: 'general.saintBernardOfClairvauxAbbotDoctorOfTheChurch'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 20 }),
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
        "key": "saintPiusXPope",
        "name": Utils.localize({
          key: 'general.saintPiusXPope'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 21 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "queenshipOfBlessedVirginMary",
        "name": Utils.localize({
          key: 'general.queenshipOfBlessedVirginMary'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 22 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintRoseOfLimaVirgin",
        "name": Utils.localize({
          key: 'general.saintRoseOfLimaVirgin'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 23 }),
        "data": {}
      },
      {
        "key": "saintBartholomewTheApostle",
        "name": Utils.localize({
          key: 'general.saintBartholomewTheApostle'
        }),
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 24 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintLouisSaintJosephOfCalasanzPriest",
        "name": Utils.localize({
          key: 'general.saintLouisSaintJosephOfCalasanzPriest'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 25 }),
        "data": {}
      },
      {
        "key": "saintMonica",
        "name": Utils.localize({
          key: 'general.saintMonica'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 27 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintAugustineOfHippoBishopDoctorOfTheChurch",
        "name": Utils.localize({
          key: 'general.saintAugustineOfHippoBishopDoctorOfTheChurch'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 28 }),
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
        "key": "theBeheadingOfSaintJohnTheBaptistMartyr",
        "name": Utils.localize({
          key: 'general.theBeheadingOfSaintJohnTheBaptistMartyr'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 29 }),
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
        "key": "saintGregoryTheGreatPopeDoctor",
        "name": Utils.localize({
          key: 'general.saintGregoryTheGreatPopeDoctor'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 3 }),
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
        "key": "birthOfTheBlessedVirginMary",
        "name": Utils.localize({
          key: 'general.birthOfTheBlessedVirginMary'
        }),
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 8 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintPeterClaverPriest",
        "name": Utils.localize({
          key: 'general.saintPeterClaverPriest'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 9 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "holyNameOfTheBlessedVirginMary",
        "name": Utils.localize({
          key: 'general.holyNameOfTheBlessedVirginMary'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 12 }),
        "data": {}
      },
      {
        "key": "saintJohnChrysostomBishopDoctor",
        "name": Utils.localize({
          key: 'general.saintJohnChrysostomBishopDoctor'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 13 }),
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
        "key": "ourLadyOfSorrows",
        "name": Utils.localize({
          key: 'general.ourLadyOfSorrows'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 15 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintsCorneliusPopeCyprianBishopMartyrs",
        "name": Utils.localize({
          key: 'general.saintsCorneliusPopeCyprianBishopMartyrs'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 16 }),
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
        "key": "saintRobertBellarmineBishopDoctor",
        "name": Utils.localize({
          key: 'general.saintRobertBellarmineBishopDoctor'
        }),
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
        "key": "saintJanuariusBishopMartyr",
        "name": Utils.localize({
          key: 'general.saintJanuariusBishopMartyr'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 19 }),
        "data": {
          "meta": {
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "saintAndrewKimTaegonPriestPaulChongHasangCompanionsMartyrs",
        "name": Utils.localize({
          key: 'general.saintAndrewKimTaegonPriestPaulChongHasangCompanionsMartyrs'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 20 }),
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
        "key": "saintMatthewApostleEvangelist",
        "name": Utils.localize({
          key: 'general.saintMatthewApostleEvangelist'
        }),
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 21 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintPioOfPietrelcinaPadrePioPriest",
        "name": Utils.localize({
          key: 'general.saintPioOfPietrelcinaPadrePioPriest'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 23 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintsCosmasDamianMartyrs",
        "name": Utils.localize({
          key: 'general.saintsCosmasDamianMartyrs'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 26 }),
        "data": {
          "meta": {
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "saintVincentDePaulPriest",
        "name": Utils.localize({
          key: 'general.saintVincentDePaulPriest'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 27 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintWenceslausMartyrSaintsLawrenceRuizAndCompanionsMartyrs",
        "name": Utils.localize({
          key: 'general.saintWenceslausMartyrSaintsLawrenceRuizAndCompanionsMartyrs'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 28 }),
        "data": {
          "meta": {
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "saintsMichaelGabrielRaphaelArchangels",
        "name": Utils.localize({
          key: 'general.saintsMichaelGabrielRaphaelArchangels'
        }),
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 29 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintJeromePriestDoctor",
        "name": Utils.localize({
          key: 'general.saintJeromePriestDoctor'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 30 }),
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
        "key": "saintThereseOfTheChildJesusVirginDoctor",
        "name": Utils.localize({
          key: 'general.saintThereseOfTheChildJesusVirginDoctor'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 1 }),
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
        "key": "guardianAngels",
        "name": Utils.localize({
          key: 'general.guardianAngels'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 2 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintFrancisOfAssisi",
        "name": Utils.localize({
          key: 'general.saintFrancisOfAssisi'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 4 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintBrunoPriest",
        "name": Utils.localize({
          key: 'general.saintBrunoPriest'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 6 }),
        "data": {}
      },
      {
        "key": "ourLadyOfTheRosary",
        "name": Utils.localize({
          key: 'general.ourLadyOfTheRosary'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 7 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintDenisAndCompanionsMartyrsSaintJohnLeonardiPriest",
        "name": Utils.localize({
          key: 'general.saintDenisAndCompanionsMartyrsSaintJohnLeonardiPriest'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 9 }),
        "data": {}
      },
      {
        "key": "saintCallistusIPopeMartyr",
        "name": Utils.localize({
          key: 'general.saintCallistusIPopeMartyr'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 14 }),
        "data": {
          "meta": {
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "saintTeresaOfJesusVirginDoctor",
        "name": Utils.localize({
          key: 'general.saintTeresaOfJesusVirginDoctor'
        }),
        "type": Types[5],
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
        "key": "saintHedwigReligiousSaintMargaretMaryAlacoqueVirgin",
        "name": Utils.localize({
          key: 'general.saintHedwigReligiousSaintMargaretMaryAlacoqueVirgin'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 16 }),
        "data": {}
      },
      {
        "key": "saintIgnatiusOfAntiochBishopMartyr",
        "name": Utils.localize({
          key: 'general.saintIgnatiusOfAntiochBishopMartyr'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 17 }),
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
        "key": "saintLukeTheEvangelist",
        "name": Utils.localize({
          key: 'general.saintLukeTheEvangelist'
        }),
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 18 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintsJeanDeBrebeufIsaacJoguesPriestsCompanionsMartyrsSaintPaulOfTheCrossPriest",
        "name": Utils.localize({
          key: 'general.saintsJeanDeBrebeufIsaacJoguesPriestsCompanionsMartyrsSaintPaulOfTheCrossPriest'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 19 }),
        "data": {}
      },
      {
        "key": "saintJohnOfCapistranoPriest",
        "name": Utils.localize({
          key: 'general.saintJohnOfCapistranoPriest'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 23 }),
        "data": {}
      },
      {
        "key": "saintAnthonyMaryClaretBishop",
        "name": Utils.localize({
          key: 'general.saintAnthonyMaryClaretBishop'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 24 }),
        "data": {}
      },
      {
        "key": "saintSimonSaintJudeApostles",
        "name": Utils.localize({
          key: 'general.saintSimonSaintJudeApostles'
        }),
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 28 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "allSouls",
        "name": Utils.localize({
          key: 'general.allSouls'
        }),
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 2 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintMartinDePorresReligious",
        "name": Utils.localize({
          key: 'general.saintMartinDePorresReligious'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 3 }),
        "data": {}
      },
      {
        "key": "saintCharlesBorromeoBishop",
        "name": Utils.localize({
          key: 'general.saintCharlesBorromeoBishop'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 4 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      // Replaces 32nd Sunday in Ordinary Time when it falls on a Sunday
      {
        "key": "dedicationOfTheLateranBasilica",
        "name": Utils.localize({
          key: 'general.dedicationOfTheLateranBasilica'
        }),
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 9 }),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintLeoTheGreatPopeDoctor",
        "name": Utils.localize({
          key: 'general.saintLeoTheGreatPopeDoctor'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 10 }),
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
        "key": "saintMartinOfToursBishop",
        "name": Utils.localize({
          key: 'general.saintMartinOfToursBishop'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 11 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintJosaphatBishopMartyr",
        "name": Utils.localize({
          key: 'general.saintJosaphatBishopMartyr'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 12 }),
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
        "key": "saintAlbertTheGreatBishopDoctor",
        "name": Utils.localize({
          key: 'general.saintAlbertTheGreatBishopDoctor'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 15 }),
        "data": {
          "meta": {
            "titles": [
              Titles.DOCTOR_OF_THE_CHURCH
            ]
          }
        }
      },
      {
        "key": "saintMargaretOfScotlandSaintGertrudeTheGreatVirgin",
        "name": Utils.localize({
          key: 'general.saintMargaretOfScotlandSaintGertrudeTheGreatVirgin'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 16 }),
        "data": {}
      },
      {
        "key": "saintElizabethOfHungaryReligious",
        "name": Utils.localize({
          key: 'general.saintElizabethOfHungaryReligious'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 17 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "dedicationOfTheBasilicasOfSaintsPeterPaulApostles",
        "name": Utils.localize({
          key: 'general.dedicationOfTheBasilicasOfSaintsPeterPaulApostles'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 18 }),
        "data": {}
      },
      {
        "key": "presentationOfTheBlessedVirginMary",
        "name": Utils.localize({
          key: 'general.presentationOfTheBlessedVirginMary'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 21 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintCeciliaVirginAndMartyr",
        "name": Utils.localize({
          key: 'general.saintCeciliaVirginAndMartyr'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 22 }),
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
        "key": "saintClementIPopeMartyrSaintColumbanReligious",
        "name": Utils.localize({
          key: 'general.saintCeciliaVirginAndMartyr'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 23 }),
        "data": {}
      },
      {
        "key": "saintAndrewDungLacCompanionsMartyrs",
        "name": Utils.localize({
          key: 'general.saintAndrewDungLacCompanionsMartyrs'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 24 }),
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
        "key": "saintCatherineOfAlexandriaVirginMartyr",
        "name": Utils.localize({
          key: 'general.saintCatherineOfAlexandriaVirginMartyr'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 25 }),
        "data": {
          "meta": {
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "saintAndrewTheApostle",
        "name": Utils.localize({
          key: 'general.saintAndrewTheApostle'
        }),
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 30 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintFrancisXavierPriest",
        "name": Utils.localize({
          key: 'general.saintFrancisXavierPriest'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 3 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintJohnDamascenePriestDoctor",
        "name": Utils.localize({
          key: 'general.saintJohnDamascenePriestDoctor'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 4 }),
        "data": {
          "meta": {
            "titles": [
              Titles.DOCTOR_OF_THE_CHURCH
            ]
          }
        }
      },
      {
        "key": "saintNicholasBishop",
        "name": Utils.localize({
          key: 'general.saintNicholasBishop'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 6 }),
        "data": {}
      },
      {
        "key": "saintAmbroseBishopDoctor",
        "name": Utils.localize({
          key: 'general.saintAmbroseBishopDoctor'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 7 }),
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
        "key": "saintJuanDiegoCuauhtlatoatzin",
        "name": Utils.localize({
          key: 'general.saintJuanDiegoCuauhtlatoatzin'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 9 }),
        "data": {}
      },
      {
        "key": "saintDamasusIPope",
        "name": Utils.localize({
          key: 'general.saintDamasusIPope'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 11 }),
        "data": {}
      },
      {
        "key": "ourLadyOfGuadalupe",
        "name": Utils.localize({
          key: 'general.ourLadyOfGuadalupe'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 12 }),
        "data": {}
      },
      {
        "key": "saintLucyOfSyracuseVirginMartyr",
        "name": Utils.localize({
          key: 'general.saintLucyOfSyracuseVirginMartyr'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 13 }),
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
        "key": "saintJohnOfTheCrossPriestDoctor",
        "name": Utils.localize({
          key: 'general.saintJohnOfTheCrossPriestDoctor'
        }),
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 14 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintPeterCanisiusPriestDoctor",
        "name": Utils.localize({
          key: 'general.saintPeterCanisiusPriestDoctor'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 21 }),
        "data": {
          "meta": {
            "titles": [
              Titles.DOCTOR_OF_THE_CHURCH
            ]
          }
        }
      },
      {
        "key": "saintJohnOfKantyPriest",
        "name": Utils.localize({
          key: 'general.saintJohnOfKantyPriest'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 23 }),
        "data": {}
      },
      {
        "key": "saintStephenTheFirstMartyr",
        "name": Utils.localize({
          key: 'general.saintStephenTheFirstMartyr'
        }),
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 26 }),
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
        "key": "saintJohnTheApostleEvangelist",
        "name": Utils.localize({
          key: 'general.saintJohnTheApostleEvangelist'
        }),
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 27 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "holyInnocentsMartyrs",
        "name": Utils.localize({
          key: 'general.holyInnocentsMartyrs'
        }),
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 28 }),
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
        "key": "saintThomasBecketBishopMartyr",
        "name": Utils.localize({
          key: 'general.saintThomasBecketBishopMartyr'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 29 }),
        "data": {
          "meta": {
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "saintSylvesterIPope",
        "name": Utils.localize({
          key: 'general.saintSylvesterIPope'
        }),
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 31 }),
        "data": {}
      }
    ];
  }
};
