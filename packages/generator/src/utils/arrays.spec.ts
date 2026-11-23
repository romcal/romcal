import { safeWrapArray } from './arrays';

describe('arrays.ts', () => {
  describe('safeWrapArray', () => {
    it('returns an array input unchanged', () => {
      const input = ['a', 'b'];
      expect(safeWrapArray(input)).toBe(input);
    });

    it('wraps a single value in an array', () => {
      expect(safeWrapArray('a')).toEqual(['a']);
    });

    it('returns the fallback when the input is missing', () => {
      const fallback = ['x'];
      expect(safeWrapArray(undefined, fallback)).toBe(fallback);
    });

    it('returns undefined when the input and the fallback are missing', () => {
      expect(safeWrapArray()).toBeUndefined();
    });
  });
});
