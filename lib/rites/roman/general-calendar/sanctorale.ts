import { Dates } from '../utils/dates';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import { CalendarDef, DateDefInput } from '../models/calendar-def';
import { Dayjs } from 'dayjs';

export class Sanctorale extends CalendarDef {
  calendarKey = 'general';

  definitions: DateDefInput[] = [
    {
      key: 'immaculate_conception_of_mary',
      precedence: Precedences.GeneralSolemnity_3,
      date: Dates.immaculateConceptionOfMary,
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'christmas',
      precedence: Precedences.TemporaleSolemnity_2,
      date: Dates.christmas,
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'mary_mother_of_god',
      precedence: Precedences.GeneralSolemnity_3,
      date: Dates.maryMotherOfGod,
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'epiphany',
      precedence: Precedences.TemporaleSolemnity_2,
      date: (year: number): Dayjs => Dates.epiphany(year, false), // todo: config.epiphanyOnSunday
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'trinity_sunday',
      precedence: Precedences.GeneralSolemnity_3,
      date: Dates.trinitySunday,
      liturgicalColors: LiturgicalColors.WHITE,
      // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    {
      key: 'corpus_christi',
      precedence: Precedences.GeneralSolemnity_3,
      date: (year: number): Dayjs => Dates.corpusChristi(year, true), // todo: config.corpusChristiOnSunday
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
      // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    {
      key: 'most_sacred_heart_of_jesus',
      precedence: Precedences.GeneralSolemnity_3,
      date: Dates.mostSacredHeartOfJesus,
      liturgicalColors: LiturgicalColors.WHITE,
      // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    {
      key: 'nativity_of_john_the_baptist',
      precedence: Precedences.GeneralSolemnity_3,
      date: Dates.nativityOfJohnTheBaptist,
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'peter_and_paul_apostles',
      precedence: Precedences.GeneralSolemnity_3,
      date: Dates.peterAndPaulApostles,
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.RED,
    },
    {
      key: 'assumption',
      precedence: Precedences.TemporaleSolemnity_2,
      date: Dates.assumption,
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'all_saints',
      precedence: Precedences.GeneralSolemnity_3,
      date: Dates.allSaints,
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'christ_the_king_sunday',
      precedence: Precedences.GeneralSolemnity_3,
      date: Dates.christTheKingSunday,
      liturgicalColors: LiturgicalColors.WHITE,
      // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    {
      key: 'joseph_spouse_of_mary',
      precedence: Precedences.GeneralSolemnity_3,
      date: Dates.josephSpouseOfMary,
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'annunciation',
      precedence: Precedences.GeneralSolemnity_3,
      date: Dates.annunciation,
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'easter_sunday',
      precedence: Precedences.Triduum_1,
      date: Dates.easter,
      // seasons: [
      //   LiturgicalSeasons.PASCHAL_TRIDUUM,
      //   LiturgicalSeasons.EASTERTIDE,
      // ],
      // seasonNames: [
      //   await localize({ key: 'paschal_triduum.season' }),
      //   await localize({ key: 'eastertide.season' }),
      // ],
      liturgicalColors: LiturgicalColors.WHITE,
      // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    {
      key: 'divine_mercy_sunday',
      precedence: Precedences.PrivilegedSunday_2,
      date: Dates.divineMercySunday,
      liturgicalColors: LiturgicalColors.WHITE,
      // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    {
      key: 'ascension',
      precedence: Precedences.TemporaleSolemnity_2,
      date: (year: number): Dayjs => Dates.ascension(year, false), //todo: config.ascensionOnSunday
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
      // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    {
      key: 'pentecost_sunday',
      precedence: Precedences.TemporaleSolemnity_2,
      date: Dates.pentecostSunday,
      liturgicalColors: LiturgicalColors.RED,
      // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    // Lent, Holy Week & Triduum
    {
      key: 'ash_wednesday',
      precedence: Precedences.AshWednesday_2,
      date: Dates.ashWednesday,
      liturgicalColors: LiturgicalColors.PURPLE,
      // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    {
      key: 'palm_sunday',
      precedence: Precedences.PrivilegedSunday_2,
      date: Dates.palmSunday,
      // periods: [LiturgicalPeriods.HOLY_WEEK],
      liturgicalColors: LiturgicalColors.RED,
      // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    // {
    //   key: 'holy_thursday',
    //   rank: Ranks.TRIDUUM,
    //   date: Dates.holyThursday,
    //   periods: [LiturgicalPeriods.HOLY_WEEK],
    //   liturgicalColors: LiturgicalColors.WHITE,
    //   // metadata: {
    //   //   titles: [Titles.TRIDUUM],
    //   // },
    //   // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    // },
    // {
    //   key: 'good_friday',
    //   rank: Ranks.TRIDUUM,
    //   date: Dates.goodFriday,
    //   // periods: [LiturgicalPeriods.HOLY_WEEK],
    //   liturgicalColors: LiturgicalColors.RED,
    //   // metadata: {
    //   //   titles: [Titles.TRIDUUM],
    //   // },
    //   // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    // },
    // {
    //   key: 'holy_saturday',
    //   rank: Ranks.TRIDUUM,
    //   date: Dates.holySaturday,
    //   periods: [LiturgicalPeriods.HOLY_WEEK],
    //   liturgicalColors: LiturgicalColors.WHITE,
    //   // metadata: {
    //   //   titles: [Titles.TRIDUUM],
    //   // },
    //   // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    // },
    // Feasts
    {
      key: 'holy_family',
      precedence: Precedences.GeneralLordFeast_5,
      date: Dates.holyFamily,
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.FEAST_OF_THE_LORD],
      // },
    },
    {
      key: 'baptism_of_the_lord',
      precedence: Precedences.GeneralLordFeast_5,
      date: (year: number): Dayjs => Dates.baptismOfTheLord(year, false), // todo: config.epiphanyOnSunday
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.FEAST_OF_THE_LORD],
      // },
      // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    {
      key: 'presentation_of_the_lord',
      precedence: Precedences.GeneralLordFeast_5,
      date: Dates.presentationOfTheLord,
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.FEAST_OF_THE_LORD],
      // },
    },
    {
      key: 'transfiguration',
      precedence: Precedences.GeneralLordFeast_5,
      date: Dates.transfiguration,
      liturgicalColors: LiturgicalColors.WHITE,
      // metadata: {
      //   titles: [Titles.FEAST_OF_THE_LORD],
      // },
    },
    {
      key: 'exaltation_of_the_holy_cross',
      precedence: Precedences.GeneralLordFeast_5,
      date: Dates.exaltationOfTheHolyCross,
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.FEAST_OF_THE_LORD],
      // },
    },
    // Memorials
    {
      key: 'immaculate_heart_of_mary',
      precedence: Precedences.GeneralLordFeast_5,
      date: Dates.immaculateHeartOfMary,
      liturgicalColors: LiturgicalColors.WHITE,
      // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
  ];
}
