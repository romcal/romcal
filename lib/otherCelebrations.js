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
	lodash = require('lodash'),
	localization = utils.getLocalizationData().general;

module.exports = {
	dates: function( year, locale ) {
		var dates = {
		  "saintBasilAndGregory": {
		    "moment": moment.utc({ year: year, month: 0, day: 2 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintBasilAndGregory[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "theMostHolyNameOfJesus": {
		    "moment": moment.utc({ year: year, month: 0, day: 3 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.theMostHolyNameOfJesus[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintRaymondOfPenyafort": {
		    "moment": moment.utc({ year: year, month: 0, day: 7 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintRaymondOfPenyafort[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintHilaryOfPoitiers": {
		    "moment": moment.utc({ year: year, month: 0, day: 13 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintHilaryOfPoitiers[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintAnthonyOfEgypt": {
		    "moment": moment.utc({ year: year, month: 0, day: 17 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintAnthonyOfEgypt[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintsFabianOrSebastian": {
		    "moment": moment.utc({ year: year, month: 0, day: 20 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintsFabianOrSebastian[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintAgnes": {
		    "moment": moment.utc({ year: year, month: 0, day: 21 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintAgnes[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintVincent": {
		    "moment": moment.utc({ year: year, month: 0, day: 22 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintVincent[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintFrancisDeSales": {
		    "moment": moment.utc({ year: year, month: 0, day: 24 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintFrancisDeSales[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "conversionOfSaintPaul": {
		    "moment": moment.utc({ year: year, month: 0, day: 25 }),
		    "type": types.FEAST,
		    "name": localization.conversionOfSaintPaul[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintsTimothyAndTitus": {
		    "moment": moment.utc({ year: year, month: 0, day: 26 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintsTimothyAndTitus[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintAngelaMerici": {
		    "moment": moment.utc({ year: year, month: 0, day: 27 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintAngelaMerici[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintThomasAquinas": {
		    "moment": moment.utc({ year: year, month: 0, day: 28 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintThomasAquinas[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintJohnBosco": {
		    "moment": moment.utc({ year: year, month: 0, day: 31 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintJohnBosco[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintsBlaseOrAnsgar": {
		    "moment": moment.utc({ year: year, month: 1, day: 3 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintsBlaseOrAnsgar[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintAgatha": {
		    "moment": moment.utc({ year: year, month: 1, day: 5 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintAgatha[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintsPaulMikiAndCo": {
		    "moment": moment.utc({ year: year, month: 1, day: 6 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintsPaulMikiAndCo[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintsJeromeOrJosephine": {
		    "moment": moment.utc({ year: year, month: 1, day: 8 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintsJeromeOrJosephine[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintScholastica": {
		    "moment": moment.utc({ year: year, month: 1, day: 10 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintScholastica[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "ourLadyOfLourdes": {
		    "moment": moment.utc({ year: year, month: 1, day: 11 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.ourLadyOfLourdes[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintsCyrilAndMethodius": {
		    "moment": moment.utc({ year: year, month: 1, day: 14 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintsCyrilAndMethodius[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "foundersOfTheSevileOrder": {
		    "moment": moment.utc({ year: year, month: 1, day: 17 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.foundersOfTheSevileOrder[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintPeterDamian": {
		    "moment": moment.utc({ year: year, month: 1, day: 21 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintPeterDamian[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "chairOfSaintPeter": {
		    "moment": moment.utc({ year: year, month: 1, day: 22 }),
		    "type": types.FEAST,
		    "name": localization.chairOfSaintPeter[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintPolycarp": {
		    "moment": moment.utc({ year: year, month: 1, day: 23 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintPolycarp[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintCasimir": {
		    "moment": moment.utc({ year: year, month: 2, day: 4 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintCasimir[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintPerpetuaAndFelicity": {
		    "moment": moment.utc({ year: year, month: 2, day: 7 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintPerpetuaAndFelicity[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintJohnOfGod": {
		    "moment": moment.utc({ year: year, month: 2, day: 8 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintJohnOfGod[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintFrancesOfRome": {
		    "moment": moment.utc({ year: year, month: 2, day: 9 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintFrancesOfRome[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintPatrick": {
		    "moment": moment.utc({ year: year, month: 2, day: 17 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintPatrick[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintCyrilOfJerusalem": {
		    "moment": moment.utc({ year: year, month: 2, day: 18 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintCyrilOfJerusalem[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintTuribiusOfMogrovejo": {
		    "moment": moment.utc({ year: year, month: 2, day: 23 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintTuribiusOfMogrovejo[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintFrancisOfPaola": {
		    "moment": moment.utc({ year: year, month: 3, day: 2 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintFrancisOfPaola[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintIsidore": {
		    "moment": moment.utc({ year: year, month: 3, day: 4 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintIsidore[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintVincentFerrer": {
		    "moment": moment.utc({ year: year, month: 3, day: 5 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintVincentFerrer[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintJohnBaptistDeLaSalle": {
		    "moment": moment.utc({ year: year, month: 3, day: 7 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintJohnBaptistDeLaSalle[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintStanislaus": {
		    "moment": moment.utc({ year: year, month: 3, day: 11 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintStanislaus[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintMartin": {
		    "moment": moment.utc({ year: year, month: 3, day: 13 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintMartin[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintAnselmOfCanterbury": {
		    "moment": moment.utc({ year: year, month: 3, day: 21 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintAnselmOfCanterbury[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintGeorgeOrAdalbert": {
		    "moment": moment.utc({ year: year, month: 3, day: 23 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintGeorgeOrAdalbert[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintFidelisOfSigmaringen": {
		    "moment": moment.utc({ year: year, month: 3, day: 24 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintFidelisOfSigmaringen[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintMarkTheEvangelist": {
		    "moment": moment.utc({ year: year, month: 3, day: 25 }),
		    "type": types.FEAST,
		    "name": localization.saintMarkTheEvangelist[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintsPeterChanelOrLouisGrignonDeMontfort": {
		    "moment": moment.utc({ year: year, month: 3, day: 28 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintsPeterChanelOrLouisGrignonDeMontfort[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintCatherineOfSiena": {
		    "moment": moment.utc({ year: year, month: 3, day: 29 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintCatherineOfSiena[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintPiusV": {
		    "moment": moment.utc({ year: year, month: 3, day: 30 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintPiusV[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintJosephTheWorker": {
		    "moment": moment.utc({ year: year, month: 4, day: 1 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintJosephTheWorker[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintAthanasius": {
		    "moment": moment.utc({ year: year, month: 4, day: 2 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintAthanasius[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintsPhilipAndJames": {
		    "moment": moment.utc({ year: year, month: 4, day: 3 }),
		    "type": types.FEAST_APOSTLE,
		    "name": localization.saintsPhilipAndJames[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintsNereusAndAchilleusOrPancras": {
		    "moment": moment.utc({ year: year, month: 4, day: 12 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintsNereusAndAchilleusOrPancras[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "ourLadyOfFatima": {
		    "moment": moment.utc({ year: year, month: 4, day: 13 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.ourLadyOfFatima[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintMatthias": {
		    "moment": moment.utc({ year: year, month: 4, day: 14 }),
		    "type": types.FEAST_APOSTLE,
		    "name": localization.saintMatthias[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintJohnI": {
		    "moment": moment.utc({ year: year, month: 4, day: 18 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintJohnI[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintBernadineOfSiena": {
		    "moment": moment.utc({ year: year, month: 4, day: 20 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintBernadineOfSiena[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintChristopherMagallanesAndCo": {
		    "moment": moment.utc({ year: year, month: 4, day: 21 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintChristopherMagallanesAndCo[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintRitaOfCascia": {
		    "moment": moment.utc({ year: year, month: 4, day: 22 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintRitaOfCascia[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintBedeTheVenerableOrSaintGregoryVIIOrSaintMaryMagdaleneDePazzi": {
		    "moment": moment.utc({ year: year, month: 4, day: 25 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintBedeTheVenerableOrSaintGregoryVIIOrSaintMaryMagdaleneDePazzi[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintPhilipNeri": {
		    "moment": moment.utc({ year: year, month: 4, day: 26 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintPhilipNeri[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintAugustineOfCanterbury": {
		    "moment": moment.utc({ year: year, month: 4, day: 27 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintAugustineOfCanterbury[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "visitationOfTheBlessedVirginMary": {
		    "moment": moment.utc({ year: year, month: 4, day: 31 }),
		    "type": types.FEAST,
		    "name": localization.visitationOfTheBlessedVirginMary[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintJustinMartyr": {
		    "moment": moment.utc({ year: year, month: 5, day: 1 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintJustinMartyr[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintsMarcelinusAndPeter": {
		    "moment": moment.utc({ year: year, month: 5, day: 2 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintsMarcelinusAndPeter[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintsCharlesLwangaAndCo": {
		    "moment": moment.utc({ year: year, month: 5, day: 3 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintsCharlesLwangaAndCo[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintBoniface": {
		    "moment": moment.utc({ year: year, month: 5, day: 5 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintBoniface[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintNorbert": {
		    "moment": moment.utc({ year: year, month: 5, day: 6 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintNorbert[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintEphrem": {
		    "moment": moment.utc({ year: year, month: 5, day: 9 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintEphrem[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintBarnabasTheApostle": {
		    "moment": moment.utc({ year: year, month: 5, day: 11 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintBarnabasTheApostle[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintAnthonyOfPadua": {
		    "moment": moment.utc({ year: year, month: 5, day: 13 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintAnthonyOfPadua[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintRomuald": {
		    "moment": moment.utc({ year: year, month: 5, day: 19 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintRomuald[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintAloysiusGonzaga": {
		    "moment": moment.utc({ year: year, month: 5, day: 21 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintAloysiusGonzaga[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintPaulinusOfNolaOrSaintsJohnFisherAndThomasMore": {
		    "moment": moment.utc({ year: year, month: 5, day: 22 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintPaulinusOfNolaOrSaintsJohnFisherAndThomasMore[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintCyrilOfAlexandria": {
		    "moment": moment.utc({ year: year, month: 5, day: 27 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintCyrilOfAlexandria[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintIrenaeus": {
		    "moment": moment.utc({ year: year, month: 5, day: 28 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintIrenaeus[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "firstMartyrsOfTheChurchOfRome": {
		    "moment": moment.utc({ year: year, month: 5, day: 30 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.firstMartyrsOfTheChurchOfRome[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintThomasTheApostle": {
		    "moment": moment.utc({ year: year, month: 6, day: 3 }),
		    "type": types.FEAST_APOSTLE,
		    "name": localization.saintThomasTheApostle[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintElizabethOfPortugal": {
		    "moment": moment.utc({ year: year, month: 6, day: 4 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintElizabethOfPortugal[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintAnthonyZaccaria": {
		    "moment": moment.utc({ year: year, month: 6, day: 5 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintAnthonyZaccaria[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintMariaGoretti": {
		    "moment": moment.utc({ year: year, month: 6, day: 6 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintMariaGoretti[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintAugustineZhaoRongAndCo": {
		    "moment": moment.utc({ year: year, month: 6, day: 9 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintAugustineZhaoRongAndCo[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintBenedict": {
		    "moment": moment.utc({ year: year, month: 6, day: 11 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintBenedict[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintHenry": {
		    "moment": moment.utc({ year: year, month: 6, day: 13 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintHenry[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintCamillusDeLellis": {
		    "moment": moment.utc({ year: year, month: 6, day: 14 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintCamillusDeLellis[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintBonaventure": {
		    "moment": moment.utc({ year: year, month: 6, day: 15 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintBonaventure[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "ourLadyOfMountCarmel": {
		    "moment": moment.utc({ year: year, month: 6, day: 16 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.ourLadyOfMountCarmel[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintApollinaris": {
		    "moment": moment.utc({ year: year, month: 6, day: 20 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintApollinaris[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintLawrenceOfBrindisi": {
		    "moment": moment.utc({ year: year, month: 6, day: 21 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintLawrenceOfBrindisi[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintMaryOfMagdalene": {
		    "moment": moment.utc({ year: year, month: 6, day: 22 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintMaryOfMagdalene[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintBirgitta": {
		    "moment": moment.utc({ year: year, month: 6, day: 23 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintBirgitta[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintSharbelMakhluf": {
		    "moment": moment.utc({ year: year, month: 6, day: 24 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintSharbelMakhluf[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintJames": {
		    "moment": moment.utc({ year: year, month: 6, day: 25 }),
		    "type": types.FEAST_APOSTLE,
		    "name": localization.saintJames[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintsJoachimAndAnne": {
		    "moment": moment.utc({ year: year, month: 6, day: 26 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintsJoachimAndAnne[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintMartha": {
		    "moment": moment.utc({ year: year, month: 6, day: 29 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintMartha[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintPeterChrysologus": {
		    "moment": moment.utc({ year: year, month: 6, day: 30 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintPeterChrysologus[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintIgnatiusOfLoyola": {
		    "moment": moment.utc({ year: year, month: 6, day: 31 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintIgnatiusOfLoyola[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintAlphonsusMariaDeLiguori": {
		    "moment": moment.utc({ year: year, month: 7, day: 1 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintAlphonsusMariaDeLiguori[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintEusebiusOfVercelli": {
		    "moment": moment.utc({ year: year, month: 7, day: 2 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintEusebiusOfVercelli[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintJeanVianney": {
		    "moment": moment.utc({ year: year, month: 7, day: 4 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintJeanVianney[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "dedicationOfTheBasilicaOfSaintMaryMajor": {
		    "moment": moment.utc({ year: year, month: 7, day: 5 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.dedicationOfTheBasilicaOfSaintMaryMajor[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintSixtusIIOrSaintCajetan": {
		    "moment": moment.utc({ year: year, month: 7, day: 7 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintSixtusIIOrSaintCajetan[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintDominic": {
		    "moment": moment.utc({ year: year, month: 7, day: 8 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintDominic[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintTeresaBenedictaOfTheCross": {
		    "moment": moment.utc({ year: year, month: 7, day: 9 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintTeresaBenedictaOfTheCross[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintLawrence": {
		    "moment": moment.utc({ year: year, month: 7, day: 10 }),
		    "type": types.FEAST_MARTYR,
		    "name": localization.saintLawrence[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintClare": {
		    "moment": moment.utc({ year: year, month: 7, day: 11 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintClare[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintJaneFrancesDeChantal": {
		    "moment": moment.utc({ year: year, month: 7, day: 12 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintJaneFrancesDeChantal[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintsPontianAndHippolytus": {
		    "moment": moment.utc({ year: year, month: 7, day: 13 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintsPontianAndHippolytus[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintMaximilianMaryKolbe": {
		    "moment": moment.utc({ year: year, month: 7, day: 14 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintMaximilianMaryKolbe[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintStephenOfHungary": {
		    "moment": moment.utc({ year: year, month: 7, day: 16 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintStephenOfHungary[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintJohnEudes": {
		    "moment": moment.utc({ year: year, month: 7, day: 19 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintJohnEudes[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintBernardOfClairvaux": {
		    "moment": moment.utc({ year: year, month: 7, day: 20 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintBernardOfClairvaux[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintPiuxX": {
		    "moment": moment.utc({ year: year, month: 7, day: 21 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintPiuxX[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "queenshipOfBlessedVirginMary": {
		    "moment": moment.utc({ year: year, month: 7, day: 22 }),
		    "type": types.MEMORIAL,
		    "name": localization.queenshipOfBlessedVirginMary[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintRoseOfLima": {
		    "moment": moment.utc({ year: year, month: 7, day: 23 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintRoseOfLima[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintBartholomewTheApostle": {
		    "moment": moment.utc({ year: year, month: 7, day: 24 }),
		    "type": types.FEAST_APOSTLE,
		    "name": localization.saintBartholomewTheApostle[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintLouisOrJosephOfCalasanz": {
		    "moment": moment.utc({ year: year, month: 7, day: 25 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintLouisOrJosephOfCalasanz[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintMonica": {
		    "moment": moment.utc({ year: year, month: 7, day: 27 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintMonica[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintAugustineOfHippo": {
		    "moment": moment.utc({ year: year, month: 7, day: 28 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintAugustineOfHippo[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "beheadingOfSaintJohnTheBaptist": {
		    "moment": moment.utc({ year: year, month: 7, day: 29 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.beheadingOfSaintJohnTheBaptist[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintGregoryTheGreat": {
		    "moment": moment.utc({ year: year, month: 8, day: 3 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintGregoryTheGreat[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "birthOfTheBlessedVirginMary": {
		    "moment": moment.utc({ year: year, month: 8, day: 8 }),
		    "type": types.FEAST,
		    "name": localization.birthOfTheBlessedVirginMary[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintPeterClaver": {
		    "moment": moment.utc({ year: year, month: 8, day: 9 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintPeterClaver[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "holyNameOfTheBlessedVirginMary": {
		    "moment": moment.utc({ year: year, month: 8, day: 12 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.holyNameOfTheBlessedVirginMary[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintJohnChrysostom": {
		    "moment": moment.utc({ year: year, month: 8, day: 13 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintJohnChrysostom[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "ourLadyOfSorrows": {
		    "moment": moment.utc({ year: year, month: 8, day: 15 }),
		    "type": types.MEMORIAL,
		    "name": localization.ourLadyOfSorrows[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintsCorneliusAndCyprian": {
		    "moment": moment.utc({ year: year, month: 8, day: 16 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintsCorneliusAndCyprian[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintRobertBellarmine": {
		    "moment": moment.utc({ year: year, month: 8, day: 17 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintRobertBellarmine[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintJanuarius": {
		    "moment": moment.utc({ year: year, month: 8, day: 19 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintJanuarius[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintAndrewKimTaegonAndPaulChongHasangAndCo": {
		    "moment": moment.utc({ year: year, month: 8, day: 20 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintAndrewKimTaegonAndPaulChongHasangAndCo[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintMatthewTheEvangelist": {
		    "moment": moment.utc({ year: year, month: 8, day: 21 }),
		    "type": types.FEAST_APOSTLE,
		    "name": localization.saintMatthewTheEvangelist[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintPioOfPietrelcina": {
		    "moment": moment.utc({ year: year, month: 8, day: 23 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintPioOfPietrelcina[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintsCosmasAndDamian": {
		    "moment": moment.utc({ year: year, month: 8, day: 26 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintsCosmasAndDamian[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintVincentDePaul": {
		    "moment": moment.utc({ year: year, month: 8, day: 27 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintVincentDePaul[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintWenceslausOrSaintsRuizAndCo": {
		    "moment": moment.utc({ year: year, month: 8, day: 28 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintWenceslausOrSaintsRuizAndCo[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintsMichaelGabrielAndRaphael": {
		    "moment": moment.utc({ year: year, month: 8, day: 29 }),
		    "type": types.FEAST,
		    "name": localization.saintsMichaelGabrielAndRaphael[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintJerome": {
		    "moment": moment.utc({ year: year, month: 8, day: 30 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintJerome[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintThereseOfTheChildOfJesus": {
		    "moment": moment.utc({ year: year, month: 9, day: 1 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintThereseOfTheChildOfJesus[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "guardianAngels": {
		    "moment": moment.utc({ year: year, month: 9, day: 2 }),
		    "type": types.MEMORIAL,
		    "name": localization.guardianAngels[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintFrancisOfAsisi": {
		    "moment": moment.utc({ year: year, month: 9, day: 4 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintFrancisOfAsisi[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintBruno": {
		    "moment": moment.utc({ year: year, month: 9, day: 6 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintBruno[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "ourLadyOfTheRosary": {
		    "moment": moment.utc({ year: year, month: 9, day: 7 }),
		    "type": types.MEMORIAL,
		    "name": localization.ourLadyOfTheRosary[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintDenisAndCoOrSaintJohnLeonardi": {
		    "moment": moment.utc({ year: year, month: 9, day: 9 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintDenisAndCoOrSaintJohnLeonardi[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintCallistusI": {
		    "moment": moment.utc({ year: year, month: 9, day: 14 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintCallistusI[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintTeresaOfJesus": {
		    "moment": moment.utc({ year: year, month: 9, day: 15 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintTeresaOfJesus[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintHedwigOrSaintMargaretMaryAlacoque": {
		    "moment": moment.utc({ year: year, month: 9, day: 16 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintHedwigOrSaintMargaretMaryAlacoque[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintIgnatiusOfAntioch": {
		    "moment": moment.utc({ year: year, month: 9, day: 17 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintIgnatiusOfAntioch[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintLukeTheEvangelist": {
		    "moment": moment.utc({ year: year, month: 9, day: 18 }),
		    "type": types.FEAST_APOSTLE,
		    "name": localization.saintLukeTheEvangelist[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintsJeanDeBrebeufIsaacJorguesAndCoOrSaintPaulOfTheCross": {
		    "moment": moment.utc({ year: year, month: 9, day: 19 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintsJeanDeBrebeufIsaacJorguesAndCoOrSaintPaulOfTheCross[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintJohnOfCapistrano": {
		    "moment": moment.utc({ year: year, month: 9, day: 23 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintJohnOfCapistrano[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintAnthonyMaryClaret": {
		    "moment": moment.utc({ year: year, month: 9, day: 24 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintAnthonyMaryClaret[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintsSimonAndJude": {
		    "moment": moment.utc({ year: year, month: 9, day: 28 }),
		    "type": types.FEAST_APOSTLE,
		    "name": localization.saintsSimonAndJude[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "allSouls": {
		    "moment": moment.utc({ year: year, month: 10, day: 2 }),
		    "type": types.FIXED_FEAST,
		    "name": localization.allSouls[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintMartinDePorres": {
		    "moment": moment.utc({ year: year, month: 10, day: 3 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintMartinDePorres[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintCharlesBorromeo": {
		    "moment": moment.utc({ year: year, month: 10, day: 4 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintCharlesBorromeo[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "dedicationOfTheLateranBasilica": {
		    "moment": moment.utc({ year: year, month: 10, day: 9 }),
		    "type": types.FIXED_FEAST,
		    "name": localization.dedicationOfTheLateranBasilica[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintLeoTheGreat": {
		    "moment": moment.utc({ year: year, month: 10, day: 10 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintLeoTheGreat[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintMartinOfTours": {
		    "moment": moment.utc({ year: year, month: 10, day: 11 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintMartinOfTours[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintJosaphat": {
		    "moment": moment.utc({ year: year, month: 10, day: 12 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintJosaphat[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintAlbertTheGreat": {
		    "moment": moment.utc({ year: year, month: 10, day: 15 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintAlbertTheGreat[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintMargaretOfScotlantOrGertrudeTheGreat": {
		    "moment": moment.utc({ year: year, month: 10, day: 16 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintMargaretOfScotlantOrGertrudeTheGreat[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintElizabethOfHungary": {
		    "moment": moment.utc({ year: year, month: 10, day: 17 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintElizabethOfHungary[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "dedicationOfTheBasilicasOfSaintsPeterAndPaul": {
		    "moment": moment.utc({ year: year, month: 10, day: 18 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.dedicationOfTheBasilicasOfSaintsPeterAndPaul[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "presentationOfTheBlessedVirginMary": {
		    "moment": moment.utc({ year: year, month: 10, day: 21 }),
		    "type": types.MEMORIAL,
		    "name": localization.presentationOfTheBlessedVirginMary[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintCecilia": {
		    "moment": moment.utc({ year: year, month: 10, day: 22 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintCecilia[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintClementIOrSaintColumban": {
		    "moment": moment.utc({ year: year, month: 10, day: 23 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintClementIOrSaintColumban[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintAndrewDungLacAndCo": {
		    "moment": moment.utc({ year: year, month: 10, day: 24 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintAndrewDungLacAndCo[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintCatherineOfAlexandria": {
		    "moment": moment.utc({ year: year, month: 10, day: 25 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintCatherineOfAlexandria[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintAndrew": {
		    "moment": moment.utc({ year: year, month: 10, day: 30 }),
		    "type": types.FEAST_APOSTLE,
		    "name": localization.saintAndrew[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintFrancisXavier": {
		    "moment": moment.utc({ year: year, month: 11, day: 3 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintFrancisXavier[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintJohnDamascene": {
		    "moment": moment.utc({ year: year, month: 11, day: 4 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintJohnDamascene[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintNicholas": {
		    "moment": moment.utc({ year: year, month: 11, day: 6 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintNicholas[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintAmbrose": {
		    "moment": moment.utc({ year: year, month: 11, day: 7 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintAmbrose[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintJuanDiego": {
		    "moment": moment.utc({ year: year, month: 11, day: 9 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintJuanDiego[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintDamasusI": {
		    "moment": moment.utc({ year: year, month: 11, day: 11 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintDamasusI[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "ourLadyOfGuadalupe": {
		    "moment": moment.utc({ year: year, month: 11, day: 12 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.ourLadyOfGuadalupe[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintLucyOfSyracuse": {
		    "moment": moment.utc({ year: year, month: 11, day: 13 }),
		    "type": types.MEMORIAL_MARTYR,
		    "name": localization.saintLucyOfSyracuse[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintJohnOfTheCross": {
		    "moment": moment.utc({ year: year, month: 11, day: 14 }),
		    "type": types.MEMORIAL,
		    "name": localization.saintJohnOfTheCross[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintPeterCanisius": {
		    "moment": moment.utc({ year: year, month: 11, day: 21 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintPeterCanisius[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintJohnOfKanty": {
		    "moment": moment.utc({ year: year, month: 11, day: 23 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintJohnOfKanty[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintStephenTheFirstMartyr": {
		    "moment": moment.utc({ year: year, month: 11, day: 26 }),
		    "type": types.FEAST_MARTYR,
		    "name": localization.saintStephenTheFirstMartyr[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintJohnTheApostle": {
		    "moment": moment.utc({ year: year, month: 11, day: 27 }),
		    "type": types.FEAST,
		    "name": localization.saintJohnTheApostle[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "holyInnocents": {
		    "moment": moment.utc({ year: year, month: 11, day: 28 }),
		    "type": types.FEAST_MARTYR,
		    "name": localization.holyInnocents[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintThomasBecket": {
		    "moment": moment.utc({ year: year, month: 11, day: 29 }),
		    "type": types.OPT_MEMORIAL_MARTYR,
		    "name": localization.saintThomasBecket[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  },
		  "saintSylvesterI": {
		    "moment": moment.utc({ year: year, month: 11, day: 31 }),
		    "type": types.OPT_MEMORIAL,
		    "name": localization.saintSylvesterI[locale],
		    "data": {
		      "nationalCalendar": calendars.general
		    }
		  }
		};

		lodash.map( dates, function( date, key ) {
			date.data.nationalCalendar.otherCelebrations = true;
		});

		return dates;
	}
};