import { ElementType } from '@romcal/utils/helpers';
import { PSALTER_WEEKS } from '@romcal/constants/psalter-weeks.constant';

export type PsalterWeeks = ElementType<typeof PSALTER_WEEKS>;

export type PsalterWeek = {
  key: number;
  value: PsalterWeeks;
};
