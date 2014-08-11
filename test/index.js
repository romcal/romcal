var RomCal = require('../index'),
	moment = require('moment');

var dates = RomCal.calendarFor('2008'),
    query = RomCal.queryBy('january', dates );
