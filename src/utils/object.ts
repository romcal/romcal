import { includes } from "./array";

/**
 * Omit specific keys from an object
 *
 * Example:
 *
 * ```js
 * import { omit } from 'migration-flos-react';
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
  keysToOmit: Key[] | ReadonlyArray<Key>
): Omit<Original, Key> => {
  if (keysToOmit.length === 0) {
    return obj;
  }

  const result: any = {};

  Object.keys(obj).forEach(key => {
    if (!includes(keysToOmit, key as keyof Original)) {
      result[key] = obj[key as keyof Original];
    }
  });

  return result;
};
