import dayjs, { Dayjs } from 'dayjs';

import * as Dates from '@romcal/lib/Dates';
import * as Locales from '@romcal/lib/Locales';
import * as Seasons from '@romcal/lib/Seasons';
import { LiturgicalColorsEnum } from '@romcal/enums/liturgical-colors.enum';
import { TITLES } from '@romcal/constants/titles.constant';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@romcal/models/romcal-config';
import { RanksEnum } from '@romcal/enums/ranks.enum';
import { CelebrationsCycle } from '@romcal/constants/liturgical-cycles.constant';

const defaultConfig: IRomcalDefaultConfig = {
  ascensionOnSunday: false,
  corpusChristiOnSunday: true,
  epiphanyOnSunday: true,
};

const dates = async (config: Config): Promise<Array<RomcalDateItemInput>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItemInput> = [
    {
      key: 'saintsBasilTheGreatAndGregoryNazianzenBishopsAndDoctors',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-2`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'theMostHolyNameOfJesus',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-3`),
    },
    {
      key: 'saintRaymondOfPenyafortPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-7`),
    },
    {
      key: 'saintHilaryOfPoitiersBishopAndDoctor',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-13`),
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintAnthonyOfEgyptAbbot',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-17`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintFabianPopeAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-20`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintSebastianMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-20`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintAgnesVirginAndMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-21`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintVincentDeaconAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-22`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintFrancisDeSalesBishopAndDoctor',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-24`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    // http://www.vatican.va/content/francesco/en/motu_proprio/documents/papa-francesco-motu-proprio-20190930_aperuit-illis.html
    {
      key: 'sundayOfTheWordOfGod',
      rank: RanksEnum.SUNDAY,
      date: await (async (y: number): Promise<Dayjs> => {
        const firstDayOfOT = dayjs((await Seasons.earlyOrdinaryTime(y, config.epiphanyOnSunday))[0].date);
        return firstDayOfOT.add(2, 'week').startOf('week');
      })(year),
      liturgicalColors: LiturgicalColorsEnum.GREEN,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    // The proper color for the Chair of Peter (Feast, Feb 22) and the Conversion of
    // St. Paul (Feast, Jan 25) is white, although both St. Peter and St. Paul
    // were martyrs.
    {
      key: 'conversionOfSaintPaulApostle',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-1-25`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintsTimothyAndTitusBishops',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-26`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintAngelaMericiVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-27`),
    },
    {
      key: 'saintThomasAquinasPriestAndDoctor',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-28`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintJohnBoscoPriest',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-31`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintBlaseBishopAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-3`),
    },
    {
      key: 'saintAnsgarBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-3`),
    },
    {
      key: 'saintAgathaVirginAndMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-2-5`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintPaulMikiAndCompanionsMartyrs',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-2-6`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintJeromeEmiliani',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-8`),
    },
    {
      key: 'saintJosephineBakhitaVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-8`),
    },
    {
      key: 'saintScholasticaVirgin',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-2-10`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'ourLadyOfLourdes',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-11`),
    },
    {
      key: 'saintsCyrilMonkAndMethodiusBishop',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-2-14`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'sevenHolyFoundersOfTheServiteOrder',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-17`),
    },
    {
      key: 'saintPeterDamianBishopAndDoctorOfTheChurch',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-21`),
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'chairOfSaintPeterApostle',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-2-22`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintPolycarpBishopAndMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-2-23`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintCasimir',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-4`),
    },
    {
      key: 'saintsPerpetuaAndFelicityMartyrs',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-3-7`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintJohnOfGodReligious',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-8`),
    },
    {
      key: 'saintFrancesOfRomeReligious',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-9`),
    },
    {
      key: 'saintPatrickBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-17`),
    },
    {
      key: 'saintCyrilOfJerusalemBishopAndDoctor',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-18`),
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintTuribiusOfMogrovejoBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-23`),
    },
    {
      key: 'saintFrancisOfPaolaHermit',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-2`),
    },
    {
      key: 'saintIsidoreOfSevilleBishopAndDoctorOfTheChurch',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-4`),
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintVincentFerrerPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-5`),
    },
    {
      key: 'saintJohnBaptistDeLaSallePriest',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-4-7`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintStanislausBishopAndMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-4-11`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintMartinIPopeAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-13`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintAnselmOfCanterburyBishopAndDoctorOfTheChurch',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-21`),
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintGeorgeMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-23`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintAdalbertBishopAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-23`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintFidelisOfSigmaringenPriestAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-24`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintMarkTheEvangelist',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-4-25`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintPeterChanelPriestAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-28`),
    },
    {
      key: 'saintLouisMarieGrignionDeMontfortPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-28`),
    },
    {
      key: 'saintCatherineOfSienaVirginAndDoctorOfTheChurch',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-4-29`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.PATRON_OF_EUROPE, TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintPiusVPope',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-30`),
    },
    {
      key: 'saintJosephTheWorker',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-1`),
    },
    {
      key: 'saintAthanasiusBishopAndDoctor',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-2`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintsPhilipAndJamesApostles',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-5-3`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintsNereusAndAchilleusMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-12`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintPancrasMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-12`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'ourLadyOfFatima',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-13`),
    },
    {
      key: 'saintMatthiasTheApostle',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-5-14`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintJohnIPopeAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-18`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintBernardineOfSienaPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-20`),
    },
    {
      key: 'saintChristopherMagallanesAndCompanionsMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-21`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintRitaOfCascia',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-22`),
    },
    {
      key: 'saintBedeTheVenerablePriestAndDoctor',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-25`),
    },
    {
      key: 'saintGregoryViiPope',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-25`),
    },
    {
      key: 'saintMaryMagdaleneDePazziVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-25`),
    },
    {
      key: 'saintPhilipNeriPriest',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-26`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintAugustineOfCanterburyBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-27`),
    },
    {
      key: 'saintPaulIvPope',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-29`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'visitationOfTheBlessedVirginMary',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-5-31`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintJustinMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-1`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintsMarcellinusAndPeterMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-2`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintsCharlesLwangaAndCompanionsMartyrs',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-3`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintBonifaceBishopAndMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-5`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintNorbertBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-6`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintEphremDeaconAndDoctor',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-9`),
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintBarnabasTheApostle',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-11`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintAnthonyOfPaduaPriestAndDoctor',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-13`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintRomualdAbbot',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-19`),
    },
    {
      key: 'saintAloysiusGonzagaReligious',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-21`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintPaulinusOfNolaBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-22`),
    },
    {
      key: 'saintsJohnFisherBishopAndThomasMoreMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-22`),
    },
    {
      key: 'saintCyrilOfAlexandriaBishopAndDoctor',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-27`),
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintIrenaeusBishopAndMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-28`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'firstMartyrsOfTheChurchOfRome',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-30`),
    },
    {
      key: 'saintThomasTheApostle',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-7-3`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintElizabethOfPortugal',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-4`),
    },
    {
      key: 'saintAnthonyZaccariaPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-5`),
    },
    {
      key: 'saintMariaGorettiVirginAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-6`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintAugustineZhaoRongPriestAndCompanionsMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-9`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintBenedictOfNursiaAbbot',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-11`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintHenry',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-13`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintCamillusDeLellisPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-14`),
    },
    {
      key: 'saintBonaventureBishopAndDoctor',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-15`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'ourLadyOfMountCarmel',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-16`),
    },
    {
      key: 'saintApollinaris',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-20`),
    },
    {
      key: 'saintLawrenceOfBrindisiPriestAndDoctor',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-21`),
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    // https://github.com/pejulian/romcal/issues/27
    {
      key: 'saintMaryMagdalene',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-7-22`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    // On 11 Feb 2018, Pope Francis inserted the Memorial of the
    // Blessed Virgin Mary, Mother of the Church, into the General Roman Calendar.
    // It will be celebrated on Monday after Pentecost.
    {
      key: 'maryMotherOfTheChurch',
      rank: RanksEnum.MEMORIAL,
      date: ((y: number): Dayjs => Dates.pentecostSunday(y).add(1, 'day'))(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'saintBridgetOfSwedenReligious',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-23`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintCharbelMakhloufPriestAndHermit',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-24`),
    },
    {
      key: 'saintJamesApostle',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-7-25`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintsJoachimAndAnne',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-26`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintMartha',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-29`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintPeterChrysologusBishopAndDoctor',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-30`),
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintIgnatiusOfLoyolaPriest',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-31`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintAlphonsusMariaDeLiguoriBishopAndDoctorOfTheChurch',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-1`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintEusebiusOfVercelliBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-2`),
    },
    {
      key: 'saintPeterJulianEymardPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-2`),
    },
    {
      key: 'saintJohnMaryVianneyPriest',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-4`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'dedicationOfTheBasilicaOfSaintMaryMajor',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-5`),
    },
    {
      key: 'saintSixtusIiPopeAndCompanionsMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-7`),
    },
    {
      key: 'saintCajetanPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-7`),
    },
    {
      key: 'saintDominicPriest',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-8`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-9`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR, TITLES.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintLawrenceOfRomeDeaconAndMartyr',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-8-10`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintClareVirgin',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-11`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintJaneFrancesDeChantalReligious',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-12`),
    },
    {
      key: 'saintsPontianPopeAndHippolytusPriestMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-13`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintMaximilianMaryKolbePriestAndMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-14`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintStephenOfHungary',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-16`),
    },
    {
      key: 'saintJohnEudesPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-19`),
    },
    {
      key: 'saintBernardOfClairvauxAbbotAndDoctorOfTheChurch',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-20`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintPiusXPope',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-21`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'queenshipOfBlessedVirginMary',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-22`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintRoseOfLima',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-23`),
    },
    {
      key: 'saintBartholomewTheApostle',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-8-24`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintLouis',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-25`),
    },
    {
      key: 'saintJosephOfCalasanzPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-25`),
    },
    {
      key: 'saintMonica',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-27`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintAugustineOfHippoBishopAndDoctorOfTheChurch',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-28`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'theBeheadingOfSaintJohnTheBaptistMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-29`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintGregoryTheGreatPopeAndDoctor',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-3`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'birthOfTheBlessedVirginMary',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-9-8`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintPeterClaverPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-9`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'holyNameOfTheBlessedVirginMary',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-12`),
    },
    {
      key: 'saintJohnChrysostomBishopAndDoctor',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-13`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'theExaltationOfTheHolyCross',
      source: 'celebrations', // Override the default lookup source
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-9-14`),
      liturgicalColors: LiturgicalColorsEnum.RED,
    },
    {
      key: 'ourLadyOfSorrows',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-15`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintsCorneliusPopeAndCyprianBishopMartyrs',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-16`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintRobertBellarmineBishopAndDoctor',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-17`),
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintJanuariusBishopAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-19`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintAndrewKimTaegonPriestAndPaulChongHasangAndCompanionsMartyrs',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-20`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintMatthewApostleAndEvangelist',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-9-21`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintPioOfPietrelcinaPriest',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-23`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintsCosmasAndDamianMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-26`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintVincentDePaulPriest',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-27`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintWenceslausMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-28`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintLawrenceRuizAndCompanionsMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-28`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintsMichaelGabrielAndRaphaelArchangels',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-9-29`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintJeromePriestAndDoctor',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-30`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintThereseOfTheChildJesusVirginAndDoctor',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-1`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'guardianAngels',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-2`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintFrancisOfAssisi',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-4`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintFaustinaKowalskaVirginAndReligious',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-5`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintBrunoPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-6`),
    },
    {
      key: 'ourLadyOfTheRosary',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-7`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintDenisAndCompanionsMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
    },
    {
      key: 'saintJohnLeonardiPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
    },
    // http://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20140529_decreto-calendario-generale-gxxiii-gpii_en.html
    {
      key: 'saintJohnXxiiiPope',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-11`),
    },
    // http://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20140529_decreto-calendario-generale-gxxiii-gpii_en.html
    {
      key: 'saintJohnPaulIiPope',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-22`),
    },
    {
      key: 'saintCallistusIPopeAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-14`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintTeresaOfJesusVirginAndDoctorOfTheChurch',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-15`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintHedwigReligious',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-16`),
    },
    {
      key: 'saintMargaretMaryAlacoqueVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-16`),
    },
    {
      key: 'saintIgnatiusOfAntiochBishopAndMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-17`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintLukeTheEvangelist',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-10-18`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintsJohnDeBrebeufIsaacJoguesPriestsAndCompanionsMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-19`),
    },
    {
      key: 'saintPaulOfTheCrossPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-19`),
    },
    {
      key: 'saintJohnOfCapistranoPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-23`),
    },
    {
      key: 'saintAnthonyMaryClaretBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-24`),
    },
    {
      key: 'saintsSimonAndJudeApostles',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-10-28`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'allSouls',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-11-2`),
      liturgicalColors: [LiturgicalColorsEnum.PURPLE, LiturgicalColorsEnum.BLACK],
    },
    {
      key: 'saintMartinDePorresReligious',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-3`),
    },
    {
      key: 'saintCharlesBorromeoBishop',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-4`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    // Replaces 32nd Sunday in Ordinary Time when it falls on a Sunday
    {
      key: 'dedicationOfTheLateranBasilica',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-11-9`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
    },
    {
      key: 'saintLeoTheGreatPopeAndDoctor',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-10`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintMartinOfToursBishop',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-11`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintJosaphatBishopAndMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-12`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintAlbertTheGreatBishopAndDoctor',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-15`),
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintMargaretOfScotland',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-16`),
    },
    {
      key: 'saintGertrudeTheGreatVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-16`),
    },
    {
      key: 'saintElizabethOfHungaryReligious',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-17`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'dedicationOfTheBasilicasOfSaintsPeterAndPaulApostles',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-18`),
    },
    {
      key: 'presentationOfTheBlessedVirginMary',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-21`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintCeciliaVirginAndMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-22`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintClementIPopeAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-23`),
    },
    {
      key: 'saintColumbanAbbot',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-23`),
    },
    {
      key: 'saintAndrewDungLacAndCompanionsMartyrs',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-24`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintCatherineOfAlexandriaVirginAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-25`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintAndrewTheApostle',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-11-30`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintFrancisXavierPriest',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-12-3`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintJohnDamascenePriestAndDoctor',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-4`),
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintNicholasBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-6`),
    },
    {
      key: 'saintAmbroseBishopAndDoctor',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-12-7`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintJuanDiegoCuauhtlatoatzin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-9`),
    },
    {
      key: 'ourLadyOfLoreto',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-10`),
    },
    {
      key: 'saintDamasusIPope',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-11`),
    },
    {
      key: 'ourLadyOfGuadalupe',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-12`),
    },
    {
      key: 'saintLucyOfSyracuseVirginAndMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-12-13`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintJohnOfTheCrossPriestAndDoctor',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-12-14`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintPeterCanisiusPriestAndDoctor',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-21`),
      metadata: {
        titles: [TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintJohnOfKantyPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-23`),
    },
    {
      key: 'saintStephenTheFirstMartyr',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-12-26`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintJohnTheApostleAndEvangelist',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-12-27`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'holyInnocentsMartyrs',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-12-28`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintThomasBecketBishopAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-29`),
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintSylvesterIPope',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-31`),
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
