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

import _ from 'lodash';
import should from 'should';
import moment from 'moment';
import range from 'moment-range';

import { calendarFor } from '../src';

// console.log(
//  _.padEnd( 'Date', 16 ),
//       '|', _.padEnd( 'Color', 7 ),
//       '|', _.padEnd( 'Psalter', 10 ),
//       '|', _.padEnd( 'Cycle', 8 ),
//       '|', _.padEnd( 'Type', 15 ),
//       '|', _.padEnd( 'Source', 6 ),
//       '|', _.padEnd( 'Season', 25 ),
//       '|', 'Name'
// );
// _.each(
//   calendarFor({ year: 2017, locale: 'en'}, true),
//   v => {
//     console.log(
//       _.padEnd( v.moment.format('ddd, DD MMM YY'), 16 ),
//       '|', _.padEnd( v.data.meta.liturgicalColor.key, 7 ),
//       '|', _.padEnd( v.data.meta.psalterWeek.value, 10 ),
//       '|', _.padEnd( v.data.meta.cycle.value, 8 ),
//       '|', _.padEnd( v.type, 15 ),
//       '|', _.padEnd( v.source, 6 ),
//       '|', _.padEnd( v.data.season.value, 25 ),
//       '|', v.name
//     );
//   }
// );