import { CalendarDef } from '../../../models/calendar-def';
import { Inputs } from '../../../types/calendar-def';
import { Africa } from '../../regions/africa';
import { NorthAfrica } from '../../regions/north-africa';

// src:
// - mr_fr_2021_ed3
// - https://en.wikipedia.org/wiki/Regional_Episcopal_Conference_of_North_Africa
// - https://en.wikipedia.org/wiki/Diocese_of_Laghouat
export class Algeria_Laghouat extends CalendarDef {
  ParentCalendars = [Africa, NorthAfrica];

  inputs: Inputs = {};
}
