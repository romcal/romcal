/**
 * Rank of liturgical days.
 * Order is important: higher rank first, lower rank at the end.
 */
export enum Ranks {
  SOLEMNITY = 'SOLEMNITY', // The highest liturgical day rank.
  SUNDAY = 'SUNDAY',
  TRIDUUM = 'TRIDUUM',
  HOLY_WEEK = 'HOLY_WEEK',
  FEAST = 'FEAST',
  MEMORIAL = 'MEMORIAL',
  OPT_MEMORIAL = 'OPT_MEMORIAL',
  COMMEMORATION = 'COMMEMORATION',
  WEEKDAY = 'WEEKDAY',
}
