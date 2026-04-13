import type { Rank1962 } from '../constants/rank-1962';
import type { OctaveInfo, RubricFlags1962 } from '../types/liturgical-day-1962';

export type Color = 'White' | 'Red' | 'Green' | 'Violet' | 'Black' | 'Rose' | string;

export interface SanctoralPropersRef {
  source: string;
  communeSlug?: string;
}

export interface SanctoralCommemoration {
  name: string;
  numericRank: number;
  fileKey?: string;
}

export interface SanctoralEntry1962 {
  date: string;
  mmdd: string;
  fileKey: string;
  source: 'sancti' | 'tempora';
  name: string;
  rank1962: Rank1962;
  class1962: 1 | 2 | 3 | 4 | undefined;
  numericRank: number;
  colors: Color[];
  rubrics: RubricFlags1962;
  properRef: SanctoralPropersRef;
  commemorations: SanctoralCommemoration[];
  octave?: OctaveInfo;
  vigil?: { of: string };
}

export type Sanctoral1962Year = Map<string, SanctoralEntry1962[]>;
