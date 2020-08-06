[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge
[license-url]: LICENSE
[npm-url]: https://www.npmjs.com/package/romcal
[npm-downloads-image]: https://img.shields.io/npm/dm/romcal.svg?style=for-the-badge&logo=npm
[travis-prod-image]: https://img.shields.io/travis/romcal/romcal.svg?label=master&style=for-the-badge&logo=travis
[travis-test-image]: https://img.shields.io/travis/romcal/romcal.svg?label=test&style=for-the-badge&logo=travis
[travis-dev-image]: https://img.shields.io/travis/romcal/romcal.svg?label=dev&style=for-the-badge&logo=travis
[travis-canary-image]: https://img.shields.io/travis/romcal/romcal.svg?label=canary&style=for-the-badge&logo=travis
[travis-url]: https://travis-ci.org/romcal/romcal/branches
[npm-latest-version]: https://img.shields.io/npm/v/romcal/latest?style=for-the-badge&logo=npm
[npm-beta-version]: https://img.shields.io/npm/v/romcal/beta?style=for-the-badge&logo=npm
[npm-alpha-version]: https://img.shields.io/npm/v/romcal/alpha?style=for-the-badge&logo=npm
[npm-canary-version]: https://img.shields.io/npm/v/romcal/canary?style=for-the-badge&logo=npm
[npm-canary-url]: https://www.npmjs.com/package/romcal/v/canary
[npm-alpha-url]: https://www.npmjs.com/package/romcal/v/alpha
[npm-beta-url]: https://www.npmjs.com/package/romcal/v/beta
[npm-latest-url]: https://www.npmjs.com/package/romcal/v/latest

[![License][license-image]][license-url]
[![NPM Downloads][npm-downloads-image]][npm-url]

[![Master branch build status][travis-prod-image]][travis-url]
[![Test branch build status][travis-test-image]][travis-url]
[![Development branch build status][travis-dev-image]][travis-url]
[![Canary branch build status][travis-canary-image]][travis-url]

[![Latest version][npm-latest-version]][npm-latest-url]
[![Test version][npm-beta-version]][npm-beta-url]
[![Development version][npm-alpha-version]][npm-alpha-url]
[![Unstable version][npm-canary-version]][npm-canary-url]

# Romcal

Utility library that outputs the Liturgical Calendar used by the Roman Rite (Western Church) for Node JS v6 and above.

## Contributing to romcal

Contributions are welcome!

Please fork/raise merge requests or issues to improve the quality of this module.

I especially reach out to you all for help with translations/localizations of celebration names so that this module can cater to a wider audience.

See [contributing](CONTRIBUTING.md) for more information.

## Table of Contents

- [Romcal](#romcal)
  - [Contributing to romcal](#contributing-to-romcal)
  - [Table of Contents](#table-of-contents)
  - [Description <a name="desc"></a>](#description)
  - [Revisions <a name="revisions"></a>](#revisions)
  - [Credits <a name="credits"></a>](#credits)
  - [Features <a name="features"></a>](#features)
  - [Module Robustness & Data Integrity <a name="disclaimer"></a>](#module-robustness--data-integrity)
    - [Testing romcal](#testing-romcal)
  - [Builds <a name="builds"></a>](#builds)
  - [Usage <a name="usage"></a>](#usage)
    - [Installation as a node module](#installation-as-a-node-module)
    - [Using the module](#using-the-module)
    - [Configuration Options <a name="configOpts"></a>](#configuration-options)
    - [Output formatter <a name="outputFormatter"></a>](#output-formatter)
    - [JSON Structure <a name="jsonStructure"></a>](#json-structure)
  - [Celebration Types <a name="types"></a>](#celebration-types)
  - [Celebration Titles <a name="titles"></a>](#celebration-titles)
  - [Liturgical Seasons <a name="seasons"></a>](#liturgical-seasons)
  - [Liturgical Cycles: Years and Weeks <a name="cycles"></a>](#cycles)
  - [Liturgical Colors <a name="colors"></a>](#liturgical-colors)
  - [Calendar sources <a name="sources"></a>](#calendar-sources)
    - [liturgical <a name="liturgical"></a>](#liturgical)
    - [celebrations <a name="celebrations"></a>](#celebrations)
    - [general <a name="general"></a>](#general)
    - [national <a name="national"></a>](#national)
  - [Queries <a name="queries"></a>](#queries)
    - [Filtering calendar output by month of year or day of week <a name="filterByMonthOrDay"></a>](#filtering-calendar-output-by-month-of-year-or-day-of-week)
    - [Grouping calendar output by criteria <a name="groupingByCriteria"></a>](#grouping-calendar-output-by-critieria)
    - [Filtering calendar output by celebration title metadata <a name="filterByTitle"></a>](#filtering-calendar-output-by-celebration-title-metadata)
  - [Multiple queries <a name="multipleQueries"></a>](#multiple-queries)
  - [Overriding dates <a name="overridingDates"></a>](#overriding-dates)
    - [Overriding a date by its calendar source <a name="overridingBySource"></a>](#overriding-a-date-by-its-calendar-source)
    - [Overriding a date by its priority <a name="overridingByPriority"></a>](#overriding-a-date-by-its-priority)
    - [Overriding a date by its key <a name="overridingByKey"></a>](#overriding-a-date-by-its-key)
  - [Removing general dates in national calendar output <a name="removingDates"></a>](#removing-general-dates-in-national-calendar-output)
    - [The `drop` keyword <a name="dropKeyword"></a>](#the-drop-keyword)
  - [Localizing celebration names <a name="localization"></a>](#localizing-celebration-names)
    - [Utils.localize()](#utilslocalize)

## Description <a name="desc"></a>

romcal generates the [General Roman Calendar](http://en.wikipedia.org/wiki/General_Roman_Calendar) used in the Roman Catholic Rite. Output conforms to the revised liturgical calendar for the Western Church as approved by Paul VI in [Mysterii Paschalis](http://www.romcal.net/mysterii.html) dated 14 February 1969.

Output can be configured for the standard calendar year (Jan, 1st - Dec, 31st) or the liturgical year (First Sunday of Advent - Christ the King). Additional filters for filtering output are also available (described below).

## API Documentation

`TL;DR`?

Go [here](https://romcal.github.io/romcal/) to see the API documentation of this module.

## Revisions <a name="revisions"></a>

See [history](HISTORY.md) for latest updates and important/breaking changes.

## Credits <a name="credits"></a>

This node module is inspired by the C program [romcal](http://www.romcal.net/) written by Kenneth G. Bath. This module, while exhibiting similar output, is written ground up using different tools and technologies and exposes many new functionalities.

Additional credits for bug fixes, localizations and suggestions can be seen at [here](./AUTHORS.md).

## Features <a name="features"></a>

- Able to query liturgical dates for any year in the gregorian calendar (1582 - now). Note that dates for years before 1969 will still be returned in a format conforming to [Mysterii Paschalis](http://www.romcal.net/mysterii.html) even though those years came before the calendar reforms in 1969.
- Filter queries to allow more streamlined date results to be obtained for the year.
- Localization of liturgical date names to cater for different languages.
- National liturgical calendars for country specific calendars.
- Richly commented code to help developers and contributors understand how the module works.

NOTE: This module uses [Lodash](http://lodash.com/) for calculations and operations.

## Module Robustness & Data Integrity <a name="disclaimer"></a>

_Calendar entries for this module are pulled from various sources from the net. As such their accuracy cannot be ensured. If you find an incorrect calendar entry (e.g. wrong date, wrong feast type, spelling issue, typos), you are most welcome to contribute to the source code or inform me so that the necessary changes can be made to make this a more robust and reliable module._

_romcal’s code logic is developed according to calendar requirements descibed in various church documents sourced from the internet (and even from Wikipedia). If you notice discrepancies between romcal’s output and actual liturgical dates, please do contribute your fixes or submit an issue on GitHub._

### Testing romcal <a name="testing-romcal"></a>

romcal code is unit tested using the [jest](https://jestjs.io/) framework.

:heavy_check_mark: [TravisCI](https://travis-ci.org/romcal/romcal) automates test runs to ensure that romcal's functionality is working as expected.

[package.json](./package.json#L21) exposes test scripts:

- For running all test suites in a single run:

```bash
npm test
```

- For running all test suites and then watch the source directory for changes:

```bash
npm run test:watch
```

- For testing a single file during development,

```bash
npm run test -t ./src/utils/object.test.ts
```

_pass the `-t` flag and the path of the file_

### Coverage reporting

A coverage report is generated for every core branch build and published to [gh-pages]().

## Builds <a name="builds"></a>

The romcal source code is actually the same for backend and frontend usage. To make it working on the frontend side, the frontend library is wrapped and built thanks to `webpack`. This build step is done automatically when you perform a `npm install` on the romcal directory.

But if you have edited the codebase, you can update manually the frontend library with this command:

```bash
npm run build
```

The frontend library is generated in the `dist` folder, not included in the romcal codebase. When built, it contains `romcal.bundle.min.js`, a minified and obfuscated bundle of romcal + all its dependencies wrapped in a UMD module shell that is suitable for being included directly in browsers.

## Usage <a name="usage"></a>

### Installation as a node module

Add romcal to your project via npm:

```bash
$ npm install romcal --save
```

Additionally, romcal is also available for installation via various "release tags" that represent different stages of development for a given version of the code.

- `latest`
  The latest, stable and production ready version of romcal is always released on the `master` branch. Releases on this branch are tagged in `npm` using the `latest` tag and can be installed via `npm install romcal@latest` or simply `npm install romcal` which defaults to the `latest` tag.

- `beta`
  The release candidate for production. Code here is mostly stable but may still lack some tests and so may be subject to some unexpected behavior. Install via `npm install romcal@beta`.

- `alpha`
  The unstable development release tag. Code here might be unstable and untested. Use at your own risk! Normally, only developers of would use this release for testing purposes. Install via `npm install romcal@alpha`.

- `canary`
  Bleeding edge features; high level of code instability. Consumers should almost always never need to install these releases as they containing ongoing work that is not complete for general use. Install via `npm install romcal@canary`.

### Using the module

Require romcal in your node project:

```javascript
var romcal = require('romcal');
```

or as a CommonJS module

```javascript
import romcal from 'romcal';
```

or in a webpage for direct usage on browsers

```html
<script type="text/javascript" src="romcal.bundle.min.js"></script>
```

Including romcal directly in the browser will result in an object called `Romcal` being attached to the DOM `window` object. All the functions below will exist as properties of the `Romcal` object.

Invoke the `calendarFor` method to retrieve an array of liturgical dates and celebrations in the Roman Calendar. This method accepts an object (optional) of configuration properties to obtain customized output.

```javascript
romcal.calendarFor(
  {
    year: 2020,
    country: 'unitedStates',
    locale: 'pl',
    christmastideEnds: 't|o|e',
    epiphanyOnSunday: true | false,
    christmastideIncludesTheSeasonOfEpiphany: true | false,
    corpusChristiOnSunday: true | false,
    ascensionOnSunday: true | false,
    outputOptionalMemorials: true | false,
    type: 'calendar|liturgical',
    query: {
      day: 0 - 6, // 0 - Sunday, 6 - Saturday (week beginning with Sunday)
      month: 0 - 11, // 0 - Jan, 11 - Dec (month begining with Jan)
      group: '',
      title: '',
    },
  },
  true | false,
);
```

### Configuration Options <a name="configOpts"></a>

- `year`: Retrieve calendar dates for the given year (year should be an integer). Defaults to the current system year if not specified
- `country`: Include celebration dates requested by the Episcopal council(s) of the given country that were approved by the Holy See. If not specified, no National dates are included in the calendar output. If an unrecognized country is specified, romcal will silently ignore the property and will not return any National dates in the calendar output. Country names should be specified in camel case (i.e. `unitedStates`, `czechRepublic`).
- `locale`: Defaults to `en` (English) if not set. romcal celebration names can be localized to different languages. If a given locale does not have the localized name for a celebration in that language, romcal will fall back to use the celebration name in the base language (if a region was specified in the locale), and finally in English. More details on locales management in the [localization](#localization).
- `christmastideEnds`: Specifies the end of the Christmas season. Can be either `t` (traditional where Christmastide ends on Epiphany), `o` (ordinary where Christmastide ends on the Baptism of the Lord) and `e` (extraordinary where Christmastide ends on the Presentation of the Lord). Defaults to `o` if not specified
- `epiphanyOnSunday`: If `false`, fixes Epiphany on January 6th. Usually, Epiphany will be set to a Sunday between the 2nd - 8th Jan based on an internal calculation. Defaults to `true`.
- `christmastideIncludesTheSeasonOfEpiphany`: If `false`, the season of epiphany (i.e. days before Epiphany and days after Epiphany) will not appear within the Christmastide. `true` by default.
- `corpusChristiOnSunday`: Determines if Corpus Christi should be celebrated on Sunday (63 days after Easter) or on Thursday of the 7th week of Easter (60 days after Easter). Defaults to `true` (Corpus Christi is celebrated on Sunday by default).
- `ascensionOnSunday`: Determines if Ascension should replace the 7th Sunday of Easter (42 days after Easter). Defaults to `false` where Ascension will be on Thursday, 39 days after Easter, if value not recognized or specified.
- `outputOptionalMemorials`: If `true`, also includes optional celebrations that could be celebrated on each day: optional memorials or commemorations. Defaults to `false`.
- `type`: Determines the type of calendar output. Can either be `liturgical` or `calendar`. Defaults to `calendar` if value not recognized or specified. The `liturgical` year runs from 1st Sunday of Advent of the given year to Saturday of the 34th Week of Ordinary Time in the following year. The civil year on the other hand refers to the standard year from Jan 1 - Dec 31.
- `query`: A nested query object which filters the dates according to the given criteria. For more details on how to use queries, see [Queries](#queries) section.

### Output formatter <a name="outputFormatter"></a>

romcal can be invoked without parameters or via shorthand properties like so:

```javascript
// Get calendar year dates (1st Jan - 31st Dec) for the current year
romcal.calendarFor();

// Get calendar year dates for the specified year
romcal.calendarFor(2020);
```

### JSON Structure <a name="jsonStructure"></a>

romcal returns an array of liturgical date objects in the following structure

```javascript
[
  {
    key: '',
    name: '',
    type: '',
    date: '',
    source: '',
    data: {
      prioritized: boolean,
      season: '',
      meta: {
        liturgicalColor: {},
        titles: [],
      },
    },
  },
];
```

- `key`: A camel case string which serves as a unique identifier for the celebration. This key is an essential element in [overriding dates](#overriding)
- `name`: The [localisable name](#localizing) of the celebration
- `type`: A key representing the [celebration type](#types)
- `date`: Date of the celebration as a ISO8601 string
- `source`: The internal calendar [source](#sources) of this celebration
- `data`: An object that holds additional information about the celebration
  - prioritized: A optional boolean that when true, gives the celebration higher priority over another coinciding celebration even though that celebration has a higher ranking type. This flag should be used with caution.
  - season: Required: A string that identifies the liturgical season this celebration belongs to
  - meta:
    - liturgicalColor: The [liturgical color](#colors) assigned for this celebration (usually follows the liturgical season but may defer if this celebration is a solemnity, feast or memorial)
    - titles: An array of [titles](#titles) that may be assigned to this celebration

## Celebration Types <a name="types"></a>

Each date in the liturgical calendar is assigned a type. romcal defines these types in `src/constants/TypesEnum.js` which are:

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

Types play an important role in determining which celebration should take precedence over another when two or more celebrations coincide on the same date. Certain celebration types will also have different liturgical colors applied to them.

The array of types can be imported into consumer apps via:

```javascript
import { Types } from 'romcal';
```

## Celebration Titles <a name="titles"></a>

On top of having a celebration type, liturgical dates may also have one or more titles of significance assigned to it.

For example, the feast of [Saint Catherine of Siena](https://en.wikipedia.org/wiki/Catherine_of_Siena) is assigned the titles `PATRON_OF_EUROPE` (for national calendars of countries in Europe only) and `DOCTOR_OF_THE_CHURCH` due to those titles being conferred on her by the Church.

romcal defines liturgical seasons in `src/constants/TITLES.js` which are:

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

romcal defines liturgical seasons in `src/constants/LITURGICAL_SEASONS.js` which are:

- `ADVENT`
- `CHRISTMASTIDE`
- `EARLY_ORDINARY_TIME`
- `LATER_ORDINARY_TIME`
- `LENT`
- `HOLY_WEEK`
- `EASTER`

Methods in `src/lib/Seasons.js` assigns seasons to the dates it generates to indicate the season to which the range of dates generated belong.

The LITURGICAL_SEASONS object can be imported into consumer apps via:

_ES6_

```javascript
import { LITURGICAL_SEASONS } from 'romcal';
```

_CommonJS_

```javascript
var LITURGICAL_SEASONS = require('romcal').LITURGICAL_SEASONS;
```

## Liturgical Cycles: Years and Weeks <a name="cycles"></a> (`RomcalCycles`)

A liturgical year consists of cycles that determines which portions of scripture are to be read.
And inside every liturgical year, another psalter week cycle will determine which psalms and prayer to follow for the liturgy of hours.

Romcal automatically calculates the correct cycles for the given liturgical date.
Cycle information can be read via the `dates[idx].cycles` property in each date element in the array that `calendarFor` returns:

```typescript
{
  sundayCycle: 'A' | 'B' | 'C';
  ferialCycle: 1 | 2;
  psalterWeek: 'WEEK_1' | 'WEEK_2' | 'WEEK_3' | 'WEEK_4';
}
```

### Sunday cycle (`RomcalSundayCycle`)

Used mainly for sunday readings, and some solemnity.

- `Year A` denoted by the key `A`
- `Year B` denoted by the key `B`
- `Year C` denoted by the key `C`

### Ferial cycle (`RomcalFerialCycle`)

Used mainly for weekdays readings.

- `Year 1` or `Odd year` denoted by the key `1`
- `Year 2` or `Even year` denoted by the key `2`

### Psalter weeks (`PsalterWeek`)

With the exception of the Easter Octave, each week in the liturgical year is assigned readings from the [Psalter](https://en.wikipedia.org/wiki/Roman_Breviary#The_Psalter).
The psalter week cycle is composed of a repeated sequence of 4 four weeks. It restarts at the beginning of each season.
There are also some rules that govern the set of Psalter readings used on particular occasions or seasons of the year.

For convenient usage, romcal provides the psalter week number for all seasons:

- `Week I` denoted by the key `WEEK_1`
- `Week II` denoted by the key `WEEK_2`
- `Week III` denoted by the key `WEEK_3`
- `Week IV` denoted by the key `WEEK_4`

---

The cycle objects can be imported into consumer apps via:

_ES6_

```javascript
import { LITURGICAL_SUNDAY_CYCLES, LITURGICAL_FERIAL_CYCLES, PSALTER_WEEKS } from 'romcal';
```

_CommonJS_

```javascript
var LITURGICAL_SUNDAY_CYCLES = require('romcal').LITURGICAL_SUNDAY_CYCLES;
var LITURGICAL_FERIAL_CYCLES = require('romcal').LITURGICAL_FERIAL_CYCLES;
var PSALTER_WEEKS = require('romcal').PSALTER_WEEKS;
```

## Liturgical Colors <a name="colors"></a>

[Liturgical colours are those specific colours used for vestments and hangings within the context of Christian liturgy. The symbolism of violet, white, green, red, gold, black, rose and other colours may serve to underline moods appropriate to a season of the liturgical year or may highlight a special occasion.](https://en.wikipedia.org/wiki/Liturgical_colours)

romcal defines 6 colors in `src/constants/LITURGICAL_COLORS.js` which are:

- `RED`
- `ROSE`
- `PURPLE`
- `GREEN`
- `WHITE`
- `GOLD`

More information on how these colors are used for celebration can be found [here](https://en.wikipedia.org/wiki/Liturgical_colours#Roman_Catholic_Church)

Liturgical colors can be read via the `dates[idx].data.meta.liturgicalColor` property in each date element in the array that `calendarFor` returns.

The LITURGICAL_COLORS object can be imported into consumer apps via:

_ES6_

```javascript
import { LITURGICAL_COLORS } from 'romcal';
```

_CommonJS_

```javascript
var LITURGICAL_COLORS = require('romcal').LITURGICAL_COLORS;
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

Represents central celebrations observed in the Roman Catholic rite. They take precedence and will replace coinciding dates from the `liturgical` calendar or `general` calendar.

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

A prioritized celebration in the `national` calendar takes precedence over celebrations in `general`, `celebrations` and `liturgical` calendars. As such, this marker should be used with caution as it may cause national events to override important celebrations that should not be overridden.

In situations when there are 2 celebrations from a `national` calendar that coincide on the same date, the one with the higher ranking celebration type will take precedence.

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
    month: 0, // 0 - 11 (Jan = 0, Dec = 11)
  },
});

Calendar.calendarFor({
  query: {
    day: 0, // 0 - 6 (0 = Sunday, 6 = Saturday)
  },
});
```

or

```javascript
import { Calendar } from 'romcal';

let dates = Calendar.calendarFor();

let datesGroupedByDay = Calendar.queryFor(dates, {
  day: 0, // 0 - 6
});

let datesGroupedByMonth = Calendar.queryFor(dates, {
  month: 0, // 0 - 11
});
```

### Grouping calendar output by criteria <a name="groupingByCriteria"></a>

Calendar dates can be grouped by various criteria upon invocation like so:

```javascript
import { Calendar } from 'romcal';

Calendar.calendarFor({
  query: {
    group: 'days|months|daysByMonth|weeksByMonth|sundayCycles|ferialCycles|ranks|liturgicalSeasons|liturgicalColors|psalterWeeks',
  },
});
```

Or invoking the query function at a later point

```javascript
import { Calendar } from 'romcal';

let dates = Calendar.calendarFor();

// Some code,
// then ...

let groupedCalendar = Calendar.queryFor(dates, {
  group: 'days|months|daysByMonth|weeksByMonth|sundayCycles|ferialCycles|ranks|liturgicalSeasons|liturgicalColors|psalterWeeks',
});
```

### Filtering calendar output by celebration title metadata <a name="filterByTitle"></a>

```javascript
romcal.calendarFor({
  query: {
    title: 'PATRON_OF_EUROPE',
  },
});
```

Other possible values can be checked [here](#titles).

## Multiple queries <a name="multipleQueries"></a>

It is possible to query for dates against multiple criteria:

```javascript
// Filter dates in January and group the results according to days
romcal.queryFor(dates, {
  month: 0,
  group: 'days',
});
```

## Overriding dates <a name="overridingDates"></a>

romcal is designed with extensibility in mind to cater for unique scenarios that are common in the liturgical calendar.

### Overriding a date by its calendar source <a name="overridingBySource"></a>

The order of importance of calendar sources are: `celebrations` > `national` > `general` > `liturgical`.

### Overriding a date by its priority <a name="overridingByPriority"></a>

Prioritizing a date allows it to:

- Override a higher ranking `type` date object with the same key
- Prevent it from being overridden by other coinciding dates

A date can be prioritized by adding `prioritized`: `true` to the `data` object in the given date object. See `src/lib/Celebrations.js` for more examples.

All dates in `src/lib/Celebrations.js` (Christmas, Easter) are prioritized as they must override any other date in the liturgical calendar and cannot be overridden by any other coinciding date regardless of rank **unless** the coinciding date is itself prioritized

For example, `allSaints` in `src/lib/Celebrations.js` can be overridden by `allSaints` in `src/calendars/england.js`) because the entry in that `national` calendar was set with `prioritized`: `true`.

> :warning: If a coinciding date’s source is from the `celebration` or `national` calendars, _but_ the prioritized date is defined in the `general` calendar, it _will still be_ overridden by the coinciding date because `celebration` and `national` calendar sources have higher precedence (see [Overriding a date by its calendar source](#overridingBySource) section).

### Overriding a date by its key <a name="overridingByKey"></a>

In most countries, All Saints and All Souls are always celebrated on the 1st and 2nd of November respectively. However, in England and Wales, if All Saints (1 November) falls on a Saturday, it is transferred to the Sunday and All Souls is transferred to Monday 3rd November.

romcal implements this unique difference by overriding the `allSouls` and `allSaints` celebrations in the national calendars of `src/calendars/england.js` and `src/calendars/wales.js` (the original definition was in `src/calendars/general.js`). The overriding dates in these calendars define a IIFE callback function for the `date` property that holds logic for determining if the date should be moved.

Since national calendar dates have higher precedence than general calendar dates, the national date definitions for All Saints and All Souls will override the ones in the general calendar.

Also, since prioritized dates in the national calendar sources can override dates in celebration calendar sources, the date definitions for All Saints and All Souls will now be taken from the national calendar.

Therefore, it is important that the key in the national calendar is **exactly** the same as the one in the general calendar so that romcal recognizes it for overriding. Typos (even case mismatch), will cause unexpected results.

## Removing general dates in national calendar output <a name="removingDates"></a>

By default, romcal _does not_ remove any celebrations in its output. Instead, prioritization (see above) is the preferred way to go about overriding celebrations to exhibit different characteristics.

However, in some cases, a national calendar may need to omit a celebration entirely from its output. For example, the possible reasons could be:

- that the given celebration is entirely irrelevant to the observances of the nation;
- when a celebration of two or more saints are celebrated jointly in the `general` calendar, but separately in the national calendar;
- when a celebration of two or more saints are celebrated separately in the `general` calendar, but jointly in the national calendar.

romcal enables this flexibility via the `drop` key.

### The `drop` keyword <a name="dropKeyword"></a>

When defined, the `drop` key should contain a `boolean` value of `true` to indicate that the given celebration should be _removed_ from the calendar output.

Usually, this means excluding a celebration defined in `src/calendars/general.js`. The construct would be defined in the relevant `national` calendar and look like this:

```javascript
{
  key: "",
  date: dayjs.utc(),
  drop: true
}
```

> When defining `drop`, only the `key` and `date` properties of the celebration are mandatory. Other keys do not have to be defined. `drop` operations also have higher precedence than overriding (meaning, they are run first before prioritization logic).

## Localizing celebration names <a name="localization"></a>

Celebration names in romcal can be localized to any language that is already supported by [DayJS i18n](https://day.js.org/docs/en/i18n/i18n).

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

The first 7 objects define locale keys used by `src/lib/Seasons.js` when generating liturgical dates.

The `celebrations`, `general` and `national` objects will hold localizations for `src/lib/Celebrations.js`, `src/calendars/general.js` and `src/calendars/<country>.js` respectively where the celebrations `key` is used as the identifier for localization purposes.

See the end of these files to see the function that localizes the dates according to their keys.

#### Utils.localize()

romcal uses the utility function `Utils.localize()` to resolve the correct locale string based on the given key.
The function accepts several parameters:

```javascript
Utils.localize({
  key: '',
  week: 0,
  count: 0,
});
```

- `key`: A dot delimited string representing the locale key (`celebrations.christmas`)
- `week`: A non-zero integer for weeks which will be converted to its ordinal representation (1st Sunday of Advent)
- `count`: A non-zero integer for days which will be converted to its ordinal representation (2nd Sunday of Christmas)
