import { ElementType } from '@romcal/utils/helpers';
import {
  LITURGICAL_FERIAL_CYCLES,
  LITURGICAL_SUNDAY_CYCLES,
  PSALTER_WEEKS,
} from '@romcal/constants/liturgical-cycles.constant';

export type RomcalSundayCycle = ElementType<typeof LITURGICAL_SUNDAY_CYCLES>;
export type RomcalFerialCycle = ElementType<typeof LITURGICAL_FERIAL_CYCLES>;
export type PsalterWeek = ElementType<typeof PSALTER_WEEKS>;

export type RomcalCycles = {
  sundayCycle: RomcalSundayCycle;
  ferialCycle: RomcalFerialCycle;
  psalterWeek: PsalterWeek;
};
