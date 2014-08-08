var moment = require('moment'),
	lodash = require('lodash'),
	utils = require('./utils'),
	types = utils.types(),
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
		lodash.map( dates, function( date, key ) {
			// The proper color for Solemnities is white except Pentecost and Peter and Paul (Jun 29) in which cases it is red.
			if ( date.type.key === types.SOLEMNITY.key ) {
				if ( date.literalKey === 'pentecostSunday' || date.literalKey === 'peterAndPaulApostles' )
					date.type.color = liturgicalColors.RED;
				else
					date.type.color = liturgicalColors.WHITE;
			}
		});
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