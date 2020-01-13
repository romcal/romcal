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

var _ = require("lodash");
var moment = require("moment");
var range = require("moment-range");
var should = require("should");

var Romcal = require("../index");
var LiturgicalColors = Romcal.LiturgicalColors;
var LiturgicalSeasons = Romcal.LiturgicalSeasons;
var Dates = Romcal.Dates;
var Seasons = Romcal.Seasons;
var Titles = Romcal.Titles;
var Types = Romcal.Types;
var PsalterWeeks = Romcal.PsalterWeeks;
var Calendar = Romcal.Calendar;

describe("Testing specific feasts and memorials", function() {

  this.timeout(0);

  describe("The memorial of the Blessed Virgin Mary, Mother of the Church", function() {
    it('Should be celebrated on the Monday after Pentecost', function() {
      let dates = Calendar.calendarFor(true);
      let pentecostSunday = Dates.pentecostSunday(moment.utc().year());
      let maryMotherOfTheChurch = _.find(dates, function(d) {
        return _.eq(d.key, "maryMotherOfTheChurch");
      });
      maryMotherOfTheChurch.moment.day().should.be.eql(1);
      maryMotherOfTheChurch.moment.subtract(1, 'days').should.be.eql(pentecostSunday);
    });

    it('Should take precedence in the event of coincidence with another memorial of a saint or blessed', function() {
      // In 2020, monday after Pentecost is June 1
      var juneDates = Calendar.calendarFor({
        year: 2020,
        query: {
          month: 5
        }
      }, true);
      // according to the general calendar, June 1 is the memorial of saint Justin, Martyr
      var maybeSaintJustinMartyr = juneDates[0];
      maybeSaintJustinMartyr.key.should.be.eql('maryMotherOfTheChurch');
    });
  });

  describe('The celebration of Saint Mary Magdalene', function() {
    it('Should be ranked as a feast and should be celebrated on the 22nd of July', function() {
      let dates = Calendar.calendarFor(2017, true);
      let saintMaryMagdalene = _.find(dates, function(d) {
        return _.eq(d.key, "saintMaryMagdalene");
      });
      saintMaryMagdalene.moment.date().should.be.eql(22);
      saintMaryMagdalene.moment.month().should.be.eql(6);
      saintMaryMagdalene.type.should.be.eql(Types.FEAST);
    });
  });

  describe('The celebrations of Pope Saint John XXIII and Pope Saint John Paul II', function() {
    it('Should be celebrated as optional memorials', function() {
      let dates = Calendar.calendarFor(2016, true);
      let popeSaintJohnXXIII = _.find(dates, function(d) {
        return _.eq(d.key, "popeSaintJohnXXIII");
      });
      let popeSaintJohnPaulII = _.find(dates, function(d) {
        return _.eq(d.key, "popeSaintJohnPaulII");
      });
      popeSaintJohnXXIII.type.should.be.eql(Types.OPT_MEMORIAL);
      popeSaintJohnPaulII.type.should.be.eql(Types.OPT_MEMORIAL);
    });
  });

  describe('The Feast of the Exultation of the Cross', function() {
    it('Is celebrated on the 14th of September', function() {
      let dates = Calendar.calendarFor(2018, true);
      let theExaltationOfTheHolyCross = _.find(dates, function(d) {
        return _.eq(d.key, "theExaltationOfTheHolyCross");
      });
      theExaltationOfTheHolyCross.moment.date().should.be.eql(14);
      theExaltationOfTheHolyCross.moment.month().should.be.eql(8);
    });
  });

});
