/**
 * Generate the station-church skeleton TSV for the 1962 Roman Rite.
 *
 * Walks the 1962 calendar for the target year, filters to days that
 * traditionally have a Roman station ("Statio ad …" in the Missale
 * Romanum 1962), and emits a TSV with columns:
 *
 *   date          ISO date (YYYY-MM-DD) the day falls on in the target year
 *   id            LiturgicalDay1962 id (the canonical key used everywhere
 *                 else in romcal: tempora slug or sancti key)
 *   season        coarse season tag, for human triage of the rows
 *   name_en       English name as currently emitted by the engine
 *   station_de    EMPTY — the human fills this in (German station-church name)
 *
 * The rows are intentionally inclusive: every day that has *any* station in
 * the 1962 books is listed, even when the day is regularly outranked by a
 * sancti feast in the year being sampled. The user can leave `station_de`
 * empty for rows they do not want to ship.
 *
 * Run:
 *   cd rites/roman1962 && tsx build/stations/build-skeleton.ts [year]
 *
 * Default year is 2026. Output goes to `data/stations.skeleton.tsv`.
 */
import fs from 'node:fs';
import path from 'node:path';

import { Romcal1962 } from '../../src/romcal-1962';

// ---------------------------------------------------------------------------
// Historical Roman station list (Missale Romanum 1962). Keys are the
// LiturgicalDay1962 ids emitted by ProperOfTime1962 + GeneralRoman1962.
//
// Sundays of pre-Lent, every day Ash Wed → Easter Saturday, the Easter
// octave + Low Sunday, Vigil + Octave of Pentecost, the September and
// Advent Ember weeks, and the Christmas / Epiphany core all carry a
// stational church.
//
// Both the 1962-canonical ids (e.g. `nativity_of_our_lord_jesus_christ`)
// AND the engine-emitted aliases that surface as the day's primary in
// some years (e.g. `nativity_of_the_lord`, `christmas_octave_day_2`,
// `sunday_within_octave_of_christmas`) are listed: whichever wins on the
// target date will be picked up by the integration step. The user can
// leave duplicates blank in the TSV.
// ---------------------------------------------------------------------------

function weeklyIds(weekPrefix: string): string[] {
  const dows = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  return dows.map((d) => `${weekPrefix}_${d}`);
}

const FIXED_STATION_IDS: ReadonlySet<string> = new Set([
  // -- Pre-Lent (Sundays only) --
  'septuagesima_sunday',
  'sexagesima_sunday',
  'quinquagesima_sunday',

  // -- Ash Wednesday + days after --
  'ash_wednesday',
  'thursday_after_ash_wednesday',
  'friday_after_ash_wednesday',
  'saturday_after_ash_wednesday',

  // -- Lent 1-4 (every day of every week) --
  ...weeklyIds('lent_1'),
  ...weeklyIds('lent_2'),
  ...weeklyIds('lent_3'),
  ...weeklyIds('lent_4'),

  // -- Passion week (= Lent 5) --
  'passion_sunday',
  'passion_week_monday',
  'passion_week_tuesday',
  'passion_week_wednesday',
  'passion_week_thursday',
  'passion_week_friday',
  'passion_week_saturday',

  // -- Holy Week --
  'palm_sunday_of_the_passion_of_the_lord',
  'holy_monday',
  'holy_tuesday',
  'holy_wednesday',
  'thursday_of_the_lords_supper',
  'friday_of_the_passion_of_the_lord',
  'easter_vigil',

  // -- Easter octave --
  'easter_sunday',
  'easter_monday',
  'easter_tuesday',
  'easter_wednesday',
  'easter_thursday',
  'easter_friday',
  'easter_saturday',
  'easter_time_1_sunday', // Low Sunday / Dominica in Albis

  // -- Pentecost vigil + octave --
  'vigil_of_pentecost',
  'pentecost_sunday',
  'pentecost_octave_monday',
  'pentecost_octave_tuesday',
  'pentecost_octave_wednesday',
  'pentecost_octave_thursday',
  'pentecost_octave_friday',
  'pentecost_octave_saturday',

  // -- Advent Sundays (each carries a station in the Missale Romanum 1962) --
  'advent_1_sunday',
  'advent_2_sunday',
  'advent_3_sunday',
  'advent_4_sunday',

  // -- Advent Ember Days (Quattuor Tempora Adventus) --
  // After Dec 17 the engine swaps the regular `advent_3_*` ids for the
  // O-Antiphon-keyed `advent_december_NN` ids, so list both.
  'advent_3_wednesday',
  'advent_3_friday',
  'advent_3_saturday',
  'advent_december_17',
  'advent_december_18',
  'advent_december_19',
  'advent_december_20',
  'advent_december_21',
  'advent_december_22',
  'advent_december_23',

  // -- Christmas core + octave --
  'christmas_eve',
  'nativity_of_our_lord_jesus_christ',
  'nativity_of_the_lord', // 1969-engine emitted alias for Dec 25
  'saint_stephen_the_first_martyr',
  'christmas_octave_day_2', // engine alias for Dec 26
  'saint_john_the_apostle_evangelist',
  'sunday_within_octave_of_christmas', // engine alias when Dec 27 = Sun
  'christmas_octave_day_3',
  'holy_innocents',
  'christmas_octave_day_4',
  '4th_day_in_the_octave_of_christmas_rubrica1960', // 1962 reformed Dec 28
  'the_circumcision_of_the_lord',
  'circumcision_of_the_lord', // engine alias
  'epiphany_of_the_lord',

  // -- Other station-bearing feasts in the Missale Romanum 1962 --
  'the_purification_of_the_blessed_virgin_mary_candlemas', // Feb 2
  'annunciation_of_the_blessed_virgin_mary', // Mar 25
  'saint_mark_the_evangelist', // Apr 25 — Litania Maior procession
  // Minor Rogations = Mon/Tue/Wed before Ascension Thursday. In the 1962
  // numbering (Easter octave = week 1, Low Sunday = easter_time_1_sunday),
  // Ascension falls on the Thursday of week 5, so Rogations are
  // easter_time_5_{monday|tuesday|wednesday}.
  'easter_time_5_monday', // Minor Rogations Mon
  'easter_time_5_tuesday', // Minor Rogations Tue
  'easter_time_5_wednesday', // Minor Rogations Wed / Vigil of Ascension
  'ascension_of_the_lord',
  'nativity_of_saint_john_the_baptist', // June 24
  'saints_peter_and_paul_apostles', // June 29
  'exaltation_of_the_holy_cross', // Sept 14
  'all_saints', // Nov 1
  // Vigil of All Saints abolished under the 1960 rubrics
  // (not emitted by calendar-1960.json), so not listed.
]);

/**
 * The September Ember Days fall in the third week of September each year
 * (Wed/Fri/Sat of the week containing the third Sunday after Sept 14).
 * They map onto the after_pentecost_N_{wednesday|friday|saturday} ids,
 * where N drifts year by year — so we filter by ISO date instead.
 */
function isSeptemberEmberDate(iso: string): boolean {
  const [y, m, d] = iso.split('-').map((s) => parseInt(s, 10));
  if (m !== 9) return false;
  const date = new Date(Date.UTC(y, m - 1, d));
  const dow = date.getUTCDay();
  if (dow !== 3 && dow !== 5 && dow !== 6) return false;
  return d >= 14 && d <= 22;
}

function isoDate(d: Date): string {
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`;
}

/**
 * Sept Ember Day for the given year and target day-of-week (3=Wed, 5=Fri,
 * 6=Sat): the first occurrence of that DOW on or after Sept 14.
 */
function septemberEmberDate(year: number, targetDow: number): Date {
  for (let day = 14; day <= 22; day += 1) {
    const d = new Date(Date.UTC(year, 8, day));
    if (d.getUTCDay() === targetDow) return d;
  }
  throw new Error(`No Sept Ember day for dow=${targetDow} in ${year}`);
}

/**
 * Easter Sunday for the given year, via the Anonymous Gregorian
 * algorithm. Avoids importing the Easter package.
 */
function easterSundayOf(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(Date.UTC(year, month - 1, day));
}

function pentecostSundayOf(year: number): Date {
  return new Date(easterSundayOf(year).getTime() + 49 * 86400000);
}

// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  const year = parseInt(process.argv[2] ?? '2026', 10);

  const romcal = new Romcal1962();
  const calendar = await romcal.generateCalendar(year);

  type Row = { date: string; id: string; rank: 'primary' | 'commemoration'; name: string };
  const rows: Row[] = [];
  const seen = new Set<string>(); // dedupe by `${date}::${id}`

  function push(date: string, id: string, rank: Row['rank'], name: string): void {
    const key = `${date}::${id}`;
    if (seen.has(key)) return;
    seen.add(key);
    rows.push({ date, id, rank, name });
  }

  for (const [date, days] of Object.entries(calendar)) {
    const ember = isSeptemberEmberDate(date);
    for (const day of days) {
      const primaryId = day.id;
      const primaryName = (day as unknown as { name?: string }).name ?? '';
      if (FIXED_STATION_IDS.has(primaryId) || ember) {
        push(date, primaryId, 'primary', primaryName);
      }
      const commems = (day as unknown as { commemorations?: { id: string; name: string }[] }).commemorations ?? [];
      for (const c of commems) {
        if (FIXED_STATION_IDS.has(c.id) || ember) {
          push(date, c.id, 'commemoration', c.name);
        }
      }
    }
  }

  // -- Synthesize the Minor Rogations (Mon/Tue/Wed before Ascension).
  // These carry traditional stations + processions but are commonly
  // outranked by II-class sancti feasts in the 1962 books, and the
  // engine suppresses them entirely (not even a commemoration) when that
  // happens. Because Ascension is always 39 days after Easter (Thursday
  // of the 5th Easter-tide week, counting Low Sunday as week 1), the
  // tempora ids are always `easter_time_5_{monday|tuesday|wednesday}`.
  const easter = easterSundayOf(year);
  for (const dayName of ['monday', 'tuesday', 'wednesday'] as const) {
    const offset = dayName === 'monday' ? 36 : dayName === 'tuesday' ? 37 : 38;
    const date = new Date(easter.getTime() + offset * 86400000);
    const iso = isoDate(date);
    const id = `easter_time_5_${dayName}`;
    push(iso, id, 'primary', `easter_time.weekday (Rogation ${dayName})`);
  }

  // -- Synthesize the September Ember triplet when the engine outranks
  // them with sancti feasts and they don't appear as commemorations.
  // The Ember Days are the Wed/Fri/Sat of the week containing Sept 14;
  // their tempora ids are after_pentecost_N_{wednesday|friday|saturday}
  // where N is the post-Pentecost week. Compute N from the actual date.
  const pentecost = pentecostSundayOf(year);
  for (const dayName of ['wednesday', 'friday', 'saturday'] as const) {
    const targetDow = dayName === 'wednesday' ? 3 : dayName === 'friday' ? 5 : 6;
    const date = septemberEmberDate(year, targetDow);
    const iso = isoDate(date);
    const diffDays = Math.round((date.getTime() - pentecost.getTime()) / 86400000);
    const week = Math.floor(diffDays / 7);
    const id = `after_pentecost_${week}_${dayName}`;
    push(iso, id, 'primary', `time_after_pentecost.weekday (Sept Ember ${dayName})`);
  }

  rows.sort((a, b) => {
    if (a.date !== b.date) return a.date < b.date ? -1 : 1;
    if (a.rank !== b.rank) return a.rank === 'primary' ? -1 : 1;
    return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
  });

  const header = ['date', 'id', 'rank', 'name', 'station_de'].join('\t');
  const body = rows.map((r) => [r.date, r.id, r.rank, r.name, ''].join('\t')).join('\n');
  const tsv = `${header}\n${body}\n`;

  const outPath = path.resolve(__dirname, '../../data/stations.skeleton.tsv');
  fs.writeFileSync(outPath, tsv, 'utf8');

  console.log(`wrote ${rows.length} rows to ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
