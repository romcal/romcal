import { RomcalConfig } from '../models/config';

/**
 * The dates a rite computes for its own year.
 *
 * Almost every date romcal knows is reached by name at runtime: a definition says
 * `dateFn: 'palmSunday'` and the lookup finds the method. The engine itself calls only
 * the handful below, and those are the ones that have to be named in a contract,
 * because they are what the engine needs in order to lay out a year at all —
 * where it starts, and where each season begins and ends.
 *
 * Everything else is between the rite's definitions and the rite's own date class.
 * That is what lets 1962 provide Septuagesima and the Ember days without the engine
 * gaining a notion of either.
 */
export interface DatesProvider {
  /** The first day of the liturgical year, used to decide which year a date belongs to. */
  firstSundayOfAdvent(year?: number): Date;

  /**
   * Where each season of the given year begins and ends, keyed by the rite's own
   * season values.
   *
   * A plain record rather than a total map over a fixed enum: the set of seasons is
   * the rite's, and the engine only ever looks up the season a day already declares.
   */
  startOfSeasons(year?: number): Record<string, Date>;
  endOfSeasons(year?: number): Record<string, Date>;
}

/**
 * The class a rite supplies, rather than an instance: the engine builds one per year.
 *
 * The static `firstSundayOfAdvent` is needed before any year has been settled on,
 * to work out which liturgical year today falls in.
 */
export interface DatesConstructor {
  new (config: RomcalConfig, year: number): DatesProvider;
  firstSundayOfAdvent(year: number): Date;
}
