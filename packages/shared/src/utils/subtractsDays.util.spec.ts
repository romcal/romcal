import { subtractsDays } from './subtractsDays.util';

test('subtractsDays subtracts the correct number of days from a given date', () => {
  const date = new Date('2022-01-01');
  const daysToSubtract = 3;
  const expectedDate = new Date('2021-12-29');

  expect(subtractsDays(date, daysToSubtract)).toEqual(expectedDate);
});
