import { computeAnchors, isoDate } from '.';

describe('computeAnchors', () => {
  test('2024 anchors match the known liturgical dates', () => {
    const a = computeAnchors(2024);
    expect(isoDate(a.easter)).toBe('2024-03-31');
    expect(isoDate(a.ashWednesday)).toBe('2024-02-14');
    expect(isoDate(a.palmSunday)).toBe('2024-03-24');
    expect(isoDate(a.pentecost)).toBe('2024-05-19');
    expect(isoDate(a.trinity)).toBe('2024-05-26');
    expect(isoDate(a.corpusChristi)).toBe('2024-05-30');
    expect(isoDate(a.sacredHeart)).toBe('2024-06-07');
    expect(isoDate(a.advent1Sunday)).toBe('2024-12-01');
  });

  test('2025 Easter on April 20, Advent 1 on Nov 30', () => {
    const a = computeAnchors(2025);
    expect(isoDate(a.easter)).toBe('2025-04-20');
    expect(isoDate(a.advent1Sunday)).toBe('2025-11-30');
  });

  test('1962 Septuagesima/Passion/Rogation match the pre-Vatican II cadence', () => {
    const a = computeAnchors(1962);
    expect(isoDate(a.easter)).toBe('1962-04-22');
    expect(isoDate(a.septuagesima)).toBe('1962-02-18');
    expect(isoDate(a.passionSunday)).toBe('1962-04-08');
    expect(isoDate(a.rogationMonday)).toBe('1962-05-28');
    expect(isoDate(a.sundayInAscensionOctave)).toBe('1962-06-03');
  });

  test('Julian Easter calculation differs from Gregorian', () => {
    const greg = computeAnchors(2024);
    const jul = computeAnchors(2024, { easterCalculation: 'julian' });
    expect(isoDate(greg.easter)).not.toBe(isoDate(jul.easter));
  });

  test('advent1Sunday picks the Sunday on or after Nov 27', () => {
    // 2023: Nov 30 is a Thursday → Advent 1 is Dec 3.
    expect(isoDate(computeAnchors(2023).advent1Sunday)).toBe('2023-12-03');
    // 2024: Nov 30 is a Saturday → Advent 1 is Dec 1.
    expect(isoDate(computeAnchors(2024).advent1Sunday)).toBe('2024-12-01');
    // 2019: Nov 30 is a Saturday → Advent 1 is Dec 1.
    expect(isoDate(computeAnchors(2019).advent1Sunday)).toBe('2019-12-01');
  });
});
