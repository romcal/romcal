import { isValidDate } from './isValidDate.util';

test('isValidDate should return true for valid date objects', () => {
  expect(isValidDate(new Date())).toBe(true);
  expect(isValidDate(new Date('2023-03-31T00:00:00Z'))).toBe(true);
  expect(isValidDate(new Date(2023, 2, 31))).toBe(true);
});

test('isValidDate should return false for invalid date objects', () => {
  expect(isValidDate(new Date('invalid date'))).toBe(false);
  expect(isValidDate(undefined)).toBe(false);
  expect(isValidDate(null)).toBe(false);
  expect(isValidDate('2023-03-31T00:00:00Z')).toBe(false);
  expect(isValidDate(123456)).toBe(false);
  expect(isValidDate({})).toBe(false);
});
