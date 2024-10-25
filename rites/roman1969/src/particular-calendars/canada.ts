import { CommonDefinition as Common } from '../constants/commons';
import { PatronTitle } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs, ParticularConfig } from '../types/calendar-def';

import { Americas } from './americas';

export class Canada extends CalendarDef {
  ParentCalendar = Americas;

  particularConfig: ParticularConfig = {
    epiphanyOnSunday: true, // src: mr_fr_2021_ed3
    ascensionOnSunday: true, // src: https://www.cccb.ca/wp-content/uploads/2023/09/2023-2024.pdf#page=6
    corpusChristiOnSunday: true, // src: https://www.cccb.ca/wp-content/uploads/2023/05/Ordo_Pastoral_Notes.pdf#page=92
  };

  inputs: Inputs = {
    // src: mr_fr_2021_ed3
    andre_bessette_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 1, date: 7 },
      commonsDef: Common.None,
    },

    // src: mr_fr_2021_ed3
    raymond_of_penyafort_priest: {
      dateDef: { month: 1, date: 8 },
    },

    // src: mr_fr_2021_ed3
    marguerite_bourgeoys_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 1, date: 12 },
      commonsDef: Common.None,
    },

    // src: mr_fr_2021_ed3
    joseph_spouse_of_mary: {
      customLocaleId: 'joseph_spouse_of_mary_patron_of_canada',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      titles: { append: [PatronTitle.PatronOfCanada] },
    },

    // src: mr_fr_2021_ed3
    kateri_tekakwitha_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 4, date: 17 },
      commonsDef: Common.None,
    },

    // src: mr_fr_2021_ed3
    marie_anne_blondin_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 18 },
      commonsDef: Common.Virgins,
    },

    // src: mr_fr_2021_ed3
    our_lady_of_good_counsel: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 26 },
      commonsDef: Common.None,
    },

    // src: mr_fr_2021_ed3
    mary_of_the_incarnation_marie_guyart_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 4, date: 30 },
      commonsDef: Common.None,
    },

    // src: mr_fr_2021_ed3
    pius_v_pope: {
      dateDef: { month: 5, date: 1 },
    },

    // src: mr_fr_2021_ed3
    marie_leonie_paradis_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 4 },
      commonsDef: Common.Virgins,
    },

    // src: mr_fr_2021_ed3
    francois_de_montmorency_laval_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 6 },
      commonsDef: Common.None,
    },

    // src: mr_fr_2021_ed3
    mary_catherine_of_saint_augustine_catherine_de_simon_de_longpre_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 8 },
      commonsDef: [Common.Virgins, Common.MercyWorkers],
    },

    // src: mr_fr_2021_ed3
    eugene_de_mazenod_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 21 },
      commonsDef: [Common.Bishops, Common.Missionaries],
    },

    // src: mr_fr_2021_ed3
    louis_zephirin_moreau_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 24 },
      commonsDef: Common.Bishops,
    },

    // src: mr_fr_2021_ed3
    nykyta_budka_and_vasyl_velychkovsky_bishops: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 27 },
      commonsDef: [Common.Martyrs, Common.Pastors],
      martyrology: ['nykyta_budka_bishop', 'vasyl_velychkovsky_bishop'],
    },

    // src: mr_fr_2021_ed3
    canada_day: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 1 },
      commonsDef: Common.None,
    },

    // src: mr_fr_2021_ed3
    joachim_and_anne_parents_of_mary: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      customLocaleId: 'joachim_and_anne_patroness_of_the_province_of_quebec_parents_of_mary',
      martyrology: [
        {
          id: 'anne_mother_of_mary',
          titles: { append: [PatronTitle.PatronessOfTheProvinceOfQuebec] },
        },
        'joachim_father_of_mary',
      ],
    },

    // src: mr_fr_2021_ed3
    frederic_janssoone_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 5 },
      commonsDef: Common.Pastors,
    },

    // src: mr_fr_2021_ed3
    labor_day: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, nthWeekInMonth: 1, dayOfWeek: 1 },
      commonsDef: Common.None,
    },

    // src: mr_fr_2021_ed3
    andre_grasset_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 2 },
      commonsDef: [Common.Martyrs, Common.Pastors],
    },

    // src: mr_fr_2021_ed3
    dina_belanger_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 4 },
      commonsDef: Common.Virgins,
    },

    // src: mr_fr_2021_ed3
    emilie_tavernier_gamelin_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 24 },
      commonsDef: Common.Religious,
    },

    // src: mr_fr_2021_ed3
    cosmas_of_cilicia_and_damian_of_cilicia_martyrs: {
      dateDef: { month: 9, date: 25 },
    },

    // src: mr_fr_2021_ed3
    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs: {
      customLocaleId: 'john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs_copatrons_of_canada',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      dateDef: { month: 9, date: 26 },
      commonsDef: Common.None,
      titles: { append: [PatronTitle.CopatronOfCanada] },
    },

    // src: mr_fr_2021_ed3
    marie_rose_durocher_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 6 },
      commonsDef: Common.Virgins,
    },

    // src: mr_fr_2021_ed3
    thanksgiving_day: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, nthWeekInMonth: 2, dayOfWeek: 1 },
      commonsDef: Common.None,
    },

    // src: mr_fr_2021_ed3
    marguerite_dyouville_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 16 },
      commonsDef: Common.None,
    },

    // src: mr_fr_2021_ed3
    hedwig_of_silesia_religious: {
      dateDef: { month: 10, date: 20 },
    },

    // src: mr_fr_2021_ed3
    margaret_mary_alacoque_virgin: {
      dateDef: { month: 10, date: 20 },
    },

    // src: mr_fr_2021_ed3
    dedication_of_consecrated_churches: {
      precedence: Precedences.ProperSolemnity_DedicationOfTheOwnChurch_4b,
      dateDef: { month: 10, date: 25 },
      isOptional: true,
      commonsDef: Common.DedicationAnniversary_Inside,
    },
  };
}
