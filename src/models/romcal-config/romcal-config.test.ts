import 'jest-extended';
import RomcalConfig from './romcal-config.model';
import dayjs from 'dayjs';

describe('getConfig()', () => {
  // eslint-disable-next-line prettier/prettier
  test('should get general config if country doesnt have default configurations', async () => {
    const resolvedConfig = await RomcalConfig.resolveConfig();
    const {
      year,
      scope,
      query,
      locale,
      epiphanyOnSunday,
      country,
      corpusChristiOnSunday,
      outputOptionalMemorials,
    } = new RomcalConfig(resolvedConfig);
    expect(year).toBe(dayjs.utc().year());
    expect(scope).toBe('gregorian');
    expect(query).toBeUndefined();
    expect(locale).toBe('en');
    expect(epiphanyOnSunday).toBeTrue();
    expect(country).toBe('general');
    expect(corpusChristiOnSunday).toBeTrue();
    expect(outputOptionalMemorials).toBe(false);
  });
});
