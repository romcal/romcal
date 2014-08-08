
var calendar = require('node-calendar'),
	moment = require('moment'),
	twix = require('twix'),
	lodash = require('lodash'), 
	utils = require('./core/utils'),
	solemnities = require('./core/solemnities'),
	seasons = require('./core/seasons');


// Results of computation
var dateOfEaster,
	feastsOfTheLord,
	fixedSolemnities,
	movableSolemnities,
	adventSeason,
	lentSeason,
	otherCelebrations,
	ordinaryTime;
	
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
		// lodash.merge( merged, otherCelebrations );

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