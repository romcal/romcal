import dayjs from 'dayjs';
import { Dates, Locales } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';
import { IRomcalDateItem } from '../models/romcal-date-item';
import { rangeOfDays, rangeContainsDate } from '../utils/dates';
import Config, { IRomcalDefaultConfig } from '../models/romcal-config';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<IRomcalDateItem>> => {
  const year = config.year;
  const _dates: Array<IRomcalDateItem> = [
    {
      key: 'saintJozefSebastianPelczar',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-1-19`),
    },
    {
      key: 'saintVincentPallottiPriest',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-22`),
    },
    {
      key: 'blessedVincentLewoniukAndCompanionsMartyrsOfPratulin',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-23`),
    },
    {
      key: 'blessedJerzyMatulewiczBishop',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-27`),
    },
    {
      key: 'blessedBoleslawaMariaLamentVirgin',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-29`),
    },
    {
      key: 'saintAngelaMericiVirgin',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-29`),
    },
    {
      key: 'saintsCyrilMonkAndMethodiusBishop',
      type: Types.FEAST,
      date: dayjs.utc(`${year}-2-14`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
          titles: [Titles.PATRON_OF_EUROPE],
        },
      },
    },
    {
      key: 'saintCasimir',
      type: Types.FEAST,
      date: dayjs.utc(`${year}-3-4`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    // jarosz: Moved saintAdalbert outside holy week and octave of Easter
    {
      key: 'saintAdalbertBishopAndMartyr',
      type: Types.SOLEMNITY,
      date: ((y: number): dayjs.Dayjs => {
        const holyWeekDates = Dates.holyWeek(y);
        const [firstDateInHolyWeek] = holyWeekDates;
        const [lastDateInHolyWeek] = holyWeekDates.reverse();

        const octaveOfEasterDates = Dates.octaveOfEaster(y);
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
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.RED,
          titles: [Titles.MARTYR],
        },
      },
    },
    {
      key: 'saintCatherineOfSienaVirginAndDoctorOfTheChurch',
      type: Types.FEAST,
      date: dayjs.utc(`${year}-4-29`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
          titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
        },
      },
    },
    {
      key: 'ourLadyQueenOfPoland',
      type: Types.SOLEMNITY,
      date: dayjs.utc(`${year}-5-3`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'ourLadyHelpOfChristians',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-5-24`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintFlorianMartyr',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-5-4`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintStanislausKazimierczykPriest',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-5`),
    },
    {
      key: 'saintsPhilipAndJamesApostles',
      type: Types.FEAST,
      date: dayjs.utc(`${year}-5-6`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintStanislausBishopAndMartyr',
      type: Types.SOLEMNITY,
      date: dayjs.utc(`${year}-5-8`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.RED,
        },
      },
    },
    {
      key: 'saintAndrewBobolaPriestAndMartyr',
      type: Types.FEAST,
      date: dayjs.utc(`${year}-5-16`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintUrsulaLedochowskaVirgin',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-5-29`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintJohnSarkanderPriestAndMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-30`),
    },
    {
      key: 'saintZdzislawa',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-30`),
    },
    {
      key: 'saintHedwigOfPoland',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-6-8`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'blessedBogumilBishop',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-6-10`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'blessedAntoniNowowiejskiBishopAndCompanionsMartyrs',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-12`),
    },
    {
      key: 'blessedMichaelKozalBishopAndMartyr',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-6-14`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'blessedJolantaReligious',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-6-15`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintAlbertChmielowskiReligious',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-6-17`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintZygmuntGorazdowskiPriest',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-26`),
    },
    {
      key: 'saintOttoOfBambergBishop',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-1`),
    },
    {
      key: 'saintMariaGorettiVirginAndMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-5`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.RED,
          titles: [Titles.MARTYR],
        },
      },
    },
    {
      key: 'blessedMariaTeresaLedochowskaVirgin',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-7-6`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintJohnOfDuklaPriest',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-7-8`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintBenedictOfNursiaAbbot',
      type: Types.FEAST,
      date: dayjs.utc(`${year}-7-11`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintBrunoBonifaceOfQuerfurtBishopAndMartyr',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-7-12`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintsAndrewZorardAndBenedictHermits',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-7-13`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintCamillusDeLellisPriest',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-14`),
    },
    {
      key: 'saintHenryBishopAndMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-14`),
    },
    {
      key: 'ourLadyOfMountCarmel',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-7-16`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintSimonOfLipnicaPriest',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-18`),
    },
    {
      key: 'blessedCzeslawPriest',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-7-20`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintApollinaris',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-21`),
    },
    {
      key: 'saintBridgetOfSwedenReligious',
      type: Types.FEAST,
      date: dayjs.utc(`${year}-7-23`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintKingaVirgin',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-7-24`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintCharbelMakhloufPriestAndHermit',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-28`),
    },
    {
      key: 'blessedEdmundBojanowski',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-7`),
    },
    {
      key: 'saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr',
      type: Types.FEAST,
      date: dayjs.utc(`${year}-8-9`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.RED,
          titles: [Titles.MARTYR, Titles.PATRON_OF_EUROPE],
        },
      },
    },
    {
      key: 'saintHyacinthPriest',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-8-17`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'ourLadyOfCzestochowa',
      type: Types.SOLEMNITY,
      date: dayjs.utc(`${year}-8-26`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'blessedBronislawaVirgin',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-9-1`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'blessedMariaStellaAndCompanionsVirginsAndMartyrs',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-4`),
    },
    {
      key: 'saintMelchiorGrodzieckiPriestAndMartyr',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-9-7`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'blessedAnielaSalawaVirgin',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-9`),
    },
    {
      key: 'saintDenisAndCompanionsMartyrs',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-10`),
    },
    {
      key: 'saintJohnLeonardiPriest',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-10`),
    },
    {
      key: 'saintZygmuntSzczesnyFelinskiBishop',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-17`),
    },
    {
      key: 'saintStanislausKostkaReligious',
      type: Types.FEAST,
      date: dayjs.utc(`${year}-9-18`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'blessedWladyslawOfGielniowPriest',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-25`),
    },
    // jarosz: Split saintRuizAndCo and saintWenceslaus (they are a single celebration in general.js)
    {
      key: 'saintLawrenceRuizAndCompanionsMartyrs',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-26`),
    },
    {
      key: 'saintWenceslausMartyr',
      type: Types.SOLEMNITY,
      date: dayjs.utc(`${year}-9-28`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintFaustinaKowalskaVirginAndReligious',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-10-5`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'blessedVincentKadlubekBishop',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'blessedMaryAngelaTruszkowskaVirgin',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-10`),
    },
    {
      key: 'blessedJohnBeyzymPriest',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-10-12`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'blessedHonoratKozminskiPriest',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-13`),
    },
    // jarosz: Split saintHedwig and saintMargaretMaryAlacoque and rename saintHedwig to saintHedwigOfSilesia, to make it less ambiguous
    {
      key: 'saintMargaretMaryAlacoque',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-10-14`),
    },
    {
      key: 'saintHedwigOfSilesia',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-10-16`),
    },
    {
      key: 'saintJohnOfKantyPriest',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-10-20`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'blessedJakubStrzemieBishop',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-10-21`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'popeSaintJohnPaulII',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-10-22`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintJosefBilczewskiBishop',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-23`),
    },
    // jarosz: Created Dedication of a particular church: solemnity on last Sunday of October
    {
      key: 'dedicationOfAParticularChurch',
      type: Types.SOLEMNITY,
      date: dayjs
        .utc(`${year}-10-1`)
        .endOf('month')
        .startOf('week'),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintsBenedyktJanMateuszIsaakAndKrystynMartyrs',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-11-13`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.RED,
        },
      },
    },
    {
      key: 'blessedKarolinaKozkownaVirginAndMartyr',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-11-18`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'blessedSalomeVirgin',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-11-19`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'saintRafalKalinowskiPriest',
      type: Types.MEMORIAL,
      date: dayjs.utc(`${year}-11-20`),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'blessedMaryOfJesusTheGoodShepherdVirgin',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-25`),
    },
    {
      key: 'blessedRafalChylinskiPriest',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-2`),
    },
    {
      key: 'saintBarbaraVirginAndMartyr',
      type: Types.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-4`),
    },
    {
      key: 'maryMotherOfTheChurch',
      type: Types.FEAST,
      date: ((y: number): dayjs.Dayjs => Dates.pentecostSunday(y).add(1, 'day'))(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
    {
      key: 'ourLordJesusChristTheEternalHighPriest',
      type: Types.FEAST,
      date: ((y: number): dayjs.Dayjs =>
        dayjs.utc(
          Dates.pentecostSunday(y)
            .add(4, 'day')
            .toISOString(),
        ))(year),
      data: {
        meta: {
          liturgicalColor: LiturgicalColors.WHITE,
        },
      },
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
