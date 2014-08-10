var moment = require('moment'),
	twix = require('twix'),
	lodash = require('lodash'),
	utils = require('./utils'),
	types = utils.types(),
	ordinalNumbers = utils.ordinalNumbers(),
	liturgicalColors = utils.liturgicalColors();

module.exports = {

	mergeAndSort: function( dates ) {
		
		var merged = {};
		lodash.forEach( dates, function( item ) {
			lodash.merge( merged, item );
		});

		var liturgicalDates = [],
			sortedDates = [];

		lodash.map( merged, function( value, key, collection ) {
			value.data = {};
			value.literalKey = key;
			liturgicalDates.push( value );
		});

        // Sort dates in ascending order
		sortedDates = lodash.sortBy( liturgicalDates, function( value ) {
			return value.moment.valueOf();
		});

		return sortedDates;
	},

	resolveCoincidingEvents: function( dates ) {
        var filtered = {};
        lodash.forEach( dates, function( value ) {
            var k = value.moment.valueOf();
            if ( lodash.isUndefined( filtered[ k ] ) ) {
                filtered[ k ] = value;
            }
            else {
                var existing = filtered[ k ], // The existing date
                	candidate = value; // The date to test
                // If the overlapping date ranks higher than the current date, it will replace that date
                if ( candidate.type.rank > existing.type.rank ) {
	            	// If a memorial/opt. memorial will replace a weekeday in lent,
	            	// it will be reduced to the rank of commemoration
	            	if ( lodash.isEqual( existing.type.id, types.WEEKDAY_OF_LENT.id ) ) {
	            		if ( lodash.isEqual( candidate.type.id, types.MEMORIAL.id ) || lodash.isEqual( candidate.type.id, types.OPT_MEMORIAL.id ) || lodash.isEqual( candidate.type.id, types.MEMORIAL_MARTYR.id ) || lodash.isEqual( candidate.type.id, types.OPT_MEMORIAL_MARTYR.id ) ) {
            				// console.log( candidate.name + ' will be reduced to a commemoration');
            				candidate.type = types.COMMEM;
						}
					}
                    filtered[k] = candidate;
                }
                else {
                    // console.log( candidate.name + ' does not replace ' + existing.name );
                }
            }
        });
		return lodash.values( filtered );
	},

	setLiturgicalColors: function( dates, seasonRanges ) {

		// var it = seasonRanges.christmasOctaveRange.iterate('days');
		// while ( it.hasNext() )
		// 	console.log( it.next().toString() );

		// The proper color of Ordinary Time is green.
		// The proper color of the Easter and Christmas seasons is white.
		var sundayWeekdayHandler = function( d ) {
			if ( seasonRanges.earlierOrdinaryTime.contains( d.moment ) || seasonRanges.latterOrdinaryTime.contains( d.moment ) )
				return liturgicalColors.GREEN;
			else if ( seasonRanges.easterSeasonRange.contains( d.moment ) )
				return liturgicalColors.WHITE;
			else if ( seasonRanges.christmasOctaveRange.contains( d.moment ) )
				return liturgicalColors.WHITE;
			else
				return liturgicalColors.GREEN;
		};

		var weekdayOfEpiphanyHandler = function( d ) {
			return liturgicalColors.WHITE;
		};

		// The proper color of a Memorial or a Feast is white.		
		var memorialFeastHandler = function( d ) {
			return liturgicalColors.WHITE;
		};

		// The proper color of a Memorial or a Feast for martyrs is red. 
		// The proper color for the Chair of Peter and the Conversion of St. Paul is white, although both St. Peter and St. Paul were martyrs.
		var martyrHandler = function ( d ) {
			return liturgicalColors.RED;
		};

		// Holy Thursday = white, Good Friday = red, Easter Vigil = White 
		var triduumHandler = function( d ) {
			if ( lodash.isEqual( d.literalKey, 'goodFriday' ) )
				return liturgicalColors.RED;
			else
				return liturgicalColors.WHITE;
		};

		// Monday - Wednesday of Holy Week is purple
		var holyWeekHandler = function ( d ) {
			return liturgicalColors.PURPLE;
		};

		// 	The proper color of a Memorial/Optional Memorial is the color of the season.		
		var optionalMemorialHandler = function ( d ) {
			if ( seasonRanges.adventRange.contains( d.moment ) || seasonRanges.lenternRange.contains( d.moment ) )
				return liturgicalColors.PURPLE;
			else if ( seasonRanges.earlierOrdinaryTime.contains( d.moment ) || seasonRanges.latterOrdinaryTime.contains( d.moment ) )
				return liturgicalColors.GREEN;
			else if ( seasonRanges.easterSeasonRange.contains( d.moment ) || seasonRanges.christmasOctaveRange.contains( d.moment ) )
				return liturgicalColors.WHITE;
			else 
				return liturgicalColors.WHITE
		};

		// The proper color for Feasts of the Lord is white except the Triumph of the Cross which is red.
		var feastOfTheLordHandler = function( d ) {
			if ( lodash.isEqual( d.literalKey, 'triumphOfTheCross' ) )
				return liturgicalColors.RED;
			else 
				return liturgicalColors.WHITE;
		};

		var fixedFeastHandler = function( d ) {
			return liturgicalColors.WHITE;
		};

		var solemnityHandler = function( d ) {
			// Pentecost, Palm Sunday, and Peter and Paul is red
			if ( lodash.isEqual( d.literalKey, 'pentecostSunday') || lodash.isEqual( d.literalKey, 'peterAndPaulApostles' ) || lodash.isEqual( d.literalKey, 'palmSunday') || lodash.isEqual( d.literalKey, 'goodFriday') )
				return liturgicalColors.RED;
			
			// Gold vestments may be used on very festive occasions, such as Easter and Christmas.
			else if ( lodash.isEqual ( d.literalKey, 'easterSunday' ) || lodash.isEqual ( d.literalKey, 'christmas' ) )
				return liturgicalColors.GOLD;
			
			// The proper color for Solemnities is white.
			else
				return liturgicalColors.WHITE;
		};

		// 3rd Sunday of Advent and the 4th Sunday of Lent is rose or purple.
		// The proper color of the Advent and Lent seasons is purple
		var sundaysAndWeekdaysOfLentAAndAdventHandler = function( d ) {
			var key1 = 'the' + ordinalNumbers[2] + 'SundayOfAdvent',
				key2 = 'the' + ordinalNumbers[3] + 'SundayOfLent'
			if ( lodash.isEqual( d.literalKey, key1 )|| lodash.isEqual( d.literalKey, key2 ) ) 
				return liturgicalColors.ROSE;
			else 
				return liturgicalColors.PURPLE;
		};

		var commemorationHandler = function( d ) {
			return liturgicalColors.PURPLE;
		};

	 	lodash.map( dates, function( d, k, c ) {

	 		if ( d.type ) {

				var color = {};

				switch( d.type.id ) {
					case types.SOLEMNITY.id:
						color = solemnityHandler( d );
						break;
					case types.FEAST_OF_THE_LORD.id:
						color = feastOfTheLordHandler( d );
						break;
					case types.FEAST.id:
						color = memorialFeastHandler( d );
						break;
					case types.FIXED_FEAST.id:
						color = fixedFeastHandler( d );
						break;
					case types.FEAST_MARTYR.id:
						color = martyrHandler( d );
						break;
					case types.TRIDUUM.id:
						color = triduumHandler( d );
						break;
					case types.HOLY_WEEK.id:
						color = holyWeekHandler( d );
						break;
					case types.SUNDAY_OF_LENT.id:
						color = sundaysAndWeekdaysOfLentAAndAdventHandler( d );
						break;
					case types.SUNDAY_OF_ADVENT.id:
						color = sundaysAndWeekdaysOfLentAAndAdventHandler( d );
						break;
					case types.MEMORIAL.id:
						color = memorialFeastHandler( d );
						break;
					case types.MEMORIAL_MARTYR.id:
						color = martyrHandler( d );
						break;
					case types.OPT_MEMORIAL.id:
						color = optionalMemorialHandler( d );
						break;
					case types.OPT_MEMORIAL_MARTYR.id:
						color = optionalMemorialHandler( d );
						break;
					case types.COMMEM.id:
						color = commemorationHandler( d );
						break;
					case types.WEEKDAY_OF_LENT.id:
						color = sundaysAndWeekdaysOfLentAAndAdventHandler( d );
						break;
					case types.WEEKDAY_OF_ADVENT.id:
						color = sundaysAndWeekdaysOfLentAAndAdventHandler( d );
						break;
					case types.SUNDAY.id:
						color = sundayWeekdayHandler( d );
						break;
					case types.WEEKDAY.id:
						color = sundayWeekdayHandler( d );
						break;
					case types.WEEKDAY_OF_EPIPHANY.id:
						color = weekdayOfEpiphanyHandler( d );
						break;
					default:
						break;
				}

				d.color = color;
	 		}
		});
		

		lodash.map( dates, function( d, k, c ) {
			if ( d.moment.day() === 4 )
				console.log( d.moment.toString(), ':', d.name, ':', ( lodash.isUndefined( d.color ) ? {} : d.color.name ) );
		});

		return dates;
	}
};




