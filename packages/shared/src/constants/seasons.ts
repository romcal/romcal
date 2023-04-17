/**
 * Liturgical seasons are segments of time that when combined, form the liturgical year.
 * Liturgical seasons are distinguished by specific names that signify the character
 * of the season.
 */
export enum Season {
  Advent = 'ADVENT',
  ChristmasTime = 'CHRISTMAS_TIME',
  Lent = 'LENT',
  PaschalTriduum = 'PASCHAL_TRIDUUM',
  EasterTime = 'EASTER_TIME',
  OrdinaryTime = 'ORDINARY_TIME',
}

export const SEASONS = [
  Season.Advent,
  Season.ChristmasTime,
  Season.Lent,
  Season.PaschalTriduum,
  Season.EasterTime,
  Season.OrdinaryTime,
] as const;
