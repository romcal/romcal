import { addDays, dayOfWeek, isoDate, listDatesInYear, subtractsDays, utc } from '.';

describe('date helpers', () => {
  test('utc builds a UTC midnight Date', () => {
    const d = utc(2024, 2, 15);
    expect(d.toISOString()).toBe('2024-03-15T00:00:00.000Z');
  });

  test('addDays / subtractsDays move by whole days', () => {
    const d = utc(2024, 0, 1);
    expect(isoDate(addDays(d, 7))).toBe('2024-01-08');
    expect(isoDate(subtractsDays(d, 1))).toBe('2023-12-31');
  });

  test('dayOfWeek returns 0-6 (Sunday-Saturday)', () => {
    expect(dayOfWeek(utc(2024, 2, 31))).toBe(0); // Easter 2024
    expect(dayOfWeek(utc(2024, 0, 1))).toBe(1); // Mon
  });

  test('listDatesInYear covers Jan 1 through Dec 31 inclusive', () => {
    const leap = listDatesInYear(2024);
    expect(leap).toHaveLength(366);
    expect(leap[0]).toBe('2024-01-01');
    expect(leap[leap.length - 1]).toBe('2024-12-31');
    expect(leap).toContain('2024-02-29');

    const nonLeap = listDatesInYear(2025);
    expect(nonLeap).toHaveLength(365);
    expect(nonLeap).not.toContain('2025-02-29');
  });
});
