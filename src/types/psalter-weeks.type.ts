import { ElementType } from '@RomcalUtils/helpers';
import { PSALTER_WEEKS } from '@RomcalConstants/psalter-weeks.constant';

export type PsalterWeeks = ElementType<typeof PSALTER_WEEKS>;

export type PsalterWeek = {
  key: number;
  value: PsalterWeeks;
};
