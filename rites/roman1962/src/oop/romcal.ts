import { Calendar, LiturgicalDayConfig, Romcal, RomcalConfig, RomcalConfigInput } from '@internal/rite-roman1969';

import { Calendar1962OOP } from './calendar';
import { LiturgicalDay1962OOP } from './liturgical-day';
import { ProperOfTime1962 } from './proper-of-time';

// B2a placeholder; B2b+ will add 1962-specific config (localeId, includePropers,
// commemorationLimit, calendar-overlay constructor).
export type Romcal1962OOPConfigInput = RomcalConfigInput;

/**
 * 1962 `Romcal` subclass. Overrides:
 * - `createConfig` to swap in `ProperOfTime1962` as the temporal cycle.
 * - `createCalendar` so generated days land as `LiturgicalDay1962OOP`.
 */
export class Romcal1962OOP extends Romcal<LiturgicalDay1962OOP> {
  constructor(input?: Romcal1962OOPConfigInput) {
    super(input);
  }

  protected override createConfig(input?: RomcalConfigInput): RomcalConfig {
    return new RomcalConfig(input, undefined, undefined, undefined, ProperOfTime1962);
  }

  protected override createCalendar(
    config: RomcalConfig,
    ldConfig: LiturgicalDayConfig
  ): Calendar<LiturgicalDay1962OOP> {
    return new Calendar1962OOP(config, ldConfig);
  }
}
