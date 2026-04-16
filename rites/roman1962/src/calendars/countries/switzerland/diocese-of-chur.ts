import type { CalendarOverlay1962 } from '../../types';

import { Switzerland } from '.';

/**
 * Diocese of Chur (Curiensis) — proper calendar for the 1962 Roman Rite.
 *
 * Sources consulted:
 *   • Roman Martyrology (St. Lucius entry for Dec 3);
 *   • Catholic Encyclopedia (1913), s.v. "Chur" — Lucius as principal
 *     patron, Florinus as secondary patron, Sigisbert/Placidus as
 *     founders of Disentis;
 *   • Decree of Pius X (1905) confirming the cult of Sts. Placidus and
 *     Sigisbert, fixing their joint feast on July 11;
 *   • Wikipedia article on Florinus of Remüs for his Nov 17 feast in
 *     the dioceses of Chur, Bolzano-Brixen, and Vaduz.
 *
 * Only feasts uniquely proper to the diocese are encoded here; feasts
 * that merely raise a universal rank (or that live in the general
 * calendar already, like St. Fidelis of Sigmaringen on Apr 24) are left
 * to the universal calendar. Mass texts default to the appropriate
 * Common via `references`, since no official diocesan propers have been
 * digitised for this rite yet.
 */
export const SwitzerlandChur: CalendarOverlay1962 = {
  id: 'switzerland.chur',
  parents: [Switzerland],
  entries: [
    {
      // Principal patron of the Diocese of Chur; displaces the universal
      // feast of St Francis Xavier, which drops to commemoration under
      // Rubricae 1960 §107–111 (handled by the occurrence resolver once
      // we add it as a second same-day entry).
      mmdd: '12-03',
      fileKey: 'saint_lucius_of_chur_bishop_and_martyr_patron',
      name: 'S. Lucii Episcopi et Martyris, Principalis Patroni Dioecesis',
      class1962: 1,
      rank1962: 'ClassI',
      numericRank: 6,
      mode: 'add',
      mass: {
        colors: ['Red'],
        references: {
          Introitus: 'Commune/common_of_one_martyr_pontiff',
          Oratio: 'Commune/common_of_one_martyr_pontiff',
          Lectio: 'Commune/common_of_one_martyr_pontiff',
          Graduale: 'Commune/common_of_one_martyr_pontiff',
          Evangelium: 'Commune/common_of_one_martyr_pontiff',
          Offertorium: 'Commune/common_of_one_martyr_pontiff',
          Secreta: 'Commune/common_of_one_martyr_pontiff',
          Communio: 'Commune/common_of_one_martyr_pontiff',
          Postcommunio: 'Commune/common_of_one_martyr_pontiff',
        },
        rubrics: { gloria: true, credo: true },
      },
      names: {
        la: 'S. Lucii Episcopi et Martyris, Principalis Patroni Dioecesis',
        en: 'St. Lucius, Bishop and Martyr, Principal Patron of the Diocese',
        de: 'Hl. Luzius, Bischof und Martyrer, Hauptpatron des Bistums',
        fr: 'S. Lucius, Évêque et Martyr, Patron principal du Diocèse',
        it: 'S. Lucio, Vescovo e Martire, Patrono principale della Diocesi',
      },
    },
    {
      // Co-founders of the abbey of Disentis (within the diocese);
      // confirmed cult (Pius X, 1905). July 11 is also St Pius I in the
      // universal calendar (ClassIV), which the joint feast outranks.
      mmdd: '07-11',
      fileKey: 'saints_placidus_and_sigisbert_martyrs',
      name: 'Ss. Placidi Martyris et Sigisberti Confessoris',
      class1962: 3,
      rank1962: 'ClassIII',
      numericRank: 3,
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
        rubrics: { gloria: true },
      },
      names: {
        la: 'Ss. Placidi Martyris et Sigisberti Confessoris',
        en: 'Sts. Placidus, Martyr, and Sigisbert, Confessor',
        de: 'Hll. Placidus, Martyrer, und Sigisbert, Bekenner',
        fr: 'Ss. Placide, Martyr, et Sigisbert, Confesseur',
        it: 'Ss. Placido, Martire, e Sigisberto, Confessore',
      },
    },
    {
      // Secondary patron. Universal calendar has St Gregory Thaumaturgus
      // (ClassIV) on this day; Florinus is ClassIII and outranks.
      mmdd: '11-17',
      fileKey: 'saint_florinus_of_remus_confessor',
      name: 'S. Florini Confessoris',
      class1962: 3,
      rank1962: 'ClassIII',
      numericRank: 3,
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
        rubrics: { gloria: true },
      },
      names: {
        la: 'S. Florini Confessoris',
        en: 'St. Florinus, Confessor',
        de: 'Hl. Florin, Bekenner',
        fr: 'S. Florin, Confesseur',
        it: 'S. Florino, Confessore',
      },
    },
    {
      // No universal feast on April 19 in the 1962 calendar; Gerold fits
      // as a ClassIV hermit commemoration.
      mmdd: '04-19',
      fileKey: 'saint_gerold_of_einsiedeln_hermit',
      name: 'S. Geroldi Eremitae',
      class1962: 4,
      rank1962: 'ClassIV',
      numericRank: 2,
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
      },
      names: {
        la: 'S. Geroldi Eremitae',
        en: 'St. Gerold, Hermit',
        de: 'Hl. Gerold, Einsiedler',
        fr: 'S. Gérold, Ermite',
        it: 'S. Geroldo, Eremita',
      },
    },
  ],
};
