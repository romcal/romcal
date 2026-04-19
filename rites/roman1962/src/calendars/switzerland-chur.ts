import { CalendarDef } from '@internal/rite-roman1969';
import type { Inputs, RomcalConfigInput } from '@internal/rite-roman1969';

import { buildOverlayInputs, stampOverlayMeta, type OverlayInputEntry } from './overlay-support';
import { Switzerland } from './switzerland';

/**
 * Diocese of Chur (Curiensis) — 1962 Rite. Inherits the Swiss
 * national overlay. Principal patron: St. Lucius (Dec 3). Secondary:
 * St. Florinus of Remüs (Nov 17). Ss. Placidus & Sigisbert (Jul 11)
 * as co-founders of Disentis Abbey; St Gerold of Einsiedeln (Apr 19)
 * as Class IV commemoration.
 */
const ENTRIES: readonly OverlayInputEntry[] = [
  {
    mmdd: '12-03',
    key: 'saint_lucius_of_chur_bishop_and_martyr_patron',
    name: 'S. Lucii Episcopi et Martyris, Principalis Patroni Dioecesis',
    class1962: 1,
    mode: 'add',
    mass: { colors: ['Red'], rubrics: { gloria: true, credo: true } },
    names: {
      la: 'S. Lucii Episcopi et Martyris, Principalis Patroni Dioecesis',
      en: 'St. Lucius, Bishop and Martyr, Principal Patron of the Diocese',
      de: 'Hl. Luzius, Bischof und Martyrer, Hauptpatron des Bistums',
      fr: 'S. Lucius, Évêque et Martyr, Patron principal du Diocèse',
      it: 'S. Lucio, Vescovo e Martire, Patrono principale della Diocesi',
    },
  },
  {
    mmdd: '07-11',
    key: 'saints_placidus_and_sigisbert_martyrs',
    name: 'Ss. Placidi Martyris et Sigisberti Confessoris',
    class1962: 3,
    mode: 'add',
    mass: { colors: ['Red'], rubrics: { gloria: true } },
    names: {
      la: 'Ss. Placidi Martyris et Sigisberti Confessoris',
      en: 'Sts. Placidus, Martyr, and Sigisbert, Confessor',
      de: 'Hll. Placidus, Martyrer, und Sigisbert, Bekenner',
      fr: 'Ss. Placide, Martyr, et Sigisbert, Confesseur',
      it: 'Ss. Placido, Martire, e Sigisberto, Confessore',
    },
  },
  {
    mmdd: '11-17',
    key: 'saint_florinus_of_remus_confessor',
    name: 'S. Florini Confessoris',
    class1962: 3,
    mode: 'add',
    mass: { colors: ['White'], rubrics: { gloria: true } },
    names: {
      la: 'S. Florini Confessoris',
      en: 'St. Florinus, Confessor',
      de: 'Hl. Florin, Bekenner',
      fr: 'S. Florin, Confesseur',
      it: 'S. Florino, Confessore',
    },
  },
  {
    mmdd: '04-19',
    key: 'saint_gerold_of_einsiedeln_hermit',
    name: 'S. Geroldi Eremitae',
    class1962: 4,
    mode: 'add',
    mass: { colors: ['White'] },
    names: {
      la: 'S. Geroldi Eremitae',
      en: 'St. Gerold, Hermit',
      de: 'Hl. Gerold, Einsiedler',
      fr: 'S. Gérold, Ermite',
      it: 'S. Geroldo, Eremita',
    },
  },
];

export function buildSwitzerlandChurInputs(): Inputs {
  return buildOverlayInputs(ENTRIES);
}

export class Switzerland_Chur extends CalendarDef {
  ParentCalendars = [Switzerland];

  inputs: Inputs = buildSwitzerlandChurInputs();

  override updateConfig(input?: RomcalConfigInput): void {
    super.updateConfig(input);
    stampOverlayMeta(ENTRIES);
  }
}
