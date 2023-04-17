import { COLORS } from '../constants';
import { isColor } from './isColor.util';

describe('Color Utils', () => {
  describe('Color Enum', () => {
    test('should have valid color values', () => {
      expect(COLORS).toContain('RED');
      expect(COLORS).toContain('ROSE');
      expect(COLORS).toContain('PURPLE');
      expect(COLORS).toContain('GREEN');
      expect(COLORS).toContain('WHITE');
      expect(COLORS).toContain('GOLD');
      expect(COLORS).toContain('BLACK');
    });
  });

  describe('isColor function', () => {
    test('should return true for valid color strings', () => {
      expect(isColor('RED')).toBe(true);
      expect(isColor('ROSE')).toBe(true);
      expect(isColor('PURPLE')).toBe(true);
      expect(isColor('GREEN')).toBe(true);
      expect(isColor('WHITE')).toBe(true);
      expect(isColor('GOLD')).toBe(true);
      expect(isColor('BLACK')).toBe(true);
    });

    test('should return false for invalid color strings', () => {
      expect(isColor('')).toBe(false);
      expect(isColor('red')).toBe(false);
      expect(isColor('ORANGE')).toBe(false);
      expect(isColor(undefined)).toBe(false);
      expect(isColor(null)).toBe(false);
      expect(isColor(123)).toBe(false);
      expect(isColor({})).toBe(false);
      expect(isColor([])).toBe(false);
    });
  });
});
