var moment = require('moment'),
	twix = require('twix'),
	lodash = require('lodash'),
	utils = require('./utils');

var types = utils.types(),
	ordinalNumbers = utils.ordinalNumbers(),
	days = utils.days();

module.exports = {
	feastsOfTheLord: function( fixedSolemnities, movableSolemnities ) {

		var christmas = fixedSolemnities.christmas.moment,
			year = christmas.year(), 
			dates = {
				// Will be adjusted according to the epiphany rubric
				baptismOfTheLord: {
					moment: moment.utc({year: year, month: 0, day: 7 }),
					type: types.FEAST_OF_THE_LORD,
					name: 'Baptism of the Lord'
				},
				presentationOfTheLord: {
					moment: moment.utc({year:year, month: 1, day: 2}),
					type: types.FEAST_OF_THE_LORD,
					name: 'Presentation of the Lord'
				},
				transfiguration: {
					moment: moment.utc({year:year, month: 7, day: 6}),
					type: types.FEAST_OF_THE_LORD,
					name: 'Transfiguration'
				},
				triumphOfTheCross: {
					moment: moment.utc({year:year, month: 8, day: 14}),
					type: types.FEAST_OF_THE_LORD,
					name: 'Triumph of the Cross'
				}
			};

		if ( christmas.day() === 0 )
			dates.holyFamily = {
				moment: moment.utc({year: year, month: 11, day: 30}),
				type: types.FEAST_OF_THE_LORD,
				name: 'Holy Family'
			};
		else {

			// If Christmas is not a Sunday, then Holy Family is celebrated on the Sunday after Christmas
			dates.holyFamily = {
				moment: moment.utc( christmas ).endOf('week').add( 1, 'days'),
				type: types.FEAST_OF_THE_LORD,
				name: 'Holy Family'
			};
			dates.holyFamily.moment.hour(0).minute(0).seconds(0).millisecond(0);

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
						type: types.WEEKDAY_OF_EPIPHANY,
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
					type: types.WEEKDAY_OF_EPIPHANY,
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
					types: types.WEEKDAY_OF_EPIPHANY,
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
						type: types.WEEKDAY_OF_EPIPHANY,
						name: days[ date.day() ] + ' after Epiphany'
					};	
				}
			}
		}

		return {
			feastsOfTheLord: dates,
			movableSolemnities: movableSolemnities
		};
	},
	adventSeason: function( fixedSolemnities ) {

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
		    			type: types.SUNDAY_OF_ADVENT,
		    			name: ordinalNumbers[sundays] + ' Sunday of Advent'
		    		};
		    		sundays++;
	    			break;
	    		default:
	    			dates[ days[ date.day() ] + 'OfThe' + ordinalNumbers[ currentWeek ] + 'WeekOfAdvent' ] = {
	    				moment: date,
	    				type: types.WEEKDAY_OF_ADVENT,
	    				name: days[ date.day() ] + ' of the ' + ordinalNumbers[ currentWeek ] + ' week of Advent'
	    			}
	    			break;
	    	}

	    	ctr++; // Increment days
			if ( ctr % 7 === 0 )
	    		currentWeek++;
	    }

	    // Define the octave of Christmas
	    var octaveOfChristmas = moment( christmas ).add( 1, 'days').twix( moment(christmas).add( 7, 'days') ),
	    	octaveIterator = octaveOfChristmas.iterateInner('days'),
	    	counter = 1;

	    while( octaveIterator.hasNext() ) {
	    	var date = octaveIterator.next();
	    	if ( date.day() !== 0 && date.date() < 32 ) {
	    		dates[ 'the' + ordinalNumbers[ counter ]  + 'DayOfTheOctaveOfChristmas' ] = {
	    			moment: date,
	    			type: types.WEEKDAY,
	    			name: ordinalNumbers[ counter ] + ' day of the Octave of Christmas'
	    		};
	    	}
	    	counter++;
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
	},
	ordinaryTime: function( movableSolemnities, feastsOfTheLord, fixedSolemnities ) {
		
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

		var baptismOfTheLord = feastsOfTheLord.baptismOfTheLord.moment,
			ashWednesday = movableSolemnities.ashWednesday.moment,
			pentecostSunday = movableSolemnities.pentecostSunday.moment,
			christTheKing = movableSolemnities.christTheKing.moment,
			year = baptismOfTheLord.year();

		var firstIterator = moment.twix( baptismOfTheLord, ashWednesday ).iterateInner('days'),
			secondIterator = moment.twix( pentecostSunday, christTheKing ).iterateInner('days');

	    var dates = {}, sundays = 0, ctr = 0; currentWeek = 0;
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
	},
	seasonOfLent: function( easter, fixedSolemnities, movableSolemnities ) {

	    var annunciation = fixedSolemnities.annunciation.moment,
	        palmSunday = movableSolemnities.palmSunday.moment,
	        easterSunday = movableSolemnities.easterSunday.moment,
	        josephHusbandOfMary = fixedSolemnities.josephHusbandOfMary.moment,
	        divineMercySunday = movableSolemnities.divineMercySunday.moment,
	        ashWednesday = movableSolemnities.ashWednesday.moment;

		var dates = {}, sundays = 0, ctr = 0, currentWeek = 0,
			iterator = moment.twix( moment( ashWednesday ).add( 1, 'days' ), palmSunday ).iterateInner('days');

		while ( iterator.hasNext() ) {
			var date = iterator.next();
			if ( date.day() === 0 ) {
				dates[ 'the' + ordinalNumbers[sundays] + 'SundayOfLent' ] = {
	    			moment: date,
	    			type: types.SUNDAY_OF_LENT,
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
						type: types.WEEKDAY_OF_LENT,
						name: days[ date.day() ] + ' after Ash Wednesday'
					}
				}
				else {
					dates[ days[ date.day() ] + 'OfThe' + ordinalNumbers[ currentWeek ] + 'WeekOfLent' ] = {
						moment: date,
						type: types.WEEKDAY_OF_LENT,
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

	    // If the Annunciation (Mar 25) falls on Palm Sunday, it is celebrated on the Saturday preceding
	    if ( annunciation.isSame( palmSunday ) )
	        fixedSolemnities.annunciation.moment = moment.utc(palmSunday).startOf('week').subtract( 1, 'days' );

	    var holyWeek = palmSunday.twix( easterSunday ),
	    	octaveOfEaster = easterSunday.twix( divineMercySunday );

	    // It is not possible for a fixed date Solemnity to fall on a Sunday of Easter.

	        //  If Annunciation falls during Holy Week or within the Octave of Easter, the Annunciation is transferred to the Monday of the Second Week of Easter
	        if ( holyWeek.contains( annunciation ) || octaveOfEaster.contains( annunciation ) )
	            fixedSolemnities.annunciation.moment = moment.utc(divineMercySunday).add( 1, 'days' );

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
	},
	seasonRanges: function( fixedSolemnities, movableSolemnities, adventSeason, feastsOfTheLord ) {
		return {
			earlierOrdinaryTime: moment.twix( moment( feastsOfTheLord.baptismOfTheLord.moment ).add( 1, 'days' ), moment( movableSolemnities.ashWednesday.moment ).subtract( 1, 'days' ) ), 
			lenternRange: moment.twix( movableSolemnities.ashWednesday.moment, moment( movableSolemnities.palmSunday.moment ).subtract( 1, 'days' ) ),
			easterSeasonRange: moment.twix( movableSolemnities.easterSunday.moment, moment( movableSolemnities.pentecostSunday.moment ).subtract( 1, 'days') ),
			latterOrdinaryTime: moment.twix( moment( movableSolemnities.pentecostSunday.moment ).add( 1, 'days'), moment( adventSeason.the1stSundayOfAdvent.moment ).subtract( 1, 'days' ) ),
			adventRange: moment.twix( adventSeason.the1stSundayOfAdvent.moment, moment ( fixedSolemnities.christmas.moment ).subtract( 1, 'days') ),
			christmasOctaveRange: moment.twix( fixedSolemnities.christmas.moment, moment.utc( fixedSolemnities.christmas.moment ).add( 7, 'days') )
		};
	}
};