import { CalendarDefInput, PatronTitle, Precedence } from '@romcal/shared';

export const UnitedStates: CalendarDefInput = {
  calendarId: 'united-states',

  basedOn: ['general-roman', 'america'],

  config: {
    epiphanyOnSunday: true,
    // TODO: Ascension is celebrated on Thursday in the following ecclesiastical provinces (in all other 26 EP, it is celebrated on Sunday): Boston, Hartford, New York, Newark, Omaha, Philadelphia
    ascensionOnSunday: true,
    corpusChristiOnSunday: true,
  },

  inputs: {
    elizabeth_ann_seton_religious: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 1, date: 4 },
    },

    john_nepomucene_neumann_bishop: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 1, date: 5 },
    },

    andre_bessette_religious: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 1, date: 6 },
    },

    vincent_of_saragossa_deacon: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 1, date: 23 },
    },

    marianne_cope_virgin: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 1, date: 23 },
    },

    katharine_drexel_virgin: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 3, date: 3 },
    },

    damien_de_veuster_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 5, date: 10 },
    },

    isidore_the_farmer: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 5, date: 15 },
    },

    junipero_serra_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 7, date: 1 },
    },

    elizabeth_of_portugal: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 7, date: 5 },
    },

    kateri_tekakwitha_virgin: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 7, date: 14 },
    },

    camillus_de_lellis_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 7, date: 18 },
    },

    peter_claver_priest: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 9, date: 9 },
    },

    francis_xavier_seelos_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 10, date: 5 },
    },

    marie_rose_durocher_virgin: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 10, date: 6 },
    },

    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs: {
      precedence: Precedence.ProperMemorial_11b,
      martyrology: ['john_de_brebeuf_priest', 'isaac_jogues_priest', 'companions_martyrs'],
    },

    paul_of_the_cross_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 10, date: 20 },
    },

    frances_xavier_cabrini_virgin: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 11, date: 13 },
    },

    rose_philippine_duchesne_virgin: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 11, date: 18 },
    },

    miguel_agustin_pro_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 11, date: 23 },
    },

    // It is a holiday of obligation unless it occurs with Sunday:
    // then it is moved to the following Monday and while keeps its rank (solemnity),
    // it is not a holiday of obligation
    immaculate_conception_of_the_blessed_virgin_mary: {
      customLocaleKey: 'immaculate_conception_of_the_blessed_virgin_mary_patroness_of_the_usa',
      precedence: Precedence.ProperSolemnity_PrincipalPatron_4a,
      isHolyDayOfObligation: true,
      // isHolyDayOfObligation: () => this.dates.immaculateConceptionOfMary().day() === 0,
      titles: { append: [PatronTitle.PatronessOfTheUSA] },
      // afterBuild: (def) => {
      //   def.isHolyDayOfObligation = this.dates.immaculateConceptionOfMary().day() === 0;
      // },
    },
  },
};
