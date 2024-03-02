import { PatronTitle, Title } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

import { France } from './france';

export class France_Strasbourg extends CalendarDef {
  ParentCalendar = France;

  inputs: Inputs = {
    amarin_of_alsace_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 27 },
    },

    brigid_of_kildare_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 1 },
    },

    ludan_of_scotland_pilgrim: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 12 },
    },

    benedict_of_aniane_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 13 },
    },

    fridolin_of_sackingen_monk: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 6 },
    },

    leo_ix_pope: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 4, date: 19 },
    },

    peter_canisius_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 27 },
    },

    urban_i_pope: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 25 },
    },

    morand_of_cluny_monk: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 4 },
    },

    modestus_andlauer_and_andrew_bauer_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 19 },
      martyrology: ['modestus_andlauer_martyr', 'andrew_bauer_martyr'],
    },

    ulrich_of_augsburg_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 4 },
    },

    translation_of_the_relics_of_odile_of_alsace_abbess: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 7 },
      martyrology: ['odile_of_alsace_abbess'],
    },

    arbogast_of_strasbourg_bishop: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfADiocese_8a,
      customLocaleId: 'arbogast_of_strasbourg_bishop_patron_of_the_archdiocese_of_strasbourg',
      dateDef: { month: 7, date: 21 },
      titles: { append: [PatronTitle.PatronOfTheDiocese] },
    },

    thomas_jean_georges_rehm_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 12 },
    },

    adelphus_of_metz_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 30 },
    },

    dedication_of_the_cathedral_of_notre_dame_de_strasbourg_france: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 9, date: 7 },
    },

    most_holy_name_of_mary: {
      dateDef: { month: 9, date: 11 },
    },

    maternus_of_cologne_valerius_of_trier_and_eucharius_of_trier_bishops: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 12 },
      martyrology: ['maternus_of_cologne_bishop', 'valerius_of_trier_bishop', 'eucharius_of_trier_bishop'],
    },

    lambert_of_maastricht_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 17 },
    },

    richardis_of_swabia_empress: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 18 },
    },

    maurice_of_agaunum_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 22 },
      martyrology: ['maurice_of_agaunum_martyr', 'companions_martyrs'],
    },

    eugenia_of_alsace_and_attala_of_alsace_virgins: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 25 },
      martyrology: ['eugenia_of_alsace_virgin', 'attala_of_alsace_virgin'],
    },

    leodegar_of_autun_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 5 },
    },

    aurelia_of_strasbourg_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 13 },
    },

    gall_of_switzerland_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 16 },
    },

    wendelin_of_trier_hermit: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 20 },
    },

    amandus_of_strasbourg_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 26 },
      titles: [Title.FirstBishop],
    },

    pirmin_of_hornbach_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 3 },
    },

    florentius_of_strasbourg_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 7 },
    },

    charles_of_jesus_de_foucauld: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 1 },
    },

    odile_of_alsace_abbess: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfADiocese_8a,
      customLocaleId: 'odile_of_alsace_abbess_patroness_of_alsace',
      dateDef: { month: 12, date: 13 },
      titles: { append: [PatronTitle.PatronessOfAlsace] },
    },

    lucy_of_syracuse_virgin: {
      dateDef: { month: 12, date: 15 },
    },

    adelaide_of_burgundy_empress: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 16 },
    },
  };
}
