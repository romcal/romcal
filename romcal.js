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