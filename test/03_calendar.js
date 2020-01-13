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


var _ = require('lodash');
var moment = require('moment');
var range = require('moment-range');
var should = require('should');

var Romcal = require('../index');
var LiturgicalColors = Romcal.LiturgicalColors;
var LiturgicalSeasons = Romcal.LiturgicalSeasons;
var Dates = Romcal.Dates;
var Seasons = Romcal.Seasons;
var Titles = Romcal.Titles;
var Types = Romcal.Types;
var PsalterWeeks = Romcal.PsalterWeeks;
var Calendar = Romcal.Calendar;

describe('Testing calendar generation functions', function() {

  this.timeout(0);

  describe('When calling the calendarFor() method without a query', function() {

    var nonLeapYearDates = Calendar.calendarFor(2018);
    var leapYearDates = Calendar.calendarFor(2020);

    it('Should return an array of objects', function() {
      _.every(nonLeapYearDates, _.isObject).should.be.ok();
      _.every(leapYearDates, _.isObject).should.be.ok();
    });

    it('Each object should contain the keys "type", "name", "moment", "source" and "data"', function() {
      var requiredKeys = ['type', 'name', 'moment', 'source', 'data'];
      _.every(nonLeapYearDates, d => _.has(d, requiredKeys));
      _.every(leapYearDates, d => _.has(d, requiredKeys));
    });

    it('Array should be 365 days long on non leap years', function() {
      _.size(nonLeapYearDates).should.be.eql(365);
    });

    it('Array should be 366 days long on leap years', function() {
      _.size(leapYearDates).should.be.eql(366);
    });
  });

  describe('Testing ISO8601/MomentJS conversion', function() {

    describe('When skipIsoConversion flag is not set', function() {
      it('Dates should be returned as ISO8601 strings', function() {
        _.each(Calendar.calendarFor(), d => _.isString(d.moment).should.be.ok());
      });
    });

    describe('When skipIsoConversion flag is set to false', function() {
      it('Dates should be returned as ISO8601 strings', function() {
        _.each(Calendar.calendarFor(false), d => _.isString(d.moment).should.be.ok());
      });
    });

    describe('When skipIsoConversion flag is set to true', function() {
      it('Dates should be returned as MomentJS objects', function() {
        _.each(Calendar.calendarFor(true), d => moment.isMoment(d.moment).should.be.ok());
      });
    });
  });

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
      let dates = Calendar.calendarFor(true);
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
            Calendar.calendarFor({ query: { day: i } }, true),
            d => d.moment.day().should.be.eql( i )
          );
        }
      });
    });

    describe('For filtering by month of year', function() {
      it('Results should match the month of year requested', function() {
        for( var i = 0, il = 12; i < il; i++ ) {
          _.each(
            Calendar.calendarFor({ query: { month: i } }, true),
            d => d.moment.month().should.be.eql( i )
          );
        }
      });
    });

    describe('For filtering by groups', function() {

      it('Should group dates by days in a week', function() {
        _.keys(Calendar.calendarFor({
          query: { group: 'days' }
        })).should.be.eql(['0','1','2','3','4','5','6']);
      });

      it('Should group dates by months in the year', function() {
        _.keys( Calendar.calendarFor({
            query: {
              group: 'months'
            }
          }, true )).should.be.eql(['0','1','2','3','4','5','6','7','8','9','10','11']);
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
        _.each( calendar, (dates, k) => {
          _.each( dates, (group, key) => {
            _.each( group, v => {
              v.moment.month().should.be.eql( Number( k ) );
              v.data.calendar.week.should.be.eql( Number( key ) );
            });
          });
        });
      });

      it('Should group dates by their respective liturgical cycles', function() {
        _.keys( Calendar.calendarFor({
            year: 2015,
            query: { group: 'cycles' }
          })).should.be.eql(['Year B', 'Year C']);

        _.keys(Calendar.queryFor(
          Calendar.calendarFor({ year: 2015 }),
          { group: 'cycles' }
        )).should.be.eql(['Year B', 'Year C']);

      });

      it('Should group dates by their celebration types', function() {
        _.keys( Calendar.calendarFor({
            query: { group: 'types' }
          })).should.containDeep(Types);

        _.keys(Calendar.queryFor(
          Calendar.calendarFor(),
          { group: 'types' }
        )).should.containDeep(Types);
      });

      it('Should group dates by their liturgical seasons', function() {
        _.keys( Calendar.calendarFor({
            query: { group: 'liturgicalSeasons' }
          })).should.containDeep(_.values( LiturgicalSeasons ));

        _.keys(Calendar.queryFor(
          Calendar.calendarFor(),
          { group: 'liturgicalSeasons' }
        )).should.containDeep(_.values( LiturgicalSeasons ));
      });

      it('Should group dates by their psalter weeks', function() {
        _.keys(Calendar.calendarFor({
          query: { group: 'psalterWeek' }
        })).should.containDeep(_.keys(PsalterWeeks));

        _.keys(Calendar.queryFor(
          Calendar.calendarFor(),
          { group: 'psalterWeek' }
        )).should.containDeep(_.keys(PsalterWeeks));
      });
    });

    describe('For filtering by titles', function() {
      _.each(
          Calendar.calendarFor({ query: { title: Titles.FEAST_OF_THE_LORD }}),
          d => _.includes( d.data.meta.titles, Titles.FEAST_OF_THE_LORD ).should.be.ok
        );
      _.each(
        Calendar.calendarFor({ query: { title: Titles.PATRON_OF_EUROPE }}),
        d => _.includes( d.data.meta.titles, Titles.PATRON_OF_EUROPE ).should.be.ok
      );
    });

    describe('Testing advanced filters', function() {

      it('The proper color of a Memorial or a Feast is white except for martyrs in which case it is red', function() {
        var calendar = Calendar.calendarFor({ query: { group: 'types' }}, true );
        _.each( _.get( calendar, Types.FEAST ), function( d ) {
          if ( _.eq( d.key, 'theExaltationOfTheHolyCross') ) {
            d.data.meta.liturgicalColor.key.should.be.eql( LiturgicalColors.RED.key );
          }
          else {
            if ( !_.isUndefined( d.data.meta.titles ) ) {
              if ( _.includes( d.data.meta.titles, Titles.MARTYR ) ) {
                d.data.meta.liturgicalColor.key.should.be.eql( LiturgicalColors.RED.key );
              }
              else {
                d.data.meta.liturgicalColor.key.should.be.eql( LiturgicalColors.WHITE.key );
              }
            }
            else {
              d.data.meta.liturgicalColor.key.should.be.eql( LiturgicalColors.WHITE.key );
            }
          }
        });
        _.each( _.get( calendar, Types.MEMORIAL ), function( d ) {
          if ( !_.isUndefined( d.data.meta.titles ) ) {
            if ( _.includes( d.data.meta.titles, Titles.MARTYR ) ) {
              d.data.meta.liturgicalColor.key.should.be.eql( LiturgicalColors.RED.key );
            }
            else {
              d.data.meta.liturgicalColor.key.should.be.eql( LiturgicalColors.WHITE.key );
            }
          }
          else {
            d.data.meta.liturgicalColor.key.should.be.eql( LiturgicalColors.WHITE.key );
          }
        });
      });

      it('The proper color for the Chair of Peter and the Conversion of St. Paul is white, although both St. Peter and St. Paul were martyrs.', function() {
        var calendar = Calendar.calendarFor({ query: { group: 'types' }}, true );
        _.each( _.get( calendar, Types.FEAST ), function( d ) {
          if ( _.eq( d.key, 'chairOfSaintPeter' ) || _.eq( d.key, 'conversionOfSaintPaulApostle' ) ) {
            d.data.meta.liturgicalColor.should.be.eql( LiturgicalColors.WHITE );
          }
        });
      })
    });

    describe('Test calendarFor() options', function() {

      describe('Test the "year" property', function() {

      });

      describe('Test the "christmastideEnds" property', function() {

      });

      describe('Test the "epiphanyOnJan6" property', function() {

      });

      describe('Test the "christmastideIncludesTheSeasonOfEpiphany" property', function() {

      });

      describe('Test the "corpusChristiOnThursday" property', function() {

      });

      describe('Test the "ascensionOnSunday" property', function() {

      });

      describe('Test the "type" property', function() {

      });
    });
  });
});
