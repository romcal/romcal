[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[npm-url]: https://www.npmjs.com/package/romcal
[npm-version-image]: https://img.shields.io/npm/v/romcal.svg?style=flat
[npm-downloads-image]: https://img.shields.io/npm/dm/romcal.svg?style=flat
[travis-url]: https://travis-ci.org/pejulian/romcal
[travis-image]: https://travis-ci.org/pejulian/romcal.svg?branch=master

[![MIT License][license-image]][license-url] [![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-url] [![MIT License][license-image]][license-url] [![Build Status][travis-image]][travis-url]

[![Join the chat at https://gitter.im/pejulian/romcal](https://badges.gitter.im/pejulian/romcal.svg)](https://gitter.im/pejulian/romcal?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# Romcal

Utility library that outputs the Liturgical Calendar used by the Roman Rite (Western Church)

## Contributing to romcal

All contributions are most welcome!

Please fork/raise merge requests or issues to improve the quality of this module.

I especially reach out to you all for help with translations/localizations of celebration names so that this module can cater to a wider audience.

See [contributing](CONTRIBUTING.md) for more information.


## Table of Contents
- [Description](#desc)
- [Credits](#credits)
- [Features](#features)
- [Module Robustness & Data Integrity](#disclaimer)
- [Revisions](#revisions)
- [Usage](#usage)
  - [Configuration Options](#configOpts)
  - [Output Formatter](#outputFormatter)
  - [JSON Structure](#jsonStructure)
- [Celebration Types](#types)
- [Celebration Titles](#titles)
- [Liturgical Seasons](#seasons)
- [Liturgical Cycles](#cycles)
- [Liturgical Colors](#colors)
- [Psalter Weeks](#psalterWeeks)
- [Calendar Sources](#sources)
  - [Liturgical](#liturgical)
  - [Celebrations](#celebrations)
  - [General](#general)
  - [National](#national)
- [Queries](#queries)
  - [Filtering calendar output by month of year or day of week](#filterByMonthOrDay)
  - [Grouping calendar output by critieria](#groupingByCriteria)
  - [Filtering calendar output by celebration title metadata](#filteringByTitle)
- [Overriding dates](#)
  - [Overriding a date by its calendar source](#overridingBySource)
  - [Overdding a date by its priority](#overridingByPriority)
  - [Overriding a date by its key](#overridingByKey)
- [Localizing celebration names](#localization)

## Description <a name="desc"></a>
Romcal is a module that generates the [General Roman Calendar](http://en.wikipedia.org/wiki/General_Roman_Calendar) used in the Roman Catholic Rite. This module conforms to the revised liturgical calendar for the Western Church as approved by Paul VI in [Mysterii Paschalis](http://www.romcal.net/mysterii.html) dated 14 February 1969.

This module can output dates based on the standard calendar year (Jan, 1st - Dec, 31st) or the liturgical year (First Sunday of Advent - Christ the King) alongside many other features for fine-tuning output as described below.

## Credits <a name="credits"></a>
This node module is inspired by the C program [romcal](http://www.romcal.net/) written by Kenneth G. Bath. This module, while exhibiting similar output, is written ground up using different tools and technologies and exposes many new functionalities.

## Features <a name="features"></a>
 * Able to query liturgical dates for any year in the gregorian calendar (1582 - now). Note that dates for years before 1969 will still be returned in a format conforming to [Mysterii Paschalis](http://www.romcal.net/mysterii.html) even though those years came before the calendar reforms in 1969.
 * Filter queries to allow more streamlined date results to be obtained for the year.
 * Localization of liturgical date names to cater for different languages
 * National liturgical calendars for country specific.
 * Richly commented code to help developers and contributors understand how the module works.

NOTE: This module depends on [Moment](http://momentjs.com/) and [lodash](http://lodash.com/) for most of its calculations and operations. Several [Moment](http://momentjs.com/) plugins such as [Range](https://github.com/gf3/moment-range) and [Recur](https://github.com/c-trimm/moment-recur) are used to extend date computation functionality. Familiarity with these libraries makes reading the code much easier.

## Module Robustness & Data Integrity <a name="disclaimer"></a>
*Calendar entries for this module are pulled from various sources from the net. As such their accuracy cannot be ensured. If you find an incorrect calendar entry (e.g. wrong date, wrong feast type, spelling issue, typos), you are most welcome to contribute to the source code or inform me so that the necessary changes can be made to make this a more robust and reliable module*

*Romcal's code logic is developed according to calendar requirements descibed in various church documents sourced from the internet (and even from Wikipedia). If you notice discrepancies between romcal's output and actual liturgical dates, please do contribute your fixes or submit an issue on GitHub.*

### Testing romcal
romcal logic is tested using mocha and should.
Run `npm test` in your console to view test output.
Travis CI is used to validate romcal builds to ensure functionality is working as expected.

## Revisions <a name="revisions"></a>
See [history](HISTORY.md)

## Usage <a name="usage"></a>

Add romcal to your project via npm:

```
$ npm install romcal
```

Then require romcal in your node project:

```
var romcal = require('romcal');
```

Invoke the `calendarFor` method to retrieve an array of liturgical dates and celebrations in the Roman Calendar. This method accepts an object (optional) representing configuration properties to customize the output.

```
romcal.calendarFor({
    year: 2015,
    country 'unitedStates',
    locale: 'pl',
    christmastideEnds: 't|o|e',
    epiphanyOnJan6: true|false,
    corpusChristiOnThursday: true|false,
    ascensionOnSunday: true|false,
    type: 'calendar|liturgical',
    query: {
        day: 0 - 6, // 0 - Sunday, 6 - Saturday (week beginning with Sunday)
        month: 0 - 11, // 0 - Jan, 11 - Dec (month begining with Jan)
        group: '',
        title: '',
    }
},
true|false );

```

### Configuration Options <a name="configOpts"></a>
+ `year`: Retrieve calendar dates for the given year (year should be an integer). Defaults to the current system year if not specified
+ `country`: Include celebration dates requested by the Episcopal council(s) of the given country that have been approved by the Holy See. If not specified, no National dates are included in the calendar output. If  an unrecognized country is specified, romcal will silently ignore the property and will not return any National dates in the calendar output.
+ `locale`: Defaults to 'en' (english) if not set. Romcal celebration names can be localized to different languages. If a given locale does not have the localized name for a celebration in that language, romcal will fallback to use the celebration name in English.
+ `christmastideEnds`: Specifies the end of the Christmas season. Can be either 't' (traditional where Christmastide ends on Epiphany), 'o' (ordinary where Christmastide ends on the Baptism of the Lord) and 'e' (extraordinary where Christmastide ends on the Presentation of the Lord). Defaults to 'o' (ordinary) if not specified
+ `epiphanyOnJan6`: If true, fixes Epiphany on January 6th always. By default, Epiphany will be set to a Sunday between 2 - 8 Jan based on an internal calculation.
+ `corpusChristiOnThursday`: Determines if Corpus Christi should be celebrated on Thursday on the 7th week of Easter (60 days after Easter) or Sunday (63 days after Easter).
+ `ascensionOnSunday`: Determines if Ascension should replace the 7th Sunday of Easter (42 days after Easter). Defaults to false where Ascension will be on Thursday, 39 days after Easter, if value not recognized or specified.
+ `type`: Determines the type of calendar output. Can either be `liturgical` or `calendar`. Defaults to `calendar` if value not recognized or specified. The 'liturgical' year runs from 1st Sunday of Advent of the given year to Saturday of the 34th Week of Ordinary Time in the following year. The 'calendar' year on the other hand refers to the standard year from Jan 1 - Dec 31.
+ `query`: A nested query object which filters the dates according to the given criteria. For more details on how to use queries, see [this](#queries) section.

### Output formatter <a name="outputFormatter"></a>
The second parameter that can be passed to the `romcal.calendarFor()` method.
It is an optional parameter: If true, skip converting dates to ISO8601 strings and return dates as moment objects. Defaults to false if not specified.

### JSON Structure <a name="jsonStructure"></a>
romcal returns an array of liturgical date objects in the following structure

```
[
    {
        "key": "",
        "name": "",
        "type": "",
        "moment": "",
        "source": "",
        "data": {
            "prioritized": boolean
            "season": "",
            "meta": {
                "liturgicalColor": {}
                "titles": []
            }
        }
    }
]
```

+ `key`: A camel case string which serves as a unique identifier for the celebration. This key is an essential element in [overriding dates](#overriding)
+ `name`: The [localizable name](#localizing) of the celebration
+ `type`: A key representing the [celebration type](#types)
+ `moment`: Moment object or ISO8601 string of the date of the celebration
+ `source`: The internal calendar [source](#sources) of this celebration
+ `data`: An object that holds additional information about the celebration
  + prioritized: A optional boolean that when true, gives the celebration higher priority over another coinciding celebration even thought that celebration has a higher ranking type. This flag should be used with caution.
  + season: Required: A string that identifies the liturgical season this celebration belongs to
  + meta:
    + liturgicalColor: The [liturgical color](#colors) assigned for this celebration (usually follows the liturgical season but may defer if this celebration is a solemnity, feast or memorial)
    + titles: An array of [titles](#titles) that may be assigned to this celebration

## Celebration Types <a name="types"></a>
Each date in the liturgical calendar is assigned a types. romcal defines these types in `data/types.json` which are:

1. `SOLEMNITY`
2. `SUNDAY`
3. `TRIDUUM`
4. `HOLY_WEEK`
5. `FEAST`
6. `MEMORIAL`
7. `OPT_MEMORIAL`
8. `COMMEMORATION`
9. `WEEKDAY`

Where the importance or rank of the celebration is in descending order (Solemnity being of highest importance and weekday being the lowest).

Types play an important role in determining which celebration should take precendence over another when two or more celebrations coincide on the same date. Certain celebration types will also have different liturgical colors applied to them.

## Celebration Titles <a name="titles"></a>
On top of having a celebration type, liturgical dates may also have one or more titles of significance assigned to it.

For example, the feast of [Saint Catherine of Siena](https://en.wikipedia.org/wiki/Catherine_of_Siena) is assigned the titles `PATRON_OF_EUROPE` (for national calendars of countries in Europe only) and `DOCTOR_OF_THE_CHURCH` due to those titles being conferred on her by the Church.

romcal defines liturgical seasons in `data/titles.json` which are:

The titles available for:

+ `FEAST_OF_THE_LORD`
+ `PATRON_OF_EUROPE`
+ `DOCTOR_OF_THE_CHURCH`
+ `MARTYR`

## Liturgical Seasons <a name="seasons"></a>
The liturgical calendar is divided into various seasons that occur throughout the liturgical year.

romcal defines liturgical seasons in `data/seasons.json` which are:

+ `ADVENT`
+ `CHRISTMASTIDE`
+ `EARLY_ORDINARY_TIME`
+ `LATER_ORDINARY_TIME`
+ `LENT`
+ `HOLY_WEEK`
+ `EASTER`

The methods in `lib/seasons.js` assigns seasons to the dates it generates to indicate the season to which the range of dates generated belong.

## Liturgical Cycles <a name="cycles"></a>
A liturgical year consists of a cycles (either A, B, C) that determines which portions of scripture are to be read. romcal automatically calculates the correct cycle for the given liturgical year and includes it in the meta information of each liturgical date for that year.

This information can be extracted via the `dates[idx].data.meta.cycle` property.

## Liturgical Colors <a name="colors"></a>
[Liturgical colours are those specific colours used for vestments and hangings within the context of Christian liturgy. The symbolism of violet, white, green, red, gold, black, rose and other colours may serve to underline moods appropriate to a season of the liturgical year or may highlight a special occasion.](https://en.wikipedia.org/wiki/Liturgical_colours)

romcal defines 6 colors in `data/liturgicalColors.json` which are:
+ `WHITE`
+ `GOLD`
+ `RED`
+ `ROSE`
+ `PURPLE`
+ `GREEN`

More information on how these colors are used for celebration can be found [here](https://en.wikipedia.org/wiki/Liturgical_colours#Roman_Catholic_Church)

This information can be extracted via the `dates[idx].data.meta.liturgicalColor` property.

## Psalter Weeks <a name="psalterWeeks"></a>
With the exception of the Easter Octave, each week in the liturgical year is assigned readings from the [Psalter](https://en.wikipedia.org/wiki/Roman_Breviary#The_Psalter). There are also some rules that govern the set of Psalter readings used for particular occasions or seasons in the year.

romcal defines the Psalter Weeks used in the liturgical year in `data/psalterWeeks.json` which are:

+ `Week I`
+ `Week II`
+ `Week III`
+ `Week IV`
+ `Easter` (sepeate set of readings only used during the Octave of Easter)

This information can be extracted via the `dates[idx].data.meta.psalterWeek` property.

## Calendar sources <a name="sources"></a>

romcal generates dates that come from 4 different internal sources:

+ `l` : liturgical
+ `c` : celebrations
+ `g` : general
+ `n` : national

Each date is assigned a source with one of the four calendar sources above.

Calendar sources play an important role in how romcal manages coinciding dates (see [overriding dates](#overidding)).

### liturgical <a name="liturgical"></a>
Represents a standard date in the liturgical year. Dates from this source build the basic structure of the liturgical calendar from the start of the liturgical year to its end.

Dates from `lib/seasons.js` will be assigned the source `l`
The module responsible for generating the `liturgical` dates is `lib/seasons.js`.
It is highly unlikely that this module will need customization or overriding of any kind.

### celebrations <a name="celebrations"></a>
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

### general <a name="general"></a>
Represents general celebrations that are celebrated throughout the liturgical year. Dates from the `general` calendar will override dates from the `liturgical` calendar.

Dates from `calendars/general.js` will be assigned the source `g`
The module responsible for generating the `general` dates is `lib/calendars/general.js`.

`general` calendar dates will always be overwritten by `celebration` or `national` calendar dates even if they are prioritized. Hence, it is  not recommended to edit or add new dates into this calendar.

In situations where a given celebration must override one in the general calendar, define it in the `national` calendar instead.

### national <a name="national"></a>
Represents specific liturgical dates that have been approved for use by the Holy See for a particular country. It can be used to define unique celebrations celebrated by that particular country or existing celebrations that have been [transferred to another date](https://en.wikipedia.org/wiki/General_Roman_Calendar#Transfer_of_celebrations).

A prioritized celebration in the `national` calendar takes precedence over celebrations in `general`, `celebrations` and `liturgical` calendars. As such, this marker should be used with caution lest it overrides an important celebration that should not be overriden leading to an erroneous calendar output.

In situations when there are 2 celebrations from `national` calendar that coincide on the same date, the one with the higher ranking celebration type will take precendence.

A new `national` calendar for a country can be defined by creating a new `.js` file with the country name in upper case, lower case or camel case in the `lib/calendars` folder (i.e. malaysia.js). This new file will automatically be picked up by the module and will be used when the user supplies the matching key in the country argument in the `calendarFor` method.

Dates from `calendars/countryName.js` will be assigned the source `n`

See [Overriding dates](#Overriding dates) for more examples.

## Queries <a name="queries"></a>
Romcal can filter `calendarFor` results if a query object is passed along with the initial configuration object:

### Filtering calendar output by month of year or day of week <a name="filterByMonthOrDay"></a>

```
romcal.calendarFor({
    query: {
        month: 0 // 0 - 11
    }
});

```

or

```
romcal.calendarFor({
    query: {
        day: 0, // 0 - 6
    }
});

```

### Grouping calendar output by critieria <a name="groupingByCriteria"></a>

```
romcal.calendarFor({
    query: {
        group: 'days|months|daysByMonth|weeksByMonth|cycles|types|liturgicalSeasons|liturgicalColors|psalterWeeks'
    }
});

```

### Filtering calendar output by celebration title metadata <a name="filterByTitle"></a>

```
romcal.calendarFor({
    query: {
        title: 'PATRON_OF_EUROPE'
    }
});

```

Possible values can be checked [here](#titles).


Warning: Passing more than one criteria to the query object may cause errors or unpredictable results.


## Overriding dates <a name="overriding"></a>

Romcal has been designed with extensibility in mind to cater for specific scenarios that are commonplace in the liturgical calendar. The sections below describe the methods employed by romcal when overriding dates.

### Overriding a date by its calendar source <a name="overridingBySource"></a>

The order of importance of calendar sources are: celebrations > national > general > liturgical.

### Overriding a date by its priority <a name="overridingByPriority"></a>

Prioritized dates may override dates of higher ranking celebration types and also prevent itself from being overriden by other coinciding dates. For example, dates in `lib/celebrations.js` (Christmas, Easter) are all prioritized as they can override any other date in the liturgical calendar and may not be overriden by any other coinciding date regardless of rank <b>unless</b> the coinciding date is itself prioritized (for example, `allSaints` in `'lib/celebrations.js' can be overriden by `allSaints` in `calendars/england.js`).

Caveat:
> If a coinciding date's source is from the `celebration` or `national` calendars, and the prioritized date is from the `general` calendar, it will still be overidden by the coinciding date as `celebration` and `national` calendar sources have higher precedence.

### Overriding a date by its key <a name="overridingByKey"></a>

In most other countries, All Saints and All Souls are celebrated on the 1st and 2nd of November respectively. However, in England and Wales, when All Saints (1 November) falls on a Saturday, it is transferred to the Sunday and All Souls is transferred to Monday 3rd Novemeber.

Romcal achieves this difference by redefining the `allSouls` and `allSaints` celebrations in the national calendars of `calendars/england.js` and `calendars/wales.js` (the original definition was in `calendars/general.js`). Since national calendar dates have higher precendence than general calendar dates, the national date definitions for All Saints and All Souls will override the ones in the general calendar.

Therefore, it is important that the key in the national calendar is <b>exactly</b> the same as the one in the general calendar so that romcal recognizes it for overriding.


### Localizing celebration names <a name="localization"></a>

Celebration names in Romcal can be localized to any language that is already supported by [Moment i18n](http://momentjs.com/docs/#/i18n/). Locales are stored as `.json` files in the `locales` directory where the name of the file corresponds to the locale name of a given language.

`en` is the default locale in romcal and serves as the fallback when the user specified locale has not been defined in the `locales` directory or the given key does not exist in the locale.

The structure of the locale file is typically like so:

```
{
  "advent": {

  },
  "christmastide": {

  },
  "epiphany": {

  },
  "ordinaryTime": {

  },
  "lent": {

  },
  "holyWeek": {

  },
  "eastertide": {

  },
  "celebrations": {

  },
  "general": {

  },
  "national": {

  }

}

```
The first 7 objects define locale keys used by `lib/seasons.js` when generating litugical dates.

The `celebrations`, `general` and `national` objects will hold localizations for `lib/celebrations.js`, `calendars/general.js` and `calendars/country.js` respectively where the celebrations `key` is used as the identifier for localization purposes.

See the end of these files to see the function that localizes the dates according to their keys.


#### Utils.localize()

romcal uses the utility function `Utils.localize()` to resolve the correct locale string based on the given key.
The function accepts several parameters:

```
Utils.localize({
  key: '',
  week: 0,
  count: 0
});

```

+ `key`: A dot deliminated string representing the locale key (`celebrations.christmas`)
+ `week`: A non zero integer for weeks which will be converted to its ordinal representation (1st Sunday of Advent)
+ `count`: A non zero integer for days which will be converted to its ordinal representation (2nd Sunday of Christmas)
