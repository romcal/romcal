/**
 * Rekey imported mass entries from Divinum-Officium file keys to readable
 * slugs via the `./key-mapping` tables. Also rewrites inline ref-token
 * targets (`Sancti/07-22`, `Tempora/Quad1-6:Graduale`, `Commune/C4`) so the
 * downstream data files reference the new slug taxonomy consistently.
 *
 * Applied at the emit boundary — the import/merge/override pipeline keeps
 * original DO keys so the name-override dictionaries and color lookups
 * continue to work.
 */
import { remapKey, type KeySource } from './key-mapping';
import type { Calendar1960, MassEntry } from './types';

const REF_RE = /^(Sancti|Tempora|Commune)\/([^:\s]+)(:.+)?$/;
const PREFIX_TO_SOURCE: Record<string, KeySource> = {
  Sancti: 'sancti',
  Tempora: 'tempora',
  Commune: 'commune',
};

function rewriteRef(target: string): string {
  const match = REF_RE.exec(target);
  if (!match) return target;
  const [, prefix, doKey, suffix = ''] = match;
  const source = PREFIX_TO_SOURCE[prefix];
  try {
    return `${prefix}/${remapKey(source, doKey)}${suffix}`;
  } catch {
    // Leave unknown targets alone — some DO files cross-reference keys that
    // no longer exist in the 1962 rubrics; the runtime will log misses.
    return target;
  }
}

function rewriteOfficium(officium: string | undefined): string | undefined {
  // Some DO files store `[Officium]` as a bare `@Ref` pointing into another
  // file (e.g. `@Commune/C3a`). Rewrite the target so locale files don't
  // ship stale DO-shaped keys.
  if (!officium) return officium;
  const leading = /^@(\S+)/.exec(officium);
  if (!leading) return officium;
  return officium.replace(leading[0], `@${rewriteRef(leading[1])}`);
}

function rewriteEntry(entry: MassEntry, source: KeySource, slug: string): MassEntry {
  const references: Record<string, string> = {};
  for (const [name, ref] of Object.entries(entry.references)) {
    references[name] = rewriteRef(ref);
  }
  const sections: MassEntry['sections'] = {};
  for (const [name, block] of Object.entries(entry.sections)) {
    sections[name] = block.map((item) => (item.type === 'ref' ? { ...item, target: rewriteRef(item.target) } : item));
  }
  const next: MassEntry = {
    ...entry,
    id: `${source}/${slug}`,
    sections,
    references,
  };
  if (entry.officium) next.officium = rewriteOfficium(entry.officium);
  if (entry.names) {
    next.names = Object.fromEntries(
      Object.entries(entry.names).map(([lang, name]) => [lang, rewriteOfficium(name) ?? name])
    );
  }
  if (entry.commune) {
    try {
      next.commune = remapKey('commune', entry.commune);
    } catch {
      next.commune = entry.commune;
    }
  }
  return next;
}

/**
 * Return a new record keyed by slug, with ids, refs, and inline ref tokens
 * rewritten. Throws on slug collisions — every DO key in the mapping tables
 * is verified to produce a unique slug, so a collision here means a drift
 * between the live importer output and the mapping snapshot.
 */
export function remapEntries(entries: Record<string, MassEntry>, source: KeySource): Record<string, MassEntry> {
  const out: Record<string, MassEntry> = {};
  for (const [doKey, entry] of Object.entries(entries)) {
    const slug = remapKey(source, doKey);
    if (out[slug]) {
      throw new Error(
        `remapEntries: collision — ${source}/${doKey} and ${source}/${out[slug].file} both map to ${slug}`
      );
    }
    out[slug] = rewriteEntry(entry, source, slug);
  }
  return out;
}

/**
 * Rekey FeastEntry.fileKey values (sancti DO keys) inside the calendar.
 * Date keys (MM-DD) are dates, not file keys — they stay.
 */
export function remapCalendar(calendar: Calendar1960): Calendar1960 {
  const out: Calendar1960 = {};
  for (const [date, feasts] of Object.entries(calendar)) {
    out[date] = feasts.map((f) => {
      const next = { ...f, fileKey: remapKey('sancti', f.fileKey) };
      if (f.commemorations) {
        next.commemorations = f.commemorations.map((c) =>
          c.fileKey ? { ...c, fileKey: remapKey('sancti', c.fileKey) } : c
        );
      }
      return next;
    });
  }
  return out;
}
