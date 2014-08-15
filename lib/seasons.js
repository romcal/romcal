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
	twix = require('twix'),
	lodash = require('lodash'),
	solemnities = require('./solemnities'),
	utils = require('./utils'),
	calendars = utils.calendars(),
	localization = utils.getLocalizationData().general;

var types = utils.types(),
	ordinalNumbers = utils.ordinalNumbers(),
	days = utils.days(),
	categories = utils.categories();

module.exports = {
	feastsOfTheLord: function( fixedSolemnities, movableSolemnities, locale ) {

		var christmas = fixedSolemnities.christmas.moment,
			year = christmas.year(), 
			dates = {
				// Will be adjusted according to the epiphany rubric
				baptismOfTheLord: {
					moment: moment.utc({year: year, month: 0, day: 7 }),
					type: types.FEAST_OF_THE_LORD,
					name: localization.baptismOfTheLord[locale],
					data: {
						"nationalCalendar": calendars.general.key
					}
				},
				presentationOfTheLord: {
					moment: moment.utc({year:year, month: 1, day: 2}),
					type: types.FEAST_OF_THE_LORD,
					name: localization.presentationOfTheLord[locale],
					data: {
						"nationalCalendar": calendars.general.key
					}
				},
				transfiguration: {
					moment: moment.utc({year:year, month: 7, day: 6}),
					type: types.FEAST_OF_THE_LORD,
					name: localization.transfiguration[locale],
					data: {
						"nationalCalendar": calendars.general.key
					}
				},
				triumphOfTheCross: {
					moment: moment.utc({year:year, month: 8, day: 14}),
					type: types.FEAST_OF_THE_LORD,
					name: localization.triumphOfTheCross[locale],
					data: {
						"nationalCalendar": calendars.general.key
					}
				}
			};

		if ( christmas.day() === 0 )
			dates.holyFamily = {
				moment: moment.utc({year: year, month: 11, day: 30}),
				type: types.FEAST_OF_THE_LORD,
				name: localization.holyFamily[locale],
				data: {
					"nationalCalendar": calendars.general.key
				}
			};
		else {

			// If Christmas is not a Sunday, then Holy Family is celebrated on the Sunday after Christmas
			dates.holyFamily = {
				moment: moment.utc( christmas ).endOf('week').add( 1, 'days'),
				type: types.FEAST_OF_THE_LORD,
				name: localization.holyFamily[locale],
				data: {
					"nationalCalendar": calendars.general.key
				}
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
						type: types.SUNDAY,
						name: localization.secondSundayOfChristmas[locale],
						data: {
							"nationalCalendar": calendars.general.key
						}
					};
				}
				else {
					var key = days[ date.day() ] + 'BeforeEpiphany';	
					movableSolemnities[ key ] = {
						moment: date,
						type: types.WEEKDAY_OF_EPIPHANY,
						name: localization[key][locale],
						data: {
							"nationalCalendar": calendars.general.key
						}
					};
				}
			}

			// Days between Jan. 6 and the following Sunday are called "*day after Epiphany".
			var afterIterator = moment.twix( epiphanyOfOurLord, dates.baptismOfTheLord.moment ).iterateInner('days');
			while( afterIterator.hasNext() ) {
				var date = afterIterator.next();
				if ( date.date() === dates.baptismOfTheLord.moment.date() ) break; // Break when this loop reaches the next sunday
				var key = days[ date.day() ] + 'AfterEpiphany';
				movableSolemnities[ key ] = {
					moment: date,
					type: types.WEEKDAY_OF_EPIPHANY,
					name: localization[key][locale],
					data: {
						"nationalCalendar": calendars.general.key
					}
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
				var key =  days[ date.day() ] + 'BeforeEpiphany';
				movableSolemnities[ key ] = {
					moment: date,
					type: types.WEEKDAY_OF_EPIPHANY,
					name: localization[key][locale],
					data: {
						"season": categories.EPIPHANY,
						"nationalCalendar": calendars.general.key
					}
				};
			}

			// If Epiphany occurs on Jan. 7 or Jan. 8, then the Baptism of the Lord is the next day (Monday)
			if ( epiphanyOfOurLord.date() === 7 || epiphanyOfOurLord.date() === 8 )
				dates.baptismOfTheLord.moment = moment.utc( epiphanyOfOurLord ).add( 1, 'days' );

			// Epiphany occurs on or before Jan. 6, then the days of the week following Epiphany are 
			// called "*day after Epiphany" and the Sunday following Epiphany is the Baptism of the Lord.
			if ( epiphanyOfOurLord.date() <= 6 ) {

				dates.baptismOfTheLord.moment = moment.utc( epiphanyOfOurLord ).add( 7, 'days' );

				var afterIterator = moment.twix( moment.utc( epiphanyOfOurLord ).add( 1, 'days' ), dates.baptismOfTheLord.moment ).iterateInner('days');
				while( afterIterator.hasNext() ) {
					var date = afterIterator.next();
					if ( date.date() === dates.baptismOfTheLord.moment.date() ) break; // Break when this loop reaches the next sunday
					var key = days[ date.day() ] + 'AfterEpiphany';
					movableSolemnities[ key ] = {
						moment: date,
						type: types.WEEKDAY_OF_EPIPHANY,
						name: localization[key][locale],
						data: {
							"season": categories.EPIPHANY,
							"nationalCalendar": calendars.general.key
						}
					};	
				}
			}
		}

		return {
			feastsOfTheLord: dates,
			movableSolemnities: movableSolemnities
		};
	},
	adventSeason: function( fixedSolemnities, locale ) {

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

	    	var date = iterator.next(),
	    		day = date.day();

	    	switch( day ) {
	    		case 0:
	    			var key = 'the' + ordinalNumbers[sundays] + 'SundayOfAdvent';
		    		dates[ key ] = {
		    			moment: date,
		    			type: types.SUNDAY_OF_ADVENT,
		    			name: localization[key][locale],
		    			data: { "nationalCalendar": calendars.general.key }
		    		};
		    		sundays++;
	    			break;
	    		default:
	    			var key = days[ day ] + 'OfThe' + ordinalNumbers[ currentWeek ] + 'WeekOfAdvent';
	    			dates[ key ] = {
	    				moment: date,
	    				type: types.WEEKDAY_OF_ADVENT,
	    				name: localization[key][locale],
	    				data: { "nationalCalendar": calendars.general.key }
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
	    		var key = 'the' + ordinalNumbers[ counter ]  + 'DayOfTheOctaveOfChristmas';	    		
	    		dates[ key ] = {
	    			moment: date,
	    			type: types.WEEKDAY,
	    			name: localization[key][locale],
	    			data: { "nationalCalendar": calendars.general.key }
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
	ordinaryTime: function( movableSolemnities, feastsOfTheLord, fixedSolemnities, locale ) {
		
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

	    if ( feastsOfTheLord.baptismOfTheLord.moment.day() === 1 )
	    	sundays++;

	    while( firstIterator.hasNext() ) {
	        var date = firstIterator.next();
	        switch( date.day() ) {
	            case 0:
	            	var key = 'the' + ordinalNumbers[sundays] + 'SundayOfOrdinaryTime';
	                dates[ key ] = {
	                    moment: date,
	                    type: types.SUNDAY,
	                    name: localization[key][locale],
	                    data: { "nationalCalendar": calendars.general.key }
	                };
	                sundays++;
	                break;
	            default:
	            	var key = days[ date.day() ] + 'OfThe' + ordinalNumbers[ currentWeek ] + 'WeekOfOrdinaryTime';
	                dates[ key ] = {
	                    moment: date,
	                    type: types.WEEKDAY,
	                    name: localization[key][locale],
	                    data: { "nationalCalendar": calendars.general.key }
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
	    	var key = days[ date.day() ] + 'OfThe' + ordinalNumbers[ 33 ] + 'WeekOfOrdinaryTime';
	    	dates[ key ] = {
	            moment: date,
	            type: types.WEEKDAY,
	            name: localization[key][locale],
	            data: { "nationalCalendar": calendars.general.key }
	        };
	    }

	    var weekOfOrdinaryTime = 32,
	    	counter = 0;
	    lodash.forOwnRight( latterOrdinaryTime, function( date ) {
	    	
	    	if ( date.day() === 0 ) { // Sunday
	    		var key = 'the' + ordinalNumbers[weekOfOrdinaryTime] + 'SundayOfOrdinaryTime';
				dates[ key ] = {
	                moment: date,
	                type: types.SUNDAY,
	                name: localization[key][locale],
	                data: { "nationalCalendar": calendars.general.key }
	            };
	    	}
	    	else { // Monday - Saturday
	    		var key = days[ date.day() ] + 'OfThe' + ordinalNumbers[ weekOfOrdinaryTime ] + 'WeekOfOrdinaryTime';
				dates[ key ] = {
		            moment: date,
		            type: types.WEEKDAY,
		            name: localization[key][locale],
		            data: { "nationalCalendar": calendars.general.key }
		        };
	    	}

	    	counter++;
	    	if ( counter % 7 === 0 )
	    		weekOfOrdinaryTime--;
	    });

	    return dates;
	},
	seasonOfLent: function( easter, fixedSolemnities, movableSolemnities, locale ) {

	    var annunciation = fixedSolemnities.annunciation.moment,
	        palmSunday = movableSolemnities.palmSunday.moment,
	        easterSunday = movableSolemnities.easterSunday.moment,
	        pentecostSunday = movableSolemnities.pentecostSunday.moment,
	        josephHusbandOfMary = fixedSolemnities.josephHusbandOfMary.moment,
	        divineMercySunday = movableSolemnities.divineMercySunday.moment,
	        ashWednesday = movableSolemnities.ashWednesday.moment;

		var dates = {}, sundays = 0,
			iterator = moment.twix( moment( ashWednesday ).add( 1, 'days' ), palmSunday ).iterateInner('days');

		var initialWeek = ashWednesday.week(),
			initialDay = ashWednesday.dayOfYear();

		while ( iterator.hasNext() ) {

			var date = iterator.next(),
				// 1st week of Lent starts on Sunday after Saturday After Ash Wednesday
				weekDiff = date.week() - initialWeek,
				dayDiff = date.dayOfYear() - initialDay;

			if ( date.day() === 0 ) {
    			var key = 'the' + ordinalNumbers[ weekDiff - 1 ] + 'SundayOfLent';
				dates[ key ] = {
	    			moment: date,
	    			type: types.SUNDAY_OF_LENT,
	    			name: localization[key][locale],
	                data: { "nationalCalendar": calendars.general.key }
	    		};
			}
			else {
				// The days from after Ash Wednesday till before the first Sunday of Lent
				// are known as "** after Ash Wednesday"

				if ( dayDiff < 4 ) {
					var key = days[ date.day() ] +  'AfterAshWednesday';
					dates[ key ] = {
						moment: date,
						type: types.WEEKDAY_OF_LENT,
						name: localization[key][locale],
						data: { "nationalCalendar": calendars.general.key }
					}
				}
				else {
					var key = days[ date.day() ] + 'OfThe' + ordinalNumbers[ weekDiff - 1 ] + 'WeekOfLent';
					dates[ key ] = {
						moment: date,
						type: types.WEEKDAY_OF_LENT,
						name: localization[key][locale],
	                    data: { "nationalCalendar": calendars.general.key }
					}
				}
			}
		}

	    // If the Annunciation (Mar 25) falls on Palm Sunday, it is celebrated on the Saturday preceding
	    if ( annunciation.isSame( palmSunday ) )
	        fixedSolemnities.annunciation.moment = moment.utc(palmSunday).startOf('week').subtract( 1, 'days' );

	    var holyWeek = palmSunday.twix( easterSunday ),
	    	octaveOfEaster = easterSunday.twix( divineMercySunday ),
	    	eastertide = moment.twix( moment.utc( divineMercySunday ).add( 1, 'days'), pentecostSunday );

	    // It is not possible for a fixed date Solemnity to fall on a Sunday of Easter.

	        //  If Annunciation falls during Holy Week or within the Octave of Easter, the Annunciation is transferred to the Monday of the Second Week of Easter
	        if ( holyWeek.contains( annunciation ) || octaveOfEaster.contains( annunciation ) )
	            fixedSolemnities.annunciation.moment = moment.utc(divineMercySunday).add( 1, 'days' );

	        // If Joseph, Husband of Mary (Mar 19) falls on Palm Sunday or during Holy Week, 
	        // it is moved to the Saturday preceding Palm Sunday.
	        if ( holyWeek.contains( josephHusbandOfMary ) )
	        	fixedSolemnities.josephHusbandOfMary.moment = moment( palmSunday ).subtract( 1, 'days' );

	    // It is not possible for a fixed date Solemnity to fall on a Sunday of Lent

	        // If a fixed date Solemnity occurs on a Sunday of Lent, the Solemnity is transferred to the following Monday.  
	        // This affects Joseph, Husband of Mary and Annunciation.
	        lodash.map( dates, function( v, k ) {
	        	if ( v.moment.day() === 0 ) {        		
		            if ( josephHusbandOfMary.isSame( v.moment ) )
		                fixedSolemnities.josephHusbandOfMary.moment.add( 1, 'days' );
		            if ( annunciation.isSame( v.moment ) )
		                fixedSolemnities.annunciation.moment.add( 1, 'days' );
	        	}
	        });

	    // Generate the dates of easter tide after the octave of easter
	    var easterTideIterator = eastertide.iterateInner('days'),
	    	easterWeek = 1, easterDayCounter = 0;
	    while( easterTideIterator.hasNext() ) {
	    	var date = easterTideIterator.next();
	    	if ( date.day() !== 0 ) {
	    		var key = days[ date.day() ] + 'OfThe' + ordinalNumbers[ easterWeek ] + 'WeekOfEaster';
				dates[ days[ date.day() ] + 'OfThe' + ordinalNumbers[ easterWeek ] + 'WeekOfEaster' ] = {
					moment: date,
					type: types.WEEKDAY_OF_EASTER,
					name: localization[key][locale],
                    data: {
                        weekNumber: easterWeek + 1,
                        "nationalCalendar": calendars.general.key
                    }
				}
	    	}
	    	easterDayCounter++; // Increment days
			if ( easterDayCounter % 7 === 0 )
	    		easterWeek++;
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
			holyWeekRange: moment.twix( movableSolemnities.palmSunday.moment, moment.utc( movableSolemnities.easterSunday.moment ).subtract( 1, 'days') ),
			easterSeasonRange: moment.twix( movableSolemnities.easterSunday.moment, movableSolemnities.pentecostSunday.moment ),
			latterOrdinaryTime: moment.twix( moment( movableSolemnities.pentecostSunday.moment ).add( 1, 'days'), moment( adventSeason.the1stSundayOfAdvent.moment ).subtract( 1, 'days' ) ),
			adventRange: moment.twix( adventSeason.the1stSundayOfAdvent.moment, moment ( fixedSolemnities.christmas.moment ).subtract( 1, 'days') ),
			christmasOctaveRange: moment.twix( fixedSolemnities.christmas.moment, moment({ year:fixedSolemnities.christmas.moment.year(), month: 11, day: 31 }) )
		};
	}
};