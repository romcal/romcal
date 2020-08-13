import dayjs from 'dayjs';
import * as Locales from '@romcal/lib/Locales';
import { Dates } from '../lib/Dates';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item/romcal-date-item.model';
import { rangeOfDays, rangeContainsDate } from '@romcal/utils/dates/dates';
import RomcalConfig, { RomcalConfigInCalendarDef } from '@romcal/models/romcal-config/romcal-config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<RomcalDateItemInput>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItemInput> = [
    {
      key: 'saintAelredOfRievaulx',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-12`),
    },
    {
      key: 'saintWulstanBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-1-19`),
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
      key: 'saintDavidBishop',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-3-1`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintPatrickBishop',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-3-17`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    // When the celebration falls in the Easter Triduum, on a Sunday of Easter,
    // or in the Easter Octave it is transferred to the next available day —
    // generally the Monday of the Second Week of Easter.
    {
      key: 'saintGeorgeMartyr',
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
          const proposed = lastDateInTheEasterOctave.add(1, 'day');
          if (proposed.isSame(annunciation)) {
            return dayjs.utc(lastDateInTheEasterOctave.add(2, 'day').toISOString());
          } else {
            return dayjs.utc(proposed.toISOString());
          }
        } else {
          return dayjs.utc(date.toISOString());
        }
      })(year),
      prioritized: true,
    },
    {
      key: 'saintAdalbertBishopAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-24`),
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
      key: 'saintCatherineOfSienaVirginAndDoctorOfTheChurch',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-4-29`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'theEnglishMartyrs',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-5-4`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'stDunstanArchbishopOfCanterbury',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-5-19`),
    },
    {
      key: 'saintBedeTheVenerablePriestAndDoctor',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-5-25`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintAugustineOfCanterburyBishop',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-5-27`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintBonifaceBishopAndMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-6-5`),
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
      key: 'saintColumbaAbbotAndMissionary',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-9`),
    },
    {
      key: 'saintRichardOfChichesterBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-16`),
    },
    {
      key: 'saintAlbanMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-20`),
    },
    {
      key: 'saintsJohnFisherBishopAndThomasMoreMartyrs',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-6-22`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintEtheldredaAudreyVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-23`),
    },
    {
      key: 'saintOliverPlunkettBishopAndMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-1`),
    },
    {
      key: 'saintBenedictOfNursiaAbbot',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-11`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
    },
    {
      key: 'saintBridgetOfSwedenReligious',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-7-23`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.PATRON_OF_EUROPE],
      },
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
      key: 'blessedDominicOfTheMotherOfGodDominicBarberiPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-26`),
    },
    {
      key: 'saintsMargaretClitherowAnneLineAndMargaretWardMartyrs',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-30`),
    },
    {
      key: 'saintAidanBishopAndTheSaintsOfLindisfarne',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-31`),
    },
    {
      key: 'saintGregoryTheGreatPopeAndDoctor',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-9-3`),
      liturgicalColors: LiturgicalColors.WHITE,
      metadata: {
        titles: [Titles.DOCTOR_OF_THE_CHURCH],
      },
    },
    {
      key: 'saintCuthbertBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-4`),
    },
    {
      key: 'saintTheodoreOfCanterburyBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-9-19`),
    },
    {
      key: 'ourLadyOfWalsingham',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-9-24`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'blessedJohnHenryNewmanPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-9`),
    },
    {
      key: 'saintPaulinusOfYorkBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-10`),
    },
    // In England and Wales when the celebration falls on either a
    // Saturday or a Monday it is transferred to the Sunday.
    // Replaces 20th Sunday in Ordinary Time when it falls on a Sunday.
    {
      key: 'peterAndPaulApostles',
      source: 'celebrations', // Override the default lookup source
      rank: Ranks.SOLEMNITY,
      date: ((y: number): dayjs.Dayjs => {
        const date = dayjs.utc(`${y}-6-29`);
        if (date.day() === 1) {
          return date.subtract(1, 'day');
        } else if (date.day() === 6) {
          return date.add(1, 'day').startOf('day');
        } else {
          return date;
        }
      })(year),
      liturgicalColors: LiturgicalColors.RED,
      prioritized: true,
    },
    // In England and Wales when the celebration falls on either a
    // Saturday or a Monday it is transferred to the Sunday.
    // Replaces 20th Sunday in Ordinary Time when it falls on a Sunday.
    {
      key: 'assumption',
      source: 'celebrations',
      rank: Ranks.SOLEMNITY,
      date: ((y: number): dayjs.Dayjs => {
        const date = dayjs.utc(`${y}-8-15`);
        if (date.day() === 1) {
          return date.subtract(1, 'day');
        } else if (date.day() === 6) {
          return date.add(1, 'day').startOf('day');
        } else {
          return date;
        }
      })(year),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
    },
    {
      key: 'saintWilfridBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-12`),
    },
    {
      key: 'saintEdwardTheConfessor',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-13`),
    },
    {
      key: 'saintsChadAndCeddBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-10-26`),
    },
    {
      key: 'saintWinefrideVirgin',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-3`),
    },
    {
      key: 'saintWillibrordBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-7`),
    },
    {
      key: 'saintEdmundOfAbingdonBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-16`),
    },
    {
      key: 'saintMargaretOfScotland',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-16`),
    },
    {
      key: 'saintElizabethOfHungaryReligious',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-17`),
    },
    {
      key: 'saintHildaAbbess',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-17`),
    },
    {
      key: 'saintHughOfLincolnBishop',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-11-17`),
    },
    {
      key: 'saintAndrewTheApostle',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-11-30`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    // In England and Wales when All Saints (1 November) falls on a Saturday
    // and is transferred to Sunday, All Souls is transferred to Monday 3 November.
    // Like Ash Wednesday, All Souls is, technically, without rank.
    // However, in countries (not England & Wales) where it falls
    // on a Sunday it replaces the Sunday.
    {
      key: 'allSaints',
      source: 'celebrations', // Override the default locale lookup
      rank: Ranks.SOLEMNITY,
      date: ((y: number): dayjs.Dayjs => {
        const date = dayjs.utc(`${y}-11-1`);
        if (date.day() === 6) {
          return dayjs.utc(`${y}-11-2`);
        } else {
          return date;
        }
      })(year),
      liturgicalColors: LiturgicalColors.WHITE,
      prioritized: true,
    },
    {
      key: 'allSouls',
      rank: Ranks.FEAST,
      date: ((y: number): dayjs.Dayjs => {
        const date = dayjs.utc(`${y}-11-1`);
        if (date.day() === 6) {
          // If All Saints is on Saturday
          // Then All Souls will be on Monday because All Saints will be moved to Sunday on the rule above
          return dayjs.utc(`${y}-11-3`);
        } else {
          // Else, All Souls is the day after All Saints
          return dayjs.utc(`${y}-11-2`);
        }
      })(year),
      liturgicalColors: [LiturgicalColors.PURPLE, LiturgicalColors.BLACK],
      prioritized: true,
    },
    {
      key: 'saintThomasBecketBishopAndMartyr',
      rank: Ranks.FEAST,
      date: dayjs.utc(`${year}-12-29`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
