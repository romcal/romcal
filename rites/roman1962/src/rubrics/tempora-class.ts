import type { ProperOfTimeEntry } from '../proper-of-time';

export type Class1962 = 1 | 2 | 3 | 4;

// Slug-shaped keys as emitted by proper-of-time/resolver.ts and the import
// pipeline. Patterns cover every tempora slug the resolver can produce —
// sancti slugs (which also flow through classifyTempora?) do not, so unmatched
// keys fall through to the default Class IV.

const TRIDUUM_KEYS = new Set(['maundy_thursday', 'good_friday', 'holy_saturday']);
const CLASS_I_SOLEMN_SUNDAYS = new Set([
  'easter_sunday',
  'easter_time_7_sunday', // Pentecost Sunday
  'easter_time_1_sunday', // Low Sunday (Octave Day of Easter)
  'palm_sunday',
]);

function isAdventSunday(key: string): boolean {
  return /^advent_[1-4]_sunday$/.test(key);
}

function isAdventFeria(key: string): boolean {
  return /^advent_[1-4]_(monday|tuesday|wednesday|thursday|friday|saturday)$/.test(key);
}

function isLentSunday(key: string): boolean {
  return /^lent_[1-5]_sunday$/.test(key);
}

function isLentFeria(key: string): boolean {
  return /^lent_[1-5]_(monday|tuesday|wednesday|thursday|friday|saturday)$/.test(key);
}

const HOLY_WEEK_FERIAS = new Set(['holy_week_monday', 'holy_week_tuesday', 'holy_week_wednesday']);
function isHolyWeekFeria(key: string): boolean {
  return HOLY_WEEK_FERIAS.has(key);
}

const EASTER_WEEK_FERIAS = new Set([
  'easter_monday',
  'easter_tuesday',
  'easter_wednesday',
  'easter_thursday',
  'easter_friday',
  'easter_saturday',
]);
function isEasterWeekFeria(key: string): boolean {
  return EASTER_WEEK_FERIAS.has(key);
}

function isPaschaltideWeekday(key: string): boolean {
  return /^easter_time_[1-6]_(monday|tuesday|wednesday|thursday|friday|saturday)$/.test(key);
}

function isPentecostOctaveWeekday(key: string): boolean {
  return /^easter_time_7_(monday|tuesday|wednesday|thursday|friday|saturday)$/.test(key);
}

const QUADP_SUNDAYS = new Set(['septuagesima_sunday', 'sexagesima_sunday', 'quinquagesima_sunday']);
function isQuadpSunday(key: string): boolean {
  return QUADP_SUNDAYS.has(key);
}

function isQuadpFeria(key: string): boolean {
  return /^(septuagesima|sexagesima|quinquagesima)_(monday|tuesday|wednesday|thursday|friday|saturday)$/.test(key);
}

function isEpiphanySunday(key: string): boolean {
  // `holy_family` (1st Sunday after Epiphany slot) + `epiphany_{2..6}_sunday`
  // + `first_sunday_after_epiphany` (the EXPLICIT slug, unused by resolver
  // but emitted by DO data files for fallback formularies).
  return key === 'holy_family' || key === 'first_sunday_after_epiphany' || /^epiphany_[2-6]_sunday$/.test(key);
}

function isPentSunday(key: string): boolean {
  // Weeks 1-24 of time after Pentecost. Specials (`trinity_sunday`,
  // `corpus_christi`, `sacred_heart_of_jesus`) are still Class I/II per the
  // explicit handling in classifyTempora.
  return /^after_pentecost_([1-9]|1[0-9]|2[0-4])_sunday$/.test(key);
}

function isPentEpiSunday(key: string): boolean {
  return /^resumed_epiphany_[3-6]_sunday$/.test(key);
}

function isPerAnnumWeekday(key: string): boolean {
  return (
    /^epiphany_[1-6]_(monday|tuesday|wednesday|thursday|friday|saturday)$/.test(key) ||
    /^epiphany_octave_day_[2-7]$/.test(key) ||
    /^after_pentecost_([1-9]|1[0-9]|2[0-4])_(monday|tuesday|wednesday|thursday|friday|saturday)$/.test(key) ||
    /^resumed_epiphany_[3-6]_(monday|tuesday|wednesday|thursday|friday|saturday)$/.test(key)
  );
}

function isAdventEmberOrLate(entry: ProperOfTimeEntry): boolean {
  // Advent ferias Dec 17-23 are Class II.
  if (!isAdventFeria(entry.temporaKey)) return false;
  const mmdd = entry.date.slice(5);
  return mmdd >= '12-17' && mmdd <= '12-23';
}

const CHRISTMAS_OCTAVE_DAYS = new Set(['christmas_octave_day_5', 'christmas_octave_day_6', 'christmas_octave_day_7']);
const CHRISTMAS_JANUARY_FERIAS = new Set([
  'christmas_time_january_2',
  'christmas_time_january_3',
  'christmas_time_january_4',
  'christmas_time_january_5',
]);

export function classifyTempora(entry: ProperOfTimeEntry): Class1962 {
  const k = entry.temporaKey;
  if (TRIDUUM_KEYS.has(k)) return 1;
  if (CLASS_I_SOLEMN_SUNDAYS.has(k)) return 1;
  if (isAdventSunday(k)) return 1;
  if (isLentSunday(k)) return 1;
  if (k === 'ash_wednesday' || k === 'quinquagesima_wednesday') return 1; // Ash Wednesday
  if (isHolyWeekFeria(k)) return 1;
  if (isEasterWeekFeria(k)) return 1;
  if (k === 'easter_time_6_saturday') return 1; // Vigil of Pentecost
  if (k === 'trinity_sunday') return 1;

  if (isQuadpSunday(k)) return 2;
  if (isEpiphanySunday(k)) return 2;
  if (isPentSunday(k)) return 2;
  if (isPentEpiSunday(k)) return 2;
  if (k === 'sunday_within_octave_of_christmas' || k === 'second_sunday_after_christmas') return 2;
  if (CHRISTMAS_OCTAVE_DAYS.has(k)) return 2;
  if (CHRISTMAS_JANUARY_FERIAS.has(k)) return 2;
  if (isPentecostOctaveWeekday(k)) return 2;
  if (isAdventEmberOrLate(entry)) return 2;

  if (isLentFeria(k)) return 3;

  if (isAdventFeria(k)) return 4;
  if (isQuadpFeria(k)) return 4;
  if (isPaschaltideWeekday(k)) return 4;
  if (isPerAnnumWeekday(k)) return 4;

  return 4;
}
