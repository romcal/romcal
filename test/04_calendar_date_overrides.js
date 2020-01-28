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
var CalendarsDef = require('../src/calendars');

describe('Testing national calendar overrides', function() {

  this.timeout(0);

  describe('An optional celebration is available to be celebrated, in addition to the feria', function() {
    var generalDates2020 = Calendar.calendarFor(2020);
    var generalDates2021 = Calendar.calendarFor(2021);
    var spainDates2020 = Calendar.calendarFor({ year: 2020, country: 'spain' });
    it('The optional memory of the Most Holy Name of Jesus is available on the 3th of January, in addition to the feria', function() {
      var dates = _.filter(generalDates2020, function(d) {
        return d.moment.isSame(moment.utc({ year: 2020, month: 0, day: 3 }));
      });
      _.size(dates).should.be.eql(2);
    });
    it('However, if the 3th of January is a Sunday, the Solemnity of Epiphany takes the precedence.', function() {
      var dates = _.filter(generalDates2021, function(d) {
        return d.moment.isSame(moment.utc({ year: 2021, month: 0, day: 3 }));
      });
      _.size(dates).should.be.eql(1);
      _.head(dates).key.should.be.eql('epiphany');
    });
    it('The optional memory of Saint Fructuosus is celebrated on the January 20 in Spain, in addition of Saint Fabian from the general calendar', function() {
      var dates = _.filter(spainDates2020, function(d) {
        return d.moment.isSame(moment.utc({ year: 2020, month: 0, day: 20 }));
      });
      _.size(dates).should.be.eql(3);
    });
    it('When optional celebrations are available, the feria is the first celebration available', function() {
      var dates = _.filter(spainDates2020, function(d) {
        return d.moment.isSame(moment.utc({ year: 2020, month: 0, day: 20 }));
      });
      _.head(dates).type.should.be.eql(Types.FERIA);
    });
  });

  describe('A feast defined in a national calendar should replace the same feast defined in the general calendar', function() {
    var year = 2008;
    var generalDates = Calendar.calendarFor(year);
    var spainDates = Calendar.calendarFor({ year: year, country: 'spain' });
    it('The feast of Saint Isidore of Seville is celebrated on April 4 every year', function() {
      var date = _.filter(generalDates, function(d) {
        return d.moment.isSame(moment.utc({ year: year, month: 3, day: 4 })) && d.key === 'saintIsidoreOfSevilleBishopAndDoctorOfTheChurch';
      });
      _.size(date).should.be.eql(1);
    });
    it('However, in the national calendar of Spain, this same feast is celebrated on the 26th of April every year', function() {
      var date = _.filter(spainDates, function(d) {
        return d.moment.isSame(moment.utc({ year: year, month: 3, day: 26 })) && d.key === 'saintIsidoreOfSevilleBishopAndDoctorOfTheChurch';
      });
      _.size(date).should.be.eql(1);
    });
    it('Therefore, national calendar of spain should only have one occurrence of this feast on the 26th of April', function() {
      var occurrences = _.filter(spainDates, function(d) {
        return _.eq(d.key, 'saintIsidoreOfSevilleBishopAndDoctorOfTheChurch');
      });
      _.size(occurrences).should.be.eql(1);
    });
  });

  describe('Testing the priority option for celebrations', function() {
    CalendarsDef.test = {};
    CalendarsDef.test.dates = (year) => {
      return [
        {
          "key": "maryMotherOfTheChurch",
          "type": Types.OPT_MEMORIAL,
          "moment": ( y => Dates.pentecostSunday( y ).add( 1, 'days'))( year ),
          "data": {
            "prioritized": true
          }
        },
        {
          "key": "ashWednesday",
          "type": Types.SUNDAY,
          "moment": Dates.ashWednesday(year)
        },
        {
          "key": "saintLukeTheEvangelist",
          "type": Types.COMMEMORATION,
          "moment": moment.utc({year: year, month: 9, day: 18}),
          "data": {
            "prioritized": true
          },
        },
        {
          "key": "aSampleCelebration1",
          "type": Types.MEMORIAL,
          "moment": moment.utc({year: year, month: 10, day: 9}),
          "data": {
            "prioritized": true
          }
        },
        {
          "key": "aSampleCelebration2",
          "type": Types.SOLEMNITY,
          "moment": moment.utc({ year: year, month: 11, day: 25 }),
          "data": {
            "prioritized": true
          }
        }
      ];
    };

    var year = 2020;
    var testDates = Calendar.calendarFor({
      country: 'test',
      year: year
    });

    it('A celebration with a higher type rank and the same key cannot replace an existing prioritized celebration', function() {
      var dates = _.filter(testDates, function(d) {
        return _.eq(d.key, 'ashWednesday');
      });
      _.size(dates).should.be.eql(1);
      _.head(dates).type.should.be.eql(Types.FERIA);
    });
    it('A new prioritized celebration will replace any existing non-prioritized celebrations', function() {
      var dates = _.filter(testDates, function(d) {
        return _.eq(d.key, 'saintLukeTheEvangelist');
      });
      _.size(dates).should.be.eql(1);
      _.head(dates).type.should.be.eql(Types.COMMEMORATION);
    });
    it('An existing and prioritized celebration can be replaced by a new prioritized celebration having the same key (whatever its type rank)', function() {
      var dates = _.filter(testDates, function(d) {
        return d.moment.isSame(Dates.pentecostSunday(year).add( 1, 'days'));
      });
      _.size(dates).should.be.eql(1);
      _.head(dates).key.should.be.eql('maryMotherOfTheChurch');
      _.head(dates).type.should.be.eql(Types.OPT_MEMORIAL);
    });
    it('If multiple prioritized celebrations falls the same day, the one with the highest type rank will be used', function() {
      var dates = _.filter(testDates, function(d) {
        return d.moment.isSame(moment.utc({ year: 2020, month: 10, day: 9 }));
      });
      _.size(dates).should.be.eql(1);
      _.head(dates).key.should.be.eql('dedicationOfTheLateranBasilica');
      _.head(dates).type.should.be.eql(Types.FEAST);
    });
    it('If multiple prioritized celebrations with the same rank fall on the same day, the last defined celebration will be used', function() {
      var dates = _.filter(testDates, function(d) {
        return d.moment.isSame(moment.utc({ year: 2020, month: 11, day: 25 }));
      });
      _.size(dates).should.be.eql(1);
      _.head(dates).key.should.be.eql('aSampleCelebration2');
      _.head(dates).type.should.be.eql(Types.SOLEMNITY);
    });
  });

  describe('The feast of Epiphany', function() {
    it('Should always be celebrated on January 6 in Slovakia unless explicitly configured otherwise', function() {
      var slovakiaDates = Calendar.calendarFor({
        country: 'slovakia'
      });
      var epiphanySlovakia = _.find(slovakiaDates, function(d) {
        return _.eq(d.key, "epiphany");
      });
      epiphanySlovakia.moment.date().should.be.eql(6);
      epiphanySlovakia.moment.month().should.be.eql(0);
    });
    it("Will fall on Sunday as calculated by the Epiphany rubric, when `epiphanyOnJan6` is explicitly configured as `false`", function() {
      var slovakiaDates = Calendar.calendarFor({ country: "slovakia", epiphanyOnJan6: false, year: 2018 });
      var epiphanySlovakia = _.find(slovakiaDates, function(d) {
        return _.eq(d.key, "epiphany");
      });
      epiphanySlovakia.moment.day().should.be.eql(0);
      epiphanySlovakia.moment.month().should.be.eql(0);
    });
  })

  describe('Testing the Feast of Saints Cyril and Methodius with locale specific settings', function() {
    it('Should fall on February 14, 2017 in the general calendar', function() {
      var dates = Calendar.calendarFor(2017);
      var date = _.find(dates, function(d) {
        return _.eq(d.key, 'saintsCyrilMonkAndMethodiusBishop');
      });
      date.moment.isSame(moment.utc({ year: 2017, month: 1, day: 14 })).should.be.ok();
    });
    it('Should fall on 5th July 2017 in the national calendar of the Czech Republic', function() {
      var dates = Calendar.calendarFor({
        country: 'czechRepublic',
        year: 2017
      });
      var date = _.find(dates, function(d) {
        return _.eq(d.key, 'saintsCyrilMonkAndMethodiusBishop');
      });
      date.moment.isSame(moment.utc({ year: 2017, month: 6, day: 5 })).should.be.ok();
    });
    it('Should fall on 5th July 2017 in the national calendar of Slovakia', function() {
      var dates = Calendar.calendarFor({
        country: 'slovakia',
        year: 2017
      });
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
        });

        var england2009Dates = Calendar.calendarFor({
          year: 2009,
          country: 'england'
        });

        var wales2011Dates = Calendar.calendarFor({
          year: 2011,
          country: 'wales'
        });

        var england2011Dates = Calendar.calendarFor({
          year: 2011,
          country: 'england'
        });

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
        });

        var englandDates = Calendar.calendarFor({
          year: 2010,
          country: 'england'
        });

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
      });
      var walesDates = Calendar.calendarFor({
        country: 'wales',
        year: 2008
      });
      // So All Saints should be celebrated on Sunday
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
      });
      var walesDates = Calendar.calendarFor({
        country: 'wales',
        year: 2008
      });
      // So All Saints should be celebrated on Sunday
      // and All Souls will be celebrated on Monday
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
    it('Feast day falls on the May 14 in the general liturgical calendar', function() {
      var dates = Calendar.calendarFor(2018);
      var saintMatthias = _.find(dates, function(d) {
        return _.eq(d.key, 'saintMatthiasTheApostle');
      });
      saintMatthias.moment.isSame(moment.utc({ year: 2018, month: 4, day: 14 })).should.be.ok();
    });
    it('Feast day falls on the 24th of February in the national calendar of Germany and Hungary', function() {
      var germanyDates = Calendar.calendarFor({
        year: 2018,
        country: 'germany'
      });
      var hungaryDates = Calendar.calendarFor({
        year: 2018,
        country: 'hungary'
      });
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
      });
      var dates = Calendar.calendarFor(2019);
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

    it('Should be celebrated on the September 15 2018 as a memorial in the General Calendar', function() {
      var dates = Calendar.calendarFor(2018);
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
      });
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
      });
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
      });
      var ourLadyOfSorrows = _.find(slovakiaDates, function(d) {
        return _.eq(d.key, 'ourLadyOfSorrows');
      });
      ourLadyOfSorrows.type.should.be.eql(Types.SOLEMNITY);
      ourLadyOfSorrows.moment.isSame(moment.utc({ year: 2018, month: 8, day: 15 })).should.be.ok();
    });

  });

});
