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

	        },
	        saintAgatha: {

	        },
	        saintsPaulMikiAndCo: {

	        },
	        saintsJeromeOrJosephine: {

	        },
	        saintScholastica: {

	        },
	        ourLadyOfLourdes: {

	        },
	        saintsCyrilAndMethodius: {

	        },
	        foundersOfTheSevileOrder: {

	        },
	        saintPeterDamian: {

	        },
	        chairOfSaintPeter: {

	        },
	        saintPolycarp: {

	        },
	        // March
	        saintCasimir: {

	        },
	        saintPerpetuaAndFelicity: {

	        },
	        saintJohnOfGod: {

	        },
	        saintFrancesOfRome: {

	        },
	        saintPatrick: {

	        },
	        saintCyrilOfJerusalem: {

	        },
	        saintJoseph: {

	        },
	        saintTuribiusOfMogrovejo: {

	        },
	        // April
	        saintFrancisOfPaola: {

	        },
	        saintIsidore: {

	        },
	        saintVincentFerrer: {

	        },
	        saintJohnBaptistDeLaSalle: {

	        },
	        saintStanislaus: {

	        },
	        saintMartin: {

	        },
	        saintAnselmOfCanterbury: {

	        },
	        saintGeorgeOrAdalbert: {

	        },
	        saintFidelisOfSigmaringen: {

	        },
	        saintMarkTheEvangelist: {

	        },
	        saintsPeterChanelOrLouisGrignonDeMontfort: {

	        },
	        saintCatherineOfSiena: {

	        },
	        saintPiusV: {

	        },
	        // May
	        saintJosephTheWorker: {

	        },
	        saintAthanasius: {

	        },
	        saintsPhilipAndJames: {

	        },
	        saintsNereusAndAchilleusOrPancras: {

	        },
	        ourLadyOfFatima: {

	        },
	        saintMatthias: {

	        },
	        saintJohnI: {

	        },
	        saintBernadineOfSiena: {

	        },
	        saintChristopherMagallanesAndCo: {

	        },
	        saintRitaOfCascia: {

	        },
	        saintBedeTheVenerableOrSaintGregoryVIIOrSaintMaryMagdaleneDePazzi: {

	        },
	        saintPhilipNeri: {

	        },
	        saintAugustineOfCanterbury: {

	        },
	        visitationOfTheBlessedVirginMary: {

	        },
	        // June
	        saintJustinMartyr: {

	        },
	        saintsMarcelinusAndPeter: {

	        },
	        saintsCharlesLwangaAndCo: {

	        },
	        saintBoniface: {

	        },
	        saintNorbert: {

	        },
	        saintEphrem: {

	        },
	        saintBarnabasTheApostle: {

	        },
	        saintAnthonyOfPadua: {

	        },
	        saintRomuald: {

	        },
	        saintAloysiusGonzaga: {

	        },
	        saintPaulinusOfNolaOrSaintsJohnFisherAndThomasMore: {

	        },
	        saintCyrilOfAlexandria: {

	        },
	        saintIrenaeus: {

	        },
	        firstMartyrsOfTheChurchOfRome: {

	        },
	        // July
	        saintThomasTheApostle: {

	        },
	        saintElizabethOfPortugal: {

	        },
	        saintAnthonyZaccaria: {

	        },
	        saintMariaGoretti: {

	        },
	        saintAugustineZhaoRongAndCo: {

	        },
	        saintBenedict: {

	        },
	        saintHenry: {

	        },
	        saintCamiliusDeLellis: {

	        },
	        saintBonaventure: {

	        },
	        ourLadyOfMountCarmel: {

	        },
	        saintApollinaris: {

	        },
	        saintLawrenceOfBrindisi: {

	        },
	        saintMaryOfMagdalene: {

	        },
	        saintBirgitta: {

	        },
	        saintSharbelMakhluf: {

	        },
	        saintJames: {

	        },
	        saintsJoachimAndAnne: {

	        },
	        saintMartha: {

	        },
	        saintPeterChrysologus: {

	        },
	        saintIgnatiusOfLoyola: {

	        },
	        // August
	        saintAlphonsusMariaDeLiguori: {

	        },
	        saintEusebiusOfVercelli: {

	        },
	        saintJeanVianney: {

	        },
	        dedicationOfTheBasilicaOfSaintMaryMajor: {

	        },
	        saintSixtusII: {

	        },
	        saintDominic: {

	        },
	        saintTeresaBenedictaOfTheCross: {
	        
	        },
	        saintLawrence: {

	        },
	        saintClare: {

	        },
	        saintJaneFrancesDeChantal: {

	        },
	        saintsPontianAndHippolytus: {

	        },
	        saintMaximilianMaryKolbe: {

	        },
	        saintStephenOfHungary: {

	        },
	        saintJohnEudes: {

	        },
	        saintBernardOfClairvaux: {

	        },
	        saintPiuxX: {

	        },
	        quuenshipOfBlessedVirginMary: {

	        },
	        saintRoseOfLima: {

	        },
	        saintBartholomewTheApostle: {

	        },
	        saintLouisOrJosephOfCalasanz: {

	        },
	        saintMonica: {

	        },
	        saintAugustineOfHippo: {

	        },
	        beheadingOfSaintJohnTheBaptist: {

	        },
	        // September

	    };
	    return dates;
	}
};