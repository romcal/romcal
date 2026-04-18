import fs from 'node:fs';
import path from 'node:path';

import { ImportError } from './errors';
import { mapNumericToClass1962, mapNumericToRank1962 } from './rank-map';
import type { Calendar1960, FeastEntry } from './types';

const TARGET_VERSION = 'Rubrics 1960 - 1960';

interface VersionRow {
  version: string;
  kalendar: string;
  base?: string;
}

function readDataFile(root: string): VersionRow[] {
  const file = path.join(root, 'web/www/Tabulae/data.txt');
  const text = fs.readFileSync(file, 'utf8');
  const rows: VersionRow[] = [];
  let headerSeen = false;
  for (const rawLine of text.split('\n')) {
    const line = rawLine.trim();
    if (!line) continue;
    if (line.startsWith('#')) continue;
    if (!headerSeen) {
      headerSeen = true;
      continue;
    }
    const parts = line.split(',');
    if (parts.length < 2) continue;
    const [version, kalendar, , , base] = parts;
    rows.push({ version: version.trim(), kalendar: kalendar.trim(), base: base?.trim() || undefined });
  }
  return rows;
}

function resolveChain(rows: VersionRow[]): string[] {
  const byVersion = new Map<string, VersionRow>();
  for (const r of rows) byVersion.set(r.version, r);
  const target = byVersion.get(TARGET_VERSION);
  if (!target) {
    throw new ImportError(`version "${TARGET_VERSION}" not found in Tabulae/data.txt`);
  }
  const chain: VersionRow[] = [];
  let cur: VersionRow | undefined = target;
  const seen = new Set<string>();
  while (cur) {
    if (seen.has(cur.version)) {
      throw new ImportError(`circular base in Tabulae/data.txt at ${cur.version}`);
    }
    seen.add(cur.version);
    chain.unshift(cur);
    cur = cur.base ? byVersion.get(cur.base) : undefined;
  }
  return chain.map((r) => r.kalendar);
}

/**
 * Parse one calendar-delta file. Lines look like:
 *   MM-DD=newSlug[~newSlug2…]=Name=Rank=[CommemName=CommemRank=…]
 *   MM-DD=XXXXX                  (remove the date)
 *   *January*                    (month section header — ignored)
 *   #comment
 */
function parseKalendarFile(file: string): Map<string, FeastEntry[] | null> {
  const text = fs.readFileSync(file, 'utf8');
  const out = new Map<string, FeastEntry[] | null>();

  for (const rawLine of text.split('\n')) {
    const line = rawLine.trim();
    if (!line) continue;
    if (line.startsWith('#')) continue;
    if (line.startsWith('*') && line.endsWith('*')) continue;

    const parts = line.split('=');
    if (parts.length < 2) continue;
    const dateKey = parts[0].trim();
    if (!/^\d{2}-\d{2}$/.test(dateKey)) continue;

    if (parts[1].trim() === 'XXXXX') {
      out.set(dateKey, null);
      continue;
    }

    const slugs = parts[1]
      .split('~')
      .map((s) => s.trim())
      .filter((s) => s && s !== 'XXXXX');
    const entries: FeastEntry[] = [];

    // Each slug consumes a (name, rank) pair from parts[2..].
    let cursor = 2;
    for (const slug of slugs) {
      const name = (parts[cursor] ?? '').trim();
      const rankText = (parts[cursor + 1] ?? '').trim();
      const numericRank = Number(rankText);
      if (!name || !Number.isFinite(numericRank)) {
        break;
      }
      entries.push({
        fileKey: slug,
        name,
        numericRank,
        class1962: mapNumericToClass1962(numericRank),
        rank1962: mapNumericToRank1962(numericRank),
      });
      cursor += 2;
    }

    if (entries.length === 0) continue;

    // Any trailing (name,rank) pairs are commemorations on the primary entry.
    const commemorations: NonNullable<FeastEntry['commemorations']> = [];
    while (cursor + 1 < parts.length) {
      const name = parts[cursor].trim();
      const rankText = parts[cursor + 1].trim();
      if (!name || name === 'XXXXX') {
        cursor += 2;
        continue;
      }
      const numericRank = Number(rankText);
      if (!Number.isFinite(numericRank)) break;
      commemorations.push({ name, numericRank });
      cursor += 2;
    }
    if (commemorations.length > 0) {
      entries[0].commemorations = commemorations;
    }

    out.set(dateKey, entries);
  }

  return out;
}

export function buildCalendar1960(root: string): Calendar1960 {
  const rows = readDataFile(root);
  const chain = resolveChain(rows);
  const merged = new Map<string, FeastEntry[]>();

  for (const name of chain) {
    const file = path.join(root, 'web/www/Tabulae/Kalendaria', `${name}.txt`);
    if (!fs.existsSync(file)) {
      throw new ImportError(`Kalendaria file not found: ${file}`);
    }
    const delta = parseKalendarFile(file);
    for (const [key, value] of delta) {
      if (value === null) merged.delete(key);
      else merged.set(key, value);
    }
  }

  const sorted: Calendar1960 = {};
  for (const [key, value] of [...merged.entries()].sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))) {
    sorted[key] = value;
  }
  return sorted;
}
