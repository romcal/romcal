
var calendar = require('node-calendar'),
	moment = require('moment'),
	twix = require('twix'),
	lodash = require('lodash'),
	cheerio = require('cheerio');

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], 
	ordinalNumbers = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'], 
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
	};

/**
  * This algorithm is based on the algorithm of Oudin (1940) and quoted in
  *	"Explanatory Supplement to the Astronomical Almanac", P. Kenneth
  *	Seidelmann, editor.
  */
function _dateOfEaster( year ) {

	var century = Math.floor(year/100),
     	N = year - 19*Math.floor(year/19),
    	K = Math.floor((century - 17)/25),
    	I = century - Math.floor(century/4) - Math.floor((century - K)/3) + 19*N + 15;

    I = I - 30*Math.floor((I/30));
    I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11));
    
    var J = year + Math.floor(year/4) + I + 2 - century + Math.floor(century/4);
    J = J - 7*Math.floor(J/7);
    
    var L = I - J,
    	M = 3 + Math.floor((L + 40)/44),
    	D = L + 28 - 31*Math.floor(M/4);

    // For moment
    M = M - 1;

    var M = (M < 10) ? '0' + M : M,
    	D = (D < 10) ? '0' + D : D;

    return moment({ year: year, month: M, day: D });
}

function _movableSolemnities( easter, firstSundayOfAdvent ) {

	var dates = {
        epiphanyOfOurLord: {
        	moment: moment({ year: easter.year(), month: 0, day: 2 }),
        	type: types.SOLEMNITY,
        	name: 'Epiphany of the Lord'
        },
		pentecostSunday: {
			moment: moment(easter).add( 49, 'days' ),
			types: types.SOLEMNITY,
        	name: 'Pentecost'
		},
		trinitySunday: {
			moment: moment(easter).add( 56, 'days' ),
			types: types.SOLEMNITY,
        	name: 'Trinity Sunday'
		},
		corpusChristi: {
			moment: moment(easter).add( 63, 'days' ),
			types: types.SOLEMNITY,
        	name: 'The Body and Blood of Christ'
		},
		sacredHeart: {
			moment: moment(easter).add( 68, 'days' ),
			types: types.SOLEMNITY,
        	name: 'Sacred Heart of Jesus'
		},
		christTheKing: {
			moment: moment(firstSundayOfAdvent).subtract( 7, 'days' ), 
			types: types.SOLEMNITY,
        	name: 'Christ the King'
		},
		ashWednesday: {
			moment: moment(easter).subtract( 46, 'days' ),
			type: types.WEEKDAY,
			name: 'Ash Wednesday'
		},
		palmSunday: {
			moment: moment(easter).subtract( 7, 'days' ),
			type: types.SOLEMNITY,
			name: 'Palm Sunday'
		},
		mondayOfHolyWeek: {
			moment: moment(easter).subtract( 6, 'days' ),
			type: types.HOLY_WEEK,
			name: 'Monday of Holy Week'
		},
		tuesdayOfHolyWeek: {
			moment: moment(easter).subtract( 5, 'days' ),
			type: types.HOLY_WEEK,
			name: 'Tuesday of Holy Week'
		},
		wednesdayOfHolyWeek: {
			moment: moment(easter).subtract( 4, 'days' ),
			type: types.HOLY_WEEK,
			name: 'Wednesday of Holy Week'
		},
		holyThursday: {
			moment: moment(easter).subtract( 3, 'days' ),
			type: types.TRIDUUM,
			name: 'Holy Thursday'
		},
		goodFriday: {
			moment: moment(easter).subtract( 2, 'days' ),
			type: types.TRIDUUM,
			name: 'Good Friday'
		},
		holySaturday: {
			moment: moment(easter).subtract( 1, 'days' ),
			type: types.TRIDUUM,
			name: 'Holy Saturday/Easter Vigil'
		},
		easterSunday: {
			moment: easter,
			type: types.SOLEMNITY,
			name: 'Easter Sunday'
		},
		mondayInTheOctaveOfEaster: {
			moment: moment(easter).add( 1, 'days'),
			type: types.SOLEMNITY,
			name: 'Monday in the Octave of Easter'
		},
		tuesdayInTheOctaveOfEaster: {
			moment: moment(easter).add( 2, 'days'),
			type: types.SOLEMNITY,
			name: 'Tuesday in the Octave of Easter'			
		},
		wednesdayInTheOctaveOfEaster: {
			moment: moment(easter).add( 3, 'days'),
			type: types.SOLEMNITY,
			name: 'Wednesday in the Octave of Easter'			
		},
		thursdayInTheOctaveOfEaster: {
			moment: moment(easter).add( 4, 'days'),
			type: types.SOLEMNITY,
			name: 'Thursday in the Octave of Easter'			
		},
		fridayInTheOctaveOfEaster: {
			moment: moment(easter).add( 5, 'days'),
			type: types.SOLEMNITY,
			name: 'Friday in the Octave of Easter'			
		},
		saturdayInTheOctaveOfEaster: {
			moment: moment(easter).add( 6, 'days'),
			type: types.SOLEMNITY,
			name: 'Saturday in the Octave of Easter'			
		},
	 	secondSundayOfEaster: {
        	moment: moment(easter).add( 7, 'days' ),
        	types: types.SOLEMNITY,
        	name: '2nd Sunday of Easter'
        },
        thirdSundayOfEaster: {
        	moment: moment(easter).add( 14, 'days' ),
        	types: types.SUNDAY,
        	name: '3rd Sunday of Easter'
        },
        fourthSundayOfEaster: {
        	moment: moment(easter).add( 21, 'days' ),
        	types: types.SUNDAY,
        	name: '4th Sunday of Easter'
        },
        fifthSundayOfEaster: {
        	moment: moment(easter).add( 28, 'days' ),
        	types: types.SUNDAY,
        	name: '5th Sunday of Easter'
        },
        sixthSundayOfEaster: {
        	moment: moment(easter).add( 35, 'days' ),
        	types: types.SUNDAY,
        	name: '6th Sunday of Easter'
        },
		ascensionOfTheLord: {
			moment: moment(easter).add( 39, 'days' ),
			types: types.SOLEMNITY,
        	name: 'Ascension of the Lord'
		},
		seventhSundayOfEaster: {
			moment: moment(easter).add( 41, 'days' ),
			types: types.SUNDAY,
        	name: '7th Sunday of Easter'
		}
	};


	return dates;
}

function _feastsOfTheLord( christmas ) {

	var year = christmas.year(), 
		dates = {
			// Will be adjusted according to the epiphany rubric
			baptismOfTheLord: {
				moment: moment({year: year, month: 0, day: 7 }),
				type: types.FEAST,
				name: 'Baptism of the Lord'
			},
			presentationOfTheLord: {
				moment: moment({year:year, month: 1, day: 2}),
				type: types.FEAST,
				name: 'Presentation of the Lord'
			},
			transfiguration: {
				moment: moment({year:year, month: 7, day: 6}),
				type: types.FEAST,
				name: 'Transfiguration'
			},
			triumphOfTheCross: {
				moment: moment({year:year, month: 8, day: 14}),
				type: types.FEAST,
				name: 'Triumph of the Cross'
			}
		};

	if ( christmas.day() === 0 )
		dates.holyFamily = moment({year: year, month: 11, day: 30});
	else
		dates.holyFamily = moment(christmas).add( 7, 'days');

	return dates
}

function _fixedSolemnities( year ) {
	var dates = {
			maryMotherOfGod: {
				moment: moment({year:year, month: 0, day: 1}),
				type: types.SOLEMNITY,
				name: 'Mary, Mother of God'
			},
			// Will be adjusted according to the epiphany rubric
			epiphanyOfOurLord: {
				moment: moment({year:year, month: 0, day: 6}),
				type: types.SOLEMNITY,
				name: 'Epiphany of the Lord'
			},
			josephHusbandOfMary: {
				moment: moment({year:year, month: 2, day: 19}),
				type: types.SOLEMNITY,
				name: 'Joseph, Husband of Mary'
			},
			annunciation: {
				moment: moment({year:year, month: 2, day: 25}),
				type: types.SOLEMNITY,
				name: 'Annunciation'
			},
			birthOfJohnTheBaptist: {
				moment: moment({year:year, month: 5, day: 24}),
				type: types.SOLEMNITY,
				name: 'Birth of John the Baptist'
			},
			peterAndPaulApostles: {
				moment: moment({year:year, month: 5, day: 29}),
				type: types.SOLEMNITY,
				name: 'Peter & Paul, Apostles'
			},
			assumption: {
				moment: moment({year:year, month: 7, day: 15}),
				type: types.SOLEMNITY,
				name: 'Assumption'
			},
			allSaints: {
				moment: moment({year:year, month: 10, day: 1}),
				type: types.SOLEMNITY,
				name: 'All Saints'
			},
			immaculateConception: {
				moment: moment({year:year, month: 11, day: 8}),
				type: types.SOLEMNITY,
				name: 'Immaculate Conception'
			},
			christmas: {
				moment: moment({year:year, month: 11, day: 25}),
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

    var iterator = moment.twix( moment(christmas).subtract( lengthOfAdvent, 'days') , moment(christmas).subtract( 1, 'days') ).iterate('days'),
    	sundays = 0, ctr = 0; currentWeek = 0;

    while( iterator.hasNext() ) {

    	var date = iterator.next();

    	switch( date.day() ) {
    		case 0:
	    		dates[ ordinalNumbers[sundays] + 'SundayOfAdvent' ] = {
	    			moment: date,
	    			type: types.SUNDAY,
	    			name: ordinalNumbers[sundays] + ' Sunday of Advent'
	    		};
	    		sundays++;
    			break;
    		default:
    			dates[ days[ date.day() ] + 'OfThe' + ordinalNumbers[ currentWeek ] + 'OfAdvent' ] = {
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

/*
 * In places where the solemnity of the Epiphany is to be transferred to the Sunday 
 * falling on 7 January or 8 January, with the result that the feast of the 
 * Baptism of the Lord would be omitted, this feast is to be transferred to the 
 * Monday immediately following that Sunday
 */
function _epiphanyRubric( epiphanyOfOurLord, fixedSolemnities, feastsOfTheLord ) {

	var year = epiphanyOfOurLord.year();

	// If Epiphany is celebrated on Jan. 6
    if ( epiphanyOfOurLord.date() === 6 ) {
        
        // Jan. 1 is the Solemnity of Mary, Mother of God.
        fixedSolemnities.maryMotherOfGod = moment({year:year, month: 0, day: 1});

        // The Baptism of the Lord occurs on the Sunday following Jan. 6.
        feastsOfTheLord.baptismOfTheLord = moment( epiphanyOfOurLord ).endOf('week').add( 1, 'days');

        // If a Sunday occurs between Jan. 2 through Jan. 5, it is called the "Second Sunday of Christmas".
        if ( moment({year:year, month: 0, day: 2}).day() === 0 ||
        	 moment({year:year, month: 0, day: 3}).day() === 0 ||
        	 moment({year:year, month: 0, day: 4}).day() === 0 || 
        	 moment({year:year, month: 0, day: 5}).day() === 0 ) {

        }



    }
    // If Epiphany is not celebrated on Jan. 6 (i.e., celebrated on Sunday)
    else {

    	// Jan. 1 is the Solemnity of Mary, Mother of God.
        fixedSolemnities.maryMotherOfGod = moment({year:year, month: 0, day: 1});

        // Epiphany is celebrated on the Sunday occurring from Jan. 2 through Jan. 8.
        var iterator = moment.twix( moment({year:year, month: 0, day: 2}), 
        							moment({year:year, month: 0, day: 8})).iterate('days');

        while ( iterator.hasNext() ) {
        	if ( iterator.next().day() === 0 ) {

        		return;
        	}
        }
        
    }
}


function _lentHolyWeekAdjustments( fixedSolemnities, movableSolemnities ) {

    var annunciation = fixedSolemnities.annunciation,
        palmSunday = movableSolemnities.palmSunday,
        secondSundayOfEaster = movableSolemnities.secondSundayOfEaster;

    // If the Annunciation (Mar 25) falls on Palm Sunday, it is celebrated on the Saturday preceding
    if ( annunciation.isSame( palmSunday ) )
        fixedSolemnities.annunciation = moment(palmSunday).startOf('week').subtract( 1, 'days' );

    //  If it falls during Holy Week or within the Octave of Easter, the Annunciation is transferred to the Monday of the Second Week of Easter
    if ( movableSolemnities.holyWeek.contains( annunciation ) || movableSolemnities.octaveOfEaster.contains( annunciation ) )
        fixedSolemnities.annunciation = moment(secondSundayOfEaster).add( 1, 'days' );

}



module.exports = {

	dates: function( year ) {

		if ( lodash.isEmpty( year ) )
			year = moment().year();

		var easter = _dateOfEaster( year ),
			fixedSolemnities = _fixedSolemnities( year ),
			adventSeason = _adventSeason( fixedSolemnities.christmas.moment ),
			movableSolemnities = _movableSolemnities( easter, adventSeason['1stSundayOfAdvent'].moment ),
			feastsOfTheLord = _feastsOfTheLord( fixedSolemnities.christmas.moment );

		// Run rules as defined by Celebratio Baptismatis Domini
		_epiphanyRubric( 
			movableSolemnities.epiphanyOfOurLord.moment, 
			fixedSolemnities, 
			feastsOfTheLord 
		);

		var merged = {};
		lodash.merge( merged, fixedSolemnities );
		lodash.merge( merged, adventSeason );
		lodash.merge( merged, movableSolemnities );
		lodash.merge( merged, feastsOfTheLord );

		var liturgicalDates = {};
		lodash.map( merged, function( value, key, collection ) {
			liturgicalDates[ value.valueOf ] = {
				moment: value
			};
		});



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