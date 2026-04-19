import { CalendarDef } from '@internal/rite-roman1969';
import type { Inputs, RomcalConfigInput } from '@internal/rite-roman1969';

import { buildOverlayInputs, stampOverlayMeta, type OverlayInputEntry } from './overlay-support';
import { Switzerland } from './switzerland';

/**
 * Diocese of Lugano (Luganensis) — 1962 Rite. Inherits the Swiss
 * national overlay.
 *
 * St. Charles Borromeo (Archbishop of Milan) is principal patron;
 * Lugano was part of the Milanese ecclesiastical province until 1888.
 * His universal feast on Nov 4 (Class III) is *raised* to Class I for
 * the diocese. St. Abbondio (Abundius) of Como is secondary patron,
 * added fresh on Aug 31.
 */
const ENTRIES: readonly OverlayInputEntry[] = [
  {
    mmdd: '11-04',
    fileKey: 'saint_charles_borromeo_bishop_and_confessor',
    name: 'S. Caroli Episcopi et Confessoris, Principalis Patroni Dioecesis',
    class1962: 1,
    mode: 'raise',
    names: {
      la: 'S. Caroli Episcopi et Confessoris, Principalis Patroni Dioecesis',
      en: 'St. Charles Borromeo, Bishop and Confessor, Principal Patron of the Diocese',
      de: 'Hl. Karl Borromäus, Bischof und Bekenner, Hauptpatron des Bistums',
      fr: 'S. Charles Borromée, Évêque et Confesseur, Patron principal du Diocèse',
      it: 'S. Carlo Borromeo, Vescovo e Confessore, Patrono principale della Diocesi',
    },
  },
  {
    mmdd: '08-31',
    fileKey: 'saint_abundius_of_como_bishop_copatron_of_the_diocese',
    name: 'S. Abundii Episcopi et Confessoris, Compatroni Dioecesis',
    class1962: 2,
    mode: 'add',
    mass: { colors: ['White'], rubrics: { gloria: true, credo: true } },
    names: {
      la: 'S. Abundii Episcopi et Confessoris, Compatroni Dioecesis',
      en: 'St. Abundius, Bishop and Confessor, Co-Patron of the Diocese',
      de: 'Hl. Abundius, Bischof und Bekenner, Mitpatron des Bistums',
      fr: 'S. Abundius, Évêque et Confesseur, Co-patron du Diocèse',
      it: 'S. Abbondio, Vescovo e Confessore, Compatrono della Diocesi',
    },
  },
];

export function buildSwitzerlandLuganoInputs(): Inputs {
  return buildOverlayInputs(ENTRIES);
}

export class Switzerland_Lugano extends CalendarDef {
  ParentCalendars = [Switzerland];

  inputs: Inputs = buildSwitzerlandLuganoInputs();

  override updateConfig(input?: RomcalConfigInput): void {
    super.updateConfig(input);
    stampOverlayMeta(ENTRIES);
  }
}
