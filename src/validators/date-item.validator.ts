import { Schema, Validator } from 'jsonschema';
import { TYPES } from '@RomcalConstants/types.constant';
import { LITURGICAL_COLOR_KEYS } from '@RomcalConstants/liturgical-colors.constant';

export const getDateItemJsonSchema = (): Schema => {
  const dateItemJsonSchema: Schema = {
    id: '/dateItem',
    type: 'object',
    minProperties: 8,
    maxProperties: 9,
    properties: {
      key: { type: 'string' },
      name: { type: 'string' },
      date: { type: 'string' },
      type: { type: 'string', enum: TYPES },
      data: { $ref: '/dateItemDataJsonSchema' },
      base: { $ref: '/dateItem' },
      _id: { type: 'number' },
      _stack: { type: 'number' },
    },
    required: ['key', 'name', 'date', 'type', 'data'],
  };
  return dateItemJsonSchema;
};

export const getRomcalSeasonJsonSchema = (): Schema => {
  const romcalSeasonJsonSchema: Schema = {
    id: '/romcalSeasonJsonSchema',
    type: 'object',
    minProperties: 2,
    maxProperties: 2,
    properties: {
      key: { type: 'string' },
      value: { type: 'string' },
    },
    required: ['key', 'value'],
  };
  return romcalSeasonJsonSchema;
};

export const getRomcalDateItemMetadataJsonSchema = (): Schema => {
  const romcalDateItemMetadata: Schema = {
    id: '/romcalDateItemMetadata',
    type: 'object',
    minProperties: 0,
    maxProperties: 4,
    properties: {
      psalterWeek: { type: 'object' },
      liturgicalColor: {
        type: 'object',
        maxProperties: 2,
        properties: {
          key: { type: 'string', enum: [LITURGICAL_COLOR_KEYS] },
          value: { type: 'string' },
        },
        required: ['key'],
      },
      titles: { type: 'array', items: { type: 'string' } }, // Must only be a string array
      cycle: { type: 'object' },
    },
  };
  return romcalDateItemMetadata;
};

export const getRomcalDateItemDataCalendarJsonSchema = (): Schema => {
  const romcalDateItemDataCalendar: Schema = {
    id: '/romcalDateItemDataCalendar',
    type: 'object',
    minProperties: 0,
    maxProperties: 4,
    properties: {
      weeks: { type: 'number' },
      week: { type: 'number' },
      day: { type: 'number' },
    },
  };
  return romcalDateItemDataCalendar;
};

export const getDateItemDataJsonSchema = (): Schema => {
  const dateItemDataJsonSchema: Schema = {
    id: '/dateItemDataJsonSchema',
    type: 'object',
    minProperties: 3,
    maxProperties: 4,
    properties: {
      season: { type: 'array', items: { $ref: '/romcalSeasonJsonSchema' } },
      meta: { $ref: '/romcalDateItemMetadata' },
      calendar: { $ref: '/dateItemDataJsonSchema' },
      prioritized: {
        type: 'boolean',
      },
    },
  };
  return dateItemDataJsonSchema;
};

export const getDateItemSchemaValidator = (): Validator => {
  const validator = new Validator();
  validator.addSchema(getRomcalSeasonJsonSchema());
  validator.addSchema(getRomcalDateItemMetadataJsonSchema());
  validator.addSchema(getRomcalDateItemDataCalendarJsonSchema());
  validator.addSchema(getDateItemDataJsonSchema());
  validator.addSchema(getDateItemJsonSchema());
  return validator;
};
