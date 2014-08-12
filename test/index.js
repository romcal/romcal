var should = require('should'),
    romcal = require('../romcal'),
    lodash = require('lodash'),
	moment = require('moment');

describe('romcal', function() {
    describe('calendarFor(): no arguments', function() {
        it('returns an array of current year dates of either 365 or 366 days', function() {
            var dates = romcal.calendarFor();
            dates.length.should.be.greaterThan(364);
            dates.length.should.be.lessThan(367);
        });
    });
    describe('calendarFor("2014"): get all dates in the Gregorian year 2014', function() {
        it('returns an array of 2014 dates', function() {
            var dates = romcal.calendarFor('2014');
            lodash.map( dates, function( v, k ) {
                v.moment.year().should.be.eql(2014);
            });
        });
    });
    describe('queryFor("january", dates ): query all dates in January 2014', function() {
        it('returns an array of dates in January 2014 with length 31', function() {
            var dates = romcal.calendarFor('2014'),
                dates = romcal.queryFor('january', dates );
            lodash.map( dates, function( v, k ) {
                v.moment.month().should.be.eql(0);
            });
            dates.length.should.be.eql(31);
        });
    });
    describe('queryFor("mondays", dates ): query all dates that are Mondays in 2014', function() {
        it('returns an array of dates falling on Monday in 2014', function() {
            var dates = romcal.calendarFor('2014'),
                dates = romcal.queryFor('mondays', dates );
            lodash.map( dates, function( v, k ) {
                v.moment.day().should.be.eql(1);
            });
        });
    });
});