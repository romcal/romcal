var _ = require('lodash'),
    moment = require('moment'),
    range = require('moment-range'),
    Utils = require('../utils'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Dates = require('../dates'),
    Titles = require('../../data/titles'),
    Types = require('../../data/types').types;

module.exports = {
  dates: function() {
    return [
      // jarosz: Created saintJozefSebastianPelczar
      {
        "key": "saintJozefSebastianPelczar",
        "name": "Saint Jozef Sebastian Pelczar",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 19 }),
        "data": {}
      },
      {
        "key": "saintVincentPallottiPriest",
        "name": "Saint Vincent Pallotti, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 22 }),
        "data": {}
      },
      {
        "key": "blessedVincentLewoniukAndCompanionsMartyrsOfPratulin",
        "name": "Blessed Vincent Lewoniuk and Companions, Martyrs Of Pratulin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 23 }),
        "data": {}
      },
      {
        "key": "blessedJerzyMatulewiczBishop",
        "name": "Blessed Jerzy Matulewicz, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 27 }),
        "data": {}
      },
      {
        "key": "blessedBoleslawaMariaLamentVirgin",
        "name": "Blessed Boleslawa Maria Lament, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 29 }),
        "data": {}
      },
      // jarosz: Moved saintAngelaMerici to 29 Jan
      // {
      //   "key": "saintAngelaMericiVirgin",
      //   "name": "Saint Angela Merici, Virgin",
      //   "type": Types[6],
      //   "moment": moment.utc({ year: arguments[0], month: 0 day: 29 }),
      //   "data": {}
      // },
      {
        "key": "saintsCyrilMonkAndMethodiusBishop",
        "name": "Saints Cyril, Monk and Methodius, Bishop, Patrons of Europe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 14 }),
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
        "name": "Saint Casimir",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 4 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      // jarosz: Moved saintAdalbert outside holy week and octave of Easter
      {
        "key": "saintAdalbertBishopAndMartyr",
        "name": "Saint Adalbert, Bishop and Martyr",
        "type": Types[0],
        "moment": (function( y ) {
          var holyWeek = Dates.holyWeek( y ),
              easterOctave = Dates.octaveOfEaster( y ),
              annunciation = Dates.annunciation( y ),
              holyWeekRange = moment.range( _.first( holyWeek ), _.last( holyWeek ) ),
              easterOctaveRange = moment.range( _.first( easterOctave ), _.last( easterOctave ) ),
              date = moment.utc({ year: y, month: 3, day: 23 });

          // If the celebration lands anywhere between Holy Week to Divine Mercy Sunday (inclusive)
          // move it to the Monday after Divine Mercy Sunday
          if ( holyWeekRange.contains( date ) || easterOctaveRange.contains( date ) ) {
            // Ensure that the Monday after Divine Mercy Sunday is not Annunciation
            // if it is, move this celebration to the next day (Tuesday)
            var proposed =  _.last( easterOctave ).add( 1, 'days' );
            if ( proposed.isSame( annunciation ) ) {
              return annunciation.add( 1, 'days' );
            }
            else {
              return proposed;
            }
          }
          else {
            return date;
          }
        }(arguments[0])),
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
        "name": "Saint Catherine of Siena, Virgin and Doctor of The Church, Patron of Europe",
        "type": Types[4],
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
      // jarosz: Created ourLadyQueenOfPoland on 3 May
      {
        "key": "ourLadyQueenOfPoland",
        "name": "Our Lady, Queen of Poland",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 3 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }        
      },
      {
        "key": "ourLadyHelpOfChristians",
        "name": "Our Lady, Help of Christians",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 24 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintFlorianMartyr",
        "name": "Saint Florian, Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 4 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintStanislausKazimierczykPriest",
        "name": "Saint Stanislaus Kazimierczyk, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 5 }),
        "data": {}
      },
      {
        "key": "saintsPhilipAndJamesApostles",
        "name": "Saints Philip and James, Apostles",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 6 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      // jarosz: Set saintAdalbert and saintStanislaus color to red
      {
        "key": "saintStanislausBishopAndMartyr",
        "name": "Saint Stanislaus, Bishop and Martyr",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 8 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.RED
          }
        }
      },
      {
        "key": "saintAndrewBobolaPriestAndMartyr",
        "name": "Saint Andrew Bobola, Priest and Martyr",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 16 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintUrsulaLedochowskaVirgin",
        "name": "Saint Ursula Ledochowska, Virgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 29 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintJohnSarkanderPriestAndMartyrSaintZdzislawa",
        "name": "Saint John Sarkander, Priest and Martyr/Saint Zdzislawa",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 30 }),
        "data": {}
      },
      // jarosz: Created saintHedwigOfPoland on 8 Jun
      {
        "key": "saintHedwigOfPoland",
        "name": "Saint Hedwig of Poland",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 8 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedBogumilBishop",
        "name": "Blessed Bogumil, Bishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 10 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedAntoniNowowiejskiBishopAndCompanionsMartyrs",
        "name": "Blessed Antoni Nowowiejski, Bishop and Companions, Martyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 12 }),
        "data": {}
      },
      {
        "key": "blessedMichaelKozalBishopAndMartyr",
        "name": "Blessed Michael Kozal, Bishop and Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 14 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedJolantaReligious",
        "name": "Blessed Jolanta, Religious",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 15 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintAlbertChmielowskiReligious",
        "name": "Saint Albert Chmielowski, Religious",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 17 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintZygmuntGorazdowskiPriest",
        "name": "Saint Zygmunt Gorazdowski, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 26 }),
        "data": {}
      },
      {
        "key": "saintOttoBishop",
        "name": "Saint Otto, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 1 }),
        "data": {}
      },
      // jarosz: Moved saintMariaGoretti to 5 Jul
      {
        "key": "saintMariaGorettiVirginAndMartyr",
        "name": "Saint Maria Goretti, Virgin and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 5 }),
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
        "name": "Blessed Maria Teresa Ledochowska, Virgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 6 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintJohnOfDuklaPriest",
        "name": "Saint John Of Dukla, Priest",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 8 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintBenedictAbbot",
        "name": "Saint Benedict, Abbot",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 11 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintBrunoBonifaceOfQuerfurtBishopAndMartyr",
        "name": "Saint Bruno Boniface Of Querfurt, Bishop And Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 12 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintsAndrzejSwieradAndBenedictHermits",
        "name": "Saints Andrzej Swierad And Benedict, Hermits",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 13 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      // jarosz: Moved saintHenry to 14 Jul
      {
        "key": "saintHenryBishopAndMartyr",
        "name": "Saint Henry, Bishop and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 14 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.RED,
            "titles": [ 
              Titles.MARTYR 
            ]
          }
        }
      },
      // jarosz: Changed ourLadyOfMountCarmel to MEMORIAL
      {
        "key": "ourLadyOfMountCarmel",
        "name": "Our Lady of Mount Carmel",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 16 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintSimonOfLipnicaPriest",
        "name": "Saint Simon of Lipnica, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 18 }),
        "data": {}
      },
      {
        "key": "blessedCzeslawPriest",
        "name": "Blessed Czeslaw, Priest",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 20 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      // jarosz: Moved saintApollinaris to 21 Jul
      {
        "key": "saintApollinaris",
        "name": "Saint Apollinaris",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 21 }),
        "data": {}
      },
      {
        "key": "saintBridgetReligiousPatronOfEurope",
        "name": "Saint Bridget, Religious, Patron Of Europe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 23 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintKingaVirgin",
        "name": "Saint Kinga, Virgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 24 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      // jarosz: Moved saintSharbelMakhluf to 29 Jul
      {
        "key": "saintSharbelMakhlufPriestAndHermit",
        "name": "Saint Sharbel Makhlūf, Priest and Hermit",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 28 }),
        "data": {}
      },
      {
        "key": "blessedEdmundBojanowski",
        "name": "Blessed Edmund Bojanowski",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 7 }),
        "data": {}
      },
      {
        "key": "saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr",
        "name": "Saint Teresa Benedicta of The Cross (Edith Stein), Virgin and Martyr, Patron of Europe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 9 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.RED,
            "titles": [
              Titles.PATRON_OF_EUROPE
            ]
          }
        }
      },
      {
        "key": "saintHyacinthPriest",
        "name": "Saint Hyacinth, Priest",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 17 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "ourLadyOfCzestochowa",
        "name": "Our Lady of Czestochowa",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 26 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedBronislawaVirgin",
        "name": "Blessed Bronislawa, Virgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 1 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedMariaStellaAndCompanionsVirginsAndMartyrs",
        "name": "Blessed Maria Stella and Companions, Virgins and Martyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 4 }),
        "data": {}
      },
      {
        "key": "saintMelchiorGrodzieckiPriestAndMartyr",
        "name": "Saint Melchior Grodziecki, Priest and Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 7 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedAnielaSalawaVirgin",
        "name": "Blessed Aniela Salawa, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 9 }),
        "data": {}
      },
      // jarosz: Moved saintDenisAndCoOrSaintJohnLeonardi to 10 Sep
      {
        "key": "saintDenisAndCompanionsMartyrsSaintJohnLeonardiPriest",
        "name": "Saint Denis and Companions Martyrs/Saint John Leonardi, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 10 }),
        "data": {}
      },
      {
        "key": "saintZygmuntSzczesnyFelinskiBishop",
        "name": "Saint Zygmunt Szczesny Felinski, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 17 }),
        "data": {}
      },
      {
        "key": "saintStanislausKostkaReligious",
        "name": "Saint Stanislaus Kostka, Religious",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 18 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedWladyslawOfGielniowPriest",
        "name": "Blessed Wladyslaw Of Gielniow, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 25 }),
        "data": {}
      },
      // jarosz: Split saintRuizAndCo and saintWenceslaus (they are a single celebration in general.js)
      {
        "key": "saintsLawrenceRuizAndCompanionsMartyrs",
        "name": "Saints Lawrence Ruiz and Companions, Martyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 26 }),
        "data": {}
      },
      {
        "key": "saintWenceslausMartyr",
        "name": "Saint Wenceslaus, Martyr",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 28 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintFaustinaKowalskaReligious",
        "name": "Saint Faustina Kowalska, Religious",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 5 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedVincentKadlubekBishop",
        "name": "Blessed Vincent Kadlubek, Bishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 9 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedMaryAngelaTruszkowskaVirgin",
        "name": "Blessed Mary Angela Truszkowska, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 10 }),
        "data": {}
      },
      {
        "key": "blessedJohnBeyzymPriest",
        "name": "Blessed John Beyzym, Priest",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 12 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedHonoratKozminskiPriest",
        "name": "Blessed Honorat Kozminski, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 13 }),
        "data": {}
      },
      // jarosz: Split saintHedwig and saint MargaretMaryAlacoque and rename saintHedwig to saintHedwigOfSilesia, since it's less ambiguous
      {
        "key": "saintMargaretMaryAlacoque",
        "name": "Saint Msrgaret Mary Alacoque",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 14 }),
        "data": {}
      },
      {
        "key": "saintHedwigOfSilesia",
        "name": "Saint Hedwig of Silesia",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 16 }),
        "data": {}
      },
      // jarosz: Removed saintJohnOfKanty duplicate entry saintJohnOfKety and moved to 20 Oct
      {
        "key": "saintJohnOfKantyPriest",
        "name": "Saint John of Kanty, Priest",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 20 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedJakubStrzemieBishop",
        "name": "Blessed Jakub Strzemie, Bishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 21 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintJohnPaulIiPope",
        "name": "Saint John Paul II, Pope",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 22 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintJosefBilczewskiBishop",
        "name": "Saint Josef Bilczewski, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 23 }),
        "data": {}
      },
      // jarosz: Created Dedication of a particular church: solemnity on last Sunday of October
      {
        "key": "dedicationOfAParticularChurch",
        "name": "Dedication of a particular Church",
        "type": Types[0],
        "moment": moment({ year: 2015, month: 9 }).endOf('month').startOf('week'),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintsBenedyktJanMateuszIsaakAndKrystynTheFirstMartyrsOfPolAnd",
        "name": "Saints Benedykt, Jan, Mateusz, Isaak and Krystyn, The first Martyrs of PolAnd",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 13 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.RED
          }
        }
      },
      {
        "key": "blessedKarolinaKozkownaVirginAndMartyr",
        "name": "Blessed Karolina Kozkowna, Virgin and Martyr",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 18 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedSalomeVirgin",
        "name": "Blessed Salome, Virgin",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 19 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintRafalKalinowskiPriest",
        "name": "Saint Rafal Kalinowski, Priest",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 20 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedMaryOfJesusTheGoodShepherdVirgin",
        "name": "Blessed Mary of Jesus The Good Shepherd, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 25 }),
        "data": {}
      },
      // jarosz: Moved blessedRafalChylinski to 2 Dec
      {
        "key": "blessedRafalChylinskiPriest",
        "name": "Blessed Rafal Chylinski, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 2 }),
        "data": {}
      },
      {
        "key": "saintBarbaraVirginAndMartyr",
        "name": "Saint Barbara, Virgin And Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 4 }),
        "data": {}
      },
      {
        "key": "maryMotherOfTheChurch",
        "name": "Mary, Mother of The Church",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 13 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "ourLordJesusChristTheEternalHighPriest",
        "name": "Our Lord Jesus Christ, The Eternal High Priest",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 16 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      }
    ];
  }
};
