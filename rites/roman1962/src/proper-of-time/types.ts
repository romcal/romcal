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

export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface ProperOfTimeEntry {
  date: string;
  temporaKey: string;
  season: ProperOfTimeSeason;
  weekIndex: number;
  dayOfWeek: DayOfWeek;
  kind: TemporaSlotKind;
}

export type ProperOfTimeYear = Map<string, ProperOfTimeEntry>;
