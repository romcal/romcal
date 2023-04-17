import { isSameDate } from './isSameDate.util';

test('isSameDate returns true when two dates have the same year, month, and date', () => {
  const date1 = new Date('2023-04-01T00:00:00.000Z');
  const date2 = new Date('2023-04-01T06:00:00.000Z');
  expect(isSameDate(date1, date2)).toBe(true);
});

test('isSameDate returns false when two dates have different years', () => {
  const date1 = new Date('2023-04-01T00:00:00.000Z');
  const date2 = new Date('2024-04-01T00:00:00.000Z');
  expect(isSameDate(date1, date2)).toBe(false);
});

test('isSameDate returns false when two dates have different months', () => {
  const date1 = new Date('2023-04-01T00:00:00.000Z');
  const date2 = new Date('2023-05-01T00:00:00.000Z');
  expect(isSameDate(date1, date2)).toBe(false);
});

test('isSameDate returns false when two dates have different dates', () => {
  const date1 = new Date('2023-04-01T00:00:00.000Z');
  const date2 = new Date('2023-04-02T00:00:00.000Z');
  expect(isSameDate(date1, date2)).toBe(false);
});

test('isSameDate returns false when one date is null', () => {
  const date1 = new Date('2023-04-01T00:00:00.000Z');
  const date2 = null;
  expect(isSameDate(date1, date2)).toBe(false);
});

test('isSameDate returns false when both dates are null', () => {
  const date1 = null;
  const date2 = null;
  expect(isSameDate(date1, date2)).toBe(false);
});
