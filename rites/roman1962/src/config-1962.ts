import { CalendarDef, RomcalConfig, RomcalConfigInput } from '@internal/rite-roman1969';
import type { Locale, MartyrologyCatalog } from '@internal/rite-roman1969';

import type { Overlay1962Name } from './calendars';

export type CommemorationCapMode = 'solemn' | 'private' | 'all';

/**
 * 1962 config input extensions. Layered on top of the 1969
 * `RomcalConfigInput` so every 1969 option still flows through; 1962-
 * only knobs live here instead of polluting the base type.
 */
export interface RomcalConfig1962Input extends RomcalConfigInput {
  /**
   * Commemoration cap mode. Per Rubricae 1960 §111–113:
   *   - `solemn` (sung Mass): at most 3 commemorations
   *   - `private` (low Mass): at most 1
   *   - `all` (default): no cap
   *
   * Enforced by `Calendar1962#postReduceDay`.
   */
  commemorationMode?: CommemorationCapMode;

  /**
   * Select a particular (regional / national / diocesan / abbey)
   * overlay on top of `GeneralRoman1962`. Pass either a string key
   * into {@link Overlays1962} (e.g. `'Switzerland_Basel'`) or a
   * {@link CalendarDef} subclass for custom overlays that don't live
   * in the registry. Unset = plain `GeneralRoman1962`.
   */
  particularCalendar?: Overlay1962Name | typeof CalendarDef;
}

/**
 * 1962 `RomcalConfig` subclass. Carries the 1962-specific commemoration
 * cap mode alongside the base 1969 config. Accessed by
 * `Calendar1962#postReduceDay` via a runtime instanceof check.
 */
export class RomcalConfig1962 extends RomcalConfig {
  readonly commemorationMode: CommemorationCapMode;

  constructor(
    input?: RomcalConfig1962Input,
    martyrologyCatalog?: MartyrologyCatalog,
    locale?: Locale,
    ParticularCalendar?: typeof CalendarDef,
    ProperOfTimeCalendar?: typeof CalendarDef
  ) {
    super(input, martyrologyCatalog, locale, ParticularCalendar, ProperOfTimeCalendar);
    this.commemorationMode = input?.commemorationMode ?? 'all';
  }
}
