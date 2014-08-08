var moment = require('moment'),
	types = require('./utils').types();

module.exports = {
	fixedSolemnities: function( year ) {
		var dates = {
			maryMotherOfGod: {
				moment: moment.utc({year:year, month: 0, day: 1}),
				type: types.SOLEMNITY,
				name: 'Mary, Mother of God'
			},
			josephHusbandOfMary: {
				moment: moment.utc({year:year, month: 2, day: 19}),
				type: types.SOLEMNITY,
				name: 'Joseph, Husband of Mary'
			},
			annunciation: {
				moment: moment.utc({year:year, month: 2, day: 25}),
				type: types.SOLEMNITY,
				name: 'Annunciation'
			},
			birthOfJohnTheBaptist: {
				moment: moment.utc({year:year, month: 5, day: 24}),
				type: types.SOLEMNITY,
				name: 'Birth of John the Baptist'
			},
			peterAndPaulApostles: {
				moment: moment.utc({year:year, month: 5, day: 29}),
				type: types.SOLEMNITY,
				name: 'Peter & Paul, Apostles'
			},
			assumption: {
				moment: moment.utc({year:year, month: 7, day: 15}),
				type: types.SOLEMNITY,
				name: 'Assumption'
			},
			allSaints: {
				moment: moment.utc({year:year, month: 10, day: 1}),
				type: types.SOLEMNITY,
				name: 'All Saints'
			},
			immaculateConception: {
				moment: moment.utc({year:year, month: 11, day: 8}),
				type: types.SOLEMNITY,
				name: 'Immaculate Conception'
			},
			christmas: {
				moment: moment.utc({year:year, month: 11, day: 25}),
				type: types.SOLEMNITY,
				name: 'Christmas'
			}
		};
		return dates;
	},
	movableSolemnities: function( easter, firstSundayOfAdvent ) {
		var dates = {
	        epiphanyOfOurLord: { // Date will be adjusted by the epiphany rubric
	        	moment: moment.utc({ year: easter.year(), month: 0, day: 6 }),
	        	type: types.SOLEMNITY,
	        	name: 'Epiphany of the Lord'
	        },
			pentecostSunday: {
				moment: moment.utc(easter).add( 49, 'days' ),
				type: types.SOLEMNITY,
	        	name: 'Pentecost'
			},
			trinitySunday: {
				moment: moment.utc(easter).add( 56, 'days' ),
				type: types.SOLEMNITY,
	        	name: 'Trinity Sunday'
			},
			corpusChristi: {
				moment: moment.utc(easter).add( 63, 'days' ),
				type: types.SOLEMNITY,
	        	name: 'The Body and Blood of Christ'
			},
			sacredHeart: {
				moment: moment.utc(easter).add( 68, 'days' ),
				type: types.SOLEMNITY,
	        	name: 'Sacred Heart of Jesus'
			},
			immaculateHeartOfMary: {
				moment: moment.utc(easter).add( 69, 'days' ),
				type: types.MEMORIAL,
	        	name: 'Immaculate Heart of Mary'
			},
			christTheKing: {
				moment: moment.utc(firstSundayOfAdvent).subtract( 7, 'days' ), 
				type: types.SOLEMNITY,
	        	name: 'Christ the King'
			},
			ashWednesday: {
				moment: moment.utc(easter).subtract( 46, 'days' ),
				type: types.WEEKDAY,
				name: 'Ash Wednesday'
			},
			palmSunday: {
				moment: moment.utc(easter).subtract( 7, 'days' ),
				type: types.SOLEMNITY,
				name: 'Palm Sunday'
			},
			mondayOfHolyWeek: {
				moment: moment.utc(easter).subtract( 6, 'days' ),
				type: types.HOLY_WEEK,
				name: 'Monday of Holy Week'
			},
			tuesdayOfHolyWeek: {
				moment: moment.utc(easter).subtract( 5, 'days' ),
				type: types.HOLY_WEEK,
				name: 'Tuesday of Holy Week'
			},
			wednesdayOfHolyWeek: {
				moment: moment.utc(easter).subtract( 4, 'days' ),
				type: types.HOLY_WEEK,
				name: 'Wednesday of Holy Week'
			},
			holyThursday: {
				moment: moment.utc(easter).subtract( 3, 'days' ),
				type: types.TRIDUUM,
				name: 'Holy Thursday'
			},
			goodFriday: {
				moment: moment.utc(easter).subtract( 2, 'days' ),
				type: types.TRIDUUM,
				name: 'Good Friday'
			},
			holySaturday: {
				moment: moment.utc(easter).subtract( 1, 'days' ),
				type: types.TRIDUUM,
				name: 'Holy Saturday/Easter Vigil'
			},
			easterSunday: {
				moment: easter,
				type: types.SOLEMNITY,
				name: 'Easter Sunday'
			},
			mondayInTheOctaveOfEaster: {
				moment: moment.utc(easter).add( 1, 'days'),
				type: types.SOLEMNITY,
				name: 'Monday in the Octave of Easter'
			},
			tuesdayInTheOctaveOfEaster: {
				moment: moment.utc(easter).add( 2, 'days'),
				type: types.SOLEMNITY,
				name: 'Tuesday in the Octave of Easter'			
			},
			wednesdayInTheOctaveOfEaster: {
				moment: moment.utc(easter).add( 3, 'days'),
				type: types.SOLEMNITY,
				name: 'Wednesday in the Octave of Easter'			
			},
			thursdayInTheOctaveOfEaster: {
				moment: moment.utc(easter).add( 4, 'days'),
				type: types.SOLEMNITY,
				name: 'Thursday in the Octave of Easter'			
			},
			fridayInTheOctaveOfEaster: {
				moment: moment.utc(easter).add( 5, 'days'),
				type: types.SOLEMNITY,
				name: 'Friday in the Octave of Easter'			
			},
			saturdayInTheOctaveOfEaster: {
				moment: moment.utc(easter).add( 6, 'days'),
				type: types.SOLEMNITY,
				name: 'Saturday in the Octave of Easter'			
			},
		 	secondSundayOfEaster: {
	        	moment: moment.utc(easter).add( 7, 'days' ),
	        	type: types.SOLEMNITY,
	        	name: '2nd Sunday of Easter'
	        },
	        thirdSundayOfEaster: {
	        	moment: moment.utc(easter).add( 14, 'days' ),
	        	type: types.SUNDAY,
	        	name: '3rd Sunday of Easter'
	        },
	        fourthSundayOfEaster: {
	        	moment: moment.utc(easter).add( 21, 'days' ),
	        	type: types.SUNDAY,
	        	name: '4th Sunday of Easter'
	        },
	        fifthSundayOfEaster: {
	        	moment: moment.utc(easter).add( 28, 'days' ),
	        	type: types.SUNDAY,
	        	name: '5th Sunday of Easter'
	        },
	        sixthSundayOfEaster: {
	        	moment: moment.utc(easter).add( 35, 'days' ),
	        	type: types.SUNDAY,
	        	name: '6th Sunday of Easter'
	        },
			ascensionOfTheLord: {
				moment: moment.utc(easter).add( 39, 'days' ),
				type: types.SOLEMNITY,
	        	name: 'Ascension of the Lord'
			},
			seventhSundayOfEaster: {
				moment: moment.utc(easter).add( 41, 'days' ),
				type: types.SUNDAY,
	        	name: '7th Sunday of Easter'
			}
		};

		// EPIPHANY RUBRIC
		// Epiphany is celebrated on the first Sunday after the first Saturday in January, 
		// which means it could fall on any day from January 2 to January 8. 

		var firstDayOfYear = moment.utc({ year: easter.year(), month: 0, day: 1 });

		// If first day of the year is a Saturday, Mary Mother of God is on Saturday
		// and Epiphany is on the next day
		if ( firstDayOfYear.day() === 6 ) 
			dates.epiphanyOfOurLord.moment = moment.utc(firstDayOfYear).add( 1, 'days' );
		
		// If first day of the year is a Sunday, Mary Mother of God is on that Sunday and
		// the Sunday proceeding will be Epiphany
		else if ( firstDayOfYear.day() === 0 )
			dates.epiphanyOfOurLord.moment = moment.utc( firstDayOfYear ).add( 7, 'days' );
		
		// If first day of the year is on a weekday (i.e. Monday - Friday),
		// Epiphany will be celebrated on the Sunday proceeding
		else
			dates.epiphanyOfOurLord.moment = moment.utc( firstDayOfYear ).endOf('week').add( 1, 'days' );

		return dates;
	}
};