import type { CalendarOverlay1962 } from '../../types';

import { Switzerland } from '.';

/**
 * Diocese of Basel (Basileensis) — proper calendar for the 1962 Roman
 * Rite. Inherits the Swiss national overlay (St Nicholas of Flüe).
 *
 * Sources:
 *   • Catholic Encyclopedia, s.v. "Basle";
 *   • gCatholic.org, Diocese of Basel patronal entries;
 *   • Roman Martyrology (Ursus & Victor on Sept 30; Ursicinus of
 *     Saint-Ursanne on Dec 20).
 *
 * Ss. Ursus and Victor (soldiers of the Theban Legion martyred at
 * Solothurn) are the diocesan principal patrons; the cathedral chapter
 * of Solothurn lies inside the Basel territory. St Ursicinus is the
 * Irish hermit-abbot of Saint-Ursanne in the Jura — secondary diocesan
 * patron.
 */
export const SwitzerlandBasel: CalendarOverlay1962 = {
  id: 'switzerland.basel',
  parents: [Switzerland],
  entries: [
    {
      mmdd: '09-30',
      fileKey: 'saints_ursus_and_victor_of_solothurn_martyrs_patrons',
      name: 'Ss. Ursi et Victoris Martyrum, Principalium Patronorum Dioecesis',
      class1962: 1,
      rank1962: 'ClassI',
      numericRank: 6,
      mode: 'add',
      mass: {
        colors: ['Red'],
        references: {
          Introitus: 'Commune/common_of_many_martyrs',
          Oratio: 'Commune/common_of_many_martyrs',
          Lectio: 'Commune/common_of_many_martyrs',
          Graduale: 'Commune/common_of_many_martyrs',
          Evangelium: 'Commune/common_of_many_martyrs',
          Offertorium: 'Commune/common_of_many_martyrs',
          Secreta: 'Commune/common_of_many_martyrs',
          Communio: 'Commune/common_of_many_martyrs',
          Postcommunio: 'Commune/common_of_many_martyrs',
        },
        rubrics: { gloria: true, credo: true },
      },
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
      rank1962: 'ClassIII',
      numericRank: 3,
      mode: 'add',
      mass: {
        colors: ['White'],
        references: {
          Introitus: 'Commune/common_of_abbot',
          Oratio: 'Commune/common_of_abbot',
          Lectio: 'Commune/common_of_abbot',
          Graduale: 'Commune/common_of_abbot',
          Evangelium: 'Commune/common_of_abbot',
          Offertorium: 'Commune/common_of_abbot',
          Secreta: 'Commune/common_of_abbot',
          Communio: 'Commune/common_of_abbot',
          Postcommunio: 'Commune/common_of_abbot',
        },
        rubrics: { gloria: true },
      },
      names: {
        la: 'S. Ursicini Abbatis',
        en: 'St. Ursicinus, Abbot',
        de: 'Hl. Ursicinus, Abt',
        fr: 'S. Ursanne, Abbé',
        it: 'S. Ursicino, Abate',
      },
    },
  ],
};
