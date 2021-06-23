import { ProperCycles } from '@roman-rite/constants/cycles';
import { Precedences } from '@roman-rite/constants/precedences';
import { CalendarDef } from '@roman-rite/models/calendar-def';
import { Europe } from '@roman-rite/particular-calendars/europe';
import { DateDefinitions } from '@roman-rite/types/calendar-def';
import { Dates } from '@roman-rite/utils/dates';
import { PatronTitles, Titles } from '@romcal/constants/martyrology-metadata';
import dayjs, { Dayjs } from 'dayjs';

export class Poland extends CalendarDef {
  inheritFrom = Europe;

  definitions: DateDefinitions = {
    joseph_sebastian_pelczar_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '1-19',
    },

    vincent_pallotti_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-22',
    },

    vincent_lewoniuk_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-23',
      martyrology: ['vincent_lewoniuk_martyr', 'companions_martyrs'],
    },

    george_matulaitis_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-27',
    },

    boleslawa_mary_lament_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-29',
    },

    angela_merici_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-29',
    },

    casimir_of_poland: {
      precedence: Precedences.ProperFeast_8f,
      date: '3-4',
    },

    adalbert_of_prague_bishop: {
      customLocaleKey: 'adalbert_of_prague_bishop_patron_of_poland',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: (year: number): dayjs.Dayjs => {
        const date = dayjs.utc(`${year}-4-23`);
        const palmSunday = Dates.palmSunday(year);
        const divineMercySunday = Dates.divineMercySunday(year);

        // When it falls between Palm Sunday and the Second Sunday of Easter inclusive,
        // it is transferred to the Monday after the Second Sunday of Easter
        return date.isSameOrAfter(palmSunday) && date.isSameOrBefore(divineMercySunday)
          ? divineMercySunday.add(1, 'day')
          : date;
      },
      titles: (titles) => [...titles, PatronTitles.PatronOfPoland],
    },

    our_lady_queen_of_poland: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '5-3',
    },

    our_lady_help_of_christians: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-24',
    },

    florian_of_lorch_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-4',
    },

    stanislaus_kazimierczyk_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-5',
    },

    philip_and_james_apostles: {
      date: '5-6',
    },

    stanislaus_of_szczepanow_bishop: {
      customLocaleKey: 'stanislaus_of_szczepanow_bishop_patron_of_poland',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '5-8',
      titles: (titles) => [...titles, PatronTitles.PatronOfPoland],
    },

    andrew_bobola_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: '5-16',
    },

    mary_ursula_of_jesus_ledochowska_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-29',
    },

    john_sarkander_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-30',
    },

    zdislava_of_lemberk: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-30',
    },

    hedwig_of_poland: {
      precedence: Precedences.ProperMemorial_11b,
      date: '6-8',
    },

    bogumilus_of_dobrow_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '6-10',
    },

    anthony_julian_nowowiejski_bishop_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-12',
      martyrology: ['anthony_julian_nowowiejski_bishop', 'companions_martyrs'],
    },

    michael_kozal_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '6-14',
    },

    yolanda_of_poland_religious: {
      precedence: Precedences.ProperMemorial_11b,
      date: '6-15',
    },

    albert_chmielowski_religious: {
      precedence: Precedences.ProperMemorial_11b,
      date: '6-17',
    },

    zygmunt_gorazdowski_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-26',
    },

    otto_of_bamberg_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-1',
    },

    maria_goretti_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-5',
    },

    mary_theresa_ledochowska_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-6',
    },

    john_of_dukla_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-8',
    },

    bruno_of_querfurt_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-12',
    },

    andrew_zorard_of_nitra_and_benedict_of_skalka_hermits: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-13',
      martyrology: ['andrew_zorard_of_nitra_hermit', 'benedict_of_skalka_hermit'],
    },

    camillus_de_lellis_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-14',
    },

    henry_ii_emperor: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-14',
    },

    our_lady_of_mount_carmel: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-16',
    },

    simon_of_lipnica_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-18',
    },

    ceslaus_of_poland_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-20',
    },

    apollinaris_of_ravenna_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-21',
    },

    kinga_of_poland_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-24',
    },

    sharbel_makhluf_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-28',
    },

    edmund_bojanowski: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-7',
    },

    hyacinth_of_poland_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '8-17',
    },

    our_lady_of_czestochowa: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '8-26',
    },

    bronislava_of_poland_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-1',
    },

    mary_stella_of_the_blessed_sacrament_mardosewicz_and_companions_virgins: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-4',
      martyrology: [
        'mary_stella_of_the_blessed_sacrament_mardosewicz_virgin',
        {
          key: 'companions_martyrs',
          titles: (titles) => [Titles.Virgin, ...titles],
        },
      ],
    },

    melchior_grodziecki_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-7',
    },

    angela_salawa_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-9',
    },

    denis_of_paris_bishop_and_companions_martyrs: {
      date: '9-10',
    },

    john_leonardi_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-10',
    },

    sigmund_felix_felinski_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-17',
    },

    stanislaus_kostka_religious: {
      precedence: Precedences.ProperFeast_8f,
      date: '9-18',
    },

    ladislas_of_gielniow_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-25',
    },

    lawrence_ruiz_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-26',
    },

    wenceslaus_i_of_bohemia_martyr: {
      precedence: Precedences.ProperMemorial_11b,
    },

    faustina_kowalska_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '10-5',
    },

    vincent_kadlubek_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '10-9',
    },

    mary_angela_truszkowska_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-10',
    },

    john_beyzym_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '10-12',
    },

    honorat_kozminski_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-13',
    },

    margaret_mary_alacoque_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '10-14',
    },

    hedwig_of_silesia_religious: {
      precedence: Precedences.ProperMemorial_11b,
      date: '10-16',
    },

    john_of_kanty_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '10-20',
    },

    james_strzemie_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '10-21',
    },

    john_paul_ii_pope: {
      precedence: Precedences.ProperMemorial_11b,
      date: '10-22',
    },

    joseph_bilczewski_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-23',
    },

    // jarosz: Created Dedication of a particular church: solemnity on last Sunday of October
    dedication_of_consecrated_churches: {
      precedence: Precedences.ProperSolemnity_DedicationOfTheOwnChurch_4b,
      date: (year) => dayjs.utc(`${year}-10-1`).endOf('month').startOf('week'),
    },

    first_polish_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-13',
    },

    caroline_kozka_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-18',
    },

    salomea_of_poland_religious: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-19',
    },

    raphael_of_saint_joseph_kalinowski_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-20',
    },

    mary_of_jesus_the_good_shepherd_siedliska_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-25',
    },

    raphael_chylinski_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-2',
    },

    barbara_of_heliopolis_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-4',
    },

    mary_mother_of_the_church: {
      precedence: Precedences.ProperFeast_8f,
      date: (year: number): dayjs.Dayjs => Dates.pentecostSunday(year).add(1, 'day'),
      properCycle: ProperCycles.TEMPORALE,
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: (year: number): Dayjs => Dates.pentecostSunday(year).add(4, 'day'),
      properCycle: ProperCycles.TEMPORALE,
    },
  };
}
