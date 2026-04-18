import fs from 'node:fs';
import path from 'node:path';

import type { ParsedFile, RawBlock, RubricTag } from './types';

const HEADER_RE = /^\[([^\]]+)\](?:\s*(\(.+\)))?\s*$/;

function classifyRubric(qualifier: string | undefined): RubricTag {
  if (!qualifier) return 'unmarked';
  const q = qualifier.toLowerCase();
  if (/rubrica\s*196/.test(q) || /\b1960\b/.test(q)) return '1960';
  if (q.includes('tridentin')) return 'tridentina';
  if (/innovat|sed\s+rubrica/.test(q)) return 'innovata';
  if (/divino\s+afflatu|\bda\b/.test(q)) return 'divino-afflatu';
  return 'other';
}

export function parseFile(absPath: string, source: 'tempora' | 'sancti' | 'commune'): ParsedFile {
  const raw = fs.readFileSync(absPath, 'utf8');
  const lines = raw
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((l) => l.replace(/\s+$/, ''));

  const blocks: RawBlock[] = [];
  let current: RawBlock | null = null;

  for (const line of lines) {
    const m = HEADER_RE.exec(line);
    if (m) {
      if (current) blocks.push(current);
      const [, name, qualifierRaw] = m;
      const qualifier = qualifierRaw?.replace(/^\(|\)$/g, '').trim();
      current = {
        name: name.trim(),
        qualifier,
        rubricTag: classifyRubric(qualifier),
        lines: [],
      };
      continue;
    }
    if (current) {
      current.lines.push(line);
    }
    // Leading prologue lines before any [Header] are ignored — divinum-officium
    // files always start with a header, so this only matters for stray comments.
  }
  if (current) blocks.push(current);

  // Trim trailing empty lines on each block for deterministic output.
  for (const b of blocks) {
    while (b.lines.length && b.lines[b.lines.length - 1] === '') b.lines.pop();
  }

  return {
    path: absPath,
    filename: path.basename(absPath),
    source,
    blocks,
  };
}
