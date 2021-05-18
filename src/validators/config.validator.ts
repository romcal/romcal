import { Schema, Validator } from 'jsonschema';
import { default as Locales } from '@romcal/locales/index';
import { COUNTRIES } from '@romcal/constants/countries/countries.constant';

export const getRomcalConfigJsonSchema = (): Schema => ({
  id: '/romcalConfig',
  type: 'object',
  minProperties: 0,
  maxProperties: 10,
  properties: {
    year: { type: 'number' },
    // Will only accept values that match existing countries in the romcal library
    country: {
      type: 'string',
      enum: COUNTRIES,
      description: `Acceptable values are ${COUNTRIES.join(', ')}`,
    },
    locale: {
      type: 'string',
      description: `Acceptable values are ${Object.keys(Locales).join(', ')}`,
    },
    epiphanyOnSunday: { type: 'boolean' },
    corpusChristiOnSunday: { type: 'boolean' },
    ascensionOnSunday: { type: 'boolean' },
    strictMode: { type: 'boolean' },
    scope: { type: 'string', enum: ['gregorian', 'liturgical'] },
    verbose: { type: 'boolean' },
    prettyPrint: { type: 'boolean' },
  },
});

export const getRomcalConfigSchemaValidator = (): Validator => {
  const validator = new Validator();
  validator.addSchema(getRomcalConfigJsonSchema());
  return validator;
};
