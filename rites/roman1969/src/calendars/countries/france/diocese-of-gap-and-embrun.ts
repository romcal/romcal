import { CommonDefinition as Common, PatronTitle, Precedences, Inputs } from '@internal/generator';

import { CalendarDef } from '../../../calendar-def';
import { Europe } from '../../regions/europe';

import { France } from '.';

// src:
// - mr_fr_2016_ed1_gap_embrun
// - https://www.diocesedegap.fr/diocese-de-gap-embrun/actualite/10144-faire-memoire-des-saints-du-diocese/
export class France_GapEmbrun extends CalendarDef {
  ParentCalendars = [Europe, France];

  inputs: Inputs = {
    // src: mr_fr_2016_ed1_gap_embrun
    peladius_of_embrun_bishop: {
      dateDef: { month: 1, date: 7 },
      precedence: Precedences.OptionalMemorial_12,
      commonsDef: Common.Pastors,
    },

    // src: mr_fr_2016_ed1_gap_embrun
    // This celebration is a memorial in Gap.
    remigius_of_gap_and_tigidius_of_gap_bishops: {
      dateDef: { month: 2, date: 3 },
      martyrology: ['remigius_of_gap_bishop', 'tigidius_of_gap_bishop'],
      precedence: Precedences.OptionalMemorial_12,
    },

    // src: mr_fr_2016_ed1_gap_embrun
    domninus_of_digne_bishop: {
      dateDef: { month: 2, date: 13 },
      precedence: Precedences.OptionalMemorial_12,
      commonsDef: Common.Pastors,
    },

    // src: mr_fr_2016_ed1_gap_embrun
    eldrad_of_novalesa_abbot: {
      dateDef: { month: 3, date: 13 },
      precedence: Precedences.OptionalMemorial_12,
      commonsDef: Common.Religious,
    },

    // src: mr_fr_2016_ed1_gap_embrun
    // This celebration is a memorial in Gap.
    constantine_of_gap_bishop: {
      dateDef: { month: 4, date: 12 },
      precedence: Precedences.OptionalMemorial_12,
      commonsDef: Common.Pastors,
    },

    // src: mr_fr_2016_ed1_gap_embrun
    // This celebration is a solemnity in Embrun.
    marcellinus_of_embrun_bishop: {
      customLocaleId: 'marcellinus_of_embrun_bishop_second_patron_of_the_diocese_of_gap_and_embrun',
      dateDef: { month: 4, date: 20 },
      precedence: Precedences.ProperFeast_8f,
      titles: { append: [PatronTitle.SecondPatronOfTheDiocese] },
    },

    // src: mr_fr_2016_ed1_gap_embrun
    joseph_the_worker: {
      dateDef: { month: 4, date: 30 },
    },

    // src: mr_fr_2016_ed1_gap_embrun
    // This celebration is a solemnity at the Shrine of Our Lady of Laus.
    our_lady_of_laus: {
      dateDef: { month: 5, date: 1 },
      precedence: Precedences.ProperFeast_8f,
    },

    // src: mr_fr_2016_ed1_gap_embrun
    aredius_of_gap_bishop: {
      dateDef: { month: 5, date: 5 },
      precedence: Precedences.ProperMemorial_11b,
    },

    // src: mr_fr_2016_ed1_gap_embrun
    eugene_de_mazenod_bishop: {
      dateDef: { month: 5, date: 21 },
      precedence: Precedences.OptionalMemorial_12,
      commonsDef: Common.Pastors,
    },

    // src: mr_fr_2016_ed1_gap_embrun
    // This celebration is a memorial in La Roche-des-Arnauds.
    roseline_of_villeneuve_virgin: {
      dateDef: { month: 7, date: 6 },
      precedence: Precedences.OptionalMemorial_12,
      commonsDef: Common.Virgins,
    },

    // src: mr_fr_2016_ed1_gap_embrun
    donatus_of_sisteron_priest_and_may_of_bodon_abbot: {
      dateDef: { month: 8, date: 18 },
      martyrology: ['donatus_of_sisteron_priest', 'may_of_bodon_abbot'],
      precedence: Precedences.OptionalMemorial_12,
      commonsDef: Common.Religious,
    },

    // src: mr_fr_2016_ed1_gap_embrun
    jean_antoine_savine_priest_and_companions_martyrs: {
      dateDef: { month: 9, date: 2 },
      martyrology: ['jean_antoine_savine_priest', 'companions_martyrs'],
      precedence: Precedences.ProperMemorial_11b,
      commonsDef: Common.Martyrs,
    },

    // src: mr_fr_2016_ed1_gap_embrun
    januarius_i_of_benevento_bishop: {
      dateDef: { month: 9, date: 18 },
    },

    // src: mr_fr_2016_ed1_gap_embrun
    // This celebration is a solemnity in Gap.
    arnulf_of_gap_bishop: {
      customLocaleId: 'arnulf_of_gap_bishop_patron_of_the_diocese_of_gap_and_embrun',
      dateDef: { month: 9, date: 19 },
      precedence: Precedences.ProperFeast_PrincipalPatronOfADiocese_8a,
      titles: { append: [PatronTitle.PatronOfTheDiocese] },
    },

    // src: mr_fr_2016_ed1_gap_embrun
    // This celebration is a solemnity at Gap Cathedral.
    // The proper prescribes Form B from the Common of the Dedication of a Church outside the cathedral.
    dedication_of_the_cathedral_of_gap_france: {
      dateDef: { month: 9, date: 21 },
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      commonsDef: Common.DedicationAnniversary_Outside,
    },

    // src: mr_fr_2016_ed1_gap_embrun
    matthew_apostle: {
      dateDef: { month: 9, date: 22 },
    },

    // src: mr_fr_2016_ed1_gap_embrun
    all_saints_of_the_diocese_of_gap_and_embrun: {
      dateDef: { month: 11, date: 8 },
      precedence: Precedences.ProperMemorial_11b,
      commonsDef: Common.Saints,
    },
  };
}
