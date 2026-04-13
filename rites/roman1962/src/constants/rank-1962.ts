export const RANKS_1962 = ['ClassI', 'ClassII', 'ClassIII', 'ClassIV', 'Ferial'] as const;

export type Rank1962 = (typeof RANKS_1962)[number];

export const Rank1962Values: Readonly<Record<Rank1962, Rank1962>> = {
  ClassI: 'ClassI',
  ClassII: 'ClassII',
  ClassIII: 'ClassIII',
  ClassIV: 'ClassIV',
  Ferial: 'Ferial',
};
