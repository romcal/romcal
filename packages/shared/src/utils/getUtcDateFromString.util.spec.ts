import { getUtcDateFromString } from './getUtcDateFromString.util';

describe('getUtcDateFromString', () => {
  it('should return a UTC date object from a valid string', () => {
    const dateStr = '2022-04-01';
    const expectedDate = new Date(Date.UTC(2022, 3, 1, 0, 0, 0, 0));
    expect(getUtcDateFromString(dateStr)).toEqual(expectedDate);
  });

  it('should throw an error if the input string is invalid', () => {
    const invalidDateStr = '2022-13';
    expect(() => {
      getUtcDateFromString(invalidDateStr);
    }).toThrow('Invalid date string');
  });
});
