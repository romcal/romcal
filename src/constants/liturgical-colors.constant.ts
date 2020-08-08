import { LiturgicalColorsEnum } from '@romcal/enums/liturgical-colors.enum';

/**
 * A dynamically generated constant consisting of all the enum keys in [[LITURGICAL_COLORS]]
 */
export const LITURGICAL_COLORS = Object.keys(LiturgicalColorsEnum).filter(
  (key) => typeof LiturgicalColorsEnum[key as keyof typeof LiturgicalColorsEnum] === 'string',
) as Array<keyof typeof LiturgicalColorsEnum>;
