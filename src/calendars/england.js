import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {

  let _dates = [
    {
      "key": "saintAelredOfRievaulx",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 12 }),
      "data": {}
    },
    {
      "key": "saintWulstanBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 0, day: 19 }),
      "data": {}
    },
    {
      "key": "saintsCyrilMonkAndMethodiusBishop",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 1, day: 14 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [ Titles.PATRON_OF_EUROPE ]
        }
      }
    },
    {
      "key": "saintDavidBishop",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 2, day: 1 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintPatrickBishop",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 2, day: 17 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    // When the celebration falls in the Easter Triduum, on a Sunday of Easter,
    // or in the Easter Octave it is transferred to the next available day —
    // generally the Monday of the Second Week of Easter.
    {
      "key": "saintGeorgeMartyr",
      "type": Types.SOLEMNITY,
      "moment": ( y => {

        let holyWeek = Dates.holyWeek( y );
        let easterOctave = Dates.octaveOfEaster( y );
        let annunciation = Dates.annunciation( y );
        let holyWeekRange = moment.range( _.head(holyWeek), _.last(holyWeek));
        let easterOctaveRange = moment.range( _.head(easterOctave), _.last(easterOctave));
        let date = moment.utc({ year: y, month: 3, day: 23 });

        // If the celebration lands anywhere between Holy Week to Divine Mercy Sunday (inclusive)
        // move it to the Monday after Divine Mercy Sunday
        if (holyWeekRange.contains(date) || easterOctaveRange.contains(date) ) {
          // Ensure that the Monday after Divine Mercy Sunday is not Annunciation
          // if it is, move this celebration to the next day (Tuesday)
          let proposed =  _.last(easterOctave).add( 1, 'days' );
          if ( proposed.isSame(annunciation) ) {
            return _.last(easterOctave).add( 2, 'days' );
          }
          else {
            return proposed;
          }
        }
        else {
          return date;
        }
      })( year ),
      "data": {
        "prioritized": true
      }
    },
    {
      "key": "saintAdalbertBishopAndMartyrSaintFidelisOfSigmaringenPriestAndMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 24 }),
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
      "key": "theEnglishMartyrs",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 4, day: 4 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "stDunstanArchbishopOfCanterbury",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 19 }),
      "data": {}
    },
    {
      "key": "saintBedeTheVenerablePriestAndDoctor",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 4, day: 25 }),
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
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 4, day: 27 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintBonifaceBishopAndMartyr",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 5 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintEphraemDeaconDoctorOrSaintColumbaColumCilleAbbot",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 9 }),
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
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 16 }),
      "data": {}
    },
    {
      "key": "saintAlbanMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 20 }),
      "data": {}
    },
    {
      "key": "saintsJohnFisherBishopAndThomasMoreMartyrs",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 5, day: 22 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintEtheldredaAudreyVirgin",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 5, day: 23 }),
      "data": {}
    },
    {
      "key": "saintOliverPlunketBishopAndMartyr",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 6, day: 1 }),
      "data": {}
    },
    {
      "key": "saintBenedictOfNursiaAbbot",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 6, day: 11 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [ Titles.PATRON_OF_EUROPE ]
        }
      }
    },
    {
      "key": "saintBridgetOfSwedenReligious",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 6, day: 23 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [ Titles.PATRON_OF_EUROPE ]
        }
      }
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
      "key": "blessedDominicOfTheMotherOfGodDominicBarberiPriest",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 7, day: 26 }),
      "data": {}
    },
    {
      "key": "saintsMargaretClitherowAnneLineAndMargaretWardMartyrs",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 7, day: 30 }),
      "data": {}
    },
    {
      "key": "saintAidanBishopAndTheSaintsOfLindisfarne",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 7, day: 31 }),
      "data": {}
    },
    {
      "key": "saintGregoryTheGreatPopeAndDoctor",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 8, day: 3 }),
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
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 4 }),
      "data": {}
    },
    {
      "key": "saintTheodoreOfCanterburyBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 19 }),
      "data": {}
    },
    {
      "key": "ourLadyOfWalsingham",
      "type": Types.MEMORIAL,
      "moment": moment.utc({ year: year, month: 8, day: 24 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedJohnHenryNewmanPriest",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 9 }),
      "data": {}
    },
    {
      "key": "saintPaulinusOfYorkBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 10 }),
      "data": {}
    },
    // In England and Wales when the celebration falls on either a
    // Saturday or a Monday it is transferred to the Sunday.
    // Replaces 20th Sunday in Ordinary Time when it falls on a Sunday.
    {
      "key": "peterAndPaulApostles",
      "type": Types.SOLEMNITY,
      "moment": ( y => {
        let date = moment.utc({ year: y, month: 5, day: 29 });
        if ( _.eq(date.day(), 1 )) {
          return date.subtract( 1, 'days');
        }
        else if ( _.eq(date.day(), 6 )) {
          return date.add( 1, 'days' ).startOf('day');
        }
        else {
          return date;
        }
      })( year ),
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
      "type": Types.SOLEMNITY,
      "moment": ( y => {
        let date = moment.utc({ year: y, month: 7, day: 15 });
        if ( _.eq(date.day(), 1 )) {
          return date.subtract( 1, 'days');
        }
        else if ( _.eq(date.day(), 6 )) {
          return date.add( 1, 'days' ).startOf('day');
        }
        else {
          return date;
        }
      })( year ),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintWilfridBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 12 }),
      "data": {}
    },
    {
      "key": "saintEdwardTheConfessor",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 13 }),
      "data": {}
    },
    {
      "key": "saintsChadAndCeddBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 9, day: 26 }),
      "data": {}
    },
    {
      "key": "saintWinefrideVirgin",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 10, day: 3 }),
      "data": {}
    },
    {
      "key": "saintWillibrordBishop",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 10, day: 7 }),
      "data": {}
    },
    {
      "key": "saintEdmundOfAbingdonBishopOrSaintMargaretOfScotland",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 10, day: 16 }),
      "data": {}
    },
    {
      "key": "saintElizabethOfHungary",
      "type": Types.OPT_MEMORIAL,
      "moment": moment.utc({ year: year, month: 10, day: 17 }),
      "data": {}
    },
    {
      "key": "saintAndrewApostle",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 10, day: 30 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    // In England and Wales when All Saints (1 November) falls on a Saturday
    // and is transferred to Sunday, All Souls is transferred to Monday 3 November.
    // Like Ash Wednesday, All Souls is, technically, without rank.
    // However, in countries (not England & Wales) where it falls
    // on a Sunday it replaces the Sunday.
    {
      "key": "allSaints",
      "type": Types.SOLEMNITY,
      "moment": ( y => {
        let date = moment.utc({ year: y, month: 10, day: 1 });
        if ( _.eq(date.day(), 6 )) {
          return moment.utc({ year: y, month: 10, day: 2 });
        }
        else {
          return date;
        }
      })( year ),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "allSouls",
      "type": Types.FEAST,
      "moment": ( y => {
        let date = moment.utc({ year: y, month: 10, day: 1 });
        if ( _.eq( date.day(), 6 ) ) { // If All Saints is on Saturday
          // Then All Souls will be on Monday because All Saints will be moved to Sunday on the rule above
          return moment.utc({ year: y, month: 10, day: 3 });
        }
        else { // Else, All Souls is the day after All Saints
          return moment.utc({ year: y, month: 10, day: 2 });
        }
      })( year ),
      "data": {
        "prioritized": true,
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintThomasBecketBishopAndMartyr",
      "type": Types.FEAST,
      "moment": moment.utc({ year: year, month: 11, day: 29 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.RED,
          "titles": [
            Titles.MARTYR
          ]
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
