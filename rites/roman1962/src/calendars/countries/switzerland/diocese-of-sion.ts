import { CalendarDef } from '@internal/calendars';

import type { CalendarOverlayEntry } from '../../types';

import { Switzerland } from '.';

/**
 * Diocese of Sion (Sedunensis, German "Bistum Sitten") — proper
 * calendar for the 1962 Roman Rite. Inherits the Swiss national
 * overlay.
 *
 * Source: Wikipedia s.v. "Theodore of Octodurum" + diocesan tradition.
 *
 * St. Theodore (Theodule) of Octodurum, the first historical bishop of
 * Valais (d. 391), founder of the first sanctuary at Agaunum and
 * principal patron of the diocese. Aug 16 is the Sion-proper date
 * (elsewhere 26 Aug is also attested); in the universal calendar Aug 16
 * is St. Joachim (Class II), which drops to commemoration here.
 */
export class Switzerland_Sion extends CalendarDef<CalendarOverlayEntry> {
  readonly parents: readonly CalendarDef<CalendarOverlayEntry>[] = [new Switzerland()];

  readonly entries: readonly CalendarOverlayEntry[] = [
    {
      mmdd: '08-16',
      fileKey: 'saint_theodore_of_octodurus_bishop_patron_of_the_diocese',
      name: 'S. Theodori Episcopi, Principalis Patroni Dioecesis',
      class1962: 1,
      rank1962: 'ClassI',
      numericRank: 6,
      mode: 'add',
      mass: {
        colors: ['White'],
        references: {
          Introitus: 'Commune/common_of_one_confessor_pontiff',
          Oratio: 'Commune/common_of_one_confessor_pontiff',
          Lectio: 'Commune/common_of_one_confessor_pontiff',
          Graduale: 'Commune/common_of_one_confessor_pontiff',
          Evangelium: 'Commune/common_of_one_confessor_pontiff',
          Offertorium: 'Commune/common_of_one_confessor_pontiff',
          Secreta: 'Commune/common_of_one_confessor_pontiff',
          Communio: 'Commune/common_of_one_confessor_pontiff',
          Postcommunio: 'Commune/common_of_one_confessor_pontiff',
        },
        rubrics: { gloria: true, credo: true },
      },
      names: {
        la: 'S. Theodori Episcopi, Principalis Patroni Dioecesis',
        en: 'St. Theodore, Bishop, Principal Patron of the Diocese',
        de: 'Hl. Theodul, Bischof, Hauptpatron des Bistums',
        fr: 'S. Théodule, Évêque, Patron principal du Diocèse',
        it: 'S. Teodulo, Vescovo, Patrono principale della Diocesi',
      },
    },
  ];
}
