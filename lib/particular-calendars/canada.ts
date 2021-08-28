import { PatronTitles } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { InputDefinitions } from '../types/calendar-def';
import { Americas } from './americas';

export class Canada extends CalendarDef {
  parentCalendar = Americas;

  definitions: InputDefinitions = {
    andre_bessette_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 1, date: 7 },
    },

    raymond_of_penyafort_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 8 },
    },

    marguerite_bourgeoys_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 1, date: 12 },
    },

    joseph_spouse_of_mary: {
      customLocaleKey: 'joseph_spouse_of_mary_patron_of_canada',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      titles: { append: [PatronTitles.PatronOfCanada] },
    },

    kateri_tekakwitha_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 17 },
    },

    marie_anne_blondin_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 18 },
    },

    our_lady_of_good_counsel: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 26 },
    },

    marie_of_the_incarnation_guyart_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 30 },
    },

    marie_leonie_paradis_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 4 },
    },

    francois_de_montmorency_laval_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 6 },
    },

    catherine_of_saint_augustine_de_simon_de_longpre_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 8 },
    },

    eugene_de_mazenod_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 21 },
    },

    louis_zephirin_moreau_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 24 },
    },

    nykyta_budka_and_vasyl_velychkovsky_bishops: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 27 },
      martyrology: ['nykyta_budka_bishop', 'vasyl_velychkovsky_bishop'],
    },

    joachim_and_anne_patroness_of_the_province_of_quebec_parents_of_mary: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      dateDef: { month: 7, date: 26 },
      martyrology: [
        {
          key: 'anne_mother_of_mary',
          titles: { append: [PatronTitles.PatronessOfTheProvinceOfQuebec] },
        },
        'joachim_father_of_mary',
      ],
    },

    frederic_janssoone_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 5 },
    },

    andre_grasset_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 2 },
    },

    dina_belanger_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 4 },
    },

    emilie_tavernier_gamelin_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 24 },
    },

    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs_copatrons_of_canada: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      dateDef: { month: 9, date: 26 },
      titles: { append: [PatronTitles.CopatronOfCanada] },
      martyrology: ['john_de_brebeuf_priest', 'isaac_jogues_priest', 'companions_martyrs'],
    },

    nereus_of_terracina_and_achilleus_of_terracina_martyrs: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 9, date: 26 },
    },

    pancras_of_rome_martyr: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 9, date: 26 },
    },

    marie_rose_durocher_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 6 },
    },

    marguerite_dyouville_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 16 },
    },

    hedwig_of_silesia_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 20 },
    },

    margaret_mary_alacoque_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 20 },
    },

    dedication_of_consecrated_churches_on_october_25: {
      dateDef: { month: 10, date: 22 },
    },

    dedication_of_consecrated_churches_on_last_sunday_of_october: {
      drop: true,
    },
  };
}
