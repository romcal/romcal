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
	            	if ( lodash.isEqual( existing.type.key, types.WEEKDAY_OF_LENT.key ) ) {
	            		if ( lodash.isEqual( candidate.type.key, types.MEMORIAL.key ) || lodash.isEqual( candidate.type.key, types.OPT_MEMORIAL.key ) || lodash.isEqual( candidate.type.key, types.MEMORIAL_MARTYR.key ) || lodash.isEqual( candidate.type.key, types.OPT_MEMORIAL_MARTYR.key ) ) {
            				// console.log( candidate.name + ' will be reduced to a commemoration');
            				candidate.type = types.COMMEM;
						}
					}
                    filtered[k] = candidate;
                }
                // else
                    // console.log( candidate.name + ' does not replace ' + existing.name );
            }
        });
		return lodash.values( filtered );
	},

	setLiturgicalColors: function( dates, seasonRanges ) {

	 	lodash.map( dates, function( d, k, c ) {

	 		if ( d.type ) {

				var literalKey = d.literalKey,
					type = d.type.id,
					color = {};
				
				// Holy Thursday = white, Good Friday = red, Easter Vigil = White 
				if ( lodash.isEqual( type, types.TRIDUUM.id ) ) {
					if ( lodash.isEqual( d.literalKey, 'goodFriday' ) )
						color = liturgicalColors.RED;
					else
						color = liturgicalColors.WHITE;
				}

				// Monday - Wednesday of Holy Week is purple
				else if ( lodash.isEqual(  type, types.HOLY_WEEK.id ) ) {
					color = liturgicalColors.PURPLE;
				}

				// The proper color of Ordinary Time is green.
				else if ( seasonRanges.earlierOrdinaryTime.contains( d ) || seasonRanges.latterOrdinaryTime.contains( d ) )
					color = liturgicalColors.GREEN;

				// The proper color of the Easter and Christmas seasons is white.
				else if ( seasonRanges.easterSeasonRange.contains( d ) || seasonRanges.christmasOctaveRange.contains( d ) )
					color = liturgicalColors.WHITE;

				// The proper color of a Memorial or a Feast is white.
				else if ( lodash.isEqual( type, types.MEMORIAL.id ) || lodash.isEqual( type, types.FEAST.id ) ) {
					color = liturgicalColors.WHITE;
				}

				// The proper color of a Memorial or a Feast for martyrs is red. 
				// The proper color for the Chair of Peter and the Conversion of St. Paul is white, although both St. Peter and St. Paul were martyrs.
				else if ( lodash.isEqual( type, types.MEMORIAL_MARTYR.id ) || lodash.isEqual( type, types.FEAST_MARTYR.id ) || lodash.isEqual( type, types.OPT_MEMORIAL_MARTYR.id ) ) {
					color = liturgicalColors.RED;
				}

				// 	The proper color of a Memorial/Optional Memorial is the color of the season.
				else if ( lodash.isEqual( type, types.OPT_MEMORIAL.id ) ) {
					if ( seasonRanges.adventRange.contains( d ) || seasonRanges.lenternRange.contains( d ) )
						color = liturgicalColors.PURPLE;
					else if ( seasonRanges.earlierOrdinaryTime.contains( d ) || seasonRanges.latterOrdinaryTime.contains( d ) )
						color = liturgicalColors.GREEN;
					else if ( seasonRanges.easterSeasonRange.contains( d ) || seasonRanges.christmasOctaveRange.contains( d ) )
						color = liturgicalColors.WHITE;
					else {
						color = liturgicalColors.WHITE
					}
				}

				// The proper color for Feasts of the Lord is white except the Triumph of the Cross which is red.
				else if ( lodash.isEqual( type, types.FEAST_OF_THE_LORD.id ) ) {
					if ( lodash.isEqual( d.literalKey, 'triumphOfTheCross' ) )
						color = liturgicalColors.RED;
					else 
						color = liturgicalColors.WHITE;
				}

				else if ( lodash.isEqual( type, types.SOLEMNITY.id ) ) {
					
					// Pentecost, Palm Sunday, and Peter and Paul is red
					if ( lodash.isEqual( literalKey, 'pentecostSunday') || lodash.isEqual( literalKey, 'peterAndPaulApostles' ) || lodash.isEqual( literalKey, 'palmSunday') || lodash.isEqual( literalKey, 'goodFriday') )
						color = liturgicalColors.RED;
					
					// Gold vestments may be used on very festive occasions, such as Easter and Christmas.
					else if ( lodash.isEqual ( literalKey, 'easterSunday' ) || lodash.isEqual ( literalKey, 'christmas' ) )
						color = liturgicalColors.GOLD;
					
					// The proper color for Solemnities is white.
					else
						color = liturgicalColors.WHITE;
				}

				else if ( lodash.isEqual( type, types.SUNDAY_OF_LENT.id ) || lodash.isEqual( type, types.SUNDAY_OF_ADVENT.id ) || lodash.isEqual( type, types.WEEKDAY_OF_LENT.id ) || lodash.isEqual(  type, types.WEEKDAY_OF_ADVENT.id ) ) {
					var key1 = 'the' + ordinalNumbers[2] + 'SundayOfAdvent',
						key2 = 'the' + ordinalNumbers[3] + 'SundayOfLent'
					
					if ( lodash.isEqual( d.literalKey, key1 )|| lodash.isEqual( d.literalKey, key2 ) ) // 3rd Sunday of Advent and the 4th Sunday of Lent is rose or purple.
						color = liturgicalColors.ROSE;
					
					else // The proper color of the Advent and Lent seasons is purple
						color = liturgicalColors.PURPLE;
				}

				else {}

				d.color = color;
	 		}
		});
		

		lodash.map( dates, function( d, k, c ) {
			console.log( d.moment.toString(), ':', d.literalKey, ':', d.color );
		});

		return dates;
	}
};




