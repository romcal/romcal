export enum CalendarScope {
  Gregorian = 'gregorian',
  Liturgical = 'liturgical',
}

export const CALENDAR_SCOPES = [CalendarScope.Gregorian, CalendarScope.Liturgical] as const;
