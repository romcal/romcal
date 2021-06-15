import { Dates } from '../utils/dates';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Dayjs } from 'dayjs';
import { ProperCycles } from '../constants/cycles';

export class Sanctorale extends CalendarDef {
  definitions: DateDefinitions = {
    immaculate_conception_of_mary: {
      precedence: Precedences.GeneralSolemnity_3,
      date: Dates.immaculateConceptionOfMary,
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
    },

    epiphany: {
      precedence: Precedences.TemporaleSolemnity_2,
      date: (year: number): Dayjs => Dates.epiphany(year, false), // todo: config.epiphanyOnSunday
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
      properCycle: ProperCycles.TEMPORALE,
    },

    trinity_sunday: {
      precedence: Precedences.GeneralSolemnity_3,
      date: Dates.trinitySunday,
      liturgicalColors: LiturgicalColors.WHITE,
      properCycle: ProperCycles.TEMPORALE,
    },

    corpus_christi: {
      precedence: Precedences.GeneralSolemnity_3,
      date: (year: number): Dayjs => Dates.corpusChristi(year, true), // todo: config.corpusChristiOnSunday
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
      properCycle: ProperCycles.TEMPORALE,
    },

    most_sacred_heart_of_jesus: {
      precedence: Precedences.GeneralSolemnity_3,
      date: Dates.mostSacredHeartOfJesus,
      liturgicalColors: LiturgicalColors.WHITE,
      properCycle: ProperCycles.TEMPORALE,
    },

    nativity_of_john_the_baptist: {
      precedence: Precedences.GeneralSolemnity_3,
      date: Dates.nativityOfJohnTheBaptist,
      liturgicalColors: LiturgicalColors.WHITE,
    },

    peter_and_paul_apostles: {
      precedence: Precedences.GeneralSolemnity_3,
      date: Dates.peterAndPaulApostles,
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.RED,
      martyrology: ['peter_apostle', 'paul_apostle'],
    },

    assumption: {
      precedence: Precedences.TemporaleSolemnity_2,
      date: Dates.assumption,
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
    },

    all_saints: {
      precedence: Precedences.GeneralSolemnity_3,
      date: Dates.allSaints,
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
    },

    christ_the_king_sunday: {
      precedence: Precedences.GeneralSolemnity_3,
      date: Dates.christTheKingSunday,
      liturgicalColors: LiturgicalColors.WHITE,
      properCycle: ProperCycles.TEMPORALE,
    },

    joseph_spouse_of_mary: {
      precedence: Precedences.GeneralSolemnity_3,
      date: Dates.josephSpouseOfMary,
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
    },

    annunciation: {
      precedence: Precedences.GeneralSolemnity_3,
      date: Dates.annunciation,
      liturgicalColors: LiturgicalColors.WHITE,
    },

    ascension: {
      precedence: Precedences.TemporaleSolemnity_2,
      date: (year: number): Dayjs => Dates.ascension(year, false), //todo: config.ascensionOnSunday
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
      properCycle: ProperCycles.TEMPORALE,
    },

    holy_family: {
      precedence: Precedences.GeneralLordFeast_5,
      date: Dates.holyFamily,
      liturgicalColors: LiturgicalColors.WHITE,
    },

    baptism_of_the_lord: {
      precedence: Precedences.GeneralLordFeast_5,
      date: (year: number): Dayjs => Dates.baptismOfTheLord(year, false), // todo: config.epiphanyOnSunday
      liturgicalColors: LiturgicalColors.WHITE,
      properCycle: ProperCycles.TEMPORALE,
    },

    presentation_of_the_lord: {
      precedence: Precedences.GeneralLordFeast_5,
      date: Dates.presentationOfTheLord,
      liturgicalColors: LiturgicalColors.WHITE,
    },

    transfiguration: {
      precedence: Precedences.GeneralLordFeast_5,
      date: Dates.transfiguration,
      liturgicalColors: LiturgicalColors.WHITE,
    },

    exaltation_of_the_holy_cross: {
      precedence: Precedences.GeneralLordFeast_5,
      date: Dates.exaltationOfTheHolyCross,
      liturgicalColors: LiturgicalColors.RED,
    },

    // Memorials
    immaculate_heart_of_mary: {
      precedence: Precedences.GeneralLordFeast_5,
      date: Dates.immaculateHeartOfMary,
      liturgicalColors: LiturgicalColors.WHITE,
      properCycle: ProperCycles.TEMPORALE,
    },
  };
}
