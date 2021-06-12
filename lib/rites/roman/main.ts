import Temporale from './general-calendar/temporale';
import { GeneralRoman } from './general-calendar/general';
import { RomcalConfig, RomcalConfigInput } from './models/config';
import { RomcalCalendarScope } from '../../constants/scope';
import { Sanctorale } from './general-calendar/sanctorale';
import { CalendarDef } from './models/calendar-def';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function romcal(config?: RomcalConfigInput) {
  const romcalConfig = new RomcalConfig(config);

  const data =
    romcalConfig.scope === RomcalCalendarScope.Liturgical
      ? Temporale.liturgicalYearBuilder(romcalConfig.year)
      : Temporale.gregorianYearBuilder(romcalConfig.year);

  new Sanctorale().computeDates(data, romcalConfig);
  new GeneralRoman().computeDates(data, romcalConfig);

  // return data;
  return CalendarDef.computeCalendar(data);
}
