import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Dates } from '../utils/dates';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import dayjs, { Dayjs } from 'dayjs';

export class England extends CalendarDef {
  definitions: DateDefinitions = {
    aelred_of_rievaulx_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-12',
    },

    wulstan_of_worcester_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-19',
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

    david_of_wales_bishop: {
      precedence: Precedences.ProperFeast_8f,
      date: '3-1',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    patrick_of_ireland_bishop: {
      precedence: Precedences.ProperFeast_8f,
      date: '3-17',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    george_of_lydda_martyr_patron_of_england: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: (year: number): Dayjs => {
        const date = dayjs.utc(`${year}-4-23`);
        const palmSunday = Dates.palmSunday(year);
        const divineMercySunday = Dates.divineMercySunday(year);

        // When it falls between Palm Sunday and the Second Sunday of Easter inclusive,
        // it is transferred to the Monday after the Second Sunday of Easter
        return date.isSameOrAfter(palmSunday) &&
          date.isSameOrBefore(divineMercySunday)
          ? divineMercySunday.add(1, 'day')
          : date;
      },
    },

    adalbert_of_prague_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-24',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    fidelis_of_sigmaringen_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-24',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    catherine_of_siena_virgin_copatroness_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '4-29',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    english_martyrs: {
      precedence: Precedences.ProperFeast_8f,
      date: '5-4',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    dunstan_of_canterbury_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-19',
    },

    bede_the_venerable_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-25',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    augustine_of_canterbury_bishop: {
      precedence: Precedences.ProperFeast_8f,
      date: '5-27',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    boniface_of_mainz_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '6-5',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    ephrem_the_syrian_deacon: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-9',
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    columba_of_iona_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-9',
    },

    richard_of_chichester_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-16',
    },

    alban_of_britain_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-20',
    },

    john_fisher_bishop_and_thomas_more_martyrs: {
      precedence: Precedences.ProperFeast_8f,
      date: '6-22',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    etheldreda_of_ely_abbess: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-23',
    },

    oliver_plunket_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-1',
    },

    benedict_of_nursia_abbot_patron_of_europe: {
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      date: '7-11',
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.PATRON_OF_EUROPE],
      // },
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

    dominic_of_the_mother_of_god_barberi_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-26',
    },

    margaret_clitherow_anne_line_and_margaret_ward_virgin_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-30',
    },

    aidan_of_lindisfarne_bishop_and_the_saints_of_lindisfarne: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-31',
    },

    gregory_i_the_great_pope: {
      precedence: Precedences.ProperFeast_8f,
    },

    cuthbert_of_lindisfarne_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-4',
    },

    theodore_of_canterbury_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-19',
    },

    our_lady_of_walsingham: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-24',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    john_henry_newman_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: '10-9',
    },

    denis_of_paris_bishop_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-10',
    },

    john_leonardi_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-10',
    },

    paulinus_of_york_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-10',
    },

    // In England and Wales when the celebration falls on either a
    // Saturday or a Monday it is transferred to the Sunday.
    peter_and_paul_apostles: {
      date: (year: number): Dayjs => {
        const date = dayjs.utc(`${year}-6-29`);
        if (date.day() === 1) {
          return date.subtract(1, 'day');
        } else if (date.day() === 6) {
          return date.add(1, 'day').startOf('day');
        } else {
          return date;
        }
      },
    },

    // In England and Wales when the celebration falls on either a
    // Saturday or a Monday it is transferred to the Sunday.
    assumption: {
      date: (year: number): dayjs.Dayjs => {
        const date = dayjs.utc(`${year}-8-15`);
        if (date.day() === 1) {
          return date.subtract(1, 'day');
        } else if (date.day() === 6) {
          return date.add(1, 'day').startOf('day');
        } else {
          return date;
        }
      },
    },

    wilfrid_of_york_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-12',
    },

    edward_the_confessor: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-13',
    },

    chad_of_mercia_and_cedd_of_lastingham_bishops: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-26',
    },

    winefride_of_flintshire_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-3',
    },

    willibrord_of_utrecht_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-7',
    },

    edmund_of_abingdon_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-16',
    },

    margaret_of_scotland: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-16',
    },

    elizabeth_of_hungary_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-17',
    },

    hilda_of_whitby_abbess: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-17',
    },

    hugh_of_lincoln_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-17',
    },

    andrew_apostle: {
      precedence: Precedences.ProperFeast_8f,
      date: '11-30',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    // In England and Wales when All Saints (1 November) falls on a Saturday
    // and is transferred to Sunday, All Souls is transferred to Monday 3 November.
    // Like Ash Wednesday, All Souls is, technically, without rank.
    // However, in countries (not England & Wales) where it falls
    // on a Sunday it replaces the Sunday.
    all_saints: {
      date: (year: number): dayjs.Dayjs => {
        const date = dayjs.utc(`${year}-11-1`);
        if (date.day() === 6) {
          return dayjs.utc(`${year}-11-2`);
        } else {
          return date;
        }
      },
    },

    all_souls: {
      date: (year: number): dayjs.Dayjs => {
        const date = dayjs.utc(`${year}-11-1`);
        if (date.day() === 6) {
          // If All Saints is on Saturday
          // Then All Souls will be on Monday because All Saints will be moved to Sunday on the rule above
          return dayjs.utc(`${year}-11-3`);
        } else {
          // Else, All Souls is the day after All Saints
          return dayjs.utc(`${year}-11-2`);
        }
      },
    },

    thomas_becket_bishop: {
      precedence: Precedences.ProperFeast_8f,
      date: '12-29',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: (year: number): Dayjs => Dates.pentecostSunday(year).add(4, 'day'),
      liturgicalColors: LiturgicalColors.WHITE,
      // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
  };
}
