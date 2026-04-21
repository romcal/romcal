import { Precedence1962, Precedences1962 } from './constants/precedences-1962';
import type { Class1962, Kind1962 } from './meta-1962';

/**
 * Map an entry's (`class1962`, `key1962`, `kind1962`) triple onto a slot
 * in {@link PRECEDENCES_1962}. Rubricae 1960 §91 encodes the hierarchy
 * positionally; this helper is the build-time stamp that lets
 * `Calendar1962#resolveOccurrence` collapse to `indexOf` at runtime.
 *
 * Kept as a single top-down decision tree rather than a map lookup so the
 * ordering of membership checks is auditable — later checks only see keys
 * that fell through earlier ones (e.g. `ANY_SUNDAY` at the Class II level
 * never sees pre-Lent Sundays because they branch out one step earlier).
 */

const TRIDUUM = new Set(['thursday_of_the_lords_supper', 'friday_of_the_passion_of_the_lord', 'easter_vigil']);
const EASTER_PENTECOST_TRINITY = new Set(['easter_sunday', 'pentecost_sunday', 'most_holy_trinity']);
const PRIVILEGED_SOLEMN_SUNDAYS = new Set([
  'easter_time_1_sunday', // Low Sunday / Octave Day of Easter / Dominica in Albis
  'palm_sunday_of_the_passion_of_the_lord',
]);
const PRE_LENT_SUNDAYS = new Set(['septuagesima_sunday', 'sexagesima_sunday', 'quinquagesima_sunday']);
const LORD_FEAST_SANCTI_KEYS = new Set([
  'the_purification_of_the_blessed_virgin_mary_candlemas',
  'the_most_precious_blood_of_our_lord_jesus_christ',
  'the_transfiguration_of_our_lord_jesus_christ',
  'exaltation_of_the_holy_cross',
]);

const ADVENT_SUNDAY = /^advent_[1-4]_sunday$/;
const LENT_SUNDAY = /^(lent_[1-4]_sunday|passion_sunday)$/;
const HOLY_WEEK_FERIA = /^holy_(monday|tuesday|wednesday)$/;
const EASTER_WEEK_FERIA = /^easter_(monday|tuesday|wednesday|thursday|friday|saturday)$/;
const LENT_FERIA =
  /^(lent_[1-4]_(monday|tuesday|wednesday|thursday|friday|saturday)|passion_week_(monday|tuesday|wednesday|thursday|friday|saturday)|(thursday|friday|saturday)_after_ash_wednesday)$/;
const ANY_SUNDAY = /_sunday$/;
const HOLY_FAMILY = 'holy_family_of_jesus_mary_and_joseph';

export function derivePrecedence1962(classOf1962: Class1962, key1962: string, kind1962: Kind1962): Precedence1962 {
  if (classOf1962 === 1) {
    if (kind1962 === 'tempora') {
      if (TRIDUUM.has(key1962)) return Precedences1962.Triduum_1a;
      if (EASTER_PENTECOST_TRINITY.has(key1962)) return Precedences1962.EasterPentecostTrinity_1b;
      if (ADVENT_SUNDAY.test(key1962) || LENT_SUNDAY.test(key1962) || PRIVILEGED_SOLEMN_SUNDAYS.has(key1962)) {
        return Precedences1962.PrivilegedSunday_1c;
      }
      if (key1962 === 'ash_wednesday') return Precedences1962.AshWednesday_1d;
      if (HOLY_WEEK_FERIA.test(key1962)) return Precedences1962.HolyWeekFeria_1e;
      if (EASTER_WEEK_FERIA.test(key1962)) return Precedences1962.EasterOctaveFeria_1f;
      if (key1962 === 'vigil_of_pentecost') return Precedences1962.PentecostVigil_1g;
    }
    return Precedences1962.ClassI_1h;
  }

  if (classOf1962 === 2) {
    if (kind1962 === 'sancti' && LORD_FEAST_SANCTI_KEYS.has(key1962)) {
      return Precedences1962.ClassIIFeastOfTheLord_2a;
    }
    if (kind1962 === 'tempora') {
      if (PRE_LENT_SUNDAYS.has(key1962)) return Precedences1962.PreLentSunday_2b;
      if (ANY_SUNDAY.test(key1962) || key1962 === HOLY_FAMILY) return Precedences1962.ClassIISunday_2c;
    }
    return Precedences1962.ClassII_2d;
  }

  if (classOf1962 === 3) {
    if (kind1962 === 'tempora' && LENT_FERIA.test(key1962)) return Precedences1962.LentFeria_3a;
    return Precedences1962.ClassIII_3b;
  }

  return Precedences1962.ClassIV_4a;
}
