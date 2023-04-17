import { toRomanNumber } from './toRomanNumber.util';

describe('toRomanNumber', () => {
  it('should return empty string when passed 0', () => {
    expect(toRomanNumber(0)).toBe('');
  });

  it('should correctly convert numbers between 1 and 3999', () => {
    expect(toRomanNumber(1)).toBe('I');
    expect(toRomanNumber(4)).toBe('IV');
    expect(toRomanNumber(9)).toBe('IX');
    expect(toRomanNumber(13)).toBe('XIII');
    expect(toRomanNumber(21)).toBe('XXI');
    expect(toRomanNumber(50)).toBe('L');
    expect(toRomanNumber(99)).toBe('XCIX');
    expect(toRomanNumber(400)).toBe('CD');
    expect(toRomanNumber(500)).toBe('D');
    expect(toRomanNumber(999)).toBe('CMXCIX');
    expect(toRomanNumber(1000)).toBe('M');
    expect(toRomanNumber(1999)).toBe('MCMXCIX');
    expect(toRomanNumber(3999)).toBe('MMMCMXCIX');
  });

  it('should throw an error when passed a non-integer', () => {
    expect(() => toRomanNumber(1.5)).toThrow('Number must be an integer');
  });

  it('should throw an error when passed a number less than 0', () => {
    expect(() => toRomanNumber(-1)).toThrow('Cannot convert negative numbers to Roman numerals');
  });

  it('should throw an error when passed a number greater than 3999', () => {
    expect(() => toRomanNumber(4000)).toThrow('Cannot convert numbers greater than 3999 to Roman numerals');
  });
});
