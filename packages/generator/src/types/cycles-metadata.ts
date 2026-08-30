import { ProperCycle, PsalterWeekCycle, SundayCycle, WeekdayCycle } from '../constants/cycles';

/**
 * Cycles Metadata
 */
export type BaseCyclesMetadata = {
  /**
   * The proper cycle in which the liturgical day is part
   */
  properCycle: ProperCycle;

  /**
   * The proper cycle name in which the liturgical day is part
   */
  properCycleName: string;

  /**
   * The Sunday yearly cycle in which the liturgical day is part
   */
  sundayCycle: SundayCycle;

  /**
   * The Sunday yearly cycle name in which the liturgical day is part
   */
  sundayCycleName: string;

  /**
   * The weekday yearly cycle in which the liturgical day is part
   */
  weekdayCycle: WeekdayCycle;

  /**
   * The weekday yearly cycle name in which the liturgical day is part
   */
  weekdayCycleName: string;

  /**
   * The psalter week cycle in which the liturgical day is part
   */
  psalterWeek: PsalterWeekCycle;

  /**
   * The psalter week cycle name in which the liturgical day is part
   */
  psalterWeekName: string;
};

/**
 * Partial Cycle Metadata definition
 */
export type PartialCyclesDef = Pick<BaseCyclesMetadata, 'properCycle'>;

/**
 * Plain object of the {@Link CycleMetadata} object
 */
export type PlainCyclesMetadata = BaseCyclesMetadata;
