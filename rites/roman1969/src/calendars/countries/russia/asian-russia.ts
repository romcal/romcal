import { CalendarDef } from '@internal/generator';

import { Asia } from '../../regions/asia';

import { Russia } from '.';

export class AsianRussia extends CalendarDef {
  ParentCalendars = [Asia, Russia];
}
