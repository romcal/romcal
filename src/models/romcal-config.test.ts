import Config from '@romcal/models/romcal-config';
import dayjs from 'dayjs';

describe('getConfig()', () => {
  // eslint-disable-next-line prettier/prettier
  test('should get general config if country doesnt have default configurations', async () => {
    const resolvedConfig = await Config.resolveConfig();
    const {
      year,
      type,
      query,
      locale,
      epiphanyOnSunday,
      country,
      corpusChristiOnSunday,
      christmastideIncludesTheSeasonOfEpiphany,
      christmastideEnds,
    } = new Config(resolvedConfig);
    expect(year).toBe(dayjs.utc().year());
    expect(type).toBe('calendar');
    expect(query).toBeUndefined();
    expect(locale).toBe('en');
    expect(epiphanyOnSunday).toBeTrue();
    expect(country).toBe('general');
    expect(corpusChristiOnSunday).toBeTrue();
    expect(christmastideIncludesTheSeasonOfEpiphany).toBeTruthy();
    expect(christmastideEnds).toBe('o');
  });
});
