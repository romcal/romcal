/*
    The MIT License (MIT)

    Copyright (c) 2014 Pereira, Julian Matthew

    Permission is hereby granted, free of charge, to any person obtaining a copy
    Of this software And associated documentation files (The "Software"), to deal
    in the Software without restriction, including without limitation The rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of The Software, and to permit persons to whom The Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of The Software.

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
    localization = utils.getLocalizationData();

module.exports = {
    dates: function( year, locale, movableSolemnities ) {

      var thirdSundayOfJanuary = function( year ) {
        var firstSunday = moment.utc({ year: year, month: 0, day: 1 }).endOf('week');
        firstSunday.hour(0).minute(0).seconds(0).millisecond(0);
        return firstSunday.add( 14, 'days' );
      };

      return {
        "argentina": {
          "blessedLauraVicuna": {
            "name": localization.argentina.blessedLauraVicuna[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.argentina.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 22 })
          },
          "ourLadyQueenOfPeace": {
            "name": localization.argentina.ourLadyQueenOfPeace[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.argentina.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 24 })
          },
          "saintTuribiusOfMogrovejo": {
            "name": localization.argentina.saintTuribiusOfMogrovejo[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.argentina.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 27 })
          },
          "ourLadyOfLujan": {
            "name": localization.argentina.ourLadyOfLujan[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.argentina.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 8 })
          },
          "saintIsidoreTheLaborer": {
            "name": localization.argentina.saintIsidoreTheLaborer[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.argentina.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 15 })
          },
          "saintLuigiOrione": {
            "name": localization.argentina.saintLuigiOrione[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.argentina.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 16 })
          },
          "maryMotherOfTheChurch": {
            "name": localization.argentina.maryMotherOfTheChurch[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.argentina.key
            },
            "moment": moment.utc( movableSolemnities.pentecostSunday.moment ).add( 1, 'days' )
          },
          "ourLadyOfItati": {
            "name": localization.argentina.ourLadyOfItati[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.argentina.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 9 })
          },
          "saintsAugustineZhaoRong": {
            "name": localization.argentina.saintsAugustineZhaoRong[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.argentina.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 10 })
          },
          "ourLadyOfMountCarmel": {
            "name": localization.argentina.ourLadyOfMountCarmel[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.argentina.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 16 })
          },
          "saintSharbelMakhluf": {
            "name": localization.argentina.saintSharbelMakhluf[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.argentina.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 23 })
          },
          "saintFrancisSolanus": {
            "name": localization.argentina.saintFrancisSolanus[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.argentina.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 24 })
          },
          "saintRocco": {
            "name": localization.argentina.saintRocco[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.argentina.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 16 })
          },
          "blessedCeferinoNamuncura": {
            "name": localization.argentina.blessedCeferinoNamuncura[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.argentina.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 26 })
          },
          "saintRoseOfLima": {
            "name": localization.argentina.saintRoseOfLima[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.argentina.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 30 })
          },
          "ourLadyOfMercy": {
            "name": localization.argentina.ourLadyOfMercy[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.argentina.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 24 })
          },
          "saintHectorValdivielsoSaez": {
            "name": localization.argentina.saintHectorValdivielsoSaez[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.argentina.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 9 })
          },
          "ourLadyOfThePillar": {
            "name": localization.argentina.ourLadyOfThePillar[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.argentina.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 12 })
          },
          "saintsRoqueGonzalez": {
            "name": localization.argentina.saintsRoqueGonzalez[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.argentina.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 17 })
          },
          "saintElizabethOfHungary": {
            "name": localization.argentina.saintElizabethOfHungary[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.argentina.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 18 })
          },
          "ourLadyOfGuadalupe": {
            "name": localization.argentina.ourLadyOfGuadalupe[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.argentina.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 12 })
          },
          "ourLadyOfTheValley": {
            "name": localization.argentina.ourLadyOfTheValley[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.argentina.key
            },
            "moment": moment.utc( movableSolemnities.thirdSundayOfEaster.moment ).subtract( 1, 'days' )
          }
        },
        "australia": {
          "saintPatrick": {
            "name": localization.australia.saintPatrick[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.australia.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 17 })
          },
          "saintPeterChanel": {
            "name": localization.australia.saintPeterChanel[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.australia.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 28 })
          },
          "ourLadyHelpOfChristians": {
            "name": localization.australia.ourLadyHelpOfChristians[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.australia.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 24 })
          },
          "blessedPeterToRot": {
            "name": localization.australia.blessedPeterToRot[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.australia.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 7 })
          },
          "saintMaryOfTheCross": {
            "name": localization.australia.saintMaryOfTheCross[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.australia.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 8 })
          }
        },
        "belgium": {
          "saintBroTherMutienMarie": {
            "name": localization.belgium.saintBroTherMutienMarie[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.belgium.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 30 })
          },
          "saintAmand": {
            "name": localization.belgium.saintAmand[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.belgium.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 6 })
          },
          "saintGertrudeOfNivelles": {
            "name": localization.belgium.saintGertrudeOfNivelles[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.belgium.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 17 })
          },
          "saintJulieBilliart": {
            "name": localization.belgium.saintJulieBilliart[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.belgium.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 8 })
          },
          "saintFaTherDamien": {
            "name": localization.belgium.saintFaTherDamien[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.belgium.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 10 })
          },
          "saintJulianaOfLiege": {
            "name": localization.belgium.saintJulianaOfLiege[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.belgium.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 7 })
          },
          "ourLadyMediatrix": {
            "name": localization.belgium.ourLadyMediatrix[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.belgium.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 31 })
          },
          "saintLambert": {
            "name": localization.belgium.saintLambert[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.belgium.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 17 })
          },
          "saintHubert": {
            "name": localization.belgium.saintHubert[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.belgium.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 3 })
          },
          "saintJohnBerchmans": {
            "name": localization.belgium.saintJohnBerchmans[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.belgium.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 26 })
          }
        },
        "bolivia": {
          "saintsFelipeDeJesus": {
            "name": localization.bolivia.saintsFelipeDeJesus[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.bolivia.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 6 })
          },
          "saintTuribiusOfMogrovejo": {
            "name": localization.bolivia.saintTuribiusOfMogrovejo[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.bolivia.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 23 })
          },
          "saintMarianadeJesusDeParedes": {
            "name": localization.bolivia.saintMarianadeJesusDeParedes[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.bolivia.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 25 })
          },
          "blessedNazariaIgnaciaMarch": {
            "name": localization.bolivia.blessedNazariaIgnaciaMarch[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.bolivia.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 23 })
          },
          "saintCamillusDeLellis": {
            "name": localization.bolivia.saintCamillusDeLellis[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.bolivia.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 12 })
          },
          "saintFrancisSolanus": {
            "name": localization.bolivia.saintFrancisSolanus[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.bolivia.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 14 })
          },
          "ourLadyOfMountCarmel": {
            "name": localization.bolivia.ourLadyOfMountCarmel[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.bolivia.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 16 })
          },
          "saintRoseOfLima": {
            "name": localization.bolivia.saintRoseOfLima[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.bolivia.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 23 })
          },
          "saintPeterClaver": {
            "name": localization.bolivia.saintPeterClaver[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.bolivia.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 9 })
          },
          "saintJohnMacias": {
            "name": localization.bolivia.saintJohnMacias[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.bolivia.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 18 })
          },
          "saintLouisBertrand": {
            "name": localization.bolivia.saintLouisBertrand[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.bolivia.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 9 })
          },
          "saintMiguelFebresCordero": {
            "name": localization.bolivia.saintMiguelFebresCordero[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.bolivia.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 21 })
          },
          "saintJohnPaulII": {
            "name": localization.bolivia.saintJohnPaulII[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.bolivia.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 22 })
          },
          "saintAnthonyMaryClaret": {
            "name": localization.bolivia.saintAnthonyMaryClaret[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.bolivia.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 24 })
          },
          "saintMartindePorres": {
            "name": localization.bolivia.saintMartindePorres[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.bolivia.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 3 })
          },
          "saintsRoqueGonzalez": {
            "name": localization.bolivia.saintsRoqueGonzalez[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.bolivia.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 19 })
          },
          "ourLadyOfGuadalupe": {
            "name": localization.bolivia.ourLadyOfGuadalupe[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.bolivia.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 12 })
          },
          "ourLordJesusChrist": {
            "name": localization.bolivia.ourLordJesusChrist[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.bolivia.key
            },
            "moment": moment.utc( movableSolemnities.pentecostSunday.moment ).add( 4, 'days' )
          }
        },
        "bosniaHerzegovina": {
          "saintScholastica": {
            "name": localization.bosniaHerzegovina.saintScholastica[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.bosniaHerzegovina.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 9 })
          },
          "blessedAloysiusStepinac": {
            "name": localization.bosniaHerzegovina.blessedAloysiusStepinac[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.bosniaHerzegovina.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 10 })
          },
          "saintsCyril": {
            "name": localization.bosniaHerzegovina.saintsCyril[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.bosniaHerzegovina.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 14 })
          },
          "blessedOsannaOfCattaro": {
            "name": localization.bosniaHerzegovina.blessedOsannaOfCattaro[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.bosniaHerzegovina.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 27 })
          },
          "saintCatherineOfSiena": {
            "name": localization.bosniaHerzegovina.saintCatherineOfSiena[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.bosniaHerzegovina.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 29 })
          },
          "blessedIvanMerz": {
            "name": localization.bosniaHerzegovina.blessedIvanMerz[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.bosniaHerzegovina.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 10 })
          },
          "saintLeopoldMandic": {
            "name": localization.bosniaHerzegovina.saintLeopoldMandic[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.bosniaHerzegovina.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 12 })
          },
          "blessedMaryOfJesusCrucifiedPetkovic": {
            "name": localization.bosniaHerzegovina.blessedMaryOfJesusCrucifiedPetkovic[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.bosniaHerzegovina.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 9 })
          },
          "saintBenedict": {
            "name": localization.bosniaHerzegovina.saintBenedict[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.bosniaHerzegovina.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 11 })
          },
          "ourLadyOfBistrica": {
            "name": localization.bosniaHerzegovina.ourLadyOfBistrica[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.bosniaHerzegovina.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 13 })
          },
          "saintElijah": {
            "name": localization.bosniaHerzegovina.saintElijah[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.bosniaHerzegovina.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 20 })
          },
          "saintBirgitta": {
            "name": localization.bosniaHerzegovina.saintBirgitta[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.bosniaHerzegovina.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 23 })
          },
          "saintClementOfOhridAndGorazd": {
            "name": localization.bosniaHerzegovina.saintClementOfOhridAndGorazd[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.bosniaHerzegovina.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 27 })
          },
          "blessedAugustinKazotic": {
            "name": localization.bosniaHerzegovina.blessedAugustinKazotic[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.bosniaHerzegovina.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 3 })
          },
          "saintRoch": {
            "name": localization.bosniaHerzegovina.saintRoch[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.bosniaHerzegovina.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 16 })
          },
          "saintMarkoKrizin": {
            "name": localization.bosniaHerzegovina.saintMarkoKrizin[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.bosniaHerzegovina.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 7 })
          },
          "blessedGraziaOfCattaro": {
            "name": localization.bosniaHerzegovina.blessedGraziaOfCattaro[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.bosniaHerzegovina.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 27 })
          },
          "saintNikolaTavelic": {
            "name": localization.bosniaHerzegovina.saintNikolaTavelic[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.bosniaHerzegovina.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 14 })
          },
          "maryMotherOfTheChurch": {
            "name": localization.bosniaHerzegovina.maryMotherOfTheChurch[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.bosniaHerzegovina.key
            },
            "moment": moment.utc( movableSolemnities.pentecostSunday.moment ).add( 1, 'days' )
          }
        },
        "brazil": {
          "saintJosedeAnchieta": {
            "name": localization.brazil.saintJosedeAnchieta[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.brazil.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 9 })
          },
          "blessedAlbertinaBerkenbrock": {
            "name": localization.brazil.blessedAlbertinaBerkenbrock[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.brazil.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 15 })
          },
          "saintPaulinaOfTheAgonizingHeartOfJesus": {
            "name": localization.brazil.saintPaulinaOfTheAgonizingHeartOfJesus[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.brazil.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 9 })
          },
          "ourLadyOfMountCarmel": {
            "name": localization.brazil.ourLadyOfMountCarmel[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.brazil.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 16 })
          },
          "blessedInaciodeAzevedo": {
            "name": localization.brazil.blessedInaciodeAzevedo[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.brazil.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 17 })
          },
          "saintRoseOfLima": {
            "name": localization.brazil.saintRoseOfLima[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.brazil.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 23 })
          },
          "blessedsAndreDeSoveralAndAmbrosioFranciscoFerro": {
            "name": localization.brazil.blessedsAndreDeSoveralAndAmbrosioFranciscoFerro[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.brazil.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 3 })
          },
          "ourLadyOfAparecida": {
            "name": localization.brazil.ourLadyOfAparecida[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.brazil.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 12 })
          },
          "saintAnthonyOfSaintAnneGalvao": {
            "name": localization.brazil.saintAnthonyOfSaintAnneGalvao[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.brazil.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 25 })
          },
          "saintsRoqueGonzalezAlfonsoRodriguezAndJuanDelCastillo": {
            "name": localization.brazil.saintsRoqueGonzalezAlfonsoRodriguezAndJuanDelCastillo[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.brazil.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 19 })
          },
          "ourLadyOfGuadalupe": {
            "name": localization.brazil.ourLadyOfGuadalupe[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.brazil.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 12 })
          }
        },
        "canada": {
          "saintAndreBessette": {
            "name": localization.canada.saintAndreBessette[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.canada.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 7 })
          },
          "saintRaymondOfPenyafort": {
            "name": localization.canada.saintRaymondOfPenyafort[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.canada.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 8 })
          },
          "saintMargueriteBourgeoys": {
            "name": localization.canada.saintMargueriteBourgeoys[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.canada.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 12 })
          },
          "saintJoseph": {
            "name": localization.canada.saintJoseph[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.canada.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 19 })
          },
          "saintKateriTekakwitha": {
            "name": localization.canada.saintKateriTekakwitha[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.canada.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 17 })
          },
          "blessedMarieAnneBlondin": {
            "name": localization.canada.blessedMarieAnneBlondin[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.canada.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 18 })
          },
          "ourLadyOfGoodCounsel": {
            "name": localization.canada.ourLadyOfGoodCounsel[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.canada.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 26 })
          },
          "saintMarieOfTheIncarnation": {
            "name": localization.canada.saintMarieOfTheIncarnation[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.canada.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 30 })
          },
          "blessedMarieLeonieParadis": {
            "name": localization.canada.blessedMarieLeonieParadis[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.canada.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 4 })
          },
          "saintFrancoisDeLaval": {
            "name": localization.canada.saintFrancoisDeLaval[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.canada.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 6 })
          },
          "blessedCatherineOfSaintAugustine": {
            "name": localization.canada.blessedCatherineOfSaintAugustine[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.canada.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 8 })
          },
          "saintEugenedeMazenod": {
            "name": localization.canada.saintEugenedeMazenod[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.canada.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 21 })
          },
          "blessedLouisZephirinMoreau": {
            "name": localization.canada.blessedLouisZephirinMoreau[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.canada.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 24 })
          },
          "blessedsNykytaBudkaAndVasylVelychkowsky": {
            "name": localization.canada.blessedsNykytaBudkaAndVasylVelychkowsky[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.canada.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 27 })
          },
          "saintAnneAndSaintJoachim": {
            "name": localization.canada.saintAnneAndSaintJoachim[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.canada.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 26 })
          },
          "blessedFredericJanssoone": {
            "name": localization.canada.blessedFredericJanssoone[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.canada.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 5 })
          },
          "blessedAndreGrasset": {
            "name": localization.canada.blessedAndreGrasset[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.canada.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 2 })
          },
          "blessedDinaBelanger": {
            "name": localization.canada.blessedDinaBelanger[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.canada.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 4 })
          },
          "blessedEmilieTavernierGamelin": {
            "name": localization.canada.blessedEmilieTavernierGamelin[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.canada.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 24 })
          },
          "saintsJohnDeBrebeuf": {
            "name": localization.canada.saintsJohnDeBrebeuf[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.canada.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 26 })
          },
          "blessedMarieRoseDurocher": {
            "name": localization.canada.blessedMarieRoseDurocher[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.canada.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 6 })
          },
          "saintMargueriteDYouville": {
            "name": localization.canada.saintMargueriteDYouville[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.canada.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 16 })
          },
          "saintHedwig": {
            "name": localization.canada.saintHedwig[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.canada.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 20 })
          },
          "ourLadyOfGuadalupe": {
            "name": localization.canada.ourLadyOfGuadalupe[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.canada.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 12 })
          }
        },
        "chile": {
          "blessedLauraVicuna": {
            "name": localization.chile.blessedLauraVicuna[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.chile.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 22 })
          },
          "blessedPiusIX": {
            "name": localization.chile.blessedPiusIX[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.chile.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 7 })
          },
          "ourLadyOfLourdes": {
            "name": localization.chile.ourLadyOfLourdes[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.chile.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 11 })
          },
          "exaltationOfTheHolyCross": {
            "name": localization.chile.exaltationOfTheHolyCross[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.chile.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 3 })
          },
          "saintsPhilipAndJames": {
            "name": localization.chile.saintsPhilipAndJames[locale],
            "type": "types.FEAST_APOSTLE",
            "data": {
              "nationalCalendar": calendars.chile.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 4 })
          },
          "saintTeresaOfLosAndes": {
            "name": localization.chile.saintTeresaOfLosAndes[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.chile.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 13 })
          },
          "saintCamillusDeLellis": {
            "name": localization.chile.saintCamillusDeLellis[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.chile.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 14 })
          },
          "ourLadyOfMountCarmel": {
            "name": localization.chile.ourLadyOfMountCarmel[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.chile.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 16 })
          },
          "saintAlbertoHurtado": {
            "name": localization.chile.saintAlbertoHurtado[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.chile.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 18 })
          },
          "saintRoseOfLima": {
            "name": localization.chile.saintRoseOfLima[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.chile.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 30 })
          },
          "ourLadyOfMercy": {
            "name": localization.chile.ourLadyOfMercy[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.chile.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 24 })
          },
          "saintJohnXXIII": {
            "name": localization.chile.saintJohnXXIII[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.chile.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 11 })
          },
          "ourLadyOfGuadalupe": {
            "name": localization.chile.ourLadyOfGuadalupe[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.chile.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 12 })
          },
          "jesusChristTheEternalHighPriest": {
            "name": localization.chile.jesusChristTheEternalHighPriest[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.chile.key
            },
            "moment": moment.utc( movableSolemnities.pentecostSunday.moment ).add( 4, 'days' )
          }
        },
        "croatia": {
          "blessedAloysiusStepinac": {
            "name": localization.croatia.blessedAloysiusStepinac[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.croatia.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 10 })
          },
          "saintsCyril": {
            "name": localization.croatia.saintsCyril[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.croatia.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 14 })
          },
          "saintCatherineOfSiena": {
            "name": localization.croatia.saintCatherineOfSiena[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.croatia.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 29 })
          },
          "blessedIvanMerz": {
            "name": localization.croatia.blessedIvanMerz[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.croatia.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 10 })
          },
          "saintLeopoldMandic": {
            "name": localization.croatia.saintLeopoldMandic[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.croatia.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 12 })
          },
          "saintQuirinusOfSescia": {
            "name": localization.croatia.saintQuirinusOfSescia[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.croatia.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 4 })
          },
          "blessedMaryOfJesusCrucifiedPetkovic": {
            "name": localization.croatia.blessedMaryOfJesusCrucifiedPetkovic[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.croatia.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 9 })
          },
          "saintBenedict": {
            "name": localization.croatia.saintBenedict[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.croatia.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 11 })
          },
          "ourLadyOfBistrica": {
            "name": localization.croatia.ourLadyOfBistrica[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.croatia.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 13 })
          },
          "saintBirgitta": {
            "name": localization.croatia.saintBirgitta[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.croatia.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 23 })
          },
          "blessedAugustinKazotic": {
            "name": localization.croatia.blessedAugustinKazotic[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.croatia.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 3 })
          },
          "saintTeresaBenedictaOfTheCross": {
            "name": localization.croatia.saintTeresaBenedictaOfTheCross[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.croatia.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 9 })
          },
          "saintMarkoKrizin": {
            "name": localization.croatia.saintMarkoKrizin[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.croatia.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 7 })
          },
          "saintNikolaTavelic": {
            "name": localization.croatia.saintNikolaTavelic[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.croatia.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 14 })
          }
        },
        "czechRepublic": {
          "ourLadyMotherOfChristianUnity": {
            "name": localization.czechRepublic.ourLadyMotherOfChristianUnity[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 18 })
          },
          "ourLadyMediatrix": {
            "name": localization.czechRepublic.ourLadyMediatrix[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 8 })
          },
          "saintAdalbert": {
            "name": localization.czechRepublic.saintAdalbert[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 23 })
          },
          "saintCatherineOfSiena": {
            "name": localization.czechRepublic.saintCatherineOfSiena[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 29 })
          },
          "saintSigismund": {
            "name": localization.czechRepublic.saintSigismund[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 30 })
          },
          "saintJohnNepomucene": {
            "name": localization.czechRepublic.saintJohnNepomucene[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 16 })
          },
          "saintClementMaryHofbauer": {
            "name": localization.czechRepublic.saintClementMaryHofbauer[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 20 })
          },
          "saintZdislava": {
            "name": localization.czechRepublic.saintZdislava[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 30 })
          },
          "saintVitus": {
            "name": localization.czechRepublic.saintVitus[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 15 })
          },
          "saintJohnNeumann": {
            "name": localization.czechRepublic.saintJohnNeumann[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 19 })
          },
          "saintProcopius": {
            "name": localization.czechRepublic.saintProcopius[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 4 })
          },
          "saintsCyril": {
            "name": localization.czechRepublic.saintsCyril[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 5 })
          },
          "saintBenedict": {
            "name": localization.czechRepublic.saintBenedict[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 11 })
          },
          "blessedHrzonata": {
            "name": localization.czechRepublic.blessedHrzonata[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 14 })
          },
          "blessedCeslausAndSaintHyacinth": {
            "name": localization.czechRepublic.blessedCeslausAndSaintHyacinth[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 17 })
          },
          "saintBridget": {
            "name": localization.czechRepublic.saintBridget[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 23 })
          },
          "saintTeresaBenedictaOfTheCross": {
            "name": localization.czechRepublic.saintTeresaBenedictaOfTheCross[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 9 })
          },
          "saintsBenedykt": {
            "name": localization.czechRepublic.saintsBenedykt[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 25 })
          },
          "blessedTeresaOfCalcutta": {
            "name": localization.czechRepublic.blessedTeresaOfCalcutta[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 5 })
          },
          "saintMelchiOrGrodziecki": {
            "name": localization.czechRepublic.saintMelchiOrGrodziecki[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 7 })
          },
          "blessedCharlesSpinola": {
            "name": localization.czechRepublic.blessedCharlesSpinola[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 10 })
          },
          "saintLudmila": {
            "name": localization.czechRepublic.saintLudmila[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 16 })
          },
          "saintWenceslaus": {
            "name": localization.czechRepublic.saintWenceslaus[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 28 })
          },
          "saintRadim": {
            "name": localization.czechRepublic.saintRadim[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 12 })
          },
          "blessedKarlOfAustria": {
            "name": localization.czechRepublic.blessedKarlOfAustria[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 21 })
          },
          "saintJohnPaulII": {
            "name": localization.czechRepublic.saintJohnPaulII[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 22 })
          },
          "saintWolfgang": {
            "name": localization.czechRepublic.saintWolfgang[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 31 })
          },
          "saintAgnesOfBohemia": {
            "name": localization.czechRepublic.saintAgnesOfBohemia[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 13 })
          },
          "saintEdmundCampion": {
            "name": localization.czechRepublic.saintEdmundCampion[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.czechRepublic.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 1 })
          }
        },
        "england": {
          "saintAelredOfRievaulx": {
            "name": localization.england.saintAelredOfRievaulx[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 12 })
          },
          "saintWulstan": {
            "name": localization.england.saintWulstan[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 19 })
          },
          "saintsCyril": {
            "name": localization.england.saintsCyril[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 14 })
          },
          "saintDavid": {
            "name": localization.england.saintDavid[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 1 })
          },
          "saintPatrick": {
            "name": localization.england.saintPatrick[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 17 })
          },
          "saintAnselmOfCanterbury": {
            "name": localization.england.saintAnselmOfCanterbury[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 21 })
          },
          "saintGeorge": {
            "name": localization.england.saintGeorge[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 23 })
          },
          "saintAdalbert": {
            "name": localization.england.saintAdalbert[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 24 })
          },
          "saintCatherineOfSiena": {
            "name": localization.england.saintCatherineOfSiena[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 29 })
          },
          "TheEnglishMartyrs": {
            "name": localization.england.TheEnglishMartyrs[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 4 })
          },
          "saintDunstan": {
            "name": localization.england.saintDunstan[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 19 })
          },
          "saintBedeTheVenerable": {
            "name": localization.england.saintBedeTheVenerable[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 25 })
          },
          "saintAugustineOfCanterbury": {
            "name": localization.england.saintAugustineOfCanterbury[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 27 })
          },
          "saintBoniface": {
            "name": localization.england.saintBoniface[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 5 })
          },
          "saintColumba": {
            "name": localization.england.saintColumba[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 9 })
          },
          "saintRichardOfChichester": {
            "name": localization.england.saintRichardOfChichester[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 16 })
          },
          "saintAlban": {
            "name": localization.england.saintAlban[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 20 })
          },
          "saintsJohnFisherAndThomasMore": {
            "name": localization.england.saintsJohnFisherAndThomasMore[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 22 })
          },
          "saintEtheldreda": {
            "name": localization.england.saintEtheldreda[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 23 })
          },
          "saintOliverPlunket": {
            "name": localization.england.saintOliverPlunket[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 1 })
          },
          "saintBenedict": {
            "name": localization.england.saintBenedict[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 11 })
          },
          "saintBridget": {
            "name": localization.england.saintBridget[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 23 })
          },
          "saintTeresaBenedictaOfTheCross": {
            "name": localization.england.saintTeresaBenedictaOfTheCross[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 9 })
          },
          "blessedDominicOfTheMotherOfGodBarberi": {
            "name": localization.england.blessedDominicOfTheMotherOfGodBarberi[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 26 })
          },
          "saintsMargaretClitherow": {
            "name": localization.england.saintsMargaretClitherow[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 30 })
          },
          "saintAidan": {
            "name": localization.england.saintAidan[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 31 })
          },
          "saintGregoryTheGreat": {
            "name": localization.england.saintGregoryTheGreat[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 3 })
          },
          "saintCuthbert": {
            "name": localization.england.saintCuthbert[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 4 })
          },
          "saintTheodoreOfCanterbury": {
            "name": localization.england.saintTheodoreOfCanterbury[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 19 })
          },
          "ourLadyOfWalsingham": {
            "name": localization.england.ourLadyOfWalsingham[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 24 })
          },
          "blessedJohnHenryNewman": {
            "name": localization.england.blessedJohnHenryNewman[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 9 })
          },
          "saintPaulinusOfYork": {
            "name": localization.england.saintPaulinusOfYork[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 10 })
          },
          "saintWilfrid": {
            "name": localization.england.saintWilfrid[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 12 })
          },
          "saintEdwardTheConfessor": {
            "name": localization.england.saintEdwardTheConfessor[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 13 })
          },
          "saintJohnPaulII": {
            "name": localization.england.saintJohnPaulII[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 22 })
          },
          "saintsChadAndCedd": {
            "name": localization.england.saintsChadAndCedd[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 26 })
          },
          "saintWinefride": {
            "name": localization.england.saintWinefride[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 3 })
          },
          "saintWillibrord": {
            "name": localization.england.saintWillibrord[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 7 })
          },
          "saintEdmundOfAbingdon": {
            "name": localization.england.saintEdmundOfAbingdon[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 16 })
          },
          "saintHilda": {
            "name": localization.england.saintHilda[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 17 })
          },
          "saintAndrew": {
            "name": localization.england.saintAndrew[locale],
            "type": "types.FEAST_APOSTLE",
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 30 })
          },
          "saintThomasBecket": {
            "name": localization.england.saintThomasBecket[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.england.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 29 })
          }
        },
        "france": {
          "saintGenevieve": {
            "name": localization.france.saintGenevieve[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.france.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 3 })
          },
          "saintRemigius": {
            "name": localization.france.saintRemigius[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.france.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 15 })
          },
          "saintsCyril": {
            "name": localization.france.saintsCyril[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.france.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 14 })
          },
          "saintBernadetteSoubirous": {
            "name": localization.france.saintBernadetteSoubirous[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.france.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 19 })
          },
          "saintCatherineOfSiena": {
            "name": localization.france.saintCatherineOfSiena[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.france.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 29 })
          },
          "saintIvo": {
            "name": localization.france.saintIvo[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.france.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 20 })
          },
          "saintJoanOfArc": {
            "name": localization.france.saintJoanOfArc[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.france.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 30 })
          },
          "saintPothinus": {
            "name": localization.france.saintPothinus[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.france.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 2 })
          },
          "saintClotilde": {
            "name": localization.france.saintClotilde[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.france.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 5 })
          },
          "saintBenedict": {
            "name": localization.france.saintBenedict[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.france.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 11 })
          },
          "saintBrigitta": {
            "name": localization.france.saintBrigitta[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.france.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 23 })
          },
          "saintTeresaBenedictaOfTheCross": {
            "name": localization.france.saintTeresaBenedictaOfTheCross[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.france.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 9 })
          },
          "assumptionOfTheBlessedVirginMary": {
            "name": localization.france.assumptionOfTheBlessedVirginMary[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.france.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 15 })
          },
          "saintCaesariusOfArles": {
            "name": localization.france.saintCaesariusOfArles[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.france.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 26 })
          },
          "saintThereseOfTheChildJesus": {
            "name": localization.france.saintThereseOfTheChildJesus[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.france.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 1 })
          },
          "saintJohnXXIII": {
            "name": localization.france.saintJohnXXIII[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.france.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 11 })
          },
          "saintJohnPaulII": {
            "name": localization.france.saintJohnPaulII[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.france.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 22 })
          }
        },
        "finland": {
          "saintHenry": {
            "name": localization.finland.saintHenry[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.finland.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 19 })
          },
          "saintsCyril": {
            "name": localization.finland.saintsCyril[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.finland.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 14 })
          },
          "saintCatherineOfSiena": {
            "name": localization.finland.saintCatherineOfSiena[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.finland.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 29 })
          },
          "saintEricIX": {
            "name": localization.finland.saintEricIX[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.finland.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 18 })
          },
          "blessedHemming": {
            "name": localization.finland.blessedHemming[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.finland.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 22 })
          },
          "saintUrsulaLedochowska": {
            "name": localization.finland.saintUrsulaLedochowska[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.finland.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 29 })
          },
          "blessedElisabethHesselbald": {
            "name": localization.finland.blessedElisabethHesselbald[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.finland.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 4 })
          },
          "saintJosemariaEscrivadeBalaguer": {
            "name": localization.finland.saintJosemariaEscrivadeBalaguer[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.finland.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 26 })
          },
          "saintCanute": {
            "name": localization.finland.saintCanute[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.finland.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 10 })
          },
          "saintBenedict": {
            "name": localization.finland.saintBenedict[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.finland.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 11 })
          },
          "saintThorlac": {
            "name": localization.finland.saintThorlac[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.finland.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 20 })
          },
          "saintBrigitta": {
            "name": localization.finland.saintBrigitta[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.finland.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 23 })
          },
          "saintOlafII": {
            "name": localization.finland.saintOlafII[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.finland.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 29 })
          },
          "saintTeresaBenedictaOfTheCross": {
            "name": localization.finland.saintTeresaBenedictaOfTheCross[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.finland.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 9 })
          },
          "blessedNicolasSteno": {
            "name": localization.finland.blessedNicolasSteno[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.finland.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 25 })
          }
        },
        "germany": {
          "saintJohnNeumann": {
            "name": localization.germany.saintJohnNeumann[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 5 })
          },
          "saintValentineOfRaetia": {
            "name": localization.germany.saintValentineOfRaetia[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 7 })
          },
          "saintSeverinusOfNOricum": {
            "name": localization.germany.saintSeverinusOfNOricum[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 8 })
          },
          "saintMeinrad": {
            "name": localization.germany.saintMeinrad[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 21 })
          },
          "blessedHenrySuso": {
            "name": localization.germany.blessedHenrySuso[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 23 })
          },
          "saintRabanusMaurus": {
            "name": localization.germany.saintRabanusMaurus[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 4 })
          },
          "saintsCyril": {
            "name": localization.germany.saintsCyril[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 14 })
          },
          "saintMatthias": {
            "name": localization.germany.saintMatthias[locale],
            "type": "types.FEAST_APOSTLE",
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 24 })
          },
          "saintWalburga": {
            "name": localization.germany.saintWalburga[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 25 })
          },
          "saintFridolinOfSackingen": {
            "name": localization.germany.saintFridolinOfSackingen[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 6 })
          },
          "saintBrunoOfQuerfurt": {
            "name": localization.germany.saintBrunoOfQuerfurt[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 9 })
          },
          "saintMatilda": {
            "name": localization.germany.saintMatilda[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 14 })
          },
          "saintClementMaryHOfbauer": {
            "name": localization.germany.saintClementMaryHofbauer[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 15 })
          },
          "saintGertrudeOfNivelles": {
            "name": localization.germany.saintGertrudeOfNivelles[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 17 })
          },
          "saintLudger": {
            "name": localization.germany.saintLudger[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 26 })
          },
          "saintLeoIX": {
            "name": localization.germany.saintLeoIX[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 19 })
          },
          "saintConradOfParzham": {
            "name": localization.germany.saintConradOfParzham[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 21 })
          },
          "saintPeterCanisius": {
            "name": localization.germany.saintPeterCanisius[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 27 })
          },
          "saintCatherineOfSiena": {
            "name": localization.germany.saintCatherineOfSiena[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 29 })
          },
          "saintFlorianAndHisCompanions": {
            "name": localization.germany.saintFlorianAndHisCompanions[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 4 })
          },
          "saintGotthard": {
            "name": localization.germany.saintGotthard[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 5 })
          },
          "saintJohnNepomucene": {
            "name": localization.germany.saintJohnNepomucene[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 16 })
          },
          "saintHermannJoseph": {
            "name": localization.germany.saintHermannJoseph[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 21 })
          },
          "saintVitus": {
            "name": localization.germany.saintVitus[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 15 })
          },
          "saintBennoOfMeissen": {
            "name": localization.germany.saintBennoOfMeissen[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 16 })
          },
          "saintHemmaOfGurk": {
            "name": localization.germany.saintHemmaOfGurk[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 27 })
          },
          "saintOttoOfBamberg": {
            "name": localization.germany.saintOttoOfBamberg[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 30 })
          },
          "visitationOfTheBlessedVirginMary": {
            "name": localization.germany.visitationOfTheBlessedVirginMary[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 2 })
          },
          "saintUlrichOfAugsburg": {
            "name": localization.germany.saintUlrichOfAugsburg[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 4 })
          },
          "saintWillibald": {
            "name": localization.germany.saintWillibald[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 7 })
          },
          "saintKilian": {
            "name": localization.germany.saintKilian[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 8 })
          },
          "saintsCanute": {
            "name": localization.germany.saintsCanute[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 10 })
          },
          "saintBenedict": {
            "name": localization.germany.saintBenedict[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 11 })
          },
          "saintsHenryAndCunigunde": {
            "name": localization.germany.saintsHenryAndCunigunde[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 13 })
          },
          "saintMargaretOfAntioch": {
            "name": localization.germany.saintMargaretOfAntioch[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 20 })
          },
          "saintBrigitta": {
            "name": localization.germany.saintBrigitta[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 23 })
          },
          "saintChristopher": {
            "name": localization.germany.saintChristopher[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 24 })
          },
          "saintTeresaBenedictaOfTheCross": {
            "name": localization.germany.saintTeresaBenedictaOfTheCross[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 9 })
          },
          "saintPaulinusOfTrier": {
            "name": localization.germany.saintPaulinusOfTrier[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 31 })
          },
          "saintHildegardOfBingen": {
            "name": localization.germany.saintHildegardOfBingen[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 17 })
          },
          "saintLambertOfMaastricht": {
            "name": localization.germany.saintLambertOfMaastricht[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 18 })
          },
          "saintMauriceAndCompanions": {
            "name": localization.germany.saintMauriceAndCompanions[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 22 })
          },
          "saintsRupertAndVirgiliusOfSalzburg": {
            "name": localization.germany.saintsRupertAndVirgiliusOfSalzburg[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 24 })
          },
          "saintNicholasOfFlue": {
            "name": localization.germany.saintNicholasOfFlue[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 25 })
          },
          "saintLeoba": {
            "name": localization.germany.saintLeoba[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 28 })
          },
          "saintGall": {
            "name": localization.germany.saintGall[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 16 })
          },
          "saintWendelin": {
            "name": localization.germany.saintWendelin[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 20 })
          },
          "saintUrsulaAndCompanions": {
            "name": localization.germany.saintUrsulaAndCompanions[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 21 })
          },
          "saintWolfgangOfRegensburg": {
            "name": localization.germany.saintWolfgangOfRegensburg[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 31 })
          },
          "saintHubertOfLiege": {
            "name": localization.germany.saintHubertOfLiege[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 3 })
          },
          "saintLeonardOfNoblac": {
            "name": localization.germany.saintLeonardOfNoblac[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 6 })
          },
          "saintWillibrord": {
            "name": localization.germany.saintWillibrord[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 7 })
          },
          "saintLeopoldIII": {
            "name": localization.germany.saintLeopoldIII[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 15 })
          },
          "saintGertrudeTheGreat": {
            "name": localization.germany.saintGertrudeTheGreat[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 17 })
          },
          "saintElizabethOfHungary": {
            "name": localization.germany.saintElizabethOfHungary[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 19 })
          },
          "saintCorbinian": {
            "name": localization.germany.saintCorbinian[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 20 })
          },
          "saintsConradAndGebhardOfConstance": {
            "name": localization.germany.saintsConradAndGebhardOfConstance[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 26 })
          },
          "saintLuciusOfChur": {
            "name": localization.germany.saintLuciusOfChur[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 2 })
          },
          "saintBarbara": {
            "name": localization.germany.saintBarbara[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 4 })
          },
          "saintAnnoII": {
            "name": localization.germany.saintAnnoII[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 5 })
          },
          "saintOdileOfAlsace": {
            "name": localization.germany.saintOdileOfAlsace[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.germany.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 13 })
          }
        },
        "greece": {
          "saintsCyril": {
            "name": localization.greece.saintsCyril[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.greece.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 14 })
          },
          "saintCyrilOfJerusalem": {
            "name": localization.greece.saintCyrilOfJerusalem[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.greece.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 18 })
          },
          "saintAdalbert": {
            "name": localization.greece.saintAdalbert[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.greece.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 22 })
          },
          "saintGeorge": {
            "name": localization.greece.saintGeorge[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.greece.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 23 })
          },
          "saintCatherineOfSiena": {
            "name": localization.greece.saintCatherineOfSiena[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.greece.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 29 })
          },
          "saintIrene": {
            "name": localization.greece.saintIrene[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.greece.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 5 })
          },
          "blessedVirginMary": {
            "name": localization.greece.blessedVirginMary[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.greece.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 13 })
          },
          "ourLadyOfFatima": {
            "name": localization.greece.ourLadyOfFatima[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.greece.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 15 })
          },
          "saintCyrilOfAlexAndria": {
            "name": localization.greece.saintCyrilOfAlexAndria[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.greece.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 27 })
          },
          "saintBenedict": {
            "name": localization.greece.saintBenedict[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.greece.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 11 })
          },
          "saintMarina": {
            "name": localization.greece.saintMarina[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.greece.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 17 })
          },
          "saintBirgitta": {
            "name": localization.greece.saintBirgitta[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.greece.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 23 })
          },
          "saintPantaleon": {
            "name": localization.greece.saintPantaleon[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.greece.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 27 })
          },
          "saintLydiaOfPhilippi": {
            "name": localization.greece.saintLydiaOfPhilippi[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.greece.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 3 })
          },
          "saintTeresaBenedictaOfTheCross": {
            "name": localization.greece.saintTeresaBenedictaOfTheCross[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.greece.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 9 })
          },
          "saintsCosmasAndDamian": {
            "name": localization.greece.saintsCosmasAndDamian[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.greece.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 26 })
          },
          "saintDionysiusTheAreopagite": {
            "name": localization.greece.saintDionysiusTheAreopagite[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.greece.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 3 })
          },
          "saintDemetrius": {
            "name": localization.greece.saintDemetrius[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.greece.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 26 })
          },
          "presentationOfTheBlessedVirginMary": {
            "name": localization.greece.presentationOfTheBlessedVirginMary[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.greece.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 21 })
          },
          "saintJohnDamasceneOrSaintBarbara": {
            "name": localization.greece.saintJohnDamasceneOrSaintBarbara[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.greece.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 4 })
          },
          "saintNicholas": {
            "name": localization.greece.saintNicholas[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.greece.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 6 })
          },
          "saintSpyridon": {
            "name": localization.greece.saintSpyridon[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.greece.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 12 })
          }
        },
        "hungary": {
          "saintMargaretOfHungary": {
            "name": localization.hungary.saintMargaretOfHungary[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 18 })
          },
          "saintsCyril": {
            "name": localization.hungary.saintsCyril[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 14 })
          },
          "saintMatthias": {
            "name": localization.hungary.saintMatthias[locale],
            "type": "types.FEAST_APOSTLE",
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 24 })
          },
          "saintAdalbert": {
            "name": localization.hungary.saintAdalbert[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 23 })
          },
          "saintCatherineOfSiena": {
            "name": localization.hungary.saintCatherineOfSiena[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 29 })
          },
          "saintFlorian": {
            "name": localization.hungary.saintFlorian[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 4 })
          },
          "blessedGisela": {
            "name": localization.hungary.blessedGisela[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 7 })
          },
          "blessedSaraSalkahazi": {
            "name": localization.hungary.blessedSaraSalkahazi[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 11 })
          },
          "saintJohnNepomucene": {
            "name": localization.hungary.saintJohnNepomucene[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 16 })
          },
          "blessedVilmosApor": {
            "name": localization.hungary.blessedVilmosApor[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 23 })
          },
          "ourLadyHelpOfChristians": {
            "name": localization.hungary.ourLadyHelpOfChristians[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 24 })
          },
          "transferOfTheRelicsOfSaintStephen": {
            "name": localization.hungary.transferOfTheRelicsOfSaintStephen[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 30 })
          },
          "blessedIstvanSandor": {
            "name": localization.hungary.blessedIstvanSandor[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 8 })
          },
          "saintLadislaus": {
            "name": localization.hungary.saintLadislaus[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 27 })
          },
          "visitationOfTheBlessedVirginMary": {
            "name": localization.hungary.visitationOfTheBlessedVirginMary[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 2 })
          },
          "saintBenedict": {
            "name": localization.hungary.saintBenedict[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 11 })
          },
          "saintsAndrewZoerardusAndBenedict": {
            "name": localization.hungary.saintsAndrewZoerardusAndBenedict[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 17 })
          },
          "saintBrigitta": {
            "name": localization.hungary.saintBrigitta[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 23 })
          },
          "saintKinga": {
            "name": localization.hungary.saintKinga[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 24 })
          },
          "saintTeresaBenedictaOfTheCross": {
            "name": localization.hungary.saintTeresaBenedictaOfTheCross[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 9 })
          },
          "blessedInnocentXI": {
            "name": localization.hungary.blessedInnocentXI[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 13 })
          },
          "saintStephenOfHungary": {
            "name": localization.hungary.saintStephenOfHungary[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 20 })
          },
          "blessedTeresaOfCalcutta": {
            "name": localization.hungary.blessedTeresaOfCalcutta[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 5 })
          },
          "saintsMarkoKrizinAndStephenPongrac": {
            "name": localization.hungary.saintsMarkoKrizinAndStephenPongrac[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 7 })
          },
          "saintGerard": {
            "name": localization.hungary.saintGerard[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 24 })
          },
          "ourLadyOfHungary": {
            "name": localization.hungary.ourLadyOfHungary[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 8 })
          },
          "saintJohnXXIII": {
            "name": localization.hungary.saintJohnXXIII[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 11 })
          },
          "saintJohnPaulII": {
            "name": localization.hungary.saintJohnPaulII[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 22 })
          },
          "saintMaurus": {
            "name": localization.hungary.saintMaurus[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 25 })
          },
          "blessedTheodoreRomzha": {
            "name": localization.hungary.blessedTheodoreRomzha[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 31 })
          },
          "saintEmeric": {
            "name": localization.hungary.saintEmeric[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 4 })
          },
          "hungarianSaintsAndBlesseds": {
            "name": localization.hungary.hungarianSaintsAndBlesseds[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.hungary.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 13 })
          }
        },
        "india": {
          "blessedKuriakoseEliasChavara": {
            "name": localization.india.blessedKuriakoseEliasChavara[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.india.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 3 })
          },
          "blessedJosephVaz": {
            "name": localization.india.blessedJosephVaz[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.india.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 16 })
          },
          "saintJohndeBrito": {
            "name": localization.india.saintJohndeBrito[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.india.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 4 })
          },
          "saintGonsaloGarcia": {
            "name": localization.india.saintGonsaloGarcia[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.india.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 6 })
          },
          "blessedMariaTheresaChiramel": {
            "name": localization.india.blessedMariaTheresaChiramel[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.india.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 8 })
          },
          "saintThomasTheApostle": {
            "name": localization.india.saintThomasTheApostle[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.india.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 3 })
          },
          "saintAlphonsaOfTheImmaculateConception": {
            "name": localization.india.saintAlphonsaOfTheImmaculateConception[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.india.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 28 })
          },
          "blessedTeresaOfCalcutta": {
            "name": localization.india.blessedTeresaOfCalcutta[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.india.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 5 })
          },
          "saintFrancisXavier": {
            "name": localization.india.saintFrancisXavier[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.india.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 3 })
          }
        },
        "ireland": {
          "saintMunchin": {
            "name": localization.ireland.saintMunchin[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 3 })
          },
          "saintIta": {
            "name": localization.ireland.saintIta[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 15 })
          },
          "saintFursa": {
            "name": localization.ireland.saintFursa[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 16 })
          },
          "saintAidan": {
            "name": localization.ireland.saintAidan[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 30 })
          },
          "saintBrigid": {
            "name": localization.ireland.saintBrigid[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 1 })
          },
          "saintMel": {
            "name": localization.ireland.saintMel[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 7 })
          },
          "saintGobnait": {
            "name": localization.ireland.saintGobnait[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 11 })
          },
          "saintsCyril": {
            "name": localization.ireland.saintsCyril[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 14 })
          },
          "saintFintan": {
            "name": localization.ireland.saintFintan[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 17 })
          },
          "saintDavid": {
            "name": localization.ireland.saintDavid[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 1 })
          },
          "saintKieran": {
            "name": localization.ireland.saintKieran[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 5 })
          },
          "saintSenan": {
            "name": localization.ireland.saintSenan[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 8 })
          },
          "saintAengus": {
            "name": localization.ireland.saintAengus[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 11 })
          },
          "saintPatrick": {
            "name": localization.ireland.saintPatrick[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 17 })
          },
          "saintEnda": {
            "name": localization.ireland.saintEnda[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 21 })
          },
          "saintMacartan": {
            "name": localization.ireland.saintMacartan[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 24 })
          },
          "saintCeallach": {
            "name": localization.ireland.saintCeallach[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 1 })
          },
          "saintMolaise": {
            "name": localization.ireland.saintMolaise[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 18 })
          },
          "saintAsicus": {
            "name": localization.ireland.saintAsicus[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 27 })
          },
          "saintCatherineOfSiena": {
            "name": localization.ireland.saintCatherineOfSiena[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 29 })
          },
          "saintConleth": {
            "name": localization.ireland.saintConleth[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 4 })
          },
          "blessedEdmundIgnatiusRice": {
            "name": localization.ireland.blessedEdmundIgnatiusRice[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 5 })
          },
          "saintComgall": {
            "name": localization.ireland.saintComgall[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 10 })
          },
          "saintCarthage": {
            "name": localization.ireland.saintCarthage[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 15 })
          },
          "saintBrendan": {
            "name": localization.ireland.saintBrendan[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 16 })
          },
          "saintKevin": {
            "name": localization.ireland.saintKevin[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 3 })
          },
          "saintJarlath": {
            "name": localization.ireland.saintJarlath[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 6 })
          },
          "saintColmanOfDromore": {
            "name": localization.ireland.saintColmanOfDromore[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 7 })
          },
          "saintColumba": {
            "name": localization.ireland.saintColumba[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 9 })
          },
          "saintDavnet": {
            "name": localization.ireland.saintDavnet[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 14 })
          },
          "blessedIrishMartyrs": {
            "name": localization.ireland.blessedIrishMartyrs[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 20 })
          },
          "saintOliverPlunkett": {
            "name": localization.ireland.saintOliverPlunkett[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 1 })
          },
          "saintMoninne": {
            "name": localization.ireland.saintMoninne[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 6 })
          },
          "saintMaelruain": {
            "name": localization.ireland.saintMaelruain[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 7 })
          },
          "saintKillian": {
            "name": localization.ireland.saintKillian[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 8 })
          },
          "saintBenedict": {
            "name": localization.ireland.saintBenedict[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 11 })
          },
          "saintBirgitta": {
            "name": localization.ireland.saintBirgitta[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 23 })
          },
          "saintDeclan": {
            "name": localization.ireland.saintDeclan[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 24 })
          },
          "saintTeresaBenedictaOfTheCross": {
            "name": localization.ireland.saintTeresaBenedictaOfTheCross[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 9 })
          },
          "saintMuiredach": {
            "name": localization.ireland.saintMuiredach[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 12 })
          },
          "saintFachtna": {
            "name": localization.ireland.saintFachtna[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 13 })
          },
          "ourLadyOfKnock": {
            "name": localization.ireland.ourLadyOfKnock[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 17 })
          },
          "saintEugene": {
            "name": localization.ireland.saintEugene[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 23 })
          },
          "saintFiacre": {
            "name": localization.ireland.saintFiacre[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 30 })
          },
          "saintAidanOfLindisfarne": {
            "name": localization.ireland.saintAidanOfLindisfarne[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 31 })
          },
          "saintMacNissi": {
            "name": localization.ireland.saintMacNissi[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 4 })
          },
          "saintCiaran": {
            "name": localization.ireland.saintCiaran[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 9 })
          },
          "saintAilbe": {
            "name": localization.ireland.saintAilbe[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 12 })
          },
          "saintPioOfPietralcina": {
            "name": localization.ireland.saintPioOfPietralcina[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 23 })
          },
          "saintFinbarr": {
            "name": localization.ireland.saintFinbarr[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 25 })
          },
          "blessedColumbaMarmion": {
            "name": localization.ireland.blessedColumbaMarmion[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 3 })
          },
          "blessedJohnHenryNewman": {
            "name": localization.ireland.blessedJohnHenryNewman[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 9 })
          },
          "saintCanice": {
            "name": localization.ireland.saintCanice[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 11 })
          },
          "saintGall": {
            "name": localization.ireland.saintGall[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 16 })
          },
          "saintOtteran": {
            "name": localization.ireland.saintOtteran[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 27 })
          },
          "saintColmanOfKilmacduagh": {
            "name": localization.ireland.saintColmanOfKilmacduagh[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 29 })
          },
          "saintMalachy": {
            "name": localization.ireland.saintMalachy[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 3 })
          },
          "allSaintsOfIreland": {
            "name": localization.ireland.allSaintsOfIreland[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 6 })
          },
          "saintWillibrord": {
            "name": localization.ireland.saintWillibrord[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 7 })
          },
          "saintLaurenceOToole": {
            "name": localization.ireland.saintLaurenceOToole[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 14 })
          },
          "saintColumban": {
            "name": localization.ireland.saintColumban[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 23 })
          },
          "saintColmanOfCloyne": {
            "name": localization.ireland.saintColmanOfCloyne[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 25 })
          },
          "saintFergal": {
            "name": localization.ireland.saintFergal[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 27 })
          },
          "saintFinnianOfClonard": {
            "name": localization.ireland.saintFinnianOfClonard[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 12 })
          },
          "saintFlannan": {
            "name": localization.ireland.saintFlannan[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 18 })
          },
          "saintFachananOfKilfenOra": {
            "name": localization.ireland.saintFachananOfKilfenOra[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ireland.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 20 })
          }
        },
        "japan": {
          "saintsPaulMikiAndCompanions": {
            "name": localization.japan.saintsPaulMikiAndCompanions[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.japan.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 6 })
          },
          "discoveryOfTheHiddenChristians": {
            "name": localization.japan.discoveryOfTheHiddenChristians[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.japan.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 17 })
          },
          "blessedPeterKibe": {
            "name": localization.japan.blessedPeterKibe[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.japan.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 1 })
          },
          "the205BlessedMartyrsOfJapan": {
            "name": localization.japan.the205BlessedMartyrsOfJapan[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.japan.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 10 })
          },
          "saintThomasRokuzayemon": {
            "name": localization.japan.saintThomasRokuzayemon[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.japan.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 28 })
          },
          "saintFrancisXavier": {
            "name": localization.japan.saintFrancisXavier[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.japan.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 3 })
          }
        },
        "lebanon": {
          "saintBarbara": {
            "name": localization.lebanon.saintBarbara[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.lebanon.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 4 })
          },
          "saintNicholas": {
            "name": localization.lebanon.saintNicholas[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.lebanon.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 6 })
          },
          "saintCharbel": {
            "name": localization.lebanon.saintCharbel[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.lebanon.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 24 })
          },
          "saintMaroun": {
            "name": localization.lebanon.saintMaroun[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.lebanon.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 9 })
          },
          "saintRafqa": {
            "name": localization.lebanon.saintRafqa[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.lebanon.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 23 })
          },
          "saintGeorge": {
            "name": localization.lebanon.saintGeorge[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.lebanon.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 23 })
          },
          "ourLadyOfLebanon": {
            "name": localization.lebanon.ourLadyOfLebanon[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.lebanon.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 1 })
          }
        },
        "lithuania": {
          "blessedJerzyMatulewicz": {
            "name": localization.lithuania.blessedJerzyMatulewicz[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.lithuania.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 27 })
          },
          "saintsCyril": {
            "name": localization.lithuania.saintsCyril[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.lithuania.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 14 })
          },
          "saintCasimir": {
            "name": localization.lithuania.saintCasimir[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.lithuania.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 4 })
          },
          "saintBrunoBonifaceOfQuerfurt": {
            "name": localization.lithuania.saintBrunoBonifaceOfQuerfurt[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.lithuania.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 9 })
          },
          "saintAdalbert": {
            "name": localization.lithuania.saintAdalbert[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.lithuania.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 23 })
          },
          "saintCatherineOfSiena": {
            "name": localization.lithuania.saintCatherineOfSiena[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.lithuania.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 29 })
          },
          "saintAndrewBobola": {
            "name": localization.lithuania.saintAndrewBobola[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.lithuania.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 16 })
          },
          "ourLadyMotherOfMercy": {
            "name": localization.lithuania.ourLadyMotherOfMercy[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.lithuania.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 16 })
          },
          "saintBenedict": {
            "name": localization.lithuania.saintBenedict[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.lithuania.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 11 })
          },
          "saintBirgitta": {
            "name": localization.lithuania.saintBirgitta[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.lithuania.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 23 })
          },
          "saintTeresaBenedictaOfTheCross": {
            "name": localization.lithuania.saintTeresaBenedictaOfTheCross[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.lithuania.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 9 })
          },
          "saintRocco": {
            "name": localization.lithuania.saintRocco[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.lithuania.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 16 })
          },
          "saintHyacinth": {
            "name": localization.lithuania.saintHyacinth[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.lithuania.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 17 })
          },
          "birthOfTheBlessedVirginMary": {
            "name": localization.lithuania.birthOfTheBlessedVirginMary[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.lithuania.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 8 })
          },
          "saintFaustinaKowalska": {
            "name": localization.lithuania.saintFaustinaKowalska[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.lithuania.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 5 })
          }
        },
        "malta": {
          "saintPublius": {
            "name": localization.malta.saintPublius[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.malta.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 22 })
          },
          "shipwreckOfSaintPaul": {
            "name": localization.malta.shipwreckOfSaintPaul[locale],
            "type": "types.FEAST_APOSTLE",
            "data": {
              "nationalCalendar": calendars.malta.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 10 })
          },
          "saintsCyril": {
            "name": localization.malta.saintsCyril[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.malta.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 14 })
          },
          "blessedMariaAdeodataPisani": {
            "name": localization.malta.blessedMariaAdeodataPisani[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.malta.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 25 })
          },
          "ourLadyOfSorrows": {
            "name": localization.malta.ourLadyOfSorrows[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.malta.key
            },
            "moment": moment.utc( movableSolemnities.palmSunday.moment ).subtract( 2, 'days' )
          },
          "saintCatherineOfSiena": {
            "name": localization.malta.saintCatherineOfSiena[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.malta.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 29 })
          },
          "saintPiusV": {
            "name": localization.malta.saintPiusV[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.malta.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 30 })
          },
          "saintGeorgePreca": {
            "name": localization.malta.saintGeorgePreca[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.malta.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 9 })
          },
          "blessedNazjuFalzon": {
            "name": localization.malta.blessedNazjuFalzon[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.malta.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 1 })
          },
          "saintBenedict": {
            "name": localization.malta.saintBenedict[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.malta.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 11 })
          },
          "ourLadyOfMountCarmel": {
            "name": localization.malta.ourLadyOfMountCarmel[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.malta.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 16 })
          },
          "saintBirgitta": {
            "name": localization.malta.saintBirgitta[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.malta.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 23 })
          },
          "saintTeresaBenedictaOfTheCross": {
            "name": localization.malta.saintTeresaBenedictaOfTheCross[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.malta.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 9 })
          },
          "birthOfTheBlessedVirginMary": {
            "name": localization.malta.birthOfTheBlessedVirginMary[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.malta.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 8 })
          },
          "saintCaTherineOfAlexAndria": {
            "name": localization.malta.saintCaTherineOfAlexAndria[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.malta.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 25 })
          }
        },
        "mexico": {
          "saintFelipedeJesus": {
            "name": localization.mexico.saintFelipedeJesus[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.mexico.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 22 })
          },
          "blessedSebastiAndeAparicio": {
            "name": localization.mexico.blessedSebastiAndeAparicio[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.mexico.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 25 })
          },
          "saintCristobalMagallanesAndCompanions": {
            "name": localization.mexico.saintCristobalMagallanesAndCompanions[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.mexico.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 21 })
          },
          "saintMariadeJesusSacramentadoVenegas": {
            "name": localization.mexico.saintMariadeJesusSacramentadoVenegas[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.mexico.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 30 })
          },
          "blessedBartolomeLaurel": {
            "name": localization.mexico.blessedBartolomeLaurel[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.mexico.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 16 })
          },
          "blessedsPedroZunigaAndLuisFlOres": {
            "name": localization.mexico.blessedsPedroZunigaAndLuisFlOres[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.mexico.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 16 })
          },
          "blessedJuniperoSerra": {
            "name": localization.mexico.blessedJuniperoSerra[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.mexico.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 26 })
          },
          "saintJoseMariadeYermo": {
            "name": localization.mexico.saintJoseMariadeYermo[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.mexico.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 19 })
          },
          "saintRafaelGuizaryValencia": {
            "name": localization.mexico.saintRafaelGuizaryValencia[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.mexico.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 24 })
          },
          "blessedMiguelAgustinPro": {
            "name": localization.mexico.blessedMiguelAgustinPro[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.mexico.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 23 })
          },
          "saintJuanDiego": {
            "name": localization.mexico.saintJuanDiego[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.mexico.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 9 })
          },
          "ourLadyOfGuadalupe": {
            "name": localization.mexico.ourLadyOfGuadalupe[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.mexico.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 12 })
          },
          "ourLordJesusChrist": {
            "name": localization.mexico.ourLordJesusChrist[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.mexico.key
            },
            "moment": moment.utc( movableSolemnities.pentecostSunday.moment ).add( 4, 'days' )
          }
        },
        "newZealand": {
          "waitangiDay": {
            "name": localization.newZealand.waitangiDay[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.newZealand.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 6 })
          },
          "saintPaulMikiAndCompanions": {
            "name": localization.newZealand.saintPaulMikiAndCompanions[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.newZealand.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 7 })
          },
          "saintPatrick": {
            "name": localization.newZealand.saintPatrick[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.newZealand.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 17 })
          },
          "saintMark": {
            "name": localization.newZealand.saintMark[locale],
            "type": "types.FEAST_APOSTLE",
            "data": {
              "nationalCalendar": calendars.newZealand.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 26 })
          },
          "saintLouisGrignondeMontfort": {
            "name": localization.newZealand.saintLouisGrignondeMontfort[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.newZealand.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 27 })
          },
          "saintPeterChanel": {
            "name": localization.newZealand.saintPeterChanel[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.newZealand.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 28 })
          },
          "ourLadyHelpOfChristians": {
            "name": localization.newZealand.ourLadyHelpOfChristians[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.newZealand.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 24 })
          },
          "saintMarcellinChampagnat": {
            "name": localization.newZealand.saintMarcellinChampagnat[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.newZealand.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 6 })
          },
          "saintDominic": {
            "name": localization.newZealand.saintDominic[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.newZealand.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 7 })
          },
          "saintMaryMacKillop": {
            "name": localization.newZealand.saintMaryMacKillop[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.newZealand.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 8 })
          }
        },
        "norway": {
          "saintThorfinn": {
            "name": localization.norway.saintThorfinn[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.norway.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 8 })
          },
          "saintHenry": {
            "name": localization.norway.saintHenry[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.norway.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 19 })
          },
          "saintEysteinn": {
            "name": localization.norway.saintEysteinn[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.norway.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 26 })
          },
          "saintsCyril": {
            "name": localization.norway.saintsCyril[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.norway.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 14 })
          },
          "saintMagnus": {
            "name": localization.norway.saintMagnus[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.norway.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 16 })
          },
          "saintCatherineOfSiena": {
            "name": localization.norway.saintCatherineOfSiena[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.norway.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 29 })
          },
          "saintEricIX": {
            "name": localization.norway.saintEricIX[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.norway.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 18 })
          },
          "saintSunniva": {
            "name": localization.norway.saintSunniva[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.norway.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 8 })
          },
          "saintCanute": {
            "name": localization.norway.saintCanute[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.norway.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 10 })
          },
          "saintBenedict": {
            "name": localization.norway.saintBenedict[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.norway.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 11 })
          },
          "saintSwithun": {
            "name": localization.norway.saintSwithun[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.norway.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 15 })
          },
          "saintThorlac": {
            "name": localization.norway.saintThorlac[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.norway.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 20 })
          },
          "saintBrigitta": {
            "name": localization.norway.saintBrigitta[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.norway.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 23 })
          },
          "saintOlafII": {
            "name": localization.norway.saintOlafII[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.norway.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 29 })
          },
          "saintTeresaBenedictaOfTheCross": {
            "name": localization.norway.saintTeresaBenedictaOfTheCross[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.norway.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 9 })
          },
          "blessedNicolasSteno": {
            "name": localization.norway.blessedNicolasSteno[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.norway.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 25 })
          }
        },
        "peru": {
          "findingOfTheHolyCross": {
            "name": localization.peru.findingOfTheHolyCross[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.peru.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 3 })
          },
          "ourLadyHelpOfChristians": {
            "name": localization.peru.ourLadyHelpOfChristians[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.peru.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 24 })
          },
          "saintMarianadeJesusDeParedes": {
            "name": localization.peru.saintMarianadeJesusDeParedes[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.peru.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 26 })
          },
          "saintFrancisSolanus": {
            "name": localization.peru.saintFrancisSolanus[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.peru.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 14 })
          },
          "ourLadyOfPeace": {
            "name": localization.peru.ourLadyOfPeace[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.peru.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 28 })
          },
          "saintRoseOfLima": {
            "name": localization.peru.saintRoseOfLima[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.peru.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 23 })
          },
          "saintJohnMacias": {
            "name": localization.peru.saintJohnMacias[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.peru.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 18 })
          },
          "ourLadyOfMercy": {
            "name": localization.peru.ourLadyOfMercy[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.peru.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 24 })
          },
          "ourLordOfMiracles": {
            "name": localization.peru.ourLordOfMiracles[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.peru.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 28 })
          },
          "saintMartindePorres": {
            "name": localization.peru.saintMartindePorres[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.peru.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 3 })
          },
          "ourLadyOfGuadalupe": {
            "name": localization.peru.ourLadyOfGuadalupe[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.peru.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 12 })
          },
          "ourLordJesusChrist": {
            "name": localization.peru.ourLordJesusChrist[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.peru.key
            },
            "moment": moment.utc( movableSolemnities.pentecostSunday.moment ).add( 4, 'days' )
          }
        },
        "philippines": {
          "santoNino": {
            "name": localization.philippines.santoNino[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.philippines.key
            }
          },
          "saintsPedroBautista": {
            "name": localization.philippines.saintsPedroBautista[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.philippines.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 6 })
          },
          "saintPedroCalungsod": {
            "name": localization.philippines.saintPedroCalungsod[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.philippines.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 2 })
          },
          "saintIsidoreTheFarmer": {
            "name": localization.philippines.saintIsidoreTheFarmer[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.philippines.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 15 })
          },
          "saintRoch": {
            "name": localization.philippines.saintRoch[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.philippines.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 16 })
          },
          "saintEzekielMoreno": {
            "name": localization.philippines.saintEzekielMoreno[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.philippines.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 19 })
          },
          "saintLorenzoRuizAndCompanions": {
            "name": localization.philippines.saintLorenzoRuizAndCompanions[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.philippines.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 28 })
          },
          "immaculateConceptionOfTheBlessedVirginMary": {
            "name": localization.philippines.immaculateConceptionOfTheBlessedVirginMary[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.philippines.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 8 })
          }
        },
        "poland": {
          "saintVincentPallotti": {
            "name": localization.poland.saintVincentPallotti[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 22 })
          },
          "blessedVincentLewoniukAndCompanions": {
            "name": localization.poland.blessedVincentLewoniukAndCompanions[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 23 })
          },
          "blessedJerzyMatulewicz": {
            "name": localization.poland.blessedJerzyMatulewicz[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 27 })
          },
          "blessedBolestawaMariaLament": {
            "name": localization.poland.blessedBolestawaMariaLament[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 29 })
          },
          "saintsCyril": {
            "name": localization.poland.saintsCyril[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 14 })
          },
          "saintCasimir": {
            "name": localization.poland.saintCasimir[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 4 })
          },
          "saintAdalbert": {
            "name": localization.poland.saintAdalbert[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 23 })
          },
          "saintCatherineOfSiena": {
            "name": localization.poland.saintCatherineOfSiena[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 29 })
          },
          "ourLadyHelpOfChristians": {
            "name": localization.poland.ourLadyHelpOfChristians[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 24 })
          },
          "saintFlorian": {
            "name": localization.poland.saintFlorian[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 4 })
          },
          "saintStanislausKazimierczyk": {
            "name": localization.poland.saintStanislausKazimierczyk[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 5 })
          },
          "saintsPhilipAndJames": {
            "name": localization.poland.saintsPhilipAndJames[locale],
            "type": "types.FEAST_APOSTLE",
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 6 })
          },
          "saintStanislaus": {
            "name": localization.poland.saintStanislaus[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 8 })
          },
          "saintAndrewBobola": {
            "name": localization.poland.saintAndrewBobola[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 16 })
          },
          "saintUrsulaLedochowska": {
            "name": localization.poland.saintUrsulaLedochowska[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 29 })
          },
          "saintJohnSarkander": {
            "name": localization.poland.saintJohnSarkander[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 30 })
          },
          "blessedBogumit": {
            "name": localization.poland.blessedBogumit[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 10 })
          },
          "blessedAntoniNowowiejski": {
            "name": localization.poland.blessedAntoniNowowiejski[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 12 })
          },
          "blessedMichaelKozal": {
            "name": localization.poland.blessedMichaelKozal[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 14 })
          },
          "blessedJolanta": {
            "name": localization.poland.blessedJolanta[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 15 })
          },
          "saintAlbertChmielowski": {
            "name": localization.poland.saintAlbertChmielowski[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 17 })
          },
          "saintZygmuntGorazdowsk": {
            "name": localization.poland.saintZygmuntGorazdowsk[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 26 })
          },
          "saintOtto": {
            "name": localization.poland.saintOtto[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 1 })
          },
          "blessedMariaTeresiaLedochowska": {
            "name": localization.poland.blessedMariaTeresiaLedochowska[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 6 })
          },
          "saintJohnOfDukla": {
            "name": localization.poland.saintJohnOfDukla[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 8 })
          },
          "saintBenedict": {
            "name": localization.poland.saintBenedict[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 11 })
          },
          "saintBrunoBonifaceOfQuerfurt": {
            "name": localization.poland.saintBrunoBonifaceOfQuerfurt[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 12 })
          },
          "saintsAndrzejSwieradAndBenedict": {
            "name": localization.poland.saintsAndrzejSwieradAndBenedict[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 13 })
          },
          "saintSimonOfLipnica": {
            "name": localization.poland.saintSimonOfLipnica[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 18 })
          },
          "blessedCzestaw": {
            "name": localization.poland.blessedCzestaw[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 20 })
          },
          "saintBridget": {
            "name": localization.poland.saintBridget[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 23 })
          },
          "saintKinga": {
            "name": localization.poland.saintKinga[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 24 })
          },
          "blessedEdmundBojanowski": {
            "name": localization.poland.blessedEdmundBojanowski[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 7 })
          },
          "saintTeresaBenedictaOfTheCross": {
            "name": localization.poland.saintTeresaBenedictaOfTheCross[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 9 })
          },
          "saintHyacinth": {
            "name": localization.poland.saintHyacinth[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 17 })
          },
          "ourLadyOfCzestochowa": {
            "name": localization.poland.ourLadyOfCzestochowa[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 26 })
          },
          "blessedBronistawa": {
            "name": localization.poland.blessedBronistawa[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 1 })
          },
          "blessedMariaStellaAndCompanions": {
            "name": localization.poland.blessedMariaStellaAndCompanions[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 4 })
          },
          "saintMelchiOrGrodziecki": {
            "name": localization.poland.saintMelchiOrGrodziecki[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 7 })
          },
          "blessedAnielaSalawa": {
            "name": localization.poland.blessedAnielaSalawa[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 9 })
          },
          "saintZygmuntSzczesnyFelinski": {
            "name": localization.poland.saintZygmuntSzczesnyFelinski[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 17 })
          },
          "saintStanislausKostka": {
            "name": localization.poland.saintStanislausKostka[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 18 })
          },
          "blessedWtadystawOfGielniow": {
            "name": localization.poland.blessedWtadystawOfGielniow[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 25 })
          },
          "saintFaustinaKowalska": {
            "name": localization.poland.saintFaustinaKowalska[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 5 })
          },
          "blessedVincentKadtubek": {
            "name": localization.poland.blessedVincentKadtubek[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 9 })
          },
          "blessedMaryAngelaTruszkowska": {
            "name": localization.poland.blessedMaryAngelaTruszkowska[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 10 })
          },
          "blessedJohnBeyzym": {
            "name": localization.poland.blessedJohnBeyzym[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 12 })
          },
          "blessedHonOratKozminski": {
            "name": localization.poland.blessedHonOratKozminski[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 13 })
          },
          "saintJohnOfKety": {
            "name": localization.poland.saintJohnOfKety[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 20 })
          },
          "blessedJakubStrzemie": {
            "name": localization.poland.blessedJakubStrzemie[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 21 })
          },
          "saintJohnPaulII": {
            "name": localization.poland.saintJohnPaulII[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 22 })
          },
          "saintJosefBilczewski": {
            "name": localization.poland.saintJosefBilczewski[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 23 })
          },
          "saintsBenedykt": {
            "name": localization.poland.saintsBenedykt[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 13 })
          },
          "blessedKarolinaKozkowna": {
            "name": localization.poland.blessedKarolinaKozkowna[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 18 })
          },
          "blessedSalome": {
            "name": localization.poland.blessedSalome[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 19 })
          },
          "saintRafatKalinowski": {
            "name": localization.poland.saintRafatKalinowski[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 20 })
          },
          "blessedMaryOfJesusTheGoodShepherd": {
            "name": localization.poland.blessedMaryOfJesusTheGoodShepherd[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 25 })
          },
          "blessedRafatChylinski": {
            "name": localization.poland.blessedRafatChylinski[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 1 })
          },
          "saintBarbara": {
            "name": localization.poland.saintBarbara[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 4 })
          },
          "maryMotherOfTheChurch": {
            "name": localization.poland.maryMotherOfTheChurch[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc( movableSolemnities.pentecostSunday.moment ).add( 1, 'days' )
          },
          "ourLordJesusChrist": {
            "name": localization.poland.ourLordJesusChrist[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.poland.key
            },
            "moment": moment.utc( movableSolemnities.pentecostSunday.moment ).add( 4, 'days' )
          }
        },
        "portugal": {
          "blessedGoncalodeAmarante": {
            "name": localization.portugal.blessedGoncalodeAmarante[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.portugal.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 11 })
          },
          "saintJohndeBrito": {
            "name": localization.portugal.saintJohndeBrito[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.portugal.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 4 })
          },
          "TheFiveWoundsOfTheLord": {
            "name": localization.portugal.TheFiveWoundsOfTheLord[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.portugal.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 7 })
          },
          "saintsCyril": {
            "name": localization.portugal.saintsCyril[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.portugal.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 14 })
          },
          "saintTheotonius": {
            "name": localization.portugal.saintTheotonius[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.portugal.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 18 })
          },
          "blessedJacintaAndFranciscoMarto": {
            "name": localization.portugal.blessedJacintaAndFranciscoMarto[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.portugal.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 20 })
          },
          "saintJohnOfGod": {
            "name": localization.portugal.saintJohnOfGod[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.portugal.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 8 })
          },
          "saintCatherineOfSiena": {
            "name": localization.portugal.saintCatherineOfSiena[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.portugal.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 29 })
          },
          "blessedJoanOfPortugal": {
            "name": localization.portugal.blessedJoanOfPortugal[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.portugal.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 12 })
          },
          "ourLadyOfFatima": {
            "name": localization.portugal.ourLadyOfFatima[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.portugal.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 13 })
          },
          "guardianAngelOfPOrtugal": {
            "name": localization.portugal.guardianAngelOfPOrtugal[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.portugal.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 10 })
          },
          "saintAnthonyOfLisbon": {
            "name": localization.portugal.saintAnthonyOfLisbon[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.portugal.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 13 })
          },
          "blessedSanchaAndMafalda": {
            "name": localization.portugal.blessedSanchaAndMafalda[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.portugal.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 20 })
          },
          "saintElizabethOfPortugal": {
            "name": localization.portugal.saintElizabethOfPortugal[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.portugal.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 4 })
          },
          "saintBenedict": {
            "name": localization.portugal.saintBenedict[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.portugal.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 11 })
          },
          "blessedInaciodeAzevedo": {
            "name": localization.portugal.blessedInaciodeAzevedo[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.portugal.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 17 })
          },
          "blessedBartholomewOfTheMartyrs": {
            "name": localization.portugal.blessedBartholomewOfTheMartyrs[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.portugal.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 18 })
          },
          "saintBrigitta": {
            "name": localization.portugal.saintBrigitta[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.portugal.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 23 })
          },
          "saintTeresaBenedictaOfTheCross": {
            "name": localization.portugal.saintTeresaBenedictaOfTheCross[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.portugal.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 9 })
          },
          "saintBeatriceOfSilva": {
            "name": localization.portugal.saintBeatriceOfSilva[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.portugal.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 1 })
          },
          "saintDenisAndCompanions": {
            "name": localization.portugal.saintDenisAndCompanions[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.portugal.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 9 })
          },
          "blessedGoncalodeLagos": {
            "name": localization.portugal.blessedGoncalodeLagos[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.portugal.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 27 })
          },
          "saintNunodeSantaMaria": {
            "name": localization.portugal.saintNunodeSantaMaria[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.portugal.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 6 })
          },
          "saintFructuosus": {
            "name": localization.portugal.saintFructuosus[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.portugal.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 5 })
          }
        },
        "puertoRico": {
          "mostHolyNameOfJesusOrOurLadyOfBethlehem": {
            "name": localization.puertoRico.mostHolyNameOfJesusOrOurLadyOfBethlehem[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.puertoRico.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 3 })
          },
          "blessedMariaDolOresRodriguezSopena": {
            "name": localization.puertoRico.blessedMariaDolOresRodriguezSopena[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.puertoRico.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 10 })
          },
          "blessedCarlosManuelRodriguez": {
            "name": localization.puertoRico.blessedCarlosManuelRodriguez[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.puertoRico.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 4 })
          },
          "ourLadyOfMountCarmel": {
            "name": localization.puertoRico.ourLadyOfMountCarmel[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.puertoRico.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 16 })
          },
          "saintTeresaOfJesusJOrnet": {
            "name": localization.puertoRico.saintTeresaOfJesusJOrnet[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.puertoRico.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 26 })
          },
          "saintRoseOfLima": {
            "name": localization.puertoRico.saintRoseOfLima[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.puertoRico.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 30 })
          },
          "blessedsCarlosSpinolaAndJeronimodeAngelis": {
            "name": localization.puertoRico.blessedsCarlosSpinolaAndJeronimodeAngelis[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.puertoRico.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 10 })
          },
          "saintSoledadTorresAcosta": {
            "name": localization.puertoRico.saintSoledadTorresAcosta[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.puertoRico.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 11 })
          },
          "ourLadyMotherOfDivineProvidence": {
            "name": localization.puertoRico.ourLadyMotherOfDivineProvidence[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.puertoRico.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 19 })
          },
          "ourLadyOfGuadalupe": {
            "name": localization.puertoRico.ourLadyOfGuadalupe[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.puertoRico.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 12 })
          },
          "maryMotherOfTheChurch": {
            "name": localization.puertoRico.maryMotherOfTheChurch[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.puertoRico.key
            },
            "moment": moment.utc( movableSolemnities.pentecostSunday.moment ).add( 1, 'days' )
          },
          "ourLordJesusChrist": {
            "name": localization.puertoRico.ourLordJesusChrist[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.puertoRico.key
            },
            "moment": moment.utc( movableSolemnities.pentecostSunday.moment ).add( 4, 'days' )
          }
        },
        "romania": {
          "saintsCyril": {
            "name": localization.romania.saintsCyril[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.romania.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 14 })
          },
          "saintJohnCassian": {
            "name": localization.romania.saintJohnCassian[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.romania.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 28 })
          },
          "saintCatherineOfSiena": {
            "name": localization.romania.saintCatherineOfSiena[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.romania.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 29 })
          },
          "blessedVladimirGhika": {
            "name": localization.romania.blessedVladimirGhika[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.romania.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 16 })
          },
          "saintBenedict": {
            "name": localization.romania.saintBenedict[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.romania.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 11 })
          },
          "saintBirgitta": {
            "name": localization.romania.saintBirgitta[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.romania.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 23 })
          },
          "saintTeresaBenedictaOfTheCross": {
            "name": localization.romania.saintTeresaBenedictaOfTheCross[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.romania.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 9 })
          }
        },
        "russia": {
          "blessedGeorgeMatulewicz": {
            "name": localization.russia.blessedGeorgeMatulewicz[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.russia.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 27 })
          },
          "blessedBolestawaMariaLament": {
            "name": localization.russia.blessedBolestawaMariaLament[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.russia.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 29 })
          },
          "saintsCyril": {
            "name": localization.russia.saintsCyril[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.russia.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 14 })
          },
          "saintCatherineOfSiena": {
            "name": localization.russia.saintCatherineOfSiena[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.russia.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 29 })
          },
          "saintGeorge": {
            "name": localization.russia.saintGeorge[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.russia.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 6 })
          },
          "saintTheodosiusOfTheCaves": {
            "name": localization.russia.saintTheodosiusOfTheCaves[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.russia.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 16 })
          },
          "ourLadyOfPerpetualHelpOrBlessedLeonidFeodorov": {
            "name": localization.russia.ourLadyOfPerpetualHelpOrBlessedLeonidFeodorov[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.russia.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 27 })
          },
          "saintBenedict": {
            "name": localization.russia.saintBenedict[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.russia.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 11 })
          },
          "saintBirgitta": {
            "name": localization.russia.saintBirgitta[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.russia.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 23 })
          },
          "saintAnthonyOfTheCaves": {
            "name": localization.russia.saintAnthonyOfTheCaves[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.russia.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 24 })
          },
          "saintOlga": {
            "name": localization.russia.saintOlga[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.russia.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 24 })
          },
          "saintVladimirTheGreat": {
            "name": localization.russia.saintVladimirTheGreat[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.russia.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 28 })
          },
          "saintsBorisAndGleb": {
            "name": localization.russia.saintsBorisAndGleb[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.russia.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 5 })
          },
          "saintTeresaBenedictaOfTheCross": {
            "name": localization.russia.saintTeresaBenedictaOfTheCross[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.russia.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 9 })
          },
          "ourLadyOfCzestochowa": {
            "name": localization.russia.ourLadyOfCzestochowa[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.russia.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 26 })
          },
          "ourLadyOfVladimir": {
            "name": localization.russia.ourLadyOfVladimir[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.russia.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 7 })
          },
          "saintFaustinaKowalska": {
            "name": localization.russia.saintFaustinaKowalska[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.russia.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 5 })
          },
          "blessedOleksiyZarytskyi": {
            "name": localization.russia.blessedOleksiyZarytskyi[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.russia.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 30 })
          },
          "ourLadyOfTheGateOfDawn": {
            "name": localization.russia.ourLadyOfTheGateOfDawn[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.russia.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 16 })
          },
          "saintRafatKalinowski": {
            "name": localization.russia.saintRafatKalinowski[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.russia.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 20 })
          },
          "saintAndrewTheApostle": {
            "name": localization.russia.saintAndrewTheApostle[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.russia.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 30 })
          },
          "saintBarbara": {
            "name": localization.russia.saintBarbara[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.russia.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 4 })
          },
          "saintNicholas": {
            "name": localization.russia.saintNicholas[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.russia.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 6 })
          }
        },
        "scotland": {
          "saintKentigern": {
            "name": localization.scotland.saintKentigern[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.scotland.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 13 })
          },
          "saintsCyril": {
            "name": localization.scotland.saintsCyril[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.scotland.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 14 })
          },
          "saintJohnOgilvie": {
            "name": localization.scotland.saintJohnOgilvie[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.scotland.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 10 })
          },
          "saintPatrick": {
            "name": localization.scotland.saintPatrick[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.scotland.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 17 })
          },
          "saintCatherineOfSiena": {
            "name": localization.scotland.saintCatherineOfSiena[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.scotland.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 29 })
          },
          "saintColumba": {
            "name": localization.scotland.saintColumba[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.scotland.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 9 })
          },
          "saintBenedict": {
            "name": localization.scotland.saintBenedict[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.scotland.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 11 })
          },
          "saintBirgitta": {
            "name": localization.scotland.saintBirgitta[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.scotland.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 23 })
          },
          "saintTeresaBenedictaOfTheCross": {
            "name": localization.scotland.saintTeresaBenedictaOfTheCross[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.scotland.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 9 })
          },
          "saintNinian": {
            "name": localization.scotland.saintNinian[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.scotland.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 16 })
          },
          "saintMargaretOfScotlAnd": {
            "name": localization.scotland.saintMargaretOfScotlAnd[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.scotland.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 16 })
          },
          "saintAndrewTheApostle": {
            "name": localization.scotland.saintAndrewTheApostle[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.scotland.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 30 })
          }
        },
        "slovakia": {
          "saintsCyril": {
            "name": localization.slovakia.saintsCyril[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.slovakia.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 14 })
          },
          "saintAdalbert": {
            "name": localization.slovakia.saintAdalbert[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.slovakia.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 23 })
          },
          "saintGeorge": {
            "name": localization.slovakia.saintGeorge[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.slovakia.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 24 })
          },
          "saintCatherineOfSiena": {
            "name": localization.slovakia.saintCatherineOfSiena[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.slovakia.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 29 })
          },
          "blessedSaraSalkahazi": {
            "name": localization.slovakia.blessedSaraSalkahazi[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.slovakia.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 11 })
          },
          "saintJohnNepomucene": {
            "name": localization.slovakia.saintJohnNepomucene[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.slovakia.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 16 })
          },
          "saintLadislaus": {
            "name": localization.slovakia.saintLadislaus[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.slovakia.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 27 })
          },
          "visitationOfTheBlessedVirginMary": {
            "name": localization.slovakia.visitationOfTheBlessedVirginMary[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.slovakia.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 2 })
          },
          "saintsCyrilAndMethodius": {
            "name": localization.slovakia.saintsCyrilAndMethodius[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.slovakia.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 5 })
          },
          "saintAnthonyZaccaria": {
            "name": localization.slovakia.saintAnthonyZaccaria[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.slovakia.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 7 })
          },
          "saintBenedict": {
            "name": localization.slovakia.saintBenedict[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.slovakia.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 11 })
          },
          "saintsAndrewZoerardusAndBenedict": {
            "name": localization.slovakia.saintsAndrewZoerardusAndBenedict[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.slovakia.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 17 })
          },
          "saintBirgitta": {
            "name": localization.slovakia.saintBirgitta[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.slovakia.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 23 })
          },
          "saintGorazdAndCompanions": {
            "name": localization.slovakia.saintGorazdAndCompanions[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.slovakia.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 27 })
          },
          "blessedZdenkaSchelingova": {
            "name": localization.slovakia.blessedZdenkaSchelingova[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.slovakia.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 30 })
          },
          "saintTeresaBenedictaOfTheCross": {
            "name": localization.slovakia.saintTeresaBenedictaOfTheCross[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.slovakia.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 9 })
          },
          "saintsMarkoKrizin": {
            "name": localization.slovakia.saintsMarkoKrizin[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.slovakia.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 7 })
          },
          "ourLadyOfSorrows": {
            "name": localization.slovakia.ourLadyOfSorrows[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.slovakia.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 15 })
          },
          "saintEmeric": {
            "name": localization.slovakia.saintEmeric[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.slovakia.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 5 })
          },
          "ourLordJesusChrist": {
            "name": localization.slovakia.ourLordJesusChrist[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.slovakia.key
            },
            "moment": moment.utc( movableSolemnities.pentecostSunday.moment ).add( 4, 'days' )
          }
        },
        "spain": {
          "saintEulogiusOfCordoba": {
            "name": localization.spain.saintEulogiusOfCordoba[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 9 })
          },
          "saintsFructuosus": {
            "name": localization.spain.saintsFructuosus[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 20 })
          },
          "saintVincent": {
            "name": localization.spain.saintVincent[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 22 })
          },
          "saintIldephonsusOfToledo": {
            "name": localization.spain.saintIldephonsusOfToledo[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 23 })
          },
          "saintsCyril": {
            "name": localization.spain.saintsCyril[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 14 })
          },
          "saintHermenegild": {
            "name": localization.spain.saintHermenegild[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 13 })
          },
          "saintIsidoreOfSeville": {
            "name": localization.spain.saintIsidoreOfSeville[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 26 })
          },
          "saintCatherineOfSiena": {
            "name": localization.spain.saintCatherineOfSiena[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 29 })
          },
          "saintJohnOfAvila": {
            "name": localization.spain.saintJohnOfAvila[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 10 })
          },
          "saintIsidoreTheFarmer": {
            "name": localization.spain.saintIsidoreTheFarmer[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 15 })
          },
          "saintPaschalBaylon": {
            "name": localization.spain.saintPaschalBaylon[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 17 })
          },
          "saintJoaquinaVedruna": {
            "name": localization.spain.saintJoaquinaVedruna[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 22 })
          },
          "saintFerdinand": {
            "name": localization.spain.saintFerdinand[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 30 })
          },
          "saintMariaMicaelaOfTheBlessedSacrament": {
            "name": localization.spain.saintMariaMicaelaOfTheBlessedSacrament[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 15 })
          },
          "saintPelagius": {
            "name": localization.spain.saintPelagius[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 26 })
          },
          "saintBenedict": {
            "name": localization.spain.saintBenedict[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 11 })
          },
          "ourLadyOfMountCarmel": {
            "name": localization.spain.ourLadyOfMountCarmel[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 16 })
          },
          "saintBridget": {
            "name": localization.spain.saintBridget[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 23 })
          },
          "saintJames": {
            "name": localization.spain.saintJames[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 25 })
          },
          "saintTeresaBenedictaOfTheCross": {
            "name": localization.spain.saintTeresaBenedictaOfTheCross[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 9 })
          },
          "saintEzequielMoreno": {
            "name": localization.spain.saintEzequielMoreno[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 19 })
          },
          "saintTeresaOfJesusJOrneteIbars": {
            "name": localization.spain.saintTeresaOfJesusJOrneteIbars[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 26 })
          },
          "saintFrancisBorgia": {
            "name": localization.spain.saintFrancisBorgia[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 3 })
          },
          "saintThomasOfVillanova": {
            "name": localization.spain.saintThomasOfVillanova[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 10 })
          },
          "saintSoledadTorresAcosta": {
            "name": localization.spain.saintSoledadTorresAcosta[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 11 })
          },
          "ourLadyOfThePillar": {
            "name": localization.spain.ourLadyOfThePillar[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 12 })
          },
          "saintTeresaOfJesus": {
            "name": localization.spain.saintTeresaOfJesus[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 15 })
          },
          "saintPeterOfAlcantara": {
            "name": localization.spain.saintPeterOfAlcantara[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 19 })
          },
          "saintLeander": {
            "name": localization.spain.saintLeander[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 13 })
          },
          "saintEulaliaOfMerida": {
            "name": localization.spain.saintEulaliaOfMerida[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 10 })
          },
          "saintJohnOfTheCross": {
            "name": localization.spain.saintJohnOfTheCross[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 14 })
          },
          "jesusChristTheEternalHighPriest": {
            "name": localization.spain.jesusChristTheEternalHighPriest[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.spain.key
            },
            "moment": moment.utc( movableSolemnities.pentecostSunday.moment ).add( 4, 'days' )
          }
        },
        "sriLanka": {
          "blessedJosephVaz": {
            "name": localization.sriLanka.blessedJosephVaz[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.sriLanka.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 16 })
          },
          "ourLadyOfLanka": {
            "name": localization.sriLanka.ourLadyOfLanka[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.sriLanka.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 4 })
          },
          "ourLadyOfMadhu": {
            "name": localization.sriLanka.ourLadyOfMadhu[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.sriLanka.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 2 })
          }
        },
        "ukraine": {
          "blessedMarcelinaDarowska": {
            "name": localization.ukraine.blessedMarcelinaDarowska[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ukraine.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 5 })
          },
          "blessedBronislawMarkiewicz": {
            "name": localization.ukraine.blessedBronislawMarkiewicz[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ukraine.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 30 })
          },
          "saintsCyril": {
            "name": localization.ukraine.saintsCyril[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.ukraine.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 14 })
          },
          "maryMotherOfTheChurch": {
            "name": localization.ukraine.maryMotherOfTheChurch[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.ukraine.key
            },
            "moment": moment.utc( movableSolemnities.pentecostSunday.moment ).add( 1, 'days' )
          },
          "saintCatherineOfSiena": {
            "name": localization.ukraine.saintCatherineOfSiena[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.ukraine.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 29 })
          },
          "saintAndrewBobola": {
            "name": localization.ukraine.saintAndrewBobola[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.ukraine.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 16 })
          },
          "saintJohnNepomucene": {
            "name": localization.ukraine.saintJohnNepomucene[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.ukraine.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 21 })
          },
          "saintAlbertChmielowski": {
            "name": localization.ukraine.saintAlbertChmielowski[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ukraine.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 17 })
          },
          "saintZygmuntGorazdowski": {
            "name": localization.ukraine.saintZygmuntGorazdowski[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ukraine.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 26 })
          },
          "saintJohnOfDukla": {
            "name": localization.ukraine.saintJohnOfDukla[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ukraine.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 8 })
          },
          "saintHedwigOfPoland": {
            "name": localization.ukraine.saintHedwigOfPoland[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ukraine.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 18 })
          },
          "saintOlga": {
            "name": localization.ukraine.saintOlga[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ukraine.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 24 })
          },
          "saintVladimirTheGreat": {
            "name": localization.ukraine.saintVladimirTheGreat[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ukraine.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 28 })
          },
          "saintBenedict": {
            "name": localization.ukraine.saintBenedict[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.ukraine.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 11 })
          },
          "saintBirgitta": {
            "name": localization.ukraine.saintBirgitta[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.ukraine.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 23 })
          },
          "saintTeresaBenedictaOfTheCross": {
            "name": localization.ukraine.saintTeresaBenedictaOfTheCross[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.ukraine.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 9 })
          },
          "ourLadyOfCzestochowa": {
            "name": localization.ukraine.ourLadyOfCzestochowa[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ukraine.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 26 })
          },
          "blessedPolishMartyrsOfWW2": {
            "name": localization.ukraine.blessedPolishMartyrsOfWW2[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.ukraine.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 9 })
          },
          "saintStanislausKostka": {
            "name": localization.ukraine.saintStanislausKostka[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ukraine.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 18 })
          },
          "saintJozefBilczewski": {
            "name": localization.ukraine.saintJozefBilczewski[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ukraine.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 23 })
          },
          "saintJohnPaulII": {
            "name": localization.ukraine.saintJohnPaulII[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.ukraine.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 22 })
          }
        },
        "unitedStates": {
          "saintElizabethAnnSeton": {
            "name": localization.unitedStates.saintElizabethAnnSeton[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.unitedStates.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 4 })
          },
          "saintJohnNeumann": {
            "name": localization.unitedStates.saintJohnNeumann[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.unitedStates.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 5 })
          },
          "saintAndreBessette": {
            "name": localization.unitedStates.saintAndreBessette[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.unitedStates.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 6 })
          },
          "saintVincent": {
            "name": localization.unitedStates.saintVincent[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.unitedStates.key
            },
            "moment": moment.utc({ year: year, month: 0, day: 23 })
          },
          "saintKatharineDrexel": {
            "name": localization.unitedStates.saintKatharineDrexel[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.unitedStates.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 3 })
          },
          "saintDamiendeVeuster": {
            "name": localization.unitedStates.saintDamiendeVeuster[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.unitedStates.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 10 })
          },
          "saintIsidore": {
            "name": localization.unitedStates.saintIsidore[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.unitedStates.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 15 })
          },
          "blessedJuniperoSerra": {
            "name": localization.unitedStates.blessedJuniperoSerra[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.unitedStates.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 1 })
          },
          "saintElizabethOfPortugal": {
            "name": localization.unitedStates.saintElizabethOfPortugal[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.unitedStates.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 4 })
          },
          "saintKateriTekakwitha": {
            "name": localization.unitedStates.saintKateriTekakwitha[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.unitedStates.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 14 })
          },
          "saintCamillusDeLellis": {
            "name": localization.unitedStates.saintCamillusDeLellis[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.unitedStates.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 18 })
          },
          "saintPeterClaver": {
            "name": localization.unitedStates.saintPeterClaver[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.unitedStates.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 9 })
          },
          "blessedMarieRoseDurocher": {
            "name": localization.unitedStates.blessedMarieRoseDurocher[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.unitedStates.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 6 })
          },
          "saintsJohnDeBrebeufAndIsaacJogues": {
            "name": localization.unitedStates.saintsJohnDeBrebeufAndIsaacJogues[locale],
            "type": types.MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.unitedStates.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 19 })
          },
          "saintPaulOfTheCross": {
            "name": localization.unitedStates.saintPaulOfTheCross[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.unitedStates.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 20 })
          },
          "saintJohnPaulII": {
            "name": localization.unitedStates.saintJohnPaulII[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.unitedStates.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 22 })
          },
          "saintFrancesXavierCabrini": {
            "name": localization.unitedStates.saintFrancesXavierCabrini[locale],
            "type": types.MEMORIAL,
            "data": {
              "nationalCalendar": calendars.unitedStates.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 13 })
          },
          "saintRosePhilippineDuchesne": {
            "name": localization.unitedStates.saintRosePhilippineDuchesne[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.unitedStates.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 18 })
          },
          "blessedMiguelAgustinPro": {
            "name": localization.unitedStates.blessedMiguelAgustinPro[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.unitedStates.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 23 })
          },
          "ourLadyOfGuadalupe": {
            "name": localization.unitedStates.ourLadyOfGuadalupe[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.unitedStates.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 12 })
          }
        },
        "vietnam": {
          "vietnameseMartyrs": {
            "name": localization.vietnam.vietnameseMartyrs[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.vietnam.key
            },
            "moment": moment.utc( movableSolemnities.christTheKing.moment ).subtract( 7, 'days' )
          }
        },
        "wales": {
          "saintTeilo": {
            "name": localization.wales.saintTeilo[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.wales.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 9 })
          },
          "saintsCyril": {
            "name": localization.wales.saintsCyril[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.wales.key
            },
            "moment": moment.utc({ year: year, month: 1, day: 14 })
          },
          "saintDavid": {
            "name": localization.wales.saintDavid[locale],
            "type": types.SOLEMNITY,
            "data": {
              "nationalCalendar": calendars.wales.key
            },
            "moment": moment.utc({ year: year, month: 2, day: 1 })
          },
          "saintBeuno": {
            "name": localization.wales.saintBeuno[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.wales.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 20 })
          },
          "saintCatherineOfSiena": {
            "name": localization.wales.saintCatherineOfSiena[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.wales.key
            },
            "moment": moment.utc({ year: year, month: 3, day: 29 })
          },
          "saintAsaph": {
            "name": localization.wales.saintAsaph[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.wales.key
            },
            "moment": moment.utc({ year: year, month: 4, day: 5 })
          },
          "saintsAlbanJuliusAndAaron": {
            "name": localization.wales.saintsAlbanJuliusAndAaron[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.wales.key
            },
            "moment": moment.utc({ year: year, month: 5, day: 20 })
          },
          "saintBenedict": {
            "name": localization.wales.saintBenedict[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.wales.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 11 })
          },
          "saintJohnJones": {
            "name": localization.wales.saintJohnJones[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.wales.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 12 })
          },
          "saintBirgitta": {
            "name": localization.wales.saintBirgitta[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.wales.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 23 })
          },
          "saintsPhilipEvansAndJohnLloyd": {
            "name": localization.wales.saintsPhilipEvansAndJohnLloyd[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.wales.key
            },
            "moment": moment.utc({ year: year, month: 6, day: 25 })
          },
          "saintGermanusOfAuxerre": {
            "name": localization.wales.saintGermanusOfAuxerre[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.wales.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 3 })
          },
          "saintTeresaBenedictaOfTheCross": {
            "name": localization.wales.saintTeresaBenedictaOfTheCross[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.wales.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 9 })
          },
          "saintDavidLewis": {
            "name": localization.wales.saintDavidLewis[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.wales.key
            },
            "moment": moment.utc({ year: year, month: 7, day: 26 })
          },
          "saintDeiniol": {
            "name": localization.wales.saintDeiniol[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.wales.key
            },
            "moment": moment.utc({ year: year, month: 8, day: 11 })
          },
          "saintRichardGwyn": {
            "name": localization.wales.saintRichardGwyn[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.wales.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 16 })
          },
          "TheSixWelshMartyrsAndCompanions": {
            "name": localization.wales.TheSixWelshMartyrsAndCompanions[locale],
            "type": types.FEAST_MARTYR,
            "data": {
              "nationalCalendar": calendars.wales.key
            },
            "moment": moment.utc({ year: year, month: 9, day: 25 })
          },
          "saintWinefride": {
            "name": localization.wales.saintWinefride[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.wales.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 3 })
          },
          "saintIlltud": {
            "name": localization.wales.saintIlltud[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.wales.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 6 })
          },
          "allSaintsOfWales": {
            "name": localization.wales.allSaintsOfWales[locale],
            "type": types.FEAST,
            "data": {
              "nationalCalendar": calendars.wales.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 8 })
          },
          "saintDubricius": {
            "name": localization.wales.saintDubricius[locale],
            "type": types.OPT_MEMORIAL,
            "data": {
              "nationalCalendar": calendars.wales.key
            },
            "moment": moment.utc({ year: year, month: 10, day: 14 })
          },
          "saintJohnRoberts": {
            "name": localization.wales.saintJohnRoberts[locale],
            "type": types.OPT_MEMORIAL_MARTYR,
            "data": {
              "nationalCalendar": calendars.wales.key
            },
            "moment": moment.utc({ year: year, month: 11, day: 10 })
          }
        }
      };   
    }
};