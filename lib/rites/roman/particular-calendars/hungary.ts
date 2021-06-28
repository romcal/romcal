import { LiturgicalColors } from '@roman-rite/constants/colors';
import { ProperCycles } from '@roman-rite/constants/cycles';
import { Precedences } from '@roman-rite/constants/precedences';
import { CalendarDef } from '@roman-rite/models/calendar-def';
import { Europe } from '@roman-rite/particular-calendars/europe';
import { DateDefinitions } from '@roman-rite/types/calendar-def';
import { PatronTitles } from '@romcal/constants/martyrology-metadata';

export class Hungary extends CalendarDef {
  inheritFrom = Europe;

  definitions: DateDefinitions = {
    paul_of_thebes_hermit: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-15',
    },

    margaret_of_hungary_religious: {
      precedence: Precedences.ProperFeast_8f,
      date: '1-18',
    },

    eusebius_of_esztergom_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-20',
    },

    ladislaus_batthyany_strattmann: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-22',
    },

    jacinta_marto_and_francisco_marto: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-20',
      martyrology: ['jacinta_marto', 'francisco_marto'],
    },

    matthias_apostle: {
      date: '2-24',
    },

    zoltan_lajos_meszlenyi_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-4',
    },

    bernadette_soubirous_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-16',
    },

    adalbert_of_prague_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '4-23',
    },

    george_of_lydda_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-24',
    },

    florian_of_lorch_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-4',
    },

    ceferino_gimenez_malla_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-4',
    },

    gisela_of_hungary: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-7',
    },

    sara_salkahazi_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-11',
    },

    john_nepomucene_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-16',
    },

    john_scheffler_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-17',
    },

    william_apor_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-23',
    },

    our_lady_help_of_christians: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-24',
    },

    translation_of_the_relics_of_saint_stephen_of_hungary: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-30',
    },

    quirinus_of_sescia_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-4',
    },

    agnes_of_bohemia_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-8',
    },

    istvan_sandor_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-8',
    },

    yolanda_of_poland_religious: {
      precedence: Precedences.ProperMemorial_11b,
      date: '6-15',
    },

    cyril_of_alexandria_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-26',
    },

    josemaria_escriva_de_balaguer_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-26',
    },

    ladislaus_i_of_hungary: {
      precedence: Precedences.ProperFeast_8f,
      date: '6-27',
    },

    visitation_of_mary: {
      precedence: Precedences.ProperFeast_8f,
      date: '7-2',
    },

    andrew_zorard_of_nitra_and_benedict_of_skalka_hermits: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-17',
      martyrology: ['andrew_zorard_of_nitra_hermit', 'benedict_of_skalka_hermit'],
    },

    pavel_peter_gojdic_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-17',
    },

    kinga_of_poland_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-24',
    },

    sharbel_makhluf_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-27',
    },

    innocent_xi_pope: {
      precedence: Precedences.ProperMemorial_11b,
      date: '8-13',
    },

    pontian_i_pope_and_hippolytus_of_rome_priest: {
      date: '8-16',
    },

    bernard_of_clairvaux_abbot: {
      precedence: Precedences.ProperMemorial_11b,
      date: '8-19',
    },

    stephen_i_of_hungary: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '8-20',
    },

    teresa_of_calcutta_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-5',
    },

    marko_krizin_melchior_grodziecki_and_stephen_pongracz_priests: {
      precedence: Precedences.ProperFeast_8f,
      date: '9-7',
      martyrology: ['marko_krizin_priest', 'melchior_grodziecki_priest', 'stephen_pongracz_priest'],
    },

    most_holy_name_of_mary: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-12',
    },

    gerard_of_csanad_bishop: {
      precedence: Precedences.ProperFeast_8f,
      date: '9-24',
    },

    szilard_bogdanffy_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-3',
    },

    our_lady_of_hungary: {
      customLocaleKey: 'our_lady_of_hungary_patroness_of_hungary',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '10-8',
      titles: (titles) => [...titles, PatronTitles.PatronessOfHungary],
    },

    charles_i_of_austria: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-21',
    },

    maurus_of_pecs_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '10-25',
    },

    theodore_romzha_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-31',
    },

    all_souls: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-2',
      liturgicalColors: [LiturgicalColors.PURPLE, LiturgicalColors.BLACK],
    },

    emeric_of_hungary: {
      precedence: Precedences.ProperFeast_8f,
      date: '11-5',
    },

    hungarian_saints_and_blesseds: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-13',
    },

    gertrude_the_great_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-17',
    },

    elizabeth_of_hungary_religious: {
      precedence: Precedences.ProperFeast_8f,
      date: '11-19',
    },

    john_brenner_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-15',
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: (year) => this.dates.pentecostSunday(year).add(4, 'day'),
      properCycle: ProperCycles.PROPER_OF_TIME,
    },

    stephen_the_first_martyr: {
      isHolyDayOfObligation: true,
    },

    easter_monday: {
      isHolyDayOfObligation: true,
    },

    mary_mother_of_the_church: {
      isHolyDayOfObligation: true,
    },
  };
}
