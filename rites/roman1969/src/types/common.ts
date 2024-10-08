/**
 * Utility types
 */

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

// eslint-disable-next-line @typescript-eslint/ban-types
export type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AllXOR<T extends any[]> = T extends [infer Only]
  ? Only
  : T extends [infer A, infer B, ...infer Rest]
    ? AllXOR<[XOR<A, B>, ...Rest]>
    : never;

/**
 * Template literal types
 */

type UpperChar = Uppercase<string> & { length: 1 };

/**
 * PascalCaseToUpperSnakeCase
 */
export type ScreamingSnakeCase<S extends string> = CamelToUpperSnakeCase<Uncapitalize<S>>;

/**
 * CamelToUpperSnakeCase (using template literal types).
 * Note: first per 3 chars, then per 2 chars (to optimize performance and avoid TS2589 error),
 * and finally per 1 char.
 */
// todo: fix extra _ added, and _ added before numbers
export type CamelToUpperSnakeCase<S extends string> = S extends `${infer C0}${infer C1}${infer C2}${infer R}`
  ? `${`${C0}${C1}${C2}` extends `${UpperChar}${Lowercase<C1>}${Lowercase<C2>}`
      ? `_${Uppercase<C0>}${Uppercase<C1>}${Uppercase<C2>}`
      : `${`${C0}${C1}${C2}` extends `${Lowercase<C0>}${UpperChar}${Lowercase<C2>}`
          ? `${Uppercase<C0>}_${Uppercase<C1>}${Uppercase<C2>}`
          : `${`${C0}${C1}${C2}` extends `${Lowercase<C0>}${Lowercase<C1>}${UpperChar}`
              ? `${Uppercase<C0>}${Uppercase<C1>}_${Uppercase<C2>}`
              : `${`${C0}${C1}${C2}` extends `${UpperChar}${UpperChar}${Lowercase<C2>}`
                  ? `_${Uppercase<C0>}_${Uppercase<C1>}${Uppercase<C2>}`
                  : `${`${C0}${C1}${C2}` extends `${UpperChar}${Lowercase<C1>}${UpperChar}`
                      ? `_${Uppercase<C0>}${Uppercase<C1>}_${Uppercase<C2>}`
                      : `${`${C0}${C1}${C2}` extends `${Lowercase<C0>}${UpperChar}${UpperChar}`
                          ? `${Uppercase<C0>}_${Uppercase<C1>}_${Uppercase<C2>}`
                          : `${`${C0}${C1}${C2}` extends `${UpperChar}${UpperChar}${UpperChar}`
                              ? `_${Uppercase<C0>}_${Uppercase<C1>}_${Uppercase<C2>}`
                              : `${Uppercase<C0>}${Uppercase<C1>}${Uppercase<C2>}`}`}`}`}`}`}`}${CamelToUpperSnakeCase<R>}`
  : S extends `${infer C0}${infer C1}${infer R}`
    ? `${`${C0}${C1}` extends `${UpperChar}${Lowercase<C1>}`
        ? `_${Uppercase<C0>}${Uppercase<C1>}`
        : `${`${C0}${C1}` extends `${Lowercase<C0>}${UpperChar}`
            ? `${Uppercase<C0>}_${Uppercase<C1>}`
            : `${`${C0}${C1}` extends `${UpperChar}${UpperChar}`
                ? `_${Uppercase<C0>}_${Uppercase<C1>}`
                : `${Uppercase<C0>}${Uppercase<C1>}`}`}`}${CamelToUpperSnakeCase<R>}`
    : S extends `${infer C0}${infer R}`
      ? `${C0 extends UpperChar ? '_' : ''}${Uppercase<C0>}${CamelToUpperSnakeCase<R>}`
      : S;

/**
 * An ID, in lower_underscore_case
 */
export type Id = string;
