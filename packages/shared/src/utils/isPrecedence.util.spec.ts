import {
  assertIsPrecedence,
  assertLiturgicalDayHasPrecedence,
  isPrecedence,
} from './isPrecedence.util';

describe('isPrecedence', () => {
  it('should return true for a valid precedence', () => {
    const precedence = '02_PROPER_OF_TIME_SOLEMNITY';
    const result = isPrecedence(precedence);
    expect(result).toBe(true);
  });

  it('should return false for an invalid precedence', () => {
    const precedence = 'invalid';
    const result = isPrecedence(precedence);
    expect(result).toBe(false);
  });
});

describe('assertIsPrecedence', () => {
  it('should not throw an error for a valid precedence', () => {
    const precedence = '02_PROPER_OF_TIME_SOLEMNITY';
    expect(() => assertIsPrecedence(precedence)).not.toThrow();
  });

  it('should throw an error for an invalid precedence', () => {
    const precedence = 'invalid';
    expect(() => assertIsPrecedence(precedence)).toThrow();
  });
});

describe('assertLiturgicalDayHasPrecedence', () => {
  it('should not throw an error for a valid precedence', () => {
    const precedence = '02_PROPER_OF_TIME_SOLEMNITY';
    const liturgicalDayId = 'saint_john_damascene_priest_doctor';
    expect(() => assertLiturgicalDayHasPrecedence(precedence, liturgicalDayId)).not.toThrow();
  });

  it('should throw an error for an invalid precedence', () => {
    const precedence = 'invalid';
    const liturgicalDayId = 'saint_john_damascene_priest_doctor';
    expect(() => assertLiturgicalDayHasPrecedence(precedence, liturgicalDayId)).toThrow();
  });
});
