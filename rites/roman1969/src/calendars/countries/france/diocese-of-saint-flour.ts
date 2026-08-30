import { CommonDefinition as Common, PatronTitle, Precedences, CalendarDef } from '@internal/generator';
import type { Inputs } from '@internal/generator';

import { Europe } from '../../regions/europe';

import { France } from '.';

// src:
// - mr_fr_1974_ed1_region_apostolique_du_midi
// - https://diocese15.fr/diocese/histoire-du-diocese/les-grandes-figures-du-diocese/
// - https://gcatholic.org/calendar/2026/FR-zflo0-fr (secondary calendar)
export class France_SaintFlour extends CalendarDef {
  ParentCalendars = [Europe, France];

  inputs: Inputs = {
    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://diocese15.fr/janvier/
    odilo_of_cluny_abbot: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 1, date: 4 },
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://diocese15.fr/janvier/
    // Neither proper prescribes a rank, so an optional memorial is used.
    till_of_solignac_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 7 },
      commonsDef: Common.Religious,
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://gcatholic.org/calendar/2026/FR-zflo0-fr (secondary calendar)
    // The 1974 proper prescribed a mandatory memorial. The current secondary calendar lists the optional
    // memorial inherited from France. Its complete Tarbes proper replaces the inherited common.
    bernadette_soubirous_virgin: {
      commonsDef: Common.None,
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://diocese15.fr/accueil/vivre-sa-foi/vie-spirituelle/les-grandes-fetes-du-diocese/avril/
    // The 1974 proper prescribed 17 April; the 2001 proper uses 24 April. Neither prescribes a rank.
    robert_of_turlande_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 24 },
      commonsDef: Common.Religious,
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://diocese15.fr/accueil/vivre-sa-foi/vie-spirituelle/les-grandes-fetes-du-diocese/mai/
    // The 1974 proper prescribed 8 May; the 2001 proper uses 9 May.
    our_lady_of_miracles_of_mauriac: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 9 },
      commonsDef: Common.BlessedVirginMary,
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://diocese15.fr/accueil/vivre-sa-foi/vie-spirituelle/les-grandes-fetes-du-diocese/juin/
    // - https://diocese15.fr/wp-content/uploads/2025/04/ANNUAIRE-DIOCESAIN-SAINT-FLOUR.pdf
    // The secondary calendar lists a solemnity, but the 1974 proper and the current diocesan directory call
    // this a feast. This is the proper rank of the principal patron of a diocese.
    flour_of_saint_flour: {
      customLocaleId: 'flour_of_saint_flour_principal_patron_of_the_diocese_of_saint_flour',
      precedence: Precedences.ProperFeast_PrincipalPatronOfADiocese_8a,
      dateDef: { month: 6, date: 1 },
      titles: { append: [PatronTitle.PrincipalPatronOfTheDiocese] },
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://diocese15.fr/accueil/vivre-sa-foi/vie-spirituelle/les-grandes-fetes-du-diocese/juin/
    theodechilde_of_sens_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 7 },
      commonsDef: Common.Virgins,
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://diocese15.fr/accueil/vivre-sa-foi/vie-spirituelle/les-grandes-fetes-du-diocese/juin/
    // - https://www.vatican.va/content/benedict-xvi/fr/homilies/2012/documents/hf_ben-xvi_hom_20121021_canonizzazioni.html
    // The 1974 proper called Jacques Berthieu Blessed; he was canonized in 2012.
    jacques_berthieu_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 8 },
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://diocese15.fr/accueil/vivre-sa-foi/vie-spirituelle/les-grandes-fetes-du-diocese/juin/
    mary_of_montjournal_hermit: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 9 },
    },

    // src: https://diocese15.fr/accueil/vivre-sa-foi/vie-spirituelle/les-grandes-fetes-du-diocese/juillet/
    // This celebration was added to the 2001 proper after Catherine Jarrige's beatification in 1996.
    catherine_jarrige_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 4 },
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://diocese15.fr/accueil/vivre-sa-foi/vie-spirituelle/les-grandes-fetes-du-diocese/aout/
    // The 1974 proper used his civil name, Pierre Romançon; the 2001 proper uses his religious name, Bénilde.
    benildus_romancon_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 13 },
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://diocese15.fr/accueil/vivre-sa-foi/vie-spirituelle/les-grandes-fetes-du-diocese/aout/
    // This is a solemnity only in Murat. Since no child calendar currently exists for Murat, the diocesan
    // calendar retains the mandatory memorial prescribed elsewhere in the diocese.
    our_lady_of_the_olives: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 8, date: 22 },
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://diocese15.fr/accueil/vivre-sa-foi/vie-spirituelle/les-grandes-fetes-du-diocese/septembre/
    francois_louis_meallet_de_fargues_priest_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 2 },
      martyrology: ['francois_louis_meallet_de_fargues_priest', 'companions_martyrs'],
      commonsDef: Common.Martyrs,
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://diocese15.fr/accueil/vivre-sa-foi/vie-spirituelle/les-grandes-fetes-du-diocese/septembre/
    // The 1974 proper called Saint John Gabriel Perboyre Blessed; he was canonized in 1996.
    john_gabriel_perboyre_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 11 },
      commonsDef: Common.Martyrs,
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://diocese15.fr/accueil/vivre-sa-foi/vie-spirituelle/les-grandes-fetes-du-diocese/octobre/
    fleur_of_issendolus_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 5 },
      commonsDef: Common.Virgins,
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://diocese15.fr/accueil/vivre-sa-foi/vie-spirituelle/les-grandes-fetes-du-diocese/octobre/
    gausbert_of_montsalvy_and_bernard_of_rodez_abbots: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 11 },
      martyrology: ['gausbert_of_montsalvy_abbot', 'bernard_of_rodez_abbot'],
    },

    // src: https://diocese15.fr/accueil/vivre-sa-foi/vie-spirituelle/les-grandes-fetes-du-diocese/octobre/
    // This celebration was added to the 2001 proper.
    dismas_the_good_thief: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 12 },
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://diocese15.fr/accueil/vivre-sa-foi/vie-spirituelle/les-grandes-fetes-du-diocese/octobre/
    // - https://diocese15.fr/diocese/histoire-du-diocese/les-grandes-figures-du-diocese/saint-geraud-daurillac/
    // Saint Gerald is patron of Haute-Auvergne, but no primary source identifies him as a second patron
    // of the diocese.
    gerald_of_aurillac: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 13 },
    },

    // src: https://diocese15.fr/accueil/vivre-sa-foi/vie-spirituelle/les-grandes-fetes-du-diocese/octobre/
    // This celebration was added to the 2001 proper after Agnes of Jesus's beatification in 1994.
    agnes_of_jesus_galand_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 19 },
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://diocese15.fr/accueil/vivre-sa-foi/vie-spirituelle/les-grandes-fetes-du-diocese/novembre/
    // The 1974 proper prescribed 3 November without a rank; the 2001 proper and current secondary calendar
    // use 8 November, where the latter prescribes a mandatory memorial.
    austremonius_of_clermont_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 8 },
      commonsDef: Common.Bishops,
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://diocese15.fr/accueil/vivre-sa-foi/vie-spirituelle/les-grandes-fetes-du-diocese/novembre/
    adeltrude_of_aurillac: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 14 },
      commonsDef: Common.Saints,
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://diocese15.fr/accueil/vivre-sa-foi/vie-spirituelle/les-grandes-fetes-du-diocese/novembre/
    // The 1974 proper prescribed 27 November; the 2001 proper uses 18 November. Neither prescribes a rank.
    odo_of_cluny_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 18 },
      commonsDef: Common.Religious,
    },

    // src:
    // - mr_fr_1974_ed1_region_apostolique_du_midi
    // - https://diocese15.fr/accueil/vivre-sa-foi/vie-spirituelle/les-grandes-fetes-du-diocese/decembre/
    // - https://diocese15.fr/diocese/histoire-du-diocese/
    // This is a solemnity only in the cathedral; the diocesan calendar therefore retains the feast.
    dedication_of_the_cathedral_of_saint_peter_saint_flour_france: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 12, date: 7 },
      commonsDef: Common.DedicationAnniversary_Outside,
    },
  };
}
