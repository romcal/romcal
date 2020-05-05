import { LiturgicalColors } from '@romcal/types/liturgical-colors.type';
import { LiturgicalColorKeys } from '@romcal/types/liturgical-colors.type';

/**
 * An object literal representing a Liturgical Color construct that can be used
 * as metadata for celebrations.
 */
export const LITURGICAL_COLORS: LiturgicalColors = {
  RED: { key: 'RED' },
  ROSE: { key: 'ROSE' },
  PURPLE: { key: 'PURPLE' },
  GREEN: { key: 'GREEN' },
  WHITE: { key: 'WHITE' },
  GOLD: { key: 'GOLD' },
};

/**
 * An array consisting of all possible Liturgical color keys
 */
export const LITURGICAL_COLOR_KEYS = Object.keys(LITURGICAL_COLORS) as Array<LiturgicalColorKeys>;
