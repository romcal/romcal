
var calendar = require('node-calendar'),
	moment = require('moment'),
	twix = require('twix'),
	lodash = require('lodash'), 
	utils = require('./core/utils'),
	solemnities = require('./core/solemnities'),
	seasons = require('./core/seasons');


// Storage vars
var dateOfEaster,
	feastsOfTheLord,
	fixedSolemnities,
	movableSolemnities,
	adventSeason,
	lentSeason,
	otherCelebrations,
	ordinaryTime,
	types = utils.types();
	
module.exports = {

	compute: function( year ) {

		if ( lodash.isEmpty( year ) )
			year = moment.utc().year();
		else if ( lodash.isString( year ) )
			year = parseInt( year );
		else if ( lodash.isObject( year ) )
			year = moment.utc().year();

		dateOfEaster = utils.dateOfEaster( year );
		fixedSolemnities = solemnities.fixedSolemnities( year );
		
        // Some adjustments for immaculate conception if it falls on a Sunday of Advent
        var data = seasons.adventSeason( fixedSolemnities );
        adventSeason = data.adventSeason;
        fixedSolemnities = data.fixedSolemnities;
		
        // The function _movableSolemnities calculates the date of epiphany based on the epiphany rubric
		movableSolemnities = solemnities.movableSolemnities( dateOfEaster, adventSeason.the1stSundayOfAdvent.moment );

		// The function _seasonOfLent does calculations for 2 feasts which may overlap holy week
		var result = seasons.seasonOfLent( dateOfEaster, fixedSolemnities, movableSolemnities );
		lentSeason = result.lentSeason;
		fixedSolemnities = result.fixedSolemnities;
		movableSolemnities = result.movableSolemnities;

		// The function _feastsOfTheLord calculates much of the rules described in the epiphany rubric
		var response = seasons.feastsOfTheLord( fixedSolemnities, movableSolemnities );
		feastsOfTheLord = response.feastsOfTheLord;
		movableSolemnities = response.movableSolemnities;
		
		// Output of ordinary time is based on the output of _seasonOfLent and _feastsOfTheLord
		ordinaryTime = seasons.ordinaryTime( movableSolemnities, feastsOfTheLord, fixedSolemnities );

		// Get all other feasts and memorials in the general roman calendar
		otherCelebrations = require('./core/otherCelebrations').dates( year );

		var merged = {};
		lodash.merge( merged, fixedSolemnities );
		lodash.merge( merged, adventSeason );
		lodash.merge( merged, movableSolemnities );
		lodash.merge( merged, feastsOfTheLord );
		lodash.merge( merged, lentSeason );
		lodash.merge( merged, ordinaryTime );
		lodash.merge( merged, otherCelebrations );

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
            				console.log( candidate.name + ' will be reduced to a commemoration');
            				candidate.type = types.COMMEM;
						}
					}
                
                    filtered[k] = candidate;
                }
                else
                    console.log( candidate.name + ' does not replace ' + existing.name );
            }
        });
	}
};