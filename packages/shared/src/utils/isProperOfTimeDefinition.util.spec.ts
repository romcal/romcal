import {
  assertIsProperOfTimeDefinition,
  isProperOfTimeDefinition,
} from './isProperOfTimeDefinition.util';

describe('isProperOfTimeDefinition', () => {
  it('should return true for a valid proper of time definition object', () => {
    const definition = {
      calendarId: 'proper-of-time',
      calendarTree: [],
      config: {},
      definitions: [],
    };
    expect(isProperOfTimeDefinition(definition)).toBe(true);
  });

  it('should return false for an invalid proper of time definition object', () => {
    const definition = {
      calendarId: 'INVALID',
      calendarTree: [],
      config: {},
      definitions: [],
    };
    expect(isProperOfTimeDefinition(definition)).toBe(false);
  });

  it('should return false for a non-object value', () => {
    expect(isProperOfTimeDefinition(null)).toBe(false);
    expect(isProperOfTimeDefinition(undefined)).toBe(false);
    expect(isProperOfTimeDefinition('string')).toBe(false);
    expect(isProperOfTimeDefinition(123)).toBe(false);
    expect(isProperOfTimeDefinition(true)).toBe(false);
  });

  it('should throw an error for an invalid proper of time definition object', () => {
    const definition = {
      calendarId: 'INVALID',
      calendarTree: [],
      config: {},
      definitions: [],
    };
    expect(() => assertIsProperOfTimeDefinition(definition)).toThrow(
      'The provided element is not a proper of time definition.',
    );
  });
});
