# 06 — Octave handling

## What an octave is

An **octave** is an 8-day extension of a principal feast. Day 1 is the feast itself; days 2–7 are "days within the octave" (*infra octavam*); day 8 is the **octave day** (*dies octava*), a liturgical echo of the feast.

Under the Rubricae 1960 only three octaves remain, all privileged:

| Octave     | Day 1                 | Day 8                         |
|------------|-----------------------|-------------------------------|
| Christmas  | Dec 25 Nativity       | Jan 1 Circumcision / Octave   |
| Easter     | Easter Sunday         | Low Sunday (Dom. in Albis)    |
| Pentecost  | Pentecost Sunday      | Trinity eve (Saturday)        |

Before 1955 there were ~15 octaves (Epiphany, Ascension, Corpus Christi, St Stephen, etc.). We don't model those — scope is 1960.

Key liturgical facts per octave day:
- **Rank changes day-by-day.** Easter Monday & Tuesday are Class I; Wed–Sat of Easter Week are Class I but lower; the octave day (Low Sunday) is Class I Sunday. Christmas octave days are mostly Class II with specific feasts (St Stephen, etc.) keeping their own rank but with octave commemorations.
- **Propers differ per day.** The Mass texts on Day 3 of the Christmas octave aren't the same as Day 1.
- **Commemoration of the octave.** When a feast falls within an octave, the octave is commemorated at its Mass (extra collect / secret / postcommunion).
- **Precedence interaction.** A Class I feast within an octave doesn't "break" the octave; it layers. A lesser feast may be omitted or commemorated.

So an octave is **per-day state**, not a span. `Period` (DaysFromEpiphany, DaysOfLent) is a broad span used for colour/season hints — insufficient here.

## Why `Period` is the wrong model

`Period` is a tag attached to a day to say "this day falls inside broad span X". It's many-to-one and carries no per-day information. Octaves need:

- The **parent feast id** (for commemoration lookup, name, colour).
- The **day-of-octave number** (1–8), to select the correct propers.
- The **privilege level** (Class I octave vs Class II), to drive rubrics.
- A **type discriminator** (day-within vs octave-day), since Mass rules change on day 8.

Cramming all that into `Period` would either bloat the enum or force string encoding (`'Period:ChristmasOctave:Day3'`). Neither composes with the rest of the model.

## Recommended model

A dedicated optional field on `LiturgicalDay`:

```ts
interface OctaveInfo {
  id: OctaveId;                        // 'christmas' | 'easter' | 'pentecost'
  parentFeastId: string;               // 'nativity_of_the_lord' / 'easter_sunday' / 'pentecost'
  day: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;  // 1 = feast itself, 8 = octave day
  kind: 'feast' | 'within' | 'octaveDay';
  rank: 'classI' | 'classII';          // octave privilege
}

interface LiturgicalDay1962Extensions {
  // …other fields from 03-api-design.md…
  octave?: OctaveInfo;
}
```

### Why this shape

- **`id` + `parentFeastId`** give a stable handle for consumers to group, filter, or fetch the parent feast's metadata without parsing strings.
- **`day` and `kind`** let the proper loader pick `Tempora/Nat<day>.txt` or the octave-day file without a lookup table elsewhere.
- **`rank`** (Class I / II of the octave itself, independent of the day's own `rank1962`) drives concurrence: e.g. a Class II octave day ranks differently than a Class I.
- **Optional.** Most days have no `octave` field; only days Dec 25–Jan 1, Easter Sunday–Low Sunday, and Pentecost Sunday–Trinity Eve carry it.

### Interaction with `rank1962`

`octave` is **additive metadata**, not a replacement for `rank1962`. A day within the Christmas octave that is *also* the feast of St Stephen carries:
- `rank1962: ClassII` (St Stephen)
- `octave: { id: 'christmas', day: 2, kind: 'within', rank: 'classII' }`
- `commemorations: [{ id: 'christmas', source: 'tempora' }]`

The rubrics engine reads both fields to decide concurrence and commemorations.

### Generation

Emitted by the Proper of Time, not by `CalendarDef` inputs:

1. When Proper of Time schedules the parent feast (Christmas / Easter / Pentecost), it also emits the seven following days with the `octave` field populated.
2. If a Sanctoral feast (from `CalendarDef.inputs`) lands on the same date, its `LiturgicalDay` is merged with the octave day — the Proper of Time's octave metadata is copied onto it after the rank comparator resolves precedence.
3. Propers for each octave day are resolved via `properRef` using the day's `octave.day` number.

### Consumer ergonomics

```ts
const day = await romcal1962.getOneLiturgicalDay('some-date');
if (day.octave?.kind === 'octaveDay') {
  // it's Jan 1 / Low Sunday / Trinity eve
}
if (day.octave?.id === 'christmas') {
  // anything in the Christmas octave
}
```

Filter-friendly without string parsing.

## Open items

- **Privileged-octave commemoration on impeded feasts.** When a Class II Sanctoral feast occurs within Christmas octave, the octave is commemorated at its Mass — confirm that `commemorations[]` is the right home for this rather than inferring it from `octave` presence.
- **Octave-day propers.** Some octave days (e.g. Circumcision on Jan 1) have their own named identity in the calendar *and* are day 8 of the Christmas octave. Test that consumers get both the feast identity and the octave metadata without duplication.
