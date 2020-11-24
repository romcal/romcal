<h1 align="center">
  <a href="https://github.com/romcal/romcal">
    <img alt="romcal" src="https://user-images.githubusercontent.com/1045997/89793747-854ede00-db26-11ea-8e46-837ab4ca0a96.png">
  </a>
</h1>

<p align="center">
  Generates the liturgical calendar of the Catholic Church used by the Roman Rite (post-Vatican II).
</p>

<p align="center">
  Supports Node v12+, Browsers (IE11+).
</p>

<p align="center">
  <a href="LICENSE"><img alt="License" src="https://img.shields.io/github/license/romcal/romcal?color=blue&style=flat-square"></a>
  <a href="https://www.npmjs.com/package/romcal" target="_blank" rel="noopener noreferrer"><img alt="Downloads" src="https://img.shields.io/npm/dm/romcal?color=blue&style=flat-square"></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/romcal/v/latest" target="_blank" rel="noopener noreferrer"><img alt="latest" src="https://img.shields.io/npm/v/romcal/latest?style=flat-square&logo=npm"></a>
  <a href="https://www.npmjs.com/package/romcal/v/beta" target="_blank" rel="noopener noreferrer"><img alt="beta" src="https://img.shields.io/npm/v/romcal/beta?style=flat-square&logo=npm"></a>
  <a href="https://www.npmjs.com/package/romcal/v/alpha" target="_blank" rel="noopener noreferrer"><img alt="alpha" src="https://img.shields.io/npm/v/romcal/alpha?style=flat-square&logo=npm"></a>
</p>

<p align="center">
  <a href="https://travis-ci.org/romcal/romcal/branches" target="_blank" rel="noopener noreferrer"><img alt="master" src="https://img.shields.io/travis/romcal/romcal.svg?label=master&style=flat-square&logo=travis"></a>
  <a href="https://travis-ci.org/romcal/romcal/branches" target="_blank" rel="noopener noreferrer"><img alt="test" src="https://img.shields.io/travis/romcal/romcal.svg?label=test&style=flat-square&logo=travis"></a>
  <a href="https://travis-ci.org/romcal/romcal/branches" target="_blank" rel="noopener noreferrer"><img alt="dev" src="https://img.shields.io/travis/romcal/romcal.svg?label=dev&style=flat-square&logo=travis"></a>
</p>

## Documentation

**Quick start** (below on this page)

- [Description](#description)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [Revisions & Release History](#revisions)
- [Module Robustness & Data Integrity](#disclaimer)
- [Credits](#credits)
- [License](#license)

**Main usages**

- [General use of romcal ⇗](/docs/general-usage.md)
- [Output data and JSON schema ⇗](/docs/data-output.md)

**Contribute**

- [Install, Build, Run and Test romcal locally ⇗](/docs/contribute-to-romcal.md)
- [Localization ⇗](/docs/localization.md)
- [Calendar definitions and contributions ⇗](/docs/calendar-definitions.md)
- [Codebase Documentation ⇗](https://romcal.github.io/romcal/)

## Description

romcal generates the liturgical calendar of the Catholic Church used by the Roman Rite (post-Vatican II).
Output conforms to the revised liturgical calendar as approved by Paul VI in [Mysterii Paschalis](http://w2.vatican.va/content/paul-vi/en/motu_proprio/documents/hf_p-vi_motu-proprio_19690214_mysterii-paschalis.html) dated 14 February 1969.
The rules are defined in the [_General Instruction on the Roman Missal_](https://www.catholicculture.org/culture/library/view.cfm?recnum=337) (GIRM) and the [_General Norms for the Liturgical Year and the Calendar_](https://www.catholicculture.org/culture/library/view.cfm?id=10842).

- :date: **Perpetual calendar:**<br> romcal allows querying liturgical dates for any year in the standard calendar.
  Note that dates for years before 1969 will still be returned in a format conforming to the calendar reforms of 1969, even though those years came before this calendar reform.

- :gear: **Configure and refine output:**<br> output can be configured for the civil calendar year, i.e. the Gregorian year (`Jan 1` to `Dec 31`) or the liturgical year (`First Sunday of Advent` to `Christ the King`).
  You can filter queries to allow more streamlined date results to be obtained for the year. Additional output options are described below in the usage section.

- :globe_with_meridians: **i18n, localization and calendars:**<br> romcal aims to have your liturgical calendars and contents in your native language, and support various liturgical calendars (national, diocesan...).
  You are more than welcome to contribute, add new localization, and improve the quality of this library!

## Install

Install via **npm**:

```
$ npm install romcal
```

Install via **Yarn**:

```
$ yarn add romcal
```

Additionally, romcal is also available for installation via various "release tags" that represent different stages of development for a given version of the code.

- [`latest`](href="https://www.npmjs.com/package/romcal/v/latest)
  The latest, stable and production-ready version of romcal is always released on the `master` branch. Releases on this branch are tagged in `npm` using the `latest` tag and can be installed via `npm install romcal@latest` or simply `npm install romcal` which defaults to the `latest` tag.

- [`beta`](href="https://www.npmjs.com/package/romcal/v/beta)
  The release candidate for production. Code here is mostly stable but may still lack some tests and so may be subject to some unexpected behavior. Install via `npm install romcal@beta`.

- [`alpha`](href="https://www.npmjs.com/package/romcal/v/alpha)
  The unstable development release tag. Code here might be unstable and untested. Use at your own risk! Normally, only developers would use this release for testing purposes. Install via `npm install romcal@alpha`.

- [`canary`](href="https://www.npmjs.com/package/romcal/v/canary)
  Bleeding edge features; high levels of code instability. Consumers should almost always never need to install these releases as they contain ongoing work that is not complete for general use. Install via `npm install romcal@canary`.

## Usage

Require romcal in your project:

```javascript
var Romcal = require('romcal');
```

or as a CommonJS module:

```javascript
import Romcal from 'romcal';
```

or in a webpage for direct usage on browsers:

```html
<script type="text/javascript" src="node_modules/romcal/dist/es5/romcal.bundle.min.js"></script>
```

Including romcal directly in the browser will result in an object called `romcal` being attached to the DOM `window` object.
All the functions below will exist as properties of the Romcal object.

Invoke the `.calendarFor` method to retrieve an array of liturgical dates and celebrations in the Roman Calendar.
This method accepts an object of configuration properties to obtain customized output.

```javascript
Romcal.calendarFor({
  year: 2020,                               // the calendar year to compute.
  scope: 'gregorian' | 'liturgical',        // 'gregorian': Jan 1 to Dec 31 ; or 'liturgical': the first Sunday of Advent to the last Saturday of Ordinary Time
  country: 'unitedStates',                  // the 'general' calendar or any particular calendar
  locale: 'en',                             // to get calendar data in the desired locale
  epiphanyOnSunday: true | false,           // Epiphany always a Sunday (between January 2 - 8), or on January 6
  corpusChristiOnSunday: true | false,      // Corpus Christi always a Sunday, or the Thursday after Trinity Sunday
  ascensionOnSunday: true | false,          // Ascension always a Sunday, or the 40th day of Easter (a Thursday)
  outputOptionalMemorials: true | false,    // also output available optional memorials, in addition of a weedkay
  verbose: true | false,                    // enable logging output from romcal
  prettyPrint: true | false,                // prettify logs printed in the console, for a better experience in development environnements
}).then(function (calendar) {
  console.log(calendar);
});
```

For further information about these properties and the default options: :books: [Configuration options](docs/general-usage.md#configuration-options).

A similar `.liturgicalDayFor` method is also available to retrieve data for a specific date only.
The first parameter is a `Date` object, the second is the optional configuration properties (as for the `.calendarFor`).

e.g. to obtain today's liturgical day:

```javascript
Romcal.liturgicalDayFor(new Date(), {
  country: 'france',
  locale: 'fr',
}).then(function (today) {
  console.log(today);
});
```

Please note that `.calendarFor` and `.liturgicalDayFor` are **async**. For further information in general: :books: [General use of romcal](/docs/general-usage.md).

This 2 methods produces an `Array` of `LiturgicalDay` objects (by default, one object per each day of the year):

```json5
[
  {
    key: 'maryMotherOfGod',
    name: 'Mary, Mother of God',
    date: '2020-01-01T00:00:00.000Z',
    rank: 'SOLEMNITY',
    rankName: 'Solemnity',
    liturgicalColors: ['WHITE'],
    seasons: ['CHRISTMASTIDE'],
    seasonNames: ['Christmas'],
    periods: ['CHRISTMAS_OCTAVE'],
    cycles: {
      sundayCycle: 'YEAR_A',
      weekdayCycle: 'YEAR_2',
      psalterWeek: 'WEEK_2',
    },
    calendar: {
      totalWeeksInGregorianYear: 53,
      totalWeeksInLiturgicalYear: 52,
      weekOfGregorianYear: 1,
      weekOfLiturgicalYear: 5,
      weekOfSeason: 2,
      dayOfGregorianYear: 1,
      dayOfLiturgicalYear: 32,
      dayOfSeason: 8,
      dayOfWeek: 3,
      dayOfWeekCountInMonth: 1,
      startOfLiturgicalYear: '2019-12-01T00:00:00.000Z',
      endOfLiturgicalYear: '2020-11-28T00:00:00.000Z',
      easter: '2020-04-12T00:00:00.000Z',
    },
    fromCalendar: 'general',
    fromExtendedCalendars: [],
    metadata: {
      titles: [],
    },
  },
  // ...
]
```

For further information: :books: [Output data and JSON schema](docs/data-output.md).

## Contribute

romcal is an open source project, this means you are more than welcome to contribute!
Especially to find bugs or write new tests, verify or complete calendars, or pull new localization.

To jump into romcal’s codebase more easily, you might be interested in reading:

- :books: [Contributing Guide](CONTRIBUTING.md).
- :books: [Install, Build, Run and Test romcal locally](docs/contribute-to-romcal.md).
- :books: [Localization](/docs/localization.md).
- :books: [Codebase Documentation](https://romcal.github.io/romcal/).

## Revisions & Release History <a name="revisions"></a>

See [history](HISTORY.md) for the latest updates and important/breaking changes.

## Module Robustness & Data Integrity <a name="disclaimer"></a>

**romcal’s code logic** aim to be fully compliant with the [_General Instruction on the Roman Missal_](https://www.catholicculture.org/culture/library/view.cfm?recnum=337) (GIRM) and the [_General Norms for the Liturgical Year and the Calendar_](https://www.catholicculture.org/culture/library/view.cfm?id=10842).

**Calendar entries** are pulled from the missal and official sources for the _General Roman Calendar_. Other calendar entries are pulled from various liturgical books and sources from the internet (when we don't have access to the missal or official proper books of the country / region). As such the accuracy for all calendars might not be ensured.
If you find an incorrect calendar entry (e.g. wrong date, wrong feast rank, spelling issue, typos), you are most welcome to contribute or inform the team on the GitHub issue tracker, so that the necessary changes can be made to make this a more robust and reliable module.

## Credits

This node module is inspired by the C program [romcal](http://www.romcal.net/) written by Kenneth G. Bath. This module, while exhibiting similar output, is written ground up using different tools and technologies and exposes many new functionalities.

Additional credits for bug fixes, localization and suggestions can be seen at [here](./AUTHORS.md).

## License

[MIT](LICENSE)

<p align="center">
  <a href="https://github.com/romcal/romcal">
    <img alt="romcal-icon" src="https://user-images.githubusercontent.com/1045997/89793396-1c676600-db26-11ea-9426-991ac1e32b82.png">
  </a>
</p>
