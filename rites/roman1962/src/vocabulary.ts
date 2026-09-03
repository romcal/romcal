import { Vocabulary } from '@internal/generator';

import { Precedence1962 } from './constants/precedences';
import { Rank1962 } from './constants/ranks';
import { Season1962 } from './constants/seasons';

/**
 * The vocabulary of the 1962 rite: its own classes, ranks and seasons, none of which the
 * 1969 rite has a name for.
 *
 * Periods are left open for now: the 1962 calendar's periods are not yet enumerated.
 */
export type Roman1962Vocabulary = Vocabulary<Precedence1962, Rank1962, Season1962>;
