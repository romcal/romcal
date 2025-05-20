import { CalendarDef } from '../../../models/calendar-def';
import { Europe } from '../../regions/europe';

import { Russia } from '.';

export class EuropeanRussia extends CalendarDef {
  ParentCalendars = [Europe, Russia];
}
