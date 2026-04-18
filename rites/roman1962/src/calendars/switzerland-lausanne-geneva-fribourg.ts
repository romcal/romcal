import { CalendarDef } from '@internal/rite-roman1969';
import type { Inputs, RomcalConfigInput } from '@internal/rite-roman1969';

import { buildOverlayInputs, stampOverlayMeta, type OverlayInputEntry } from './overlay-support';
import { Switzerland } from './switzerland';

/**
 * Diocese of Lausanne, Genève et Fribourg — 1962 Rite. Inherits the
 * Swiss national overlay.
 *
 * St. Nicholas of Myra is principal patron (the Fribourg cathedral is
 * his). His Dec 6 universal feast (Class III) is *raised* to Class I
 * for the diocese via `raise` mode — the input re-declares the same
 * universal id with new precedence, and the 1969 engine's
 * `LiturgicalDayDef` previousDef-merge lets the bump land in place.
 */
const ENTRIES: readonly OverlayInputEntry[] = [
  {
    mmdd: '12-06',
    fileKey: 'saint_nicholas_bishop_and_confessor',
    name: 'S. Nicolai Episcopi et Confessoris, Principalis Patroni Dioecesis',
    class1962: 1,
    rank1962: 'ClassI',
    numericRank: 6,
    mode: 'raise',
    names: {
      la: 'S. Nicolai Episcopi et Confessoris, Principalis Patroni Dioecesis',
      en: 'St. Nicholas, Bishop and Confessor, Principal Patron of the Diocese',
      de: 'Hl. Nikolaus, Bischof und Bekenner, Hauptpatron des Bistums',
      fr: 'S. Nicolas, Évêque et Confesseur, Patron principal du Diocèse',
      it: 'S. Nicola, Vescovo e Confessore, Patrono principale della Diocesi',
    },
  },
];

export function buildSwitzerlandLausanneGenevaFribourgInputs(): Inputs {
  return buildOverlayInputs(ENTRIES);
}

export class Switzerland_Lausanne_Geneva_Fribourg extends CalendarDef {
  ParentCalendars = [Switzerland];

  inputs: Inputs = buildSwitzerlandLausanneGenevaFribourgInputs();

  override updateConfig(input?: RomcalConfigInput): void {
    super.updateConfig(input);
    stampOverlayMeta(ENTRIES);
  }
}
