import { CommonDefinition as Common } from '../../../constants/commons';
import { PatronTitle } from '../../../constants/martyrology-metadata';
import { Precedences } from '../../../constants/precedences';
import { CalendarDef } from '../../../models/calendar-def';
import { Inputs } from '../../../types/calendar-def';
import { Europe } from '../../regions/europe';

import { France } from '.';

// src:
// - https://lille.catholique.fr/spiritualite/approfondir-sa-foi/missel/
// - https://lille.catholique.fr/app/uploads/2026/01/Ordo-et-agenda-numerique.pdf
// - https://outlook.office365.com/owa/calendar/1f2e166da9174b55a65c9cda84c3c320@lille.catholique.fr/24a55cb359634519af9f314246d73f5314084572960167166925/calendar.ics
// - https://en.wikipedia.org/wiki/Archdiocese_of_Lille
export class France_Lille extends CalendarDef {
  ParentCalendars = [Europe, France];

  inputs: Inputs = {
    thomas_becket_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 1, date: 4 },
      commonsDef: [Common.Martyrs, Common.Bishops],
    },

    remigius_of_reims_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      commonsDef: Common.None,
    },

    john_of_warneton_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 27 },
      commonsDef: Common.Bishops,
    },

    /*
     * The official Lille proper prescribes this memorial only in the territory
     * of the former Diocese of Arras. A child calendar does not yet exist to
     * target that territory, so the celebration is retained as an optional
     * memorial at archdiocesan level.
     */
    vaast_of_arras_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 6 },
    },

    mary_of_the_providence_eugenie_smet_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 7 },
      commonsDef: Common.Religious,
    },

    amand_of_maastricht_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 7 },
    },

    chrysolius_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 7 },
      commonsDef: Common.Martyrs,
    },

    /*
     * The official Lille proper prescribes this memorial only in the territory
     * of the former Diocese of Tournai. A child calendar does not yet exist to
     * target that territory, so the celebration is retained as an optional
     * memorial at archdiocesan level.
     */
    eleutherius_of_tournai_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 20 },
      commonsDef: Common.Bishops,
    },

    /*
     * The official Lille proper prescribes this memorial only in the Hazebrouck
     * area. A child calendar does not yet exist to target that territory, so the
     * celebration is retained as an optional memorial at archdiocesan level.
     */
    mauront_of_breuil_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 5 },
      commonsDef: Common.Religious,
    },

    // Added to the official ordo following their beatification on 13 December 2025.
    andre_parsy_and_louis_didion_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 5 },
      martyrology: ['andre_parsy_martyr', 'louis_didion_martyr'],
      commonsDef: Common.Martyrs,
    },

    /*
     * The digitized proper Mass still calls Paul Denn and Rémy Isoré blessed.
     * They were canonized on 1 October 2000, and the current official ordo calls
     * them saints.
     * src: https://www.vatican.va/roman_curia/pontifical_academies/cult-martyrum/martiri/002.html
     */
    paul_denn_and_remy_isore_priests_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 20 },
      martyrology: ['paul_denn_priest', 'remy_isore_priest'],
    },

    vulmar_of_samer_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 20 },
    },

    frederic_janssoone_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 5 },
    },

    gaugericus_of_cambrai_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 12 },
      commonsDef: Common.Bishops,
    },

    blessed_martyrs_of_the_french_revolution: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 2 },
      martyrology: [{ id: 'martyrs_of_the_french_revolution', count: 191 }],
      commonsDef: Common.Martyrs,
    },

    /*
     * The official Lille proper prescribes a solemnity of Our Lady of the Dunes
     * only in the Dunkirk area. A child calendar does not yet exist to target
     * that territory, so the celebration is retained as an optional memorial at
     * archdiocesan level. The Feast of the Nativity of the Blessed Virgin Mary
     * remains the principal celebration on 8 September outside that territory.
     */
    our_lady_of_the_dunes: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 8 },
    },

    /*
     * The official Lille proper prescribes this memorial only in the territory
     * of the former Diocese of Thérouanne. A child calendar does not yet exist to
     * target that territory, so the celebration is retained as an optional
     * memorial at archdiocesan level.
     */
    audomar_of_therouanne_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 9 },
      commonsDef: Common.Bishops,
    },

    /*
     * The official Lille proper prescribes a Feast throughout the archdiocese
     * and a Solemnity in the city of Lille. A child calendar does not yet exist
     * to apply the solemnity only within the city.
     */
    our_lady_of_the_treille_patroness_of_the_archdiocese_of_lille: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfADiocese_8a,
      dateDef: { month: 10, dayOfWeek: 0, nthWeekInMonth: 1 },
      martyrology: [
        {
          id: 'our_lady_of_the_treille',
          titles: { append: [PatronTitle.PatronOfTheDiocese] },
        },
      ],
    },

    piatus_of_seclin_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 3 },
    },

    momelin_of_noyon_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 16 },
      commonsDef: Common.Bishops,
    },

    /*
     * The official Lille proper prescribes this memorial only in the Bergues
     * area. A child calendar does not yet exist to target that territory, so the
     * celebration is retained as an optional memorial at archdiocesan level.
     */
    winnoc_of_wormhout_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 6 },
      commonsDef: Common.Religious,
    },

    all_saints_of_the_archdiocese_of_lille: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 8 },
    },

    eligius_of_noyon_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 1 },
      commonsDef: Common.Bishops,
    },

    folquin_of_therouanne_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 15 },
      commonsDef: Common.Bishops,
    },

    /*
     * The official Lille proper prescribes this memorial only in the
     * Seclin-Cysoing area. A child calendar does not yet exist to target that
     * territory, so the celebration is retained as an optional memorial at
     * archdiocesan level.
     */
    everard_of_friuli: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 16 },
      commonsDef: Common.Saints,
    },
  };
}
