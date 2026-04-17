export const COLORS_1962 = ['White', 'Red', 'Green', 'Violet', 'Black', 'Rose'] as const;

export type Color1962 = (typeof COLORS_1962)[number];

/**
 * Enum-shaped companion to `COLORS_1962`. Parity with 1969's
 * `Colors` enum; kept as a const-map (not a TS `enum`) so it stays
 * erasable in the emitted JS and identical to the value literals.
 */
export const Colors1962: Readonly<Record<Color1962, Color1962>> = {
  White: 'White',
  Red: 'Red',
  Green: 'Green',
  Violet: 'Violet',
  Black: 'Black',
  Rose: 'Rose',
};

export const isColor1962 = (maybe: unknown): maybe is Color1962 =>
  typeof maybe === 'string' && (COLORS_1962 as readonly string[]).includes(maybe);
