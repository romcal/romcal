import {
  capitalize,
  sanitizeLocaleId,
  toCamelCase,
  toPackageName,
  toPascalCase,
  toScreamingSnakeCase,
  unCapitalize,
} from './string';

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

  describe('toPackageName', () => {
    it('formats multiword calendar namespaces and jurisdiction names', () => {
      expect(toPackageName('WesternSahara_ApostolicPrefecture')).toBe('western-sahara.apostolic-prefecture');
    });

    it('adds the package scope and prefix when asked to', () => {
      expect(toPackageName('Slovakia', true)).toBe('@romcal/calendar.slovakia');
    });
  });

  describe('toCamelCase', () => {
    it('joins words separated by hyphens, underscores and spaces', () => {
      expect(toCamelCase('SOME-random_string here')).toBe('someRandomStringHere');
    });
  });

  describe('capitalize', () => {
    it('raises the first character only', () => {
      expect(capitalize('some string')).toBe('Some string');
      expect(capitalize('')).toBe('');
    });
  });

  describe('toPascalCase', () => {
    it('joins words and raises the first character', () => {
      expect(toPascalCase('some-random_string here')).toBe('SomeRandomStringHere');
    });
  });

  describe('unCapitalize', () => {
    it('lowers the first character and the letters after an underscore', () => {
      expect(unCapitalize('Western_APOSTOLIC')).toBe('western_apostolic');
    });

    it('lowers only the first character of a plain word', () => {
      expect(unCapitalize('SomeString')).toBe('someString');
    });
  });
});
