import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Dates } from '../utils/dates';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import dayjs, { Dayjs } from 'dayjs';

export class Philippines extends CalendarDef {
  definitions: DateDefinitions = {
    holy_child_of_cebu: {
      precedence: Precedences.ProperFeast_8f,
      date: (year: number): Dayjs => {
        // Third Sunday of January: Santo Niño (Holy Child Jesus)
        const firstDay = dayjs.utc(`${year}-1-1`);
        const feastDay = 22 - (firstDay.day() == 0 ? 7 : firstDay.day());
        return dayjs.utc(`${year}-1-${feastDay}`);
      },
      liturgicalColors: LiturgicalColors.WHITE,
      // cycles: { liturgicalDayCycle: LiturgicalDayCycle.TEMPORALE },
    },
    peter_baptist_blasquez_paul_miki_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      date: '2-6',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
    pedro_calungsod_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      date: (year: number): dayjs.Dayjs => {
        const date = dayjs.utc(`${year}-4-2`);
        const palmSunday = Dates.palmSunday(year);
        const divineMercySunday = Dates.divineMercySunday(year);
        // When 2 April occurs with a Sunday of Lent or the Holy Week
        // or the Octave of Easter, the celebration is transferred
        // to the Saturday before Palm Sunday.
        if (
          date.day() === 0 ||
          (date.isSameOrAfter(palmSunday) &&
            date.isSameOrBefore(divineMercySunday))
        ) {
          return palmSunday.subtract(1, 'day');
        }
        return date;
      },
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
    isidore_the_farmer: {
      precedence: Precedences.ProperMemorial_11b,
      date: '5-15',
    },
    roch_of_montpellier: {
      precedence: Precedences.ProperMemorial_11b,
      date: '8-16',
    },
    ezequiel_moreno_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-19',
    },
    rose_of_lima_virgin_copatroness_of_the_philippines: {
      precedence: Precedences.ProperMemorial_11b,
      date: '8-23',
    },
    lawrence_ruiz_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-28',
      liturgicalColors: LiturgicalColors.RED,
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },
    immaculate_conception_of_mary_patroness_of_the_philippines: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '12-8',
    },
    our_lady_of_guadalupe_patroness_of_the_philippiness: {
      precedence: Precedences.ProperMemorial_11b,
      date: '12-12',
    },
  };
}
