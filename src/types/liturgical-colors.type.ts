import { ElementType } from '@romcal/utils/helpers';
import { LITURGICAL_COLORS } from '@romcal/constants/liturgical-colors.constant';

export type RomcalLiturgicalColor = ElementType<typeof LITURGICAL_COLORS>;

export type LiturgicalColors = {
  [key in RomcalLiturgicalColor]: string;
};

/**
 * Check if a value is a liturgical color.
 * @param maybeLiturgicalColor
 */
export const isLiturgicalColor = (maybeLiturgicalColor: unknown): boolean => {
  return (
    typeof maybeLiturgicalColor === 'string' &&
    LITURGICAL_COLORS.includes(maybeLiturgicalColor as RomcalLiturgicalColor)
  );
};
