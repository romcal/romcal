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

describe('Testing national calendar overrides', function() {

  this.timeout(0);

  describe('A feast defined in a national calendar should replace the same feast defined in the general calendar', function() {
    var year = 2008;
    var generalDates = Calendar.calendarFor(year, true);
    var spainDates = Calendar.calendarFor({ year: year, country: 'spain' }, true);
    it('The feast of Saint Isidore of Seville is celebrated on the 4th of April every year', function() {
      var date = _.find(generalDates, function(d) {
        return d.moment.isSame(moment.utc({ year: year, month: 3, day: 4 }));
      });
      _.eq(date.key, 'saintIsidoreOfSevilleBishopAndDoctorOfTheChurch').should.be.ok();
    });
    it('However, in the national calendar of Spain, this same feast is celebrated on the 26th of April every year', function() {
      var date = _.find(spainDates, function(d) {
        return d.moment.isSame(moment.utc({ year: year, month: 3, day: 26 }));
      });
      _.eq(date.key, 'saintIsidoreOfSevilleBishopAndDoctorOfTheChurch').should.be.ok();
    });
    it('Therefore, national calendar of spain should only have one occurence of this feast on the 26th of April', function() {
      var occurences = _.filter(spainDates, function(d) {
        return _.eq(d.key, 'saintIsidoreOfSevilleBishopAndDoctorOfTheChurch');
      });
      _.size(occurences).should.be.eql(1);
    });
  });

  describe('The feast of Epiphany', function() {
    it('Should always be celebrated on the 6th of January in Slovakia unless explicitly configured otherwise', function() {
      var slovakiaDates = Calendar.calendarFor({
        country: 'slovakia'
      }, true);
      var epiphanySlovakia = _.find(slovakiaDates, function(d) {
        return _.eq(d.key, "epiphany");
      });
      epiphanySlovakia.moment.date().should.be.eql(6);
      epiphanySlovakia.moment.month().should.be.eql(0);
    });
    it("Will fall on a Sunday as calculated by the Epiphnay rubric when epiphanyOnJan6 is explicitly configured as false", function() {
      var slovakiaDates = Calendar.calendarFor({ country: "slovakia", epiphanyOnJan6: false, year: 2018 }, true);
      var epiphanySlovakia = _.find(slovakiaDates, function(d) {
        return _.eq(d.key, "epiphany");
      });
      epiphanySlovakia.moment.day().should.be.eql(0);
      epiphanySlovakia.moment.month().should.be.eql(0);
    });
  })

  describe('Testing the Feast of Saints Cyril and Methodius with locale specific settings', function() {
    it('Should fall on 14th Feb 2017 in the general calendar', function() {
      var dates = Calendar.calendarFor(2017, true);
      var date = _.find(dates, function(d) {
        return _.eq(d.key, 'saintsCyrilMonkAndMethodiusBishop');
      });
      date.moment.isSame(moment.utc({ year: 2017, month: 1, day: 14 })).should.be.ok();
    });
    it('Should fall on 5th July 2017 in the national calendar of the Czech Republic', function() {
      var dates = Calendar.calendarFor({
        country: 'czechRepublic',
        year: 2017
      }, true);
      var date = _.find(dates, function(d) {
        return _.eq(d.key, 'saintsCyrilMonkAndMethodiusBishop');
      });
      date.moment.isSame(moment.utc({ year: 2017, month: 6, day: 5 })).should.be.ok();
    });
    it('Should fall on 5th July 2017 in the national calendar of Slovakia', function() {
      var dates = Calendar.calendarFor({
        country: 'slovakia',
        year: 2017
      }, true);
      var date = _.find(dates, function(d) {
        return _.eq(d.key, 'saintsCyrilMonkAndMethodiusBishop');
      });
      date.moment.isSame(moment.utc({ year: 2017, month: 6, day: 5 })).should.be.ok();
    });
  });

  describe('The feast of the Assumption in England and Wales', function() {
    describe('If the feast of the Assumption falls on Saturday on Monday', function() {
      it('It is transferred to Sunday', function() {

        var wales2009Dates = Calendar.calendarFor({
          year: 2009,
          country: 'wales'
        }, true);

        var england2009Dates = Calendar.calendarFor({
          year: 2009,
          country: 'england'
        }, true );

        var wales2011Dates = Calendar.calendarFor({
          year: 2011,
          country: 'wales'
        }, true);

        var england2011Dates = Calendar.calendarFor({
          year: 2011,
          country: 'england'
        }, true );

        var laterOrdinaryTimeDates2009 = Seasons.laterOrdinaryTime(2009);
        var laterOrdinaryTimeDates2011 = Seasons.laterOrdinaryTime(2011);

        var twentiethSundayOfOrdinaryTime2009 = _.find(laterOrdinaryTimeDates2009, function(d) {
          return _.eq(d.key, '20thSundayOfOrdinaryTime');
        });

        var twentiethSundayOfOrdinaryTime2011 = _.find(laterOrdinaryTimeDates2011, function(d) {
          return _.eq(d.key, '20thSundayOfOrdinaryTime');
        });

        var walesAssumption2009 = _.find(wales2009Dates, function(d) {
          return _.eq(d.key, 'assumption');
        });

        var englandAssumption2009 = _.find(england2009Dates, function(d) {
          return _.eq(d.key, 'assumption');
        });

        var walesAssumption2011 = _.find(wales2011Dates, function(d) {
          return _.eq(d.key, 'assumption');
        });

        var englandAssumption2011 = _.find(england2011Dates, function(d) {
          return _.eq(d.key, 'assumption');
        });

        walesAssumption2009.moment.isSame(twentiethSundayOfOrdinaryTime2009.moment).should.be.ok();
        englandAssumption2009.moment.isSame(twentiethSundayOfOrdinaryTime2009.moment).should.be.ok();
        walesAssumption2011.moment.isSame(twentiethSundayOfOrdinaryTime2011.moment).should.be.ok();
        englandAssumption2011.moment.isSame(twentiethSundayOfOrdinaryTime2011.moment).should.be.ok();

      });
    });

    describe('If the feast of the Assumption falls on Sunday', function() {
      it('It replaces the 20th Sunday of OT', function() {

        var walesDates = Calendar.calendarFor({
          year: 2010,
          country: 'wales'
        }, true);

        var englandDates = Calendar.calendarFor({
          year: 2010,
          country: 'england'
        }, true );

        var laterOrdinaryTimeDates = Seasons.laterOrdinaryTime(2010);
        var twentiethSundayOfOrdinaryTime = _.find(laterOrdinaryTimeDates, function(d) {
          return _.eq(d.key, '20thSundayOfOrdinaryTime');
        });

        var walesAssumption = _.find(walesDates, function(d) {
          return _.eq(d.key, 'assumption');
        });

        var englandAssumption = _.find(englandDates, function(d) {
          return _.eq(d.key, 'assumption');
        });

        walesAssumption.moment.isSame(twentiethSundayOfOrdinaryTime.moment).should.be.ok();
        englandAssumption.moment.isSame(twentiethSundayOfOrdinaryTime.moment).should.be.ok();
      });
    });
  });

  describe('The feast of All Saints in England and Wales', function() {
    it('If All Saints is on Saturday, it will be moved to Sunday (the next day)', function() {
      // In 2008, 1st of November was on a Saturday
      var englandDates = Calendar.calendarFor({
        country: 'england',
        year: 2008
      }, true);
      var walesDates = Calendar.calendarFor({
        country: 'wales',
        year: 2008
      }, true);
      // So All Saints should be on Sunday
      var allSaintsEngland = _.find(englandDates, function(d) {
        return _.eq(d.key, 'allSaints');
      });
      var allSaintsWales = _.find(walesDates, function(d) {
        return _.eq(d.key, 'allSaints');
      });
      allSaintsEngland.moment.day().should.be.eql(0);
      allSaintsWales.moment.day().should.be.eql(0);
    });
  });

  describe('The feast of All Souls in England and Wales', function() {
    it('If All Saints is mpved to Sunday, All Souls must be on Monday (the next day)', function() {
      // In 2008, 1st of November was on a Saturday
      var englandDates = Calendar.calendarFor({
        country: 'england',
        year: 2008
      }, true);
      var walesDates = Calendar.calendarFor({
        country: 'wales',
        year: 2008
      }, true);
      // So All Saints should be on Sunday
      // And All Souls will be on Monday, the next day
      var allSaintsEngland = _.find(englandDates, function(d) {
        return _.eq(d.key, 'allSouls');
      });
      var allSaintsWales = _.find(walesDates, function(d) {
        return _.eq(d.key, 'allSouls');
      });
      allSaintsEngland.moment.day().should.be.eql(1);
      allSaintsWales.moment.day().should.be.eql(1);
    });
  });

  describe('Saint Matthias the Apostle', function() {
    it('Feast day falls on the 14th of May in the general liturgical calendar', function() {
      var dates = Calendar.calendarFor(2018, true);
      var saintMatthias = _.find(dates, function(d) {
        return _.eq(d.key, 'saintMatthiasTheApostle');
      });
      saintMatthias.moment.isSame(moment.utc({ year: 2018, month: 4, day: 14 })).should.be.ok();
    });
    it('Feast day falls on the 24th of February in the national calendar of Germany and Hungary', function() {
      var germanyDates = Calendar.calendarFor({
        year: 2018,
        country: 'germany'
      }, true);
      var hungaryDates = Calendar.calendarFor({
        year: 2018,
        country: 'hungary'
      }, true);
      var saintMatthiasGermany = _.find(germanyDates, function(d) {
        return _.eq(d.key, 'saintMatthiasTheApostle');
      });
      var saintMatthiasHungary = _.find(germanyDates, function(d) {
        return _.eq(d.key, 'saintMatthiasTheApostle');
      });
      saintMatthiasGermany.moment.isSame(moment.utc({ year: 2018, month: 1, day: 24 })).should.be.ok();
      saintMatthiasHungary.moment.isSame(moment.utc({ year: 2018, month: 1, day: 24 })).should.be.ok();
    });
    it('Is a memorial in the German liturgical calendar on A.D 2014', function() {
      var germanyDates = Calendar.calendarFor({
        year: 2014,
        country: 'germany'
      });
      var saintMatthiasGermany = _.find(germanyDates, function(d) {
        return _.eq(d.key, 'saintMatthiasTheApostle');
      });
      saintMatthiasGermany.type.should.be.eql(Types.MEMORIAL);
    });
  });

  describe('Saint Christopher Magallanes and Companions, Martyrs', function() {
    it('A memorial in Mexico but an optional memorial in the general calendar', function() {
      var mexicoDates = Calendar.calendarFor({
        year: 2019,
        country: 'mexico'
      }, true);
      var dates = Calendar.calendarFor(2019, true);
      var saintChristopherMagallanesAndCompanionsMartyrs = _.find(dates, function(d) {
        return _.eq(d.key, 'saintChristopherMagallanesAndCompanionsMartyrs');
      });
      var saintChristopherMagallanesAndCompanionsMartyrsMexico = _.find(mexicoDates, function(d) {
        return _.eq(d.key, 'saintChristopherMagallanesAndCompanionsMartyrs');
      });
      saintChristopherMagallanesAndCompanionsMartyrs.type.should.be.eql(Types.OPT_MEMORIAL);
      saintChristopherMagallanesAndCompanionsMartyrsMexico.type.should.be.eql(Types.MEMORIAL);
    });
  });

  describe('Saint Ladislaus', function() {
    it('A feast in Hungary but an optional memorial in Slovakia', function() {
      var hungaryDates = Calendar.calendarFor({
        year: 2018,
        country: 'hungary'
      });
      var slovakiaDates = Calendar.calendarFor({
        year: 2018,
        country: 'slovakia'
      });
      var saintLadislausHungary = _.find(hungaryDates, function(d) {
        return _.eq(d.key, 'saintLadislaus');
      });
      var saintLadislausSlovakia = _.find(slovakiaDates, function(d) {
        return _.eq(d.key, 'saintLadislaus');
      });
      saintLadislausHungary.type.should.be.eql(Types.FEAST);
      saintLadislausSlovakia.type.should.be.eql(Types.OPT_MEMORIAL);
    });
  });

  describe('Our Lady of Sorrows', function() {

    it('Should be celebrated on the 15th of September 2018 as a memorial in the General Calendar', function() {
      var dates = Calendar.calendarFor(2018, true);
      var ourLadyOfSorrows = _.find(dates, function(d) {
        return _.eq(d.key, 'ourLadyOfSorrows');
      });
      ourLadyOfSorrows.type.should.be.eql(Types.MEMORIAL);
      ourLadyOfSorrows.moment.isSame(moment.utc({ year: 2018, month: 8, day: 15 })).should.be.ok();
    });

    it('Should be celebrated on the 15th of April 2015 as a feast in the national calendar of Malta', function() {
      var maltaDates = Calendar.calendarFor({
        year: 2015,
        country: 'malta'
      }, true );
      var ourLadyOfSorrows = _.find(maltaDates, function(d) {
        return _.eq(d.key, 'ourLadyOfSorrows');
      });
      ourLadyOfSorrows.type.should.be.eql(Types.FEAST);
      ourLadyOfSorrows.moment.isSame(moment.utc({ year: 2015, month: 3, day: 15 })).should.be.ok();
    });

    it('Should be replaced by the 3rd Sunday of Easter in 2018 in the national calendar of Malta due to rank', function() {
      var maltaDates = Calendar.calendarFor({
        year: 2018,
        country: 'malta'
      }, true);
      var ourLadyOfSorrows = moment.utc({ year: 2018, month: 3, day: 15 });
      var thirdSundayOfEaster = _.find(maltaDates, function(d) {
        return _.eq(d.key, '3rdSundayOfEaster');
      });
      ourLadyOfSorrows.isSame(thirdSundayOfEaster.moment).should.be.ok();
    });

    it('Should be celebrated on the 15th of April 2018 as a solemnity in the national calendar of Slovakia', function() {
      var slovakiaDates = Calendar.calendarFor({
        year: 2018,
        country: 'slovakia'
      }, true );
      var ourLadyOfSorrows = _.find(slovakiaDates, function(d) {
        return _.eq(d.key, 'ourLadyOfSorrows');
      });
      ourLadyOfSorrows.type.should.be.eql(Types.SOLEMNITY);
      ourLadyOfSorrows.moment.isSame(moment.utc({ year: 2018, month: 8, day: 15 })).should.be.ok();
    });

  });

});
