import { assertIsValidYear, isValidYear } from './isYearValid.util';

describe('isYearValid', () => {
  it('should return true for valid years', () => {
    expect(isValidYear(2023)).toBe(true);
    expect(isValidYear(1000)).toBe(true);
    expect(isValidYear(9999)).toBe(true);
  });

  it('should return false for invalid years', () => {
    expect(isValidYear(-1)).toBe(false);
    expect(isValidYear(10000)).toBe(false);
    expect(isValidYear(null)).toBe(false);
    expect(isValidYear(undefined)).toBe(false);
    expect(isValidYear('2023')).toBe(false);
    expect(isValidYear({ year: 2023 })).toBe(false);
  });
});

describe('assertYearIsValid', () => {
  it('should not throw an error for valid years', () => {
    expect(() => assertIsValidYear(2023)).not.toThrow();
    expect(() => assertIsValidYear(1000)).not.toThrow();
    expect(() => assertIsValidYear(9999)).not.toThrow();
  });

  it('should throw an error for invalid years', () => {
    expect(() => assertIsValidYear(-1)).toThrow('The provided year is incorrect.');
    expect(() => assertIsValidYear(10000)).toThrow('The provided year is incorrect.');
    expect(() => assertIsValidYear(null)).toThrow('The provided year is incorrect.');
    expect(() => assertIsValidYear(undefined)).toThrow('The provided year is incorrect.');
    expect(() => assertIsValidYear('2023')).toThrow('The provided year is incorrect.');
    expect(() => assertIsValidYear({ year: 2023 })).toThrow('The provided year is incorrect.');
  });
});
