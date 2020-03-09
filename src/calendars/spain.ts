import dayjs from 'dayjs';

import { Dates, Locales } from '../lib';
import { LITURGICAL_COLORS } from '@RomcalConstants/liturgical-colors.constant';
import { TITLES } from '@RomcalConstants/titles.constant';
import { IRomcalDateItem } from '@RomcalModels/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@RomcalModels/romcal-config';
import { TypesEnum } from '@RomcalEnums/types.enum';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<IRomcalDateItem>> => {
  const year = config.year;
  const _dates: Array<IRomcalDateItem> = [
    {
      key: 'saintEulogiusOfCordobaBishop',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-9`),
    },
    {
      key: 'saintsFructuosusBishopAndAuguriusAndEulogiusDeaconsMartyrs',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-20`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintVincentDeaconAndMartyr',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-22`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintIldephonsusOfToledoBishop',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-23`),
    },
    {
      key: 'saintsCyrilMonkAndMethodiusBishop',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-2-14`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.PATRON_OF_EUROPE],
        },
      },
    },
    {
      key: 'saintHermenegildMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-13`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
        },
      },
    },
    {
      key: 'saintIsidoreOfSevilleBishopAndDoctorOfTheChurch',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-4-26`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'saintCatherineOfSienaVirginAndDoctorOfTheChurch',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-4-29`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.PATRON_OF_EUROPE, TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'saintJohnOfAvilaPriest',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-10`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintIsidoreTheFarmer',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-15`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintPaschalBaylon',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-17`),
    },
    {
      key: 'saintJoaquinaVedruna',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-22`),
    },
    {
      key: 'saintFerdinand',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-30`),
    },
    {
      key: 'saintMariaMicaelaOfTheBlessedSacramentVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-15`),
    },
    {
      key: 'saintPelagiusMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-26`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintBenedictOfNursiaAbbot',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-7-11`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.PATRON_OF_EUROPE],
        },
      },
    },
    {
      key: 'ourLadyOfMountCarmel',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-16`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintBridgetOfSwedenReligious',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-7-23`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.PATRON_OF_EUROPE],
        },
      },
    },
    {
      key: 'saintJamesApostlePatronOfSpain',
      type: TypesEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-7-25`),
    },
    {
      key: 'saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-8-9`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR, TITLES.PATRON_OF_EUROPE],
        },
      },
    },
    {
      key: 'saintEzequielMorenoBishop',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-19`),
    },
    {
      key: 'saintTeresaOfJesusJornetEIbarsVirgin',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-26`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintFrancisBorgiaPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-3`),
    },
    {
      key: 'saintThomasOfVillanovaBishop',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-10`),
    },
    {
      key: 'saintSoledadTorresAcostaVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-11`),
    },
    {
      key: 'ourLadyOfThePillar',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-10-12`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintTeresaOfJesusVirginAndDoctorOfTheChurch',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-10-15`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'saintPeterOfAlcantaraPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-19`),
    },
    {
      key: 'saintLeanderBishop',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-13`),
    },
    {
      key: 'saintEulaliaOfMeridaVirginAndMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-10`),
    },
    {
      key: 'saintJohnOfTheCrossDoctorOfTheChurch',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-12-14`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'ourLordJesusChristTheEternalHighPriest',
      type: TypesEnum.FEAST,
      date: ((y: number): dayjs.Dayjs =>
        dayjs.utc(
          Dates.pentecostSunday(y)
            .add(4, 'day')
            .toISOString(),
        ))(year),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
