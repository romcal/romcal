
var calendar = require('node-calendar'),
	moment = require('moment'),
	twix = require('twix'),
	lodash = require('lodash'),
	cheerio = require('cheerio');

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], 
	ordinalNumbers = [
        '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th',
        '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th',
        '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th',
        '31st', '32nd', '33rd', '34th', '35th', '36th', '37th', '38th', '39th', '40th',
    ], 
	types = {
		SOLEMNITY: 'Solemnity',
		FEAST: 'Feast',
		HOLY_WEEK: 'Holy Week',
		COMMEM: 'Commemoration',
		TRIDUUM: 'Triduum',
		WEEKDAY: 'Weekday',
		SUNDAY: 'Sunday',
		MEMORIAL: 'Memorial',
		OPT_MEMORIAL: 'Optional Memorial',
	},
	liturgicalColors = {
		RED: {
			hex: '#ff0000'
		},
		PURPLE: {
			hex: '#800080'
		},
		GREEN: {
			hex: '#008000'
		},
		WHITE: {
			hex: '#ffffff'
		},
		GOLD: {
			hex: '#FFD700'
		}
	};

/**
  * This algorithm is based on the algorithm of Oudin (1940) and quoted in
  *	"Explanatory Supplement to the Astronomical Almanac", P. Kenneth
  *	Seidelmann, editor.
  */
function _dateOfEaster( Y ) {

	var C = Math.floor(Y/100),
    	N = Y - 19*Math.floor(Y/19),
    	K = Math.floor((C - 17)/25),
    	I = C - Math.floor(C/4) - Math.floor((C - K)/3) + 19*N + 15,

    I = I - 30*Math.floor((I/30));
    I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11));

    var J = Y + Math.floor(Y/4) + I + 2 - C + Math.floor(C/4);
    J = J - 7*Math.floor(J/7);

    var L = I - J,
    	M = 3 + Math.floor((L + 40)/44),
     	D = L + 28 - 31*Math.floor(M/4);

    return moment.utc({ year: Y, month: ( M - 1 ), day: D });
}

function _movableSolemnities( easter, firstSundayOfAdvent ) {

	var dates = {
        epiphanyOfOurLord: { // Date will be adjusted by the epiphany rubric
        	moment: moment.utc({ year: easter.year(), month: 0, day: 6 }),
        	type: types.SOLEMNITY,
        	name: 'Epiphany of the Lord'
        },
		pentecostSunday: {
			moment: moment.utc(easter).add( 49, 'days' ),
			types: types.SOLEMNITY,
        	name: 'Pentecost'
		},
		trinitySunday: {
			moment: moment.utc(easter).add( 56, 'days' ),
			types: types.SOLEMNITY,
        	name: 'Trinity Sunday'
		},
		corpusChristi: {
			moment: moment.utc(easter).add( 63, 'days' ),
			types: types.SOLEMNITY,
        	name: 'The Body and Blood of Christ'
		},
		sacredHeart: {
			moment: moment.utc(easter).add( 68, 'days' ),
			types: types.SOLEMNITY,
        	name: 'Sacred Heart of Jesus'
		},
		christTheKing: {
			moment: moment.utc(firstSundayOfAdvent).subtract( 7, 'days' ), 
			types: types.SOLEMNITY,
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
        	types: types.SOLEMNITY,
        	name: '2nd Sunday of Easter'
        },
        thirdSundayOfEaster: {
        	moment: moment.utc(easter).add( 14, 'days' ),
        	types: types.SUNDAY,
        	name: '3rd Sunday of Easter'
        },
        fourthSundayOfEaster: {
        	moment: moment.utc(easter).add( 21, 'days' ),
        	types: types.SUNDAY,
        	name: '4th Sunday of Easter'
        },
        fifthSundayOfEaster: {
        	moment: moment.utc(easter).add( 28, 'days' ),
        	types: types.SUNDAY,
        	name: '5th Sunday of Easter'
        },
        sixthSundayOfEaster: {
        	moment: moment.utc(easter).add( 35, 'days' ),
        	types: types.SUNDAY,
        	name: '6th Sunday of Easter'
        },
		ascensionOfTheLord: {
			moment: moment.utc(easter).add( 39, 'days' ),
			types: types.SOLEMNITY,
        	name: 'Ascension of the Lord'
		},
		seventhSundayOfEaster: {
			moment: moment.utc(easter).add( 41, 'days' ),
			types: types.SUNDAY,
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

function _feastsOfTheLord( fixedSolemnities, movableSolemnities ) {

	var christmas = fixedSolemnities.christmas.moment,
		year = christmas.year(), 
		dates = {
			// Will be adjusted according to the epiphany rubric
			baptismOfTheLord: {
				moment: moment.utc({year: year, month: 0, day: 7 }),
				type: types.FEAST,
				name: 'Baptism of the Lord'
			},
			presentationOfTheLord: {
				moment: moment.utc({year:year, month: 1, day: 2}),
				type: types.FEAST,
				name: 'Presentation of the Lord'
			},
			transfiguration: {
				moment: moment.utc({year:year, month: 7, day: 6}),
				type: types.FEAST,
				name: 'Transfiguration'
			},
			triumphOfTheCross: {
				moment: moment.utc({year:year, month: 8, day: 14}),
				type: types.FEAST,
				name: 'Triumph of the Cross'
			}
		};

	if ( christmas.day() === 0 )
		dates.holyFamily = {
			moment: moment.utc({year: year, month: 11, day: 30}),
			type: types.FEAST,
			name: 'Holy Family'
		};
	else {

		// If Christmas is not a Sunday, then Holy Family is celebrated on the Sunday after Christmas
		dates.holyFamily = {
			moment: moment.utc( christmas ).endOf('week').add( 1, 'days'),
			type: types.FEAST,
			name: 'Holy Family'
		};

		// On January 1, the faithful celebrate the solemnity of Mary, Mother of God; 
		// however, if Jan. 1 falls on the Sunday after Christmas, then the feast of 
		// the Holy Family would be celebrated on Dec. 30.
		if ( dates.holyFamily.moment.isSame( moment.utc({ year: (year + 1), month: 0, day: 1 } ) ) ) 
			dates.holyFamily.moment = moment.utc({year: year, month: 11, day: 30});
	}

	var epiphanyOfOurLord = movableSolemnities.epiphanyOfOurLord.moment;

	// If Epiphany is celebrated on Jan. 6:
	if ( epiphanyOfOurLord.date() === 6 ) { 

		// The Baptism of the Lord occurs on the Sunday following Jan. 6.
		dates.baptismOfTheLord.moment = moment.utc( epiphanyOfOurLord ).add( 7, 'days' );

		// Days from Jan. 2 through Jan. 5 are called "*day before Epiphany".
		var beforeIterator = moment.twix( moment.utc({year:year, month: 0, day: 2}), moment.utc({year:year, month: 0, day: 5}) ).iterate('days');
		while( beforeIterator.hasNext() ) {

			var date = beforeIterator.next();

			// If a Sunday occurs on a day from Jan. 2 through Jan. 5, it is called the "Second Sunday of Christmas".
			if ( date.day() === 0 ) {
				movableSolemnities['secondSundayOfChristmas'] = {
					moment: date,
					types: types.SUNDAY,
					name: ordinalNumbers[1] + ' Sunday of Christmas'
				};
			}
			else {			
				movableSolemnities[ days[ date.day() ] + 'BeforeEpiphany' ] = {
					moment: date,
					type: types.WEEKDAY,
					name: days[ date.day() ] + ' before Epiphany'
				};
			}
		}

		// Days between Jan. 6 and the following Sunday are called "*day after Epiphany".
		var afterIterator = moment.twix( epiphanyOfOurLord, dates.baptismOfTheLord.moment ).iterateInner('days');
		while( afterIterator.hasNext() ) {
			var date = afterIterator.next();
			if ( date.day() === 0 ) break; // Break when this loop reaches a sunday
			movableSolemnities[ days[ date.day() ] + 'AfterEpiphany' ] = {
				moment: date,
				type: types.WEEKDAY,
				name: days[ date.day() ] + ' after Epiphany'
			};	
		}
	}
	// If Epiphany is not celebrated on Jan. 6 (i.e., celebrated on Sunday):
	else {

		// Days after Jan. 1 but before the Sunday occurring from Jan. 2 through Jan. 8 are called "*day before Epiphany".
		var beforeIterator = moment.twix( moment.utc({ year: year, month: 0, day: 2 }), moment.utc({ year: year, month: 0, day: 8 })).iterate('days');
		while( beforeIterator.hasNext() ) {
			var date = beforeIterator.next();
			if ( date.day() === 0 ) break; // Break when this loop reaches a sunday
			movableSolemnities[ days[ date.day() ] + 'BeforeEpiphany' ] = {
				moment: date,
				types: types.WEEKDAY,
				name: ordinalNumbers[1] + ' before Epiphany'
			};
		}

		// If Epiphany occurs on Jan. 7 or Jan. 8, then the Baptism of the Lord is the next day (Monday)
		if ( epiphanyOfOurLord.date() === 7 || epiphanyOfOurLord.date() === 8 )
			dates.baptismOfTheLord.moment = moment.utc( epiphanyOfOurLord ).add( 1, 'days' );

		// Epiphany occurs on or before Jan. 6, then the days of the week following Epiphany are 
		// called "*day after Epiphany" and the Sunday following Epiphany is the Baptism of the Lord.
		if ( epiphanyOfOurLord.date() <= 6 ) {

			dates.baptismOfTheLord.moment = moment.utc( epiphanyOfOurLord ).add( 7, 'days' );

			var afterIterator = moment.twix(epiphanyOfOurLord, dates.baptismOfTheLord.moment ).iterateInner('days');
			while( afterIterator.hasNext() ) {
				var date = afterIterator.next();
				if ( date.day() === 0 ) break; // Break when this loop reaches a sunday
				movableSolemnities[ days[ date.day() ] + 'AfterEpiphany' ] = {
					moment: date,
					type: types.WEEKDAY,
					name: days[ date.day() ] + ' after Epiphany'
				};	
			}
		}
	}

	return {
		feastsOfTheLord: dates,
		movableSolemnities: movableSolemnities
	};
}

function _fixedSolemnities( year ) {
	var dates = {
			maryMotherOfGod: {
				moment: moment.utc({year:year, month: 0, day: 1}),
				type: types.SOLEMNITY,
				name: 'Mary, Mother of God'
			},
			// Will be adjusted according to the epiphany rubric
			epiphanyOfOurLord: {
				moment: moment.utc({year:year, month: 0, day: 6}),
				type: types.SOLEMNITY,
				name: 'Epiphany of the Lord'
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
}

function _adventSeason( christmas ) {

	var dates = {};
		lengthOfAdvent = 0;

    // The length of Advent depends upon the day of the week on which Christmas occurs
    switch ( christmas.day() ) {
    	case 0:
    		lengthOfAdvent = 28;
    		break;
    	case 1:
    		lengthOfAdvent = 22;
    		break;
    	case 2:
    		lengthOfAdvent = 23;
    		break;
    	case 3:
    		lengthOfAdvent = 24;
    		break;
    	case 4:
    		lengthOfAdvent = 25;
    		break;
    	case 5:
    		lengthOfAdvent = 26;
    		break;
    	case 6:
    		lengthOfAdvent = 27;
    		break;
    	default:
    		break;
    }

    var iterator = moment.twix( moment.utc(christmas).subtract( lengthOfAdvent, 'days') , christmas ).iterateInner('days'),
    	sundays = 0, ctr = 0; currentWeek = 0;

    while( iterator.hasNext() ) {

    	var date = iterator.next();

    	switch( date.day() ) {
    		case 0:
	    		dates[ 'the' + ordinalNumbers[sundays] + 'SundayOfAdvent' ] = {
	    			moment: date,
	    			type: types.SUNDAY,
	    			name: ordinalNumbers[sundays] + ' Sunday of Advent'
	    		};
	    		sundays++;
    			break;
    		default:
    			dates[ days[ date.day() ] + 'OfThe' + ordinalNumbers[ currentWeek ] + 'WeekOfAdvent' ] = {
    				moment: date,
    				types: types.WEEKDAY,
    				name: days[ date.day() ] + ' of the ' + ordinalNumbers[ currentWeek ] + ' week of Advent'
    			}
    			break;
    	}

    	ctr++; // Increment days
		if ( ctr % 7 === 0 )
    		currentWeek++;
    }

    return dates;
}

/* Ordinary Time in the early part of the year begins the day after the Baptism of the Lord 
 * and concludes the day before Ash Wednesday.
 *
 * Ordinary Time in the later part of the year begins the day after Pentecost and concludes 
 * the day before the First Sunday of Advent.
 *
 * The Solemnity of Christ the King is always the 34th (and last) Sunday of Ordinary Time 
 * and is the week before the First Sunday of Advent. The Sundays of Ordinary Time in the 
 * latter part of the year are numbered backwards from Christ the King to Pentecost.
 */
function _ordinaryTime( movableSolemnities, feastsOfTheLord ) {

	var baptismOfTheLord = feastsOfTheLord.baptismOfTheLord.moment,
		ashWednesday = movableSolemnities.ashWednesday.moment,
		pentecostSunday = movableSolemnities.pentecostSunday.moment,
		christTheKing = movableSolemnities.christTheKing.moment;

	var firstIterator = moment.twix( baptismOfTheLord, ashWednesday ).iterateInner('days'),
		secondIterator = moment.twix( pentecostSunday, christTheKing ).iterateInner('days');

    var dates = {}, sundays = 1, ctr = 0; currentWeek = 0;
    while( firstIterator.hasNext() ) {
        var date = firstIterator.next();
        switch( date.day() ) {
            case 0:
                dates[ 'the' + ordinalNumbers[sundays] + 'SundayOfOrdinaryTime' ] = {
                    moment: date,
                    type: types.SUNDAY,
                    name: ordinalNumbers[sundays] + ' Sunday of Ordinary Time'
                };
                sundays++;
                break;
            default:
                dates[ days[ date.day() ] + 'OfThe' + ordinalNumbers[ currentWeek ] + 'WeekOfOrdinaryTime' ] = {
                    moment: date,
                    types: types.WEEKDAY,
                    name: days[ date.day() ] + ' of the ' + ordinalNumbers[ currentWeek ] + ' week of Ordinary Time'
                }
                break;
        }

        ctr++;
        if ( ctr % 7 === 0 )
            currentWeek++;
	}

	// The Solemnity of Christ the King is always the 34th (and last) Sunday of Ordinary Time 
	// and is the week before the First Sunday of Advent. The Sundays of Ordinary Time in the 
	// latter part of the year are numbered backwards from Christ the King to Pentecost.

	var latterOrdinaryTime = [];
    while ( secondIterator.hasNext() ) {
    	latterOrdinaryTime.push( secondIterator.next() );
    }

    lodash.forOwnRight( latterOrdinaryTime, function( date ) {
    	

    });


	// lodash.map( dates, function( v,k,c) {
	// 	console.log( k + ":" + v.moment.toString() );
	// })

    return dates;
}

function _seasonOfLent( easter ) {

}

function _lentHolyWeekAdjustments( fixedSolemnities, movableSolemnities ) {

    var annunciation = fixedSolemnities.annunciation,
        palmSunday = movableSolemnities.palmSunday,
        secondSundayOfEaster = movableSolemnities.secondSundayOfEaster;

    // If the Annunciation (Mar 25) falls on Palm Sunday, it is celebrated on the Saturday preceding
    if ( annunciation.isSame( palmSunday ) )
        fixedSolemnities.annunciation = moment.utc(palmSunday).startOf('week').subtract( 1, 'days' );

    //  If it falls during Holy Week or within the Octave of Easter, the Annunciation is transferred to the Monday of the Second Week of Easter
    if ( movableSolemnities.holyWeek.contains( annunciation ) || movableSolemnities.octaveOfEaster.contains( annunciation ) )
        fixedSolemnities.annunciation = moment.utc(secondSundayOfEaster).add( 1, 'days' );
}

module.exports = {

	dates: function( year ) {

		if ( lodash.isEmpty( year ) )
			year = moment.utc().year();
		else if ( lodash.isString( year ) )
			year = parseInt( year );
		else if ( lodash.isObject( year ) )
			year = moment.utc().year();

		var easter = _dateOfEaster( year ),
			fixedSolemnities = _fixedSolemnities( year ),
			adventSeason = _adventSeason( fixedSolemnities.christmas.moment ),
			// The function _movableSolemnities calculates the date of epiphany based on the epiphany rubric
			movableSolemnities = _movableSolemnities( easter, adventSeason.the1stSundayOfAdvent.moment );

		// The function _feastsOfTheLord calculates much of the rules described in the epiphany rubric
		var response = _feastsOfTheLord( fixedSolemnities, movableSolemnities ),
			feastsOfTheLord = response.feastsOfTheLord,
			movableSolemnities = response.movableSolemnities;
		

		var ordinaryTime = _ordinaryTime( movableSolemnities, feastsOfTheLord );

		var merged = {};
		lodash.merge( merged, fixedSolemnities );
		lodash.merge( merged, adventSeason );
		lodash.merge( merged, movableSolemnities );
		lodash.merge( merged, feastsOfTheLord );
		lodash.merge( merged, ordinaryTime );

		var liturgicalDates = {};



	 	var iterator = moment.twix(
    		{ year: year, month: 0, day: 1 }, 
    		{ year: year, month: 11, day: 31 }
    	).iterate('days');

	 	var dates = {};
    	while ( iterator.hasNext() ) {
    		var date = iterator.next();
    		dates[ date.valueOf() ] = {
    			moment: date
    		};
    	}


		// console.log( adventSeason.firstSundayOfAdvent.toString() );
		// console.log( adventSeason.secondSundayOfAdvent.toString() );
		// console.log( adventSeason.thirdSundayOfAdvent.toString() );
		// console.log( adventSeason.fourthSundayOfAdvent.toString() );

	}
};