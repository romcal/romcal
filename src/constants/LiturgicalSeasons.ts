export type TLiturgicalSeasonKeys =
  | 'ADVENT'
  | 'CHRISTMASTIDE'
  | 'EARLY_ORDINARY_TIME'
  | 'LATER_ORDINARY_TIME'
  | 'LENT'
  | 'HOLY_WEEK'
  | 'EASTER';

export type TLiturgicalSeasons = {
  [key in TLiturgicalSeasonKeys]: string;
};

/**
 * Liturgical seasons are segments of time that when combined, form the liturgical year.
 * Liturgical seasons are distinguished by specific names that signify the character
 * of the season.
 */
export const LiturgicalSeasons: TLiturgicalSeasons = {
  ADVENT: 'Advent',
  CHRISTMASTIDE: 'Christmastide',
  EARLY_ORDINARY_TIME: 'Early Ordinary Time',
  LATER_ORDINARY_TIME: 'Later Ordinary Time',
  LENT: 'Lent',
  HOLY_WEEK: 'Holy Week',
  EASTER: 'Easter',
};

export default LiturgicalSeasons;
