/**
 * Check if a value is a plain object (not null, not array).
 */
const isObject = (obj: unknown): obj is Record<string, unknown> =>
  typeof obj === 'object' && obj !== null && !Array.isArray(obj);

/**
 * Get all nested property names from an object using dot notation.
 * e.g., { a: { b: 1, c: 2 } } -> ['a.b', 'a.c']
 * @param obj - The object to extract property names from
 * @param parentKey - The parent key for recursion (internal use)
 * @returns Array of nested property names in dot notation
 */
export const getNestedPropertyNames = (obj: Record<string, unknown>, parentKey = ''): string[] =>
  Object.entries(obj).flatMap(([key, value]) => {
    const path = parentKey ? `${parentKey}.${key}` : key;
    return isObject(value) ? getNestedPropertyNames(value, path) : path;
  });
