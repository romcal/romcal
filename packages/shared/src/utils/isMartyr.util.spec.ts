import { isMartyr } from './isMartyr.util';

describe('isMartyr', () => {
  it('should return true for martyr titles', () => {
    expect(isMartyr('MARTYR')).toBe(true);
    expect(isMartyr('THE_FIRST_MARTYR')).toBe(true);
    expect(isMartyr('PROTO_MARTYR_OF_OCEANIA')).toBe(true);
  });

  it('should return false for non-martyr titles', () => {
    expect(isMartyr('BISHOP')).toBe(false);
    expect(isMartyr('QUEEN')).toBe(false);
    expect(isMartyr('EVANGELIST')).toBe(false);
  });

  it('should return false for non-string input', () => {
    expect(isMartyr(123)).toBe(false);
    expect(isMartyr(true)).toBe(false);
    expect(isMartyr(undefined)).toBe(false);
    expect(isMartyr(null)).toBe(false);
    expect(isMartyr({ title: 'MARTYR' })).toBe(false);
  });
});
