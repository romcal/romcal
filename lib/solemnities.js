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
	liturgicalColors = utils.liturgicalColors(),
	localization = utils.getLocalizationData().general;

module.exports = {
	fixedSolemnities: function( year, locale ) {
		var dates = {
			maryMotherOfGod: {
				moment: moment.utc({year:year, month: 0, day: 1}),
				type: types.SOLEMNITY,
				name: localization.maryMotherOfGod[locale],
				data: {}
			},
			josephHusbandOfMary: {
				moment: moment.utc({year:year, month: 2, day: 19}),
				type: types.SOLEMNITY,
				name: localization.josephHusbandOfMary[locale],
				data: {}
			},
			annunciation: {
				moment: moment.utc({year:year, month: 2, day: 25}),
				type: types.SOLEMNITY,
				name: localization.annunciation[locale],
				data: {}
			},
			birthOfJohnTheBaptist: {
				moment: moment.utc({year:year, month: 5, day: 24}),
				type: types.SOLEMNITY,
				name: localization.birthOfJohnTheBaptist[locale],
				data: {}
			},
			peterAndPaulApostles: {
				moment: moment.utc({year:year, month: 5, day: 29}),
				type: types.SOLEMNITY,
				name: localization.peterAndPaulApostles[locale],
				data: {}
			},
			assumption: {
				moment: moment.utc({year:year, month: 7, day: 15}),
				type: types.SOLEMNITY,
				name: localization.assumption[locale],
				data: {}
			},
			allSaints: {
				moment: moment.utc({year:year, month: 10, day: 1}),
				type: types.SOLEMNITY,
				name: localization.allSaints[locale],
				data: {}
			},
			immaculateConception: {
				moment: moment.utc({year:year, month: 11, day: 8}),
				type: types.SOLEMNITY,
				name: localization.immaculateConception[locale],
				data: {}
			},
			christmas: {
				moment: moment.utc({year:year, month: 11, day: 25}),
				type: types.SOLEMNITY,
				name: localization.christmas[locale],
				data: {}
			}
		};
		return dates;
	},
	movableSolemnities: function( easter, firstSundayOfAdvent, locale ) {
		var dates = {
	        epiphanyOfOurLord: { // Date will be adjusted by the epiphany rubric
	        	moment: moment.utc({ year: easter.year(), month: 0, day: 6 }),
	        	type: types.SOLEMNITY,
	        	name: localization.epiphanyOfOurLord[locale],
				data: {}
	        },
			pentecostSunday: {
				moment: moment.utc(easter).add( 49, 'days' ),
				type: types.SOLEMNITY,
	        	name: localization.pentecostSunday[locale],
				data: {}
			},
			trinitySunday: {
				moment: moment.utc(easter).add( 56, 'days' ),
				type: types.SOLEMNITY,
	        	name: localization.trinitySunday[locale],
				data: {}
			},
			corpusChristi: {
				moment: moment.utc(easter).add( 63, 'days' ),
				type: types.SOLEMNITY,
	        	name: localization.corpusChristi[locale],
				data: {}
			},
			sacredHeart: {
				moment: moment.utc(easter).add( 68, 'days' ),
				type: types.SOLEMNITY,
	        	name: localization.sacredHeart[locale],
				data: {}
			},
			immaculateHeartOfMary: {
				moment: moment.utc(easter).add( 69, 'days' ),
				type: types.MEMORIAL,
	        	name: localization.immaculateHeartOfMary[locale],
				data: {}
			},
			christTheKing: {
				moment: moment.utc(firstSundayOfAdvent).subtract( 7, 'days' ), 
				type: types.SOLEMNITY,
	        	name: localization.christTheKing[locale],
				data: {}
			},
			ashWednesday: {
				moment: moment.utc(easter).subtract( 46, 'days' ),
				type: types.WEEKDAY_FEAST,
				name: localization.ashWednesday[locale],
				data: {}
			},
			palmSunday: {
				moment: moment.utc(easter).subtract( 7, 'days' ),
				type: types.SOLEMNITY,
				name: localization.palmSunday[locale],
				data: {}
			},
			mondayOfHolyWeek: {
				moment: moment.utc(easter).subtract( 6, 'days' ),
				type: types.HOLY_WEEK,
				name: localization.mondayOfHolyWeek[locale],
				data: {}
			},
			tuesdayOfHolyWeek: {
				moment: moment.utc(easter).subtract( 5, 'days' ),
				type: types.HOLY_WEEK,
				name: localization.tuesdayOfHolyWeek[locale],
				data: {}
			},
			wednesdayOfHolyWeek: {
				moment: moment.utc(easter).subtract( 4, 'days' ),
				type: types.HOLY_WEEK,
				name: localization.wednesdayOfHolyWeek[locale],
				data: {}
			},
			holyThursday: {
				moment: moment.utc(easter).subtract( 3, 'days' ),
				type: types.TRIDUUM,
				name: localization.holyThursday[locale],
				data: {}
			},
			goodFriday: {
				moment: moment.utc(easter).subtract( 2, 'days' ),
				type: types.TRIDUUM,
				name: localization.goodFriday[locale],
				data: {}
			},
			holySaturday: {
				moment: moment.utc(easter).subtract( 1, 'days' ),
				type: types.TRIDUUM,
				name: localization.holySaturday[locale],
				data: {}
			},
			easterSunday: {
				moment: easter,
				type: types.SOLEMNITY,
				name: localization.easterSunday[locale],
				data: {}
			},
			mondayInTheOctaveOfEaster: {
				moment: moment.utc(easter).add( 1, 'days'),
				type: types.SOLEMNITY,
				name: localization.mondayInTheOctaveOfEaster[locale],
				data: {}
			},
			tuesdayInTheOctaveOfEaster: {
				moment: moment.utc(easter).add( 2, 'days'),
				type: types.SOLEMNITY,
				name: localization.tuesdayInTheOctaveOfEaster[locale],
				data: {}			
			},
			wednesdayInTheOctaveOfEaster: {
				moment: moment.utc(easter).add( 3, 'days'),
				type: types.SOLEMNITY,
				name: localization.wednesdayInTheOctaveOfEaster[locale],
				data: {}			
			},
			thursdayInTheOctaveOfEaster: {
				moment: moment.utc(easter).add( 4, 'days'),
				type: types.SOLEMNITY,
				name: localization.thursdayInTheOctaveOfEaster[locale],
				data: {}			
			},
			fridayInTheOctaveOfEaster: {
				moment: moment.utc(easter).add( 5, 'days'),
				type: types.SOLEMNITY,
				name: localization.fridayInTheOctaveOfEaster[locale],
				data: {}			
			},
			saturdayInTheOctaveOfEaster: {
				moment: moment.utc(easter).add( 6, 'days'),
				type: types.SOLEMNITY,
				name: localization.saturdayInTheOctaveOfEaster[locale],
				data: {}			
			},
		 	divineMercySunday: {
	        	moment: moment.utc(easter).add( 7, 'days' ),
	        	type: types.SOLEMNITY,
	        	name: localization.divineMercySunday[locale],
				data: {}
	        },
	        thirdSundayOfEaster: {
	        	moment: moment.utc(easter).add( 14, 'days' ),
	        	type: types.SUNDAY_OF_EASTER,
	        	name: localization.thirdSundayOfEaster[locale],
				data: {}
	        },
	        fourthSundayOfEaster: {
	        	moment: moment.utc(easter).add( 21, 'days' ),
	        	type: types.SUNDAY_OF_EASTER,
	        	name: localization.fourthSundayOfEaster[locale],
				data: {}
	        },
	        fifthSundayOfEaster: {
	        	moment: moment.utc(easter).add( 28, 'days' ),
	        	type: types.SUNDAY_OF_EASTER,
	        	name: localization.fifthSundayOfEaster[locale],
				data: {}
	        },
	        sixthSundayOfEaster: {
	        	moment: moment.utc(easter).add( 35, 'days' ),
	        	type: types.SUNDAY_OF_EASTER,
	        	name: localization.sixthSundayOfEaster[locale],
				data: {}
	        },
			ascensionOfTheLord: {
				moment: moment.utc(easter).add( 39, 'days' ),
				type: types.SOLEMNITY,
	        	name: localization.ascensionOfTheLord[locale],
				data: {}
			},
			seventhSundayOfEaster: {
				moment: moment.utc(easter).add( 42, 'days' ),
				type: types.SUNDAY_OF_EASTER,
	        	name: localization.seventhSundayOfEaster[locale],
				data: {}
			}
		};

		// EPIPHANY RUBRIC
		// Epiphany is celebrated on the first Sunday after the first Saturday in January, 
		// which means it could fall on any day from January 2 to January 8. 

		var firstDayOfYear = moment.utc({ year: easter.year(), month: 0, day: 1 });

		// If first day of the year is a Saturday, Mary Mother of God is on that day
		// and Epiphany is on the next day
		if ( firstDayOfYear.day() === 6 ) 
			dates.epiphanyOfOurLord.moment = moment.utc(firstDayOfYear).add( 1, 'days' );
		
		// If first day of the year is a Sunday, Mary Mother of God is on that Sunday and
		// the Sunday proceeding will be Epiphany
		else if ( firstDayOfYear.day() === 0 )
			dates.epiphanyOfOurLord.moment = moment.utc( firstDayOfYear ).add( 7, 'days' );
		
		// If first day of the year is on a weekday (i.e. Monday - Friday),
		// Epiphany will be celebrated on the Sunday proceeding
		else {
			dates.epiphanyOfOurLord.moment = moment.utc( firstDayOfYear ).endOf('week').add( 1, 'days' );
			dates.epiphanyOfOurLord.moment.hour(0).minute(0).seconds(0).millisecond(0);
		}
		return dates;
	}
};