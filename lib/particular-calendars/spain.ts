import { PatronTitle, Precedence, ProperCycle } from '@romcal/shared';

import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';
import { Europe } from './europe';

export class Spain extends CalendarDef {
  parentCalendar = Europe;

  inputs: Inputs = {
    eulogius_of_cordoba_bishop: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 1, date: 9 },
    },

    fructuosus_of_tarragona_bishop_and_augurius_of_tarragona_and_eulogius_of_tarragona_deacons_martyrs: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 1, date: 20 },
      martyrology: ['fructuosus_of_tarragona_bishop', 'augurius_of_tarragona_deacon', 'eulogius_of_tarragona_deacon'],
    },

    vincent_of_saragossa_deacon: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 1, date: 22 },
    },

    ildephonsus_of_toledo_bishop: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 1, date: 23 },
    },

    hermenegild_the_visigoths_martyr: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 4, date: 13 },
    },

    isidore_of_seville_bishop: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 4, date: 26 },
    },

    john_of_avila_priest: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 5, date: 10 },
    },

    isidore_the_farmer: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 5, date: 15 },
    },

    paschal_baylon_religious: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 5, date: 17 },
    },

    joaquina_of_saint_francis_of_assisi_de_vedruna_religious: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 5, date: 22 },
    },

    ferdinand_iii_of_castile: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 5, date: 30 },
    },

    maria_micaela_of_the_blessed_sacrament_desmaisieres_virgin: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 6, date: 15 },
    },

    pelagius_of_cordoba_martyr: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 6, date: 26 },
    },

    our_lady_of_mount_carmel: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 7, date: 16 },
    },

    james_apostle: {
      customLocaleId: 'james_apostle_patron_of_spain',
      precedence: Precedence.ProperSolemnity_PrincipalPatron_4a,
      titles: { append: [PatronTitle.PatronOfSpain] },
    },

    ezequiel_moreno_bishop: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 8, date: 19 },
    },

    teresa_of_jesus_jornet_ibars_virgin: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 8, date: 26 },
    },

    francis_borgia_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 10, date: 3 },
    },

    thomas_of_villanova_bishop: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 10, date: 10 },
    },

    mary_soledad_torres_acosta_virgin: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 10, date: 11 },
    },

    our_lady_of_the_pillar: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 10, date: 12 },
    },

    teresa_of_jesus_of_avila_virgin: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 10, date: 15 },
    },

    peter_of_alcantara_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 10, date: 19 },
    },

    leander_of_seville_bishop: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 11, date: 13 },
    },

    eulalia_of_merida_virgin: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 12, date: 10 },
    },

    john_of_the_cross_priest: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 12, date: 14 },
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 4 },
      properCycle: ProperCycle.ProperOfTime,
    },
  };
}
