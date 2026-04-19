/**
 * Ordered precedence of liturgical days per Rubricae Generales Breviarii
 * et Missalis Romani §91 (Codex Rubricarum 1960). Follows the shape of
 * the 1969 `Precedences` enum (`rites/roman1969/src/constants/precedences.ts`)
 * so resolution collapses to `PRECEDENCES_1962.indexOf(a) - PRECEDENCES_1962.indexOf(b)`.
 *
 * Slot granularity is chosen to match the tiers the legacy
 * `scorePrecedenceBase` produced; finer rubrical sub-splits can be added
 * later without breaking downstream consumers since the array position
 * is the contract, not the slot count.
 */
export const Precedences1962 = {
  /**
   * 1a - The Sacred Triduum (Maundy Thursday, Good Friday, Holy Saturday).
   * Tempora keys: `thursday_of_the_lords_supper`, `friday_of_the_passion_of_the_lord`,
   * `holy_saturday`.
   */
  Triduum_1a: 'TRIDUUM_1A' as const,

  /**
   * 1b - Easter Sunday, Pentecost Sunday, Trinity Sunday.
   * The apex Sundays of the Temporal cycle.
   */
  EasterPentecostTrinity_1b: 'EASTER_PENTECOST_TRINITY_1B' as const,

  /**
   * 1c - Privileged Sundays of Class I.
   * Sundays of Advent, Lent (1-4), Passion Sunday, Palm Sunday,
   * Low Sunday (Octave Day of Easter).
   */
  PrivilegedSunday_1c: 'PRIVILEGED_SUNDAY_1C' as const,

  /**
   * 1d - Ash Wednesday.
   */
  AshWednesday_1d: 'ASH_WEDNESDAY_1D' as const,

  /**
   * 1e - Weekdays of Holy Week (Monday, Tuesday, Wednesday).
   * Holy Thursday is in the Triduum (1a).
   */
  HolyWeekFeria_1e: 'HOLY_WEEK_FERIA_1E' as const,

  /**
   * 1f - Weekdays within the Octave of Easter (Monday through Saturday).
   */
  EasterOctaveFeria_1f: 'EASTER_OCTAVE_FERIA_1F' as const,

  /**
   * 1g - Vigil of Pentecost (Class I vigil).
   */
  PentecostVigil_1g: 'PENTECOST_VIGIL_1G' as const,

  /**
   * 1h - Days of Class I (catchall).
   * Class I Lord solemnities (Nativity, Epiphany, Ascension, Corpus Christi,
   * Sacred Heart, Christ the King), Class I sancti (Immaculate Conception,
   * Assumption, St Joseph, Ss Peter & Paul, All Saints, Annunciation,
   * Precious Blood, …), Class I vigils other than Pentecost.
   *
   * All Class I days coinciding here fall to §96 tempora-ante-sancti
   * (then numericRank + name) as the tiebreak — the legacy scorer's
   * +200 bump for `classOf1962 <= 2 && LORD_FEAST_KEYS` is a bug at
   * class=1 (e.g. it would float Precious Blood above tempora Sacred
   * Heart on 2011-07-01, contra published ordos). §15 is Sunday-
   * displacement only, not a bump among Class I days.
   */
  ClassI_1h: 'CLASS_I_1H' as const,

  /**
   * 2a - Class II feasts of the Lord.
   * Per Rubricae 1960 §15 these replace a coinciding Class II Sunday.
   * Candlemas (02-02), Precious Blood (07-01), Transfiguration (08-06),
   * Exaltation of the Holy Cross (09-14).
   */
  ClassIIFeastOfTheLord_2a: 'CLASS_II_FEAST_OF_THE_LORD_2A' as const,

  /**
   * 2b - Pre-Lent ("Quadragesima") Sundays.
   * Septuagesima, Sexagesima, Quinquagesima. Privileged — displace Sundays
   * after Epiphany that fall on the same date.
   */
  PreLentSunday_2b: 'PRE_LENT_SUNDAY_2B' as const,

  /**
   * 2c - Class II Sundays.
   * Sundays after Epiphany, Sundays after Pentecost, Holy Family,
   * Sunday within the Octave of Christmas.
   */
  ClassIISunday_2c: 'CLASS_II_SUNDAY_2C' as const,

  /**
   * 2d - Other days of Class II.
   * Class II Lord solemnities (Circumcision, Holy Name of Jesus),
   * weekdays within the Octave of Christmas, weekdays within the Octave of
   * Pentecost, Advent privileged ferias (Dec 17-23) including the Vigil
   * of Christmas, Class II sancti (not elevated under §15), Class II vigils.
   */
  ClassII_2d: 'CLASS_II_2D' as const,

  /**
   * 3a - Privileged Lenten ferias.
   * Weekdays of Lent (weeks 1-4), weekdays of Passion Week,
   * Thursday/Friday/Saturday after Ash Wednesday.
   */
  LentFeria_3a: 'LENT_FERIA_3A' as const,

  /**
   * 3b - Other days of Class III.
   * Class III sancti, Class III vigils.
   */
  ClassIII_3b: 'CLASS_III_3B' as const,

  /**
   * 4a - Days of Class IV.
   * Per-annum ferials, Advent ferials before Dec 17, ferials of pre-Lent
   * (Septuagesima, Sexagesima, Quinquagesima weeks), ferials of
   * Paschaltide after the Octave of Easter, Office of Our Lady on
   * Saturday, Class IV simple sancti, and commemorations — all share
   * this slot. Sub-distinctions (tempora ferial vs sancti simple vs
   * commemoration) are handled by the `kind1962` tempora/sancti split
   * and the §111–113 commemoration filter in `Calendar1962#postReduceDay`,
   * not by further slotting.
   */
  ClassIV_4a: 'CLASS_IV_4A' as const,
} as const;

/**
 * Ordered precedence array. Position is the contract: lower index =
 * higher precedence, consumed by `Calendar1962#resolveOccurrence` via
 * `PRECEDENCES_1962.indexOf(a) - PRECEDENCES_1962.indexOf(b)`.
 */
export const PRECEDENCES_1962 = [
  Precedences1962.Triduum_1a,
  Precedences1962.EasterPentecostTrinity_1b,
  Precedences1962.PrivilegedSunday_1c,
  Precedences1962.AshWednesday_1d,
  Precedences1962.HolyWeekFeria_1e,
  Precedences1962.EasterOctaveFeria_1f,
  Precedences1962.PentecostVigil_1g,
  Precedences1962.ClassI_1h,
  Precedences1962.ClassIIFeastOfTheLord_2a,
  Precedences1962.PreLentSunday_2b,
  Precedences1962.ClassIISunday_2c,
  Precedences1962.ClassII_2d,
  Precedences1962.LentFeria_3a,
  Precedences1962.ClassIII_3b,
  Precedences1962.ClassIV_4a,
] as const;

export type Precedence1962 = (typeof PRECEDENCES_1962)[number];
