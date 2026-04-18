import type { Class1962, Kind1962 } from './meta-1962';

/**
 * Port of `rubrics/precedence.ts#scorePrecedence` for the OOP engine.
 * Same shape (CLASS_BASE + fineAdjustment + numericRank centi-tiebreak),
 * but keyed on the OOP tempora slugs emitted by `ProperOfTime1962` (see
 * `tempora-class.ts` for the legacy→OOP rename table). Kept verbatim
 * for everything else so the resolver behaviour is regression-safe.
 */

const CLASS_BASE: Record<Class1962, number> = {
  1: 4000,
  2: 3000,
  3: 2000,
  4: 1000,
};

const TRIDUUM = new Set(['thursday_of_the_lords_supper', 'friday_of_the_passion_of_the_lord', 'holy_saturday']);
const EASTER_PENTECOST = new Set(['easter_sunday', 'pentecost_sunday', 'trinity_sunday']);
const SOLEMN_SUNDAYS = new Set([
  'easter_time_2_sunday', // Low Sunday (OOP week numbering: 2 = octave day)
  'palm_sunday_of_the_passion_of_the_lord',
]);
/**
 * Pre-Lent ("Quadragesima") Sundays are Class II but privileged — per 1962
 * rubrics they displace Sundays after Epiphany on the same ISO date
 * (Septuagesima cuts the Epiphany cycle short). ProperOfTime1962 emits
 * `epiphany_{N}_sunday` through week 6 unconditionally, so we rely on the
 * scorer to pick the right Sunday when both land on the same day.
 */
const PRE_LENT_SUNDAYS = new Set(['septuagesima_sunday', 'sexagesima_sunday', 'quinquagesima_sunday']);

const LENT_FERIA =
  /^(lent_[1-4]_(monday|tuesday|wednesday|thursday|friday|saturday)|passion_week_(monday|tuesday|wednesday|thursday|friday|saturday)|(thursday|friday|saturday)_after_ash_wednesday)$/;
const LENT_SUNDAY = /^(lent_[1-4]_sunday|passion_sunday)$/;
const ADVENT_SUNDAY = /^advent_[1-4]_sunday$/;
const HOLY_WEEK_FERIA = /^holy_(monday|tuesday|wednesday)$/;
const EASTER_WEEK_FERIA = /^easter_(monday|tuesday|wednesday|thursday|friday|saturday)$/;
const ANY_SUNDAY = /_sunday$/;
const HOLY_FAMILY = 'holy_family_of_jesus_mary_and_joseph';

/**
 * Sancti `key`s for fixed-date Class I + Class II feasts of the Lord.
 * Per Codex Rubricarum 1960 §15, these win over a coinciding Class II
 * Sunday with the Sunday commemorated. The +200 fine adjustment is
 * what makes Transfiguration (08-06, Class II) beat a Class II Sunday
 * (e.g. after_pentecost_11_sunday) when they coincide.
 *
 * Kept narrow on purpose — only feasts whose class is I or II, since
 * Class III/IV Lord feasts don't trigger §15. Lord feasts whose sancti
 * fileKey coincides with a Proper-of-Time emission on the same date
 * (Nativity, Epiphany, Circumcision) are intentionally omitted: the
 * tempora entry already carries the right class via `classifyTempora`,
 * and the §15 bump would incorrectly promote the sancti duplicate
 * above the tempora canonical source.
 */
const LORD_FEAST_KEYS: Set<string> = new Set([
  'the_purification_of_the_blessed_virgin_mary_candlemas', // 02-02
  'the_most_precious_blood_of_our_lord_jesus_christ', // 07-01
  'the_transfiguration_of_our_lord_jesus_christ', // 08-06
  'exaltation_of_the_holy_cross', // 09-14
]);

export interface PrecedenceCandidate {
  readonly kind1962: Kind1962;
  readonly key1962: string;
  readonly classOf1962: Class1962;
  readonly numericRank1962?: number;
}

function fineAdjustment(c: PrecedenceCandidate): number {
  if (c.kind1962 === 'tempora') {
    if (TRIDUUM.has(c.key1962)) return 400;
    if (EASTER_PENTECOST.has(c.key1962)) return 380;
    if (ADVENT_SUNDAY.test(c.key1962) || LENT_SUNDAY.test(c.key1962) || SOLEMN_SUNDAYS.has(c.key1962)) {
      return 360;
    }
    if (c.key1962 === 'ash_wednesday') return 340;
    if (HOLY_WEEK_FERIA.test(c.key1962)) return 320;
    if (EASTER_WEEK_FERIA.test(c.key1962)) return 300;
    if (c.key1962 === 'vigil_of_pentecost') return 280;
    if (PRE_LENT_SUNDAYS.has(c.key1962)) return 200;
    if (c.classOf1962 === 2 && (ANY_SUNDAY.test(c.key1962) || c.key1962 === HOLY_FAMILY)) return 150;
    if (LENT_FERIA.test(c.key1962)) return 100;
    return 0;
  }
  // Sancti: elevate feasts of the Lord within their class.
  if (c.classOf1962 <= 2 && LORD_FEAST_KEYS.has(c.key1962)) return 200;
  return 0;
}

export function scorePrecedence(c: PrecedenceCandidate): number {
  return CLASS_BASE[c.classOf1962] + fineAdjustment(c) + (c.numericRank1962 || 0) * 0.01;
}

/**
 * Score without the `numericRank * 0.01` tiebreak. The primary sort
 * stage in `Calendar1962OOP#resolveOccurrence` uses this so that equal
 * class + fine adjustment ties are broken by kind (§96 tempora > sancti)
 * rather than by numericRank — which would otherwise let a sancti
 * duplicate of a same-class tempora Lord feast (e.g. Nativity) jump
 * ahead of its tempora canonical source.
 */
export function scorePrecedenceBase(c: PrecedenceCandidate): number {
  return CLASS_BASE[c.classOf1962] + fineAdjustment(c);
}
