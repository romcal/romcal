// Type helpers obtained from
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html

/** Remove types from T that are not assignable to U */
export type Filter<T, U> = T extends U ? T : never;

// The following is copied from https://github.com/microsoft/TypeScript/issues/23199#issuecomment-379323872

/** Get the keys of T if the value is assignable to U */
export type FilterdKeys<T, U> = {
    [P in keyof T]: T[P] extends U ? P : never;
}[keyof T];

export type DiffedKeys<T, U> = {
    [P in keyof T]: T[P] extends U ? never : P;
}[keyof T];

export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType>
    ? ElementType
    : never;

/**
 * A generic helper to infer the return type(s) of overloaded functions.
 * Supports up to 7 overloaded function signatures
 */
export type OverloadedReturnType<T> = T extends {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (...args: any[]): infer R;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (...args: any[]): infer R;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (...args: any[]): infer R;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (...args: any[]): infer R;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (...args: any[]): infer R;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (...args: any[]): infer R;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (...args: any[]): infer R;
}
    ? R // eslint-disable-next-line @typescript-eslint/no-explicit-any
    : T extends {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (...args: any[]): infer R;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (...args: any[]): infer R;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (...args: any[]): infer R;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (...args: any[]): infer R;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (...args: any[]): infer R;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (...args: any[]): infer R;
      }
    ? R // eslint-disable-next-line @typescript-eslint/no-explicit-any
    : T extends {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (...args: any[]): infer R;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (...args: any[]): infer R;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (...args: any[]): infer R;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (...args: any[]): infer R;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (...args: any[]): infer R;
      }
    ? R // eslint-disable-next-line @typescript-eslint/no-explicit-any
    : T extends {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (...args: any[]): infer R;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (...args: any[]): infer R;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (...args: any[]): infer R;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (...args: any[]): infer R;
      }
    ? R // eslint-disable-next-line @typescript-eslint/no-explicit-any
    : T extends { (...args: any[]): infer R; (...args: any[]): infer R; (...args: any[]): infer R }
    ? R // eslint-disable-next-line @typescript-eslint/no-explicit-any
    : T extends { (...args: any[]): infer R; (...args: any[]): infer R }
    ? R // eslint-disable-next-line @typescript-eslint/no-explicit-any
    : T extends (...args: any[]) => infer R
    ? R // eslint-disable-next-line @typescript-eslint/no-explicit-any
    : any;
