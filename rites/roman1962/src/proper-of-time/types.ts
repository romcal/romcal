import type { DayOfWeek, ProperOfTimeYear as BaseProperOfTimeYear } from '@internal/rite-roman1969';

import type { Season1962 } from '../constants/seasons-1962';

export type { DayOfWeek };

/**
 * Alias retained for historical callers. Canonical home is
 * `constants/seasons-1962.ts` as `Season1962`.
 */
export type ProperOfTimeSeason = Season1962;

export type TemporaSlotKind = 'sunday' | 'feria' | 'feast' | 'vigil' | 'octaveDay' | 'withinOctave';

export interface ProperOfTimeEntry {
  date: string;
  temporaKey: string;
  season: ProperOfTimeSeason;
  weekIndex: number;
  dayOfWeek: DayOfWeek;
  kind: TemporaSlotKind;
}

export type ProperOfTimeYear = BaseProperOfTimeYear<ProperOfTimeEntry>;
