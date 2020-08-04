import { ValidationError } from 'jsonschema';
import { getDateItemSchemaValidator, getDateItemDataJsonSchema } from '@romcal/validators/date-item.validator';
import { getRomcalConfigSchemaValidator, getRomcalConfigJsonSchema } from '@romcal/validators/romcal-config.validator';
import { RomcalConfig } from '@romcal/models/romcal-config';
import { RomcalDateItem } from '@romcal/models/romcal-date-item';
import * as Calendars from '@romcal/calendars';
import { default as Locales } from '@romcal/locales';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

/**
 * Primitive types
 */
export type Primitive = string | boolean | number | null | undefined;

/**
 * Custom date string type
 */
export type ISO8601DateString = string;

type AllowedDictionaryKeyTypes = string | number;
export type Dictionary<T> = {
  [index in AllowedDictionaryKeyTypes]: T;
};

/**
 * Check if the arbitrary value given is an instance of [[RomcalConfig]].
 * @param maybeRomcalConfig The value that could be an instance of [[RomcalConfig]]
 */
export const isRomcalConfig = (maybeRomcalConfig: unknown): maybeRomcalConfig is RomcalConfig => {
  const { errors, valid } = getRomcalConfigSchemaValidator().validate(maybeRomcalConfig, getRomcalConfigJsonSchema());
  if (!valid) {
    errors.forEach((error: ValidationError) => {
      console.error(error.name, error.property, error.message, error.stack);
    });
  }
  return valid;
};

/**
 * Check if the arbitrary value given is an array of [[DateItems]].
 * @param maybeRomcalDateItems A value that could be an array of [[DateItem]]s
 */
export const areRomcalDateItems = (maybeRomcalDateItems: unknown): maybeRomcalDateItems is Array<RomcalDateItem> => {
  const { errors, valid } = getDateItemSchemaValidator().validate(maybeRomcalDateItems, getDateItemDataJsonSchema());
  if (!valid) {
    errors.forEach((error: ValidationError) => {
      console.error(error.name, error.property, error.message, error.stack);
    });
  }
  return valid;
};

/**
 * Check if a value is a valid ISO8601 Date string.
 * @param value The value to test
 */
export const isISODateString = (value: string): value is ISO8601DateString => dayjs.utc(value).isValid();

/**
 * Check if a value is *NOT* `undefined`. This is useful to check if optional props is specified.
 * @param maybeUndefined the value that could be `undefined`
 */
export const isDefined = <T>(maybeUndefined: T | undefined): maybeUndefined is T =>
  typeof maybeUndefined !== 'undefined';

/**
 * Check if a value is `undefined` or `null`.
 * @param maybeNil The value that could be `null` or `undefined`
 */
export const isNil = (maybeNil: unknown): maybeNil is undefined | null =>
  typeof maybeNil === 'undefined' || maybeNil === null;

/**
 * Check if a value is boolean (`true` / `false`).
 * @param maybeBoolean The value that could be a boolean
 */
export const isBool = (maybeBoolean: unknown): maybeBoolean is boolean => typeof maybeBoolean === 'boolean';

/**
 * Check if a value is a number.
 * @param maybeInteger The value that could be a number
 */
export const isInteger = (maybeInteger: unknown): maybeInteger is number =>
  typeof maybeInteger === 'number' && !isNil(maybeInteger);

/**
 * Check if the value is a string.
 * @param maybeString The value that could be a string
 */
export const isString = (maybeString: unknown): maybeString is string =>
  typeof maybeString === 'string' && !isNil(maybeString);

/**
 * Check if a value is primitive (`undefined`, `null`, `boolean`, `number`, or `string`).
 * @param maybePrimitive The value that could be a primitive type
 */
export const isPrimitive = (maybePrimitive: unknown): maybePrimitive is Primitive =>
  maybePrimitive === null || ['string', 'undefined', 'boolean', 'number'].indexOf(typeof maybePrimitive) !== -1;

/**
 * Check if given value is a function
 * @param maybeFunction The value that could be a function
 */
export const isFunction = (maybeFunction: unknown): maybeFunction is Function => typeof maybeFunction === 'function';

/**
 * Checks if a value is an object.
 * @param maybeObject The value that could be an object
 */
export const isObject = (maybeObject: unknown): maybeObject is object => {
  const valType = typeof maybeObject;
  return !!maybeObject && valType === 'object';
};

/**
 * Check if a value is empty.
 * @param maybeEmpty The value that could be empty
 */
export const isEmpty = (maybeEmpty: unknown): boolean => {
  if (isObject(maybeEmpty)) {
    return Object.keys(maybeEmpty).length === 0;
  } else {
    return true;
  }
};

/**
 * Check if a value is a country.
 * @param maybeCountry The value that could be a country
 */
export const isCountry = (maybeCountry: unknown): boolean => {
  return typeof maybeCountry === 'string' && Object.keys(Calendars).includes(maybeCountry);
};

/**
 * Check if a value is a locale.
 * @param maybeLocale The value that could be a locale
 */
export const isLocale = (maybeLocale: unknown): boolean => {
  return typeof maybeLocale === 'string' && Object.keys(Locales).includes(maybeLocale);
};
