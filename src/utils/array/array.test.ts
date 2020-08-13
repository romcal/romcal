import 'jest-extended';
import { concatAll, removeWhere, find } from './array';

describe('concatAll', () => {
  test('should flatten and merge array item', () => {
    const result = concatAll([1, 2, [3, 4], [5, 6, 7]]);
    expect(result).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
  });
  test('should flatten and merge array item WITHOUT removing duplicates', () => {
    const result = concatAll([1, 2, [1, 2], [3, 4, 5]]);
    expect(result).toStrictEqual([1, 2, 1, 2, 3, 4, 5]);
  });
});

describe('find', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const items: any[] = [
    {
      id: 1,
      test: 'foo',
    },
    {
      id: 2,
      test: 'bar',
    },
    {
      id: 3,
      test: 'baz',
    },
    {
      id: 4,
      test: 'foo',
    },
  ];

  test('should returns the first element that match the given search criteria', () => {
    const result = find(items, { test: 'foo' });
    expect(result).toStrictEqual({
      id: 1,
      test: 'foo',
    });
  });

  test('should returns the first element that match a search criteria with more than 1 key', () => {
    const result = find(items, { test: 'foo', id: 4 });
    expect(result).toStrictEqual({
      id: 4,
      test: 'foo',
    });
  });

  test('should returns undefined for a search criteria that cannot be fulfilled against the source', () => {
    const result = find(items, { test: '1', id: 1223 });
    expect(result).toBeUndefined();
  });
});

describe('removeWhere', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let items: any;
  beforeEach(() => {
    items = [
      {
        id: 1,
        name: 'foo',
      },
      {
        id: 2,
        name: 'bar',
      },
    ];
  });

  test('should remove objects from array with matching keys and values', () => {
    removeWhere(items, { id: 1 });
    expect(items).toStrictEqual([{ id: 2, name: 'bar' }]);
  });

  test('should return the original array if asked to delete an item that doesnt exist', () => {
    removeWhere(items, { id: 3 });
    expect(items).toStrictEqual([
      { id: 1, name: 'foo' },
      { id: 2, name: 'bar' },
    ]);
  });
});
