import { getUtcDate } from './getUtcDate.util';

test('getUtcDate returns a Date object with correct UTC year, month, and date', () => {
  const expectedDate = new Date(Date.UTC(2023, 3, 1, 0, 0, 0, 0)); // April 1, 2023
  const result = getUtcDate(2023, 4, 1);
  expect(result).toEqual(expectedDate);
});
