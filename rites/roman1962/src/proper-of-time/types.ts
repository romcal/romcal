import type { DayOfWeek, ProperOfTimeYear as BaseProperOfTimeYear } from '@internal/proper-of-time';

export type { DayOfWeek };

export type ProperOfTimeSeason =
  | 'Advent'
  | 'ChristmasTide'
  | 'EpiphanyTide'
  | 'Septuagesima'
  | 'Lent'
  | 'Passiontide'
  | 'HolyWeek'
  | 'EasterWeek'
  | 'Paschaltide'
  | 'AscensionTide'
  | 'TimeAfterPentecost';

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
