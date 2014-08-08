
var calendar = require('node-calendar'),
	moment = require('moment'),
	twix = require('twix'),
	lodash = require('lodash'), 
	utils = require('./core/utils'),
	solemnities = require('./core/solemnities'),
	seasons = require('./core/seasons'),
	formatters = require('./core/formatters');

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

	calendarFor: function( year ) {

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

		var sortedDates =  formatters.mergeAndSort([ fixedSolemnities, adventSeason, movableSolemnities, feastsOfTheLord, lentSeason, ordinaryTime, otherCelebrations ]);
		sortedDates = formatters.resolveCoincidingEvents( sortedDates );
		sortedDates = formatters.applyLiturgicalColors( sortedDates );

		// lodash.map( sortedDates, function( value, key ) {
		// 	if ( value.type.color && value.type.color.name === 'GOLD' )
		// 		console.log( value.moment.toString(), ':', value.literalKey, ':', value.type.color );
		// });
	}
};