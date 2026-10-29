import { PatronTitle, Title, Precedences, Inputs, ParticularConfig } from '@internal/generator';

import { CalendarDef } from '../../../calendar-def';

export class Australia extends CalendarDef {
  // src: the liturgical calendars given by the National Liturgical Council of the Australian Catholic Bishops
  // Conference (https://nlc.catholic.org.au/current-liturgical-calendar), published by Liturgy Brisbane:
  // - https://www.liturgybrisbane.net.au/media/srij3m0x/2024-2033-table-of-sundays.pdf
  // - https://www.liturgybrisbane.net.au/resources/liturgical-calendars/2025-liturgical-calendar/
  // - https://www.liturgybrisbane.net.au/resources/liturgical-calendars/2026-liturgical-calendar/
  // - https://www.liturgybrisbane.net.au/resources/liturgical-calendars/2027-liturgical-calendar/
  //
  // The Epiphany, the Ascension and the Most Holy Body and Blood of Christ are kept on a Sunday
  // (Table of Sundays 2024-2033; 2026: 4 January, 17 May and 7 June).
  particularConfig: ParticularConfig = {
    epiphanyOnSunday: true,
    ascensionOnSunday: true,
    corpusChristiOnSunday: true,
  };

  inputs: Inputs = {
    // Kept on 27 January as an optional memorial, as 26 January is Australia Day (2025, 2026 and 2027 calendars).
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
      // or the Most Holy Body and Blood of Christ, so the solemnity is transferred to the Monday
      // (2026 calendar: Pentecost on 24 May, Our Lady Help of Christians on 25 May).
      dateExceptions: {
        ifIsDayOfWeek: 0, // if is a Sunday
        setDate: { addDay: 1 },
      },
    },

    peter_to_rot_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 7 },
    },

    // Kept on 3 August, as 8 August is Saint Mary of the Cross (2026 and 2027 calendars).
    dominic_de_guzman_priest: {
      dateDef: { month: 8, date: 3 },
    },

    mary_of_the_cross_mackillop_virgin: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 8, date: 8 },
    },
  };
}
