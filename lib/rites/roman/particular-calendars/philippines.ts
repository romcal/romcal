import { Precedences } from '@roman-rite/constants/precedences';
import { CalendarDef } from '@roman-rite/models/calendar-def';
import { InputDefinitions } from '@roman-rite/types/calendar-def';
import { PatronTitles } from '@romcal/constants/martyrology-metadata';
import dayjs from 'dayjs';

export class Philippines extends CalendarDef {
  definitions: InputDefinitions = {
    holy_child_of_cebu: {
      precedence: Precedences.ProperFeast_8f,
      date: (year) => {
        // Third Sunday of January: Santo Niño (Holy Child Jesus)
        const firstDay = dayjs.utc(`${year}-1-1`);
        const feastDay = 22 - (firstDay.day() == 0 ? 7 : firstDay.day());
        return dayjs.utc(`${year}-1-${feastDay}`);
      },
    },

    peter_baptist_blasquez_paul_miki_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      date: '2-6',
      martyrology: ['peter_baptist_blasquez_martyr', 'paul_miki_martyr', 'companions_martyrs'],
    },

    pedro_calungsod_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      date: (year) => {
        const date = dayjs.utc(`${year}-4-2`);
        const palmSunday = this.dates.palmSunday();
        const divineMercySunday = this.dates.divineMercySunday();
        // When 2 April occurs with a Sunday of Lent or the Holy Week
        // or the Octave of Easter, the celebration is transferred
        // to the Saturday before Palm Sunday.
        if (
          date.day() === 0 ||
          (date.isSameOrAfter(palmSunday) && date.isSameOrBefore(divineMercySunday))
        ) {
          return palmSunday.subtract(1, 'day');
        }
        return date;
      },
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

    rose_of_lima_virgin: {
      customLocaleKey: 'rose_of_lima_virgin_copatroness_of_the_philippines',
      precedence: Precedences.ProperMemorial_11b,
      date: '8-23',
      titles: (titles) => [...titles, PatronTitles.CopatronessOfThePhilippines],
    },

    lawrence_ruiz_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
    },

    immaculate_conception_of_mary: {
      customLocaleKey: 'immaculate_conception_of_mary_patroness_of_the_philippines',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '12-8',
      titles: (titles) => [...titles, PatronTitles.PatronessOfThePhilippines],
    },

    our_lady_of_guadalupe: {
      customLocaleKey: 'our_lady_of_guadalupe_patroness_of_the_philippiness',
      precedence: Precedences.ProperMemorial_11b,
      titles: (titles) => [...titles, PatronTitles.PatronessOfThePhilippines],
    },
  };
}
