import { ElementType } from '@romcal/utils/type-helpers/type-helpers';
import {
  LITURGICAL_DAY_CYCLE,
  WEEKDAYS_CYCLE,
  SUNDAYS_CYCLE,
  PSALTER_WEEKS,
} from '@romcal/constants/cycles/cycles.constant';

export type RomcalLiturgicalDayCycle = ElementType<typeof LITURGICAL_DAY_CYCLE>;
export type RomcalSundayCycle = ElementType<typeof SUNDAYS_CYCLE>;
export type RomcalWeekdayCycle = ElementType<typeof WEEKDAYS_CYCLE>;
export type RomcalPsalterWeek = ElementType<typeof PSALTER_WEEKS>;

export type RomcalCyclesMetadata = {
  liturgicalDayCycle: RomcalLiturgicalDayCycle;
  sundayCycle: RomcalSundayCycle;
  weekdayCycle: RomcalWeekdayCycle;
  psalterWeek: RomcalPsalterWeek;
};

/**
 * Check if a value is a liturgical day cycle.
 * @param maybeLiturgicalDayCycle
 */
export const isLiturgicalDayCycle = (maybeLiturgicalDayCycle: unknown): boolean => {
  return (
    typeof maybeLiturgicalDayCycle === 'string' &&
    LITURGICAL_DAY_CYCLE.includes(maybeLiturgicalDayCycle as RomcalLiturgicalDayCycle)
  );
};
