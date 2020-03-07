import { Validator } from 'jsonschema';
import { getRomcalSeasonJsonSchema } from './date-item.validator';

describe('Tests for Date Item JSON Schema validation functions', () => {
  const validator = new Validator();

  describe('getRomcalSeasonJsonSchema()', () => {
    beforeAll(() => {
      validator.addSchema(getRomcalSeasonJsonSchema());
    });

    test('fails if input is not an object', () => {
      const result = validator.validate('incorrect input', getRomcalSeasonJsonSchema());
      expect(result.valid).toBeFalse();
    });
    test('fails if props are not strings', () => {
      const result = validator.validate(
        {
          key: 1,
          value: '1',
        },
        getRomcalSeasonJsonSchema(),
      );
      expect(result.valid).toBeFalse();
    });
    test('must have exactly 2 props called key and value', () => {
      const result = validator.validate(
        {
          key: '1',
          value: '2',
        },
        getRomcalSeasonJsonSchema(),
      );
      expect(result.valid).toBeTruthy();
    });
    test('fails if shape of object is incorrect', () => {
      const result = validator.validate(
        {
          key3: '1',
          value2: '2',
        },
        getRomcalSeasonJsonSchema(),
      );
      expect(result.valid).toBeFalse();
    });
  });
});
