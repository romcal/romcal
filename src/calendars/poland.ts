import dayjs from 'dayjs';
import * as Locales from '@RomcalLib/Locales';
import * as Dates from '@RomcalLib/Dates';
import { LITURGICAL_COLORS } from '@RomcalConstants/liturgical-colors.constant';
import { TITLES } from '@RomcalConstants/titles.constant';
import { RomcalDateItem } from '@RomcalModels/romcal-date-item';
import { rangeOfDays, rangeContainsDate } from '@RomcalUtils/dates';
import Config, { IRomcalDefaultConfig } from '@RomcalModels/romcal-config';
import { TypesEnum } from '@RomcalEnums/types.enum';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<RomcalDateItem>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItem> = [
    {
      key: 'saintJozefSebastianPelczar',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-1-19`),
    },
    {
      key: 'saintVincentPallottiPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-22`),
    },
    {
      key: 'blessedVincentLewoniukAndCompanionsMartyrsOfPratulin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-23`),
    },
    {
      key: 'blessedJerzyMatulewiczBishop',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-27`),
    },
    {
      key: 'blessedBoleslawaMariaLamentVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-29`),
    },
    {
      key: 'saintAngelaMericiVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-29`),
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
      key: 'saintCasimir',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-3-4`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    // jarosz: Moved saintAdalbert outside holy week and octave of Easter
    {
      key: 'saintAdalbertBishopAndMartyr',
      type: TypesEnum.SOLEMNITY,
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
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
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
      key: 'ourLadyQueenOfPoland',
      type: TypesEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-5-3`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'ourLadyHelpOfChristians',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-24`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintFlorianMartyr',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-4`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintStanislausKazimierczykPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-5`),
    },
    {
      key: 'saintsPhilipAndJamesApostles',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-5-6`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintStanislausBishopAndMartyr',
      type: TypesEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-5-8`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
        },
      },
    },
    {
      key: 'saintAndrewBobolaPriestAndMartyr',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-5-16`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintUrsulaLedochowskaVirgin',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-29`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintJohnSarkanderPriestAndMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-30`),
    },
    {
      key: 'saintZdzislawa',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-30`),
    },
    {
      key: 'saintHedwigOfPoland',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-8`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'blessedBogumilBishop',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-10`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'blessedAntoniNowowiejskiBishopAndCompanionsMartyrs',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-12`),
    },
    {
      key: 'blessedMichaelKozalBishopAndMartyr',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-14`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'blessedJolantaReligious',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-15`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintAlbertChmielowskiReligious',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-6-17`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintZygmuntGorazdowskiPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-26`),
    },
    {
      key: 'saintOttoOfBambergBishop',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-1`),
    },
    {
      key: 'saintMariaGorettiVirginAndMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-5`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'blessedMariaTeresaLedochowskaVirgin',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-6`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintJohnOfDuklaPriest',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-8`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
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
        },
      },
    },
    {
      key: 'saintBrunoBonifaceOfQuerfurtBishopAndMartyr',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-12`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintsAndrewZorardAndBenedictHermits',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-13`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintCamillusDeLellisPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-14`),
    },
    {
      key: 'saintHenryBishopAndMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-14`),
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
      key: 'saintSimonOfLipnicaPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-18`),
    },
    {
      key: 'blessedCzeslawPriest',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-20`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintApollinaris',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-21`),
    },
    {
      key: 'saintBridgetOfSwedenReligious',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-7-23`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintKingaVirgin',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-7-24`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintCharbelMakhloufPriestAndHermit',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-28`),
    },
    {
      key: 'blessedEdmundBojanowski',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-7`),
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
      key: 'saintHyacinthPriest',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-8-17`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'ourLadyOfCzestochowa',
      type: TypesEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-8-26`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'blessedBronislawaVirgin',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-1`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'blessedMariaStellaAndCompanionsVirginsAndMartyrs',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-4`),
    },
    {
      key: 'saintMelchiorGrodzieckiPriestAndMartyr',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-9-7`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'blessedAnielaSalawaVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-9`),
    },
    {
      key: 'saintDenisAndCompanionsMartyrs',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-10`),
    },
    {
      key: 'saintJohnLeonardiPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-10`),
    },
    {
      key: 'saintZygmuntSzczesnyFelinskiBishop',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-17`),
    },
    {
      key: 'saintStanislausKostkaReligious',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-9-18`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'blessedWladyslawOfGielniowPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-25`),
    },
    // jarosz: Split saintRuizAndCo and saintWenceslaus (they are a single celebration in general.js)
    {
      key: 'saintLawrenceRuizAndCompanionsMartyrs',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-26`),
    },
    {
      key: 'saintWenceslausMartyr',
      type: TypesEnum.SOLEMNITY,
      date: dayjs.utc(`${year}-9-28`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintFaustinaKowalskaVirginAndReligious',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-5`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'blessedVincentKadlubekBishop',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'blessedMaryAngelaTruszkowskaVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-10`),
    },
    {
      key: 'blessedJohnBeyzymPriest',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-12`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'blessedHonoratKozminskiPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-13`),
    },
    // jarosz: Split saintHedwig and saintMargaretMaryAlacoque and rename saintHedwig to saintHedwigOfSilesia, to make it less ambiguous
    {
      key: 'saintMargaretMaryAlacoque',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-14`),
    },
    {
      key: 'saintHedwigOfSilesia',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-16`),
    },
    {
      key: 'saintJohnOfKantyPriest',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-20`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'blessedJakubStrzemieBishop',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-21`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'popeSaintJohnPaulII',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-10-22`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintJosefBilczewskiBishop',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-23`),
    },
    // jarosz: Created Dedication of a particular church: solemnity on last Sunday of October
    {
      key: 'dedicationOfAParticularChurch',
      type: TypesEnum.SOLEMNITY,
      date: dayjs
        .utc(`${year}-10-1`)
        .endOf('month')
        .startOf('week'),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintsBenedyktJanMateuszIsaakAndKrystynMartyrs',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-13`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
        },
      },
    },
    {
      key: 'blessedKarolinaKozkownaVirginAndMartyr',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-18`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'blessedSalomeVirgin',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-19`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'saintRafalKalinowskiPriest',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-11-20`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
        },
      },
    },
    {
      key: 'blessedMaryOfJesusTheGoodShepherdVirgin',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-25`),
    },
    {
      key: 'blessedRafalChylinskiPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-2`),
    },
    {
      key: 'saintBarbaraVirginAndMartyr',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-12-4`),
    },
    {
      key: 'maryMotherOfTheChurch',
      type: TypesEnum.FEAST,
      date: ((y: number): dayjs.Dayjs => Dates.pentecostSunday(y).add(1, 'day'))(year),
      data: {
        prioritized: true,
        meta: {
          liturgicalColor: LITURGICAL_COLORS.WHITE,
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
