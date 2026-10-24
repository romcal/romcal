import { PatronTitle, ProperCycles, Precedences, Inputs, ParticularConfig } from '@internal/generator';

import { CalendarDef } from '../../../calendar-def';

export class Philippines extends CalendarDef {
  // src: https://gcatholic.org/calendar/2026/PH-en
  particularConfig: ParticularConfig = {
    epiphanyOnSunday: true,
    ascensionOnSunday: true,
    corpusChristiOnSunday: true,
  };

  inputs: Inputs = {
    our_lord_jesus_christ_the_black_nazarene: {
      // src:
      // - https://dominusest.ph/post/updates-in-the-philippine-liturgical-calendar (38th National Meeting of
      //   Diocesan Directors of Liturgy, effective 1 December 2024)
      // - https://gcatholic.org/calendar/2026/PH-en
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 1, date: 9 },
    },

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

    isidore_the_farmer: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 5, date: 15 },
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      // src: https://gcatholic.org/calendar/2026/PH-en
      precedence: Precedences.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 4 },
      properCycle: ProperCycles.ProperOfTime,
    },

    roch_of_montpellier: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 8, date: 16 },
    },

    ezequiel_moreno_bishop: {
      /*
       * src: https://recoletos.ph/2024/02/01/cbcp-elevates-st-ezekiel-moreno-memorial-as-obligatory/;
       * old:
       *   rank: Precedences.OptionalMemorial_12
       *   since: unknown
       *   until: 28 Jan 2024
       * new:
       *   rank: Precedences.ProperMemorial_11b
       *   since: 29 Jan 2024
       */
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 8, date: 19 },
    },

    rose_of_lima_virgin: {
      customLocaleId: 'rose_of_lima_virgin_copatroness_of_the_philippines',
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 8, date: 23 },
      titles: { append: [PatronTitle.CopatronessOfThePhilippines] },
    },

    lawrence_ruiz_and_companions_martyrs: {
      // src:
      // - https://dominusest.ph/post/updates-in-the-philippine-liturgical-calendar (38th National Meeting of
      //   Diocesan Directors of Liturgy, effective 1 December 2024)
      // - https://gcatholic.org/calendar/2026/PH-en
      precedence: Precedences.ProperFeast_8f,
    },

    pedro_calungsod_martyr: {
      // src:
      // - https://dominusest.ph/post/updates-in-the-philippine-liturgical-calendar (38th National Meeting of
      //   Diocesan Directors of Liturgy, effective 1 December 2024)
      // - https://gcatholic.org/calendar/2026/PH-en
      precedence: Precedences.ProperFeast_8f,
      dateDef: { month: 10, date: 21 },
    },

    immaculate_conception_of_the_blessed_virgin_mary: {
      customLocaleId: 'immaculate_conception_of_the_blessed_virgin_mary_patroness_of_the_philippines',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 12, date: 8 },
      titles: { append: [PatronTitle.PatronessOfThePhilippines] },
    },

    our_lady_of_guadalupe: {
      customLocaleId: 'our_lady_of_guadalupe_patroness_of_the_philippines',
      precedence: Precedences.ProperMemorial_11b,
      titles: { append: [PatronTitle.PatronessOfThePhilippines] },
    },
  };
}
