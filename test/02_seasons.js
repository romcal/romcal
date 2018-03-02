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
var Seasons = Romcal.Seasons;
var Calendar = Romcal.Calendar;
var Dates = Romcal.Dates;

describe('Testing date range functions', function() {

  this.timeout(0);

  describe('The Season of Advent', function() {

    it('There are always 4 Sundays in advent', function() {
      for ( var i = 1900, il = 2100; i <= il; i++ ) {
        Dates.sundaysOfAdvent(i).length.should.be.eql(4);
      }
    });

    it('Depending on the day of Christmas, the 1st Sunday of Advent will be between Nov 27 - Dec 3', function() {
      Dates.sundaysOfAdvent(2005)[0].date().should.be.eql( 27 );
      Dates.sundaysOfAdvent(2000)[0].date().should.be.eql( 3 );
      Dates.sundaysOfAdvent(2001)[0].date().should.be.eql( 2 );
      Dates.sundaysOfAdvent(2002)[0].date().should.be.eql( 1 );
      Dates.sundaysOfAdvent(2003)[0].date().should.be.eql( 30 );
      Dates.sundaysOfAdvent(1998)[0].date().should.be.eql( 29 );
      Dates.sundaysOfAdvent(1999)[0].date().should.be.eql( 28 );
    });

    it('Depending on the day of Christmas, the number of days in Advent varies', function() {
      if ( _.isEqual( Dates.christmas( 2005 ).day(), 0 ) ) {
        Dates.daysOfAdvent( 2005 ).length.should.be.eql( 28 );
      }
      if ( _.isEqual( Dates.christmas( 2000 ).day(), 1 ) ) {
        Dates.daysOfAdvent( 2000 ).length.should.be.eql( 22 );
      }
      if ( _.isEqual( Dates.christmas( 2001 ).day(), 2 ) ) {
        Dates.daysOfAdvent( 2001 ).length.should.be.eql( 23 );
      }
      if ( _.isEqual( Dates.christmas( 2002 ).day(), 3 ) ) {
        Dates.daysOfAdvent( 2002 ).length.should.be.eql( 24 );
      }
      if ( _.isEqual( Dates.christmas( 2003 ).day(), 4 ) ) {
        Dates.daysOfAdvent( 2003 ).length.should.be.eql( 25 );
      }
      if ( _.isEqual( Dates.christmas( 1998 ).day(), 5 ) ) {
        Dates.daysOfAdvent( 1998 ).length.should.be.eql( 26 );
      }
      if ( _.isEqual( Dates.christmas( 1999 ).day(), 6 ) ) {
        Dates.daysOfAdvent( 1999 ).length.should.be.eql( 27 );
      }
    });
  });

  describe('The Season of Lent in the Liturgical Calendar', function() {

    it('It is typically 6 weeks long', function() {
      for ( var i = 1900, il = 2200; i <= il; i++ ) {
        Dates.sundaysOfLent( i ).length.should.be.eql(6);
      }
    });

    it('The first Sunday of Lent should be 4 days after Ash Wednesday', function() {
      for ( var i = 1900, il = 2200; i <= il; i++ ) {
        _.head( Dates.sundaysOfLent( i ) ).subtract( 4, 'days').isSame( Dates.ashWednesday( i )).should.be.eql(true);
      }
    });

    it('The last Sunday of Lent should be Palm Sunday', function() {
      for ( var i = 1900, il = 2200; i <= il; i++ ) {
        _.last( Dates.sundaysOfLent( i ) ).isSame( Dates.palmSunday( i ) ).should.be.eql(true);
      }
    });

    it('The Saturday in the week after Ash Wednesday should be in the 1st week of Lent', function() {
      Seasons.lent( 2017 )[10].key.toLowerCase().should.be.eql('saturdayofthe1stweekoflent');
    });

    it('The 2nd Sunday of Lent should be in the 2nd week of Lent', function() {
      Seasons.lent( 2017 )[11].key.toLowerCase().should.be.eql('2ndsundayoflent');
    });
  });

  describe('The Octave of Easter', function() {

    it('Should be 8 days long', function() {
      for ( var i = 1900, il = 2100; i <= il; i++ ) {
        Dates.octaveOfEaster( i ).length.should.be.eql(8);
      }
    });

    it('The first day of the octave should be on Easter Sunday', function() {
      for ( var i = 1900, il = 2100; i <= il; i++ ) {
        _.head( Dates.octaveOfEaster( i ) ).isSame( Dates.easter( i ) ).should.be.eql( true );
      }
    });

    it('The last day of the octave should be on Divine Mercy Sunday', function() {
      for ( var i = 1900, il = 2100; i <= il; i++ ) {
        _.last( Dates.octaveOfEaster( i ) ).isSame( Dates.divineMercySunday( i ) ).should.be.eql( true );
      }
    });
  });

  describe('Eastertide', function() {

    it('Should be 50 days long', function() {
      for ( var i = 1900, il = 2100; i <= il; i++ ) {
        Dates.daysOfEaster( i ).length.should.be.eql(50);
      }
    });

    it('The first Sunday of Easter should start on Easter Sunday', function() {
      for ( var i = 1900, il = 2100; i <= il; i++ ) {
        _.head( Dates.sundaysOfEaster( i ) ).isSame( Dates.easter( i ) ).should.be.eql( true );
      }
    });

    it('The last Sunday of Easter should be on Pentecost Sunday', function() {
      for ( var i = 1900, il = 2100; i <= il; i++ ) {
        _.last( Dates.sundaysOfEaster( i ) ).isSame( Dates.pentecostSunday( i ) ).should.be.eql( true );
      }
    });
  });

  describe('Ordinary Time in the Liturgical Calendar', function() {

    it('If the end of Christmastide is on Epiphany, Ordinary time starts the next day', function() {
      for ( var i = 1900, il = 2200; i <= il; i++ ) {
        _.head( Dates.daysOfEarlyOrdinaryTime( i, 't' ) ).subtract( 1, 'days' ).isSame( Dates.epiphany( i ) ).should.be.eql(true);
        _.last( Dates.daysOfEarlyOrdinaryTime( i, 't' ) ).add( 1, 'days' ).isSame( Dates.ashWednesday( i ) ).should.be.eql(true);
      }
    });

    it('If the end of Christmastide is on Baptism of the Lord, Ordinary time starts the next day', function() {
      for ( var i = 1900, il = 2200; i <= il; i++ ) {
        _.head( Dates.daysOfEarlyOrdinaryTime( i, 'o' ) ).subtract( 1, 'days' ).isSame( Dates.baptismOfTheLord( i )).should.be.eql(true);
        _.last( Dates.daysOfEarlyOrdinaryTime( i, 'o' ) ).add( 1, 'days' ).isSame( Dates.ashWednesday( i )).should.be.eql(true);
      }
    });

    it('If the end of Christmastide is on Presentation of the Lord, Ordinary time starts the next day', function() {
      for ( var i = 1900, il = 2100; i <= il; i++ ) {
        _.head( Dates.daysOfEarlyOrdinaryTime( i, 'e' ) ).subtract( 1, 'days' ).isSame( Dates.presentationOfTheLord( i )).should.be.eql(true);
        _.last( Dates.daysOfEarlyOrdinaryTime( i, 'e' ) ).add( 1, 'days' ).isSame( Dates.ashWednesday( i )).should.be.eql(true);
      }
    });

    it('There are typically 3 to 8 Sundays (and on rare occasions, 9 Sundays) in ordinary Time between the Baptism of the Lord to Ash Wednesday', function() {
      for ( var i = 1900, il = 2200; i <= il; i++ ) {
        var dates =  Dates.daysOfEarlyOrdinaryTime( i ),
            sundays = _.filter( dates, function( d ) {
              return _.eq( d.day(), 0 );
            });
        sundays.length.should.be.equalOneOf([3,4,5,6,7,8,9]);
        _.last( dates ).add( 1, 'days' ).isSame( Dates.ashWednesday( i )).should.be.eql(true);
      }
    });

    it('There are typically 24 to 29 Sundays in Ordinary Time between the Pentecost to the 1st Sunday of Advent', function() {
      for ( var i = 1900, il = 2100; i <= il; i++ ) {
        var dates = Dates.daysOfLaterOrdinaryTime( i ),
            sundays = _.filter( dates, function( d ) {
              return _.eq( d.day(), 0 );
            });
        sundays.length.should.be.equalOneOf([23,24,25,26,27,28,29]);
        _.head( dates ).subtract( 1, 'days' ).isSame( Dates.pentecostSunday( i ) ).should.be.eql(true);
        _.last( dates ).add( 1, 'days' ).isSame( Dates.sundaysOfAdvent(i)[0] ).should.be.eql(true);
      }
    });
  });

  describe('The Octave of Christmas', function() {
    it('Should be 8 days long from Christmas to the feast of the Holy Family', function() {
      for ( var i = 1900, il = 2100; i <= il; i++ ) {
        Dates.octaveOfChristmas( i ).length.should.be.eql( 8 );
      }
    });
  });

  describe('Christmastide', function() {

    describe('If Epiphany is celebrated on Jan 6', function() {

      it('The last day of Christmas is on 6th Jan, if following the Traditional end of the Christmas season', function() {
          for ( var i = 1900, il = 2100; i <= il; i++ ) {
            var dates = Dates.christmastide( i, 't', true );
            _.last( dates ).isSame( moment.utc({ year: (i + 1), month: 0, day: 6 }) ).should.be.eql( true ) ;
          }
      });

      it('The last day of Christmas is always on Sunday on the feast of the Baptism of the Lord, if following the Ordinary Liturgical Calendar of the Western Roman Rite', function() {
        for ( var i = 1900, il = 2100; i <= il; i++ ) {
          var dates = Dates.christmastide( i, 'o', true );
          _.last( dates ).day().should.be.eql( 0 ) ;
        }
      });
    });

    describe('If Epiphany is not celebrated on Jan 6 (i.e. on a Sunday)', function() {

      it('If following the Traditional end of the Christmas season, the last day of Christmas is on Epiphany', function() {
          for ( var i = 1900, il = 2100; i <= il; i++ ) {
            var dates = Dates.christmastide( i, 't' );
            _.last( dates ).isSame( Dates.epiphany( i + 1 ) ).should.be.eql( true ) ;
          }
      });

      it('If following the Ordinary Liturgical Calendar of the Western Roman Rite, the last day of Christmas is the feast of the Baptism of the Lord', function() {
          for ( var i = 1900, il = 2100; i <= il; i++ ) {
            var dates = Dates.christmastide( i, 'o' );
            _.last( dates ).isSame( Dates.baptismOfTheLord( i + 1 ) ).should.be.eql( true ) ;
          }
      });

      it('If following the Extraordinary Liturgical Calendar of the Western Roman Rite, the last day of Christmas is on the Feast of the Presentation', function() {
          for ( var i = 1900, il = 2100; i <= il; i++ ) {
            var dates = Dates.christmastide( i, 'e' );
            _.last( dates ).isSame( Dates.presentationOfTheLord( i + 1 ) ).should.be.eql( true ) ;
          }
      });

      it('If no rule is specified, the last day of Christmas will default to the Feast of the Baptism', function() {
          for ( var i = 1900, il = 2100; i <= il; i++ ) {
            var dates = Dates.christmastide( i );
            _.last( dates ).isSame( Dates.baptismOfTheLord( i + 1 ) ).should.be.eql( true ) ;
          }
      });
    });
  });
});

describe('Testing seasons utility functions', function() {

  this.timeout(0);

  describe('The liturgical year is divided to a number of seasons', function() {

    let calendar = Calendar.calendarFor({ 
      query: { 
        group: 'liturgicalSeasons'
      }
    });

    it('Groups dates within seasons based on identifiers', function() {
      _.each( calendar, ( dates, season ) => {
        _.each( dates, date => date.data.season.key.should.be.eql(season));
      });
    });

    it('The liturgical color for Ordinary Time is green', function() {
      _.each( Seasons.earlyOrdinaryTime( 2015, 'o', false ), date => {
        date.data.meta.liturgicalColor.should.be.eql(LiturgicalColors.GREEN);
      });
      _.each( Seasons.laterOrdinaryTime( 2015 ), date => {
        date.data.meta.liturgicalColor.should.be.eql(LiturgicalColors.GREEN);
      });
    });

    it('The liturgical color for Lent and Advent is purple, except for the 4th Sunday of Lent and 3rd Sunday of Advent, which is rose', function() {
      _.each( Seasons.lent( 2015 ), date => {
        if ( _.eq( date.key.toLowerCase(), '4thsundayoflent') ) {
          date.data.meta.liturgicalColor.should.be.eql( LiturgicalColors.ROSE );
        }
        else {
          date.data.meta.liturgicalColor.should.be.eql( LiturgicalColors.PURPLE );
        }
      });
      _.each( Seasons.advent( 2015 ), date => {
        if ( _.eq( date.key.toLowerCase(), '3rdsundayofadvent') ) {
          date.data.meta.liturgicalColor.should.be.eql( LiturgicalColors.ROSE );
        }
        else {
          date.data.meta.liturgicalColor.should.be.eql( LiturgicalColors.PURPLE );
        }
      });
    });

    it('The liturgical color for Christmastide and Eastertide is white', function() {
      _.each( Seasons.christmastide( 2015, 'o', false ),  date => {
        date.data.meta.liturgicalColor.should.be.eql( LiturgicalColors.WHITE );
      });
      _.each( Seasons.eastertide( 2015 ), date => {
        date.data.meta.liturgicalColor.should.be.eql( LiturgicalColors.WHITE );
      });
    });

  });

});
