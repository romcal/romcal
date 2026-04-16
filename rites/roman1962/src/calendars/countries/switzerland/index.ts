import { CalendarDef } from '@internal/calendars';

import { Europe } from '../../regions/europe';
import type { CalendarOverlayEntry } from '../../types';

/**
 * National-level Swiss overlay. Holds feasts common to every Swiss
 * diocese; the diocesan overlays (Basel, Chur, Sankt Gallen, Sion,
 * Lugano, Lausanne-Genève-Fribourg) and the two territorial abbeys
 * (Saint-Maurice, Einsiedeln) inherit from it.
 *
 * Only entry today: St. Nicholas of Flüe (Bruder Klaus), canonised by
 * Pius XII on 15 May 1947. Swiss dioceses observe him on 25 September
 * (vs the Roman 21 March) and, as principal patron of the Swiss
 * Confederation, he outranks any universal feast on that day per
 * Rubricae 1960 §106 (Class I).
 */
export class Switzerland extends CalendarDef<CalendarOverlayEntry> {
  get id(): string {
    return 'switzerland';
  }

  readonly parents: readonly CalendarDef<CalendarOverlayEntry>[] = [new Europe()];

  readonly entries: readonly CalendarOverlayEntry[] = [
    {
      mmdd: '09-25',
      fileKey: 'saint_nicholas_of_flue_hermit_patron_of_switzerland',
      name: 'S. Nicolai de Flüe Eremitae, Principalis Patroni Helvetiae',
      class1962: 1,
      rank1962: 'ClassI',
      numericRank: 6,
      mode: 'add',
      mass: {
        colors: ['White'],
        references: {
          Introitus: 'Commune/common_of_confessor_not_pontiff',
          Oratio: 'Commune/common_of_confessor_not_pontiff',
          Lectio: 'Commune/common_of_confessor_not_pontiff',
          Graduale: 'Commune/common_of_confessor_not_pontiff',
          Evangelium: 'Commune/common_of_confessor_not_pontiff',
          Offertorium: 'Commune/common_of_confessor_not_pontiff',
          Secreta: 'Commune/common_of_confessor_not_pontiff',
          Communio: 'Commune/common_of_confessor_not_pontiff',
          Postcommunio: 'Commune/common_of_confessor_not_pontiff',
        },
        rubrics: { gloria: true, credo: true },
      },
      names: {
        la: 'S. Nicolai de Flüe Eremitae, Principalis Patroni Helvetiae',
        en: 'St. Nicholas of Flüe, Hermit, Principal Patron of Switzerland',
        de: 'Hl. Niklaus von Flüe, Einsiedler, Hauptpatron der Schweiz',
        fr: 'S. Nicolas de Flüe, Ermite, Patron principal de la Suisse',
        it: 'S. Nicolao della Flüe, Eremita, Patrono principale della Svizzera',
      },
    },
  ];
}
