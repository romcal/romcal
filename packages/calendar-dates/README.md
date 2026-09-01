# @internal/calendar-dates

Date primitives and the liturgical year anchors shared by every Roman Rite calendar.

Internal to the romcal monorepo; not published.

## Scope

This package answers "when does this fall?", never "what does this mean?". The
Gregorian and Julian Easter computations live in [`@internal/easter`](../easter),
the lunar calculation in [`@internal/lunar-new-year`](../lunar-new-year), and this
package builds the shared anchors on top of them.

| In scope | Stays with the rite |
| --- | --- |
| `addDays`, `subtractsDays`, `startOfWeek`, `rangeOfDays`, and the other primitives | Ordinary Time helpers |
| `easterSunday`, `firstSundayOfAdvent`, `christmas`, `ashWednesday`, `palmSunday`, `pentecostSunday` | `epiphany` and `baptismOfTheLord`, which depend on movable-Sunday options |
| The fixed solemnities (`assumption`, `allSaints`, ...) | `annunciation` and `immaculateConceptionOfMary`, whose transfers are rite-shaped |
| `lunarNewYear`, `sundayOnOrAfterLunarNewYear` | `holyFamily`, `divineMercySunday`, `christTheKingSunday` |
| | `ascension` and `corpusChristi` transfer options |
| | `startOfSeasons` / `endOfSeasons`, keyed by a rite's own `Season` enum |

Anchors are mostly `(year: number) => Date`. Two of them take more than the year,
because the extra argument is a choice of computation rather than of rubric, and
both rites need it: `easterSunday` takes the Easter calculation type, and
`lunarNewYear` takes the UTC offset of the civil timezone it is observed in.

`MONTHS` and `WEEKDAYS` stay in the rite for now. They are rite-neutral, but they
are imported far more widely than the date helpers, so moving them belongs with the
constants work rather than here.

`temporalOverrides` stays with the rite. It is applied *after* an anchor is computed:
`Dates#epiphany` works out the base date and then passes it through
`#applyAnchorExceptions`. The base computation moves here; the exception layer
stays with the rite, alongside the config that describes it. `ShiftableAnchor` is
`'epiphany'` today but is written to grow, so any anchor extracted here should be
assumed to acquire an override layer on the rite side eventually.

## How the rite uses it

`rites/roman1969/src/utils/dates.ts` re-exports the primitives, because they are part
of romcal's public surface and are imported from that path across the rite. The
`Dates` class keeps its per-year memoisation and its `year` defaulting (which depend
on the calendar scope) and delegates the computation itself:

```ts
ashWednesday = (year = this.#year): Date => {
  if (this.#ashWednesday[year]) return this.#ashWednesday[year];
  return (this.#ashWednesday[year] = anchors.ashWednesday(year, this.#config.easterCalculationType));
};
```

Passing `easterCalculationType` explicitly is what keeps a Julian-configured calendar
correct, since the package defaults to Gregorian rather than reading a config.

The 1969 rite applies its own transfers on top of the fixed dates, through
`dateExceptions` on the General Roman Calendar.
