/**
 * List of the precedence of the Liturgical Days (UNLY #59)
 * Order is important: higher precedence type first, lower precedence type at the end.
 * @readonly
 */

export enum Precedences {
  /**
   * 1 - The Paschal Triduum of the Passion and Resurrection of the Lord.
   */
  Triduum_1 = 'TRIDUUM__1',

  /**
   * 2 - The Nativity of the Lord, the Epiphany, the Ascension, or Pentecost.
   */
  ProperOfTimeSolemnity_2 = 'PROPER_OF_TIME_SOLEMNITY__2',
  /**
   * 2 - A Sunday of Advent, Lent, or Easter.
   */
  PrivilegedSunday_2 = 'PRIVILEGED_SUNDAY__2',
  /**
   * 2 - Ash Wednesday.
   */
  AshWednesday_2 = 'ASH_WEDNESDAY__2',
  /**
   * 2 - A weekday of Holy Week from Monday up to and including Thursday.
   */
  WeekdayOfHolyWeek_2 = 'WEEKDAY_OF_HOLY_WEEK__2',
  /**
   * 2 - A day within the Octave of Easter.
   */
  WeekdayOfEasterOctave_2 = 'WEEKDAY_OF_EASTER_OCTAVE__2',

  /**
   * 3 - A Solemnity inscribed in the General Calendar, whether of the Lord, of the Blessed Virgin Mary, or of a Saint.
   */
  GeneralSolemnity_3 = 'GENERAL_SOLEMNITY__3',

  /**
   * 3 - The Commemoration of All the Faithful Departed.
   */
  CommemorationOfAllTheFaithfulDeparted_3 = 'COMMEMORATION_OF_THE_FAITHFUL_DEPARTED__3',

  /**
   * 4 - Proper Solemnity.
   * */

  /**
   * 4a - A proper Solemnity of the principal Patron of the place, city, or state.
   */
  ProperSolemnity_PrincipalPatron_4a = 'PROPER_SOLEMNITY_OF_THE_PRINCIPAL_PATRON__4A',
  /**
   * 4b - The Solemnity of the dedication and of the anniversary of the dedication of the own church.
   */
  ProperSolemnity_DedicationOfTheOwnChurch_4b = 'PROPER_SOLEMNITY_OF_THE_DEDICATION_OF_THE_OWN_CHURCH__4B',
  /**
   * 4c - The solemnity of the title of the own church.
   */
  ProperSolemnity_TitleOfTheOwnChurch_4c = 'PROPER_SOLEMNITY_OF_THE_TITLE_OF_ONE_OWN_CHURCH__4C',
  /**
   *  4d - A Solemnity either of the Title
   *  or of the Founder
   *  or of the principal Patron of an Order or Congregation.
   */
  ProperSolemnity_TitleOrFounderOrPrincipalPatronOfAReligiousOrg_4d = 'PROPER_SOLEMNITY_OF_THE_TITLE_OR_FOUNDER_OR_PRINCIPAL_PATRON_OF_A_RELIGIOUS_ORG__4D',

  /**
   * 5 - A Feast of the Lord inscribed in the General Calendar.
   */
  GeneralLordFeast_5 = 'GENERAL_LORD_FEAST__5',

  /**
   * 6 - A Sunday of Christmas Time or a Sunday in Ordinary Time.
   */
  UnprivilegedSunday_6 = 'UNPRIVILEGED_SUNDAY__6',

  /**
   * 7 - A Feast of the Blessed Virgin Mary or of a Saint in the General Calendar.
   */
  GeneralFeast_7 = 'GENERAL_FEAST__7',

  /**
   * 8 - Proper Feast
   */

  /**
   * 8a - The Proper Feast of the principal Patron of the diocese.
   */
  ProperFeast_PrincipalPatronOfADiocese_8a = 'PROPER_FEAST_OF_THE_PRINCIPAL_PATRON_OF_A_DIOCESE__8A',

  /**
   * 8b - The Proper Feast of the anniversary of the dedication of the cathedral church
   */
  ProperFeast_DedicationOfTheCathedralChurch_8b = 'PROPER_FEAST_OF_THE_DEDICATION_OF_THE_CATHEDRAL_CHURCH__8B',

  /**
   * 8c - The Proper Feast of the principal Patron of a region or province, or a country, or of a wider territory.
   */
  ProperFeast_PrincipalPatronOfARegion_8c = 'PROPER_FEAST_OF_THE_PRINCIPAL_PATRON_OF_A_REGION__8C',

  /**
   * 8d - The Proper Feast of the Title, Founder, or principal Patron of an Order or Congregation
   * and of a religious province, without prejudice to the prescriptions given under no. 4.
   */
  ProperFeast_TitleOrFounderOrPrincipalPatronOfAReligiousOrg_8d = 'PROPER_FEAST_OF_THE_TITLE_OR_FOUNDER_OR_PRINCIPAL_PATRON_OF_A_RELIGIOUS_ORG__8D',

  /**
   * 8e - Other Feast, proper to an individual church.
   */
  ProperFeast_ToAnIndividualChurch_8e = 'PROPER_FEAST_PROPER_TO_AN_INDIVIDUAL_CHURCH__8E',

  /**
   * 8f - Other Proper Feast
   * inscribed in the Calendar of each diocese or Order or Congregation.
   */
  ProperFeast_8f = 'PROPER_FEAST__8F',

  /**
   * 9 - Privileged Weekday
   *
   * - A Weekday of Advent from December 17 up to and including December 24.
   * - A Day within the Octave of Christmas.
   * - A Weekday of Lent.
   */
  PrivilegedWeekday_9 = 'PRIVILEGED_WEEKDAY__9',

  /**
   * 10 - Obligatory Memorials in the General Calendar.
   */
  GeneralMemorial_10 = 'GENERAL_MEMORIAL__10',

  /**
   * 11 - Proper Obligatory Memorial.
   */

  /**
   * 11a - Proper Obligatory Memorial of a secondary Patron
   * of the place, diocese, region, or religious province.
   */
  ProperMemorial_SecondPatron_11a = 'PROPER_MEMORIAL_OF_SECOND_PATRON__11A',

  /**
   * 11b - Other Proper Obligatory Memorial
   * inscribed in the Calendar of each diocese, or Order or congregation.
   */
  ProperMemorial_11b = 'PROPER_MEMORIAL__11B',

  /**
   * 13 - Weekday
   *
   * A Weekday of Advent up to and including December 16.
   * A Weekday of Christmas Time from January 2 until the Saturday after the Epiphany.
   * A Weekday of the Easter Time from Monday after the Octave of Easter up to and including the The Saturday before Pentecost.
   * A Weekday in Ordinary Time.
   */
  Weekday_13 = 'WEEKDAY__13',

  /**
   * 12 - Optional Memorial
   *
   * Optional Memorial, which, however, may be celebrated, in the special manner described in the
   * General Instruction of the Roman Missal and of the Liturgy of the Hours, even on the days listed in no. 9.
   *
   * **Note:**
   * Optional Memorials (12) are placed after the weekday (13):
   * - For computing performance raisons (sorting performance).
   * - Because as long as they are not celebrated, the Weekday still takes precedence.
   *   The Optional Memorials remains outputted for convenient raisons or any custom usage of romcal generated data.
   *   The output or Optional Memorials can be disabled with the `strictMode: true`.
   */
  OptionalMemorial_12 = 'OPTIONAL_MEMORIAL__12',
}

export const PRECEDENCES = Object.values(Precedences);
