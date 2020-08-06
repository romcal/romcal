import { ElementType } from '@romcal/utils/helpers';
import { LITURGICAL_FERIAL_CYCLES, LITURGICAL_SUNDAY_CYCLES } from '@romcal/constants/liturgical-cycles.constant';

export type RomcalSundayCycle = ElementType<typeof LITURGICAL_SUNDAY_CYCLES>;
export type RomcalFerialCycle = ElementType<typeof LITURGICAL_FERIAL_CYCLES>;

export type RomcalCycles = {
  // psalterWeek: number; // 1 | 2 | 3 | 4;
  sundayCycle: RomcalSundayCycle;
  ferialCycle: RomcalFerialCycle;
};
