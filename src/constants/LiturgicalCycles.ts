import { ElementType } from '../utils/helpers';

const LiturgicalCycles = ['Year A', 'Year B', 'Year C'] as const;

export type TLiturgicalCycles = ElementType<typeof LiturgicalCycles>;

export type TLiturgicalCycle = {
  key: number;
  value: TLiturgicalCycles;
};

export default LiturgicalCycles;
