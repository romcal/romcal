import { Primitive } from "./type-guards";

/**
 * Check if an array contains an item.
 *
 * Example:
 *
 * ```js
 * import { includes } from './utils/array';
 *
 * includes([1,2,3,4,5], 4); // true
 * includes([1,2,3,4,5], 9); // false
 * ```
 */
export const includes = <T>(array: T[] | ReadonlyArray<T>, item: T): boolean => {
    return array.includes ? array.includes(item) : array.indexOf(item) !== -1;
};

/**
 * Flatten an array of array into single array.
 *
 * Example:
 *
 * ```js
 * import { concatAll } from './utils/array';
 *
 * concatAll([1,2,[3,4], [5,6,7]]); // [1,2,3,4,5,6,7]
 * ```
 */
export const concatAll = <T>(array: Array<T | T[]>): T[] => {
    return array.reduce<T[]>((result, item) => result.concat(item), []);
};

/**
 * Get the first item in the array that returns truthy for the predicate object.
 * @param items The array to search for items
 * @param predicate The criteria of objects to find in the array
 */
export const find = <O, K extends keyof O>(items: O[], predicate: Record<K, Primitive>): O | undefined => {
    const criteria = Object.entries(predicate);
    return items.find(item => {
        return criteria.every(pair => item[pair[0] as keyof O] === pair[1]);
    });
};

/**
 * Remove items from the array that return truthy for the predicate object.
 *
 * **This method mutates the input array.**
 *
 * @param items The array to remove items from
 * @param predicate The criteria of objects to remove from the array
 */
export const removeWhere = <O, K extends keyof O>(items: O[], predicate: Record<K, Primitive>): O[] => {
    const criteria = Object.entries(predicate);
    const index = items.findIndex(item => criteria.every(pair => item[pair[0] as keyof O] === pair[1]));
    if (index > -1) {
        items.splice(index, 1);
    }
    return items;
};

/**
 * Group an array of objects by one of its keys.
 *
 * https://gist.github.com/JamieMason/0566f8412af9fe6a1d470aa1e089a752
 *
 * @param array The array to use for the grouping
 * @param key The key to group by
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const groupBy = <O extends any, K extends keyof O>(array: O[], key: K): Record<O[K], O[]> => {
    return array.reduce((objectsByKeyValue, obj) => {
        const value = obj[key];
        objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
        return objectsByKeyValue;
    }, {} as Record<O[K], O[]>);
};

/**
 * Loop through an array asynchronously.
 *
 * The second parameter of the callback is an object with the following properties:
 *
 * | Properties   | Type     | Description |
 * | ------------ | -------- | ---------------------------------------- |
 * | `index`      | number   | index of the item.                               |
 * | `tracker`    | items    | the array that you pass to `asyncForEach`        |
 * | `breakOut`   | function | callback to immediately break out from the loop  |
 *
 * Example:
 *
 * ```js
 * import { asyncForEach, get } from './utils/array';
 *
 * async function doSomething() {
 *  await asyncForEach(
 *    [1,2,4,5],
 *    async id => await get(`/some_endpoint/${id}`));
 *
 *  console.log('Finished!')
 * }
 *
 * ```
 *
 * @param array array that you want to loop through
 * @param callback the asynchronous callback that receives the item as first parameter and an object as second parameter.
 *
 */
export const asyncForEach = <Item, CallbackReturn>(
    array: Item[] | ReadonlyArray<Item>,
    callback: (
        item: Item,
        data: {
            index: number;
            items: Item[] | ReadonlyArray<Item>;
            breakOut: () => void;
        },
    ) => CallbackReturn | Promise<CallbackReturn>,
): Promise<CallbackReturn[]> => {
    let hasBreak = false;
    const breakOut = (): void => {
        hasBreak = true;
    };

    const invokeCallback = (index: number, results: CallbackReturn[]): Promise<CallbackReturn[]> => {
        if (index === array.length) {
            return Promise.resolve(results);
        }
        return Promise.resolve(callback(array[index], { index, items: array, breakOut })).then(result =>
            hasBreak ? Promise.resolve(results) : invokeCallback(index + 1, results.concat(result)),
        );
    };
    return invokeCallback(0, []);
};
