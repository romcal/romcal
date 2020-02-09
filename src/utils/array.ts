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
export const includes = <T>(array: T[] | ReadonlyArray<T>, item: T) => {
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
export const concatAll = <T>(array: Array<T | T[]>) => {
  return array.reduce<T[]>((result, item) => result.concat(item), []);
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
    data: { index: number; items: Item[] | ReadonlyArray<Item>; breakOut: () => void }
  ) => CallbackReturn | Promise<CallbackReturn>
): Promise<CallbackReturn[]> => {
  let hasBreak = false;
  const breakOut = () => {
    hasBreak = true;
  };

  const invokeCallback = (index: number, results: CallbackReturn[]): Promise<CallbackReturn[]> => {
    if (index === array.length) {
      return Promise.resolve(results);
    }
    return Promise.resolve(callback(array[index], { index, items: array, breakOut })).then(result =>
      hasBreak ? Promise.resolve(results) : invokeCallback(index + 1, results.concat(result))
    );
  };
  return invokeCallback(0, []);
};
