import { calculateEasterDate } from './calculateEasterDate.util';

describe('calculateEasterDate', () => {
  test('returns the correct date for the year 2022', () => {
    const result = calculateEasterDate(2022);
    expect(result.year).toBe(2022);
    expect(result.month).toBe(4);
    expect(result.day).toBe(17);
  });

  test('returns the correct date for the year 2023', () => {
    const result = calculateEasterDate(2023);
    expect(result.year).toBe(2023);
    expect(result.month).toBe(4);
    expect(result.day).toBe(9);
  });
});
