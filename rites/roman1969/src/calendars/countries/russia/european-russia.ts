import { CalendarDef } from '@internal/generator';

import { Europe } from '../../regions/europe';

import { Russia } from '.';

export class EuropeanRussia extends CalendarDef {
  ParentCalendars = [Europe, Russia];
}
