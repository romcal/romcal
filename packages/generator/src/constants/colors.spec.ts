import { COLORS, Colors, isColor } from './colors';

describe('Colors', () => {
  it('lists every liturgical colour by its enum key', () => {
    expect([...COLORS].sort()).toEqual(['BLACK', 'GOLD', 'GREEN', 'PURPLE', 'RED', 'ROSE', 'WHITE']);
  });

  it('gives each key the upper-case value of the same name', () => {
    expect(Colors.Red).toBe('RED');
    expect(Colors.Rose).toBe('ROSE');
    expect(Colors.Purple).toBe('PURPLE');
    expect(Colors.Green).toBe('GREEN');
    expect(Colors.White).toBe('WHITE');
    expect(Colors.Gold).toBe('GOLD');
    expect(Colors.Black).toBe('BLACK');
  });
});

describe('isColor', () => {
  it.each(['RED', 'ROSE', 'PURPLE', 'GREEN', 'WHITE', 'GOLD', 'BLACK'])('accepts %s', (color) => {
    expect(isColor(color)).toBe(true);
  });

  it('rejects a string that is not a colour, including a lower-case one', () => {
    expect(isColor('BLUE')).toBe(false);
    expect(isColor('red')).toBe(false);
    expect(isColor('')).toBe(false);
  });

  it('rejects a value that is not a string', () => {
    expect(isColor(undefined)).toBe(false);
    expect(isColor(null)).toBe(false);
    expect(isColor(1)).toBe(false);
    expect(isColor({})).toBe(false);
  });
});
