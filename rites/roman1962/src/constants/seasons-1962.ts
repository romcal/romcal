export const SEASONS_1962 = [
  'Advent',
  'ChristmasTide',
  'EpiphanyTide',
  'Septuagesima',
  'Lent',
  'Passiontide',
  'HolyWeek',
  'EasterWeek',
  'Paschaltide',
  'AscensionTide',
  'TimeAfterPentecost',
] as const;

export type Season1962 = (typeof SEASONS_1962)[number];

/**
 * Enum-shaped companion to `SEASONS_1962`. Parity with 1969's
 * `Seasons`; const-map rather than a TS `enum` so the emitted JS is
 * a plain object literal.
 */
export const Seasons1962: Readonly<Record<Season1962, Season1962>> = {
  Advent: 'Advent',
  ChristmasTide: 'ChristmasTide',
  EpiphanyTide: 'EpiphanyTide',
  Septuagesima: 'Septuagesima',
  Lent: 'Lent',
  Passiontide: 'Passiontide',
  HolyWeek: 'HolyWeek',
  EasterWeek: 'EasterWeek',
  Paschaltide: 'Paschaltide',
  AscensionTide: 'AscensionTide',
  TimeAfterPentecost: 'TimeAfterPentecost',
};
