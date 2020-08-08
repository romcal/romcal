import dayjs from 'dayjs';
import * as Locales from '@romcal/lib/Locales';
import * as Dates from '@romcal/lib/Dates';
import { LiturgicalColorsEnum } from '@romcal/enums/liturgical-colors.enum';
import { TITLES } from '@romcal/constants/titles.constant';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item';
import { rangeOfDays, rangeContainsDate } from '@romcal/utils/dates';
import Config, { IRomcalDefaultConfig } from '@romcal/models/romcal-config';
import { RanksEnum } from '@romcal/enums/ranks.enum';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<RomcalDateItemInput>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItemInput> = [
    {
      key: 'saintJozefSebastianPelczar',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-19`),
    },
    {
      key: 'saintVincentPallottiPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-22`),
    },
    {
      key: 'blessedVincentLewoniukAndCompanionsMartyrsOfPratulin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-23`),
    },
    {
      key: 'blessedJerzyMatulewiczBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-27`),
    },
    {
      key: 'blessedBoleslawaMariaLamentVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-29`),
    },
    {
      key: 'saintAngelaMericiVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-29`),
    },
    {
      key: 'saintsCyrilMonkAndMethodiusBishop',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-2-14`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintCasimir',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-3-4`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    // jarosz: Moved saintAdalbert outside holy week and octave of Easter
    {
      key: 'saintAdalbertBishopAndMartyr',
      rank: RanksEnum.SOLEMNITY,
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
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'saintCatherineOfSienaVirginAndDoctorOfTheChurch',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-4-29`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      metadata: {
        titles: [TITLES.PATRON_OF_EUROPE, TITLES.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'ourLadyQueenOfPoland',
      rank: RanksEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-5-3`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'ourLadyHelpOfChristians',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-24`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintFlorianMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-4`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintStanislausKazimierczykPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-5`),
    },
    {
      key: 'saintsPhilipAndJamesApostles',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-5-6`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintStanislausBishopAndMartyr',
      rank: RanksEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-5-8`),
      liturgicalColors: LiturgicalColorsEnum.RED,
    },
    {
      key: 'saintAndrewBobolaPriestAndMartyr',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-5-16`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintUrsulaLedochowskaVirgin',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-29`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintJohnSarkanderPriestAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-30`),
    },
    {
      key: 'saintZdzislawa',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-30`),
    },
    {
      key: 'saintHedwigOfPoland',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-8`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'blessedBogumilBishop',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-10`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'blessedAntoniNowowiejskiBishopAndCompanionsMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-12`),
    },
    {
      key: 'blessedMichaelKozalBishopAndMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-14`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'blessedJolantaReligious',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-15`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintAlbertChmielowskiReligious',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-17`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintZygmuntGorazdowskiPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-26`),
    },
    {
      key: 'saintOttoOfBambergBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-1`),
    },
    {
      key: 'saintMariaGorettiVirginAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-5`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR],
      },
    },
    {
      key: 'blessedMariaTeresaLedochowskaVirgin',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-6`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintJohnOfDuklaPriest',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-8`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintBenedictOfNursiaAbbot',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-7-11`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintBrunoBonifaceOfQuerfurtBishopAndMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-12`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintsAndrewZorardAndBenedictHermits',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-13`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintCamillusDeLellisPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-14`),
    },
    {
      key: 'saintHenry',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-14`),
    },
    {
      key: 'ourLadyOfMountCarmel',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-16`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintSimonOfLipnicaPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-18`),
    },
    {
      key: 'blessedCzeslawPriest',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-20`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintApollinaris',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-21`),
    },
    {
      key: 'saintBridgetOfSwedenReligious',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-7-23`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintKingaVirgin',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-24`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintCharbelMakhloufPriestAndHermit',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-28`),
    },
    {
      key: 'blessedEdmundBojanowski',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-7`),
    },
    {
      key: 'saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-8-9`),
      liturgicalColors: LiturgicalColorsEnum.RED,
      metadata: {
        titles: [TITLES.MARTYR, TITLES.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintHyacinthPriest',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-17`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'ourLadyOfCzestochowa',
      rank: RanksEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-8-26`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'blessedBronislawaVirgin',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-1`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'blessedMariaStellaAndCompanionsVirginsAndMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-4`),
    },
    {
      key: 'saintMelchiorGrodzieckiPriestAndMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-7`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'blessedAnielaSalawaVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-9`),
    },
    {
      key: 'saintDenisAndCompanionsMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-10`),
    },
    {
      key: 'saintJohnLeonardiPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-10`),
    },
    {
      key: 'saintZygmuntSzczesnyFelinskiBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-17`),
    },
    {
      key: 'saintStanislausKostkaReligious',
      rank: RanksEnum.FEAST,
      date: dayjs.utc(`${year}-9-18`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'blessedWladyslawOfGielniowPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-25`),
    },
    // jarosz: Split saintRuizAndCo and saintWenceslaus (they are a single celebration in general.js)
    {
      key: 'saintLawrenceRuizAndCompanionsMartyrs',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-26`),
    },
    {
      key: 'saintWenceslausMartyr',
      rank: RanksEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-9-28`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintFaustinaKowalskaVirginAndReligious',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-5`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'blessedVincentKadlubekBishop',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'blessedMaryAngelaTruszkowskaVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-10`),
    },
    {
      key: 'blessedJohnBeyzymPriest',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-12`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'blessedHonoratKozminskiPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-13`),
    },
    {
      key: 'saintMargaretMaryAlacoqueVirgin',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-14`),
    },
    {
      key: 'saintHedwigReligious',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-16`),
    },
    {
      key: 'saintJohnOfKantyPriest',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-20`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'blessedJakubStrzemieBishop',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-21`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintJohnPaulIiPope',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-22`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintJosefBilczewskiBishop',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-23`),
    },
    // jarosz: Created Dedication of a particular church: solemnity on last Sunday of October
    {
      key: 'dedicationOfAParticularChurch',
      rank: RanksEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-10-1`).endOf('month').startOf('week'),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintsBenedyktJanMateuszIsaakAndKrystynMartyrs',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-13`),
      liturgicalColors: LiturgicalColorsEnum.RED,
    },
    {
      key: 'blessedKarolinaKozkownaVirginAndMartyr',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-18`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'blessedSalomeVirgin',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-19`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'saintRafalKalinowskiPriest',
      rank: RanksEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-20`),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
    {
      key: 'blessedMaryOfJesusTheGoodShepherdVirgin',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-25`),
    },
    {
      key: 'blessedRafalChylinskiPriest',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-2`),
    },
    {
      key: 'saintBarbaraVirginAndMartyr',
      rank: RanksEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-4`),
    },
    {
      key: 'maryMotherOfTheChurch',
      rank: RanksEnum.FEAST,
      date: ((y: number): dayjs.Dayjs => Dates.pentecostSunday(y).add(1, 'day'))(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
      prioritized: true,
    },
    {
      key: 'ourLordJesusChristTheEternalHighPriest',
      rank: RanksEnum.FEAST,
      date: ((y: number): dayjs.Dayjs => dayjs.utc(Dates.pentecostSunday(y).add(4, 'day').toISOString()))(year),
      liturgicalColors: LiturgicalColorsEnum.WHITE,
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
