import { computeAnchors, type YearAnchors } from '@internal/proper-of-time';

import { buildLiturgicalYear1962, type ResolvedYear1962 } from './calendar-year';
import { buildDefinitions1962, type Definitions1962 } from './definitions';
import { attachPropers } from './propers';
import { Romcal1962Config } from './romcal-1962-config';
import type { Romcal1962ConfigInput, Romcal1962ConfigOutput } from './romcal-1962-types';
import { applyCommemorationCap } from './rubrics/commemoration-cap';
import type { Celebration1962 } from './rubrics/types';

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
 * High-level entry point for the 1962 Roman Rite. Wraps the
 * functional pipeline (`buildLiturgicalYear1962` + `attachPropers`)
 * with a single config object and per-instance year cache.
 *
 * The functional API stays available for one-shot scripts and tests;
 * use this class when you want a configured object you can pass
 * around.
 */
export class Romcal1962 {
  readonly #config: Romcal1962Config;
  readonly #computedYears = new Map<number, ResolvedYear1962>();
  readonly #anchors = new Map<number, YearAnchors>();
  #definitions?: Definitions1962;

  constructor(input: Romcal1962ConfigInput = {}) {
    this.#config = new Romcal1962Config(input);
  }

  get config(): Romcal1962ConfigOutput {
    return this.#config.toObject();
  }

  /**
   * Anchor-date library for `year`. Returns the `YearAnchors` bundle
   * (Easter, Advent I, Septuagesima, …) computed from
   * `@internal/proper-of-time`. Cached per year. Parity with 1969's
   * `Romcal#dates(year)` — 1962 has no rich `Dates` class (no weekday
   * iterators), so we expose the raw anchor set consumers can derive
   * everything else from.
   */
  dates(year: number | string): YearAnchors {
    const y = sanitizeYear(year);
    const cached = this.#anchors.get(y);
    if (cached) return cached;
    const fresh = computeAnchors(y);
    this.#anchors.set(y, fresh);
    return fresh;
  }

  /**
   * Catalog every celebration definition reachable from the
   * configured calendar — universal sancti, universal tempora, and
   * the overlay chain — without running a year computation. Parity
   * with 1969's `getAllDefinitions()`. Promise-wrapped so heavy JSON
   * parsing can yield to a microtask; result is memoized per
   * instance.
   */
  getAllDefinitions(): Promise<Definitions1962> {
    return new Promise((resolve, reject) => {
      try {
        if (!this.#definitions) {
          this.#definitions = buildDefinitions1962(this.#config.calendar);
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
  generateCalendar(year: number | string): Promise<ResolvedYear1962> {
    return new Promise((resolve, reject) => {
      try {
        const y = sanitizeYear(year);
        const cached = this.#computedYears.get(y);
        if (cached) {
          resolve(cached);
          return;
        }
        const built = buildLiturgicalYear1962(y, {
          translateName: this.#config.translateName,
          overlay: this.#config.calendar,
        });
        const withPropers = this.#config.includePropers
          ? attachPropers(built, {
              locales: this.#config.propersLocales,
              attachToCommemorations: this.#config.attachToCommemorations,
            })
          : built;
        const finished =
          this.#config.commemorationLimit === 'all'
            ? withPropers
            : applyCommemorationCap(withPropers, { mode: this.#config.commemorationLimit });
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
  async resolveDate(date: string): Promise<Celebration1962[] | undefined> {
    const y = yearOf(date);
    const cal = await this.generateCalendar(y);
    return cal[date];
  }
}
