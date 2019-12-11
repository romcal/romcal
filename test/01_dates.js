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

describe('Testing specific liturgical date functions', function() {

  this.timeout(0);

  describe('In Christian calendars, Sunday is the first day of the week', function() {

    it('The Solemnity of Epiphany is a Sunday', function() {
      Romcal.Utils.setLocale('fr');
      var date1 = Dates.epiphany( 1969 );
      date1.isoWeekday().should.be.eql( 7 );
      Romcal.Utils.setLocale('en');
      var date2 = Dates.epiphany( 1969 );
      date2.isoWeekday().should.be.eql( 7 );
    });
  });

  describe('Ash Wednesday occurs on 46 days before Easter Sunday', function() {

    it('In 1969, Ash Wednesday was on February 19', function() {
      var date = Dates.ashWednesday( 1969 );
      date.month().should.be.eql( 1 );
      date.date().should.be.eql( 19 );
    });

    it('In 2008, Ash Wednesday was on February 6', function() {
      var date = Dates.ashWednesday( 2008 );
      date.month().should.be.eql( 1 );
      date.date().should.be.eql( 6 );
    });

    it('In 2050, Ash Wednesday will be on February 23', function() {
      var date = Dates.ashWednesday( 2050 );
      date.month().should.be.eql( 1 );
      date.date().should.be.eql( 23 );
    });

    it('Its earliest occuring date is Feb 4 and latest occuring date is March 17 and its always on Wednesday', function() {
      for ( var i = 1800, il = 2100; i <= 2015; i++ ) {
        Dates.ashWednesday( i ).month().should.be.equalOneOf([1,2]);
        Dates.ashWednesday( i ).day().should.be.eql( 3 );
      }
    });
  });

  describe('Palm Sunday occurs on the Sunday before Easter Sunday', function() {

    it('In 1969, Palm Sunday was on March 30', function() {
      var date = Dates.palmSunday( 1969 );
      date.month().should.be.eql( 2 );
      date.date().should.be.eql( 30 );
    });

    it('In 2008, Palm Sunday was on March 16', function() {
      var date = Dates.palmSunday( 2008 );
      date.month().should.be.eql( 2 );
      date.date().should.be.eql( 16 );
    });

    it('In 2050, Palm Sunday will be on April 3', function() {
      var date = Dates.palmSunday( 2050 );
      date.month().should.be.eql( 3 );
      date.date().should.be.eql( 3 );
    });

    it('Its earliest occuring date is March 15 and latest occuring date is April 18', function() {
      for ( var i = 1850, il = 2050; i <= 2015; i++ ) {
        Dates.palmSunday( i ).month().should.be.equalOneOf([2,3]);
      }
    });
  });

  describe('Holy Thursday occurs on the Thursday before Easter Sunday', function() {

    it('In 1969, Holy Thursday was on April 3', function() {
      var date = Dates.holyThursday( 1969 );
      date.month().should.be.eql( 3 );
      date.date().should.be.eql( 3 );
    });

    it('In 2008, Holy Thursday was on March 20', function() {
      var date = Dates.holyThursday( 2008 );
      date.month().should.be.eql( 2 );
      date.date().should.be.eql( 20 );
    });

    it('In 2050, Holy Thursday will be on April 7', function() {
      var date = Dates.holyThursday( 2050 );
      date.month().should.be.eql( 3 );
      date.date().should.be.eql( 7 );
    });
  });

  describe('Good Friday occurs on the Friday before Easter Sunday', function() {

    it('In 1969, Good Friday was on April 4', function() {
      var date = Dates.goodFriday( 1969 );
      date.month().should.be.eql( 3 );
      date.date().should.be.eql( 4 );
    });

    it('In 2008, Good Friday was on March 21', function() {
      var date = Dates.goodFriday( 2008 );
      date.month().should.be.eql( 2 );
      date.date().should.be.eql( 21 );
    });

    it('In 2050, Good Friday will be on April 8', function() {
      var date = Dates.goodFriday( 2050 );
      date.month().should.be.eql( 3 );
      date.date().should.be.eql( 8 );
    });
  });

  describe('Holy Saturday is the day before Easter', function() {
    it('In 1969, Holy Saturday was on April 5', function() {
      var date = Dates.holySaturday( 1969 );
      date.month().should.be.eql( 3 );
      date.date().should.be.eql( 5 );
    });

    it('In 2008, Holy Saturday was on March 22', function() {
      var date = Dates.holySaturday( 2008 );
      date.month().should.be.eql( 2 );
      date.date().should.be.eql( 22 );
    });

    it('In 2050, Holy Saturday will be on April 9', function() {
      var date = Dates.holySaturday( 2050 );
      date.month().should.be.eql( 3 );
      date.date().should.be.eql( 9 );
    });
  });

  describe('Holy Week + Easter Triduum is from Palm Sunday to Holy Saturday', function() {
    it('The first day of Holy Week should start on Palm Sunday', function() {
      for ( var i = 1900, il = 2050; i <= il; i++ ) {
        _.head( Dates.holyWeek( i ) ).isSame( Dates.palmSunday( i ) ).should.be.eql( true );
      }
    });

    it('The last day of Holy Week should be on Holy Saturday', function() {
      for ( var i = 1900, il = 2050; i <= il; i++ ) {
        _.last( Dates.holyWeek( i ) ).isSame( Dates.holySaturday( i ) ).should.be.eql( true );
      }
    });
  });

  describe('Easter calculation based on an algorithm from The Explanatory Supplement to the Astronomical Almanac', function() {

    it('In 1969, Easter Sunday was on April 6', function() {
      var date = Dates.easter( 1969 );
      date.month().should.be.eql( 3 );
      date.date().should.be.eql( 6 );
    });

    it('In 2008, Easter Sunday was on March 23', function() {
      var date = Dates.easter( 2008 );
      date.month().should.be.eql( 2 );
      date.date().should.be.eql( 23 );
    });

    it('In 2050, Easter Sunday will be on April 10', function() {
      var date = Dates.easter( 2050 );
      date.month().should.be.eql( 3 );
      date.date().should.be.eql( 10 );
    });

    it('Its earliest occuring date is March 22 and latest occuring date is April 25', function() {
      for ( var i = 1900, il = 2100; i <= il; i++ ) {
        var recurrence = moment().recur({
            start: moment.utc({ year: i, month: 2, day: 22 }),
            end: moment.utc({ year: i, month: 3, day: 25 })
          }),
          dates = recurrence.all('L');
        Dates.easter( i ).format('L').should.be.equalOneOf( dates );
      }
    });
  });

  describe('Divine Mercy Sunday (Low Sunday or the Sunday after Easter)', function() {
    it('In 1969, Divine Mercy Sunday was on April 13', function() {
      var date = Dates.divineMercySunday( 1969 );
      date.month().should.be.eql( 3 );
      date.date().should.be.eql( 13 );
    });

    it('In 2008, Divine Mercy Sunday was on March 30', function() {
      var date = Dates.divineMercySunday( 2008 );
      date.month().should.be.eql( 2 );
      date.date().should.be.eql( 30 );
    });

    it('In 2050, Divine Mercy Sunday will be on April 17', function() {
      var date = Dates.divineMercySunday( 2050 );
      date.month().should.be.eql( 3 );
      date.date().should.be.eql( 17 );
    });
  });

  describe('Ascension of our Lord', function() {

    describe('If it is celebrated on Thursday (39 days after Easter)', function() {

      it('In 1969, Ascension was on May 15', function() {
        var date = Dates.ascension( 1969 );
        date.month().should.be.eql( 4 );
        date.date().should.be.eql( 15 );
      });

      it('In 2008, Ascension was on May 1', function() {
        var date = Dates.ascension( 2008 );
        date.month().should.be.eql( 4 );
        date.date().should.be.eql( 1 );
      });

      it('In 2050, Ascension will be on May 19', function() {
        var date = Dates.ascension( 2050 );
        date.month().should.be.eql( 4 );
        date.date().should.be.eql( 19 );
      });

      it('It can occur anytime between April 30 and June 3 (inclusive)', function() {
        for ( var i = 1900, il = 2100; i <= il; i++ ) {
          var recurrence = moment().recur({
              start: moment.utc({ year: i, month: 3, day: 30 }),
              end: moment.utc({ year: i, month: 5, day: 3 })
            }),
            dates = recurrence.all('L');
          Dates.ascension( i ).format('L').should.be.equalOneOf( dates );
        }
      });

    });

    describe('The Nativity of John the Baptist', function() {
      it('Occurs every year on June 24', function() {
        for ( var i = 1900, il = 2100; i <= il; i++ ) {
          Dates.birthOfJohnTheBaptist( i ).date().should.be.eql( 24 );
          Dates.birthOfJohnTheBaptist( i ).month().should.be.eql( 5 );
        }
      });
    });

    describe('The feast of Peter and Paul, Apostles', function() {
      it('Occurs every year on June 29', function() {
        for ( var i = 1900, il = 2100; i <= il; i++ ) {
          Dates.peterAndPaulApostles( i ).date().should.be.eql( 29 );
          Dates.peterAndPaulApostles( i ).month().should.be.eql( 5 );
        }
      });
    });

    describe('The feast of the Assumption', function() {
      it('Occurs every year on August 15', function() {
        for ( var i = 1900, il = 2100; i <= il; i++ ) {
          Dates.assumption( i ).date().should.be.eql( 15 );
          Dates.assumption( i ).month().should.be.eql( 7 );
        }
      });
    });

    describe('The feast of the All Saints', function() {
      it('Occurs every year on November 1', function() {
        for ( var i = 1900, il = 2100; i <= il; i++ ) {
          Dates.allSaints( i ).date().should.be.eql( 1 );
          Dates.allSaints( i ).month().should.be.eql( 10 );
        }
      });
    });

    describe('If it is celebrated on Sunday (42 days after Easter)', function() {

      it('In 1969, Ascension was on May 18', function() {
        var date = Dates.ascension( 1969, true );
        date.month().should.be.eql( 4 );
        date.date().should.be.eql( 18 );
      });

      it('In 2008, Ascension was on May 4', function() {
        var date = Dates.ascension( 2008, true );
        date.month().should.be.eql( 4 );
        date.date().should.be.eql( 4 );
      });

      it('In 2050, Ascension will be on May 22', function() {
        var date = Dates.ascension( 2050, true );
        date.month().should.be.eql( 4 );
        date.date().should.be.eql( 22 );
      });

      it('It can occur anytime between May 3 and June 6 (inclusive)', function() {
        for ( var i = 1900, il = 2100; i <= il; i++ ) {
          var recurrence = moment().recur({
              start: moment.utc({ year: i, month: 4, day: 3 }),
              end: moment.utc({ year: i, month: 5, day: 6 })
            }),
            dates = recurrence.all('L');
          Dates.ascension( i, true ).format('L').should.be.equalOneOf( dates );
        }
      });

    });
  });

  describe('Pentecost Sunday occurs 49 days after Easter', function() {

    it('In 1969, Pentecost Sunday was on May 25', function() {
      var date = Dates.pentecostSunday( 1969 );
      date.month().should.be.eql( 4 );
      date.date().should.be.eql( 25 );
    });

    it('In 2008, Pentecost Sunday was on May 11', function() {
      var date = Dates.pentecostSunday( 2008 );
      date.month().should.be.eql( 4 );
      date.date().should.be.eql( 11 );
    });

    it('In 2050, Pentecost Sunday will be on May 29', function() {
      var date = Dates.pentecostSunday( 2050 );
      date.month().should.be.eql( 4 );
      date.date().should.be.eql( 29 );
    });

    it('It can occur anytime between May 10 and June 13 (inclusive)', function() {
      for ( var i = 1900, il = 2100; i <= il; i++ ) {
        var recurrence = moment().recur({
            start: moment.utc({ year: i, month: 4, day: 10 }),
            end: moment.utc({ year: i, month: 5, day: 13 })
          }),
          dates = recurrence.all('L');
        Dates.pentecostSunday( i ).format('L').should.be.equalOneOf( dates );
      }
    });
  });

  describe('Trinity Sunday occurs 56 days after Easter', function() {

    it('In 1969, Trinity Sunday was on June 1', function() {
      var date = Dates.trinitySunday( 1969 );
      date.month().should.be.eql( 5 );
      date.date().should.be.eql( 1 );
    });

    it('In 2008, Trinity Sunday was on May 18', function() {
      var date = Dates.trinitySunday( 2008 );
      date.month().should.be.eql( 4 );
      date.date().should.be.eql( 18 );
    });

    it('In 2050, Trinity Sunday will be on June 5', function() {
      var date = Dates.trinitySunday( 2050 );
      date.month().should.be.eql( 5 );
      date.date().should.be.eql( 5 );
    });

    it('It can occur anytime between May 17 and June 20 (inclusive)', function() {
      for ( var i = 1900, il = 2100; i <= il; i++ ) {
        var recurrence = moment().recur({
            start: moment.utc({ year: i, month: 4, day: 17 }),
            end: moment.utc({ year: i, month: 5, day: 20 })
          }),
          dates = recurrence.all('L');
        Dates.trinitySunday( i ).format('L').should.be.equalOneOf( dates );
      }
    });
  });

  describe('Corpus Christi', function() {

    describe('If it is celebrated on Sunday (63 days after Easter)', function() {

      it('In 1969, Corpus Christi was on June 8', function() {
        var date = Dates.corpusChristi( 1969 );
        date.month().should.be.eql( 5 );
        date.date().should.be.eql( 8 );
      });

      it('In 2008, Corpus Christi was on May 25', function() {
        var date = Dates.corpusChristi( 2008 );
        date.month().should.be.eql( 4 );
        date.date().should.be.eql( 25 );
      });

      it('In 2050, Corpus Christi will be on June 12', function() {
        var date = Dates.corpusChristi( 2050 );
        date.month().should.be.eql( 5 );
        date.date().should.be.eql( 12 );
      });

      it('It can occur anytime between May 24 and June 27 (inclusive)', function() {
        for ( var i = 1900, il = 2100; i <= il; i++ ) {
          var recurrence = moment().recur({
              start: moment.utc({ year: i, month: 4, day: 24 }),
              end: moment.utc({ year: i, month: 5, day: 27 })
            }),
            dates = recurrence.all('L');
          Dates.corpusChristi( i ).format('L').should.be.equalOneOf( dates );
        }
      });
    });

    describe('If it is celebrated on Thursday (60 days after Easter)', function() {

      it('In 1969, Corpus Christi was on June 5', function() {
        var date = Dates.corpusChristi( 1969, true );
        date.month().should.be.eql( 5 );
        date.date().should.be.eql( 5 );
      });

      it('In 2008, Corpus Christi was on May 22', function() {
        var date = Dates.corpusChristi( 2008, true );
        date.month().should.be.eql( 4 );
        date.date().should.be.eql( 22 );
      });

      it('In 2050, Corpus Christi will be on June 9', function() {
        var date = Dates.corpusChristi( 2050, true );
        date.month().should.be.eql( 5 );
        date.date().should.be.eql( 9 );
      });

      it('It can occur anytime between May 21 and June 24 (inclusive)', function() {
        for ( var i = 1900, il = 2100; i <= il; i++ ) {
          var recurrence = moment().recur({
              start: moment.utc({ year: i, month: 4, day: 21 }),
              end: moment.utc({ year: i, month: 5, day: 24 })
            }),
            dates = recurrence.all('L');
          Dates.corpusChristi( i, true ).format('L').should.be.equalOneOf( dates );
        }
      });
    });
  });

  describe('Sacred Heart of Jesus occurs on 68 days after Easter', function() {

    it('In 1969, Sacred Heart of Jesus was on Thursday, June 13', function() {
      var date = Dates.sacredHeartOfJesus( 1969 );
      date.month().should.be.eql( 5 );
      date.date().should.be.eql( 13 );
    });

    it('In 2008, Sacred Heart of Jesus was on May 30', function() {
      var date = Dates.sacredHeartOfJesus( 2008 );
      date.month().should.be.eql( 4 );
      date.date().should.be.eql( 30 );
    });

    it('In 2050, Sacred Heart of Jesus will be on June 17', function() {
      var date = Dates.sacredHeartOfJesus( 2050 );
      date.month().should.be.eql( 5 );
      date.date().should.be.eql( 17 );
    });

    it('It can occur anytime between May 29 and Jul 2 (inclusive)', function() {
      for ( var i = 1900, il = 2100; i <= il; i++ ) {
        var recurrence = moment().recur({
            start: moment.utc({ year: i, month: 4, day: 29 }),
            end: moment.utc({ year: i, month: 6, day: 2 })
          }),
          dates = recurrence.all('L');
        Dates.sacredHeartOfJesus( i ).format('L').should.be.equalOneOf( dates );
      }
    });
  });

  describe('Immaculate Heart of Mary occurs on 69 days after Easter', function() {

    it('In 1969, Sacred Heart of Jesus was on Thursday, June 14', function() {
      var date = Dates.immaculateHeartOfMary( 1969 );
      date.month().should.be.eql( 5 );
      date.date().should.be.eql( 14 );
    });

    it('In 2008, Sacred Heart of Jesus was on May 31', function() {
      var date = Dates.immaculateHeartOfMary( 2008 );
      date.month().should.be.eql( 4 );
      date.date().should.be.eql( 31 );
    });

    it('In 2050, Sacred Heart of Jesus will be on June 18', function() {
      var date = Dates.immaculateHeartOfMary( 2050 );
      date.month().should.be.eql( 5 );
      date.date().should.be.eql( 18 );
    });

    it('It can occur anytime between May 30 and Jul 3 (inclusive)', function() {
      for ( var i = 1900, il = 2100; i <= il; i++ ) {
        var recurrence = moment().recur({
            start: moment.utc({ year: i, month: 4, day: 30 }),
            end: moment.utc({ year: i, month: 6, day: 3 })
          }),
          dates = recurrence.all('L');
        Dates.immaculateHeartOfMary( i ).format('L').should.be.equalOneOf( dates );
      }
    });
  });

  describe('Christ the King is always the 34th (and last) Sunday of Ordinary Time and is the week before the First Sunday of Advent', function() {
    it('It can occur anytime between Nov 20 and Nov 26 (inclusive)', function() {
      for ( var i = 1900, il = 2100; i <= il; i++ ) {
        var recurrence = moment().recur({
            start: moment.utc({ year: i, month: 10, day: 20 }),
            end: moment.utc({ year: i, month: 10, day: 26 })
          }),
          dates = recurrence.all('L');
        Dates.christTheKing( i ).format('L').should.be.equalOneOf( dates );
      }
    });
  });

  describe('Christmas day is celebrated on the 25th of December', function() {
    it('Always falls on the 25th of December every year', function() {
      for ( var i = 1900, il = 2100; i <= il; i++ ) {
        Dates.christmas( i ).date().should.be.eql(25);
        Dates.christmas( i ).month().should.be.eql(11);
      }
    });
  });

  describe('Feast of the Holy Family', function() {

    // Christmas in 2011 was on Sunday
    it('occurs on December 30th if Christmas falls on a Sunday', function() {
      var date = Dates.holyFamily( 2011 );
      date.month().should.be.eql( 11 );
      date.date().should.be.eql( 30 );
    });

    // Christmas in 2010 was on a Saturday
    it('occurs on the Sunday after Christmas (26th December) if Christmas falls on a Saturday', function() {
      var date = Dates.holyFamily( 2010 );
      date.month().should.be.eql( 11 );
      date.date().should.be.eql( 26 );
    });

    // Christmas in 2009 was on a Friday
    it('In 2009, Holy Family occurs on the Sunday after Christmas (27th Dec) when Christmas wes on a Friday', function() {
      var date = Dates.holyFamily( 2009 );
      date.month().should.be.eql( 11 );
      date.date().should.be.eql( 27 );
    });

    // Christmas in 2008 was on a Thursday
    it('In 2008, Holy Family occurs on the Sunday after Christmas (28th Dec) when Christmas wes on a Thursday', function() {
      var date = Dates.holyFamily( 2008 );
      date.month().should.be.eql( 11 );
      date.date().should.be.eql( 28 );
    });
  });

  describe('Epiphany', function() {

    describe('If Epiphany is always celebrated on Jan 6', function() {

      it('Epiphany in 2001 will be on a Saturday', function() {
        Dates.epiphany( 2001, true ).day().should.be.eql( 6 );
      });

      it('Epiphany in 2002 will be on a Sunday', function() {
        Dates.epiphany( 2002, true ).day().should.be.eql( 0 );
      });

      it('Epiphany in 2003 will be on a Monday', function() {
        Dates.epiphany( 2003, true ).day().should.be.eql( 1 );
      });

    });

    describe('If Epiphany is not celebrated on Jan 6, Epiphany is celebrated on the 1st Sunday after the 1st Saturday in January', function() {

      it('If first day of the year 2011 is a Saturday, Mary Mother of God is on that day and Epiphany is on the next day', function() {

        // If first day of 2011, 2022 was/is a Saturday
        var first = moment.utc({ year: 2011, month: 0, day: 1 }),
            target = moment.utc({ year: 2011, month: 0, day: 1 }).add(1, 'weeks').startOf('week'),
            date = Dates.epiphany( 2011 );

        first.day().should.be.eql( 6 ); // First day of the year should be a Saturday
        first.isSame( Dates.maryMotherOfGod( 2011 ) ).should.be.eql( true ); // First day of the year is Mary, Mother of God
        target.dayOfYear().should.be.eql( 2 ); // Epiphany should be the 2nd day of the year ( Sunday )
        target.day().should.be.eql( 0 ); // Epiphany should be a Sunday
        date.isSame( target ).should.be.eql( true );

      });

      it('If first day of the year 2012 is a Sunday, Mary Mother of God is on that Sunday and the Sunday proceeding will be Epiphany', function() {

        // First day of 2012, 2017 was a Sunday
        var first = moment.utc({ year: 2012, month: 0, day: 1 }),
            target = moment.utc({ year: 2012, month: 0, day: 1 }).add( 7, 'days').startOf('day'),
            date = Dates.epiphany( 2012 );

        first.day().should.be.eql( 0 ); // First day of the year should be a Sunday
        first.isSame(Dates.maryMotherOfGod( 2012 )).should.be.eql( true ); // First day of the year is Mary, Mother of God
        target.dayOfYear().should.be.eql( 8 ); // Epiphany should be the 8th day of the year
        target.week().should.be.eql( 2 ); // Epiphany should be the 2nd Sunday day of the year
        target.day().should.be.eql( 0 ); // Epiphany should be a Sunday
        date.isSame(target).should.be.eql( true );

      });

      it('If first day of the year 2011 is on a feria (Sat) (i.e. Mon - Sat), Epiphany will be celebrated on the Sunday proceeding', function() {

        // First day of 2014 was a Wed, First day of 2015 was a Thurs
        var first = moment.utc({ year: 2011, month: 0, day: 1 }),
            target = moment.utc({ year: 2011, month: 0, day: 1 }).add( 1, 'days').startOf('day'),
            date = Dates.epiphany( 2011 );

        first.day().should.be.equalOneOf([1, 2, 3, 4, 5, 6]); // First day of the year should be a feria
        target.dayOfYear().should.be.eql(2); // Epiphany should be the 4th day of the year
        target.day().should.be.eql( 0 ); // Epiphany should be a Sunday
        date.isSame(target).should.be.eql( true );

      });

      it('Its earliest occuring date is Jan 2 and latest occuring date is Jan 8', function() {
        Dates.epiphany( 1999 ).date().should.be.equalOneOf([2,3,4,5,6,7,8]);
        Dates.epiphany( 2000 ).date().should.be.equalOneOf([2,3,4,5,6,7,8]);
        Dates.epiphany( 2001 ).date().should.be.equalOneOf([2,3,4,5,6,7,8]);
        Dates.epiphany( 2002 ).date().should.be.equalOneOf([2,3,4,5,6,7,8]);
        Dates.epiphany( 2003 ).date().should.be.equalOneOf([2,3,4,5,6,7,8]);
        Dates.epiphany( 2004 ).date().should.be.equalOneOf([2,3,4,5,6,7,8]);
        Dates.epiphany( 2005 ).date().should.be.equalOneOf([2,3,4,5,6,7,8]);
      });

    });
  });

  describe('The Solemnity of Joseph, Husband of Mary', function() {

    it('Should fall on the 19th of March every year if not on a Sunday of Lent or during Holy Week', function() {

      for ( var i = 1950, il = 2050; i <= il; i++ ) {

        var date = moment.utc({ year: i, month: 2, day: 19 }),
            sundays = Dates.sundaysOfLent( i ),
            holyWeek = Dates.holyWeek( i ),
            range = moment.range( _.head( holyWeek ), _.last( holyWeek ) ),
            onSundayOfLent = false;

        _.each( sundays, function( sunday ) {
          if ( date.isSame( sunday ) ) {
            onSundayOfLent = true;
          }
        });

        if ( onSundayOfLent || range.contains( date ) ) {
          continue;
        }
        else {
          date.date().should.be.eql( Dates.josephHusbandOfMary( i ).date() );
        }
      }

    });

    it('If it falls on a Sunday of Lent, it should be moved to the following Monday', function() {

      for ( var i = 1950, il = 2050; i <= il; i++ ) {

        var date = moment.utc({ year: i, month: 2, day: 19 }),
            holyWeek = Dates.holyWeek( i ),
            sundays = Dates.sundaysOfLent( i ),
            range = moment.range( _.head( holyWeek ), _.last( holyWeek ) ),
            onSundayOfLent = false;

        _.each( sundays, function( sunday ) {
          if ( date.isSame( sunday ) ) {
            onSundayOfLent = true;
          }
        });

        if ( onSundayOfLent && !range.contains( date ) ) {
          Dates.josephHusbandOfMary( i ).day().should.be.eql( 1 );
        }
      }

    });

    it('If it falls during Holy Week, it should be moved to the Saturday preceeding Palm Sunday', function() {

      for ( var i = 1950, il = 2050; i <= il; i++ ) {

        var date = moment.utc({ year: i, month: 2, day: 19 }),
            holyWeek = Dates.holyWeek( i ),
            sundays = Dates.sundaysOfLent( i ),
            range = moment.range( _.head( holyWeek ), _.last( holyWeek ) ),
            onSundayOfLent = false;

        _.each( sundays, function( sunday ) {
          if ( date.isSame( sunday ) ) {
            onSundayOfLent = true;
          }
        });

        if ( !onSundayOfLent && range.contains( date ) ) {
          Dates.josephHusbandOfMary( i ).isSame(Dates.palmSunday( i ).subtract( 1, 'days' )).should.be.eql( true );
        }
      }

    });
  });

  describe('The Solemnity of the Annunciation', function() {

    it('Should fall on the 25th of March every year if not during a Sunday of Lent, Holy Week or the the Octave of Easter', function() {

      for ( var i = 1990, il = 2050; i <= il; i++ ) {

        var date = moment.utc({ year: i, month: 2, day: 25 }),
            sundaysOfLent = Dates.sundaysOfLent( i ),
            match = _.find( sundaysOfLent, sunday => date.isSame( sunday )),
            holyWeek = Dates.holyWeek( i ),
            holyWeekRange = moment.range( _.head( holyWeek ), _.last( holyWeek ) ),
            octave = Dates.octaveOfEaster( i ),
            octaveRange = moment.range( _.head( octave ), _.last( octave ) );

        if ( !holyWeekRange.contains( date ) && !octaveRange.contains( date ) && !match ) {
          Dates.annunciation( i ).date().should.be.eql( 25 );
        }
      }

    });

    it('If it occurs during Holy Week, it should be moved to the Monday after Divine Mercy Sunday', function() {

      for ( var i = 1950, il = 2050; i <= il; i++ ) {

        var date = moment.utc({ year: i, month: 2, day: 25 }),
            holyWeek = Dates.holyWeek( i ),
            holyWeekRange = moment.range( _.head( holyWeek ), _.last( holyWeek ) ),
            octave = Dates.octaveOfEaster( i ),
            octaveRange = moment.range( _.head( octave ), _.last( octave ) );

        if ( holyWeekRange.contains( date ) && !octaveRange.contains( date ) ) {
          Dates.annunciation( i ).isSame(Dates.divineMercySunday( i ).add( 1, 'days' )).should.be.eql(true);
        }
      }

    });

    it('If it falls during Holy Week, it should be moved to the Saturday preceeding Palm Sunday', function() {

      for ( var i = 1950, il = 2050; i <= il; i++ ) {

        var date = moment.utc({ year: i, month: 2, day: 25 }),
            holyWeek = Dates.holyWeek( i ),
            holyWeekRange = moment.range( _.head( holyWeek ), _.last( holyWeek ) ),
            octave = Dates.octaveOfEaster( i ),
            octaveRange = moment.range( _.head( octave ), _.last( octave ) );

        if ( !holyWeekRange.contains( date ) && octaveRange.contains( date ) ) {
          Dates.annunciation( i ).isSame(Dates.divineMercySunday( i ).add( 1, 'days' )).should.be.eql(true);
        }
      }

    });
  });

  describe('The Baptism of the Lord', function() {

    describe('When Epiphany is celebrated on the 6th of Jan', function() {

      it('The Sunday following Jan 6 is the Baptism of the Lord', function() {
        for ( var i = 1900, il = 2100; i <= il; i++ ) {
          var epiphany = Dates.epiphany( i, true );
          epiphany.add( 1, 'weeks' ).startOf('week').isSame(Dates.baptismOfTheLord( i, true )).should.be.eql(true);
        }
      });

    });

    describe('When Epiphany is not celebrated on Jan. 6 (i.e. celebrated on a Sunday)', function() {

      it('If Epiphany occurs on Sunday Jan. 7 or Sunday Jan. 8, then the Baptism of the Lord is the next day (Monday)', function() {
        for ( var i = 1900, il = 2100; i <= il; i++ ) {
          var epiphany = Dates.epiphany( i );
          epiphany.day().should.be.eql( 0 );
          if ( _.isEqual( epiphany.date(), 7 ) || _.isEqual( epiphany.date(), 8 )  ) {
            epiphany.add( 1, 'days' ).isSame(Dates.baptismOfTheLord( i )).should.be.eql( true );
          }
        }
      });

      it('If Epiphany occurs on a Sunday before Jan. 6, the Sunday following Epiphany is the Baptism of the Lord.', function() {
        for ( var i = 1900, il = 2100; i <= il; i++ ) {
          var epiphany = Dates.epiphany( i );
          epiphany.day().should.be.eql( 0 );
          if (  epiphany.date() < 6 ) {
            epiphany.add( 1, 'weeks' ).startOf('week').isSame(Dates.baptismOfTheLord( i )).should.be.eql(true);
          }
        }
      });

      it('If Epiphany occurs on Sunday Jan. 6, the Baptism of the Lord occurs on the following Sunday', function() {
        for ( var i = 1900, il = 2100; i <= il; i++ ) {
          var epiphany = Dates.epiphany( i );
          epiphany.day().should.be.eql( 0 );
          if (  _.isEqual( epiphany.date(), 6 )  ) {
            epiphany.add( 1, 'weeks' ).startOf('week').isSame(Dates.baptismOfTheLord( i )).should.be.eql(true);
          }
        }
      });

    });
  });

  describe('The Presentation of the Lord', function() {
    it('Should always fall on the 2nd of February', function() {
      for ( var i = 1900, il = 2100; i <= il; i++ ) {
        Dates.presentationOfTheLord( i ).month().should.be.eql( 1 );
        Dates.presentationOfTheLord( i ).date().should.be.eql( 2 );
      }
    });
  });

  describe('The Solemnity of the Immaculate Conception', function() {

    it('Should fall on the 8th of December every year if not on a Sunday of Advent', function() {

      for ( var i = 1900, il = 2100; i <= il; i++ ) {

        var date = moment.utc({ year: i, month: 11, day: 8 }),
            sundays = Dates.sundaysOfAdvent( i ),
            onSundayOfAdvent = false;

        _.each( sundays, function( sunday ) {
          if ( date.isSame( sunday ) ) {
            onSundayOfAdvent = true;
          }
        });

        if ( !onSundayOfAdvent ) {
          date.date().should.be.eql( Dates.immaculateConception( i ).date() );
        }
      }

    });

    it('If it falls on a Sunday of Advent, it should be moved to the following Monday', function() {

      for ( var i = 1900, il = 2100; i <= il; i++ ) {

        var date = moment.utc({ year: i, month: 11, day: 8 }),
            sundays = Dates.sundaysOfAdvent( i ),
            onSundayOfAdvent = false;

        _.each( sundays, function( sunday ) {
          if ( date.isSame( sunday ) ) {
            onSundayOfAdvent = true;
          }
        });

        if ( onSundayOfAdvent ) {
          Dates.immaculateConception( i ).date().should.be.eql( 9 );
        }
      }

    });
  });
});
