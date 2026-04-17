import { buildLiturgicalYear1962 } from '../calendar-year';
import { buildProperOfTime1962 } from '../proper-of-time';
import { attachPropers } from '../propers';
import { celebrationFromSancti, celebrationFromTempora } from '../rubrics/candidates';
import { applyCommemorationCap } from '../rubrics/commemoration-cap';
import { buildSanctoral1962 } from '../sanctoral';

import { Romcal1962Config } from './config';
import type { LiturgicalDay1962, LiturgicalCalendar1962 } from './liturgical-day';
import { LiturgicalDayConfig1962 } from './liturgical-day-config';

/**
 * Year-scoped orchestrator: wraps the functional pipeline
 * (`buildLiturgicalYear1962` + optional `attachPropers` + optional
 * commemoration cap) with the shared `(config, ldConfig)` context.
 *
 * Parity with 1969's `Calendar` class. 1969's generator carries
 * precedence/optional-memorial/allowSimilarRank logic inline; 1962's
 * equivalent already lives in the rubrics module
 * (`resolveOccurrence` + `selectCommemorations`), so this class is a
 * thin composition wrapper.
 */
export class Calendar1962 {
  readonly #config: Romcal1962Config;
  readonly #ldConfig: LiturgicalDayConfig1962;

  constructor(config: Romcal1962Config, ldConfig: LiturgicalDayConfig1962) {
    this.#config = config;
    this.#ldConfig = ldConfig;
  }

  /**
   * Resolve the full liturgical year: build, attach propers when
   * configured, and apply the commemoration cap when configured.
   */
  generateCalendar(): LiturgicalCalendar1962 {
    const built = buildLiturgicalYear1962(this.#ldConfig.year, {
      translateName: this.#config.translateName,
      overlay: this.#config.calendar,
    });
    const withPropers = this.#config.includePropers
      ? attachPropers(built, {
          locales: this.#config.propersLocales,
          attachToCommemorations: this.#config.attachToCommemorations,
        })
      : built;
    return this.#config.commemorationLimit === 'all'
      ? withPropers
      : applyCommemorationCap(withPropers, { mode: this.#config.commemorationLimit });
  }

  /**
   * Partial single-day lookup by key. Returns the celebration at its
   * natural date from tempora/sancti, **without** running occurrence,
   * transfer, or commemoration rules. Returns `null` when the key has
   * no dated occurrence in this year (e.g. a leap-day saint in a
   * non-leap year).
   */
  getOneLiturgicalDay(id: string): LiturgicalDay1962 | null {
    const tempora = buildProperOfTime1962(this.#ldConfig.year);
    for (const [date, entry] of tempora) {
      if (entry.temporaKey === id) {
        return celebrationFromTempora(entry, date, this.#config.translateName);
      }
    }

    const sanctoral = buildSanctoral1962(this.#ldConfig.year, { overlay: this.#config.calendar });
    for (const [date, entries] of sanctoral) {
      for (const entry of entries) {
        if (entry.fileKey === id) {
          return celebrationFromSancti(entry, date, this.#config.translateName);
        }
      }
    }

    return null;
  }
}
