import { sanitizeLocaleId, toScreamingSnakeCase } from './string';

describe('string.ts', () => {
  describe('toScreamingSnakeCase', () => {
    it('should handle strings with uppercase letters correctly', () => {
      expect(toScreamingSnakeCase('Some RandOm strinG')).toBe('SOME_RAND_OM_STRIN_G');
    });

    it('should handle strings with no uppercase letters correctly', () => {
      expect(toScreamingSnakeCase('some random string')).toBe('SOME_RANDOM_STRING');
    });

    it('should handle strings with no spaces', () => {
      expect(toScreamingSnakeCase('someRandomString')).toBe('SOME_RANDOM_STRING');
    });

    it('should handle strings with multiple consequent whitespaces', () => {
      expect(toScreamingSnakeCase('some\t\t\nrandom   string')).toBe('SOME_RANDOM_STRING');
    });

    it('should handle strings with leading and trailing whitespaces', () => {
      expect(toScreamingSnakeCase(' \t \n some random string   \n \t')).toBe('SOME_RANDOM_STRING');
    });

    it('should handle strings with leading and trailing underscores', () => {
      expect(toScreamingSnakeCase('__some random string__')).toBe('SOME_RANDOM_STRING');
    });

    it('should handle empty strings', () => {
      expect(toScreamingSnakeCase('')).toBe('');
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
