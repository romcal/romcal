/* eslint-disable @typescript-eslint/no-explicit-any */
import { findDescendantValueByKeys, omit, omitFalsyProps, mergeObjectsUniquely, sortBy } from '@romcal/utils/object';

describe('omit', () => {
  let testObject: Record<string, any>;

  beforeAll(() => {
    testObject = {
      foo: 'bar',
      baz: 'bat',
    };
  });

  test('should remove specified key(s) from the object', () => {
    const result = omit(testObject, ['foo']);
    expect(Object.keys(result)).toHaveLength(1);
    expect(Object.keys(result)).toStrictEqual(['baz']);
  });

  afterAll(() => {
    testObject = [];
  });
});

describe('omitFalsyProps()', () => {
  let testObject: Record<string, any>;

  beforeAll(() => {
    testObject = {
      removeMe1: null,
      removeMe2: '',
      removeMe3: undefined,
      validProp1: 'asd',
      validProp2: false,
      validProp3: true,
      validProp4: 1,
    };
  });

  test('should remove all undefined, null and empty string fields from the object', () => {
    const result = omitFalsyProps(testObject);
    expect(Object.keys(result)).toHaveLength(4);
    expect(Object.keys(result)).toStrictEqual(['validProp1', 'validProp2', 'validProp3', 'validProp4']);
  });

  afterAll(() => {
    testObject = [];
  });
});

describe('findDescendantValueByKeys()', () => {
  let testNestedString: Record<string, any>;
  let testNestedArray: Record<string, any>;
  let testNestedObject: Record<string, any>;

  beforeAll(() => {
    testNestedString = {
      one: {
        two: {
          three: 'test',
        },
      },
    };
    testNestedArray = {
      one: {
        two: {
          three: ['1', '2', '3'],
        },
      },
    };
    testNestedObject = {
      one: {
        two: {
          three: {
            foo: 'bar',
          },
        },
      },
    };
  });

  test('should be able to return the value of the given key sequence if it exists', () => {
    const result = findDescendantValueByKeys(testNestedString, ['one', 'two', 'three']);
    const result2 = findDescendantValueByKeys(testNestedArray, ['one', 'two', 'three']);
    const result3 = findDescendantValueByKeys(testNestedObject, ['one', 'two', 'three']);

    expect(result).toBe(testNestedString.one.two.three);
    expect(typeof result).toBe('string');

    expect(result2).toBe(testNestedArray.one.two.three);
    expect(result2).toHaveLength(3);

    expect(result3).toBe(testNestedObject.one.two.three);
    expect(Object.keys(result3)).toStrictEqual(['foo']);
  });

  test('should return the last valid value from an incorrect key sequene', () => {
    const result = findDescendantValueByKeys(testNestedString, ['one', 'two', 't2hree']);

    expect(result).toBe(testNestedString.one.two);
    expect(Object.keys(result)).toStrictEqual(['three']);
  });

  afterAll(() => {
    testNestedString = [];
    testNestedArray = [];
    testNestedObject = [];
  });
});

describe('mergeObjects', () => {
  test('should correctly merge objects with only native types', () => {
    const target: Record<string, any> = {
      foo: 1,
      bar: 2,
    };

    const source: Record<string, any> = {
      foo: 2,
      bar: 3,
      baz: 10,
    };

    const result = mergeObjectsUniquely(target, source);

    expect(result).toStrictEqual({
      foo: 1,
      bar: 2,
      baz: 10,
    });
  });

  test('should correctly merge objects and ignore null values', () => {
    const target: Record<string, any> = {
      foo: 1,
      bar: 2,
    };

    const source: Record<string, any> = {
      foo: 2,
      bar: 3,
      baz: null,
    };

    const result = mergeObjectsUniquely(target, source);

    expect(result).toStrictEqual({
      foo: 1,
      bar: 2,
    });
  });

  test('should correctly merge objects with array values', () => {
    const target = {
      foo: 1,
      bar: 2,
    };

    const source = {
      foo: 2,
      bar: 3,
      baz: ['1', null, '2'],
    };

    const result = mergeObjectsUniquely(target, source);

    expect(result).toStrictEqual({
      foo: 1,
      bar: 2,
      baz: ['1', null, '2'],
    });
  });

  test('should correctly merge objects with object values', () => {
    const target = {
      foo: {
        a: 1,
        b: 2,
      },
      bar: 2,
    };

    const source = {
      foo: {
        a: 100,
        b: 222,
        c: 3,
      },
      bar: 3,
      baz: {
        a: 1,
        b: 2,
      },
    };

    const result = mergeObjectsUniquely(target, source);

    expect(result).toStrictEqual({
      foo: {
        a: 1,
        b: 2,
        c: 3,
      },
      bar: 2,
      baz: {
        a: 1,
        b: 2,
      },
    });
  });
});

describe('sortBy', () => {
  const fruits: Array<Record<string, any>> = [
    { name: 'banana', amount: 2 },
    { name: 'apple', amount: 4 },
    { name: 'pineapple', amount: 2 },
    { name: 'mango', amount: 1 },
  ];

  test('should be able to sort an array of objects in ascending order', () => {
    const result = fruits.concat().sort(sortBy('name'));
    expect(result).toStrictEqual([
      { name: 'apple', amount: 4 },
      { name: 'banana', amount: 2 },
      { name: 'mango', amount: 1 },
      { name: 'pineapple', amount: 2 },
    ]);
  });
});
