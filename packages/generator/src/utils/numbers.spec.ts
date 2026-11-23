import { isInteger, toRomanNumber } from './numbers';

describe('numbers.ts', () => {
  describe('toRomanNumber', () => {
    it.each([
      [1, 'I'],
      [4, 'IV'],
      [9, 'IX'],
      [14, 'XIV'],
      [40, 'XL'],
      [90, 'XC'],
      [400, 'CD'],
      [900, 'CM'],
      [1994, 'MCMXCIV'],
      [3999, 'MMMCMXCIX'],
    ])('converts %i to %s', (input, expected) => {
      expect(toRomanNumber(input)).toBe(expected);
    });

    it('returns an empty string for zero', () => {
      expect(toRomanNumber(0)).toBe('');
    });
  });

  describe('isInteger', () => {
    it('accepts integers', () => {
      expect(isInteger(0)).toBe(true);
      expect(isInteger(-7)).toBe(true);
    });

    it('rejects fractions, non-finite numbers and non-numbers', () => {
      expect(isInteger(1.5)).toBe(false);
      expect(isInteger(Number.NaN)).toBe(false);
      expect(isInteger(Infinity)).toBe(false);
      expect(isInteger('3')).toBe(false);
      expect(isInteger(null)).toBe(false);
    });
  });
});
