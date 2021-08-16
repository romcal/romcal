import { CalendarDef } from '@romcal/models/calendar-def';
import { InputDefinitions } from '@romcal/types/calendar-def';
import { France } from '@romcal/particular-calendars/france';
import { Precedences } from '@romcal/constants/precedences';
import { PatronTitles, Titles } from '@romcal/constants/martyrology-metadata';

export class France_Strasbourg extends CalendarDef {
  parentCalendar = France;

  definitions: InputDefinitions = {
    amarin_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 27 },
    },

    brigid_of_kildare_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 1 },
    },

    ludan_pilgrim: {
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

    urban_i_pape: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 25 },
    },

    morandus_of_cluny_monk: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 4 },
    },

    modeste_andlauer_and_andre_bauer_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 19 },
      martyrology: ['modeste_andlauer_martyr', 'andre_bauer_martyr'],
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

    arbogast_of_strassburg_bishop: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfADiocese_8a,
      customLocaleKey: 'arbogast_of_strassburg_bishop_patron_of_the_diocese_of_strasbourg',
      dateDef: { month: 7, date: 21 },
      titles: { append: [PatronTitles.PatronOfTheDiocese] },
    },

    jean_georges_rehm_priest_and_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 12 },
    },

    adelphus_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 30 },
    },

    dedication_of_the_cathedral_of_strasbourg: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 9, date: 7 },
    },

    most_holy_name_of_mary: {
      dateDef: { month: 9, date: 11 },
    },

    maternus_of_cologne_and_valerius_of_treves_and_eucharius_first_apostles_of_alsace: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 12 },
      martyrology: [
        'maternus_of_cologne_bishop',
        'valerius_of_treves_bishop',
        'eucharius_of_treves_bishop',
      ],
    },

    lambert_of_maastricht_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 17 },
    },

    richardis_of_swabi: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 18 },
    },

    maurice_of_agaunum_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 22 },
      martyrology: ['maurice_of_agaunum_martyr', 'companions_martyrs'],
    },

    eugenie_and_attale_of_alsace: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 25 },
      martyrology: ['eugenie_of_alsace_virgin', 'attale_of_alsace_virgin'],
    },

    leodegar_bishop_and_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 5 },
    },

    aurelia_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 13 },
    },

    gall_of_switzerland_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 16 },
    },

    wendelin_of_trier_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 20 },
    },

    amandus_of_strasbourg_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      customLocaleKey: 'amandus_first_bishop_of_strasbourg',
      dateDef: { month: 10, date: 26 },
      titles: [Titles.FirstBishop],
    },

    pirmin_of_hornbach_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 3 },
    },

    florentius_of_strasbourg_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 7 },
    },

    charles_de_foucauld: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 1 },
    },

    odile_of_alsace_abbess: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfADiocese_8a,
      customLocaleKey: 'odile_of_alsace_abbess_patroness_of_alsace',
      dateDef: { month: 12, date: 13 },
      titles: { append: [PatronTitles.PatronessOfAlsace] },
    },

    lucy_of_syracuse_virgin: {
      dateDef: { month: 12, date: 15 },
    },

    adelaide_of_burgundy: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 16 },
    },
  };
}
