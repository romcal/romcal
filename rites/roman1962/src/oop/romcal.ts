import { Calendar, LiturgicalDayConfig, Romcal, RomcalConfig, RomcalConfigInput } from '@internal/rite-roman1969';

import { Calendar1962OOP } from './calendar';
import { LiturgicalDay1962OOP } from './liturgical-day';

// B2a placeholder; B2b+ will add 1962-specific config (localeId, includePropers,
// commemorationLimit, calendar-overlay constructor).
export type Romcal1962OOPConfigInput = RomcalConfigInput;

/**
 * 1962 `Romcal` subclass. B2a only overrides the `createCalendar` factory so
 * generated days land as `LiturgicalDay1962OOP`; 1962 config shape lands in B2b.
 */
export class Romcal1962OOP extends Romcal<LiturgicalDay1962OOP> {
  constructor(input?: Romcal1962OOPConfigInput) {
    super(input);
  }

  protected override createCalendar(
    config: RomcalConfig,
    ldConfig: LiturgicalDayConfig
  ): Calendar<LiturgicalDay1962OOP> {
    return new Calendar1962OOP(config, ldConfig);
  }
}
