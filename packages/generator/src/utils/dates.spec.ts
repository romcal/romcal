import { daysInMonth } from './dates';

test('daysInMonth returns the correct number of days in the month of a given date', () => {
  const date1 = new Date('2023-02-15T00:00:00Z'); // February 2023 (28 days)
  const date2 = new Date('2024-02-15T00:00:00Z'); // February 2024 (29 days)
  const date3 = new Date('2023-05-15T00:00:00Z'); // May 2023 (31 days)
  const date4 = new Date('2023-06-15T00:00:00Z'); // June 2023 (30 days)

  expect(daysInMonth(date1)).toBe(28);
  expect(daysInMonth(date2)).toBe(29);
  expect(daysInMonth(date3)).toBe(31);
  expect(daysInMonth(date4)).toBe(30);
});
