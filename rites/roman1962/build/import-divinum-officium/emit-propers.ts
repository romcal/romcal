import fs from 'node:fs';
import path from 'node:path';

import type { MassEntry, PropersBlock } from './types';

type Source = 'sancti' | 'tempora' | 'commune';

export type ScaffoldItem =
  | { type: 'text'; slot: number; role?: 'verse' | 'antiphon' | 'body' }
  | { type: 'scriptureRef'; ref: string }
  | { type: 'directive'; value: string }
  | { type: 'ref'; target: string }
  | { type: 'rubric'; note: string }
  | { type: 'separator' };

export type ScaffoldSection = ScaffoldItem[];
export type Scaffold = Record<string, ScaffoldSection>;
export type LocaleSectionText = Record<string, string[]>;

/**
 * Split a section's mixed Latin + vernacular token stream into:
 *   - a canonical scaffold (Latin text tokens → numbered `slot` placeholders;
 *     non-text tokens passed through verbatim)
 *   - a per-lang list of text strings, indexed by the scaffold slot number
 *
 * Assumes the importer's merge step appends vernacular text tokens after
 * Latin in the same order (true of `mergeLocale` in index.ts). Extra tokens
 * in a vernacular that exceed the Latin count are dropped — they'd have no
 * scaffold slot to hydrate into.
 */
function splitSection(block: PropersBlock): {
  scaffold: ScaffoldSection;
  byLang: Record<string, string[]>;
} {
  const scaffold: ScaffoldSection = [];
  const byLang: Record<string, string[]> = {};

  let slot = 0;
  for (const item of block) {
    if (item.type === 'text' && item.lang === 'la') {
      scaffold.push({ type: 'text', slot, ...(item.role ? { role: item.role } : {}) });
      (byLang.la ??= []).push(item.value);
      slot++;
      continue;
    }
    if (item.type === 'text') {
      (byLang[item.lang] ??= []).push(item.value);
      continue;
    }
    scaffold.push(item as ScaffoldItem);
  }

  return { scaffold, byLang };
}

function splitEntry(entry: MassEntry): {
  scaffold: Scaffold;
  byLang: Record<string, LocaleSectionText>;
} {
  const scaffold: Scaffold = {};
  const byLang: Record<string, LocaleSectionText> = {};

  for (const [name, block] of Object.entries(entry.sections)) {
    const { scaffold: sc, byLang: bl } = splitSection(block);
    if (sc.length > 0) scaffold[name] = sc;
    for (const [lang, texts] of Object.entries(bl)) {
      if (texts.length === 0) continue;
      (byLang[lang] ??= {})[name] = texts;
    }
  }

  return { scaffold, byLang };
}

function writeJson(file: string, value: unknown): void {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${JSON.stringify(value)}\n`, 'utf8');
}

/**
 * Pivot lang-tagged section tokens into:
 *   - one shared scaffold file per source  (propers/_structure/{source}.json)
 *   - one bulk text file per (lang, source) (propers/{lang}/{source}.json)
 * Grouping by source (not per-entry files) keeps the filesystem flat enough
 * to tar up and avoids fs.readFile overhead at runtime — callers load one
 * blob per (lang, source) and index into it by key.
 */
export function emitPropers(
  groups: { source: Source; entries: Record<string, MassEntry> }[],
  outDir: string
): { langs: Set<string>; sources: number; entries: number } {
  fs.mkdirSync(outDir, { recursive: true });

  const langs = new Set<string>();
  let entriesCount = 0;

  for (const { source, entries } of groups) {
    const scaffoldBySource: Record<string, Scaffold> = {};
    const textBySourceLang: Record<string, Record<string, LocaleSectionText>> = {};

    for (const [key, entry] of Object.entries(entries)) {
      const { scaffold, byLang } = splitEntry(entry);
      if (Object.keys(scaffold).length > 0) {
        scaffoldBySource[key] = scaffold;
        entriesCount++;
      }
      for (const [lang, sections] of Object.entries(byLang)) {
        if (Object.keys(sections).length === 0) continue;
        (textBySourceLang[lang] ??= {})[key] = sections;
        langs.add(lang);
      }
    }

    writeJson(path.join(outDir, '_structure', `${source}.json`), scaffoldBySource);
    for (const [lang, entriesOut] of Object.entries(textBySourceLang)) {
      writeJson(path.join(outDir, lang, `${source}.json`), entriesOut);
    }
  }

  return { langs, sources: groups.length, entries: entriesCount };
}
