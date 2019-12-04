import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {

  let _dates = [
    {
      "key": "saintsBasilTheGreatAndGregoryNazianzenBishopsAndDoctors",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 0, day: 2 }),
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 0, day: 3 }),
      "data": {}
    },
    {
      "key": "saintRaymondOfPenyafortPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 0, day: 7 }),
      "data": {}
    },
    {
      "key": "saintHilaryOfPoitiersBishopAndDoctor",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 0, day: 13 }),
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
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 0, day: 17 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintsFabianPopeAndSebastianMartyrs",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 0, day: 20 }),
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
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 0, day: 21 }),
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 0, day: 22 }),
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
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 0, day: 24 }),
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
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 0, day: 25 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintsTimothyAndTitusBishops",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 0, day: 26 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintAngelaMericiVirgin",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 0, day: 27 }),
      "data": {}
    },
    {
      "key": "saintThomasAquinasPriestAndDoctor",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 0, day: 28 }),
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
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 0, day: 31 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintBlaseBishopAndMartyrSaintAnsgarBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 1, day: 3 }),
      "data": {
      }
    },
    {
      "key": "saintAgathaVirginAndMartyr",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 1, day: 5 }),
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
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 1, day: 6 }),
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 1, day: 8 }),
      "data": {
      }
    },
    {
      "key": "saintScholasticaVirgin",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 1, day: 10 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "ourLadyOfLourdes",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 1, day: 11 }),
      "data": {}
    },
    {
      "key": "saintsCyrilMonkAndMethodiusBishop",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 1, day: 14 }),
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
      "key": "sevenHolyFoundersOfTheServiteOrder",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 1, day: 17 }),
      "data": {}
    },
    {
      "key": "saintPeterDamianBishopAndDoctorOfTheChurch",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 1, day: 21 }),
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
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 1, day: 22 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintPolycarpBishopAndMartyr",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 1, day: 23 }),
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 2, day: 4 }),
      "data": {}
    },
    {
      "key": "saintsPerpetuaAndFelicityMartyrs",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 2, day: 7 }),
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 2, day: 8 }),
      "data": {}
    },
    {
      "key": "saintFrancesOfRomeReligious",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 2, day: 9 }),
      "data": {}
    },
    {
      "key": "saintPatrickBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 2, day: 17 }),
      "data": {}
    },
    {
      "key": "saintCyrilOfJerusalemBishopAndDoctor",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 2, day: 18 }),
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 2, day: 23 }),
      "data": {}
    },
    {
      "key": "saintFrancisOfPaolaHermit",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 3, day: 2 }),
      "data": {}
    },
    {
      "key": "saintIsidoreOfSevilleBishopAndDoctorOfTheChurch",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 3, day: 4 }),
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 3, day: 5 }),
      "data": {}
    },
    {
      "key": "saintJohnBaptistDeLaSallePriest",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 3, day: 7 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintStanislausBishopAndMartyr",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 3, day: 11 }),
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 3, day: 13 }),
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 3, day: 21 }),
      "data": {
        "meta": {
          "titles": [
            Titles.DOCTOR_OF_THE_CHURCH
          ]
        }
      }
    },
    {
      "key": "saintGeorgeMartyrSaintAdalbertBishopAndMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 3, day: 23 }),
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 3, day: 24 }),
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
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 3, day: 25 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintPeterChanelPriestAndMartyrSaintLouisGrignonDeMontfortPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 3, day: 28 }),
      "data": {}
    },
    {
      "key": "saintCatherineOfSienaVirginAndDoctorOfTheChurch",
      "type": Types[5],
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
      "key": "saintPiusVPope",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 3, day: 30 }),
      "data": {}
    },
    {
      "key": "saintJosephTheWorker",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 1 }),
      "data": {}
    },
    {
      "key": "saintAthanasiusBishopAndDoctor",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 4, day: 2 }),
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
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 4, day: 3 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintsNereusAndAchilleusMartyrsSaintPancrasMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 12 }),
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 13 }),
      "data": {}
    },
    {
      "key": "saintMatthiasTheApostle",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 4, day: 14 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintJohnIPopeAndMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 18 }),
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 20 }),
      "data": {}
    },
    {
      "key": "saintChristopherMagallanesAndCompanionsMartyrs",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 21 }),
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 22 }),
      "data": {}
    },
    {
      "key": "saintBedeTheVenerablePriestAndDoctorSaintGregoryViiPopeSaintMaryMagdaleneDePazziVirgin",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 25 }),
      "data": {}
    },
    {
      "key": "saintPhilipNeriPriest",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 4, day: 26 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintAugustineOfCanterburyBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 27 }),
      "data": {}
    },
    {
      "key": "visitationOfTheBlessedVirginMary",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 4, day: 31 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintJustinMartyr",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 5, day: 1 }),
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 5, day: 2 }),
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
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 5, day: 3 }),
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
      "key": "saintBonifaceBishopAndMartyr",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 5, day: 5 }),
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
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 5, day: 6 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintEphremDeaconAndDoctor",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 5, day: 9 }),
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 5, day: 11 }),
      "data": {}
    },
    {
      "key": "saintAnthonyOfPaduaPriestAndDoctor",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 5, day: 13 }),
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 5, day: 19 }),
      "data": {}
    },
    {
      "key": "saintAloysiusGonzagaReligious",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 5, day: 21 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintPaulinusOfNolaBishopSaintsJohnFisherBishopAndThomasMoreMartyrs",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 5, day: 22 }),
      "data": {}
    },
    {
      "key": "saintCyrilOfAlexandriaBishopAndDoctor",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 5, day: 27 }),
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
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 5, day: 28 }),
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 5, day: 30 }),
      "data": {}
    },
    {
      "key": "saintThomasTheApostle",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 6, day: 3 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintElizabethOfPortugal",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 4 }),
      "data": {}
    },
    {
      "key": "saintAnthonyZaccariaPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 5 }),
      "data": {}
    },
    {
      "key": "saintMariaGorettiVirginAndMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 6 }),
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 9 }),
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
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 6, day: 11 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [ Titles.PATRON_OF_EUROPE ]
        }
      }
    },
    {
      "key": "saintHenryBishopAndMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 13 }),
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 14 }),
      "data": {}
    },
    {
      "key": "saintBonaventureBishopAndDoctor",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 6, day: 15 }),
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 16 }),
      "data": {}
    },
    {
      "key": "saintApollinaris",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 20 }),
      "data": {}
    },
    {
      "key": "saintLawrenceOfBrindisiPriestAndDoctor",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 21 }),
      "data": {
        "meta": {
          "titles": [
            Titles.DOCTOR_OF_THE_CHURCH
          ]
        }
      }
    },
    // https://github.com/pejulian/romcal/issues/27
    {
      "key": "saintMaryMagdalene",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 6, day: 22 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    // On 11 Feb 2018, Pope Francis inserted the Memorial of the
    // Blessed Virgin Mary, Mother of the Church, into the General Roman Calendar.
    // It will be celebrated on Monday after Pentecost.
    {
      "key": "maryMotherOfTheChurch",
      "type": Types[5], // Memorial
      "moment": ( y => Dates.pentecostSunday( y ).add( 1, 'days'))( year ),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        },
      }
    },
    {
      "key": "saintBridgetOfSwedenReligious",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 6, day: 23 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [ Titles.PATRON_OF_EUROPE ]
        }
      }
    },
    {
      "key": "saintCharbelMakhloufPriestAndHermit",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 24 }),
      "data": {}
    },
    {
      "key": "saintJamesApostle",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 6, day: 25 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintsJoachimAndAnne",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 6, day: 26 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintMartha",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 6, day: 29 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintPeterChrysologusBishopAndDoctor",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 30 }),
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
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 6, day: 31 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintAlphonsusMariaDeLiguoriBishopAndDoctorOfTheChurch",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 7, day: 1 }),
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 7, day: 2 }),
      "data": {}
    },
    {
      "key": "saintJeanVianneyTheCureOfArsPriest",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 7, day: 4 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "dedicationOfTheBasilicaOfSaintMaryMajor",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 7, day: 5 }),
      "data": {}
    },
    {
      "key": "saintSixtusIiPopeAndCompanionsMartyrsSaintCajetanPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 7, day: 7 }),
      "data": {}
    },
    {
      "key": "saintDominicPriest",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 7, day: 8 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr",
      "type": Types[6],
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
      "key": "saintLawrenceOfRomeDeaconAndMartyr",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 7, day: 10 }),
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
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 7, day: 11 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintJaneFrancesDeChantalReligious",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 7, day: 12 }),
      "data": {}
    },
    {
      "key": "saintsPontianPopeAndHippolytusPriestMartyrs",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 7, day: 13 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "saintMaximilianMaryKolbePriestAndMartyr",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 7, day: 14 }),
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 7, day: 16 }),
      "data": {}
    },
    {
      "key": "saintJohnEudesPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 7, day: 19 }),
      "data": {}
    },
    {
      "key": "saintBernardOfClairvauxAbbotAndDoctorOfTheChurch",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 7, day: 20 }),
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
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 7, day: 21 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "queenshipOfBlessedVirginMary",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 7, day: 22 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintRoseOfLima",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 7, day: 23 }),
      "data": {}
    },
    {
      "key": "saintBartholomewTheApostle",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 7, day: 24 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintLouisSaintJosephOfCalasanzPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 7, day: 25 }),
      "data": {}
    },
    {
      "key": "saintMonica",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 7, day: 27 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintAugustineOfHippoBishopAndDoctorOfTheChurch",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 7, day: 28 }),
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
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 7, day: 29 }),
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
      "key": "saintGregoryTheGreatPopeAndDoctor",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 8, day: 3 }),
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
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 8, day: 8 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintPeterClaverPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 8, day: 9 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "holyNameOfTheBlessedVirginMary",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 8, day: 12 }),
      "data": {}
    },
    {
      "key": "saintJohnChrysostomBishopAndDoctor",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 8, day: 13 }),
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
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 8, day: 15 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintsCorneliusPopeAndCyprianBishopMartyrs",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 8, day: 16 }),
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
      "key": "saintRobertBellarmineBishopAndDoctor",
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
      "key": "saintJanuariusBishopAndMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 8, day: 19 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "saintAndrewKimTaegonPriestAndPaulChongHasangAndCompanionsMartyrs",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 8, day: 20 }),
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
      "key": "saintMatthewApostleAndEvangelist",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 8, day: 21 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintPioOfPietrelcinaPadrePioPriest",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 8, day: 23 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintsCosmasAndDamianMartyrs",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 8, day: 26 }),
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
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 8, day: 27 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintWenceslausMartyrSaintsLawrenceRuizAndCompanionsMartyrs",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 8, day: 28 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "saintsMichaelGabrielAndRaphaelArchangels",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 8, day: 29 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintJeromePriestAndDoctor",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 8, day: 30 }),
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
      "key": "saintThereseOfTheChildJesusVirginAndDoctor",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 9, day: 1 }),
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
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 9, day: 2 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintFrancisOfAssisi",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 9, day: 4 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintBrunoPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 6 }),
      "data": {},
    },
    {
      "key": "ourLadyOfTheRosary",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 9, day: 7 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        },
      },
    },
    {
      "key": "saintDenisAndCompanionsMartyrsSaintJohnLeonardiPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 9 }),
      "data": {},
    },
    // http://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20140529_decreto-calendario-generale-gxxiii-gpii_en.html
    {
      "key": "popeSaintJohnXXIII",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 11 }),
      "data": {},
    },
    // http://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20140529_decreto-calendario-generale-gxxiii-gpii_en.html
    {
      "key": "popeSaintJohnPaulII",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 22 }),
      "data": {},
    },
    {
      "key": "saintCallistusIPopeAndMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 14 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ],
        },
      },
    },
    {
      "key": "saintTeresaOfJesusVirginAndDoctorOfTheChurch",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 9, day: 15 }),
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 16 }),
      "data": {}
    },
    {
      "key": "saintIgnatiusOfAntiochBishopAndMartyr",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 9, day: 17 }),
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
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 9, day: 18 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintsJeanDeBrebeufAndIsaacJoguesPriestsAndCompanionsMartyrsSaintPaulOfTheCrossPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 19 }),
      "data": {}
    },
    {
      "key": "saintJohnOfCapistranoPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 23 }),
      "data": {}
    },
    {
      "key": "saintAnthonyMaryClaretBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 24 }),
      "data": {}
    },
    {
      "key": "saintsSimonAndJudeApostles",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 9, day: 28 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "allSouls",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 10, day: 2 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintMartinDePorresReligious",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 10, day: 3 }),
      "data": {}
    },
    {
      "key": "saintCharlesBorromeoBishop",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 10, day: 4 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    // Replaces 32nd Sunday in Ordinary Time when it falls on a Sunday
    {
      "key": "dedicationOfTheLateranBasilica",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 10, day: 9 }),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintLeoTheGreatPopeAndDoctor",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 10, day: 10 }),
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
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 10, day: 11 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintJosaphatBishopAndMartyr",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 10, day: 12 }),
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
      "key": "saintAlbertTheGreatBishopAndDoctor",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 10, day: 15 }),
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 10, day: 16 }),
      "data": {}
    },
    {
      "key": "saintElizabethOfHungary",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 10, day: 17 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "dedicationOfTheBasilicasOfSaintsPeterAndPaulApostles",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 10, day: 18 }),
      "data": {}
    },
    {
      "key": "presentationOfTheBlessedVirginMary",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 10, day: 21 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintCeciliaVirginAndMartyr",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 10, day: 22 }),
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
      "key": "saintClementIPopeAndMartyrSaintColumbanReligious",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 10, day: 23 }),
      "data": {}
    },
    {
      "key": "saintAndrewDungLacAndCompanionsMartyrs",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 10, day: 24 }),
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
      "key": "saintCatherineOfAlexandriaVirginAndMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 10, day: 25 }),
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
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 10, day: 30 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintFrancisXavierPriest",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 11, day: 3 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintJohnDamascenePriestAndDoctor",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 11, day: 4 }),
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 11, day: 6 }),
      "data": {}
    },
    {
      "key": "saintAmbroseBishopAndDoctor",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 11, day: 7 }),
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 11, day: 9 }),
      "data": {}
    },
    {
      "key": "saintDamasusIPope",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 11, day: 11 }),
      "data": {}
    },
    {
      "key": "ourLadyOfGuadalupe",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 11, day: 12 }),
      "data": {}
    },
    {
      "key": "saintLucyOfSyracuseVirginAndMartyr",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 11, day: 13 }),
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
      "key": "saintJohnOfTheCrossPriestAndDoctor",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 11, day: 14 }),
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
      "key": "saintPeterCanisiusPriestAndDoctor",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 11, day: 21 }),
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 11, day: 23 }),
      "data": {}
    },
    {
      "key": "saintStephenTheFirstMartyr",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 11, day: 26 }),
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
      "key": "saintJohnTheApostleAndEvangelist",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 11, day: 27 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "holyInnocentsMartyrs",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 11, day: 28 }),
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
      "key": "saintThomasBecketBishopAndMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 11, day: 29 }),
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
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 11, day: 31 }),
      "data": {}
    },
    // Special celebrations
    {
      "key": "shroveMonday",
      "type": _.last( Types ),
      "moment": Dates.ashWednesday( year ).subtract( 2, 'days'),
      "data": {}
    },
    {
      "key": "shroveTuesday",
      "type": _.last( Types ),
      "moment": Dates.ashWednesday( year ).subtract( 1, 'days'),
      "data": {}
    }
  ];


  return _.map( _dates, ({ key, data, ...rest }) => {
    let name = Utils.localize({ key: 'sanctoral.' + key });
    let { meta } = data;
    if (_.isUndefined(meta)) {
      data.meta = { titles: [] };
    }
    return { name, key, data, ...rest };
  });
};

export {
  dates
};
