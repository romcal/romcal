import { CalendarDef } from '@internal/rite-roman1969';
import type { Inputs, RomcalConfigInput } from '@internal/rite-roman1969';

import { Europe } from './europe';
import { buildOverlayInputs, stampOverlayMeta, type OverlayInputEntry } from './overlay-support';

/**
 * National-level Swiss overlay (1962 Rite). Holds feasts common to
 * every Swiss diocese; the diocesan overlays (Basel, Chur, Sankt
 * Gallen, Sion, Lugano, Lausanne-Genève-Fribourg) and the two
 * territorial abbeys (Saint-Maurice, Einsiedeln) inherit from it.
 *
 * Only entry today: St. Nicholas of Flüe (Bruder Klaus), canonised by
 * Pius XII on 15 May 1947. Swiss dioceses observe him on 25 September
 * (vs the Roman 21 March) and, as principal patron of the Swiss
 * Confederation, he outranks any universal feast on that day per
 * Rubricae 1960 §106 (Class I).
 */
const ENTRIES: readonly OverlayInputEntry[] = [
  {
    mmdd: '09-25',
    key: 'saint_nicholas_of_flue_hermit_patron_of_switzerland',
    name: 'S. Nicolai de Flüe Eremitae, Principalis Patroni Helvetiae',
    class1962: 1,
    mode: 'add',
    mass: {
      colors: ['White'],
      rubrics: { gloria: true, credo: true },
    },
    names: {
      la: 'S. Nicolai de Flüe Eremitae, Principalis Patroni Helvetiae',
      en: 'St. Nicholas of Flüe, Hermit, Principal Patron of Switzerland',
      de: 'Hl. Niklaus von Flüe, Einsiedler, Hauptpatron der Schweiz',
      fr: 'S. Nicolas de Flüe, Ermite, Patron principal de la Suisse',
      it: 'S. Nicolao della Flüe, Eremita, Patrono principale della Svizzera',
    },
  },
];

export function buildSwitzerlandInputs(): Inputs {
  return buildOverlayInputs(ENTRIES);
}

export class Switzerland extends CalendarDef {
  ParentCalendars = [Europe];

  inputs: Inputs = buildSwitzerlandInputs();

  override updateConfig(input?: RomcalConfigInput): void {
    super.updateConfig(input);
    // Re-stamp meta after super (which constructs parents → GR1962
    // stamps a default class for any shared key). Ensures `raise`
    // mode's class1962 bump survives.
    stampOverlayMeta(ENTRIES);
  }
}
