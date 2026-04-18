// Importer-local copy of the structured-Propers token types. These used to live
// in `src/types/liturgical-day-1962.ts` alongside the retired legacy runtime
// types; the OOP engine never consumed them, so they now live here where the
// divinum-officium importer is the only producer.
export type LocaleId = string;
export type TextRole = 'verse' | 'antiphon' | 'body';

export type PropersBlockItem =
  | { type: 'text'; lang: LocaleId; value: string; role?: TextRole }
  | { type: 'scriptureRef'; ref: string }
  | { type: 'directive'; value: string }
  | { type: 'ref'; target: string }
  | { type: 'rubric'; note: string }
  | { type: 'separator' };

export type PropersBlock = PropersBlockItem[];

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
