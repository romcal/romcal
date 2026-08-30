/**
 * The order of precedence of the Rubricae Breviarii et Missalis Romani, 1960.
 *
 * The 1960 reform replaced the older doubles and semidoubles with four classes
 * (Rubricae §91), and the Tabula Dierum Liturgicorum that follows §91 orders the days
 * within them. That table is what this list encodes: the index is the priority, and
 * the engine reads nothing else.
 *
 * The shape differs from 1969 in two ways that matter. Ferias and Sundays are ranked
 * by class alongside feasts rather than in a separate track, so a II class feast
 * really does outrank a III class Sunday. And a day that loses is not always lost:
 * the classes below carry commemoration and transfer rules, which the occurrence
 * policy applies, not this list.
 */
export const Precedences1962 = {
  /**
   * The Triduum. §91 ranks these above everything, and they admit no commemoration
   * at all.
   */
  Triduum_1962_1: 'TRIDUUM_1962_1' as const,

  /** Easter and Pentecost, the two Sundays with a privileged octave. */
  PrivilegedSunday_1962_2: 'PRIVILEGED_SUNDAY_1962_2' as const,

  /**
   * I class feasts of the Lord: Christmas, Epiphany, Ascension, Corpus Christi, the
   * Sacred Heart, Christ the King. Fixed to their day, never transferred to a Sunday.
   */
  LordFeast_1962_3: 'LORD_FEAST_1962_3' as const,

  /**
   * I class Sundays: the Sundays of Advent and Lent, Passion Sunday, Palm Sunday and
   * Low Sunday. These take precedence over I class feasts, which are transferred off
   * them (§15).
   */
  FirstClassSunday_1962_4: 'FIRST_CLASS_SUNDAY_1962_4' as const,

  /** I class feasts of the Blessed Virgin and of the saints. */
  FirstClassFeast_1962_5: 'FIRST_CLASS_FEAST_1962_5' as const,

  /** Ash Wednesday and the ferias of Holy Week: I class ferias (§16). */
  FirstClassFeria_1962_6: 'FIRST_CLASS_FERIA_1962_6' as const,

  /** Days within the octaves of Easter and Pentecost. */
  FirstClassOctaveDay_1962_7: 'FIRST_CLASS_OCTAVE_DAY_1962_7' as const,

  /** The Commemoration of All the Faithful Departed, ranked with I class days (§16). */
  AllSouls_1962_8: 'ALL_SOULS_1962_8' as const,

  /** I class vigils: Christmas and Pentecost, which suppress the occurring day. */
  FirstClassVigil_1962_9: 'FIRST_CLASS_VIGIL_1962_9' as const,

  /** II class feasts of the Lord. */
  SecondClassLordFeast_1962_10: 'SECOND_CLASS_LORD_FEAST_1962_10' as const,

  /** II class Sundays: every Sunday not of Advent, Lent or Eastertide. */
  SecondClassSunday_1962_11: 'SECOND_CLASS_SUNDAY_1962_11' as const,

  /** II class feasts of the Blessed Virgin and of the saints. */
  SecondClassFeast_1962_12: 'SECOND_CLASS_FEAST_1962_12' as const,

  /**
   * II class ferias: Ash Wednesday's Ember days aside, the Ember days of Advent,
   * September and Lent, and the Monday of the Greater Litanies (§23).
   */
  SecondClassFeria_1962_13: 'SECOND_CLASS_FERIA_1962_13' as const,

  /** Days within a II class octave, where a particular calendar keeps one. */
  SecondClassOctaveDay_1962_14: 'SECOND_CLASS_OCTAVE_DAY_1962_14' as const,

  /** III class feasts. */
  ThirdClassFeast_1962_15: 'THIRD_CLASS_FEAST_1962_15' as const,

  /** The ferias of Lent and Passiontide, and of Advent from 17 December (§24). */
  ThirdClassFeria_1962_16: 'THIRD_CLASS_FERIA_1962_16' as const,

  /** III class vigils, which yield rather than suppress. */
  ThirdClassVigil_1962_17: 'THIRD_CLASS_VIGIL_1962_17' as const,

  /** IV class ferias, and the Office of the Blessed Virgin on Saturday (§25). */
  FourthClassFeria_1962_18: 'FOURTH_CLASS_FERIA_1962_18' as const,

  /**
   * Days that are never celebrated in their own right but attached to whatever wins
   * the date. §106-114 govern how many are said and in what order; the occurrence
   * policy applies that, and these two values only say which kind a day is.
   */
  PrivilegedCommemoration_1962_19: 'PRIVILEGED_COMMEMORATION_1962_19' as const,

  OrdinaryCommemoration_1962_20: 'ORDINARY_COMMEMORATION_1962_20' as const,
} as const;

export const PRECEDENCES_1962 = [
  Precedences1962.Triduum_1962_1,
  Precedences1962.PrivilegedSunday_1962_2,
  Precedences1962.LordFeast_1962_3,
  Precedences1962.FirstClassSunday_1962_4,
  Precedences1962.FirstClassFeast_1962_5,
  Precedences1962.FirstClassFeria_1962_6,
  Precedences1962.FirstClassOctaveDay_1962_7,
  Precedences1962.AllSouls_1962_8,
  Precedences1962.FirstClassVigil_1962_9,
  Precedences1962.SecondClassLordFeast_1962_10,
  Precedences1962.SecondClassSunday_1962_11,
  Precedences1962.SecondClassFeast_1962_12,
  Precedences1962.SecondClassFeria_1962_13,
  Precedences1962.SecondClassOctaveDay_1962_14,
  Precedences1962.ThirdClassFeast_1962_15,
  Precedences1962.ThirdClassFeria_1962_16,
  Precedences1962.ThirdClassVigil_1962_17,
  Precedences1962.FourthClassFeria_1962_18,
  Precedences1962.PrivilegedCommemoration_1962_19,
  Precedences1962.OrdinaryCommemoration_1962_20,
] as const;

export type Precedence1962 = (typeof PRECEDENCES_1962)[number];
