## Romcal
A Node implementation of the [General Roman Calendar](http://en.wikipedia.org/wiki/General_Roman_Calendar) used in the Roman Catholic Rite. This module conforms to the revised liturgical calendar for the Western Church as approved by Paul VI in [Mysterii Paschalis](http://www.romcal.net/mysterii.html) dated 14 February 1969. This module will output dates based on the standard calendar year (Jan, 1st - Dec, 31st) even though the liturgical year begins with the First Sunday of Advent.

## Features
 * Able to query liturgical dates for any year in the gregorian calendar (1582 - now). Note that dates for years before 1969 will still be returned in a format conforming to [Mysterii Paschalis](http://www.romcal.net/mysterii.html) even though those years came before the calendar reforms in 1969.
 * Returns an array of object literals representing a liturgical dates.
 * 

NOTE:This module relies heavily on [Moment](http://momentjs.com/) and [Lo-Dash](http://lodash.com/) (which are dependencies of this module) for most of its calculations and operations.

## Usage

Add romcal to your project via npm:

'''

npm install -g romcal

'''

Then require romcal in your node project:

'''

var romcal = require('romcal');

'''

Get an array of liturgical dates for a year by calling the 'calendarFor()' method.
The method accepts 2 parameters:
 1. 'year': (mandatory) The Gregorian year as a string
 2. 'locale': (optional) The locale (e.g. en-US, en-GB, fr-FR)
 At the moment, romcal only supports en-US.

'''

var dates = romcal.calendarFor('2014');

'''
Each item in the array returned is an object literal that contains:
 1. A [moment](http://momentjs.com/) object definition for the liturgical date
 2. The type of liturgical date (e.g. Solemnity, Memorial, Sunday, Weekday .. ) 
 3. The name of the liturgical date (localizable)
 4. Additional data pertaining to the liturgical date (e.g. liturgical season )


## Query API
romcal also provides additional queries that can be used to streamline the original date output.

## Localization
 * Display names for liturgical dates in romcal are localizable. 
 * romcal can potentially support an unlimited number of language-locales via 'core/localization.js' which is used to localize liturgical date names.
 * As of this release, romcal only contains localizable values for en-US. 

## License
romcal is freely distributable under the terms of the [MIT license](LICENSE).

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE




