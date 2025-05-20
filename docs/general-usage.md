# General use of romcal

- [Get calendar data](#get-calendar-data)
- [Get a specific liturgical date](#get-a-specific-liturgical-date)
- [Configuration options](#configuration-options)
- [Refines and filter results by criteria](#refines-and-filter-results-by-criteria)
  - [Filter by any criteria](#filter-by-any-criteria)

## Get calendar data

Invoke the `Romcal` constructor method to retrieve calendar, and the `.generateCalendar` function to retrieve an `Array` of `LiturgicalDay` objects in the Roman Calendar (by default: one object per each day of the year).
This method accepts an optional object of configuration properties to obtain customized output.

```typescript
import Romcal from 'romcal';
import { UnitedStates_En } from '@romcal/calendar.united-states';

new Romcal({
  scope: 'gregorian' | 'liturgical',
  localizedCalendar: UnitedStates_En,
  epiphanyOnSunday: true | false,
  corpusChristiOnSunday: true | false,
  ascensionOnSunday: true | false,
}).generateCalendar(2020);
```

romcal can be invoked without additional parameters or via shorthand properties like so:

```typescript
// Get calendar year dates (1st Jan - 31st Dec) for the current year
new Romcal().generateCalendar();

// Get calendar year dates for the specified year
Romcal.calendarFor(2020);
```

Then, the `generateCalendar` method will produce an `Array` of `LiturgicalDay` objects (by default, one object per each day of the year, except if you specified to also output optional memorials).
For further information: :books: [Output data and JSON schema](data-output.md).

Note that romcal always produce data **asynchronously**:

```javascript
import Romcal from 'romcal';
import { GeneralRoman_En } from '@romcal/calendar.general-roman';

new Romcal({ localizedCalendar: GeneralRoman_En }).generateCalendar(2020).then(function (myCalendar1) {
  console.log(myCalendar1);
});

// Or access data using async/await
const myCalendar2 = await new Romcal({ localizedCalendar: GeneralRoman_En }).generateCalendar(2020);
console.log(myCalendar2);
```

## Get a specific liturgical date

Invoke the `.liturgicalDayFor` method to retrieve the data of a specific liturgical day.
This method accepts a first `Date` object parameter, and an optional object of configuration properties to obtain customized output.

```javascript
import Romcal from 'romcal';
import { UnitedStates_En } from '@romcal/calendar.united-states';

const today = new Date().toISOString().split('T')[0];
const calendar = await new Romcal({
  localizedCalendar: UnitedStates_En,
  epiphanyOnSunday: true | false,
  corpusChristiOnSunday: true | false,
  ascensionOnSunday: true | false,
}).generateCalendar();
const day = calendar[today];
```

This returns an `Array` containing first the relevant `LiturgicalDay` object, followed by optional memorials or commemorations objects that also match the provided `date` parameter.
If the `strictMode` option is set to `true`, romcal strictly output the more relevant `LiturgicalDay` object, so only one object per day.

e.g. to obtain today's liturgical day:

```javascript
import Romcal from 'romcal';
import { France_Fr } from '@romcal/calendar.france';

const today = new Date().toISOString().split('T')[0];

// Using a Promise
new Romcal({
  localizedCalendar: France_Fr,
})
  .generateCalendar()
  .then((calendar) => {
    console.log(calendar[today]);
  });

// Or using async/await
const calendar = await new Romcal({
  localizedCalendar: France_Fr,
}).generateCalendar();
console.log(calendar[today]);
```

Note that under the hood, romcal always compute data for a whole liturgical year.
This is necessary to ensure that the right liturgical day is computed for every date:
each liturgical day is depending on the proper of seasons or the sanctorale, and might be defined according to each other (including all [moveable feast](https://en.wikipedia.org/wiki/Moveable_feast)).

## Configuration options

### `year`

An `integer` that defines the calendar year to compute.

Note: if the output `scope` is defined as a `liturgical` calendar, the `year` property refer to the main period of the liturgical calendar.
See just below for more details.

Default: current system year.

### `scope`

Defines the scope of calendar output. The scope can be specified either as:

- `gregorian`: i.e. the [civil year](https://en.wikipedia.org/wiki/Civil_calendar) for the majority of countries - `January 1` to `December 31`.
- `liturgical`: the liturgical year - `1st Sunday of Advent` to the `last Saturday or Ordinary Time` (i.e. the last day before the following `1st Sunday of Advent` of the next liturgical year).

Default: `gregorian`.

Note that a `liturgical` year is always straddling two `gregorian` years.
In this situation, the `year` property always refers to the main part of the liturgical year.
So if you aim to fetch a liturgical calendar for `2030`, you will end up with liturgical days from `December 2 of 2029` to `November 30 of 2030`.

### `epiphanyOnSunday`

A `boolean` which define:

- `true`: Epiphany is celebrated a Sunday between the 2nd - 8th January based on the missal rules.
- `false`: Epiphany is traditionally celebrated on January 6th.

Default:

- `true` (Epiphany is always celebrated a Sunday).
- Or if provided, defaults to the setting defined in the particular calendar you are fetching through romcal.

### `corpusChristiOnSunday`

A `boolean` which define:

- `true`: Corpus Christi is celebrated on Sunday (1 week before Pentecost)
- `false`: Corpus Christi is traditionally celebrated the Thursday after Trinity Sunday (60 days after Easter).

Default:

- `true` (Corpus Christi is celebrated on Sunday by default).
- Or if provided, defaults to the setting defined in the particular calendar you are fetching through romcal.

### `ascensionOnSunday`

A `boolean` which define:

- `true`: Ascension replace the 7th Sunday of Easter (42 days after Easter).
- `false`: Ascension is traditionally celebrated on Thursday, the 40th day of Easter.

Default:

- `false` (Ascension is celebrated on Thursday by default).
- Or if provided, defaults to the setting defined in the particular calendar you are fetching through romcal.

### localizedCalendar

A `RomcalBundleObject` with localizations for the liturgical calendar.

This object is used to define the localized calendar to use for the liturgical year.

romcal provides a set of pre-defined localized calendars, which are available in the `@romcal` package scope.

Example:

```typescript
import { UnitedStates_En, UnitedStates_la } from '@romcal/calendar.united-states';

const enCalendar = await new Romcal({
  localizedCalendar: UnitedStates_En,
}).generateCalendar();
console.log(enCalendar[today]);

const laCalendar = await new Romcal({
  localizedCalendar: UnitedStates_la,
}).generateCalendar();
console.log(laCalendar[today]);
```

### outputOptions

Defines a set of options to customize the output of the calendar.

- `calculateProperties`: Calculate properties ahead of time so that localized fields like `name` are serialized in the output. This is `false` by default.

## Refines and filter results by criteria

Under the hood, romcal always compute data for a whole liturgical year.
This is necessary to ensure that the right liturgical day is computed for every date:
each liturgical day is depending on the proper of seasons or the sanctorale, and might be defined according to each other (including all [moveable feast](https://en.wikipedia.org/wiki/Moveable_feast)).

Then, all liturgical days are gathered into a calendar object, and exported within the scope of a Gregorian or a liturgical year.
It produces a `RomcalCalendar` object, which is an `Array` of `LiturgicalDay` objects (by default, one object per each day of the year, except if you specified to also output optional memorials).

### Filter by any criteria

JavaScript already offers all the tooling to filter an array of objects, and by any specific criteria. Some examples below:

```javascript
// Get the calendar for the current year
new Romcal().generateCalendar(2020).then((calendar) => {
  const days = Object.values(calendar).flat();
  // Get all Sunday occurring during the year
  // (Sunday = 0 ... Saturday = 6)
  const allSundays = days.filter((day) => new Date(day.date).getUTCDay() === 0);
  assert(allSundays.length > 0, 'There should be at least one Sunday in the year');

  // Get all liturgical days in February
  // (January = 0 ... December = 11)
  const february = days.filter((day) => new Date(day.date).getUTCMonth() === 1);
  assert(february.length > 0, 'There should be at least one day in February');

  // Get all Feasts occurring during the year
  const allFeasts = days.filter((day) => day.rank === 'FEAST');
  assert(allFeasts.length > 0, 'There should be at least one Feast in the year');

  // Get all liturgical days that commemorate a martyr
  const martyrs = days.filter((day) => day.titles.includes(Title.Martyr));
  assert(martyrs.length > 0, 'There should me at least one martyr in the year');
});
```
