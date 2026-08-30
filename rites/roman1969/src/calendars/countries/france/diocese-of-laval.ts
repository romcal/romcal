import { PatronTitle, Title, Precedences, CalendarDef, Inputs } from '@internal/generator';

import { Europe } from '../../regions/europe';

import { France } from '.';

// src:
// - mr_fr_1998_ed1_laval
// - https://diocesedelaval.fr/le-propre-du-diocese-de-laval/
export class France_Laval extends CalendarDef {
  ParentCalendars = [Europe, France];

  inputs: Inputs = {
    // src: mr_fr_1998_ed1_laval
    // This celebration is a solemnity in Pontmain.
    our_lady_of_pontmain: {
      dateDef: { month: 1, date: 17 },
      precedence: Precedences.ProperFeast_8f,
    },

    // src: mr_fr_1998_ed1_laval
    anthony_of_egypt_abbot: {
      dateDef: { month: 1, date: 18 },
    },

    // src: mr_fr_1998_ed1_laval
    jean_turpin_du_cormier_priest_and_companions_martyrs: {
      dateDef: { month: 1, date: 22 },
      martyrology: ['jean_baptiste_turpin_du_cormier_priest_martyr', { id: 'companions_martyrs', count: 18 }],
      precedence: Precedences.ProperMemorial_11b,
    },

    // src: mr_fr_1998_ed1_laval
    julian_of_le_mans_bishop: {
      customLocaleId: 'julian_of_le_mans_bishop_second_patron_of_the_diocese_of_laval',
      dateDef: { month: 1, date: 27 },
      precedence: Precedences.ProperMemorial_SecondPatron_11a,
      titles: [Title.FirstBishop, PatronTitle.SecondPatronOfTheDiocese],
    },

    // src: mr_fr_1998_ed1_laval
    jacques_ledoyen_priest_and_companions_martyrs: {
      dateDef: { month: 2, date: 1 },
      martyrology: ['jacques_ledoyen_priest_martyr', { id: 'companions_martyrs', count: 4 }],
      precedence: Precedences.OptionalMemorial_12,
    },

    // The printed title calls Bernard and Vital Blesseds; the Roman Martyrology identifies them as Saints.
    // src: mr_fr_1998_ed1_laval
    william_firmatus_robert_of_arbrissel_bernard_of_tiron_raoul_de_la_futaie_and_vitalis_of_savigny_hermits: {
      dateDef: { month: 2, date: 24 },
      martyrology: [
        'william_firmatus_abbot',
        'robert_of_arbrissel_priest',
        'bernard_of_tiron_abbot',
        'raoul_de_la_futaie_priest',
        'vitalis_of_savigny_abbot',
      ],
      precedence: Precedences.ProperMemorial_11b,
    },

    // src: mr_fr_1998_ed1_laval
    calais_of_anisole_and_siviard_of_anisole_abbots: {
      dateDef: { month: 7, date: 1 },
      martyrology: ['calais_of_anisole_abbot', 'siviard_of_anisole_abbot'],
      precedence: Precedences.OptionalMemorial_12,
    },

    // src: mr_fr_1998_ed1_laval
    fraimbault_of_lassay_constantien_of_javron_and_cenere_of_saulges_hermits: {
      dateDef: { month: 8, date: 16 },
      martyrology: ['fraimbault_of_lassay_hermit', 'constantien_of_javron_hermit', 'cenere_of_saulges_hermit'],
      precedence: Precedences.ProperMemorial_11b,
    },

    // src: mr_fr_1998_ed1_laval
    charles_collas_du_bignon_priest_martyr: {
      dateDef: { month: 8, date: 18 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // The 1998 proper named her Blessed; she was canonized on 11 October 2009.
    // src: https://diocesedelaval.fr/le-propre-du-diocese-de-laval/
    jeanne_jugan_virgin: {
      dateDef: { month: 8, date: 30 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // The current official calendar retains 2 September; a 2025 diocesan hagiographical article mentions
    // 1 September without a normative calendar or ordo update.
    // src:
    // - mr_fr_1998_ed1_laval
    // - https://diocesedelaval.fr/le-propre-du-diocese-de-laval/
    // - https://diocesedelaval.fr/bienheureux-thomas-dubuisson-et-louis-lanier-deux-martyrs-de-la-revolution-fils-de-notre-terre-mayennaise/
    thomas_dubuisson_and_louis_lanier_priests_martyrs: {
      dateDef: { month: 9, date: 2 },
      martyrology: ['thomas_rene_dubuisson_priest_martyr', 'louis_mathieu_lanier_priest_martyr'],
      precedence: Precedences.ProperMemorial_11b,
    },

    // src: mr_fr_1998_ed1_laval
    charles_of_blois: {
      dateDef: { month: 9, date: 28 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // src: mr_fr_1998_ed1_laval
    margaret_of_lorraine_religious: {
      dateDef: { month: 11, date: 3 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // src: mr_fr_1998_ed1_laval
    holy_bishops_of_le_mans: {
      dateDef: { month: 11, date: 8 },
      precedence: Precedences.ProperMemorial_11b,
    },

    // src: mr_fr_1998_ed1_laval
    dedication_of_the_cathedral_of_the_holy_trinity_laval_france: {
      dateDef: { month: 11, date: 22 },
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
    },

    // src: mr_fr_1998_ed1_laval
    cecilia_of_rome_virgin: {
      dateDef: { month: 11, date: 23 },
      precedence: Precedences.OptionalMemorial_12,
    },

    // src: mr_fr_1998_ed1_laval
    // This celebration is a solemnity in the city of Laval.
    tugdual_of_treguier_bishop: {
      customLocaleId: 'tugdual_of_treguier_bishop_patron_of_the_city_of_laval',
      dateDef: { month: 12, date: 1 },
      precedence: Precedences.OptionalMemorial_12,
      titles: { append: [PatronTitle.PatronOfTheCityOfLaval] },
    },

    // src: mr_fr_1998_ed1_laval
    immaculate_conception_of_the_blessed_virgin_mary: {
      customLocaleId: 'immaculate_conception_of_the_blessed_virgin_mary_principal_patroness_of_the_diocese_of_laval',
      titles: { append: [PatronTitle.PrincipalPatronOfTheDiocese] },
    },
  };
}
