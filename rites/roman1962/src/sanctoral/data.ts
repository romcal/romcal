import fs from 'node:fs';
import path from 'node:path';

import type { PrefaceId } from '../constants/prefaces';
import type { Rank1962 } from '../constants/rank-1962';

import type { Color, SanctoralCommemoration } from './types';

export interface CalendarEntry {
  fileKey: string;
  name: string;
  numericRank: number;
  class1962: 1 | 2 | 3 | 4;
  rank1962: Rank1962;
  commemorations?: SanctoralCommemoration[];
}

export interface RankInfo {
  raw: string;
  classText: string;
  numericRank: number;
  class1962: 1 | 2 | 3 | 4;
  rank1962: Rank1962;
  sourceRefs: string[];
}

export interface MassFileEntry {
  id: string;
  file: string;
  source: 'sancti' | 'tempora' | 'commune';
  officium?: string;
  names?: Record<string, string>;
  colors: Color[];
  rank?: RankInfo;
  rubrics: {
    gloria?: boolean;
    credo?: boolean;
    preface?: PrefaceId;
    lastGospel?: 'ultimum' | 'proper' | 'none';
    ite?: 'ite' | 'benedicamus' | 'requiescant';
    raw: string[];
  };
  references: Record<string, string>;
  sections: Record<string, unknown>;
}

export type Calendar1960 = Record<string, CalendarEntry[]>;
export type MassFileMap = Record<string, MassFileEntry>;

const DATA_DIR = path.resolve(__dirname, '../../data');

let _calendar: Calendar1960 | undefined;
let _sancti: MassFileMap | undefined;
let _tempora: MassFileMap | undefined;
let _commune: MassFileMap | undefined;

function load<T>(file: string): T {
  const raw = fs.readFileSync(path.join(DATA_DIR, file), 'utf8');
  return JSON.parse(raw) as T;
}

export function loadCalendar1960(): Calendar1960 {
  if (!_calendar) _calendar = load<Calendar1960>('calendar-1960.json');
  return _calendar;
}

export function loadSancti(): MassFileMap {
  if (!_sancti) _sancti = load<MassFileMap>('sancti.json');
  return _sancti;
}

export function loadTempora(): MassFileMap {
  if (!_tempora) _tempora = load<MassFileMap>('tempora.json');
  return _tempora;
}

export function loadCommune(): MassFileMap {
  if (!_commune) _commune = load<MassFileMap>('commune.json');
  return _commune;
}
