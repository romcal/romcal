import { ElementType } from '@romcal/utils/helpers';
import {
  LITURGICAL_WEEKDAY_CYCLES,
  LITURGICAL_SUNDAY_CYCLES,
  PSALTER_WEEKS,
} from '@romcal/constants/liturgical-cycles.constant';

export type RomcalSundayCycle = ElementType<typeof LITURGICAL_SUNDAY_CYCLES>;
export type RomcalWeekdayCycle = ElementType<typeof LITURGICAL_WEEKDAY_CYCLES>;
export type PsalterWeek = ElementType<typeof PSALTER_WEEKS>;

export type RomcalCycles = {
  sundayCycle: RomcalSundayCycle;
  weekdayCycle: RomcalWeekdayCycle;
  psalterWeek: PsalterWeek;
};
