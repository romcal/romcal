import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

import chalk from 'chalk';

import { buildCalendar1960 } from './calendar';
import { deriveColor } from './colors';
import { SANCTI_DE, sanctiDeFromKeyOrLatin, temporaDeFromKey } from './de-name-overrides';
import { writeJson } from './emit';
import { emitLocales } from './emit-locales';
import { emitPropers } from './emit-propers';
import { SANCTI_EN, TEMPORA_EN, sanctiEnFromKeyOrLatin, temporaEnFromKey } from './en-name-overrides';
import { ImportError } from './errors';
import { SANCTI_ES, TEMPORA_ES, sanctiEsFromKeyOrLatin, temporaEsFromKey } from './es-name-overrides';
import { SANCTI_FR, TEMPORA_FR, sanctiFrFromKeyOrLatin, temporaFrFromKey } from './fr-name-overrides';
import { SANCTI_IT, TEMPORA_IT, sanctiItFromKeyOrLatin, temporaItFromKey } from './it-name-overrides';
import { SANCTI_NL, TEMPORA_NL, sanctiNlFromKeyOrLatin, temporaNlFromKey } from './nl-name-overrides';
import { parseFile } from './parser';
import { SANCTI_PT, TEMPORA_PT, sanctiPtFromKeyOrLatin, temporaPtFromKey } from './pt-name-overrides';
import { parseRank } from './rank';
import { remapCalendar, remapEntries } from './remap-entries';
import { parseRules } from './rules';
import { linesToBlock, sectionAsRef } from './section';
import type { MassEntry, ParsedFile, SourceMeta } from './types';

const IMPORTER_VERSION = '0.5.0';

type NameOverride = {
  temporaFn: (key: string) => string | undefined;
  sanctiFn: (key: string, latin: string | undefined) => string | undefined;
  // Explicit per-key maps applied *unconditionally* — even when horas already
  // filled a Latin-literal name. Without this, entries like 01-01 (where
  // officium is undefined but horas set names.fr = "In Circumcisione Domini")
  // would bypass the override layer because isNameMissing() returns false.
  temporaExplicit?: Record<string, string>;
  sanctiExplicit?: Record<string, string>;
};

// Name override layers: which locales have a synthesizer that fills gaps
// left by divinum-officium's horas. Locales absent here fall back to Latin
// for ferias and long-tail sancti.
const NAME_OVERRIDES: Record<string, NameOverride> = {
  en: {
    temporaFn: temporaEnFromKey,
    sanctiFn: sanctiEnFromKeyOrLatin,
    temporaExplicit: TEMPORA_EN,
    sanctiExplicit: SANCTI_EN,
  },
  de: { temporaFn: temporaDeFromKey, sanctiFn: sanctiDeFromKeyOrLatin, sanctiExplicit: SANCTI_DE },
  fr: {
    temporaFn: temporaFrFromKey,
    sanctiFn: sanctiFrFromKeyOrLatin,
    temporaExplicit: TEMPORA_FR,
    sanctiExplicit: SANCTI_FR,
  },
  it: {
    temporaFn: temporaItFromKey,
    sanctiFn: sanctiItFromKeyOrLatin,
    temporaExplicit: TEMPORA_IT,
    sanctiExplicit: SANCTI_IT,
  },
  es: {
    temporaFn: temporaEsFromKey,
    sanctiFn: sanctiEsFromKeyOrLatin,
    temporaExplicit: TEMPORA_ES,
    sanctiExplicit: SANCTI_ES,
  },
  pt: {
    temporaFn: temporaPtFromKey,
    sanctiFn: sanctiPtFromKeyOrLatin,
    temporaExplicit: TEMPORA_PT,
    sanctiExplicit: SANCTI_PT,
  },
  nl: {
    temporaFn: temporaNlFromKey,
    sanctiFn: sanctiNlFromKeyOrLatin,
    temporaExplicit: TEMPORA_NL,
    sanctiExplicit: SANCTI_NL,
  },
};

// Vernacular locales to merge on top of Latin. Keep keys short (match
// BCP-47 prefixes); values are DO's folder names under web/www/missa/
// and web/www/horas/.
//
// Coverage per locale varies wildly — Romance langs ship Latin titles in
// their horas [Officium]/[Rank] fields, Slavic/Uralic/Czech ship native
// vernacular titles, and Danish/Ukrainian/Cesky-Schaller ship nearly
// nothing. `cs-schaller` is a variant Czech translation (no horas/Tempora
// or Sancti); its text still merges from missa/.
const VERNACULARS: Record<string, string> = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Francais',
  it: 'Italiano',
  es: 'Espanol',
  pt: 'Portugues',
  nl: 'Nederlands',
  pl: 'Polski',
  hu: 'Magyar',
  cs: 'Bohemice',
  'cs-schaller': 'Cesky-Schaller',
  uk: 'Ukrainian',
  da: 'Dansk',
};

const REPO_ROOT = path.resolve(__dirname, '../../../..');
const DO_ROOT = path.join(REPO_ROOT, 'divinum-officium');
const OUT_DIR = path.join(REPO_ROOT, 'rites/roman1962/data');

const { log } = console;

function listTxt(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.txt'))
    .sort()
    .map((f) => path.join(dir, f));
}

function fileKeyFromPath(file: string): string {
  return path.basename(file, '.txt');
}

function extractOfficium(parsed: ParsedFile): string | undefined {
  const block = parsed.blocks.find((b) => b.name === 'Officium');
  if (!block) return undefined;
  const line = block.lines.find((l) => l.trim().length > 0 && !l.trim().startsWith('#'));
  return line?.trim();
}

function buildEntry(parsed: ParsedFile): MassEntry {
  const fileKey = fileKeyFromPath(parsed.filename);
  const officium = extractOfficium(parsed);
  const rank = parseRank(parsed.blocks, parsed.filename);
  const rubrics = parseRules(parsed.blocks, parsed.filename);

  const sections: Record<string, MassEntry['sections'][string]> = {};
  const references: Record<string, string> = {};
  const warnings: string[] = [];

  // Skip structural blocks; everything else is a proper-text section.
  const structural = new Set(['Officium', 'Rank', 'Rule']);

  for (const block of parsed.blocks) {
    if (structural.has(block.name)) continue;
    if (sections[block.name] !== undefined) {
      warnings.push(`duplicate section [${block.name}]`);
    }
    const tokens = linesToBlock(block.lines);
    sections[block.name] = tokens;
    const ref = sectionAsRef(tokens);
    if (ref) references[block.name] = ref;
  }

  const commune = rank?.sourceRefs.map((r) => /Commune\/([^\s]+)/.exec(r)?.[1]).find((m): m is string => Boolean(m));

  const colors = deriveColor({
    source: parsed.source,
    fileKey,
    officium,
  });

  return {
    id: `${parsed.source}/${fileKey}`,
    source: parsed.source,
    file: parsed.filename,
    officium,
    rank,
    rubrics,
    colors,
    commune,
    sections,
    references,
    warnings: warnings.sort(),
  };
}

function importFolder(dir: string, source: 'tempora' | 'sancti' | 'commune'): Record<string, MassEntry> {
  const out: Record<string, MassEntry> = {};
  for (const file of listTxt(dir)) {
    const parsed = parseFile(file, source);
    const entry = buildEntry(parsed);
    out[fileKeyFromPath(file)] = entry;
  }
  return out;
}

/**
 * Merge vernacular proper texts onto an already-imported Latin entry set.
 * For each file present in both locales, append the vernacular's text
 * tokens into the existing Latin section (tagged with the target `lang`).
 * Non-text tokens (scriptureRef, ref, directive, rubric, separator) keep
 * the Latin version — directives and refs are shared structure, not text.
 * Sections absent from Latin are skipped with a warning on the entry.
 * Files absent from Latin are skipped silently (vernacular may ship
 * extras our 1962 calendar never references).
 */
function mergeLocale(
  entries: Record<string, MassEntry>,
  dir: string,
  lang: string,
  source: 'tempora' | 'sancti' | 'commune'
): { files: number; sections: number; missing: number } {
  let filesTouched = 0;
  let sectionsTouched = 0;
  let missing = 0;
  for (const file of listTxt(dir)) {
    const key = fileKeyFromPath(file);
    const entry = entries[key];
    if (!entry) {
      missing++;
      continue;
    }
    const parsed: ParsedFile = parseFile(file, source);
    const structural = new Set(['Officium', 'Rank', 'Rule', 'Name']);
    let touchedThisFile = false;
    for (const block of parsed.blocks) {
      if (structural.has(block.name)) continue;
      const existing = entry.sections[block.name];
      if (!existing) {
        entry.warnings.push(`${lang} section [${block.name}] has no Latin counterpart`);
        continue;
      }
      const tokens = linesToBlock(block.lines, lang);
      const textItems = tokens.filter((t) => t.type === 'text');
      if (textItems.length === 0) continue;
      entry.sections[block.name] = [...existing, ...textItems];
      sectionsTouched++;
      touchedThisFile = true;
    }
    if (touchedThisFile) filesTouched++;
  }
  return { files: filesTouched, sections: sectionsTouched, missing };
}

/**
 * Extract a human-readable name for a mass file from its horas/<Lang>/<Folder>/<file>.txt
 * counterpart. divinum-officium stores the localized feast title either as the whole
 * `[Officium]` body or as the first `;;`-delimited field of `[Rank]`. Tries both.
 */
function extractHorasName(file: string): string | undefined {
  const parsed = parseFile(file, 'sancti');
  const officium = parsed.blocks.find((b) => b.name === 'Officium');
  if (officium) {
    const line = officium.lines.find((l) => {
      const t = l.trim();
      return t.length > 0 && !t.startsWith('#') && !t.startsWith('(');
    });
    if (line) return line.trim();
  }
  const rank = parsed.blocks.find((b) => b.name === 'Rank');
  if (rank) {
    const line = rank.lines.find((l) => l.trim().length > 0 && !l.trim().startsWith('#'));
    if (line) {
      const first = line.split(';;')[0]?.trim();
      if (first) return first;
    }
  }
  return undefined;
}

/**
 * Walk a horas/<Lang>/<Folder>/ directory and, for each file whose key matches an
 * existing mass entry, attach a localized name under `entry.names[lang]`.
 * Silently skips files with no Latin counterpart (horas ships more than missa).
 */
function mergeLocalizedNames(entries: Record<string, MassEntry>, dir: string, lang: string): number {
  let count = 0;
  for (const file of listTxt(dir)) {
    const key = fileKeyFromPath(file);
    const entry = entries[key];
    if (!entry) continue;
    const name = extractHorasName(file);
    if (!name) continue;
    entry.names ??= {};
    entry.names[lang] = name;
    count++;
  }
  return count;
}

/**
 * After divinum-officium's vernacular has been merged, walk every entry and
 * synthesize a vernacular name where one is still missing. divinum-officium
 * does not localize most ferias (Lent, Pentecost ordinary time, etc.) and
 * ships sparse Sancti coverage outside Latin. We need *some* name per day
 * for the UI — without this layer the UI would display Latin titles to a
 * vernacular user.
 */
const normalize = (s: string | undefined): string => (s ?? '').replace(/æ/g, 'ae').replace(/œ/g, 'oe');

function isNameMissing(entry: MassEntry, lang: string): boolean {
  // Treat an existing name that's identical to the Latin officium as missing:
  // divinum-officium's horas often files Latin literals (e.g. "Sabbato Sancto"
  // instead of "Holy Saturday"), and we want the override to take over.
  // Normalize æ/œ ligatures before comparing — the vernacular merge normalizes
  // them away while the officium keeps the ligature, so a strict equality
  // check would miss entries like "Die II infra octavam Paschæ".
  const existing = entry.names?.[lang];
  return !existing || normalize(existing) === normalize(entry.officium);
}

/**
 * Unconditionally apply explicit per-key translations before the missing-name
 * pass. This supersedes names horas may have filled with Latin literals
 * (e.g. fr/it/es/nl horas file "In Circumcisione Domini" as the name.fr for
 * 01-01). Only exact keys in the explicit maps are affected; everything else
 * is left to fillMissingNames + pattern fallbacks.
 */
function applyExplicitOverrides(
  tempora: Record<string, MassEntry>,
  sancti: Record<string, MassEntry>,
  lang: string,
  temporaMap: Record<string, string> | undefined,
  sanctiMap: Record<string, string> | undefined
): { tempora: number; sancti: number } {
  let t = 0;
  let s = 0;
  if (temporaMap) {
    for (const [key, name] of Object.entries(temporaMap)) {
      const entry = tempora[key];
      if (!entry) continue;
      entry.names ??= {};
      if (entry.names[lang] !== name) {
        entry.names[lang] = name;
        t++;
      }
    }
  }
  if (sanctiMap) {
    for (const [key, name] of Object.entries(sanctiMap)) {
      const entry = sancti[key];
      if (!entry) continue;
      entry.names ??= {};
      if (entry.names[lang] !== name) {
        entry.names[lang] = name;
        s++;
      }
    }
  }
  return { tempora: t, sancti: s };
}

function fillMissingNames(
  tempora: Record<string, MassEntry>,
  sancti: Record<string, MassEntry>,
  lang: string,
  temporaFn: (key: string) => string | undefined,
  sanctiFn: (key: string, latin: string | undefined) => string | undefined
): { tempora: number; sancti: number } {
  let t = 0;
  let s = 0;
  for (const [key, entry] of Object.entries(tempora)) {
    if (!isNameMissing(entry, lang)) continue;
    const name = temporaFn(key);
    if (!name) continue;
    entry.names ??= {};
    entry.names[lang] = name;
    t++;
  }
  for (const [key, entry] of Object.entries(sancti)) {
    if (!isNameMissing(entry, lang)) continue;
    const name = sanctiFn(key, entry.officium);
    if (!name) continue;
    entry.names ??= {};
    entry.names[lang] = name;
    s++;
  }
  return { tempora: t, sancti: s };
}

/**
 * Walk every entry and count how many still have no localized name (either
 * unset or stuck as the Latin officium). Produced per-language after all
 * fill-ins have run so the summary log can surface gaps to the user.
 */
function countUntranslated(
  tempora: Record<string, MassEntry>,
  sancti: Record<string, MassEntry>,
  lang: string
): { tempora: string[]; sancti: string[] } {
  const t: string[] = [];
  const s: string[] = [];
  for (const [key, entry] of Object.entries(tempora)) {
    if (isNameMissing(entry, lang)) t.push(key);
  }
  for (const [key, entry] of Object.entries(sancti)) {
    if (isNameMissing(entry, lang)) s.push(key);
  }
  return { tempora: t, sancti: s };
}

type LangStats = {
  folder: string;
  mergeTempora: { files: number; sections: number; missing: number };
  mergeSancti: { files: number; sections: number; missing: number };
  mergeCommune: { files: number; sections: number; missing: number };
  namesFromHoras: { tempora: number; sancti: number; commune: number };
  filled?: { tempora: number; sancti: number };
  untranslated: { tempora: string[]; sancti: string[] };
};

/**
 * Emit a per-language coverage report documenting which entries received a
 * vernacular name, which fell back to the override layer, and which are
 * still Latin (no horas translation + no override). Intended as a
 * reviewable artifact checked into the repo after each import.
 */
function writeSummaryLog(
  file: string,
  stats: Record<string, LangStats>,
  totals: { temporaTotal: number; sanctiTotal: number }
): void {
  const lines: string[] = [];
  lines.push('# Vernacular Import Coverage');
  lines.push('');
  lines.push(
    '_Generated by `rites/roman1962/build/import-divinum-officium`. Summarises how much of each locale comes from divinum-officium text vs. the override layer, and which entries remain Latin._'
  );
  lines.push('');
  lines.push(`Corpus: ${totals.temporaTotal} Tempora entries, ${totals.sanctiTotal} Sancti entries.`);
  lines.push('');
  lines.push('## Coverage summary');
  lines.push('');
  lines.push(
    '| Locale | Folder | Text (T/S/C files) | Names from horas (T/S/C) | Override filled (T/S) | Still Latin (T/S) |'
  );
  lines.push('| --- | --- | --- | --- | --- | --- |');
  for (const [lang, st] of Object.entries(stats)) {
    const text = `${st.mergeTempora.files}/${st.mergeSancti.files}/${st.mergeCommune.files}`;
    const nm = `${st.namesFromHoras.tempora}/${st.namesFromHoras.sancti}/${st.namesFromHoras.commune}`;
    const fld = st.filled ? `${st.filled.tempora}/${st.filled.sancti}` : '— _(no override)_';
    const latin = `${st.untranslated.tempora.length}/${st.untranslated.sancti.length}`;
    lines.push(`| \`${lang}\` | ${st.folder} | ${text} | ${nm} | ${fld} | ${latin} |`);
  }
  lines.push('');
  lines.push('## Entries still falling back to Latin');
  lines.push('');
  for (const [lang, st] of Object.entries(stats)) {
    const t = st.untranslated.tempora;
    const s = st.untranslated.sancti;
    if (t.length === 0 && s.length === 0) {
      lines.push(`### \`${lang}\` — full coverage ✓`);
      lines.push('');
      continue;
    }
    lines.push(`### \`${lang}\` — ${t.length} Tempora, ${s.length} Sancti`);
    lines.push('');
    if (t.length > 0) {
      lines.push('**Tempora keys:**');
      lines.push('');
      lines.push(`\`\`\``);
      lines.push(t.join(' '));
      lines.push(`\`\`\``);
      lines.push('');
    }
    if (s.length > 0) {
      lines.push('**Sancti keys:**');
      lines.push('');
      lines.push(`\`\`\``);
      lines.push(s.join(' '));
      lines.push(`\`\`\``);
      lines.push('');
    }
  }
  fs.writeFileSync(file, lines.join('\n'));
}

function resolveSha(): string {
  try {
    return execSync('git rev-parse HEAD', { cwd: DO_ROOT }).toString().trim();
  } catch {
    return 'unknown';
  }
}

/**
 * Drop translation payloads that have been pivoted into per-locale files:
 *   - `entry.names` (now lives in src/locales/{lang}.ts)
 *   - text tokens inside `entry.sections[*]` (now live in data/propers/{lang}/{source}.json,
 *     with a canonical scaffold in data/propers/_structure/{source}.json)
 * Non-text tokens (scriptureRef, ref, directive, rubric, separator) are kept
 * inline since they're shared structure, not localized content.
 */
function stripLocalizedPayloads(entries: Record<string, MassEntry>): void {
  for (const entry of Object.values(entries)) {
    delete entry.names;
    for (const [name, block] of Object.entries(entry.sections)) {
      const stripped = block.filter((item) => item.type !== 'text');
      if (stripped.length === 0) {
        delete entry.sections[name];
      } else {
        entry.sections[name] = stripped;
      }
    }
  }
}

function main(): void {
  if (!fs.existsSync(DO_ROOT)) {
    throw new ImportError(`divinum-officium clone not found at ${DO_ROOT}. See docs/1962/07-pre-port-decisions.md §1.`);
  }

  log(chalk.bold('\n  –– importing divinum-officium → rites/roman1962/data/ ––'));

  log(chalk.bold('\n✓ resolving 1960 calendar'));
  const calendar = buildCalendar1960(DO_ROOT);
  log(chalk.dim(`  ${Object.keys(calendar).length} dates`));

  log(chalk.bold('\n✓ importing Tempora (Latin)'));
  const tempora = importFolder(path.join(DO_ROOT, 'web/www/missa/Latin/Tempora'), 'tempora');
  log(chalk.dim(`  ${Object.keys(tempora).length} entries`));

  log(chalk.bold('\n✓ importing Sancti (Latin)'));
  const sancti = importFolder(path.join(DO_ROOT, 'web/www/missa/Latin/Sancti'), 'sancti');
  log(chalk.dim(`  ${Object.keys(sancti).length} entries`));

  log(chalk.bold('\n✓ importing Commune (Latin, from horas/)'));
  const commune = importFolder(path.join(DO_ROOT, 'web/www/horas/Latin/Commune'), 'commune');
  log(chalk.dim(`  ${Object.keys(commune).length} entries`));

  const stats: Record<string, LangStats> = {};

  for (const [lang, folder] of Object.entries(VERNACULARS)) {
    log(chalk.bold(`\n✓ merging vernacular ${chalk.cyan(lang)} (${folder})`));
    const t = mergeLocale(tempora, path.join(DO_ROOT, `web/www/missa/${folder}/Tempora`), lang, 'tempora');
    const s = mergeLocale(sancti, path.join(DO_ROOT, `web/www/missa/${folder}/Sancti`), lang, 'sancti');
    const c = mergeLocale(commune, path.join(DO_ROOT, `web/www/horas/${folder}/Commune`), lang, 'commune');
    log(
      chalk.dim(
        `  tempora: ${t.files}f/${t.sections}s, sancti: ${s.files}f/${s.sections}s, commune: ${c.files}f/${c.sections}s`
      )
    );
    const totalMissing = t.missing + s.missing + c.missing;
    if (totalMissing > 0) log(chalk.dim(`  ${totalMissing} vernacular files had no Latin counterpart`));

    const nt = mergeLocalizedNames(tempora, path.join(DO_ROOT, `web/www/horas/${folder}/Tempora`), lang);
    const ns = mergeLocalizedNames(sancti, path.join(DO_ROOT, `web/www/horas/${folder}/Sancti`), lang);
    const nc = mergeLocalizedNames(commune, path.join(DO_ROOT, `web/www/horas/${folder}/Commune`), lang);
    log(chalk.dim(`  names: tempora ${nt}, sancti ${ns}, commune ${nc}`));

    stats[lang] = {
      folder,
      mergeTempora: t,
      mergeSancti: s,
      mergeCommune: c,
      namesFromHoras: { tempora: nt, sancti: ns, commune: nc },
      untranslated: { tempora: [], sancti: [] },
    };
  }

  log(chalk.bold(`\n✓ filling missing vernacular names (override layer)`));
  for (const lang of Object.keys(VERNACULARS)) {
    const entry = stats[lang];
    if (!entry) continue;
    const override = NAME_OVERRIDES[lang];
    if (override) {
      const explicit = applyExplicitOverrides(tempora, sancti, lang, override.temporaExplicit, override.sanctiExplicit);
      const filled = fillMissingNames(tempora, sancti, lang, override.temporaFn, override.sanctiFn);
      entry.filled = {
        tempora: filled.tempora + explicit.tempora,
        sancti: filled.sancti + explicit.sancti,
      };
      log(
        chalk.dim(
          `  ${lang}: tempora ${filled.tempora + explicit.tempora} (${explicit.tempora} explicit), sancti ${
            filled.sancti + explicit.sancti
          } (${explicit.sancti} explicit)`
        )
      );
    } else {
      log(chalk.dim(`  ${lang}: no override layer (names stay as-merged; gaps fall back to Latin)`));
    }
    entry.untranslated = countUntranslated(tempora, sancti, lang);
  }

  log(chalk.bold(`\n✓ writing vernacular-coverage summary`));
  writeSummaryLog(path.join(OUT_DIR, '..', 'build', 'import-divinum-officium', 'IMPORT_LOG.md'), stats, {
    temporaTotal: Object.keys(tempora).length,
    sanctiTotal: Object.keys(sancti).length,
  });
  log(chalk.dim(`  wrote IMPORT_LOG.md`));

  // Pivot from Divinum-Officium file keys (01-01, Adv1-0, C5) to readable
  // slugs (the_circumcision_of_the_lord, advent_1_sunday, …) before emit.
  // All downstream artifacts — main JSONs, per-locale name files, proper
  // scaffolds + text, calendar-1960 — share the same slug taxonomy after
  // this point; the pre-remap pipeline keeps DO keys so the override layer
  // and color lookup tables continue to work unchanged.
  log(chalk.bold('\n✓ remapping DO keys → readable slugs'));
  const temporaSlugged = remapEntries(tempora, 'tempora');
  const sanctiSlugged = remapEntries(sancti, 'sancti');
  const communeSlugged = remapEntries(commune, 'commune');
  const calendarSlugged = remapCalendar(calendar);
  log(
    chalk.dim(
      `  ${Object.keys(temporaSlugged).length} tempora, ${Object.keys(sanctiSlugged).length} sancti, ${
        Object.keys(communeSlugged).length
      } commune`
    )
  );

  log(chalk.bold('\n✓ emitting per-locale name files'));
  const supportedLocales = [...Object.keys(VERNACULARS), 'la'];
  const localeStats = emitLocales(
    temporaSlugged,
    sanctiSlugged,
    communeSlugged,
    supportedLocales,
    path.join(REPO_ROOT, 'rites/roman1962/src/locales')
  );
  log(chalk.dim(`  ${localeStats.locales} locales, ${localeStats.total} names`));

  log(chalk.bold('\n✓ emitting per-locale proper-text files'));
  const propersStats = emitPropers(
    [
      { source: 'sancti', entries: sanctiSlugged },
      { source: 'tempora', entries: temporaSlugged },
      { source: 'commune', entries: communeSlugged },
    ],
    path.join(OUT_DIR, 'propers')
  );
  log(
    chalk.dim(
      `  ${propersStats.entries} entries with text, ${propersStats.langs.size} langs across ${propersStats.sources} sources`
    )
  );

  // Strip name + text payloads from the main JSON now that they've been
  // pivoted into per-locale files. The main files keep only the canonical
  // structural data (rank, rubrics, colors, references, scaffolding).
  stripLocalizedPayloads(temporaSlugged);
  stripLocalizedPayloads(sanctiSlugged);
  stripLocalizedPayloads(communeSlugged);

  const source: SourceMeta = {
    sha: resolveSha(),
    importerVersion: IMPORTER_VERSION,
    generatedAt: null,
    notes: 'Generated by rites/roman1962/build/import-divinum-officium. Do not edit by hand.',
  };

  log(chalk.bold('\n✓ writing JSON'));
  writeJson(path.join(OUT_DIR, 'source.json'), source);
  writeJson(path.join(OUT_DIR, 'calendar-1960.json'), calendarSlugged);
  writeJson(path.join(OUT_DIR, 'tempora.json'), temporaSlugged);
  writeJson(path.join(OUT_DIR, 'sancti.json'), sanctiSlugged);
  writeJson(path.join(OUT_DIR, 'commune.json'), communeSlugged);

  log(chalk.green('\n✨ done'));
}

try {
  main();
} catch (err) {
  if (err instanceof ImportError) {
    log(chalk.red(`\n✖ ${err.message}`));
    process.exit(1);
  }
  throw err;
}
