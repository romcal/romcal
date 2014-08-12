# Romcal
A Node implementation of the [General Roman Calendar](http://en.wikipedia.org/wiki/General_Roman_Calendar) used in the Roman Catholic Rite. This module conforms to the revised liturgical calendar for the Western Church as approved by Paul VI in [Mysterii Paschalis](http://www.romcal.net/mysterii.html) dated 14 February 1969. This module will output dates based on the standard calendar year (Jan, 1st - Dec, 31st) even though the liturgical year begins with the First Sunday of Advent.

## Features
 * Able to query liturgical dates for any year in the gregorian calendar (1582 - now). Note that dates for years before 1969 will still be returned in a format conforming to [Mysterii Paschalis](http://www.romcal.net/mysterii.html) even though those years came before the calendar reforms in 1969.
 * Filter queries to allow more strealined date results to be obtained for the year
 * Localization of liturgical date names to cater for different countries/languages

NOTE:This module relies heavily on [Moment](http://momentjs.com/) and [Lo-Dash](http://lodash.com/) (which are dependencies of this module) for most of its calculations and operations.

## Usage

Add romcal to your project via npm:

```
npm install -g romcal
```

Then require romcal in your node project:

```
var romcal = require('romcal');
```

Get an array of liturgical dates for a year by calling the `calendarFor()` method.
The method accepts 2 parameters:
 1. `year` *mandatory* The Gregorian year as a string
 2. `locale` *optional* The locale (e.g. en-US, en-GB, fr-FR)
 At the moment, romcal only supports en-US.

```
var dates = romcal.calendarFor('2014');
```

Each item in the array returned is an object literal that contains:
 1. A [moment](http://momentjs.com/) object definition for the liturgical date (all dates returned in UTC)
 2. The type of liturgical date (e.g. Solemnity, Memorial, Sunday, Weekday .. ) 
 3. The name of the liturgical date (localizable)
 4. Additional data pertaining to the liturgical date (e.g. liturgical season )


## Query API
romcal also provides additional queries that can be used to streamline the original date output via the `queryFor()` method.

```
var dates = romcal.queryFor('mondays', dates );
```
The method accepts 2 parameters:
 1. `query` *mandatory* The query type to perform (see below)
 2. `dates` *mandatory* An array of dates returned by `calendarFor()`

### Queries for date ranges
 * `ordinaryTime` 
    * Returns an array of dates in the season of Ordinary Time (Day after Baptism of the Lord till day before Ash Wednesday & dat after Pentecost to Christ the King)
 * `lent` 
    * Returns an array of dates corresponding to the season of Lent (Ash Wednesday up to the day beforee Palm Sunday)
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

### Other queries for to return days or months
 * `sundays`
 * `mondays`
 * `tuesdays`
 * `wednesdays`
 * `thursdays`
 * `fridays`
 * `saturdays`
 * `daysGrouped`
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


## Localization
 * Display names for liturgical dates in romcal are localizable. 
 * romcal can potentially support an unlimited number of language-locales via 'core/localization.js' which is used to localize liturgical date names.
 * As of this release, romcal only contains localizable values for en-US. 

# Roadmap
 * Readings for the day
 * Psalter weeks
 * More localization values
 * National calendars (this is a big one!)

## License
romcal is freely distributable under the terms of the [MIT license](LICENSE).

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE




