import { CalendarDef } from '../../../calendar-def';
import { Asia } from '../../regions/asia';

import { Russia } from '.';

export class AsianRussia extends CalendarDef {
  ParentCalendars = [Asia, Russia];
}
