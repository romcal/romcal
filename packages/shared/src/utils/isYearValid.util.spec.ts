import { assertYearIsValid, isYearValid } from './isYearValid.util';

describe('isYearValid', () => {
  it('should return true for valid years', () => {
    expect(isYearValid(2023)).toBe(true);
    expect(isYearValid(1000)).toBe(true);
    expect(isYearValid(9999)).toBe(true);
  });

  it('should return false for invalid years', () => {
    expect(isYearValid(-1)).toBe(false);
    expect(isYearValid(10000)).toBe(false);
    expect(isYearValid(null)).toBe(false);
    expect(isYearValid(undefined)).toBe(false);
    expect(isYearValid('2023')).toBe(false);
    expect(isYearValid({ year: 2023 })).toBe(false);
  });
});

describe('assertYearIsValid', () => {
  it('should not throw an error for valid years', () => {
    expect(() => assertYearIsValid(2023)).not.toThrow();
    expect(() => assertYearIsValid(1000)).not.toThrow();
    expect(() => assertYearIsValid(9999)).not.toThrow();
  });

  it('should throw an error for invalid years', () => {
    expect(() => assertYearIsValid(-1)).toThrow('The provided year is incorrect.');
    expect(() => assertYearIsValid(10000)).toThrow('The provided year is incorrect.');
    expect(() => assertYearIsValid(null)).toThrow('The provided year is incorrect.');
    expect(() => assertYearIsValid(undefined)).toThrow('The provided year is incorrect.');
    expect(() => assertYearIsValid('2023')).toThrow('The provided year is incorrect.');
    expect(() => assertYearIsValid({ year: 2023 })).toThrow('The provided year is incorrect.');
  });
});
