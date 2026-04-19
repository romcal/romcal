import { CalendarDef } from '@internal/rite-roman1969';
import type { Inputs, RomcalConfigInput } from '@internal/rite-roman1969';

import { buildOverlayInputs, stampOverlayMeta, type OverlayInputEntry } from './overlay-support';
import { Switzerland } from './switzerland';

/**
 * Territorial Abbey of Saint-Maurice d'Agaune — 1962 Rite. Inherits
 * the Swiss national overlay.
 *
 * Ss. Maurice and Companions are principal patrons. The universal
 * Sept 22 entry sits low in the sanctoral; the abbey raises it to
 * Class I via the `raise` path.
 */
const ENTRIES: readonly OverlayInputEntry[] = [
  {
    mmdd: '09-22',
    key: 'ss_maurice_and_companions_martyrs_optional',
    name: 'Ss. Mauritii et Sociorum Martyrum, Principalium Patronorum Abbatiae',
    class1962: 1,
    mode: 'raise',
    names: {
      la: 'Ss. Mauritii et Sociorum Martyrum, Principalium Patronorum Abbatiae',
      en: 'Sts. Maurice and Companions, Martyrs, Principal Patrons of the Abbey',
      de: 'Hll. Mauritius und Gefährten, Martyrer, Hauptpatrone der Abtei',
      fr: 'Ss. Maurice et Compagnons, Martyrs, Patrons principaux de l’Abbaye',
      it: 'Ss. Maurizio e Compagni, Martiri, Patroni principali dell’Abbazia',
    },
  },
];

export function buildSwitzerlandSaintMauriceAbbeyInputs(): Inputs {
  return buildOverlayInputs(ENTRIES);
}

export class Switzerland_Saint_Maurice_Abbey extends CalendarDef {
  ParentCalendars = [Switzerland];

  inputs: Inputs = buildSwitzerlandSaintMauriceAbbeyInputs();

  override updateConfig(input?: RomcalConfigInput): void {
    super.updateConfig(input);
    stampOverlayMeta(ENTRIES);
  }
}
