import { ElementType } from '@romcal/utils/type-helpers/type-helpers';
import {
  LITURGICAL_PERIODS,
  LITURGICAL_SEASONS,
} from '@romcal/constants/seasons-and-periods/seasons-and-periods.constant';

export type RomcalLiturgicalSeason = ElementType<typeof LITURGICAL_SEASONS>;
export type RomcalLiturgicalPeriod = ElementType<typeof LITURGICAL_PERIODS>;

export type RomcalLiturgicalSeasons = {
  [key in RomcalLiturgicalSeason]: string;
};

export type RomcalLiturgicalPeriods = {
  [key in RomcalLiturgicalPeriod]: string;
};
