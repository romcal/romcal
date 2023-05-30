import { dateDifference } from './utcDateDifference.util';

describe('dateDifference', () => {
  it('should return the correct difference between two dates', () => {
    const date1 = new Date('2022-01-01T00:00:00Z');
    const date2 = new Date('2022-01-05T00:00:00Z');
    const result = dateDifference(date1, date2);
    expect(result).toBe(4);
  });

  it('should return the absolute difference between two dates when absolute is true', () => {
    const date1 = new Date('2022-01-01T00:00:00Z');
    const date2 = new Date('2021-12-30T00:00:00Z');
    const result = dateDifference(date1, date2, true);
    expect(result).toBe(2);
  });

  it('should return the signed difference between two dates when absolute is false', () => {
    const date1 = new Date('2022-01-01T00:00:00Z');
    const date2 = new Date('2022-01-05T00:00:00Z');
    const result = dateDifference(date1, date2, false);
    expect(result).toBe(-4);
  });
});
