import { ProperCycles } from '../constants/cycles';
import { PatronTitle, Title } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

import { Europe } from './europe';

export class Poland extends CalendarDef {
  ParentCalendar = Europe;

  inputs: Inputs = {
    joseph_sebastian_pelczar_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 1, date: 19 },
    },

    vincent_pallotti_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 22 },
    },

    vincent_lewoniuk_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 23 },
      martyrology: ['vincent_lewoniuk_martyr', 'companions_martyrs'],
    },

    george_matulaitis_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 27 },
    },

    boleslawa_mary_lament_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 29 },
    },

    angela_merici_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 29 },
    },

    casimir_of_poland: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 3, date: 4 },
    },

    adalbert_of_prague_bishop: {
      customLocaleId: 'adalbert_of_prague_bishop_patron_of_poland',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 4, date: 23 },
      // When it falls between Palm Sunday and the Second Sunday of Easter inclusive,
      // it is transferred to the Monday after the Second Sunday of Easter
      dateExceptions: {
        ifIsBetween: {
          from: { dateFn: 'palmSunday' },
          to: { dateFn: 'divineMercySunday' },
          inclusive: true,
        },
        setDate: { dateFn: 'divineMercySunday', addDay: 1 },
      },
      titles: { append: [PatronTitle.PatronOfPoland] },
    },

    our_lady_queen_of_poland: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 5, date: 3 },
    },

    our_lady_help_of_christians: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 24 },
    },

    florian_of_lorch_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 4 },
    },

    stanislaus_kazimierczyk_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 5 },
    },

    philip_and_james_apostles: {
      dateDef: { month: 5, date: 6 },
    },

    stanislaus_of_szczepanow_bishop: {
      customLocaleId: 'stanislaus_of_szczepanow_bishop_patron_of_poland',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 5, date: 8 },
      titles: { append: [PatronTitle.PatronOfPoland] },
    },

    andrew_bobola_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 5, date: 16 },
    },

    mary_ursula_of_jesus_ledochowska_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 29 },
    },

    john_sarkander_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 30 },
    },

    zdislava_of_lemberk: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 30 },
    },

    hedwig_of_poland: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 6, date: 8 },
    },

    bogumilus_of_dobrow_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 6, date: 10 },
    },

    anthony_julian_nowowiejski_bishop_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 12 },
      martyrology: ['anthony_julian_nowowiejski_bishop', 'companions_martyrs'],
    },

    michael_kozal_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 6, date: 14 },
    },

    yolanda_of_poland_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 6, date: 15 },
    },

    albert_chmielowski_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 6, date: 17 },
    },

    zygmunt_gorazdowski_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 26 },
    },

    otto_of_bamberg_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 1 },
    },

    maria_goretti_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 5 },
    },

    mary_theresa_ledochowska_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 6 },
    },

    john_of_dukla_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 8 },
    },

    bruno_of_querfurt_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 12 },
    },

    andrew_zorard_of_nitra_and_benedict_of_skalka_hermits: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 13 },
      martyrology: ['andrew_zorard_of_nitra_hermit', 'benedict_of_skalka_hermit'],
    },

    camillus_de_lellis_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 14 },
    },

    henry_ii_emperor: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 14 },
    },

    our_lady_of_mount_carmel: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 16 },
    },

    simon_of_lipnica_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 18 },
    },

    ceslaus_of_poland_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 20 },
    },

    apollinaris_of_ravenna_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 21 },
    },

    kinga_of_poland_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 24 },
    },

    sharbel_makhluf_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 28 },
    },

    edmund_bojanowski: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 7 },
    },

    hyacinth_of_poland_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 8, date: 17 },
    },

    our_lady_of_czestochowa: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 8, date: 26 },
    },

    bronislava_of_poland_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 1 },
    },

    mary_stella_of_the_blessed_sacrament_mardosewicz_and_companions_virgins: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 4 },
      martyrology: [
        'mary_stella_of_the_blessed_sacrament_mardosewicz_virgin',
        {
          id: 'companions_martyrs',
          titles: { prepend: [Title.Virgin] },
        },
      ],
    },

    melchior_grodziecki_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 7 },
    },

    angela_salawa_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 9 },
    },

    denis_of_paris_bishop_and_companions_martyrs: {
      dateDef: { month: 9, date: 10 },
    },

    john_leonardi_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 10 },
    },

    sigmund_felix_felinski_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 17 },
    },

    stanislaus_kostka_religious: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 9, date: 18 },
    },

    ladislas_of_gielniow_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 25 },
    },

    lawrence_ruiz_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 26 },
    },

    wenceslaus_i_of_bohemia_martyr: {
      precedence: Precedences.ProperMemorial_11b,
    },

    faustina_kowalska_virgin: {
      precedence: Precedences.ProperMemorial_11b,
    },

    vincent_kadlubek_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 9 },
    },

    mary_angela_truszkowska_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 10 },
    },

    john_beyzym_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 12 },
    },

    honorat_kozminski_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 13 },
    },

    margaret_mary_alacoque_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 14 },
    },

    hedwig_of_silesia_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 16 },
    },

    john_of_kanty_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 20 },
    },

    james_strzemie_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 21 },
    },

    john_paul_ii_pope: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 10, date: 22 },
    },

    joseph_bilczewski_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 23 },
    },

    dedication_of_consecrated_churches: {
      precedence: Precedences.ProperSolemnity_DedicationOfTheOwnChurch_4b,
      dateDef: { month: 10, lastDayOfWeekInMonth: 0 },
      isOptional: true,
    },

    first_polish_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 13 },
    },

    caroline_kozka_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 18 },
    },

    salomea_of_poland_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 19 },
    },

    raphael_of_saint_joseph_kalinowski_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 20 },
    },

    mary_of_jesus_the_good_shepherd_siedliska_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 25 },
    },

    raphael_chylinski_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 2 },
    },

    barbara_of_heliopolis_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 12, date: 4 },
    },

    mary_mother_of_the_church: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 1 },
      properCycle: ProperCycles.ProperOfTime,
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 4 },
      properCycle: ProperCycles.ProperOfTime,
    },
  };
}
