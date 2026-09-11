import { Dates, ProperOfTime, Rite } from '@internal/generator';

import { Unly1969Rubrics } from './rubrics';
import { Roman1969Vocabulary } from './vocabulary';

/**
 * The Roman Rite as reformed in 1969: dates, UNLY rubrics, and the Proper of Time.
 *
 * Assembled here so the engine never embeds a 1969 default. Importing this rite's
 * entry registers it; the builder also takes it from the manifest.
 */
export const Roman1969Rite: Rite<Roman1969Vocabulary> = {
  dates: Dates,
  properOfTime: ProperOfTime,
  rubrics: Unly1969Rubrics,
};
