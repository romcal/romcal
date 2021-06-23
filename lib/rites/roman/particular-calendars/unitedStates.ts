import { Precedences } from '@roman-rite/constants/precedences';
import { CalendarDef } from '@roman-rite/models/calendar-def';
import { Americas } from '@roman-rite/particular-calendars/americas';
import {
  DateDefinitions,
  ParticularConfig,
} from '@roman-rite/types/calendar-def';
import { Dates } from '@roman-rite/utils/dates';
import { PatronTitles } from '@romcal/constants/martyrology-metadata';

export class UnitedStates extends CalendarDef {
  inheritFrom = Americas;

  particularConfig: ParticularConfig = {
    // TODO: Ascension is celebrated on Thursday in the following ecclesiastical provinces (in all other 26 EP, it is celebrated on Sunday): Boston, Hartford, New York, Newark, Omaha, Philadelphia
    ascensionOnSunday: true,
    corpusChristiOnSunday: true,
    epiphanyOnSunday: true,
  };

  definitions: DateDefinitions = {
    elizabeth_ann_seton_religious: {
      precedence: Precedences.ProperMemorial_11b,
      date: '1-4',
    },

    john_nepomucene_neumann_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '1-5',
    },

    andre_bessette_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-6',
    },

    vincent_of_saragossa_deacon: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-23',
    },

    marianne_cope_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-23',
    },

    katharine_drexel_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-3',
    },

    damien_de_veuster_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-10',
    },

    isidore_the_farmer: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-15',
    },

    junipero_serra_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-1',
    },

    elizabeth_of_portugal: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-5',
    },

    kateri_tekakwitha_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-14',
    },

    camillus_de_lellis_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-18',
    },

    peter_claver_priest: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-9',
    },

    francis_xavier_seelos_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-5',
    },

    marie_rose_durocher_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-6',
    },

    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      martyrology: [
        'john_de_brebeuf_priest',
        'isaac_jogues_priest',
        'companions_martyrs',
      ],
    },

    paul_of_the_cross_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-20',
    },

    frances_xavier_cabrini_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-13',
    },

    rose_philippine_duchesne_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-18',
    },

    miguel_agustin_pro_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-23',
    },

    // It is a holiday of obligation unless it occurs with Sunday:
    // then it is moved to the following Monday and while keeps its rank (solemnity),
    // it is not a holiday of obligation
    immaculate_conception_of_mary: {
      customLocaleKey: 'immaculate_conception_of_mary_patroness_of_the_usa',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      isHolyDayOfObligation: (year: number): boolean =>
        Dates.immaculateConceptionOfMary(year).day() === 0,
      titles: (titles) => [...titles, PatronTitles.PatronessOfTheUSA],
    },
  };
}
