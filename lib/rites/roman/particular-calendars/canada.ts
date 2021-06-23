import { Precedences } from '@roman-rite/constants/precedences';
import { CalendarDef } from '@roman-rite/models/calendar-def';
import { Americas } from '@roman-rite/particular-calendars/americas';
import { DateDefinitions } from '@roman-rite/types/calendar-def';
import { PatronTitles } from '@romcal/constants/martyrology-metadata';

export class Canada extends CalendarDef {
  inheritFrom = Americas;

  definitions: DateDefinitions = {
    andre_bessette_religious: {
      precedence: Precedences.ProperMemorial_11b,
      date: '1-7',
    },

    raymond_of_penyafort_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-8',
    },

    marguerite_bourgeoys_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '1-12',
    },

    joseph_spouse_of_mary: {
      customLocaleKey: 'joseph_spouse_of_mary_patron_of_canada',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      titles: (titles) => [...titles, PatronTitles.PatronOfCanada],
    },

    kateri_tekakwitha_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-17',
    },

    marie_anne_blondin_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-18',
    },

    our_lady_of_good_counsel: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-26',
    },

    marie_of_the_incarnation_guyart_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-30',
    },

    marie_leonie_paradis_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-4',
    },

    francois_de_montmorency_laval_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-6',
    },

    catherine_of_saint_augustine_de_simon_de_longpre_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-8',
    },

    eugene_de_mazenod_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-21',
    },

    louis_zephirin_moreau_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-24',
    },

    nykyta_budka_and_vasyl_velychkovsky_bishops: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-27',
      martyrology: ['nykyta_budka_bishop', 'vasyl_velychkovsky_bishop'],
    },

    joachim_and_anne_patroness_of_the_province_of_quebec_parents_of_mary: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '7-26',
      martyrology: [
        {
          key: 'anne_mother_of_mary',
          titles: (titles) => [...titles, PatronTitles.PatronessOfTheProvinceOfQuebec],
        },
        'joachim_father_of_mary',
      ],
    },

    frederic_janssoone_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-5',
    },

    andre_grasset_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-2',
    },

    dina_belanger_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-4',
    },

    emilie_tavernier_gamelin_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-24',
    },

    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs_copatrons_of_canada: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '9-26',
      titles: (titles) => [...titles, PatronTitles.CopatronsOfCanada],
      martyrology: ['john_de_brebeuf_priest', 'isaac_jogues_priest', 'companions_martyrs'],
    },

    nereus_of_terracina_and_achilleus_of_terracina_martyrs: {
      precedence: Precedences.ProperFeast_8f,
      date: '9-26',
    },

    pancras_of_rome_martyr: {
      precedence: Precedences.ProperFeast_8f,
      date: '9-26',
    },

    marie_rose_durocher_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-6',
    },

    marguerite_dyouville_religious: {
      precedence: Precedences.ProperMemorial_11b,
      date: '10-16',
    },

    hedwig_of_silesia_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-20',
    },

    margaret_mary_alacoque_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-20',
    },
  };
}
