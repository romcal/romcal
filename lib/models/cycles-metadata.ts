import {
  ProperCycle,
  PSALTER_WEEKS,
  PsalterWeekCycle,
  SUNDAY_CYCLES,
  SundayCycle,
  WEEKDAY_CYCLES,
  WeekdayCycle,
} from '../constants/cycles';
import { BaseCyclesMetadata, PlainCyclesMetadata } from '../types/cycles-metadata';
import { RomcalCalendarMetadata } from '../types/liturgical-day';
import { getUtcDateFromString } from '../utils/dates';

import { RomcalConfig } from './config';

/**
 * A cycle metadata object, based on the contextual liturgical day & year
 */
export class CyclesMetadata implements BaseCyclesMetadata {
  properCycle: ProperCycle;

  #properCycleName?: string;

  sundayCycle: SundayCycle;

  #sundayCycleName?: string;

  weekdayCycle: WeekdayCycle;

  #weekdayCycleName?: string;

  psalterWeek: PsalterWeekCycle;

  #psalterWeekName?: string;

  readonly #config: RomcalConfig;

  constructor(date: Date, calendar: RomcalCalendarMetadata, properCycle: ProperCycle, config: RomcalConfig) {
    this.#config = config;

    const year = parseInt(calendar.startOfLiturgicalYear, 10);

    // Compute cycle of the liturgical year,
    // and cache the data since they are the same for every day of the year
    if (!this.#config.cyclesCache[year]) {
      const firstSundayOfAdvent = getUtcDateFromString(calendar.startOfLiturgicalYear);

      let sundayCycle: SundayCycle;
      let weekdayCycle: WeekdayCycle;

      // Formula to calculate Sunday cycle (Year A, B, C)
      const thisSundayCycleIndex: number = (year + 2) % 3;
      const nextSundayCycleIndex: number = (year + 3) % 3;

      // If the date is on or after the First Sunday of Advent,
      // it is the next liturgical cycle
      if (date.getTime() >= firstSundayOfAdvent.getTime()) {
        sundayCycle = SUNDAY_CYCLES[nextSundayCycleIndex];
        weekdayCycle = WEEKDAY_CYCLES[year % 2];
      } else {
        sundayCycle = SUNDAY_CYCLES[thisSundayCycleIndex];
        weekdayCycle = WEEKDAY_CYCLES[(year + 1) % 2];
      }

      this.#config.cyclesCache[year] = {
        sundayCycle,
        weekdayCycle,
      };
    }

    // Psalter week cycle restart to 1 at the beginning of each season.
    // Except during the four first days of lent (ash wednesday to the next saturday),
    // which are in week 4, to start on week 1 after the first sunday of lent.
    const weekIndex = (calendar.weekOfSeason % 4) - 1;
    const psalterWeek = PSALTER_WEEKS[weekIndex > -1 ? weekIndex : 3];

    this.properCycle = properCycle;
    this.sundayCycle = this.#config.cyclesCache[year].sundayCycle;
    this.weekdayCycle = this.#config.cyclesCache[year].weekdayCycle;
    this.psalterWeek = psalterWeek;
  }

  get properCycleName(): string {
    if (this.#properCycleName !== undefined) return this.#properCycleName;
    this.#properCycleName = this.#config.i18next.t(`cycles:${this.properCycle.toLowerCase()}`);
    return this.#properCycleName;
  }

  get sundayCycleName(): string {
    if (this.#sundayCycleName !== undefined) return this.#sundayCycleName;
    this.#sundayCycleName = this.#config.i18next.t(`cycles:sunday_${this.sundayCycle.toLowerCase()}`);
    return this.#sundayCycleName;
  }

  get weekdayCycleName(): string {
    if (this.#weekdayCycleName !== undefined) return this.#weekdayCycleName;
    this.#weekdayCycleName = this.#config.i18next.t(`cycles:weekday_${this.weekdayCycle.toLowerCase()}`);
    return this.#weekdayCycleName;
  }

  get psalterWeekName(): string {
    if (this.#psalterWeekName !== undefined) return this.#psalterWeekName;
    this.#psalterWeekName = this.#config.i18next.t(`cycles:psalter_${this.psalterWeek.toLowerCase()}`);
    return this.#psalterWeekName;
  }

  toObject(): PlainCyclesMetadata {
    return {
      properCycle: this.properCycle,
      properCycleName: this.properCycleName,
      sundayCycle: this.sundayCycle,
      sundayCycleName: this.sundayCycleName,
      weekdayCycle: this.weekdayCycle,
      weekdayCycleName: this.weekdayCycleName,
      psalterWeek: this.psalterWeek,
      psalterWeekName: this.psalterWeekName,
    };
  }
}
