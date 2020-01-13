import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let _holyWeek;
let _easterOctave;
let _annunciation;
let _holyWeekRange;
let _easterOctaveRange;
let _date;

let dates = year => {

  let _dates = [
    {
      "key": "saintJozefSebastianPelczar",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 19 }),
      "data": {}
    },
    {
      "key": "saintVincentPallottiPriest",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 22 }),
      "data": {}
    },
    {
      "key": "blessedVincentLewoniukAndCompanionsMartyrsOfPratulin",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 23 }),
      "data": {}
    },
    {
      "key": "blessedJerzyMatulewiczBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 27 }),
      "data": {}
    },
    {
      "key": "blessedBoleslawaMariaLamentVirginAndSaintAngelaMericiVirgin",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 29 }),
      "data": {}
    },
    {
      "key": "saintsCyrilMonkAndMethodiusBishop",
      "type": Types.FEAST,
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
      "key": "saintCasimir",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 2, day: 4 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    // jarosz: Moved saintAdalbert outside holy week and octave of Easter
    {
      "key": "saintAdalbertBishopAndMartyr",
      "type": Types.SOLEMNITY,
      "moment": ( y => {

        _holyWeek = Dates.holyWeek( y );
        _easterOctave = Dates.octaveOfEaster( y );
        _annunciation = Dates.annunciation( y );
        _holyWeekRange = moment.range( _.head( _holyWeek ), _.last( _holyWeek ) );
        _easterOctaveRange = moment.range( _.head( _easterOctave ), _.last( _easterOctave ) );
        _date = moment.utc({ year: y, month: 3, day: 23 });
//
        // If the celebration lands anywhere between Holy Week to Divine Mercy Sunday (inclusive)
        // move it to the Monday after Divine Mercy Sunday
        if ( _holyWeekRange.contains( _date ) || _easterOctaveRange.contains( _date ) ) {
          // Ensure that the Monday after Divine Mercy Sunday is not Annunciation
          // if it is, move this celebration to the next day (Tuesday)
          // However, this condition will probably never happen
          var proposed =  _.last( _easterOctave ).add( 1, 'days' );
          if ( proposed.isSame( _annunciation ) ) {
            return _annunciation.add( 1, 'days' );
          }
          else {
            return proposed;
          }
        }
        else {
          return _date;
        }
      })(year),
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
      "key": "saintCatherineOfSienaVirginAndDoctorOfTheChurch",
      "type": Types.FEAST,
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
      "key": "ourLadyQueenOfPoland",
      "type": Types.SOLEMNITY,
      "moment": moment.utc({ year: year, month: 4, day: 3 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "ourLadyHelpOfChristians",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 24 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintFlorianMartyr",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 4 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintStanislausKazimierczykPriest",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 5 }),
      "data": {}
    },
    {
      "key": "saintsPhilipAndJamesApostles",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 4, day: 6 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintStanislausBishopAndMartyr",
      "type": Types.SOLEMNITY,
      "moment": moment.utc({ year: year, month: 4, day: 8 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.RED
        }
      }
    },
    {
      "key": "saintAndrewBobolaPriestAndMartyr",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 4, day: 16 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintUrsulaLedochowskaVirgin",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 29 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintJohnSarkanderPriestAndMartyrSaintZdzislawa",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 30 }),
      "data": {}
    },
    {
      "key": "saintHedwigOfPoland",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 8 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedBogumilBishop",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 10 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedAntoniNowowiejskiBishopAndCompanionsMartyrs",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 12 }),
      "data": {}
    },
    {
      "key": "blessedMichaelKozalBishopAndMartyr",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 14 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedJolantaReligious",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 15 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintAlbertChmielowskiReligious",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 17 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintZygmuntGorazdowskiPriest",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 26 }),
      "data": {}
    },
    {
      "key": "saintOttoOfBambergBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 1 }),
      "data": {}
    },
    {
      "key": "saintMariaGorettiVirginAndMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 5 }),
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
      "key": "blessedMariaTeresaLedochowskaVirgin",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 6 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintJohnOfDuklaPriest",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 8 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintBenedictOfNursiaAbbot",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 6, day: 11 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintBrunoBonifaceOfQuerfurtBishopAndMartyr",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 12 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintsAndrewZorardAndBenedictHermits",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 13 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintCamillusDeLellisPriestOrSaintHenryBishopAndMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 14 }),
      "data": {}
    },
    {
      "key": "ourLadyOfMountCarmel",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 16 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintSimonOfLipnicaPriest",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 18 }),
      "data": {}
    },
    {
      "key": "blessedCzeslawPriest",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 20 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintApollinaris",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 21 }),
      "data": {}
    },
    {
      "key": "saintBridgetOfSwedenReligious",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 6, day: 23 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintKingaVirgin",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 24 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintCharbelMakhloufPriestAndHermit",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 28 }),
      "data": {}
    },
    {
      "key": "blessedEdmundBojanowski",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 7, day: 7 }),
      "data": {}
    },
    {
      "key": "saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr",
      "type": Types.FEAST,
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
      "key": "saintHyacinthPriest",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 7, day: 17 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "ourLadyOfCzestochowa",
      "type": Types.SOLEMNITY,
      "moment": moment.utc({ year: year, month: 7, day: 26 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedBronislawaVirgin",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 1 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedMariaStellaAndCompanionsVirginsAndMartyrs",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 4 }),
      "data": {}
    },
    {
      "key": "saintMelchiorGrodzieckiPriestAndMartyr",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 7 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedAnielaSalawaVirgin",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 9 }),
      "data": {}
    },
    {
      "key": "saintDenisAndCompanionsMartyrsSaintJohnLeonardiPriest",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 10 }),
      "data": {}
    },
    {
      "key": "saintZygmuntSzczesnyFelinskiBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 17 }),
      "data": {}
    },
    {
      "key": "saintStanislausKostkaReligious",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 8, day: 18 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedWladyslawOfGielniowPriest",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 25 }),
      "data": {}
    },
    // jarosz: Split saintRuizAndCo and saintWenceslaus (they are a single celebration in general.js)
    {
      "key": "saintsLawrenceRuizAndCompanionsMartyrs",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 26 }),
      "data": {}
    },
    {
      "key": "saintWenceslausMartyr",
      "type": Types.SOLEMNITY,
      "moment": moment.utc({ year: year, month: 8, day: 28 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintFaustinaKowalskaVirginAndReligious",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 5 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedVincentKadlubekBishop",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 9 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedMaryAngelaTruszkowskaVirgin",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 10 }),
      "data": {}
    },
    {
      "key": "blessedJohnBeyzymPriest",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 12 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedHonoratKozminskiPriest",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 13 }),
      "data": {}
    },
    // jarosz: Split saintHedwig and saintMargaretMaryAlacoque and rename saintHedwig to saintHedwigOfSilesia, to make it less ambiguous
    {
      "key": "saintMargaretMaryAlacoque",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 14 }),
      "data": {}
    },
    {
      "key": "saintHedwigOfSilesia",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 16 }),
      "data": {}
    },
    {
      "key": "saintJohnOfKantyPriest",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 20 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedJakubStrzemieBishop",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 21 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "popeSaintJohnPaulII",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 22 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintJosefBilczewskiBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 23 }),
      "data": {}
    },
    // jarosz: Created Dedication of a particular church: solemnity on last Sunday of October
    {
      "key": "dedicationOfAParticularChurch",
      "type": Types.SOLEMNITY,
      "moment": moment({ year: year, month: 9 }).endOf('month').startOf('week'),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintsBenedyktJanMateuszIsaakAndKrystynMartyrs",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 10, day: 13 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.RED
        }
      }
    },
    {
      "key": "blessedKarolinaKozkownaVirginAndMartyr",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 10, day: 18 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedSalomeVirgin",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 10, day: 19 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintRafalKalinowskiPriest",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 10, day: 20 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedMaryOfJesusTheGoodShepherdVirgin",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 10, day: 25 }),
      "data": {}
    },
    {
      "key": "blessedRafalChylinskiPriest",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 11, day: 2 }),
      "data": {}
    },
    {
      "key": "saintBarbaraVirginAndMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 11, day: 4 }),
      "data": {}
    },
    {
      "key": "maryMotherOfTheChurch",
      "type": Types.FEAST,
      "moment": ( y => Dates.pentecostSunday( y ).add( 1, 'days'))( year ),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "ourLordJesusChristTheEternalHighPriest",
      "type": Types.FEAST,
      "moment": ( y => Dates.pentecostSunday( y ).add( 4, 'days' ))(year),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    }
  ];

  // Get localized celebration names
  return Utils.localizeDates(_dates);
};

export {
  dates
};
