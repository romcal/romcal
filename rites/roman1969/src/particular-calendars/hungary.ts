import { Colors } from '../constants/colors';
import { ProperCycles } from '../constants/cycles';
import { PatronTitle } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

import { Europe } from './europe';

export class Hungary extends CalendarDef {
  ParentCalendar = Europe;

  inputs: Inputs = {
    paul_of_thebes_hermit: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 15 },
    },

    margaret_of_hungary_religious: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 1, date: 18 },
    },

    eusebius_of_esztergom_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 20 },
    },

    ladislaus_batthyany_strattmann: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 22 },
    },

    jacinta_marto_and_francisco_marto: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 20 },
      martyrology: ['jacinta_marto', 'francisco_marto'],
    },

    matthias_apostle: {
      dateDef: { month: 2, date: 24 },
    },

    zoltan_lajos_meszlenyi_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 4 },
    },

    bernadette_soubirous_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 16 },
    },

    adalbert_of_prague_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 4, date: 23 },
    },

    george_of_lydda_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 24 },
    },

    florian_of_lorch_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 4 },
    },

    ceferino_gimenez_malla_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 4 },
    },

    gisela_of_hungary: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 7 },
    },

    sara_salkahazi_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 11 },
    },

    john_nepomucene_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 16 },
    },

    john_scheffler_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 17 },
    },

    william_apor_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 23 },
    },

    our_lady_help_of_christians: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 24 },
    },

    translation_of_the_relics_of_saint_stephen_of_hungary: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 30 },
    },

    quirinus_of_sescia_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 4 },
    },

    agnes_of_bohemia_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 8 },
    },

    istvan_sandor_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 8 },
    },

    yolanda_of_poland_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 6, date: 15 },
    },

    cyril_of_alexandria_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 26 },
    },

    josemaria_escriva_de_balaguer_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 26 },
    },

    ladislaus_i_of_hungary: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 6, date: 27 },
    },

    visitation_of_mary: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 7, date: 2 },
    },

    andrew_zorard_of_nitra_and_benedict_of_skalka_hermits: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 17 },
      martyrology: ['andrew_zorard_of_nitra_hermit', 'benedict_of_skalka_hermit'],
    },

    pavel_peter_gojdic_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 17 },
    },

    kinga_of_poland_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 24 },
    },

    sharbel_makhluf_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 27 },
    },

    innocent_xi_pope: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 8, date: 13 },
    },

    pontian_i_pope_and_hippolytus_of_rome_priest: {
      dateDef: { month: 8, date: 16 },
    },

    bernard_of_clairvaux_abbot: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 8, date: 19 },
    },

    stephen_i_of_hungary: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 8, date: 20 },
    },

    teresa_of_calcutta_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 5 },
    },

    marko_krizin_melchior_grodziecki_and_stephen_pongracz_priests: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 9, date: 7 },
      martyrology: ['marko_krizin_priest', 'melchior_grodziecki_priest', 'stephen_pongracz_priest'],
    },

    most_holy_name_of_mary: {
      precedence: Precedences.ProperMemorial_11b,
    },

    gerard_of_csanad_bishop: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 9, date: 24 },
    },

    szilard_bogdanffy_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 3 },
    },

    our_lady_of_hungary: {
      customLocaleId: 'our_lady_of_hungary_patroness_of_hungary',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 10, date: 8 },
      titles: { append: [PatronTitle.PatronessOfHungary] },
    },

    charles_i_of_austria: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 21 },
    },

    maurus_of_pecs_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 25 },
    },

    theodore_romzha_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 31 },
    },

    commemoration_of_all_the_faithful_departed: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 2 },
      colors: [Colors.Purple, Colors.Black],
    },

    emeric_of_hungary: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 11, date: 5 },
    },

    hungarian_saints_and_blesseds: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 13 },
    },

    gertrude_the_great_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 17 },
    },

    elizabeth_of_hungary_religious: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 11, date: 19 },
    },

    john_brenner_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 15 },
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 4 },
      properCycle: ProperCycles.ProperOfTime,
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
