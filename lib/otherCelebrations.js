/*
    The MIT License (MIT)

    Copyright (c) 2014 Pereira, Julian Matthew

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
*/

var moment = require('moment'),
	utils = require('./utils'),
	types = utils.types(),
	localization = utils.getLocalizationData().general;

module.exports = {
	dates: function( year, locale ) {
	    var dates = {
	        // January
	        saintBasilAndGregory: {
	            "moment": moment.utc({ year: year, month: 0, day: 2 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintBasilAndGregory[locale],
	            "data": {}
	        },
	        theMostHolyNameOfJesus: {
	            "moment": moment.utc({ year: year, month: 0, day: 3 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.theMostHolyNameOfJesus[locale],
				"data": {}
	        },
	        saintRaymondOfPenyafort: {
	            "moment": moment.utc({ year: year, month: 0, day: 7 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintRaymondOfPenyafort[locale],
				"data": {}         
	        },
	        saintHilaryOfPoitiers: {
	            "moment": moment.utc({ year: year, month: 0, day: 13 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintHilaryOfPoitiers[locale],
				"data": {}
	        },
	        saintAnthonyOfEgypt: {
	            "moment": moment.utc({ year: year, month: 0, day: 17 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintAnthonyOfEgypt[locale],
				"data": {}
	        },
	        saintsFabianOrSebastian: {
	            "moment": moment.utc({ year: year, month: 0, day: 20 }),
	            "type": types.OPT_MEMORIAL_MARTYR,
	            "name": localization.saintsFabianOrSebastian[locale],
				"data": {}
	        },
	        saintAgnes: {
	            "moment": moment.utc({ year: year, month: 0, day: 21 }),
	            "type": types.MEMORIAL_MARTYR,
	            "name": localization.saintAgnes[locale],
				"data": {}
	        }, 
	        saintVincent: {
	            "moment": moment.utc({ year: year, month: 0, day: 22 }),
	            "type": types.OPT_MEMORIAL_MARTYR,
	            "name": localization.saintVincent[locale],
				"data": {}        
	        },
	        saintFrancisDeSales: {
	            "moment": moment.utc({ year: year, month: 0, day: 24 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintFrancisDeSales[locale],
				"data": {}
	        },
	        conversionOfSaintPaul: {
	            "moment": moment.utc({ year: year, month: 0, day: 25 }),
	            "type": types.FEAST,
	            "name": localization.conversionOfSaintPaul[locale],
				"data": {}
	        },
	        saintsTimothyAndTitus: {
	            "moment": moment.utc({ year: year, month: 0, day: 26 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintsTimothyAndTitus[locale],
				"data": {}
	        },
	        saintAngelaMerici: {
	            "moment": moment.utc({ year: year, month: 0, day: 27 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintAngelaMerici[locale],
				"data": {}
	        },
	        saintThomasAquinas: {
	            "moment": moment.utc({ year: year, month: 0, day: 28 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintThomasAquinas[locale],
				"data": {}
	        },
	        saintJohnBosco: {
	            "moment": moment.utc({ year: year, month: 0, day: 31 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintJohnBosco[locale],
				"data": {}
	        },

	        // February
	        saintsBlaseOrAnsgar: {
				"moment": moment.utc({ year: year, month: 1, day: 3 }),
	            "type": types.OPT_MEMORIAL_MARTYR,
	            "name": localization.saintsBlaseOrAnsgar[locale],
				"data": {}
	        },
	        saintAgatha: {
				"moment": moment.utc({ year: year, month: 1, day: 5 }),
	            "type": types.MEMORIAL_MARTYR,
	            "name": localization.saintAgatha[locale],
				"data": {}
	        },
	        saintsPaulMikiAndCo: {
				"moment": moment.utc({ year: year, month: 1, day: 6 }),
	            "type": types.MEMORIAL_MARTYR,
	            "name": localization.saintsPaulMikiAndCo[locale],
				"data": {}
	        },
	        saintsJeromeOrJosephine: {
				"moment": moment.utc({ year: year, month: 1, day: 8 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintsJeromeOrJosephine[locale],
				"data": {}
	        },
	        saintScholastica: {
				"moment": moment.utc({ year: year, month: 1, day: 10 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintScholastica[locale],
				"data": {}
	        },
	        ourLadyOfLourdes: {
				"moment": moment.utc({ year: year, month: 1, day: 11 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.ourLadyOfLourdes[locale],
				"data": {}
	        },
	        saintsCyrilAndMethodius: {
				"moment": moment.utc({ year: year, month: 1, day: 14 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintsCyrilAndMethodius[locale],
				"data": {}
	        },
	        foundersOfTheSevileOrder: {
				"moment": moment.utc({ year: year, month: 1, day: 17 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.foundersOfTheSevileOrder[locale],
				"data": {}
	        },
	        saintPeterDamian: {
				"moment": moment.utc({ year: year, month: 1, day: 21 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintPeterDamian[locale],
				"data": {}
	        },
	        chairOfSaintPeter: {
				"moment": moment.utc({ year: year, month: 1, day: 22 }),
	            "type": types.FEAST,
	            "name": localization.chairOfSaintPeter[locale],
				"data": {}
	        },
	        saintPolycarp: {
				"moment": moment.utc({ year: year, month: 1, day: 23 }),
	            "type": types.MEMORIAL_MARTYR,
	            "name": localization.saintPolycarp[locale],
				"data": {}
	        },

	        // March
	        saintCasimir: {
				"moment": moment.utc({ year: year, month: 2, day: 4 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintPolycarp[locale],
				"data": {}
	        },
	        saintPerpetuaAndFelicity: {
				"moment": moment.utc({ year: year, month: 2, day: 7 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintPolycarp[locale],
				"data": {}
	        },
	        saintJohnOfGod: {
				"moment": moment.utc({ year: year, month: 2, day: 8 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintPolycarp[locale],
				"data": {}
	        },
	        saintFrancesOfRome: {
				"moment": moment.utc({ year: year, month: 2, day: 9 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintPolycarp[locale],
				"data": {}
	        },
	        saintPatrick: {
				"moment": moment.utc({ year: year, month: 2, day: 17 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintPolycarp[locale],
				"data": {}
	        },
	        saintCyrilOfJerusalem: {
				"moment": moment.utc({ year: year, month: 2, day: 18 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintPolycarp[locale],
				"data": {}
	        },
	        saintTuribiusOfMogrovejo: {
				"moment": moment.utc({ year: year, month: 2, day: 23 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintPolycarp[locale],
				"data": {}
	        },

	        // April
	        saintFrancisOfPaola: {
				"moment": moment.utc({ year: year, month: 3, day: 2 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintFrancisOfPaola[locale],
				"data": {}
	        },
	        saintIsidore: {
				"moment": moment.utc({ year: year, month: 3, day: 4 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintIsidore[locale],
				"data": {}
	        },
	        saintVincentFerrer: {
				"moment": moment.utc({ year: year, month: 3, day: 5 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintVincentFerrer[locale],
				"data": {}
	        },
	        saintJohnBaptistDeLaSalle: {
				"moment": moment.utc({ year: year, month: 3, day: 7 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintJohnBaptistDeLaSalle[locale],
				"data": {}
	        },
	        saintStanislaus: {
				"moment": moment.utc({ year: year, month: 3, day: 11 }),
	            "type": types.MEMORIAL_MARTYR,
	            "name": localization.saintStanislaus[locale],
				"data": {}
	        },
	        saintMartin: {
				"moment": moment.utc({ year: year, month: 3, day: 13 }),
	            "type": types.OPT_MEMORIAL_MARTYR,
	            "name": localization.saintMartin[locale],
				"data": {}
	        },
	        saintAnselmOfCanterbury: {
				"moment": moment.utc({ year: year, month: 3, day: 21 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintAnselmOfCanterbury[locale],
				"data": {}
	        },
	        saintGeorgeOrAdalbert: {
				"moment": moment.utc({ year: year, month: 3, day: 23 }),
	            "type": types.OPT_MEMORIAL_MARTYR,
	            "name": localization.saintGeorgeOrAdalbert[locale],
				"data": {}
	        },
	        saintFidelisOfSigmaringen: {
				"moment": moment.utc({ year: year, month: 3, day: 24 }),
	            "type": types.OPT_MEMORIAL_MARTYR,
	            "name": localization.saintFidelisOfSigmaringen[locale],
				"data": {}
	        },
	        saintMarkTheEvangelist: {
				"moment": moment.utc({ year: year, month: 3, day: 25 }),
	            "type": types.FEAST,
	            "name": localization.saintMarkTheEvangelist[locale],
				"data": {}
	        },
	        saintsPeterChanelOrLouisGrignonDeMontfort: {
				"moment": moment.utc({ year: year, month: 3, day: 28 }),
	            "type": types.OPT_MEMORIAL_MARTYR,
	            "name": localization.saintsPeterChanelOrLouisGrignonDeMontfort[locale],
				"data": {}
	        },
	        saintCatherineOfSiena: {
				"moment": moment.utc({ year: year, month: 3, day: 29 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintCatherineOfSiena[locale],
				"data": {}
	        },
	        saintPiusV: {
				"moment": moment.utc({ year: year, month: 3, day: 30 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintPiusV[locale],
				"data": {}
	        },

	        // May
	        saintJosephTheWorker: {
				"moment": moment.utc({ year: year, month: 4, day: 1 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintJosephTheWorker[locale],
				"data": {}
	        },
	        saintAthanasius: {
				"moment": moment.utc({ year: year, month: 4, day: 2 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintAthanasius[locale],
				"data": {}
	        },
	        saintsPhilipAndJames: {
				"moment": moment.utc({ year: year, month: 4, day: 3 }),
	            "type": types.FEAST_APOSTLE,
	            "name": localization.saintsPhilipAndJames[locale],
				"data": {}
	        },
	        saintsNereusAndAchilleusOrPancras: {
				"moment": moment.utc({ year: year, month: 4, day: 12 }),
	            "type": types.OPT_MEMORIAL_MARTYR,
	            "name": localization.saintsNereusAndAchilleusOrPancras[locale],
				"data": {}
	        },
	        ourLadyOfFatima: {
				"moment": moment.utc({ year: year, month: 4, day: 13 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.ourLadyOfFatima[locale],
				"data": {}
	        },
	        saintMatthias: {
				"moment": moment.utc({ year: year, month: 4, day: 14 }),
	            "type": types.FEAST_APOSTLE,
	            "name": localization.saintMatthias[locale],
				"data": {}
	        },
	        saintJohnI: {
				"moment": moment.utc({ year: year, month: 4, day: 18 }),
	            "type": types.OPT_MEMORIAL_MARTYR,
	            "name": localization.saintJohnI[locale],
				"data": {}
	        },
	        saintBernadineOfSiena: {
				"moment": moment.utc({ year: year, month: 4, day: 20 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintBernadineOfSiena[locale],
				"data": {}
	        },
	        saintChristopherMagallanesAndCo: {
				"moment": moment.utc({ year: year, month: 4, day: 21 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintChristopherMagallanesAndCo[locale],
				"data": {}
	        },
	        saintRitaOfCascia: {
				"moment": moment.utc({ year: year, month: 4, day: 22 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintRitaOfCascia[locale],
				"data": {}
	        },
	        saintBedeTheVenerableOrSaintGregoryVIIOrSaintMaryMagdaleneDePazzi: {
				"moment": moment.utc({ year: year, month: 4, day: 25 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintBedeTheVenerableOrSaintGregoryVIIOrSaintMaryMagdaleneDePazzi[locale],
				"data": {}
	        },
	        saintPhilipNeri: {
				"moment": moment.utc({ year: year, month: 4, day: 26 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintPhilipNeri[locale],
				"data": {}
	        },
	        saintAugustineOfCanterbury: {
				"moment": moment.utc({ year: year, month: 4, day: 27 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintAugustineOfCanterbury[locale],
				"data": {}
	        },
	        visitationOfTheBlessedVirginMary: {
				"moment": moment.utc({ year: year, month: 4, day: 31 }),
	            "type": types.FEAST,
	            "name": localization.visitationOfTheBlessedVirginMary[locale],
				"data": {}
	        },

	        // June
	        saintJustinMartyr: {
				"moment": moment.utc({ year: year, month: 5, day: 1 }),
	            "type": types.MEMORIAL_MARTYR,
	            "name": localization.saintJustinMartyr[locale],
				"data": {}
	        },
	        saintsMarcelinusAndPeter: {
				"moment": moment.utc({ year: year, month: 5, day: 2 }),
	            "type": types.OPT_MEMORIAL_MARTYR,
	            "name": localization.saintsMarcelinusAndPeter[locale],
				"data": {}
	        },
	        saintsCharlesLwangaAndCo: {
				"moment": moment.utc({ year: year, month: 5, day: 3 }),
	            "type": types.MEMORIAL_MARTYR,
	            "name": localization.saintsCharlesLwangaAndCo[locale],
				"data": {}
	        },
	        saintBoniface: {
				"moment": moment.utc({ year: year, month: 5, day: 5 }),
	            "type": types.OPT_MEMORIAL_MARTYR,
	            "name": localization.saintBoniface[locale],
				"data": {}
	        },
	        saintNorbert: {
				"moment": moment.utc({ year: year, month: 5, day: 6 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintNorbert[locale],
				"data": {}
	        },
	        saintEphrem: {
				"moment": moment.utc({ year: year, month: 5, day: 9 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintEphrem[locale],
				"data": {}
	        },
	        saintBarnabasTheApostle: {
				"moment": moment.utc({ year: year, month: 5, day: 11 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintBarnabasTheApostle[locale],
				"data": {}
	        },
	        saintAnthonyOfPadua: {
				"moment": moment.utc({ year: year, month: 5, day: 13 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintAnthonyOfPadua[locale],
				"data": {}
	        },
	        saintRomuald: {
				"moment": moment.utc({ year: year, month: 5, day: 19 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintRomuald[locale],
				"data": {}
	        },
	        saintAloysiusGonzaga: {
				"moment": moment.utc({ year: year, month: 5, day: 21 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintAloysiusGonzaga[locale],
				"data": {}
	        },
	        saintPaulinusOfNolaOrSaintsJohnFisherAndThomasMore: {
				"moment": moment.utc({ year: year, month: 5, day: 22 }),
	            "type": types.OPT_MEMORIAL_MARTYR,
	            "name": localization.saintPaulinusOfNolaOrSaintsJohnFisherAndThomasMore[locale],
				"data": {}
	        },
	        saintCyrilOfAlexandria: {
				"moment": moment.utc({ year: year, month: 5, day: 27 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintCyrilOfAlexandria[locale],
				"data": {}
	        },
	        saintIrenaeus: {
				"moment": moment.utc({ year: year, month: 5, day: 28 }),
	            "type": types.MEMORIAL_MARTYR,
	            "name": localization.saintIrenaeus[locale],
				"data": {}
	        },
	        firstMartyrsOfTheChurchOfRome: {
				"moment": moment.utc({ year: year, month: 5, day: 30 }),
	            "type": types.OPT_MEMORIAL_MARTYR,
	            "name": localization.firstMartyrsOfTheChurchOfRome[locale],
				"data": {}
	        },

	        // July
	        saintThomasTheApostle: {
				"moment": moment.utc({ year: year, month: 6, day: 3 }),
	            "type": types.FEAST,
	            "name": localization.saintThomasTheApostle[locale],
				"data": {}
	        },
	        saintElizabethOfPortugal: {
				"moment": moment.utc({ year: year, month: 6, day: 4 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintElizabethOfPortugal[locale],
				"data": {}
	        },
	        saintAnthonyZaccaria: {
				"moment": moment.utc({ year: year, month: 6, day: 5 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintAnthonyZaccaria[locale],
				"data": {}
	        },
	        saintMariaGoretti: {
				"moment": moment.utc({ year: year, month: 6, day: 6 }),
	            "type": types.OPT_MEMORIAL_MARTYR,
	            "name": localization.saintMariaGoretti[locale],
				"data": {}
	        },
	        saintAugustineZhaoRongAndCo: {
				"moment": moment.utc({ year: year, month: 6, day: 9 }),
	            "type": types.OPT_MEMORIAL_MARTYR,
	            "name": localization.saintAugustineZhaoRongAndCo[locale],
				"data": {}
	        },
	        saintBenedict: {
				"moment": moment.utc({ year: year, month: 6, day: 11 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintBenedict[locale],
				"data": {}
	        },
	        saintHenry: {
				"moment": moment.utc({ year: year, month: 6, day: 13 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintHenry[locale],
				"data": {}
	        },
	        saintCamiliusDeLellis: {
				"moment": moment.utc({ year: year, month: 6, day: 14 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintCamiliusDeLellis[locale],
				"data": {}
	        },
	        saintBonaventure: {
				"moment": moment.utc({ year: year, month: 6, day: 15 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintBonaventure[locale],
				"data": {}
	        },
	        ourLadyOfMountCarmel: {
				"moment": moment.utc({ year: year, month: 6, day: 16 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.ourLadyOfMountCarmel[locale],
				"data": {}
	        },
	        saintApollinaris: {
				"moment": moment.utc({ year: year, month: 6, day: 20 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintApollinaris[locale],
				"data": {}
	        },
	        saintLawrenceOfBrindisi: {
				"moment": moment.utc({ year: year, month: 6, day: 21 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintLawrenceOfBrindisi[locale],
				"data": {}
	        },
	        saintMaryOfMagdalene: {
				"moment": moment.utc({ year: year, month: 6, day: 22 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintMaryOfMagdalene[locale],
				"data": {}
	        },
	        saintBirgitta: {
				"moment": moment.utc({ year: year, month: 6, day: 23 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintBirgitta[locale],
	            "data": {}
	        },
	        saintSharbelMakhluf: {
				"moment": moment.utc({ year: year, month: 6, day: 24 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintSharbelMakhluf[locale],
				"data": {}
	        },
	        saintJames: {
				"moment": moment.utc({ year: year, month: 6, day: 25 }),
	            "type": types.FEAST_APOSTLE,
	            "name": localization.saintJames[locale],
				"data": {}
	        },
	        saintsJoachimAndAnne: {
				"moment": moment.utc({ year: year, month: 6, day: 26 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintsJoachimAndAnne[locale],
				"data": {}
	        },
	        saintMartha: {
				"moment": moment.utc({ year: year, month: 6, day: 29 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintMartha[locale],
				"data": {}
	        },
	        saintPeterChrysologus: {
				"moment": moment.utc({ year: year, month: 6, day: 30 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintPeterChrysologus[locale],
				"data": {}
	        },
	        saintIgnatiusOfLoyola: {
				"moment": moment.utc({ year: year, month: 6, day: 31 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintIgnatiusOfLoyola[locale],
				"data": {}
	        },

	        // August
	        saintAlphonsusMariaDeLiguori: {
				"moment": moment.utc({ year: year, month: 7, day: 1 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintAlphonsusMariaDeLiguori[locale],
				"data": {}
	        },
	        saintEusebiusOfVercelli: {
				"moment": moment.utc({ year: year, month: 7, day: 2 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintEusebiusOfVercelli[locale],
				"data": {}
	        },
	        saintJeanVianney: {
				"moment": moment.utc({ year: year, month: 7, day: 4 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintJeanVianney[locale],
				"data": {}
	        },
	        dedicationOfTheBasilicaOfSaintMaryMajor: {
				"moment": moment.utc({ year: year, month: 7, day: 5 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.dedicationOfTheBasilicaOfSaintMaryMajor[locale],
				"data": {}
	        },
	        saintSixtusIIOrSaintCajetan: {
				"moment": moment.utc({ year: year, month: 7, day: 7 }),
	            "type": types.OPT_MEMORIAL_MARTYR,
	            "name": localization.saintSixtusIIOrSaintCajetan[locale],
				"data": {}
	        },
	        saintDominic: {
				"moment": moment.utc({ year: year, month: 7, day: 8 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintDominic[locale],
				"data": {}
	        },
	        saintTeresaBenedictaOfTheCross: {
				"moment": moment.utc({ year: year, month: 7, day: 9 }),
	            "type": types.OPT_MEMORIAL_MARTYR,
	            "name": localization.saintTeresaBenedictaOfTheCross[locale],
				"data": {}	        
	        },
	        saintLawrence: {
				"moment": moment.utc({ year: year, month: 7, day: 10 }),
	            "type": types.FEAST_MARTYR,
	            "name": localization.saintLawrence[locale],
				"data": {}
	        },
	        saintClare: {
				"moment": moment.utc({ year: year, month: 7, day: 11 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintClare[locale],
				"data": {}
	        },
	        saintJaneFrancesDeChantal: {
				"moment": moment.utc({ year: year, month: 7, day: 12 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintJaneFrancesDeChantal[locale],
				"data": {}
	        },
	        saintsPontianAndHippolytus: {
				"moment": moment.utc({ year: year, month: 7, day: 13 }),
	            "type": types.OPT_MEMORIAL_MARTYR,
	            "name": localization.saintsPontianAndHippolytus[locale],
				"data": {}
	        },
	        saintMaximilianMaryKolbe: {
				"moment": moment.utc({ year: year, month: 7, day: 14 }),
	            "type": types.MEMORIAL_MARTYR,
	            "name": localization.saintMaximilianMaryKolbe[locale],
				"data": {}
	        },
	        saintStephenOfHungary: {
				"moment": moment.utc({ year: year, month: 7, day: 16 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintStephenOfHungary[locale],
				"data": {}
	        },
	        saintJohnEudes: {
				"moment": moment.utc({ year: year, month: 7, day: 19 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintJohnEudes[locale],
				"data": {}
	        },
	        saintBernardOfClairvaux: {
				"moment": moment.utc({ year: year, month: 7, day: 20 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintBernardOfClairvaux[locale],
				"data": {}
	        },
	        saintPiuxX: {
				"moment": moment.utc({ year: year, month: 7, day: 21 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintPiuxX[locale],
				"data": {}
	        },
	        quuenshipOfBlessedVirginMary: {
				"moment": moment.utc({ year: year, month: 7, day: 22 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.quuenshipOfBlessedVirginMary[locale],
				"data": {}
	        },
	        saintRoseOfLima: {
				"moment": moment.utc({ year: year, month: 7, day: 23 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintRoseOfLima[locale],
				"data": {}
	        },
	        saintBartholomewTheApostle: {
				"moment": moment.utc({ year: year, month: 7, day: 24 }),
	            "type": types.FEAST_APOSTLE,
	            "name": localization.saintBartholomewTheApostle[locale],
				"data": {}
	        },
	        saintLouisOrJosephOfCalasanz: {
				"moment": moment.utc({ year: year, month: 7, day: 25 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintLouisOrJosephOfCalasanz[locale],
				"data": {}
	        },
	        saintMonica: {
				"moment": moment.utc({ year: year, month: 7, day: 27 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintMonica[locale],
				"data": {}
	        },
	        saintAugustineOfHippo: {
				"moment": moment.utc({ year: year, month: 7, day: 28 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintAugustineOfHippo[locale],
				"data": {}
	        },
	        beheadingOfSaintJohnTheBaptist: {
				"moment": moment.utc({ year: year, month: 7, day: 29 }),
	            "type": types.MEMORIAL_MARTYR,
	            "name": localization.beheadingOfSaintJohnTheBaptist[locale],
				"data": {}
	        },

	        // September
	        saintGregoryTheGreat: {
				"moment": moment.utc({ year: year, month: 8, day: 3 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintGregoryTheGreat[locale],
				"data": {}
	        },
	        birthOfTheBlessedVirginMary: {
				"moment": moment.utc({ year: year, month: 8, day: 8 }),
	            "type": types.FEAST,
	            "name": localization.birthOfTheBlessedVirginMary[locale],
				"data": {}
	        },
	        saintPeterClaver: {
				"moment": moment.utc({ year: year, month: 8, day: 9 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintPeterClaver[locale],
				"data": {}
	        },
	        holyNameOfTheBlessedVirginMary: {
				"moment": moment.utc({ year: year, month: 8, day: 12 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.holyNameOfTheBlessedVirginMary[locale],
				"data": {}
	        },
	        saintJohnChrysostom: {
				"moment": moment.utc({ year: year, month: 8, day: 13 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintJohnChrysostom[locale],
				"data": {}
	        },
	        ourLadyOfSorrows: {
				"moment": moment.utc({ year: year, month: 8, day: 15 }),
	            "type": types.MEMORIAL,
	            "name": localization.ourLadyOfSorrows[locale],
				"data": {}
	        },
	        saintsCorneliusAndCyprian: {
				"moment": moment.utc({ year: year, month: 8, day: 16 }),
	            "type": types.MEMORIAL_MARTYR,
	            "name": localization.saintsCorneliusAndCyprian[locale],
				"data": {}
	        },
	        saintRobertBellarmine: {
				"moment": moment.utc({ year: year, month: 8, day: 17 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintRobertBellarmine[locale],
				"data": {}
	        },
	        saintJanuarius: {
				"moment": moment.utc({ year: year, month: 8, day: 19 }),
	            "type": types.OPT_MEMORIAL_MARTYR,
	            "name": localization.saintJanuarius[locale],
				"data": {}
	        },
	        saintAndrewKimTaegonAndPaulChongHasangAndCo: {
				"moment": moment.utc({ year: year, month: 8, day: 20 }),
	            "type": types.MEMORIAL_MARTYR,
	            "name": localization.saintAndrewKimTaegonAndPaulChongHasangAndCo[locale],
				"data": {}
	        },
	        saintMatthewTheEvangelist: {
				"moment": moment.utc({ year: year, month: 8, day: 21 }),
	            "type": types.FEAST_APOSTLE,
	            "name": localization.saintMatthewTheEvangelist[locale],
				"data": {}
	        },
	        saintPioOfPietrelcina: {
				"moment": moment.utc({ year: year, month: 8, day: 23 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintPioOfPietrelcina[locale],
				"data": {}
	        },
	        saintsCosmasAndDamian: {
				"moment": moment.utc({ year: year, month: 8, day: 26 }),
	            "type": types.OPT_MEMORIAL_MARTYR,
	            "name": localization.saintsCosmasAndDamian[locale],
				"data": {}
	        },
	        saintVincentDePaul: {
				"moment": moment.utc({ year: year, month: 8, day: 27 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintVincentDePaul[locale],
				"data": {}
	        },
	        saintWenceslausOrSaintsRuizAndCo: {
				"moment": moment.utc({ year: year, month: 8, day: 28 }),
	            "type": types.OPT_MEMORIAL_MARTYR,
	            "name": localization.saintWenceslausOrSaintsRuizAndCo[locale],
				"data": {}
	        },
	        saintsMichaelGabrielAndRaphael: {
				"moment": moment.utc({ year: year, month: 8, day: 29 }),
	            "type": types.FEAST,
	            "name": localization.saintsMichaelGabrielAndRaphael[locale],
				"data": {}
	        },
	        saintJerome: {
				"moment": moment.utc({ year: year, month: 8, day: 30 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintJerome[locale],
				"data": {}
	        },

	        // October
	        saintThereseOfTheChildOfJesus: {
				"moment": moment.utc({ year: year, month: 9, day: 1 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintThereseOfTheChildOfJesus[locale],
				"data": {}
	        },
	        guardianAngels: {
				"moment": moment.utc({ year: year, month: 9, day: 2 }),
	            "type": types.MEMORIAL,
	            "name": localization.guardianAngels[locale],
				"data": {}
	        },
	        saintFrancisOfAsisi: {
				"moment": moment.utc({ year: year, month: 9, day: 4 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintFrancisOfAsisi[locale],
				"data": {}
	        },
	        saintBruno: {
				"moment": moment.utc({ year: year, month: 9, day: 6 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintBruno[locale],
				"data": {}
	        },
	        ourLadyOfTheRosary: {
				"moment": moment.utc({ year: year, month: 9, day: 7 }),
	            "type": types.MEMORIAL,
	            "name": localization.ourLadyOfTheRosary[locale],
				"data": {}
	        },
	        saintDenisAndCoOrSaintJohnLeonardi: {
				"moment": moment.utc({ year: year, month: 9, day: 9 }),
	            "type": types.OPT_MEMORIAL_MARTYR,
	            "name": localization.saintDenisAndCoOrSaintJohnLeonardi[locale],
				"data": {}
	        },
	        saintCallistusI: {
				"moment": moment.utc({ year: year, month: 9, day: 14 }),
	            "type": types.OPT_MEMORIAL_MARTYR,
	            "name": localization.saintCallistusI[locale],
				"data": {}
	        },
	        saintTeresaOfJesus: {
				"moment": moment.utc({ year: year, month: 9, day: 15 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintTeresaOfJesus[locale],
				"data": {}
	        },
	        saintHedwigOrSaintMargaretMaryAlacoque: {
				"moment": moment.utc({ year: year, month: 9, day: 16 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintHedwigOrSaintMargaretMaryAlacoque[locale],
				"data": {}
	        },
	        saintIgnatiusOfAntioch: {
				"moment": moment.utc({ year: year, month: 9, day: 17 }),
	            "type": types.MEMORIAL_MARTYR,
	            "name": localization.saintIgnatiusOfAntioch[locale],
				"data": {}
	        },
	        saintLukeTheEvangelist: {
				"moment": moment.utc({ year: year, month: 9, day: 18 }),
	            "type": types.FEAST_APOSTLE,
	            "name": localization.saintLukeTheEvangelist[locale],
				"data": {}
	        },
	        saintsJeanDeBrebeufIsaacJorguesAndCoOrSaintPaulOfTheCross: {
				"moment": moment.utc({ year: year, month: 9, day: 19 }),
	            "type": types.OPT_MEMORIAL_MARTYR,
	            "name": localization.saintsJeanDeBrebeufIsaacJorguesAndCoOrSaintPaulOfTheCross[locale],
				"data": {}
	        },
	        saintJohnOfCapistrano: {
				"moment": moment.utc({ year: year, month: 9, day: 23 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintJohnOfCapistrano[locale],
				"data": {}
	        },
	        saintAnthonyMaryClaret: {
	        	"moment": moment.utc({ year: year, month: 9, day: 24 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintAnthonyMaryClaret[locale],
				"data": {}
	        },
	        saintsSimonAndJude: {
	        	"moment": moment.utc({ year: year, month: 9, day: 28 }),
	            "type": types.FEAST_APOSTLE,
	            "name": localization.saintsSimonAndJude[locale],
				"data": {}
	        },

	        // November
	        allSouls: {
	        	"moment": moment.utc({ year: year, month: 10, day: 2 }),
	            "type": types.FIXED_FEAST,
	            "name": localization.allSouls[locale],
				"data": {}
	        },
	        saintMartinDePorres: {
	        	"moment": moment.utc({ year: year, month: 10, day: 3 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintMartinDePorres[locale],
				"data": {}
	        },
	        saintCharlesBorromeo: {
	        	"moment": moment.utc({ year: year, month: 10, day: 4 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintCharlesBorromeo[locale],
				"data": {}
	        },
	        dedicationOfTheLateranBasilica: {
	        	"moment": moment.utc({ year: year, month: 10, day: 9 }),
	            "type": types.FIXED_FEAST,
	            "name": localization.dedicationOfTheLateranBasilica[locale],
				"data": {}
	        },
	        saintLeoTheGreat: {
	        	"moment": moment.utc({ year: year, month: 10, day: 10 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintLeoTheGreat[locale],
				"data": {}
	        },
	        saintMartinOfTours: {
	        	"moment": moment.utc({ year: year, month: 10, day: 11 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintMartinOfTours[locale],
				"data": {}
	        },
	        saintJosaphat: {
	        	"moment": moment.utc({ year: year, month: 10, day: 12 }),
	            "type": types.MEMORIAL_MARTYR,
	            "name": localization.saintJosaphat[locale],
				"data": {}
	        },
	        saintAlbertTheGreat: {
	        	"moment": moment.utc({ year: year, month: 10, day: 15 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintAlbertTheGreat[locale],
				"data": {}
	        },
	        saintMargaretOfScotlantOrGertrudeTheGreat: {
	        	"moment": moment.utc({ year: year, month: 10, day: 16 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintMargaretOfScotlantOrGertrudeTheGreat[locale],
				"data": {}
	        },
	        saintElizabethOfHungary: {
	        	"moment": moment.utc({ year: year, month: 10, day: 17 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintElizabethOfHungary[locale],
				"data": {}
	        },
	        dedicationOfTheBasilicasOfSaintsPeterAndPaul: {
	        	"moment": moment.utc({ year: year, month: 10, day: 18 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.dedicationOfTheBasilicasOfSaintsPeterAndPaul[locale],
				"data": {}
	        },	
	        presentationOfTheBlessedVirginMary: {
	        	"moment": moment.utc({ year: year, month: 10, day: 21 }),
	            "type": types.MEMORIAL,
	            "name": localization.presentationOfTheBlessedVirginMary[locale],
				"data": {}
	        },
	        saintCecilia: {
	        	"moment": moment.utc({ year: year, month: 10, day: 22 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintCecilia[locale],
				"data": {}
	        },
	        saintClementIOrSaintColumban: {
	        	"moment": moment.utc({ year: year, month: 10, day: 23 }),
	            "type": types.OPT_MEMORIAL_MARTYR,
	            "name": localization.saintClementIOrSaintColumban[locale],
				"data": {}
	        },
	        saintAndrewDungLacAndCo: {
	        	"moment": moment.utc({ year: year, month: 10, day: 24 }),
	            "type": types.MEMORIAL_MARTYR,
	            "name": localization.saintAndrewDungLacAndCo[locale],
				"data": {}
	        },
	        saintCatherineOfAlexandria: {
	        	"moment": moment.utc({ year: year, month: 10, day: 25 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintCatherineOfAlexandria[locale],
				"data": {}
	        },
	        saintAndrew: {
	        	"moment": moment.utc({ year: year, month: 10, day: 30 }),
	            "type": types.FEAST_APOSTLE,
	            "name": localization.saintAndrew[locale],
				"data": {}
	        },

	        // December
	        saintFrancisXavier: {
	        	"moment": moment.utc({ year: year, month: 11, day: 3 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintFrancisXavier[locale],
				"data": {}
	        },
	        saintJohnDamascene: {
	        	"moment": moment.utc({ year: year, month: 11, day: 4 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintJohnDamascene[locale],
				"data": {}
	        },
	        saintNicholas: {
	        	"moment": moment.utc({ year: year, month: 11, day: 6 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintNicholas[locale],
				"data": {}
	        },
	        saintAmbrose: {
	        	"moment": moment.utc({ year: year, month: 11, day: 7 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintAmbrose[locale],
				"data": {}
	        },
	        saintJuanDiego: {
	        	"moment": moment.utc({ year: year, month: 11, day: 9 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintJuanDiego[locale],
				"data": {}
	        },
	        saintDamasusI: {
	        	"moment": moment.utc({ year: year, month: 11, day: 11 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintDamasusI[locale],
				"data": {}
	        },
	        ourLadyOfGuadalupe: {
	        	"moment": moment.utc({ year: year, month: 11, day: 12 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.ourLadyOfGuadalupe[locale],
				"data": {}
	        },
	        saintLucyOfSyracuse: {
	        	"moment": moment.utc({ year: year, month: 11, day: 13 }),
	            "type": types.MEMORIAL_MARTYR,
	            "name": localization.saintLucyOfSyracuse[locale],
				"data": {}
	        },
	        saintJohnOfTheCross: {
	        	"moment": moment.utc({ year: year, month: 11, day: 14 }),
	            "type": types.MEMORIAL,
	            "name": localization.saintJohnOfTheCross[locale],
				"data": {}
	        },
	        saintPeterCanisius: {
	        	"moment": moment.utc({ year: year, month: 11, day: 21 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintPeterCanisius[locale],
				"data": {}
	        },
	        saintJohnofKanty: {
	        	"moment": moment.utc({ year: year, month: 11, day: 23 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintJohnofKanty[locale],
				"data": {}
	        },
	        saintStephenTheFirstMartyr: {
	        	"moment": moment.utc({ year: year, month: 11, day: 26 }),
	            "type": types.FEAST_MARTYR,
	            "name": localization.saintStephenTheFirstMartyr[locale],
				"data": {}
	        },
	        saintJohnTheApostle: {
	        	"moment": moment.utc({ year: year, month: 11, day: 27 }),
	            "type": types.FEAST,
	            "name": localization.saintJohnTheApostle[locale],
				"data": {}
	        },
	        holyInnocents: {
				"moment": moment.utc({ year: year, month: 11, day: 28 }),
	            "type": types.FEAST_MARTYR,
	            "name": localization.holyInnocents[locale],
				"data": {}
	        },
	        saintThomasBecket: {
	        	"moment": moment.utc({ year: year, month: 11, day: 29 }),
	            "type": types.OPT_MEMORIAL_MARTYR,
	            "name": localization.saintThomasBecket[locale],
				"data": {}
	        },
	        saintSylvesterI: {
				"moment": moment.utc({ year: year, month: 11, day: 31 }),
	            "type": types.OPT_MEMORIAL,
	            "name": localization.saintSylvesterI[locale],
				"data": {}
	        }
	    };
	    return dates;
	}
};