export type LiturgicalSeason =
  | 'ADVENT'
  | 'CHRISTMASTIDE'
  | 'EARLY_ORDINARY_TIME'
  | 'LATER_ORDINARY_TIME'
  | 'LENT'
  | 'HOLY_WEEK'
  | 'EASTER';

export type LiturgicalSeasons = {
  [key in LiturgicalSeason]: string;
};
