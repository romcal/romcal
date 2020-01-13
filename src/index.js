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
import Moment from 'moment';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);

import {
  Calendar,
  Celebrations,
  Dates,
  Seasons,
  Utils
} from './lib';

import {
  Cycles,
  LiturgicalColors,
  PsalterWeeks,
  LiturgicalSeasons,
  Titles,
  Types
} from './constants';

import * as Locales from './locales';
const Localizations = _.keys(_.mapKeys(Locales, (v, k) => _.kebabCase(k)));

import * as Calendars from './calendars';
const Countries = _.keys(Calendars);

// Export an array of countries for external use
// Export an array of locales for external use
export {
  Countries,
  Locales,
  Localizations
};

// Export all lib functions
export {
  Calendar,
  Celebrations,
  Dates,
  Seasons,
  Utils
};

// Export all constants
export {
  Cycles,
  LiturgicalColors,
  PsalterWeeks,
  LiturgicalSeasons,
  Titles,
  Types
};

const { calendarFor, queryFor } = Calendar;

calendarFor();

export {
  calendarFor,
  queryFor
};

// Default entry point is exported as Romcal
export default Calendar;
