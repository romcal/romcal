var _ = require('lodash'),
    moment = require('moment'), 
    Utils = require('../utils'),
    range = require('moment-range'),
    LiturgicalColors = require('../../data/liturgicalColors.json'),
    Dates = require('../dates'),
    Titles = require('../../data/titles'),
    Types = require('../../data/types').types;

module.exports = {

  dates: function() {

    return [
      {
        "key": "saintAelredOfRievaulx",
        "name": "Saint Aelred of Rievaulx",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 12 }),
        "data": {}
      },
      {
        "key": "saintWulstanBishop",
        "name": "Saint Wulstan, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 0, day: 19 }),
        "data": {}
      },
      {
        "key": "saintsCyrilMonkAndMethodiusBishop",
        "name": "Saints Cyril, Monk and Methodius, Bishop, Patrons of Europe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 14 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ Titles.PATRON_OF_EUROPE ]
          }
        }
      },
      {
        "key": "saintDavidBishop",
        "name": "Saint David, Bishop",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 1 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintPatrickBishop",
        "name": "Saint Patrick, Bishop",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 17 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
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
      // When the celebration falls in the Easter Triduum, on a Sunday of Easter, 
      // or in the Easter Octave it is transferred to the next available day — 
      // generally the Monday of the Second Week of Easter.
      {
        "key": "saintGeorgeMartyr",
        "name": "Saint George, Martyr",
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
              return _.last( easterOctave ).add( 2, 'days' );
            }
            else {
              return proposed;
            }
          }
          else {
            return date;
          }
        }( arguments[0] )),
        "data": {
          "prioritized": true
        }
      },
      {
        "key": "saintAdalbertBishopAndMartyrSaintFidelisOfSigmaringenPriestAndMartyr",
        "name": "Saint Wojciech (Adalbert of Prague), Bishop and Martyr/Saint Fidelis of Sigmaringen, Priest and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 24 }),
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
      {
        "key": "theEnglishMartyrs",
        "name": "The English Martyrs",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 4 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "stDunstanArchbishopOfCanterbury",
        "name": "St Dunstan, Archbishop of Canterbury",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 19 }),
        "data": {}
      },
      {
        "key": "saintBedeTheVenerablePriestAndDoctor",
        "name": "Saint Bede the Venerable, Priest and Doctor of the Church",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 25 }),
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
        "key": "saintAugustineOfCanterburyBishop",
        "name": "Saint Augustine of Canterbury, Bishop",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 27 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
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
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintEphraemDeaconDoctorOrSaintColumbaColumCilleAbbot",
        "name": "Saint Ephraem, Deacon, Doctor or Saint Columba (Colum Cille), Abbot",
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
        "key": "saintRichardOfChichesterBishop",
        "name": "Saint Richard of Chichester, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 16 }),
        "data": {}
      },
      {
        "key": "saintAlbanMartyr",
        "name": "Saint Alban, Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 20 }),
        "data": {}
      },
      {
        "key": "saintsJohnFisherBishopAndThomasMoreMartyrs",
        "name": "Saints John Fisher, Bishop and Thomas More, Martyrs",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 22 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintEtheldredaAudreyVirgin",
        "name": "Saint Etheldreda (Audrey), Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 23 }),
        "data": {}
      },
      {
        "key": "saintOliverPlunketBishopAndMartyr",
        "name": "Saint Oliver Plunket, Bishop and Martyr",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 1 }),
        "data": {}
      },
      {
        "key": "saintBenedictAbbot",
        "name": "Saint Benedict of Nursia, Abbot, Patron of Europe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 11 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ Titles.PATRON_OF_EUROPE ]
          }
        }
      },
      {
        "key": "saintBridgetOfSweedenReligious",
        "name": "Saint Bridget of Sweeden, Religious, Patron of Europe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 23 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ Titles.PATRON_OF_EUROPE ]
          }
        }
      },
      {
        "key": "saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr",
        "name": "Saint Teresa Benedicta of The Cross (Edith Stein), Virgin and Martyr, Patron of Europe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 9 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedDominicOfTheMotherOfGodDominicBarberiPriest",
        "name": "Blessed Dominic of The Mother of God (Dominic Barberi), Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 26 }),
        "data": {}
      },
      {
        "key": "saintsMargaretClitherowAnneLineAndMargaretWardMartyrs",
        "name": "Saints Margaret Clitherow, Anne Line and Margaret Ward, Martyrs",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 30 }),
        "data": {}
      },
      {
        "key": "saintAidanBishopAndTheSaintsOfLindisfarne",
        "name": "Saint Aidan, Bishop and The Saints of Lindisfarne",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 31 }),
        "data": {}
      },
      {
        "key": "saintGregoryTheGreatPopeAndDoctor",
        "name": "Saint Gregory The Great, Pope and Doctor",
        "type": Types[4],
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
        "key": "saintCuthbertBishop",
        "name": "Saint Cuthbert, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 4 }),
        "data": {}
      },
      {
        "key": "saintTheodoreOfCanterburyBishop",
        "name": "Saint Theodore of Canterbury, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 19 }),
        "data": {}
      },
      {
        "key": "ourLadyOfWalsingham",
        "name": "Our Lady of Walsingham",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 24 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "blessedJohnHenryNewmanPriest",
        "name": "Blessed John Henry Newman, Priest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 9 }),
        "data": {}
      },
      {
        "key": "saintPaulinusOfYorkBishop",
        "name": "Saint Paulinus of York, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 10 }),
        "data": {}
      },
      // In England and Wales when the celebration falls on either a 
      // Saturday or a Monday it is transferred to the Sunday.
      // Replaces 20th Sunday in Ordinary Time when it falls on a Sunday.
      {
        "key": "peterAndPaulApostles",
        "name": "Saints Peter and Paul, Apostles",
        "type": Types[0],
        "moment": (function( y ) {
          var date = moment.utc({ year: y, month: 5, day: 29 });
          if ( _.eq( date.day(), 1 ) ) {
            return date.subtract( 1, 'days');
          }
          else if ( _.eq( date.day(), 6 ) ) {
            return date.add( 1, 'days' ).startOf('day');
          }
          else {
            return date;
          }
        }( arguments[0] )),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.RED
          }
        }
      },
      // In England and Wales when the celebration falls on either a 
      // Saturday or a Monday it is transferred to the Sunday.
      // Replaces 20th Sunday in Ordinary Time when it falls on a Sunday.
      {
        "key": "assumption",
        "name": "The Assumption of the Blessed Virgin Mary",
        "type": Types[0],
        "moment": (function( y ) {
          var date = moment.utc({ year: y, month: 7, day: 15 });
          if ( _.eq( date.day(), 1 ) ) {
            return date.subtract( 1, 'days');
          }
          else if ( _.eq( date.day(), 6 ) ) {
            return date.add( 1, 'days' ).startOf('day');
          }
          else {
            return date;
          }
        }( arguments[0] )),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintWilfridBishop",
        "name": "Saint Wilfrid, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 12 }),
        "data": {}
      },
      {
        "key": "saintEdwardTheConfessor",
        "name": "Saint Edward The Confessor",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 13 }),
        "data": {}
      },
      {
        "key": "saintJohnPaulIiPope",
        "name": "Saint John Paul II, Pope",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 22 }),
        "data": {}
      },
      {
        "key": "saintsChadAndCeddBishop",
        "name": "Saints Chad and Cedd, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 26 }),
        "data": {}
      },
      {
        "key": "saintWinefrideVirgin",
        "name": "Saint Winefride, Virgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 3 }),
        "data": {}
      },
      {
        "key": "saintWillibrordBishop",
        "name": "Saint Willibrord, Bishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 7 }),
        "data": {}
      },
      {
        "key": "saintEdmundOfAbingdonBishopOrSaintMargaretOfScotlAnd",
        "name": "Saint Edmund of Abingdon, Bishop Or Saint Margaret of ScotlAnd",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 16 }),
        "data": {}
      },
      {
        "key": "saintHildaAbbessOrSaintHughOfLincolnBishopOrSaintElizabethOfHungary",
        "name": "Saint Hilda, Abbess Or Saint Hugh of Lincoln, Bishop Or Saint Elizabeth of Hungary",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 17 }),
        "data": {}
      },
      {
        "key": "saintAndrewApostle",
        "name": "Saint Andrew, Apostle",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 30 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },

      // In England and Wales when All Saints (1 November) falls on a Saturday 
      // and is transferred to the Sunday the Commemoration of all the Faithful Departed 
      // is transferred to Monday 3 November.
      // Like Ash Wednesday, All Souls is, technically, without rank. 
      // However, in countries (not England & Wales) where it falls 
      // on a Sunday it replaces the Sunday.
      {
        "key": "allSaints",
        "name": Utils.localize({
          key: 'solemnities.allSaints'
        }),
        "type": _.first( Types ),
        "moment": (function( y ) {
          var m = moment.utc({ year: y, month: 10, day: 1 });
          if ( _.eq( m.day(), 6 ) ) {
            return moment.utc({ year: y, month: 10, day: 2 });
          }
          else {
            return m;
          }
        }( arguments[0] )),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "allSouls",
        "name": "All Souls",
        "type": Types[4],
        "moment": (function( y ) {
          var m = moment.utc({ year: y, month: 10, day: 1 });
          if ( _.eq( m.day(), 6 ) ) {
            return moment.utc({ year: y, month: 10, day: 3 });
          }
          else {
            return moment.utc({ year: y, month: 10, day: 2 });
          }
        }( arguments[0] )),
        "data": {
          "prioritized": true,
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintThomasBecketBishopMartyr",
        "name": "Saint Thomas Becket, Bishop & Martyr",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 29 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      }
    ];

  }
};


