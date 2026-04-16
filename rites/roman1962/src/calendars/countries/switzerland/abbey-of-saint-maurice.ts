import type { CalendarOverlay1962 } from '../../types';

import { Switzerland } from '.';

/**
 * Territorial Abbey of Saint-Maurice d'Agaune (Sancti Mauritii
 * Agaunensis) — proper calendar for the 1962 Roman Rite. Inherits the
 * Swiss national overlay.
 *
 * Agaunum (now Saint-Maurice in Valais) is the oldest continuously
 * inhabited monastery in the West, founded on the site where the Theban
 * Legion was martyred (c. 286). The abbey is a territorial prelature
 * (not a diocese), but for the 1962 calendar it carries its own proper.
 *
 * Ss. Maurice and Companions are principal patrons. The universal Sept
 * 22 entry is a Ferial/commemoration; the abbey raises it to Class I.
 */
export const SwitzerlandSaintMauriceAbbey: CalendarOverlay1962 = {
  id: 'switzerland.saint-maurice',
  parents: [Switzerland],
  entries: [
    {
      mmdd: '09-22',
      fileKey: 'ss_maurice_and_companions_martyrs_optional',
      name: 'Ss. Mauritii et Sociorum Martyrum, Principalium Patronorum Abbatiae',
      class1962: 1,
      rank1962: 'ClassI',
      numericRank: 6,
      mode: 'raise',
      names: {
        la: 'Ss. Mauritii et Sociorum Martyrum, Principalium Patronorum Abbatiae',
        en: 'Sts. Maurice and Companions, Martyrs, Principal Patrons of the Abbey',
        de: 'Hll. Mauritius und Gefährten, Martyrer, Hauptpatrone der Abtei',
        fr: 'Ss. Maurice et Compagnons, Martyrs, Patrons principaux de l’Abbaye',
        it: 'Ss. Maurizio e Compagni, Martiri, Patroni principali dell’Abbazia',
      },
    },
  ],
};
