/* eslint-disable @typescript-eslint/no-explicit-any */
import { includes } from '@romcal/utils/array';
import { isNil, isObject } from '@romcal/utils/type-guards';

/**
 * Retrieves the value of the key in the given object
 * @param obj The object to test
 * @param key The key to look for
 */
export const getValueByKey = <T extends Record<string, any>, Key extends keyof T>(obj: T, key: Key): T[Key] => {
  return obj[key];
};

/**
 * http://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
 * [P in keyof T]:The key "P" is a property of the object "T"
 * T[P] extends Array<infer U>: Get the specified element from the array where the type of the element is inferred "U"
 */
type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<RecursivePartial<U>>
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};

/**
 * Checks if the given object contains a key
 * @param obj The object to test
 * @param key The key to look for
 */
export const hasKey = <T extends Record<string, any>>(obj: T, key: any): key is keyof T => {
  return obj.hasOwnProperty(key);
};

/**
 * Given a set of keys, attempt to traverse a JSON object to retrieve the value of the last key in the set.
 * @param obj The object to traverse
 * @param keys An array of keys that will be the sequence of the search
 */
export const findDescendantValueByKeys = <T extends { [key: string]: any }>(obj: T, keys: Array<string>): any => {
  if (keys.length === 0) {
    return obj;
  }
  const [first, ...rest] = keys;
  if (isNil(obj[first])) {
    // The given key doesn't exist in the object, return the object at this point
    return obj;
  } else {
    return findDescendantValueByKeys(obj[first], rest);
  }
};

/**
 * Takes properties from the source object and merges them with the target object to create one single object.
 * Duplicates in the source object are dropped in favour of the ones in the target object.
 * Therefore, only unique keys in the source object is merged to the target object.
 * @param target The object to be merged with
 * @param source The object to merge from
 */
export const mergeObjectsUniquely = <T extends { [key: string]: any }, U extends { [key: string]: any }>(
  target: T,
  source: U,
): T | RecursivePartial<T> => {
  // Return the target object if there's nothing to merge
  if (typeof source === 'undefined') return target;
  // Return target if it is undefined
  if (typeof target === 'undefined') return target;

  const result: RecursivePartial<T> = {};

  // Implement the recursive partial
  for (const key in source) {
    // Don't deal with undefined or nulls
    if (source.hasOwnProperty(key) && !isNil(source[key])) {
      result[key] = !hasKey(target, key)
        ? source[key]
        : Array.isArray(source[key])
        ? source[key].map((record: any) =>
            isObject(record) ? mergeObjectsUniquely(target[key], record) : !hasKey(target, key) ? record : target[key],
          )
        : isObject(source[key])
        ? mergeObjectsUniquely(target[key], source[key])
        : !hasKey(target, key)
        ? source[key]
        : target[key];
    }
  }
  return result;
};

/**
 * Recursively remove props with falsy (null, undefined or empty string) value from an object
 * @param obj the original object which you want to remove the properties with falsy value
 * @param isFalsy predicate function used to determine whether a value is falsy, default to `(val:any) => isNil(val) || val === ''`
 */
export const omitFalsyProps = <Original extends { [key: string]: any }>(
  obj: Original,
  isFalsy = (val: any): boolean => isNil(val) || val === '',
): RecursivePartial<Original> => {
  if (!obj) {
    return obj;
  }

  const result: RecursivePartial<Original> = {};

  // Implementation of the recursive partial
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && !isFalsy(obj[key])) {
      result[key] = Array.isArray(obj[key])
        ? obj[key].map((record: any) => (isObject(record) ? omitFalsyProps(record, isFalsy) : record))
        : isObject(obj[key])
        ? (omitFalsyProps(obj[key], isFalsy) as any) // typescript can't handle this :|
        : obj[key];
    }
  }

  return result;
};

/**
 * Omit specific keys from an object
 *
 * Example:
 *
 * ```js
 * import { omit } from '@romcal/utils/object';
 *
 * const original = { a: 1, b: 2, c: 3 }
 * console.log(omit(original, ['b'])); // { a:1, c: 3 }
 * ```
 *
 * @param obj The original obj
 * @param keysToOmit keys to omit
 * @returns The new object sans the keys that were removed
 */
export const omit = <Original, Key extends keyof Original>(
  obj: Original,
  keysToOmit: Key[] | ReadonlyArray<Key>,
): Omit<Original, Key> => {
  if (keysToOmit.length === 0) {
    return obj;
  }

  const result: any = {};

  Object.keys(obj).forEach((key) => {
    if (!includes(keysToOmit, key as keyof Original)) {
      result[key] = obj[key as keyof Original];
    }
  });

  return result;
};

/**
 * Sort values in an object in ascending order
 * @param key The key to sort by
 */
export const sortBy = <Original, K extends keyof Original>(key: K) => {
  return (a: Original, b: Original): number => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0);
};

/**
 * Filters a given array of objects based on the given key and value
 * @param array The original array to perform the filter
 * @param key The key to filter on
 * @param value The value to filter by
 */
export const filter = <Original, K extends keyof Original>(
  array: Original[],
  key: K,
  value: Original[K] | undefined,
): Original[] => {
  return array.filter((item: Original) => item[key] === value);
};
