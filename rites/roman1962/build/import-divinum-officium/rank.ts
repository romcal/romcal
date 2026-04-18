import { ImportError } from './errors';
import { mapNumericToClass1962, mapNumericToRank1962 } from './rank-map';
import type { RankInfo, RawBlock } from './types';

function pickRankLine(lines: string[]): string | undefined {
  for (const line of lines) {
    if (line.trim().length === 0) continue;
    if (line.trim().startsWith('#')) continue;
    if (line.trim().startsWith(';')) return line.trim();
    if (line.includes(';;')) return line.trim();
  }
  return undefined;
}

function pickRankBlock(blocks: RawBlock[]): RawBlock | undefined {
  const ranks = blocks.filter((b) => b.name === 'Rank');
  if (ranks.length === 0) return undefined;
  return (
    ranks.find((b) => b.rubricTag === '1960') ??
    ranks.find((b) => b.rubricTag === 'innovata') ??
    ranks.find((b) => b.rubricTag === 'unmarked') ??
    ranks[0]
  );
}

export function parseRank(blocks: RawBlock[], file: string): RankInfo | undefined {
  const block = pickRankBlock(blocks);
  if (!block) return undefined;
  const raw = pickRankLine(block.lines);
  // A [Rank] block that is just a prose name (e.g. "Ss. Protomartyrum Poloniae"
  // with no ';;' delimiters) carries no class / numeric rank — treat as
  // unranked and let the calendar numeric supply the 1962 class.
  if (!raw) return undefined;

  // Split on ';;' — format: Name;;Class;;NumericRank;;refs;;refs.
  // Stub-style blocks (`;;vide C7a`) carry no numeric rank — treat as
  // unranked.
  const parts = raw.split(';;').map((p) => p.trim());
  if (parts.length < 3) {
    if (parts.some((p) => /^vide\b/i.test(p))) return undefined;
    throw new ImportError(`malformed [Rank] line: ${raw}`, file);
  }
  const [, classText, numericBlob, ...rest] = parts;
  if (/^vide\b/i.test(classText) && !numericBlob) return undefined;
  // Some entries tuck the first ref onto the rank field with a single ';'
  // instead of '|;;|', e.g. `;;7;ex C11`. Split the blob so the numeric is
  // isolated.
  const [numericText, ...inlineRefs] = numericBlob.split(';').map((s) => s.trim());
  const numericRank = Number(numericText);
  if (!Number.isFinite(numericRank)) {
    throw new ImportError(`non-numeric rank value: ${numericText} in ${raw}`, file);
  }

  const sourceRefs = [...inlineRefs, ...rest].filter((r) => r.length > 0);

  return {
    raw,
    classText,
    numericRank,
    class1962: mapNumericToClass1962(numericRank),
    rank1962: mapNumericToRank1962(numericRank),
    sourceRefs,
  };
}
