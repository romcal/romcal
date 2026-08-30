import { Precedence, Precedences } from './precedences';

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
   * **Obligatory memorials** are liturgical commemorations of saints, events, or aspects of the
   * faith. Their observance is mandatory and integrated into the celebration of the occurring
   * weekday, following the liturgical norms outlined in the General Instruction of the Roman Missal
   * and the Liturgy of the Hours.
   * When an **obligatory memorial** falls on a weekday during the liturgical season of Lent or a
   * privileged weekday of Advent, it must only be celebrated as an **optional memorial**, as Lent
   * and Advent have their own specific liturgical observances that take precedence.
   */
  Memorial = 'MEMORIAL',

  /**
   * **Optional memorials** are liturgical commemorations of saints, events, or aspects of the
   * faith, but they are not obligatory.
   * Their observance is integrated into the celebration of the occurring weekday, adhering to the
   * liturgical norms provided in the General Instruction of the Roman Missal and the Liturgy of
   * the Hours.
   * In cases where multiple **optional memorials** are designated on the same day in the liturgical
   * calendar, only one of them may be celebrated, and the others must be omitted (UNLY #14).
   * This allows for some flexibility in choosing which optional memorial to commemorate when
   * multiple options are available.
   */
  OptionalMemorial = 'OPTIONAL_MEMORIAL',

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
  Ranks.Solemnity,
  Ranks.Sunday,
  Ranks.Feast,
  Ranks.Memorial,
  Ranks.OptionalMemorial,
  Ranks.Weekday,
] as const;

export type Rank = (typeof RANKS)[number];

export const RanksFromPrecedence: Record<Precedence, Rank> = {
  [Precedences.Triduum_1]: Ranks.Weekday,
  [Precedences.ProperOfTimeSolemnity_2]: Ranks.Solemnity,
  [Precedences.PrivilegedSunday_2]: Ranks.Sunday,
  [Precedences.AshWednesday_2]: Ranks.Weekday,
  [Precedences.WeekdayOfHolyWeek_2]: Ranks.Weekday,
  [Precedences.WeekdayOfEasterOctave_2]: Ranks.Solemnity,
  [Precedences.GeneralSolemnity_3]: Ranks.Solemnity,
  [Precedences.CommemorationOfAllTheFaithfulDeparted_3]: Ranks.Feast,
  [Precedences.ProperSolemnity_PrincipalPatron_4a]: Ranks.Solemnity,
  [Precedences.ProperSolemnity_DedicationOfTheOwnChurch_4b]: Ranks.Solemnity,
  [Precedences.ProperSolemnity_TitleOfTheOwnChurch_4c]: Ranks.Solemnity,
  [Precedences.ProperSolemnity_TitleOrFounderOrPrimaryPatronOfAReligiousOrg_4d]: Ranks.Solemnity,
  [Precedences.GeneralLordFeast_5]: Ranks.Feast,
  [Precedences.UnprivilegedSunday_6]: Ranks.Sunday,
  [Precedences.GeneralFeast_7]: Ranks.Feast,
  [Precedences.ProperFeast_PrincipalPatronOfADiocese_8a]: Ranks.Feast,
  [Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b]: Ranks.Feast,
  [Precedences.ProperFeast_PrincipalPatronOfARegion_8c]: Ranks.Feast,
  [Precedences.ProperFeast_TitleOrFounderOrPrimaryPatronOfAReligiousOrg_8d]: Ranks.Feast,
  [Precedences.ProperFeast_ToAnIndividualChurch_8e]: Ranks.Feast,
  [Precedences.ProperFeast_8f]: Ranks.Feast,
  [Precedences.PrivilegedWeekday_9]: Ranks.Weekday,
  [Precedences.GeneralMemorial_10]: Ranks.Memorial,
  [Precedences.ProperMemorial_SecondPatron_11a]: Ranks.Memorial,
  [Precedences.ProperMemorial_11b]: Ranks.Memorial,
  [Precedences.OptionalMemorial_12]: Ranks.OptionalMemorial,
  [Precedences.Weekday_13]: Ranks.Weekday,
};
