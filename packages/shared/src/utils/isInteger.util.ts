/**
 * Check if a value is an integer, and return it as a number.
 * @param value
 * @returns
 */
export const isInteger = (value: unknown): value is number =>
  typeof value === 'number' && Number.isInteger(value);
