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
