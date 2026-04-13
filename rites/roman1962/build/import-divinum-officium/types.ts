import type { PropersBlock } from '../../src/types/liturgical-day-1962';

export type RubricTag = 'unmarked' | '1960' | 'tridentina' | 'innovata' | 'divino-afflatu' | 'other';

export interface RawBlock {
  name: string;
  qualifier?: string;
  rubricTag: RubricTag;
  lines: string[];
}

export interface ParsedFile {
  path: string;
  filename: string;
  source: 'tempora' | 'sancti' | 'commune';
  blocks: RawBlock[];
}

export interface RankInfo {
  raw: string;
  /**
   * Raw class string from the `[Rank]` line. May contain pre-1960 vocabulary
   * (Duplex, Semiduplex, Simplex) even inside (rubrica 196)-tagged blocks, so
   * this field is historical reference only — the 1960 semantic class comes
   * from `numericRank`.
   */
  classText: string;
  numericRank: number;
  class1962: 1 | 2 | 3 | 4;
  rank1962: 'ClassI' | 'ClassII' | 'ClassIII' | 'ClassIV' | 'Ferial';
  sourceRefs: string[];
}

export interface RubricInfo {
  gloria?: boolean;
  credo?: boolean;
  preface?: string;
  lastGospel?: 'ultimum' | 'proper' | 'none';
  ite?: 'ite' | 'benedicamus' | 'requiescant';
  raw: string[];
}

export interface MassEntry {
  id: string;
  source: 'tempora' | 'sancti' | 'commune';
  file: string;
  officium?: string;
  names?: Record<string, string>;
  rank?: RankInfo;
  rubrics: RubricInfo;
  colors: string[];
  commune?: string;
  sections: Record<string, PropersBlock>;
  references: Record<string, string>;
  warnings: string[];
}

export interface FeastEntry {
  fileKey: string;
  name: string;
  numericRank: number;
  class1962: 1 | 2 | 3 | 4;
  rank1962: 'ClassI' | 'ClassII' | 'ClassIII' | 'ClassIV' | 'Ferial';
  commemorations?: { fileKey?: string; name: string; numericRank: number }[];
}

export type Calendar1960 = Record<string, FeastEntry[]>;

export interface SourceMeta {
  sha: string;
  importerVersion: string;
  generatedAt: null;
  notes: string;
}
