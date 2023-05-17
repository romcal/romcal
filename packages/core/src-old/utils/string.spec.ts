import { sanitizeLocaleId } from './string';

describe('string.ts', () => {
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
