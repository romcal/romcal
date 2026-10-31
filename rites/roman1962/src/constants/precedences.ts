/**
 * The order of precedence of the Rubricae Breviarii et Missalis Romani, 1960.
 *
 * The 1960 reform replaced the older doubles and semidoubles with four classes
 * (Rubricae §91), and the Tabula Dierum Liturgicorum that follows §91 orders the days
 * within them. That table is what this list encodes: the index is the priority, and
 * the engine reads nothing else. Numbers in the names match the table rows.
 *
 * The shape differs from 1969 in two ways that matter. Ferias and Sundays are ranked
 * by class alongside feasts rather than in a separate track, so a II class feast
 * really does outrank a III class Sunday. And a day that loses is not always lost:
 * the classes below carry commemoration and transfer rules, which the occurrence
 * policy applies, not this list.
 */
export const Precedences1962 = {
  /**
   * §91.1 — Christmas, Easter and Pentecost: 1st class with octave.
   */
  PrivilegedFeastWithOctave_1962_1: 'PRIVILEGED_FEAST_WITH_OCTAVE_1962_1' as const,

  /**
   * §91.2 — The sacred Triduum. Above every feast; admits no commemoration.
   */
  Triduum_1962_2: 'TRIDUUM_1962_2' as const,

  /**
   * §91.3 — I class feasts of the Lord other than Christmas: Epiphany, Ascension,
   * Trinity, Corpus Christi, the Sacred Heart, Christ the King. Fixed to their day.
   */
  LordFeast_1962_3: 'LORD_FEAST_1962_3' as const,

  /**
   * §91.4 — Immaculate Conception and Assumption. Preferred even to an Advent Sunday
   * (§15), so they sit above the I class Sundays.
   */
  PrivilegedMaryFeast_1962_4: 'PRIVILEGED_MARY_FEAST_1962_4' as const,

  /**
   * §91.5 — Vigil of Christmas and the octave day of Christmas (1 January). The vigil
   * replaces the Fourth Sunday of Advent when they coincide (§30).
   */
  ChristmasVigilOrOctaveDay_1962_5: 'CHRISTMAS_VIGIL_OR_OCTAVE_DAY_1962_5' as const,

  /**
   * §91.6 — Sundays of Advent, Lent and Passiontide, and Low Sunday. Other I class
   * feasts (except Immaculate Conception) are transferred off them (§15).
   */
  FirstClassSunday_1962_6: 'FIRST_CLASS_SUNDAY_1962_6' as const,

  /**
   * §91.7 — Ash Wednesday and Monday, Tuesday and Wednesday of Holy Week. Preferred
   * to any feast (§23), including universal I class feasts such as the Annunciation.
   */
  FirstClassFeria_1962_7: 'FIRST_CLASS_FERIA_1962_7' as const,

  /**
   * §91.8 — Commemoration of All the Faithful Departed. Yields to a Sunday (§16).
   */
  AllSouls_1962_8: 'ALL_SOULS_1962_8' as const,

  /**
   * §91.9 — Vigil of Pentecost. Suppresses the occurring day; admits no
   * commemoration (§30).
   */
  PentecostVigil_1962_9: 'PENTECOST_VIGIL_1962_9' as const,

  /**
   * §91.10 — Days within the octaves of Easter and Pentecost.
   */
  FirstClassOctaveDay_1962_10: 'FIRST_CLASS_OCTAVE_DAY_1962_10' as const,

  /**
   * §91.11 — Other I class feasts of the universal Church (e.g. Annunciation). Below
   * the I class ferias of Holy Week, so Annunciation yields to Holy Monday.
   */
  UniversalFirstClassFeast_1962_11: 'UNIVERSAL_FIRST_CLASS_FEAST_1962_11' as const,

  /**
   * §91.12 — Proper I class feasts (principal patrons, dedications, titulars, etc.).
   */
  ProperFirstClassFeast_1962_12: 'PROPER_FIRST_CLASS_FEAST_1962_12' as const,

  /**
   * §91.13 — Indult feasts of the 1st class.
   */
  IndultFirstClassFeast_1962_13: 'INDULT_FIRST_CLASS_FEAST_1962_13' as const,

  /**
   * §91.14 — II class feasts of the Lord.
   */
  SecondClassLordFeast_1962_14: 'SECOND_CLASS_LORD_FEAST_1962_14' as const,

  /**
   * §91.15 — II class Sundays: every Sunday not of Advent, Lent, Passiontide or Low
   * Sunday.
   */
  SecondClassSunday_1962_15: 'SECOND_CLASS_SUNDAY_1962_15' as const,

  /**
   * §91.16 — II class feasts of the universal Church that are not of the Lord.
   */
  UniversalSecondClassFeast_1962_16: 'UNIVERSAL_SECOND_CLASS_FEAST_1962_16' as const,

  /**
   * §91.17 — Days within the octave of Christmas (26–31 December). The octave day
   * itself is §91.5.
   */
  ChristmasOctaveDay_1962_17: 'CHRISTMAS_OCTAVE_DAY_1962_17' as const,

  /**
   * §91.18 — II class ferias: Advent from 17 to 23 December, and the Ember days of
   * Advent, Lent and September. Preferred to particular II class feasts (§24).
   */
  SecondClassFeria_1962_18: 'SECOND_CLASS_FERIA_1962_18' as const,

  /**
   * §91.19 — Proper II class feasts. Yield to II class ferias (§24).
   */
  ProperSecondClassFeast_1962_19: 'PROPER_SECOND_CLASS_FEAST_1962_19' as const,

  /**
   * §91.20 — Indult feasts of the 2nd class.
   */
  IndultSecondClassFeast_1962_20: 'INDULT_SECOND_CLASS_FEAST_1962_20' as const,

  /**
   * §91.21 — Vigils of the 2nd class: Ascension, Assumption, St John the Baptist,
   * SS Peter and Paul. Below II class feasts; above III class Lenten ferias (§31).
   */
  SecondClassVigil_1962_21: 'SECOND_CLASS_VIGIL_1962_21' as const,

  /**
   * §91.22 — Ferias of Lent and Passiontide (Thursday after Ash Wednesday to Saturday
   * before Palm Sunday), except Ember days. Preferred to III class feasts (§25a).
   */
  LentenFeria_1962_22: 'LENTEN_FERIA_1962_22' as const,

  /**
   * §91.23 — III class feasts of particular calendars.
   */
  ParticularThirdClassFeast_1962_23: 'PARTICULAR_THIRD_CLASS_FEAST_1962_23' as const,

  /**
   * §91.24 — III class feasts of the universal Church.
   */
  UniversalThirdClassFeast_1962_24: 'UNIVERSAL_THIRD_CLASS_FEAST_1962_24' as const,

  /**
   * §91.25 — Ferias of Advent to 16 December inclusive, except Ember days. Yield to
   * III class feasts (§25b).
   */
  AdventFeria_1962_25: 'ADVENT_FERIA_1962_25' as const,

  /**
   * §91.26 — Vigils of the 3rd class (vigil of St Lawrence). Yield rather than
   * suppress (§32).
   */
  ThirdClassVigil_1962_26: 'THIRD_CLASS_VIGIL_1962_26' as const,

  /**
   * §91.27 — Saturday office of the Blessed Virgin Mary.
   */
  SaturdayOfficeBVM_1962_27: 'SATURDAY_OFFICE_BVM_1962_27' as const,

  /**
   * §91.28 — Ferias of the 4th class. Never commemorated (§26).
   */
  FourthClassFeria_1962_28: 'FOURTH_CLASS_FERIA_1962_28' as const,

  /**
   * Days that are never celebrated in their own right but attached to whatever wins
   * the date. §106–114 govern how many are said and in what order; the occurrence
   * policy applies that, and these two values only say which kind a day is.
   */
  PrivilegedCommemoration_1962_29: 'PRIVILEGED_COMMEMORATION_1962_29' as const,

  OrdinaryCommemoration_1962_30: 'ORDINARY_COMMEMORATION_1962_30' as const,
} as const;

export const PRECEDENCES_1962 = [
  Precedences1962.PrivilegedFeastWithOctave_1962_1,
  Precedences1962.Triduum_1962_2,
  Precedences1962.LordFeast_1962_3,
  Precedences1962.PrivilegedMaryFeast_1962_4,
  Precedences1962.ChristmasVigilOrOctaveDay_1962_5,
  Precedences1962.FirstClassSunday_1962_6,
  Precedences1962.FirstClassFeria_1962_7,
  Precedences1962.AllSouls_1962_8,
  Precedences1962.PentecostVigil_1962_9,
  Precedences1962.FirstClassOctaveDay_1962_10,
  Precedences1962.UniversalFirstClassFeast_1962_11,
  Precedences1962.ProperFirstClassFeast_1962_12,
  Precedences1962.IndultFirstClassFeast_1962_13,
  Precedences1962.SecondClassLordFeast_1962_14,
  Precedences1962.SecondClassSunday_1962_15,
  Precedences1962.UniversalSecondClassFeast_1962_16,
  Precedences1962.ChristmasOctaveDay_1962_17,
  Precedences1962.SecondClassFeria_1962_18,
  Precedences1962.ProperSecondClassFeast_1962_19,
  Precedences1962.IndultSecondClassFeast_1962_20,
  Precedences1962.SecondClassVigil_1962_21,
  Precedences1962.LentenFeria_1962_22,
  Precedences1962.ParticularThirdClassFeast_1962_23,
  Precedences1962.UniversalThirdClassFeast_1962_24,
  Precedences1962.AdventFeria_1962_25,
  Precedences1962.ThirdClassVigil_1962_26,
  Precedences1962.SaturdayOfficeBVM_1962_27,
  Precedences1962.FourthClassFeria_1962_28,
  Precedences1962.PrivilegedCommemoration_1962_29,
  Precedences1962.OrdinaryCommemoration_1962_30,
] as const;

export type Precedence1962 = (typeof PRECEDENCES_1962)[number];
