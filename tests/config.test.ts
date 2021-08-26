import dayjs from 'dayjs';
import 'jest-extended';
import { RomcalConfig } from '../lib/models/config';
import { CalendarScope } from '../lib/constants/calendar-scope';
import { LiturgicalDayConfig } from '../lib/models/liturgical-day-config';

describe('getConfig()', () => {
  test('should get general config if country doesnt have default configurations', async () => {
    const config = new RomcalConfig();
    const liturgicalDayConfig = new LiturgicalDayConfig(config);
    const { year, scope, epiphanyOnSunday, corpusChristiOnSunday, ascensionOnSunday } =
      liturgicalDayConfig.getConfigObject();

    expect(year).toBe(dayjs.utc().year());
    expect(scope).toBe(CalendarScope.Gregorian);
    expect(epiphanyOnSunday).toBeTrue();
    expect(corpusChristiOnSunday).toBeTrue();
    expect(ascensionOnSunday).toBeFalse();
  });
});
