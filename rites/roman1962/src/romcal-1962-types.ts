import type { CalendarOverlay1962 } from './calendars/types';
import type { CommemorationCapMode } from './rubrics/commemoration-cap';

export interface Romcal1962ConfigInput {
  /**
   * BCP-47-ish locale id used to translate celebration names and
   * structural labels (colors, ranks, seasons, months, weekdays).
   * Falls back through `en` to `la`. Default: `'la'`.
   */
  localeId?: string;

  /**
   * When true, `generateCalendar` runs `attachPropers` so each
   * celebration carries `propers` + `extraSections`. Default: false.
   */
  includePropers?: boolean;

  /**
   * Locale filter for *proper-text* content (introits, collects, …).
   * Independent of `localeId`, which controls names/labels.
   * Default: `[localeId]`.
   */
  propersLocales?: string[];

  /**
   * When true, also attach propers to commemoration entries. Off by
   * default to keep the payload small. Has no effect unless
   * `includePropers` is true.
   */
  attachToCommemorations?: boolean;

  /**
   * Cap the number of commemorations per day per Codex Rubricarum
   * 1960 §111–113. `'solemn'` = max 3 (sung Mass with Gloria/Credo),
   * `'private'` = max 1 (low Mass), `'all'` = no cap (default).
   */
  commemorationLimit?: CommemorationCapMode;

  /**
   * Regional/diocesan overlay to apply on top of the universal 1962
   * calendar (e.g. `SwitzerlandChur`). Merges diocesan feasts into the
   * sanctoral and wires up any per-locale name translations the overlay
   * ships. Leave unset for the pure universal calendar.
   */
  calendar?: CalendarOverlay1962;
}

export interface Romcal1962ConfigOutput {
  localeId: string;
  includePropers: boolean;
  propersLocales: string[];
  attachToCommemorations: boolean;
  commemorationLimit: CommemorationCapMode;
  calendarId?: string;
}
