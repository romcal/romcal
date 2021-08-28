/**
 * The calendar scope that can be resolved by this library.
 */
export enum CalendarScopes {
  /**
   * January 1 to December 31
   */
  Gregorian = 'gregorian',

  /**
   * First Sunday of Advent to the last Saturday of the Ordinary Time
   */
  Liturgical = 'liturgical',
}

export const CALENDAR_SCOPES = Object.keys(CalendarScopes).filter(
  (key) => typeof CalendarScopes[key as keyof typeof CalendarScopes] === 'string',
) as Array<Lowercase<keyof typeof CalendarScopes>>;

export type CalendarScope = typeof CALENDAR_SCOPES[number];
