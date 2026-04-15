/**
 * Programmatic mapping from Divinum-Officium tempora file keys to readable
 * snake_case slugs aligned with romcal1969 where celebrations coincide.
 *
 * Suffix conventions (applied orthogonally to the base slug):
 *   `_optional_variant`    DO's `o` suffix (parallel/alternate reading)
 *   `_tridentine`          DO's `t` suffix (pre-1960 rubric variant)
 *   `_rubrica1960`         DO's `r` suffix (post-1960 rubric variant)
 *   `_anticipated`         DO's `tt` suffix (simplified anticipated Sunday)
 *
 * `a` suffix is **not** mechanical: it marks a distinct celebration slot
 * (Holy Family on `Epi1-0a`, etc.) and is handled via explicit overrides.
 *
 * `m1/m2/m3` and `rm1/rm2` mass-variant suffixes are likewise named
 * explicitly (e.g. Maundy Thursday chrism mass vs. evening mass).
 */

const WEEKDAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'] as const;

/** Tempora keys whose slug is fully hand-authored (overrides any pattern). */
const EXPLICIT: Record<string, string> = {
  // Advent final week — Dec 17-24 O-antiphon ferias in DO are Adv{N}-*
  // but the base pattern produces correct slugs, no override needed.

  // Christmas octave
  'Nat1-0': 'sunday_within_octave_of_christmas',
  // Pre-1960 Holy Family slot (Sunday within Christmas octave). 1962
  // uses Epi1-0a; retain this distinct slug for DO's Tridentine variant.
  'Nat1-0a': 'holy_family_within_christmas_octave',
  'Nat2-0': 'second_sunday_after_christmas',
  // Nat02..Nat05 are the Jan 2-5 ferials in missa/ (Die Secunda Januarii…).
  // DO reuses the same file keys in horas/ to label Dec 27-30 of the
  // Christmas octave; missa/ wins for our slug taxonomy because the 1962
  // calendar resolver emits these keys for Jan 2-5.
  Nat02: 'christmas_time_january_2',
  Nat03: 'christmas_time_january_3',
  Nat04: 'christmas_time_january_4',
  Nat05: 'christmas_time_january_5',
  // Dec 29-31 intra-octave ferials (5th/6th/7th day of the Christmas octave).
  Nat29: 'christmas_octave_day_5',
  Nat30: 'christmas_octave_day_6',
  Nat31: 'christmas_octave_day_7',

  // Epiphany & its octave
  'Epi1-0': 'first_sunday_after_epiphany',
  'Epi1-0a': 'holy_family',
  'Epi1-1': 'epiphany_octave_day_2',
  'Epi1-2': 'epiphany_octave_day_3',
  'Epi1-3': 'epiphany_octave_day_4',
  'Epi1-4': 'epiphany_octave_day_5',
  'Epi1-5': 'epiphany_octave_day_6',
  'Epi1-6': 'epiphany_octave_day_7',

  // Septuagesima cycle
  'Quadp1-0': 'septuagesima_sunday',
  'Quadp2-0': 'sexagesima_sunday',
  'Quadp3-0': 'quinquagesima_sunday',

  // Lenten specials (1969 parity where applicable)
  'Quad6-0': 'palm_sunday',
  'Quad6-1': 'holy_week_monday',
  'Quad6-2': 'holy_week_tuesday',
  'Quad6-3': 'holy_week_wednesday',
  'Quad6-4': 'maundy_thursday',
  'Quad6-5': 'good_friday',
  'Quad6-6': 'holy_saturday',
  'Quad6-4m1': 'maundy_thursday_chrism_mass',
  'Quad6-4m2': 'maundy_thursday_evening_mass',

  // Passion-week oddity
  'Quad5-5Feria': 'lent_5_friday_seven_sorrows_commemoration',

  // Easter Triduum / octave
  'Pasc0-0': 'easter_sunday',
  'Pasc0-1': 'easter_monday',
  'Pasc0-2': 'easter_tuesday',
  'Pasc0-3': 'easter_wednesday',
  'Pasc0-4': 'easter_thursday',
  'Pasc0-5': 'easter_friday',
  'Pasc0-6': 'easter_saturday',

  // Pentecost / Trinity / Corpus Christi / Sacred Heart (1969 parity)
  'Pent01-0': 'trinity_sunday',
  'Pent01-0a': 'trinity_sunday_alternative',
  'Pent01-4': 'corpus_christi',
  'Pent02-5': 'sacred_heart_of_jesus',

  // Numeric legacy codes (rare internal IDs, documented in
  // docs/1962/17-m10-key-migration.md)
  '093-3': 'legacy_093_3',
  '093-5': 'legacy_093_5',
  '093-6': 'legacy_093_6',
  '104-0': 'legacy_104_0',
};

function advent(match: RegExpMatchArray): string {
  const [, week, dow] = match;
  return `advent_${week}_${WEEKDAYS[Number(dow)]}`;
}

function lent(match: RegExpMatchArray): string {
  const [, week, dow] = match;
  return `lent_${week}_${WEEKDAYS[Number(dow)]}`;
}

function preLent(match: RegExpMatchArray): string {
  const [, cycle, dow] = match;
  const season = ['septuagesima', 'sexagesima', 'quinquagesima'][Number(cycle) - 1];
  return `${season}_${WEEKDAYS[Number(dow)]}`;
}

function easterOctave(match: RegExpMatchArray): string {
  const [, dow] = match;
  return `easter_${WEEKDAYS[Number(dow)]}`;
}

function easterTime(match: RegExpMatchArray): string {
  const [, week, dow] = match;
  return `easter_time_${week}_${WEEKDAYS[Number(dow)]}`;
}

function afterPentecost(match: RegExpMatchArray): string {
  const [, week, dow] = match;
  return `after_pentecost_${Number(week)}_${WEEKDAYS[Number(dow)]}`;
}

function resumedEpiphany(match: RegExpMatchArray): string {
  const [, week, dow] = match;
  return `resumed_epiphany_${week}_${WEEKDAYS[Number(dow)]}`;
}

function epiphany(match: RegExpMatchArray): string {
  const [, week, dow] = match;
  return `epiphany_${week}_${WEEKDAYS[Number(dow)]}`;
}

function nativity(match: RegExpMatchArray): string {
  const [, week, dow] = match;
  return `christmas_time_${week}_${WEEKDAYS[Number(dow)]}`;
}

const PATTERNS: { re: RegExp; fn: (m: RegExpMatchArray) => string }[] = [
  { re: /^Adv([1-4])-([0-6])$/, fn: advent },
  { re: /^Quadp([1-3])-([1-6])$/, fn: preLent },
  { re: /^Quad([1-5])-([0-6])$/, fn: lent },
  { re: /^Pasc0-([1-6])$/, fn: easterOctave },
  { re: /^Pasc([1-7])-([0-6])$/, fn: easterTime },
  { re: /^Pent(\d{2})-([0-6])$/, fn: afterPentecost },
  { re: /^PentEpi([3-6])-([0-6])$/, fn: resumedEpiphany },
  { re: /^Epi([1-6])-([0-6])$/, fn: epiphany },
  { re: /^Nat([1-2])-0$/, fn: nativity },
];

const SUFFIX_TOKENS: { re: RegExp; token: string }[] = [
  { re: /Feriat$/, token: '_feria_tridentine' },
  { re: /Feriao$/, token: '_feria_optional_variant' },
  { re: /Feria$/, token: '_feria' },
  { re: /tt$/, token: '_anticipated' },
  { re: /rm([12])$/, token: '_rubrica1960_mass_$1' },
  { re: /m([123])$/, token: '_mass_$1' },
  { re: /r$/, token: '_rubrica1960' },
  { re: /t$/, token: '_tridentine' },
  { re: /o$/, token: '_optional_variant' },
];

function stripSuffix(key: string): { base: string; token: string } {
  for (const { re, token } of SUFFIX_TOKENS) {
    const match = key.match(re);
    if (match) {
      return {
        base: key.slice(0, match.index),
        token: token.replace('$1', match[1] ?? ''),
      };
    }
  }
  return { base: key, token: '' };
}

export function temporaKeyToSlug(doKey: string): string {
  if (EXPLICIT[doKey]) return EXPLICIT[doKey];

  const { base, token } = stripSuffix(doKey);
  if (base !== doKey) {
    // Resolve the stripped base recursively — explicit overrides for the
    // base still apply, and `_rubrica1960` on top of `palm_sunday` becomes
    // `palm_sunday_rubrica1960`.
    if (EXPLICIT[base]) return EXPLICIT[base] + token;
    for (const { re, fn } of PATTERNS) {
      const match = base.match(re);
      if (match) return fn(match) + token;
    }
  }

  for (const { re, fn } of PATTERNS) {
    const match = doKey.match(re);
    if (match) return fn(match);
  }

  throw new Error(`temporaKeyToSlug: no rule for DO key "${doKey}"`);
}

export { EXPLICIT as TEMPORA_EXPLICIT_MAP };
