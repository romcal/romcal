import { CommonDefinition as Common } from '../../../constants/commons';
import { PatronTitle, Title } from '../../../constants/martyrology-metadata';
import { Precedences } from '../../../constants/precedences';
import { CalendarDef } from '../../../models/calendar-def';
import { Inputs } from '../../../types/calendar-def';
import { Europe } from '../../regions/europe';

import { France } from '.';

export class France_Paris extends CalendarDef {
  ParentCalendars = [Europe, France];

  inputs: Inputs = {
    genevieve_of_paris_virgin: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      commonsDef: Common.None,
    },

    most_holy_name_of_jesus: {
      dateDef: { month: 1, date: 4 },
    },

    our_lady_refuge_of_sinners: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 16 },
    },

    mary_of_the_providence_eugenie_smet_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 7 },
      commonsDef: Common.Virgins,
    },

    rosalie_jeanne_marie_rendu_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 9 },
    },

    isabelle_of_france_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 24 },
      commonsDef: Common.Virgins,
    },

    daniel_brottier_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 28 },
    },

    marie_eugenie_of_jesus_milleret_de_brou_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 10 },
      commonsDef: Common.Virgins,
    },

    louise_de_marillac_religious: {
      dateDef: { month: 3, date: 15 },
      commonsDef: Common.Religious,
    },

    mary_of_the_incarnation_barbara_acarie_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 18 },
    },

    madeleine_sophie_barat_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 24 },
      commonsDef: Common.Virgins,
    },

    germain_of_paris_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 28 },
      commonsDef: Common.Bishops,
    },

    clotilde_of_burgundy: {
      precedence: Precedences.ProperMemorial_11b,
      commonsDef: Common.None,
    },

    mary_of_the_sacred_heart_sophie_therese_de_soubiran_la_louviere_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 7 },
      commonsDef: Common.Virgins,
    },

    landry_of_paris_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 10 },
      commonsDef: Common.Bishops,
    },

    dedication_of_the_notre_dame_de_paris_cathedral_paris_france: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 6, date: 16 },
    },

    innocent_v_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 23 },
      commonsDef: Common.Popes,
    },

    // The 2009 proper names the Carmelites as Blessed. They were canonized equipollently on December 18, 2024.
    // src:
    // - mr_fr_2009_ed2_paris_creteil_nanterre_saint_denis
    // - https://press.vatican.va/content/salastampa/en/bollettino/pubblico/2024/12/18/241218d.html
    carmelites_of_compiegne_virgins_and_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 17 },
      commonsDef: [Common.Martyrs, Common.Virgins],
    },

    louis_ix_of_france: {
      precedence: Precedences.ProperMemorial_11b,
    },

    joseph_of_calasanz_priest: {
      dateDef: { month: 8, date: 26 },
    },

    mederic_of_autun_and_droctoveus_of_autun_abbots: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 30 },
      martyrology: ['mederic_of_autun_abbot', 'droctoveus_of_autun_abbot'],
      commonsDef: Common.Religious,
    },

    blessed_martyrs_of_paris: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 2 },
      commonsDef: Common.Martyrs,
    },

    frederic_ozanam_founder: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 9 },
      commonsDef: Common.MercyWorkers,
    },

    ceraunus_of_paris_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 26 },
      commonsDef: Common.Bishops,
    },

    vincent_de_paul_priest: {
      precedence: Precedences.ProperFeast_8f,
    },

    denis_of_paris_bishop: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfADiocese_8a,
      customLocaleId: 'denis_of_paris_bishop_patron_of_the_archdiocese_of_paris',
      dateDef: { month: 10, date: 9 },
      titles: [Title.Martyr, Title.FirstBishop, PatronTitle.PatronOfTheDiocese],
    },

    denis_of_paris_bishop_and_companions_martyrs: {
      drop: true,
    },

    nicholas_barre_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 21 },
      commonsDef: Common.Pastors,
    },

    marcellus_of_paris_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 3 },
      commonsDef: Common.Bishops,
    },

    all_saints_of_the_archdiocese_of_paris: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 8 },
    },

    our_lady_of_the_miraculous_medal: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 27 },
    },

    catherine_zoe_laboure_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 28 },
      commonsDef: [Common.Virgins, Common.Religious],
    },

    charles_of_jesus_de_foucauld: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 1 },
    },
  };
}
