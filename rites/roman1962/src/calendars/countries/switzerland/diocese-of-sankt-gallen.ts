import { CalendarDefBase as CalendarDef } from '@internal/rite-roman1969';

import type { CalendarOverlayEntry } from '../../types';

import { Switzerland } from '.';

/**
 * Diocese of Sankt Gallen (Sancti Galli) — proper calendar for the 1962
 * Roman Rite. Inherits the Swiss national overlay.
 *
 * Sources:
 *   • Catholic Encyclopedia, s.v. "Saint Gall";
 *   • Wikipedia, Diocese of Saint Gallen.
 *
 * St. Gallus (Gall), Irish disciple of Columbanus and founder of the
 * hermitage that became the Abbey of St Gall, is the principal patron
 * of the diocese. St. Othmar (Otmar), the abbey's first abbot under the
 * rule of St. Benedict, is co-patron.
 */
export class Switzerland_Sankt_Gallen extends CalendarDef<CalendarOverlayEntry> {
  readonly parents: readonly CalendarDef<CalendarOverlayEntry>[] = [new Switzerland()];

  readonly entries: readonly CalendarOverlayEntry[] = [
    {
      mmdd: '10-16',
      fileKey: 'saint_gallus_abbot_patron_of_the_diocese',
      name: 'S. Galli Abbatis, Principalis Patroni Dioecesis',
      class1962: 1,
      rank1962: 'ClassI',
      numericRank: 6,
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
        rubrics: { gloria: true, credo: true },
      },
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
        rubrics: { gloria: true, credo: true },
      },
      names: {
        la: 'S. Othmari Abbatis, Compatroni Dioecesis',
        en: 'St. Othmar, Abbot, Co-Patron of the Diocese',
        de: 'Hl. Otmar, Abt, Mitpatron des Bistums',
        fr: 'S. Othmar, Abbé, Co-patron du Diocèse',
        it: 'S. Otmaro, Abate, Compatrono della Diocesi',
      },
    },
  ];
}
