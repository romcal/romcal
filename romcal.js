
var calendar = require('node-calendar'),
	moment = require('moment'),
	lodash = require('lodash'), 
	utils = require('./lib/utils'),
	formatters = require('./lib/formatters'),
	types = utils.types();
	
module.exports = {

	calendarFor: function( year, locale ) {

		if ( lodash.isEmpty( locale ) )
			moment.locale('en-US');
		else if ( lodash.isString( year ) )
			moment.locale( locale );
		else
			moment.locale('en_US');

		if ( lodash.isEmpty( year ) )
			year = moment.utc().year();
		else if ( lodash.isString( year ) )
			year = parseInt( year );
		else if ( lodash.isObject( year ) )
			year = moment.utc().year();
		else 
			year = moment.utc().year();

		var result = formatters.generateCalendarDates( year, locale ),
			sortedDates = formatters.mergeAndSort([ result.fixedSolemnities, result.movableSolemnities, result.feastsOfTheLord, result.adventSeason, result.ordinaryTime, result.otherCelebrations, result.lentSeason ] ),
            resolvedEvents = formatters.resolveCoincidingEvents( sortedDates ),
		    liturgicalDates = formatters.setLiturgicalColorsAndSeasons( resolvedEvents, result.seasonRanges );

        return liturgicalDates;
	},

	queryFor: function( fn, dates ) {
		fn = 'get' + ( fn.charAt(0).toUpperCase() + fn.slice(1) );
		if ( !lodash.isUndefined( formatters[ fn ] ) )
			return formatters[ fn ] ( dates );
	}
};