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

var moment = require('moment'),
    _ = require('lodash'),
    Romcal = require('./lib/calendar');

// UNCOMMENT ONLY WHEN UPDATING PLUGIN
//=======================================================

// _.each( 
//   Romcal.calendarFor({
//     year: 2015,
//     epiphanyOnJan6: false,
//     christmastideEnds: 'o'
//   }, true ), 
//   function( v ) {
//     console.log( 
//       _.padRight( v.moment.format('ddd, DD MMM YY'), 16 ), 
//       '|', _.padRight( v.data.meta.liturgicalColor.key, 6 ),
//       '|', _.padRight( v.data.season.value, 15 ),
//       '|', _.padRight( v.data.meta.psalterWeek.value, 8 ),
//       '|', _.padRight( v.data.meta.cycle.value, 6 ),
//       '|', _.padRight( v.type, 13 ),
//       '|', _.padRight( v.source, 1 ),
//       '|', v.name
//     );
//   }
// );

// for( var i = 1950, il = 2101; i < il; i++ ) {
//   Romcal.calendarFor({
//     year: i,
//     epiphanyOnJan6: false,
//     christmastideEnds: 'o',
//     corpusChristiOnThursday: false,
//     ascensionOnSunday: false
//   });
// }

// for( var i = 1950, il = 2101; i < il; i++ ) {
//   Romcal.calendarFor({
//     year: i,
//     epiphanyOnJan6: true,
//     christmastideEnds: 't',
//     corpusChristiOnThursday: true,
//     ascensionOnSunday: true
//   });
// }

// for( var i = 1950, il = 2101; i < il; i++ ) {
//   Romcal.calendarFor({
//     year: i,
//     epiphanyOnJan6: true,
//     christmastideEnds: 'e',
//     corpusChristiOnThursday: true,
//     ascensionOnSunday: true
//   });
// }

module.exports = Romcal;
