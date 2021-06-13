import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';

export class Portugal extends CalendarDef {
  definitions: DateDefinitions = {
    gundisalvus_of_amarante_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-11',
    },

    john_de_britto_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '2-4',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    five_wounds_of_the_lord: {
      precedence: Precedences.ProperFeast_8f,
      date: '2-7',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop_copatrons_of_europe:
      {
        precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
        date: '2-14',
        liturgicalColors: LiturgicalColors.WHITE,
        // metadata: {
        //   titles: [Titles.PATRON_OF_EUROPE],
        // },
      },

    theotonius_of_coimbra_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '2-18',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    jacinta_marto_and_francisco_marto: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-20',
    },

    john_of_god_duarte_cidade_religious: {
      precedence: Precedences.ProperMemorial_11b,
      date: '3-8',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    catherine_of_siena_virgin_copatroness_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '4-29',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    joan_of_portugal_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-12',
    },

    our_lady_of_fatima: {
      precedence: Precedences.ProperFeast_8f,
      date: '5-13',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    guardian_angel_of_portugal: {
      precedence: Precedences.ProperMemorial_11b,
      date: '6-10',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    anthony_of_padua_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: '6-13',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    sancha_of_portugal_and_mafalda_of_portugal_virgins: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-20',
    },

    teresa_of_portugal_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-20',
    },

    elizabeth_of_portugal: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-4',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    benedict_of_nursia_abbot_patron_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '7-11',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.PATRON_OF_EUROPE],
      // },
    },

    ignatius_de_azevedo_priest_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-17',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    bartholomew_of_the_martyrs_fernandes_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-18',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    bridget_of_sweden_religious_copatroness_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '7-23',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.PATRON_OF_EUROPE],
      // },
    },

    teresa_benedicta_of_the_cross_stein_virgin_copatroness_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '8-9',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR, Titles.PATRON_OF_EUROPE],
      // },
    },

    beatrice_da_silva_meneses_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-1',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    denis_of_paris_bishop_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-9',
    },

    john_leonardi_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-9',
    },

    gundisalvus_of_lagos_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-27',
    },

    nuno_of_saint_mary_pereira_religious: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-6',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    fructuosus_of_braga_martin_of_braga_and_gerald_of_braga_bishops: {
      precedence: Precedences.ProperMemorial_11b,
      date: '12-5',
      liturgicalColors: LiturgicalColors.WHITE,
    },
  };
}
