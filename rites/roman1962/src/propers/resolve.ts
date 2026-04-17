import type { LiturgicalDay1962 } from '../models/liturgical-day';
import type { MassPropersBlocks, MassSectionField, PropersBlock } from '../types/liturgical-day-1962';

import { blockToLocalized } from './locale';
import { getEntry, parseRef, parseSource, type ResolvedRef as RefLike } from './lookup';
import type { ResolvedPropers, ResolvedPropersBlocks, ResolvePropersOptions } from './types';

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

  if (inline && isJustRef(inline)) {
    const sub = parseRef((inline[0] as { target: string }).target);
    if (sub) {
      return resolveSection(sub, sub.section ?? sectionName, ctx);
    }
  }

  const fallback = entry.references?.[sectionName];
  if (fallback) {
    const sub = parseRef(fallback);
    if (sub) return resolveSection(sub, sub.section ?? sectionName, ctx);
  }

  return undefined;
}

interface RawCollected {
  sections: MassPropersBlocks;
  extraSections: Record<string, PropersBlock>;
}

function collectRawBlocks(ref: RefLike, communeSlug: string | undefined): RawCollected {
  const sections: MassPropersBlocks = {};
  const extraSections: Record<string, PropersBlock> = {};
  const entry = getEntry(ref);
  if (!entry) return { sections, extraSections };

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
    if (field) sections[field] = block;
    else extraSections[sectionName] = block;
  }

  // Commune-only fallback: the entry carried no inline content and no
  // references, but M4 classified it as "inherited from Commune Cxx".
  if (communeSlug && Object.keys(sections).length === 0) {
    const communeRef: RefLike = { bundle: 'commune', key: communeSlug };
    for (const sectionName of ALL_DO_SECTIONS) {
      const ctx: ResolveCtx = { visited: new Set(), communeSlug: undefined };
      const block = resolveSection(communeRef, sectionName, ctx);
      if (!block || block.length === 0) continue;
      const field = SECTION_TO_FIELD[sectionName];
      if (field) sections[field] = block;
    }
  }

  return { sections, extraSections };
}

const WEEKDAY_TAIL = /_(monday|tuesday|wednesday|thursday|friday|saturday)$/;
const SEASON_PREFIXES = [
  'advent',
  'lent',
  'easter_time',
  'after_pentecost_\\d+',
  'resumed_epiphany_\\d+',
  'epiphany',
  'septuagesima',
  'sexagesima',
  'quinquagesima',
];
const FALLBACK_PATTERN = new RegExp(
  `^(${SEASON_PREFIXES.map((p) => `(?:${p})(?:_\\d+)?`).join('|')})${WEEKDAY_TAIL.source}`
);

/**
 * In 1962 rubrics, a weekday tempora entry with no inline Mass
 * falls back to its Sunday Mass (`advent_2_friday` → `advent_2_sunday`,
 * `after_pentecost_15_thursday` → `after_pentecost_15_sunday`, etc.).
 * Jan 2-5 ferials fall back to the Sunday within the Christmas Octave.
 * This is not a rubrical "commemoration" — it's the Missal's own
 * construction (per rubrics 1960 §23c).
 */
function sundayFallback(temporaKey: string): string | undefined {
  if (/^christmas_time_january_[2-5]$/.test(temporaKey)) return 'sunday_within_octave_of_christmas';
  if (/^christmas_octave_day_[567]$/.test(temporaKey)) return 'sunday_within_octave_of_christmas';
  const m = FALLBACK_PATTERN.exec(temporaKey);
  if (m) return `${m[1]}_sunday`;
  return undefined;
}

function isEmptyRaw(raw: RawCollected): boolean {
  return Object.keys(raw.sections).length === 0 && Object.keys(raw.extraSections).length === 0;
}

function resolveBlocksForCelebration(celebration: LiturgicalDay1962): RawCollected {
  const source = parseSource(celebration.properRef.source);
  if (!source) return { sections: {}, extraSections: {} };

  const first = collectRawBlocks(source, celebration.properRef.communeSlug);
  if (!isEmptyRaw(first) || source.bundle !== 'tempora') return first;

  const fallbackKey = sundayFallback(source.key);
  if (!fallbackKey) return first;
  return collectRawBlocks({ bundle: 'tempora', key: fallbackKey }, celebration.properRef.communeSlug);
}

/**
 * Resolve all Mass proper sections for a celebration, returning the
 * ref-walked PropersBlock stream for each section (text, scriptureRef,
 * directive, rubric, separator items preserved in order). Callers that
 * need `{ la, en, ... }` concatenated strings should use
 * `resolvePropers` instead; this entry point is for consumers that
 * need per-segment structure (e.g. zipping scriptureRef with the
 * following text for external Bible lookup).
 *
 * Never throws; broken references yield an omitted section. Tempora
 * ferial weekdays with no inline Mass fall back to the week's Sunday
 * Mass (see `sundayFallback`).
 */
export function resolvePropersBlocks(celebration: LiturgicalDay1962): ResolvedPropersBlocks {
  return resolveBlocksForCelebration(celebration);
}

/**
 * Resolve all Mass proper sections for a celebration. Returns
 * `{ propers, extraSections }` with text items concatenated per
 * requested locale. Broken references yield an omitted section.
 */
export function resolvePropers(celebration: LiturgicalDay1962, options: ResolvePropersOptions = {}): ResolvedPropers {
  const raw = resolveBlocksForCelebration(celebration);
  const propers: ResolvedPropers['propers'] = {};
  for (const [field, block] of Object.entries(raw.sections) as [MassSectionField, PropersBlock][]) {
    if (block) propers[field] = blockToLocalized(block, options.locales);
  }
  return { propers, extraSections: raw.extraSections };
}

export function _forTest_expandRefsInside(block: PropersBlock, visited = new Set<string>()): PropersBlock {
  return expandRefsInside(block, { visited, communeSlug: undefined });
}
