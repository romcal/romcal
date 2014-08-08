var moment = require('moment'),
	lodash = require('lodash'),
	utils = require('./utils'),
	types = utils.types(),
	ordinalNumbers = utils.ordinalNumbers(),
	liturgicalColors = utils.liturgicalColors();

module.exports = {
	resolveCoincidingEvents: function( dates ) {
        var filtered = {};
        lodash.map( dates, function( value, key ) {
            var k = value.moment.valueOf();
            if ( lodash.isUndefined( filtered[ k ] ) ) {
                filtered[ k ] = value;
            }
            else {

                var existing = filtered[ k ], // The existing date
                	candidate = value; // The date to test

                // If the overlapping date ranks higher than the current date, it will replace that date
                if ( candidate.type.rank > existing.type.rank ) {
		            	
	            	// console.log('candidate is', candidate.name, 'with type', candidate.type.key );
	            	// console.log('existing is', existing.name, 'with type', existing.type.key );

	            	// If a memorial/opt. memorial will replace a weekeday in lent,
	            	// it will be reduced to the rank of commemoration
	            	if ( existing.type.key === types.WEEKDAY_OF_LENT.key ) {
	            		if ( candidate.type.key === types.MEMORIAL.key || candidate.type.key === types.OPT_MEMORIAL.key ) {
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
		return filtered;
	},

	applyLiturgicalColors: function( dates ) {
		lodash.forEach( dates, function( d ) {
			// The proper color for Solemnities is white.
			if ( d.type.key === types.SOLEMNITY.key ) {
				// Pentecost, Palm Sunday, and Peter and Paul is red
				if ( d.literalKey === 'pentecostSunday' || d.literalKey === 'peterAndPaulApostles' || d.literalKey === 'palmSunday' || d.literalKey === 'goodFriday' ) {
					d.type.color = liturgicalColors.RED;
				}
				// Gold vestments may be used on very festive occasions, such as Easter and Christmas.
				if ( d.literalKey === 'easterSunday' || d.literalKey === 'christmas' ) {
					
					console.log('solemnity', d.literalKey );
					d.type.color = liturgicalColors.GOLD;
				}
				else {
					d.type.color = liturgicalColors.WHITE;
				}
			}
			// Holy Thursday = white, Good Friday = red, Easter Vigil = White 
			else if ( d.type.key === types.TRIDUUM.key ) {
				if ( d.literalKey === 'goodFriday' )
					d.type.color = liturgicalColors.RED;
				else
					d.type.color = liturgicalColors.WHITE;
			}
			// Monday - Wednesday of Holy Week is purple
			else if ( d.type.key === types.HOLY_WEEK.key ) {
				d.type.color = liturgicalColors.PURPLE;
			}
			// The proper color for Feasts of the Lord is white except the Triumph of the Cross which is red.
			else if ( d.type.key === types.FEAST_OF_THE_LORD.key ) {
				if ( d.literalKey === 'triumphOfTheCross' ) {
					d.type.color = liturgicalColors.RED;
				}
				else {
					d.type.color = liturgicalColors.WHITE;
				}
			}
			else if ( d.type.key === types.SUNDAY_OF_LENT.key || d.type.key === types.SUNDAY_OF_ADVENT.key || d.type.key === types.WEEKDAY_OF_LENT.key || d.type.key === types.WEEKDAY_OF_ADVENT.key ) {
				var key1 = 'the' + ordinalNumbers[2] + 'SundayOfAdvent',
					key2 = 'the' + ordinalNumbers[3] + 'SundayOfLent'
				// The proper color of the 3rd Sunday of Advent and the 4th Sunday of Lent is rose or purple.
				if ( d.literalKey === key1 || d.literalKey == key2 ) {
					d.type.color = liturgicalColors.ROSE;
				}
				// The proper color of the Advent and Lent seasons is purple
				else {
					d.type.color = liturgicalColors.PURPLE;
				}
			}
			// The proper color of Ordinary Time is green.
			else if ( d.type.key === types.SUNDAY.key || d.type.key === types.WEEKDAY.key ) {
				d.type.color = liturgicalColors.GREEN;
			}
			else {

			}

			// The proper color of the Easter and Christmas seasons is white.
			// The proper color of a Commemoration is the color of the season.  As Commemorations only occur during Lent, their proper color is purple.
			// The proper color of an Optional Memorial is the color of the season.
			// The proper color of a Memorial or a Feast is white except for martyrs in which case it is red.  The proper color for the Chair of Peter (Feast, Feb 22) and the Conversion of St. Paul (Feast, Jan 25) is white, although both St. Peter and St. Paul were martyrs.
		});
		
		lodash.map( dates, function( value, key ) {
			if ( value.type.color && value.type.color.name === 'GOLD' )
				console.log( value.moment.toString(), ':', value.literalKey, ':', value.type.color );
		});

		return dates;
	},

	mergeAndSort: function( items ) {
		
		var merged = {};
		lodash.forEach( items, function( item ) {
			lodash.merge( merged, item );
		});

		var liturgicalDates = [],
			sortedDates = [];

		lodash.map( merged, function( value, key, collection ) {
			value.data = {};
			value.literalKey = key;
			value.unixTimestamp = value.moment.valueOf();
			liturgicalDates.push( value );
		});

        // Sort dates in ascending order
		sortedDates = lodash.sortBy( liturgicalDates, function( value ) {
			return value.moment.valueOf();
		});

		return sortedDates;
	}
};