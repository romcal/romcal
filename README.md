<h1 align="center">
  <a href="https://github.com/romcal/romcal">
    <img alt="romcal" src="https://user-images.githubusercontent.com/1045997/89793747-854ede00-db26-11ea-8e46-837ab4ca0a96.png">
  </a>
</h1>

<p align="center">
  Generates liturgical calendars of the Roman Rite of the Roman Catholic Church.
</p>

<p align="center">
  Supports Node v18+, Modern Browsers (desktop and mobile).
</p>

<p align="center">
  <a href="LICENSE"><img alt="License" src="https://img.shields.io/github/license/romcal/romcal?color=blue&style=flat-square"></a>
  <a href="https://www.npmjs.com/package/romcal" target="_blank" rel="noopener noreferrer"><img alt="Downloads" src="https://img.shields.io/npm/dm/romcal?color=blue&style=flat-square"></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/romcal/v/latest" target="_blank" rel="noopener noreferrer"><img alt="latest" src="https://img.shields.io/npm/v/romcal/latest?style=flat-square&logo=npm"></a>
  <a href="https://www.npmjs.com/package/romcal/v/dev" target="_blank" rel="noopener noreferrer"><img alt="dev" src="https://img.shields.io/npm/v/romcal/dev?style=flat-square&logo=npm"></a>
</p>

<p align="center">
  <a href="https://www.codetriage.com/romcal/romcal" target="_blank" rel="noopener noreferrer"><img alt="Code Triage Helpers" src="https://www.codetriage.com/romcal/romcal/badges/users.svg" /></a>
</p>

> **Note**
> This project is still in beta (using the `dev` npm distribution tag) until it reaches final version 3.0.0. There could be breaking changes between minor versions. Please refer to the [changelog](CHANGELOG.md) for significant updates and breaking changes.

## Documentation

**Quick start** (below on this page)

- [Description](#description)
- [Getting started](#getting-started)
- [Basic samples](#basic-samples)
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

Romcal generates liturgical calendars of the Roman Rite of the Roman Catholic Church.
Output conforms to the revised liturgical calendar as approved by Paul VI in [Mysterii Paschalis](http://w2.vatican.va/content/paul-vi/en/motu_proprio/documents/hf_p-vi_motu-proprio_19690214_mysterii-paschalis.html) dated 14 February 1969.
The rules are defined in the [_General Instruction on the Roman Missal_](https://www.catholicculture.org/culture/library/view.cfm?recnum=337) (GIRM), the [_General Norms for the Liturgical Year and the Calendar_](https://www.catholicculture.org/culture/library/view.cfm?id=10842) (GNLY), and the [General Instructions of the Liturgy of the Hours](https://divineoffice.org/general-instructions/) (GILH).

- :date: **Perpetual calendar:**<br> romcal allows querying liturgical dates for any year in the standard calendar.
  Note that dates for years before 1969 will still be returned in a format conforming to the calendar reforms of 1969, even though those years came before this calendar reform.

- :gear: **Configure and refine output:**<br> output can be configured for the civil calendar year, i.e. the Gregorian year (`Jan 1` to `Dec 31`) or the liturgical year (`First Sunday of Advent` to `Christ the King`).
  You can filter queries to allow more streamlined date results to be obtained for the year. Additional output options are described below in the usage section.

- :globe_with_meridians: **i18n, localization and calendars:**<br> romcal aims to have your liturgical calendars and contents in your native language, and support various liturgical calendars (national, diocesan...).
  You are more than welcome to contribute, add new localization, and improve the quality of this library!

## Getting started

### Installation

Romcal can be added to your project using npm or yarn:

```bash
# npm
npm install romcal@dev

# yarn
yarn add romcal@dev
```

The default export is CommonJS compatible (`cjs`).

In the `/dist` folder you may find additional builds for es6 modules (`esm`) or to be used globally from the browser (`iife`).
The correct entry points are already configured in the package.json so there should be no extra setup to get the best build option.

### Calendars installation

The romcal library only include the General Roman Calendar (GRC), and the Proper of Time. By default, there is no other calendars, neither translation (even in English) nor extra martyrology metadata.

The complete GRC, and any other particular calendar (for a country, a region or a diocese) are available as separated plugins, that contain a bundle of the calendar data, localizations, and a martyrology catalog (containing extra metadata).

For example, to install the General Roman Calendar and the calendar of France:

```bash
# npm
npm install @romcal/calendar.general-roman@dev
npm install @romcal/calendar.france@dev

# yarn
yarn add @romcal/calendar.general-roman@dev
yarn add @romcal/calendar.france@dev
```

The complete list of localized calendar is [available here](./docs/calendar-plugins.md).

### Load from CDN

You can also directly add a script tag loading romcal from one of the CDNs providing it:

#### unpkg.com

- https://unpkg.com/romcal/dist/iife/romcal.js

esm or cjs:

- https://unpkg.com/romcal/dist/esm/romcal.js
- https://unpkg.com/romcal/dist/cjs/romcal.js

Make sure to use a fixed version in production like https://unpkg.com/romcal@3.0.0-dev.29/dist/cjs/romcal.js as passing no version will redirect to the latest version which might contain breaking changes in the future.

#### cdnjs.com

https://cdnjs.com/libraries/romcal

## Basic samples

### Initialize a Romcal object

Before generating any kind of data, you must first generate a `new Romcal()` object.

#### 1. Import Romcal

```ts
// as esm
import { Romcal } from 'romcal';
import { France_Fr } from '@romcal/calendar.france';
```

```ts
// or as cjs
const { Romcal } = require('romcal');
const { France_Fr } = require('@romcal/calendar.france');
```

```html
<!-- or as iife in a web HTML page -->
<script src="https://unpkg.com/romcal@3.0.0-dev.29/dist/iife/romcal.js"></script>
<script src="https://unpkg.com/@romcal/calendar.france@3.0.0-dev.29/iife/fr.js"></script>
```

#### 2. Initialize Romcal

With default options:

```ts
const romcal = new Romcal();
```

Or with any of the optional options:

```ts
// Initialize romcal (all options are optional)
const romcal = new Romcal({
  localizedCalendar: France_Fr, // The localized calendar to use with romcal
  scope: 'gregorian' | 'liturgical', // Default: 'gregorian' (Jan 1 to Dec 31). Optionally: 'liturgical' (the first Sunday of Advent to the last Saturday of Ordinary Time)
  epiphanyOnSunday: true | false, // Epiphany always a Sunday (between January 2 - 8), or on January 6
  corpusChristiOnSunday: true | false, // Corpus Christi always a Sunday, or the Thursday after Trinity Sunday
  ascensionOnSunday: true | false, // Ascension always a Sunday, or the 40th day of Easter (a Thursday)
});
```

For further information about romcal configuration and the default options: :books: [Configuration options](docs/general-usage.md#configuration-options).

You can also take a look to the [romcal/romcal-examples repository](https://github.com/romcal/romcal-examples), which contain additional examples:

- [html-web-page](https://github.com/romcal/romcal-examples/tree/main/html-web-page) – loading romcal in a HTML script tag (`iife`).
- [react-app](https://github.com/romcal/romcal-examples/tree/main/react-app) – a basic React application loading and displaying romcal data.
- [rest-api-with-express](https://github.com/romcal/romcal-examples/tree/main//rest-api-with-express) – a REST API using Node.js and Express, written as CommonJs (`cjs`).
- [rest-api-with-fastify](https://github.com/romcal/romcal-examples/tree/main//rest-api-with-fastify) – a REST API using Node.js and Fastify, written as ES Module (`esm`).

### Generate a calendar `.generateCalendar(year)`

The `year` parameter is optional.

Below, 2 examples to generate a calendar for a specific year or the current year.

```ts
// Get a romcal calendar for 2030, using a Promise:
romcal.generateCalendar(2030).then((data1) => {
  console.log(data1);
});

// Or get a romcal calendar for the current year, using async/await:
const data2 = await romcal.generateCalendar();
console.log(data2);
```

This method produces an `Object` of key/values, where the key is a date (as a ISO8601 string), and the value is an `Array` of `LiturgicalDay` objects that can occur on a specific day.
The first `LiturgicalDay` object is the default one, the following objects are optionals (e.g. optional memorials).

```json5
{
  key: 'mary_mother_of_god',
  name: 'Mary, Mother of God',
  date: '2020-01-01',
  precedence: 'GENERAL_SOLEMNITY_3',
  rank: 'SOLEMNITY',
  rankName: 'Solemnity',
  isHolyDayOfObligation: true,
  isOptional: false,
  colors: ['WHITE'],
  seasons: ['CHRISTMASTIDE'],
  seasonNames: ['Christmas'],
  periods: ['CHRISTMAS_OCTAVE'],
  martyrology: [],
  titles: [],
  cycles: {
    sundayCycle: 'YEAR_A',
    weekdayCycle: 'YEAR_2',
    psalterWeek: 'WEEK_2',
  },
  calendar: {
    weekOfSeason: 2,
    dayOfSeason: 8,
    dayOfWeek: 3,
    nthDayOfWeekInMonth: 1,
    startOfSeason: '2021-12-25',
    endOfSeason: '2022-01-09',
    startOfLiturgicalYear: '2021-11-28',
    endOfLiturgicalYear: '2022-11-26',
  },
  fromCalendar: 'proper_of_time',
  fromExtendedCalendars: [],
}
```

By default, the range dates correspond to a Gregorian calendar (Jan 1 to Dec 31).
Except if you previously initialized the `Romcal` object with `{ scope: 'liturgical' }`: the range corresponds to a liturgical year (the first Sunday of Advent to the last Saturday of Ordinary Time).

```ts
// Will generate a liturgical calendar, from 2029-12-02 to 2030-11-30
const romcal = new Romcal({ scope: 'liturgical' });
const data = await romcal.generateCalendar(2030);
```

For further information: :books: [Output data and JSON schema](docs/data-output.md).

### Get one liturgical day `.getOneLiturgicalDay(key, options)`

Instead of returning `LitugicalDay` objects for the whole year, you can try to retrieve only one object by its `key`.

```ts
const data = romcal.getOneLiturgicalDay('easter_sunday');
```

It will return:

- The corresponding `LiturgicalDay` found in the calendar.
- Or `null` if the `LiturgicalDay` exists in the calendar definitions, but do not occur in this specific year.
- Or `undefined` if the desired `LiturgicalYear` do not exist in the calendar.

By default, romcal compute this `LiturgicalDay` in the context of the current year.
You can set a specific year in the options: `{ year: 2030 }`.

:warning: **Important:** from this method, romcal do not compute the whole year for performance reasons.
Some metadata (especially the `seasons` and the `periods` in Christmas Time, and the `precedence` rules) might be incomplete or not accurate.

If this is an issue for your requirements, you can tell Romcal to compute first the whole year to ensure data integrity, by setting this option: `{ computeInWholeYear: true }`.

```ts
const data = romcal.getOneLiturgicalDay('ordinary_time_12_sunday', {
  year: 2022,
  computeInWholeYear: true,
});
// Will return `null`, because `corpus_christi` is taking precedence over `ordinary_time_12_sunday` in 2022
```

### Get all liturgical day definitions `.getAllDefinitions()`

The 2 methods above (`.generateCalendar` and `.getOneLiturgicalDay`) are returning `LiturgicalDay` objects, in the context of a year.
That is, every `LiturgicalDay` objects have a `date` property, and are sorted and possibly removed depending on the year context and seasons/precedence rules.

However, you might need to retrieve all possible calendar definitions, without any rules or year context.

The `.getAllDefinitions()` method returns absolutely all `LiturgicalDayDef` objects that are part of a liturgical calendar.
The returned object is a key/value, where the key is the `key` of the `LiturgicalDayDef` object, and the value is the `LiturgicalDayDef` itself.

```ts
const definitions = romcal.getAllDefinitions();
```

Note that a `LiturgicalDayDef` object is different from a `LiturgicalDay` object.
The first one contain already most of the metadata, but do not have the `date` property, and the `seasons` & `periods` might be incomplete.
Also, some properties like `colors`, `ranks`, `precedence` might be updated in a `LiturgicalDay` object, according to the year context and seasons/rules.

### Get the date of major celebrations `.date(year).fn()`

You might only need the `Date` of a liturgical day, without computing all other metadata or a whole calendar.

This gives you access to all methods from the `Dates` class: [./rites/roman1969/src/utils/dates.ts](./rites/roman1969/src/utils/dates.ts).

The `year` parameter is optional (taking the current year by default, if not provided).

```ts
const romcal = new Romcal();
const dates = romcal.dates(2030);
const easterOf2030 = dates.easterSunday();
```

All these methods will return a `Date` object (or a range of `Date` objects).

Note that you can also pass a `year` property to the last method:

```ts
const pentecostOf2030 = romcal.dates().pentecostSunday(2030);
```

## Contribute

Romcal is an open source project, this means you are more than welcome to contribute!
Especially to find bugs or write new tests, verify or complete calendars, or pull new localization.

To jump into romcal’s codebase more easily, you might be interested in reading:

- :books: [Contributing Guide](CONTRIBUTING.md).
- :books: [Install, Build, Run and Test romcal locally](docs/contribute-to-romcal.md).
- :books: [Localization](/docs/localization.md).
- :books: [Codebase Documentation](https://romcal.github.io/romcal/).

## Changelog & Release History <a name="revisions"></a>

See the [changelog](CHANGELOG.md) for the latest updates and important/breaking changes.

## Module Robustness & Data Integrity <a name="disclaimer"></a>

**Romcal’s code logic** aim to be fully compliant with the [_General Instruction on the Roman Missal_](https://www.catholicculture.org/culture/library/view.cfm?recnum=337) (GIRM) and the [_General Norms for the Liturgical Year and the Calendar_](https://www.catholicculture.org/culture/library/view.cfm?id=10842).

**Calendar entries** are pulled from the missal and official sources for the _General Roman Calendar_. Other calendar entries are pulled from various liturgical books and sources from the internet (when we don't have access to the missal or proper official books of the country / region). As such the accuracy of all calendars might not be ensured.
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
