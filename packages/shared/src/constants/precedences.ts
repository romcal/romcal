/**
 * List of the precedence of the Liturgical Days (UNLY #59)
 * Order is important: higher precedence type first, lower precedence type at the end.
 * @readonly
 */
export enum Precedence {
  // Note: there is a limit of 63 chars per name because of string literal typing & Pascal to Snake case

  /**
   * 1 - The Paschal Triduum of the Passion and Resurrection of the Lord.
   */
  Triduum_1 = '01_TRIDUUM',

  /**
   * 2 - The Nativity of the Lord, the Epiphany, the Ascension, or Pentecost.
   */
  ProperOfTimeSolemnity_2 = '02_PROPER_OF_TIME_SOLEMNITY',
  /**
   * 2 - A Sunday of Advent, Lent, or Easter.
   */
  PrivilegedSunday_2 = '02_PRIVILEGED_SUNDAY',
  /**
   * 2 - Ash Wednesday.
   */
  AshWednesday_2 = '02_ASH_WEDNESDAY',
  /**
   * 2 - A weekday of Holy Week from Monday up to and including Thursday.
   */
  WeekdayOfHolyWeek_2 = '02_WEEKDAY_OF_HOLY_WEEK',
  /**
   * 2 - A day within the Octave of Easter.
   */
  WeekdayOfEasterOctave_2 = '02_WEEKDAY_OF_EASTER_OCTAVE',

  /**
   * 3 - A Solemnity inscribed in the General Calendar, whether of the Lord, of the Blessed Virgin Mary, or of a Saint.
   */
  GeneralSolemnity_3 = '03_GENERAL_SOLEMNITY',

  /**
   * 3 - The Commemoration of All the Faithful Departed.
   */
  CommemorationOfAllTheFaithfulDeparted_3 = '03_COMMEMORATION_OF_ALL_THE_FAITHFUL_DEPARTED',

  /**
   * 4 - Proper Solemnity.
   * */

  /**
   * 4a - A proper Solemnity of the principal Patron of the place, city, or state.
   */
  ProperSolemnity_PrincipalPatron_4a = '04A_PROPER_SOLEMNITY__PRINCIPAL_PATRON',
  /**
   * 4b - The Solemnity of the dedication and of the anniversary of the dedication of the own church.
   */
  ProperSolemnity_DedicationOfTheOwnChurch_4b = '04B_PROPER_SOLEMNITY__DEDICATION_OF_THE_OWN_CHURCH',
  /**
   * 4c - The solemnity of the title of the own church.
   */
  ProperSolemnity_TitleOfTheOwnChurch_4c = '04C_PROPER_SOLEMNITY__TITLE_OF_THE_OWN_CHURCH',
  /**
   *  4d - A Solemnity either of the Title
   *  or of the Founder
   *  or of the principal Patron of an Order or Congregation.
   */
  ProperSolemnity_TitleOrFounderOrPrimaryPatronOfAReligiousOrg_4d = '04D_PROPER_SOLEMNITY__TITLE_OR_FOUNDER_OR_PRIMARY_PATRON_OF_A_RELIGIOUS_ORG',

  /**
   * 5 - A Feast of the Lord inscribed in the General Calendar.
   */
  GeneralLordFeast_5 = '05_GENERAL_LORD_FEAST',

  /**
   * 6 - A Sunday of Christmas Time or a Sunday in Ordinary Time.
   */
  UnprivilegedSunday_6 = '06_UNPRIVILEGED_SUNDAY',

  /**
   * 7 - A Feast of the Blessed Virgin Mary or of a Saint in the General Calendar.
   */
  GeneralFeast_7 = '07_GENERAL_FEAST',

  /**
   * 8 - Proper Feast
   */

  /**
   * 8a - The Proper Feast of the principal Patron of the diocese.
   */
  ProperFeast_PrincipalPatronOfADiocese_8a = '08A_PROPER_FEAST__PRINCIPAL_PATRON_OF_A_DIOCESE',

  /**
   * 8b - The Proper Feast of the anniversary of the dedication of the cathedral church
   */
  ProperFeast_DedicationOfTheCathedralChurch_8b = '08B_PROPER_FEAST__DEDICATION_OF_THE_CATHEDRAL_CHURCH',

  /**
   * 8c - The Proper Feast of the principal Patron of a region or province, or a country, or of a wider territory.
   */
  ProperFeast_PrincipalPatronOfARegion_8c = '08C_PROPER_FEAST__PRINCIPAL_PATRON_OF_A_REGION',

  /**
   * 8d - The Proper Feast of the Title, Founder, or principal Patron of an Order or Congregation
   * and of a religious province, without prejudice to the prescriptions given under no. 4.
   */
  ProperFeast_TitleOrFounderOrPrimaryPatronOfAReligiousOrg_8d = '08D_PROPER_SOLEMNITY__TITLE_OR_FOUNDER_OR_PRIMARY_PATRON_OF_A_RELIGIOUS_ORG',

  /**
   * 8e - Other Feast, proper to an individual church.
   */
  ProperFeast_ToAnIndividualChurch_8e = '08E_PROPER_FEAST__TO_AN_INDIVIDUAL_CHURCH',

  /**
   * 8f - Other Proper Feast
   * inscribed in the Calendar of each diocese or Order or Congregation.
   */
  ProperFeast_8f = '08F_PROPER_FEAST',

  /**
   * 9 - Privileged Weekday
   *
   * - A Weekday of Advent from December 17 up to and including December 24.
   * - A Day within the Octave of Christmas.
   * - A Weekday of Lent.
   */
  PrivilegedWeekday_9 = '09_PRIVILEGED_WEEKDAY',

  /**
   * 10 - Obligatory Memorials in the General Calendar.
   */
  GeneralMemorial_10 = '10_GENERAL_MEMORIAL',

  /**
   * 11 - Proper Obligatory Memorial.
   */

  /**
   * 11a - Proper Obligatory Memorial of a secondary Patron
   * of the place, diocese, region, or religious province.
   */
  ProperMemorial_SecondPatron_11a = '11A_PROPER_MEMORIAL__SECOND_PATRON',

  /**
   * 11b - Other Proper Obligatory Memorial
   * inscribed in the Calendar of each diocese, or Order or congregation.
   */
  ProperMemorial_11b = '11B_PROPER_MEMORIAL',

  /**
   * 13 - Weekday
   *
   * A Weekday of Advent up to and including December 16.
   * A Weekday of Christmas Time from January 2 until the Saturday after the Epiphany.
   * A Weekday of the Easter Time from Monday after the Octave of Easter up to and including the The Saturday before Pentecost.
   * A Weekday in Ordinary Time.
   */
  Weekday_13 = '13_WEEKDAY',

  /**
   * 12 - Optional Memorial
   *
   * Optional Memorial, which, however, may be celebrated, in the special manner described in the
   * General Instruction of the Roman Missal and of the Liturgy of the Hours, even on the days listed in no. 9.
   *
   * **Note:**
   * Optional Memorials (12) are placed after the weekday (13):
   * - For computing performance reasons (sorting performance).
   * - Because as long as they are not celebrated, the Weekday still takes precedence.
   *   The Optional Memorials remains outputted for convenient reasons or any custom usage of romcal generated data.
   *   The output or Optional Memorials can be disabled with the `strictMode: true`.
   */
  OptionalMemorial_12 = '12_OPTIONAL_MEMORIAL',
}

export const PRECEDENCES = [
  Precedence.Triduum_1,
  Precedence.ProperOfTimeSolemnity_2,
  Precedence.PrivilegedSunday_2,
  Precedence.AshWednesday_2,
  Precedence.WeekdayOfHolyWeek_2,
  Precedence.WeekdayOfEasterOctave_2,
  Precedence.GeneralSolemnity_3,
  Precedence.CommemorationOfAllTheFaithfulDeparted_3,
  Precedence.ProperSolemnity_PrincipalPatron_4a,
  Precedence.ProperSolemnity_DedicationOfTheOwnChurch_4b,
  Precedence.ProperSolemnity_TitleOfTheOwnChurch_4c,
  Precedence.ProperSolemnity_TitleOrFounderOrPrimaryPatronOfAReligiousOrg_4d,
  Precedence.GeneralLordFeast_5,
  Precedence.UnprivilegedSunday_6,
  Precedence.GeneralFeast_7,
  Precedence.ProperFeast_PrincipalPatronOfADiocese_8a,
  Precedence.ProperFeast_DedicationOfTheCathedralChurch_8b,
  Precedence.ProperFeast_PrincipalPatronOfARegion_8c,
  Precedence.ProperFeast_TitleOrFounderOrPrimaryPatronOfAReligiousOrg_8d,
  Precedence.ProperFeast_ToAnIndividualChurch_8e,
  Precedence.ProperFeast_8f,
  Precedence.PrivilegedWeekday_9,
  Precedence.GeneralMemorial_10,
  Precedence.ProperMemorial_SecondPatron_11a,
  Precedence.ProperMemorial_11b,
  Precedence.Weekday_13,
  Precedence.OptionalMemorial_12,
] as const;
