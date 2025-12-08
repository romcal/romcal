/**
 * Locale-insensitive string comparison for consistent sorting across environments.
 * Uses English locale with base sensitivity to ensure consistent ordering.
 */
const compareKeys = (a: string, b: string): number => a.localeCompare(b, 'en', { sensitivity: 'base' });

/**
 * Check if object properties are sorted alphabetically.
 *
 * @param obj - The object to check
 * @returns true if the properties are sorted alphabetically, false otherwise
 *
 * @remarks
 * **Important limitation**: JavaScript engines (V8, SpiderMonkey) automatically
 * reorder integer-like keys before string keys. For example:
 * ```ts
 * const obj = { '10': 'x', '2': 'y', 'foo': 'z' };
 * Object.keys(obj); // ['2', '10', 'foo'] — integers sorted numerically first!
 * ```
 * This function assumes all keys are non-integer string identifiers (e.g., snake_case).
 * It will not correctly detect sorting issues when integer-like keys are present.
 */
export const isObjectPropsSortedAlphabetically = (obj: Record<string, unknown>): boolean => {
  const props = Object.keys(obj);
  const sortedProps = [...props].sort(compareKeys);
  return props.every((prop, index) => prop === sortedProps[index]);
};

/**
 * Find keys that are out of alphabetical order.
 *
 * @param obj - The object to check
 * @returns Array of objects describing out-of-order keys
 *
 * @remarks
 * See {@link isObjectPropsSortedAlphabetically} for limitations regarding integer-like keys.
 */
export const findUnsortedKeys = (obj: Record<string, unknown>): { key: string; shouldComeBefore: string }[] => {
  const keys = Object.keys(obj);
  const result: { key: string; shouldComeBefore: string }[] = [];

  for (let i = 1; i < keys.length; i++) {
    if (compareKeys(keys[i - 1], keys[i]) > 0) {
      // keys[i-1] is alphabetically AFTER keys[i], so keys[i] should come first
      result.push({
        key: keys[i],
        shouldComeBefore: keys[i - 1],
      });
    }
  }

  return result;
};
