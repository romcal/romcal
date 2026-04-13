import type { LocalizedText, PropersBlock } from '../types/liturgical-day-1962';

const DEFAULT_LOCALES = ['la'];

/**
 * Concatenate a PropersBlock's text items into a single string per
 * requested locale. Non-text items (scriptureRef, directive, rubric,
 * separator, unresolved ref) are dropped at the locale boundary —
 * the richer structured block stays on `extraSections` for consumers
 * that need them.
 */
export function blockToLocalized(block: PropersBlock, locales?: string[]): LocalizedText {
  const targets = locales && locales.length > 0 ? locales : DEFAULT_LOCALES;
  const buckets: Record<string, string[]> = {};
  for (const locale of targets) buckets[locale] = [];

  for (const item of block) {
    if (item.type !== 'text') continue;
    if (!(item.lang in buckets)) continue;
    buckets[item.lang].push(item.value);
  }

  const out: LocalizedText = {};
  for (const locale of targets) {
    out[locale] = buckets[locale].join('\n').trim();
  }
  return out;
}
