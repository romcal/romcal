import { arrayContainsDate } from './arrayContainsDate.util';

describe('arrayContainsDate', () => {
  const range = [
    new Date('2023-03-28T00:00:00.000Z'),
    new Date('2023-03-29T00:00:00.000Z'),
    new Date('2023-03-30T00:00:00.000Z'),
  ];

  test('returns true when date is in range', () => {
    const date = new Date('2023-03-29T00:00:00.000Z');
    expect(arrayContainsDate(range, date)).toBe(true);
  });

  test('returns false when date is not in range', () => {
    const date = new Date('2023-03-27T12:00:00.000Z');
    expect(arrayContainsDate(range, date)).toBe(false);
  });
});
