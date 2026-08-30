import { Unly1969Rubrics } from './rubrics/unly-1969';
import { Rite } from './types/rite';
import { Dates } from './utils/dates';

/**
 * The rite the engine falls back on: the Roman Rite as reformed in 1969.
 *
 * romcal was written against this calendar, and every existing caller expects it
 * without asking, so it stays the default. It is assembled from the same `Rite`
 * contract a second rite would use, which is what keeps the seam honest — if the 1969
 * calendar could only be produced through some shorter path the engine kept to
 * itself, the contract would not be one anything else could satisfy.
 */
export const Roman1969Rite: Rite = {
  dates: Dates,
  rubrics: Unly1969Rubrics,
};
