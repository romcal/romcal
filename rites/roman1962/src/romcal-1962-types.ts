import type { CommemorationCapMode } from './rubrics/commemoration-cap';

export interface Romcal1962ConfigInput {
  /**
   * When true, `generateCalendar` runs `attachPropers` so each
   * celebration carries `propers` + `extraSections`. Default: false.
   */
  includePropers?: boolean;

  /**
   * Locale filter forwarded to `attachPropers`. Currently only `la`
   * ships content; other locales return empty strings. Default: ['la'].
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
}

export interface Romcal1962ConfigOutput {
  includePropers: boolean;
  propersLocales: string[];
  attachToCommemorations: boolean;
  commemorationLimit: CommemorationCapMode;
}
