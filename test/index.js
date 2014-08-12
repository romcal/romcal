var romcal = require('../index'),
    lodash = require('lodash'),
	moment = require('moment');

var dates = romcal.calendarFor('1999', 'en-US'),
    result = romcal.queryFor('january', dates );

lodash.map( result, function( value, key ) {
	console.log( value.moment.toString(), ':', value.type.id, ':', value.name ,':', value.color.name );
});