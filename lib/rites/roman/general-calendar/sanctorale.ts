import { LiturgicalColors } from '@roman-rite/constants/colors';
import { ProperCycles } from '@roman-rite/constants/cycles';
import { Precedences } from '@roman-rite/constants/precedences';
import { CalendarDef } from '@roman-rite/models/calendar-def';
import { DateDefinitions } from '@roman-rite/types/calendar-def';

export class Sanctorale extends CalendarDef {
  definitions: DateDefinitions = {
    immaculate_conception_of_mary: {
      precedence: Precedences.GeneralSolemnity_3,
      date: (year) => this.dates.immaculateConceptionOfMary(year),
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
    },

    epiphany: {
      precedence: Precedences.TemporaleSolemnity_2,
      date: (year) => this.dates.epiphany(year),
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
      properCycle: ProperCycles.TEMPORALE,
    },

    trinity_sunday: {
      precedence: Precedences.GeneralSolemnity_3,
      date: (year) => this.dates.trinitySunday(year),
      liturgicalColors: LiturgicalColors.WHITE,
      properCycle: ProperCycles.TEMPORALE,
    },

    corpus_christi: {
      precedence: Precedences.GeneralSolemnity_3,
      date: (year) => this.dates.corpusChristi(year),
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
      properCycle: ProperCycles.TEMPORALE,
    },

    most_sacred_heart_of_jesus: {
      precedence: Precedences.GeneralSolemnity_3,
      date: (year) => this.dates.mostSacredHeartOfJesus(year),
      liturgicalColors: LiturgicalColors.WHITE,
      properCycle: ProperCycles.TEMPORALE,
    },

    nativity_of_john_the_baptist: {
      precedence: Precedences.GeneralSolemnity_3,
      date: (year) => this.dates.nativityOfJohnTheBaptist(year),
      liturgicalColors: LiturgicalColors.WHITE,
    },

    peter_and_paul_apostles: {
      precedence: Precedences.GeneralSolemnity_3,
      date: (year) => this.dates.peterAndPaulApostles(year),
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.RED,
      martyrology: ['peter_apostle', 'paul_apostle'],
    },

    assumption: {
      precedence: Precedences.TemporaleSolemnity_2,
      date: (year) => this.dates.assumption(year),
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
    },

    all_saints: {
      precedence: Precedences.GeneralSolemnity_3,
      date: (year) => this.dates.allSaints(year),
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
    },

    christ_the_king_sunday: {
      precedence: Precedences.GeneralSolemnity_3,
      date: (year) => this.dates.christTheKingSunday(year),
      liturgicalColors: LiturgicalColors.WHITE,
      properCycle: ProperCycles.TEMPORALE,
    },

    joseph_spouse_of_mary: {
      precedence: Precedences.GeneralSolemnity_3,
      date: (year) => this.dates.josephSpouseOfMary(year),
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
    },

    annunciation: {
      precedence: Precedences.GeneralSolemnity_3,
      date: (year) => this.dates.annunciation(year),
      liturgicalColors: LiturgicalColors.WHITE,
    },

    ascension: {
      precedence: Precedences.TemporaleSolemnity_2,
      date: (year) => this.dates.ascension(year),
      isHolyDayOfObligation: true,
      liturgicalColors: LiturgicalColors.WHITE,
      properCycle: ProperCycles.TEMPORALE,
    },

    holy_family: {
      precedence: Precedences.GeneralLordFeast_5,
      date: (year) => this.dates.holyFamily(year),
      liturgicalColors: LiturgicalColors.WHITE,
    },

    baptism_of_the_lord: {
      precedence: Precedences.GeneralLordFeast_5,
      date: (year) => this.dates.baptismOfTheLord(year),
      liturgicalColors: LiturgicalColors.WHITE,
      properCycle: ProperCycles.TEMPORALE,
    },

    presentation_of_the_lord: {
      precedence: Precedences.GeneralLordFeast_5,
      date: (year) => this.dates.presentationOfTheLord(year),
      liturgicalColors: LiturgicalColors.WHITE,
    },

    transfiguration: {
      precedence: Precedences.GeneralLordFeast_5,
      date: (year) => this.dates.transfiguration(year),
      liturgicalColors: LiturgicalColors.WHITE,
    },

    exaltation_of_the_holy_cross: {
      precedence: Precedences.GeneralLordFeast_5,
      date: (year) => this.dates.exaltationOfTheHolyCross(year),
      liturgicalColors: LiturgicalColors.RED,
    },

    // Memorials
    immaculate_heart_of_mary: {
      precedence: Precedences.GeneralLordFeast_5,
      date: (year) => this.dates.immaculateHeartOfMary(year),
      liturgicalColors: LiturgicalColors.WHITE,
      properCycle: ProperCycles.TEMPORALE,
    },
  };
}
