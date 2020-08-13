import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';

/**
 * A dynamically generated constant consisting of all the enum keys in [[LITURGICAL_COLORS]]
 */
export const LITURGICAL_COLORS = Object.keys(LiturgicalColors).filter(
  (key) => typeof LiturgicalColors[key as keyof typeof LiturgicalColors] === 'string',
) as Array<keyof typeof LiturgicalColors>;
