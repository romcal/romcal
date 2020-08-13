import { ElementType } from '@romcal/utils/type-helpers/type-helpers';
import {
  CELEBRATIONS_CYCLE,
  WEEKDAYS_CYCLE,
  SUNDAYS_CYCLE,
  PSALTER_WEEKS,
} from '@romcal/constants/cycles/cycles.constant';

export type RomcalCelebrationCycle = ElementType<typeof CELEBRATIONS_CYCLE>;
export type RomcalSundayCycle = ElementType<typeof SUNDAYS_CYCLE>;
export type RomcalWeekdayCycle = ElementType<typeof WEEKDAYS_CYCLE>;
export type RomcalPsalterWeek = ElementType<typeof PSALTER_WEEKS>;

export type RomcalCycles = {
  celebrationCycle: RomcalCelebrationCycle;
  sundayCycle: RomcalSundayCycle;
  weekdayCycle: RomcalWeekdayCycle;
  psalterWeek: RomcalPsalterWeek;
};

/**
 * Check if a value is a celebration cycle.
 * @param maybeCelebrationCycle
 */
export const isCelebrationCycle = (maybeCelebrationCycle: unknown): boolean => {
  return (
    typeof maybeCelebrationCycle === 'string' &&
    CELEBRATIONS_CYCLE.includes(maybeCelebrationCycle as RomcalCelebrationCycle)
  );
};
