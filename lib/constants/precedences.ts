/**
 * List of the precedence of the Liturgical Days (UNLY #59)
 * Order is important: higher precedence type first, lower precedence type at the end.
 * @readonly
 */
export class Precedences {
  // Note: there is a limit of 63 chars per name because of string literal typing & Pascal to Snake case

  /**
   * 1 - The Paschal Triduum of the Passion and Resurrection of the Lord.
   */
  static Triduum_1: 'TRIDUUM_1' = 'TRIDUUM_1';

  /**
   * 2 - The Nativity of the Lord, the Epiphany, the Ascension, or Pentecost.
   */
  static ProperOfTimeSolemnity_2: 'PROPER_OF_TIME_SOLEMNITY_2' = 'PROPER_OF_TIME_SOLEMNITY_2';
  /**
   * 2 - A Sunday of Advent, Lent, or Easter.
   */
  static PrivilegedSunday_2: 'PRIVILEGED_SUNDAY_2' = 'PRIVILEGED_SUNDAY_2';
  /**
   * 2 - Ash Wednesday.
   */
  static AshWednesday_2: 'ASH_WEDNESDAY_2' = 'ASH_WEDNESDAY_2';
  /**
   * 2 - A weekday of Holy Week from Monday up to and including Thursday.
   */
  static WeekdayOfHolyWeek_2: 'WEEKDAY_OF_HOLY_WEEK_2' = 'WEEKDAY_OF_HOLY_WEEK_2';
  /**
   * 2 - A day within the Octave of Easter.
   */
  static WeekdayOfEasterOctave_2: 'WEEKDAY_OF_EASTER_OCTAVE_2' = 'WEEKDAY_OF_EASTER_OCTAVE_2';

  /**
   * 3 - A Solemnity inscribed in the General Calendar, whether of the Lord, of the Blessed Virgin Mary, or of a Saint.
   */
  static GeneralSolemnity_3: 'GENERAL_SOLEMNITY_3' = 'GENERAL_SOLEMNITY_3';

  /**
   * 3 - The Commemoration of All the Faithful Departed.
   */
  static CommemorationOfAllTheFaithfulDeparted_3: 'COMMEMORATION_OF_ALL_THE_FAITHFUL_DEPARTED_3' =
    'COMMEMORATION_OF_ALL_THE_FAITHFUL_DEPARTED_3';

  /**
   * 4 - Proper Solemnity.
   * */

  /**
   * 4a - A proper Solemnity of the principal Patron of the place, city, or state.
   */
  static ProperSolemnity_PrincipalPatron_4a: 'PROPER_SOLEMNITY__PRINCIPAL_PATRON_4A' =
    'PROPER_SOLEMNITY__PRINCIPAL_PATRON_4A';
  /**
   * 4b - The Solemnity of the dedication and of the anniversary of the dedication of the own church.
   */
  static ProperSolemnity_DedicationOfTheOwnChurch_4b: 'PROPER_SOLEMNITY__DEDICATION_OF_THE_OWN_CHURCH_4B' =
    'PROPER_SOLEMNITY__DEDICATION_OF_THE_OWN_CHURCH_4B';
  /**
   * 4c - The solemnity of the title of the own church.
   */
  static ProperSolemnity_TitleOfTheOwnChurch_4c: 'PROPER_SOLEMNITY__TITLE_OF_THE_OWN_CHURCH_4C' =
    'PROPER_SOLEMNITY__TITLE_OF_THE_OWN_CHURCH_4C';
  /**
   *  4d - A Solemnity either of the Title
   *  or of the Founder
   *  or of the principal Patron of an Order or Congregation.
   */
  static ProperSolemnity_TitleOrFounderOrPrimaryPatronOfAReligiousOrg_4d: 'PROPER_SOLEMNITY__TITLE_OR_FOUNDER_OR_PRIMARY_PATRON_OF_A_RELIGIOUS_ORG_4D' =
    'PROPER_SOLEMNITY__TITLE_OR_FOUNDER_OR_PRIMARY_PATRON_OF_A_RELIGIOUS_ORG_4D';

  /**
   * 5 - A Feast of the Lord inscribed in the General Calendar.
   */
  static GeneralLordFeast_5: 'GENERAL_LORD_FEAST_5' = 'GENERAL_LORD_FEAST_5';

  /**
   * 6 - A Sunday of Christmas Time or a Sunday in Ordinary Time.
   */
  static UnprivilegedSunday_6: 'UNPRIVILEGED_SUNDAY_6' = 'UNPRIVILEGED_SUNDAY_6';

  /**
   * 7 - A Feast of the Blessed Virgin Mary or of a Saint in the General Calendar.
   */
  static GeneralFeast_7: 'GENERAL_FEAST_7' = 'GENERAL_FEAST_7';

  /**
   * 8 - Proper Feast
   */

  /**
   * 8a - The Proper Feast of the principal Patron of the diocese.
   */
  static ProperFeast_PrincipalPatronOfADiocese_8a: 'PROPER_FEAST__PRINCIPAL_PATRON_OF_A_DIOCESE_8A' =
    'PROPER_FEAST__PRINCIPAL_PATRON_OF_A_DIOCESE_8A';

  /**
   * 8b - The Proper Feast of the anniversary of the dedication of the cathedral church
   */
  static ProperFeast_DedicationOfTheCathedralChurch_8b: 'PROPER_FEAST__DEDICATION_OF_THE_CATHEDRAL_CHURCH_8B' =
    'PROPER_FEAST__DEDICATION_OF_THE_CATHEDRAL_CHURCH_8B';

  /**
   * 8c - The Proper Feast of the principal Patron of a region or province, or a country, or of a wider territory.
   */
  static ProperFeast_PrincipalPatronOfARegion_8c: 'PROPER_FEAST__PRINCIPAL_PATRON_OF_A_REGION_8C' =
    'PROPER_FEAST__PRINCIPAL_PATRON_OF_A_REGION_8C';

  /**
   * 8d - The Proper Feast of the Title, Founder, or principal Patron of an Order or Congregation
   * and of a religious province, without prejudice to the prescriptions given under no. 4.
   */
  static ProperFeast_TitleOrFounderOrPrimaryPatronOfAReligiousOrg_8d: 'PROPER_SOLEMNITY__TITLE_OR_FOUNDER_OR_PRIMARY_PATRON_OF_A_RELIGIOUS_ORG_4D' =
    'PROPER_SOLEMNITY__TITLE_OR_FOUNDER_OR_PRIMARY_PATRON_OF_A_RELIGIOUS_ORG_4D';

  /**
   * 8e - Other Feast, proper to an individual church.
   */
  static ProperFeast_ToAnIndividualChurch_8e: 'PROPER_FEAST__TO_AN_INDIVIDUAL_CHURCH_8E' =
    'PROPER_FEAST__TO_AN_INDIVIDUAL_CHURCH_8E';

  /**
   * 8f - Other Proper Feast
   * inscribed in the Calendar of each diocese or Order or Congregation.
   */
  static ProperFeast_8f: 'PROPER_FEAST_8F' = 'PROPER_FEAST_8F';

  /**
   * 9 - Privileged Weekday
   *
   * - A Weekday of Advent from December 17 up to and including December 24.
   * - A Day within the Octave of Christmas.
   * - A Weekday of Lent.
   */
  static PrivilegedWeekday_9: 'PRIVILEGED_WEEKDAY_9' = 'PRIVILEGED_WEEKDAY_9';

  /**
   * 10 - Obligatory Memorials in the General Calendar.
   */
  static GeneralMemorial_10: 'GENERAL_MEMORIAL_10' = 'GENERAL_MEMORIAL_10';

  /**
   * 11 - Proper Obligatory Memorial.
   */

  /**
   * 11a - Proper Obligatory Memorial of a secondary Patron
   * of the place, diocese, region, or religious province.
   */
  static ProperMemorial_SecondPatron_11a: 'PROPER_MEMORIAL__SECOND_PATRON_11A' =
    'PROPER_MEMORIAL__SECOND_PATRON_11A';

  /**
   * 11b - Other Proper Obligatory Memorial
   * inscribed in the Calendar of each diocese, or Order or congregation.
   */
  static ProperMemorial_11b: 'PROPER_MEMORIAL_11B' = 'PROPER_MEMORIAL_11B';

  /**
   * 13 - Weekday
   *
   * A Weekday of Advent up to and including December 16.
   * A Weekday of Christmas Time from January 2 until the Saturday after the Epiphany.
   * A Weekday of the Easter Time from Monday after the Octave of Easter up to and including the The Saturday before Pentecost.
   * A Weekday in Ordinary Time.
   */
  static Weekday_13: 'WEEKDAY_13' = 'WEEKDAY_13';

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
  static OptionalMemorial_12: 'OPTIONAL_MEMORIAL_12' = 'OPTIONAL_MEMORIAL_12';
}

export const PRECEDENCES = [
  Precedences.Triduum_1,
  Precedences.ProperOfTimeSolemnity_2,
  Precedences.PrivilegedSunday_2,
  Precedences.AshWednesday_2,
  Precedences.WeekdayOfHolyWeek_2,
  Precedences.WeekdayOfEasterOctave_2,
  Precedences.GeneralSolemnity_3,
  Precedences.CommemorationOfAllTheFaithfulDeparted_3,
  Precedences.ProperSolemnity_PrincipalPatron_4a,
  Precedences.ProperSolemnity_DedicationOfTheOwnChurch_4b,
  Precedences.ProperSolemnity_TitleOfTheOwnChurch_4c,
  Precedences.ProperSolemnity_TitleOrFounderOrPrimaryPatronOfAReligiousOrg_4d,
  Precedences.GeneralLordFeast_5,
  Precedences.UnprivilegedSunday_6,
  Precedences.GeneralFeast_7,
  Precedences.ProperFeast_PrincipalPatronOfADiocese_8a,
  Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
  Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
  Precedences.ProperFeast_TitleOrFounderOrPrimaryPatronOfAReligiousOrg_8d,
  Precedences.ProperFeast_ToAnIndividualChurch_8e,
  Precedences.ProperFeast_8f,
  Precedences.PrivilegedWeekday_9,
  Precedences.GeneralMemorial_10,
  Precedences.ProperMemorial_SecondPatron_11a,
  Precedences.ProperMemorial_11b,
  Precedences.Weekday_13,
  Precedences.OptionalMemorial_12,
];

export type Precedence = typeof PRECEDENCES[number];
