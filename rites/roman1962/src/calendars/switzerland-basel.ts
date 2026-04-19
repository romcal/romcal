import { CalendarDef } from '@internal/rite-roman1969';
import type { Inputs, RomcalConfigInput } from '@internal/rite-roman1969';

import { buildOverlayInputs, stampOverlayMeta, type OverlayInputEntry } from './overlay-support';
import { Switzerland } from './switzerland';

/**
 * Diocese of Basel (Basileensis) — 1962 Rite. Inherits the Swiss
 * national overlay (St Nicholas of Flüe).
 *
 * Ss. Ursus and Victor (soldiers of the Theban Legion martyred at
 * Solothurn) are the diocesan principal patrons; St Ursicinus is the
 * Irish hermit-abbot of Saint-Ursanne in the Jura (secondary patron).
 */
const ENTRIES: readonly OverlayInputEntry[] = [
  {
    mmdd: '09-30',
    fileKey: 'saints_ursus_and_victor_of_solothurn_martyrs_patrons',
    name: 'Ss. Ursi et Victoris Martyrum, Principalium Patronorum Dioecesis',
    class1962: 1,
    mode: 'add',
    mass: { colors: ['Red'], rubrics: { gloria: true, credo: true } },
    names: {
      la: 'Ss. Ursi et Victoris Martyrum, Principalium Patronorum Dioecesis',
      en: 'Sts. Ursus and Victor, Martyrs, Principal Patrons of the Diocese',
      de: 'Hll. Urs und Viktor, Martyrer, Hauptpatrone des Bistums',
      fr: 'Ss. Urs et Victor, Martyrs, Patrons principaux du Diocèse',
      it: 'Ss. Orso e Vittore, Martiri, Patroni principali della Diocesi',
    },
  },
  {
    mmdd: '12-20',
    fileKey: 'saint_ursicinus_of_saint_ursanne_abbot',
    name: 'S. Ursicini Abbatis',
    class1962: 3,
    mode: 'add',
    mass: { colors: ['White'], rubrics: { gloria: true } },
    names: {
      la: 'S. Ursicini Abbatis',
      en: 'St. Ursicinus, Abbot',
      de: 'Hl. Ursicinus, Abt',
      fr: 'S. Ursanne, Abbé',
      it: 'S. Ursicino, Abate',
    },
  },
];

export function buildSwitzerlandBaselInputs(): Inputs {
  return buildOverlayInputs(ENTRIES);
}

export class Switzerland_Basel extends CalendarDef {
  ParentCalendars = [Switzerland];

  inputs: Inputs = buildSwitzerlandBaselInputs();

  override updateConfig(input?: RomcalConfigInput): void {
    super.updateConfig(input);
    stampOverlayMeta(ENTRIES);
  }
}
