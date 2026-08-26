import { Colors } from '../../../constants/colors';
import { CommonDefinition as Common } from '../../../constants/commons';
import { PatronTitle } from '../../../constants/martyrology-metadata';
import { Precedences } from '../../../constants/precedences';
import { CalendarDef } from '../../../models/calendar-def';
import { Inputs, ParticularConfig } from '../../../types/calendar-def';
import { Americas } from '../../regions/americas';

export class UnitedStates extends CalendarDef {
  ParentCalendars = [Americas];

  particularConfig: ParticularConfig = {
    epiphanyOnSunday: true, // src: mr_en_2011_ed3_us
    // The Ascension is celebrated on Thursday in the ecclesiastical provinces of Boston, Hartford,
    // New York, Omaha, and Philadelphia, and on Sunday in all other United States provinces.
    ascensionOnSunday: true, // src: https://www.usccb.org/resources/2027cal.pdf#page=8
    corpusChristiOnSunday: true, // src: mr_en_2011_ed3_us
  };

  inputs: Inputs = {
    // src: mr_en_2011_ed3_us
    elizabeth_ann_seton_religious: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 1, date: 4 },
      commonsDef: Common.None,
    },

    // src: mr_en_2011_ed3_us
    john_nepomucene_neumann_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 1, date: 5 },
      commonsDef: Common.None,
    },

    // src: mr_en_2011_ed3_us
    andre_bessette_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 6 },
      commonsDef: Common.Religious,
    },

    // When this observance is transferred to January 23, the Optional Memorials of Saint Vincent
    // and Saint Marianne Cope may be celebrated only in the Liturgy of the Hours. Romcal does not
    // currently distinguish the calendar of the Mass from that of the Liturgy of the Hours.
    // src:
    // - mr_en_2011_ed3_us
    // - https://www.usccb.org/resources/2023cal.pdf#page=15
    day_of_prayer_for_the_legal_protection_of_unborn_children: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 22 },
      dateExceptions: {
        ifIsDayOfWeek: 0,
        setDate: { addDay: 1 },
      },
      commonsDef: Common.None,
      colors: [Colors.White, Colors.Purple],
    },

    // src: mr_en_2011_ed3_us
    vincent_of_saragossa_deacon: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 23 },
    },

    // src: https://www.usccb.org/prayer-and-worship/liturgical-year-and-calendar/saint-marianne-cope
    marianne_cope_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 23 },
      commonsDef: [Common.Virgins, Common.MercyWorkers],
    },

    // src: mr_en_2011_ed3_us
    katharine_drexel_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 3, date: 3 },
      commonsDef: Common.Virgins,
    },

    // In the United States, the obligation attached to Mary, Mother of God, the Assumption, and
    // All Saints is abrogated when the celebration falls on a Saturday or a Monday. The current
    // calendar input supports only a static obligation flag. Hawaii follows a distinct norm under
    // which only the Immaculate Conception and Christmas are holy days of obligation; this requires
    // a dedicated child calendar.
    // src: https://www.usccb.org/beliefs-and-teachings/what-we-believe/canon-law/complementary-norms/canon-1246

    // Saint Joseph is not a holy day of obligation in the United States.
    // src: https://www.usccb.org/beliefs-and-teachings/what-we-believe/canon-law/complementary-norms/canon-1246
    joseph_spouse_of_mary: {
      isHolyDayOfObligation: false,
    },

    // src: mr_en_2011_ed3_us
    damien_de_veuster_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 10 },
      commonsDef: Common.Missionaries,
    },

    // src: mr_en_2011_ed3_us
    isidore_the_farmer: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 15 },
      commonsDef: Common.Saints,
    },

    // Saints Peter and Paul are not a holy day of obligation in the United States.
    // src: https://www.usccb.org/beliefs-and-teachings/what-we-believe/canon-law/complementary-norms/canon-1246
    peter_and_paul_apostles: {
      isHolyDayOfObligation: false,
    },

    // src: mr_en_2011_ed3_us
    junipero_serra_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 1 },
      commonsDef: [Common.Missionaries, Common.Pastors],
    },

    // src: mr_en_2011_ed3_us
    independence_day: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 4 },
      commonsDef: Common.None,
      colors: Colors.White,
    },

    // src: mr_en_2011_ed3_us
    elizabeth_of_portugal: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 5 },
    },

    // src:
    // - mr_en_2011_ed3_us
    // - https://www.usccb.org/prayer-worship/liturgical-year/saint-kateri-tekakwitha
    kateri_tekakwitha_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 7, date: 14 },
      commonsDef: Common.None,
    },

    // src: mr_en_2011_ed3_us
    camillus_de_lellis_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 18 },
    },

    // src: mr_en_2011_ed3_us
    peter_claver_priest: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 9, date: 9 },
    },

    // src: https://www.usccb.org/prayer-and-worship/liturgical-year-and-calendar/blessed-francis-xavier-seelos
    francis_xavier_seelos_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 5 },
      commonsDef: Common.Missionaries,
    },

    // src: mr_en_2011_ed3_us
    marie_rose_durocher_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 6 },
      commonsDef: Common.Virgins,
    },

    // src: mr_en_2011_ed3_us
    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs: {
      precedence: Precedences.ProperMemorial_11b,
      martyrology: ['john_de_brebeuf_priest', 'isaac_jogues_priest', 'companions_martyrs'],
    },

    // src: mr_en_2011_ed3_us
    paul_of_the_cross_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 20 },
    },

    // src: mr_en_2011_ed3_us
    frances_xavier_cabrini_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 11, date: 13 },
      commonsDef: [Common.Virgins, Common.MercyWorkers],
    },

    // src: mr_en_2011_ed3_us
    rose_philippine_duchesne_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 18 },
      commonsDef: Common.Virgins,
    },

    // src: mr_en_2011_ed3_us
    miguel_agustin_pro_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 23 },
      commonsDef: [Common.Martyrs, Common.Pastors],
    },

    // src: mr_en_2011_ed3_us
    thanksgiving_day: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, nthWeekInMonth: 4, dayOfWeek: 4 },
      commonsDef: Common.None,
      colors: Colors.White,
    },

    // When transferred from an Advent Sunday to Monday, the celebration remains a Solemnity but
    // the obligation does not transfer. The current calendar input supports only a static obligation flag.
    // src:
    // - mr_en_2011_ed3_us
    // - https://www.usccb.org/resources/newsletter-2025-02.pdf
    immaculate_conception_of_the_blessed_virgin_mary: {
      customLocaleId: 'immaculate_conception_of_the_blessed_virgin_mary_patroness_of_the_usa',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      isHolyDayOfObligation: true,
      titles: { append: [PatronTitle.PatronessOfTheUSA] },
    },
  };
}
