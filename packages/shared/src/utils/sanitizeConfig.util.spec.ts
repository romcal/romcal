import { CalendarScope } from '../constants';
import { sanitizeConfig } from './sanitizeConfig.util';

describe('sanitizeConfig', () => {
  it('should return default values if no config provided', () => {
    const config = sanitizeConfig();

    expect(config.year).toBe(new Date().getFullYear());
    expect(config.calendar).toBeUndefined();
    expect(config.properOfTime).toBeUndefined();
    expect(config.locale).toBeUndefined();
    expect(config.scope).toBe(CalendarScope.Gregorian);
    expect(config.epiphanyOnSunday).toBe(false);
    expect(config.ascensionOnSunday).toBe(false);
    expect(config.corpusChristiOnSunday).toBe(false);
  });

  it('should throw an error if year is invalid', () => {
    const invalidYear = 'invalid' as unknown as number;

    expect(() => sanitizeConfig({ year: invalidYear })).toThrow('The provided year is incorrect.');
  });

  it('should use default values for missing properties', () => {
    const config = sanitizeConfig({});

    expect(config.year).toBe(new Date().getFullYear());
    expect(config.calendar).toBeUndefined();
    expect(config.properOfTime).toBeUndefined();
    expect(config.locale).toBeUndefined();
    expect(config.scope).toBe(CalendarScope.Gregorian);
    expect(config.epiphanyOnSunday).toBe(false);
    expect(config.ascensionOnSunday).toBe(false);
    expect(config.corpusChristiOnSunday).toBe(false);
  });

  it('should prioritize values in config over values in nested objects', () => {
    const config = sanitizeConfig({
      year: 2022,
      epiphanyOnSunday: true,
      calendar: { config: { epiphanyOnSunday: false, ascensionOnSunday: false, corpusChristiOnSunday: false } },
    });

    expect(config.year).toBe(2022);
    expect(config.calendar?.config?.epiphanyOnSunday).toBe(false);
    expect(config.epiphanyOnSunday).toBe(true);
  });
});
