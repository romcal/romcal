import { getNestedPropertyNames } from './getNestedPropertyNames';

describe('getNestedPropertyNames', () => {
  it('should return flat property names', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(getNestedPropertyNames(obj)).toEqual(['a', 'b', 'c']);
  });

  it('should return nested property names with dot notation', () => {
    const obj = {
      a: { b: 1, c: 2 },
      d: 3,
    };
    expect(getNestedPropertyNames(obj)).toEqual(['a.b', 'a.c', 'd']);
  });

  it('should handle deeply nested objects', () => {
    const obj = {
      level1: {
        level2: {
          level3: 'value',
        },
      },
    };
    expect(getNestedPropertyNames(obj)).toEqual(['level1.level2.level3']);
  });

  it('should return empty array for empty object', () => {
    expect(getNestedPropertyNames({})).toEqual([]);
  });

  it('should handle mixed nested and flat properties', () => {
    const obj = {
      flat: 'value',
      nested: {
        a: 1,
        b: 2,
      },
      another_flat: 'value2',
    };
    expect(getNestedPropertyNames(obj)).toEqual(['flat', 'nested.a', 'nested.b', 'another_flat']);
  });

  it('should handle arrays as leaf values (not nested)', () => {
    const obj = {
      items: [1, 2, 3],
      name: 'test',
    };
    expect(getNestedPropertyNames(obj)).toEqual(['items', 'name']);
  });

  it('should handle null values as leaf values', () => {
    const obj = {
      nullable: null,
      name: 'test',
    };
    expect(getNestedPropertyNames(obj)).toEqual(['nullable', 'name']);
  });
});
