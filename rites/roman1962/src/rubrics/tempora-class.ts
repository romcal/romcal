import type { ProperOfTimeEntry } from '../proper-of-time';

export type Class1962 = 1 | 2 | 3 | 4;

const TRIDUUM_KEYS = new Set(['Quad6-4', 'Quad6-5', 'Quad6-6']);
const CLASS_I_SOLEMN_SUNDAYS = new Set([
  'Pasc0-0', // Easter Sunday
  'Pasc7-0', // Pentecost Sunday
  'Pasc1-0', // Low Sunday (Octave Day of Easter)
  'Quad6-0', // Palm Sunday
]);

function isAdventSunday(key: string): boolean {
  return /^Adv[1-4]-0$/.test(key);
}

function isAdventFeria(key: string): boolean {
  return /^Adv[1-4]-[1-6]$/.test(key);
}

function isLentSunday(key: string): boolean {
  return /^Quad[1-5]-0$/.test(key);
}

function isLentFeria(key: string): boolean {
  return /^Quad[1-5]-[1-6]$/.test(key);
}

function isHolyWeekFeria(key: string): boolean {
  return /^Quad6-[1-3]$/.test(key);
}

function isEasterWeekFeria(key: string): boolean {
  return /^Pasc0-[1-6]$/.test(key);
}

function isPaschaltideWeekday(key: string): boolean {
  return /^Pasc[1-6]-[1-6]$/.test(key);
}

function isPentecostOctaveWeekday(key: string): boolean {
  return /^Pasc7-[1-6]$/.test(key);
}

function isQuadpSunday(key: string): boolean {
  return /^Quadp[1-3]-0$/.test(key);
}

function isQuadpFeria(key: string): boolean {
  return /^Quadp[1-3]-[1-6]$/.test(key);
}

function isEpiphanySunday(key: string): boolean {
  return /^Epi[1-6]-0a?$/.test(key);
}

function isPentSunday(key: string): boolean {
  return /^Pent\d{2}-0$/.test(key);
}

function isPentEpiSunday(key: string): boolean {
  return /^PentEpi\d-0$/.test(key);
}

function isPerAnnumWeekday(key: string): boolean {
  return /^Epi[1-6]-[1-6]$/.test(key) || /^Pent\d{2}-[1-6]$/.test(key) || /^PentEpi\d-[1-6]$/.test(key);
}

function isAdventEmberOrLate(entry: ProperOfTimeEntry): boolean {
  // Advent ferias Dec 17-23 are Class II.
  if (!isAdventFeria(entry.temporaKey)) return false;
  const mmdd = entry.date.slice(5);
  return mmdd >= '12-17' && mmdd <= '12-23';
}

export function classifyTempora(entry: ProperOfTimeEntry): Class1962 {
  const k = entry.temporaKey;
  if (TRIDUUM_KEYS.has(k)) return 1;
  if (CLASS_I_SOLEMN_SUNDAYS.has(k)) return 1;
  if (isAdventSunday(k)) return 1;
  if (isLentSunday(k)) return 1;
  if (k === 'Quadp3-3') return 1; // Ash Wednesday
  if (isHolyWeekFeria(k)) return 1;
  if (isEasterWeekFeria(k)) return 1;
  if (k === 'Pasc6-6') return 1; // Vigil of Pentecost
  if (k === 'Pent01-0') return 1; // Trinity Sunday

  if (isQuadpSunday(k)) return 2;
  if (isEpiphanySunday(k)) return 2;
  if (isPentSunday(k)) return 2;
  if (isPentEpiSunday(k)) return 2;
  if (k === 'Nat1-0' || k === 'Nat2-0') return 2;
  if (k === 'Nat29' || k === 'Nat30' || k === 'Nat31') return 2;
  if (/^Nat0[2-5]$/.test(k)) return 2;
  if (isPentecostOctaveWeekday(k)) return 2;
  if (isAdventEmberOrLate(entry)) return 2;

  if (isLentFeria(k)) return 3;

  if (isAdventFeria(k)) return 4;
  if (isQuadpFeria(k)) return 4;
  if (isPaschaltideWeekday(k)) return 4;
  if (isPerAnnumWeekday(k)) return 4;

  return 4;
}
