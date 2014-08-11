var moment = require('moment'),
	utils = require('./utils'),
	types = utils.types(),
	liturgicalColors = utils.liturgicalColors();

module.exports = {
	fixedSolemnities: function( year ) {
		var dates = {
			maryMotherOfGod: {
				moment: moment.utc({year:year, month: 0, day: 1}),
				type: types.SOLEMNITY,
				name: 'Mary, Mother of God',
				data: {}
			},
			josephHusbandOfMary: {
				moment: moment.utc({year:year, month: 2, day: 19}),
				type: types.SOLEMNITY,
				name: 'Joseph, Husband of Mary',
				data: {}
			},
			annunciation: {
				moment: moment.utc({year:year, month: 2, day: 25}),
				type: types.SOLEMNITY,
				name: 'Annunciation',
				data: {}
			},
			birthOfJohnTheBaptist: {
				moment: moment.utc({year:year, month: 5, day: 24}),
				type: types.SOLEMNITY,
				name: 'Birth of John the Baptist',
				data: {}
			},
			peterAndPaulApostles: {
				moment: moment.utc({year:year, month: 5, day: 29}),
				type: types.SOLEMNITY,
				name: 'Peter & Paul, Apostles',
				data: {}
			},
			assumption: {
				moment: moment.utc({year:year, month: 7, day: 15}),
				type: types.SOLEMNITY,
				name: 'Assumption',
				data: {}
			},
			allSaints: {
				moment: moment.utc({year:year, month: 10, day: 1}),
				type: types.SOLEMNITY,
				name: 'All Saints',
				data: {}
			},
			immaculateConception: {
				moment: moment.utc({year:year, month: 11, day: 8}),
				type: types.SOLEMNITY,
				name: 'Immaculate Conception',
				data: {}
			},
			christmas: {
				moment: moment.utc({year:year, month: 11, day: 25}),
				type: types.SOLEMNITY,
				name: 'Christmas',
				data: {}
			}
		};
		return dates;
	},
	movableSolemnities: function( easter, firstSundayOfAdvent ) {
		var dates = {
	        epiphanyOfOurLord: { // Date will be adjusted by the epiphany rubric
	        	moment: moment.utc({ year: easter.year(), month: 0, day: 6 }),
	        	type: types.SOLEMNITY,
	        	name: 'Epiphany of the Lord',
				data: {}
	        },
			pentecostSunday: {
				moment: moment.utc(easter).add( 49, 'days' ),
				type: types.SOLEMNITY,
	        	name: 'Pentecost',
				data: {}
			},
			trinitySunday: {
				moment: moment.utc(easter).add( 56, 'days' ),
				type: types.SOLEMNITY,
	        	name: 'Trinity Sunday',
				data: {}
			},
			corpusChristi: {
				moment: moment.utc(easter).add( 63, 'days' ),
				type: types.SOLEMNITY,
	        	name: 'The Body and Blood of Christ',
				data: {}
			},
			sacredHeart: {
				moment: moment.utc(easter).add( 68, 'days' ),
				type: types.SOLEMNITY,
	        	name: 'Sacred Heart of Jesus',
				data: {}
			},
			immaculateHeartOfMary: {
				moment: moment.utc(easter).add( 69, 'days' ),
				type: types.MEMORIAL,
	        	name: 'Immaculate Heart of Mary',
				data: {}
			},
			christTheKing: {
				moment: moment.utc(firstSundayOfAdvent).subtract( 7, 'days' ), 
				type: types.SOLEMNITY,
	        	name: 'Christ the King',
				data: {}
			},
			ashWednesday: {
				moment: moment.utc(easter).subtract( 46, 'days' ),
				type: types.WEEKDAY_FEAST,
				name: 'Ash Wednesday',
				data: {}
			},
			palmSunday: {
				moment: moment.utc(easter).subtract( 7, 'days' ),
				type: types.SOLEMNITY,
				name: 'Palm Sunday',
				data: {}
			},
			mondayOfHolyWeek: {
				moment: moment.utc(easter).subtract( 6, 'days' ),
				type: types.HOLY_WEEK,
				name: 'Monday of Holy Week',
				data: {}
			},
			tuesdayOfHolyWeek: {
				moment: moment.utc(easter).subtract( 5, 'days' ),
				type: types.HOLY_WEEK,
				name: 'Tuesday of Holy Week',
				data: {}
			},
			wednesdayOfHolyWeek: {
				moment: moment.utc(easter).subtract( 4, 'days' ),
				type: types.HOLY_WEEK,
				name: 'Wednesday of Holy Week',
				data: {}
			},
			holyThursday: {
				moment: moment.utc(easter).subtract( 3, 'days' ),
				type: types.TRIDUUM,
				name: 'Holy Thursday (Paschal Triduum)',
				data: {}
			},
			goodFriday: {
				moment: moment.utc(easter).subtract( 2, 'days' ),
				type: types.TRIDUUM,
				name: 'Good Friday (Paschal Triduum)',
				data: {}
			},
			holySaturday: {
				moment: moment.utc(easter).subtract( 1, 'days' ),
				type: types.TRIDUUM,
				name: 'Holy Saturday/Easter Vigil (Paschal Triduum)',
				data: {}
			},
			easterSunday: {
				moment: easter,
				type: types.SOLEMNITY,
				name: 'Easter Sunday',
				data: {}
			},
			mondayInTheOctaveOfEaster: {
				moment: moment.utc(easter).add( 1, 'days'),
				type: types.SOLEMNITY,
				name: 'Monday in the Octave of Easter',
				data: {}
			},
			tuesdayInTheOctaveOfEaster: {
				moment: moment.utc(easter).add( 2, 'days'),
				type: types.SOLEMNITY,
				name: 'Tuesday in the Octave of Easter',
				data: {}			
			},
			wednesdayInTheOctaveOfEaster: {
				moment: moment.utc(easter).add( 3, 'days'),
				type: types.SOLEMNITY,
				name: 'Wednesday in the Octave of Easter',
				data: {}			
			},
			thursdayInTheOctaveOfEaster: {
				moment: moment.utc(easter).add( 4, 'days'),
				type: types.SOLEMNITY,
				name: 'Thursday in the Octave of Easter',
				data: {}			
			},
			fridayInTheOctaveOfEaster: {
				moment: moment.utc(easter).add( 5, 'days'),
				type: types.SOLEMNITY,
				name: 'Friday in the Octave of Easter',
				data: {}			
			},
			saturdayInTheOctaveOfEaster: {
				moment: moment.utc(easter).add( 6, 'days'),
				type: types.SOLEMNITY,
				name: 'Saturday in the Octave of Easter',
				data: {}			
			},
		 	divineMercySunday: {
	        	moment: moment.utc(easter).add( 7, 'days' ),
	        	type: types.SOLEMNITY,
	        	name: 'Divine Mercy Sunday (2nd Sunday of Easter)',
				data: {}
	        },
	        thirdSundayOfEaster: {
	        	moment: moment.utc(easter).add( 14, 'days' ),
	        	type: types.SUNDAY_OF_EASTER,
	        	name: '3rd Sunday of Easter',
				data: {}
	        },
	        fourthSundayOfEaster: {
	        	moment: moment.utc(easter).add( 21, 'days' ),
	        	type: types.SUNDAY_OF_EASTER,
	        	name: '4th Sunday of Easter',
				data: {}
	        },
	        fifthSundayOfEaster: {
	        	moment: moment.utc(easter).add( 28, 'days' ),
	        	type: types.SUNDAY_OF_EASTER,
	        	name: '5th Sunday of Easter',
				data: {}
	        },
	        sixthSundayOfEaster: {
	        	moment: moment.utc(easter).add( 35, 'days' ),
	        	type: types.SUNDAY_OF_EASTER,
	        	name: '6th Sunday of Easter',
				data: {}
	        },
			ascensionOfTheLord: {
				moment: moment.utc(easter).add( 39, 'days' ),
				type: types.SOLEMNITY,
	        	name: 'Ascension of the Lord',
				data: {}
			},
			seventhSundayOfEaster: {
				moment: moment.utc(easter).add( 42, 'days' ),
				type: types.SUNDAY_OF_EASTER,
	        	name: '7th Sunday of Easter',
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