import type { Class1962 } from './meta-1962';

/**
 * Map a tempora slug (as emitted by {@link ProperOfTime1962}) to its
 * 1962 class. Ported verbatim from `rubrics/tempora-class.ts`, re-keyed
 * on the OOP slugs — where 1962-legacy and OOP names diverge the
 * patterns/sets below track the OOP emission. Deliberate callouts:
 *
 *   - Triduum keys: `thursday_of_the_lords_supper`, `friday_of_the_passion_of_the_lord`,
 *     `holy_saturday` (legacy used `maundy_thursday`/`good_friday`/`holy_saturday`).
 *   - Palm Sunday: `palm_sunday_of_the_passion_of_the_lord` (legacy `palm_sunday`).
 *   - Ash Wednesday: `ash_wednesday` (legacy also `quinquagesima_wednesday`).
 *   - Low Sunday: `easter_time_1_sunday` (Octave Day of Easter / Dominica in Albis).
 *   - Pentecost octave ferias: `pentecost_octave_{dow}` (legacy
 *     `easter_time_7_{dow}`).
 *   - Vigil of Pentecost: `vigil_of_pentecost` (legacy `easter_time_6_saturday`).
 *   - Advent Dec 17-23 privileged ferias: `advent_december_{17..23}` —
 *     distinct IDs in OOP, so no date lookup is needed to classify them
 *     Class II.
 */

const TRIDUUM_KEYS = new Set(['thursday_of_the_lords_supper', 'friday_of_the_passion_of_the_lord', 'holy_saturday']);
const CLASS_I_SOLEMN_SUNDAYS = new Set([
  'easter_sunday',
  'pentecost_sunday',
  'easter_time_1_sunday', // Low Sunday (Octave Day of Easter / Dominica in Albis)
  'palm_sunday_of_the_passion_of_the_lord',
]);

/**
 * Solemnities of the Lord emitted by ProperOfTime1962 that are Class I
 * under the 1962 rubrics (not Class I Sundays — those are in
 * CLASS_I_SOLEMN_SUNDAYS). Christ the King is the last Sunday of
 * October in 1962 and also Class I.
 */
const CLASS_I_LORD_SOLEMNITIES = new Set([
  'nativity_of_the_lord',
  'epiphany_of_the_lord',
  'ascension_of_the_lord',
  'corpus_christi',
  'most_sacred_heart_of_jesus',
  'our_lord_jesus_christ_king_of_the_universe',
]);

/** Class II solemnities emitted by ProperOfTime1962. */
const CLASS_II_LORD_SOLEMNITIES = new Set([
  'circumcision_of_the_lord', // Octave Day of Christmas
  'most_holy_name_of_jesus',
]);

function isAdventSunday(key: string): boolean {
  return /^advent_[1-4]_sunday$/.test(key);
}

function isAdventFeria(key: string): boolean {
  return /^advent_[1-4]_(monday|tuesday|wednesday|thursday|friday|saturday)$/.test(key);
}

/** Dec 17-23 privileged weekdays; OOP emits distinct slugs. */
function isAdventDecemberPrivileged(key: string): boolean {
  return /^advent_december_(1[7-9]|2[0-3])$/.test(key);
}

function isLentSunday(key: string): boolean {
  // Passion Sunday (= Lent 5 Sunday) is emitted as `passion_sunday` in OOP.
  return /^lent_[1-4]_sunday$/.test(key) || key === 'passion_sunday';
}

function isLentFeria(key: string): boolean {
  return (
    /^lent_[1-4]_(monday|tuesday|wednesday|thursday|friday|saturday)$/.test(key) ||
    /^passion_week_(monday|tuesday|wednesday|thursday|friday|saturday)$/.test(key) ||
    /^(thursday|friday|saturday)_after_ash_wednesday$/.test(key)
  );
}

const HOLY_WEEK_FERIAS = new Set(['holy_monday', 'holy_tuesday', 'holy_wednesday', 'holy_thursday']);
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
  // Weeks 1..6 post-octave (Low Week through Sat before Pentecost). Easter
  // Octave ferias emit distinct `easter_{dow}` keys handled separately.
  return /^easter_time_[1-6]_(monday|tuesday|wednesday|thursday|friday|saturday)$/.test(key);
}

function isPentecostOctaveWeekday(key: string): boolean {
  return /^pentecost_octave_(monday|tuesday|wednesday|thursday|friday|saturday)$/.test(key);
}

const QUADP_SUNDAYS = new Set(['septuagesima_sunday', 'sexagesima_sunday', 'quinquagesima_sunday']);
function isQuadpSunday(key: string): boolean {
  return QUADP_SUNDAYS.has(key);
}

function isQuadpFeria(key: string): boolean {
  return /^(septuagesima|sexagesima|quinquagesima)_(monday|tuesday|wednesday|thursday|friday|saturday)$/.test(key);
}

function isEpiphanySunday(key: string): boolean {
  // OOP emits `holy_family_of_jesus_mary_and_joseph` (1st Sunday after Epi),
  // plus `epiphany_{N}_sunday` for the following Sundays.
  return key === 'holy_family_of_jesus_mary_and_joseph' || /^epiphany_[1-6]_sunday$/.test(key);
}

function isPentSunday(key: string): boolean {
  // Weeks 1-27 of time after Pentecost. Specials (`trinity_sunday`,
  // `corpus_christi`, `most_sacred_heart_of_jesus`) are handled by explicit
  // class lookups.
  return /^after_pentecost_([1-9]|1[0-9]|2[0-7])_sunday$/.test(key);
}

function isPerAnnumWeekday(key: string): boolean {
  return (
    /^epiphany_[1-6]_(monday|tuesday|wednesday|thursday|friday|saturday)$/.test(key) ||
    /^(monday|tuesday|wednesday|thursday|friday|saturday)_after_epiphany$/.test(key) ||
    /^christmas_time_january_[2-5]$/.test(key) ||
    /^after_pentecost_([1-9]|1[0-9]|2[0-7])_(monday|tuesday|wednesday|thursday|friday|saturday)$/.test(key)
  );
}

const CHRISTMAS_OCTAVE_DAYS = new Set([
  'christmas_octave_day_2',
  'christmas_octave_day_3',
  'christmas_octave_day_4',
  'christmas_octave_day_5',
  'christmas_octave_day_6',
  'christmas_octave_day_7',
]);

export function classifyTempora(key: string): Class1962 {
  if (TRIDUUM_KEYS.has(key)) return 1;
  if (CLASS_I_SOLEMN_SUNDAYS.has(key)) return 1;
  if (CLASS_I_LORD_SOLEMNITIES.has(key)) return 1;
  if (isAdventSunday(key)) return 1;
  if (isLentSunday(key)) return 1;
  if (key === 'ash_wednesday') return 1;
  if (isHolyWeekFeria(key)) return 1;
  if (isEasterWeekFeria(key)) return 1;
  if (key === 'vigil_of_pentecost') return 1;
  if (key === 'trinity_sunday') return 1;

  if (CLASS_II_LORD_SOLEMNITIES.has(key)) return 2;
  if (isQuadpSunday(key)) return 2;
  if (isEpiphanySunday(key)) return 2;
  if (isPentSunday(key)) return 2;
  if (key === 'sunday_within_octave_of_christmas') return 2;
  if (CHRISTMAS_OCTAVE_DAYS.has(key)) return 2;
  if (isPentecostOctaveWeekday(key)) return 2;
  if (isAdventDecemberPrivileged(key) || key === 'vigil_of_christmas') return 2;

  if (isLentFeria(key)) return 3;

  if (isAdventFeria(key)) return 4;
  if (isQuadpFeria(key)) return 4;
  if (isPaschaltideWeekday(key)) return 4;
  if (isPerAnnumWeekday(key)) return 4;

  return 4;
}
