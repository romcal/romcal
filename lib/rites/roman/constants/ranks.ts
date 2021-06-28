import { Precedences } from '@roman-rite/constants/precedences';

/**
 * Rank of liturgical days.
 * @readonly
 * @enum {string}
 */
export enum Ranks {
  /**
   * Solemnities are counted among the most important days, whose celebration
   * begins with First Vespers (Evening Prayer I) on the preceding day. Some Solemnities
   * are also endowed with their own Vigil Mass, which is to be used on the evening of the
   * preceding day, if an evening Mass is celebrated. (UNLY #11)
   */
  SOLEMNITY = 'SOLEMNITY',

  /**
   * On the first day of each week, which is known as the Day of the Lord or the Lord’s
   * Day, the Church, by an apostolic tradition that draws its origin from the very day of
   * the Resurrection of Christ, celebrates the Paschal Mystery. Hence, Sunday must be
   * considered the primordial feast day. (UNLY #4)
   */
  SUNDAY = 'SUNDAY',

  /**
   * Feasts are celebrated within the limits of the natural day; accordingly they have
   * no First Vespers (Evening Prayer I), except in the case of Feasts of the Lord that fall
   * on a Sunday in Ordinary Time or in Christmas Time and which replace the Sunday
   * Office. (UNLY #13)
   */
  FEAST = 'FEAST',

  /**
   * Memorials are either obligatory or optional; their observance is integrated into
   * the celebration of the occurring weekday in accordance with the norms set forth in the
   * General Instruction of the Roman Missal and of the Liturgy of the Hours.
   * Obligatory Memorials which fall on weekdays of Lent may only be celebrated as
   * Optional Memorials.
   * If several Optional Memorials are inscribed in the Calendar on the same day, only
   * one may be celebrated, the others being omitted. (UNLY #14)
   */
  MEMORIAL = 'MEMORIAL',

  /**
   * The days of the week that follow Sunday are called weekdays; however, they are
   * celebrated differently according to the importance of each.
   *
   * a. Ash Wednesday and the weekdays of Holy Week, from Monday up to and including
   *    Thursday, take precedence over all other celebrations.
   * b. The weekdays of Advent from 17 December up to and including 24 December
   *    and all the weekdays of Lent have precedence over Obligatory Memorials.
   * c. Other weekdays give way to all Solemnities and Feasts and are combined with
   *    Memorials.
   *
   *  (UNLY #16)
   */
  WEEKDAY = 'WEEKDAY',
}

export const RanksFromPrecedence = {
  [Precedences.Triduum_1]: Ranks.WEEKDAY,
  [Precedences.ProperOfTimeSolemnity_2]: Ranks.SOLEMNITY,
  [Precedences.PrivilegedSunday_2]: Ranks.SUNDAY,
  [Precedences.AshWednesday_2]: Ranks.WEEKDAY,
  [Precedences.WeekdayOfHolyWeek_2]: Ranks.WEEKDAY,
  [Precedences.WeekdayOfEasterOctave_2]: Ranks.SOLEMNITY,
  [Precedences.GeneralSolemnity_3]: Ranks.SOLEMNITY,
  [Precedences.CommemorationOfAllTheFaithfulDeparted_3]: Ranks.FEAST,
  [Precedences.ProperSolemnity_PrincipalPatron_4a]: Ranks.SOLEMNITY,
  [Precedences.ProperSolemnity_DedicationOfTheOwnChurch_4b]: Ranks.SOLEMNITY,
  [Precedences.ProperSolemnity_TitleOfTheOwnChurch_4c]: Ranks.SOLEMNITY,
  [Precedences.ProperSolemnity_TitleOrFounderOrPrincipalPatronOfAReligiousOrg_4d]: Ranks.SOLEMNITY,
  [Precedences.GeneralLordFeast_5]: Ranks.FEAST,
  [Precedences.UnprivilegedSunday_6]: Ranks.SUNDAY,
  [Precedences.GeneralFeast_7]: Ranks.FEAST,
  [Precedences.ProperFeast_PrincipalPatronOfADiocese_8a]: Ranks.FEAST,
  [Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b]: Ranks.FEAST,
  [Precedences.ProperFeast_PrincipalPatronOfARegion_8c]: Ranks.FEAST,
  [Precedences.ProperFeast_TitleOrFounderOrPrincipalPatronOfAReligiousOrg_8d]: Ranks.FEAST,
  [Precedences.ProperFeast_ToAnIndividualChurch_8e]: Ranks.FEAST,
  [Precedences.ProperFeast_8f]: Ranks.FEAST,
  [Precedences.PrivilegedWeekday_9]: Ranks.WEEKDAY,
  [Precedences.GeneralMemorial_10]: Ranks.MEMORIAL,
  [Precedences.ProperMemorial_SecondPatron_11a]: Ranks.MEMORIAL,
  [Precedences.ProperMemorial_11b]: Ranks.MEMORIAL,
  [Precedences.OptionalMemorial_12]: Ranks.MEMORIAL,
  [Precedences.Weekday_13]: Ranks.WEEKDAY,
};
