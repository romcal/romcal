import { ElementType } from '@romcal/utils/helpers';
import { LITURGICAL_CYCLES } from '@romcal/constants/liturgical-cycles.constant';

export type LiturgicalCycles = ElementType<typeof LITURGICAL_CYCLES>;

export type LiturgicalCycle = {
  key: number;
  value: LiturgicalCycles;
};
