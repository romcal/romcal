import { PatronTitle, Title, Precedences, Inputs, ParticularConfig } from '@internal/generator';

import { CalendarDef } from '../../../calendar-def';

export class Australia extends CalendarDef {
  // The Epiphany, the Ascension and the Most Holy Body and Blood of Christ are kept on a Sunday.
  // src: Table of Sundays 2024-2033 (2026: 4 January, 17 May and 7 June), listed by the National Liturgical Council
  // of the Australian Catholic Bishops Conference (https://nlc.catholic.org.au/current-liturgical-calendar):
  // https://www.liturgybrisbane.net.au/media/srij3m0x/2024-2033-table-of-sundays.pdf
  particularConfig: ParticularConfig = {
    epiphanyOnSunday: true,
    ascensionOnSunday: true,
    corpusChristiOnSunday: true,
  };

  inputs: Inputs = {
    // Kept on 27 January as an optional memorial, as 26 January is Australia Day.
    // src: "Saints Timothy and Titus" in italics (optional memorial) on 27 January in the 2025, 2026 and 2027
    // calendars listed by the National Liturgical Council (https://nlc.catholic.org.au/current-liturgical-calendar):
    // - https://www.liturgybrisbane.net.au/resources/liturgical-calendars/2025-liturgical-calendar/
    // - https://www.liturgybrisbane.net.au/resources/liturgical-calendars/2026-liturgical-calendar/
    // - https://www.liturgybrisbane.net.au/resources/liturgical-calendars/2027-liturgical-calendar/
    timothy_of_ephesus_and_titus_of_crete_bishops: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 27 },
    },

    patrick_of_ireland_bishop: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 3, date: 17 },
    },

    louis_grignion_de_montfort_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 27 },
    },

    peter_chanel_priest: {
      customLocaleId: 'peter_chanel_priest_patron_of_oceania',
      precedence: Precedences.ProperMemorial_11b,
      martyrology: ['peter_chanel_priest'],
      titles: [Title.ProtoMartyrOfOceania, PatronTitle.PatronOfOceania],
    },

    our_lady_help_of_christians: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 5, date: 24 },
      // When 24 May is a Sunday, it is always a Sunday of Easter, the Ascension, Pentecost, the Most Holy Trinity
      // or the Most Holy Body and Blood of Christ, so the solemnity is transferred to the Monday.
      // src: 2026 calendar, Pentecost on Sunday 24 May and "Our Lady, Help of Christians" on Monday 25 May:
      // https://www.liturgybrisbane.net.au/resources/liturgical-calendars/2026-liturgical-calendar/
      dateExceptions: {
        ifIsDayOfWeek: 0, // if is a Sunday
        setDate: { addDay: 1 },
      },
    },

    peter_to_rot_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 7 },
    },

    // Kept on 3 August, as 8 August is Saint Mary of the Cross.
    // src: "Saint Dominic" (memorial) on 3 August in the 2026 and 2027 calendars:
    // - https://www.liturgybrisbane.net.au/resources/liturgical-calendars/2026-liturgical-calendar/
    // - https://www.liturgybrisbane.net.au/resources/liturgical-calendars/2027-liturgical-calendar/
    dominic_de_guzman_priest: {
      dateDef: { month: 8, date: 3 },
    },

    mary_of_the_cross_mackillop_virgin: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 8, date: 8 },
    },

    // Our Lord Jesus Christ, the Eternal High Priest, is not kept in Australia.
    // src: no entry on the Thursday after Pentecost (12 June 2025, 28 May 2026, 20 May 2027) in the calendars above.
  };
}
