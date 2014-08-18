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
	calendars = utils.calendars(),
	localization = utils.getLocalizationData().general;

module.exports = {
	dates: function( year, locale ) {
		var dates = {
		  "saintBasilAndGregory": {
		    "moment": moment.utc({ year: year, month: 0, day: 2 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintBasilAndGregory[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "theMostHolyNameOfJesus": {
		    "moment": moment.utc({ year: year, month: 0, day: 3 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.theMostHolyNameOfJesus[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintRaymondOfPenyafort": {
		    "moment": moment.utc({ year: year, month: 0, day: 7 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintRaymondOfPenyafort[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintHilaryOfPoitiers": {
		    "moment": moment.utc({ year: year, month: 0, day: 13 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintHilaryOfPoitiers[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintAnthonyOfEgypt": {
		    "moment": moment.utc({ year: year, month: 0, day: 17 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintAnthonyOfEgypt[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintsFabianOrSebastian": {
		    "moment": moment.utc({ year: year, month: 0, day: 20 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintsFabianOrSebastian[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintAgnes": {
		    "moment": moment.utc({ year: year, month: 0, day: 21 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintAgnes[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintVincent": {
		    "moment": moment.utc({ year: year, month: 0, day: 22 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintVincent[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintFrancisDeSales": {
		    "moment": moment.utc({ year: year, month: 0, day: 24 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintFrancisDeSales[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "conversionOfSaintPaul": {
		    "moment": moment.utc({ year: year, month: 0, day: 25 }),
		    "type": types.FEAST,
		    "name": localization.conversionOfSaintPaul[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintsTimothyAndTitus": {
		    "moment": moment.utc({ year: year, month: 0, day: 26 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintsTimothyAndTitus[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintAngelaMerici": {
		    "moment": moment.utc({ year: year, month: 0, day: 27 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintAngelaMerici[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintThomasAquinas": {
		    "moment": moment.utc({ year: year, month: 0, day: 28 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintThomasAquinas[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintJohnBosco": {
		    "moment": moment.utc({ year: year, month: 0, day: 31 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintJohnBosco[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintsBlaseOrAnsgar": {
		    "moment": moment.utc({ year: year, month: 1, day: 3 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintsBlaseOrAnsgar[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintAgatha": {
		    "moment": moment.utc({ year: year, month: 1, day: 5 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintAgatha[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintsPaulMikiAndCo": {
		    "moment": moment.utc({ year: year, month: 1, day: 6 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintsPaulMikiAndCo[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintsJeromeOrJosephine": {
		    "moment": moment.utc({ year: year, month: 1, day: 8 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintsJeromeOrJosephine[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintScholastica": {
		    "moment": moment.utc({ year: year, month: 1, day: 10 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintScholastica[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "ourLadyOfLourdes": {
		    "moment": moment.utc({ year: year, month: 1, day: 11 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.ourLadyOfLourdes[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintsCyrilAndMethodius": {
		    "moment": moment.utc({ year: year, month: 1, day: 14 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintsCyrilAndMethodius[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "foundersOfTheSevileOrder": {
		    "moment": moment.utc({ year: year, month: 1, day: 17 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.foundersOfTheSevileOrder[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintPeterDamian": {
		    "moment": moment.utc({ year: year, month: 1, day: 21 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintPeterDamian[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "chairOfSaintPeter": {
		    "moment": moment.utc({ year: year, month: 1, day: 22 }),
		    "type": types.FEAST,
		    "name": localization.chairOfSaintPeter[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintPolycarp": {
		    "moment": moment.utc({ year: year, month: 1, day: 23 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintPolycarp[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintCasimir": {
		    "moment": moment.utc({ year: year, month: 2, day: 4 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintCasimir[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintPerpetuaAndFelicity": {
		    "moment": moment.utc({ year: year, month: 2, day: 7 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintPerpetuaAndFelicity[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintJohnOfGod": {
		    "moment": moment.utc({ year: year, month: 2, day: 8 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintJohnOfGod[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintFrancesOfRome": {
		    "moment": moment.utc({ year: year, month: 2, day: 9 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintFrancesOfRome[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintPatrick": {
		    "moment": moment.utc({ year: year, month: 2, day: 17 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintPatrick[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintCyrilOfJerusalem": {
		    "moment": moment.utc({ year: year, month: 2, day: 18 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintCyrilOfJerusalem[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintTuribiusOfMogrovejo": {
		    "moment": moment.utc({ year: year, month: 2, day: 23 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintTuribiusOfMogrovejo[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintFrancisOfPaola": {
		    "moment": moment.utc({ year: year, month: 3, day: 2 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintFrancisOfPaola[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintIsidore": {
		    "moment": moment.utc({ year: year, month: 3, day: 4 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintIsidore[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintVincentFerrer": {
		    "moment": moment.utc({ year: year, month: 3, day: 5 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintVincentFerrer[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintJohnBaptistDeLaSalle": {
		    "moment": moment.utc({ year: year, month: 3, day: 7 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintJohnBaptistDeLaSalle[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintStanislaus": {
		    "moment": moment.utc({ year: year, month: 3, day: 11 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintStanislaus[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintMartin": {
		    "moment": moment.utc({ year: year, month: 3, day: 13 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintMartin[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintAnselmOfCanterbury": {
		    "moment": moment.utc({ year: year, month: 3, day: 21 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintAnselmOfCanterbury[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintGeorgeOrAdalbert": {
		    "moment": moment.utc({ year: year, month: 3, day: 23 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintGeorgeOrAdalbert[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintFidelisOfSigmaringen": {
		    "moment": moment.utc({ year: year, month: 3, day: 24 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintFidelisOfSigmaringen[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintMarkTheEvangelist": {
		    "moment": moment.utc({ year: year, month: 3, day: 25 }),
		    "type": types.FEAST,
		    "name": localization.saintMarkTheEvangelist[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintsPeterChanelOrLouisGrignonDeMontfort": {
		    "moment": moment.utc({ year: year, month: 3, day: 28 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintsPeterChanelOrLouisGrignonDeMontfort[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintCatherineOfSiena": {
		    "moment": moment.utc({ year: year, month: 3, day: 29 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintCatherineOfSiena[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintPiusV": {
		    "moment": moment.utc({ year: year, month: 3, day: 30 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintPiusV[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintJosephTheWorker": {
		    "moment": moment.utc({ year: year, month: 4, day: 1 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintJosephTheWorker[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintAthanasius": {
		    "moment": moment.utc({ year: year, month: 4, day: 2 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintAthanasius[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintsPhilipAndJames": {
		    "moment": moment.utc({ year: year, month: 4, day: 3 }),
		    "type": types.FEAST_APOSTLE,
		    "name": localization.saintsPhilipAndJames[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintsNereusAndAchilleusOrPancras": {
		    "moment": moment.utc({ year: year, month: 4, day: 12 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintsNereusAndAchilleusOrPancras[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "ourLadyOfFatima": {
		    "moment": moment.utc({ year: year, month: 4, day: 13 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.ourLadyOfFatima[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintMatthias": {
		    "moment": moment.utc({ year: year, month: 4, day: 14 }),
		    "type": types.FEAST_APOSTLE,
		    "name": localization.saintMatthias[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintJohnI": {
		    "moment": moment.utc({ year: year, month: 4, day: 18 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintJohnI[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintBernadineOfSiena": {
		    "moment": moment.utc({ year: year, month: 4, day: 20 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintBernadineOfSiena[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintChristopherMagallanesAndCo": {
		    "moment": moment.utc({ year: year, month: 4, day: 21 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintChristopherMagallanesAndCo[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintRitaOfCascia": {
		    "moment": moment.utc({ year: year, month: 4, day: 22 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintRitaOfCascia[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintBedeTheVenerableOrSaintGregoryVIIOrSaintMaryMagdaleneDePazzi": {
		    "moment": moment.utc({ year: year, month: 4, day: 25 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintBedeTheVenerableOrSaintGregoryVIIOrSaintMaryMagdaleneDePazzi[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintPhilipNeri": {
		    "moment": moment.utc({ year: year, month: 4, day: 26 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintPhilipNeri[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintAugustineOfCanterbury": {
		    "moment": moment.utc({ year: year, month: 4, day: 27 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintAugustineOfCanterbury[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "visitationOfTheBlessedVirginMary": {
		    "moment": moment.utc({ year: year, month: 4, day: 31 }),
		    "type": types.FEAST,
		    "name": localization.visitationOfTheBlessedVirginMary[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintJustinMartyr": {
		    "moment": moment.utc({ year: year, month: 5, day: 1 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintJustinMartyr[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintsMarcelinusAndPeter": {
		    "moment": moment.utc({ year: year, month: 5, day: 2 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintsMarcelinusAndPeter[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintsCharlesLwangaAndCo": {
		    "moment": moment.utc({ year: year, month: 5, day: 3 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintsCharlesLwangaAndCo[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintBoniface": {
		    "moment": moment.utc({ year: year, month: 5, day: 5 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintBoniface[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintNorbert": {
		    "moment": moment.utc({ year: year, month: 5, day: 6 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintNorbert[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintEphrem": {
		    "moment": moment.utc({ year: year, month: 5, day: 9 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintEphrem[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintBarnabasTheApostle": {
		    "moment": moment.utc({ year: year, month: 5, day: 11 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintBarnabasTheApostle[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintAnthonyOfPadua": {
		    "moment": moment.utc({ year: year, month: 5, day: 13 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintAnthonyOfPadua[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintRomuald": {
		    "moment": moment.utc({ year: year, month: 5, day: 19 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintRomuald[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintAloysiusGonzaga": {
		    "moment": moment.utc({ year: year, month: 5, day: 21 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintAloysiusGonzaga[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintPaulinusOfNolaOrSaintsJohnFisherAndThomasMore": {
		    "moment": moment.utc({ year: year, month: 5, day: 22 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintPaulinusOfNolaOrSaintsJohnFisherAndThomasMore[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintCyrilOfAlexandria": {
		    "moment": moment.utc({ year: year, month: 5, day: 27 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintCyrilOfAlexandria[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintIrenaeus": {
		    "moment": moment.utc({ year: year, month: 5, day: 28 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintIrenaeus[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "firstMartyrsOfTheChurchOfRome": {
		    "moment": moment.utc({ year: year, month: 5, day: 30 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.firstMartyrsOfTheChurchOfRome[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintThomasTheApostle": {
		    "moment": moment.utc({ year: year, month: 6, day: 3 }),
		    "type": types.FEAST,
		    "name": localization.saintThomasTheApostle[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintElizabethOfPortugal": {
		    "moment": moment.utc({ year: year, month: 6, day: 4 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintElizabethOfPortugal[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintAnthonyZaccaria": {
		    "moment": moment.utc({ year: year, month: 6, day: 5 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintAnthonyZaccaria[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintMariaGoretti": {
		    "moment": moment.utc({ year: year, month: 6, day: 6 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintMariaGoretti[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintAugustineZhaoRongAndCo": {
		    "moment": moment.utc({ year: year, month: 6, day: 9 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintAugustineZhaoRongAndCo[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintBenedict": {
		    "moment": moment.utc({ year: year, month: 6, day: 11 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintBenedict[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintHenry": {
		    "moment": moment.utc({ year: year, month: 6, day: 13 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintHenry[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintCamillusDeLellis": {
		    "moment": moment.utc({ year: year, month: 6, day: 14 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintCamillusDeLellis[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintBonaventure": {
		    "moment": moment.utc({ year: year, month: 6, day: 15 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintBonaventure[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "ourLadyOfMountCarmel": {
		    "moment": moment.utc({ year: year, month: 6, day: 16 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.ourLadyOfMountCarmel[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintApollinaris": {
		    "moment": moment.utc({ year: year, month: 6, day: 20 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintApollinaris[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintLawrenceOfBrindisi": {
		    "moment": moment.utc({ year: year, month: 6, day: 21 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintLawrenceOfBrindisi[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintMaryOfMagdalene": {
		    "moment": moment.utc({ year: year, month: 6, day: 22 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintMaryOfMagdalene[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintBirgitta": {
		    "moment": moment.utc({ year: year, month: 6, day: 23 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintBirgitta[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintSharbelMakhluf": {
		    "moment": moment.utc({ year: year, month: 6, day: 24 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintSharbelMakhluf[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintJames": {
		    "moment": moment.utc({ year: year, month: 6, day: 25 }),
		    "type": types.FEAST_APOSTLE,
		    "name": localization.saintJames[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintsJoachimAndAnne": {
		    "moment": moment.utc({ year: year, month: 6, day: 26 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintsJoachimAndAnne[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintMartha": {
		    "moment": moment.utc({ year: year, month: 6, day: 29 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintMartha[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintPeterChrysologus": {
		    "moment": moment.utc({ year: year, month: 6, day: 30 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintPeterChrysologus[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintIgnatiusOfLoyola": {
		    "moment": moment.utc({ year: year, month: 6, day: 31 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintIgnatiusOfLoyola[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintAlphonsusMariaDeLiguori": {
		    "moment": moment.utc({ year: year, month: 7, day: 1 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintAlphonsusMariaDeLiguori[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintEusebiusOfVercelli": {
		    "moment": moment.utc({ year: year, month: 7, day: 2 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintEusebiusOfVercelli[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintJeanVianney": {
		    "moment": moment.utc({ year: year, month: 7, day: 4 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintJeanVianney[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "dedicationOfTheBasilicaOfSaintMaryMajor": {
		    "moment": moment.utc({ year: year, month: 7, day: 5 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.dedicationOfTheBasilicaOfSaintMaryMajor[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintSixtusIIOrSaintCajetan": {
		    "moment": moment.utc({ year: year, month: 7, day: 7 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintSixtusIIOrSaintCajetan[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintDominic": {
		    "moment": moment.utc({ year: year, month: 7, day: 8 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintDominic[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintTeresaBenedictaOfTheCross": {
		    "moment": moment.utc({ year: year, month: 7, day: 9 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintTeresaBenedictaOfTheCross[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintLawrence": {
		    "moment": moment.utc({ year: year, month: 7, day: 10 }),
		    "type": types.FEAST_MARTYR,
		    "name": localization.saintLawrence[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintClare": {
		    "moment": moment.utc({ year: year, month: 7, day: 11 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintClare[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintJaneFrancesDeChantal": {
		    "moment": moment.utc({ year: year, month: 7, day: 12 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintJaneFrancesDeChantal[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintsPontianAndHippolytus": {
		    "moment": moment.utc({ year: year, month: 7, day: 13 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintsPontianAndHippolytus[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintMaximilianMaryKolbe": {
		    "moment": moment.utc({ year: year, month: 7, day: 14 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintMaximilianMaryKolbe[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintStephenOfHungary": {
		    "moment": moment.utc({ year: year, month: 7, day: 16 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintStephenOfHungary[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintJohnEudes": {
		    "moment": moment.utc({ year: year, month: 7, day: 19 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintJohnEudes[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintBernardOfClairvaux": {
		    "moment": moment.utc({ year: year, month: 7, day: 20 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintBernardOfClairvaux[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintPiuxX": {
		    "moment": moment.utc({ year: year, month: 7, day: 21 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintPiuxX[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "quuenshipOfBlessedVirginMary": {
		    "moment": moment.utc({ year: year, month: 7, day: 22 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.quuenshipOfBlessedVirginMary[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintRoseOfLima": {
		    "moment": moment.utc({ year: year, month: 7, day: 23 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintRoseOfLima[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintBartholomewTheApostle": {
		    "moment": moment.utc({ year: year, month: 7, day: 24 }),
		    "type": types.FEAST_APOSTLE,
		    "name": localization.saintBartholomewTheApostle[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintLouisOrJosephOfCalasanz": {
		    "moment": moment.utc({ year: year, month: 7, day: 25 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintLouisOrJosephOfCalasanz[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintMonica": {
		    "moment": moment.utc({ year: year, month: 7, day: 27 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintMonica[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintAugustineOfHippo": {
		    "moment": moment.utc({ year: year, month: 7, day: 28 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintAugustineOfHippo[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "beheadingOfSaintJohnTheBaptist": {
		    "moment": moment.utc({ year: year, month: 7, day: 29 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.beheadingOfSaintJohnTheBaptist[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintGregoryTheGreat": {
		    "moment": moment.utc({ year: year, month: 8, day: 3 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintGregoryTheGreat[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "birthOfTheBlessedVirginMary": {
		    "moment": moment.utc({ year: year, month: 8, day: 8 }),
		    "type": types.FEAST,
		    "name": localization.birthOfTheBlessedVirginMary[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintPeterClaver": {
		    "moment": moment.utc({ year: year, month: 8, day: 9 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintPeterClaver[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "holyNameOfTheBlessedVirginMary": {
		    "moment": moment.utc({ year: year, month: 8, day: 12 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.holyNameOfTheBlessedVirginMary[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintJohnChrysostom": {
		    "moment": moment.utc({ year: year, month: 8, day: 13 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintJohnChrysostom[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "ourLadyOfSorrows": {
		    "moment": moment.utc({ year: year, month: 8, day: 15 }),
		    "type": types.MEMORIAL,
		    "name": localization.ourLadyOfSorrows[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintsCorneliusAndCyprian": {
		    "moment": moment.utc({ year: year, month: 8, day: 16 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintsCorneliusAndCyprian[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintRobertBellarmine": {
		    "moment": moment.utc({ year: year, month: 8, day: 17 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintRobertBellarmine[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintJanuarius": {
		    "moment": moment.utc({ year: year, month: 8, day: 19 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintJanuarius[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintAndrewKimTaegonAndPaulChongHasangAndCo": {
		    "moment": moment.utc({ year: year, month: 8, day: 20 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintAndrewKimTaegonAndPaulChongHasangAndCo[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintMatthewTheEvangelist": {
		    "moment": moment.utc({ year: year, month: 8, day: 21 }),
		    "type": types.FEAST_APOSTLE,
		    "name": localization.saintMatthewTheEvangelist[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintPioOfPietrelcina": {
		    "moment": moment.utc({ year: year, month: 8, day: 23 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintPioOfPietrelcina[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintsCosmasAndDamian": {
		    "moment": moment.utc({ year: year, month: 8, day: 26 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintsCosmasAndDamian[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintVincentDePaul": {
		    "moment": moment.utc({ year: year, month: 8, day: 27 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintVincentDePaul[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintWenceslausOrSaintsRuizAndCo": {
		    "moment": moment.utc({ year: year, month: 8, day: 28 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintWenceslausOrSaintsRuizAndCo[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintsMichaelGabrielAndRaphael": {
		    "moment": moment.utc({ year: year, month: 8, day: 29 }),
		    "type": types.FEAST,
		    "name": localization.saintsMichaelGabrielAndRaphael[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintJerome": {
		    "moment": moment.utc({ year: year, month: 8, day: 30 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintJerome[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintThereseOfTheChildOfJesus": {
		    "moment": moment.utc({ year: year, month: 9, day: 1 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintThereseOfTheChildOfJesus[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "guardianAngels": {
		    "moment": moment.utc({ year: year, month: 9, day: 2 }),
		    "type": types.MEMORIAL,
		    "name": localization.guardianAngels[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintFrancisOfAsisi": {
		    "moment": moment.utc({ year: year, month: 9, day: 4 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintFrancisOfAsisi[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintBruno": {
		    "moment": moment.utc({ year: year, month: 9, day: 6 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintBruno[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "ourLadyOfTheRosary": {
		    "moment": moment.utc({ year: year, month: 9, day: 7 }),
		    "type": types.MEMORIAL,
		    "name": localization.ourLadyOfTheRosary[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintDenisAndCoOrSaintJohnLeonardi": {
		    "moment": moment.utc({ year: year, month: 9, day: 9 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintDenisAndCoOrSaintJohnLeonardi[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintCallistusI": {
		    "moment": moment.utc({ year: year, month: 9, day: 14 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintCallistusI[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintTeresaOfJesus": {
		    "moment": moment.utc({ year: year, month: 9, day: 15 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintTeresaOfJesus[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintHedwigOrSaintMargaretMaryAlacoque": {
		    "moment": moment.utc({ year: year, month: 9, day: 16 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintHedwigOrSaintMargaretMaryAlacoque[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintIgnatiusOfAntioch": {
		    "moment": moment.utc({ year: year, month: 9, day: 17 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintIgnatiusOfAntioch[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintLukeTheEvangelist": {
		    "moment": moment.utc({ year: year, month: 9, day: 18 }),
		    "type": types.FEAST_APOSTLE,
		    "name": localization.saintLukeTheEvangelist[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintsJeanDeBrebeufIsaacJorguesAndCoOrSaintPaulOfTheCross": {
		    "moment": moment.utc({ year: year, month: 9, day: 19 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintsJeanDeBrebeufIsaacJorguesAndCoOrSaintPaulOfTheCross[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintJohnOfCapistrano": {
		    "moment": moment.utc({ year: year, month: 9, day: 23 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintJohnOfCapistrano[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintAnthonyMaryClaret": {
		    "moment": moment.utc({ year: year, month: 9, day: 24 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintAnthonyMaryClaret[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintsSimonAndJude": {
		    "moment": moment.utc({ year: year, month: 9, day: 28 }),
		    "type": types.FEAST_APOSTLE,
		    "name": localization.saintsSimonAndJude[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "allSouls": {
		    "moment": moment.utc({ year: year, month: 10, day: 2 }),
		    "type": types.FIXED_FEAST,
		    "name": localization.allSouls[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintMartinDePorres": {
		    "moment": moment.utc({ year: year, month: 10, day: 3 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintMartinDePorres[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintCharlesBorromeo": {
		    "moment": moment.utc({ year: year, month: 10, day: 4 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintCharlesBorromeo[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "dedicationOfTheLateranBasilica": {
		    "moment": moment.utc({ year: year, month: 10, day: 9 }),
		    "type": types.FIXED_FEAST,
		    "name": localization.dedicationOfTheLateranBasilica[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintLeoTheGreat": {
		    "moment": moment.utc({ year: year, month: 10, day: 10 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintLeoTheGreat[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintMartinOfTours": {
		    "moment": moment.utc({ year: year, month: 10, day: 11 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintMartinOfTours[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintJosaphat": {
		    "moment": moment.utc({ year: year, month: 10, day: 12 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintJosaphat[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintAlbertTheGreat": {
		    "moment": moment.utc({ year: year, month: 10, day: 15 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintAlbertTheGreat[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintMargaretOfScotlantOrGertrudeTheGreat": {
		    "moment": moment.utc({ year: year, month: 10, day: 16 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintMargaretOfScotlantOrGertrudeTheGreat[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintElizabethOfHungary": {
		    "moment": moment.utc({ year: year, month: 10, day: 17 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintElizabethOfHungary[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "dedicationOfTheBasilicasOfSaintsPeterAndPaul": {
		    "moment": moment.utc({ year: year, month: 10, day: 18 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.dedicationOfTheBasilicasOfSaintsPeterAndPaul[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "presentationOfTheBlessedVirginMary": {
		    "moment": moment.utc({ year: year, month: 10, day: 21 }),
		    "type": types.MEMORIAL,
		    "name": localization.presentationOfTheBlessedVirginMary[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintCecilia": {
		    "moment": moment.utc({ year: year, month: 10, day: 22 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintCecilia[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintClementIOrSaintColumban": {
		    "moment": moment.utc({ year: year, month: 10, day: 23 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintClementIOrSaintColumban[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintAndrewDungLacAndCo": {
		    "moment": moment.utc({ year: year, month: 10, day: 24 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintAndrewDungLacAndCo[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintCatherineOfAlexandria": {
		    "moment": moment.utc({ year: year, month: 10, day: 25 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintCatherineOfAlexandria[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintAndrew": {
		    "moment": moment.utc({ year: year, month: 10, day: 30 }),
		    "type": types.FEAST_APOSTLE,
		    "name": localization.saintAndrew[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintFrancisXavier": {
		    "moment": moment.utc({ year: year, month: 11, day: 3 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintFrancisXavier[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintJohnDamascene": {
		    "moment": moment.utc({ year: year, month: 11, day: 4 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintJohnDamascene[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintNicholas": {
		    "moment": moment.utc({ year: year, month: 11, day: 6 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintNicholas[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintAmbrose": {
		    "moment": moment.utc({ year: year, month: 11, day: 7 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintAmbrose[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintJuanDiego": {
		    "moment": moment.utc({ year: year, month: 11, day: 9 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintJuanDiego[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintDamasusI": {
		    "moment": moment.utc({ year: year, month: 11, day: 11 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintDamasusI[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "ourLadyOfGuadalupe": {
		    "moment": moment.utc({ year: year, month: 11, day: 12 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.ourLadyOfGuadalupe[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintLucyOfSyracuse": {
		    "moment": moment.utc({ year: year, month: 11, day: 13 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintLucyOfSyracuse[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintJohnOfTheCross": {
		    "moment": moment.utc({ year: year, month: 11, day: 14 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintJohnOfTheCross[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintPeterCanisius": {
		    "moment": moment.utc({ year: year, month: 11, day: 21 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintPeterCanisius[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintJohnofKanty": {
		    "moment": moment.utc({ year: year, month: 11, day: 23 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintJohnofKanty[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintStephenTheFirstMartyr": {
		    "moment": moment.utc({ year: year, month: 11, day: 26 }),
		    "type": types.FEAST_MARTYR,
		    "name": localization.saintStephenTheFirstMartyr[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintJohnTheApostle": {
		    "moment": moment.utc({ year: year, month: 11, day: 27 }),
		    "type": types.FEAST,
		    "name": localization.saintJohnTheApostle[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "holyInnocents": {
		    "moment": moment.utc({ year: year, month: 11, day: 28 }),
		    "type": types.FEAST_MARTYR,
		    "name": localization.holyInnocents[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintThomasBecket": {
		    "moment": moment.utc({ year: year, month: 11, day: 29 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintThomasBecket[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  },
		  "saintSylvesterI": {
		    "moment": moment.utc({ year: year, month: 11, day: 31 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintSylvesterI[locale],
		    "data": {
		      "nationalCalendar": calendars.general.key
		    }
		  }
		};
		return dates;
	}
};