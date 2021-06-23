/**
 * Liturgical colors that can be used as metadata for celebrations.
 */
export enum LiturgicalColors {
  RED = 'RED',
  ROSE = 'ROSE',
  PURPLE = 'PURPLE',
  GREEN = 'GREEN',
  WHITE = 'WHITE',
  GOLD = 'GOLD',
  BLACK = 'BLACK',
}

/**
 * A dynamically generated constant consisting of all the enum keys in [[LITURGICAL_COLORS]]
 */
export const LITURGICAL_COLORS = Object.keys(LiturgicalColors).filter(
  (key) => typeof LiturgicalColors[key as keyof typeof LiturgicalColors] === 'string',
) as Array<keyof typeof LiturgicalColors>;

export type LiturgicalColor = typeof LITURGICAL_COLORS[number];

/**
 * Check if a value is a liturgical color.
 * @param maybeLiturgicalColor
 */
export const isLiturgicalColor = (maybeLiturgicalColor: unknown): boolean => {
  return (
    typeof maybeLiturgicalColor === 'string' &&
    LITURGICAL_COLORS.includes(maybeLiturgicalColor as LiturgicalColor)
  );
};
