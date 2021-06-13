import Temporale from './general-calendar/temporale';
import { GeneralRoman } from './general-calendar/general';
import { RomcalConfig, RomcalConfigInput } from './models/config';
import { CalendarScope } from '../../constants/calendar-scope';
import { CalendarDef, LiturgicalCalendar } from './models/calendar-def';
import { Dates } from './utils/dates';

export default class Romcal {
  static dates = Dates;
  config: RomcalConfig;

  constructor(config?: RomcalConfigInput) {
    this.config = new RomcalConfig(config);
  }

  calendar(): Promise<LiturgicalCalendar> {
    return new Promise((resolve, reject) => {
      try {
        const data =
          this.config.scope === CalendarScope.Liturgical
            ? Temporale.liturgicalYearBuilder(this.config.year)
            : Temporale.gregorianYearBuilder(this.config.year);

        new GeneralRoman().buildDates(data, this.config);

        if (this.config.particularCalendar) {
          new this.config.particularCalendar().buildDates(data, this.config);
        }

        resolve(CalendarDef.generateCalendar(data));
      } catch (e) {
        reject(e);
      }
    });
  }
}

export { CalendarScope };
