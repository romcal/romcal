import { CommonDefinition as Common, PatronTitle, Precedences, Inputs } from '@internal/generator';

import { CalendarDef } from '../../../calendar-def';
import { Europe } from '../../regions/europe';

import { France } from '.';

// src:
// - mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
// - https://diocese92.fr/decouvrir-le-diocese-de-nanterre/les-saints-du-diocese-de-nanterre/
// - https://enpelerinage.diocese92.fr/notre-dame-de-bonne-delivrance/
// - https://enpelerinage.diocese92.fr/notre-dame-de-boulogne/
export class France_Nanterre extends CalendarDef {
  ParentCalendars = [Europe, France];

  inputs: Inputs = {
    // src: mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    genevieve_of_paris_virgin: {
      customLocaleId: 'genevieve_of_paris_virgin_patroness_of_the_diocese_of_nanterre',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      titles: { append: [PatronTitle.PatronOfTheDiocese] },
      commonsDef: Common.None,
    },

    // src: mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    most_holy_name_of_jesus: {
      dateDef: { month: 1, date: 4 },
    },

    // src: mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    isabelle_of_france_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 24 },
      commonsDef: Common.Virgins,
    },

    // src: mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    daniel_brottier_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 28 },
    },

    // src: mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    louise_de_marillac_religious: {
      dateDef: { month: 3, date: 15 },
      commonsDef: Common.Religious,
    },

    // src: mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    mary_of_the_incarnation_barbara_acarie_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 4, date: 18 },
    },

    // src: mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    our_lady_of_good_deliverance: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 18 },
    },

    // src: mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    germanus_of_auxerre_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 30 },
      commonsDef: Common.Bishops,
    },

    // src: mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    louis_ix_of_france: {
      precedence: Precedences.ProperMemorial_11b,
    },

    // src: mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    blessed_martyrs_of_paris: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 2 },
      commonsDef: Common.Martyrs,
    },

    // src: mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    clodoald_of_nogent_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 9, date: 7 },
      commonsDef: Common.Pastors,
    },

    // src: mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    vincent_de_paul_priest: {
      precedence: Precedences.ProperFeast_8f,
    },

    // src: mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    denis_of_paris_bishop: {
      customLocaleId: 'denis_of_paris_bishop_second_patron_of_the_diocese_of_nanterre',
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 10, date: 9 },
      titles: { append: [PatronTitle.SecondPatronOfTheDiocese] },
    },

    // src: mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    denis_of_paris_bishop_and_companions_martyrs: {
      drop: true,
    },

    // src: mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    our_lady_of_boulogne: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 22 },
      commonsDef: Common.BlessedVirginMary,
    },

    // src: mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    all_saints_of_the_diocese_of_nanterre: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 8 },
    },

    // The 2009 proper names Charles de Foucauld as Blessed. He was canonized
    // on May 15, 2022, so the current celebration uses the title Saint.
    // src:
    // - mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    // - https://www.vatican.va/content/francesco/en/events/event.dir.html/content/vaticanevents/en/2022/5/15/canonizzazione.html
    charles_of_jesus_de_foucauld: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 1 },
    },
  };
}
