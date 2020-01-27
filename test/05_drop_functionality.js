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
var Calendar = Romcal.Calendar;
var CalendarsDef = require('../src/calendars');

describe('Testing "drop" functionality for national calendars', function() {

  this.timeout(0);

  CalendarsDef.test = {};
  CalendarsDef.test.dates = () => {
    return [
      {
        "key": "christmas",
        'drop': true
      }
    ];
  };

  var testDates = Calendar.calendarFor({
    country: 'test',
    year: 2020
  });

  it('A dropped celebration should not be appended in the final calendar', function() {
    var date = _.find(testDates, function(d) {
      return d.moment.isSame(moment.utc({ year: 2020, month: 11, day: 25 }));
    });
    date.key.should.not.be.eql('christmas');
  });

});
