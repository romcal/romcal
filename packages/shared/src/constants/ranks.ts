import { Precedence } from './precedences';

/**
 * Rank of liturgical days.
 * @readonly
 * @enum {string}
 */
export enum Rank {
  /**
   * Solemnities are counted among the most important days, whose celebration
   * begins with First Vespers (Evening Prayer I) on the preceding day. Some Solemnities
   * are also endowed with their own Vigil Mass, which is to be used on the evening of the
   * preceding day, if an evening Mass is celebrated. (UNLY #11)
   */
  Solemnity = 'SOLEMNITY',

  /**
   * On the first day of each week, which is known as the Day of the Lord or the Lord’s
   * Day, the Church, by an apostolic tradition that draws its origin from the very day of
   * the Resurrection of Christ, celebrates the Paschal Mystery. Hence, Sunday must be
   * considered the primordial feast day. (UNLY #4)
   */
  Sunday = 'SUNDAY',

  /**
   * Feasts are celebrated within the limits of the natural day; accordingly they have
   * no First Vespers (Evening Prayer I), except in the case of Feasts of the Lord that fall
   * on a Sunday in Ordinary Time or in Christmas Time and which replace the Sunday
   * Office. (UNLY #13)
   */
  Feast = 'FEAST',

  /**
   * Memorials are either obligatory or optional; their observance is integrated into
   * the celebration of the occurring weekday in accordance with the norms set forth in the
   * General Instruction of the Roman Missal and of the Liturgy of the Hours.
   * Obligatory Memorials which fall on weekdays of Lent may only be celebrated as
   * Optional Memorials.
   * If several Optional Memorials are inscribed in the Calendar on the same day, only
   * one may be celebrated, the others being omitted. (UNLY #14)
   */
  Memorial = 'MEMORIAL',

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
  Weekday = 'WEEKDAY',
}

export const RANKS = [
  Rank.Solemnity,
  Rank.Sunday,
  Rank.Feast,
  Rank.Memorial,
  Rank.Weekday,
] as const;

/**
 * Ranks from precedence.
 */
export const RanksFromPrecedence: Record<Precedence, Rank> = {
  [Precedence.Triduum_1]: Rank.Weekday,
  [Precedence.ProperOfTimeSolemnity_2]: Rank.Solemnity,
  [Precedence.PrivilegedSunday_2]: Rank.Sunday,
  [Precedence.AshWednesday_2]: Rank.Weekday,
  [Precedence.WeekdayOfHolyWeek_2]: Rank.Weekday,
  [Precedence.WeekdayOfEasterOctave_2]: Rank.Solemnity,
  [Precedence.GeneralSolemnity_3]: Rank.Solemnity,
  [Precedence.CommemorationOfAllTheFaithfulDeparted_3]: Rank.Feast,
  [Precedence.ProperSolemnity_PrincipalPatron_4a]: Rank.Solemnity,
  [Precedence.ProperSolemnity_DedicationOfTheOwnChurch_4b]: Rank.Solemnity,
  [Precedence.ProperSolemnity_TitleOfTheOwnChurch_4c]: Rank.Solemnity,
  [Precedence.ProperSolemnity_TitleOrFounderOrPrimaryPatronOfAReligiousOrg_4d]: Rank.Solemnity,
  [Precedence.GeneralLordFeast_5]: Rank.Feast,
  [Precedence.UnprivilegedSunday_6]: Rank.Sunday,
  [Precedence.GeneralFeast_7]: Rank.Feast,
  [Precedence.ProperFeast_PrincipalPatronOfADiocese_8a]: Rank.Feast,
  [Precedence.ProperFeast_DedicationOfTheCathedralChurch_8b]: Rank.Feast,
  [Precedence.ProperFeast_PrincipalPatronOfARegion_8c]: Rank.Feast,
  [Precedence.ProperFeast_TitleOrFounderOrPrimaryPatronOfAReligiousOrg_8d]: Rank.Feast,
  [Precedence.ProperFeast_ToAnIndividualChurch_8e]: Rank.Feast,
  [Precedence.ProperFeast_8f]: Rank.Feast,
  [Precedence.PrivilegedWeekday_9]: Rank.Weekday,
  [Precedence.GeneralMemorial_10]: Rank.Memorial,
  [Precedence.ProperMemorial_SecondPatron_11a]: Rank.Memorial,
  [Precedence.ProperMemorial_11b]: Rank.Memorial,
  [Precedence.OptionalMemorial_12]: Rank.Memorial,
  [Precedence.Weekday_13]: Rank.Weekday,
};
