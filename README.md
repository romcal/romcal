[![Build Status](https://travis-ci.org/pejulian/romcal.svg?branch=master)](https://travis-ci.org/pejulian/romcal) [![MIT License][license-image]][license-url] [![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-url]

# Romcal
Generates the General Roman Calendar used in the Catholic Rite.

## Description
Romcal is a module that generates the [General Roman Calendar](http://en.wikipedia.org/wiki/General_Roman_Calendar) used in the Roman Catholic Rite. This module conforms to the revised liturgical calendar for the Western Church as approved by Paul VI in [Mysterii Paschalis](http://www.romcal.net/mysterii.html) dated 14 February 1969. This module will output dates based on the standard calendar year (Jan, 1st - Dec, 31st) even though the liturgical year begins with the First Sunday of Advent.

## Features
 * Able to query liturgical dates for any year in the gregorian calendar (1582 - now). Note that dates for years before 1969 will still be returned in a format conforming to [Mysterii Paschalis](http://www.romcal.net/mysterii.html) even though those years came before the calendar reforms in 1969.
 * Filter queries to allow more strealined date results to be obtained for the year
 * Localization of liturgical date names to cater for different countries/languages 

NOTE:This module relies heavily on [Moment](http://momentjs.com/) and [Lo-Dash](http://lodash.com/) (which are dependencies of this module) for most of its calculations and operations. [Twix](http://isaaccambron.com/twix.js/index.html) is also extensively used for creating and manipulating date ranges.

## Revisions
* 1.0.2 *Fix incorrect moment dependency version and added holyWeek query*
* 1.0.1 *Added more TDD tests*
* 1.0.0 *Initial release*

## Usage

Add romcal to your project via npm:

```
$ npm install romcal
```

Then require romcal in your node project:

```
var romcal = require('romcal');
```

Get an array of liturgical dates for a year by calling the `calendarFor()` method.
The method accepts 3 parameters:
 1. `year` *optional* The Gregorian year as a string. Defaults to current year if null
 2. `locale` *optional* The locale (e.g. en-US, en-GB, fr-FR). Defaults to en-US if null
 3. `cb` *mandatory* The callback function where the computed liturgical dates will be returned
 At the moment, romcal only supports en-US.

```
romcal.calendarFor( function( dates ) {
    console.log( dates );
});

romcal.calendarFor('2014', function( dates ) {
    console.log( dates );
});

romcal.calendarFor('2014', 'en-US', function( dates ) {
    console.log( dates );
});
```

Each item in the array returned is an object literal that contains:
 1. A [moment](http://momentjs.com/) object definition for the liturgical date (all dates returned in UTC)
 2. The type of liturgical date (e.g. Solemnity, Memorial, Sunday, Weekday .. ) 
 3. The name of the liturgical date (localizable)
 4. Additional data pertaining to the liturgical date (e.g. liturgical season )


## Query API
romcal also provides additional queries that can be used to streamline the original date output via the `queryFor()` method.

```
romcal.queryFor('mondays', dates, function( err, query ) {
    console.log( query );
});
```
The method accepts 2 parameters:
 1. `query` *mandatory* The query type to perform (see below)
 2. `dates` *mandatory* An array of dates returned by `calendarFor()`
 3. `callback` *mandatory* The callback function with 2 parameters:
    * `err` *guaranteed* a JSON object describing the error (if any). null if there are no errors
    * `query` *guaranteed* the filtered liturgical dates will be returned

### Queries for date ranges
 * `ordinaryTime` 
    * Returns an array of dates in the season of Ordinary Time (Day after Baptism of the Lord till day before Ash Wednesday & dat after Pentecost to Christ the King)
 * `lent` 
    * Returns an array of dates corresponding to the season of Lent (Ash Wednesday up to the day beforee Palm Sunday)
 * `holyWeek`
    * Returns an array of dates from Palm Sunday to Easter Vigil
 * `easter` 
    * Returns an array of dates corresponding to the season of Easter (Easter Sunday up to Pentecost)
 * `advent` 
    * Returns an array of dates in the season of Advent ( 1st Sunday of Advent to Christmas Eve)
 * `christmastide` 
    * Returns an array of dates from Christmas day to Epiphany

### Queries for specific liturgical date types
 * `feastsOfTheLord`
    * An array of dates for Baptism of the Lord, Presentation of the Lord, Transfiguration, Triumph of the Cross and Holy Family
 * `memorials`
    * An array of memorials throughout the liturgical year conforming to the General Roman Calendar. It does not include memorials from National, Diocesan or Parish level calendars.
 * `optionalMemorials`
    * An array of optional memorials throughout the liturgical year conforming to the General Roman Calendar. It does not include memorials from National, Diocesan or Parish level calendars.
 * `commemoration`
    * An array of downgraded memorials/optional memorials that occur only during the season of Lent
 * `solemnities`
    * Returns an array of the highest ranking feast days throughout the liturgical year

### Other queries to return days or months
 * `sundays`
 * `mondays`
 * `tuesdays`
 * `wednesdays`
 * `thursdays`
 * `fridays`
 * `saturdays`
 * `daysGrouped`
    * Returns all dates in the year grouped by day
 * `january`
 * `february`
 * `march`
 * `april`
 * `may`
 * `june`
 * `july`
 * `august`
 * `september`
 * `october`
 * `november`
 * `december`

## National Calendars [WIP]
Romcal is able to display the national calendars (specific liturgical dates of a country) for [40 countries](http://en.wikipedia.org/wiki/General_Roman_Calendar#National_calendars). 


* `argentina`
* `australia`


## Localization
 * Display names for liturgical dates in romcal are localizable. 
 * romcal can potentially support an unlimited number of language-locales via 'core/localization.js' which is used to localize liturgical date names.
 * As of this release, romcal only contains localizable values for en-US. 

## Roadmap
 * Better testing scripts (I am still quite new to Mocha, Chai etc)
 * Readings for the day
 * Psalter weeks
 * More localization values
 * More queries
 * National calendars (this is a big one!)

*If you have any suggestions for improvement, feel free to contribute to this exciting project!*

## Acknowledgements
The development of romcal is inspired by the work of Kenneth G, Bath who wrote a [General Roman Calendar](http://www.romcal.net) in the C language. This module *is not* a port of the C program and *does not use* any of the C code in that program. This module is written from scratch with the aim of provide similar output as the original C program while providing additional queries for convenient filtering/streamlining of date results.

## License
romcal is freely distributable under the terms of the [MIT license](LICENSE).

[npm-url]: https://www.npmjs.org/package/romcal
[npm-version-image]: http://img.shields.io/npm/v/romcal.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/romcal.svg?style=flat

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: http://opensource.org/licenses/MIT




