import { Rite } from '../types/rite';
import { Vocabulary } from '../types/vocabulary';

/**
 * The rite the engine is generating under.
 *
 * The engine has to ask *some* rite for dates, rubrics and Proper of Time, but which
 * rite that is belongs outside this package: 1969 registers `Roman1969Rite`, 1962 will
 * register its own. Same pattern as {@link registerBaseCalendar}.
 */

let registeredRite: unknown;

export const registerRite = <V extends Vocabulary>(rite: Rite<V>): void => {
  registeredRite = rite;
};

export const getRite = <V extends Vocabulary>(): Rite<V> => {
  if (!registeredRite) {
    throw new Error(
      'No rite has been registered. A rite must call registerRite() before building a calendar; ' +
        'importing the rite entry point (for example `romcal`) does this.'
    );
  }

  return registeredRite as Rite<V>;
};
