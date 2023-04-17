import { dateDifference } from './utcDateDifference.util';

describe('dateDifference', () => {
  it('should return the correct difference in days between two dates', () => {
    const date1 = new Date('2022-03-31');
    const date2 = new Date('2022-04-05');
    const difference = dateDifference(date1, date2);
    expect(difference).toEqual(5);
  });

  it('should return 0 if the two dates are the same', () => {
    const date1 = new Date('2022-03-31');
    const date2 = new Date('2022-03-31');
    const difference = dateDifference(date1, date2);
    expect(difference).toEqual(0);
  });

  it('should work with dates from different years', () => {
    const date1 = new Date('2022-12-31');
    const date2 = new Date('2023-01-05');
    const difference = dateDifference(date1, date2);
    expect(difference).toEqual(5);
  });
});

describe('dateDifference', () => {
  test('calculates difference between two dates', () => {
    const date1 = new Date('2022-03-31T00:00:00Z');
    const date2 = new Date('2022-04-02T00:00:00Z');
    expect(dateDifference(date1, date2)).toBe(2);
  });

  test('calculates negative difference if second date is earlier', () => {
    const date1 = new Date('2022-03-31T00:00:00Z');
    const date2 = new Date('2022-03-30T00:00:00Z');
    expect(dateDifference(date1, date2)).toBe(1);
    expect(dateDifference(date1, date2, false)).toBe(-1);
  });
});
