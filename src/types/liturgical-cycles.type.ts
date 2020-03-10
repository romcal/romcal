import { ElementType } from '@RomcalUtils/helpers';
import { LITURGICAL_CYCLES } from '@RomcalConstants/liturgical-cycles.constant';

export type LiturgicalCycles = ElementType<typeof LITURGICAL_CYCLES>;

export type LiturgicalCycle = {
  key: number;
  value: LiturgicalCycles;
};
