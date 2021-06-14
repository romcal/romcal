import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Dates } from '../utils/dates';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import { Dayjs } from 'dayjs';
import { Americas } from './americas';
import { PatronTitles } from '../../../constants/martyrology-metadata';

export class PuertoRico extends CalendarDef {
  inheritFrom = Americas;

  definitions: DateDefinitions = {
    most_holy_name_of_jesus: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-3',
    },

    our_lady_of_bethlehem: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-3',
    },

    marydolores_rodriguez_sopena_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-10',
    },

    carlos_manuel_rodriguez_santiago: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-4',
    },

    our_lady_of_mount_carmel: {
      precedence: Precedences.ProperFeast_8f,
      date: '7-16',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    teresa_of_jesus_jornet_ibars_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-26',
    },

    rose_of_lima_virgin: {
      precedence: Precedences.ProperFeast_8f,
      date: '8-30',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    charles_spinola_and_jerome_de_angelis_priests: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-10',
      martyrology: ['charles_spinola_priest', 'jerome_de_angelis_priest'],
    },

    mary_soledad_torres_acosta_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-11',
    },

    our_lady_mother_of_divine_providence: {
      customLocaleKey:
        'our_lady_mother_of_divine_providence_patroness_of_puerto_rico',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '11-19',
      titles: (titles) => [...titles, PatronTitles.PatronessOfPuertoRico],
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: (year: number): Dayjs => Dates.pentecostSunday(year).add(4, 'day'),
      liturgicalColors: LiturgicalColors.WHITE,
      // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
  };
}
