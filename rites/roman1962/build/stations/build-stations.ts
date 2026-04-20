/**
 * Compile `data/stations.skeleton.tsv` (the human-edited German station list)
 * into `data/stations.json` (the runtime lookup consumed by `LiturgicalDay1962`).
 *
 * Output shape:
 *   Record<liturgical_day_id, Array<{ mass?: string; key: string }>>
 *
 * `key` is the English slug for the station-church (e.g.
 * `santa_maria_maggiore`). The slug is the stable identifier used across the
 * three locale files (`de.ts`/`en.ts`/`la.ts`), each of which carries a
 * `stationChurches` block mapping slug → display name.
 *
 * The German-name → slug mapping is the source of truth here. The TSV stores
 * German strings (the user's input), not slugs, so this script is the only
 * place the mapping is expressed.
 *
 * Run:
 *   cd rites/roman1962 && tsx build/stations/build-stations.ts
 */
import fs from 'node:fs';
import path from 'node:path';

// ---------------------------------------------------------------------------
// Slug map — canonical German name → English-slugged station key.
//
// Adding a new station: add the German string here AND add the corresponding
// translation in `src/locales/{de,en,la}.ts` under the `stationChurches`
// block, keyed by the slug.
// ---------------------------------------------------------------------------

const SLUG_BY_DE: Readonly<Record<string, string>> = {
  'Groß St. Marien': 'santa_maria_maggiore',
  'Groß St. Marien bei der Krippe': 'santa_maria_maggiore_ad_praesepe',
  'St. Anastasia': 'saint_anastasia',
  'St. Apollinaris': 'saint_apollinaris',
  'St. Augustin': 'saint_augustine',
  'St. Balbina': 'saint_balbina',
  'St. Cäcilia': 'saint_cecilia',
  'St. Chrysogonus': 'saint_chrysogonus',
  'St. Eusebius': 'saint_eusebius',
  'St. Georg in Velabro': 'saint_george_in_velabro',
  'St. Johannes und Paulus': 'saints_john_and_paul',
  'St. Johannes vor der Lateinischen Pforte': 'saint_john_before_the_latin_gate',
  'St. Johann im Lateran': 'saint_john_lateran',
  'St. Klemens': 'saint_clement',
  'St. Kosmas und Damian': 'saints_cosmas_and_damian',
  'St. Laurentius in Damaso': 'saint_lawrence_in_damaso',
  'St. Laurentius in Lucina': 'saint_lawrence_in_lucina',
  'St. Laurentius in Panisperna': 'saint_lawrence_in_panisperna',
  'St. Laurentius vor den Mauern': 'saint_lawrence_outside_the_walls',
  'St. Marcellinus und Petrus': 'saints_marcellinus_and_peter',
  'St. Marcellus': 'saint_marcellus',
  'St. Maria bei den Märtyrern': 'santa_maria_ad_martyres',
  'St. Maria in Domnica': 'santa_maria_in_domnica',
  'St. Maria in Via Lata': 'santa_maria_in_via_lata',
  'St. Maria jenseits des Tibers': 'santa_maria_in_trastevere',
  'St. Markus': 'saint_mark',
  'St. Nikolaus im Kerker': 'saint_nicholas_in_carcere',
  'St. Pankratius': 'saint_pancras',
  'St. Paul vor den Mauern': 'saint_paul_outside_the_walls',
  'St. Peter': 'saint_peter',
  'St. Peter in Ketten': 'saint_peter_in_chains',
  'St. Praxedis': 'saint_praxedes',
  'St. Prisca': 'saint_prisca',
  'St. Pudentiana': 'saint_pudentiana',
  'St. Sabina': 'saint_sabina',
  'St. Silvester und Martinus': 'saints_silvester_and_martin',
  'St. Stephanus auf dem Mons Cælius': 'saint_stephen_on_the_caelian',
  'St. Susanna': 'saint_susanna',
  'St. Vitalis': 'saint_vitalis',
  'St. Xystus': 'saint_sixtus',
  'Zu den heiligen Vier Gekrönten': 'four_holy_crowned_martyrs',
  'Zu den heiligen Zwölf Aposteln': 'santi_apostoli',
  'Zum hl. Kreuz in Jerusalem': 'holy_cross_in_jerusalem',
};

// ---------------------------------------------------------------------------
// Engine-aliased ids: when the engine emits `<alias>` in some years where the
// liturgically-canonical 1962 id is `<canonical>`, copy the canonical's
// stations to the alias so the lookup hits regardless of which id the engine
// surfaces.
//
// Christmas, Stephen, John the Evangelist, Holy Innocents, Circumcision are
// already double-rowed in the TSV (user filled both ids), so they don't need
// aliasing here.
// ---------------------------------------------------------------------------

const ALIAS_TO_CANONICAL: Readonly<Record<string, string>> = {
  // Advent Ember Fri/Sat: when Ember Friday/Saturday fall on/after Dec 17 the
  // engine swaps `advent_3_friday`/`advent_3_saturday` for the O-Antiphon ids.
  advent_december_18: 'advent_3_friday',
  advent_december_19: 'advent_3_saturday',
};

// ---------------------------------------------------------------------------

interface StationEntry {
  mass?: string;
  key: string;
}

function parseTsv(text: string): { id: string; mass: string; stationDe: string }[] {
  const lines = text.split('\n').filter((l) => l.trim().length > 0);
  const [, ...rows] = lines; // skip header
  return rows.map((line) => {
    const cols = line.split('\t');
    return {
      id: cols[1] ?? '',
      mass: (cols[4] ?? '').trim(),
      stationDe: (cols[5] ?? '').trim(),
    };
  });
}

function main(): void {
  const dataDir = path.resolve(__dirname, '../../data');
  const tsv = fs.readFileSync(path.join(dataDir, 'stations.skeleton.tsv'), 'utf8');
  const rows = parseTsv(tsv);

  const byId = new Map<string, StationEntry[]>();
  const unknownNames = new Set<string>();

  for (const row of rows) {
    if (!row.id || !row.stationDe) continue;
    const slug = SLUG_BY_DE[row.stationDe];
    if (!slug) {
      unknownNames.add(row.stationDe);
      continue;
    }
    const entry: StationEntry = row.mass ? { mass: row.mass, key: slug } : { key: slug };
    const existing = byId.get(row.id) ?? [];
    existing.push(entry);
    byId.set(row.id, existing);
  }

  if (unknownNames.size > 0) {
    console.error('Unknown German station names (no slug mapping):');
    for (const n of unknownNames) console.error(`  - ${n}`);
    process.exit(1);
  }

  // Apply aliases: if the alias has no entries but the canonical does, copy.
  for (const [alias, canonical] of Object.entries(ALIAS_TO_CANONICAL)) {
    if (byId.has(alias)) continue; // alias already has its own entries
    const canonEntries = byId.get(canonical);
    if (canonEntries) byId.set(alias, canonEntries);
  }

  // Sort by id for stable output.
  const sortedKeys = [...byId.keys()].sort();
  const out: Record<string, StationEntry[]> = {};
  for (const k of sortedKeys) {
    const entries = byId.get(k);
    if (entries) out[k] = entries;
  }

  const outPath = path.join(dataDir, 'stations.json');
  fs.writeFileSync(outPath, `${JSON.stringify(out, null, 2)}\n`, 'utf8');
  console.log(`wrote ${sortedKeys.length} ids → ${outPath}`);
}

main();
