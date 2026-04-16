import type { DayOfWeek } from './types';

const DAY_MS = 86_400_000;

export function utc(year: number, monthIdx0: number, day: number): Date {
  return new Date(Date.UTC(year, monthIdx0, day));
}

export function addDays(date: Date, days: number): Date {
  return new Date(date.getTime() + days * DAY_MS);
}

export function subtractsDays(date: Date, days: number): Date {
  return addDays(date, -days);
}

export function dayOfWeek(date: Date): DayOfWeek {
  return date.getUTCDay() as DayOfWeek;
}

export function isoDate(date: Date): string {
  const y = date.getUTCFullYear().toString().padStart(4, '0');
  const m = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const d = date.getUTCDate().toString().padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Every ISO date (`YYYY-MM-DD`) in the given civil year, Jan 1 → Dec 31.
 */
export function listDatesInYear(year: number): string[] {
  const out: string[] = [];
  const start = utc(year, 0, 1);
  const end = utc(year + 1, 0, 1);
  for (let d = start; d < end; d = addDays(d, 1)) {
    out.push(isoDate(d));
  }
  return out;
}
