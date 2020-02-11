import { includes } from "./array";
import { isNil, isObject } from "./type-guards";

/**
 * http://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
 */
type RecursivePartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U>
        ? Array<RecursivePartial<U>>
        : T[P] extends object
        ? RecursivePartial<T[P]>
        : T[P];
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
 * Recursively remove props with falsy (null, undefined or empty string) value from an object
 * @param obj the original object which you want to remove the properties with falsy value
 * @param isFalsy predicate function used to determine whether a value is falsy, default to `(val:any) => isNil(val) || val === ''`
 */
export const omitFalsyProps = <Original extends { [key: string]: any }>(
    obj: Original,
    isFalsy = (val: any) => isNil(val) || val === "",
) => {
    if (!obj) {
        return obj;
    }

    const result: RecursivePartial<Original> = {};

    // Implemetation of the recursive partial
    for (const key in obj) {
        if (!isFalsy(obj[key])) {
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
 * import { omit } from './utils/object';
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

    Object.keys(obj).forEach(key => {
        if (!includes(keysToOmit, key as keyof Original)) {
            result[key] = obj[key as keyof Original];
        }
    });

    return result;
};
