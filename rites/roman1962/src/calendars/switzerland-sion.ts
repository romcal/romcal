import { CalendarDef } from '@internal/rite-roman1969';
import type { Inputs, RomcalConfigInput } from '@internal/rite-roman1969';

import { buildOverlayInputs, stampOverlayMeta, type OverlayInputEntry } from './overlay-support';
import { Switzerland } from './switzerland';

/**
 * Diocese of Sion (Sedunensis) — 1962 Rite. Inherits the Swiss
 * national overlay.
 *
 * St. Theodore (Theodule) of Octodurum, first historical bishop of
 * Valais, principal patron. Aug 16 is the Sion-proper date; in the
 * universal calendar that day is St. Joachim (Class II), which drops
 * to commemoration under the 1962 occurrence resolver.
 */
const ENTRIES: readonly OverlayInputEntry[] = [
  {
    mmdd: '08-16',
    fileKey: 'saint_theodore_of_octodurus_bishop_patron_of_the_diocese',
    name: 'S. Theodori Episcopi, Principalis Patroni Dioecesis',
    class1962: 1,
    rank1962: 'ClassI',
    numericRank: 6,
    mode: 'add',
    mass: { colors: ['White'], rubrics: { gloria: true, credo: true } },
    names: {
      la: 'S. Theodori Episcopi, Principalis Patroni Dioecesis',
      en: 'St. Theodore, Bishop, Principal Patron of the Diocese',
      de: 'Hl. Theodul, Bischof, Hauptpatron des Bistums',
      fr: 'S. Théodule, Évêque, Patron principal du Diocèse',
      it: 'S. Teodulo, Vescovo, Patrono principale della Diocesi',
    },
  },
];

export function buildSwitzerlandSionInputs(): Inputs {
  return buildOverlayInputs(ENTRIES);
}

export class Switzerland_Sion extends CalendarDef {
  ParentCalendars = [Switzerland];

  inputs: Inputs = buildSwitzerlandSionInputs();

  override updateConfig(input?: RomcalConfigInput): void {
    super.updateConfig(input);
    stampOverlayMeta(ENTRIES);
  }
}
