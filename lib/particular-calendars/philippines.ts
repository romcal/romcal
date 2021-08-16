import { Precedences } from '@romcal/constants/precedences';
import { CalendarDef } from '@romcal/models/calendar-def';
import { InputDefinitions } from '@romcal/types/calendar-def';
import { PatronTitles } from '@romcal/constants/martyrology-metadata';

export class Philippines extends CalendarDef {
  definitions: InputDefinitions = {
    holy_child_of_cebu: {
      precedence: Precedences.ProperFeast_8f,
      // Third Sunday of January: Santo Niño (Holy Child Jesus)
      dateDef: { month: 1, dayOfWeek: 0, nthWeekInMonth: 3 },
    },

    peter_baptist_blasquez_paul_miki_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 2, date: 6 },
      martyrology: ['peter_baptist_blasquez_martyr', 'paul_miki_martyr', 'companions_martyrs'],
    },

    pedro_calungsod_martyr: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 4, date: 2 },
      // When 2 April occurs with a Sunday of Lent or the Holy Week
      // or the Octave of Easter, the celebration is transferred
      // to the Saturday before Palm Sunday.
      dateExceptions: [
        {
          ifIsBetween: {
            from: { dateFn: 'palmSunday' },
            to: { dateFn: 'divineMercySunday' },
            inclusive: true,
          },
          setDate: { dateFn: 'palmSunday', subtractDay: 1 },
        },
        {
          ifIsDayOfWeek: 0,
          setDate: { dateFn: 'palmSunday', subtractDay: 1 },
        },
      ],
    },

    isidore_the_farmer: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 15 },
    },

    roch_of_montpellier: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 8, date: 16 },
    },

    ezequiel_moreno_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 19 },
    },

    rose_of_lima_virgin: {
      customLocaleKey: 'rose_of_lima_virgin_copatroness_of_the_philippines',
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 8, date: 23 },
      titles: { append: [PatronTitles.CopatronessOfThePhilippines] },
    },

    lawrence_ruiz_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
    },

    immaculate_conception_of_mary: {
      customLocaleKey: 'immaculate_conception_of_mary_patroness_of_the_philippines',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 12, date: 8 },
      titles: { append: [PatronTitles.PatronessOfThePhilippines] },
    },

    our_lady_of_guadalupe: {
      customLocaleKey: 'our_lady_of_guadalupe_patroness_of_the_philippines',
      precedence: Precedences.ProperMemorial_11b,
      titles: { append: [PatronTitles.PatronessOfThePhilippines] },
    },
  };
}
