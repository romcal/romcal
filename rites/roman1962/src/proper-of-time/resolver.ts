import { addDays, computeAnchors, dayOfWeek, isoDate } from '@internal/rite-roman1969';

import type { DayOfWeek, ProperOfTimeSeason, ProperOfTimeYear, TemporaSlotKind } from './types';

const WEEKDAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'] as const;

const SANCTORAL_OWNED = new Set([
  '12-24', // Vigil of Christmas
  '12-25', // Christmas Day
  '12-26', // St Stephen
  '12-27', // St John
  '12-28', // Holy Innocents
  '01-01', // Circumcision / Octave of Christmas
  '01-06', // Epiphany
]);

function mmdd(date: Date): string {
  return isoDate(date).slice(5);
}

function push(
  map: ProperOfTimeYear,
  date: Date,
  temporaKey: string,
  season: ProperOfTimeSeason,
  weekIndex: number,
  kind: TemporaSlotKind
): void {
  if (SANCTORAL_OWNED.has(mmdd(date))) return;
  map.set(isoDate(date), {
    date: isoDate(date),
    temporaKey,
    season,
    weekIndex,
    dayOfWeek: dayOfWeek(date),
    kind,
  });
}

interface WalkArgs {
  year: number;
  map: ProperOfTimeYear;
}

/**
 * Christmas tail (Dec 29-31) of the previous liturgical year that falls
 * in civil year Y. Dec 26/27/28 are sanctoral. The Sunday within the
 * Octave of Christmas (Nat1-0) falls in the civil year BEFORE Y — for
 * Y = 1962, it was Sun 1961-12-31. We DO emit it for completeness when
 * that Sunday lands in civil year Y.
 */
function walkChristmasTailStartOfYear({ year, map }: WalkArgs): void {
  // Dec 29-31 of year Y-1 are out of scope for civil year Y.
  // This hook reserved for future symmetry; currently a no-op.
  void year;
  void map;
}

/**
 * Dec 29-31 of civil year Y: intra-octave ferials (Nat29, Nat30, Nat31)
 * plus the Sunday-within-Christmas-Octave (Nat1-0) on whichever of
 * these days lands on Sunday. If no Sunday falls in Dec 26-31 (i.e.,
 * Christmas Day itself was Sunday), Nat1-0 is celebrated on Dec 30.
 */
function walkChristmasTailEndOfYear({ year, map }: WalkArgs): void {
  const d29 = new Date(Date.UTC(year, 11, 29));
  const d30 = new Date(Date.UTC(year, 11, 30));
  const d31 = new Date(Date.UTC(year, 11, 31));
  const christmas = new Date(Date.UTC(year, 11, 25));

  const dates: [Date, string][] = [
    [d29, 'christmas_octave_day_5'],
    [d30, 'christmas_octave_day_6'],
    [d31, 'christmas_octave_day_7'],
  ];
  for (const [d, key] of dates) {
    push(map, d, key, 'ChristmasTide', 1, 'withinOctave');
  }

  const sundayWithinOctave = christmas.getUTCDay() === 0 ? d30 : [d29, d30, d31].find((d) => d.getUTCDay() === 0);
  if (sundayWithinOctave) {
    push(map, sundayWithinOctave, 'sunday_within_octave_of_christmas', 'ChristmasTide', 1, 'sunday');
  }
}

/**
 * Jan 2-5: weekday ferials Nat02..Nat05. If any of Jan 2-5 is a Sunday,
 * that Sunday is Most Holy Name (Nat2-0) and the other days remain their
 * respective NatXX keys. If no Sunday in Jan 2-5, Most Holy Name falls
 * on Jan 2 instead.
 */
function walkHolyNameWindow({ year, map }: WalkArgs): void {
  const days = [2, 3, 4, 5].map((d) => new Date(Date.UTC(year, 0, d)));
  const sunday = days.find((d) => d.getUTCDay() === 0);

  for (const d of days) {
    const key = `christmas_time_january_${d.getUTCDate()}`;
    push(map, d, key, 'ChristmasTide', 2, 'feria');
  }

  const holyName = sunday ?? days[0];
  push(map, holyName, 'second_sunday_after_christmas', 'ChristmasTide', 2, 'feast');
}

/**
 * Days Jan 7 through Septuagesima-1. Weeks are labelled Epi1..EpiN
 * where Epi1 is the Octave week of Epiphany (even though the Octave was
 * suppressed in 1960, the tempora files keep the `Epi1-*` naming).
 * Sundays after Epiphany use `EpiW-0`, except the first Sunday after
 * Epiphany uses `Epi1-0a` (Holy Family).
 */
function walkTimeAfterEpiphany({ year, map }: WalkArgs): void {
  const anchors = computeAnchors(year);
  const epiphany = new Date(Date.UTC(year, 0, 6));
  const septuagesima = anchors.septuagesima;

  // First Sunday strictly after Epiphany → Holy Family (Epi1-0a).
  let firstSundayAfterEpi = new Date(epiphany);
  do {
    firstSundayAfterEpi = addDays(firstSundayAfterEpi, 1);
  } while (firstSundayAfterEpi.getUTCDay() !== 0);

  // Walk Jan 7 to Septuagesima-1 inclusive.
  const start = new Date(Date.UTC(year, 0, 7));
  let epiWeek = 1;
  let sundayCount = 0;
  for (let d = start; d < septuagesima; d = addDays(d, 1)) {
    const dow = d.getUTCDay() as DayOfWeek;
    if (dow === 0) {
      sundayCount += 1;
      const key = sundayCount === 1 ? 'holy_family_of_jesus_mary_and_joseph' : `epiphany_${sundayCount}_sunday`;
      push(map, d, key, 'EpiphanyTide', sundayCount, sundayCount === 1 ? 'feast' : 'sunday');
      // Weekdays after this Sunday belong to epi<sundayCount + 1> … except
      // the first block (before Holy Family) belongs to the octave week.
      epiWeek = sundayCount === 1 ? 1 : sundayCount;
      continue;
    }
    // Weekdays follow the `epiphany_<week>_<weekday>` form across weeks 1-6.
    const weekIdx = epiWeek;
    const key = `epiphany_${weekIdx}_${WEEKDAYS[dow]}`;
    push(map, d, key, 'EpiphanyTide', weekIdx, 'feria');
  }
}

/**
 * Septuagesima, Sexagesima, Quinquagesima Sunday through the Tuesday
 * before Ash Wednesday (Quadp1..Quadp3 weeks). Ash Wed itself starts
 * Quadp3-3 and continues through Quadp3-6 (Saturday before Lent I).
 */
function walkPreLent({ year, map }: WalkArgs): void {
  const anchors = computeAnchors(year);
  const lent1Sunday = anchors.lent1Sunday;

  const seasons = ['septuagesima', 'sexagesima', 'quinquagesima'] as const;
  for (let d = anchors.septuagesima; d < lent1Sunday; d = addDays(d, 1)) {
    const daysFromSept = Math.round((d.getTime() - anchors.septuagesima.getTime()) / 86_400_000);
    const weekIdx = Math.floor(daysFromSept / 7) + 1; // 1, 2, 3
    const dow = d.getUTCDay() as DayOfWeek;
    const key = dow === 0 ? `${seasons[weekIdx - 1]}_sunday` : `${seasons[weekIdx - 1]}_${WEEKDAYS[dow]}`;
    const kind: TemporaSlotKind = dow === 0 ? 'sunday' : 'feria';
    const season: ProperOfTimeSeason = 'Septuagesima';
    push(map, d, key, season, weekIdx, kind);
  }
}

/**
 * Lent I Sunday through the Saturday before Palm Sunday. Quad1..Quad5.
 */
function walkLent({ year, map }: WalkArgs): void {
  const anchors = computeAnchors(year);
  const palmSunday = anchors.palmSunday;
  for (let d = anchors.lent1Sunday; d < palmSunday; d = addDays(d, 1)) {
    const daysFromLent1 = Math.round((d.getTime() - anchors.lent1Sunday.getTime()) / 86_400_000);
    const weekIdx = Math.floor(daysFromLent1 / 7) + 1; // 1..5
    const dow = d.getUTCDay() as DayOfWeek;
    const key = `lent_${weekIdx}_${WEEKDAYS[dow]}`;
    const kind: TemporaSlotKind = dow === 0 ? 'sunday' : 'feria';
    const season: ProperOfTimeSeason = weekIdx >= 5 ? 'Passiontide' : 'Lent';
    push(map, d, key, season, weekIdx, kind);
  }
}

/**
 * Palm Sunday through Holy Saturday. Quad6-0 .. Quad6-6.
 */
const HOLY_WEEK_SLUGS = [
  'palm_sunday',
  'holy_week_monday',
  'holy_week_tuesday',
  'holy_week_wednesday',
  'maundy_thursday',
  'good_friday',
  'easter_vigil',
] as const;

function walkHolyWeek({ year, map }: WalkArgs): void {
  const { palmSunday, easter } = computeAnchors(year);
  for (let d = palmSunday; d < easter; d = addDays(d, 1)) {
    const dow = d.getUTCDay() as DayOfWeek;
    push(map, d, HOLY_WEEK_SLUGS[dow], 'HolyWeek', 6, dow === 0 ? 'sunday' : 'feria');
  }
}

/**
 * Easter Sunday through Easter Saturday. Pasc0-0..Pasc0-6.
 */
const EASTER_OCTAVE_SLUGS = [
  'easter_sunday',
  'easter_monday',
  'easter_tuesday',
  'easter_wednesday',
  'easter_thursday',
  'easter_friday',
  'easter_saturday',
] as const;

function walkEasterOctave({ year, map }: WalkArgs): void {
  const { easter } = computeAnchors(year);
  for (let i = 0; i < 7; i += 1) {
    const d = addDays(easter, i);
    push(map, d, EASTER_OCTAVE_SLUGS[d.getUTCDay()], 'EasterWeek', 0, i === 0 ? 'sunday' : 'octaveDay');
  }
}

/**
 * Low Sunday through Saturday before Pentecost. Pasc1..Pasc6.
 */
function walkPaschaltide({ year, map }: WalkArgs): void {
  const { lowSunday, pentecost } = computeAnchors(year);
  for (let d = lowSunday; d < pentecost; d = addDays(d, 1)) {
    const weeksFromLow = Math.floor((d.getTime() - lowSunday.getTime()) / (7 * 86_400_000));
    const weekIdx = weeksFromLow + 1; // 1..6
    const dow = d.getUTCDay() as DayOfWeek;
    const key = `easter_time_${weekIdx}_${WEEKDAYS[dow]}`;
    const kind: TemporaSlotKind = dow === 0 ? 'sunday' : 'feria';
    push(map, d, key, 'Paschaltide', weekIdx, kind);
  }
}

/**
 * Pentecost Sunday through Saturday. Pasc7-0 .. Pasc7-6.
 */
function walkPentecostWeek({ year, map }: WalkArgs): void {
  const { pentecost } = computeAnchors(year);
  for (let i = 0; i < 7; i += 1) {
    const d = addDays(pentecost, i);
    const key = `easter_time_7_${WEEKDAYS[d.getUTCDay()]}`;
    push(map, d, key, 'Paschaltide', 7, i === 0 ? 'sunday' : 'octaveDay');
  }
}

/**
 * Trinity Sunday through Advent I Sat (the Saturday before Advent I).
 * Weeks are Pent01..Pent24. If more than 24 Sundays fit, the last is
 * always Pent24-0; the overflow Sundays are filled with PentEpi3-0..
 * PentEpi6-0 (resumed Sundays after Epiphany). Ferias of resumed weeks
 * use PentEpi<N>-<d>.
 */
function walkTimeAfterPentecost({ year, map }: WalkArgs): void {
  const { trinity, advent1Sunday } = computeAnchors(year);
  const sundays: Date[] = [];
  for (let d = trinity; d < advent1Sunday; d = addDays(d, 7)) {
    sundays.push(d);
  }
  const total = sundays.length;
  const lastIdx = total - 1;
  const overflow = Math.max(0, total - 24);

  const prefixes: string[] = [];
  for (let i = 0; i < total; i += 1) {
    if (i === lastIdx) {
      prefixes.push('after_pentecost_24');
      continue;
    }
    if (i < 23) {
      prefixes.push(`after_pentecost_${i + 1}`);
      continue;
    }
    // Resumed Epi Sundays: i - 23 indexes into [epi6, epi5, epi4, epi3]
    // reversed so that the latest resumed slot lands closest to Pent24.
    const resumedIndexFromEnd = overflow - (i - 23); // 4, 3, 2, 1 → N
    const n = 2 + resumedIndexFromEnd; // 6, 5, 4, 3
    prefixes.push(`resumed_epiphany_${n}`);
  }

  for (let s = 0; s < total; s += 1) {
    const sundayDate = sundays[s];
    const prefix = prefixes[s];
    const weekEnd = s + 1 < total ? sundays[s + 1] : advent1Sunday;
    for (let d = sundayDate; d < weekEnd; d = addDays(d, 1)) {
      const dow = d.getUTCDay() as DayOfWeek;
      // Week-1 Sunday is Trinity; week-1 Thursday is Corpus Christi; week-2
      // Friday is the Sacred Heart of Jesus. Other days follow the
      // after_pentecost_<N>_<weekday> template.
      let key: string;
      if (s === 0 && dow === 0) key = 'most_holy_trinity';
      else if (s === 0 && dow === 4) key = 'corpus_christi';
      else if (s === 1 && dow === 5) key = 'sacred_heart_of_jesus';
      else key = `${prefix}_${WEEKDAYS[dow]}`;
      const kind: TemporaSlotKind = dow === 0 ? 'sunday' : 'feria';
      push(map, d, key, 'TimeAfterPentecost', s + 1, kind);
    }
  }
}

/**
 * Advent I Sunday through Dec 23. Dec 24 is Vigil of Christmas (Sancti).
 */
function walkAdvent({ year, map }: WalkArgs): void {
  const { advent1Sunday } = computeAnchors(year);
  const dec24 = new Date(Date.UTC(year, 11, 24));
  for (let d = advent1Sunday; d < dec24; d = addDays(d, 1)) {
    const weeksFromAdv1 = Math.floor((d.getTime() - advent1Sunday.getTime()) / (7 * 86_400_000));
    const weekIdx = weeksFromAdv1 + 1; // 1..4
    const dow = d.getUTCDay() as DayOfWeek;
    const key = `advent_${weekIdx}_${WEEKDAYS[dow]}`;
    const kind: TemporaSlotKind = dow === 0 ? 'sunday' : 'feria';
    push(map, d, key, 'Advent', weekIdx, kind);
  }
}

export function buildProperOfTime1962(year: number): ProperOfTimeYear {
  const map: ProperOfTimeYear = new Map();
  walkChristmasTailStartOfYear({ year, map });
  walkHolyNameWindow({ year, map });
  walkTimeAfterEpiphany({ year, map });
  walkPreLent({ year, map });
  walkLent({ year, map });
  walkHolyWeek({ year, map });
  walkEasterOctave({ year, map });
  walkPaschaltide({ year, map });
  walkPentecostWeek({ year, map });
  walkTimeAfterPentecost({ year, map });
  walkAdvent({ year, map });
  walkChristmasTailEndOfYear({ year, map });
  return map;
}
