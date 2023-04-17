import { startOfWeek } from './startOfWeek.util';

describe('startOfWeek', () => {
  test('returns the correct start of the week for a given date', () => {
    const date = new Date('2024-03-02T12:00:00Z'); // a Saturday
    const startOfWeekDate = startOfWeek(date);
    expect(startOfWeekDate.getUTCFullYear()).toEqual(2024);
    expect(startOfWeekDate.getUTCMonth()).toEqual(1); // 0-based, so 1 is February
    expect(startOfWeekDate.getUTCDate()).toEqual(25); // Sunday of that week
  });
});
