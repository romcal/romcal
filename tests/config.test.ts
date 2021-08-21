import { CalendarScope } from '@romcal/constants/calendar-scope';
import { RomcalConfig } from '@romcal/models/config';
import { LiturgicalDayConfig } from '@romcal/models/liturgical-day-config';
import dayjs from 'dayjs';
import 'jest-extended';

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
