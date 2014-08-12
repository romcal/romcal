## General Roman Calendar
romcal is a Node implementation of the [General Roman Calendar (Roman Catholic Rite)](http://en.wikipedia.org/wiki/General_Roman_Calendar) based on information and rules described in [Roman Calendar](http://www.romcal.net/). This module conforms to the revised liturgical calendar for the Western Church as approved by Paul VI in [Mysterii Paschalis](http://www.romcal.net/mysterii.html) dated 14 February 1969. This module will output dates based on the standard calendar year (Jan, 1st - Dec, 31st) even though the liturgical year begins with the First Sunday of Advent.

## Features
 * Able to query liturgical dates for any year in the gregorian calendar (1582 - now). Note that dates for years before 1969 will still be returned in a format conforming to [Mysterii Paschalis](http://www.romcal.net/mysterii.html).
 * Returns an array of object literals representing a liturgical dates.
 * 

NOTE:This module relies heavily on [Moment](http://momentjs.com/) and [Lo-Dash](http://lodash.com/) (which are dependencies of this module) for most of its calculations and operations.

## Usage


## Query API
romcal also provides additional queries that can be used to streamline the original date output.

## License
romcal is freely distributable under the terms of the [MIT license](LICENSE).

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE




