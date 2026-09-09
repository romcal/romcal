import { getUtcDate, getWeekNumber } from './primitives';

describe('getWeekNumber', () => {
  it('returns the ISO week of a UTC midnight date', () => {
    expect(getWeekNumber(getUtcDate(2024, 1, 1))).toEqual(1);
    expect(getWeekNumber(getUtcDate(2023, 12, 31))).toEqual(52);
    expect(getWeekNumber(getUtcDate(2021, 1, 1))).toEqual(53);
    expect(getWeekNumber(getUtcDate(2021, 1, 4))).toEqual(1);
  });

  it('reads UTC calendar components, not local ones', () => {
    const date = getUtcDate(2024, 1, 1);
    const getFullYear = jest.spyOn(Date.prototype, 'getFullYear');
    const getMonth = jest.spyOn(Date.prototype, 'getMonth');
    const getDate = jest.spyOn(Date.prototype, 'getDate');

    try {
      expect(getWeekNumber(date)).toEqual(1);
      expect(getFullYear).not.toHaveBeenCalled();
      expect(getMonth).not.toHaveBeenCalled();
      expect(getDate).not.toHaveBeenCalled();
    } finally {
      getFullYear.mockRestore();
      getMonth.mockRestore();
      getDate.mockRestore();
    }
  });
});
