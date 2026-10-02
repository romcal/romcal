import { CommonDefinition as Common, PatronTitle, Precedences } from '@internal/generator';
import type { Inputs, ParticularConfig } from '@internal/generator';

import { CalendarDef } from '../../../calendar-def';
import { Europe } from '../../regions/europe';

import { France_Albi } from './archdiocese-of-albi';
import { France_Auch } from './archdiocese-of-auch';
import { France_Lille } from './archdiocese-of-lille';
import { France_Lyon } from './archdiocese-of-lyon';
import { France_Paris } from './archdiocese-of-paris';
import { France_Toulouse } from './archdiocese-of-toulouse';
import { France_Angers } from './diocese-of-angers';
import { France_BayonneLescarOloron } from './diocese-of-bayonne-lescar-and-oloron';
import { France_Beauvais } from './diocese-of-beauvais';
import { France_Cahors } from './diocese-of-cahors';
import { France_CarcassonneNarbonne } from './diocese-of-carcassonne-and-narbonne';
import { France_Coutances } from './diocese-of-coutances';
import { France_Creteil } from './diocese-of-creteil';
import { France_GapEmbrun } from './diocese-of-gap-and-embrun';
import { France_Laval } from './diocese-of-laval';
import { France_Mende } from './diocese-of-mende';
import { France_Montauban } from './diocese-of-montauban';
import { France_Nanterre } from './diocese-of-nanterre';
import { France_Nimes } from './diocese-of-nimes';
import { France_Pamiers } from './diocese-of-pamiers';
import { France_PerpignanElne } from './diocese-of-perpignan-and-elne';
import { France_Rodez } from './diocese-of-rodez';
import { France_SaintDenis } from './diocese-of-saint-denis';
import { France_SaintFlour } from './diocese-of-saint-flour';
import { France_Strasbourg } from './diocese-of-strasbourg';
import { France_TarbesLourdes } from './diocese-of-tarbes-and-lourdes';
import { France_LourdesSanctuary } from './sanctuary-of-our-lady-of-lourdes';

export class France extends CalendarDef {
  ParentCalendars = [Europe];

  particularConfig: ParticularConfig = {
    epiphanyOnSunday: true,
    ascensionOnSunday: false,
    corpusChristiOnSunday: true,
  };

  inputs: Inputs = {
    // src: mr_fr_2021_ed3
    genevieve_of_paris_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 3 },
      commonsDef: [Common.Virgins, Common.MercyWorkers],
    },

    // src: mr_fr_2021_ed3
    remigius_of_reims_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 15 },
      commonsDef: Common.Bishops,
    },

    // src: mr_fr_2021_ed3
    our_lady_of_lourdes: {
      commonsDef: Common.None,
    },

    // src: mr_fr_2021_ed3
    bernadette_soubirous_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 2, date: 18 },
      commonsDef: [Common.Virgins, Common.Religious],
    },

    // src: mr_fr_2021_ed3
    louise_de_marillac_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 9 },
      commonsDef: Common.HolyWomen,
    },

    // src: mr_fr_2021_ed3
    ivo_of_kermartin_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 5, date: 19 },
      commonsDef: [Common.MercyWorkers, Common.Pastors],
    },

    // src: mr_fr_2021_ed3
    joan_of_arc_virgin: {
      customLocaleId: 'joan_of_arc_virgin_copatroness_of_france',
      precedence: Precedences.ProperMemorial_SecondPatron_11a,
      dateDef: { month: 5, date: 30 },
      titles: { append: [PatronTitle.CopatronessOfFrance] },
      commonsDef: Common.None,
    },

    // src: mr_fr_2021_ed3
    pothinus_of_lyon_bishop_blandina_of_lyon_virgin_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 2 },
      martyrology: ['pothinus_of_lyon_bishop', 'blandina_of_lyon_virgin', 'companions_martyrs'],
      commonsDef: Common.Martyrs,
    },

    // src: mr_fr_2021_ed3
    clotilde_of_burgundy: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 4 },
      commonsDef: Common.HolyWomen,
    },

    // src: mr_fr_2021_ed3
    john_mary_vianney_priest: {
      commonsDef: Common.None,
    },

    // src: mr_fr_2021_ed3
    assumption_of_the_blessed_virgin_mary: {
      customLocaleId: 'assumption_of_the_blessed_virgin_mary_patroness_of_france',
      titles: { append: [PatronTitle.PatronOfFrance] },
    },

    // src: mr_fr_2021_ed3
    louis_ix_of_france: {
      precedence: Precedences.ProperMemorial_11b,
      commonsDef: Common.None,
    },

    // src: mr_fr_2021_ed3
    caesarius_of_arles_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 8, date: 26 },
      commonsDef: Common.Bishops,
    },

    // src: mr_fr_2021_ed3
    joseph_of_calasanz_priest: {
      dateDef: { month: 8, date: 26 },
    },

    // src: mr_fr_2021_ed3
    our_lady_of_la_salette: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 19 },
      commonsDef: Common.BlessedVirginMary,
    },

    // src: mr_fr_2021_ed3
    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin: {
      customLocaleId: 'therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin_copatroness_of_france',
      titles: { append: [PatronTitle.CopatronessOfFrance] },
    },

    // src: mr_fr_2021_ed3
    dedication_of_consecrated_churches: {
      precedence: Precedences.ProperSolemnity_DedicationOfTheOwnChurch_4b,
      dateDef: { month: 10, date: 25 },
      alternativeTransferDateDefs: [{ dateDef: { month: 10, lastDayOfWeekInMonth: 0 } }],
      isOptional: true,
      commonsDef: Common.DedicationAnniversary_Inside,
    },
  };
}

export {
  France_Albi,
  France_Auch,
  France_Lille,
  France_Lyon,
  France_Paris,
  France_Angers,
  France_BayonneLescarOloron,
  France_Beauvais,
  France_Cahors,
  France_CarcassonneNarbonne,
  France_Coutances,
  France_Creteil,
  France_GapEmbrun,
  France_Laval,
  France_Mende,
  France_Montauban,
  France_Nanterre,
  France_Nimes,
  France_Pamiers,
  France_PerpignanElne,
  France_Rodez,
  France_SaintDenis,
  France_SaintFlour,
  France_Strasbourg,
  France_TarbesLourdes,
  France_Toulouse,
  France_LourdesSanctuary,
};
