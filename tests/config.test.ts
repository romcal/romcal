import Romcal from '../lib';

const { RomcalConfig, LiturgicalDayConfig } = Romcal;

describe('getConfig()', () => {
  test('should get general config if country does not have default configurations', async () => {
    const config = new RomcalConfig();
    const liturgicalDayConfig = new LiturgicalDayConfig(config);
    const { year, scope, epiphanyOnSunday, corpusChristiOnSunday, ascensionOnSunday } =
      liturgicalDayConfig.getConfigObject();

    expect(year).toBe(new Date().getUTCFullYear());
    expect(scope).toBe('gregorian');
    expect(epiphanyOnSunday).toBeFalse();
    expect(corpusChristiOnSunday).toBeFalse();
    expect(ascensionOnSunday).toBeFalse();
  });
});
