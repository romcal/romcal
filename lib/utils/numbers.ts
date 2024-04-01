const numerals: Record<string, number> = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

/**
 * Convert arabic numbers to roman numerals.
 * Inspired by https://github.com/jonschlinkert/romanize
 */
export const toRomanNumber = (number: number): string => {
  const keys = Object.keys(numerals);
  let arabic = number;
  let str = '';

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    // eslint-disable-next-line no-bitwise
    str += key.repeat((arabic / numerals[key]) >>> 0);
    arabic %= numerals[key];
  }
  return str;
};

/**
 * Check if a value is an integer, and return it as a number.
 * @param value
 * @returns
 */
export const isInteger = (value: unknown): value is number => typeof value === 'number' && Number.isInteger(value);
