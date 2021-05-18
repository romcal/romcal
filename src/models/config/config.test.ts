import 'jest-extended';
import { RomcalConfig } from './config.model';
import dayjs from 'dayjs';

describe('getConfig()', () => {
  // eslint-disable-next-line prettier/prettier
  test('should get general config if country doesnt have default configurations', async () => {
    const resolvedConfig = await RomcalConfig.resolveConfig();
    const { year, scope, locale, epiphanyOnSunday, country, corpusChristiOnSunday, strictMode } = new RomcalConfig(
      resolvedConfig,
    );
    expect(year).toBe(dayjs.utc().year());
    expect(scope).toBe('gregorian');
    expect(locale).toBe('en');
    expect(epiphanyOnSunday).toBeTrue();
    expect(country).toBe('general');
    expect(corpusChristiOnSunday).toBeTrue();
    expect(strictMode).toBe(false);
  });
});
