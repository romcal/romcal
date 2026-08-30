import { Precedences } from '@internal/generator';
import type { Inputs } from '@internal/generator';

import { CalendarDef } from '../../../calendar-def';

import { France_TarbesLourdes } from './diocese-of-tarbes-and-lourdes';

// src:
// - ordo_fr_2025_province_ecclesiastique_de_toulouse
// - mr_fr_1974_ed1_region_apostolique_du_midi
// - https://www.lourdes-france.org/11-fevrier-premiere-apparition-de-marie-a-bernadette-soubirousfete-de-notre-dame-de-lourdes28e-journee-mondiale-du-malade/
export class France_LourdesSanctuary extends CalendarDef {
  ParentCalendars = [France_TarbesLourdes];

  inputs: Inputs = {
    our_lady_of_lourdes: {
      precedence: Precedences.ProperSolemnity_TitleOfTheOwnChurch_4c,
    },
  };
}
