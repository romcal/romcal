
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
		SOLEMNITY: {
            name: 'Solemnity',
            rank: 8
        },
		FEAST: {
            name: 'Feast',
            rank: 7
        },
		TRIDUUM: {
            name: 'Triduum',
            rank: 6
        },
        HOLY_WEEK: {
            name: 'Holy Week',
            rank: 5
        },
		MEMORIAL: {
            name: 'Memorial',
            rank: 4
        },
        COMMEM: {
            name: 'Commemoration',
            rank: 3
        },
		OPT_MEMORIAL: {
            name: 'Optional Memorial',
            rank: 2
        },
        SUNDAY: {
            name: 'Sunday',
            rank: 1
        },
        WEEKDAY: {
            name: 'Weekday',
            rank: 0
        }
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

function _adventSeason( fixedSolemnities ) {

	var christmas = fixedSolemnities.christmas.moment,
        dates = {};
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
    				type: types.WEEKDAY,
    				name: days[ date.day() ] + ' of the ' + ordinalNumbers[ currentWeek ] + ' week of Advent'
    			}
    			break;
    	}

    	ctr++; // Increment days
		if ( ctr % 7 === 0 )
    		currentWeek++;
    }

    // It is not possible for a fixed date Solemnity to fall on a Sunday of Advent
    
        // If a fixed date Solemnity occurs on a Sunday of Advent, the Solemnity is transferred to the following Monday.  
        // This affects Immaculate Conception.
        for( var i = 0; i < sundays; i++ ) {
            var nthSundayOfAdvent = dates['the' + ordinalNumbers[i] + 'SundayOfAdvent' ];
            if ( fixedSolemnities.immaculateConception.moment.isSame( nthSundayOfAdvent ) )
                fixedSolemnities.immaculateConception.moment = moment.utc( nthSundayOfAdvent ).add( 1, 'days' );
        }

    return {
        adventSeason: dates,
        fixedSolemnities: fixedSolemnities
    };
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
function _ordinaryTime( movableSolemnities, feastsOfTheLord, fixedSolemnities ) {

	var baptismOfTheLord = feastsOfTheLord.baptismOfTheLord.moment,
		ashWednesday = movableSolemnities.ashWednesday.moment,
		pentecostSunday = movableSolemnities.pentecostSunday.moment,
		christTheKing = movableSolemnities.christTheKing.moment,
		year = baptismOfTheLord.year();

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
                    type: types.WEEKDAY,
                    name: days[ date.day() ] + ' of the ' + ordinalNumbers[ currentWeek ] + ' week of Ordinary Time'
                };
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

    var lastWeekIterator = moment.twix( moment( christTheKing ).add( 1, 'days' ), moment( christTheKing ).endOf('week') ).iterateInner('days');
    while( lastWeekIterator.hasNext() ) {
    	var date = lastWeekIterator.next();
    	dates[ days[ date.day() ] + 'OfThe' + ordinalNumbers[ 33 ] + 'WeekOfOrdinaryTime' ] = {
            moment: date,
            type: types.WEEKDAY,
            name: days[ date.day() ] + ' of the ' + ordinalNumbers[ 33 ] + ' week of Ordinary Time'
        };
    }

    var weekOfOrdinaryTime = 32,
    	counter = 0;
    lodash.forOwnRight( latterOrdinaryTime, function( date ) {
    	
    	if ( date.day() === 0 ) { // Sunday
			dates[ 'the' + ordinalNumbers[weekOfOrdinaryTime] + 'SundayOfOrdinaryTime' ] = {
                moment: date,
                type: types.SUNDAY,
                name: ordinalNumbers[weekOfOrdinaryTime] + ' Sunday of Ordinary Time'
            };
    	}
    	else { // Monday - Saturday
			dates[ days[ date.day() ] + 'OfThe' + ordinalNumbers[ weekOfOrdinaryTime ] + 'WeekOfOrdinaryTime' ] = {
	            moment: date,
	            type: types.WEEKDAY,
	            name: days[ date.day() ] + ' of the ' + ordinalNumbers[ weekOfOrdinaryTime ] + ' week of Ordinary Time'
	        };
    	}

    	counter++;
    	if ( counter % 7 === 0 )
    		weekOfOrdinaryTime--;
    });

    return dates;
}

function _memorials( year ) {

    var dates = {
        // January
        saintBasilAndGregory: {
            moment: moment.utc({ year: year, month: 0, day: 2 }),
            type: types.MEMORIAL,
            name: 'Saints Basil the Great & Gregory Nazianzen, Bishops & Doctors'
        },
        theMostHolyNameOfJesus: {
            moment: moment.utc({ year: year, month: 0, day: 3 }),
            type: types.OPT_MEMORIAL,
            name: 'The Most Holy Name of Jesus'
        },
        saintRaymondOfPenyafort: {
            moment: moment.utc({ year: year, month: 0, day: 7 }),
            type: types.OPT_MEMORIAL,
            name: 'Saint Raymond of Penyafort'            
        },
        saintHilaryOfPoitiers: {
            moment: moment.utc({ year: year, month: 0, day: 13 }),
            type: types.OPT_MEMORIAL,
            name: 'Saint Hilary of Poitiers, Bishop & Doctor'
        },
        saintAnthonyOfEgypt: {
            moment: moment.utc({ year: year, month: 0, day: 17 }),
            type: types.MEMORIAL,
            name: 'Saint Anthony of Egypt, Abbot'
        },
        saintsFabianAndSebastian: {
            moment: moment.utc({ year: year, month: 0, day: 20 }),
            type: types.OPT_MEMORIAL,
            name: 'Saints Fabian & Sebastian, Pope and Martyrs'
        },
        saintAgnes: {
            moment: moment.utc({ year: year, month: 0, day: 21 }),
            type: types.MEMORIAL,
            name: 'Saint Agnes, Virgin & Martyr'
        }, 
        saintVincent: {
            moment: moment.utc({ year: year, month: 0, day: 22 }),
            type: types.OPT_MEMORIAL,
            name: 'Saint Vincent, Deacon & Martyr'        
        },
        saintFrancisDeSales: {
            moment: moment.utc({ year: year, month: 0, day: 24 }),
            type: types.MEMORIAL,
            name: 'Saint Francis de Sales, Bishop & Doctor'
        },
        conversionOfSaintPaul: {
            moment: moment.utc({ year: year, month: 0, day: 25 }),
            type: types.FEAST,
            name: 'The Conversion of Saint Paul, Apostle'
        },
        saintsTimothyAndTitus: {
            moment: moment.utc({ year: year, month: 0, day: 26 }),
            type: types.MEMORIAL,
            name: 'Saints Timothy & Titus, Bishops'
        },
        saintAngelaMerici: {
            moment: moment.utc({ year: year, month: 0, day: 27 }),
            type: types.OPT_MEMORIAL,
            name: 'Saint Angela Merici, Virgin'
        },
        saintThomasAquinas: {
            moment: moment.utc({ year: year, month: 0, day: 28 }),
            type: types.MEMORIAL,
            name: 'Saint Thomas Aquinas, Priest & Doctor'
        },
        saintJohnBosco: {
            moment: moment.utc({ year: year, month: 0, day: 31 }),
            type: types.MEMORIAL,
            name: 'Saint John Bosco, Priest'
        },
        // February
        saintsBlaseAndAnsgar: {

        },
        saintAgatha: {

        },
        saintsPaulMikiAndCo: {

        },
        saintsJeromeAndJosephine: {

        },
        saintScholastica: {

        },
        ourLadyOfLourdes: {

        }
    };
    return dates;
}

function _seasonOfLent ( easter, fixedSolemnities, movableSolemnities ) {

    var annunciation = fixedSolemnities.annunciation.moment,
        palmSunday = movableSolemnities.palmSunday.moment,
        easterSunday = movableSolemnities.easterSunday.moment,
        josephHusbandOfMary = fixedSolemnities.josephHusbandOfMary.moment,
        secondSundayOfEaster = movableSolemnities.secondSundayOfEaster.moment,
        ashWednesday = movableSolemnities.ashWednesday.moment;

	var dates = {}, sundays = 0, ctr = 0, currentWeek = 0,
		iterator = moment.twix( moment( ashWednesday ).add( 1, 'days' ), palmSunday ).iterateInner('days');

	while ( iterator.hasNext() ) {
		var date = iterator.next();
		if ( date.day() === 0 ) {
			dates[ 'the' + ordinalNumbers[sundays] + 'SundayOfLent' ] = {
    			moment: date,
    			type: types.SUNDAY,
    			name: ordinalNumbers[sundays] + ' Sunday of Lent',
                data: {
                    weekNumber: currentWeek + 1,
                }
    		};
    		sundays++;
		}
		else {
			// The days from after Ash Wednesday till before the first Sunday of Lent
			// are known as "** after Ash Wednesday"
			if ( ctr < 3 ) {
				dates[ days[ date.day() ] +  'AfterAshWednesday' ] = {
					moment: date,
					type: types.WEEKDAY,
					name: days[ date.day() ] + ' after Ash Wednesday'
				}
			}
			else {
				dates[ days[ date.day() ] + 'OfThe' + ordinalNumbers[ currentWeek ] + 'WeekOfLent' ] = {
					moment: date,
					type: types.WEEKDAY,
					name: days[ date.day() ] + ' of the ' + ordinalNumbers[ currentWeek ] + ' week of Lent',
                    data: {
                        weekNumber: currentWeek + 1
                    }
				}
			}
		}

    	ctr++; // Increment days
		if ( ctr % 7 === 0 )
    		currentWeek++;
	}

	// lodash.map( dates, function( v, k, c ) {
	// 	console.log( k + ":" + v.moment.toString() );
	// });

    // If the Annunciation (Mar 25) falls on Palm Sunday, it is celebrated on the Saturday preceding
    if ( annunciation.isSame( palmSunday ) )
        fixedSolemnities.annunciation.moment = moment.utc(palmSunday).startOf('week').subtract( 1, 'days' );

    var holyWeek = palmSunday.twix( easterSunday ),
    	octaveOfEaster = easterSunday.twix( secondSundayOfEaster );

    // It is not possible for a fixed date Solemnity to fall on a Sunday of Easter.

        //  If Annunciation falls during Holy Week or within the Octave of Easter, the Annunciation is transferred to the Monday of the Second Week of Easter
        if ( holyWeek.contains( annunciation ) || octaveOfEaster.contains( annunciation ) )
            fixedSolemnities.annunciation.moment = moment.utc(secondSundayOfEaster).add( 1, 'days' );

        // If Joseph, Husband of Mary (Mar 19) falls on Palm Sunday or during Holy Week, 
        // it is moved to the Saturday preceding Palm Sunday.
        if ( holyWeek.contains( josephHusbandOfMary ) )
        	fixedSolemnities.josephHusbandOfMary.moment = moment( palmSunday ).subtract( 8, 'days' );

    // It is not possible for a fixed date Solemnity to fall on a Sunday of Lent

        // If a fixed date Solemnity occurs on a Sunday of Lent, the Solemnity is transferred to the following Monday.  
        // This affects Joseph, Husband of Mary and Annunciation.
        for( var i = 0; i < sundays; i++ ) {
            var nthSundayOfLent = dates['the' + ordinalNumbers[i] + 'SundayOfLent' ];
            if ( josephHusbandOfMary.isSame( nthSundayOfLent ) )
                fixedSolemnities.josephHusbandOfMary.moment = moment.utc( nthSundayOfLent ).add( 1, 'days' );
            if ( annunciation.isSame( nthSundayOfLent ) )
                fixedSolemnities.annunciation.moment = moment.utc( nthSundayOfLent ).add( 1, 'days' );
        }

    return {
    	lentSeason: dates,
    	fixedSolemnities: fixedSolemnities,
    	movableSolemnities: movableSolemnities
    };
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
			fixedSolemnities = _fixedSolemnities( year );
		
        // Some adjustments for immaculate conception if it falls on a Sunday of Advent
        var data = _adventSeason( fixedSolemnities ),
            adventSeason = data.adventSeason;
        fixedSolemnities = data.fixedSolemnities;
		
        // The function _movableSolemnities calculates the date of epiphany based on the epiphany rubric
		var movableSolemnities = _movableSolemnities( easter, adventSeason.the1stSundayOfAdvent.moment );

		// The function _seasonOfLent does calculations for 2 feasts which may overlap holy week
		var result = _seasonOfLent( easter, fixedSolemnities, movableSolemnities ),
			lentSeason = result.lentSeason;
		fixedSolemnities = result.fixedSolemnities;
		movableSolemnities = result.movableSolemnities;

		// The function _feastsOfTheLord calculates much of the rules described in the epiphany rubric
		var response = _feastsOfTheLord( fixedSolemnities, movableSolemnities ),
			feastsOfTheLord = response.feastsOfTheLord;
		movableSolemnities = response.movableSolemnities;
		
		// Output of ordinary time is based on the output of _seasonOfLent and _feastsOfTheLord
		var ordinaryTime = _ordinaryTime( movableSolemnities, feastsOfTheLord, fixedSolemnities );

		var merged = {};
		lodash.merge( merged, fixedSolemnities );
		lodash.merge( merged, adventSeason );
		lodash.merge( merged, movableSolemnities );
		lodash.merge( merged, feastsOfTheLord );
		lodash.merge( merged, lentSeason );
		lodash.merge( merged, ordinaryTime );

		var liturgicalDates = [],
			sortedDates = [];

		lodash.map( merged, function( value, key, collection ) {
			value.data = {};
			value.unixTimestamp = value.moment.valueOf();
			liturgicalDates.push( value );
		});

        // Sort dates in ascending order
		sortedDates = lodash.sortBy( liturgicalDates, function( value ) {
			return value.moment.valueOf();
		});

        var filtered = {};
        lodash.map( sortedDates, function( value, key ) {
            var k = value.moment.valueOf();
            if ( lodash.isUndefined( filtered[ k ] ) ) {
                filtered[ k ] = value;
            }
            else {
                
                // If the overlapping date ranks higher than the current date, it will replace that date
                var item = filtered[ k ];
                if ( value.type.rank > item.type.rank )
                    filtered[k] = value;
                // else
                    // console.log( value.name + ' does not replace ' + item.name );
            }
        });

	}
};