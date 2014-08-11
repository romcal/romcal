var moment = require('moment'),
	types = require('./utils').types();

module.exports = {
	dates: function( year ) {
	    var dates = {
	        // January
	        saintBasilAndGregory: {
	            moment: moment.utc({ year: year, month: 0, day: 2 }),
	            type: types.MEMORIAL,
	            name: 'Saints Basil the Great & Gregory Nazianzen, Bishops & Doctors',
	            data: {}
	        },
	        theMostHolyNameOfJesus: {
	            moment: moment.utc({ year: year, month: 0, day: 3 }),
	            type: types.OPT_MEMORIAL,
	            name: 'The Most Holy Name of Jesus',
				data: {}
	        },
	        saintRaymondOfPenyafort: {
	            moment: moment.utc({ year: year, month: 0, day: 7 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Raymond of Penyafort'   ,
				data: {}         
	        },
	        saintHilaryOfPoitiers: {
	            moment: moment.utc({ year: year, month: 0, day: 13 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Hilary of Poitiers, Bishop & Doctor',
				data: {}
	        },
	        saintAnthonyOfEgypt: {
	            moment: moment.utc({ year: year, month: 0, day: 17 }),
	            type: types.MEMORIAL,
	            name: 'Saint Anthony of Egypt, Abbot',
				data: {}
	        },
	        saintsFabianOrSebastian: {
	            moment: moment.utc({ year: year, month: 0, day: 20 }),
	            type: types.OPT_MEMORIAL_MARTYR,
	            name: 'Saints Fabian & Sebastian, Pope & Martyrs',
				data: {}
	        },
	        saintAgnes: {
	            moment: moment.utc({ year: year, month: 0, day: 21 }),
	            type: types.MEMORIAL_MARTYR,
	            name: 'Saint Agnes, Virgin & Martyr',
				data: {}
	        }, 
	        saintVincent: {
	            moment: moment.utc({ year: year, month: 0, day: 22 }),
	            type: types.OPT_MEMORIAL_MARTYR,
	            name: 'Saint Vincent, Deacon & Martyr',
				data: {}        
	        },
	        saintFrancisDeSales: {
	            moment: moment.utc({ year: year, month: 0, day: 24 }),
	            type: types.MEMORIAL,
	            name: 'Saint Francis de Sales, Bishop & Doctor',
				data: {}
	        },
	        conversionOfSaintPaul: {
	            moment: moment.utc({ year: year, month: 0, day: 25 }),
	            type: types.FEAST,
	            name: 'The Conversion of Saint Paul, Apostle',
				data: {}
	        },
	        saintsTimothyAndTitus: {
	            moment: moment.utc({ year: year, month: 0, day: 26 }),
	            type: types.MEMORIAL,
	            name: 'Saints Timothy & Titus, Bishops',
				data: {}
	        },
	        saintAngelaMerici: {
	            moment: moment.utc({ year: year, month: 0, day: 27 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Angela Merici, Virgin',
				data: {}
	        },
	        saintThomasAquinas: {
	            moment: moment.utc({ year: year, month: 0, day: 28 }),
	            type: types.MEMORIAL,
	            name: 'Saint Thomas Aquinas, Priest & Doctor',
				data: {}
	        },
	        saintJohnBosco: {
	            moment: moment.utc({ year: year, month: 0, day: 31 }),
	            type: types.MEMORIAL,
	            name: 'Saint John Bosco, Priest',
				data: {}
	        },

	        // February
	        saintsBlaseOrAnsgar: {
				moment: moment.utc({ year: year, month: 1, day: 3 }),
	            type: types.OPT_MEMORIAL_MARTYR,
	            name: 'Saint Blase, Bishop & Martyr, or Saint Ansgar, Bishop',
				data: {}
	        },
	        saintAgatha: {
				moment: moment.utc({ year: year, month: 1, day: 5 }),
	            type: types.MEMORIAL_MARTYR,
	            name: 'Saint Agatha, Virgin & Martyr',
				data: {}
	        },
	        saintsPaulMikiAndCo: {
				moment: moment.utc({ year: year, month: 1, day: 6 }),
	            type: types.MEMORIAL_MARTYR,
	            name: 'Saints Paul Miki & Companions, Martyrs',
				data: {}
	        },
	        saintsJeromeOrJosephine: {
				moment: moment.utc({ year: year, month: 1, day: 8 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Jerome Emiliani or Saint Josephine Bakhita, Virgin',
				data: {}
	        },
	        saintScholastica: {
				moment: moment.utc({ year: year, month: 1, day: 10 }),
	            type: types.MEMORIAL,
	            name: 'Saint Scholastica, Virgin',
				data: {}
	        },
	        ourLadyOfLourdes: {
				moment: moment.utc({ year: year, month: 1, day: 11 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Our Lady of Lourdes',
				data: {}
	        },
	        saintsCyrilAndMethodius: {
				moment: moment.utc({ year: year, month: 1, day: 14 }),
	            type: types.MEMORIAL,
	            name: 'Saints Cyril, Monk, & Methodius, Bishop',
				data: {}
	        },
	        foundersOfTheSevileOrder: {
				moment: moment.utc({ year: year, month: 1, day: 17 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Seven Holy Founders of the Servite Order',
				data: {}
	        },
	        saintPeterDamian: {
				moment: moment.utc({ year: year, month: 1, day: 21 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Peter Damian, Bishop & Doctor of the Church',
				data: {}
	        },
	        chairOfSaintPeter: {
				moment: moment.utc({ year: year, month: 1, day: 22 }),
	            type: types.FEAST,
	            name: 'Chair of Saint Peter, Apostle',
				data: {}
	        },
	        saintPolycarp: {
				moment: moment.utc({ year: year, month: 1, day: 23 }),
	            type: types.MEMORIAL_MARTYR,
	            name: 'Saint Polycarp, Bishop & Martyr',
				data: {}
	        },

	        // March
	        saintCasimir: {
				moment: moment.utc({ year: year, month: 2, day: 4 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Casimir',
				data: {}
	        },
	        saintPerpetuaAndFelicity: {
				moment: moment.utc({ year: year, month: 2, day: 7 }),
	            type: types.MEMORIAL,
	            name: 'Saints Perpetua & Felicity, Martyrs',
				data: {}
	        },
	        saintJohnOfGod: {
				moment: moment.utc({ year: year, month: 2, day: 8 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint John of God, Religious',
				data: {}
	        },
	        saintFrancesOfRome: {
				moment: moment.utc({ year: year, month: 2, day: 9 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Frances of Rome, Religious',
				data: {}
	        },
	        saintPatrick: {
				moment: moment.utc({ year: year, month: 2, day: 17 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Patrick, Bishop',
				data: {}
	        },
	        saintCyrilOfJerusalem: {
				moment: moment.utc({ year: year, month: 2, day: 18 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Cyril of Jerusalem, Bishop & Doctor',
				data: {}
	        },
	        saintTuribiusOfMogrovejo: {
				moment: moment.utc({ year: year, month: 2, day: 23 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Turibius of Mogrovejo, Bishop',
				data: {}
	        },

	        // April
	        saintFrancisOfPaola: {
				moment: moment.utc({ year: year, month: 3, day: 2 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Francis of Paola, Hermit',
				data: {}
	        },
	        saintIsidore: {
				moment: moment.utc({ year: year, month: 3, day: 4 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Isidore, Bishop & Doctor of the Church',
				data: {}
	        },
	        saintVincentFerrer: {
				moment: moment.utc({ year: year, month: 3, day: 5 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Vincent Ferrer, Priest',
				data: {}
	        },
	        saintJohnBaptistDeLaSalle: {
				moment: moment.utc({ year: year, month: 3, day: 7 }),
	            type: types.MEMORIAL,
	            name: 'Saint John Baptist de la Salle, Priest',
				data: {}
	        },
	        saintStanislaus: {
				moment: moment.utc({ year: year, month: 3, day: 11 }),
	            type: types.MEMORIAL_MARTYR,
	            name: 'Saint Stanislaus, Bishop & Martyr',
				data: {}
	        },
	        saintMartin: {
				moment: moment.utc({ year: year, month: 3, day: 13 }),
	            type: types.OPT_MEMORIAL_MARTYR,
	            name: 'Saint Martin I, Pope & Martyr',
				data: {}
	        },
	        saintAnselmOfCanterbury: {
				moment: moment.utc({ year: year, month: 3, day: 21 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Anselm of Canterbury, Bishop & Doctor of the Church',
				data: {}
	        },
	        saintGeorgeOrAdalbert: {
				moment: moment.utc({ year: year, month: 3, day: 23 }),
	            type: types.OPT_MEMORIAL_MARTYR,
	            name: 'Saint George, Martyr, or Saint Adalbert, Bishop & Martyr',
				data: {}
	        },
	        saintFidelisOfSigmaringen: {
				moment: moment.utc({ year: year, month: 3, day: 24 }),
	            type: types.OPT_MEMORIAL_MARTYR,
	            name: 'Saint Fidelis of Sigmaringen, Priest & Martyr',
				data: {}
	        },
	        saintMarkTheEvangelist: {
				moment: moment.utc({ year: year, month: 3, day: 25 }),
	            type: types.FEAST,
	            name: 'Saint Mark the Evangelist',
				data: {}
	        },
	        saintsPeterChanelOrLouisGrignonDeMontfort: {
				moment: moment.utc({ year: year, month: 3, day: 28 }),
	            type: types.OPT_MEMORIAL_MARTYR,
	            name: 'Saint Peter Chanel, Priest & Martyr; or Saint Louis Grignon de Montfort, Priest',
				data: {}
	        },
	        saintCatherineOfSiena: {
				moment: moment.utc({ year: year, month: 3, day: 29 }),
	            type: types.MEMORIAL,
	            name: 'Saint Catherine of Siena, Virgin & Doctor of the Church',
				data: {}
	        },
	        saintPiusV: {
				moment: moment.utc({ year: year, month: 3, day: 30 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Pius V, Pope',
				data: {}
	        },

	        // May
	        saintJosephTheWorker: {
				moment: moment.utc({ year: year, month: 4, day: 1 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Joseph the Worker',
				data: {}
	        },
	        saintAthanasius: {
				moment: moment.utc({ year: year, month: 4, day: 2 }),
	            type: types.MEMORIAL,
	            name: 'Saint Athanasius, Bishop & Doctor',
				data: {}
	        },
	        saintsPhilipAndJames: {
				moment: moment.utc({ year: year, month: 4, day: 3 }),
	            type: types.FEAST_APOSTLE,
	            name: 'Saints Philip & James, Apostles',
				data: {}
	        },
	        saintsNereusAndAchilleusOrPancras: {
				moment: moment.utc({ year: year, month: 4, day: 12 }),
	            type: types.OPT_MEMORIAL_MARTYR,
	            name: 'Saints Nereus & Achilleus, Martyrs or Saint Pancras, Martyr',
				data: {}
	        },
	        ourLadyOfFatima: {
				moment: moment.utc({ year: year, month: 4, day: 13 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Our Lady of Fatima',
				data: {}
	        },
	        saintMatthias: {
				moment: moment.utc({ year: year, month: 4, day: 14 }),
	            type: types.FEAST_APOSTLE,
	            name: 'Saint Matthias the Apostle',
				data: {}
	        },
	        saintJohnI: {
				moment: moment.utc({ year: year, month: 4, day: 18 }),
	            type: types.OPT_MEMORIAL_MARTYR,
	            name: 'Saint John I, Pope & Martyr',
				data: {}
	        },
	        saintBernadineOfSiena: {
				moment: moment.utc({ year: year, month: 4, day: 20 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Bernardine of Siena, Priest',
				data: {}
	        },
	        saintChristopherMagallanesAndCo: {
				moment: moment.utc({ year: year, month: 4, day: 21 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Christopher Magallanes & Companions, Martyrs',
				data: {}
	        },
	        saintRitaOfCascia: {
				moment: moment.utc({ year: year, month: 4, day: 22 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Rita of Cascia',
				data: {}
	        },
	        saintBedeTheVenerableOrSaintGregoryVIIOrSaintMaryMagdaleneDePazzi: {
				moment: moment.utc({ year: year, month: 4, day: 25 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Bede the Venerable, Priest & Doctor; or Saint Gregory VII, Pope or Saint Mary Magdalene de Pazzi, Virgin',
				data: {}
	        },
	        saintPhilipNeri: {
				moment: moment.utc({ year: year, month: 4, day: 26 }),
	            type: types.MEMORIAL,
	            name: 'Saint Philip Neri, Priest',
				data: {}
	        },
	        saintAugustineOfCanterbury: {
				moment: moment.utc({ year: year, month: 4, day: 27 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Augustine (Austin) of Canterbury, Bishop',
				data: {}
	        },
	        visitationOfTheBlessedVirginMary: {
				moment: moment.utc({ year: year, month: 4, day: 31 }),
	            type: types.FEAST,
	            name: 'Visitation of the Blessed Virgin Mary',
				data: {}
	        },

	        // June
	        saintJustinMartyr: {
				moment: moment.utc({ year: year, month: 5, day: 1 }),
	            type: types.MEMORIAL_MARTYR,
	            name: 'Saint Justin Martyr',
				data: {}
	        },
	        saintsMarcelinusAndPeter: {
				moment: moment.utc({ year: year, month: 5, day: 2 }),
	            type: types.OPT_MEMORIAL_MARTYR,
	            name: 'Saints Marcellinus & Peter, Martyrs',
				data: {}
	        },
	        saintsCharlesLwangaAndCo: {
				moment: moment.utc({ year: year, month: 5, day: 3 }),
	            type: types.MEMORIAL_MARTYR,
	            name: 'Saints Charles Lwanga & Companions, Martyrs',
				data: {}
	        },
	        saintBoniface: {
				moment: moment.utc({ year: year, month: 5, day: 5 }),
	            type: types.OPT_MEMORIAL_MARTYR,
	            name: 'Saint Boniface, Bishop & Martyr',
				data: {}
	        },
	        saintNorbert: {
				moment: moment.utc({ year: year, month: 5, day: 6 }),
	            type: types.MEMORIAL,
	            name: 'Saint Norbert, Bishop',
				data: {}
	        },
	        saintEphrem: {
				moment: moment.utc({ year: year, month: 5, day: 9 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Ephrem, Deacon & Doctor',
				data: {}
	        },
	        saintBarnabasTheApostle: {
				moment: moment.utc({ year: year, month: 5, day: 11 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Barnabas the Apostle',
				data: {}
	        },
	        saintAnthonyOfPadua: {
				moment: moment.utc({ year: year, month: 5, day: 13 }),
	            type: types.MEMORIAL,
	            name: 'Saint Anthony of Padua, Priest & Doctor',
				data: {}
	        },
	        saintRomuald: {
				moment: moment.utc({ year: year, month: 5, day: 19 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Romuald, Abbot',
				data: {}
	        },
	        saintAloysiusGonzaga: {
				moment: moment.utc({ year: year, month: 5, day: 21 }),
	            type: types.MEMORIAL,
	            name: 'Saint Aloysius Gonzaga, Religious',
				data: {}
	        },
	        saintPaulinusOfNolaOrSaintsJohnFisherAndThomasMore: {
				moment: moment.utc({ year: year, month: 5, day: 22 }),
	            type: types.OPT_MEMORIAL_MARTYR,
	            name: 'Saint Paulinus of Nola, Bishop or Saints John Fisher, Bishop & Martyr & Thomas More, Martyr',
				data: {}
	        },
	        saintCyrilOfAlexandria: {
				moment: moment.utc({ year: year, month: 5, day: 27 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Cyril of Alexandria, Bishop & Doctor',
				data: {}
	        },
	        saintIrenaeus: {
				moment: moment.utc({ year: year, month: 5, day: 28 }),
	            type: types.MEMORIAL_MARTYR,
	            name: 'Saint Irenaeus, Bishop & Martyr',
				data: {}
	        },
	        firstMartyrsOfTheChurchOfRome: {
				moment: moment.utc({ year: year, month: 5, day: 30 }),
	            type: types.OPT_MEMORIAL_MARTYR,
	            name: 'First Martyrs of the Church of Rome',
				data: {}
	        },

	        // July
	        saintThomasTheApostle: {
				moment: moment.utc({ year: year, month: 6, day: 3 }),
	            type: types.FEAST,
	            name: 'Saint Thomas the Apostle',
				data: {}
	        },
	        saintElizabethOfPortugal: {
				moment: moment.utc({ year: year, month: 6, day: 4 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Elizabeth of Portugal',
				data: {}
	        },
	        saintAnthonyZaccaria: {
				moment: moment.utc({ year: year, month: 6, day: 5 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Anthony Zaccaria, Priest',
				data: {}
	        },
	        saintMariaGoretti: {
				moment: moment.utc({ year: year, month: 6, day: 6 }),
	            type: types.OPT_MEMORIAL_MARTYR,
	            name: 'Saint Maria Goretti, Virgin & Martyr',
				data: {}
	        },
	        saintAugustineZhaoRongAndCo: {
				moment: moment.utc({ year: year, month: 6, day: 9 }),
	            type: types.OPT_MEMORIAL_MARTYR,
	            name: 'Saint Augustine Zhao Rong & Companions, Martyrs',
				data: {}
	        },
	        saintBenedict: {
				moment: moment.utc({ year: year, month: 6, day: 11 }),
	            type: types.MEMORIAL,
	            name: 'Saint Benedict, Abbot',
				data: {}
	        },
	        saintHenry: {
				moment: moment.utc({ year: year, month: 6, day: 13 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Henry',
				data: {}
	        },
	        saintCamiliusDeLellis: {
				moment: moment.utc({ year: year, month: 6, day: 14 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Camillus de Lellis, Priest',
				data: {}
	        },
	        saintBonaventure: {
				moment: moment.utc({ year: year, month: 6, day: 15 }),
	            type: types.MEMORIAL,
	            name: 'Saint Bonaventure, Bishop & Doctor',
				data: {}
	        },
	        ourLadyOfMountCarmel: {
				moment: moment.utc({ year: year, month: 6, day: 16 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Our Lady of Mount Carmel',
				data: {}
	        },
	        saintApollinaris: {
				moment: moment.utc({ year: year, month: 6, day: 20 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Apollinaris',
				data: {}
	        },
	        saintLawrenceOfBrindisi: {
				moment: moment.utc({ year: year, month: 6, day: 21 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Lawrence of Brindisi, Priest & Doctor',
				data: {}
	        },
	        saintMaryOfMagdalene: {
				moment: moment.utc({ year: year, month: 6, day: 22 }),
	            type: types.MEMORIAL,
	            name: 'Saint Mary Magdalene',
				data: {}
	        },
	        saintBirgitta: {
				moment: moment.utc({ year: year, month: 6, day: 23 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Birgitta, Religious'
	        },
	        saintSharbelMakhluf: {
				moment: moment.utc({ year: year, month: 6, day: 24 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Sharbel Makhluf, hermit',
				data: {}
	        },
	        saintJames: {
				moment: moment.utc({ year: year, month: 6, day: 25 }),
	            type: types.FEAST_APOSTLE,
	            name: 'Saint James, Apostle',
				data: {}
	        },
	        saintsJoachimAndAnne: {
				moment: moment.utc({ year: year, month: 6, day: 26 }),
	            type: types.MEMORIAL,
	            name: 'Saints Joachim & Anne',
				data: {}
	        },
	        saintMartha: {
				moment: moment.utc({ year: year, month: 6, day: 29 }),
	            type: types.MEMORIAL,
	            name: 'Saint Martha',
				data: {}
	        },
	        saintPeterChrysologus: {
				moment: moment.utc({ year: year, month: 6, day: 30 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Peter Chrysologus, Bishop & Doctor',
				data: {}
	        },
	        saintIgnatiusOfLoyola: {
				moment: moment.utc({ year: year, month: 6, day: 31 }),
	            type: types.MEMORIAL,
	            name: 'Saint Ignatius of Loyola, Priest',
				data: {}
	        },

	        // August
	        saintAlphonsusMariaDeLiguori: {
				moment: moment.utc({ year: year, month: 7, day: 1 }),
	            type: types.MEMORIAL,
	            name: 'Saint Alphonsus Maria de Liguori, Bishop & Doctor of the Church',
				data: {}
	        },
	        saintEusebiusOfVercelli: {
				moment: moment.utc({ year: year, month: 7, day: 2 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Eusebius of Vercelli, Bishop, or Saint Peter Julian Eymard, Priest',
				data: {}
	        },
	        saintJeanVianney: {
				moment: moment.utc({ year: year, month: 7, day: 4 }),
	            type: types.MEMORIAL,
	            name: 'Saint Jean Vianney (the Cure of Ars), Priest',
				data: {}
	        },
	        dedicationOfTheBasilicaOfSaintMaryMajor: {
				moment: moment.utc({ year: year, month: 7, day: 5 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Dedication of the Basilica of Saint Mary Major',
				data: {}
	        },
	        saintSixtusIIOrSaintCajetan: {
				moment: moment.utc({ year: year, month: 7, day: 7 }),
	            type: types.OPT_MEMORIAL_MARTYR,
	            name: 'Saint Sixtus II, Pope, & Companions, Martyrs, or Saint Cajetan, Priest',
				data: {}
	        },
	        saintDominic: {
				moment: moment.utc({ year: year, month: 7, day: 8 }),
	            type: types.MEMORIAL,
	            name: 'Saint Dominic, Priest',
				data: {}
	        },
	        saintTeresaBenedictaOfTheCross: {
				moment: moment.utc({ year: year, month: 7, day: 9 }),
	            type: types.OPT_MEMORIAL_MARTYR,
	            name: 'Saint Teresa Benedicta of the Cross (Edith Stein), Virgin & Martyr',
				data: {}	        
	        },
	        saintLawrence: {
				moment: moment.utc({ year: year, month: 7, day: 10 }),
	            type: types.FEAST_MARTYR,
	            name: 'Saint Lawrence, Deacon & Martyr',
				data: {}
	        },
	        saintClare: {
				moment: moment.utc({ year: year, month: 7, day: 11 }),
	            type: types.MEMORIAL,
	            name: 'Saint Clare, Virgin',
				data: {}
	        },
	        saintJaneFrancesDeChantal: {
				moment: moment.utc({ year: year, month: 7, day: 12 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Jane Frances de Chantal, Religious',
				data: {}
	        },
	        saintsPontianAndHippolytus: {
				moment: moment.utc({ year: year, month: 7, day: 13 }),
	            type: types.OPT_MEMORIAL_MARTYR,
	            name: 'Saints Pontian, Pope, & Hippolytus, Priest, Martyrs',
				data: {}
	        },
	        saintMaximilianMaryKolbe: {
				moment: moment.utc({ year: year, month: 7, day: 14 }),
	            type: types.MEMORIAL_MARTYR,
	            name: 'Saint Maximilian Mary Kolbe, Priest & Martyr',
				data: {}
	        },
	        saintStephenOfHungary: {
				moment: moment.utc({ year: year, month: 7, day: 16 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Stephen of Hungary',
				data: {}
	        },
	        saintJohnEudes: {
				moment: moment.utc({ year: year, month: 7, day: 19 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint John Eudes, Priest',
				data: {}
	        },
	        saintBernardOfClairvaux: {
				moment: moment.utc({ year: year, month: 7, day: 20 }),
	            type: types.MEMORIAL,
	            name: 'Saint Bernard of Clairvaux, Abbot & Doctor of the Church',
				data: {}
	        },
	        saintPiuxX: {
				moment: moment.utc({ year: year, month: 7, day: 21 }),
	            type: types.MEMORIAL,
	            name: 'Saint Pius X, Pope',
				data: {}
	        },
	        quuenshipOfBlessedVirginMary: {
				moment: moment.utc({ year: year, month: 7, day: 22 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Queenship of Blessed Virgin Mary',
				data: {}
	        },
	        saintRoseOfLima: {
				moment: moment.utc({ year: year, month: 7, day: 23 }),
	            type: types.MEMORIAL,
	            name: 'Saint Rose of Lima, Virgin',
				data: {}
	        },
	        saintBartholomewTheApostle: {
				moment: moment.utc({ year: year, month: 7, day: 24 }),
	            type: types.FEAST_APOSTLE,
	            name: 'Saint Bartholomew the Apostle',
				data: {}
	        },
	        saintLouisOrJosephOfCalasanz: {
				moment: moment.utc({ year: year, month: 7, day: 25 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Louis or Saint Joseph of Calasanz, Priest',
				data: {}
	        },
	        saintMonica: {
				moment: moment.utc({ year: year, month: 7, day: 27 }),
	            type: types.MEMORIAL,
	            name: 'Saint Monica',
				data: {}
	        },
	        saintAugustineOfHippo: {
				moment: moment.utc({ year: year, month: 7, day: 28 }),
	            type: types.MEMORIAL,
	            name: 'Saint Augustine of Hippo, Bishop & Doctor of the Church',
				data: {}
	        },
	        beheadingOfSaintJohnTheBaptist: {
				moment: moment.utc({ year: year, month: 7, day: 29 }),
	            type: types.MEMORIAL_MARTYR,
	            name: 'The Beheading of Saint John the Baptist, Martyr',
				data: {}
	        },

	        // September
	        saintGregoryTheGreat: {
				moment: moment.utc({ year: year, month: 8, day: 3 }),
	            type: types.MEMORIAL,
	            name: 'Saint Gregory the Great, Pope & Doctor',
				data: {}
	        },
	        birthOfTheBlessedVirginMary: {
				moment: moment.utc({ year: year, month: 8, day: 8 }),
	            type: types.FEAST,
	            name: 'Birth of the Blessed Virgin Mary',
				data: {}
	        },
	        saintPeterClaver: {
				moment: moment.utc({ year: year, month: 8, day: 9 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Peter Claver, Priest',
				data: {}
	        },
	        holyNameOfTheBlessedVirginMary: {
				moment: moment.utc({ year: year, month: 8, day: 12 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Holy Name of the Blessed Virgin Mary',
				data: {}
	        },
	        saintJohnChrysostom: {
				moment: moment.utc({ year: year, month: 8, day: 13 }),
	            type: types.MEMORIAL,
	            name: 'Saint John Chrysostom, Bishop & Doctor',
				data: {}
	        },
	        ourLadyOfSorrows: {
				moment: moment.utc({ year: year, month: 8, day: 15 }),
	            type: types.MEMORIAL,
	            name: 'Our Lady of Sorrows',
				data: {}
	        },
	        saintsCorneliusAndCyprian: {
				moment: moment.utc({ year: year, month: 8, day: 16 }),
	            type: types.MEMORIAL_MARTYR,
	            name: 'Saints Cornelius, Pope, & Cyprian, Bishop, Martyrs',
				data: {}
	        },
	        saintRobertBellarmine: {
				moment: moment.utc({ year: year, month: 8, day: 17 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Robert Bellarmine, Bishop & Doctor',
				data: {}
	        },
	        saintJanuarius: {
				moment: moment.utc({ year: year, month: 8, day: 19 }),
	            type: types.OPT_MEMORIAL_MARTYR,
	            name: 'Saint Januarius, Bishop & Martyr',
				data: {}
	        },
	        saintAndrewKimTaegonAndPaulChongHasangAndCo: {
				moment: moment.utc({ year: year, month: 8, day: 20 }),
	            type: types.MEMORIAL_MARTYR,
	            name: 'Saint Andrew Kim Taegon, Priest, & Paul Chong Hasang & Companions, Martyrs',
				data: {}
	        },
	        saintMatthewTheEvangelist: {
				moment: moment.utc({ year: year, month: 8, day: 21 }),
	            type: types.FEAST_APOSTLE,
	            name: 'Saint Matthew, Apostle & Evangelist',
				data: {}
	        },
	        saintPioOfPietrelcina: {
				moment: moment.utc({ year: year, month: 8, day: 23 }),
	            type: types.MEMORIAL,
	            name: 'Saint Pio of Pietrelcina (Padre Pio), Priest',
				data: {}
	        },
	        saintsCosmasAndDamian: {
				moment: moment.utc({ year: year, month: 8, day: 26 }),
	            type: types.OPT_MEMORIAL_MARTYR,
	            name: 'Saints Cosmas & Damian, Martyrs',
				data: {}
	        },
	        saintVincentDePaul: {
				moment: moment.utc({ year: year, month: 8, day: 27 }),
	            type: types.MEMORIAL,
	            name: 'Saint Vincent de Paul, Priest',
				data: {}
	        },
	        saintWenceslausOrSaintsRuizAndCo: {
				moment: moment.utc({ year: year, month: 8, day: 28 }),
	            type: types.OPT_MEMORIAL_MARTYR,
	            name: 'Saint Wenceslaus, Martyr or Saints Lawrence Ruiz & Companions, Martyrs',
				data: {}
	        },
	        saintsMichaelGabrielAndRaphael: {
				moment: moment.utc({ year: year, month: 8, day: 29 }),
	            type: types.FEAST,
	            name: 'Saints Michael, Gabriel & Raphael, Archangels',
				data: {}
	        },
	        saintJerome: {
				moment: moment.utc({ year: year, month: 8, day: 30 }),
	            type: types.MEMORIAL,
	            name: 'Saint Jerome, Priest & Doctor',
				data: {}
	        },

	        // October
	        saintThereseOfTheChildOfJesus: {
				moment: moment.utc({ year: year, month: 9, day: 1 }),
	            type: types.MEMORIAL,
	            name: 'Saint Therese of the Child Jesus, Virgin & Doctor',
				data: {}
	        },
	        guardianAngels: {
				moment: moment.utc({ year: year, month: 9, day: 2 }),
	            type: types.MEMORIAL,
	            name: 'Guardian Angels',
				data: {}
	        },
	        saintFrancisOfAsisi: {
				moment: moment.utc({ year: year, month: 9, day: 4 }),
	            type: types.MEMORIAL,
	            name: 'Saint Francis of Assisi',
				data: {}
	        },
	        saintBruno: {
				moment: moment.utc({ year: year, month: 9, day: 6 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Bruno, Priest',
				data: {}
	        },
	        ourLadyOfTheRosary: {
				moment: moment.utc({ year: year, month: 9, day: 7 }),
	            type: types.MEMORIAL,
	            name: 'Our Lady of the Rosary',
				data: {}
	        },
	        saintDenisAndCoOrSaintJohnLeonardi: {
				moment: moment.utc({ year: year, month: 9, day: 9 }),
	            type: types.OPT_MEMORIAL_MARTYR,
	            name: 'Saint Denis & Companions, Martyrs or Saint John Leonardi, Priest',
				data: {}
	        },
	        saintCallistusI: {
				moment: moment.utc({ year: year, month: 9, day: 14 }),
	            type: types.OPT_MEMORIAL_MARTYR,
	            name: 'Saint Callistus I, Pope & Martyr',
				data: {}
	        },
	        saintTeresaOfJesus: {
				moment: moment.utc({ year: year, month: 9, day: 15 }),
	            type: types.MEMORIAL,
	            name: 'Saint Teresa of Jesus, Virgin & Doctor',
				data: {}
	        },
	        saintHedwigOrSaintMargaretMaryAlacoque: {
				moment: moment.utc({ year: year, month: 9, day: 16 }),
	            type: types.MEMORIAL,
	            name: 'Saint Hedwig, Religious or Saint Margaret Mary Alacoque, Virgin',
				data: {}
	        },
	        saintIgnatiusOfAntioch: {
				moment: moment.utc({ year: year, month: 9, day: 17 }),
	            type: types.MEMORIAL_MARTYR,
	            name: 'Saint Ignatius of Antioch, Bishop & Martyr',
				data: {}
	        },
	        saintLukeTheEvangelist: {
				moment: moment.utc({ year: year, month: 9, day: 18 }),
	            type: types.FEAST_APOSTLE,
	            name: 'Saint Luke the Evangelist',
				data: {}
	        },
	        saintsJeanDeBrebeufIsaacJorguesAndCoOrSaintPaulOfTheCross: {
				moment: moment.utc({ year: year, month: 9, day: 19 }),
	            type: types.OPT_MEMORIAL_MARTYR,
	            name: 'Saints Jean de Brebeuf, Isaac Jogues, priests & Martyrs; & their Companions, Martyrs or Saint Paul of the Cross, Priest',
				data: {}
	        },
	        saintJohnOfCapistrano: {
				moment: moment.utc({ year: year, month: 9, day: 23 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint John of Capistrano, Priest',
				data: {}
	        },
	        saintAnthonyMaryClaret: {
	        	moment: moment.utc({ year: year, month: 9, day: 24 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Anthony Mary Claret, Bishop',
				data: {}
	        },
	        saintsSimonAndJude: {
	        	moment: moment.utc({ year: year, month: 9, day: 28 }),
	            type: types.FEAST_APOSTLE,
	            name: 'Saint Simon & Saint Jude, Apostles',
				data: {}
	        },

	        // November
	        allSouls: {
	        	moment: moment.utc({ year: year, month: 10, day: 2 }),
	            type: types.FIXED_FEAST,
	            name: 'All Souls',
				data: {}
	        },
	        saintMartinDePorres: {
	        	moment: moment.utc({ year: year, month: 10, day: 3 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Martin de Porres, Religious',
				data: {}
	        },
	        saintCharlesBorromeo: {
	        	moment: moment.utc({ year: year, month: 10, day: 4 }),
	            type: types.MEMORIAL,
	            name: 'Saint Charles Borromeo, Bishop',
				data: {}
	        },
	        dedicationOfTheLateranBasilica: {
	        	moment: moment.utc({ year: year, month: 10, day: 9 }),
	            type: types.FIXED_FEAST,
	            name: 'Dedication of the Lateran basilica',
				data: {}
	        },
	        saintLeoTheGreat: {
	        	moment: moment.utc({ year: year, month: 10, day: 10 }),
	            type: types.MEMORIAL,
	            name: 'Saint Leo the Great, Pope & Doctor',
				data: {}
	        },
	        saintMartinOfTours: {
	        	moment: moment.utc({ year: year, month: 10, day: 11 }),
	            type: types.MEMORIAL,
	            name: 'Saint Martin of Tours, Bishop',
				data: {}
	        },
	        saintJosaphat: {
	        	moment: moment.utc({ year: year, month: 10, day: 12 }),
	            type: types.MEMORIAL_MARTYR,
	            name: 'Saint Josaphat, Bishop & Martyr',
				data: {}
	        },
	        saintAlbertTheGreat: {
	        	moment: moment.utc({ year: year, month: 10, day: 15 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Albert the Great, Bishop & Doctor',
				data: {}
	        },
	        saintMargaretOfScotlantOrGertrudeTheGreat: {
	        	moment: moment.utc({ year: year, month: 10, day: 16 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Margaret of Scotland or Saint Gertrude the Great, Virgin',
				data: {}
	        },
	        saintElizabethOfHungary: {
	        	moment: moment.utc({ year: year, month: 10, day: 17 }),
	            type: types.MEMORIAL,
	            name: 'Saint Elizabeth of Hungary, Religious',
				data: {}
	        },
	        dedicationOfTheBasilicasOfSaintsPeterAndPaul: {
	        	moment: moment.utc({ year: year, month: 10, day: 18 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Dedication of the basilicas of Saints Peter & Paul, Apostles',
				data: {}
	        },	
	        presentationOfTheBlessedVirginMary: {
	        	moment: moment.utc({ year: year, month: 10, day: 21 }),
	            type: types.MEMORIAL,
	            name: 'Presentation of the Blessed Virgin Mary',
				data: {}
	        },
	        saintCecilia: {
	        	moment: moment.utc({ year: year, month: 10, day: 22 }),
	            type: types.MEMORIAL,
	            name: 'Saint Cecilia',
				data: {}
	        },
	        saintClementIOrSaintColumban: {
	        	moment: moment.utc({ year: year, month: 10, day: 23 }),
	            type: types.OPT_MEMORIAL_MARTYR,
	            name: 'Saint Clement I, Pope & Martyr or Saint Columban, Religious',
				data: {}
	        },
	        saintAndrewDungLacAndCo: {
	        	moment: moment.utc({ year: year, month: 10, day: 24 }),
	            type: types.MEMORIAL_MARTYR,
	            name: 'Saint Andrew Dung Lac & his Companions, Martyrs',
				data: {}
	        },
	        saintCatherineOfAlexandria: {
	        	moment: moment.utc({ year: year, month: 10, day: 25 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Catherine of Alexandria',
				data: {}
	        },
	        saintAndrew: {
	        	moment: moment.utc({ year: year, month: 10, day: 30 }),
	            type: types.FEAST_APOSTLE,
	            name: 'Saint Andrew the Apostle',
				data: {}
	        },

	        // December
	        saintFrancisXavier: {
	        	moment: moment.utc({ year: year, month: 11, day: 3 }),
	            type: types.MEMORIAL,
	            name: 'Saint Francis Xavier, Priest',
				data: {}
	        },
	        saintJohnDamascene: {
	        	moment: moment.utc({ year: year, month: 11, day: 4 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint John Damascene, Priest & Doctor',
				data: {}
	        },
	        saintNicholas: {
	        	moment: moment.utc({ year: year, month: 11, day: 6 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Nicholas, Bishop',
				data: {}
	        },
	        saintAmbrose: {
	        	moment: moment.utc({ year: year, month: 11, day: 7 }),
	            type: types.MEMORIAL,
	            name: 'Saint Ambrose, Bishop & Doctor',
				data: {}
	        },
	        saintJuanDiego: {
	        	moment: moment.utc({ year: year, month: 11, day: 9 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Juan Diego',
				data: {}
	        },
	        saintDamasusI: {
	        	moment: moment.utc({ year: year, month: 11, day: 11 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Damasus I, Pope',
				data: {}
	        },
	        ourLadyOfGuadalupe: {
	        	moment: moment.utc({ year: year, month: 11, day: 12 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Our Lady of Guadalupe',
				data: {}
	        },
	        saintLucyOfSyracuse: {
	        	moment: moment.utc({ year: year, month: 11, day: 13 }),
	            type: types.MEMORIAL_MARTYR,
	            name: 'Saint Lucy of Syracuse, Virgin & Martyr',
				data: {}
	        },
	        saintJohnOfTheCross: {
	        	moment: moment.utc({ year: year, month: 11, day: 14 }),
	            type: types.MEMORIAL,
	            name: 'Saint John of the Cross, Priest & Doctor',
				data: {}
	        },
	        saintPeterCanisius: {
	        	moment: moment.utc({ year: year, month: 11, day: 21 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Peter Canisius, Priest & Doctor',
				data: {}
	        },
	        saintJohnofKanty: {
	        	moment: moment.utc({ year: year, month: 11, day: 23 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint John of Kanty, Priest',
				data: {}
	        },
	        saintStephenTheFirstMartyr: {
	        	moment: moment.utc({ year: year, month: 11, day: 26 }),
	            type: types.FEAST_MARTYR,
	            name: 'Saint Stephen, The First Martyr',
				data: {}
	        },
	        saintJohnTheApostle: {
	        	moment: moment.utc({ year: year, month: 11, day: 27 }),
	            type: types.FEAST,
	            name: 'Saint John the Apostle & Evangelist',
				data: {}
	        },
	        holyInnocents: {
				moment: moment.utc({ year: year, month: 11, day: 28 }),
	            type: types.FEAST_MARTYR,
	            name: 'Holy Innocents, Martyrs',
				data: {}
	        },
	        saintThomasBecket: {
	        	moment: moment.utc({ year: year, month: 11, day: 29 }),
	            type: types.OPT_MEMORIAL_MARTYR,
	            name: 'Saint Thomas Becket, Bishop & Martyr',
				data: {}
	        },
	        saintSylvesterI: {
				moment: moment.utc({ year: year, month: 11, day: 31 }),
	            type: types.OPT_MEMORIAL,
	            name: 'Saint Sylvester I, Pope',
				data: {}
	        }
	    };
	    return dates;
	}
};