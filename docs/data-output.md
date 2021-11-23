**:warning: The documentation above is written for romcal v2, and has not been updated yet to romcal v3.**

# Output data and JSON schema

- [JSON Structure](#json-structure)
- [Liturgical Day Ranks](#liturgical-day-ranks)
- [Celebration Titles](#celebration-titles)
- [Liturgical Seasons](#liturgical-seasons)
- [Liturgical Periods](#liturgical-periods)
- [Liturgical Cycles: Years and Weeks](#cycles)
  - [Liturgical Day Cycle](#liturgical-day-cycle)
  - [Sunday Cycle](#sunday-cycle)
  - [Weekday Cycle](#weekday-cycle)
  - [Psalter Weeks](#psalter-weeks)
- [Liturgical Colors](#liturgical-colors)
- [Calendar Sources [deprecated]](#calendar-sources-deprecated)

## JSON Structure

romcal returns an array of liturgical date objects in the following structure

```json5
[
  {
    key: 'mary_mother_of_god',
    name: 'Mary, Mother of God',
    date: '2020-01-01T00:00:00.000Z',
    rank: 'SOLEMNITY',
    rankName: 'Solemnity',
    isHolyDayOfObligation: true,
    allowSimilarRankItems: false,
    prioritized: false,
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

- `key`: A camel case string which serves as a unique identifier for the liturgical day.
- `name`: The [localizable name](localization.md) of the liturgical day
- `date`: Date of the liturgical day as a ISO8601 string
- `rank`: A key representing the [liturgical day rank](#liturgical-day-ranks)
- `allowSimilarRankItems`: In addition to this liturgical day, allow similar items that have the same rank, and the same or lower precedence, so the current liturgical day will not overwrite another defined item.
- `isHolyDayOfObligation`: If the current liturgical day is a [Holy Day of Obligation](https://en.wikipedia.org/wiki/Holy_day_of_obligation). Holy days of obligation are days on which the faithful are expected to attend Mass, and engage in rest from work and recreation.
- `prioritized`: A optional boolean that when true, gives the liturgical day higher priority over another coinciding liturgical day even though that liturgical day has a higher-ranking type. This flag should be used with caution.
- `liturgicalColors`: The [liturgical color(s)](#liturgical-colors) assigned for this liturgical day (usually follows the liturgical season but may defer if this liturgical day is a solemnity, feast or memorial)
- `seasons`: Required: An array of string that identifies the liturgical season this liturgical day belongs to
- `seasonNames`: Required: An array of localized string that identifies the liturgical season this liturgical day belongs to
- `periods`: Required: An array of string that identifies the liturgical period this liturgical day belongs to
- `cycles`: The [liturgical cycle](#cycles) metadata of the liturgical day
- `calendar`: The liturgical calendar metadata of the liturgical day
- `fromCalendar`: The name of the calendar from which this liturgical day is defined
- `fromExtendedCalendars`: The names and the object diff of the calendar(s) from which this liturgical day is extended.
- `metadata`: An object that holds additional information about the liturgical day, especially when it refers to a liturgical day coming from the Sanctoral or Martyrology.
  - `titles`: An array of [titles](#titles) that may be assigned to this liturgical day

## Liturgical Day Ranks

Each date in the liturgical calendar is assigned a rank which are:

1. `SOLEMNITY`
2. `SUNDAY`
3. `TRIDUUM`
4. `HOLY_WEEK`
5. `FEAST`
6. `MEMORIAL`
7. `OPT_MEMORIAL`
8. `COMMEMORATION`
9. `WEEKDAY`

Where the importance or rank of the liturgical day is in descending order (solemnity being of highest importance and weekday being the lowest).

Ranks play an important role in determining which liturgical day should take precedence over another when two or more liturgical days coincide on the same date. Certain liturgical day ranks will also have different liturgical colors applied to them.

The array of types can be imported into consumer apps via:

```javascript
import { Types } from 'romcal';
```

## Celebration Titles

On top of having a liturgical day rank, days may also have one or more titles of significance assigned to it.

For example, the feast of [Saint Catherine of Siena](https://en.wikipedia.org/wiki/Catherine_of_Siena) is assigned the titles `PATRON_OF_EUROPE` (for national calendars of countries in Europe only) and `DOCTOR_OF_THE_CHURCH` due to those titles being conferred on her by the Church.

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

## Liturgical Seasons

The liturgical calendar is divided into various seasons that occur throughout the liturgical year.

- `ADVENT`
- `CHRISTMASTIDE`
- `ORDINARY_TIME`
- `LENT`
- `PASCHAL_TRIDUUM`
- `EASTERTIDE`

romcal assigns seasons to the dates it generates to indicate the season to which the range of dates generated belong.

For each day, the keys of the seasons are outputted in an array, because the season change can occur during the day (so a day can be within 2 seasons).
This is the case on Holy Thursday and Easter Sunday:

- The season of Lent run up to but excluding the evening Mass of the Lord’s Supper (on Holy Thursday)
- The Paschal Triduum begins with the evening Mass of the Lord’s Supper, and closes with Vespers of the Sunday of the Resurrection (Easter Sunday).
- The Easter Time start from the Sunday of the Resurrection (Easter Sunday).

The LITURGICAL_SEASONS object can be imported into consumer apps via:

_ES6_

```javascript
import { LITURGICAL_SEASONS } from 'romcal';
```

_CommonJS_

```javascript
var LITURGICAL_SEASONS = require('romcal').LITURGICAL_SEASONS;
```

## Liturgical Periods

In addition to seasons, romcal give information about periods for each date.

Available liturgical periods:

- `CHRISTMAS_OCTAVE`
- `HOLY_WEEK`
- `EASTER_OCTAVE`

Other periods (non-official), some of which are from the tradition of the church (often still used in monastic liturgies), for convenient usage only:

- `DAYS_BEFORE_EPIPHANY`
- `DAYS_AFTER_EPIPHANY`
- `CHRISTMAS_TO_PRESENTATION_OF_THE_LORD`
- `PRESENTATION_OF_THE_LORD_TO_HOLY_THURSDAY`
- `EARLY_ORDINARY_TIME`
- `LATE_ORDINARY_TIME`

The LITURGICAL_PERIODS object can be imported into consumer apps via:

_ES6_

```javascript
import { LITURGICAL_PERIODS } from 'romcal';
```

_CommonJS_

```javascript
var LITURGICAL_PERIODS = require('romcal').LITURGICAL_PERIODS;
```

## Liturgical Cycles: Years and Weeks <a name="cycles"></a>

Romcal automatically calculates the correct cycles for the given liturgical date.
Cycle information can be read via the `dates[idx].cycles` property in each date element in the array that `calendarFor` returns:

```typescript
{
  liturgicalDayCycle: 'TEMPORALE' | 'SANCTORALE';
  sundayCycle: 'YEAR_A' | 'YEAR_B' | 'YEAR_C';
  weekdayCycle: 'YEAR_1' | 'YEAR_2';
  psalterWeek: 'WEEK_1' | 'WEEK_2' | 'WEEK_3' | 'WEEK_4';
}
```

### Liturgical Day Cycle

All liturgical days are taken from one of these two liturgical cycles:

- `Temporale` denoted by the key `TEMPORALE`
- `Sanctorale` denoted by the key `SANCTORALE`

The [**Temporale**](https://en.wikipedia.org/wiki/Temporale) (or the **proper of time**, or the **proper of seasons**)
consists of the [movable feasts](https://en.wikipedia.org/wiki/Moveable_feast) and liturgical days, most of them keyed to Easter (which falls on a different Sunday every year),
including Sundays and Weekdays and liturgical days like Ascension, Pentecost, and so on.
It's a cycle that traces the earthly life and the mystery of the Christ, and is deeply related to the liturgical seasons' continuity.

The [**sanctorale**](https://en.wikipedia.org/wiki/Sanctorale) (or the **proper of saints**) consists of the fixed liturgical days (on the civil year), celebrated on the very same date each year (no matter what the day of the week).
It mainly contains the celebrations of the saints, and some other liturgical days for the mystery of the church, including Christmas.

### Sunday Cycle

A liturgical year consists of cycles that determines which portions of scripture are to be read.
The Sunday cycle is used mainly for Sunday readings and some solemnity.

- `Year A` denoted by the key `YEAR_A`
- `Year B` denoted by the key `YEAR_B`
- `Year C` denoted by the key `YEAR_C`

### Weekday Cycle

A liturgical year consists of cycles that determines which portions of scripture are to be read.
The weekday cycle is used mainly for weekday readings.

- `Year 1` or `Odd year` denoted by the key `YEAR_1`
- `Year 2` or `Even year` denoted by the key `YEAR_2`

### Psalter Weeks

Inside every liturgical year, another psalter week cycle will determine which psalms and prayer to follow for the liturgy of hours.

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
import { LITURGICAL_CYCLES, SUNDAY_CYCLES, WEEKDAY_CYCLES, PSALTER_WEEKS } from 'romcal';
```

_CommonJS_

```javascript
var LITURGICAL_CYCLES = require('romcal').LITURGICAL_CYCLES;
var SUNDAY_CYCLES = require('romcal').SUNDAY_CYCLES;
var WEEKDAY_CYCLES = require('romcal').WEEKDAY_CYCLES;
var PSALTER_WEEKS = require('romcal').PSALTER_WEEKS;
```

## Liturgical Colors

[Liturgical colors are those specific colors used for vestments and hangings within the context of Christian liturgy. The symbolism of violet, white, green, red, gold, black, rose and other colors may serve to underline moods appropriate to a season of the liturgical year or may highlight a special occasion.](https://en.wikipedia.org/wiki/Liturgical_colours)

romcal defines various liturgical colors which are:

- `BLACK`
- `GOLD`
- `GREEN`
- `PURPLE`
- `RED`
- `ROSE`
- `WHITE`

More information on how these colors are used for liturgical day can be found [here](https://en.wikipedia.org/wiki/Liturgical_colours#Roman_Catholic_Church)

Liturgical colors can be read via the `dates[idx].data.meta.liturgicalColor` property in each date element in the array that `calendarFor` returns.

The `LITURGICAL_COLORS` object can be imported into consumer apps via:

_ES6_

```javascript
import { LITURGICAL_COLORS } from 'romcal';
```

_CommonJS_

```javascript
var LITURGICAL_COLORS = require('romcal').LITURGICAL_COLORS;
```

## Calendar sources [deprecated]

romcal generates dates that come from 4 different internal sources:

- `l` : liturgical
- `c` : celebrations
- `g` : general
- `n` : national

Each date is assigned a source with one of the four calendar sources above.

Calendar sources play an important role in how romcal manages coinciding dates (see [overriding dates](#overidding)).

### liturgical

Represents a standard date in the liturgical year. Dates from this source build the basic structure of the liturgical calendar from the start of the liturgical year to its end.

Dates from `src/lib/Seasons.ts` will be assigned the source value `l`.

The module responsible for generating the `liturgical` dates is `src/lib/Seasons.ts`. _It is unlikely that this module will need customization or overriding of any kind._

### celebrations

Represents central celebrations observed in the Roman Catholic rite. They take precedence and will replace coinciding dates from the `liturgical` calendar or `general` calendar.

Dates from `src/lib/Celebrations.ts` will be assigned the source value `c`.

The module responsible for generating `celebrations` is `src/lib/Celebrations.ts`. _It is highly unlikely that this module will need customization or overriding of any kind._

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

### general

Represents general celebrations throughout the liturgical year. Dates from the `general` calendar will override those from the `liturgical` calendar.

Dates from `src/calendars/general.ts` are assigned the source value `g`.

The module responsible for generating the `general` dates is `src/lib/Calendars/general.ts`.

`general` calendar dates will always be overwritten by `celebration` or `national` calendar dates even if they are prioritized. Celebrations in this calendar should reflect the General Roman Calendar, therefore there should be changes only when there is a change in the General Roman Calendar. When one wants to add, remove or modify a celebration that is celebrated only in a national calendar, they should make this changes in that particular calendar, not in the `general`.

In situations where a given celebration must override one in the general calendar, define it in the `national` calendar instead.

### national

Represents specific liturgical dates that were approved for use by the Holy See for a particular country. It can be used to define unique celebrations celebrated by that particular country or existing celebrations that were [transferred to another date](https://en.wikipedia.org/wiki/General_Roman_Calendar#Transfer_of_celebrations).

A prioritized celebration in the `national` calendar takes precedence over celebrations in `general`, `celebrations` and `liturgical` calendars. As such, this marker should be used with caution as it may cause national events to override important celebrations that should not be overridden.

In situations when there are 2 celebrations from a `national` calendar that coincide on the same date, the one with the higher-ranking celebration type will take precedence.

A new `national` calendar for a country can be defined by creating a new `.ts` file with the country name in upper case, lower case or camel case in the `src/lib/calendars` folder (i.e. `malaysia.mjs`). This new file will automatically be picked up by the module and will be used when the user supplies the matching key in the country argument in the `calendarFor` method.

Dates from `src/calendars/<countryName>.ts` will be assigned the source key `n`

See [Overriding dates](#overridingDates) for more examples.
