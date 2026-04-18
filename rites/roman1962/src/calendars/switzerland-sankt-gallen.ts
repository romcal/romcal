import { CalendarDef } from '@internal/rite-roman1969';
import type { Inputs, RomcalConfigInput } from '@internal/rite-roman1969';

import { buildOverlayInputs, stampOverlayMeta, type OverlayInputEntry } from './overlay-support';
import { Switzerland } from './switzerland';

/**
 * Diocese of Sankt Gallen (Sancti Galli) — 1962 Rite. Inherits the
 * Swiss national overlay.
 *
 * St. Gallus (principal patron, Oct 16) and St. Othmar (co-patron,
 * Nov 16). Both added fresh.
 */
const ENTRIES: readonly OverlayInputEntry[] = [
  {
    mmdd: '10-16',
    fileKey: 'saint_gallus_abbot_patron_of_the_diocese',
    name: 'S. Galli Abbatis, Principalis Patroni Dioecesis',
    class1962: 1,
    rank1962: 'ClassI',
    numericRank: 6,
    mode: 'add',
    mass: { colors: ['White'], rubrics: { gloria: true, credo: true } },
    names: {
      la: 'S. Galli Abbatis, Principalis Patroni Dioecesis',
      en: 'St. Gall, Abbot, Principal Patron of the Diocese',
      de: 'Hl. Gallus, Abt, Hauptpatron des Bistums',
      fr: 'S. Gall, Abbé, Patron principal du Diocèse',
      it: 'S. Gallo, Abate, Patrono principale della Diocesi',
    },
  },
  {
    mmdd: '11-16',
    fileKey: 'saint_otmar_abbot_copatron_of_the_diocese',
    name: 'S. Othmari Abbatis, Compatroni Dioecesis',
    class1962: 2,
    rank1962: 'ClassII',
    numericRank: 5,
    mode: 'add',
    mass: { colors: ['White'], rubrics: { gloria: true, credo: true } },
    names: {
      la: 'S. Othmari Abbatis, Compatroni Dioecesis',
      en: 'St. Othmar, Abbot, Co-Patron of the Diocese',
      de: 'Hl. Otmar, Abt, Mitpatron des Bistums',
      fr: 'S. Othmar, Abbé, Co-patron du Diocèse',
      it: 'S. Otmaro, Abate, Compatrono della Diocesi',
    },
  },
];

export function buildSwitzerlandSanktGallenInputs(): Inputs {
  return buildOverlayInputs(ENTRIES);
}

export class Switzerland_Sankt_Gallen extends CalendarDef {
  ParentCalendars = [Switzerland];

  inputs: Inputs = buildSwitzerlandSanktGallenInputs();

  override updateConfig(input?: RomcalConfigInput): void {
    super.updateConfig(input);
    stampOverlayMeta(ENTRIES);
  }
}
