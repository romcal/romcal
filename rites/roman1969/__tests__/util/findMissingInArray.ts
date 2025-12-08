/**
 * Find items that are in the first array/set but not in the second.
 * @param arr1 - The source array or set
 * @param arr2 - The array or set to compare against
 * @returns Array of items in arr1 that are not in arr2
 */
export const findMissingInArray = (arr1: string[] | Set<string>, arr2: string[] | Set<string>): string[] => {
  const set2 = new Set(arr2);
  return Array.from(arr1).filter((item) => !set2.has(item));
};
