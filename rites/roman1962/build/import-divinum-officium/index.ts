import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

import chalk from 'chalk';

import { buildCalendar1960 } from './calendar';
import { deriveColor } from './colors';
import { sanctiDeFromKeyOrLatin, temporaDeFromKey } from './de-name-overrides';
import { writeJson } from './emit';
import { ImportError } from './errors';
import { parseFile } from './parser';
import { parseRank } from './rank';
import { parseRules } from './rules';
import { linesToBlock, sectionAsRef } from './section';
import type { MassEntry, ParsedFile, SourceMeta } from './types';

const IMPORTER_VERSION = '0.2.0';

// Vernacular locales to merge on top of Latin. Keep keys short (match
// BCP-47 prefixes); values are DO's folder names under web/www/missa/
// and web/www/horas/.
const VERNACULARS: Record<string, string> = {
  en: 'English',
  de: 'Deutsch',
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
 * synthesize a German name where one is still missing. divinum-officium does
 * not localize most ferias (Lent, Pentecost ordinary time, etc.) and ships
 * sparse Sancti coverage in German. We need *some* name per day for the German
 * UI — without this layer the UI would display Latin titles to a German user.
 */
function fillMissingDeNames(
  tempora: Record<string, MassEntry>,
  sancti: Record<string, MassEntry>
): { tempora: number; sancti: number } {
  let t = 0;
  let s = 0;
  for (const [key, entry] of Object.entries(tempora)) {
    if (entry.names?.de) continue;
    const de = temporaDeFromKey(key);
    if (!de) continue;
    entry.names ??= {};
    entry.names.de = de;
    t++;
  }
  for (const [key, entry] of Object.entries(sancti)) {
    if (entry.names?.de) continue;
    const de = sanctiDeFromKeyOrLatin(key, entry.officium);
    if (!de) continue;
    entry.names ??= {};
    entry.names.de = de;
    s++;
  }
  return { tempora: t, sancti: s };
}

function resolveSha(): string {
  try {
    return execSync('git rev-parse HEAD', { cwd: DO_ROOT }).toString().trim();
  } catch {
    return 'unknown';
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
  }

  const filled = fillMissingDeNames(tempora, sancti);
  log(chalk.bold(`\n✓ filling missing German names (override layer)`));
  log(chalk.dim(`  tempora ${filled.tempora}, sancti ${filled.sancti}`));

  const source: SourceMeta = {
    sha: resolveSha(),
    importerVersion: IMPORTER_VERSION,
    generatedAt: null,
    notes: 'Generated by rites/roman1962/build/import-divinum-officium. Do not edit by hand.',
  };

  log(chalk.bold('\n✓ writing JSON'));
  writeJson(path.join(OUT_DIR, 'source.json'), source);
  writeJson(path.join(OUT_DIR, 'calendar-1960.json'), calendar);
  writeJson(path.join(OUT_DIR, 'tempora.json'), tempora);
  writeJson(path.join(OUT_DIR, 'sancti.json'), sancti);
  writeJson(path.join(OUT_DIR, 'commune.json'), commune);

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
