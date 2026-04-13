import type { Rank1962 } from '../constants/rank-1962';
import type { DayOfWeek, ProperOfTimeSeason } from '../proper-of-time';
import type { Color, SanctoralCommemoration, SanctoralPropersRef } from '../sanctoral';
import type { OctaveInfo, RubricFlags1962 } from '../types/liturgical-day-1962';

export type Class1962 = 1 | 2 | 3 | 4;

export interface Celebration1962 {
  kind: 'tempora' | 'sancti';
  key: string;
  name: string;
  classOf1962: Class1962;
  rank1962: Rank1962;
  numericRank: number;
  precedence: number;
  properRef: { source: string; communeSlug?: string };
  rubrics: RubricFlags1962;
  colors: Color[];
  octave?: OctaveInfo;
  vigil?: { of: string };
  inlineCommemorations?: SanctoralCommemoration[];
}

export interface ResolvedDay1962 {
  date: string;
  dayOfWeek: DayOfWeek;
  season?: ProperOfTimeSeason;
  primary: Celebration1962;
  commemorations: Celebration1962[];
  transferredFrom?: string;
}

export type ResolvedYear1962 = Map<string, ResolvedDay1962>;

export type { Color, SanctoralPropersRef };
