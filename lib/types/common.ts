/**
 * Utility types
 */

export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

// eslint-disable-next-line @typescript-eslint/ban-types
export type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AllXOR<T extends any[]> = T extends [infer Only]
  ? Only
  : T extends [infer A, infer B, ...infer Rest]
  ? AllXOR<[XOR<A, B>, ...Rest]>
  : never;

/**
 * A key, in lower_underscore_case
 */
export type Key = Lowercase<string>;
