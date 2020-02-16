/* eslint-disable @typescript-eslint/no-explicit-any */
import { utc, ISO_8601 } from "moment";
import * as CountryCalendars from "../calendars";
import * as Locales from "../locales";
import { ElementType } from "./helpers";

/**
 * Primitive types
 */
export type Primitive = string | boolean | number | null | undefined;

/**
 * Custom date string type
 */
export type ISO8601DateString = string;

/**
 * The calendar types that can be resolved by this library.
 */
export type TCalendarTypes = "calendar" | "liturgical";

export type TRomcalQuery = Readonly<{
    day?: number;
    month?: number;
    group?: TRomcalQueryGroup;
    title?: string;
}>;

export type Dictionary<T> = {
    [index: number]: T;
};

/**
 * All the possible grouping variants that can be supported by romcal.
 */
export const romcalQueryGroups = [
    "days",
    "months",
    "daysByMonth",
    "weeksByMonth",
    "cycles",
    "types",
    "liturgicalSeasons",
    "liturgicalColors",
    "psalterWeeks",
] as const;
export type TRomcalQueryGroup = ElementType<typeof romcalQueryGroups>;

export type TRomcalQueryResult<T> = T[] | Dictionary<T[]> | Dictionary<T[]>[];

/**
 * Custom type to indicate Christmastide endings.
 *
 * The rule determining when the season of Christmas ends is as follows:
 *
 * |   Key   | Description                                                   |
 * | ------- | ------------------------------------------------------------- |
 * |   `t`   | Traditional [Jan 6th, Epiphany]                               |
 * |   `o`   | Ordinary Liturgical Calendar of the Western Roman Rite (Baptism of the Lord) |
 * |   `e`   | Extraordinary Liturgical Calendar of the Western Roman Rite (Presentation of the Lord/Candlemass) |
 */
export type TChristmastideEndings = "t" | "o" | "e";

export const countryKeys = Object.keys(CountryCalendars) as Array<keyof typeof CountryCalendars>;
export type TCountryTypes = ElementType<typeof countryKeys>;

export const localeKeys = Object.keys(Locales) as Array<keyof typeof Locales>;
export type TLocaleTypes = ElementType<typeof localeKeys>;

/**
 * Check if a value is a valid ISO8601 Date string.
 * @param value The value to test
 */
export const isISODateString = (value: string): value is ISO8601DateString => utc(value, ISO_8601, true).isValid();

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
 * Check if a value is a number.
 * @param value The value that could be a number
 */
export const isInteger = (value: any): value is number => typeof value === "number";

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
