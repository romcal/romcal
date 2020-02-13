/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from "moment";

/**
 * Primitive types
 */
export type Primitive = string | boolean | number | null | undefined;

/**
 * Custom date string type
 */
export type ISO8601DateString = string;

/**
 * Custom type to indicate Christmastide endings
 * t =
 * o =
 * e =
 */
export type ChristmastideEndings = "t" | "o" | "e";

/**
 * Check if a value is a valid ISO8601 Date string.
 * @param value The value to test
 */
export const isISODateString = (value: string): value is ISO8601DateString => moment(value, moment.ISO_8601, true).isValid();

/**
 * Check if a value is *NOT* `undefined`. This is useful to check if optional props is specified.
 * @param value the value that could be `undefined`
 */
export const isDefined = <T>(value: T | undefined): value is T => typeof value !== "undefined";

/**
 * Check if a value is `undefined` or `null`.
 * @param value The value that could be `null` or `undefined`
 */
export const isNil = (value: any): value is undefined | null => typeof value === "undefined" || value === null;

/**
 * Check if a value is boolean (`true` / `false`).
 * @param value The value that could be a boolean
 */
export const isBool = (value: any): value is boolean => typeof value === "boolean";

/**
 * Check if the value is a string.
 * @param value The value that could be a string
 */
export const isString = (value: any): value is string => typeof value === "string";

/**
 * Check if a value is primitive (`undefined`, `null`, `boolean`, `number`, or `string`).
 * @param value The value that could be a primitive type
 */
export const isPrimitive = (value: any): value is Primitive => value === null || ["string", "undefined", "boolean", "number"].indexOf(typeof value) !== -1;

export const isFunction = (value: any): value is Function => typeof value === "function";

/**
 * Checks if a value is an object.
 * @param value The value that could be an object
 */
export const isObject = (value: any): value is object => {
    const valType = typeof value;
    return !!value && valType === "object";
};
