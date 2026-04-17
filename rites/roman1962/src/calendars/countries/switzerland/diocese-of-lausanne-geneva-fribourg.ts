import { CalendarDef } from '@internal/calendars';

import type { CalendarOverlayEntry } from '../../types';

import { Switzerland } from '.';

/**
 * Diocese of Lausanne, Genève et Fribourg (Lausannensis, Genevensis et
 * Friburgensis) — proper calendar for the 1962 Roman Rite. Inherits the
 * Swiss national overlay.
 *
 * Source: Wikipedia + diocesan cathedral (Cathédrale Saint-Nicolas de
 * Fribourg).
 *
 * St. Nicholas of Myra is principal patron (the Fribourg cathedral is
 * his). His Dec 6 universal feast (Class III in the 1962 Roman
 * calendar) is *raised* to Class I for the diocese via the `raise`
 * mode — no duplication, just an in-place rank bump.
 */
export class Switzerland_Lausanne_Geneva_Fribourg extends CalendarDef<CalendarOverlayEntry> {
  readonly parents: readonly CalendarDef<CalendarOverlayEntry>[] = [new Switzerland()];

  readonly entries: readonly CalendarOverlayEntry[] = [
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
}
