var _ = require('lodash'),
    moment = require('moment'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Titles = require('../../data/titles'),
    Types = require('../../data/types').types;

module.exports = {
  
  dates: function() {

    return [
      {
        "key": "saintsBasilTheGreatAndGregoryNazianzenBishopsAndDoctors",
        "name": "Saints Basil the Great and Gregory Nazianzen, Bishops and Doctors",
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
        "name": "The Most Holy Name of Jesus",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 3 }),
        "data": {}
      },
      {
        "key": "saintRaymondOfPenyafortPriest",
        "name": "Saint Raymond of Penyafort, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 7 }),
        "data": {}
      },
      {
        "key": "saintHilaryOfPoitiersBishopAndDoctor",
        "name": "Saint Hilary of Poitiers, Bishop and Doctor",
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
        "name": "Saint Anthony of Egypt, Abbot",
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
        "name": "Saints Fabian and Sebastian, Pope and Martyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 20 }),
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
        "key": "saintAgnesVirginAndMartyr",
        "name": "Saint Agnes, Virgin and Martyr",
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
        "name": "Saint Vincent, Deacon and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 22 }),
        "data": {}
      },
      {
        "key": "saintFrancisDeSalesBishopAndDoctor",
        "name": "Saint Francis de Sales, Bishop and Doctor",
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
        "name": "Conversion of Saint Paul, Apostle",
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
        "name": "Saints Timothy and Titus, Bishops",
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
        "name": "Saint Angela Merici, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 27 }),
        "data": {}
      },
      {
        "key": "saintThomasAquinasPriestAndDoctor",
        "name": "Saint Thomas Aquinas, Priest and Doctor",
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
        "name": "Saint John Bosco, Priest",
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
        "name": "Saint Blase, Bishop Martyr/Saint Ansgar, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 3 }),
        "data": {}
      },
      {
        "key": "saintAgathaVirginMartyr",
        "name": "Saint Agatha, Virgin & Martyr",
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
        "name": "Saint Paul Miki and Companions, Martyrs",
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
        "name": "Saint Jerome Emiliani/Saint Josephine Bakhita, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 8 }),
        "data": {}
      },
      {
        "key": "saintScholasticaVirgin",
        "name": "Saint Scholastica, Virgin",
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
        "name": "Our Lady of Lourdes",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 11 }),
        "data": {}
      },
      {
        "key": "saintsCyrilMonkAndMethodiusBishop",
        "name": "Saints Cyril, Monk and Methodius, Bishop",
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
        "name": "Seven Holy Founders of the Servite Order",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 17 }),
        "data": {}
      },
      {
        "key": "saintPeterDamianBishopAndDoctorOfTheChurch",
        "name": "Saint Peter Damian, Bishop and Doctor of the Church",
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
        "name": "Chair of Saint Peter, Apostle",
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
        "name": "Saint Polycarp, Bishop and Martyr",
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
        "name": "Saint Casimir",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 4 }),
        "data": {}
      },
      {
        "key": "saintsPerpetuaAndFelicityMartyrs",
        "name": "Saints Perpetua and Felicity, Martyrs",
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
        "name": "Saint John of God, Religious",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 8 }),
        "data": {}
      },
      {
        "key": "saintFrancesOfRomeReligious",
        "name": "Saint Frances of Rome, Religious",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 9 }),
        "data": {}
      },
      {
        "key": "saintPatrickBishop",
        "name": "Saint Patrick, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 17 }),
        "data": {}
      },
      {
        "key": "saintCyrilOfJerusalemBishopAndDoctor",
        "name": "Saint Cyril of Jerusalem, Bishop and Doctor",
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
        "name": "Saint Turibius of Mogrovejo, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 23 }),
        "data": {}
      },
      {
        "key": "saintFrancisOfPaolaHermit",
        "name": "Saint Francis of Paola, Hermit",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 2 }),
        "data": {}
      },
      {
        "key": "saintIsidoreOfSevilleBishopAndDoctorOfTheChurch",
        "name": "Saint Isidore of Seville, Bishop and Doctor of the Church",
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
        "name": "Saint Vincent Ferrer, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 5 }),
        "data": {}
      },
      {
        "key": "saintJohnBaptistDeLaSallePriest",
        "name": "Saint John Baptist de la Salle, Priest",
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
        "name": "Saint Stanislaus, Bishop and Martyr",
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
        "name": "Saint Martin I, Pope and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 13 }),
        "data": {}
      },
      {
        "key": "saintAnselmOfCanterburyBishopAndDoctorOfTheChurch",
        "name": "Saint Anselm of Canterbury, Bishop and Doctor of the Church",
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
        "name": "Saint George, Martyr/Saint Adalbert, Bishop & Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 23 }),
        "data": {}
      },
      {
        "key": "saintFidelisOfSigmaringenPriestAndMartyr",
        "name": "Saint Fidelis of Sigmaringen, Priest and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 24 }),
        "data": {}
      },
      {
        "key": "saintMarkTheEvangelist",
        "name": "Saint Mark the Evangelist",
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
        "name": "Saint Peter Chanel, Priest and Martyr/Saint Louis Grignon de Montfort, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 28 }),
        "data": {}
      },
      {
        "key": "saintCatherineOfSienaVirginAndDoctorOfTheChurch",
        "name": "Saint Catherine of Siena, Virgin and Doctor of The Church, Patron of Europe",
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
        "name": "Saint Pius V, Pope",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 30 }),
        "data": {}
      },
      {
        "key": "saintJosephTheWorker",
        "name": "Saint Joseph the Worker",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 1 }),
        "data": {}
      },
      {
        "key": "saintAthanasiusBishopAndDoctor",
        "name": "Saint Athanasius, Bishop and Doctor",
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
        "name": "Saints Philip and James, Apostles",
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
        "name": "Saints Nereus and Achilleus, Martyrs/Saint Pancras, Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 12 }),
        "data": {}
      },
      {
        "key": "ourLadyOfFatima",
        "name": "Our Lady of Fatima",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 13 }),
        "data": {}
      },
      {
        "key": "saintMatthiasTheApostle",
        "name": "Saint Matthias the Apostle",
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
        "name": "Saint John I, Pope and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 18 }),
        "data": {}
      },
      {
        "key": "saintBernardineOfSienaPriest",
        "name": "Saint Bernardine of Siena, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 20 }),
        "data": {}
      },
      {
        "key": "saintChristopherMagallanesAndCompanionsMartyrs",
        "name": "Saint Christopher Magallanes and Companions, Martyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 21 }),
        "data": {}
      },
      {
        "key": "saintRitaOfCascia",
        "name": "Saint Rita of Cascia",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 22 }),
        "data": {}
      },
      {
        "key": "saintBedeTheVenerablePriestAndDoctorSaintGregoryViiPopeSaintMaryMagdaleneDePazziVirgin",
        "name": "Saint Bede the Venerable, Priest and Doctor/Saint Gregory VII, Pope/Saint Mary Magdalene de Pazzi, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 25 }),
        "data": {}
      },
      {
        "key": "saintPhilipNeriPriest",
        "name": "Saint Philip Neri, Priest",
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
        "name": "Saint Augustine of Canterbury, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 27 }),
        "data": {}
      },
      {
        "key": "visitationOfTheBlessedVirginMary",
        "name": "Visitation of the Blessed Virgin Mary",
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
        "name": "Saint Justin Martyr",
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
        "name": "Saints Marcellinus and Peter, Martyrs",
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
        "name": "Saints Charles Lwanga and Companions, Martyrs",
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
        "name": "Saint Boniface, Bishop & Martyr",
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
        "name": "Saint Norbert, Bishop",
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
        "name": "Saint Ephrem, Deacon and Doctor",
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
        "name": "Saint Barnabas the Apostle",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 11 }),
        "data": {}
      },
      {
        "key": "saintAnthonyOfPaduaPriestAndDoctor",
        "name": "Saint Anthony of Padua, Priest and Doctor",
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
        "name": "Saint Romuald, Abbot",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 19 }),
        "data": {}
      },
      {
        "key": "saintAloysiusGonzagaReligious",
        "name": "Saint Aloysius Gonzaga, Religious",
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
        "name": "Saint Paulinus of Nola, Bishop/Saints John Fisher, Bishop and Thomas More, Martyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 22 }),
        "data": {}
      },
      {
        "key": "saintCyrilOfAlexandriaBishopAndDoctor",
        "name": "Saint Cyril of Alexandria, Bishop and Doctor",
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
        "name": "Saint Irenaeus, Bishop and Martyr",
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
        "name": "First Martyrs of the Church of Rome",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 30 }),
        "data": {}
      },
      {
        "key": "saintThomasTheApostle",
        "name": "Saint Thomas the Apostle",
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
        "name": "Saint Elizabeth of Portugal",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 4 }),
        "data": {}
      },
      {
        "key": "saintAnthonyZaccariaPriest",
        "name": "Saint Anthony Zaccaria, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 5 }),
        "data": {}
      },
      {
        "key": "saintMariaGorettiVirginAndMartyr",
        "name": "Saint Maria Goretti, Virgin and Martyr",
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
        "name": "Saints Augustine Zhao Rong, Priest, and Companions, Martyrs",
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
        "name": "Saint Benedict of Nursia, Abbot, Patron of Europe",
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
        "name": "Saint Henry, Bishop and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 13 }),
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
        "key": "saintCamillusDeLellisPriest",
        "name": "Saint Camillus de Lellis, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 14 }),
        "data": {}
      },
      {
        "key": "saintBonaventureBishopAndDoctor",
        "name": "Saint Bonaventure, Bishop and Doctor",
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
        "name": "Our Lady of Mount Carmel",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 16 }),
        "data": {}
      },
      {
        "key": "saintApollinaris",
        "name": "Saint Apollinaris",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 20 }),
        "data": {}
      },
      {
        "key": "saintLawrenceOfBrindisiPriestAndDoctor",
        "name": "Saint Lawrence of Brindisi, Priest and Doctor",
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
        "name": "Saint Mary Magdalene",
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
        "name": "Saint Birgitta, Religious",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 23 }),
        "data": {}
      },
      {
        "key": "saintSharbelMakhlufPriestAndHermit",
        "name": "Saint Sharbel Makhlūf, Priest and Hermit",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 24 }),
        "data": {}
      },
      {
        "key": "saintJamesApostle",
        "name": "Saint James, Apostle",
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
        "name": "Saints Joachim and Anne",
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
        "name": "Saint Martha",
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
        "name": "Saint Peter Chrysologus, Bishop and Doctor",
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
        "name": "Saint Ignatius of Loyola, Priest",
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
        "name": "Saint Alphonsus Maria de Liguori, Bishop and Doctor of the Church",
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
        "name": "Saint Eusebius of Vercelli, Bishop/Saint Peter Julian Eymard, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 2 }),
        "data": {}
      },
      {
        "key": "saintJeanVianneyTheCureOfArsPriest",
        "name": "Saint Jean Vianney (the Cure of Ars), Priest",
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
        "name": "Dedication of the Basilica of Saint Mary Major",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 5 }),
        "data": {}
      },
      {
        "key": "saintSixtusIiPopeAndCompanionsMartyrsSaintCajetanPriest",
        "name": "Saint Sixtus II, Pope, and Companions, Martyrs/Saint Cajetan, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 7 }),
        "data": {}
      },
      {
        "key": "saintDominicPriest",
        "name": "Saint Dominic, Priest",
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
        "name": "Saint Teresa Benedicta of The Cross (Edith Stein), Virgin and Martyr, Patron of Europe",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 9 }),
        "data": {}
      },
      {
        "key": "saintLawrenceDeaconMartyr",
        "name": "Saint Lawrence, Deacon & Martyr",
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
        "name": "Saint Clare, Virgin",
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
        "name": "Saint Jane Frances de Chantal, Religious",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 12 }),
        "data": {}
      },
      {
        "key": "saintsPontianPopeHippolytusPriestMartyrs",
        "name": "Saints Pontian, Pope, & Hippolytus, Priest, Martyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 13 }),
        "data": {}
      },
      {
        "key": "saintMaximilianMaryKolbePriestMartyr",
        "name": "Saint Maximilian Mary Kolbe, Priest & Martyr",
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
        "name": "Saint Stephen of Hungary",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 16 }),
        "data": {}
      },
      {
        "key": "saintJohnEudesPriest",
        "name": "Saint John Eudes, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 19 }),
        "data": {}
      },
      {
        "key": "saintBernardOfClairvauxAbbotDoctorOfTheChurch",
        "name": "Saint Bernard of Clairvaux, Abbot & Doctor of the Church",
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
        "name": "Saint Pius X, Pope",
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
        "name": "Queenship of Blessed Virgin Mary",
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
        "name": "Saint Rose of Lima, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 23 }),
        "data": {}
      },
      {
        "key": "saintBartholomewTheApostle",
        "name": "Saint Bartholomew the Apostle",
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
        "name": "Saint Louis/Saint Joseph of Calasanz, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 25 }),
        "data": {}
      },
      {
        "key": "saintMonica",
        "name": "Saint Monica",
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
        "name": "Saint Augustine of Hippo, Bishop & Doctor of the Church",
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
        "name": "The Beheading of Saint John the Baptist, Martyr",
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
        "name": "Saint Gregory the Great, Pope & Doctor",
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
        "name": "Birth of the Blessed Virgin Mary",
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
        "name": "Saint Peter Claver, Priest",
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
        "name": "Holy Name of the Blessed Virgin Mary",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 12 }),
        "data": {}
      },
      {
        "key": "saintJohnChrysostomBishopDoctor",
        "name": "Saint John Chrysostom, Bishop & Doctor",
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
        "name": "Our Lady of Sorrows",
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
        "name": "Saints Cornelius, Pope, & Cyprian, Bishop, Martyrs",
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
        "name": "Saint Robert Bellarmine, Bishop & Doctor",
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
        "name": "Saint Januarius, Bishop & Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 19 }),
        "data": {}
      },
      {
        "key": "saintAndrewKimTaegonPriestPaulChongHasangCompanionsMartyrs",
        "name": "Saint Andrew Kim Taegon, Priest, & Paul Chong Hasang & Companions, Martyrs",
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
        "name": "Saint Matthew, Apostle & Evangelist",
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
        "name": "Saint Pio of Pietrelcina (Padre Pio), Priest",
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
        "name": "Saints Cosmas & Damian, Martyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 26 }),
        "data": {}
      },
      {
        "key": "saintVincentDePaulPriest",
        "name": "Saint Vincent de Paul, Priest",
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
        "name": "Saint Wenceslaus, Martyr/Saints Lawrence Ruiz and Companions, Martyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 28 }),
        "data": {}
      },
      {
        "key": "saintsMichaelGabrielRaphaelArchangels",
        "name": "Saints Michael, Gabriel & Raphael, Archangels",
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
        "name": "Saint Jerome, Priest & Doctor",
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
        "name": "Saint Therese of the Child Jesus, Virgin & Doctor",
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
        "name": "Guardian Angels",
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
        "name": "Saint Francis of Assisi",
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
        "name": "Saint Bruno, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 6 }),
        "data": {}
      },
      {
        "key": "ourLadyOfTheRosary",
        "name": "Our Lady of the Rosary",
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
        "name": "Saint Denis and Companions Martyrs/Saint John Leonardi, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 9 }),
        "data": {}
      },
      {
        "key": "saintCallistusIPopeMartyr",
        "name": "Saint Callistus I, Pope & Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 14 }),
        "data": {}
      },
      {
        "key": "saintTeresaOfJesusVirginDoctor",
        "name": "Saint Teresa of Jesus, Virgin & Doctor",
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
        "name": "Saint Hedwig, Religious/Saint Margaret Mary Alacoque, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 16 }),
        "data": {}
      },
      {
        "key": "saintIgnatiusOfAntiochBishopMartyr",
        "name": "Saint Ignatius of Antioch, Bishop & Martyr",
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
        "name": "Saint Luke the Evangelist",
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
        "name": "Saints Jean de Brebeuf & Isaac Jogues, Priests & Companions, Martyrs/Saint Paul of the Cross, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 19 }),
        "data": {}
      },
      {
        "key": "saintJohnOfCapistranoPriest",
        "name": "Saint John of Capistrano, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 23 }),
        "data": {}
      },
      {
        "key": "saintAnthonyMaryClaretBishop",
        "name": "Saint Anthony Mary Claret, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 24 }),
        "data": {}
      },
      {
        "key": "saintSimonSaintJudeApostles",
        "name": "Saint Simon & Saint Jude, Apostles",
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
        "name": "All Souls",
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
        "name": "Saint Martin de Porres, Religious",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 3 }),
        "data": {}
      },
      {
        "key": "saintCharlesBorromeoBishop",
        "name": "Saint Charles Borromeo, Bishop",
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
        "name": "Dedication of the Lateran Basilica",
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
        "name": "Saint Leo the Great, Pope & Doctor",
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
        "name": "Saint Martin of Tours, Bishop",
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
        "name": "Saint Josaphat, Bishop & Martyr",
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
        "name": "Saint Albert the Great, Bishop & Doctor",
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
        "name": "Saint Margaret of Scotland/Saint Gertrude the Great, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 16 }),
        "data": {}
      },
      {
        "key": "saintElizabethOfHungaryReligious",
        "name": "Saint Elizabeth of Hungary, Religious",
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
        "name": "Dedication of the basilicas of Saints Peter & Paul, Apostles",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 18 }),
        "data": {}
      },
      {
        "key": "presentationOfTheBlessedVirginMary",
        "name": "Presentation of the Blessed Virgin Mary",
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
        "name": "Saint Cecilia, Virgin and Martyr",
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
        "name": "Saint Clement I, Pope & Martyr/Saint Columban, Religious",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 23 }),
        "data": {}
      },
      {
        "key": "saintAndrewDungLacCompanionsMartyrs",
        "name": "Saint Andrew Dung-Lac & Companions, Martyrs",
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
        "name": "Saint Catherine of Alexandria, Virgin & Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 25 }),
        "data": {}
      },
      {
        "key": "saintAndrewTheApostle",
        "name": "Saint Andrew the Apostle",
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
        "name": "Saint Francis Xavier, Priest",
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
        "name": "Saint John Damascene, Priest & Doctor",
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
        "name": "Saint Nicholas, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 6 }),
        "data": {}
      },
      {
        "key": "saintAmbroseBishopDoctor",
        "name": "Saint Ambrose, Bishop & Doctor",
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
        "name": "Saint Juan Diego Cuauhtlatoatzin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 9 }),
        "data": {}
      },
      {
        "key": "saintDamasusIPope",
        "name": "Saint Damasus I, Pope",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 11 }),
        "data": {}
      },
      {
        "key": "ourLadyOfGuadalupe",
        "name": "Our Lady of Guadalupe",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 12 }),
        "data": {}
      },
      {
        "key": "saintLucyOfSyracuseVirginMartyr",
        "name": "Saint Lucy of Syracuse, Virgin & Martyr",
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
        "name": "Saint John of the Cross, Priest & Doctor",
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
        "name": "Saint Peter Canisius, Priest & Doctor",
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
        "name": "Saint John of Kanty, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 23 }),
        "data": {}
      },
      {
        "key": "saintStephenTheFirstMartyr",
        "name": "Saint Stephen, The First Martyr",
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
        "name": "Saint John the Apostle & Evangelist",
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
        "name": "Holy Innocents, Martyrs",
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
        "name": "Saint Thomas Becket, Bishop & Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 29 }),
        "data": {}
      },
      {
        "key": "saintSylvesterIPope",
        "name": "Saint Sylvester I, Pope",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 31 }),
        "data": {}
      }
    ];
  }
};
