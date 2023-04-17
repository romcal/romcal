import { isInteger } from './isInteger.util';

describe('isInteger', () => {
  test('returns true for an integer', () => {
    expect(isInteger(5)).toBe(true);
  });

  test('returns false for a non-integer number', () => {
    expect(isInteger(3.14)).toBe(false);
  });

  test('returns false for NaN', () => {
    expect(isInteger(NaN)).toBe(false);
  });

  test('returns false for Infinity', () => {
    expect(isInteger(Infinity)).toBe(false);
  });

  test('returns false for a string', () => {
    expect(isInteger('5')).toBe(false);
  });

  test('returns false for an object', () => {
    expect(isInteger({ value: 5 })).toBe(false);
  });

  test('returns false for undefined', () => {
    expect(isInteger(undefined)).toBe(false);
  });

  test('returns false for null', () => {
    expect(isInteger(null)).toBe(false);
  });
});
