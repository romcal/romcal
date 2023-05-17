export function isValidYear(maybeYear?: unknown): maybeYear is number {
  return (
    typeof maybeYear === 'number' &&
    Number.isInteger(maybeYear) &&
    maybeYear >= 1000 &&
    maybeYear <= 9999
  );
}

export function assertIsValidYear(maybeYear?: unknown): asserts maybeYear is number {
  if (!isValidYear(maybeYear)) {
    throw new Error('The provided year is incorrect.');
  }
}
