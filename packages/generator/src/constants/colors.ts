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
 * A dynamically generated constant consisting of all the enum values in [[Colors]], such as `'RED'`.
 *
 * It lists the values, not the keys (`'Red'`), because `Color` is typed as their upper-case form and
 * `isColor` matches against it. String enums have no reverse mapping, so the values are exactly the
 * seven declared colours.
 */
export const COLORS = Object.values(Colors) as Uppercase<keyof typeof Colors>[];

export type Color = (typeof COLORS)[number];

/**
 * Check if a value is a liturgical color.
 * @param maybeColor
 */
export const isColor = (maybeColor: unknown): boolean => {
  return typeof maybeColor === 'string' && COLORS.includes(maybeColor as Color);
};
