# @internal/proper-of-time

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
| The fixed solemnities (`annunciation`, `assumption`, `allSaints`, ...) | `holyFamily`, `divineMercySunday`, `christTheKingSunday` |
| `lunarNewYear`, `sundayOnOrAfterLunarNewYear` | `ascension` and `corpusChristi` transfer options |
| `MONTHS`, `WEEKDAYS` | `startOfSeasons` / `endOfSeasons`, keyed by a rite's own `Season` enum |

Anchors are pure `(year: number) => Date` functions. They take no configuration,
because anything configurable is by definition rite-shaped.

That survives the `temporalOverrides` mechanism added for the England and Wales
adjacent-Sunday transfers, because it is applied *after* an anchor is computed:
`Dates#epiphany` works out the base date and then passes it through
`#applyAnchorExceptions`. The base computation moves here; the exception layer
stays with the rite, alongside the config that describes it. `ShiftableAnchor` is
`'epiphany'` today but is written to grow, so any anchor extracted here should be
assumed to acquire an override layer on the rite side eventually.

## Status

Scaffolding only. The extraction from `rites/roman1969/src/utils/dates.ts` follows
in a separate commit, so that the move can be reviewed against unchanged snapshots.
