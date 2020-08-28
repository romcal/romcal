import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/locales';
import { Dates } from '@romcal/lib/dates';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { RomcalLiturgicalDayInput } from '@romcal/models/liturgical-day/liturgical-day.types';
import { RomcalConfig, RomcalConfigInCalendarDef } from '@romcal/models/config/config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { CelebrationsCycle } from '@romcal/constants/cycles/cycles.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<RomcalLiturgicalDayInput>> => {
  const year = config.year;
  const _dates: Array<RomcalLiturgicalDayInput> = [
    {
      key: 'margaret_of_hungary_religious',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-1-18`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintsCyrilMonkAndMethodiusBishop',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-2-14`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'matthias_apostle',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-2-24`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'adalbert_of_prague_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-4-23`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'catherine_of_siena_virgin',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-4-29`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'florian_of_lorch_martyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-4`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'gisela_of_hungary',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-7`),
    },
    {
      key: 'sara_salkahazi_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-11`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'john_nepomucene_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-16`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'william_apor_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-23`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'our_lady_help_of_christians',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-24`),
    },
    {
      key: 'transferOfTheRelicsOfSaintStephen',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-30`),
    },
    {
      key: 'agnes_of_bohemia_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-8`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'istvan_sandor_religious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-8`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'cyril_of_alexandria_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-26`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'josemaria_escriva_de_balaguer_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-26`),
    },
    {
      key: 'ladislaus_i_of_hungary',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-6-27`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'visitationOfTheBlessedVirginMary',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-2`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'benedict_of_nursia_abbot',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-11`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintsAndrewZorardAndBenedictHermits',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-17`),
    },
    {
      key: 'bridget_of_sweden_religious',
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
    },
    {
      key: 'sharbel_makhluf_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-27`),
    },
    {
      key: 'saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-8-9`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR, Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'innocent_xi_pope',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-13`),
    },
    {
      key: 'saintsPontianPopeAndHippolytusPriestMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-16`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'bernard_of_clairvaux_abbot',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-19`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintStephenOfHungary',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-8-20`),
    },
    {
      key: 'saintTeresaOfCalcuttaReligious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-5`),
    },
    {
      key: 'saintsMarkoKrizinMelicharGrodeckiAndStephenPongracPriestsAndMartyrs',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-9-7`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'most_holy_name_of_mary',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-12`),
    },
    {
      key: 'hildegard_of_bingen_abbess',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-17`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'gerard_of_csanad_bishop',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-9-24`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'our_lady_of_hungary_principal_patron_of_hungary',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-10-8`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'charles_i_of_austria',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-21`),
    },
    {
      key: 'maurus_of_pecs_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-25`),
    },
    {
      key: 'theodore_romzha_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-31`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'all_souls',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-2`),
      liturgicalColors: [LiturgicalColors.PURPLE, LiturgicalColors.BLACK],
    },
    {
      key: 'emeric_of_hungary',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-11-5`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'hungarian_saints_and_blesseds',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-13`),
    },
    {
      key: 'gertrude_the_great_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-17`),
    },
    {
      key: 'elizabeth_of_hungary_religious',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-11-19`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'our_lord_jesus_christ_the_eternal_high_priest',
      rank: Ranks.FEAST,
      date: ((y: number): dayjs.Dayjs => dayjs.utc(Dates.pentecostSunday(y).add(4, 'day').toISOString()))(year),
      liturgicalColors: LiturgicalColors.WHITE,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
  ];

  // Get localized liturgical day names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
