
var moment = require('moment'),
	lodash = require('lodash'), 
	utils = require('./lib/utils'),
	formatters = require('./lib/formatters'),
	types = utils.types();
	
module.exports = {

	calendarFor: function( year, locale, cb ) {
	 	
	 	var args = [];
	    for ( var i = 0; i < arguments.length; i++ )
	        args.push(arguments[i]);

	    cb = args.pop();

    	if ( args.length > 0 ) 
    		year = args.shift(); 
    	else 
    		year = null;

    	if ( args.length > 0 ) 
    		locale = args.shift(); 
    	else 
    		locale = null;

		return process.nextTick( function() {
			if ( lodash.isNull( locale ) ) {
				moment.locale('en-US');
				locale = 'en-US';
			}
			else {
				if ( lodash.isString( locale ) )
					moment.locale( locale );
				else {
					moment.locale('en-US');
					locale = 'en-US';
				}
			}

			if ( lodash.isNull( year ) )
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

			if ( !lodash.isUndefined( cb ) || !lodash.isNull( cb ) )
	        	cb( liturgicalDates );
		});
	},

	queryFor: function( query, dates, cb ) {
		return process.nextTick( function() {
			query = 'get' + ( query.charAt(0).toUpperCase() + query.slice(1) );
			if ( !lodash.isUndefined( formatters[ query ] ) )
				cb( formatters[ query ] ( dates ) );
		});
	}
};