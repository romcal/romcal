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

var _ = require('lodash'),
    should = require('should'),
    moment = require('moment'),
    range = require('moment-range');

var Dates = require('../src/lib/Dates'),
    Types = require('../src/constants/Types'),
    Seasons = require('../src/constants/Seasons'),
    Colors = require('../src/constants/LiturgicalColors'),
    Psalter = require('../src/constants/PsalterWeeks'),
    Titles = require('../src/constants/Titles'),
    Calendar = require('../src/lib/Calendar');

describe('Testing calendar generation functions', function() {

  describe('Testing calendar functions', function() {

    describe('When requesting the liturgical year', function() {

      var year = moment.utc().year(),
          start = Dates.firstSundayOfAdvent( year ),
          end = Dates.firstSundayOfAdvent( year + 1 ).subtract( 1, 'days'),
          dates = Calendar.calendarFor({
                    year: year,
                    type: 'liturgical'
                  }, true );

      it('Should start on the 1st Sunday of Advent and end on Christ the King', function() {
        _.head( dates ).moment.isSame( start ).should.be.eql( true );
        _.last( dates ).moment.isSame( end ).should.be.eql( true );
      });

    });

    describe('When requesting the calendar year', function() {

      var dates = Calendar.calendarFor( true );

      it('Should start on Jan 1 and end on Dec 31', function() {
        _.head( dates ).moment.month().should.be.eql( 0 );
        _.head( dates ).moment.date().should.be.eql( 1 );
        _.last( dates ).moment.month().should.be.eql( 11 );
        _.last( dates ).moment.date().should.be.eql( 31 );
      });

    });

  });

  describe('Testing query filters', function() {
    describe('For filtering by day of week', function() {
      it('Results should match the day of week requested', function() {
        for( var i = 0, il = 7; i < il; i++ ) {
          _.each(
            Calendar.calendarFor({
              query: {
                day: i
              }
            }, true ),
            function( d ) {
              d.moment.day().should.be.eql( i );
            }
          );
        }
      });
    });

    describe('For filtering by month of year', function() {
      it('Results should match the month of year requested', function() {
        _.each(
          Calendar.calendarFor({
            query: {
              month: 6
            }
          }, true ),
          function( d ) {
            d.moment.month().should.be.eql( 6 );
          }
        );
      });
    });

    describe('For filtering by groups', function() {

      it('Should group dates by days in a week', function() {
        _.chain( Calendar.calendarFor({
            query: {
              group: 'days'
            }
          }, true )).keys().value().should.be.eql(['0','1','2','3','4','5','6']);
      });

      it('Should group dates by months in the year', function() {
        _.chain( Calendar.calendarFor({
            query: {
              group: 'months'
            }
          }, true )).keys().value().should.be.eql(['0','1','2','3','4','5','6','7','8','9','10','11']);
      });

      it('Should group days of week by the months they belong to', function() {
        _.each( Calendar.calendarFor({
          query: {
            group: 'daysByMonth'
          }
        }, true ), function( dates, k ) {
          _.each( dates, function( day, key ) {
            _.each( day, function( v ) {
              v.moment.day().should.be.eql( Number( key ) );
              v.moment.month().should.be.eql( Number( k ) );
            });
          });
        });
      });

      it('Should group weeks of year by the months they belong to', function() {
        var calendar = Calendar.calendarFor({
          query: {
            group: 'weeksByMonth'
          }
        }, true );
        // console.log( calendar );
        _.each( calendar, function( dates, k ) {
          _.each( dates, function( group, key ) {
            _.each( group, function( v ) {
              v.moment.month().should.be.eql( Number( k ) );
              v.data.calendar.week.should.be.eql( Number( key ) );
            });
          });
        });
      });

      it('Should group dates by their respective liturgical cycles', function() {
        _.chain( Calendar.calendarFor({
            year: 2015,
            query: {
              group: 'cycles'
            }
          }, true )).keys().value().should.be.eql(['Year B', 'Year C']);
      });

      it('Should group dates by their celebration types', function() {
        _.chain( Calendar.calendarFor({
            query: {
              group: 'types'
            }
          }, true )).keys().value().should.containDeep( Types );
      });

      it('Should group dates by their liturgical seasons', function() {
        _.chain( Calendar.calendarFor({
            query: {
              group: 'liturgicalSeasons'
            }
          }, true )).keys().value().should.containDeep( _.values( Seasons ) );
      });

      it('Should group dates by their psalter weeks', function() {
        _.chain( Calendar.calendarFor({
            query: {
              group: 'psalterWeek'
            }
          }, true )).keys().value().should.containDeep( _.keys( Psalter ) );
      });
    });

    describe('For filtering by titles', function() {
      _.each(
        Calendar.calendarFor({
          query: {
            title: Titles.FEAST_OF_THE_LORD
          }
        }, true ),
        function( d ) {
          _.includes( d.data.meta.titles, Titles.FEAST_OF_THE_LORD ).should.be.ok;
        }
      );
      _.each(
        Calendar.calendarFor({
          query: {
            title: Titles.PATRON_OF_EUROPE
          }
        }, true ),
        function( d ) {
          _.includes( d.data.meta.titles, Titles.PATRON_OF_EUROPE ).should.be.ok;
        }
      );
    });
  });

  describe('Testing advanced filters', function() {

    it('The proper color of a Memorial or a Feast is white except for martyrs in which case it is red', function() {
      var calendar = Calendar.calendarFor({ query: { group: 'types' }}, true );
      _.each( _.get( calendar, Types[4] ), function( d ) {
        if ( _.eq( d.key, 'triumphOfTheCross') ) {
          d.data.meta.liturgicalColor.key.should.be.eql( Colors.RED.key );
        }
        else {
          if ( !_.isUndefined( d.data.meta.titles ) ) {
            if ( _.includes( d.data.meta.titles, Titles.MARTYR ) ) {
              d.data.meta.liturgicalColor.key.should.be.eql( Colors.RED.key );
            }
            else {
              d.data.meta.liturgicalColor.key.should.be.eql( Colors.WHITE.key );
            }
          }
          else {
            d.data.meta.liturgicalColor.key.should.be.eql( Colors.WHITE.key );
          }
        }
      });
      _.each( _.get( calendar, Types[5] ), function( d ) {
        if ( !_.isUndefined( d.data.meta.titles ) ) {
          if ( _.includes( d.data.meta.titles, Titles.MARTYR ) ) {
            d.data.meta.liturgicalColor.key.should.be.eql( Colors.RED.key );
          }
          else {
            d.data.meta.liturgicalColor.key.should.be.eql( Colors.WHITE.key );
          }
        }
        else {
          d.data.meta.liturgicalColor.key.should.be.eql( Colors.WHITE.key );
        }
      });
    });

    it('The proper color for the Chair of Peter and the Conversion of St. Paul is white, although both St. Peter and St. Paul were martyrs.', function() {
      var calendar = Calendar.calendarFor({ query: { group: 'types' }}, true );
      _.each( _.get( calendar, Types[4] ), function( d ) {
        if ( _.eq( d.key, 'chairOfSaintPeter' ) || _.eq( d.key, 'conversionOfSaintPaulApostle' ) ) {
          d.data.meta.liturgicalColor.should.be.eql( Colors.WHITE );
        }
      });
    })

  });

});
