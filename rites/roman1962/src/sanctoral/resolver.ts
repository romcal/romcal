import type { Rank1962 } from '../constants/rank-1962';
import type { RubricFlags1962 } from '../types/liturgical-day-1962';

import { deriveCommuneSlug } from './commune-ref';
import {
  type Calendar1960,
  type CalendarEntry,
  loadCalendar1960,
  loadSancti,
  loadTempora,
  type MassFileEntry,
  type MassFileMap,
} from './data';
import { deriveFixedOctave } from './octave';
import type { SanctoralCommemoration, SanctoralEntry1962, Sanctoral1962Year } from './types';
import { detectVigil } from './vigil';

function isoDateUTC(year: number, monthIdx0: number, day: number): string {
  const y = year.toString().padStart(4, '0');
  const m = (monthIdx0 + 1).toString().padStart(2, '0');
  const d = day.toString().padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function isLeap(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Kalendarium integer ranks (1570-era scale) and Mass-file decimal
 * ranks (1960-updated scale) sometimes disagree — neither source is
 * universally authoritative. Taking the max of the two numeric values
 * empirically matches the 1962 universal calendar (All Saints 6.4 vs
 * 3 → Class I; Vigil of Ss. Peter & Paul 1.5 vs 5 → Class II; St
 * Patrick 2 vs 3 → Class III).
 */
function pickAuthoritativeRank(
  calEntry: CalendarEntry,
  massEntry: MassFileEntry | undefined
): { numeric: number; rank1962: Rank1962; class1962: 1 | 2 | 3 | 4 | undefined } {
  const massRank = massEntry?.rank;
  const calNumeric = calEntry.numericRank;
  if (massRank && massRank.numericRank > calNumeric) {
    return {
      numeric: massRank.numericRank,
      rank1962: massRank.rank1962,
      class1962: massRank.class1962,
    };
  }
  return {
    numeric: calNumeric,
    rank1962: calEntry.rank1962,
    class1962: calEntry.class1962,
  };
}

function pickMassFile(
  fileKey: string,
  sancti: MassFileMap,
  tempora: MassFileMap
): { entry: MassFileEntry | undefined; source: 'sancti' | 'tempora' } {
  if (fileKey in sancti) return { entry: sancti[fileKey], source: 'sancti' };
  if (fileKey in tempora) return { entry: tempora[fileKey], source: 'tempora' };
  return { entry: undefined, source: 'sancti' };
}

function normaliseRubrics(mass: MassFileEntry | undefined): RubricFlags1962 {
  const r = mass?.rubrics;
  return {
    gloria: r?.gloria ?? false,
    credo: r?.credo ?? false,
    preface: r?.preface,
    lastGospel: r?.lastGospel,
    ite: r?.ite,
  };
}

function normaliseCommemorations(calEntry: CalendarEntry): SanctoralCommemoration[] {
  return (calEntry.commemorations ?? []).map((c) => ({
    name: c.name,
    numericRank: c.numericRank,
    fileKey: c.fileKey,
  }));
}

function buildEntry(
  year: number,
  mmdd: string,
  calEntry: CalendarEntry,
  sancti: MassFileMap,
  tempora: MassFileMap
): SanctoralEntry1962 {
  const [mm, dd] = mmdd.split('-').map(Number);
  const date = isoDateUTC(year, mm - 1, dd);

  const { entry: mass, source } = pickMassFile(calEntry.fileKey, sancti, tempora);
  const rank = pickAuthoritativeRank(calEntry, mass);

  const vigilOf = detectVigil(calEntry.name);
  const communeSlug = mass ? deriveCommuneSlug(mass.references) : undefined;
  const octave = deriveFixedOctave(mmdd);

  return {
    date,
    mmdd,
    fileKey: calEntry.fileKey,
    source,
    name: calEntry.name,
    rank1962: rank.rank1962,
    class1962: rank.class1962,
    numericRank: rank.numeric,
    colors: mass?.colors ?? [],
    rubrics: normaliseRubrics(mass),
    properRef: {
      source: mass ? `${source}/${calEntry.fileKey}` : `sancti/${calEntry.fileKey}`,
      communeSlug,
    },
    commemorations: normaliseCommemorations(calEntry),
    ...(octave ? { octave } : {}),
    ...(vigilOf ? { vigil: { of: vigilOf } } : {}),
  };
}

export function buildSanctoral1962(year: number): Sanctoral1962Year {
  const calendar: Calendar1960 = loadCalendar1960();
  const sancti = loadSancti();
  const tempora = loadTempora();

  const out: Sanctoral1962Year = new Map();
  for (const [mmdd, entries] of Object.entries(calendar)) {
    if (mmdd === '02-29' && !isLeap(year)) continue;
    // Filter Feb-29-only entries on non-leap years (none in base data).
    if (entries.length === 0) continue;

    const built = entries.map((e) => buildEntry(year, mmdd, e, sancti, tempora));
    out.set(built[0].date, built);
  }
  return out;
}
