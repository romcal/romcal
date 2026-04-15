import fs from 'node:fs';
import path from 'node:path';

import type { PrefaceId } from '../constants/prefaces';
import type { Rank1962 } from '../constants/rank-1962';
import type { PropersBlock } from '../types/liturgical-day-1962';

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

type Source = 'sancti' | 'tempora' | 'commune';

type ScaffoldTextItem = { type: 'text'; slot: number; role?: 'verse' | 'antiphon' | 'body' };
type ScaffoldItem =
  | ScaffoldTextItem
  | { type: 'scriptureRef'; ref: string }
  | { type: 'directive'; value: string }
  | { type: 'ref'; target: string }
  | { type: 'rubric'; note: string }
  | { type: 'separator' };
type ScaffoldBySection = Record<string, ScaffoldItem[]>;
type ScaffoldByEntry = Record<string, ScaffoldBySection>;
type LocaleSectionText = Record<string, string[]>;
type LocaleEntryText = Record<string, LocaleSectionText>;

const DATA_DIR = path.resolve(__dirname, '../../data');
const PROPERS_DIR = path.join(DATA_DIR, 'propers');

let _calendar: Calendar1960 | undefined;
let _sancti: MassFileMap | undefined;
let _tempora: MassFileMap | undefined;
let _commune: MassFileMap | undefined;
const _propersScaffold: Partial<Record<Source, ScaffoldByEntry>> = {};
const _propersText: Map<string, Partial<Record<Source, LocaleEntryText>>> = new Map();
let _availableLocales: string[] | undefined;

function load<T>(file: string): T {
  const raw = fs.readFileSync(path.join(DATA_DIR, file), 'utf8');
  return JSON.parse(raw) as T;
}

function loadIfExists<T>(absFile: string): T | undefined {
  if (!fs.existsSync(absFile)) return undefined;
  const raw = fs.readFileSync(absFile, 'utf8');
  return JSON.parse(raw) as T;
}

function discoverPropersLocales(): string[] {
  if (_availableLocales) return _availableLocales;
  if (!fs.existsSync(PROPERS_DIR)) return (_availableLocales = []);
  _availableLocales = fs
    .readdirSync(PROPERS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name !== '_structure')
    .map((d) => d.name)
    .sort();
  return _availableLocales;
}

function loadScaffold(source: Source): ScaffoldByEntry {
  const cached = _propersScaffold[source];
  if (cached) return cached;
  const file = path.join(PROPERS_DIR, '_structure', `${source}.json`);
  const data = (loadIfExists<ScaffoldByEntry>(file) ?? {}) as ScaffoldByEntry;
  _propersScaffold[source] = data;
  return data;
}

function loadLocaleText(lang: string): Partial<Record<Source, LocaleEntryText>> {
  const cached = _propersText.get(lang);
  if (cached) return cached;
  const out: Partial<Record<Source, LocaleEntryText>> = {};
  for (const source of ['sancti', 'tempora', 'commune'] as const) {
    const file = path.join(PROPERS_DIR, lang, `${source}.json`);
    const data = loadIfExists<LocaleEntryText>(file);
    if (data) out[source] = data;
  }
  _propersText.set(lang, out);
  return out;
}

/**
 * Splice per-locale text arrays into the canonical scaffold for one section,
 * producing the same `PropersBlock` shape the runtime saw before Phase 1
 * pivoted text out into per-locale files. Text items appear once per locale
 * that ships a value for that slot; non-text items pass through verbatim.
 */
function spliceTextIntoScaffold(
  scaffold: ScaffoldItem[],
  perLocaleText: { lang: string; text: string[] | undefined }[]
): PropersBlock {
  const out: PropersBlock = [];
  for (const item of scaffold) {
    if (item.type !== 'text') {
      out.push(item);
      continue;
    }
    for (const { lang, text } of perLocaleText) {
      const value = text?.[item.slot];
      if (value === undefined) continue;
      out.push({ type: 'text', lang, value, ...(item.role ? { role: item.role } : {}) });
    }
  }
  return out;
}

/**
 * Overlay scaffold + per-locale text onto each entry's `sections`.
 * Phase 1 stripped text tokens out of the main JSON; Phase 3 puts them back
 * at runtime by re-hydrating from `data/propers/_structure` + `data/propers/{lang}/`.
 * Result is an entry whose `sections` are PropersBlock-shaped, matching the
 * pre-Phase-1 contract — so the resolver and `blockToLocalized` work unchanged.
 */
function rehydrateSections(entries: MassFileMap, source: Source): void {
  const scaffold = loadScaffold(source);
  const langs = discoverPropersLocales();
  const localeBundles = langs.map((lang) => ({ lang, source: loadLocaleText(lang)[source] }));

  for (const [key, entry] of Object.entries(entries)) {
    const sections = scaffold[key];
    if (!sections) continue;
    const hydrated: Record<string, PropersBlock> = { ...(entry.sections as Record<string, PropersBlock>) };
    for (const [sectionName, scaffoldBlock] of Object.entries(sections)) {
      const perLocaleText = localeBundles.map(({ lang, source: srcMap }) => ({
        lang,
        text: srcMap?.[key]?.[sectionName],
      }));
      hydrated[sectionName] = spliceTextIntoScaffold(scaffoldBlock, perLocaleText);
    }
    entry.sections = hydrated;
  }
}

export function loadCalendar1960(): Calendar1960 {
  if (!_calendar) _calendar = load<Calendar1960>('calendar-1960.json');
  return _calendar;
}

export function loadSancti(): MassFileMap {
  if (!_sancti) {
    _sancti = load<MassFileMap>('sancti.json');
    rehydrateSections(_sancti, 'sancti');
  }
  return _sancti;
}

export function loadTempora(): MassFileMap {
  if (!_tempora) {
    _tempora = load<MassFileMap>('tempora.json');
    rehydrateSections(_tempora, 'tempora');
  }
  return _tempora;
}

export function loadCommune(): MassFileMap {
  if (!_commune) {
    _commune = load<MassFileMap>('commune.json');
    rehydrateSections(_commune, 'commune');
  }
  return _commune;
}
