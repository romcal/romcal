var romcal = require('../index'),
    lodash = require('lodash'),
	moment = require('moment');

var dates = romcal.calendarFor('2008'),
    result = romcal.queryFor('february', dates );

lodash.map( result, function( v, k ){
    console.log( v.moment.toString(), ':', v.literalKey, ':', v.type, ':', v.color.name );
})
