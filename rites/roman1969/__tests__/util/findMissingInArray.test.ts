import { findMissingInArray } from './findMissingInArray';

describe('findMissingInArray', () => {
  it('should find items in first array not in second', () => {
    const arr1 = ['a', 'b', 'c', 'd'];
    const arr2 = ['a', 'c'];
    expect(findMissingInArray(arr1, arr2)).toEqual(['b', 'd']);
  });

  it('should work with Sets', () => {
    const set1 = new Set(['a', 'b', 'c']);
    const set2 = new Set(['a']);
    expect(findMissingInArray(set1, set2)).toEqual(['b', 'c']);
  });

  it('should return empty array when all items exist', () => {
    const arr1 = ['a', 'b'];
    const arr2 = ['a', 'b', 'c'];
    expect(findMissingInArray(arr1, arr2)).toEqual([]);
  });

  it('should return all items when second array is empty', () => {
    const arr1 = ['a', 'b'];
    const arr2: string[] = [];
    expect(findMissingInArray(arr1, arr2)).toEqual(['a', 'b']);
  });

  it('should return empty array when first array is empty', () => {
    const arr1: string[] = [];
    const arr2 = ['a', 'b'];
    expect(findMissingInArray(arr1, arr2)).toEqual([]);
  });

  it('should handle mixed array and Set inputs', () => {
    const arr1 = ['a', 'b', 'c'];
    const set2 = new Set(['b']);
    expect(findMissingInArray(arr1, set2)).toEqual(['a', 'c']);
  });
});
