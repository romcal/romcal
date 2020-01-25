[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[npm-url]: https://www.npmjs.com/package/romcal
[npm-version-image]: https://img.shields.io/npm/v/romcal.svg?style=flat
[npm-downloads-image]: https://img.shields.io/npm/dm/romcal.svg?style=flat
[travis-url]: https://travis-ci.org/pejulian/romcal
[travis-image]: https://travis-ci.org/pejulian/romcal.svg?branch=master

[![MIT License][license-image]][license-url] [![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Join the chat at https://gitter.im/pejulian/romcal](https://badges.gitter.im/pejulian/romcal.svg)](https://gitter.im/pejulian/romcal?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# Romcal

Utility library that outputs the Liturgical Calendar used by the Roman Rite (Western Church) for Node JS v6 and above.

## Contributing to romcal

Contributions are welcome!

Please fork/raise merge requests or issues to improve the quality of this module.

I especially reach out to you all for help with translations/localizations of celebration names so that this module can cater to a wider audience.

See [contributing](CONTRIBUTING.md) for more information.

## Table of Contents

- [Description](#desc)
- [Revisions](#revisions)
- [Credits](#credits)
- [Features](#features)
- [Module Robustness & Data Integrity](#disclaimer)
- [Builds](#builds)
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
  - [Multiple Queries](#multipleQueries)
- [Overriding dates](#overridingDates)
  - [Overriding a date by its calendar source](#overridingBySource)
  - [Overriding a date by its priority](#overridingByPriority)
  - [Overriding a date by its key](#overridingByKey)
- [Removing general dates in national calendar output](#removingDates)
  - [The `drop` keyword](#dropKeyword)
- [Localizing celebration names](#localization)

## Description <a name="desc"></a>

romcal generates the [General Roman Calendar](http://en.wikipedia.org/wiki/General_Roman_Calendar) used in the Roman Catholic Rite. Output conforms to the revised liturgical calendar for the Western Church as approved by Paul VI in [Mysterii Paschalis](http://www.romcal.net/mysterii.html) dated 14 February 1969.

Output can be configured for the standard calendar year (Jan, 1st - Dec, 31st) or the liturgical year (First Sunday of Advent - Christ the King). Additional filters for filtering output are also available (described below).

## Revisions <a name="revisions"></a>

See [history](HISTORY.md) for latest updates and important/breaking changes.

## Credits <a name="credits"></a>

This node module is inspired by the C program [romcal](http://www.romcal.net/) written by Kenneth G. Bath. This module, while exhibiting similar output, is written ground up using different tools and technologies and exposes many new functionalities.

Additional credits for bug fixes, localizations and suggestions go to:
- [@jarosz](https://github.com/jarosz)
- [@emagnier](https://github.com/emagnier)
- [@tukusejssirs](https://github.com/tukusejssirs)

## Features <a name="features"></a>

- Able to query liturgical dates for any year in the gregorian calendar (1582 - now). Note that dates for years before 1969 will still be returned in a format conforming to [Mysterii Paschalis](http://www.romcal.net/mysterii.html) even though those years came before the calendar reforms in 1969.
- Filter queries to allow more streamlined date results to be obtained for the year.
- Localization of liturgical date names to cater for different languages.
- National liturgical calendars for country specific calendars.
- Richly commented code to help developers and contributors understand how the module works.

NOTE: This module uses [Moment.js](http://momentjs.com/) and [Lodash](http://lodash.com/) for calculations and operations. Additional plugins such as [Range](https://github.com/gf3/moment-range) and [Recur](https://github.com/c-trimm/moment-recur) are used to extend date computation functionality.

## Module Robustness & Data Integrity <a name="disclaimer"></a>

_Calendar entries for this module are pulled from various sources from the net. As such their accuracy cannot be ensured. If you find an incorrect calendar entry (e.g. wrong date, wrong feast type, spelling issue, typos), you are most welcome to contribute to the source code or inform me so that the necessary changes can be made to make this a more robust and reliable module._

_romcal’s code logic is developed according to calendar requirements descibed in various church documents sourced from the internet (and even from Wikipedia). If you notice discrepancies between romcal’s output and actual liturgical dates, please do contribute your fixes or submit an issue on GitHub._

### Testing romcal

romcal employs `TDD` using `mocha` and `should`.
Run `npm test` in your console to view test output.

Travis CI is used to validate romcal builds to ensure functionality is working as expected.

## Builds <a name="builds"></a>

The romcal source code is actually the same for backend and frontend usage. To make it working on the frontend side, the frontend library is wrapped and built thanks to `webpack`. This build step is done automatically when you perform a `npm install` on the romcal directory.

But if you have edited the codebase, you can update manually the frontend library with this command:

```
npm run build
```

The frontend library is generated in the `dist` folder, not included in the romcal codebase. When built, it contains `romcal.bundle.min.js`, a minified and obfruscated bundle of romcal + all its dependencies wrapped in a UMD module shell that is suitable for being included directly in browsers.

## Usage <a name="usage"></a>

> :information_source: romcal was re-written using ES6, and use the new import/export syntax to manage node modules. However, thanks to `esm` and `babel`, it can still be included by other non ES6 aware node modules via the normal CommonJs `require` call.

Add romcal to your project via npm:

```bash
$ npm install romcal
```

Then require romcal in your node project:

```javascript
var romcal = require('romcal');
```

or as a CommonJS module

```javascript
import romcal from 'romcal';
```

or in a webpage for direct usage on browsers

```javascript
  <script type="text/javascript" src="romcal.bundle.min.js"></script>
```

Including romcal directly in the browser will result in an object called `Romcal` being attached to the DOM `window` object. All the functions below will exist as properties of the `Romcal` object.

Invoke the `calendarFor` method to retrieve an array of liturgical dates and celebrations in the Roman Calendar. This method accepts an object (optional) of configuration properties to obtain customized output.

```javascript
romcal.calendarFor({
  year: 2020,
  country: 'unitedStates',
  locale: 'pl',
  christmastideEnds: 't|o|e',
  epiphanyOnJan6: true|false,
  christmastideIncludesTheSeasonOfEpiphany: true | false,
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

- `year`: Retrieve calendar dates for the given year (year should be an integer). Defaults to the current system year if not specified
- `country`: Include celebration dates requested by the Episcopal council(s) of the given country that were approved by the Holy See. If not specified, no National dates are included in the calendar output. If an unrecognized country is specified, romcal will silently ignore the property and will not return any National dates in the calendar output. Country names should be specified in camel case (i.e. `unitedStates`, `czechRepublic`).
- `locale`: Defaults to `en` (English) if not set. romcal celebration names can be localized to different languages. If a given locale does not have the localized name for a celebration in that language, romcal will fall back to use the celebration name in the base language (if a region was specified in the locale), and finally in English. More details on locales management in the [localization](#localization).
- `christmastideEnds`: Specifies the end of the Christmas season. Can be either `t` (traditional where Christmastide ends on Epiphany), `o` (ordinary where Christmastide ends on the Baptism of the Lord) and `e` (extraordinary where Christmastide ends on the Presentation of the Lord). Defaults to `o` if not specified
- `epiphanyOnJan6`: If `true`, fixes Epiphany on January 6th always. Usually, Epiphany will be set to a Sunday between 2 - 8 Jan based on an internal calculation. Defaults to `false`.
- `christmastideIncludesTheSeasonOfEpiphany`: If `false`, the season of epiphany (i.e. days before Epiphany and days after Epiphany) will not appear within the Christmastide. `true` by default.
- `corpusChristiOnThursday`: Determines if Corpus Christi should be celebrated on Thursday on the 7th week of Easter (60 days after Easter) or Sunday (63 days after Easter). Defaults to `false`.
- `ascensionOnSunday`: Determines if Ascension should replace the 7th Sunday of Easter (42 days after Easter). Defaults to `false` where Ascension will be on Thursday, 39 days after Easter, if value not recognized or specified.
- `type`: Determines the type of calendar output. Can either be `liturgical` or `calendar`. Defaults to `calendar` if value not recognized or specified. The `liturgical` year runs from 1st Sunday of Advent of the given year to Saturday of the 34th Week of Ordinary Time in the following year. The civil year on the other hand refers to the standard year from Jan 1 - Dec 31.
- `query`: A nested query object which filters the dates according to the given criteria. For more details on how to use queries, see [Queries](#queries) section.

### Output formatter <a name="outputFormatter"></a>

The second parameter that can be passed to the `romcal.calendarFor()` method.
It is an optional parameter: If true, skip converting dates to ISO8601 strings and return dates as Moment objects. Defaults to false if not specified.

romcal can also be invoked without parameters or via shorthand properties like so:

```javascript
// Get calendar year dates (1st Jan - 31st Dec) for the current year
romcal.calendarFor();

// Get calendar year dates for the specified year
romcal.calendarFor(2020);

// Get calendar year dates and do not convert Moment date objects to ISO8601 strings
romcal.calendarFor(true);
```

### JSON Structure <a name="jsonStructure"></a>

romcal returns an array of liturgical date objects in the following structure

```javascript
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

- `key`: A camel case string which serves as a unique identifier for the celebration. This key is an essential element in [overriding dates](#overriding)
- `name`: The [localizable name](#localizing) of the celebration
- `type`: A key representing the [celebration type](#types)
- `moment`: Moment.js object or ISO8601 string of the date of the celebration
- `source`: The internal calendar [source](#sources) of this celebration
- `data`: An object that holds additional information about the celebration
  - prioritized: A optional boolean that when true, gives the celebration higher priority over another coinciding celebration even though that celebration has a higher ranking type. This flag should be used with caution.
  - season: Required: A string that identifies the liturgical season this celebration belongs to
  - meta:
    - liturgicalColor: The [liturgical color](#colors) assigned for this celebration (usually follows the liturgical season but may defer if this celebration is a solemnity, feast or memorial)
    - titles: An array of [titles](#titles) that may be assigned to this celebration

## Celebration Types <a name="types"></a>

Each date in the liturgical calendar is assigned a type. romcal defines these types in `src/constants/Types.js` which are:

1. `SOLEMNITY`
2. `SUNDAY`
3. `TRIDUUM`
4. `HOLY_WEEK`
5. `FEAST`
6. `MEMORIAL`
7. `OPT_MEMORIAL`
8. `COMMEMORATION`
9. `FERIA`

Where the importance or rank of the celebration is in descending order (Solemnity being of highest importance and feria being the lowest).

Types play an important role in determining which celebration should take precendence over another when two or more celebrations coincide on the same date. Certain celebration types will also have different liturgical colors applied to them.

The array of types can be imported into consumer apps via:

```javascript
import { Types } from 'romcal';
```

## Celebration Titles <a name="titles"></a>

On top of having a celebration type, liturgical dates may also have one or more titles of significance assigned to it.

For example, the feast of [Saint Catherine of Siena](https://en.wikipedia.org/wiki/Catherine_of_Siena) is assigned the titles `PATRON_OF_EUROPE` (for national calendars of countries in Europe only) and `DOCTOR_OF_THE_CHURCH` due to those titles being conferred on her by the Church.

romcal defines liturgical seasons in `src/constants/Titles.js` which are:

Titles are currently available for:

- `PATRON_OF_EUROPE`
- `FEAST_OF_THE_LORD`
- `DOCTOR_OF_THE_CHURCH`
- `MARIAN_FEAST`
- `TRIDUUM`
- `MARTYR`

The titles object can be imported into consumer apps via:

_ES6_
```javascript
import { Titles } from 'romcal';
```

_CommonJS_
```javascript
var Titles = require('romcal').Titles;
```

## Liturgical Seasons <a name="seasons"></a>

The liturgical calendar is divided into various seasons that occur throughout the liturgical year.

romcal defines liturgical seasons in `src/constants/LiturgicalSeasons.js` which are:

- `ADVENT`
- `CHRISTMASTIDE`
- `EARLY_ORDINARY_TIME`
- `LATER_ORDINARY_TIME`
- `LENT`
- `HOLY_WEEK`
- `EASTER`

Methods in `src/lib/Seasons.js` assigns seasons to the dates it generates to indicate the season to which the range of dates generated belong.

The LiturgicalSeasons object can be imported into consumer apps via:

_ES6_
```javascript
import { LiturgicalSeasons } from 'romcal';
```

_CommonJS_
```javascript
var LiturgicalSeasons = require('romcal').LiturgicalSeasons;
```

## Liturgical Cycles <a name="cycles"></a>

A liturgical year consists of a cycles (either A, B, C) that determines which portions of scripture are to be read. romcal automatically calculates the correct cycle for the given liturgical year and includes it in the meta information of each liturgical date for that year.

romcal defines cycles in `src/constants/Cycles.js` which are:

- `Year A` denoted by the key `0`
- `Year B` denoted by the key `1`
- `Year C` denoted by the key `2`

Cycle information can be read via the `dates[idx].data.meta.cycle` property in each date element in the array that `calendarFor` returns.

The cycles object can be imported into consumer apps via:

_ES6_
```javascript
import { Cycles } from 'romcal';
```

_CommonJS_
```javascript
var Cycles = require('romcal').Cycles;
```

## Liturgical Colors <a name="colors"></a>

[Liturgical colours are those specific colours used for vestments and hangings within the context of Christian liturgy. The symbolism of violet, white, green, red, gold, black, rose and other colours may serve to underline moods appropriate to a season of the liturgical year or may highlight a special occasion.](https://en.wikipedia.org/wiki/Liturgical_colours)

romcal defines 6 colors in `src/constants/LiturgicalColors.js` which are:
- `RED`
- `ROSE`
- `PURPLE`
- `GREEN`
- `WHITE`
- `GOLD`

More information on how these colors are used for celebration can be found [here](https://en.wikipedia.org/wiki/Liturgical_colours#Roman_Catholic_Church)

Liturgical colors can be read via the `dates[idx].data.meta.liturgicalColor` property in each date element in the array that `calendarFor` returns.

The LiturgicalColors object can be imported into consumer apps via:

_ES6_
```javascript
import { LiturgicalColors } from 'romcal';
```

_CommonJS_
```javascript
var LiturgicalColors = require('romcal').LiturgicalColors;
```

## Psalter Weeks <a name="psalterWeeks"></a>

With the exception of the Easter Octave, each week in the liturgical year is assigned readings from the [Psalter](https://en.wikipedia.org/wiki/Roman_Breviary#The_Psalter). There are also some rules that govern the set of Psalter readings used for particular occasions or seasons in the year.

romcal defines the Psalter Weeks used in the liturgical year in `src/constants/PsalterWeeks.js` which are:

- `Week I`
- `Week II`
- `Week III`
- `Week IV`
- `Easter` (seperate set of readings only used during the Octave of Easter)

Psalter weeks can be read via the `dates[idx].data.meta.psalterWeek` property in each date element in the array that `calendarFor` returns.

The PsalterWeeks object can be imported into consumer apps via:

_ES6_
```javascript
import { PsalterWeeks } from 'romcal';
```

_CommonJS_
```javascript
var PsalterWeeks = require('romcal').PsalterWeeks;
```

## Calendar sources <a name="sources"></a>

romcal generates dates that come from 4 different internal sources:

- `l` : liturgical
- `c` : celebrations
- `g` : general
- `n` : national

Each date is assigned a source with one of the four calendar sources above.

Calendar sources play an important role in how romcal manages coinciding dates (see [overriding dates](#overidding)).

### liturgical <a name="liturgical"></a>

Represents a standard date in the liturgical year. Dates from this source build the basic structure of the liturgical calendar from the start of the liturgical year to its end.

Dates from `src/lib/Seasons.js` will be assigned the source value `l`.

The module responsible for generating the `liturgical` dates is `src/lib/Seasons.js`. _It is unlikely that this module will need customization or overriding of any kind._

### celebrations <a name="celebrations"></a>

Represents central celebrations observed in the Roman Catholic rite. They take precendence and will replace coinciding dates from the `liturgical` calendar or `general` calendar.

Dates from `src/lib/Celebrations.js` will be assigned the source value `c`.

The module responsible for generating `celebrations` is `src/lib/Celebrations.js`. _It is highly unlikely that this module will need customization or overriding of any kind._

A prioritized date defined in the `national` calendar can replace a date in the `celebrations` calendar when:
- the key of the `national` date matches a key in `celebrations`
- the `national` date is prioritized

_In most cases, it is unlikely that a national calendar event will replace a celebration because of the significance of celebrations. If a national event must override a celebration date, it should be properly verified._

The following are a list of dates defined in the `celebrations` calendar:
- Immaculate Conception
- Christmas
- Mary Mother of God
- Epiphany
- Trinity Sunday
- Corpus Christi
- Sacred Heart of Jesus
- Birth of John the Baptist
- Peter and Paul, Apostles
- Assumption
- All Saints
- Christ the King
- Joseph, Husband of Mary
- Annunciation
- Easter
- Divine Mercy Sunday
- Ascension
- Pentecost Sunday
- Ash Wednesday
- Palm Sunday
- Holy Thursday
- Good Friday
- Holy Saturday
- Holy Family
- Baptism of the Lord
- Presentation of the Lord
- Transfiguration
- Triumph of the Cross
- Immaculate Heart of Mary

### general <a name="general"></a>

Represents general celebrations throughout the liturgical year. Dates from the `general` calendar will override those from the `liturgical` calendar.

Dates from `src/calendars/general.js` are assigned the source value `g`.

The module responsible for generating the `general` dates is `src/lib/Calendars/general.js`.

`general` calendar dates will always be overwritten by `celebration` or `national` calendar dates even if they are prioritized. Celebrations in this calendar should reflect the General Roman Calendar, therefore there should be changes only when there is a change in the General Roman Calendar. When one wants to add, remove or modify a celebration that is celebrated only in a national calendar, they should make this changes in that particular calendar, not in the `general`.

In situations where a given celebration must override one in the general calendar, define it in the `national` calendar instead.

### national <a name="national"></a>

Represents specific liturgical dates that were approved for use by the Holy See for a particular country. It can be used to define unique celebrations celebrated by that particular country or existing celebrations that were [transferred to another date](https://en.wikipedia.org/wiki/General_Roman_Calendar#Transfer_of_celebrations).

A prioritized celebration in the `national` calendar takes precedence over celebrations in `general`, `celebrations` and `liturgical` calendars. As such, this marker should be used with caution as it may cause national events to override important celebrations that should not be overriden.

In situations when there are 2 celebrations from a `national` calendar that coincide on the same date, the one with the higher ranking celebration type will take precendence.

A new `national` calendar for a country can be defined by creating a new `.js` file with the country name in upper case, lower case or camel case in the `src/lib/calendars` folder (i.e. `malaysia.mjs`). This new file will automatically be picked up by the module and will be used when the user supplies the matching key in the country argument in the `calendarFor` method.

Dates from `src/calendars/<countryName>.js` will be assigned the source key `n`

See [Overriding dates](#overridingDates) for more examples.

## Queries <a name="queries"></a>

romcal can generate filtered liturgical or calendar year dates by:
- passing an additional query object along with the initial configuration object to the `calendarFor` method, or
- invoking the `queryFor` method and supplying an array of dates generated from `calendarFor` and a query object

### Filtering calendar output by month of year or day of week <a name="filterByMonthOrDay"></a>

```javascript
import { Calendar } from 'romcal';

Calendar.calendarFor({
  query: {
    month: 0 // 0 - 11 (Jan = 0, Dec = 11)
  }
});

Calendar.calendarFor({
  query: {
    day: 0, // 0 - 6 (0 = Sunday, 6 = Saturday)
  }
});
```

or

```javascript
import { Calendar } from 'romcal';

let dates = Calendar.calendarFor();

let datesGroupedByDay = Calendar.queryFor(dates, {
  day: 0 // 0 - 6
});

let datesGroupedByMonth = Calendar.queryFor(dates, {
  month: 0 // 0 - 11
});
```

### Grouping calendar output by critieria <a name="groupingByCriteria"></a>

Calendar dates can be grouped by various criteria upon invocation like so:

```javascript
import { Calendar } from 'romcal';

Calendar.calendarFor({
  query: {
    group: 'days|months|daysByMonth|weeksByMonth|cycles|types|liturgicalSeasons|liturgicalColors|psalterWeeks'
  }
});
```

Or invoking the query function at a later point

```javascript
import { Calendar } from 'romcal';

let dates = Calendar.calendarFor();

// Some code,
// then ...

let groupedCalendar = Calendar.queryFor(dates, {
  group: 'days|months|daysByMonth|weeksByMonth|cycles|types|liturgicalSeasons|liturgicalColors|psalterWeeks'
});
```

### Filtering calendar output by celebration title metadata <a name="filterByTitle"></a>

```javascript
romcal.calendarFor({
  query: {
    title: 'PATRON_OF_EUROPE'
  }
});
```

Other possible values can be checked [here](#titles).

## Multiple queries <a name="multipleQueries"></a>

It is possible to query for dates against multiple criteria:

```javascript
// Filter dates in January and group the results according to days
romcal.queryFor(dates, {
  month: 0,
  group: 'days'
});
```

## Overriding dates <a name="overridingDates"></a>

romcal is designed with extensibility in mind to cater for unique scenarios that are common in the liturgical calendar.

### Overriding a date by its calendar source <a name="overridingBySource"></a>

The order of importance of calendar sources are: `celebrations` > `national` > `general` > `liturgical`.

### Overriding a date by its priority <a name="overridingByPriority"></a>

Prioritizing a date allows it to:
- Override a higher ranking `type` date object with the same key
- Prevent it from being overriden by other coinciding dates

A date can be prioritized by adding `prioritized`: `true` to the `data` object in the given date object. See `src/lib/Celebrations.js` for more examples.

All dates in `src/lib/Celebrations.js` (Christmas, Easter) are prioritized as they must override any other date in the liturgical calendar and cannot be overriden by any other coinciding date regardless of rank **unless** the coinciding date is itself prioritized

For example, `allSaints` in `src/lib/Celebrations.js` can be overriden by `allSaints` in `src/calendars/england.js`) because the entry in that `national` calendar was set with `prioritized`: `true`.

> :warning: If a coinciding date’s source is from the `celebration` or `national` calendars, _but_ the prioritized date is defined in the `general` calendar, it _will still be_ overidden by the coinciding date because `celebration` and `national` calendar sources have higher precedence (see [Overriding a date by its calendar source](#overridingBySource) section).

### Overriding a date by its key <a name="overridingByKey"></a>

In most countries, All Saints and All Souls are always celebrated on the 1st and 2nd of November respectively. However, in England and Wales, if All Saints (1 November) falls on a Saturday, it is transferred to the Sunday and All Souls is transferred to Monday 3rd Novemeber.

romcal implements this unique difference by overriding the `allSouls` and `allSaints` celebrations in the national calendars of `src/calendars/england.js` and `src/calendars/wales.js` (the original definition was in `src/calendars/general.js`). The overriding dates in these calendars define a IIFE callback function for the Moment property that holds logic for determining if the date should be moved.

Since national calendar dates have higher precendence than general calendar dates, the national date definitions for All Saints and All Souls will override the ones in the general calendar.

Also, since prioritized dates in the national calendar sources can override dates in celebration calendar sources, the date definitions for All Saints and All Souls will now be taken from the national calendar.

Therefore, it is important that the key in the national calendar is **exactly** the same as the one in the general calendar so that romcal recognizes it for overriding. Typos (even case mismatch), will cause unexpected results.

## Removing general dates in national calendar output <a name="removingDates"></a>

By default, `romcal` _does not_ remove any celebrations in its output. Instead, prioritization (see above) is the preferred way to go about overriding celebrations to exhibit different characteristics.

However, in some cases, a national calendar may need to omit a celebration entirely from its output. For example, the possible reasons could be:
- that the given celebration is entirely irrelevant to the observances of the nation;
- when a celebration of two or more saints are celebrated jointly in the `general` calendar, but separately in the national calendar;
- when a celebration of two or more saints are celebrated separately in the `general` calendar, but jointly in the national calendar.

`romcal` enables this flexibility via the `drop` key.

### The `drop` keyword <a name="dropKeyword"></a>

When defined, the `drop` key should contain a `boolean` value of `true` to indicate that the given celebration should be _removed_ from the calendar output.

Usually, this means excluding a celebration defined in `src/calendars/general.js`. The construct would be defined in the relevant `national` calendar and look like this:

```javascript
{
  "key": "",
  "drop": true
}
```

Note: When defining `drop`, only the key of the celebration is mandatory. Other keys do not have to be defined. `drop` operations also have higher precedence than overriding (meaning, they are run first before prioritization logic).

## Localizing celebration names <a name="localization"></a>

Celebration names in romcal can be localized to any language that is already supported by [Moment i18n](http://momentjs.com/docs/#/i18n/).

Locales are stored as `.js` files in the `src/locales` directory.

If the given locale contains a region (the second group of letters after a hyphen, e.g. for `fr-CA`, the `CA` represents the region), a base language will be set as a locale fallback (`fr` in our example).

A locale can have one or two fallbacks. `en` is the default locale in romcal and always serves as the last fallback.

Fallbacks are used when a string in the specified locale is not defined in the `src/locales` directory or the given key does not exist in any of previous the locale(s).

For example, a given locale containing region (like `fr-CA`) will gracefully fall back to `fr` if a localization key isn’t in `fr-CA`, or if `fr-CA.js` doesn’t exits in the `src/locales` directory. In the end, it always falls back to `en`, which is the default language in romcal. This should be used also to make the localisation files smaller, i.e. when the locale containing region has a particular string translated the same way as the main locale (e.g. `fr`), we should not localise that particular string in the locale containing region.

The structure of the locale file is typically like so:

```javascript
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

The first 7 objects define locale keys used by `src/lib/Seasons.js` when generating litugical dates.

The `celebrations`, `general` and `national` objects will hold localizations for `src/lib/Celebrations.js`, `src/calendars/general.js` and `src/calendars/<country>.js` respectively where the celebrations `key` is used as the identifier for localization purposes.

See the end of these files to see the function that localizes the dates according to their keys.

#### Utils.localize()

romcal uses the utility function `Utils.localize()` to resolve the correct locale string based on the given key.
The function accepts several parameters:

```javascript
Utils.localize({
  key: '',
  week: 0,
  count: 0
});
```

- `key`: A dot deliminated string representing the locale key (`celebrations.christmas`)
- `week`: A non zero integer for weeks which will be converted to its ordinal representation (1st Sunday of Advent)
- `count`: A non zero integer for days which will be converted to its ordinal representation (2nd Sunday of Christmas)
