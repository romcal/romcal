import { ImportError } from './errors';
import { normalizePreface } from './prefaces';
import type { RawBlock, RubricInfo } from './types';

function pickRuleBlock(blocks: RawBlock[]): RawBlock | undefined {
  const rules = blocks.filter((b) => b.name === 'Rule');
  if (rules.length === 0) return undefined;
  return (
    rules.find((b) => b.rubricTag === '1960') ??
    rules.find((b) => b.rubricTag === 'innovata') ??
    rules.find((b) => b.rubricTag === 'unmarked') ??
    rules[0]
  );
}

export function parseRules(blocks: RawBlock[], file: string): RubricInfo {
  const block = pickRuleBlock(blocks);
  if (!block) {
    return { raw: [] };
  }

  const info: RubricInfo = { raw: [...block.lines] };

  for (const rawLine of block.lines) {
    const line = rawLine.trim();
    if (!line) continue;
    if (line.startsWith('#')) continue;

    if (/^no\s+Gloria\b/i.test(line)) info.gloria = false;
    else if (/^Gloria\b/i.test(line)) info.gloria = true;

    if (/^no\s+Credo\b/i.test(line)) info.credo = false;
    else if (/^Credo\b/i.test(line)) info.credo = true;

    const prefMatch = /^Prefatio\s*=\s*(.+?)\s*$/i.exec(line);
    if (prefMatch) {
      // divinum-officium format is `Prefatio=Pref[;condition[;Pref2;condition2]]`.
      // We keep only the primary preface for now; conditional variants land when
      // the rubrics engine lands (M5).
      // Strip any `=InsertKey` suffix (divinum-officium marks proper
      // Communicantes inserts like `Spiritu=hodierna die`) — those are
      // typographic inserts, not separate prefaces.
      const primary = prefMatch[1]
        .replace(/\s*\([^)]*\)\s*$/, '')
        .split(';')[0]
        .split('=')[0]
        .trim();
      if (primary) {
        const normalized = normalizePreface(primary);
        if (!normalized) {
          throw new ImportError(`unknown preface "${primary}"`, file);
        }
        info.preface = normalized;
      }
    }

    if (/no\s+Ultima\s+Evangelium/i.test(line)) info.lastGospel = 'none';
    else if (/Ultima\s+Evangelium/i.test(line)) info.lastGospel = 'ultimum';

    if (/Benedicamus\s+Domino/i.test(line)) info.ite = 'benedicamus';
    else if (/Requiescant/i.test(line)) info.ite = 'requiescant';
  }

  return info;
}
