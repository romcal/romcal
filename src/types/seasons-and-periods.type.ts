import { ElementType } from '@romcal/utils/helpers';
import { LITURGICAL_PERIODS, LITURGICAL_SEASONS } from '@romcal/constants/seasons-and-periods.constant';

export type LiturgicalSeason = ElementType<typeof LITURGICAL_SEASONS>;
export type LiturgicalPeriod = ElementType<typeof LITURGICAL_PERIODS>;

export type LiturgicalSeasons = {
  [key in LiturgicalSeason]: string;
};

export type LiturgicalPeriods = {
  [key in LiturgicalPeriod]: string;
};
