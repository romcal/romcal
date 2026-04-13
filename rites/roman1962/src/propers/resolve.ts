import type { Celebration1962 } from '../rubrics/types';
import type { LocalizedText, PropersBlock } from '../types/liturgical-day-1962';

import { blockToLocalized } from './locale';
import { getEntry, parseRef, parseSource, type ResolvedRef as RefLike } from './lookup';
import type { ResolvedPropers, ResolvePropersOptions } from './types';

type MassSectionField =
  | 'introit'
  | 'collect'
  | 'epistle'
  | 'gradual'
  | 'alleluia'
  | 'tract'
  | 'sequence'
  | 'gospel'
  | 'offertory'
  | 'secret'
  | 'communion'
  | 'postcommunion';

const SECTION_TO_FIELD: Record<string, MassSectionField> = {
  Introitus: 'introit',
  Oratio: 'collect',
  Lectio: 'epistle',
  Graduale: 'gradual',
  Alleluia: 'alleluia',
  Tractus: 'tract',
  Sequentia: 'sequence',
  Evangelium: 'gospel',
  Offertorium: 'offertory',
  Secreta: 'secret',
  Communio: 'communion',
  Postcommunio: 'postcommunion',
};

const ALL_DO_SECTIONS = Object.keys(SECTION_TO_FIELD);

interface ResolveCtx {
  visited: Set<string>;
  communeSlug: string | undefined;
}

function visitedKey(ref: RefLike, sectionName: string): string {
  return `${ref.bundle}/${ref.key}::${sectionName}`;
}

function isJustRef(block: PropersBlock): boolean {
  return block.length === 1 && block[0].type === 'ref';
}

/**
 * Expand any nested `{ type: 'ref' }` items inside a block. Non-ref
 * items pass through verbatim.
 */
function expandRefsInside(block: PropersBlock, ctx: ResolveCtx): PropersBlock {
  const out: PropersBlock = [];
  for (const item of block) {
    if (item.type !== 'ref') {
      out.push(item);
      continue;
    }
    const sub = parseRef(item.target);
    if (!sub) continue;
    // eslint-disable-next-line @typescript-eslint/no-use-before-define -- mutual recursion with resolveSection
    const resolved = resolveSection(sub, sub.section ?? 'Introitus', ctx);
    if (resolved) out.push(...resolved);
  }
  return out;
}

/**
 * Resolve section `sectionName` starting from the entry identified
 * by `ref`. Walks `{ type: 'ref' }` pointers inside the section and
 * the entry-level `references` fallback. Returns the block (with
 * all nested refs resolved) or undefined when the section cannot
 * be materialised.
 */
function resolveSection(ref: RefLike, sectionName: string, ctx: ResolveCtx): PropersBlock | undefined {
  const visitKey = visitedKey(ref, sectionName);
  if (ctx.visited.has(visitKey)) return undefined;
  ctx.visited.add(visitKey);

  const entry = getEntry(ref);
  if (!entry) return undefined;

  const inline = entry.sections?.[sectionName] as PropersBlock | undefined;
  if (inline && inline.length > 0 && !isJustRef(inline)) {
    return expandRefsInside(inline, ctx);
  }

  // Lone ref inside the section itself.
  if (inline && isJustRef(inline)) {
    const sub = parseRef((inline[0] as { target: string }).target);
    if (sub) {
      return resolveSection(sub, sub.section ?? sectionName, ctx);
    }
  }

  // Entry-level fallback pointer.
  const fallback = entry.references?.[sectionName];
  if (fallback) {
    const sub = parseRef(fallback);
    if (sub) return resolveSection(sub, sub.section ?? sectionName, ctx);
  }

  return undefined;
}

function collectSections(
  ref: RefLike,
  communeSlug: string | undefined,
  locales: string[] | undefined
): ResolvedPropers {
  const propers: Partial<Record<MassSectionField, LocalizedText>> = {};
  const extraSections: Record<string, PropersBlock> = {};
  const entry = getEntry(ref);
  if (!entry) return { propers, extraSections };

  const sectionNames = new Set<string>([
    ...Object.keys(entry.sections ?? {}),
    ...Object.keys(entry.references ?? {}),
    ...ALL_DO_SECTIONS,
  ]);
  sectionNames.delete('Name');

  for (const sectionName of sectionNames) {
    const ctx: ResolveCtx = { visited: new Set(), communeSlug };
    const block = resolveSection(ref, sectionName, ctx);
    if (!block || block.length === 0) continue;

    const field = SECTION_TO_FIELD[sectionName];
    if (field) {
      propers[field] = blockToLocalized(block, locales);
    } else {
      extraSections[sectionName] = block;
    }
  }

  // For a feast whose only inline content is `references` pointing
  // to a Commune, the above loop already handles it via
  // resolveSection's fallback logic. The explicit communeSlug path
  // covers the (rarer) case where the feast has zero inline
  // sections and zero references but M4 still classified it as
  // "inherited from Commune Cxx" via its rubric row.
  if (communeSlug && Object.keys(propers).length === 0) {
    const communeRef: RefLike = { bundle: 'commune', key: communeSlug };
    for (const sectionName of ALL_DO_SECTIONS) {
      const ctx: ResolveCtx = { visited: new Set(), communeSlug: undefined };
      const block = resolveSection(communeRef, sectionName, ctx);
      if (!block || block.length === 0) continue;
      const field = SECTION_TO_FIELD[sectionName];
      if (field) propers[field] = blockToLocalized(block, locales);
    }
  }

  return { propers, extraSections };
}

/**
 * In 1962 rubrics, a weekday tempora entry with no inline Mass
 * falls back to its Sunday Mass (`Epi<w>-<d>` → `Epi<w>-0`,
 * `Pent<NN>-<d>` → `Pent<NN>-0`, etc.). Holy days within the
 * Christmas octave tail (`Nat02..Nat05`) fall back to `Nat1-0`
 * (Sunday within the Octave). This is not a rubrical "commemoration"
 * — it's the Missal's own construction (per rubrics 1960 §23c).
 */
function sundayFallback(temporaKey: string): string | undefined {
  const m = /^(Adv\d|Epi\d|Pasc\d|Pent\d{2}|PentEpi\d|Quadp\d|Quad\d)-[1-6]$/.exec(temporaKey);
  if (m) return `${m[1]}-0`;
  if (/^Nat0[2-5]$/.test(temporaKey)) return 'Nat1-0';
  return undefined;
}

function isEmpty(resolved: ResolvedPropers): boolean {
  if (Object.keys(resolved.extraSections).length > 0) return false;
  return Object.values(resolved.propers).every((v) => !v || !Object.values(v).some((s) => s));
}

/**
 * Resolve all Mass proper sections for a celebration. Returns
 * `{ propers, extraSections }`. Never throws; broken references
 * yield an omitted section. Tempora ferial weekdays with no inline
 * Mass fall back to the week's Sunday Mass (see `sundayFallback`).
 */
export function resolvePropers(celebration: Celebration1962, options: ResolvePropersOptions = {}): ResolvedPropers {
  const source = parseSource(celebration.properRef.source);
  if (!source) return { propers: {}, extraSections: {} };

  const first = collectSections(source, celebration.properRef.communeSlug, options.locales);
  if (!isEmpty(first) || source.bundle !== 'tempora') return first;

  const fallbackKey = sundayFallback(source.key);
  if (!fallbackKey) return first;
  return collectSections({ bundle: 'tempora', key: fallbackKey }, celebration.properRef.communeSlug, options.locales);
}

export function _forTest_expandRefsInside(block: PropersBlock, visited = new Set<string>()): PropersBlock {
  return expandRefsInside(block, { visited, communeSlug: undefined });
}
