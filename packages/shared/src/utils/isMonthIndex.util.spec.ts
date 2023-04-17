import { isMonthIndex } from './isMonthIndex.util';

describe('isMonthIndex', () => {
  it('should return true for valid month indices', () => {
    expect(isMonthIndex(1)).toBe(true);
    expect(isMonthIndex(6)).toBe(true);
    expect(isMonthIndex(12)).toBe(true);
  });

  it('should return false for invalid month indices', () => {
    expect(isMonthIndex(0)).toBe(false);
    expect(isMonthIndex(13)).toBe(false);
    expect(isMonthIndex(3.14)).toBe(false);
    expect(isMonthIndex(-1)).toBe(false);
  });
});
