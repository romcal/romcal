import { ElementType } from '@romcal/utils/helpers';
import { LITURGICAL_COLORS } from '@romcal/constants/liturgical-colors.constant';

export type RomcalLiturgicalColor = ElementType<typeof LITURGICAL_COLORS>;

export type LiturgicalColors = {
  [key in RomcalLiturgicalColor]: string;
};
