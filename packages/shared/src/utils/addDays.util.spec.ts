import { addDays } from './addDays.util';

describe('addDays', () => {
  it('should return the correct date when adding days', () => {
    const date = new Date('2023-04-01');
    const daysToAdd = 7;
    const result = addDays(date, daysToAdd);
    const expected = new Date('2023-04-08');
    expect(result).toEqual(expected);
  });

  it('should return the correct date when subtracting days', () => {
    const date = new Date('2023-04-01');
    const daysToAdd = -7;
    const result = addDays(date, daysToAdd);
    const expected = new Date('2023-03-25');
    expect(result).toEqual(expected);
  });
});
