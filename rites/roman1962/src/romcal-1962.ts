import { MONTHS, WEEKDAYS } from '@internal/constants';
import type { YearAnchors } from '@internal/proper-of-time';

import type { LiturgicalCalendar1962 } from './calendar-year';
import { Colors1962, COLORS_1962, isColor1962 } from './constants/colors-1962';
import { RANKS_1962, Rank1962Values } from './constants/rank-1962';
import { Seasons1962, SEASONS_1962 } from './constants/seasons-1962';
import { buildAllDefinitions } from './definitions';
import { Calendar1962 } from './models/calendar';
import { Romcal1962Config } from './models/config';
import type { LiturgicalDay1962 } from './models/liturgical-day';
import { LiturgicalDayConfig1962 } from './models/liturgical-day-config';
import type { LiturgicalDayDefinitions1962 } from './models/liturgical-day-def';
import type { Romcal1962ConfigInput, Romcal1962ConfigOutput } from './romcal-1962-types';

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

function yearOf(isoDate: string): number {
  if (!ISO_DATE.test(isoDate)) {
    throw new Error(`Invalid ISO date: ${isoDate} (expected YYYY-MM-DD)`);
  }
  return Number.parseInt(isoDate.slice(0, 4), 10);
}

function sanitizeYear(year: number | string): number {
  const y = typeof year === 'string' ? Number.parseInt(year, 10) : year;
  if (!Number.isInteger(y) || y < 0 || y > 9999) {
    throw new Error(`Invalid year: ${year}`);
  }
  return y;
}

/**
 * High-level entry point for the 1962 Roman Rite. Holds the shared
 * `Romcal1962Config` and caches per-year `LiturgicalDayConfig1962`
 * and computed calendars, delegating the actual year build to a
 * `Calendar1962` orchestrator.
 *
 * Parity with 1969's `Romcal`: same indirection
 * (`Romcal → LiturgicalDayConfig → Calendar → LiturgicalDay`). The
 * functional API (`buildLiturgicalYear1962`, `attachPropers`, …)
 * remains available for one-shot scripts and tests; use this class
 * when you want a configured object you can pass around.
 */
export class Romcal1962 {
  readonly #config: Romcal1962Config;
  readonly #computedYears = new Map<number, LiturgicalCalendar1962>();
  readonly #ldConfigs = new Map<number, LiturgicalDayConfig1962>();
  #definitions?: LiturgicalDayDefinitions1962;

  constructor(input: Romcal1962ConfigInput = {}) {
    this.#config = new Romcal1962Config(input);
  }

  get config(): Romcal1962ConfigOutput {
    return this.#config.toObject();
  }

  #getLdConfig(year: number): LiturgicalDayConfig1962 {
    const cached = this.#ldConfigs.get(year);
    if (cached) return cached;
    const fresh = new LiturgicalDayConfig1962(this.#config, year);
    this.#ldConfigs.set(year, fresh);
    return fresh;
  }

  /**
   * Anchor-date library for `year`. Returns the `YearAnchors` bundle
   * (Easter, Advent I, Septuagesima, …) computed from
   * `@internal/proper-of-time`. Cached per year via the underlying
   * `LiturgicalDayConfig1962`. Parity with 1969's `Romcal#dates(year)`
   * — 1962 has no rich `Dates` class (no weekday iterators), so we
   * expose the raw anchor set consumers can derive everything else
   * from.
   */
  dates(year: number | string): YearAnchors {
    return this.#getLdConfig(sanitizeYear(year)).anchors;
  }

  /**
   * Catalog every celebration definition reachable from the
   * configured calendar — universal sancti, universal tempora, and
   * the overlay chain — without running a year computation. Parity
   * with 1969's `getAllDefinitions()`. Promise-wrapped so heavy JSON
   * parsing can yield to a microtask; result is memoized per
   * instance.
   */
  getAllDefinitions(): Promise<LiturgicalDayDefinitions1962> {
    return new Promise((resolve, reject) => {
      try {
        if (!this.#definitions) {
          this.#definitions = buildAllDefinitions(this.#config.calendar);
        }
        resolve(this.#definitions);
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Build the liturgical year for `year`. Wrapped in a Promise so
   * heavy computation can be scheduled in a microtask. Repeated
   * calls with the same `year` return the cached value.
   */
  generateCalendar(year: number | string): Promise<LiturgicalCalendar1962> {
    return new Promise((resolve, reject) => {
      try {
        const y = sanitizeYear(year);
        const cached = this.#computedYears.get(y);
        if (cached) {
          resolve(cached);
          return;
        }
        const finished = new Calendar1962(this.#config, this.#getLdConfig(y)).generateCalendar();
        this.#computedYears.set(y, finished);
        resolve(finished);
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Look up every celebration resolved for `date` (ISO `YYYY-MM-DD`).
   * Returns the primary at index 0 and commemorations after.
   * Returns undefined if the date has no resolved celebrations
   * (e.g. an empty tempora slot before Advent in some years).
   */
  async resolveDate(date: string): Promise<LiturgicalDay1962[] | undefined> {
    const y = yearOf(date);
    const cal = await this.generateCalendar(y);
    return cal[date];
  }

  /**
   * Look up a single celebration by its stable id (key). Parity with
   * 1969's `Romcal#getOneLiturgicalDay(id, options)`.
   *
   * - `undefined` — `id` is not in this calendar's definitions.
   * - `null` — `id` is defined but has no dated occurrence in `year`.
   * - `LiturgicalDay1962` — the dated celebration.
   *
   * Default behavior (`computeInWholeYear: false`) returns a *partial*:
   * the celebration at its natural date from tempora/sancti, without
   * running occurrence, transfer, or commemoration rules. Useful for
   * cheap lookups and metadata queries.
   *
   * With `computeInWholeYear: true`, the full year is generated and
   * the celebration is returned in its final post-rubric form — which
   * may sit on a different date than its natural one if it was
   * forward-transferred.
   */
  getOneLiturgicalDay(
    id: string,
    options: { year?: number | string; computeInWholeYear?: boolean } = { computeInWholeYear: false }
  ): Promise<LiturgicalDay1962 | null | undefined> {
    return new Promise((resolve, reject) => {
      (async (): Promise<void> => {
        try {
          const y = sanitizeYear(options.year ?? new Date().getUTCFullYear());
          const defs = await this.getAllDefinitions();
          if (!Object.prototype.hasOwnProperty.call(defs, id)) {
            resolve(undefined);
            return;
          }

          if (options.computeInWholeYear) {
            const cal = await this.generateCalendar(y);
            for (const celebrations of Object.values(cal)) {
              for (const c of celebrations) {
                if (c.key === id) {
                  resolve(c);
                  return;
                }
              }
            }
            resolve(null);
            return;
          }

          resolve(new Calendar1962(this.#config, this.#getLdConfig(y)).getOneLiturgicalDay(id));
        } catch (e) {
          reject(e);
        }
      })();
    });
  }

  // -- Static accessors: parity with 1969's `Romcal.*` statics. --
  //
  // Shared constants (MONTHS, WEEKDAYS) come from `@internal/constants`
  // and are identical between rites. Rite-specific constants (colors,
  // ranks, seasons) differ — 1962 ships its own set under the same
  // static-access pattern consumers already expect.

  // constants/months.ts (shared via @internal/constants)
  static MONTHS = MONTHS;

  // constants/weekdays.ts (shared via @internal/constants)
  static WEEKDAYS = WEEKDAYS;

  // constants/colors-1962.ts
  static Colors = Colors1962;

  static COLORS = COLORS_1962;

  static isColor = isColor1962;

  // constants/rank-1962.ts
  static Ranks = Rank1962Values;

  static RANKS = RANKS_1962;

  // constants/seasons-1962.ts
  static Seasons = Seasons1962;

  static SEASONS = SEASONS_1962;
}
