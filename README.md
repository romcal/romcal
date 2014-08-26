[![Build Status](https://travis-ci.org/pejulian/romcal.svg?branch=master)](https://travis-ci.org/pejulian/romcal) [![MIT License][license-image]][license-url] [![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-url]

# Romcal
Generates the General Roman Calendar used in the Catholic Rite.

## Description
Romcal is a module that generates the [General Roman Calendar](http://en.wikipedia.org/wiki/General_Roman_Calendar) used in the Roman Catholic Rite. This module conforms to the revised liturgical calendar for the Western Church as approved by Paul VI in [Mysterii Paschalis](http://www.romcal.net/mysterii.html) dated 14 February 1969. This module will output dates based on the standard calendar year (Jan, 1st - Dec, 31st) even though the liturgical year begins with the First Sunday of Advent.

## Features
 * Able to query liturgical dates for any year in the gregorian calendar (1582 - now). Note that dates for years before 1969 will still be returned in a format conforming to [Mysterii Paschalis](http://www.romcal.net/mysterii.html) even though those years came before the calendar reforms in 1969.
 * 36 filter queries to allow more strealined date results to be obtained for the year
 * Localization of liturgical date names to cater for different countries/languages
 * National liturgical calendars of 41 countries 

NOTE:This module relies heavily on [Moment](http://momentjs.com/) and [Lo-Dash](http://lodash.com/) for most of its calculations and operations. [Twix](http://isaaccambron.com/twix.js/index.html) is also extensively used for creating and manipulating date ranges.

## Module Robustness & Data Integrity
*Calendar entries for this module are pulled from various sources from the net. As such their accuracy cannot be ensured. If you find an incorrect calendar entry (e.g. wrong date, wrong feast type, spelling issue, typos), you are most welcome to contribute to the source code or inform me so that the necessary changes can be made to make this a more robust and reliable app*

*Romcal's code logic is developed according to calendar requirements descibed in various church documents sourced from the internet (and even from Wikipedia). If you notice discrepancies between romcal's output and actual dates, please do contribute your fixes or submit an issue on GitHub.*

## Revisions
* 1.1.3 *Parse query results as JSON string before returning*
* 1.1.2 *Added query to fetch dates grouped by months + made list util method more flexible*
* 1.1.1 *Util method to fetch list of calendar types (general + national) supported by romcal*
* 1.1.0 *Removed liturgical cycle query + allow integers values for year in the `calendarFor()` and `queryNationalCalendar()` methods + format output returned by romcal: moment object is replaced by timestamp value instead*
* 1.0.9 *TDD tests for Psalter Weeks + Fixed typos*
* 1.0.8 *Psalter Weeks [Beta] + Data integrity checks + queries for memorials/opt memorials/martyrs and feasts within the General Roman Calendar*
* 1.0.7 *Fix type errors in other celebrations*
* 1.0.6 *Fix filesystem error when attempting to load localization.json*
* 1.0.5 *Liturgical Cycles + Bug Fixes + Proper error handling conventions for `calendarFor()` method*
* 1.0.4 *Bug fixes for National Calendars*
* 1.0.3 *National calendars [beta] and a new localization mechanism*
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
The method accepts 2 optional parameters and 1 mandatory parameter:
 1. `year` *optional* The Gregorian year as an integer. Defaults to current year if null
 2. `locale` *optional* The locale (e.g. en-US, en-GB, fr-FR). Defaults to en-US if null
 3. `cb` *mandatory* The callback function with the following parameters:
    * `err` An error object if an error occured, null if there is no error
    * `dates`  An array of liturgical dates
 
 Note: 
 *At the moment, romcal only contains localized values for the en-US locale. Passing in any other locale will return en-US texts until those locales are localized.* 

```
romcal.calendarFor( function( err, dates ) {
    console.log( dates );
});

romcal.calendarFor(2014, function( err, dates ) {
    console.log( dates );
});

romcal.calendarFor(2014, 'en-US', function( err, dates ) {
    console.log( dates );
});
```

Each item in the array returned is an object literal that contains:
 1. A [moment](http://momentjs.com/) object definition for the liturgical date (all dates returned in UTC)
 2. The type of liturgical date (e.g. Solemnity, Memorial, Sunday, Weekday .. ) 
 3. The name of the liturgical date (localizable)
 4. Additional data pertaining to the liturgical date (e.g. liturgical season )


## Query API
romcal also provides additional queries that can be used to streamline the original date output via the `queryFor()` method. For examples on usage of this method, check out the TDD scripts in romcal's test folder.

```
romcal.queryFor('mondays', dates, function( err, query ) {
    console.log( query );
});
```
The method accepts 2 parameters:
1. `query` *mandatory* The query type to perform (see below)
2. `dates` *mandatory* An array of dates returned by `calendarFor()`
3. `callback` *mandatory* The callback function with 2 parameters:
    * `err` A JSON object describing the error (if any). null if there are no errors
    * `query` The filtered liturgical dates will be returned

### Queries for date ranges
* `ordinaryTime` 
    - Returns an array of dates in the season of Ordinary Time (Day after Baptism of the Lord till day before Ash Wednesday & dat after Pentecost to Christ the King)
* `lent` 
    - Returns an array of dates corresponding to the season of Lent (Ash Wednesday up to the day beforee Palm Sunday)
* `holyWeek`
    - Returns an array of dates from Palm Sunday to Easter Vigil
* `easter` 
    - Returns an array of dates corresponding to the season of Easter (Easter Sunday up to Pentecost)
* `advent` 
    - Returns an array of dates in the season of Advent ( 1st Sunday of Advent to Christmas Eve)
* `christmastide` 
    - Returns an array of dates from Christmas day to Epiphany

### Queries for specific liturgical date types
* `feastsOfTheLord`
    - An array of dates for Baptism of the Lord, Presentation of the Lord, Transfiguration, Triumph of the Cross and Holy Family
* `memorials`
    - An array of memorials throughout the liturgical year conforming to the General Roman Calendar. It does not include memorials from National, Diocesan or Parish level calendars.
* `optionalMemorials`
    - An array of optional memorials throughout the liturgical year conforming to the General Roman Calendar. It does not include memorials from National, Diocesan or Parish level calendars.
* `commemoration`
    - An array of downgraded memorials/optional memorials that occur only during the season of Lent
* `solemnities`
    - Returns an array of the highest ranking feast days throughout the liturgical year
*  `otherCelebrations`
    -  Other feats, memorials and/or optional memorial dates from the General Roman Calendar (note: these dates are not specific to any country)

### Other queries to return days or months
* `sundays`
* `mondays`
* `tuesdays`
* `wednesdays`
* `thursdays`
* `fridays`
* `saturdays`
* `daysGrouped`
    - Returns all dates in the year grouped by day
* `monthsGrouped`
    - Returns all dates in the year grouped by month
* `liturgicalYear`
    - Returns the current liturgical cycle for the date given (e.g Cycle A, B or C)
* `liturgicalSeasons`
    - Returns the liturgical dates in the year, grouped according to the respective liturgical seasons they fall into
* `psalterWeeks`
    - Returns the liturgical dates in a year, grouped according to the psalter week assigned (e.g. Psalter Week I, Psalter Week II, ..., Psalter Week IV )
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


## National Calendars [Beta]
Romcal is able to display the national calendars (specific liturgical dates of a country) for [41 countries](http://en.wikipedia.org/wiki/General_Roman_Calendar#National_calendars). 

To query a national calendar, use the `queryNationalCalendar()` method.
`queryNationalCalendar()` is much more rigid than the standard `calendarFor()` method. All parameters are mandatory and romcal will return null or throw an error if any of these parameters are not satisfied. The parameters in order are:

1. `year` *mandatory* The year (integer) of liturgical dates to be obtained
2. `locale` *mandatory* The locale (e.g. en-US, en-GB, fr-FR)
3. `country` *mandatory* The country of which the national calendar is to be obtained. Possible values for this parameter are:
    * `argentina`
    * `australia`
    * `belgium`
    * `bolivia`
    * `bosniaHerzegovina`
    * `brazil`
    * `canada`
    * `chile`
    * `croatia`
    * `czechRepublic`
    * `england`
    * `france`
    * `finland`
    * `germany`
    * `greece`
    * `hungary`
    * `india`
    * `ireland`
    * `japan`
    * `lebanon`
    * `lithuania`
    * `malta`
    * `mexico`
    * `newZealand`
    * `norway`
    * `peru`
    * `philippines`
    * `poland`
    * `portugal`
    * `puertoRico`
    * `romania`
    * `russia`
    * `scotland`
    * `slovakia`
    * `spain`
    * `sriLanka`
    * `ukraine`
    * `unitedStates`
    * `vietnam`
    * `wales`
4. `callback` *mandatory* The callback function with 2 parameters:
    * `err` An error object if any errors occured. null if no errors
    * `result` An array of dates for the National Liturgical year of the country

## Adding National Calendars
1. National Calendars can be added to romcal by editing the `calendars()` function in `lib/utils.js`. This function returns an object literal containing attributes of the General calendar as well as National Calendars. New countries can be added on by referring to the format of this object literal.
2. The next file to edit is `lib/nationalCalendar.js`. The country and the specific celebrations as defined in its National Calendar (as determined by the council of Bishops and approved by the Holy See) is added to the `dates()` function. Ensure that the newly added country conforms to the defined object literal structure.
3. Finally, create localizable entries for celebrations of the country's national calendar via `data/localization.json`

## Localization
* Display names for liturgical dates in romcal are localizable. 
* romcal can potentially support an unlimited number of language-locales
* `data/localization.json` is a data file in JSON format that holds all localized liturgical date names.
* As of this release, romcal only contains valid localizable values for en-US. Eagerly looking forward to contributions to help localize the other languages!
* Contributing localizations for romcal is easy:
    * Open up `lib/data/localization.json` in your favourite JSON Editor (e.g [JSON Editor Online](http://www.jsoneditoronline.org/) )
    * Enter localized text for an item (e.g. `ourLadyMediatrix`) based on its locale code (e.g `en-GB`)
    * Save and submit the updated `lib/data/localization.json` file

## Util Methods
* `list()` returns a listing of constants in romcal. Takes 2 parameters:
    * `query` *mandatory* The type of list to return. Possible paramters:
        * `calendars`
        * `days`
        * `months`
        * `ordinalNumbers`
        * `psalterWeeks`
        * `liturgicalCycles`
        * `types`
        * `categories`
        * `liturgicalColors`
    * `callback` *mandatory* The callback function with 2 parameters:
        * `err` An error object if any errors occured. null if no errors
        * `list` A list of constants according to the query

## Roadmap
* More localization values for locales
* More queries

*If you have any suggestions for improvement, feel free to contribute to this exciting project!*

## Acknowledgements
The development of romcal is inspired by the work of Kenneth G, Bath who wrote a [General Roman Calendar](http://www.romcal.net) in the C language. 
This module *is not* a port of the C program and *does not use* any of the C code in that program. 
This module is written from scratch with the aim of provide similar output as the original C program while providing additional queries for convenient filtering/streamlining of date results.

## License
romcal is freely distributable under the terms of the [MIT license](http://opensource.org/licenses/MIT).

[npm-url]: https://www.npmjs.org/package/romcal
[npm-version-image]: http://img.shields.io/npm/v/romcal.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/romcal.svg?style=flat

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: http://opensource.org/licenses/MIT




