import {
  Calendar,
  LiturgicalDay,
  LiturgicalDayConfig,
  LiturgicalDayDef,
  RomcalCalendarMetadata,
} from '@internal/rite-roman1969';

import { LiturgicalDay1962OOP } from './liturgical-day';

/**
 * 1962 subclass of `Calendar`. B2a only overrides the factory; B2d will add
 * `postReduceDay` (commemoration cap) + `resolveOccurrence` (forward transfer).
 */
export class Calendar1962OOP extends Calendar<LiturgicalDay1962OOP> {
  protected override createLiturgicalDay(
    def: LiturgicalDayDef,
    date: Date,
    ldConfig: LiturgicalDayConfig,
    calendar: RomcalCalendarMetadata,
    baseData: LiturgicalDay1962OOP | null,
    weekday: LiturgicalDay1962OOP | null
  ): LiturgicalDay1962OOP {
    return new LiturgicalDay1962OOP(
      def,
      date,
      ldConfig,
      calendar,
      baseData as LiturgicalDay | null,
      weekday as LiturgicalDay | null
    );
  }
}
