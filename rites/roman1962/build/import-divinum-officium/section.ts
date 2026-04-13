import type { PropersBlock, PropersBlockItem } from '../../src/types/liturgical-day-1962';

/**
 * Classify one raw line from a divinum-officium section body into a structured token.
 *
 * Prefixes we recognize (in priority order):
 *   @ref    → { type: 'ref' }          cross-reference to another file or named section
 *   !text   → scripture ref if it looks like scripture notation,
 *             otherwise a directive label (e.g. "!Pro S. Petro")
 *   $text   → { type: 'directive' }     liturgical directive ($Per Dominum, $Oremus, …)
 *   &text   → { type: 'directive' }     inline directive marker (&Gloria)
 *   v. text → { type: 'text', role: 'verse' }
 *   _       → { type: 'separator' }
 *   (text)  → { type: 'rubric' }        parenthetical-only line
 *   plain   → { type: 'text' }
 */
const SCRIPTURE_RE = /^([1-4]?\s?[A-Z][a-zA-Zéëàüöïç.]{1,12})\s+\d+([:.\-–,;\s\d]*)?$/;

function classifyLine(raw: string, lang: string): PropersBlockItem | null {
  const line = raw.trim();
  if (line.length === 0) return null;

  if (line === '_') return { type: 'separator' };

  if (line.startsWith('@')) {
    return { type: 'ref', target: line.slice(1).trim() };
  }

  if (line.startsWith('$')) {
    return { type: 'directive', value: line.slice(1).trim() };
  }

  if (line.startsWith('&')) {
    return { type: 'directive', value: line.slice(1).trim() };
  }

  if (line.startsWith('!')) {
    const payload = line.slice(1).trim();
    if (SCRIPTURE_RE.test(payload)) {
      return { type: 'scriptureRef', ref: payload };
    }
    return { type: 'directive', value: payload };
  }

  if (/^v\.\s*/i.test(line)) {
    return { type: 'text', lang, value: line.replace(/^v\.\s*/i, ''), role: 'verse' };
  }

  if (/^\(.*\)$/.test(line)) {
    return { type: 'rubric', note: line.slice(1, -1).trim() };
  }

  return { type: 'text', lang, value: line };
}

export function linesToBlock(lines: string[], lang = 'la'): PropersBlock {
  const out: PropersBlock = [];
  for (const line of lines) {
    const tok = classifyLine(line, lang);
    if (tok) out.push(tok);
  }
  return out;
}

/**
 * If a section's body is exactly one `@ref` (possibly with parenthetical notes),
 * return that ref target. Used to emit the `references` map.
 */
export function sectionAsRef(block: PropersBlock): string | undefined {
  const refs = block.filter((t) => t.type === 'ref');
  const others = block.filter((t) => t.type !== 'ref' && t.type !== 'rubric');
  if (refs.length === 1 && others.length === 0) {
    return (refs[0] as { target: string }).target;
  }
  return undefined;
}
