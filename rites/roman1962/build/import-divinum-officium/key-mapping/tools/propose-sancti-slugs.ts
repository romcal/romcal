/**
 * One-shot generator for the sancti DO-key → slug mapping.
 *
 * Reads the post-import (pre-rename) data and emits two artifacts:
 *   - `../sancti.generated.ts`  full mapping table (commit after review)
 *   - `../sancti.audit.md`      collisions, 1969-reuses, weak-name flags
 *
 * The generator is deterministic given the same input; re-run after any
 * upstream name edits and regenerate.
 */
import fs from 'node:fs';
import path from 'node:path';

import { locale as EN } from '../../../../src/locales/en';
import { locale as LA } from '../../../../src/locales/la';

const ROOT = path.resolve(__dirname, '../../../..');
const SANCTI_JSON = path.join(ROOT, 'data/sancti.json');
const OUT_TS = path.resolve(__dirname, '../sancti.generated.ts');
const OUT_MD = path.resolve(__dirname, '../sancti.audit.md');
const RITE_1969 = path.resolve(__dirname, '../../../../../roman1969/src');

/** DO suffix → English token appended to the base slug. */
const SUFFIX_LEGEND: Record<string, string> = {
  cc: '_commemoration',
  n: '_new',
  o: '_optional',
  pl: '_poland',
  g: '_germany',
  cist: '_cistercian',
  t: '_tridentine',
  r: '_rubrica1960',
  oct: '_octave_day',
  octt: '_octave_day_tridentine',
  bmv: '_bmv_variant',
  a: '_variant_2',
  c: '_variant_3',
  AV: '_alternate_vigil',
  s: '_secondary',
  so: '_secondary_optional',
  '-quadp': '_lent',
  '-DP': '_variant_dp',
  '-DT': '_variant_dt',
  '-DU': '_variant_du',
  '-DUr': '_variant_du_rubrica1960',
  '-dom-oct': '_sunday_within_octave',
  '-sab-oct': '_saturday_within_octave',
};

/** Multi-mass keys with semantic names preferred over `_mass_N`. */
const EXPLICIT: Record<string, string> = {
  '12-25m1': 'nativity_of_the_lord_at_midnight',
  '12-25m2': 'nativity_of_the_lord_at_dawn',
  '12-25m3': 'nativity_of_the_lord_during_the_day',
  '11-02m1': 'all_souls_first_mass',
  '11-02m2': 'all_souls_second_mass',
  '11-02m3': 'all_souls_third_mass',
  '11-02sec': 'all_souls_second_mass_set',
  '11-02secm1': 'all_souls_second_set_first_mass',
  '11-02secm2': 'all_souls_second_set_second_mass',
  '11-02secm3': 'all_souls_second_set_third_mass',
};

const KNOWN_DATED_SUFFIXES = [
  'octt',
  'oct',
  'cist',
  'bmv',
  'cc',
  'pl',
  'AV',
  'so',
  // ordered: longest first so stripping is greedy
  'm1',
  'm2',
  'm3',
  'n',
  'o',
  't',
  'r',
  'g',
  'c',
  's',
  'a',
];

function slugify(input: string): string {
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/æ/gi, 'ae')
    .replace(/œ/gi, 'oe')
    .toLowerCase()
    .replace(/\bst\.?\b/g, 'saint')
    .replace(/\bsts\.?\b/g, 'saints')
    .replace(/\bbl\.?\b/g, 'blessed')
    .replace(/\bbvm\b/g, 'blessed_virgin_mary')
    .replace(/\bb\.\s*v\.\s*m\.?\b/g, 'blessed_virgin_mary')
    .replace(/[()]/g, ' ')
    .replace(/[&,;:.'’"]/g, ' ')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .replace(/__+/g, '_');
}

function splitDatedKey(key: string): { base: string; suffix: string } {
  const m = /^(\d{2}-\d{2})(.*)$/.exec(key);
  if (!m) return { base: '', suffix: '' };
  return { base: m[1], suffix: m[2] };
}

function splitNonDatedKey(key: string): { base: string; suffix: string } {
  // `07-DP`, `08-dom-oct`, `09-sab-oct`, `10-DU`, `10-DUr`
  for (const suf of ['-DUr', '-DU', '-DT', '-DP', '-dom-oct', '-sab-oct']) {
    if (key.endsWith(suf)) return { base: key.slice(0, -suf.length), suffix: suf };
  }
  return { base: key, suffix: '' };
}

function pickEnglishName(doKey: string): string {
  const en = EN.names[`sancti/${doKey}`];
  if (en?.trim()) return en;
  // Fall back to base-key English if only the suffix variant lacks a name
  const { base, suffix } = splitDatedKey(doKey);
  if (base && suffix) {
    const baseEn = EN.names[`sancti/${base}`];
    if (baseEn?.trim()) return baseEn;
  }
  // Fall back to Latin officium
  const raw = JSON.parse(fs.readFileSync(SANCTI_JSON, 'utf8')) as Record<string, { officium?: string }>;
  const la = LA.names[`sancti/${doKey}`] || raw[doKey]?.officium || '';
  return la;
}

function sanitizeSuffix(raw: string): string {
  return `_${raw
    .replace(/[^a-z0-9]+/gi, '_')
    .replace(/^_+|_+$/g, '')
    .toLowerCase()}`;
}

function deriveSuffixToken(doKey: string): string {
  if (EXPLICIT[doKey]) return '';
  const { suffix: dated } = splitDatedKey(doKey);
  if (dated) {
    for (const known of KNOWN_DATED_SUFFIXES) {
      if (dated === known) return SUFFIX_LEGEND[known] ?? sanitizeSuffix(known);
    }
    if (SUFFIX_LEGEND[dated]) return SUFFIX_LEGEND[dated];
    // `09-09dom-oct` etc. — strip hyphens and unknown suffixes still get an English-ish tail
    return sanitizeSuffix(dated);
  }
  const { suffix: nd } = splitNonDatedKey(doKey);
  return SUFFIX_LEGEND[nd] ?? (nd ? sanitizeSuffix(nd) : '');
}

function load1969Keys(): Set<string> {
  const keys = new Set<string>();
  const enLocale = path.join(RITE_1969, 'locales/en.ts');
  if (fs.existsSync(enLocale)) {
    const text = fs.readFileSync(enLocale, 'utf8');
    // Lines under the `names:` block look like `    agnes_of_rome_virgin: '…'`
    // or `    '205_blessed_martyrs_of_japan': '…'`
    for (const m of text.matchAll(/^    '?([a-z][a-z0-9_]*)'?:\s*['"]/gm)) keys.add(m[1]);
  }
  const pot = path.join(RITE_1969, 'proper-of-time/proper-of-time.ts');
  if (fs.existsSync(pot)) {
    const text = fs.readFileSync(pot, 'utf8');
    for (const m of text.matchAll(/newLiturgicalDayDef\(\s*'([a-z0-9_]+)'/g)) keys.add(m[1]);
    for (const m of text.matchAll(/newLiturgicalDayDef\(`([a-z0-9_${}\\]+)`/g)) {
      // template-literal day defs — emit the literal skeleton as-is (best-effort)
      keys.add(m[1]);
    }
  }
  const gr = path.join(RITE_1969, 'calendars/general-roman/index.ts');
  if (fs.existsSync(gr)) {
    const text = fs.readFileSync(gr, 'utf8');
    for (const m of text.matchAll(/^\s{4}([a-z][a-z0-9_]*):\s*\{/gm)) keys.add(m[1]);
  }
  return keys;
}

function main(): void {
  const raw = JSON.parse(fs.readFileSync(SANCTI_JSON, 'utf8')) as Record<string, { officium?: string }>;
  const keys1969 = load1969Keys();
  const proposals: { doKey: string; baseSlug: string; token: string; slug: string; source: string }[] = [];
  const audit: string[] = ['# Sancti slug audit', ''];

  for (const doKey of Object.keys(raw).sort()) {
    if (EXPLICIT[doKey]) {
      proposals.push({ doKey, baseSlug: EXPLICIT[doKey], token: '', slug: EXPLICIT[doKey], source: 'explicit' });
      continue;
    }
    const english = pickEnglishName(doKey);
    if (!english.trim()) {
      const placeholder = `placeholder_${doKey.replace(/[^a-z0-9]/gi, '_').toLowerCase()}`;
      proposals.push({ doKey, baseSlug: placeholder, token: '', slug: placeholder, source: 'placeholder' });
      continue;
    }
    const baseSlug = slugify(english);
    const token = deriveSuffixToken(doKey);
    const slug = baseSlug + token;
    const source = keys1969.has(slug) ? '1969-parity' : english === EN.names[`sancti/${doKey}`] ? 'en' : 'la';
    proposals.push({ doKey, baseSlug, token, slug, source });
  }

  // Resolve collisions by numeric disambiguation
  const bucket = new Map<string, number>();
  const slugToDo = new Map<string, string>();
  const final: { doKey: string; slug: string; source: string; originalSlug: string }[] = [];
  for (const p of proposals) {
    let s = p.slug;
    if (slugToDo.has(s)) {
      const n = (bucket.get(p.slug) ?? 1) + 1;
      bucket.set(p.slug, n);
      s = `${p.slug}_${n}`;
    } else {
      bucket.set(p.slug, 1);
    }
    slugToDo.set(s, p.doKey);
    final.push({ doKey: p.doKey, slug: s, source: p.source, originalSlug: p.slug });
  }

  // Audit
  const byKind = {
    parity: final.filter((f) => f.source === '1969-parity'),
    explicit: final.filter((f) => f.source === 'explicit'),
    en: final.filter((f) => f.source === 'en'),
    la: final.filter((f) => f.source === 'la'),
    placeholder: final.filter((f) => f.source === 'placeholder'),
  };
  audit.push(
    `Counts: **total ${final.length}** — 1969-parity ${byKind.parity.length}, explicit ${byKind.explicit.length}, en ${byKind.en.length}, la ${byKind.la.length}, placeholder ${byKind.placeholder.length}.`,
    ''
  );
  const collisions = final.filter((f) => f.slug !== f.originalSlug);
  audit.push(`## ${collisions.length} collisions (disambiguated with _N)`, '');
  for (const c of collisions) audit.push(`- \`${c.doKey}\` → \`${c.slug}\` (base \`${c.originalSlug}\`)`);
  audit.push('', `## ${byKind.parity.length} 1969 parity reuses`, '');
  for (const p of byKind.parity.sort((a, b) => a.slug.localeCompare(b.slug)))
    audit.push(`- \`${p.doKey}\` → \`${p.slug}\``);
  audit.push('', `## ${byKind.placeholder.length} entries needing manual slugs (no Latin/English name available)`, '');
  for (const p of byKind.placeholder) audit.push(`- \`${p.doKey}\` → \`${p.slug}\``);
  audit.push('', `## ${byKind.la.length} entries slugged from Latin officium (no English name shipped)`, '');
  for (const p of byKind.la) audit.push(`- \`${p.doKey}\` → \`${p.slug}\``);

  // Emit mapping
  const lines = [
    '/**',
    ' * AUTO-GENERATED by build/import-divinum-officium/key-mapping/tools/propose-sancti-slugs.ts.',
    ' * After review, rename this file to sancti.ts and commit.',
    ' */',
    'export const SANCTI_KEY_MAP: Record<string, string> = {',
  ];
  for (const f of final) lines.push(`  ${JSON.stringify(f.doKey)}: ${JSON.stringify(f.slug)},`);
  lines.push('};', '');
  lines.push('export function sanctiKeyToSlug(doKey: string): string {');
  lines.push('  const slug = SANCTI_KEY_MAP[doKey];');
  lines.push('  if (!slug) throw new Error(`sanctiKeyToSlug: no rule for DO key "${doKey}"`);');
  lines.push('  return slug;');
  lines.push('}', '');

  fs.writeFileSync(OUT_TS, lines.join('\n'), 'utf8');
  fs.writeFileSync(OUT_MD, audit.join('\n'), 'utf8');
  console.log(`wrote ${OUT_TS}`);
  console.log(`wrote ${OUT_MD}`);
  console.log(`total=${final.length} collisions=${collisions.length} placeholders=${byKind.placeholder.length}`);
}

main();
