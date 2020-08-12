import { ElementType } from '@romcal/utils/helpers';
import {
  CELEBRATION_CYCLES,
  WEEKDAY_CYCLES,
  SUNDAY_CYCLES,
  PSALTER_WEEKS,
} from '@romcal/constants/liturgical-cycles.constant';

export type RomcalCelebrationCycle = ElementType<typeof CELEBRATION_CYCLES>;
export type RomcalSundayCycle = ElementType<typeof SUNDAY_CYCLES>;
export type RomcalWeekdayCycle = ElementType<typeof WEEKDAY_CYCLES>;
export type PsalterWeek = ElementType<typeof PSALTER_WEEKS>;

export type RomcalCycles = {
  celebrationCycle: RomcalCelebrationCycle;
  sundayCycle: RomcalSundayCycle;
  weekdayCycle: RomcalWeekdayCycle;
  psalterWeek: PsalterWeek;
};

/**
 * Check if a value is a celebration cycle.
 * @param maybeCelebrationCycle
 */
export const isCelebrationCycle = (maybeCelebrationCycle: unknown): boolean => {
  return (
    typeof maybeCelebrationCycle === 'string' &&
    CELEBRATION_CYCLES.includes(maybeCelebrationCycle as RomcalCelebrationCycle)
  );
};
