import dayjs, { Dayjs } from 'dayjs';

import { Dates } from '@romcal/lib/dates';
import * as Locales from '@romcal/lib/locales';
import { Seasons } from '@romcal/lib/seasons';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { RomcalLiturgicalDayInput } from '@romcal/models/liturgical-day/liturgical-day.types';
import { RomcalConfig, RomcalConfigInCalendarDef } from '@romcal/models/config/config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { CelebrationsCycle } from '@romcal/constants/cycles/cycles.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef = {
  ascensionOnSunday: false,
  corpusChristiOnSunday: true,
  epiphanyOnSunday: true,
};

const dates = async (config: RomcalConfig): Promise<Array<RomcalLiturgicalDayInput>> => {
  const year = config.year;
  const _dates: Array<RomcalLiturgicalDayInput> = [
    {
      key: 'saintsBasilTheGreatAndGregoryNazianzenBishopsAndDoctors',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-2`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'theMostHolyNameOfJesus',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-3`),
    },
    {
      key: 'saintRaymondOfPenyafortPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-7`),
    },
    {
      key: 'saintHilaryOfPoitiersBishopAndDoctor',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-13`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'anthony_of_egypt_abbot',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-17`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintFabianPopeAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-20`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintSebastianMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-20`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'agnes_of_rome_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-21`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintVincentDeaconAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-22`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintFrancisDeSalesBishopAndDoctor',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-24`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    // http://www.vatican.va/content/francesco/en/motu_proprio/documents/papa-francesco-motu-proprio-20190930_aperuit-illis.html
    {
      key: 'sundayOfTheWordOfGod',
      rank: Ranks.SUNDAY,
      date: await (async (y: number): Promise<Dayjs> => {
        const firstDayOfOT = dayjs((await Seasons.earlyOrdinaryTime(y, config.epiphanyOnSunday))[0].date);
        return firstDayOfOT.add(2, 'week').startOf('week');
      })(year),
      liturgicalColors: LiturgicalColors.GREEN,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    // The proper color for the Chair of Peter (Feast, Feb 22) and the Conversion of
    // St. Paul (Feast, Jan 25) is white, although both St. Peter and St. Paul
    // were martyrs.
    {
      key: 'conversion_of_saint_paul_the_apostle',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-1-25`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintsTimothyAndTitusBishops',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-26`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'angela_merici_virgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-27`),
    },
    {
      key: 'saintThomasAquinasPriestAndDoctor',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-28`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintJohnBoscoPriest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-1-31`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintBlaseBishopAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-3`),
    },
    {
      key: 'ansgar_of_hamburg_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-3`),
    },
    {
      key: 'agatha_of_sicily_virgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-5`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintPaulMikiAndCompanionsMartyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-6`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintJeromeEmiliani',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-8`),
    },
    {
      key: 'saintJosephineBakhitaVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-8`),
    },
    {
      key: 'saintScholasticaVirgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-10`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'our_lady_of_lourdes',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-11`),
    },
    {
      key: 'saintsCyrilMonkAndMethodiusBishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-14`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'sevenHolyFoundersOfTheServiteOrder',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-17`),
    },
    {
      key: 'saintPeterDamianBishopAndDoctorOfTheChurch',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-2-21`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'chair_of_saint_peter_the_apostle',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-2-22`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintPolycarpBishopAndMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-2-23`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintCasimir',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-4`),
    },
    {
      key: 'saintsPerpetuaAndFelicityMartyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-3-7`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintJohnOfGodReligious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-8`),
    },
    {
      key: 'saintFrancesOfRomeReligious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-9`),
    },
    {
      key: 'saintPatrickBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-17`),
    },
    {
      key: 'saintCyrilOfJerusalemBishopAndDoctor',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-18`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintTuribiusOfMogrovejoBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-3-23`),
    },
    {
      key: 'saintFrancisOfPaolaHermit',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-2`),
    },
    {
      key: 'saintIsidoreOfSevilleBishopAndDoctorOfTheChurch',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-4`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintVincentFerrerPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-5`),
    },
    {
      key: 'saintJohnBaptistDeLaSallePriest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-4-7`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintStanislausBishopAndMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-4-11`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintMartinIPopeAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-13`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'anselm_of_canterbury_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-21`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintGeorgeMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-23`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'adalbert_of_prague_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-23`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintFidelisOfSigmaringenPriestAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-24`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintMarkTheEvangelist',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-4-25`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintPeterChanelPriestAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-28`),
    },
    {
      key: 'saintLouisMarieGrignionDeMontfortPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-28`),
    },
    {
      key: 'saintCatherineOfSienaVirginAndDoctorOfTheChurch',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-4-29`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintPiusVPope',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-30`),
    },
    {
      key: 'saintJosephTheWorker',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-1`),
    },
    {
      key: 'saintAthanasiusBishopAndDoctor',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-2`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintsPhilipAndJamesApostles',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-5-3`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintsNereusAndAchilleusMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-12`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintPancrasMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-12`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'our_lady_of_fatima',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-13`),
    },
    {
      key: 'saintMatthiasTheApostle',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-5-14`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintJohnIPopeAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-18`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintBernardineOfSienaPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-20`),
    },
    {
      key: 'saintChristopherMagallanesAndCompanionsMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-21`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintRitaOfCascia',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-22`),
    },
    {
      key: 'saintBedeTheVenerablePriestAndDoctor',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-25`),
    },
    {
      key: 'saintGregoryViiPope',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-25`),
    },
    {
      key: 'saintMaryMagdaleneDePazziVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-25`),
    },
    {
      key: 'saintPhilipNeriPriest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-26`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintAugustineOfCanterburyBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-27`),
    },
    {
      key: 'saintPaulIvPope',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-29`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'visitationOfTheBlessedVirginMary',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-5-31`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintJustinMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-1`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintsMarcellinusAndPeterMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-2`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintsCharlesLwangaAndCompanionsMartyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-3`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintBonifaceBishopAndMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-5`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintNorbertBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-6`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintEphremDeaconAndDoctor',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-9`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintBarnabasTheApostle',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-11`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'anthony_of_padua_priest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-13`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintRomualdAbbot',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-19`),
    },
    {
      key: 'aloysius_gonzaga_religious',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-21`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintPaulinusOfNolaBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-22`),
    },
    {
      key: 'saintsJohnFisherBishopAndThomasMoreMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-22`),
    },
    {
      key: 'saintCyrilOfAlexandriaBishopAndDoctor',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-27`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintIrenaeusBishopAndMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-28`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'first_martyrs_of_the_holy_roman_church',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-30`),
    },
    {
      key: 'saintThomasTheApostle',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-3`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintElizabethOfPortugal',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-4`),
    },
    {
      key: 'anthony_zaccaria_priest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-5`),
    },
    {
      key: 'saintMariaGorettiVirginAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-6`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintAugustineZhaoRongPriestAndCompanionsMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-9`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintBenedictOfNursiaAbbot',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-11`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintHenry',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-13`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintCamillusDeLellisPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-14`),
    },
    {
      key: 'saintBonaventureBishopAndDoctor',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-15`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'our_lady_of_mount_carmel',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-16`),
    },
    {
      key: 'apollinaris_of_ravenna_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-20`),
    },
    {
      key: 'saintLawrenceOfBrindisiPriestAndDoctor',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-21`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintMaryMagdalene',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-22`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'mary_mother_of_the_church',
      rank: Ranks.MEMORIAL,
      date: ((y: number): Dayjs => Dates.pentecostSunday(y).add(1, 'day'))(year),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
    {
      key: 'saintBridgetOfSwedenReligious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-23`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintCharbelMakhloufPriestAndHermit',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-24`),
    },
    {
      key: 'saintJamesApostle',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-25`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintsJoachimAndAnne',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-26`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintMartha',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-29`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintPeterChrysologusBishopAndDoctor',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-30`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintIgnatiusOfLoyolaPriest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-7-31`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'alphonsus_liguori_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-1`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintEusebiusOfVercelliBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-2`),
    },
    {
      key: 'saintPeterJulianEymardPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-2`),
    },
    {
      key: 'saintJohnMaryVianneyPriest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-4`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'dedication_of_the_basilica_of_saint_mary_major',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-5`),
    },
    {
      key: 'saintSixtusIiPopeAndCompanionsMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-7`),
    },
    {
      key: 'saintCajetanPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-7`),
    },
    {
      key: 'saintDominicPriest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-8`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-9`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR, Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintLawrenceOfRomeDeaconAndMartyr',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-8-10`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintClareVirgin',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-11`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintJaneFrancesDeChantalReligious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-12`),
    },
    {
      key: 'saintsPontianPopeAndHippolytusPriestMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-13`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintMaximilianMaryKolbePriestAndMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-14`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintStephenOfHungary',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-16`),
    },
    {
      key: 'saintJohnEudesPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-19`),
    },
    {
      key: 'saintBernardOfClairvauxAbbotAndDoctorOfTheChurch',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-20`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintPiusXPope',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-21`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'queenship_of_mary',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-22`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintRoseOfLima',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-23`),
    },
    {
      key: 'saintBartholomewTheApostle',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-8-24`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintLouis',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-25`),
    },
    {
      key: 'saintJosephOfCalasanzPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-25`),
    },
    {
      key: 'saintMonica',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-27`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintAugustineOfHippoBishopAndDoctorOfTheChurch',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-28`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'theBeheadingOfSaintJohnTheBaptistMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-8-29`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintGregoryTheGreatPopeAndDoctor',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-3`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'nativity_of_mary',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-9-8`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintPeterClaverPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-9`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'most_holy_name_of_mary',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-12`),
    },
    {
      key: 'saintJohnChrysostomBishopAndDoctor',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-13`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'exaltation_of_the_holy_cross',
      source: 'celebrations', // Override the default lookup source
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-9-14`),
      liturgicalColors: LiturgicalColors.RED,
    },
    {
      key: 'our_lady_of_sorrows',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-15`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintsCorneliusPopeAndCyprianBishopMartyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-16`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintRobertBellarmineBishopAndDoctor',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-17`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintJanuariusBishopAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-19`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-20`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintMatthewApostleAndEvangelist',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-9-21`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintPioOfPietrelcinaPriest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-23`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintsCosmasAndDamianMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-26`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintVincentDePaulPriest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-27`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintWenceslausMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-28`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintLawrenceRuizAndCompanionsMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-28`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintsMichaelGabrielAndRaphaelArchangels',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-9-29`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintJeromePriestAndDoctor',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-30`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintThereseOfTheChildJesusVirginAndDoctor',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-1`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'guardian_angels',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-2`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintFrancisOfAssisi',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-4`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintFaustinaKowalskaVirginAndReligious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-5`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintBrunoPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-6`),
    },
    {
      key: 'our_lady_of_the_rosary',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-7`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintDenisAndCompanionsMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
    },
    {
      key: 'saintJohnLeonardiPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
    },
    {
      key: 'saintJohnXxiiiPope',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-11`),
    },
    {
      key: 'saintJohnPaulIiPope',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-22`),
    },
    {
      key: 'saintCallistusIPopeAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-14`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintTeresaOfJesusVirginAndDoctorOfTheChurch',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-15`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintHedwigReligious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-16`),
    },
    {
      key: 'saintMargaretMaryAlacoqueVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-16`),
    },
    {
      key: 'saintIgnatiusOfAntiochBishopAndMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-10-17`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintLukeTheEvangelist',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-10-18`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintsJohnDeBrebeufIsaacJoguesPriestsAndCompanionsMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-19`),
    },
    {
      key: 'saintPaulOfTheCrossPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-19`),
    },
    {
      key: 'saintJohnOfCapistranoPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-23`),
    },
    {
      key: 'anthony_mary_claret_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-24`),
    },
    {
      key: 'saintsSimonAndJudeApostles',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-10-28`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'all_souls',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-11-2`),
      liturgicalColors: [LiturgicalColors.PURPLE, LiturgicalColors.BLACK],
    },
    {
      key: 'saintMartinDePorresReligious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-3`),
    },
    {
      key: 'saintCharlesBorromeoBishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-4`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'dedication_of_the_lateran_basilica',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-11-9`),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
    },
    {
      key: 'saintLeoTheGreatPopeAndDoctor',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-10`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintMartinOfToursBishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-11`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintJosaphatBishopAndMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-12`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'albert_the_great_bishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-15`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintMargaretOfScotland',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-16`),
    },
    {
      key: 'saintGertrudeTheGreatVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-16`),
    },
    {
      key: 'saintElizabethOfHungaryReligious',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-17`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'dedication_of_the_basilicas_of_saints_peter_and_paul_apostles',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-18`),
    },
    {
      key: 'presentation_of_mary',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-21`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintCeciliaVirginAndMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-22`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintClementIPopeAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-23`),
    },
    {
      key: 'saintColumbanAbbot',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-23`),
    },
    {
      key: 'andrew_dung_lac_priest_and_companions_martyrs',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-11-24`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintCatherineOfAlexandriaVirginAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-25`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'andrew_apostle',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-11-30`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintFrancisXavierPriest',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-12-3`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintJohnDamascenePriestAndDoctor',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-4`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintNicholasBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-6`),
    },
    {
      key: 'ambrose_of_milan_bishop',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-12-7`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintJuanDiegoCuauhtlatoatzin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-9`),
    },
    {
      key: 'our_lady_of_loreto',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-10`),
    },
    {
      key: 'saintDamasusIPope',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-11`),
    },
    {
      key: 'our_lady_of_guadalupe',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-12`),
    },
    {
      key: 'saintLucyOfSyracuseVirginAndMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-12-13`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintJohnOfTheCrossPriestAndDoctor',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-12-14`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintPeterCanisiusPriestAndDoctor',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-21`),
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintJohnOfKantyPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-23`),
    },
    {
      key: 'saintStephenTheFirstMartyr',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-12-26`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintJohnTheApostleAndEvangelist',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-12-27`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'holy_innocents_martyrs',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-12-28`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintThomasBecketBishopAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-29`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintSylvesterIPope',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-31`),
    },
  ];

  // Get localized liturgical day names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
