[![Build Status](https://travis-ci.org/pejulian/romcal.svg?branch=master)](https://travis-ci.org/pejulian/romcal) [![MIT License][license-image]][license-url] [![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-url]

# Romcal
Utility library that outputs the Liturgical Calendar used by the Roman Rite (Western Church)

## Description
Romcal is a module that generates the [General Roman Calendar](http://en.wikipedia.org/wiki/General_Roman_Calendar) used in the Roman Catholic Rite. This module conforms to the revised liturgical calendar for the Western Church as approved by Paul VI in [Mysterii Paschalis](http://www.romcal.net/mysterii.html) dated 14 February 1969. This module can output dates based on the standard calendar year (Jan, 1st - Dec, 31st) or the liturgical year (First Sunday of Advent - Christ the King).

## Features
 * Able to query liturgical dates for any year in the gregorian calendar (1582 - now). Note that dates for years before 1969 will still be returned in a format conforming to [Mysterii Paschalis](http://www.romcal.net/mysterii.html) even though those years came before the calendar reforms in 1969.
 * Filter queries to allow more strealined date results to be obtained for the year.
 * Localization of liturgical date names to cater for different languages
 * National liturgical calendars for country specific.
 * Richly commented code to help developers and contributors understand how the module works.

NOTE: This module depends on [Moment](http://momentjs.com/) and [lodash](http://lodash.com/) for most of its calculations and operations. Several [Moment](http://momentjs.com/) plugins such as [Range](https://github.com/gf3/moment-range) and [Recur](https://github.com/c-trimm/moment-recur) are used to extend date computation functionality. Familiarity with these libraries makes reading the code much easier.

## Module Robustness & Data Integrity
*Calendar entries for this module are pulled from various sources from the net. As such their accuracy cannot be ensured. If you find an incorrect calendar entry (e.g. wrong date, wrong feast type, spelling issue, typos), you are most welcome to contribute to the source code or inform me so that the necessary changes can be made to make this a more robust and reliable app*

*Romcal's code logic is developed according to calendar requirements descibed in various church documents sourced from the internet (and even from Wikipedia). If you notice discrepancies between romcal's output and actual liturgical dates, please do contribute your fixes or submit an issue on GitHub.*

## Revisions
* 1.2.0 *Major rewrite for better extensibility and functionality. All previous revisions have been marked for deprecation in favor of this new rewrite.*

## Usage

Add romcal to your project via npm:

```
$ npm install romcal
```

Then require romcal in your node project:

```
var romcal = require('romcal');
```

### JSON Structure
romcal returns an array of liturgical date objects in the following structure

```
[
    {
        "key": "theCamelCaseNameOfTheCelebration",
        "name": "The name of the celebration",
        "type": "A key representing the celebration type",
        "moment": "ISO8601 string of the date of the celebration",
        "data": {
            "prioritized": true|false, // optional
            "season": null,
            "meta": {
                "liturgicalColor": {}
                "titles": []
            }
        }
    }
]
```

`moment`: ISO8601 string

### Celebration Types
Each date in the liturgical calendar is assigned one of the following types: 
1. SOLEMNITY
2. SUNDAY
3. TRIDUUM
4. HOLY_WEEK
5. FEAST
6. MEMORIAL
7. OPT_MEMORIAL
8. COMMEMORATION
9. WEEKDAY

Where the importance or rank of the celebration is in descending order (Solemnity being of highest importance and weekday being the lowest).

Types play an important role in determining which celebration should take precendence over another when two or more celebrations coincide on the same date.

### Celebration Titles
On top of having a celebration type, liturgical dates may also have one or more titles of significance assigned to it. For example, the feast of [Saint Catherine of Siena](https://en.wikipedia.org/wiki/Catherine_of_Siena) is assigned the titles PATRON_OF_EUROPE (for national calendars of countries in Europe only) and DOCTOR_OF_THE_CHURCH due to those titles being conferred on her by the Church.

The titles available for 
+ FEAST_OF_THE_LORD
+ PATRON_OF_EUROPE
+ DOCTOR_OF_THE_CHURCH

### Liturgical Seasons
The liturgical calendar is divided into various seasons that occur throughout the liturgical year.

romcal defines liturgical seasons in `data/seasons.json` which are:
+ ADVENT
+ CHRISTMASTIDE
+ EARLY_ORDINARY_TIME
+ LATER_ORDINARY_TIME
+ LENT
+ HOLY_WEEK
+ EASTER

The methods in `lib/seasons.js` assigns seasons to the dates it generates to indicate the season to which the range of dates generated belong.

### Liturgical Cycles
A liturgical year consists of a cycles (either A, B, C) that determines which portions of scripture are to be read. romcal automatically calculates the correct cycle for the given liturgical year and includes it in the meta information of each liturgical date for that year. 

This information can be extracted via the `dates[idx].data.meta.cycle` property.

### Liturgical Colors
[Liturgical colours are those specific colours used for vestments and hangings within the context of Christian liturgy. The symbolism of violet, white, green, red, gold, black, rose and other colours may serve to underline moods appropriate to a season of the liturgical year or may highlight a special occasion.](https://en.wikipedia.org/wiki/Liturgical_colours)

romcal defines 6 colors in `data/liturgicalColors.json` which are:
+ WHITE
+ GOLD
+ RED
+ ROSE
+ PURPLE
+ GREEN

More information on how these colors are used for celebration can be found [here](https://en.wikipedia.org/wiki/Liturgical_colours#Roman_Catholic_Church)

This information can be extracted via the `dates[idx].data.meta.liturgicalColor` property.

### Psalter Weeks
With the exception of the Easter Octave, each week in the liturgical year is assigned readings from the [Psalter](https://en.wikipedia.org/wiki/Roman_Breviary#The_Psalter). There are also some rules that govern the set of Psalter readings used for particular occasions or seasons in the year.

romcal defines the Psalter Weeks used in the liturgical year in `data/psalterWeeks.json` which are:
+ Week I
+ Week II
+ Week III
+ Week IV
+ Easter (sepeate set of readings only used during the Octave of Easter)

This information can be extracted via the `dates[idx].data.meta.psalterWeek` property.

### Calendar sources
romcal generates dates that come from 4 different internal sources:
+ `l` : liturgical
+ `c` : celebrations
+ `g` : general
+ `n` : national

#### liturgical 
Represents a standard date in the liturgical year. Dates from this source build the basic structure of the liturgical calendar from the start of the liturgical year to its end. 

The module responsible for generating the `liturgical` dates is `lib/seasons.js`.
It is highly unlikely that this module will need customization or overriding of any kind.

#### celebrations
Represents central celebrations observed in the Roman Catholic rite. They take precendence and will replace coinciding dates from the `liturgical` calendar or `general` calendar. Date objects from this calendar will contain the source `c`.

The module responsible for generating `celebrations` is `lib/celebrations.js`. It is highly unlikely that this module will need customization or overriding of any kind.

A prioritized date defined in the `national` calendar can replace a date in the `celebrations` calendar when:
+ the key of the `national` date matches a key in `celebrations`
+ the `national` date is prioritized
*However, this is not recommended because `celebration` dates are significant in the liturgical year and are usually never changed by the national calendars used in other countries. Be very sure if and when overriding a `celebrations` date from the `national` calendar.*

The following are a list of dates defined in the `celebrations` calendar:
+ Immaculate Conception
+ Christmas
+ Mary Mother of God
+ Epiphany
+ Trinity Sunday
+ Corpus Christi
+ Sacred Heart of Jesus
+ Birth of John the Baptist
+ Peter and Paul, Apostles
+ Assumption
+ All Saints
+ Christ the King
+ Joseph, Husband of Mary
+ Annunciation
+ Easter
+ Divine Mercy Sunday
+ Ascension
+ Pentecost Sunday
+ Ash Wednesday
+ Palm Sunday
+ Holy Thursday
+ Good Friday
+ Holy Saturday
+ Holy Family
+ Baptism of the Lord
+ Presentation of the Lord
+ Transfiguration
+ Triumph of the Cross
+ Immaculate Heart of Mary

#### general
Represents general celebrations that are celebrated throughout the liturgical year. Dates from the `general` calendar will override dates from the `liturgical` calendar. 

The module responsible for generating the `general` dates is `lib/calendars/general.js`.

`general` calendar dates will always be overwritten by `celebration` or `national` calendar dates even if they are prioritized. Hence, it is  not recommended to edit or add new dates into this calendar.

In situations where a given celebration must override one in the general calendar, define it in the `national` calendar instead.

#### national
Represents specific liturgical dates that have been approved for use by the Holy See for a particular country. It can be used to define unique celebrations celebrated by that particular country or existing celebrations that have been [transferred to another date](https://en.wikipedia.org/wiki/General_Roman_Calendar#Transfer_of_celebrations).

A prioritized celebration in the `national` calendar takes precedence over celebrations in `general`, `celebrations` and `liturgical` calendars. As such, this marker should be used with caution lest it overrides an important celebration that should not be overriden leading to an erroneous calendar output. 

In situations when there are 2 celebrations from `national` calendar that coincide on the same date, the one with the higher ranking celebration type will take precendence.

A new `national` calendar for a country can be defined by creating a new `.js` file with the country name in upper case, lower case or camel case in the `lib/calendars` folder (i.e. southKorea.js). This new file will automatically be picked up by the module and will be used when the user supplies the matching key in the country argument in the `calendarFor` or `queryFor` methods.

See [Overriding dates](#Overriding dates) for more examples.

### Queries 
The following are usage examples 
#### Querying by month

#### Querying by day of week

#### Querying by celebration types

romcal can query

```

```

#### Querying by celebration title

### Overriding dates
Romcal has been redesigned with extensibility in mind to cater for specific scenarios that are commonplace in the liturgical calendar. For example, All Saints




