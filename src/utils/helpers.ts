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
