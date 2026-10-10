import { DatesConstructor } from './dates';
import { Rubrics } from './rubrics';
import { Vocabulary } from './vocabulary';

/**
 * Everything the engine has to be told, rather than assume, about the rite it is
 * generating a calendar for.
 *
 * The engine's job is the pipeline: resolve a definition to a date, decide what
 * happens when two land on the same one, and number the result. None of that requires
 * knowing that Advent has four Sundays or that Ordinary Time exists. What it does
 * require is somewhere to ask, and this is that place.
 *
 * A single object rather than a growing list of arguments, because these pieces are
 * only coherent together: a rite's dates produce the seasons its rubrics number.
 */
export interface Rite<V extends Vocabulary = Vocabulary> {
  /** The class the engine builds a year's dates from. */
  readonly dates: DatesConstructor<V>;

  /** The rules of precedence, ranks and seasons in force. */
  readonly rubrics: Rubrics<V>;
}
