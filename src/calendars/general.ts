import dayjs from 'dayjs';

import { Dates, Locales, Seasons } from '../lib';
import { LITURGICAL_COLORS } from '@RomcalConstants/liturgical-colors.constant';
import { TITLES } from '@RomcalConstants/titles.constant';
import { IRomcalDateItem } from '@RomcalModels/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@RomcalModels/romcal-config';
import { TypesEnum } from '@RomcalEnums/types.enum';

const defaultConfig: IRomcalDefaultConfig = {
  ascensionOnSunday: false,
  christmastideEnds: 'o',
  christmastideIncludesTheSeasonOfEpiphany: true,
  corpusChristiOnSunday: true,
  epiphanyOnSunday: true,
};

const dates = async (config: Config): Promise<Array<IRomcalDateItem>> => {
  const year = config.year;
  const _dates: Array<IRomcalDateItem> = [
    {
      key: 'saintsBasilTheGreatAndGregoryNazianzenBishopsAndDoctors',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-2`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'theMostHolyNameOfJesus',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-3`),
    },
    {
      key: 'saintRaymondOfPenyafortPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-7`),
    },
    {
      key: 'saintHilaryOfPoitiersBishopAndDoctor',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-13`),
      data: {
        meta: {
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'saintAnthonyOfEgyptAbbot',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-17`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintsFabianPopeAndSebastianMartyrs',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-20`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintAgnesVirginAndMartyr',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-21`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintVincentDeaconAndMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-22`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintFrancisDeSalesBishopAndDoctor',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-24`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    // http://www.vatican.va/content/francesco/en/motu_proprio/documents/papa-francesco-motu-proprio-20190930_aperuit-illis.html
    {
      key: 'sundayOfTheWordOfGod',
      type: TypesEnum.SUNDAY,
      date: await (async (y: number): Promise<dayjs.Dayjs> => {
        const sundays = await Seasons.earlyOrdinaryTime(y, config.christmastideEnds, config.epiphanyOnSunday);
        const thirdSundayOfOrdinaryTime = sundays.find(sunday => sunday.key === 'thirdSundayOfOrdinaryTime');
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return thirdSundayOfOrdinaryTime!.date;
      })(year),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.GREEN,
        },
      },
    },
    // The proper color for the Chair of Peter (Feast, Feb 22) and the Conversion of
    //cSt. Paul (Feast, Jan 25) is white, although both St. Peter and St. Paul
    // were martyrs.
    {
      key: 'conversionOfSaintPaulApostle',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-1-25`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintsTimothyAndTitusBishops',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-26`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintAngelaMericiVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-27`),
    },
    {
      key: 'saintThomasAquinasPriestAndDoctor',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-28`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'saintJohnBoscoPriest',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-31`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintBlaseBishopAndMartyrSaintAnsgarBishop',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-3`),
    },
    {
      key: 'saintAgathaVirginAndMartyr',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-2-5`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintPaulMikiAndCompanionsMartyrs',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-2-6`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintJeromeEmilianiSaintJosephineBakhitaVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-8`),
    },
    {
      key: 'saintScholasticaVirgin',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-2-10`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'ourLadyOfLourdes',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-11`),
    },
    {
      key: 'saintsCyrilMonkAndMethodiusBishop',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-2-14`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.PATRON_OF_EUROPE],
        },
      },
    },
    {
      key: 'sevenHolyFoundersOfTheServiteOrder',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-17`),
    },
    {
      key: 'saintPeterDamianBishopAndDoctorOfTheChurch',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-21`),
      data: {
        meta: {
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'chairOfSaintPeterApostle',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-2-22`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintPolycarpBishopAndMartyr',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-2-23`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintCasimir',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-4`),
    },
    {
      key: 'saintsPerpetuaAndFelicityMartyrs',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-3-7`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintJohnOfGodReligious',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-8`),
    },
    {
      key: 'saintFrancesOfRomeReligious',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-9`),
    },
    {
      key: 'saintPatrickBishop',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-17`),
    },
    {
      key: 'saintCyrilOfJerusalemBishopAndDoctor',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-18`),
      data: {
        meta: {
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'saintTuribiusOfMogrovejoBishop',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-23`),
    },
    {
      key: 'saintFrancisOfPaolaHermit',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-2`),
    },
    {
      key: 'saintIsidoreOfSevilleBishopAndDoctorOfTheChurch',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-4`),
      data: {
        meta: {
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'saintVincentFerrerPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-5`),
    },
    {
      key: 'saintJohnBaptistDeLaSallePriest',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-4-7`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintStanislausBishopAndMartyr',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-4-11`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintMartinIPopeAndMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-13`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintAnselmOfCanterburyBishopAndDoctorOfTheChurch',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-21`),
      data: {
        meta: {
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'saintGeorgeMartyrSaintAdalbertBishopAndMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-23`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintFidelisOfSigmaringenPriestAndMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-24`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintMarkTheEvangelist',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-4-25`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintPeterChanelPriestAndMartyrSaintLouisGrignonDeMontfortPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-28`),
    },
    {
      key: 'saintCatherineOfSienaVirginAndDoctorOfTheChurch',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-4-29`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.PATRON_OF_EUROPE, TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'saintPiusVPope',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-30`),
    },
    {
      key: 'saintJosephTheWorker',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-1`),
    },
    {
      key: 'saintAthanasiusBishopAndDoctor',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-2`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'saintsPhilipAndJamesApostles',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-5-3`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintsNereusAndAchilleusMartyrsSaintPancrasMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-12`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'ourLadyOfFatima',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-13`),
    },
    {
      key: 'saintMatthiasTheApostle',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-5-14`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintJohnIPopeAndMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-18`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintBernardineOfSienaPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-20`),
    },
    {
      key: 'saintChristopherMagallanesAndCompanionsMartyrs',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-21`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintRitaOfCascia',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-22`),
    },
    {
      key: 'saintBedeTheVenerablePriestAndDoctorSaintGregoryViiPopeSaintMaryMagdaleneDePazziVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-25`),
    },
    {
      key: 'saintPhilipNeriPriest',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-26`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintAugustineOfCanterburyBishop',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-27`),
    },
    {
      key: 'saintPaulIvPope',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-29`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'visitationOfTheBlessedVirginMary',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-5-31`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintJustinMartyr',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-1`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintsMarcellinusAndPeterMartyrs',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-2`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintsCharlesLwangaAndCompanionsMartyrs',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-3`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintBonifaceBishopAndMartyr',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-5`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintNorbertBishop',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-6`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintEphremDeaconAndDoctor',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-9`),
      data: {
        meta: {
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'saintBarnabasTheApostle',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-11`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintAnthonyOfPaduaPriestAndDoctor',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-13`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'saintRomualdAbbot',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-19`),
    },
    {
      key: 'saintAloysiusGonzagaReligious',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-21`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintPaulinusOfNolaBishopSaintsJohnFisherBishopAndThomasMoreMartyrs',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-22`),
    },
    {
      key: 'saintCyrilOfAlexandriaBishopAndDoctor',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-27`),
      data: {
        meta: {
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'saintIrenaeusBishopAndMartyr',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-28`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'firstMartyrsOfTheChurchOfRome',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-30`),
    },
    {
      key: 'saintThomasTheApostle',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-7-3`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintElizabethOfPortugal',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-4`),
    },
    {
      key: 'saintAnthonyZaccariaPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-5`),
    },
    {
      key: 'saintMariaGorettiVirginAndMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-6`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintsAugustineZhaoRongPriestAndCompanionsMartyrs',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-9`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintBenedictOfNursiaAbbot',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-11`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.PATRON_OF_EUROPE],
        },
      },
    },
    {
      key: 'saintHenryBishopAndMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-13`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintCamillusDeLellisPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-14`),
    },
    {
      key: 'saintBonaventureBishopAndDoctor',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-15`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'ourLadyOfMountCarmel',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-16`),
    },
    {
      key: 'saintApollinaris',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-20`),
    },
    {
      key: 'saintLawrenceOfBrindisiPriestAndDoctor',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-21`),
      data: {
        meta: {
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    // https://github.com/pejulian/romcal/issues/27
    {
      key: 'saintMaryMagdalene',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-7-22`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    // On 11 Feb 2018, Pope Francis inserted the Memorial of the
    // Blessed Virgin Mary, Mother of the Church, into the General Roman Calendar.
    // It will be celebrated on Monday after Pentecost.
    {
      key: 'maryMotherOfTheChurch',
      type: TypesEnum.MEMORIAL, // Memorial
      date: ((y: number): dayjs.Dayjs => Dates.pentecostSunday(y).add(1, 'day'))(year),
      data: {
        prioritized: true,
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
      key: 'saintCharbelMakhloufPriestAndHermit',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-24`),
    },
    {
      key: 'saintJamesApostle',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-7-25`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintsJoachimAndAnne',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-26`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintMartha',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-29`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintPeterChrysologusBishopAndDoctor',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-30`),
      data: {
        meta: {
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'saintIgnatiusOfLoyolaPriest',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-31`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintAlphonsusMariaDeLiguoriBishopAndDoctorOfTheChurch',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-1`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'saintEusebiusOfVercelliBishopSaintPeterJulianEymardPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-2`),
    },
    {
      key: 'saintJeanVianneyTheCureOfArsPriest',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-4`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'dedicationOfTheBasilicaOfSaintMaryMajor',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-5`),
    },
    {
      key: 'saintSixtusIiPopeAndCompanionsMartyrsSaintCajetanPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-7`),
    },
    {
      key: 'saintDominicPriest',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-8`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-9`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR, TITLES.PATRON_OF_EUROPE],
        },
      },
    },
    {
      key: 'saintLawrenceOfRomeDeaconAndMartyr',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-8-10`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintClareVirgin',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-11`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintJaneFrancesDeChantalReligious',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-12`),
    },
    {
      key: 'saintsPontianPopeAndHippolytusPriestMartyrs',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-13`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintMaximilianMaryKolbePriestAndMartyr',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-14`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintStephenOfHungary',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-16`),
    },
    {
      key: 'saintJohnEudesPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-19`),
    },
    {
      key: 'saintBernardOfClairvauxAbbotAndDoctorOfTheChurch',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-20`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'saintPiusXPope',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-21`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'queenshipOfBlessedVirginMary',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-22`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintRoseOfLima',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-23`),
    },
    {
      key: 'saintBartholomewTheApostle',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-8-24`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintLouisSaintJosephOfCalasanzPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-25`),
    },
    {
      key: 'saintMonica',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-27`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintAugustineOfHippoBishopAndDoctorOfTheChurch',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-28`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'theBeheadingOfSaintJohnTheBaptistMartyr',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-29`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintGregoryTheGreatPopeAndDoctor',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-3`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'birthOfTheBlessedVirginMary',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-9-8`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintPeterClaverPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-9`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'holyNameOfTheBlessedVirginMary',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-12`),
    },
    {
      key: 'saintJohnChrysostomBishopAndDoctor',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-13`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'theExaltationOfTheHolyCross',
      source: 'celebrations', // Override the default lookup source
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-9-14`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
        },
      },
    },
    {
      key: 'ourLadyOfSorrows',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-15`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintsCorneliusPopeAndCyprianBishopMartyrs',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-16`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintRobertBellarmineBishopAndDoctor',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-17`),
      data: {
        meta: {
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'saintJanuariusBishopAndMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-19`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintAndrewKimTaegonPriestAndPaulChongHasangAndCompanionsMartyrs',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-20`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintMatthewApostleAndEvangelist',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-9-21`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintPioOfPietrelcinaPriest',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-23`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintsCosmasAndDamianMartyrs',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-26`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintVincentDePaulPriest',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-27`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintWenceslausMartyrSaintLawrenceRuizAndCompanionsMartyrs',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-28`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintsMichaelGabrielAndRaphaelArchangels',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-9-29`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintJeromePriestAndDoctor',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-30`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'saintThereseOfTheChildJesusVirginAndDoctor',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-1`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'guardianAngels',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-2`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintFrancisOfAssisi',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-4`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintBrunoPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-6`),
    },
    {
      key: 'ourLadyOfTheRosary',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-7`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintDenisAndCompanionsMartyrsSaintJohnLeonardiPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
    },
    // http://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20140529_decreto-calendario-generale-gxxiii-gpii_en.html
    {
      key: 'popeSaintJohnXXIII',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-11`),
    },
    // http://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20140529_decreto-calendario-generale-gxxiii-gpii_en.html
    {
      key: 'popeSaintJohnPaulII',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-22`),
    },
    {
      key: 'saintCallistusIPopeAndMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-14`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintTeresaOfJesusVirginAndDoctorOfTheChurch',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-15`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'saintHedwigReligiousOrSaintMargaretMaryAlacoqueVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-16`),
    },
    {
      key: 'saintIgnatiusOfAntiochBishopAndMartyr',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-17`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintLukeTheEvangelist',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-10-18`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintsJeanDeBrebeufAndIsaacJoguesPriestsAndCompanionsMartyrsSaintPaulOfTheCrossPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-19`),
    },
    {
      key: 'saintJohnOfCapistranoPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-23`),
    },
    {
      key: 'saintAnthonyMaryClaretBishop',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-24`),
    },
    {
      key: 'saintsSimonAndJudeApostles',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-10-28`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'allSouls',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-11-2`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintMartinDePorresReligious',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-3`),
    },
    {
      key: 'saintCharlesBorromeoBishop',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-4`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    // Replaces 32nd Sunday in Ordinary Time when it falls on a Sunday
    {
      key: 'dedicationOfTheLateranBasilica',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-11-9`),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintLeoTheGreatPopeAndDoctor',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-10`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'saintMartinOfToursBishop',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-11`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintJosaphatBishopAndMartyr',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-12`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintAlbertTheGreatBishopAndDoctor',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-15`),
      data: {
        meta: {
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'saintMargaretOfScotlandSaintGertrudeTheGreatVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-16`),
    },
    {
      key: 'saintElizabethOfHungary',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-17`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'dedicationOfTheBasilicasOfSaintsPeterAndPaulApostles',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-18`),
    },
    {
      key: 'presentationOfTheBlessedVirginMary',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-21`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintCeciliaVirginAndMartyr',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-22`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintClementIPopeAndMartyrSaintColumbanReligious',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-23`),
    },
    {
      key: 'saintAndrewDungLacAndCompanionsMartyrs',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-24`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintCatherineOfAlexandriaVirginAndMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-25`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintAndrewTheApostle',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-11-30`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintFrancisXavierPriest',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-12-3`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintJohnDamascenePriestAndDoctor',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-4`),
      data: {
        meta: {
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'saintNicholasBishop',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-6`),
    },
    {
      key: 'saintAmbroseBishopAndDoctor',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-12-7`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'saintJuanDiegoCuauhtlatoatzin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-9`),
    },
    {
      key: 'ourLadyOfLoreto',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-10`),
    },
    {
      key: 'saintDamasusIPope',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-11`),
    },
    {
      key: 'ourLadyOfGuadalupe',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-12`),
    },
    {
      key: 'saintLucyOfSyracuseVirginAndMartyr',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-12-13`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintJohnOfTheCrossPriestAndDoctor',
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
      key: 'saintPeterCanisiusPriestAndDoctor',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-21`),
      data: {
        meta: {
          titles: [TITLES.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'saintJohnOfKantyPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-23`),
    },
    {
      key: 'saintStephenTheFirstMartyr',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-12-26`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintJohnTheApostleAndEvangelist',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-12-27`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'holyInnocentsMartyrs',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-12-28`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintThomasBecketBishopAndMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-29`),
      data: {
        meta: {
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintSylvesterIPope',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-31`),
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
