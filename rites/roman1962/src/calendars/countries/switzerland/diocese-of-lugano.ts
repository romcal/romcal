import type { CalendarOverlay1962 } from '../../types';

import { Switzerland } from '.';

/**
 * Diocese of Lugano (Luganensis) — proper calendar for the 1962 Roman
 * Rite. Inherits the Swiss national overlay.
 *
 * Source: Wikipedia s.v. "Roman Catholic Diocese of Lugano".
 *
 * St. Charles Borromeo (Archbishop of Milan) is principal patron;
 * Lugano was part of the Milanese ecclesiastical province until 1888,
 * and the diocese kept Borromeo as principal patron after its
 * elevation. His universal feast on Nov 4 (Class III) is *raised* to
 * Class I for the diocese without duplicating the entry.
 *
 * St. Abbondio (Abundius) of Como is secondary patron — Como is the
 * cross-border neighbour of Ticino and was the mother see of much of
 * Italian-speaking Switzerland before Lugano's own erection.
 */
export const SwitzerlandLugano: CalendarOverlay1962 = {
  id: 'switzerland.lugano',
  parents: [Switzerland],
  entries: [
    {
      mmdd: '11-04',
      fileKey: 'saint_charles_borromeo_bishop_and_confessor',
      name: 'S. Caroli Episcopi et Confessoris, Principalis Patroni Dioecesis',
      class1962: 1,
      rank1962: 'ClassI',
      numericRank: 6,
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
      rank1962: 'ClassII',
      numericRank: 5,
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
        la: 'S. Abundii Episcopi et Confessoris, Compatroni Dioecesis',
        en: 'St. Abundius, Bishop and Confessor, Co-Patron of the Diocese',
        de: 'Hl. Abundius, Bischof und Bekenner, Mitpatron des Bistums',
        fr: 'S. Abundius, Évêque et Confesseur, Co-patron du Diocèse',
        it: 'S. Abbondio, Vescovo e Confessore, Compatrono della Diocesi',
      },
    },
  ],
};
