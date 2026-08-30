import { Inputs } from '@internal/generator';

import { CalendarDef } from '../../../calendar-def';
import { Africa } from '../../regions/africa';
import { NorthAfrica } from '../../regions/north-africa';

// src:
// - mr_fr_2021_ed3
// - https://en.wikipedia.org/wiki/Regional_Episcopal_Conference_of_North_Africa
// - https://en.wikipedia.org/wiki/Apostolic_Prefecture_of_Misurata
export class Libya_Misurata extends CalendarDef {
  ParentCalendars = [Africa, NorthAfrica];

  inputs: Inputs = {};
}
