**:warning: The documentation above is written for romcal v2, and has not been updated yet to romcal v3.**

# Calendar definitions and contributions

- [Liturgical calendar building](#liturgical-calendar-building)
- [Particular calendars](#particular-calendars)
  - [Extending a liturgical day](#extending-a-liturgical-day)
  - [Overriding a date by its priority](#overriding-a-liturgical-day-by-its-priority)
  - [Overriding a date by its key](#overriding-a-liturgical-day-by-its-key)
  - [Overriding a liturgical day by its priority](#overriding-a-liturgical-day-by-its-priority)
  - [Removing general dates in national calendar output](#removing-liturgical-day-of-the-general-calendar-in-particular-calendar-output)
    - [The `drop` keyword](#the-drop-keyword)

## Liturgical calendar building

romcal is designed with extensibility in mind, to cater for unique scenarios that are common in the liturgical calendar.

When computing a calendar, romcal will first compute the main calendar for all **seasons** (all Sundays and weekdays occurring the whole year).
This first calendar level is very important, it defines all the basic liturgical days, for every day of the year, including calendar metadata, cycles, seasons and periods within the year...

Then, the **General Roman calendar** (GRC) is computed and combined on top of the season calendar.
Finally, a **particular calendar** (for a country, a diocese...) could also be computed on top of the General Roman calendar.

romcal always computes data for a whole liturgical year.
This is necessary to ensure that the right liturgical day is well defined for every date:
each liturgical day is depending on the proper of seasons or the sanctorale, and might be defined according to each other (including all [moveable feast](https://en.wikipedia.org/wiki/Moveable_feast)).

When all liturgical days are computed by romcal, they are ordered by date, and sorted by their precedence rank.
Each rite resolves the days of a date with its own rubrics; for the Roman Rite of 1969, these are the Universal Norms on the Liturgical Year and the Calendar (UNLY):

- The day that holds the highest place in the table of liturgical days (UNLY no. 59) is kept. Between two days of the same rank, a day that allows similar rank items (e.g. a proper memorial) comes first; it never takes precedence over a day of a higher rank.
- The other celebrations are omitted that year (UNLY no. 60), or kept after the first day as optional celebrations, e.g. an optional memorial on a weekday, or an obligatory memorial on a weekday of Lent (UNLY no. 14).
- A solemnity impeded by a day that takes precedence over it is transferred to the closest day not listed in nos. 1–8 of the table (UNLY no. 60). Both sides of the date are searched; at the same distance, the following day is preferred, and a day already given to another transferred solemnity is not available.
- A solemnity occurring on a Sunday of Advent, Lent or Easter is transferred to the following Monday, or to the next available day after it (UNLY no. 5). On Palm Sunday and Easter Sunday, the closest day of UNLY no. 60 applies.
- St Joseph and the Annunciation of the Lord carry date exceptions for Holy Week: St Joseph is anticipated to the Saturday before Palm Sunday, and the Annunciation is always transferred to the Monday after the Second Sunday of Easter (UNLY no. 60).
- A ruling of the Holy See on the coincidence of two celebrations takes the place of the closest day for these two celebrations: when the Sacred Heart of Jesus falls on 24 June, it is celebrated on that day and the Nativity of St John the Baptist is anticipated to 23 June, except where St John the Baptist is the patron of a nation, a diocese, a city or a religious community, where the Sacred Heart is anticipated instead. The ruling was given for 2022 only; it is extrapolated to the later years in which the two coincide (2033 and 2044).
- An indult of the Holy See can keep a solemnity on its date over a Sunday that would impede it; the Sunday is then not celebrated that year. In Mexico, Our Lady of Guadalupe is kept on 12 December when it is a Sunday of Advent, in every such year (Congregation for Divine Worship, 17 January 2013, as reported by Desde la Fe and by ACI Prensa on the decree of the Mexican Episcopal Conference of 20 September 2021). The Mass of the Sunday gives its second reading and its collect to the Mass of Our Lady, which romcal does not show apart. In Ireland, St Patrick is kept on 17 March when it is a Sunday of Lent other than Palm Sunday, in every such year: the Holy See agreed to the request of the Irish bishops in 2019 (Universalis, Vatican News), and the solemnity is reported to be always celebrated, even on a Sunday (Aleteia, and the statement of the Irish bishops of 6 March 2024 for Sunday 17 March 2024); no standing indult is published. When 17 March falls in Holy Week (2008 is the only such year between 1990 and 2100), St Patrick is kept on the Saturday before Palm Sunday, 15 March 2008, as the Irish bishops decided (statement of March 2008, catholicbishops.ie). Their statement is silent on St Joseph, so the general norms apply: St Joseph is anticipated to the closest free day, Friday 14 March 2008 (UNLY no. 60). The General Roman Calendar keeps St Joseph on 15 March. In Poland, Our Lady Queen of Poland is anticipated to Saturday 2 May when 3 May is a Sunday (always a Sunday of Easter), in every such year, instead of being transferred to the Monday: the Holy See allowed it in 2015 (bulletin of the Archdiocese of Gdańsk, May 2015) and in 2026 (communiqué of the Polish Bishops' Conference of 20 May 2025, as reported by Wprost).
- A transferred day takes part in the resolution of the date it is transferred to, and carries the date and the calendar metadata of that date. A solemnity with no available day in the computed year is omitted.

romcal aims to give the calendar that is actually kept, and decides with these principles:

- The general norms apply to every calendar by default. A particular calendar departs from them only where a source shows the local practice: an official one where it exists (an indult, a decree, a liturgical calendar published by a bishops' conference or a diocese), otherwise a third-party report of that practice. Each departure is written as a date exception of the celebration in that calendar, cites its sources in a comment beside it, and is covered by a test.
- Where the local practice and the library disagree, the library is missing a source or an implementation; the practice is not treated as a deliberate departure from romcal.
- A ruling of the Holy See given for one year applies to that year. It is applied to the other years with the same coincidence only when its text says it stands, or when the extrapolation is stated beside it, as for the Sacred Heart and St John the Baptist above.
- A practice of a single diocese belongs to a calendar of that diocese, not to the calendar of its country.

By default, you will only get one liturgical day per date, followed by the optional celebrations of that date.

Output conforms to the revised liturgical calendar as approved by Paul VI in [Mysterii Paschalis](http://w2.vatican.va/content/paul-vi/en/motu_proprio/documents/hf_p-vi_motu-proprio_19690214_mysterii-paschalis.html) for the Roman Rite (post-Vatican II).
Rules followed by romcal are defined in the [_General Instruction on the Roman Missal_](https://www.catholicculture.org/culture/library/view.cfm?recnum=337) (GIRM) and the [_General Norms for the Liturgical Year and the Calendar_](https://www.catholicculture.org/culture/library/view.cfm?id=10842).

## Particular calendars

As well as the General Roman calendar, romcal allows defining various particular calendar, that could serve specific regions, countries, dioceses, parishes, communities...
Currently, only country calendars are proposed from this romcal project. In a near future we plan to propose diocesan calendars, and offer an easy way to extend romcal with any third calendars to support all your needs.

You will find below some indications on the available features, to contribute to maintaining and improving calendars into romcal.

### Extending a liturgical day

This is especially useful to update a liturgical day already defined in the `general` Roman calendar, without having to redefine it entirely in the particular calendar.

For example, Saint Gregory the Great is a memorial in the `general` Roman calendar, but is a feast in England.
In the `england` calendar, we will only define a new entry with its `key` and the `extend: true` option. Then we only add what is different in England (here, the `rank` raised to feast).

```json5
{
  key: 'gregory_i_the_great_pope',
  extend: true,
  rank: Ranks.FEAST,
}
```

It's generally a good practice to extend an existing liturgical day, with its specifications for a particular calendar, instead of redefining multiple time the same liturgical day in different calendars.

For any extension or redefinition, there must be a corresponding source reference in the calendar to provide context for the definition. See [localization documentation](./localization.md) for more details on how these references should be structured.

### Overriding a liturgical day by its key

In most countries, All Saints and All Souls are always celebrated on the 1st and 2nd of November respectively. However, in England and Wales, if All Saints (1 November) falls on a Saturday, it is transferred to the Sunday and All Souls is transferred to Monday 3rd November.

romcal implements this unique difference by overriding the `allSouls` and `allSaints` celebrations in the particular calendars of `src/calendars/england.ts` and `src/calendars/wales.ts` (the original definition was in `src/calendars/general.ts`). The overriding dates in these calendars define a IIFE callback function for the `date` property that holds logic for determining if the date should be moved.

Since liturgical day in particular calendars have higher precedence than liturgical days in general calendar, the days of the particular definitions for All Saints and All Souls will override the ones in the general calendar.

Also, since prioritized liturgical days in the particular calendar can override days in the general calendar, the day definitions for All Saints and All Souls will now be taken from the particular calendar.

Therefore, it is important that the key in the particular calendar is **exactly** the same as the one in the general calendar so that romcal recognizes it for overriding. Typos (even case mismatch), will cause unexpected results.

### Overriding a liturgical day by its priority

Prioritizing a liturgical day allows it to:

- Override with the same key, a liturgical day that has a higher `rank`
- Prevent it from being overridden by other coinciding days

A liturgical day can be prioritized by adding `prioritized`: `true` to the `data` object in the given liturgical day object. See `src/lib/Celebrations.ts` for more examples.

All liturgical days in `src/lib/Celebrations.ts` (Christmas, Easter) are prioritized as they must override any other liturgical days in the liturgical calendar and cannot be overridden by any other coinciding liturgical day regardless of rank **unless** the coinciding liturgical day is itself prioritized.

For example, `allSaints` in `src/lib/Celebrations.ts` can be overridden by `allSaints` in `src/calendars/england.ts`) because the entry in that particular calendar was set with `prioritized`: `true`.

### Removing liturgical day of the general calendar, in particular calendar output

By default, romcal _does not_ remove any celebrations in its output. Instead, prioritization (see above) is the preferred way to go about overriding celebrations to exhibit different characteristics.

However, in some cases, a particular calendar may need to omit a celebration entirely from its output. For example, the possible reasons could be:

- that the given celebration is entirely irrelevant to the observances of the nation;
- when a celebration of two or more saints are celebrated jointly in the `general` roman calendar, but separately in the particular calendar;
- when a celebration of two or more saints are celebrated separately in the `general` roman calendar, but jointly in the particular calendar.

romcal enables this flexibility via the `drop` key.

#### The `drop` keyword

When defined, the `drop` key should contain a `boolean` value of `true` to indicate that the given celebration should be _removed_ from the calendar output.

Usually, this means excluding a celebration defined in `src/calendars/general.ts`. The construct would be defined in the relevant `national` calendar and look like this:

```javascript
{
  key: "",
  date: dayjs.utc(),
  drop: true
}
```

> When defining `drop`, only the `key` and `date` properties of the celebration are mandatory. Other keys do not have to be defined. `drop` operations also have higher precedence than overriding (meaning, they are run first before prioritization logic).
