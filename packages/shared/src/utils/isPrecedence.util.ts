import { Precedence } from '../constants';

export const isPrecedence = (maybePrecedence: unknown): maybePrecedence is Precedence => {
  return (
    typeof maybePrecedence === 'string' &&
    Object.values(Precedence).includes(maybePrecedence as Precedence)
  );
};

export const assertIsPrecedence = (
  maybePrecedence: unknown,
): asserts maybePrecedence is Precedence => {
  if (!isPrecedence(maybePrecedence)) {
    throw new Error('The provided element is not a precedence.');
  }
};

export function assertLiturgicalDayHasPrecedence(
  maybePrecedence: unknown,
  liturgicalDayId: string,
): asserts maybePrecedence is Precedence {
  if (!isPrecedence(maybePrecedence)) {
    throw new Error(`The precedence of the liturgical day ${liturgicalDayId} is required.`);
  }
}
