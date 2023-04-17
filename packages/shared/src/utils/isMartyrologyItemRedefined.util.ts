import { MartyrologyItemRedefined } from '../types';

/**
 * Return true if the item is a MartyrologyItemRedefined.
 * @param maybeItem
 * @returns
 */
export const isMartyrologyItemRedefined = (maybeItem: unknown): maybeItem is MartyrologyItemRedefined => {
  return (
    typeof maybeItem === 'object' &&
    maybeItem !== null &&
    Object.hasOwnProperty.call(maybeItem, 'id') &&
    typeof (maybeItem as MartyrologyItemRedefined).id === 'string'
  );
};
