import { sanitizeLocaleId, toScreamingSnakeCase } from './string';

describe('string.ts', () => {
  describe('toScreamingSnakeCase', () => {
    it('returns a string literal converted to SCREAMING_SNAKE_CASE', () => {
      expect(toScreamingSnakeCase('Some RandOm strinG')).toBe('SOME_RAND_OM_STRIN_G');
      expect(toScreamingSnakeCase('Some RandOm')).toBe('SOME_RAND_OM');
      expect(toScreamingSnakeCase('Some  RandOm')).toBe('SOME_RAND_OM');
      expect(toScreamingSnakeCase('thisIsAnExample')).toBe('THIS_IS_AN_EXAMPLE');
      expect(toScreamingSnakeCase('test_')).toBe('TEST');
    });
  });

  describe('sanitizeLocaleId', () => {
    it('returns the locale code ID correctly formatted', () => {
      expect(sanitizeLocaleId('')).toBe('');
      expect(sanitizeLocaleId('sK')).toBe('sk');
      expect(sanitizeLocaleId('fr-fr')).toBe('fr-FR');
      expect(sanitizeLocaleId('EN-GB')).toBe('en-GB');
      expect(sanitizeLocaleId('aa-abc')).toBe('aa-AB');
    });
  });
});
