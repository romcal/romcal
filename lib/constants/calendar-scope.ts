/**
 * The calendar scope that can be resolved by this library.
 */
export enum CalendarScope {
  /**
   * January 1 to December 31
   */
  Gregorian = 'GREGORIAN',

  /**
   * First Sunday of Advent to the last Saturday of the Ordinary Time
   */
  Liturgical = 'LITURGICAL',
}
