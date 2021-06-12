import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/locales';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { LiturgicalDayInput } from '@romcal/models/liturgical-day/liturgical-day.types';
import { RomcalConfig, RomcalConfigInCalendarDef } from '@romcal/models/config/config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<LiturgicalDayInput>> => {
  const year = config.year;
  const _dates: Array<LiturgicalDayInput> = [
    {
      key: 'gundisalvus_of_amarante_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-11`),
    },
    {
      key: 'john_de_britto_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-4`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'five_wounds_of_the_lord',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-2-7`),
      liturgicalColors: LiturgicalColors.WHITE,
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
      key: 'theotonius_of_coimbra_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-18`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'jacinta_marto_and_francisco_marto',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-20`),
    },
    {
      key: 'john_of_god_duarte_cidade_religious',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-3-8`),
      liturgicalColors: LiturgicalColors.WHITE,
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
      key: 'joan_of_portugal_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-12`),
    },
    {
      key: 'our_lady_of_fatima',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-5-13`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'guardian_angel_of_portugal',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-10`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'anthony_of_padua_priest',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-6-13`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'sancha_of_portugal_and_mafalda_of_portugal_virgins',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-20`),
    },
    {
      key: 'teresa_of_portugal_religious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-20`),
    },
    {
      key: 'elizabeth_of_portugal',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-4`),
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
      key: 'ignatius_de_azevedo_priest_and_companions_martyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-17`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'bartholomew_of_the_martyrs_fernandes_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-18`),
      liturgicalColors: LiturgicalColors.WHITE,
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
      key: 'beatrice_da_silva_meneses_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-1`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'denis_of_paris_bishop_and_companions_martyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
    },
    {
      key: 'john_leonardi_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
    },
    {
      key: 'gundisalvus_of_lagos_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-27`),
    },
    {
      key: 'nuno_of_saint_mary_pereira_religious',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-6`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'fructuosus_of_braga_martin_of_braga_and_gerald_of_braga_bishops',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-12-5`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
  ];

  // Get localized liturgical day names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
