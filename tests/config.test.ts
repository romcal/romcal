import 'jest-extended';
import { RomcalConfig } from '@roman-rite/models/config';
import dayjs from 'dayjs';

describe('getConfig()', () => {
  test('should get general config if country doesnt have default configurations', async () => {
    const resolvedConfig = await RomcalConfig.resolveConfig();
    const { year, scope, locale, epiphanyOnSunday, country, corpusChristiOnSunday, strictMode } =
      new RomcalConfig(resolvedConfig);
    expect(year).toBe(dayjs.utc().year());
    expect(scope).toBe('gregorian');
    expect(locale).toBe('en');
    expect(epiphanyOnSunday).toBeTrue();
    expect(country).toBe('general');
    expect(corpusChristiOnSunday).toBeTrue();
    expect(strictMode).toBe(false);
  });
});
