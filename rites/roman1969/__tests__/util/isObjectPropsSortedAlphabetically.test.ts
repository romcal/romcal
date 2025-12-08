import { isObjectPropsSortedAlphabetically, findUnsortedKeys } from './isObjectPropsSortedAlphabetically';

describe('isObjectPropsSortedAlphabetically', () => {
  it('should return true for sorted keys', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(isObjectPropsSortedAlphabetically(obj)).toBe(true);
  });

  it('should return false for unsorted keys', () => {
    const obj = { c: 3, a: 1, b: 2 };
    expect(isObjectPropsSortedAlphabetically(obj)).toBe(false);
  });

  it('should return true for empty object', () => {
    expect(isObjectPropsSortedAlphabetically({})).toBe(true);
  });

  it('should return true for single key', () => {
    expect(isObjectPropsSortedAlphabetically({ a: 1 })).toBe(true);
  });

  it('should handle underscore-prefixed keys correctly', () => {
    const sorted = { _private: 1, alpha: 2, beta: 3 };
    expect(isObjectPropsSortedAlphabetically(sorted)).toBe(true);
  });

  it('should handle snake_case keys correctly', () => {
    const sorted = { all_saints: 1, christmas: 2, easter_sunday: 3 };
    expect(isObjectPropsSortedAlphabetically(sorted)).toBe(true);

    const unsorted = { christmas: 2, all_saints: 1, easter_sunday: 3 };
    expect(isObjectPropsSortedAlphabetically(unsorted)).toBe(false);
  });
});

describe('findUnsortedKeys', () => {
  it('should return empty array for sorted keys', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(findUnsortedKeys(obj)).toEqual([]);
  });

  it('should identify unsorted key pairs', () => {
    const obj = { b: 2, a: 1, c: 3 };
    const result = findUnsortedKeys(obj);

    expect(result).toHaveLength(1);
    // 'a' should come before 'b' alphabetically
    expect(result[0]).toEqual({ key: 'a', shouldComeBefore: 'b' });
  });

  it('should identify multiple unsorted pairs', () => {
    const obj = { d: 4, c: 3, b: 2, a: 1 };
    const result = findUnsortedKeys(obj);

    expect(result).toHaveLength(3);
  });

  it('should return empty array for empty object', () => {
    expect(findUnsortedKeys({})).toEqual([]);
  });

  it('should return empty array for single key', () => {
    expect(findUnsortedKeys({ a: 1 })).toEqual([]);
  });
});
