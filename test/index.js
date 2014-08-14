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

var should = require('should'),
    romcal = require('../romcal'),
    lodash = require('lodash'),
	moment = require('moment');

describe('romcal', function() {
    describe('calendarFor(): no arguments', function() {
        it('returns an array of current year dates of either 365 or 366 days', function( done ) {
            romcal.calendarFor( function( dates ) {            
                dates.length.should.be.greaterThan(364);
                dates.length.should.be.lessThan(367);
                done();
            });
        });
    });
    describe('calendarFor("2008"): get all dates in the Gregorian year 2008', function() {
        it('returns an array of 2008 dates', function( done ) {
            romcal.calendarFor('2008', function( dates ) {
                lodash.map( dates, function( v, k ) {
                    v.moment.year().should.be.eql(2008);
                });
                done();
            });
        });
    });
    describe('queryNationalCalendar("2008", "es-AR", "argentina"): get the Argentinian National Calendar, locale es-AR for 2008', function() {
        it('returns an array of dates for the Argentinian National Calendar, 2008', function( done ) {
            romcal.queryNationalCalendar('2008', 'es-AR', 'argentina', function ( err, dates ) {
                dates.length.should.be.greaterThan(364);
                dates.length.should.be.lessThan(367);
                lodash.map( dates, function( v, k ) {
                    v.moment.year().should.be.eql(2008);
                });
                done();
            });
        });
    });
    describe('queryFor("january", dates ): query all dates in January 2012', function() {
        it('returns an array of dates in January 2012 with length 31', function( done ) {
            romcal.calendarFor('2012', function( dates ) {
                romcal.queryFor('january', dates, function( err, query ) {
                    if ( err ) {
                        throw new Error( err );
                        return;
                    }
                    lodash.map( query, function( v, k ) {
                        v.moment.month().should.be.eql(0);
                    });
                    query.length.should.be.eql(31);
                    done();
                });
            });
        });
    });
    describe('queryFor("mondays", dates ): query all dates that are Mondays in 2013', function() {
        it('returns an array of dates falling on Monday in 2013', function( done ) {
            romcal.calendarFor('2013', function( dates ) {
                romcal.queryFor('mondays', dates, function( err, query ) {
                    if ( err ) {
                        throw new Error( err );
                        return;
                    }
                    lodash.map( query, function( v, k ) {
                        v.moment.day().should.be.eql(1);
                    });
                    done();
                });
            });
        });
    });
    describe('queryFor("solemnities", dates ): query all dates that are Solemnities in 2009', function() {
        it('returns an array of dates that are Solemnities in 2009', function( done ) {
            var dates = romcal.calendarFor('2009', function( dates ) {
                romcal.queryFor('solemnities', dates, function( err, query ) {
                    if ( err ) {
                        throw new Error( err );
                        return;
                    }
                    lodash.map( query, function( v, k ) {
                        v.type.id.should.be.eql('SOLEMNITY');
                    });
                    done();
                });
            });
        });
    });
    describe('queryFor("holyweek", dates ): query all dates that are within Holy Week, 2011', function() {
        it('returns an array of dates that are within Holy Week, 2011', function( done ) {
            var dates = romcal.calendarFor('2011', function( dates ) {
                romcal.queryFor('holyWeek', dates, function( err, query ) {
                    if ( err ) {
                        throw new Error( err );
                        return;
                    }
                    lodash.map( query, function( v, k ) {
                        v.data.season.should.be.eql('HolyWeek');
                    });
                    done();
                });
            });
        });
    });
});