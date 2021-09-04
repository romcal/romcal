/**
 * Convert a string literal to SCREAMING_SNAKE_CASE.
 * @param string
 */
export const toScreamingSnakeCase = (string: string): string =>
  string
    .replace(/(.)([A-Z][a-z]+)/, '$1_$2')
    .replace(/([A-Z][a-z]+)([0-9])/, '$1_$2')
    .replace(/([a-z0-9])([A-Z])/, '$1_$2')
    .toUpperCase();

/**
 * Convert a class name from camelCase to kebab-case, replacing the _ namespace separator to a dot.
 * @param string
 */
export const toPackageName = (string: string): string =>
  string
    .replace(/_/g, '.')
    .replace(/(.)([A-Z][a-z]+)/, '$1-$2')
    .replace(/([A-Z][a-z]+)([0-9])/, '$1-$2')
    .replace(/([a-z0-9])([A-Z])/, '$1_$2')
    .toLowerCase();

/**
 * Convert the string to camelCase
 * @param string
 */
export const toCamelCase = (string: string): string =>
  string.toLowerCase().replace(/((?:-|_|\s)\w)/g, (k: string) => k[1].toUpperCase());

/**
 * Converts the first character in the string to an uppercase equivalent.
 * @param string
 */
export const capitalize = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1);

/**
 * Converts the first character in the string, and the first character after un _, to a lowercase equivalent.
 * @param string
 */
export const uncapitalize = (string: string): string =>
  string.charAt(0).toLowerCase() + string.slice(1).replace(/(_[A-Z]+)/g, (v) => v.toLowerCase());
