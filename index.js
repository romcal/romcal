
var calendar = require('node-calendar'),
	moment = require('moment'),
	lodash = require('lodash'), 
	utils = require('./core/utils'),
	formatters = require('./core/formatters'),
	types = utils.types();
	
module.exports = {

	calendarFor: function( year ) {

		if ( lodash.isEmpty( year ) )
			year = moment.utc().year();
		else if ( lodash.isString( year ) )
			year = parseInt( year );
		else if ( lodash.isObject( year ) )
			year = moment.utc().year();

		var result = formatters.generateCalendarDates( year ),
			sortedDates = formatters.mergeAndSort([ result.fixedSolemnities, result.movableSolemnities, result.feastsOfTheLord, result.adventSeason, result.ordinaryTime, result.otherCelebrations, result.lentSeason ]),
            resolvedEvents = formatters.resolveCoincidingEvents( sortedDates ),
		    liturgicalDates = formatters.setLiturgicalColorsAndSeasons( resolvedEvents, result.seasonRanges );

		// lodash.map( liturgicalDates, function( d, k, c ) {
		// 		// console.log( d.moment.toString(), ':', d.name, ':', ( lodash.isUndefined( d.color ) ? {} : d.data ) );
		// 	console.log( d.moment.toString(), ':', d.data.season );
		// });

		var res = formatters.getFridays( liturgicalDates );
		lodash.map( res, function( d, key ) {
			console.log( d.moment.toString(), ':', d.literalKey, ':', d.type, ':', d.color.name );
		});

		// var res = formatters.getDatesByLiturgicalSeason( liturgicalDates );
		// lodash.map( res, function( value, key ) {
		// 	if ( key === 'christmastide' )
		// 		lodash.map( value, function( v, k ) {
		// 			console.log( v.moment.toString(), ':', v.type.id, ':', v.name, ':', v.data );
		// 		});
		// });

		// var res = formatters.getDaysGrouped( liturgicalDates );
		// lodash.map( res, function( value, key ) {
		// 	if ( key === '0' )
		// 		lodash.map( value, function( v, k ) {
		// 			console.log( v.moment.toString(), ':', v.type.id, ':', v.name, ':', v.data );
		// 		});
		// });

		// console.log( liturgicalDates );

        
        return {
            liturgicalDates: liturgicalDates
        };
	},

	queryBy: function( fn, dates ) {
		fn = 'get' + ( fn.charAt(0).toUpperCase() + fn.slice(1) );
		console.log( fn );
	}
};