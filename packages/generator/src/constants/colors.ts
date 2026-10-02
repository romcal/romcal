/**
 * Liturgical colors that can be used as metadata for celebrations.
 */
export enum Colors {
  Red = 'RED',
  Rose = 'ROSE',
  Purple = 'PURPLE',
  Green = 'GREEN',
  White = 'WHITE',
  Gold = 'GOLD',
  Black = 'BLACK',
}

/**
 * A dynamically generated constant consisting of all the enum keys in [[LITURGICAL_COLORS]]
 */
export const COLORS = Object.keys(Colors).filter(
  (key) => typeof Colors[key as keyof typeof Colors] === 'string'
) as Uppercase<keyof typeof Colors>[];

export type Color = (typeof COLORS)[number];

/**
 * Check if a value is a liturgical color.
 * @param maybeColor
 */
export const isColor = (maybeColor: unknown): boolean => {
  return typeof maybeColor === 'string' && COLORS.includes(maybeColor as Color);
};
