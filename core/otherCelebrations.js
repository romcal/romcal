var moment = require('moment'),
	types = require('./utils').types();

module.exports = {
	dates: function( year ) {
	    var dates = {
	        // January
	        saintBasilAndGregory: {
	            moment: moment.utc({ year: year, month: 0, day: 2 }),
	            type: types.MEMORIAL,
	            name: 'Saints Basil the Great & Gregory Nazianzen, Bishops & Doctors'
	        },
	        theMostHolyNameOfJesus: {
	            moment: moment.utc({ year: year, month: 0, day: 3 }),
	            type: types.OPT_MEMORIAL,
	            name: 'The Most Holy Name of Jesus'
	        },
	        saintRaymondOfPenyafort: {
	            moment: moment.utc({ year: year, month: 0, day: 7 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Raymond of Penyafort'            
	        },
	        saintHilaryOfPoitiers: {
	            moment: moment.utc({ year: year, month: 0, day: 13 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Hilary of Poitiers, Bishop & Doctor'
	        },
	        saintAnthonyOfEgypt: {
	            moment: moment.utc({ year: year, month: 0, day: 17 }),
	            type: types.MEMORIAL,
	            name: 'Saint Anthony of Egypt, Abbot'
	        },
	        saintsFabianOrSebastian: {
	            moment: moment.utc({ year: year, month: 0, day: 20 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saints Fabian & Sebastian, Pope and Martyrs'
	        },
	        saintAgnes: {
	            moment: moment.utc({ year: year, month: 0, day: 21 }),
	            type: types.MEMORIAL,
	            name: 'Saint Agnes, Virgin & Martyr'
	        }, 
	        saintVincent: {
	            moment: moment.utc({ year: year, month: 0, day: 22 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Vincent, Deacon & Martyr'        
	        },
	        saintFrancisDeSales: {
	            moment: moment.utc({ year: year, month: 0, day: 24 }),
	            type: types.MEMORIAL,
	            name: 'Saint Francis de Sales, Bishop & Doctor'
	        },
	        conversionOfSaintPaul: {
	            moment: moment.utc({ year: year, month: 0, day: 25 }),
	            type: types.FEAST,
	            name: 'The Conversion of Saint Paul, Apostle'
	        },
	        saintsTimothyAndTitus: {
	            moment: moment.utc({ year: year, month: 0, day: 26 }),
	            type: types.MEMORIAL,
	            name: 'Saints Timothy & Titus, Bishops'
	        },
	        saintAngelaMerici: {
	            moment: moment.utc({ year: year, month: 0, day: 27 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Angela Merici, Virgin'
	        },
	        saintThomasAquinas: {
	            moment: moment.utc({ year: year, month: 0, day: 28 }),
	            type: types.MEMORIAL,
	            name: 'Saint Thomas Aquinas, Priest & Doctor'
	        },
	        saintJohnBosco: {
	            moment: moment.utc({ year: year, month: 0, day: 31 }),
	            type: types.MEMORIAL,
	            name: 'Saint John Bosco, Priest'
	        },

	        // February
	        saintsBlaseOrAnsgar: {
				moment: moment.utc({ year: year, month: 1, day: 3 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Blase, Bishop & Martyr, or Saint Ansgar, Bishop'
	        },
	        saintAgatha: {
				moment: moment.utc({ year: year, month: 1, day: 5 }),
	            type: types.MEMORIAL,
	            name: 'Saint Agatha, Virgin & Martyr'
	        },
	        saintsPaulMikiAndCo: {
				moment: moment.utc({ year: year, month: 1, day: 6 }),
	            type: types.MEMORIAL,
	            name: 'Saints Paul Miki and Companions, Martyrs'
	        },
	        saintsJeromeOrJosephine: {
				moment: moment.utc({ year: year, month: 1, day: 8 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Jerome Emiliani or Saint Josephine Bakhita, Virgin'
	        },
	        saintScholastica: {
				moment: moment.utc({ year: year, month: 1, day: 10 }),
	            type: types.MEMORIAL,
	            name: 'Saint Scholastica, Virgin'
	        },
	        ourLadyOfLourdes: {
				moment: moment.utc({ year: year, month: 1, day: 11 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Our Lady of Lourdes'
	        },
	        saintsCyrilAndMethodius: {
				moment: moment.utc({ year: year, month: 1, day: 14 }),
	            type: types.MEMORIAL,
	            name: 'Saints Cyril, Monk, & Methodius, Bishop'
	        },
	        foundersOfTheSevileOrder: {
				moment: moment.utc({ year: year, month: 1, day: 17 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Seven Holy Founders of the Servite Order'
	        },
	        saintPeterDamian: {
				moment: moment.utc({ year: year, month: 1, day: 21 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Peter Damian, Bishop & Doctor of the Church'
	        },
	        chairOfSaintPeter: {
				moment: moment.utc({ year: year, month: 1, day: 22 }),
	            type: types.FEAST,
	            name: 'Chair of Saint Peter, Apostle'
	        },
	        saintPolycarp: {
				moment: moment.utc({ year: year, month: 1, day: 23 }),
	            type: types.MEMORIAL,
	            name: 'Saint Polycarp, Bishop & Martyr'
	        },

	        // March
	        saintCasimir: {
				moment: moment.utc({ year: year, month: 2, day: 4 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Casimir'
	        },
	        saintPerpetuaAndFelicity: {
				moment: moment.utc({ year: year, month: 2, day: 7 }),
	            type: types.MEMORIAL,
	            name: 'Saints Perpetua & Felicity, Martyrs'
	        },
	        saintJohnOfGod: {
				moment: moment.utc({ year: year, month: 2, day: 8 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint John of God, Religious'
	        },
	        saintFrancesOfRome: {
				moment: moment.utc({ year: year, month: 2, day: 9 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Frances of Rome, Religious'
	        },
	        saintPatrick: {
				moment: moment.utc({ year: year, month: 2, day: 17 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Patrick, Bishop'
	        },
	        saintCyrilOfJerusalem: {
				moment: moment.utc({ year: year, month: 2, day: 18 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Cyril of Jerusalem, Bishop & Doctor'
	        },
	        saintTuribiusOfMogrovejo: {
				moment: moment.utc({ year: year, month: 2, day: 23 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Turibius of Mogrovejo, Bishop'
	        },

	        // April
	        saintFrancisOfPaola: {
				moment: moment.utc({ year: year, month: 3, day: 2 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Francis of Paola, Hermit'
	        },
	        saintIsidore: {
				moment: moment.utc({ year: year, month: 3, day: 4 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Isidore, Bishop & Doctor of the Church'
	        },
	        saintVincentFerrer: {
				moment: moment.utc({ year: year, month: 3, day: 5 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Vincent Ferrer, Priest'
	        },
	        saintJohnBaptistDeLaSalle: {
				moment: moment.utc({ year: year, month: 3, day: 7 }),
	            type: types.MEMORIAL,
	            name: 'Saint John Baptist de la Salle, Priest'
	        },
	        saintStanislaus: {
				moment: moment.utc({ year: year, month: 3, day: 11 }),
	            type: types.MEMORIAL,
	            name: 'Saint Stanislaus, Bishop & Martyr'
	        },
	        saintMartin: {
				moment: moment.utc({ year: year, month: 3, day: 13 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Martin I, Pope & Martyr'
	        },
	        saintAnselmOfCanterbury: {
				moment: moment.utc({ year: year, month: 3, day: 21 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Anselm of Canterbury, Bishop & Doctor of the Church'
	        },
	        saintGeorgeOrAdalbert: {
				moment: moment.utc({ year: year, month: 3, day: 23 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint George, Martyr, or Saint Adalbert, Bishop & Martyr'
	        },
	        saintFidelisOfSigmaringen: {
				moment: moment.utc({ year: year, month: 3, day: 24 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Fidelis of Sigmaringen, Priest and Martyr'
	        },
	        saintMarkTheEvangelist: {
				moment: moment.utc({ year: year, month: 3, day: 25 }),
	            type: types.FEAST,
	            name: 'Saint Mark the Evangelist'
	        },
	        saintsPeterChanelOrLouisGrignonDeMontfort: {
				moment: moment.utc({ year: year, month: 3, day: 28 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Peter Chanel, Priest & Martyr; or Saint Louis Grignon de Montfort, Priest'
	        },
	        saintCatherineOfSiena: {
				moment: moment.utc({ year: year, month: 3, day: 29 }),
	            type: types.MEMORIAL,
	            name: 'Saint Catherine of Siena, Virgin & Doctor of the Church'
	        },
	        saintPiusV: {
				moment: moment.utc({ year: year, month: 3, day: 30 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Pius V, Pope'
	        },

	        // May
	        saintJosephTheWorker: {
				moment: moment.utc({ year: year, month: 4, day: 1 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Joseph the Worker'
	        },
	        saintAthanasius: {
				moment: moment.utc({ year: year, month: 4, day: 2 }),
	            type: types.MEMORIAL,
	            name: 'Saint Athanasius, bishop and doctor'
	        },
	        saintsPhilipAndJames: {
				moment: moment.utc({ year: year, month: 4, day: 3 }),
	            type: types.FEAST,
	            name: 'Saints Philip and James, Apostles'
	        },
	        saintsNereusAndAchilleusOrPancras: {
				moment: moment.utc({ year: year, month: 4, day: 12 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saints Nereus and Achilleus, martyrs or Saint Pancras, martyr'
	        },
	        ourLadyOfFatima: {
				moment: moment.utc({ year: year, month: 4, day: 13 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Our Lady of Fatima'
	        },
	        saintMatthias: {
				moment: moment.utc({ year: year, month: 4, day: 14 }),
	            type: types.FEAST,
	            name: 'Saint Matthias the Apostle'
	        },
	        saintJohnI: {
				moment: moment.utc({ year: year, month: 4, day: 18 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint John I, pope and martyr'
	        },
	        saintBernadineOfSiena: {
				moment: moment.utc({ year: year, month: 4, day: 20 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Bernardine of Siena, priest'
	        },
	        saintChristopherMagallanesAndCo: {
				moment: moment.utc({ year: year, month: 4, day: 21 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Christopher Magallanes and companions, martyrs'
	        },
	        saintRitaOfCascia: {
				moment: moment.utc({ year: year, month: 4, day: 22 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Rita of Cascia'
	        },
	        saintBedeTheVenerableOrSaintGregoryVIIOrSaintMaryMagdaleneDePazzi: {
				moment: moment.utc({ year: year, month: 4, day: 25 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Bede the Venerable, priest and doctor; or Saint Gregory VII, pope or Saint Mary Magdalene de Pazzi, virgin'
	        },
	        saintPhilipNeri: {
				moment: moment.utc({ year: year, month: 4, day: 26 }),
	            type: types.MEMORIAL,
	            name: 'Saint Philip Neri, priest'
	        },
	        saintAugustineOfCanterbury: {
				moment: moment.utc({ year: year, month: 4, day: 27 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Augustine (Austin) of Canterbury, bishop'
	        },
	        visitationOfTheBlessedVirginMary: {
				moment: moment.utc({ year: year, month: 4, day: 31 }),
	            type: types.FEAST,
	            name: 'Visitation of the Blessed Virgin Mary'
	        },

	        // June
	        saintJustinMartyr: {
				moment: moment.utc({ year: year, month: 5, day: 1 }),
	            type: types.MEMORIAL,
	            name: 'Saint Justin Martyr'
	        },
	        saintsMarcelinusAndPeter: {
				moment: moment.utc({ year: year, month: 5, day: 2 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saints Marcellinus and Peter, martyrs'
	        },
	        saintsCharlesLwangaAndCo: {
				moment: moment.utc({ year: year, month: 5, day: 3 }),
	            type: types.MEMORIAL,
	            name: 'Saints Charles Lwanga and companions, martyrs'
	        },
	        saintBoniface: {
				moment: moment.utc({ year: year, month: 5, day: 5 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Boniface, bishop and martyr'
	        },
	        saintNorbert: {
				moment: moment.utc({ year: year, month: 5, day: 6 }),
	            type: types.MEMORIAL,
	            name: ' Saint Norbert, bishop'
	        },
	        saintEphrem: {
				moment: moment.utc({ year: year, month: 5, day: 9 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Ephrem, deacon and doctor'
	        },
	        saintBarnabasTheApostle: {
				moment: moment.utc({ year: year, month: 5, day: 11 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Barnabas the Apostle'
	        },
	        saintAnthonyOfPadua: {
				moment: moment.utc({ year: year, month: 5, day: 13 }),
	            type: types.MEMORIAL,
	            name: 'Saint Anthony of Padua, priest and doctor'
	        },
	        saintRomuald: {
				moment: moment.utc({ year: year, month: 5, day: 19 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Romuald, abbot'
	        },
	        saintAloysiusGonzaga: {
				moment: moment.utc({ year: year, month: 5, day: 21 }),
	            type: types.MEMORIAL,
	            name: 'Saint Aloysius Gonzaga, religious'
	        },
	        saintPaulinusOfNolaOrSaintsJohnFisherAndThomasMore: {
				moment: moment.utc({ year: year, month: 5, day: 22 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Paulinus of Nola, bishop or Saints John Fisher, bishop and martyr and Thomas More, martyr'
	        },
	        saintCyrilOfAlexandria: {
				moment: moment.utc({ year: year, month: 5, day: 27 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Cyril of Alexandria, bishop and doctor'
	        },
	        saintIrenaeus: {
				moment: moment.utc({ year: year, month: 5, day: 28 }),
	            type: types.MEMORIAL,
	            name: 'Saint Irenaeus, bishop and martyr'
	        },
	        firstMartyrsOfTheChurchOfRome: {
				moment: moment.utc({ year: year, month: 5, day: 30 }),
	            type: types.OPT_MEMORIAL,
	            name: 'First Martyrs of the Church of Rome'
	        },

	        // July
	        saintThomasTheApostle: {
				moment: moment.utc({ year: year, month: 6, day: 3 }),
	            type: types.FEAST,
	            name: 'Saint Thomas the Apostle'
	        },
	        saintElizabethOfPortugal: {
				moment: moment.utc({ year: year, month: 6, day: 4 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Elizabeth of Portugal'
	        },
	        saintAnthonyZaccaria: {
				moment: moment.utc({ year: year, month: 6, day: 5 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Anthony Zaccaria, priest'
	        },
	        saintMariaGoretti: {
				moment: moment.utc({ year: year, month: 6, day: 6 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Maria Goretti, virgin and martyr'
	        },
	        saintAugustineZhaoRongAndCo: {
				moment: moment.utc({ year: year, month: 6, day: 9 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Augustine Zhao Rong and companions, martyrs'
	        },
	        saintBenedict: {
				moment: moment.utc({ year: year, month: 6, day: 11 }),
	            type: types.MEMORIAL,
	            name: 'Saint Benedict, abbot'
	        },
	        saintHenry: {
				moment: moment.utc({ year: year, month: 6, day: 13 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Henry'
	        },
	        saintCamiliusDeLellis: {
				moment: moment.utc({ year: year, month: 6, day: 14 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Camillus de Lellis, priest'
	        },
	        saintBonaventure: {
				moment: moment.utc({ year: year, month: 6, day: 15 }),
	            type: types.MEMORIAL,
	            name: 'Saint Bonaventure, bishop and doctor'
	        },
	        ourLadyOfMountCarmel: {
				moment: moment.utc({ year: year, month: 6, day: 16 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Our Lady of Mount Carmel'
	        },
	        saintApollinaris: {
				moment: moment.utc({ year: year, month: 6, day: 20 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Apollinaris'
	        },
	        saintLawrenceOfBrindisi: {
				moment: moment.utc({ year: year, month: 6, day: 21 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Lawrence of Brindisi, priest and doctor'
	        },
	        saintMaryOfMagdalene: {
				moment: moment.utc({ year: year, month: 6, day: 22 }),
	            type: types.MEMORIAL,
	            name: 'Saint Mary Magdalene'
	        },
	        saintBirgitta: {
				moment: moment.utc({ year: year, month: 6, day: 23 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Birgitta, religious'
	        },
	        saintSharbelMakhluf: {
				moment: moment.utc({ year: year, month: 6, day: 24 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Sharbel Makhluf, hermit'
	        },
	        saintJames: {
				moment: moment.utc({ year: year, month: 6, day: 25 }),
	            type: types.FEAST,
	            name: 'Saint James, apostle'
	        },
	        saintsJoachimAndAnne: {
				moment: moment.utc({ year: year, month: 6, day: 26 }),
	            type: types.MEMORIAL,
	            name: 'Saints Joachim and Anne'
	        },
	        saintMartha: {
				moment: moment.utc({ year: year, month: 6, day: 29 }),
	            type: types.MEMORIAL,
	            name: 'Saint Martha'
	        },
	        saintPeterChrysologus: {
				moment: moment.utc({ year: year, month: 6, day: 30 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Peter Chrysologus, bishop and doctor'
	        },
	        saintIgnatiusOfLoyola: {
				moment: moment.utc({ year: year, month: 6, day: 31 }),
	            type: types.MEMORIAL,
	            name: 'Saint Ignatius of Loyola, priest'
	        },

	        // August
	        saintAlphonsusMariaDeLiguori: {
				moment: moment.utc({ year: year, month: 7, day: 1 }),
	            type: types.MEMORIAL,
	            name: 'Saint Alphonsus Maria de Liguori, bishop and doctor of the Church'
	        },
	        saintEusebiusOfVercelli: {
				moment: moment.utc({ year: year, month: 7, day: 2 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Eusebius of Vercelli, bishop, or Saint Peter Julian Eymard, priest'
	        },
	        saintJeanVianney: {
				moment: moment.utc({ year: year, month: 7, day: 4 }),
	            type: types.MEMORIAL,
	            name: 'Saint Jean Vianney (the Cure of Ars), priest'
	        },
	        dedicationOfTheBasilicaOfSaintMaryMajor: {
				moment: moment.utc({ year: year, month: 7, day: 5 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Dedication of the Basilica of Saint Mary Major'
	        },
	        saintSixtusIIOrSaintCajetan: {
				moment: moment.utc({ year: year, month: 7, day: 7 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Sixtus II, pope, and companions, martyrs, or Saint Cajetan, priest'
	        },
	        saintDominic: {
				moment: moment.utc({ year: year, month: 7, day: 8 }),
	            type: types.MEMORIAL,
	            name: 'Saint Dominic, priest'
	        },
	        saintTeresaBenedictaOfTheCross: {
				moment: moment.utc({ year: year, month: 7, day: 9 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Teresa Benedicta of the Cross (Edith Stein), virgin and martyr'	        
	        },
	        saintLawrence: {
				moment: moment.utc({ year: year, month: 7, day: 10 }),
	            type: types.FEAST,
	            name: 'Saint Lawrence, deacon and martyr'
	        },
	        saintClare: {
				moment: moment.utc({ year: year, month: 7, day: 11 }),
	            type: types.MEMORIAL,
	            name: 'Saint Clare, virgin'
	        },
	        saintJaneFrancesDeChantal: {
				moment: moment.utc({ year: year, month: 7, day: 12 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Jane Frances de Chantal, religious'
	        },
	        saintsPontianAndHippolytus: {
				moment: moment.utc({ year: year, month: 7, day: 13 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saints Pontian, pope, and Hippolytus, priest, martyrs'
	        },
	        saintMaximilianMaryKolbe: {
				moment: moment.utc({ year: year, month: 7, day: 14 }),
	            type: types.MEMORIAL,
	            name: 'Saint Maximilian Mary Kolbe, priest and martyr'
	        },
	        saintStephenOfHungary: {
				moment: moment.utc({ year: year, month: 7, day: 16 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Stephen of Hungary'
	        },
	        saintJohnEudes: {
				moment: moment.utc({ year: year, month: 7, day: 19 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint John Eudes, priest'
	        },
	        saintBernardOfClairvaux: {
				moment: moment.utc({ year: year, month: 7, day: 20 }),
	            type: types.MEMORIAL,
	            name: 'Saint Bernard of Clairvaux, abbot and doctor of the Church'
	        },
	        saintPiuxX: {
				moment: moment.utc({ year: year, month: 7, day: 21 }),
	            type: types.MEMORIAL,
	            name: 'Saint Pius X, pope'
	        },
	        quuenshipOfBlessedVirginMary: {
				moment: moment.utc({ year: year, month: 7, day: 22 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Queenship of Blessed Virgin Mary'
	        },
	        saintRoseOfLima: {
				moment: moment.utc({ year: year, month: 7, day: 23 }),
	            type: types.MEMORIAL,
	            name: 'Saint Rose of Lima, virgin'
	        },
	        saintBartholomewTheApostle: {
				moment: moment.utc({ year: year, month: 7, day: 24 }),
	            type: types.FEAST,
	            name: 'Saint Bartholomew the Apostle'
	        },
	        saintLouisOrJosephOfCalasanz: {
				moment: moment.utc({ year: year, month: 7, day: 25 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Louis or Saint Joseph of Calasanz, priest'
	        },
	        saintMonica: {
				moment: moment.utc({ year: year, month: 7, day: 27 }),
	            type: types.MEMORIAL,
	            name: 'Saint Monica'
	        },
	        saintAugustineOfHippo: {
				moment: moment.utc({ year: year, month: 7, day: 28 }),
	            type: types.MEMORIAL,
	            name: 'Saint Augustine of Hippo, bishop and doctor of the Church'
	        },
	        beheadingOfSaintJohnTheBaptist: {
				moment: moment.utc({ year: year, month: 7, day: 29 }),
	            type: types.MEMORIAL,
	            name: 'The Beheading of Saint John the Baptist, martyr'
	        },

	        // September
	        saintGregoryTheGreat: {
				moment: moment.utc({ year: year, month: 8, day: 3 }),
	            type: types.MEMORIAL,
	            name: 'Saint Gregory the Great, pope and doctor'
	        },
	        birthOfTheBlessedVirginMary: {
				moment: moment.utc({ year: year, month: 8, day: 8 }),
	            type: types.FEAST,
	            name: 'Birth of the Blessed Virgin Mary'
	        },
	        saintPeterClaver: {
				moment: moment.utc({ year: year, month: 8, day: 9 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Peter Claver, priest'
	        },
	        holyNameOfTheBlessedVirginMary: {
				moment: moment.utc({ year: year, month: 8, day: 12 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Holy Name of the Blessed Virgin Mary'
	        },
	        saintJohnChrysostom: {
				moment: moment.utc({ year: year, month: 8, day: 13 }),
	            type: types.MEMORIAL,
	            name: 'Saint John Chrysostom, bishop and doctor'
	        },
	        ourLadyOfSorrows: {
				moment: moment.utc({ year: year, month: 8, day: 15 }),
	            type: types.MEMORIAL,
	            name: 'Our Lady of Sorrows'
	        },
	        saintsCorneliusAndCyprian: {
				moment: moment.utc({ year: year, month: 8, day: 16 }),
	            type: types.MEMORIAL,
	            name: 'Saints Cornelius, pope, and Cyprian, bishop, martyrs'
	        },
	        saintRobertBellarmine: {
				moment: moment.utc({ year: year, month: 8, day: 17 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Robert Bellarmine, bishop and doctor'
	        },
	        saintJanuarius: {
				moment: moment.utc({ year: year, month: 8, day: 19 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Januarius, bishop and martyr'
	        },
	        saintAndrewKimTaegonAndPaulChongHasangAndCo: {
				moment: moment.utc({ year: year, month: 8, day: 20 }),
	            type: types.MEMORIAL,
	            name: 'Saint Andrew Kim Taegon, priest, and Paul Chong Hasang and companions, martyrs'
	        },
	        saintMatthewTheEvangelist: {
				moment: moment.utc({ year: year, month: 8, day: 21 }),
	            type: types.FEAST,
	            name: 'Saint Matthew the Evangelist, Apostle, Evangelist'
	        },
	        saintPioOfPietrelcina: {
				moment: moment.utc({ year: year, month: 8, day: 23 }),
	            type: types.MEMORIAL,
	            name: 'Saint Pio of Pietrelcina (Padre Pio), priest'
	        },
	        saintsCosmasAndDamian: {
				moment: moment.utc({ year: year, month: 8, day: 26 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saints Cosmas and Damian, martyrs'
	        },
	        saintVincentDePaul: {
				moment: moment.utc({ year: year, month: 8, day: 27 }),
	            type: types.MEMORIAL,
	            name: 'Saint Vincent de Paul, priest'
	        },
	        saintWenceslausOrSaintsRuizAndCo: {
				moment: moment.utc({ year: year, month: 8, day: 28 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Wenceslaus, martyr or Saints Lawrence Ruiz and companions, martyrs'
	        },
	        saintsMichaelGabrielAndRaphael: {
				moment: moment.utc({ year: year, month: 8, day: 29 }),
	            type: types.FEAST,
	            name: 'Saints Michael, Gabriel and Raphael, Archangels'
	        },
	        saintJerome: {
				moment: moment.utc({ year: year, month: 8, day: 30 }),
	            type: types.MEMORIAL,
	            name: 'Saint Jerome, priest and doctor'
	        },

	        // October
	        saintThereseOfTheChildOfJesus: {
				moment: moment.utc({ year: year, month: 9, day: 1 }),
	            type: types.MEMORIAL,
	            name: 'Saint Therese of the Child Jesus, virgin and doctor'
	        },
	        guardianAngels: {
				moment: moment.utc({ year: year, month: 9, day: 2 }),
	            type: types.MEMORIAL,
	            name: 'Guardian Angels'
	        },
	        saintFrancisOfAsisi: {
				moment: moment.utc({ year: year, month: 9, day: 4 }),
	            type: types.MEMORIAL,
	            name: 'Saint Francis of Assisi'
	        },
	        saintBruno: {
				moment: moment.utc({ year: year, month: 9, day: 6 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Bruno, priest'
	        },
	        ourLadyOfTheRosary: {
				moment: moment.utc({ year: year, month: 9, day: 7 }),
	            type: types.MEMORIAL,
	            name: 'Our Lady of the Rosary'
	        },
	        saintDenisAndCoOrSaintJohnLeonardi: {
				moment: moment.utc({ year: year, month: 9, day: 9 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Denis and companions, martyrs or Saint John Leonardi, priest'
	        },
	        saintCallistusI: {
				moment: moment.utc({ year: year, month: 9, day: 14 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Callistus I, pope and martyr'
	        },
	        saintTeresaOfJesus: {
				moment: moment.utc({ year: year, month: 9, day: 15 }),
	            type: types.MEMORIAL,
	            name: 'Saint Teresa of Jesus, virgin and doctor'
	        },
	        saintHedwigOrSaintMargaretMaryAlacoque: {
				moment: moment.utc({ year: year, month: 9, day: 16 }),
	            type: types.MEMORIAL,
	            name: 'Saint Hedwig, religious or Saint Margaret Mary Alacoque, virgin'
	        },
	        saintIgnatiusOfAntioch: {
				moment: moment.utc({ year: year, month: 9, day: 17 }),
	            type: types.MEMORIAL,
	            name: 'Saint Ignatius of Antioch, bishop and martyr'
	        },
	        saintLukeTheEvangelist: {
				moment: moment.utc({ year: year, month: 9, day: 18 }),
	            type: types.FEAST,
	            name: 'Saint Luke the Evangelist'
	        },
	        saintsJeanDeBrebeufIsaacJorguesAndCoOrSaintPaulOfTheCross: {
				moment: moment.utc({ year: year, month: 9, day: 19 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saints Jean de Brebeuf, Isaac Jogues, priests and martyrs; and their companions, martyrs or Saint Paul of the Cross, priest'
	        },
	        saintJohnOfCapistrano: {
				moment: moment.utc({ year: year, month: 9, day: 23 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint John of Capistrano, priest'
	        },
	        saintAnthonyMaryClaret: {
	        	moment: moment.utc({ year: year, month: 9, day: 24 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Anthony Mary Claret, bishop'
	        },
	        saintsSimonAndJude: {
	        	moment: moment.utc({ year: year, month: 9, day: 28 }),
	            type: types.FEAST,
	            name: 'Saint Simon and Saint Jude, apostles'
	        },

	        // November
	        allSouls: {
	        	moment: moment.utc({ year: year, month: 10, day: 2 }),
	            type: types.FEAST,
	            name: 'All Souls'
	        },
	        saintMartinDePorres: {
	        	moment: moment.utc({ year: year, month: 10, day: 3 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Martin de Porres, religious'
	        },
	        saintCharlesBorromeo: {
	        	moment: moment.utc({ year: year, month: 10, day: 4 }),
	            type: types.MEMORIAL,
	            name: 'Saint Charles Borromeo, bishop'
	        },
	        dedicationOfTheLateranBasilica: {
	        	moment: moment.utc({ year: year, month: 10, day: 9 }),
	            type: types.FEAST,
	            name: 'Dedication of the Lateran basilica'
	        },
	        saintLeoTheGreat: {
	        	moment: moment.utc({ year: year, month: 10, day: 10 }),
	            type: types.MEMORIAL,
	            name: 'Saint Leo the Great, pope and doctor'
	        },
	        saintMartinOfTours: {
	        	moment: moment.utc({ year: year, month: 10, day: 11 }),
	            type: types.MEMORIAL,
	            name: 'Saint Martin of Tours, bishop'
	        },
	        saintJosaphat: {
	        	moment: moment.utc({ year: year, month: 10, day: 12 }),
	            type: types.MEMORIAL,
	            name: 'Saint Josaphat, bishop and martyr'
	        },
	        saintAlbertTheGreat: {
	        	moment: moment.utc({ year: year, month: 10, day: 15 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Albert the Great, bishop and doctor'
	        },
	        saintMargaretOfScotlantOrGertrudeTheGreat: {
	        	moment: moment.utc({ year: year, month: 10, day: 16 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Margaret of Scotland or Saint Gertrude the Great, virgin'
	        },
	        saintElizabethOfHungary: {
	        	moment: moment.utc({ year: year, month: 10, day: 17 }),
	            type: types.MEMORIAL,
	            name: 'Saint Elizabeth of Hungary, religious'
	        },
	        dedicationOfTheBasilicasOfSaintsPeterAndPaul: {
	        	moment: moment.utc({ year: year, month: 10, day: 18 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Dedication of the basilicas of Saints Peter and Paul, Apostles'
	        },	
	        presentationOfTheBlessedVirginMary: {
	        	moment: moment.utc({ year: year, month: 10, day: 21 }),
	            type: types.MEMORIAL,
	            name: 'Presentation of the Blessed Virgin Mary'
	        },
	        saintCecilia: {
	        	moment: moment.utc({ year: year, month: 10, day: 22 }),
	            type: types.MEMORIAL,
	            name: 'Saint Cecilia'
	        },
	        saintClementIOrSaintColumban: {
	        	moment: moment.utc({ year: year, month: 10, day: 23 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Clement I, pope and martyr or Saint Columban, religious'
	        },
	        saintAndrewDungLacAndCo: {
	        	moment: moment.utc({ year: year, month: 10, day: 24 }),
	            type: types.MEMORIAL,
	            name: 'Saint Andrew Dung Lac and his companions, martyrs'
	        },
	        saintCatherineOfAlexandria: {
	        	moment: moment.utc({ year: year, month: 10, day: 25 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Catherine of Alexandria'
	        },
	        saintAndrew: {
	        	moment: moment.utc({ year: year, month: 10, day: 30 }),
	            type: types.FEAST,
	            name: 'Saint Andrew the Apostle'
	        },

	        // December
	        saintFrancisXavier: {
	        	moment: moment.utc({ year: year, month: 11, day: 3 }),
	            type: types.MEMORIAL,
	            name: 'Saint Francis Xavier, priest'
	        },
	        saintJohnDamascene: {
	        	moment: moment.utc({ year: year, month: 11, day: 4 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint John Damascene, priest and doctor'
	        },
	        saintNicholas: {
	        	moment: moment.utc({ year: year, month: 11, day: 6 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Nicholas, bishop'
	        },
	        saintAmbrose: {
	        	moment: moment.utc({ year: year, month: 11, day: 7 }),
	            type: types.MEMORIAL,
	            name: 'Saint Ambrose, bishop & doctor'
	        },
	        saintJuanDiego: {
	        	moment: moment.utc({ year: year, month: 11, day: 9 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Juan Diego'
	        },
	        saintDamasusI: {
	        	moment: moment.utc({ year: year, month: 11, day: 11 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Damasus I, pope'
	        },
	        ourLadyOfGuadalupe: {
	        	moment: moment.utc({ year: year, month: 11, day: 12 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Our Lady of Guadalupe'
	        },
	        saintLucyOfSyracuse: {
	        	moment: moment.utc({ year: year, month: 11, day: 13 }),
	            type: types.MEMORIAL,
	            name: 'Saint Lucy of Syracuse, virgin & martyr'
	        },
	        saintJohnOfTheCross: {
	        	moment: moment.utc({ year: year, month: 11, day: 14 }),
	            type: types.MEMORIAL,
	            name: 'Saint John of the Cross, Priest & Doctor'
	        },
	        saintPeterCanisius: {
	        	moment: moment.utc({ year: year, month: 11, day: 21 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Peter Canisius, Priest & Doctor'
	        },
	        saintJohnofKanty: {
	        	moment: moment.utc({ year: year, month: 11, day: 23 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint John of Kanty, Priest'
	        },
	        saintStephenTheFirstMartyr: {
	        	moment: moment.utc({ year: year, month: 11, day: 26 }),
	            type: types.FEAST,
	            name: 'Saint Stephen, The First Martyr'
	        },
	        saintJohnTheApostle: {
	        	moment: moment.utc({ year: year, month: 11, day: 27 }),
	            type: types.FEAST,
	            name: 'Saint John the Apostle & Evangelist'
	        },
	        holyInnocents: {
				moment: moment.utc({ year: year, month: 11, day: 28 }),
	            type: types.FEAST,
	            name: 'Holy Innocents, Martyrs'
	        },
	        saintThomasBecket: {
	        	moment: moment.utc({ year: year, month: 11, day: 29 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Thomas Becket, Bishop & Martyr'
	        },
	        saintSylvesterI: {
				moment: moment.utc({ year: year, month: 11, day: 31 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Sylvester I, Pope'
	        }
	    };
	    return dates;
	}
};