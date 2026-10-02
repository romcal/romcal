/**
 * Convert a string literal to SCREAMING_SNAKE_CASE.
 * @param string
 */
export const toScreamingSnakeCase = (string: string): string =>
  string
    .replace(/[A-Z]/g, (l) => `_${l.toLowerCase()}`)
    .replace(/[ \t\n]+_*/g, '_')
    .replace(/(^_*|_*$)/g, '')
    .toUpperCase();

/**
 * Convert a class name from camelCase to kebab-case, replacing the _ namespace separator to a dot.
 * @param string
 * @param prefix
 */
export const toPackageName = (string: string, prefix: boolean = false): string => {
  const packageName = string
    .replace(/([a-z0-9]|^)([A-Z])/g, (_, m1, m2) => (m1 ? `${m1}-${m2}` : m2))
    .replace(/_/, '.')
    .toLowerCase();
  return prefix ? `@romcal/calendar.${packageName}` : packageName;
};

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
export const capitalize = (string: string): string => string.charAt(0).toUpperCase() + string.slice(1);

/**
 * Convert the string to PascalCase
 * @param string
 */
export const toPascalCase = (string: string): string =>
  capitalize(string.toLowerCase().replace(/((?:-|_|\s)\w)/g, (k: string) => k[1].toUpperCase()));

/**
 * Converts the first character in the string, and the first character after un _, to a lowercase equivalent.
 * @param string
 */
export const unCapitalize = (string: string): string =>
  string.charAt(0).toLowerCase() + string.slice(1).replace(/(_[A-Z]+)/g, (v) => v.toLowerCase());

/**
 * Ensure the localeId is in the format xx-XX
 * @param localeId
 */
export const sanitizeLocaleId = (localeId: string): string => {
  if (localeId?.length >= 5) {
    return `${localeId.substring(0, 2).toLowerCase()}-${localeId.substring(3, 5).toUpperCase()}`;
  }
  return localeId.toLowerCase();
};
