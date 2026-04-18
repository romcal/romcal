import {
  Calendar,
  CalendarDef,
  LiturgicalDayConfig,
  Romcal,
  RomcalConfig,
  RomcalConfigInput,
} from '@internal/rite-roman1969';

import { Calendar1962 } from './calendar';
import { Overlays1962 } from './calendars';
import { GeneralRoman1962 } from './calendars/general-roman';
import { RomcalConfig1962, RomcalConfig1962Input } from './config-1962';
import { LiturgicalDay1962 } from './liturgical-day';
import { ProperOfTime1962 } from './proper-of-time-def';

/**
 * Public config input for {@link Romcal1962}. Extends the 1969 input
 * with 1962-specific knobs (see {@link RomcalConfig1962Input}).
 */
export type Romcal1962ConfigInput = RomcalConfig1962Input;

/**
 * 1962 `Romcal` subclass. Overrides:
 * - `createConfig` to swap in `ProperOfTime1962` as the temporal cycle and
 *   `GeneralRoman1962` as the particular calendar (sanctoral + proper
 *   kalendar), and to return a {@link RomcalConfig1962} that carries the
 *   1962-specific `commemorationMode` cap setting.
 * - `createCalendar` so generated days land as `LiturgicalDay1962`.
 *
 * Note: the 1969 `GeneralRoman` is still pushed into `RomcalConfig.calendarsDef`
 * because the engine's particular-calendar seam layers on top of it. Its
 * inputs use disjoint IDs from the 1962 fileKeys, so there is no silent
 * override; stale 1969 memorials will be filtered by B2d's `postReduceDay`.
 */
export class Romcal1962 extends Romcal<LiturgicalDay1962> {
  constructor(input?: Romcal1962ConfigInput) {
    super(input);
  }

  protected override createConfig(input?: RomcalConfigInput): RomcalConfig {
    // `RomcalConfig1962Input extends RomcalConfigInput`, so the parent's
    // `createConfig(config)` relays the original input through unchanged;
    // the cast below is just a type-level widening from the parent signature.
    const input1962 = input as RomcalConfig1962Input | undefined;

    // Resolve the particular-calendar selector. Accepts a string key
    // into `Overlays1962` or a CalendarDef subclass directly; defaults
    // to the plain 1962 sanctoral (`GeneralRoman1962`). All registered
    // overlays chain via `ParentCalendars` back to `GeneralRoman1962`,
    // so the engine's parent traversal builds the full stack in order
    // (GeneralRoman1962 → Europe → Country → Diocese).
    let particular: typeof CalendarDef = GeneralRoman1962;
    const selector = input1962?.particularCalendar;
    if (selector !== undefined) {
      if (typeof selector === 'string') {
        const cls = Overlays1962[selector];
        if (!cls) {
          throw new Error(`Unknown 1962 particular calendar overlay: '${selector}'`);
        }
        particular = cls as unknown as typeof CalendarDef;
      } else {
        particular = selector;
      }
    }

    return new RomcalConfig1962(input1962, undefined, undefined, particular, ProperOfTime1962);
  }

  protected override createCalendar(config: RomcalConfig, ldConfig: LiturgicalDayConfig): Calendar<LiturgicalDay1962> {
    return new Calendar1962(config, ldConfig);
  }
}
