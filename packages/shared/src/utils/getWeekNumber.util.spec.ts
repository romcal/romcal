import { getWeekNumber } from './getWeekNumber.util';

test('getWeekNumber returns correct week number for a given date', () => {
  const date1 = new Date('2023-03-31T00:00:00Z');
  const weekNumber1 = getWeekNumber(date1);
  expect(weekNumber1).toBe(13);

  const date2 = new Date('2022-01-01T00:00:00Z');
  const weekNumber2 = getWeekNumber(date2);
  expect(weekNumber2).toBe(52);

  const date3 = new Date('2022-12-31T00:00:00Z');
  const weekNumber3 = getWeekNumber(date3);
  expect(weekNumber3).toBe(52);

  const date4 = new Date('2022-07-05T00:00:00Z');
  const weekNumber4 = getWeekNumber(date4);
  expect(weekNumber4).toBe(27);
});
