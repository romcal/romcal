import type { Celebration1962 } from './types';

const CLASS_BASE: Record<1 | 2 | 3 | 4, number> = {
  1: 4000,
  2: 3000,
  3: 2000,
  4: 1000,
};

const TRIDUUM = new Set(['maundy_thursday', 'good_friday', 'holy_saturday']);
const EASTER_PENTECOST = new Set(['easter_sunday', 'easter_time_7_sunday', 'trinity_sunday']);
const SOLEMN_SUNDAYS = new Set([
  'easter_time_1_sunday', // Low Sunday
  'palm_sunday',
]);

const LENT_FERIA = /^lent_[1-5]_(monday|tuesday|wednesday|thursday|friday|saturday)$/;
const LENT_SUNDAY = /^lent_[1-5]_sunday$/;
const ADVENT_SUNDAY = /^advent_[1-4]_sunday$/;
const HOLY_WEEK_FERIA = /^holy_week_(monday|tuesday|wednesday)$/;
const EASTER_WEEK_FERIA = /^easter_(monday|tuesday|wednesday|thursday|friday|saturday)$/;
const ANY_SUNDAY = /_sunday$/;
const HOLY_FAMILY = 'holy_family';

/**
 * Sancti `key`s for fixed-date Class I + Class II feasts of the Lord.
 * Per Codex Rubricarum 1960 §15, these win over a coinciding Class II
 * Sunday with the Sunday commemorated. The +200 fine adjustment is
 * what makes Transfiguration (08-06, Class II) beat a Class II Sunday
 * (e.g. after_pentecost_11_sunday) when they coincide.
 *
 * Kept narrow on purpose — only feasts whose class is I or II, since
 * Class III/IV Lord feasts don't trigger §15.
 */
const LORD_FEAST_KEYS: Set<string> = new Set([
  'the_circumcision_of_the_lord', // 01-01
  'epiphany_of_the_lord', // 01-06
  'the_purification_of_the_blessed_virgin_mary_candlemas', // 02-02
  'the_most_precious_blood_of_our_lord_jesus_christ', // 07-01
  'the_transfiguration_of_our_lord_jesus_christ', // 08-06
  'exaltation_of_the_holy_cross', // 09-14
  'nativity_of_our_lord_jesus_christ', // 12-25 (base key, displayed before mass split)
  'nativity_of_the_lord_at_midnight', // 12-25 m1
  'nativity_of_the_lord_at_dawn', // 12-25 m2
  'nativity_of_the_lord_during_the_day', // 12-25 m3
]);

function fineAdjustment(c: Celebration1962): number {
  if (c.kind === 'tempora') {
    if (TRIDUUM.has(c.key)) return 400;
    if (EASTER_PENTECOST.has(c.key)) return 380;
    if (ADVENT_SUNDAY.test(c.key) || LENT_SUNDAY.test(c.key) || SOLEMN_SUNDAYS.has(c.key)) {
      return 360;
    }
    if (c.key === 'quinquagesima_wednesday') return 340; // Ash Wednesday
    if (HOLY_WEEK_FERIA.test(c.key)) return 320;
    if (EASTER_WEEK_FERIA.test(c.key)) return 300;
    if (c.key === 'easter_time_6_saturday') return 280; // Vigil of Pentecost
    if (c.classOf1962 === 2 && (ANY_SUNDAY.test(c.key) || c.key === HOLY_FAMILY)) return 150;
    if (LENT_FERIA.test(c.key)) return 100;
    return 0;
  }
  // Sancti: elevate feasts of the Lord within their class.
  if (c.classOf1962 <= 2 && LORD_FEAST_KEYS.has(c.key)) return 200;
  return 0;
}

export function scorePrecedence(c: Celebration1962): number {
  return CLASS_BASE[c.classOf1962] + fineAdjustment(c) + (c.numericRank || 0) * 0.01;
}
