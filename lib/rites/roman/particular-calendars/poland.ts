import dayjs from 'dayjs';
import * as Locales from '@romcal/lib/locales';
import { Dates } from '@romcal/lib/dates';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { LiturgicalDayInput } from '@romcal/models/liturgical-day/liturgical-day.types';
import { rangeOfDays, rangeContainsDate } from '@romcal/utils/dates/dates';
import { RomcalConfig, RomcalConfigInCalendarDef } from '@romcal/models/config/config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { LiturgicalDayCycle } from '@romcal/constants/cycles/cycles.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<LiturgicalDayInput>> => {
  const year = config.year;
  const _dates: Array<LiturgicalDayInput> = [
    {
      key: 'joseph_sebastian_pelczar_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-19`),
    },
    {
      key: 'vincent_pallotti_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-22`),
    },
    {
      key: 'vincent_lewoniuk_and_companions_martyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-23`),
    },
    {
      key: 'george_matulaitis_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-27`),
    },
    {
      key: 'boleslawa_mary_lament_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-29`),
    },
    {
      key: 'angela_merici_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-29`),
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
      key: 'casimir_of_poland',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-3-4`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'adalbert_of_prague_bishop_patron_of_poland',
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
          // However, this condition will probably never happen
          const proposed = lastDateInTheEasterOctave.add(1, 'day');
          if (proposed.isSame(annunciation)) {
            return dayjs.utc(annunciation.add(1, 'day').toISOString());
          } else {
            return dayjs.utc(proposed.toISOString());
          }
        } else {
          return dayjs.utc(date.toISOString());
        }
      })(year),
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
      key: 'our_lady_queen_of_poland',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-5-3`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'our_lady_help_of_christians',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-24`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'florian_of_lorch_martyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-4`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'stanislaus_kazimierczyk_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-5`),
    },
    {
      key: 'philip_and_james_apostles',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-5-6`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'stanislaus_of_szczepanow_bishop_patron_of_poland',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-5-8`),
      liturgicalColors: LiturgicalColors.RED,
    },
    {
      key: 'andrew_bobola_priest',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-5-16`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'mary_ursula_of_jesus_ledochowska_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-29`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'john_sarkander_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-30`),
    },
    {
      key: 'zdislava_of_lemberk',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-30`),
    },
    {
      key: 'hedwig_of_poland',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-8`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'bogumilus_of_dobrow_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-10`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'anthony_julian_nowowiejski_bishop_and_companions_martyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-12`),
    },
    {
      key: 'michael_kozal_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-14`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'yolanda_of_poland_religious',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-15`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'albert_chmielowski_religious',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-17`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'zygmunt_gorazdowski_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-26`),
    },
    {
      key: 'otto_of_bamberg_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-1`),
    },
    {
      key: 'maria_goretti_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-5`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'mary_theresa_ledochowska_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-6`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'john_of_dukla_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-8`),
      liturgicalColors: LiturgicalColors.WHITE,
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
      key: 'bruno_of_querfurt_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-12`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'andrew_zorard_of_nitra_and_benedict_of_skalka_hermits',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-13`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'camillus_de_lellis_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-14`),
    },
    {
      key: 'henry_ii_emperor',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-14`),
    },
    {
      key: 'our_lady_of_mount_carmel',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-16`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'simon_of_lipnica_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-18`),
    },
    {
      key: 'ceslaus_of_poland_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-20`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'apollinaris_of_ravenna_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-21`),
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
      key: 'kinga_of_poland_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-24`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'sharbel_makhluf_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-28`),
    },
    {
      key: 'edmund_bojanowski',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-7`),
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
      key: 'hyacinth_of_poland_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-17`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'our_lady_of_czestochowa',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-8-26`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'bronislava_of_poland_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-1`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'mary_stella_of_the_blessed_sacrament_mardosewicz_and_companions_virgins',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-4`),
    },
    {
      key: 'melchior_grodziecki_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-7`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'angela_salawa_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-9`),
    },
    {
      key: 'denis_of_paris_bishop_and_companions_martyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-10`),
    },
    {
      key: 'john_leonardi_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-10`),
    },
    {
      key: 'sigmund_felix_felinski_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-17`),
    },
    {
      key: 'stanislaus_kostka_religious',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-9-18`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'ladislas_of_gielniow_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-25`),
    },
    {
      key: 'lawrence_ruiz_and_companions_martyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-26`),
    },
    {
      key: 'wenceslaus_i_of_bohemia_martyr',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-9-28`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'faustina_kowalska_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-5`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'vincent_kadlubek_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'mary_angela_truszkowska_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-10`),
    },
    {
      key: 'john_beyzym_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-12`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'honorat_kozminski_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-13`),
    },
    {
      key: 'margaret_mary_alacoque_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-14`),
    },
    {
      key: 'hedwig_of_silesia_religious',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-16`),
    },
    {
      key: 'john_of_kanty_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-20`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'james_strzemie_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-21`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'john_paul_ii_pope',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-22`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'joseph_bilczewski_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-23`),
    },
    // jarosz: Created Dedication of a particular church: solemnity on last Sunday of October
    {
      key: 'dedication_of_consecrated_churches',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-10-1`).endOf('month').startOf('week'),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'first_polish_martyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-13`),
      liturgicalColors: LiturgicalColors.RED,
    },
    {
      key: 'caroline_kozka_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-18`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'salomea_of_poland_religious',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-19`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'raphael_of_saint_joseph_kalinowski_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-20`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'mary_of_jesus_the_good_shepherd_siedliska_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-25`),
    },
    {
      key: 'raphael_chylinski_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-2`),
    },
    {
      key: 'barbara_of_heliopolis_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-4`),
    },
    {
      key: 'mary_mother_of_the_church',
      rank: Ranks.FEAST,
      date: ((y: number): dayjs.Dayjs => Dates.pentecostSunday(y).add(1, 'day'))(year),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
      cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
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
