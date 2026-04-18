import { Calendar, LiturgicalDayConfig, Romcal, RomcalConfig, RomcalConfigInput } from '@internal/rite-roman1969';

import { Calendar1962OOP } from './calendar';
import { GeneralRoman1962 } from './general-roman';
import { LiturgicalDay1962OOP } from './liturgical-day';
import { ProperOfTime1962 } from './proper-of-time';

// B2a placeholder; B2b+ will add 1962-specific config (localeId, includePropers,
// commemorationLimit, calendar-overlay constructor).
export type Romcal1962OOPConfigInput = RomcalConfigInput;

/**
 * 1962 `Romcal` subclass. Overrides:
 * - `createConfig` to swap in `ProperOfTime1962` as the temporal cycle and
 *   `GeneralRoman1962` as the particular calendar (sanctoral + proper
 *   kalendar).
 * - `createCalendar` so generated days land as `LiturgicalDay1962OOP`.
 *
 * Note: the 1969 `GeneralRoman` is still pushed into `RomcalConfig.calendarsDef`
 * because the engine's particular-calendar seam layers on top of it. Its
 * inputs use disjoint IDs from the 1962 fileKeys, so there is no silent
 * override; stale 1969 memorials will be filtered by B2d's `postReduceDay`.
 */
export class Romcal1962OOP extends Romcal<LiturgicalDay1962OOP> {
  constructor(input?: Romcal1962OOPConfigInput) {
    super(input);
  }

  protected override createConfig(input?: RomcalConfigInput): RomcalConfig {
    return new RomcalConfig(input, undefined, undefined, GeneralRoman1962, ProperOfTime1962);
  }

  protected override createCalendar(
    config: RomcalConfig,
    ldConfig: LiturgicalDayConfig
  ): Calendar<LiturgicalDay1962OOP> {
    return new Calendar1962OOP(config, ldConfig);
  }
}
