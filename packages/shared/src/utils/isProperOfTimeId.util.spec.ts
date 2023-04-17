import { PROPER_OF_TIME_IDS } from '../constants';
import { isProperOfTimeId } from './isProperOfTimeId.util';

describe('isProperOfTimeId', () => {
  it('returns true for proper of time ids', () => {
    PROPER_OF_TIME_IDS.forEach((id) => {
      expect(isProperOfTimeId(id)).toBe(true);
    });
  });

  it('returns false for invalid proper of time ids', () => {
    expect(isProperOfTimeId('invalid_id')).toBe(false);
    expect(isProperOfTimeId('advent_1_sunday_invalid')).toBe(false);
    expect(isProperOfTimeId('easter_time_4')).toBe(false);
  });
});
