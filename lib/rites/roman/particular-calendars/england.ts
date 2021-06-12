import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/locales';
import { Dates } from '@romcal/lib/dates';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { LiturgicalDayInput } from '@romcal/models/liturgical-day/liturgical-day.types';
import { rangeContainsDate, rangeOfDays } from '@romcal/utils/dates/dates';
import { RomcalConfig, RomcalConfigInCalendarDef } from '@romcal/models/config/config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { LiturgicalDayCycle } from '@romcal/constants/cycles/cycles.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<LiturgicalDayInput>> => {
  const year = config.year;
  const _dates: Array<LiturgicalDayInput> = [
    {
      key: 'aelred_of_rievaulx_abbot',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-12`),
    },
    {
      key: 'wulstan_of_worcester_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-19`),
    },
    {
      key: 'cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop_copatrons_of_europe',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-2-14`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'david_of_wales_bishop',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-3-1`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'patrick_of_ireland_bishop',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-3-17`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    // When the celebration falls in the Easter Triduum, on a Sunday of Easter,
    // or in the Easter Octave it is transferred to the next available day —
    // generally the Monday of the Second Week of Easter.
    {
      key: 'george_of_lydda_martyr_patron_of_england',
      rank: Ranks.SOLEMNITY,
      date: ((y: number): dayjs.Dayjs => {
        const holyWeekDates = Dates.holyWeek(y);
        const [firstDateInHolyWeek] = holyWeekDates;
        const [lastDateInHolyWeek] = holyWeekDates.reverse();

        const octaveOfEasterDates = Dates.datesInOctaveOfEaster(y);
        const [firstDateInTheEasterOctave] = octaveOfEasterDates;
        const [lastDateInTheEasterOctave] = octaveOfEasterDates.reverse();

        const annunciation = Dates.annunciation(y);
        const holyWeekRange = rangeOfDays(firstDateInHolyWeek, lastDateInHolyWeek);
        const easterOctaveRange = rangeOfDays(firstDateInTheEasterOctave, lastDateInTheEasterOctave);
        const date = dayjs.utc(`${y}-4-23`);

        // If the celebration lands anywhere between Holy Week to Divine Mercy Sunday (inclusive)
        // move it to the Monday after Divine Mercy Sunday
        if (rangeContainsDate(holyWeekRange, date) || rangeContainsDate(easterOctaveRange, date)) {
          // Ensure that the Monday after Divine Mercy Sunday is not Annunciation
          // if it is, move this celebration to the next day (Tuesday)
          const proposed = lastDateInTheEasterOctave.add(1, 'day');
          if (proposed.isSame(annunciation)) {
            return dayjs.utc(lastDateInTheEasterOctave.add(2, 'day').toISOString());
          } else {
            return dayjs.utc(proposed.toISOString());
          }
        } else {
          return dayjs.utc(date.toISOString());
        }
      })(year),
      prioritized: true,
    },
    {
      key: 'adalbert_of_prague_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-24`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'fidelis_of_sigmaringen_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-24`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'catherine_of_siena_virgin_copatroness_of_europe',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-4-29`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'english_martyrs',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-5-4`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'dunstan_of_canterbury_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-19`),
    },
    {
      key: 'bede_the_venerable_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-25`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'augustine_of_canterbury_bishop',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-5-27`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'boniface_of_mainz_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-5`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'ephrem_the_syrian_deacon',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-9`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'columba_of_iona_abbot',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-9`),
    },
    {
      key: 'richard_of_chichester_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-16`),
    },
    {
      key: 'alban_of_britain_martyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-20`),
    },
    {
      key: 'john_fisher_bishop_and_thomas_more_martyrs',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-6-22`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'etheldreda_of_ely_abbess',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-23`),
    },
    {
      key: 'oliver_plunket_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-1`),
    },
    {
      key: 'benedict_of_nursia_abbot_patron_of_europe',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-11`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'bridget_of_sweden_religious_copatroness_of_europe',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-23`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'teresa_benedicta_of_the_cross_stein_virgin_copatroness_of_europe',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-8-9`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR, Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'dominic_of_the_mother_of_god_barberi_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-26`),
    },
    {
      key: 'margaret_clitherow_anne_line_and_margaret_ward_virgin_martyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-30`),
    },
    {
      key: 'aidan_of_lindisfarne_bishop_and_the_saints_of_lindisfarne',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-31`),
    },
    {
      key: 'gregory_i_the_great_pope',
      extend: true,
      rank: Ranks.FEAST,
    },
    {
      key: 'cuthbert_of_lindisfarne_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-4`),
    },
    {
      key: 'theodore_of_canterbury_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-19`),
    },
    {
      key: 'our_lady_of_walsingham',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-24`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'john_henry_newman_priest',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-10-9`),
    },
    {
      key: 'denis_of_paris_bishop_and_companions_martyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-10`),
    },
    {
      key: 'john_leonardi_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-10`),
    },
    {
      key: 'paulinus_of_york_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-10`),
    },
    // In England and Wales when the celebration falls on either a
    // Saturday or a Monday it is transferred to the Sunday.
    {
      key: 'peter_and_paul_apostles',
      extend: true,
      namespace: 'celebrations', // Override the default locale namespace
      date: ((y: number): dayjs.Dayjs => {
        const date = dayjs.utc(`${y}-6-29`);
        if (date.day() === 1) {
          return date.subtract(1, 'day');
        } else if (date.day() === 6) {
          return date.add(1, 'day').startOf('day');
        } else {
          return date;
        }
      })(year),
    },
    // In England and Wales when the celebration falls on either a
    // Saturday or a Monday it is transferred to the Sunday.
    {
      key: 'assumption',
      extend: true,
      namespace: 'celebrations',
      date: ((y: number): dayjs.Dayjs => {
        const date = dayjs.utc(`${y}-8-15`);
        if (date.day() === 1) {
          return date.subtract(1, 'day');
        } else if (date.day() === 6) {
          return date.add(1, 'day').startOf('day');
        } else {
          return date;
        }
      })(year),
    },
    {
      key: 'wilfrid_of_york_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-12`),
    },
    {
      key: 'edward_the_confessor',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-13`),
    },
    {
      key: 'chad_of_mercia_and_cedd_of_lastingham_bishops',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-26`),
    },
    {
      key: 'winefride_of_flintshire_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-3`),
    },
    {
      key: 'willibrord_of_utrecht_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-7`),
    },
    {
      key: 'edmund_of_abingdon_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-16`),
    },
    {
      key: 'margaret_of_scotland',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-16`),
    },
    {
      key: 'elizabeth_of_hungary_religious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-17`),
    },
    {
      key: 'hilda_of_whitby_abbess',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-17`),
    },
    {
      key: 'hugh_of_lincoln_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-17`),
    },
    {
      key: 'andrew_apostle',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-11-30`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    // In England and Wales when All Saints (1 November) falls on a Saturday
    // and is transferred to Sunday, All Souls is transferred to Monday 3 November.
    // Like Ash Wednesday, All Souls is, technically, without rank.
    // However, in countries (not England & Wales) where it falls
    // on a Sunday it replaces the Sunday.
    {
      key: 'all_saints',
      extend: true,
      namespace: 'celebrations', // Override the default locale namespace
      date: ((y: number): dayjs.Dayjs => {
        const date = dayjs.utc(`${y}-11-1`);
        if (date.day() === 6) {
          return dayjs.utc(`${y}-11-2`);
        } else {
          return date;
        }
      })(year),
    },
    {
      key: 'all_souls',
      extend: true,
      date: ((y: number): dayjs.Dayjs => {
        const date = dayjs.utc(`${y}-11-1`);
        if (date.day() === 6) {
          // If All Saints is on Saturday
          // Then All Souls will be on Monday because All Saints will be moved to Sunday on the rule above
          return dayjs.utc(`${y}-11-3`);
        } else {
          // Else, All Souls is the day after All Saints
          return dayjs.utc(`${y}-11-2`);
        }
      })(year),
    },
    {
      key: 'thomas_becket_bishop',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-12-29`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'our_lord_jesus_christ_the_eternal_high_priest',
      rank: Ranks.FEAST,
      date: ((y: number): dayjs.Dayjs => dayjs.utc(Dates.pentecostSunday(y).add(4, 'day').toISOString()))(year),
      liturgicalColors: LiturgicalColors.WHITE,
      cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
  ];

  // Get localized liturgical day names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
